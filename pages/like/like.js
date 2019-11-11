// pages/list/list.js
var app = getApp();
const { $Toast } = require('../../dist/base/index');
Page({  

    getUserInfo:function(e){
      var that = this
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
  
    var userInfo = e.detail.userInfo
    console.log(userInfo.nickName)
    wx.request({    
        url: app.globalData.url+'time',  
        data:{
          'userName': e.detail.userInfo.nickName, 
             "openId":OD
        },  
        method: 'GET',  
        header: {
          'content-type': 'application/json'
        },
        success:function(res) {  
            that.setData(
                {
                flag : res.data
              }
            )
            console.log(res) 
        }, 
        
        fail:function(res){  
            console.log('submit fail');  
        },  
    })
}
})
}
})
  },
    formSubmit(e) 
  {
    var that = this
    console.log(this.data.flag);  
    setTimeout(function () { 
    if(that.data.flag == false)
    {
      $Toast({
          content: '投票成功！',
          type: 'success'
        })


      wx.request({    
        url: app.globalData.url+'zan',  
        data:{
          'like1': e.detail.value.like1,   
          'like2': e.detail.value.like2,   
          'like3': e.detail.value.like3,   
          'like4': e.detail.value.like4,   
          'like5': e.detail.value.like5, 
          'like6': e.detail.value.like6,  
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
        },  
    }) 
}else{
    $Toast({
      content: '投票失败！可能是网络问题或24小时内重复投票哦！',
      type: 'warning'
    })
  }
  
}
, 1750)
  },
    data: {
    flag:"true",
    likeSome1:"", 
    likeSome2:"", 
    likeSome3:"", 
    likeSome4:"", 
    likeSome5:"", 
    likeSome6:"", 
    selectArray: [
    {
        "id": "T020002",
        "text": "易经与中国文化"
    }, {
        "id": "T170007",
        "text": "儒家经典"
    }, {
        "id": "T170003",
        "text": "生态文明之中华传统"
    }, {
        "id": "T170006",
        "text": "西方哲学概论"    
    }, {
        "id": "T170004",
        "text": "中国传统文化"
    }, {
        "id": "T120004",
        "text": "希腊罗马神话"
    }, {
        "id": "T050011",
        "text": "女性文学赏析"
    }, {
        "id": "T050005",
        "text": "中国古代女性专题"
    }, {
        "id": "T050010",
        "text": "中国现当代散文赏析"
    }, {
        "id": "T100001",
        "text": "西方家具史"
    }, {
        "id": "T010001",
        "text": "中国茶文化"
    }, {
        "id": "T120002",
        "text": "俄罗斯文学名著鉴赏"
    }, {
        "id": "T050008",
        "text": "古典诗词导读"
    }, {
        "id": "T200004",
        "text": "考古发现与探索"
    }, {
        "id": "T200005",
        "text": "国学智慧"
    }, {
        "id": "T200006",
        "text": "明史十讲"
    }, {
        "id": "T200007",
        "text": "先秦君子风范"
    }, {
        "id": "T200009",
        "text": "中国古典小说巅峰—四大名著鉴赏"
    }, {
        "id": "T200010",
        "text": "西方哲学智慧"
    }, {
        "id": "T200011",
        "text": "走进《黄帝内经》"
    }, {
        "id": "T200013",
        "text": "西方文化名著导读"
    }, {
        "id": "T200014",
        "text": "逻辑和批判性思维"
    }, {
        "id": "T200015",
        "text": "文物精品与中华文明"
    }, {
        "id": "T200043",
        "text": "世界古代文明"

    }, {
        "id": "T200028",
        "text": "神韵诗史"
    }, {
        "id": "T020001",
        "text": "动物与中国传统文化"
    }, {
        "id": "T120001",
        "text": "日本社会文化"
    }, {
        "id": "T120003",
        "text": "英美文学名篇欣赏"
    }, {
        "id": "T050012",
        "text": "大学语文"
    }, {
        "id": "T300005",
        "text": "孙子兵法中的思维智慧"
    }, {
        "id": "T400001",
        "text": "西藏的历史与文化"
    }, {
        "id": "T050007",
        "text": "中国当代诗歌选讲"
    }, {
        "id": "T050006",
        "text": "中国先秦政治文化导论"
    }, {
        "id": "T050009",
        "text": "中国现代小说赏析"
    }, {
        "id": "T280003",
        "text": "文学概论"
    }, {
        "id": "T280004",
        "text": "西方传统文化"
    }, {
        "id": "T400007",
        "text": "建筑文化鉴赏"
    }, {
        "id": "T400008",
        "text": "中国古代家具文化"
    }],
    selectArray2: [
        {
            "id": "T100004",
            "text": "室内装修风格与鉴赏"
        }, {
            "id": "T100007",
            "text": "书法与篆刻"
        }, {
            "id": "T080012",
            "text": "旅游资源欣赏"
        }, {
            "id": "T250001",
            "text": "艺术导论"
        }, {
            "id": "T250002",
            "text": "音乐欣赏"
        }, {
            "id": "T090001",
            "text": "风景名胜与历史名城赏析"     
        }, {
            "id": "T090005",
            "text": "中外古典园林赏析"            
        }, {
            "id": "T080017",
            "text": "旅游美学"           
        }, {
            "id": "T090006",
            "text": "美容与化妆艺术" 
        }, {
            "id": "T220002",
            "text": "建筑艺术欣赏" 
        }, {
            "id": "T100003",
            "text": "摄影技术与艺术" 
        }, {
            "id": "T040001",
            "text": "手绘创作与文化" 
        }, {
            "id": "T090004",
            "text": "室内花卉与装饰" 
        }, {
            "id": "T200008",
            "text": "中华诗词之美" 
        }, {
            "id": "T200019",
            "text": "辩论修养" 
        }, {
            "id": "T200044",
            "text": "影视鉴赏" 
        }, {
            "id": "T200038",
            "text": "20世纪西方音乐" 
        }, {
            "id": "T200029",
            "text": "古典音乐欣赏" 
        }, {
            "id": "T200049",
            "text": "美学与人生" 
        }, {
            "id": "T200042",
            "text": "现代礼仪" 
        }, {
            "id": "T200035",
            "text": "艺术与审美" 
        }, {
            "id": "T200039",
            "text": "影片精读" 
        }, {
            "id": "T200036",
            "text": "珠宝鉴赏" 
        }, {
            "id": "T100005",
            "text": "家具鉴赏" 
        }, {
            "id": "T100006",
            "text": "硬笔书法" 
        }, {
            "id": "T140005",
            "text": "汽车造型设计与欣赏" 
        }, {
            "id": "T050004",
            "text": "演讲与口才" 
        }, {
            "id": "T090003",
            "text": "插花与花艺设计" 
        }, {
            "id": "T300003",
            "text": "世界著名博物馆艺术经典" 
        }, {
            "id": "T400005",
            "text": "民俗资源与旅游" 
        }, {
            "id": "T400002",
            "text": "漫画艺术欣赏与创作" 
        }, {
            "id": "T090002",
            "text": "观赏植物鉴别与欣赏" 
        }, {
            "id": "T280002",
            "text": "校园微电影创作实务" 
        }, {
            "id": "T280005",
            "text": "中西方绘画与手工艺珍品鉴赏" 
        }, {
            "id": "T280006",
            "text": "饮食文化与艺术" 
        }, {
            "id": "T4100080",
            "text": "当水墨邂逅油彩" 
        }, {
            "id": "T4200010",
            "text": "莎士比亚戏剧赏析" 
        }],
        selectArray3: 
    [{
            "id": "T020006",
            "text": "趣味毛发学"        
        }, {
            "id": "T030003",
            "text": "生活中的物理学" 
        }, {
            "id": "T030002",
            "text": "物理学与人类文明"            
        }, {
            "id": "T070001",
            "text": "基础生命科学"
        }, {
            "id": "T070003",
            "text": "基因的奥秘"
        }, {
            "id": "T100008",
            "text": "高分子世界"
        }, {
            "id": "T100009",
            "text": "居住环境与健康"
        }, {
            "id": "T020003",
            "text": "观赏动物学"
        }, {
            "id": "T020005",
            "text": "营养与健康"
        }, {
            "id": "T030004",
            "text": "数学文化与数学思维"
        }, {
            "id": "T010002",
            "text": "保护生物学"
        }, {
            "id": "T010007",
            "text": "林学概论"
        }, {
            "id": "T010003",
            "text": "森林与人类"
        }, {
            "id": "T010010",
            "text": "森林火灾应急避险与急救逃生"
        }, {
            "id": "T200001",
            "text": "从爱因斯坦到霍金的宇宙"
        }, {
            "id": "T400009",
            "text": "生物技术与现代生活"
        }, {
            "id": "T410001",
            "text": "EXCEL中的数据分析"
        }, {
            "id": "T410002",
            "text": "人工智能与智能机械改变生活"
        }, {
            "id": "T200002",
            "text": "从“愚昧”到“科学”—科学技术简史"
        }, {
            "id": "T200003",
            "text": "魅力科学"
        }, {
            "id": "T200016",
            "text": "天文学新概论"
        }, {
            "id": "T200017",
            "text": "数学文化"
        }, {
            "id": "数学文化",
            "text": "家用化学品"
        }, {
            "id": "T020004",
            "text": "微生物与健康"
        }, {
            "id": "T030001",
            "text": "数学建模与竞赛导论"
        }, {
            "id": "T010006",
            "text": "环境污染与人群健康"
        }, {
            "id": "T010005",
            "text": "转基因食品及其安全性"
        }, {
            "id": "T010008",
            "text": "昆虫世界与人类社会"
        }, {
            "id": "T010009",
            "text": "生态：人类与地球未来"
        }, {
            "id": "T060008",
            "text": "ACM程序设计"
        }, {
            "id": "T300009",
            "text": "走进航空航天"
        }, {
            "id": "T400006",
            "text": "星海求知：天文学的奥秘"
        }, {
            "id": "T060001",
            "text": "计算思维"
        }, {
            "id": "T280007",
            "text": "生活中的新能源--生物质能源"
        }, {
            "id": "T280008",
            "text": "舌尖上的植物学"
        }, {
            "id": "T280009",
            "text": "高等数学思想方法选讲"
        }, {
            "id": "T290001",
            "text": "食用菌的营养保健与开发利用"
        }, {
            "id": "T290009",
            "text": "认识地球"
        }, {
            "id": "T300001",
            "text": "解密生命“天书”"
        }],
        selectArray4: 
    [{
        "id": "T080009",
        "text": "管理学"        
    }, {
        "id": "T080007",
        "text": "金融学与好的社会"
    }, {
        "id": "T080008",
        "text": "生活中的经济学"
    }, {
        "id": "T080010",
        "text": "资产评估"
    }, {
        "id": "T050001",
        "text": "当前中国社会热点问题评析"        
    }, {
        "id": "T050002",
        "text": "公共政策与公民生活"
    }, {
        "id": "T080014",
        "text": "推销技巧实训"
    }, {
        "id": "T200047",
        "text": "管理百年"
    }, {
        "id": "T080002",
        "text": "管理沟通"
    }, {
        "id": "T080005",
        "text": "环境保护与可持续发展"
    }, {
        "id": "T080003",
        "text": "理财基础"
    }, {
        "id": "T080001",
        "text": "趣味运筹学"
    }, {
        "id": "T170001",
        "text": "当代世界经济与政治"
    }, {
        "id": "T170002",
        "text": "生态文明概论"
    }, {
        "id": "T300004",
        "text": "商业伦理与东西方决策智慧"
    }, {
        "id": "T300006",
        "text": "开启疑案之门的金钥匙——司法鉴定"
    }, {
        "id": "T300007",
        "text": "证券投资分析与智慧人生"
    }, {
        "id": "T400004",
        "text": "传统文化与现代经营管理"
    }, {
        "id": "T400003",
        "text": "宪法的魅力"
    }, {
        "id": "T050003",
        "text": "个性差异与组织行为管理"
    }, {
        "id": "T290002",
        "text": "国际经贸热点问题解读"
    }, {
        "id": "T290008",
        "text": "保险学原理与实务"
    }, {
        "id": "T290003",
        "text": "社会保障制度专题"
    }, {
        "id": "T410003",
        "text": "企业法律风险管理"
    }, {
        "id": "T410004",
        "text": "性社会学"
    }, {
        "id": "T4100070",
        "text": "大学生劳动就业法律问题解读"
    }, {
        "id": "T4100090",
        "text": "营运资金管理"
    }, {
        "id": "T4200030",
        "text": "西方经济学的奇妙世界"
    }],
    selectArray5: 
[{ 
        "id": "T210005",
        "text": "创办你的企业 (SYB)"
    }, {
        "id": "T210007",
        "text": "大学生创新创业导论"
    }, {
        "id": "T080011",
        "text": "人力资源管理"
    }, {
        "id": "T080020",
        "text": "电子商务与网络创业"
    }, {
        "id": "T080021",
        "text": "营销策划理念创新与案例解读"
    }, {
        "id": "T080022",
        "text": "品牌策划与管理"
    }, {
        "id": "T210002",
        "text": "职业生涯规划"
    }, {
        "id": "T210001",
        "text": "大学生创业基础"
    }, {
        "id": "T210006",
        "text": "创业计划书与创业大赛实训"
    }, {
        "id": "T080018",
        "text": "商务谈判"
    }, {
        "id": "T080019",
        "text": "创业管理"
    }, {
        "id": "T200030",
        "text": "创业管理实战"
    }, {
        "id": "T200031",
        "text": "创业精神与实践"
    }, {
        "id": "T200032",
        "text": "创业创新领导力"
    }, {
        "id": "T200033",
        "text": "创业创新执行力"
    }, {
        "id": "T200046",
        "text": "创行—大学生创新创业实务"
    }, {
        "id": "T200041",
        "text": "创业企业战略与机会选择"
    }, {
        "id": "T200037",
        "text": "职场沟通"
    }, {
        "id": "T200040",
        "text": "职业素质养成"
    }, {
        "id": "T080015",
        "text": "创业法律实务"
    }, {
        "id": "T200012",
        "text": "创新工程实践"
    }, {
        "id": "T080004",
        "text": "企业管理"
    }, {
        "id": "T060007",
        "text": "创意思维与创新方法"
    }, {
        "id": "T210003",
        "text": "大学生就业指导"
    }, {
        "id": "T210004",
        "text": "大学生 KAB创业基础"
    }, {
        "id": "T410005",
        "text": "创新与企业家精神"
    }, {
        "id": "T4200040",
        "text": "创业训练营"
    }],
    selectArray6: 
[{ 
        "id": "T150001",
        "text": "橄榄球"
    }, {
        "id": "T050013",
        "text": "大学生恋爱心理"
    }, {
        "id": "T050015",
        "text": "婚姻、爱情、家庭与法"
    }, {
        "id": "T050016",
        "text": "情绪智商与压力管理"
    }, {
        "id": "T060002",
        "text": "Java跨学科程序设计方法"
    }, {
        "id": "T060005",
        "text": "计算机网络技术与应用"
    }, {
        "id": "T120009",
        "text": "法语中级"
    }, {
        "id": "T100011",
        "text": "标志设计"
    }, {
        "id": "T100013",
        "text": "家居中的人体工程学"
    }, {
        "id": "T020008",
        "text": "动物保护概论"
    }, {
        "id": "T020009",
        "text": "观赏鱼饲养与鉴赏"
    }, {
        "id": "T020007",
        "text": "户外安全与野外生存"
    }, {
        "id": "T140004",
        "text": "汽车使用基础"
    }, {
        "id": "T140001",
        "text": "汽车文化"
    }, {
        "id": "T140002",
        "text": "汽车知识"
    }, {
        "id": "T150002",
        "text": "户外运动"
    }, {
        "id": "T150021",
        "text": "健美操"
    }, {
        "id": "T150003",
        "text": "篮球裁判"
    }, {
        "id": "T150022",
        "text": "轮滑"
    }, {
        "id": "T150004",
        "text": "排球提高班"
    }, {
        "id": "T150023",
        "text": "乒乓球"
    }, {
        "id": "T150005",
        "text": "器械健身"
    }, {
        "id": "T150006",
        "text": "室内篮球提高班(男生)"
    }, {
        "id": "T150007",
        "text": "手球"
    }, {
        "id": "T150008",
        "text": "跆拳道"
    }, {
        "id": "T150009",
        "text": "太极拳"
    }, {
        "id": "T150010",
        "text": "体育舞蹈"
    }, {
        "id": "T150011",
        "text": "田径裁判"
    }, {
        "id": "T150012",
        "text": "拓展训练"
    }, {
        "id": "T150013",
        "text": "网球"
    }, {
        "id": "T150014",
        "text": "武术"
    }, {
        "id": "T150015",
        "text": "游泳选修(基础班)"
    }, {
        "id": "T150016",
        "text": "游泳选修(提高班)"
    }, {
        "id": "T150017",
        "text": "瑜伽"
    }, {
        "id": "T150018",
        "text": "羽毛球"
    }, {
        "id": "T150019",
        "text": "足球"
    }, {
        "id": "T150025",
        "text": "英式橄榄球"
    }, {
        "id": "T150024",
        "text": "散打"
    }, {
        "id": "T200045",
        "text": "大学生爱情兵法"
    }, {
        "id": "T200050",
        "text": "大学生性健康修养"
    }, {
        "id": "T200048",
        "text": "健康生活 预防癌症"
    }, {
        "id": "T260001",
        "text": "信息资源检索与利用"
    }, {
        "id": "T260002",
        "text": "专利申请实务"
    }, {
        "id": "T060006",
        "text": "计算机等级考试二级C语言程序设计应试技巧"
    }, {
        "id": "T120006",
        "text": "法语入门"
    }, {
        "id": "T280001",
        "text": "大学生健康教育"
    }, {
        "id": "T100012",
        "text": "家居设计"
    }, {
        "id": "T140003",
        "text": "道路交通安全法概论"
    }, {
        "id": "T080016",
        "text": "生活中的消费者权益保护"
    }, {
        "id": "T080013",
        "text": "预测与决策方法"
    }, {
        "id": "T120005",
        "text": "德语入门"
    }, {
        "id": "T120008",
        "text": "俄语入门"
    }, {
        "id": "T120007",
        "text": "日语入门"
    }, {
        "id": "T300002",
        "text": "艾滋病、性与健康"
    }, {
        "id": "T300008",
        "text": "关爱生命——急救与自救技能"
    }, {
        "id": "T050014",
        "text": "消费心理学"
    }, {
        "id": "T050017",
        "text": "心理疾病与预防"
    }, {
        "id": "T060003",
        "text": "基于经典算法的C程序设计"
    }, {
        "id": "T060004",
        "text": "网页多媒体设计"
    }, {
        "id": "T220001",
        "text": "大学生心理成长"
    }, {
        "id": "T290004",
        "text": "工程心理学导论"
    }, {
        "id": "T290005",
        "text": "手机APP设计开发"
    }, {
        "id": "T290006",
        "text": "大学生情感与人生"
    }, {
        "id": "T290007",
        "text": "汽车概论"
    }, {
        "id": "T410006",
        "text": "毕生发展心理学"
    }, {
        "id": "T4200020",
        "text": "口腔科学"
}],
    },
    getDate1:function(e){
        this.setData({
            likeSome1: e.detail
          })
    },
    getDate2:function(e){
        this.setData({
            likeSome2: e.detail
          })
    },
    getDate3:function(e){
        this.setData({
            likeSome3: e.detail
          })
    },
    getDate4:function(e){
        this.setData({
            likeSome4: e.detail
          })
    },    
    getDate5:function(e){
        this.setData({
            likeSome5: e.detail
          })
    },    
    getDate6:function(e){
        this.setData({
            likeSome6: e.detail
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