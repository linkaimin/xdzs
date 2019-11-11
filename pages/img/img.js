// pages/img/img.js
var app = getApp();
Page({
  data: {
    img_arr: [],
    title: '',
    detail:'',
    fruit: [{
      id: 1,
      name: '失物招领',
  }, {
      id: 2,
      name: '日常交流'
  }, {
      id: 3,
      name: '创意分享'
  }, {
      id: 4,
      name: '竞赛组队',
  }],
  current: "日常交流"
  },
  handleFruitChange({ detail = {} }) {
    this.setData({
        current: detail.value
    });
},
  formSubmit: function (e) {

    // var that=this
    // wx.request({ 
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }, 
    //   url: app.globalData.url+'post',  
    //   data:{
    //     'content': e.detail.value.content,   
    //     'title': e.detail.value.title,
    //     'category': that.data.current,
    //     'writer': app.globalData.userInfo.nickName
    //   },  
    //   method: 'POST',  
    //   header: {
   
    //   },
    //   success:function(res) {  
        // setTimeout(() => {
        //     wx.request({ 
              
        //       url: app.globalData.url+'postpics',  
        //       data:{
        //         'message': 'ok',   
        //       },  
        //       method: 'POST',  
        //       header: {
        //         'Content-Type': 'application/json'
        //       },
        //       success:function(res) {  
                   
        //       },  
        //       fail:function(res){  
           
        //       }  
        //   }) 
        // }, 2000);  
  //      console.log('submit');  
  //     },  
  //     fail:function(res){  
  //         console.log('submit fail');  
  //     }  
  // }) 
    this.upload(e)
  },
/**
 * 问题：
 *一张图片传
 */
  upload: function (e) {
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
if(that.data.img_arr[0]==null)
{
  wx.request({ 
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }, 
      url: app.globalData.url+'post',  
      data:{
        'content': e.detail.value.content,   
        'title': e.detail.value.title,
        'category': that.data.current,
        "oppidA":OD
      },  
      method: 'POST', 
      success: function (res) {          if (res) {
        wx.showToast({
          title: '已提交至管理员审核，请耐心等待！',
          duration: 3000
        });
        setTimeout(() => {
           wx.switchTab({
          url: '../../pages/list/list',
          })
        }, 1000);
       
      }} 
    }
  )
}
else{
    setTimeout(() => {
   
    //for (var i = 0; i < (this.data.img_arr.length); i++) {
     console.log(that.data.img_arr[0])
      wx.uploadFile({
        url: app.globalData.url+'post',
        filePath: that.data.img_arr[0],
        name: 'file',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        formData: {
          'content': e.detail.value.content,   
          'title': e.detail.value.title,
          'category': that.data.current,
          "oppidA":OD
     }
     ,
        success: function (res) {
           
          if (res) {
            wx.showToast({
              title: '已提交至管理员审核，请耐心等待！',
              duration: 3000
            });
            setTimeout(() => {
               wx.switchTab({
              url: '../../pages/list/list',
              })
            }, 1000);
           
          }
        }
     
      })
      //console.log('file'+i)
    //}

    
    that.setData({
      formdata: ''
    })
     
  }, 1000);
}
}
})
}
})
  },
  
  upimg: function () {
    var that = this;
    if (this.data.img_arr.length  < 1) {
      wx.chooseImage({
        count:1,
        sizeType: ['original', 'compressed'],
        success: function (res) {
          that.setData({
            img_arr: that.data.img_arr.concat(res.tempFilePaths)
          })
        }
      })
    
    } 
    // if (this.data.img_arr.length  != 1) { 
    //   wx.showToast({
    //     title: '最多上传1张图片',
    //     icon: 'loading',
    //     duration: 3000
    //   });
    // }
  },

  onLoad: function() {
  
  },




}



);
