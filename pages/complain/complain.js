// pages/complain/complain.js
var app = getApp();
const { $Toast } = require('../../dist/base/index');
Page({

  formSubmit(e) {
    var that = this; 
    console.log(e.detail.value)
    if(e.detail.value.name==null||e.detail.value.number==null||e.detail.value.phoneNumber==null||e.detail.value.collageMajor==null||e.detail.value.detail==null||e.detail.value.name==''||e.detail.value.number==''||e.detail.value.phoneNumber=='' ||e.detail.value.collageMajor=='' ||e.detail.value.detail=='')
    {
        $Toast({
          content: '所有填写内容都不能为空哦！',
          type: 'warning'
        });
   }else{
    $Toast({
      content: '提交成功！',
      type: 'success'
    });
    wx.request({ 
      
      url: app.globalData.url+'addFan',  
      data:{
        'name': e.detail.value.name,   
        'number': e.detail.value.number,   
        'phoneNumber': e.detail.value.phoneNumber,   
        'collageMajor': e.detail.value.collageMajor,   
        'detail': e.detail.value.detail,   
      },  
      method: 'POST',  
      header: {
        'content-type': 'application/json'
      },
      success:function(res) {  
        console.log('submit success');    
      },  
      fail:function(res){  
          console.log('submit fail');  
      }
  }) 
}
},

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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