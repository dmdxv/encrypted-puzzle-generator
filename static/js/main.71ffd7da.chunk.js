(this.webpackJsonpturin=this.webpackJsonpturin||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(16),a(17),a(2)),o=a.n(s),i=a(5),m=a(6),d=a(7),u=a(9),p=a(8),h=a(1),f=a(10),v=["time","year","people","way","down","day","man","thing","woman","life","child","world","school","state","family","student","group","government","problem","number","night","bedroom","program","question","home","point","business","netflix","amazon","google","member","information","education","morning","disappearance","others","level"];var E=function(){for(var e=[],t=0;t<20;t++)e.push(v[Math.floor(Math.random()*v.length)]);return e},y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],key:[],encryptedWords:[]},a.generateKey=a.generateKey.bind(Object(h.a)(a)),a.generateEncryptedWords=a.generateEncryptedWords.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"generateKey",value:function(){var e;e=this.state.alphabet.sort((function(){return Math.random()-.5}));for(var t=0;t<e.length;t++)console.log(e[t]+t);this.setState({key:e})}},{key:"generateEncryptedWords",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateKey();case 2:t=[],a=E(),console.log(a),n=0;case 6:if(!(n<a.length)){e.next=15;break}return e.t0=t,e.next=10,this.EncryptWord(a[n]);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:n++,e.next=6;break;case 15:this.setState({encryptedWords:t});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"EncryptWord",value:function(e){for(var t=this.state.key,a="",n=0;n<e.length;n++){var r=e[n];a+=t.findIndex((function(e){return e===r}))+1+","}return a}},{key:"componentDidMount",value:function(){this.generateEncryptedWords()}},{key:"render",value:function(){return r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement("ul",{className:"nav nav-pills"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{"data-toggle":"pill",className:"nav-link active",href:"#encrypted"},"Encrypted Words")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{"data-toggle":"pill",className:"nav-link",href:"#solution"},"Solution"))),r.a.createElement("div",{class:"tab-content"},r.a.createElement("div",{id:"encrypted",className:"tab-pane fade show active"},r.a.createElement("button",{className:"btn btn-outline-success mx-2",onClick:this.generateEncryptedWords},"Generate Words"),r.a.createElement("div",{className:"row mt-3"},this.state.encryptedWords.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"col-md-4"},r.a.createElement("h5",{className:"card-title border rounded py-4"},e))})))),r.a.createElement("div",{id:"solution",className:"tab-pane fade"},r.a.createElement("div",{className:"row mt-3"},this.state.key.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"col-md-2"},r.a.createElement("h5",{className:"card-title border rounded py-4"},t+1," = ",e))})))))))}}]),t}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row text-center"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("h1",{className:"font-weight-bold py-3"},"Encrypted Puzzle Maker")),r.a.createElement("div",{class:"col-md-6 text-left"},r.a.createElement("h4",null,"About."),r.a.createElement("p",null,"Inspired by a book on Bletchley park, I created an encrypted puzzle generator. It selects 20 words from a list of common nouns in the english language and replaces each letter with a number."),r.a.createElement("a",{href:"https://twitter.com/dmdboi",className:"mx-3"},r.a.createElement("i",{class:"fa fa-twitter fa-2x text-black","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/dmdxv",className:"mx-3"},r.a.createElement("i",{class:"fa fa-github fa-2x","aria-hidden":"true"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(y,null))))))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.71ffd7da.chunk.js.map