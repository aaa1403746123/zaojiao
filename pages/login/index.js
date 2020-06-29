import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // getUserInfo(e){
  //   const {userInfo}=e.detail;
  //   wx.login({
  //     success (res) {
  //       if (res.code) {
  //        request({url:'home/login',data:{code:res.code},method:'post'}).then(res=>{
  //           let oppeninfo=res.data.data;
  //           userInfo.oppeninfo=oppeninfo
  //           wx.setStorageSync('userInfo',userInfo)
  //           wx.navigateBack({
  //             delta:1
  //           })
  //        }).catch(err=>{
  //          wx.showToast({
  //            title:'网络错误',
  //            icon:'none'
  //          })
  //          setTimeout(function(){
  //           wx.navigateBack({
  //             delta:1
  //           })
  //          },1000)
          
  //        })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   })
  // }
  getUserInfo(e){
      const {userInfo}=e.detail;
      wx.setStorageSync('userInfo',userInfo)
      wx.navigateBack({
                    delta:1
                  })
  }
})