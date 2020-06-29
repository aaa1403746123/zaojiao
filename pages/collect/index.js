
Page({
    data: {
      delBtnWidth:160,
      data: [],
      isScroll:true,
      windowHeight:0,
      ishow:false
    },
    onLoad: function (options) {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            windowHeight: res.windowHeight
          });
        }
      });
      let collect=wx.getStorageSync('collect') ||"";
              var ishow=false;
              if(collect!==""){
                  ishow=true;
                  collect.map((v,i)=>{
                    v.right=0
                })
              }
              this.setData({
                  data:collect,
                  ishow
              })
          
    },
    drawStart: function (e) {
      // console.log("drawStart");  
      var touch = e.touches[0]
      for(var index in this.data.data) {
        var item = this.data.data[index]
        item.right = 0
      }
      this.setData({
        data: this.data.data,
        startX: touch.clientX,
      })
  
    },
    drawMove: function (e) {
      var touch = e.touches[0]
      var item = this.data.data[e.currentTarget.dataset.index]
      var disX = this.data.startX - touch.clientX
      
      if (disX >= 20) {
        if (disX > this.data.delBtnWidth) {
          disX = this.data.delBtnWidth
        }
        item.right = disX
        this.setData({
          isScroll: false,
          data: this.data.data
        })
      } else {
        item.right = 0
        this.setData({
          isScroll: true,
          data: this.data.data
        })
      }
    },  
    drawEnd: function (e) {
      var item = this.data.data[e.currentTarget.dataset.index]
      if (item.right >= this.data.delBtnWidth/2) {
        item.right = this.data.delBtnWidth
        this.setData({
          isScroll: true,
          data: this.data.data,
        })
      } else {
        item.right = 0
        this.setData({
          isScroll: true,
          data: this.data.data,
        })
      }
    },
    
    delItem: function (e) {
        let id=e.currentTarget.dataset.id;
        let collect=wx.getStorageSync('collect') ||" ";
       let i=collect.findIndex(v=>v._id==id)
       collect.splice(i,1)
       this.setData({
           data:collect
       })
       wx.setStorageSync('collect',collect)
    }
  })