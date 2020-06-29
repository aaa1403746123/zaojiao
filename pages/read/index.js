import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据   swiperdata   latesthot  baby  felling day
   */
  data: {
    catelist:[
      {src:'../../svg/music.png',title:"少儿儿歌",type:'music'},
      {src:'../../svg/boat.png',title:"成语故事",type:'chenyu'},
      {src:'../../svg/tongyao.png',title:"幼儿童谣",type:'tongyao'},
      {src:'../../svg/xinge.png',title:"性格培养",type:'xinge'},
   ],
  babydata:[],
  fellingdata:[],
  todaydata:[]
  },

  getbabydata(){
    request({url:'/home/baby'}).then(res=>{
      var babydata=res.data.result
      this.setData({
        babydata
      })
    });
  },
  getxiguandata(){
    request({url:'home/xiguan'}).then(res=>{
      var fellingdata=res.data.result
        this.setData({
          fellingdata
        })
    });
  },
    gettodaydata(){
      request({url:'home/day'}).then(res=>{
        var todaydata=res.data.result
          this.setData({
            todaydata
          })
      });
  },
  onLoad: function (options) {
      this.getbabydata()
      this.getxiguandata()
      this.gettodaydata()
  },


})