// pages/time/time.js

var util=require("../../utils/util.js")
var app = getApp();
Page({




  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    water:" ",
    hospital:"",
    swim:"",
    book:"",
    eat:"",
    gongdian:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var TIME = util.formatTime(new Date());

    this.setData({
    
    time: TIME,
    
    }),

     wx.request({
     
            url: app.globalData.url+'colleage/time',
            headers: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              
               
                that.setData(
                {
                book:res.data.data.library,
                gongdian:res.data.data.electric,
                eat:res.data.data.hall,
                hospital:res.data.data.hospital,
                water:res.data.data.bath,
                swim:res.data.data.swim
              })
                console.log(res.data.data)
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