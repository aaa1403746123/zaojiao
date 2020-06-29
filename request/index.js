let ajaxtimes=0
export const request=function(parmas){
    ajaxtimes++
    wx.showLoading({
        title: '加载中',
      })
  //const baseURL="http://localhost:3000/api/"
   const baseURL="https://ygdl.xyz:3002/api/"
    return new Promise((resolve,rejects)=>{
       wx.request({
           ...parmas,
           url:baseURL+parmas.url,
           timeout:4000,
        success:(res)=>{
        resolve(res)
        },
        fail:(err)=>{
            rejects(err)
        },
        complete:()=>{
            ajaxtimes--;
            if(ajaxtimes===0){
                wx.hideLoading()
            }
        }
       })
    })
}