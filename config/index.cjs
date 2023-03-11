/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3c82bfe5c75d1538',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cdfa8990cd758045ed36693ea94fcd45',

  PROVINCE: '湖北',
  CITY: '鄂州',
  
  SWITCH: { 
     //天气
   weather: true,
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
  },

  USERS: [
    { // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
       horoscopeDateType: '今日',
      // 想要发送的人的名字
      name: '小鸣',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofurH5nOct3pMkjUJlnyhpaTpjQk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	A4bkrnUkX97F8zK6hJxOV6aQowmasmXXj3e5ALQcRvQ',
     
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小小鸣', year: '2000', date: '02-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '03-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-09' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wCIlyOjMojMwaOnfnR6AzL98es81P5Xl6JBTrPcZH2M',

  CALLBACK_USERS: [
    {
      name: 'うるさい',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofurH5nOct3pMkjUJlnyhpaTpjQk',
    }
  ],

}

module.exports = USER_CONFIG

