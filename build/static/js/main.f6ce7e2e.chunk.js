(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(t,e,n){t.exports={title:"Statistics_title__3PVIg",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,function(t,e,n){t.exports={list:"FeedbackOptions_list__2lRUp",item:"FeedbackOptions_item__2mlJF",button:"FeedbackOptions_button__3n-hy"}},,,,,,function(t,e,n){t.exports={title:"Section_title__2S6oE"}},function(t,e,n){t.exports={notification:"Notification_notification__1C7Ma"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(2),c=n.n(i),s=n(5),o=n.n(s),r=(n(18),n(6)),l=n(7),d=n(8),u=n(12),b=n(11),j=n(3),m=n.n(j),h=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(a.jsx)("ul",{className:m.a.list,children:e.map((function(t){return Object(a.jsx)("li",{className:m.a.item,children:Object(a.jsx)("button",{type:"button",className:m.a.button,onClick:function(){return n(t)},children:t})},t)}))})},O=n(9),f=n.n(O),p=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:f.a.title,children:e}),n]})},v=n(1),x=n.n(v),_=function(t){var e=t.title,n=t.good,i=t.neutral,c=t.bad,s=t.total,o=t.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:x.a.title,children:e}),Object(a.jsxs)("ul",{className:x.a.list,children:[Object(a.jsxs)("li",{className:x.a.item,children:["Good: ",n]}),Object(a.jsxs)("li",{className:x.a.item,children:["Neutral: ",i]}),Object(a.jsxs)("li",{className:x.a.item,children:["Bad: ",c]}),Object(a.jsxs)("li",{className:x.a.item,children:["Total: ",s]}),Object(a.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",o,"%"]})]})]})},g=n(10),k=n.n(g),N=function(t){var e=t.message;return Object(a.jsx)("div",{className:k.a.notification,children:e})},F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.setItem=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.round(100*e/t.countTotalFeedback())},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,i=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(p,{title:"Please leave feedback",children:[Object(a.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.setItem}),0===this.countTotalFeedback()?Object(a.jsx)(N,{message:"No feedback given"}):Object(a.jsx)(_,{title:"Statistics",good:e,neutral:n,bad:i,total:c,positivePercentage:s})]})})}}]),n}(i.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.f6ce7e2e.chunk.js.map