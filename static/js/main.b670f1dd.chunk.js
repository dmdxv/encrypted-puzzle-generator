(this.webpackJsonpturin=this.webpackJsonpturin||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),c=(n(16),n(17),n(7)),l=n.n(c),i=n(10),u=n(2),d=n(3),m=n(5),p=n(4),h=n(1),f=n(6),y=["time","year","people","way","down","day","man","thing","woman","life","child","world","school","state","family","student","group","government","problem","number","night","bedroom","program","question","home","point","business","netflix","amazon","google","member","information","education","morning","disappearance","others","level"];var b=function(){for(var e=[],t=0;t<20;t++)e.push(y[Math.floor(Math.random()*y.length)]);return e},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],key:[],encryptedWords:[]},n.generateKey=n.generateKey.bind(Object(h.a)(n)),n.generateEncryptedWords=n.generateEncryptedWords.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"generateKey",value:function(){var e;e=this.state.alphabet.sort((function(){return Math.random()-.5}));for(var t=0;t<e.length;t++)console.log(e[t]+t);this.setState({key:e})}},{key:"generateEncryptedWords",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateKey();case 2:t=[],n=b(),console.log(n),a=0;case 6:if(!(a<n.length)){e.next=15;break}return e.t0=t,e.next=10,this.EncryptWord(n[a]);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:a++,e.next=6;break;case 15:this.setState({encryptedWords:t});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"EncryptWord",value:function(e){for(var t=this.state.key,n="",a=0;a<e.length;a++){var r=e[a];n+=t.findIndex((function(e){return e===r}))+1+","}return n}},{key:"render",value:function(){return r.a.createElement("div",{className:"mt-3"},r.a.createElement("button",{className:"btn btn-outline-success mx-2",onClick:this.generateEncryptedWords},"Generate Words"),r.a.createElement("button",{className:"btn btn-outline-danger mx-2",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Solution"),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(g,{data:this.state.encryptedWords}),r.a.createElement("div",{class:"row"},this.state.encryptedWords.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"col-md-4"},e)}))),r.a.createElement("div",{class:"collapse mt-4",id:"collapseExample"},r.a.createElement("div",{class:"row"},this.state.key.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"col-md-2"},e," = ",t+1)}))))))}}]),t}(a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"display-2 font-weight-bold py-3"},"Encrypted Puzzle Maker"),r.a.createElement("p",{className:"w-50 mx-auto"},"Inspired by a book on Bletchley park, I created an encrypted puzzle generator. It selects 20 words from a list of common nouns in the english language and replaces each letter with a number."),r.a.createElement("p",{className:"font-weight-bold my-3"},"How to use."),r.a.createElement("p",null,'Press the "Generate" button to generate 20 encrypted words.'),r.a.createElement("p",null,'Once you\'ve finished, or given up, press the "Solution" button'),r.a.createElement(v,null),r.a.createElement("p",{className:"font-weight-bold my-3"},"Nerd stuff."),r.a.createElement("p",{className:"w-50 mx-auto"},"To generate a random set of numbers each time, an array containing the alphabet is shuffled giving each letter a new index (position in the array). This new index is then used as the letters encrypted number. Once the shuffling is done, the app iterates through 20 selected words, replacing each letter with its corresponding index number. ")))};s.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b670f1dd.chunk.js.map