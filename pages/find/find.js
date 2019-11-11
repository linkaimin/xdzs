// pages/find/find.js
var app = getApp();
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    keyword:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name)
    var that=this
    wx.request({ 
      
      url: app.globalData.url+'community/search',  
      data:{
        keyword:options.find
      },  
      method: 'GET',  
      header: {
        'content-type': 'application/json'
      },
      success:function(res) {  

      that.setData(
        {
          list: res.data.data
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