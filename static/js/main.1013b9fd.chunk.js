(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(t,e,n){t.exports={title:"Statistics_title__3PVIg",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,function(t,e,n){t.exports={list:"FeedbackOptions_list__2lRUp",item:"FeedbackOptions_item__2mlJF",button:"FeedbackOptions_button__3n-hy"}},,,,,,function(t,e,n){t.exports={title:"Section_title__2S6oE"}},function(t,e,n){t.exports={notification:"Notification_notification__1C7Ma"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(2),c=n.n(i),s=n(5),o=n.n(s),r=(n(18),n(6)),l=n(7),u=n(8),d=n(12),b=n(11),j=n(3),m=n.n(j),h=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(a.jsx)("ul",{className:m.a.list,children:e.map((function(t){return Object(a.jsx)("li",{className:m.a.item,children:Object(a.jsx)("button",{type:"button",className:m.a.button,onClick:function(){return n(t)},children:t})},t)}))})},O=n(9),f=n.n(O),p=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:f.a.title,children:e}),n]})},x=n(1),v=n.n(x),_=function(t){var e=t.title,n=t.good,i=t.neutral,c=t.bad,s=t.total,o=t.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:v.a.title,children:e}),Object(a.jsxs)("ul",{className:v.a.list,children:[Object(a.jsxs)("li",{className:v.a.item,children:["Good: ",n]}),Object(a.jsxs)("li",{className:v.a.item,children:["Neutral: ",i]}),Object(a.jsxs)("li",{className:v.a.item,children:["Bad: ",c]}),Object(a.jsxs)("li",{className:v.a.item,children:["Total: ",s]}),Object(a.jsxs)("li",{className:v.a.item,children:["Positive feedback: ",o,"%"]})]})]})},k=n(10),g=n.n(k),N=function(t){var e=t.message;return Object(a.jsx)("div",{className:g.a.notification,children:e})},F=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.setItem=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,i=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(p,{title:"Please leave feedback",children:[Object(a.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.setItem}),0===this.countTotalFeedback()?Object(a.jsx)(N,{message:"No feedback given"}):Object(a.jsx)(_,{title:"Statistics",good:e,neutral:n,bad:i,total:c,positivePercentage:s})]})})}}]),n}(i.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.1013b9fd.chunk.js.map