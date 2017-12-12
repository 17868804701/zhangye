Page({
 data: {
  question: [
   { title: "河姆渡和半坡原始居民分别种植水稻和粟，决定我国南北方种植农作物不同的最主要原因是（）?", answer: ["A.劳动工具", "B.自然条件 ", "C.饮食习惯", "D.生产技术", "E.化学技术"] },
   { title: "西周末年，周幽王上演了一场“烽火戏诸侯”的闹剧。诸侯率兵前往护卫周王是遵守了（）?", answer: ["A.封建制的法规", "B.世袭制的传统", "C.分封制的义务", "D.禅让制的规则"] },
   { title: "秦朝统治者打击儒学，西汉统治者却推崇儒学，导致这一变化的原因是：（   ）?", answer: ["A.国情的变化需要 ", "B.农民战争的推动  ", "C.儒学自身的发展", "D.统治者个人的喜好"] },
   { title: "“宋代经济的大发展，特别是商业方面的发展，或许可以恰当地称之为中国的‘商业革命’。”宋代商业发展突出表现是（  ）?", answer: ["A.四川地区出现了世界上最早的纸币", "B.太湖流域已成为全国最重要的粮仓", "C.江南的青瓷成为人们的日常生活用品", "D.长安成为当时繁华的国际性大都会"] },
   { title: "民间有“明修长城清修庙”的说法，这反映了清朝的统治者确实实行了一些颇有远见卓识的民族政策，对边疆少数民族进行安抚。以下内容与此不符的是（   ）?", answer: ["A.顺治帝册封五世达赖", "B.康熙帝册封班禅", "C.乾隆帝平定大小和卓叛乱", "D.清政府妥善安置土尔扈特部"] },
   { title: "四位学生在为穿什么样的衣服展开辩论：甲认为：穿衣应根据四季气候；乙认为：穿衣应根据身份而定；丙认为：讲究衣服的穿着是一种浪费；丁认为：由上面规定，大家穿一样的制服。根据他们的观点对应的思想是（ ）?", answer: ["A.甲—儒，乙—墨，丙—法，丁—道", "B.甲—儒，乙—法，丙—墨，丁—道", "C.甲—道，乙—墨，丙—法，丁—儒 ", "D.甲—道，乙—儒，丙—墨，丁—法"] },
   { title: "大煮干丝”是哪个菜系的代表菜之一( )?", answer: ["A.四川菜系", "B.山东菜系", "C.广东菜系", "D.淮扬菜系"] },
   { title: "红茶属于( )茶?", answer: ["A.半发酵", "B.发酵", "C.不发酵", "D.微发酵"] },
   { title: "满汉全席起兴于?", answer: ["A.清代", "B.唐代 ", "C.宋代 ", "D.两汉"] },
   { title: "下列哪项是人体的造血器官?", answer: ["A.心脏", "B.肾脏", "C.大腿", "D.小腿"] },
   { title: "我国铁路部门规定身高多少的儿童要买全票?", answer: ["A.1.20米", "B.1.30米", "C.1.40米", "D.1.50米"] },
  ],
  i: 1,
  naxt_question: "下一道题",
  prev_question:"上一道题"
 },
 onLoad: function () {
  console.log(this.data.question)
  this.setData({
   title: this.data.question[0].title,
   answer: this.data.question[0].answer
  })
 },
 prev_question:function(){
  this.data.i = this.data.i - 1
  if (this.data.i < 0 || this.data.i == 0) {
   wx.showToast({
    title: '已经是第一道题',
   })
   // this.setData({
   //  prev_question: "已经是第一道题"
   // })
  } else {
   this.setData({
    title: this.data.question[this.data.i - 1].title,
    answer: this.data.question[this.data.i - 1].answer,
    i: this.data.i
   })
  }
 },
 next_question: function () {
  this.data.i = this.data.i + 1
  if (this.data.i > this.data.question.length) {
   wx.showToast({
    title: '已经是最后一道题',
   })
   // this.setData({
   //  naxt_question: "最后一道题"
   // })
  } else {
   this.setData({
    title: this.data.question[this.data.i - 1].title,
    answer: this.data.question[this.data.i - 1].answer,
    i: this.data.i
   })
  }
 }
})
