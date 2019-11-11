var bmap = require('../../libs/bmap-wx.js'); 

var app = getApp();
Page({ 
    getUserInfo:function(e){
        var nickName = e.detail.userInfo.nickName
        var userIcon = e.detail.userInfo.avatarUrl
        this.setData({
          nickName:nickName
       });
       console.log(nickName)
        var that = this;
    wx.login({
      success: function(res) {
        //console.log(app.globalData.url+'onlogin')
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //if (res.code) {
          
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
              //2、调用小程序API: wx.getWeRunData获取微信运动数据（加密的）；
              wx.getSetting({
                success: function (rese) {
                  if(rese.authSetting['scope.werun']===false){
                    wx.showModal({
                      title: '提示',
                      content: '请开启获取微信步数权限',
                      showCancel: false,
                      confirmText: '知道了'
                    })
                  }else{
                    wx.authorize({
                      scope: 'scope.werun',
                      success () {
          

              wx.getWeRunData({
                fail()
                { 
                  console.log("失败")
              }, 
                success(resRun) {
                  const encryptedData = resRun
                  wx.request({
                    url: app.globalData.url+'decrypt',         //记得更改
                    data: {
                      userId:OD,
                      encryptedData: resRun.encryptedData,
                      iv: resRun.iv,
                      sessionKey: res.data.session_key,
                      days:3,
                      userName: nickName,
                      userIcon: userIcon

                    },
                    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    // header: {}, // 设置请求的 header
                    success: function (resDecrypt) {

                     console.log(resDecrypt)

                    }
                  });
                }
              })
            }
          })
                    }
            }
          })
      }                        
    })
  }
})
        wx.switchTab({
        url: '../../pages/index/index',
        })
      },
    data: { 
        weatherData: '' ,
        runData:{},
        nickName:''
        
    }, 
    onLoad: function() { 
        var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
          ak: '7oH8YuCsw9wOgMG0aZTMBz1uaFjGLgQF' 
        }); 
        var fail = function(data) { 
            console.log(data) 
        }; 
        var success = function(data) { 
            var weatherData = data.currentWeather[0]; 
            weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' +'日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' +'天气：' + weatherData.weatherDesc + '\n' +'风力：' + weatherData.wind + '\n'; 
            that.setData({ 
                weatherData: weatherData 
            }); 
        } 
        // 发起weather请求 
        BMap.weather({ 
            fail: fail, 
            success: success 
        }); 
    } 
})