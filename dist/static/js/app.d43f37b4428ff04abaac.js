webpackJsonp([1],{IrYx:function(t,e){},NHnr:function(t,e,o){"use strict";function a(t){o("IrYx")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("qRXP"),i=function(){var t=$(".memo").eq(0).width();$(".memo").height(t+65),$(".memo .content").width(t).height(t)},s=function(t){$(window).scrollTop(0),$(".cover-layer").fadeIn(),t.fadeIn(),$("body").css("overflow","hidden"),window.isMobile||($(".navbar").css("padding-right","15px"),$("body").css("padding-right","15px"))},r=function(t){$(".cover-layer").fadeOut(),t.hide(),$("body").css("overflow","scroll"),window.isMobile||($(".navbar").css("padding-right","0"),$("body").css("padding-right","0"))},l=function(t,e,o,a){var n=[{name:"black",regularCode:"#222",opagueCode:"rgb(189,189,189)"},{name:"green",regularCode:"#5cb85c",opagueCode:"rgb(206,234,206)"},{name:"yellow",regularCode:"#f0ad4e",opagueCode:"rgb(251,231,202)"},{name:"red",regularCode:"#d9534f",opagueCode:"rgb(244,203,202)"},{name:"white",regularCode:"#fff",opagueCode:"#fff"}],i=t.getContext("2d"),s=null,r=!1,l=[],c=[],d=$(t),m=function(t){var e=new Image;e.crossOrigin="Anonymous",e.src=t,e.onload=function(){v(),i.drawImage(e,0,0)}},u=function(){var e=t.toDataURL();l.unshift(e)},v=function(){i.clearRect(0,0,260,260)};null!==a&&m(a),u(),$(e).children("li").on("click",function(){var t=$(this),e=t.data("color");s=n.find(function(t){return t.name===e}),t.siblings(".current").removeClass("current").end().addClass("current")}).siblings("[data-color=black]").click(),d.on("mousedown touchstart",function(t){var e=void 0,o=void 0;switch(t.type){case"touchstart":e=t.touches[0].clientX-d.offset().left,o=t.touches[0].clientY-d.offset().top;break;default:e=t.offsetX,o=t.offsetY}r=!0,i.strokeStyle=s.opagueCode,i.lineWidth=5,i.lineCap="round",i.lineJoin="round",i.imageSmoothingEnabled=!0,i.beginPath(),i.moveTo(e,o)}).on("mousemove touchmove",function(t){if(!0===r){var e=void 0,o=void 0;switch(t.type){case"touchmove":e=t.changedTouches[0].clientX-d.offset().left,o=t.changedTouches[0].clientY-d.offset().top;break;default:e=t.offsetX,o=t.offsetY}i.lineTo(e,o),i.stroke()}}).on("mouseout mouseup touchend",function(t){if(!0===r){var e=void 0,o=void 0;switch(t.type){case"touchend":e=t.changeTouches[0].clientX-d.offset().left,o=t.changeTouches[0].clientY-d.offset().top;break;default:e=t.offsetX,o=t.offsetY}i.strokeStyle=s.regularCode,i.lineTo(e,o),i.stroke(),r=!1,u()}}),$(o).children(".undo").on("click",function(t){if(0!==l.length){m(l[0]);var e=l.splice(0,1);c.unshift(e)}}).end().children(".redo").on("click",function(t){if(0!==c.length){m(c[0]);var e=c.splice(0,1);l.unshift(e)}}).end().children(".clear").on("click",function(){v()})},c={resizeMemos:i,showEditorLayer:s,hideEditorLayer:r,initCanvas:l},d=c,m=o("3cXf"),u=o.n(m),v=o("AA3o"),g=o.n(v),h=o("xSur"),f=o.n(h),p=function(t){var e=new Date(t),o=function(t){return t.valueOf()<10?"0"+t:t};return o(e.getMonth()+1)+"-"+o(e.getDate())+", "+o(e.getHours())+":"+o(e.getMinutes())},w=function(){function t(e){g()(this,t),this.categoryId=e.categoryId,this.title=e.title,this.type=e.type,this.content=e.content,this.timeStamp=p(Date.parse(new Date)),this.isCompleted=!1,this.modificationDone=!0}return f()(t,[{key:"getImageData",value:function(t){var e=this,o=document.createElement("canvas");o.setAttribute("width",260),o.setAttribute("height",260);var a=new Image;a.src=t,this.modificationDone=!1,a.onload=function(){o.getContext("2d").drawImage(a,0,0),e.content=o.toDataURL(),e.modificationDone=!0}}}]),t}(),y=function(){function t(){g()(this,t),this.memos=[]}return f()(t,[{key:"loadFromLocalStorage",value:function(){this.memos=JSON.parse(localStorage.getItem("store")).memos}},{key:"saveToLocalStorage",value:function(){var t=this,e=setInterval(function(){t.memos.some(function(t){return!1===t.modificationDone})||(clearInterval(e),localStorage.setItem("store",u()(t)))},10)}},{key:"add",value:function(t){this.memos.push(t)}},{key:"remove",value:function(t){this.memos.splice(this.memos.indexOf(t),1)}},{key:"update",value:function(t,e){this.memos.splice(this.memos.indexOf(t),1,e)}},{key:"init",value:function(){var t=new w({categoryId:3,title:"1.样式引用",type:0,content:"这个应用使用了[Bootstrap](https://www.getbootstrap.com)的导航栏样式和栅格系统，主体部分的背景来自[V2EX](https://www.v2ex.com)。"});t.timeStamp=p(new Date(Date.parse("Oct 8,2016"))),this.add(t);var e=new w({categoryId:3,title:"2.原来vue不向下兼容",type:0,content:"一开始就傻乎乎的对照着1.0优美的中文文档写，发现各种无法解决的问题，后来才发现2是不向下兼容的：\n\n a. 周期钩子命名改变\n\n b. 使用`v-html`特性代替三大括号的html文本插值\n\n c. 弃用`filterBy`、`orderBy`等过滤器，提倡使用`computed`对象\n\n d. `$dispatch`、`$broadcast`、`events`居然都废弃了…这时我忍不了了，果断改用1.0"});e.timeStamp=p(new Date(Date.parse("Oct 1,2017"))),this.add(e);var o=new w({categoryId:3,title:"3.logo细看挺不错的",type:1});o.timeStamp=p(new Date(Date.parse("Oct 6,2016"))),o.getImageData("./src/images/vue-logo.png"),this.add(o);var a=new w({categoryId:2,title:"4.购物",type:0,content:"* 蓝月亮袋装洗衣液\n\n * 乐事薯片飘香麻辣锅味\n\n * **Marlboro Double Burst** \n\nType-C 连接线"});a.timeStamp=p(new Date(Date.parse("Oct 7,2016"))),this.add(a);var n=new w({categoryId:1,title:"6.westWorld",type:0,content:"> By most mechanical and dirty hand,\n\n> I shall have such revenges on you both.\n\n> The things I will do,\n\n> what they are yet I know not,\n\n> but they will be the terrors of the earth."});n.timeStamp=p(new Date(Date.parse("Oct 4,2016"))),this.add(n);var i=new w({categoryId:2,title:"5.凛冬的寒风",type:1});i.timeStamp=p(new Date(Date.parse("Oct 5,2016"))),i.getImageData("./src/images/the-winds-of-winter.png"),this.add(i);var s=new w({categoryId:1,title:"7.Khal Drogo",type:0,content:"> **「至于卓戈之子雷戈，骑着世界的骏马，我也要送他一件礼物。我要送他那张他母亲的父亲坐过的铁椅子，我要送他七大王国。我，卓戈，卡奥，要做这件事。」他的音量渐高，举起拳头对天呼喊，「我要带着我的卡拉萨向西走到世界尽头，骑着木马横渡黑色咸水，做出古往今来其他卡奥都从来没有做过的事。我要杀死穿铁衣服的人，拆了他们的石头房子。我要强奸他们的女人，抓他们的小孩来做奴隶，把他们无用的神像带回维斯·多斯拉克，向圣母山行礼。我，拔尔勃之子卓戈在此发誓，在圣母山前发誓，以天上群星为证。」**"});s.timeStamp=p(new Date(Date.parse("Oct 3,2016"))),this.add(s);var r=new w({categoryId:2,title:"8. Seconds to mars",type:1});r.timeStamp=p(new Date(Date.parse("Oct 2,2016"))),r.getImageData("./src/images/30stm.png"),this.add(r),this.saveToLocalStorage()}}]),t}(),C=new y;null!==localStorage.getItem("store")?C.loadFromLocalStorage():C.init();var _={store:C,Memo:w},k=_,b=k.store,I=k.Memo,D={data:function(){return{helpers:d,categories:{1:"工作",2:"生活",3:"学习"},newMarkdown:new I({categoryId:1,title:"",type:0,content:""}),newDoodle:new I({categoryId:1,title:"",type:1,content:""}),memoToEdit:null}},methods:{createMarkdown:function(){d.showEditorLayer($("#new-markdown"))},createDoodle:function(){var t=$("#new-doodle");d.showEditorLayer(t),d.initCanvas(t.find(".doodle-content")[0],t.find(".doodle-colors")[0],t.find(".doodle-controllers")[0],null)},editMarkdown:function(t){this.memoToEdit=t;var e=$("#edit-markdown");e.find(".editor-title").val(t.title),e.find(".text-content").html(t.content),d.showEditorLayer(e)},editDoodle:function(t){this.memoToEdit=t;var e=$("#edit-doodle");e.find(".editor-title").val(t.title),d.showEditorLayer(e),d.initCanvas(e.find(".doodle-content")[0],e.find(".doodle-colors")[0],e.find(".doodle-controllers")[0],this.memoToEdit.content)},saveNewMarkdown:function(){$("#new-markdown");b.add(new I({categoryId:this.newMarkdown.categoryId,title:this.newMarkdown.title,type:0,content:this.newMarkdown.content})),b.saveToLocalStorage(),this.newMarkdown.content=this.newMarkdown.title="",this.hideAllEditorLayers()},saveNewDoodle:function(){var t=$("#new-doodle .doodle-content")[0];this.newDoodle.content=t.toDataURL(),b.add(new I({categoryId:this.newDoodle.categoryId,title:this.newDoodle.title,type:1,content:this.newDoodle.content})),b.saveToLocalStorage(),this.newDoodle.content=this.newDoodle.title="",this.hideAllEditorLayers()},saveExistingMarkdown:function(){var t=$("#edit-markdown"),e=t.find(".editor-title").val(),o=t.find(".text-content").val(),a=new I({categoryId:this.memoToEdit.categoryId,title:e,type:0,content:o,timeStamp:this.memoToEdit.timeStamp,isCompleted:this.memoToEdit.isCompleted});b.update(this.memoToEdit,a),b.saveToLocalStorage(),this.hideAllEditorLayers()},saveExistingDoodle:function(){var t=$("#edit-doodle"),e=t.find(".editor-title").val(),o=t.find(".doodle-content")[0].toDataURL(),a=new I({categoryId:this.memoToEdit.categoryId,title:e,type:1,content:o,timeStamp:this.memoToEdit.timeStamp,isCompleted:this.memoToEdit.isCompleted});b.update(this.memoToEdit,a),b.saveToLocalStorage(),this.hideAllEditorLayers()},hideAllEditorLayers:function(){d.hideEditorLayer($(".editor-layer"))},closeDoodleEditor:function(){var t=$("#new-doodle .doodle-content")[0];this.newDoodle.contnet=t.toDataURL(),this.hideAllEditorLayers()}}},M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"editor-layer",attrs:{id:"new-markdown"}},[o("div",{staticClass:"editor-top"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newMarkdown.title,expression:"newMarkdown.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.newMarkdown.title},on:{input:function(e){e.target.composing||t.$set(t.newMarkdown,"title",e.target.value)}}}),t._v(" "),o("div",{staticClass:"dropdown select-category"},[o("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[o("span",{staticClass:"category"},[t._v(t._s(t.categories[t.newMarkdown.categoryId]))]),t._v(" "),o("span",{staticClass:"caret"})]),t._v(" "),o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:function(e){t.newMarkdown.categoryId=1}}},[o("a",[t._v("工作")])]),t._v(" "),o("li",{on:{click:function(e){t.newMarkdown.categoryId=2}}},[o("a",[t._v("生活")])]),t._v(" "),o("li",{on:{click:function(e){t.newMarkdown.categoryId=3}}},[o("a",[t._v("学习")])])])]),t._v(" "),o("ul",{staticClass:"tools"},[o("li",{staticClass:"save",on:{click:t.saveNewMarkdown}}),t._v(" "),o("li",{staticClass:"cancel",on:{click:t.hideAllEditorLayers}})])]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newMarkdown.content,expression:"newMarkdown.content"}],staticClass:"text-content form-control",attrs:{placeholder:"内容"},domProps:{value:t.newMarkdown.content},on:{input:function(e){e.target.composing||t.$set(t.newMarkdown,"content",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"editor-layer",attrs:{id:"new-doodle"}},[o("div",{staticClass:"editor-top"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newDoodle.title,expression:"newDoodle.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.newDoodle.title},on:{input:function(e){e.target.composing||t.$set(t.newDoodle,"title",e.target.value)}}}),t._v(" "),o("div",{staticClass:"dropdown select-category"},[o("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[o("span",{staticClass:"category"},[t._v(t._s(t.categories[t.newDoodle.categoryId]))]),t._v(" "),o("span",{staticClass:"caret"})]),t._v(" "),o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:function(e){t.newDoodle.categoryId=1}}},[o("a",[t._v("工作")])]),t._v(" "),o("li",{on:{click:function(e){t.newDoodle.categoryId=2}}},[o("a",[t._v("生活")])]),t._v(" "),o("li",{on:{click:function(e){t.newDoodle.categoryId=3}}},[o("a",[t._v("学习")])])])]),t._v(" "),o("ul",{staticClass:"tools"},[o("li",{staticClass:"save",on:{click:t.saveNewDoodle}}),t._v(" "),o("li",{staticClass:"cancel",on:{click:t.closeDoodleEditor}})])]),t._v(" "),t._m(0,!1,!1)]),t._v(" "),o("div",{staticClass:"editor-layer",attrs:{id:"edit-markdown"}},[o("div",{staticClass:"editor-top"},[o("input",{staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"}}),t._v(" "),o("ul",{staticClass:"tools"},[o("li",{staticClass:"save",on:{click:t.saveExistingMarkdown}}),t._v(" "),o("li",{staticClass:"cancel",on:{click:t.hideAllEditorLayers}})])]),t._v(" "),o("textarea",{staticClass:"text-content form-control",attrs:{placeholder:"内容"}})]),t._v(" "),o("div",{staticClass:"editor-layer",attrs:{id:"edit-doodle"}},[o("div",{staticClass:"editor-top"},[o("input",{staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"}}),t._v(" "),o("ul",{staticClass:"tools"},[o("li",{staticClass:"save",on:{click:t.saveExistingDoodle}}),t._v(" "),o("li",{staticClass:"cancel",on:{click:t.hideAllEditorLayers}})])]),t._v(" "),t._m(1,!1,!1)])])},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"canvas-wrapper"},[o("ul",{staticClass:"doodle-colors"},[o("li",{attrs:{"data-color":"black"}}),t._v(" "),o("li",{attrs:{"data-color":"green"}}),t._v(" "),o("li",{attrs:{"data-color":"yellow"}}),t._v(" "),o("li",{attrs:{"data-color":"red"}}),t._v(" "),o("li",{attrs:{"data-color":"white"}})]),t._v(" "),o("ul",{staticClass:"doodle-controllers"},[o("li",{staticClass:"undo"}),t._v(" "),o("li",{staticClass:"redo"}),t._v(" "),o("li",{staticClass:"clear"})]),t._v(" "),o("canvas",{staticClass:"doodle-content",attrs:{width:"260",height:"260"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"canvas-wrapper"},[o("ul",{staticClass:"doodle-colors"},[o("li",{attrs:{"data-color":"black"}}),t._v(" "),o("li",{attrs:{"data-color":"green"}}),t._v(" "),o("li",{attrs:{"data-color":"yellow"}}),t._v(" "),o("li",{attrs:{"data-color":"red"}}),t._v(" "),o("li",{attrs:{"data-color":"white"}})]),t._v(" "),o("ul",{staticClass:"doodle-controllers"},[o("li",{staticClass:"undo"}),t._v(" "),o("li",{staticClass:"redo"}),t._v(" "),o("li",{staticClass:"clear"})]),t._v(" "),o("canvas",{staticClass:"doodle-content",attrs:{width:"260",height:"260"}})])}],E={render:M,staticRenderFns:S},x=E,T=o("/Xao"),L=T(D,x,!1,null,null,null),O=L.exports,B=k.store,A={props:["memo"],data:function(){return{memos:B.memos,categories:{1:"工作",2:"生活",3:"学习"}}},methods:{marked:marked,deleteMemo:function(){confirm("确定删除「"+this.memo.title+"」吗？此操作不可撤销。")&&(B.remove(this.memo),B.saveToLocalStorage())},markAsDone:function(){this.memo.isCompleted=!this.memo.isCompleted,B.saveToLocalStorage()},editMarkdown:function(){switch(this.memo.type){case 0:this.$emit("edit",this.memo);break;case 1:this.$emit("editDoodle",this.memo)}}}},q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"memo-container"},[o("div",{staticClass:"memo",attrs:{"data-completed":t.memo.isCompleted?"true":"false"}},[o("div",{staticClass:"mark",on:{click:t.markAsDone}}),t._v(" "),o("div",{staticClass:"memo-heading"},[o("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),t._v(" "),o("ul",{staticClass:"tools"},[o("li",{staticClass:"edit",on:{click:t.editMarkdown}}),t._v(" "),o("li",{staticClass:"delete",on:{click:t.deleteMemo}})])]),t._v(" "),o("h6",{staticClass:"memo-info"},[o("span",{staticClass:"timeStamp"},[t._v(t._s(t.memo.timeStamp))]),t._v(" "),o("span",{staticClass:"category"},[t._v("分类："+t._s(t.categories[t.memo.categoryId]))])]),t._v(" "),o("div",{staticClass:"content",attrs:{"data-type":0===t.memo.type?"text":"doodle"}},[0===t.memo.type?o("div",{staticClass:"text",domProps:{innerHTML:t._s(t.marked(t.memo.content))}}):o("img",{staticClass:"doodle",attrs:{src:t.memo.content}})])])])},X=[],F={render:q,staticRenderFns:X},N=F,P=o("/Xao"),R=P(A,N,!1,null,null,null),Y=R.exports,W=k.store,U={data:function(){return{memos:W.memos,memosFiltered:[],currentSortBy:"",currentCategoryId:"",queryString:"",categories:{0:"全部",1:"工作",2:"生活",3:"学习"},helpers:d}},components:{memoItem:Y,memoEditor:O},methods:{filterBy:function(t,e){var o=[];switch(t){case 0:o=this.memos,this.currentCategoryId=0;break;case 1:o=this.memosInWorkCate,this.currentCategoryId=1;break;case 2:o=this.memosInLivingCate,this.currentCategoryId=2;break;case 3:o=this.memosInStudyCate,this.currentCategoryId=3}""!==e&&(o=o.filter(function(t){var o=!1;return-1===t.title.indexOf(e)&&-1===t.timeStamp.indexOf(e)||(o=!0),0===t.type&&-1!==t.content.indexOf(e)&&(o=!0),o})),this.memosFiltered=o,this.sortByTimeOrTitle("title")},sortByTimeOrTitle:function(t){this.memosFiltered.sort(function(e,o){return e[t]<o[t]?-1:1}),this.currentSortBy="timeStamp"===t?"按创建时间排序":"按标题排序"},createMarkdown:function(){this.$refs.editor.createMarkdown()},createDoodle:function(){this.$refs.editor.createDoodle()},editMarkdown:function(t){this.$refs.editor.editMarkdown(t)},editDoodle:function(t){this.$refs.editor.editDoodle(t)}},computed:{memosInWorkCate:function(){return this.memos.filter(function(t){return 1===t.categoryId})},memosInLivingCate:function(){return this.memos.filter(function(t){return 2===t.categoryId})},memosInStudyCate:function(){return this.memos.filter(function(t){return 3===t.categoryId})}},mounted:function(){this.filterBy(0,this.queryString),this.sortByTimeOrTitle("title")},watch:{memosFiltered:function(){d.resizeMemos()}}},z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"vue-memo"}},[o("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[o("div",{staticClass:"container"},[t._m(0,!1,!1),t._v(" "),o("div",{staticClass:"collapse navbar-collapse navbar-right"},[o("ul",{staticClass:"nav navbar-nav"},[o("li",{staticClass:"add dropdown"},[o("a",{staticClass:"create-new dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("新建")]),t._v(" "),o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:t.createMarkdown}},[o("a",[t._v("Markdown")])]),t._v(" "),o("li",{on:{click:t.createDoodle}},[o("a",[t._v("涂鸦")])])])]),t._v(" "),o("li",{staticClass:"categories dropdown"},[o("a",{staticClass:"current-category dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("\n              "+t._s(t.categories[t.currentCategoryId])+"\n              "),o("span",{staticClass:"count badge"},[t._v(t._s(t.memosFiltered.length))])]),t._v(" "),o("ul",{staticClass:"dropdown-menu"},[o("li",{staticClass:"total",on:{click:function(e){t.filterBy(0,t.queryString)}}},[o("a",[t._v("全部\n                  "),o("span",{staticClass:"count badge"},[t._v(t._s(t.memos.length))])])]),t._v(" "),o("li",{staticClass:"divider"}),t._v(" "),o("li",{on:{click:function(e){t.filterBy(1,t.queryString)}}},[o("a",[t._v("工作\n                  "),o("span",{staticClass:"count badge"},[t._v(t._s(t.memosInWorkCate.length))])])]),t._v(" "),o("li",{on:{click:function(e){t.filterBy(2,t.queryString)}}},[o("a",[t._v("生活\n                  "),o("span",{staticClass:"count badge"},[t._v(t._s(t.memosInLivingCate.length))])])]),t._v(" "),o("li",{on:{click:function(e){t.filterBy(3,t.queryString)}}},[o("a",[t._v("学习\n                  "),o("span",{staticClass:"count badge"},[t._v(t._s(t.memosInStudyCate.length))])])])])]),t._v(" "),o("li",{staticClass:"sort-by dropdown"},[o("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("\n              "+t._s(t.currentSortBy)+"\n            ")]),t._v(" "),o("ul",{staticClass:"dropdown-menu"},[o("li",{on:{click:function(e){t.sortByTimeOrTitle("title")}}},[o("a",[t._v("按标题排序")])]),t._v(" "),o("li",{on:{click:function(e){t.sortByTimeOrTitle("timeStamp")}}},[o("a",[t._v("按创建时间排序")])])])]),t._v(" "),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.queryString,expression:"queryString"}],staticClass:"search-box form-control",attrs:{type:"text",placeholder:"过滤标题、内容。时间戳"},domProps:{value:t.queryString},on:{keyup:function(e){t.filterBy(t.currentCategoryId,t.queryString)},input:function(e){e.target.composing||(t.queryString=e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"container",attrs:{id:"memos"}},t._l(t.memosFiltered,function(e,a){return o("memo-item",{key:a,attrs:{memo:e},on:{edit:t.editMarkdown,editDoodle:t.editDoodle}})})),t._v(" "),o("memo-editor",{ref:"editor"}),t._v(" "),o("div",[t._v("123")])],1)},H=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-header"},[o("a",{staticClass:"navbar-brand"},[t._v("vue-memo")]),t._v(" "),o("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false"}},[o("span",{staticClass:"icon-bar"}),t._v(" "),o("span",{staticClass:"icon-bar"}),t._v(" "),o("span",{staticClass:"icon-bar"})])])}],J={render:z,staticRenderFns:H},j=J,K=o("/Xao"),V=a,G=K(U,j,!1,V,null,null),Q=G.exports;new n.a({el:"#app",components:{App:Q}});var Z=window.navigator.userAgent;window.isMobile=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Mobile|UCWeb/i.test(Z),window.isMobile&&$("#vue-memo").height(window.innerHeight-60).css("overflow","scroll"),$(function(){d.resizeMemos()}),$(window).on("resize",function(){d.resizeMemos()}),$("body").on("mousemove",function(t){$("body").css("background-position-x",Math.ceil(t.pageX/40)).css("background-position-y",Math.ceil(t.pageY/40))}),window.ondeviceorientation=function(t){$("body").css("background-position-x",t.gamma).css("background-position-y",t.beta)}}},["NHnr"]);
//# sourceMappingURL=app.d43f37b4428ff04abaac.js.map