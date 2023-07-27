import{_ as ve}from"./AppMediaGallery.749163e7.js";import{r as G,g as Se,c as re,a as L,n as Ce,h as J,i as Ee,v as Pe,b as $,w as ae,j as Ne,e as Ie,o as ne,d as Ae,k as De}from"./entry.b8fef573.js";const ce=e=>Array.isArray(e),de=e=>ce(e)?e:[e];let Le=function(e){let t=function(c){return de(c).forEach(T=>{var N;return h.set(Symbol((N=T.char)==null?void 0:N.innerText),o({...T}))}),this},a=()=>m().filter(c=>c.typeable),l=function(c,T){let N=[...h.keys()];h.set(N[c],o(T))},o=c=>(c.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},c),s=function(){h.forEach(c=>delete c.done)},d=function(){h=new Map,t(e)},p=()=>h,m=()=>Array.from(h.values()),y=c=>h.delete(c),g=(c=!1)=>c?m():m().filter(T=>!T.done),_=(c,T=!1)=>T?h.delete(c):h.get(c).done=!0,h=new Map;return t(e),{add:t,set:l,wipe:d,reset:s,destroy:y,done:_,getItems:g,getQueue:p,getTypeable:a}};const ye=e=>Array.from(e),X=e=>document.createTextNode(e);let K=e=>([...e.childNodes].forEach(t=>{if(t.nodeValue){[...t.nodeValue].forEach(a=>{t.parentNode.insertBefore(X(a),t)}),t.remove();return}K(t)}),e);const fe=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,K(t.body)},me="data-typeit-id",P="ti-cursor",Me="END",Be={started:!1,completed:!1,frozen:!1,destroyed:!1},D={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(e=>({opacity:e})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},Re=`[${me}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function he(e,t=!1,a=!1){let l=e.querySelector(`.${P}`),o=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:p=>{var m,y;if(l&&a){if((m=p.classList)!=null&&m.contains(P))return NodeFilter.FILTER_ACCEPT;if(l.contains(p))return NodeFilter.FILTER_REJECT}return(y=p.classList)!=null&&y.contains(P)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,d=[];for(;s=o.nextNode();)s.originalParent||(s.originalParent=s.parentNode),d.push(s);return t?d.reverse():d}function He(e){return he(fe(e))}function $e(e,t=!0){return t?He(e):ye(e).map(X)}const Q=e=>document.createElement(e),be=(e,t="")=>{let a=Q("style");a.id=t,a.appendChild(X(e)),document.head.appendChild(a)},le=e=>(ce(e)||(e=[e/2,e/2]),e),se=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let oe=e=>e/2;function Fe(e){let{speed:t,deleteSpeed:a,lifeLike:l}=e;return a=a!==null?a:t/3,l?[se(t,oe(t)),se(a,oe(a))]:[t,a]}const Qe=e=>(e.forEach(clearTimeout),[]),Ve=()=>Math.random().toString().substring(2,9),O=e=>"value"in e;let Ue=e=>O(e)?ye(e.value):he(e,!0).filter(t=>!(t.childNodes.length>0));const ze=(e,t)=>{new IntersectionObserver((l,o)=>{l.forEach(s=>{s.isIntersecting&&(t(),o.unobserve(e))})},{threshold:1}).observe(e)};let A=e=>typeof e=="function"?e():e;const ge=e=>Number.isInteger(e);let Y=(e,t=document,a=!1)=>t[`querySelector${a?"All":""}`](e),qe=e=>/body/i.test(e==null?void 0:e.tagName),je=(e,t)=>{if(O(e)){e.value=`${e.value}${t.textContent}`;return}t.innerHTML="";let a=qe(t.originalParent)?e:t.originalParent||e;a.insertBefore(t,Y("."+P,a)||null)},We=(e,t,a)=>Math.min(Math.max(t+e,0),a.length);const M=(e,t)=>Object.assign({},e,t),Ge=(e,t)=>{if(!e)return;let a=e.parentNode;(a.childNodes.length>1||a.isSameNode(t)?e:a).remove()},Je=(e,t,a)=>{let l=t[a-1],o=Y(`.${P}`,e);e=(l==null?void 0:l.parentNode)||e,e.insertBefore(o,l||null)};function Xe(e){return typeof e=="string"?Y(e):e}const Ke=e=>/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML);let Oe=(e,t,a)=>new Promise(l=>{let o=async()=>{await e(),l()};a.push(setTimeout(o,t||0))}),Ye={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Ze=(e,t)=>{let l=`${`[${me}='${e}']`} .${P}`,o=getComputedStyle(t),s=Object.entries(Ye).reduce((d,[p,m])=>`${d} ${p}: var(--ti-cursor-${p}, ${m||o[p]});`,"");be(`${l} { display: inline-block; width: 0; ${s} }`,e)};const F=(e,t)=>new Array(t).fill(e),ie=({queueItems:e,selector:t,cursorPosition:a,to:l})=>{if(ge(t))return t*-1;let o=new RegExp(Me,"i").test(l),s=t?[...e].reverse().findIndex(({char:p})=>{let m=p.parentElement,y=m.matches(t);return o&&y?!0:y&&m.firstChild.isSameNode(p)}):-1;s<0&&(s=o?0:e.length-1);let d=o?0:1;return s-a+d};let V=e=>new Promise(t=>{requestAnimationFrame(async()=>{t(await e())})}),_e=e=>e==null?void 0:e.getAnimations().find(t=>t.id===e.dataset.tiAnimationId),xe=({cursor:e,frames:t,options:a})=>{let l=e.animate(t,a);return l.pause(),l.id=e.dataset.tiAnimationId,V(()=>{V(()=>{l.play()})}),l},et=({cursor:e,options:t,cursorOptions:a})=>{if(!e||!a)return;let l=_e(e),o;l&&(t.delay=l.effect.getComputedTiming().delay,o=l.currentTime,l.cancel());let s=xe({cursor:e,frames:a.animation.frames,options:t});return o&&(s.currentTime=o),s},ue=e=>{var t;return(t=e.func)==null?void 0:t.call(null)},tt=async({index:e,queueItems:t,wait:a,cursor:l,cursorOptions:o})=>{let s=t[e][1],d=[],p=e,m=s,y=()=>m&&!m.delay,g=s.shouldPauseCursor()&&o.autoPause;for(;y();)d.push(m),y()&&p++,m=t[p]?t[p][1]:null;if(d.length)return await V(async()=>{for(let c of d)await ue(c)}),p-1;let _=_e(l),h;return _&&(h={..._.effect.getComputedTiming(),delay:g?o.autoPauseDelay:0}),await a(async()=>{_&&g&&_.cancel(),await V(()=>{ue(s)})},s.delay),await et({cursor:l,options:h,cursorOptions:o}),e},rt=e=>{var t,a;if(typeof e=="object"){let l={},{frames:o,options:s}=D.cursor.animation;return l.animation=e.animation||{},l.animation.frames=((t=e.animation)==null?void 0:t.frames)||o,l.animation.options=M(s,((a=e.animation)==null?void 0:a.options)||{}),l.autoPause=e.autoPause??D.cursor.autoPause,l.autoPauseDelay=e.autoPauseDelay||D.cursor.autoPauseDelay,l}return e===!0?D.cursor:e};const pe=function(e,t={}){let a=async(r,n,u=!1)=>{k.frozen&&await new Promise(f=>{this.unfreeze=()=>{k.frozen=!1,f()}}),u||await i.beforeStep(this),await Oe(r,n,z),u||await i.afterStep(this)},l=(r,n)=>tt({index:r,queueItems:n,wait:a,cursor:E,cursorOptions:i.cursor}),o=r=>Ge(r,b),s=()=>O(b),d=(r=0)=>Fe(i)[r],p=()=>Ue(b),m=(r={})=>{let n=r.delay;n&&x.add({delay:n})},y=(r,n)=>(x.add(r),m(n),this),g=()=>ee??I,_=(r={})=>[{func:()=>R(r)},{func:()=>R(i)}],h=r=>{let n=i.nextStringDelay;x.add([{delay:n[0]},...r,{delay:n[1]}])},c=()=>{if(s())return;let r=Q("span");return r.className=P,te?(r.innerHTML=fe(i.cursorChar).innerHTML,r):(r.style.visibility="hidden",r)},T=async()=>{if(!s()&&E&&b.appendChild(E),te){Ze(q,b),E.dataset.tiAnimationId=q;let{animation:r}=i.cursor,{frames:n,options:u}=r;xe({frames:n,cursor:E,options:{duration:i.cursorSpeed,...u}})}},N=()=>{let r=i.strings.filter(n=>!!n);r.forEach((n,u)=>{if(this.type(n),u+1===r.length)return;let f=i.breakLines?[{func:()=>U(Q("BR")),typeable:!0}]:F({func:H,delay:d(1)},x.getTypeable().length);h(f)})},we=async r=>{let n=g();n&&await Z({value:n});let u=p().map(f=>[Symbol(),{func:H,delay:d(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let f=0;f<u.length;f++)await l(f,u);x.reset(),x.set(0,{delay:r})},Te=r=>{let n=b.innerHTML;return n?(b.innerHTML="",i.startDelete?(b.innerHTML=n,K(b),h(F({func:H,delay:d(1),deletable:!0},p().length)),r):n.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(r)):r},B=async(r=!0)=>{k.started=!0;let n=u=>{x.done(u,!r)};try{let u=[...x.getQueue()];for(let w=0;w<u.length;w++){let[S,v]=u[w];if(!v.done){if(!v.deletable||v.deletable&&p().length){let C=await l(w,u);Array(C-w).fill(w+1).map((j,W)=>j+W).forEach(j=>{let[W]=u[j];n(W)}),w=C}n(S)}}if(!r)return this;if(k.completed=!0,await i.afterComplete(this),!i.loop)throw"";let f=i.loopDelay;a(async()=>{await we(f[0]),B()},f[1])}catch{}return this},Z=async r=>{I=We(r,I,p()),Je(b,p(),I)},U=r=>je(b,r),R=async r=>i=M(i,r),ke=async()=>{if(s()){b.value="";return}p().forEach(o)},H=()=>{let r=p();r.length&&(s()?b.value=b.value.slice(0,-1):o(r[I]))};this.break=function(r){return y({func:()=>U(Q("BR")),typeable:!0},r)},this.delete=function(r=null,n={}){r=A(r);let u=_(n),f=r,{instant:w,to:S}=n,v=x.getTypeable(),C=(()=>f===null?v.length:ge(f)?f:ie({queueItems:v,selector:f,cursorPosition:g(),to:S}))();return y([u[0],...F({func:H,delay:w?0:d(1),deletable:!0},C),u[1]],n)},this.empty=function(r={}){return y({func:ke},r)},this.exec=function(r,n={}){let u=_(n);return y([u[0],{func:()=>r(this)},u[1]],n)},this.move=function(r,n={}){r=A(r);let u=_(n),{instant:f,to:w}=n,S=ie({queueItems:x.getTypeable(),selector:r===null?"":r,to:w,cursorPosition:g()}),v=S<0?-1:1;return ee=g()+S,y([u[0],...F({func:()=>Z(v),delay:f?0:d(),cursorable:!0},Math.abs(S)),u[1]],n)},this.options=function(r,n={}){return r=A(r),R(r),y({},n)},this.pause=function(r,n={}){return y({delay:A(r)},n)},this.type=function(r,n={}){r=A(r);let{instant:u}=n,f=_(n),S=$e(r,i.html).map(C=>({func:()=>U(C),char:C,delay:u||Ke(C)?0:d(),typeable:C.nodeType===Node.TEXT_NODE})),v=[f[0],{func:async()=>await i.beforeString(r,this)},...S,{func:async()=>await i.afterString(r,this)},f[1]];return y(v,n)},this.is=function(r){return k[r]},this.destroy=function(r=!0){z=Qe(z),A(r)&&E&&o(E),k.destroyed=!0},this.freeze=function(){k.frozen=!0},this.unfreeze=()=>{},this.reset=function(r){!this.is("destroyed")&&this.destroy(),r?(x.wipe(),r(this)):x.reset(),I=0;for(let n in k)k[n]=!1;return b[s()?"value":"innerHTML"]="",this},this.go=function(){return k.started?this:(T(),i.waitUntilVisible?(ze(b,B.bind(this)),this):(B(),this))},this.flush=function(r=()=>{}){return T(),B(!1).then(r),this},this.getQueue=()=>x,this.getOptions=()=>i,this.updateOptions=r=>R(r),this.getElement=()=>b;let b=Xe(e),z=[],I=0,ee=null,k=M({},Be);t.cursor=rt(t.cursor??D.cursor);let i=M(D,t);i=M(i,{html:!s()&&i.html,nextStringDelay:le(i.nextStringDelay),loopDelay:le(i.loopDelay)});let q=Ve(),x=Le([{delay:i.startDelay}]);b.dataset.typeitId=q,be(Re);let te=!!i.cursor&&!s(),E=c();i.strings=Te(de(i.strings)),i.strings.length&&N()},at={id:"hero",class:"container min-h-screen mx-auto pt-20 px-2"},nt={key:0,class:"flex mx-auto flex-col justify-start px-2 mt-48 border-t border-gray-200 dark:border-gray-900"},lt={class:"flex flex-col justify-start"},st=L("div",{class:"mx-auto -mt-20 w-36 h-36 lg:w-36 lg:h-36 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain"},null,-1),ot=L("h2",{class:"mt-4 font-black text-2xl md:text-3xl text-center"},"העבודה הגדולה האחת",-1),it=L("p",{class:"mx-auto mt-4 mb-2 font-thin text-sm text-center tracking-wider text-gray-500"},"הכל זה אהבה, פחד הוא אשליה, כל היצורים חופשיים והאמת לעולם לא ניתנת להכחדה",-1),ct={__name:"index",emits:["doneTyping"],setup(e,{emit:t}){const a=G([]),l=G([]);Se(()=>{p()});function o(){window.scrollTo(0,document.body.scrollHeight)}const s=G(!1),d=()=>{t("doneTyping",s.value=!0)},p=function(){new pe(l.value,{strings:[],speed:120,waitUntilVisible:!0,afterComplete:function(g){g.destroy(),m()}}).pause(3333).type("העבודה </span>").options({speed:80}).type("האמיתית ").pause(333).delete(8).type("החשובה ").pause(222).delete(7).pause(140).type("ה").pause(555).type("יחידה").pause(666).delete(7).type(" הגדולה האחת").type("</span>").go()},m=function(){new pe(a.value,{strings:[],speed:60,waitUntilVisible:!0,afterStep:()=>{o()},afterComplete:g=>{g.destroy(),o(),d()}}).pause(2222).options({speed:30}).type("תודה שהגעת לאתר של קבוצת ").options({speed:50}).type('<a href="https://t.me/theonegreatwork" target="_blank" class="font-black text-primary-500">העבודה הגדולה האחת</a>. ').pause(777).options({speed:25}).type("פה ניתן לרכוש ידע על הכוח של עצמך ואיך להשתמש בו. ").pause(777).options({speed:40}).type("ממך זה ידרוש זמן, ").pause(444).options({speed:30}).type("תשומת לב, ").pause(333).type("וכמובן רצון ללמוד איתנו את גוף הידע הנסתר שאנו לומדים ומקדמים בקבוצה. ").pause(500).type("לעזרצך -").options({speed:80}).move(-3).delete(1).type("ת").move(3).pause(500).move(-10).pause(200).type(" ובאתר").pause(200).move(10).type("<br>").type("<br>").options({speed:50}).type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">גוף הידע הנסתר</span>').type("<br>").type("<br>").type('<a href="https://t.me/therealnaturallaw/4" target="_blank" class="hover:text-primary-500">✅&nbsp; סמינר החוק הטבעי האמיתי</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/58" target="_blank" class="hover:text-primary-500">✅&nbsp; עבודת התזה</a>').type("<br>").options({speed:25}).type('<a href="https://t.me/therealnaturallaw/54" target="_blank" class="hover:text-primary-500">✅&nbsp; כל השקופיות</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/64" target="_blank" class="hover:text-primary-500">✅&nbsp; שאלות עזר</a>').type("<br>").type("<br>").type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">ידע נלווה לחוק הטבעי האמיתי</span>').type("<br>").type("<br>").type('<a href="https://t.me/therealnaturallaw/1224" target="_blank" class="hover:text-primary-500">⚖️&nbsp; מהי האמת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/69" target="_blank" class="hover:text-primary-500">👑&nbsp; מהי העבודה הגדולה האחת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/101" target="_blank" class="hover:text-primary-500">👁&nbsp; מה זה אומר להיות ער באמת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/94" target="_blank" class="hover:text-primary-500">😈&nbsp; מה זה שטניזם באמת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/81" target="_blank" class="hover:text-primary-500">❤️&nbsp; מהי אהבת אמת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/110" target="_blank" class="hover:text-primary-500">😱&nbsp; מהו הפחד מהקרבה?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/135" target="_blank" class="hover:text-primary-500">🛠&nbsp; מהי עבודת הצללים?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/138" target="_blank" class="hover:text-primary-500">😡&nbsp; מהי המתנה המקודשת של כעס?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/113" target="_blank" class="hover:text-primary-500">🙅‍♀️&nbsp; מהי הנשיות הבלתי מקודשת?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/143" target="_blank" class="hover:text-primary-500">🙅‍♂️&nbsp; מהו בולשיט העידן החדש?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/144" target="_blank" class="hover:text-primary-500">☠️&nbsp; מהם שבעת החטאים האמיתיים?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/140" target="_blank" class="hover:text-primary-500">🧠&nbsp; מהי לוחמה פסיכולוגית?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/147" target="_blank" class="hover:text-primary-500">💎&nbsp; מהו הטריביום?</a>').type("<br>").type('<a href="https://t.me/therealnaturallaw/127" target="_blank" class="hover:text-primary-500">🕊&nbsp; מהו הפתרון היחיד לשיעבוד?</a>').type("<br>").type("<br>").type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">למידה פוריה !</span>').type("<br>").type("<br>").type("⚖️ 🕊 ❤️").type("<br>").type("<br>").type('והנה מספר <a href="#media" alt="Media" class="font-semibold text-primary-500">קבצי מדיה</a> שיתנו לך השראה וגם יעזרו לך להעביר את המסר כשמשתפים עם משפחה וחברים...').type("<br>").type("<br>").type("🙏 👇").go()};return(y,g)=>{const _=ve,h=Ie,c=De;return ne(),re("div",at,[L("h1",{ref_key:"typingTitle",ref:l,class:"font-black text-6xl md:text-8xl lg:text-9xl tracking-[-0.0125em] mt-12"},null,512),L("div",{ref_key:"typingBody",ref:a,class:Ce([J(s)?"mb-4":"mb-24 md:mb-36 lg:mb-48","font-thin text-3xl md:text-4xl lg:text-5xl leading-[2.4rem] md:leading-[3rem] lg:leading-[4rem] mt-12 md:mt-16 lg:mt-20"])},null,2),Ee($(_,null,null,512),[[Pe,J(s)]]),J(s)?(ne(),re("footer",nt,[L("div",lt,[$(h,{to:"#hero",class:"flex flex-1 flex-col justify-center mx-auto"},{default:ae(()=>[st,ot]),_:1}),$(c,{to:"https://t.me/theonegreatwork",target:"_blank",label:"בטלגרם",color:"primary",variant:"solid",size:"md",class:"mx-auto mt-3 mb-6 hover:scale-[1.1] hover:rotate-[6deg]"}),it,$(h,{to:"https://t.me/lexxrex",target:"_blank",class:"mx-auto mt-0 mb-4 font-thin text-xs"},{default:ae(()=>[Ae(" Made with ❤️ by Lex ")]),_:1})])])):Ne("",!0)])}}};export{ct as default};