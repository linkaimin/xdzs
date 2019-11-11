// pages/timeC/timeC.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    detail:``,
    time:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options.name)
  var that = this
  wx.request({ 
        
    url: app.globalData.url+'colleage/tip/detail/'+options.name,  
    data:{
   
    },  
    method: 'GET',  
    header: {
      'content-type': 'application/json'
    },
    success:function(res) {  
      console.log(res.data.data)
        that.setData({
           title: res.data.data.title,
           detail: res.data.data.detail,
           time: res.data.data.time
        })
    },  
    fail:function(res){  
        console.log('submit fail');  
    }  
}) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})