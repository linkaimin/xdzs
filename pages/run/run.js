var app = getApp();
Page({
  
  data: {
        Irank: "",
        Iicon: "",
        Iname: "",
        Ipaiwei:"",
        Ipace: "",
        Iimg:"",
        Istyle:"",
        list:[],

   
  },
  onLoad: function (options) {
     var that = this
    wx.login({
      success: function(res) {
    wx.request({
      url: app.globalData.url+'onlogin',          //本地调试，是获取不到code的，所以要实现，还是得传服务
      data: {
        "code": res.code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
       console.log(res.data.openid)
       var OD=res.data.openid
      
        wx.request({
          url: app.globalData.url+'selectPace',
          method: 'GET',  
          data: {
          "openId": OD
           },
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            //将获取到的json数据，存在名字叫list的这个数组中
             
              that.setData(
              {
              list: res.data.data,
              Irank:res.data.mydata.Irank,
              Iicon:res.data.mydata.Iicon,
              Iname:res.data.mydata.Iname,
              Ipaiwei:res.data.mydata.Ipaiwei,
              Ipace:res.data.mydata.Ipace,
              Iimg:res.data.mydata.Iimg,
              Istyle:res.data.mydata.Istyle
            })
              console.log(res.data.data)
          }
        })
   }
})
  }
})
},

     
    // 页面初始化 options为页面跳转所带来的参数
  

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

 
 
  //获取元素自适应后的实际宽度


})