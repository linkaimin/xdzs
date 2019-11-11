const { $Toast } = require('../../dist/base/index');
var app = getApp();
Page({

  delete(myid){
    console.log(myid.currentTarget.id)
  wx.request({
          url: app.globalData.url+'my/delete/'+myid.currentTarget.id,
          headers: {
            'Content-Type': 'application/json'
          },
    method: 'POST', 
      success: function (res) {
      $Toast({
        content: '删除成功！',
        type: 'success'
      })
    }
    
  })
  },

  /**
   * 页面的初始数据
   */
  data: {
    myid:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function (options){
  
      var that = this
    wx.login({
      success: function(res) {
     wx.request
    ({
            url: app.globalData.url+'onlogin',
      data: {
        "code": res.code
      },
    
      header: {
        'content-type': 'application/json' // 默认值
      },
            success: function (res) {
        wx.request({
          url: app.globalData.url+'my/'+res.data.openid,
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            //将获取到的json数据，存在名字叫list的这个数组中
             
              that.setData(
              {
              list: res.data.data,
              //res代表success函数的事件对，data是固定的，list是数组
            })
              console.log(res.data)
          }
        })
  }
})  
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
    var that = this
    wx.login({
      success: function(res) {
     wx.request
    ({
            url: app.globalData.url+'onlogin',
      data: {
        "code": res.code
      },
    
      header: {
        'content-type': 'application/json' // 默认值
      },
            success: function (res) {
        wx.request({
          url: app.globalData.url+'my/'+res.data.openid,
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            //将获取到的json数据，存在名字叫list的这个数组中
             
              that.setData(
              {
              list: res.data.data,
              //res代表success函数的事件对，data是固定的，list是数组
            })
              console.log(res.data)
          }
        })
  }
})  
      }
    })      
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