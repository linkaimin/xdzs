// pages/list/list.js
var app = getApp();
const { $Toast } = require('../../dist/base/index');
Page({

  
  formSubmit(e) {
    var that = this; 
    console.log(e.detail.value)
    if(e.detail.value.userName==null||e.detail.value.userNum==null||e.detail.value.userPhone==null||e.detail.value.areaLocation==null||e.detail.value.areaContext==null||e.detail.value.userName==''||e.detail.value.userNum==''||e.detail.value.userPhone=='' ||e.detail.value.areaLocation=='' ||e.detail.value.areaContext=='')
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
        
         url: app.globalData.url+'addUser',  
         data:{
           'userName': e.detail.value.userName,   
           'userNum': e.detail.value.userNum,   
           'userPhone': e.detail.value.userPhone,   
           'areaLocation': e.detail.value.areaLocation,   
           'areaContext': e.detail.value.areaContext,   
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
  onLoad: function () {
 
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