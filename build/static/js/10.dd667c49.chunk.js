(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{125:function(e,t){},155:function(e,t,r){"use strict";r.r(t);var a=r(13),n=r.n(a),c=r(25),l=r(2),u=r(0),s=r.n(u),o=r(1),i=r(97),m=r(98),f=r(96),d=r(149),p=r(69),b=r(56),h=r(99);t.default=function(){var e=function(){var e=Object(u.useState)(!1),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(u.useState)(),o=Object(l.a)(s,2),i=o[0],m=o[1],f=Object(u.useRef)([]),d=Object(u.useCallback)(function(){var e=Object(c.a)(n.a.mark(function e(t){var r,c,l,u,s,o,i=arguments;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,l=i.length>3&&void 0!==i[3]?i[3]:{},a(!0),u=new AbortController,f.current.push(u),e.prev=6,e.next=9,fetch(t,{method:r,body:c,headers:l,signal:u.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(o=e.sent,f.current=f.current.filter(function(e){return e!==u}),s.ok){e.next=16;break}throw new Error(o.message);case 16:return a(!1),e.abrupt("return",o);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}},e,null,[[6,20]])}));return function(t){return e.apply(this,arguments)}}(),[]);return Object(u.useEffect)(function(){return function(){f.current.forEach(function(e){return e.abort()})}},[]),{isLoading:r,error:i,sendRequest:d,clearError:function(){m(null)}}}(),t=(e.isLoading,e.error),r=e.sendRequest,a=e.clearError,v=Object(u.useState)(),E=Object(l.a)(v,2),j=E[0],w=E[1],O=Object(u.useState)(),g=Object(l.a)(O,2),y=g[0],C=g[1],x=(Object(o.f)(),Object(u.useRef)("")),N=Object(u.useRef)(),R=Object(u.useRef)(),k=Object(u.useRef)(),P=Object(u.useRef)(),q=Object(u.useRef)();Object(u.useEffect)(function(){setTimeout(function(){C(),w(),a()},1e4),Object(h.b)(6)});var L=function(){C("User registered successfully!"),x.current.value="",N.current.value="",R.current.value="",k.current.value="",P.current.value=""},S=function(){var e=Object(c.a)(n.a.mark(function e(t){var a,c,l,u,s,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=x.current.value,c=N.current.value,l=R.current.value,u=k.current.value,s=P.current.value,o=q.current.value,u===s){e.next=10;break}return w("Password and Confirm Password should be match!"),e.abrupt("return",!1);case 10:if(0!=Object(h.c)(o)){e.next=13;break}return w("Captcha does not match!"),e.abrupt("return",!1);case 13:return e.prev=13,e.next=16,r("".concat("http://localhost:8000","/api/user/registration"),"POST",JSON.stringify({name:a,email:c,phone:l,password:u}),{"Content-Type":"application/json"});case 16:e.sent,L(),e.next=22;break;case 20:e.prev=20,e.t0=e.catch(13);case 22:case"end":return e.stop()}},e,null,[[13,20]])}));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(b.a,null,s.a.createElement(i.a,{fluid:"sm"},s.a.createElement(m.a,{className:"justify-content-md-center"},s.a.createElement(f.a,{xs:!0,lg:"6"},s.a.createElement("h2",null,"Registration Form:"),j&&s.a.createElement("div",{className:"alert alert-danger",role:"alert"},j),t&&s.a.createElement("div",{className:"alert alert-danger",role:"alert"},t),y&&s.a.createElement("div",{className:"alert alert-success",role:"alert"},y),s.a.createElement(d.a,{onSubmit:S},s.a.createElement(d.a.Group,{className:"mb-3"},s.a.createElement(d.a.Label,{htmlFor:"name"},"Name"),s.a.createElement(d.a.Control,{ref:x,id:"name",type:"text",placeholder:"Name",required:!0}),s.a.createElement(d.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(d.a.Control,{ref:N,type:"email",placeholder:"Email",required:!0}),s.a.createElement(d.a.Label,{htmlFor:"phone"},"Phone Number"),s.a.createElement(d.a.Control,{ref:R,type:"text",placeholder:"Phone Number",required:!0}),s.a.createElement(d.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(d.a.Control,{minLength:"5",ref:k,type:"password",placeholder:"Password",required:!0}),s.a.createElement(d.a.Label,{htmlFor:"cpassword"},"Confirm Password"),s.a.createElement(d.a.Control,{ref:P,id:"cpassword",type:"password",placeholder:"Confirm Password",required:!0}),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(h.a,null),s.a.createElement(d.a.Control,{ref:q,id:"captcha",placeholder:"Enter captcha",required:!0})),s.a.createElement(p.a,{type:"submit",className:"btn-margin-top",variant:"primary"},"Register")))))))}},56:function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=function(e){return n.a.createElement("div",{className:"center"},e.children)}}}]);
//# sourceMappingURL=10.dd667c49.chunk.js.map