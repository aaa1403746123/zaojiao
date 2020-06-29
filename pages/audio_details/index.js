// audio.js
import {request} from '../../request/index'
const myaudio= wx.getBackgroundAudioManager();
Page({
  data: {
    isopen:true,
    currentTime:'',
    alltime:'',
    duration:'',
    isSelected:false,
    pic:'',
    title:'',
    alldata:[],
    index:0
  },
      Query:{
        _id:1
      },
  //收藏

  collect(){
    let isSelected=false
    let collect=wx.getStorageSync('collect')||[]
    let index=collect.findIndex(v=>v._id===this.data.alldata[this.data.index]._id)
    //如果不等于-1则表示找到了
    if(index!==-1){
      collect.splice(index,1)
      isSelected=false
      wx.showToast({
        title:"取消成功",
        icon:"success",
        mask:true
      })

    }else{
      collect.push(this.data.alldata[this.data.index])
      isSelected=true
      wx.showToast({
        title:"收藏成功",
        icon:"success",
        mask:true
      })
    }
    this.setData({
      isSelected
    })
    //改变完后设置回去
    wx.setStorageSync("collect",collect)
    //节流
    // clearTimeout(this.settime)
    // this.settime=setTimeout(()=>{
    //     // let p={
    //     //   iscollect=this.data.collect,
    //     //   tid="",
    //     // }
    //       this.query(this.data.collect)
    //   },1000)
  },
  query(q){
    console.log(q)
  },
    valuetime() {
      myaudio.onTimeUpdate(()=>{
        var m=parseInt(myaudio.duration/60)
        var s=parseInt(myaudio.duration-(m*60))
        var offsetm=parseInt(myaudio.currentTime/60)
        var offsets=parseInt(myaudio.currentTime-(offsetm*60))
      this.setData({
        currentTime:offsetm+'.'+offsets,
        alltime:m+"."+s,
        offset:myaudio.currentTime,
        duration:myaudio.duration
      })
  })
  },
  tostop(){
    // this.myaudio.pause()
    this.setData({
      isopen:!this.data.isopen
    })
    if(this.data.isopen){
      myaudio.play()
    }else{
     myaudio.pause()
    }
  myaudio.onEnded(() => {
  this.setData({
    isopen:false,
  })
  this.tonext()
  });
  myaudio.onPlay(()=>{ 
    this.setData({
      isopen:true
    });
  });
  myaudio.onPause(()=>{
    this.setData({
      isopen:false
    })
})
},
  slider1change(e){
     let time=e.detail.value
     myaudio.seek(time)
     return;
  },
  tonext(){
 
    if(this.data.index<this.data.alldata.length-1){
      var newindex=Number(this.data.index)+1
      this.isSelected(this.data.alldata[newindex])
         this.setData({
           index:newindex
         })
    }else{
      wx.showToast({
        title: '没有更多',
        icon: 'success',
        duration: 2000
      })
    return;
    }
  },
  toprivies(){
    if(this.data.index>0){
      var newindex=Number(this.data.index)-1
      this.isSelected(this.data.alldata[newindex])
         this.setData({
           index:newindex
         })
    }else{
      wx.showToast({
        title: '没有更多',
        icon: 'success',
        duration: 2000
      })
      return;
    }
    
  },
  isSelected(detaildata){
    let collect=wx.getStorageSync('collect') ||[];
    //some是否有一个符合条件有的化返回true
  
    let isSelected=collect.some(v=>{
      console.log(v._id,detaildata._id)
      return v._id==detaildata._id
    }
    )       
    this.setData({
      isSelected,
      pic:detaildata.pic,
      title:detaildata.title,
    })
    myaudio.src=detaildata.audiosrc
    myaudio.title = detaildata.title
    myaudio.onCanplay(()=>{ 
      myaudio.duration; 
      setTimeout(() => {
        var m=parseInt(myaudio.duration/60)
        var s=parseInt(myaudio.duration-(m*60))
        this.setData({
          alltime:m+"."+s,
        })
     }, 1000)
  })
  },
  onLoad(e){
    this.Query._id=e._id;
    request({url:'/home/detail',data:this.Query}).then((res)=>{
      this.setData({
        alldata:res.data.result
      })
      this.isSelected(this.data.alldata[0])
      this.tostop()
      this.valuetime()
})
  }
 
})