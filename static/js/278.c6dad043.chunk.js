"use strict";(self.webpackChunktz_cards_tweet=self.webpackChunktz_cards_tweet||[]).push([[278],{265:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var n=a(439),t=a(791),r=a(165),c=a(861),i=a(243),l="https://644218c576540ce22584450b.mockapi.io";function o(){return(o=(0,c.Z)((0,r.Z)().mark((function e(){var s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(l,"/users"));case 3:return s=e.sent,a=s.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function A(e,s){return u.apply(this,arguments)}function u(){return u=(0,c.Z)((0,r.Z)().mark((function e(s,a){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.put("".concat(l,"/users/").concat(s),a);case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),u.apply(this,arguments)}var d=a.p+"static/media/pictureMessage.032662a2a907475127d7.png",f=a(184),h=function(e){var s=e.props,a=(0,t.useState)(s.followers),r=(0,n.Z)(a,2),c=r[0],i=r[1],l=(0,t.useState)(s.following),o=(0,n.Z)(l,2),u=o[0],h=o[1],g=function(e){u?(h(!1),i((function(e){return e-1})),A(e.id,{following:!1,followers:s.followers-1})):(h(!0),i((function(e){return e+1})),A(e.id,{following:!0,followers:s.followers+1}))};return(0,f.jsxs)("li",{className:"card",children:[(0,f.jsxs)("div",{className:"card__Avatar",children:[(0,f.jsx)("img",{className:"goit__Span",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"logo"}),(0,f.jsx)("div",{className:"card__messageImg",children:(0,f.jsx)("img",{src:d,alt:""})}),(0,f.jsx)("div",{className:"avatar",children:(0,f.jsx)("img",{src:s.avatar||"data:image/png;base64,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",alt:"",width:62})})]}),(0,f.jsxs)("div",{className:"card__Tweets",children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:s.tweets})," TWEETS"]}),(0,f.jsxs)("p",{children:[(0,f.jsxs)("span",{children:[new Intl.NumberFormat("en-IN").format(c)," "]}),"FOLLOWERS"]})]}),(0,f.jsx)("div",{className:"card__btn",children:u?(0,f.jsx)("button",{className:"btn is-active btn",onClick:function(){return g(s)},children:"FOLLOWING"}):(0,f.jsx)("button",{className:"btn",onClick:function(){return g(s)},children:"FOLLOW"})})]})},g=a(87),p=a(691),x=3,m=function(){var e=(0,t.useState)([]),s=(0,n.Z)(e,2),a=s[0],r=s[1],c=(0,t.useState)([]),i=(0,n.Z)(c,2),l=i[0],A=i[1],u=(0,t.useState)(!0),d=(0,n.Z)(u,2),m=d[0],j=d[1];(0,t.useEffect)((function(){(function(){return o.apply(this,arguments)})().then((function(e){return r(e)}))}),[]),(0,t.useEffect)((function(){a.length>0&&A(a.slice(0,x))}),[a]);return a.length<=0?(0,f.jsx)("div",{className:"loader",children:(0,f.jsx)(p.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}):(0,f.jsxs)("section",{className:"section",children:[(0,f.jsxs)("div",{className:"section__btn--back",children:[(0,f.jsx)(g.rU,{to:"/",className:"goBack",children:"Back"}),(0,f.jsx)("div",{children:(0,f.jsxs)("label",{className:"filtr",children:["Fiter Cards",(0,f.jsxs)("select",{id:"folow",onChange:function(e){switch(e.target.value){case"follow":A(a.filter((function(e){return!e.following}))),j(!1);break;case"followings":A(a.filter((function(e){return e.following}))),j(!1);break;case"all":A(a),j(!1)}},children:[(0,f.jsx)("option",{value:"all",children:"all"}),(0,f.jsx)("option",{value:"follow",children:"follow"}),(0,f.jsx)("option",{value:"followings",children:"followings"})]})]})})]}),(0,f.jsx)("ul",{className:"cards",children:l.length>0?l.map((function(e){return(0,f.jsx)(h,{props:e},e.id)})):(0,f.jsx)("li",{})}),(0,f.jsx)("div",{className:"addMore",children:(0,f.jsx)("button",{onClick:function(){l.length<a.length&&(x+=3,A(a.slice(0,x))),a.length<=l.length+1&&j(!1)},className:m?"addMoreBtn":"none",children:"Add More"})})]})}}}]);
//# sourceMappingURL=278.c6dad043.chunk.js.map