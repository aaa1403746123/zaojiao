import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      audioList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
			var p={
				"type":option.type
			}
    request({url:"/home/allList",data:p}).then(res=>{
    let audioList=res.data.result
	  	this.setData({
			audioList
		})
	 })
      
  }
})
