// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow(){
      const userinfo=wx.getStorageSync("userInfo");
      this.setData({
        userinfo
      })
  } 
})