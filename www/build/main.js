webpackJsonp([3],{101:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3),n(57),n(34);var o=function(){function t(t,e){this.sentence=t,this.rxjs=e,this.list={}}return t.prototype.getWhen=function(){var t,e=this.sentence.getHED()[0],n=this.sentence.getChildren(e,"VV")[0],o=this.sentence.getSibling(n)[0];if(o){var a=[];a.push(this.sentence.getTranslation(n.word)),a.push(this.sentence.getTranslation(o.word)),t=a}else t=this.sentence.getTranslation(n.word);return console.log("时机:"),console.log(t),this.list.enable=t,t},t.prototype.getFilterCard=function(){var t=this,e="",n=[],o=this.sentence.getFilter("BA","n")[0];this.sentence.getChildren(o,"ATT","n").map(function(e){var o=t.sentence.getType(e.word);if("suit"==o||"color"==o){var a=t.sentence.getTranslation(e.word);n.push({type:o,value:a})}});for(var a=n.length;a--;){var i=[n[a].type,n[a].value];e+="get."+i[0]+"(card)=='"+i[1]+"'",a&&(e+="&&")}e="return "+e;var r=new Function("card","player",e);return console.log("卡牌条件:"),console.log(r),this.list.filterCard=r,r},t.prototype.getSelectCard=function(){var t=this.sentence.getDeprel("QUN")[0].word,e=this.sentence.getTranslation(t);if(e=parseInt(e),console.log("卡牌数量:"),console.log(e),e>1)return this.list.selectCard=e,e},t.prototype.getPosition=function(){var t,e=this,n=this.sentence.getFilter("BA","n")[0];return this.sentence.getChildren(n,"ATT","n").map(function(n){"position"==e.sentence.getType(n.word)&&(t=e.sentence.getTranslation(n.word))}),t||(t="he"),console.log("卡牌区域:"),console.log(t),this.list.position=t,t},t.prototype.getViewAs=function(){var t=this.sentence.getHED()[0],e=this.sentence.getChildren(t,"VOB")[0].word.replace(/【|】/g,""),n={name:e=this.sentence.getTranslation(e)};return console.log("视为:"),console.log(e),this.list.viewAs=e,n},t.prototype.getPrompt=function(){var t="将"+(this.list.selectCard?this.list.selectCard:1)+"张牌当做"+this.list.viewAs+"使用或者打出";return console.log("提示:"),console.log(t),this.list.prompt=t,t},t.prototype.compile=function(){this.rxjs.sendMsg({status:"done",code:this.list})},t.prototype.start=function(){console.log("开始编写视为技"),this.getWhen(),this.getFilterCard(),this.getSelectCard(),this.getPosition(),this.getViewAs(),this.getPrompt(),this.compile()},t}()},126:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3);var o=function(){function t(t){this.http=t}return t.prototype.clear=function(t){t.getContext("2d").clearRect(0,0,t.width,t.height)},t.prototype.start=function(t,e,n){var o=this.getPoint(e),a=this.getPoint(n);this.draw(t,o,(o+a)/2,a)},t.prototype.getPoint=function(t){return(t.offsetLeft+t.offsetWidth/2)*this.ratio},t.prototype.resize=function(t,e){t.style.width=e.offsetWidth+"px",t.style.height=e.offsetHeight+"px";var n=t.getContext("2d");this.ratio=function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}(n),t.width=e.offsetWidth*this.ratio,t.height=e.offsetHeight*this.ratio},t.prototype.draw=function(t,e,n,o){var a,i,r;a=r=64*this.ratio;var s,l=t.getContext("2d");n<o?(i=0,s="right",l.strokeStyle="#488aff"):(i=128*this.ratio,s="left",l.strokeStyle="#ff4848"),l.lineWidth=3*this.ratio,l.beginPath(),l.moveTo(e,a),l.quadraticCurveTo(n,i,o,r),l.stroke(),this.drawArrow(l,n,s)},t.prototype.drawArrow=function(t,e,n){t.beginPath();var o,a,i;"right"==n?(a={x:o=e-10*this.ratio,y:37*this.ratio},i={x:o,y:27*this.ratio},t.strokeStyle="#488aff"):(a={x:o=e+10*this.ratio,y:101*this.ratio},i={x:o,y:91*this.ratio},t.strokeStyle="#ff4848"),t.moveTo(a.x,a.y),t.lineTo(e,(a.y+i.y)/2),t.lineTo(i.x,i.y),t.stroke()},t}()},127:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3),n(54),n(99),n(100),n(34);var o=function(){function t(t,e,n,o,a){this.platform=t,this.http=e,this.mhttp=n,this.file=o,this.rxjs=a,this.basicUrl="https://aip.baidubce.com/rpc/2.0/nlp/v1/depparser?charset=UTF-8&access_token=",this.token="24.9ef1d08dd86089475358c1055f47716a.2592000.1546273111.282335-15004681",this.apiUrl=this.basicUrl+this.token,this.githubUrl="https://raw.githubusercontent.com/q2578443177/AI/master/",this.githubReleaseUrl="https://raw.githubusercontent.com/q2578443177/AI/master/app-debug.apk",this.nodeUrl="http://localhost:3000"}return t.prototype.get=function(t){return this.mhttp.get(t,{},{})},t.prototype.post=function(t){var e,n,o={text:t};return this.platform.is("android")?(e=this.apiUrl,n={"Content-Type":"application/json;charset=utf-8"},this.mhttp.setDataSerializer("json"),this.mhttp.post(e,o,n)):(e=this.nodeUrl,n={headers:{"Content-Type":"application/json"}},this.http.post(e,o,n))},t.prototype.checkVersion=function(t){var e;return e=localStorage.getItem("version")?localStorage.getItem("version"):"0.0.0",t=t.split(".").join(""),e=e.split(".").join(""),parseInt(t)>parseInt(e)},t.prototype.checkUpdate=function(){var t=this;this.get(this.githubUrl+"update.json").then(function(e){e.data=JSON.parse(e.data),console.log(e.data),t.checkVersion(e.data.version)?t.rxjs.sendMsg("有新版本可用，是否更新？","alert",function(){t.downloadFile("AI.apk")}):console.log("无更新")})},t.prototype.downloadFile=function(t){},t}()},128:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3),n(101),n(57);var o=function(){function t(t,e){this.viewAs=t,this.sentence=e}return t.prototype.create=function(t){console.log("coding...");var e=this.judgeType(t);switch(console.log(t),e){case"viewAs":this.viewAs.start();break;default:this.quit()}},t.prototype.getPassages=function(){},t.prototype.judgeType=function(t){return this.judgeViewAs(t)?"viewAs":this.judgeEnable(t)?"enable":this.judgeTrigger(t)?"trigger":this.quit()},t.prototype.judgeViewAs=function(t){var e=t.some(function(t){return"BA"==t.deprel}),n=this.sentence.getHED()[0];if(e&&"v"==n.postag)return!0},t.prototype.judgeEnable=function(t){return!1},t.prototype.judgeTrigger=function(t){return!1},t.prototype.quit=function(){},t}()},147:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=147},175:function(t,e,n){function o(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"../pages/ai/ai.module.ngfactory":[249,0],"../pages/book/book.module.ngfactory":[250,1],"../pages/tabs/tabs.module.ngfactory":[251,2]};o.keys=function(){return Object.keys(a)},o.id=175,t.exports=o},211:function(t,e,n){"use strict";function o(t){return r._19(0,[(t()(),r.Z(0,0,null,null,10,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,e,n){var o=!0;if("click"===e){o=!1!==r._11(t,6).close()&&o}return o},z.b,z.a)),r.Y(1,1097728,null,3,B.a,[E.a,M.a,r.j,r.z,[2,U.a]],null,null),r._16(335544320,6,{contentLabel:0}),r._16(603979776,7,{_buttons:1}),r._16(603979776,8,{_icons:1}),r.Y(5,16384,null,0,Y.a,[],null,null),r.Y(6,16384,null,0,V.a,[q.a],{menuClose:[0,"menuClose"]},null),(t()(),r._18(-1,2,["\n\t\t\t\t"])),(t()(),r.Z(8,0,null,0,1,"ion-icon",[["item-start",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(9,147456,[[8,4]],0,D.a,[M.a,r.j,r.z],{name:[0,"name"]},null),(t()(),r._18(10,2,["","\n\t\t\t"]))],function(t,e){t(e,6,0,"");t(e,9,0,e.context.$implicit.icon)},function(t,e){t(e,8,0,r._11(e,9)._hidden);t(e,10,0,e.context.$implicit.name)})}function a(t){return r._19(0,[(t()(),r.Z(0,0,null,null,26,"ion-menu",[["role","navigation"]],null,null,null,H.b,H.a)),r._14(6144,null,I.a,null,[Z.a]),r.Y(2,245760,null,2,Z.a,[q.a,r.j,M.a,N.a,r.z,W.a,X.l,J.a,$.a],{content:[0,"content"]},null),r._16(335544320,1,{menuContent:0}),r._16(335544320,2,{menuNav:0}),(t()(),r._18(-1,0,["\n\t"])),(t()(),r.Z(6,0,null,0,19,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,G.b,G.a)),r.Y(7,4374528,[[1,4]],0,K.a,[M.a,N.a,J.a,r.j,r.z,$.a,W.a,r.u,[2,Q.a],[2,tt.a]],null,null),(t()(),r._18(-1,1,["\n\t\t"])),(t()(),r.Z(9,0,null,1,0,"div",[["class","bg"]],null,null,null,null,null)),(t()(),r._18(-1,1,["\n\t\t"])),(t()(),r.Z(11,0,null,1,13,"ion-list",[["no-lines",""]],null,null,null,null,null)),r.Y(12,16384,null,0,et.a,[M.a,r.j,r.z,N.a,X.l,J.a],null,null),(t()(),r._18(-1,null,["\n\t\t\t"])),(t()(),r.Z(14,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,z.b,z.a)),r.Y(15,1097728,null,3,B.a,[E.a,M.a,r.j,r.z,[2,U.a]],null,null),r._16(335544320,3,{contentLabel:0}),r._16(603979776,4,{_buttons:1}),r._16(603979776,5,{_icons:1}),r.Y(19,16384,null,0,nt.a,[M.a,r.z,r.j,[8,null]],null,null),(t()(),r._18(-1,2,["\n\t\t\t\t菜单\n\t\t\t"])),(t()(),r._18(-1,null,["\n\t\t\t"])),(t()(),r.U(16777216,null,null,1,null,o)),r.Y(23,802816,null,0,ot.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(t()(),r._18(-1,null,["\n\t\t"])),(t()(),r._18(-1,1,["\n\t"])),(t()(),r._18(-1,0,["\n"])),(t()(),r._18(-1,null,["\n"])),(t()(),r.Z(28,0,null,null,2,"ion-nav",[],null,null,null,at.b,at.a)),r._14(6144,null,I.a,null,[it.a]),r.Y(30,4374528,[["content",4]],0,it.a,[[2,Q.a],[2,tt.a],$.a,M.a,N.a,r.j,r.u,r.z,r.i,X.l,rt.a,[2,st.a],J.a,r.k],{root:[0,"root"]},null)],function(t,e){var n=e.component;t(e,2,0,r._11(e,30));t(e,23,0,n.items);t(e,30,0,n.rootPage)},function(t,e){t(e,6,0,r._11(e,7).statusbarPadding,r._11(e,7)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(28),r=n(0),s=(n(3),n(54),n(198)),l=n(76),u=n(71),c=n(99),h=n(100),p=n(77),f=n(78),g=n(34),d=n(246),_=n.n(d),y=function(){return function(t,e,n,o,a,i){var r=this;this.platform=t,this.statusBar=e,this.appMinimize=n,this.rxjs=o,this.codePush=a,this.keyBoard=i,this.rootPage="TabsPage",this.backButtonPressed=!1,this.items=[{icon:"leaf",name:"个人主页",page:"PersonPage"},{icon:"shirt",name:"个性装扮",page:"DressPage"},{icon:"star",name:"我的收藏",page:"StarPage"},{icon:"photos",name:"我的相册",page:"PhotoPage"},{icon:"folder",name:"我的文件",page:"FolderPage"}],t.ready().then(function(){r.platform.is("android")&&(new _.a,r.platform.registerBackButtonAction(function(){r.appMinimize.minimize()}),a.notifyApplicationReady(),a.sync().subscribe(function(t){},function(t){console.log("[codePush ERROR]: "+t)}))})}}(),b=n(126),m=n(127),v=n(128),w=n(101),j=n(57),k=function(){return function(){}}(),C=n(45),P=n(200),T=n(201),x=n(202),A=n(203),S=n(204),F=n(205),R=n(206),O=n(207),L=n(208),z=n(177),B=n(17),E=n(15),M=n(1),U=n(42),Y=n(65),V=n(97),q=n(22),D=n(36),H=n(247),I=n(27),Z=n(69),N=n(4),W=n(24),X=n(6),J=n(9),$=n(8),G=n(209),K=n(21),Q=n(5),tt=n(19),et=n(50),nt=n(67),ot=n(13),at=n(248),it=n(51),rt=n(26),st=n(14),lt=r.X({encapsulation:2,styles:[],data:{}}),ut=r.V("ng-component",y,function(t){return r._19(0,[(t()(),r.Z(0,0,null,null,1,"ng-component",[],null,null,null,a,lt)),r.Y(1,49152,null,0,y,[N.a,l.a,p.a,g.a,f.a,W.a],null,null)],null,null)},{},{},[]),ct=n(103),ht=n(199),pt=n(18),ft=n(80),gt=n(90),dt=n(92),_t=n(102),yt=n(33),bt=n(96),mt=n(122),vt=n(47),wt=n(37),jt=n(107),kt=n(63),Ct=n(111),Pt=n(105),Tt=n(117),xt=n(197),At=n(104),St=n(98),Ft=n(106),Rt=r.W(k,[C.b],function(t){return r._7([r._8(512,r.i,r.S,[[8,[P.a,T.a,x.a,A.a,S.a,F.a,R.a,O.a,L.a,ut]],[3,r.i],r.s]),r._8(5120,r.r,r._15,[[3,r.r]]),r._8(4608,ot.k,ot.j,[r.r,[2,ot.s]]),r._8(5120,r.b,r._1,[]),r._8(5120,r.p,r._9,[]),r._8(5120,r.q,r._12,[]),r._8(4608,i.c,i.q,[ot.c]),r._8(6144,r.D,null,[i.c]),r._8(4608,i.f,ct.a,[]),r._8(5120,i.d,function(t,e,n,o,a){return[new i.k(t,e),new i.o(n),new i.n(o,a)]},[ot.c,r.u,ot.c,ot.c,i.f]),r._8(4608,i.e,i.e,[i.d,r.u]),r._8(135680,i.m,i.m,[ot.c]),r._8(4608,i.l,i.l,[i.e,i.m]),r._8(5120,ht.a,s.d,[]),r._8(5120,ht.c,s.e,[]),r._8(4608,ht.b,s.c,[ht.a,ht.c]),r._8(5120,r.B,s.f,[i.l,ht.b,r.u]),r._8(6144,i.p,null,[i.m]),r._8(4608,r.G,r.G,[r.u]),r._8(4608,i.h,i.h,[ot.c]),r._8(4608,i.i,i.i,[ot.c]),r._8(4608,u.h,u.n,[ot.c,r.w,u.l]),r._8(4608,u.o,u.o,[u.h,u.m]),r._8(5120,u.a,function(t){return[t]},[u.o]),r._8(4608,u.k,u.k,[]),r._8(6144,u.i,null,[u.k]),r._8(4608,u.g,u.g,[u.i]),r._8(6144,u.b,null,[u.g]),r._8(4608,u.f,u.j,[u.b,r.o]),r._8(4608,u.c,u.c,[u.f]),r._8(4608,pt.k,pt.k,[]),r._8(4608,pt.c,pt.c,[]),r._8(4608,ft.b,s.b,[r.B,i.b]),r._8(4608,gt.a,gt.a,[$.a,M.a]),r._8(4608,dt.a,dt.a,[$.a,M.a]),r._8(4608,_t.a,_t.a,[]),r._8(4608,E.a,E.a,[]),r._8(4608,yt.a,yt.a,[N.a]),r._8(4608,W.a,W.a,[M.a,N.a,r.u,J.a]),r._8(4608,bt.a,bt.a,[$.a,M.a]),r._8(5120,ot.f,mt.c,[ot.q,[2,ot.a],M.a]),r._8(4608,ot.e,ot.e,[ot.f]),r._8(5120,vt.b,vt.d,[$.a,vt.a]),r._8(5120,st.a,st.b,[$.a,vt.b,ot.e,wt.b,r.i]),r._8(4608,jt.a,jt.a,[$.a,M.a,st.a]),r._8(4608,kt.a,kt.a,[$.a,M.a]),r._8(4608,Ct.a,Ct.a,[$.a,M.a,st.a]),r._8(4608,Pt.a,Pt.a,[M.a,N.a,J.a,$.a,X.l]),r._8(4608,Tt.a,Tt.a,[$.a,M.a]),r._8(4608,rt.a,rt.a,[N.a,M.a]),r._8(4608,l.a,l.a,[]),r._8(4608,b.a,b.a,[u.c]),r._8(4608,c.a,c.a,[]),r._8(4608,h.a,h.a,[]),r._8(4608,g.a,g.a,[Tt.a,dt.a]),r._8(4608,m.a,m.a,[N.a,u.c,c.a,h.a,g.a]),r._8(4608,j.a,j.a,[g.a]),r._8(4608,w.a,w.a,[j.a,g.a]),r._8(4608,v.a,v.a,[w.a,j.a]),r._8(4608,p.a,p.a,[]),r._8(4608,f.a,f.a,[]),r._8(512,ot.b,ot.b,[]),r._8(512,r.k,xt.a,[]),r._8(256,M.b,{},[]),r._8(1024,At.a,At.b,[]),r._8(1024,N.a,N.b,[i.b,At.a,r.u]),r._8(1024,M.a,M.c,[M.b,N.a]),r._8(512,J.a,J.a,[N.a]),r._8(512,q.a,q.a,[]),r._8(512,$.a,$.a,[M.a,N.a,[2,q.a]]),r._8(512,X.l,X.l,[$.a]),r._8(256,vt.a,{links:[{loadChildren:"../pages/ai/ai.module.ngfactory#AiPageModuleNgFactory",name:"AiPage",segment:"ai",priority:"low",defaultHistory:[]},{loadChildren:"../pages/book/book.module.ngfactory#BookPageModuleNgFactory",name:"BookPage",segment:"book",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]}]},[]),r._8(512,r.h,r.h,[]),r._8(512,St.a,St.a,[r.h]),r._8(1024,wt.b,wt.c,[St.a,r.o]),r._8(1024,r.c,function(t,e,n,o,a,r,s,l,u,c,h,p,f){return[i.s(t),Ft.a(e),_t.b(n,o),Pt.b(a,r,s,l,u),wt.d(c,h,p,f)]},[[2,r.t],M.a,N.a,J.a,M.a,N.a,J.a,$.a,X.l,M.a,vt.a,wt.b,r.u]),r._8(512,r.d,r.d,[[2,r.c]]),r._8(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._8(512,r.e,r.e,[r.f]),r._8(512,i.a,i.a,[[3,i.a]]),r._8(512,u.e,u.e,[]),r._8(512,u.d,u.d,[]),r._8(512,pt.j,pt.j,[]),r._8(512,pt.d,pt.d,[]),r._8(512,pt.i,pt.i,[]),r._8(512,mt.a,mt.a,[]),r._8(512,s.a,s.a,[]),r._8(512,k,k,[]),r._8(256,u.l,"XSRF-TOKEN",[]),r._8(256,u.m,"X-XSRF-TOKEN",[]),r._8(256,C.a,y,[]),r._8(256,ot.a,"/",[])])});Object(r.M)(),Object(i.j)().bootstrapModuleFactory(Rt)},34:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(3);var o=n(40),a=(n.n(o),n(54),function(){function t(t,e){this.toastCtrl=t,this.alertCtrl=e,this.subject=new o.Subject}return t.prototype.sendMsg=function(t,e,n){this.subject.next({msg:t,type:e,callback:n})},t.prototype.clearMsg=function(){this.subject.next()},t.prototype.getMsg=function(){return this.subject.asObservable()},t.prototype.presentToast=function(t){this.toastCtrl.create({message:t,duration:2500}).present()},t.prototype.showConfirm=function(t,e){this.alertCtrl.create({title:"提示",message:t,buttons:[{text:"取消",handler:function(){}},{text:"确定",handler:function(){e()}}]}).present()},t}())},57:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3),n(34);var o=function(){function t(t){this.rxjs=t,this.str="skill={\n",this.restoreList=[],this.typeList={suit:["club","diamond","heart","spade"],color:["red","black"],position:["h","e","he"]},this.replaceList=[{reg:"【[一-龥]+】",replacement:"扑克"},{reg:"梅花|草花|方块|方片|红桃|黑桃",replacement:"花色"},{reg:"一|二|三|四|五|六|七",replacement:"两"}],this.translationList={"一":"1","两/二":2,"三":3,"四":4,"五":5,"六":6,"七":7,"使用":"chooseToUse","打出":"chooseToRespond","和/与":"&&","非":"!","红色":"red","黑色":"black","梅花/草花":"club","方块/方片":"diamond","红桃":"heart","黑桃":"spade","杀":"sha","闪":"shan","桃":"tao","过河拆桥":"guohe","借刀杀人":"jiedao","决斗":"juedou","南蛮入侵":"nanman","顺手牵羊":"shunshou","桃园结义":"taoyuan","万箭齐发":"wanjian","五谷丰登":"wugu","无懈可击":"wuxie","无中生有":"wuzhong","闪电":"shandian","装备":"e","判定":"j","手":"h"}}return t.prototype.getType=function(t){var e;e=/[\u4e00-\u9fa5]+/.test(t)?this.getTranslation(t):t;for(var n in this.typeList)if(this.typeList[n].includes(e))return n},t.prototype.getTranslation=function(t){for(var e in this.translationList)if(e==t||-1!=e.indexOf("/")&&-1!=e.indexOf(t))return this.translationList[e];return console.error("没有找到【"+t+"】的翻译..."),this.rxjs.sendMsg("没有找到【"+t+"】的翻译..."),t},t.prototype.getConversion=function(t){for(var e in t)if(this.str+=e+":","function"==typeof t[e])this.str+=t[e].toString()+",\n",this.str=this.str.replace(/^"|$"|anonymous|[\r]|/g,"").replace(/\n\)/g,")");else if(t[e].constructor===Array){var n="";t[e].map(function(t){n+='"'+t+'",'}),n=n.substr(0,n.length-1),this.str+="["+n+"],\n"}else t[e].constructor===Object?(this.str+="{\n",this.getConversion(t[e]),this.str+="},\n"):this.str+="number"==typeof t[e]?t[e]+",\n":'"'+t[e]+'",\n';this.str+="}";var o=this.str;return this.str="skill={\n",o},t.prototype.getReplace=function(t){var e=this;this.restoreList=[];var n=t;return this.replaceList.map(function(t){var o=n.match(new RegExp(t.reg,"g"));o&&e.restoreList.push({before:o[0],after:t.replacement}),n=n.replace(new RegExp(t.reg,"g"),t.replacement)}),console.log(this.restoreList),n},t.prototype.getRestore=function(t){var e=this;return t.map(function(t){e.restoreList.map(function(e){t.word=t.word.replace(new RegExp(e.after,"g"),e.before)})}),t},t.prototype.receiveJson=function(t){this.json=t},t.prototype.getHED=function(){return this.json.filter(function(t){return 0==t.head})},t.prototype.getParent=function(t){return this.json.filter(function(e){return e.id==t.head})},t.prototype.getChildren=function(t,e,n){return this.json.filter(function(o){return o.head==t.id&&((!e||e==o.deprel)&&(!n||n==o.postag))})},t.prototype.getSibling=function(t){return this.getChildren(t).filter(function(t){return"COO"==t.deprel})},t.prototype.getDeprel=function(t,e){void 0===e&&(e=this.json);return e.filter(function(e){return e.deprel==t})},t.prototype.getFilter=function(t,e){return this.json.filter(function(n){return n.deprel==t&&n.postag==e})},t}()}},[211]);