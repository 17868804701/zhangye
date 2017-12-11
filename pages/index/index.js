Page({
 data: {
  question: [
   { title: "大煮干丝”是哪个菜系的代表菜之一( )?", answer: ["A.四川菜系", "B.山东菜系", "C.广东菜系", "D.淮扬菜系"] },
   { title: "红茶属于( )茶?", answer: ["A.半发酵", "B.发酵", "C.不发酵", "D.微发酵"] },
   { title: "满汉全席起兴于?", answer: ["A.清代", "B.唐代 ", "C.宋代 ", "D.两汉"] },
   { title: "下列哪项是人体的造血器官?", answer: ["A.心脏", "B.肾脏", "C.大腿", "D.小腿"] },
   { title: "我国铁路部门规定身高多少的儿童要买全票?", answer: ["A.1.20米", "B.1.30米", "C.1.40米", "D.1.50米"] },
  ],
  i:1,
  naxt_question:"下一道题"
 },
 onLoad: function () {
  console.log(this.data.question[0].answer)
  this.setData({
   title: this.data.question[0].title,
   answer: this.data.question[0].answer
  })
 },
 next_question:function(){
  this.data.i = this.data.i+1
  if(this.data.i>this.data.question.length){
    wx.showToast({
     title: '已经是最后一道题',
    })
    this.setData({
     naxt_question:"最后一道题"
    })
  }else{
   this.setData({
    title: this.data.question[this.data.i-1].title,
    answer: this.data.question[this.data.i-1].answer,
    i: this.data.i
   })
  }
 }
})
