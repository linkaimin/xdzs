//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   kind:"",
   tip:"",
   closable:""
  },

onLoad: function () {
  var that = this
      wx.request({
        url: app.globalData.url+'colleage/tip',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {       
            that.setData(
            {
              kind:res.data.data.kind,
              tip:res.data.data.tip,
              closable:res.data.data.closable
            //res代表success函数的事件对，data是固定的，list是数组
          })
            console.log(res.data)
        }
      })
   
   
  },

})
