// pages/search/index.js
import {request} from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      searchdata:[],
      isFocus:false,
      svaule:""

  },
  setTime:-1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  btntap(){
    this.setData({
      searchdata:[],
      isFocus:false,
      svalue:''
    })
  },
handleinput(e){
  let value=e.detail.value;
  if(!value.trim()){
    this.setData({
      searchdata:[],
      isFocus:false
    })
    return;
  }
  this.setData({
    isFocus:true
  })
  clearTimeout(this.setTime)
  this.setTime=setTimeout(()=>{
    this.qsearch(value)
  },1000)
 
},
qsearch(query){
  request({url:"home/search",data:{query}}).then(res=>{
   this.setData({
    searchdata:res.data.result
   })
  })
}
})