"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{4276:function(t,e,n){n.d(e,{X:function(){return tA}});/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,o=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,i=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,a=/(^[#\.][a-z]|[a-y][a-z])/i,s=Math.PI/180,l=180/Math.PI,h=Math.sin,u=Math.cos,f=Math.abs,g=Math.sqrt,p=Math.atan2,c=function(t){return"string"==typeof t},d=function(t){return"number"==typeof t},v={},m={},y=function(t){return Math.round((t+1e8)%1*1e5)/1e5||(t<0?0:1)},x=function(t){return Math.round(1e5*t)/1e5||0},w=function(t){return Math.round(1e10*t)/1e10||0},b=function(t,e,n,r){var o=t[e],i=1===r?6:R(o,n,r);if(i&&i+n+2<o.length)return t.splice(e,0,o.slice(0,n+i+2)),o.splice(0,n+i),1},L=function(t,e,n){var r=t.length,o=~~(n*r);if(t[o]>e){for(;--o&&t[o]>e;);o<0&&(o=0)}else for(;t[++o]<e&&o<r;);return o<r?o:r-1},P=function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||function(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}(t[n])},N=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},M=function(t,e){var n=t.length,r=t[n-1]||[],o=r.length;n&&e[0]===r[o-2]&&e[1]===r[o-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e};function C(t){var e,n=(t=c(t)&&a.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=X(t)):t?c(t)?X(t):d(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}var T=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";--i>-1;)n=o[i].nodeName.toLowerCase(),0>e.indexOf(","+n+",")&&r.setAttributeNS(null,n,o[i].nodeValue);return r},A={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},_=function(t,e){for(var n=e?e.split(","):[],r={},o=n.length;--o>-1;)r[n[o]]=+t.getAttribute(n[o])||0;return r};function S(t,e,n){var r,o=t[e],i=t[e+2],a=t[e+4];return o+=(i-o)*n,i+=(a-i)*n,o+=(i-o)*n,r=i+(a+(t[e+6]-a)*n-i)*n-o,o=t[e+1],i=t[e+3],a=t[e+5],o+=(i-o)*n,i+=(a-i)*n,o+=(i-o)*n,x(p(i+(a+(t[e+7]-a)*n-i)*n-o,r)*l)}function B(t,e,n){var r=Math.max(0,~~(f((n=void 0===n?1:w(n)||0)-(e=w(e)||0))-1e-8)),o=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=N(t[n],t[n].slice(0));return N(t,e)}(t);if(e>n&&(e=1-e,n=1-n,P(o),o.totalLength=0),e<0||n<0){var i=Math.abs(~~Math.min(e,n))+1;e+=i,n+=i}o.totalLength||O(o);var a,s,l,h,u,g,p,c,d=n>1,y=k(o,e,v,!0),x=k(o,n,m),L=x.segment,C=y.segment,T=x.segIndex,A=y.segIndex,_=x.i,B=y.i,E=A===T,I=_===B&&E;if(d||r){for(a=T<A||E&&_<B||I&&x.t<y.t,b(o,A,B,y.t)&&(A++,!a&&(T++,I?(x.t=(x.t-y.t)/(1-y.t),_=0):E&&(_-=B))),1e-5>Math.abs(1-(n-e))?T=A-1:!x.t&&T?T--:b(o,T,_,x.t)&&a&&A++,1===y.t&&(A=(A+1)%o.length),u=[],p=1+(g=o.length)*r,c=A,p+=(g-A+T)%g,h=0;h<p;h++)M(u,o[c++%g]);o=u}else if(l=1===x.t?6:R(L,_,x.t),e!==n)for(s=R(C,B,I?y.t/x.t:y.t),E&&(l+=s),L.splice(_+l+2),(s||B)&&C.splice(0,B+s),h=o.length;h--;)(h<A||h>T)&&o.splice(h,1);else L.angle=S(L,_+l,0),_+=l,y=L[_],x=L[_+1],L.length=L.totalLength=0,L.totalPoints=o.totalPoints=8,L.push(y,x,y,x,y,x,y,x);return o.totalLength=0,o}function O(t,e){var n,r,o;for(o=n=r=0;o<t.length;o++)t[o].resolution=~~e||12,r+=t[o].length,n+=function(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,o,i,a,s,l,h,u,p,c,d,v,m,y,x,w,b,L=~~t.resolution||12,P=1/L,N=t.length,M=t[e],C=t[e+1],T=e?e/6*L:0,A=t.samples,_=t.lookup,S=(e?t.minLength:1e8)||1e8,B=A[T+(void 0)*L-1],O=e?A[T-1]:0;for(A.length=_.length=0,o=e+2;o<N;o+=6){if(i=t[o+4]-M,a=t[o+2]-M,s=t[o]-M,u=t[o+5]-C,p=t[o+3]-C,c=t[o+1]-C,l=h=d=v=0,.01>f(i)&&.01>f(u)&&f(s)+f(c)<.01)t.length>8&&(t.splice(o,6),o-=6,N-=6);else for(r=1;r<=L;r++)m=1-(y=P*r),l=h-(h=(y*y*i+3*m*(y*a+m*s))*y),(w=g((d=v-(v=(y*y*u+3*m*(y*p+m*c))*y))*d+l*l))<S&&(S=w),O+=w,A[T++]=O;M+=i,C+=u}if(B)for(B-=O;T<A.length;T++)A[T]+=B;if(A.length&&S){if(t.totalLength=b=A[A.length-1]||0,t.minLength=S,b/S<9999)for(r=0,w=x=0;r<b;r+=S)_[w++]=A[x]<r?++x:x}else t.totalLength=A[0]=0;return e?O-A[e/2-1]:O}(t[o]);return t.totalPoints=r,t.totalLength=n,t}function R(t,e,n){if(n<=0||n>=1)return 0;var r=t[e],o=t[e+1],i=t[e+2],a=t[e+3],s=t[e+4],l=t[e+5],h=t[e+6],u=t[e+7],f=r+(i-r)*n,g=i+(s-i)*n,p=o+(a-o)*n,c=a+(l-a)*n,d=f+(g-f)*n,v=p+(c-p)*n,m=s+(h-s)*n,y=l+(u-l)*n;return g+=(m-g)*n,c+=(y-c)*n,t.splice(e+2,4,x(f),x(p),x(d),x(v),x(d+(g-d)*n),x(v+(c-v)*n),x(g),x(c),x(m),x(y)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function k(t,e,n,r){n=n||{},t.totalLength||O(t),(e<0||e>1)&&(e=y(e));var o,i,a,s,l,h,u,f=0,g=t[0];if(e){if(1===e)u=1,f=t.length-1,h=(g=t[f]).length-8;else{if(t.length>1){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)f=h;e=(a-(s=l-(g=t[f]).totalLength))/(l-s)||0}o=g.samples,i=g.resolution,a=g.totalLength*e,s=(h=g.lookup.length?g.lookup[~~(a/g.minLength)]||0:L(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),u=1/i*((a-s)/(l-s)+h%i),h=6*~~(h/i),r&&1===u&&(h+6<g.length?(h+=6,u=0):f+1<t.length&&(h=u=0,g=t[++f]))}}else u=h=f=0,g=t[0];return n.t=u,n.i=h,n.path=t,n.segment=g,n.segIndex=f,n}function E(t,e,n,r){var o,i,a,s,l,h,u,f,g,p=t[0],c=r||{};if((e<0||e>1)&&(e=y(e)),p.lookup||O(t),t.length>1){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)p=t[h];e=(a-(s=l-p.totalLength))/(l-s)||0}return o=p.samples,i=p.resolution,a=p.totalLength*e,s=(h=p.lookup.length?p.lookup[e<1?~~(a/p.minLength):p.lookup.length-1]||0:L(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),g=1-(u=1/i*((a-s)/(l-s)+h%i)||0),f=p[h=6*~~(h/i)],c.x=x((u*u*(p[h+6]-f)+3*g*(u*(p[h+4]-f)+g*(p[h+2]-f)))*u+f),c.y=x((u*u*(p[h+7]-(f=p[h+1]))+3*g*(u*(p[h+5]-f)+g*(p[h+3]-f)))*u+f),n&&(c.angle=p.totalLength?S(p,h,u>=1?1-1e-9:u||1e-9):p.angle||0),c}function I(t,e,n,r,o,i,a){for(var s,l,h,u,f,g=t.length;--g>-1;)for(h=0,l=(s=t[g]).length;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+i,s[h+1]=u*n+f*o+a;return t._dirty=1,t}function X(t){var e,n,o,a,l,p,c,d,v,m,y,x,w,b,L,P=(t+"").replace(i,function(t){var e=+t;return e<1e-4&&e>-.0001?0:e}).match(r)||[],N=[],M=0,C=0,T=2/3,A=P.length,_=0,S="ERROR: malformed path: "+t,B=function(t,e,n,r){m=(n-t)/3,y=(r-e)/3,c.push(t+m,e+y,n-m,r-y,n,r)};if(!t||!isNaN(P[0])||isNaN(P[1]))return console.log(S),N;for(e=0;e<A;e++)if(w=l,isNaN(P[e])?p=(l=P[e].toUpperCase())!==P[e]:e--,o=+P[e+1],a=+P[e+2],p&&(o+=M,a+=C),e||(d=o,v=a),"M"===l)c&&(c.length<8?N.length-=1:_+=c.length),M=d=o,C=v=a,c=[o,a],N.push(c),e+=2,l="L";else if("C"===l)c||(c=[0,0]),p||(M=C=0),c.push(o,a,M+1*P[e+3],C+1*P[e+4],M+=1*P[e+5],C+=1*P[e+6]),e+=6;else if("S"===l)m=M,y=C,("C"===w||"S"===w)&&(m+=M-c[c.length-4],y+=C-c[c.length-3]),p||(M=C=0),c.push(m,y,o,a,M+=1*P[e+3],C+=1*P[e+4]),e+=4;else if("Q"===l)m=M+(o-M)*T,y=C+(a-C)*T,p||(M=C=0),M+=1*P[e+3],C+=1*P[e+4],c.push(m,y,M+(o-M)*T,C+(a-C)*T,M,C),e+=4;else if("T"===l)m=M-c[c.length-4],y=C-c[c.length-3],c.push(M+m,C+y,o+(M+1.5*m-o)*T,a+(C+1.5*y-a)*T,M=o,C=a),e+=2;else if("H"===l)B(M,C,M=o,C),e+=1;else if("V"===l)B(M,C,M,C=o+(p?C-M:0)),e+=1;else if("L"===l||"Z"===l)"Z"===l&&(o=d,a=v,c.closed=!0),("L"===l||f(M-o)>.5||f(C-a)>.5)&&(B(M,C,o,a),"L"===l&&(e+=2)),M=o,C=a;else if("A"===l){if(b=P[e+4],L=P[e+5],m=P[e+6],y=P[e+7],n=7,b.length>1&&(b.length<3?(y=m,m=L,n--):(y=L,m=b.substr(2),n-=2),L=b.charAt(1),b=b.charAt(0)),x=function(t,e,n,r,o,i,a,l,p){if(t!==l||e!==p){n=f(n),r=f(r);var c=o%360*s,d=u(c),v=h(c),m=Math.PI,y=2*m,x=(t-l)/2,w=(e-p)/2,b=d*x+v*w,L=-v*x+d*w,P=b*b,N=L*L,M=P/(n*n)+N/(r*r);M>1&&(n=g(M)*n,r=g(M)*r);var C=n*n,T=r*r,A=(C*T-C*N-T*P)/(C*N+T*P);A<0&&(A=0);var _=(i===a?-1:1)*g(A),S=n*L/r*_,B=-(r*b/n*_),O=(t+l)/2+(d*S-v*B),R=(e+p)/2+(v*S+d*B),k=(b-S)/n,E=(L-B)/r,I=(-b-S)/n,X=(-L-B)/r,z=k*k+E*E,Y=(E<0?-1:1)*Math.acos(k/g(z)),V=(k*X-E*I<0?-1:1)*Math.acos((k*I+E*X)/g(z*(I*I+X*X)));isNaN(V)&&(V=m),!a&&V>0?V-=y:a&&V<0&&(V+=y),Y%=y;var j,q=Math.ceil(f(V%=y)/(y/4)),F=[],G=V/q,Z=4/3*h(G/2)/(1+u(G/2)),H=d*n,U=v*n,D=-(v*r),Q=d*r;for(j=0;j<q;j++)b=u(o=Y+j*G),L=h(o),k=u(o+=G),E=h(o),F.push(b-Z*L,L+Z*b,k+Z*E,E-Z*k,k,E);for(j=0;j<F.length;j+=2)b=F[j],L=F[j+1],F[j]=b*H+L*D+O,F[j+1]=b*U+L*Q+R;return F[j-2]=l,F[j-1]=p,F}}(M,C,+P[e+1],+P[e+2],+P[e+3],+b,+L,(p?M:0)+1*m,(p?C:0)+1*y),e+=n,x)for(n=0;n<x.length;n++)c.push(x[n]);M=c[c.length-2],C=c[c.length-1]}else console.log(S);return(e=c.length)<6?(N.pop(),e=0):c[0]===c[e-2]&&c[1]===c[e-1]&&(c.closed=!0),N.totalPoints=_+e,N}function z(t,e){1e-4>f(t[0]-t[2])&&1e-4>f(t[1]-t[3])&&(t=t.slice(2));var n,r,o,i,a,s,l,h,u,p,c,d,v,m,y,w=t.length-2,b=+t[0],L=+t[1],P=+t[2],N=+t[3],M=[b,L,b,L],C=P-b,T=N-L,A=.001>Math.abs(t[w]-b)&&.001>Math.abs(t[w+1]-L);for(A&&(t.push(P,N),P=b,N=L,b=t[w-2],L=t[w-1],t.unshift(b,L),w+=4),e=e||0===e?+e:1,o=2;o<w;o+=2)n=b,r=L,b=P,L=N,P=+t[o+2],N=+t[o+3],(b!==P||L!==N)&&(i=C,a=T,C=P-b,T=N-L,s=g(i*i+a*a),l=g(C*C+T*T),h=g(Math.pow(C/l+i/s,2)+Math.pow(T/l+a/s,2)),u=(s+l)*e*.25/h,p=b-(b-n)*(s?u/s:0),c=b+(P-b)*(l?u/l:0),d=b-(p+((c-p)*(3*s/(s+l)+.5)/4||0)),v=L-(L-r)*(s?u/s:0),m=L+(N-L)*(l?u/l:0),y=L-(v+((m-v)*(3*s/(s+l)+.5)/4||0)),(b!==n||L!==r)&&M.push(x(p+d),x(v+y),x(b),x(L),x(c+d),x(m+y)));return b!==P||L!==N||M.length<4?M.push(x(P),x(N),x(P),x(N)):M.length-=2,2===M.length?M.push(b,L,b,L,b,L):A&&(M.splice(0,6),M.length=M.length-6),M}function Y(t){d(t[0])&&(t=[t]);var e,n,r,o,i="",a=t.length;for(n=0;n<a;n++){for(i+="M"+x((o=t[n])[0])+","+x(o[1])+" C",e=o.length,r=2;r<e;r++)i+=x(o[r++])+","+x(o[r++])+" "+x(o[r++])+","+x(o[r++])+" "+x(o[r++])+","+x(o[r])+" ";o.closed&&(i+="z")}return i}/*!
 * matrix 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var V,j,q,F,G,Z,H,U,D,Q="transform",W=Q+"Origin",$=function(t){var e=t.ownerDocument||t;for(!(Q in t.style)&&("msTransform"in t.style)&&(W=(Q="msTransform")+"Origin");e.parentNode&&(e=e.parentNode););if(j=window,H=new ts,e){V=e,q=e.documentElement,F=e.body,(U=V.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div");F.appendChild(n),n.appendChild(r),n.style.position="static",n.style[Q]="translate3d(0,0,1px)",D=r.offsetParent!==n,F.removeChild(n)}return e},J=function(t){for(var e,n;t&&t!==F;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},K=[],tt=[],te=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},tn=function t(e,n){if(e.parentNode&&(V||$(e))){var r=te(e),o=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",a=2!==n?0:100,s=3===n?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",h=V.createElementNS?V.createElementNS(o.replace(/^https/,"http"),i):V.createElement(i);return n&&(r?(Z||(Z=t(e)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+a+","+s+")"),Z.appendChild(h)):(G||((G=t(e)).style.cssText=l),h.style.cssText=l+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",G.appendChild(h))),h}throw"Need document and parent."},tr=function(t){for(var e=new ts,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},to=function(t){var e,n=t.getCTM();return n||(e=t.style[Q],t.style[Q]="none",t.appendChild(U),n=U.getCTM(),t.removeChild(U),e?t.style[Q]=e:t.style.removeProperty(Q.replace(/([A-Z])/g,"-$1").toLowerCase())),n||H.clone()},ti=function(t,e){var n,r,o,i,a,s,l=te(t),h=t===l,u=l?K:tt,f=t.parentNode;if(t===j)return t;if(u.length||u.push(tn(t,1),tn(t,2),tn(t,3)),n=l?Z:G,l)h?(i=-(o=to(t)).e/o.a,a=-o.f/o.d,r=H):t.getBBox?(o=t.getBBox(),i=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?r.numberOfItems>1?tr(r):r.getItem(0).matrix:H).a*o.x+r.c*o.y,a=r.b*o.x+r.d*o.y):(r=new ts,i=a=0),e&&"g"===t.tagName.toLowerCase()&&(i=a=0),(h?l:f).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+a)+")");else{if(i=a=0,D)for(r=t.offsetParent,o=t;o&&(o=o.parentNode)&&o!==r&&o.parentNode;)(j.getComputedStyle(o)[Q]+"").length>4&&(i=o.offsetLeft,a=o.offsetTop,o=0);if("absolute"!==(s=j.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;f&&f!==r;)i+=f.scrollLeft||0,a+=f.scrollTop||0,f=f.parentNode;(o=n.style).top=t.offsetTop-a+"px",o.left=t.offsetLeft-i+"px",o[Q]=s[Q],o[W]=s[W],o.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},ta=function(t,e,n,r,o,i,a){return t.a=e,t.b=n,t.c=r,t.d=o,t.e=i,t.f=a,t},ts=function(){function t(t,e,n,r,o,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=0),ta(this,t,e,n,r,o,i)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,o=this.e,i=this.f,a=t*r-e*n||1e-10;return ta(this,r/a,-e/a,-n/a,t/a,(n*i-r*o)/a,-(t*i-e*o)/a)},e.multiply=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,g=t.f;return ta(this,s*e+h*r,s*n+h*o,l*e+u*r,l*n+u*o,i+f*e+g*r,a+f*n+g*o)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f;return e===t.a&&n===t.b&&r===t.c&&o===t.d&&i===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,o=this.a,i=this.b,a=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*o+r*a+l||0,e.y=n*i+r*s+h||0,e},t}();function tl(t,e,n,r){if(!t||!t.parentNode||(V||$(t)).documentElement===t)return new ts;var o=J(t),i=te(t)?K:tt,a=ti(t,n),s=i[0].getBoundingClientRect(),l=i[1].getBoundingClientRect(),h=i[2].getBoundingClientRect(),u=a.parentNode,f=!r&&function t(e){return"fixed"===j.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)}(t),g=new ts((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(f?0:j.pageXOffset||V.scrollLeft||q.scrollLeft||F.scrollLeft||0),s.top+(f?0:j.pageYOffset||V.scrollTop||q.scrollTop||F.scrollTop||0));if(u.removeChild(a),o)for(s=o.length;s--;)(l=o[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?g.inverse():g}/*!
 * MotionPathPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var th,tu,tf,tg,tp,tc,td="x,translateX,left,marginLeft,xPercent".split(","),tv="y,translateY,top,marginTop,yPercent".split(","),tm=Math.PI/180,ty=function(t,e,n,r){for(var o=e.length,i=2===r?0:r,a=0;a<o;a++)t[i]=parseFloat(e[a][n]),2===r&&(t[i+1]=0),i+=2;return t},tx=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},tw=function(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r},tb=function(t,e,n,r,o,i,a,s,l){return"cubic"===a.type?e=[e]:(!1!==a.fromCurrent&&e.unshift(tx(n,r,s),o?tx(n,o,l):0),a.relative&&tw(e),e=[(o?z:function(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,o=[n,0],i=2;i<t.length;i+=2)o.push(n,r,t[i],r=(t[i]-n)*e/2,n=t[i],-r);return o})(e,a.curviness)]),e=i(tC(e,n,a)),tT(t,n,r,e,"x",s),o&&tT(t,n,o,e,"y",l),O(e,a.resolution||(0===a.curviness?20:12))},tL=function(t){return t},tP=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,tN=function(t,e,n){var r,o=tl(t),i=0,a=0;return"svg"===(t.tagName+"").toLowerCase()?(r=t.viewBox.baseVal).width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):r=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(i=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,a=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(i||a?o.apply({x:i,y:a}):{x:o.e,y:o.f})},tM=function(t,e,n,r){var o,i=tl(t.parentNode,!0,!0),a=i.clone().multiply(tl(e)),s=tN(t,n,i),l=tN(e,r,i),h=l.x,u=l.y;return a.e=a.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(o=e.getAttribute("d").match(tP)||[],h+=(o=a.apply({x:+o[0],y:+o[1]})).x,u+=o.y),o&&(h-=(o=a.apply(e.getBBox())).x,u-=o.y),a.e=h-s.x,a.f=u-s.y,a},tC=function(t,e,n){var r,o,i,a=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,f=t[0][0],g=t[0][1],p=tx(e,"x"),c=tx(e,"y");return t&&t.length?(a&&("self"===a||(r=tg(a)[0]||e)===e?I(t,1,0,0,1,p-f,c-g):(u&&!1!==u[2]?th.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[-(tx(e,"xPercent")/100),-(tx(e,"yPercent")/100)],i=(o=tM(e,r,u,"auto")).apply({x:f,y:g}),I(t,o.a,o.b,o.c,o.d,p+o.e-(i.x-o.e),c+o.f-(i.y-o.f)))),s?I(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&I(t,1,0,0,1,l||0,h||0),t):C("M0,0L0,0")},tT=function(t,e,n,r,o,i){var a=e._gsap,s=a.harness,l=s&&s.aliases&&s.aliases[n],h=l&&0>l.indexOf(",")?l:n,u=t._pt=new tu(t._pt,e,h,0,0,tL,0,a.set(e,h,t));u.u=tf(a.get(e,h,i))||0,u.path=r,u.pp=o,t._props.push(h)},tA={version:"3.12.2",name:"motionPath",register:function(t,e,n){tf=(th=t).utils.getUnit,tg=th.utils.toArray,tp=th.core.getStyleSaver,tc=th.core.reverting||function(){},tu=n},init:function(t,e,n){if(!th)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var r,o,i,a,s=[],l=e,h=l.path,u=l.autoRotate,f=l.unitX,g=l.unitY,p=l.x,c=l.y,d=h[0],v=(r=e.start,o="end"in e?e.end:1,function(t){return r||1!==o?B(t,r,o):t});if(this.rawPaths=s,this.target=t,this.tween=n,this.styles=tp&&tp(t,"transform"),(this.rotate=u||0===u)&&(this.rOffset=parseFloat(u)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=tf(t._gsap.get(t,this.rProp))||0),!Array.isArray(h)||"closed"in h||"number"==typeof d)O(i=v(tC(C(e.path),t,e)),e.resolution),s.push(i),tT(this,t,e.x||"x",i,"x",e.unitX||"px"),tT(this,t,e.y||"y",i,"y",e.unitY||"px");else{for(a in d)!p&&~td.indexOf(a)?p=a:!c&&~tv.indexOf(a)&&(c=a);for(a in p&&c?s.push(tb(this,ty(ty([],h,p,0),h,c,1),t,p,c,v,e,f||tf(h[0][p]),g||tf(h[0][c]))):p=c=0,d)a!==p&&a!==c&&s.push(tb(this,ty([],h,a,2),t,a,0,v,e,tf(h[0][a])))}},render:function(t,e){var n=e.rawPaths,r=n.length,o=e._pt;if(e.tween._time||!tc()){for(t>1?t=1:t<0&&(t=0);r--;)E(n[r],t,!r&&e.rotate,n[r]);for(;o;)o.set(o.t,o.p,o.path[o.pp]+o.u,o.d,t),o=o._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?tm:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function(t){return O(C(t)).totalLength},sliceRawPath:B,getRawPath:C,pointsToSegment:z,stringToRawPath:X,rawPathToString:Y,transformRawPath:I,getGlobalMatrix:tl,getPositionOnPath:E,cacheRawPathMeasurements:O,convertToPath:function(t,e){return tg(t).map(function(t){var n,r,i,a,s,l,h,u,f,g,p,c,d,v,m,y,x,w,b,L,P,N,M,C;return n=!1!==e,"path"!==(C=t.tagName.toLowerCase())&&t.getBBox?(h=T(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=_(t,A[C]),"rect"===C?(s=M.rx,l=M.ry||s,i=M.x,a=M.y,p=M.width-2*s,c=M.height-2*l,s||l?(d=i+.44771525016900005*s,y=(m=(v=i+s)+p)+.552284749831*s,x=m+s,w=a+.44771525016900005*l,P=(L=(b=a+l)+c)+.552284749831*l,N=L+l,r="M"+x+","+b+" V"+L+" C"+[x,P,y,N,m,N,m-(m-v)/3,N,v+(m-v)/3,N,v,N,d,N,i,P,i,L,i,L-(L-b)/3,i,b+(L-b)/3,i,b,i,w,d,a,v,a,v+(m-v)/3,a,m-(m-v)/3,a,m,a,y,a,x,w,x,b].join(",")+"z"):r="M"+(i+p)+","+a+" v"+c+" h"+-p+" v"+-c+" h"+p+"z"):"circle"===C||"ellipse"===C?("circle"===C?f=.552284749831*(s=l=M.r):(s=M.rx,f=.552284749831*(l=M.ry)),i=M.cx,a=M.cy,u=.552284749831*s,r="M"+(i+s)+","+a+" C"+[i+s,a+f,i+u,a+l,i,a+l,i-u,a+l,i-s,a+f,i-s,a,i-s,a-f,i-u,a-l,i,a-l,i+u,a-l,i+s,a-f,i+s,a].join(",")+"z"):"line"===C?r="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:("polyline"===C||"polygon"===C)&&(r="M"+(i=(g=(t.getAttribute("points")+"").match(o)||[]).shift())+","+(a=g.shift())+" L"+g.join(","),"polygon"===C&&(r+=","+i+","+a+"z")),h.setAttribute("d",Y(h._gsRawPath=X(r))),n&&t.parentNode&&(t.parentNode.insertBefore(h,t),t.parentNode.removeChild(t)),h):t})},convertCoordinates:function(t,e,n){var r=tl(e,!0,!0).multiply(tl(t));return n?r.apply(n):r},getAlignMatrix:tM,getRelativePosition:function(t,e,n,r){var o=tM(t,e,n,r);return{x:o.e,y:o.f}},arrayToRawPath:function(t,e){var n=ty(ty([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&tw(n),["cubic"===e.type?n:z(n,e.curviness)]}};(th||"undefined"!=typeof window&&(th=window.gsap)&&th.registerPlugin&&th)&&th.registerPlugin(tA)}}]);