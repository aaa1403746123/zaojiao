 //app.js
 App({
    onLoad(){
       
    },
     onLaunch: function(options){
         var that=this
        wx.getSystemInfo({
            success(res){
            that.globalData.height_01 = res.windowHeight;
            }
            })
     },
     onShow: function(options){
 
     },
     onHide: function(){
 
     },
     onError: function(msg){
 
     },
     //options(path,query,isEntryPage)
     onPageNotFound: function(options){
 
     },
     globalData: {
        height_01:0
     }
 });