"use strict";(self.webpackChunkmy_blog_frontend=self.webpackChunkmy_blog_frontend||[]).push([[985],{6017:function(e,r,n){var t=n(184);r.Z=function(e){return(0,t.jsx)("div",{className:"center",children:e.children})}},985:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(5861),a=n(9439),s=n(7757),c=n.n(s),o=n(2791),l=n(6871),u=n(7022),i=n(9743),d=n(2677),f=n(5630),h=n(3360),p=n(6017),m=n(184),v=function(){var e=function(){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),n=r[0],s=r[1],l=(0,o.useState)(),u=(0,a.Z)(l,2),i=u[0],d=u[1],f=(0,o.useRef)([]),h=(0,o.useCallback)(function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a,o,l,u,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",t=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{},s(!0),o=new AbortController,f.current.push(o),e.prev=6,e.next=9,fetch(r,{method:n,body:t,headers:a,signal:o.signal});case 9:return l=e.sent,e.next=12,l.json();case 12:if(u=e.sent,f.current=f.current.filter((function(e){return e!==o})),l.ok){e.next=16;break}throw new Error(u.message);case 16:return s(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),s(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(r){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){return function(){f.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:h,clearError:function(){d(null)}}}(),r=(e.isLoading,e.error),n=e.sendRequest,s=e.clearError,v=(0,o.useState)(),x=(0,a.Z)(v,2),Z=x[0],b=x[1],j=(0,o.useState)(),w=(0,a.Z)(j,2),g=w[0],y=w[1],N=((0,l.s0)(),(0,o.useRef)("")),C=(0,o.useRef)(),P=(0,o.useRef)(),R=(0,o.useRef)(),E=(0,o.useRef)();(0,o.useEffect)((function(){setTimeout((function(){y(),b(),s()}),1e4)}));var k=function(){y("User registered successfully!"),N.current.value="",C.current.value="",P.current.value="",R.current.value="",E.current.value=""},L=function(){var e=(0,t.Z)(c().mark((function e(r){var t,a,s,o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t=N.current.value,a=C.current.value,s=P.current.value,o=R.current.value,l=E.current.value,o===l){e.next=9;break}return b("Password and Confirm Password should be match!"),e.abrupt("return",!1);case 9:return e.prev=9,e.next=12,n("".concat("http://localhost:8000","/api/user/registration"),"POST",JSON.stringify({name:t,email:a,phone:s,password:o}),{"Content-Type":"application/json"});case 12:e.sent,k(),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(r){return e.apply(this,arguments)}}();return(0,m.jsx)(p.Z,{children:(0,m.jsx)(u.Z,{fluid:"sm",children:(0,m.jsx)(i.Z,{className:"justify-content-md-center",children:(0,m.jsxs)(d.Z,{xs:!0,lg:"6",children:[(0,m.jsx)("h2",{children:"Registration Form:"}),Z&&(0,m.jsx)("div",{className:"alert alert-danger",role:"alert",children:Z}),r&&(0,m.jsx)("div",{className:"alert alert-danger",role:"alert",children:r}),g&&(0,m.jsx)("div",{className:"alert alert-success",role:"alert",children:g}),(0,m.jsx)(f.Z,{onSubmit:L,children:(0,m.jsxs)(f.Z.Group,{className:"mb-3",children:[(0,m.jsx)(f.Z.Label,{htmlFor:"name",children:"Name"}),(0,m.jsx)(f.Z.Control,{ref:N,id:"name",type:"text",placeholder:"Name",required:!0}),(0,m.jsx)(f.Z.Label,{htmlFor:"email",children:"Email"}),(0,m.jsx)(f.Z.Control,{ref:C,type:"email",placeholder:"Email",required:!0}),(0,m.jsx)(f.Z.Label,{htmlFor:"phone",children:"Phone Number"}),(0,m.jsx)(f.Z.Control,{ref:P,type:"text",placeholder:"Phone Number",required:!0}),(0,m.jsx)(f.Z.Label,{htmlFor:"password",children:"Password"}),(0,m.jsx)(f.Z.Control,{minLength:"5",ref:R,type:"password",placeholder:"Password",required:!0}),(0,m.jsx)(f.Z.Label,{htmlFor:"cpassword",children:"Confirm Password"}),(0,m.jsx)(f.Z.Control,{ref:E,id:"cpassword",type:"password",placeholder:"Confirm Password",required:!0}),(0,m.jsx)(h.Z,{type:"submit",className:"btn-margin-top",variant:"primary",children:"Register"})]})})]})})})})}},7022:function(e,r,n){var t=n(1413),a=n(5987),s=n(1694),c=n.n(s),o=n(2791),l=n(162),u=n(184),i=["bsPrefix","fluid","as","className"],d=o.forwardRef((function(e,r){var n=e.bsPrefix,s=e.fluid,o=e.as,d=void 0===o?"div":o,f=e.className,h=(0,a.Z)(e,i),p=(0,l.vE)(n,"container"),m="string"===typeof s?"-".concat(s):"-fluid";return(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:r},h),{},{className:c()(f,s?"".concat(p).concat(m):p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},r.Z=d},9743:function(e,r,n){var t=n(1413),a=n(5987),s=n(1694),c=n.n(s),o=n(2791),l=n(162),u=n(184),i=["bsPrefix","className","as"],d=o.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,o=e.as,d=void 0===o?"div":o,f=(0,a.Z)(e,i),h=(0,l.vE)(n,"row"),p=(0,l.pi)(),m="".concat(h,"-cols"),v=[];return p.forEach((function(e){var r,n=f[e];delete f[e],r=null!=n&&"object"===typeof n?n.cols:n;var t="xs"!==e?"-".concat(e):"";null!=r&&v.push("".concat(m).concat(t,"-").concat(r))})),(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:r},f),{},{className:c().apply(void 0,[s,h].concat(v))}))}));d.displayName="Row",r.Z=d}}]);
//# sourceMappingURL=985.787e54fd.chunk.js.map