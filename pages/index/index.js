    import {request} from '../../request/index.js'
Page({
    data: {
        swiperdata:[],
        catelist:[
            {src:'../../svg/r.png',title:"童话故事",type:'fairy'},
            {src:'../../svg/bei.png',title:"少儿科普",type:'science'}
    ],
	latesthot:[]
    },
    getswiperdata(){
            request({url:"/home/swiperdata"}).then((res)=>{
                let swiperdata=res.data.result
                this.setData({
                    swiperdata
                })
            })
			},
	getlatesthot(){
		request({url:"/home/latesthot"}).then(res=>{
			let latesthot=res.data.result
			this.setData({
				latesthot
			})
		})
	},
    onLoad: function(options){
       this.getswiperdata()
	   this.getlatesthot()
    }
});