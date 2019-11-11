// pages/detail/detail.js
const { $Toast } = require('../../dist/base/index');
var app = getApp();
Page({  
  getUserInfo:function(e){
    var nickName = e.detail.userInfo.nickName
    var userIcon = e.detail.userInfo.avatarUrl
    this.setData({
      nickName:nickName
   });
   console.log(nickName)
  },
  formSubmit(e) 
  {
    var that = this; 
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
   if(e.detail.value.pinglun==null||e.detail.value.pinglun=='')
    {
        $Toast({
          content: '所有评论内容不能为空哦！',
          type: 'warning'
        });
   }else{
    $Toast({
      content: '评论成功！',
      type: 'success'
    });

 wx.request({ 

      url: app.globalData.url+'detail/comment',  
      data:{
          content:e.detail.value.pinglun,
          systemId:that.data.Tid,
          writer: app.globalData.userInfo.nickName,
          oppidA:OD
      },  
      method: 'POST',  
      header: {
        'content-type': 'application/json'
      },
      success:function(res) {  
        //console.log(that.data.nickName)   
      },  
      fail:function(res){  
        //console.log(that.data.nickName)   
      }  
  })
  // if (getCurrentPages().length != 0) {
  //   //刷新当前页面的数据
  //   getCurrentPages()[getCurrentPages().length - 1].onLoad()
  // }
  }
}
    })
  }
})
}
  ,
  
  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    name:"",
    time:"",
    detail:"",
    listPL:[],
    Tid:"",
    nickName:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Tid:options.id
    })
 
  var that = this
  wx.request({ 
        
    url: app.globalData.url+'detail/'+options.id,  
    data:{
   
    },  
    method: 'GET',  
    header: {
      'content-type': 'application/json'
    },
    success:function(res) {  
      console.log(res.data.data)
  
        that.setData({
           list: res.data.data,
           listPL: res.data.mydata
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