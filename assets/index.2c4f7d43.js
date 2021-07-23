var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},s=(e,r)=>t(e,n(r));import{r as c,u,V as m,B as p,L as h,C as f,a as d,R as E,b as g,c as v,d as b,O as k,M as x,G as w,e as y,f as M,Q as R,g as C,h as A,D as P,S as B,H as I,i as S,j as F,k as q,l as D}from"./vendor.6b906069.js";var j=function(e,t,n){return Math.min(Math.max(t,e),n)},N=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},L=function(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]},W=function(e,t){return[e[0]*t[0],e[1]*t[1],e[2]*t[2]]},K=function(e,t){return[e[0]*t,e[1]*t,e[2]*t]},G=function(e){var t=T(e);return 0===t?Y():K(e,1/t)},O=function(e){return H(W(e,e))},H=function(e){return e[0]+e[1]+e[2]},z=function(e,t){var n=e[0],r=e[1],o=e[2],i=t[0],a=t[1],l=t[2];return[r*l-o*a,o*i-n*l,n*a-r*i]},T=function(e){return Math.pow(O(e),.5)},X=function(e,t){var n=L(e,t);return T(n)},Y=function(){return[0,0,0]},V=function(e){if(3!==e.length)throw new Error("Cannot create V3 from "+e+", length is "+e.length+". Length should be 3");return e},J=function(e){return[e.x,e.y,e.z]},Q=function(e,t){var n=ee(t),r=U(t,N(N([],e),[0])),o=U(r,n);return[o[0],o[1],o[2]]},$=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},U=function(e,t){var n=e[0],r=e[1],o=e[2],i=e[3],a=t[0],l=t[1],s=t[2],c=t[3];return[n*c+i*a+r*s-o*l,r*c+i*l+o*a-n*s,o*c+i*s+n*l-r*a,i*c-n*a-r*l-o*s]},Z=function(e){var t=e[0],n=e[1],r=e[2],o=Math.cos,i=Math.sin,a=o(t/2),l=o(n/2),s=o(r/2),c=i(t/2),u=i(n/2),m=i(r/2);return[c*l*s+a*u*m,a*u*s-c*l*m,a*l*m+c*u*s,a*l*s-c*u*m]},_=function(e,t,n){var r=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3];if(Math.abs(r)>=1)return e;var o=Math.acos(r),i=Math.sqrt(1-r*r);if(Math.abs(i)<.001)return[.5*e[0]+.5*t[0],.5*e[1]+.5*t[1],.5*e[2]+.5*t[2],.5*e[3]+.5*t[3]];var a=Math.sin((1-n)*o)/i,l=Math.sin(n*o)/i;return[e[0]*a+t[0]*l,e[1]*a+t[1]*l,e[2]*a+t[2]*l,e[3]*a+t[3]*l]},ee=function(e){return[-e[0],-e[1],-e[2],e[3]]},te=function(e){var t=ee(e),n=ne(e);return[t[0]/n,t[1]/n,t[2]/n,t[3]/n]},ne=function(e){return Math.hypot.apply(Math,e)},re=function(e){var t=Math.hypot.apply(Math,e);return 0===t?[0,0,0,1]:[e[0]/t,e[1]/t,e[2]/t,e[3]/t]},oe=function(e,t){var n=G(e),r=G(t),o=function(e,t){var n=W(e,t);return H(n)}(n,r);if(o>=1)return[0,0,0,1];if(o<-1+Number.EPSILON){var i=z([1,0,0],n);return 0===O(i)&&(i=z([0,1,0],n)),i=G(i),ie(i,Math.PI)}var a=$($([],z(n,r)),[1+o]);return re(a)},ie=function(e,t){var n=t/2;return $($([],K(e,Math.sin(n))),[Math.cos(n)])},ae=function(e){return[e.x,e.y,e.z,e.w]},le=function(e,t,n){for(var r=new Array(2),o=0;o<2;o++){var i=e[o],a=t[o];r[o]=n(i,a)}return he(r)},se=function(e){var t=e[0],n=e[1];return Math.atan2(n,t)},ce=function(e,t){return le(e,t,(function(e,t){return e-t}))},ue=function(e){return Math.pow(function(e){return Math.pow(e[0],2)+Math.pow(e[1],2)}(e),.5)},me=function(e,t){var n=ce(e,t);return ue(n)},pe=function(e,t){var n=e[0],r=e[1],o=Math.cos(t),i=Math.sin(t);return[n*o-r*i,n*i+r*o]},he=function(e){if(2!==e.length)throw new Error("Cannot create V2 from "+e+", length is "+e.length+". Length should be 2");return e},fe=1e-4,de=.001,Ee=0,ge=1,ve=0,be=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};function ke(e,t,n,r){var o,i,a,l,s;switch(void 0===r&&(r={method:"FABRIK"}),r.method){case"FABRIK":return function(e,t,n,r){var o=r.learningRate,i=r.deltaAngle,a=r.acceptedError,l=Me(e,t),s=l.transforms,c=l.effectorPosition,u=me(n,c);if(u<a)return{links:e.map(Re),isWithinAcceptedError:!0,getErrorDistance:function(){return u}};if(s.length!==e.length+1)throw new Error("Joint transforms should have the same length as links + 1. Got "+s.length+", expected "+e.length);var m=e.map((function(t,r){var a=t.rotation,l=void 0===a?0:a,c=t.position,m=t.constraints,p=ye(be([{position:c,rotation:l+i}],e.slice(r+1)),s[r],n);return{rotation:l+-((p-u)/i)*("function"==typeof o?o(p):o),position:c,constraints:m}})),p=Me(m,t).transforms,h=we(m,p);return{links:h,getErrorDistance:function(){return ye(h,t,n)},isWithinAcceptedError:void 0}}(e,t,n,{method:"FABRIK",acceptedError:null!==(o=r.acceptedError)&&void 0!==o?o:Ee,deltaAngle:null!==(i=r.deltaAngle)&&void 0!==i?i:fe,learningRate:null!==(a=r.learningRate)&&void 0!==a?a:de});case"CCD":return function(e,t,n,r){for(var o=r.acceptedError,i=r.learningRate,a=be([],e.map(Re)),l=a.length-1;l>=0;l--){var s=Me(a,t),c=s.effectorPosition,u=me(n,c);if(u<o)break;var m=a[l],p=m.rotation,h=m.position,f=m.constraints,d=s.transforms[l],E=se(ce(n,d.position)),g={rotation:p+-(se(ce(c,d.position))-E)*("function"==typeof i?i(u):i),position:h,constraints:f};a[l]=g;var v=xe(g,Me(a,t).transforms[l+1]);a[l]=v}var b=Me(a,t).transforms,k=we(a,b);return{links:k,getErrorDistance:function(){return ye(k,t,n)},isWithinAcceptedError:void 0}}(e,t,n,{method:"CCD",acceptedError:null!==(l=r.acceptedError)&&void 0!==l?l:ve,learningRate:null!==(s=r.learningRate)&&void 0!==s?s:ge})}}function xe(e,t){var n=e.rotation,r=e.position,o=e.constraints;if(void 0===o)return{position:r,rotation:n};if("number"==typeof o){var i=o/2;return{position:r,rotation:j(n,-i,i),constraints:o}}return function(e){return void 0!==e.value}(o)?"global"===o.type?{position:r,rotation:n+(o.value-t.rotation),constraints:o}:{position:r,rotation:o.value,constraints:o}:{position:r,rotation:j(n,o.min,o.max),constraints:o}}function we(e,t){return e.map((function(e,n){return xe(e,t[n+1])}))}function ye(e,t,n){var r=function(e,t){return Me(e,t).effectorPosition}(e,t);return me(n,r)}function Me(e,t){for(var n,r,o,i=[t],a=0;a<e.length;a++){var l=e[a],s=i[a],c=(null!==(n=l.rotation)&&void 0!==n?n:0)+s.rotation,u=pe(l.position,c),m=(r=u,o=s.position,le(r,o,(function(e,t){return e+t})));i.push({position:m,rotation:c})}return{transforms:i,effectorPosition:i[i.length-1].position,effectorRotation:i[i.length-1].rotation}}function Re(e){var t=e.rotation,n=e.position,r=e.constraints;return{rotation:t,position:be([],n),constraints:void 0===r?void 0:r}}var Ce=function(){return(Ce=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Ae=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};function Pe(e,t,n,r){var o,i,a,l,s;switch(void 0===r&&(r={method:"FABRIK"}),r.method){case"FABRIK":return function(e,t,n,r){var o=r.deltaAngle,i=r.learningRate,a=r.acceptedError,l=Se(e,t),s=l.transforms,c=l.effectorPosition,u=X(n,c);if(u<a)return{links:e.map(Fe),isWithinAcceptedError:!0,getErrorDistance:function(){return u}};if(s.length!==e.length+1)throw new Error("Joint transforms should have the same length as links + 1. Got "+s.length+", expected "+e.length);var m=e.map((function(t,r){var a=t.position,l=t.rotation,c=void 0===l?[0,0,0,1]:l,m=t.constraints,p=V([0,0,0].map((function(t,l){var m=[0,0,0];m[l]=o;var p={position:a,rotation:U(c,Z(V(m)))},h=Ie(Ae([p],e.slice(r+1)),s[r],n);return-((h-u)/o)*("function"==typeof i?i(h):i)}))),h=U(c,Z(p));return{position:a,rotation:h,constraints:m}})),p=Se(m,t).transforms,h=function(e,t){return e.map((function(e,n){return Be(e,t[n+1])}))}(m,p);return{links:h,getErrorDistance:function(){return Ie(h,t,n)},isWithinAcceptedError:void 0}}(e,t,n,{method:"FABRIK",acceptedError:null!==(o=r.acceptedError)&&void 0!==o?o:Ee,deltaAngle:null!==(i=r.deltaAngle)&&void 0!==i?i:fe,learningRate:null!==(a=r.learningRate)&&void 0!==a?a:de});case"CCD":return function(e,t,n,r){for(var o=r.learningRate,i=r.acceptedError,a=Ae([],e.map(Fe)),l=a.length-1;l>=0;l--){var s=Se(a,t),c=s.effectorPosition,u=X(n,c);if(u<i)break;var m=a[l],p=m.rotation,h=m.position,f=m.constraints,d=s.transforms[l],E=te(d.rotation),g=Q(n,E),v=Q(c,E),b=Q(d.position,E),k=L(g,b),x=L(v,b),w=oe(x,k),y=_([0,0,0,1],w,"function"==typeof o?o(u):o),M={rotation:U(p,y),position:h,constraints:f};a[l]=M;var R=Be(M,Se(a,t).transforms[l+1]);a[l]=R}return{links:a,getErrorDistance:function(){return Ie(a,t,n)},isWithinAcceptedError:void 0}}(e,t,n,{method:"CCD",acceptedError:null!==(l=r.acceptedError)&&void 0!==l?l:ve,learningRate:null!==(s=r.learningRate)&&void 0!==s?s:ge})}}function Be(e,t){var n=e.position,r=e.rotation,o=e.constraints;if(void 0===o)return{position:n,rotation:r};if(De(o)){if("global"===o.type){var i=o.value,a=t.rotation;return{position:n,rotation:U(U(r,te(a)),i),constraints:o}}return{position:n,rotation:o.value,constraints:o}}var l,s,c,u,m,p,h=o.pitch,f=o.yaw,d=o.roll;return"number"==typeof h?(l=-h/2,s=h/2):void 0===h?(l=-1/0,s=1/0):(l=h.min,s=h.max),"number"==typeof f?(c=-f/2,u=f/2):void 0===f?(c=-1/0,u=1/0):(c=f.min,u=f.max),"number"==typeof d?(m=-d/2,p=d/2):void 0===d?(m=-1/0,p=1/0):(m=d.min,p=d.max),{position:n,rotation:function(e,t,n){var r=[e[0],e[1],e[2]],o=e[3],i=V(r.map((function(e,r){var i=2*Math.atan(e/o),a=t[r],l=n[r];if(a>l)throw new Error("Lower bound should be less than upper bound for component "+r+". Lower: "+a+", upper: "+l);var s=j(i,a,l);return Math.tan(.5*s)}))),a=i[0],l=i[1],s=i[2];return re([a,l,s,1])}(r,[l,c,m],[s,u,p]),constraints:qe(o)}}function Ie(e,t,n){var r=function(e,t){return Se(e,t).effectorPosition}(e,t);return X(n,r)}function Se(e,t){for(var n,r,o,i=[Ce({},t)],a=0;a<e.length;a++){var l=e[a],s=i[a],c=U(s.rotation,null!==(n=l.rotation)&&void 0!==n?n:[0,0,0,1]),u=Q(l.position,c),m=(r=u,o=s.position,[r[0]+o[0],r[1]+o[1],r[2]+o[2]]);i.push({position:m,rotation:c})}return{transforms:i,effectorPosition:i[i.length-1].position}}function Fe(e){var t=e.rotation,n=e.position,r=e.constraints;return{rotation:t,position:Ae([],n),constraints:void 0===r?void 0:qe(r)}}function qe(e){var t={};if(De(e))return{type:e.type,value:Ae([],e.value)};var n=e.pitch,r=e.yaw,o=e.roll;return"number"==typeof n?t.pitch=n:void 0!==n&&(t.pitch=Ce({},n)),"number"==typeof r?t.yaw=r:void 0!==r&&(t.yaw=Ce({},r)),"number"==typeof o?t.roll=o:void 0!==o&&(t.roll=Ce({},o)),t}function De(e){return void 0!==e.value}const je=({link:e,child:t})=>{const n=c.exports.useRef(),r=c.exports.useRef();u((()=>{n.current&&r.current&&(n.current.quaternion.set(...e.rotation),r.current.position.set(...e.position))}));const o=c.exports.useMemo((()=>{const t=[new m,new m(...e.position)],n=(new p).setFromPoints(t),r=new h({color:new f("#8B008B")});return new d(n,r)}),[e]);return E.createElement("group",{ref:n},E.createElement("mesh",{ref:r},E.createElement("sphereBufferGeometry",{args:[.2,8,8]}),E.createElement("meshStandardMaterial",{transparent:!0,wireframe:!0}),t&&E.createElement(je,l({},t))),E.createElement("primitive",{object:o}))},Ne=({base:e,links:t})=>{const n=c.exports.useRef(),r=c.exports.useMemo((()=>function(e){var t;let n;for(let r=e.length-1;r>=0;r--){const o={link:s(l({},e[r]),{rotation:null!=(t=e[r].rotation)?t:[0,0,0,1]})};void 0!==n?n={link:o.link,child:n}:n=o}return n}(t)),[t]);return u((()=>{var o;if(!n.current)return;n.current.position.set(...e.position),n.current.quaternion.set(...e.rotation);let i=0,a=r;for(;void 0!==a&&void 0!==t[i];)a.link.rotation=null!=(o=t[i].rotation)?o:[0,0,0,1],i++,a=a.child})),E.createElement("mesh",{ref:n},E.createElement("boxBufferGeometry",{args:[.3,.3,.01]}),E.createElement("meshNormalMaterial",null),r&&E.createElement(je,l({},r)))};const Le=({links:e,base:t})=>{const n=c.exports.useRef();u((()=>{var r;if(void 0===n.current)return;const{transforms:o}=Se(e,t);for(let e=0;e<n.current.children.length;e++){const t=n.current.children[e],i=null==(r=o[e])?void 0:r.position;if(void 0===i)throw new Error(`No corresponding child position for index ${e}`);t.position.set(...i)}}));const r=c.exports.useMemo((()=>Array.from({length:e.length+1}).map(((e,t)=>E.createElement("mesh",{key:t},E.createElement("boxBufferGeometry",{args:[.1,.1,.5]}),E.createElement("meshBasicMaterial",{color:"red"}))))),[e]);return E.createElement("group",{ref:n},r)},We=({position:e,setPosition:t})=>{const{camera:n}=g();return c.exports.useEffect((()=>{const e=e=>{const r=new m,o=new m;r.set(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1,.5),r.unproject(n),r.sub(n.position).normalize();const i=-n.position.z/r.z;o.copy(n.position).add(r.multiplyScalar(i)),t(J(o))};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[]),E.createElement("mesh",{position:[...e]},E.createElement("boxBufferGeometry",{args:[.3,.3,.3]}),E.createElement("meshBasicMaterial",{color:"hotpink"}))};var Ke="https://tmf-code.github.io/inverse-kinematics/assets/arm2.2c2f3b19.gltf";function Ge(){return E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"purple"},linear:!0},E.createElement(c.exports.Suspense,{fallback:null},E.createElement(Oe,null)))}function Oe(){const{nodes:e}=v(Ke),t=c.exports.useRef(),[n,r]=c.exports.useState(Y()),[o]=c.exports.useState({position:Y(),rotation:[0,0,0,1]}),[i,a]=c.exports.useState([]),l=c.exports.useRef(null);return u((()=>{var e;const r=null==(e=t.current)?void 0:e.children.find((e=>e.isBone));if(!r)return;const i={position:J(r.position),rotation:[0,0,0,1]};o.position=i.position,o.rotation=i.rotation;const l=function(e){let t=e;const n=[e];for(;void 0!==t.children[0];)n.push(t.children[0]),t=t.children[0];return n}(r),s=l.map(((e,t,n)=>{var r;const o=n[t+1],i=ae(e.quaternion);return{position:J(null!=(r=null==o?void 0:o.position)?r:e.position),rotation:i}})),c=s.reduce(((e,t)=>e+T(t.position)),0);const u=Pe(s,i,n,{learningRate:function(e){const t=j(e/c,0,1);return t>.1?.001:1e-4+1e-4*(t/.02)},acceptedError:c/1e3,method:"FABRIK"}).links;u.forEach(((e,t,n)=>{l[t].quaternion.set(...e.rotation)})),a(u)})),E.createElement(E.Fragment,null,E.createElement(k,{ref:l}),E.createElement(We,{position:n,setPosition:r}),E.createElement(Ne,{base:o,links:i}),E.createElement(Le,{base:o,links:i}),E.createElement("group",{ref:t,dispose:null},E.createElement("primitive",{object:e.shoulder}),E.createElement("skinnedMesh",{geometry:e.Cylinder.geometry,material:new x,skeleton:e.Cylinder.skeleton})),E.createElement("skeletonHelper",{args:[e.shoulder]}),E.createElement(w,{alignment:"bottom-right",margin:[80,80],onTarget:()=>{var e;return null==(e=null==l?void 0:l.current)?void 0:e.target},onUpdate:()=>{var e;return null==(e=l.current)?void 0:e.update()}},E.createElement(y,{axisColors:["red","green","blue"],labelColor:"black"})))}v.preload(Ke);const He=(e,t)=>{const n=c.exports.useRef(),r=c.exports.useRef(),o=c.exports.useCallback((async i=>{void 0===r.current&&(r.current=i);const a=i-r.current;a>1e3/e&&(await t(a),r.current=i),n.current=requestAnimationFrame(o)}),[t,e]);c.exports.useEffect((()=>(n.current=requestAnimationFrame(o),()=>{n.current&&cancelAnimationFrame(n.current)})),[o])},ze=({target:e,links:t,base:n})=>{const r=c.exports.useRef(null);return He(1,(()=>{r.current&&(r.current.innerText=Ie(t,n,e).toFixed(3))})),E.createElement("div",{style:{position:"absolute",top:0,left:0,userSelect:"none"}},E.createElement("table",null,E.createElement("tbody",null,E.createElement("tr",null,E.createElement("td",null,"Distance"),E.createElement("td",{ref:r})))))},Te={position:[0,0,0],rotation:[0,0,0,1]};function Xe({method:e}){const[t,n]=c.exports.useState([500,50,0]),[r,o]=c.exports.useState([]),{linkCount:i,linkLength:a,linkMinAngle:l,linkMaxAngle:s}=M({linkCount:{value:4,min:0,max:50,step:1},linkLength:{value:1,min:.1,max:2,step:.1},linkMinAngle:{value:-90,min:-360,max:0,step:10},linkMaxAngle:{value:90,min:0,max:360,step:10}});return c.exports.useEffect((()=>{o(Ye(i,a))}),[i,a,l,s]),He(60,(()=>{const n=i*a;const o=Pe(r,Te,t,{method:e,learningRate:"FABRIK"===e?function(e){const t=j(e/n,0,1);return t>.5?.01:(.001+.001*(t/.02))/n}:1,acceptedError:0}).links;r.forEach(((e,t)=>{r[t]=o[t]}))})),E.createElement("div",null,E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(k,null),E.createElement("group",null,E.createElement(Ne,{base:Te,links:r}),E.createElement(Le,{links:r,base:Te}),E.createElement(We,{position:t,setPosition:n}))),E.createElement(ze,{target:t,links:r,base:Te}))}const Ye=(e,t,n,r)=>Array.from({length:e}).map((()=>({position:[t,0,0],rotation:[0,0,0,1]})));function Ve(){const[e,t]=c.exports.useState([500,50,0]),[n,r]=c.exports.useState([]),[o,i]=c.exports.useState({position:[0,0,0],rotation:[0,0,0,1]}),a=c.exports.useRef(void 0),l=c.exports.useRef();return c.exports.useEffect((()=>{if(void 0===l.current)return;if(void 0!==a.current)return;const e=[],t=n=>{e.push(n),n.children[0]&&t(n.children[0])};l.current.children[0]&&t(l.current.children[0]);const n=e.map((e=>({rotation:ae(e.quaternion),position:J(e.position)})));r(n),i({position:J(l.current.getWorldPosition(new m)),rotation:ae(l.current.getWorldQuaternion(new R))}),a.current=e})),He(60,(()=>{if(!a.current)return;const t=n.reduce(((e,t)=>e+T(t.position)),0);const r=Pe(n,o,e,{learningRate:function(e){const n=j(e/t,0,1);return n>.1?.01:.001+.001*(n/.02)},acceptedError:t/1e3,method:"FABRIK"}).links;n.forEach(((e,t)=>{const o=r[t];n[t]=o;const i=o.rotation,l=a.current[t],s=null==l?void 0:l.position.length(),c=Q([s,0,0],i);l.position.set(...c),l.quaternion.set(...i)}))})),E.createElement("div",null,E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(k,null),E.createElement(Ne,{base:o,links:n}),E.createElement(Le,{links:n,base:o}),E.createElement(We,{position:e,setPosition:t}),E.createElement("group",{position:[0,0,0],ref:l},E.createElement("mesh",{position:[2,0,0]},E.createElement("sphereBufferGeometry",{args:[.3]}),E.createElement("meshNormalMaterial",{wireframe:!0}),E.createElement("mesh",{position:[2,0,0]},E.createElement("sphereBufferGeometry",{args:[.3]}),E.createElement("meshNormalMaterial",{wireframe:!0}),E.createElement("mesh",{position:[2,0,0]},E.createElement("sphereBufferGeometry",{args:[.3]}),E.createElement("meshNormalMaterial",{wireframe:!0})))))),E.createElement(ze,{target:e,links:n,base:o}))}const Je=({link:e,child:t})=>{const n=c.exports.useRef(),r=c.exports.useRef();u((()=>{n.current&&r.current&&(n.current.rotation.set(0,0,e.rotation),r.current.position.set(...e.position,0))}));const o=c.exports.useMemo((()=>{const t=[new m,new m(...e.position,0)],n=(new p).setFromPoints(t),r=new h({color:new f("#8B008B")});return new d(n,r)}),[e]);return E.createElement("group",{ref:n},E.createElement("mesh",{ref:r},E.createElement("sphereBufferGeometry",{args:[20,100,100]}),E.createElement("meshNormalMaterial",null),t&&E.createElement(Je,l({},t))),E.createElement("primitive",{object:o}))},Qe=({base:e,links:t})=>{const n=c.exports.useRef(),r=c.exports.useMemo((()=>function(e){var t;let n;for(let r=e.length-1;r>=0;r--){const o={link:s(l({},e[r]),{rotation:null!=(t=e[r].rotation)?t:0})};void 0!==n?n={link:o.link,child:n}:n=o}return n}(t)),[t]);return u((()=>{var o;if(!n.current)return;n.current.position.set(...e.position,0),n.current.rotation.set(0,0,e.rotation);let i=0,a=r;for(;void 0!==a&&void 0!==t[i];)a.link.rotation=null!=(o=t[i].rotation)?o:0,i++,a=a.child})),E.createElement("mesh",{ref:n},E.createElement("boxBufferGeometry",{args:[50,50]}),E.createElement("meshNormalMaterial",null),r&&E.createElement(Je,l({},r)))};const $e=({links:e,base:t})=>{const n=c.exports.useRef();u((()=>{var r;if(void 0===n.current)return;const{transforms:o}=Me(e,t);for(let e=0;e<n.current.children.length;e++){const t=n.current.children[e],i=null==(r=o[e])?void 0:r.position;if(void 0===i)throw new Error(`No corresponding child position for index ${e}`);t.position.set(...i,100)}}));const r=c.exports.useMemo((()=>Array.from({length:e.length+1}).map(((e,t)=>E.createElement("mesh",{key:t},E.createElement("boxBufferGeometry",{args:[12.5,12.5]}),E.createElement("meshBasicMaterial",{color:"red"}))))),[e]);return E.createElement("group",{ref:n},r)},Ue=({target:e,links:t,base:n})=>{const r=c.exports.useRef(null);return He(1,(()=>{r.current&&(r.current.innerText=ye(t,n,e).toFixed(3))})),E.createElement("div",{style:{position:"absolute",top:0,left:0,userSelect:"none"}},E.createElement("table",null,E.createElement("tbody",null,E.createElement("tr",null,E.createElement("td",null,"Distance"),E.createElement("td",{ref:r})))))},Ze=({position:e})=>E.createElement("mesh",{scale:[50,50,1],position:[...e,-1]},E.createElement("boxBufferGeometry",null),E.createElement("meshBasicMaterial",{color:"hotpink"})),_e={position:[0,0],rotation:0};function et({method:e}){const[t,n]=c.exports.useState([500,50]),[r,o]=c.exports.useState([]),{linkCount:i,linkLength:a,linkMinAngle:l,linkMaxAngle:s}=M({linkCount:{value:1,min:0,max:50,step:1},linkLength:{value:200,min:1,max:200,step:10},linkMinAngle:{value:-90,min:-360,max:0,step:10},linkMaxAngle:{value:90,min:0,max:360,step:10}});return c.exports.useEffect((()=>{o(tt(i,a,l,s))}),[i,a,l,s]),He(60,(()=>{const n=i*a;const o=ke(r,_e,t,{learningRate:"FABRIK"===e?function(e){const t=j(e/n,0,1);return t>.1?1e-5:1e-6+1e-6*(t/.02)}:1,acceptedError:10,method:e}).links;r.forEach(((e,t)=>{r[t]=o[t]}))})),E.createElement("div",{onClick:({clientX:e,clientY:t})=>n([e-window.innerWidth/2,-t+window.innerHeight/2])},E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},orthographic:!0,linear:!0,camera:{near:-1e3}},E.createElement($e,{links:r,base:_e}),E.createElement(Qe,{base:_e,links:r}),E.createElement(Ze,{position:t})),E.createElement(Ue,{target:t,links:r,base:_e}))}const tt=(e,t,n,r)=>Array.from({length:e}).map((()=>({position:[t,0],constraints:{min:n*Math.PI/180,max:r*Math.PI/180},rotation:0}))),nt={position:[0,0],rotation:0};function rt(){const[e,t]=c.exports.useState([500,50]),[n,r]=c.exports.useState([]),{linkCount:o,linkLength:i,endEffectorRotation:a}=M({linkCount:{value:4,min:0,max:50,step:1},linkLength:{value:200,min:1,max:200,step:10},endEffectorRotation:{value:0,min:-180,max:180,step:5}});return c.exports.useEffect((()=>{r(ot(o,i,a))}),[o,i,a]),He(60,(()=>{const t=o*i;const r=ke(n,nt,e,{method:"FABRIK",learningRate:function(e){const n=j(e/t,0,1);return n>.1?1e-5:1e-6+1e-6*(n/.02)},acceptedError:10}).links;n.forEach(((e,t)=>{n[t]=r[t]}))})),E.createElement("div",{onClick:({clientX:e,clientY:n})=>t([e-window.innerWidth/2,-n+window.innerHeight/2])},E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},orthographic:!0,linear:!0,camera:{near:-1e3}},E.createElement($e,{links:n,base:nt}),E.createElement(Qe,{base:nt,links:n}),E.createElement(Ze,{position:e})),E.createElement(Ue,{target:e,links:n,base:nt}))}const ot=(e,t,n)=>Array.from({length:e}).map(((r,o)=>o===e-1?{position:[t,0],constraints:{value:n*Math.PI/180,type:"local"},rotation:0}:{position:[t,0],rotation:0})),it={position:[0,0,0],rotation:[0,0,0,1]};function at(){const[e,t]=c.exports.useState([500,50,0]),[n,r]=c.exports.useState([]),{linkCount:o,linkLength:i,endEffectorRotation:a}=M({linkCount:{value:4,min:0,max:50,step:1},linkLength:{value:1,min:.1,max:2,step:.1},endEffectorRotation:{value:0,min:-180,max:180,step:5}});return c.exports.useEffect((()=>{r(lt(o,i,a))}),[o,i,a]),He(60,(()=>{const t=o*i;const r=Pe(n,it,e,{method:"FABRIK",learningRate:function(e){const n=j(e/t,0,1);return n>.5?.01:(.001+.001*(n/.02))/t},acceptedError:.1}).links;n.forEach(((e,t)=>{n[t]=r[t]}))})),E.createElement("div",null,E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(k,null),E.createElement(Le,{links:n,base:it}),E.createElement(Ne,{base:it,links:n}),E.createElement(We,{position:e,setPosition:t})),E.createElement(ze,{target:e,links:n,base:it}))}const lt=(e,t,n)=>Array.from({length:e}).map(((r,o)=>o===e-1?{position:[t,0,0],constraints:{value:Z([0,0,n*Math.PI/180]),type:"local"},rotation:[0,0,0,1]}:{position:[t,0,0],rotation:[0,0,0,1]})),st={position:[0,0],rotation:0};function ct(){const[e,t]=c.exports.useState([500,50]),[n,r]=c.exports.useState([]),{linkCount:o,linkLength:i,endEffectorRotation:a}=M({linkCount:{value:4,min:0,max:50,step:1},linkLength:{value:200,min:1,max:200,step:10},endEffectorRotation:{value:0,min:-180,max:180,step:15}});return c.exports.useEffect((()=>{r(ut(o,i,a))}),[o,i,a]),He(60,(()=>{const t=o*i;const r=ke(n,st,e,{method:"FABRIK",learningRate:function(e){const n=j(e/t,0,1);return n>.1?1e-5:1e-6+1e-6*(n/.02)},acceptedError:10}).links;n.forEach(((e,t)=>{n[t]=r[t]}))})),E.createElement("div",{onClick:({clientX:e,clientY:n})=>t([e-window.innerWidth/2,-n+window.innerHeight/2])},E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},orthographic:!0,linear:!0,camera:{near:-1e3}},E.createElement($e,{links:n,base:st}),E.createElement(Qe,{base:st,links:n}),E.createElement(Ze,{position:e})),E.createElement(Ue,{target:e,links:n,base:st}))}const ut=(e,t,n)=>Array.from({length:e}).map(((r,o)=>{return o===e-1?{position:[t,0],constraints:{value:n*Math.PI/180,type:"global"},rotation:0}:(void 0===i&&(i=0),{position:[t,0],rotation:i,constraints:a});var i,a})),mt={position:[0,0,0],rotation:[0,0,0,1]};function pt(){const[e,t]=c.exports.useState([500,50,0]),[n,r]=c.exports.useState([]),{linkCount:o,linkLength:i,endEffectorRotation:a}=M({linkCount:{value:4,min:0,max:50,step:1},linkLength:{value:1,min:.1,max:2,step:.1},endEffectorRotation:{value:0,min:-180,max:180,step:5}});return c.exports.useEffect((()=>{r(ht(o,i,a))}),[o,i,a]),He(60,(()=>{const t=o*i;const r=Pe(n,mt,e,{method:"FABRIK",learningRate:function(e){const n=j(e/t,0,1);return n>.5?.01:(.001+.001*(n/.02))/t},acceptedError:.1}).links;n.forEach(((e,t)=>{n[t]=r[t]}))})),E.createElement("div",null,E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(k,null),E.createElement(Le,{links:n,base:mt}),E.createElement(Ne,{base:mt,links:n}),E.createElement(We,{position:e,setPosition:t})),E.createElement(ze,{target:e,links:n,base:mt}))}const ht=(e,t,n)=>Array.from({length:e}).map(((r,o)=>o===e-1?{position:[t,0,0],constraints:{value:Z([0,0,n*Math.PI/180]),type:"global"},rotation:[0,0,0,1]}:{position:[t,0,0],rotation:[0,0,0,1]}));var ft="https://tmf-code.github.io/inverse-kinematics/assets/arm2.2c2f3b19.gltf";function dt(){return E.createElement(C,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(Et,null))}function Et(){const{nodes:e}=v(ft),t=c.exports.useRef(),[n]=c.exports.useState({position:Y(),rotation:[0,0,0,1]}),[r,o]=c.exports.useState([]),i=A("left");return u((()=>{var e;const r=null==(e=t.current)?void 0:e.children.find((e=>e.isBone));if(!r)return;const a={position:J(r.getWorldPosition(new m)),rotation:[0,0,0,1]};n.position=a.position,n.rotation=a.rotation;const l=J(t.current.getWorldScale(new m)),s=function(e){let t=e;const n=[e];for(;void 0!==t.children[0];)n.push(t.children[0]),t=t.children[0];return n}(r),c=s.map(((e,t,n)=>{var r;const o=n[t+1],i=ae(e.quaternion);return{position:W(J(null!=(r=null==o?void 0:o.position)?r:e.position),l),rotation:i}})),u=c.reduce(((e,t)=>e+T(t.position)),0);if(i){const e=Pe(c,a,J(null==i?void 0:i.controller.getWorldPosition(new m)),{learningRate:(p=u,e=>{const t=j(e/p,0,1);if(t>.1)return.001;const n=t/.02;return 1e-4+1e-4*n}),acceptedError:u/1e3,method:"FABRIK"}).links;e.forEach(((e,t,n)=>{s[t].quaternion.set(...e.rotation)})),o(e)}var p})),E.createElement(E.Fragment,null,E.createElement("ambientLight",null),E.createElement(P,null),E.createElement(Ne,{base:n,links:r}),E.createElement(Le,{base:n,links:r}),E.createElement(c.exports.Suspense,{fallback:null},E.createElement("group",{dispose:null,scale:[.2,.2,.2],position:[-1,1.5,-2]},E.createElement("group",{ref:t,dispose:null},E.createElement("primitive",{object:e.shoulder}),E.createElement("skinnedMesh",{geometry:e.Cylinder.geometry,material:new x({wireframe:!0}),skeleton:e.Cylinder.skeleton}))),E.createElement("skeletonHelper",{args:[e.shoulder]})))}function gt(e,t,n){const r=c.exports.useRef(0);u(((o,i)=>{if(!e.current)return;const a=function(e,t){return pe([e,0],t)}(t,r.current);e.current.position.x=a[0],e.current.position.z=a[1],r.current+=i*n}))}v.preload(ft);var vt="https://tmf-code.github.io/inverse-kinematics/assets/arm2.2c2f3b19.gltf";function bt(){return E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(c.exports.Suspense,{fallback:null},E.createElement(kt,null)))}function kt(){const{nodes:e}=v(vt),t=c.exports.useRef(),[n]=c.exports.useState({position:Y(),rotation:[0,0,0,1]}),[r,o]=c.exports.useState([]),[i,a]=c.exports.useState([0,0,0]);return u((()=>{var e;const r=null==(e=t.current)?void 0:e.children.find((e=>e.isBone));if(!r)return;const a={position:J(r.getWorldPosition(new m)),rotation:[0,0,0,1]};n.position=a.position,n.rotation=a.rotation;const l=J(t.current.getWorldScale(new m)),s=function(e){let t=e;const n=[e];for(;void 0!==t.children[0];)n.push(t.children[0]),t=t.children[0];return n}(r),c=s.map(((e,t,n)=>{var r;const o=n[t+1],i=ae(e.quaternion);return{position:W(J(null!=(r=null==o?void 0:o.position)?r:e.position),l),rotation:i,constraints:{roll:{min:-Math.PI/4,max:Math.PI/4},pitch:{min:-Math.PI/4,max:Math.PI/4},yaw:{min:-Math.PI/4,max:Math.PI/4}}}})),u=c.reduce(((e,t)=>e+T(t.position)),0),p=Pe(c,a,i,{method:"FABRIK",learningRate:(h=u,e=>{const t=j(e/h,0,1);if(t>.1)return.01;const n=t/.02;return.001+.001*n}),acceptedError:u/100}).links;var h;p.forEach(((e,t,n)=>{s[t].quaternion.set(...e.rotation)})),o(p)})),gt(t,5,1/3),E.createElement(E.Fragment,null,E.createElement(We,{setPosition:a,position:i}),E.createElement(k,null),E.createElement(Ne,{base:n,links:r}),E.createElement(Le,{base:n,links:r}),E.createElement("group",{dispose:null,scale:[.2,.2,.2],position:[-1,1.5,-2]},E.createElement("group",{ref:t,dispose:null},E.createElement("primitive",{object:e.shoulder}),E.createElement("skinnedMesh",{geometry:e.Cylinder.geometry,material:new x({wireframe:!0}),skeleton:e.Cylinder.skeleton}))),E.createElement("skeletonHelper",{args:[e.shoulder]}))}v.preload(vt);var xt="https://tmf-code.github.io/inverse-kinematics/assets/arm2.2c2f3b19.gltf";function wt(){return E.createElement(b,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:"aquamarine"},linear:!0},E.createElement(c.exports.Suspense,{fallback:null},E.createElement(yt,null)))}function yt(){const{nodes:e}=v(xt),t=c.exports.useRef(),[n]=c.exports.useState({position:Y(),rotation:[0,0,0,1]}),[r,o]=c.exports.useState([]),i=c.exports.useRef(null);return u((()=>{var e;if(!i.current)return;const r=null==(e=t.current)?void 0:e.children.find((e=>e.isBone));if(!r)return;const a={position:J(r.getWorldPosition(new m)),rotation:[0,0,0,1]};n.position=a.position,n.rotation=a.rotation;const l=J(t.current.getWorldScale(new m)),s=function(e){let t=e;const n=[e];for(;void 0!==t.children[0];)n.push(t.children[0]),t=t.children[0];return n}(r),c=s.map(((e,t,n)=>{var r;const o=n[t+1],i=ae(e.quaternion);return{position:W(J(null!=(r=null==o?void 0:o.position)?r:e.position),l),rotation:i,constraints:{roll:{min:-Math.PI/4,max:Math.PI/4},pitch:{min:-Math.PI/4,max:Math.PI/4},yaw:{min:-Math.PI/4,max:Math.PI/4}}}})),u=c.reduce(((e,t)=>e+T(t.position)),0),p=Pe(c,a,J(i.current.getWorldPosition(new m)),{learningRate:(h=u,e=>{const t=j(e/h,0,1);if(t>.1)return.001;const n=t/.02;return 1e-4+1e-4*n}),acceptedError:u/100,method:"FABRIK"}).links;var h;p.forEach(((e,t)=>{s[t].quaternion.set(...e.rotation)})),o(p)})),gt(t,5,1/3),gt(i,8,.5),E.createElement(E.Fragment,null,E.createElement(B,{ref:i,position:[0,3,0],"material-color":"blue"}),E.createElement(B,{position:n.position,"material-color":"magenta"}),E.createElement(k,null),E.createElement(Ne,{base:n,links:r}),E.createElement(Le,{base:n,links:r}),E.createElement("mesh",{scale:[10,.1,10],position:[0,n.position[1],0]},E.createElement("meshDepthMaterial",null),E.createElement("sphereBufferGeometry",null)),E.createElement("group",{dispose:null},E.createElement("group",{ref:t,dispose:null},E.createElement("primitive",{object:e.shoulder}),E.createElement("skinnedMesh",{geometry:e.Cylinder.geometry,material:new x({wireframe:!0}),skeleton:e.Cylinder.skeleton}))),E.createElement("skeletonHelper",{args:[e.shoulder]}))}function Mt(){return E.createElement(I,{basename:"/"},E.createElement(Rt,null),E.createElement(S,{path:"/2d"},E.createElement(et,{method:"FABRIK"})),E.createElement(S,{path:"/2d-ccd"},E.createElement(et,{method:"CCD"})),E.createElement(S,{path:"/2d-local"},E.createElement(rt,null)),E.createElement(S,{path:"/2d-global"},E.createElement(ct,null)),E.createElement(S,{exact:!0,path:"/"},E.createElement(et,{method:"FABRIK"})),E.createElement(S,{path:"/3d"},E.createElement(Xe,{method:"FABRIK"})),E.createElement(S,{path:"/3d-ccd"},E.createElement(Xe,{method:"CCD"})),E.createElement(S,{path:"/3d-local"},E.createElement(at,null)),E.createElement(S,{path:"/3d-global"},E.createElement(pt,null)),E.createElement(S,{path:"/three-js"},E.createElement(Ve,null)),E.createElement(S,{path:"/skinned-mesh"},E.createElement(c.exports.Suspense,{fallback:null},E.createElement(Ge,null))),E.createElement(S,{path:"/web-xr"},E.createElement(c.exports.Suspense,{fallback:null},E.createElement(dt,null))),E.createElement(S,{path:"/moving-base"},E.createElement(bt,null)),E.createElement(S,{path:"/moving-ends"},E.createElement(wt,null)))}function Rt(){const e=F().pathname;return E.createElement("div",{style:{position:"absolute",zIndex:10}},E.createElement("h2",null,"Inverse kinematics examples"),E.createElement("a",{href:"https://github.com/tmf-code/inverse-kinematics"},"Github page"),E.createElement("h3",null,"2d"),E.createElement("ul",null,E.createElement("li",{className:"/2d"===e?"highlighted":""},E.createElement(q,{to:"/2d"},"2D basic")),E.createElement("li",{className:"/2d-ccd"===e?"highlighted":""},E.createElement(q,{to:"/2d-ccd"},"2D basic - CCD")),E.createElement("li",{className:"/2d-local"===e?"highlighted":""},E.createElement(q,{to:"/2d-local"},"Constrained local rotation")),E.createElement("li",{className:"/2d-global"===e?"highlighted":""},E.createElement(q,{to:"/2d-global"},"Constrained global rotation"))),E.createElement("h3",null,"3d"),E.createElement("ul",null,E.createElement("li",{className:"/3d"===e?"highlighted":""},E.createElement(q,{to:"/3d"},"3D basic")),E.createElement("li",{className:"/3d-ccd"===e?"highlighted":""},E.createElement(q,{to:"/3d-ccd"},"3D CCD")),E.createElement("li",{className:"/three-js"===e?"highlighted":""},E.createElement(q,{to:"/three-js"},"Three.js")),E.createElement("li",null,E.createElement(q,{to:"/skinned-mesh"},"Three js Skinned Mesh")),E.createElement("li",{className:"/web-xr"===e?"highlighted":""},E.createElement(q,{to:"/web-xr"},"Web XR")),E.createElement("li",{className:"/moving-base"===e?"highlighted":""},E.createElement(q,{to:"/moving-base"},"Moving base")),E.createElement("li",{className:"/moving-ends"===e?"highlighted":""},E.createElement(q,{to:"/moving-ends"},"Moving ends")),E.createElement("li",{className:"/3d-local"===e?"highlighted":""},E.createElement(q,{to:"/3d-local"},"Constrained local rotation")),E.createElement("li",{className:"/3d-global"===e?"highlighted":""},E.createElement(q,{to:"/3d-global"},"Constrained global rotation"))))}v.preload(xt),D.render(E.createElement(E.StrictMode,null,E.createElement(Mt,null)),document.getElementById("root"));
