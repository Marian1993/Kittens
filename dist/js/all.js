var names=["Tiger","Samuel","Leeloo","Bella","Mo","Sly","Beezy","Maple","Rodney","Yonce","Reginald","Winifred"],ages=["9 Weeks","12 Weeks","3 Months","8 Weeks","1 Year","15 Weeks","4 Months","2 Months","14 Weeks","6 Months","10 Weeks","8 Months"];$(".kittens").find("li").each(function(e,n){var t=$(n).find("img"),a=$(n).find(".name"),n=$(n).find(".age");t.attr("src","http://placekitten.com/250/250?image="+e),a.text(names[e]),n.text(ages[e])});
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(h,e){function t(e,t){return t.toUpperCase()}var n=[],c=n.slice,g=n.concat,a=n.push,i=n.indexOf,r={},o=r.toString,m=r.hasOwnProperty,s="".trim,v={},y=h.document,u="2.1.0",w=function(e,t){return new w.fn.init(e,t)},l=/^-ms-/,f=/-([\da-z])/gi;function p(e){var t=e.length,n=w.type(e);return"function"!==n&&!w.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e))}w.fn=w.prototype={jquery:u,constructor:w,selector:"",length:0,toArray:function(){return c.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:c.call(this)},pushStack:function(e){e=w.merge(this.constructor(),e);return e.prevObject=this,e.context=this.context,e},each:function(e,t){return w.each(this,e,t)},map:function(n){return this.pushStack(w.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:a,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o=arguments[0]||{},s=1,a=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[s]||{},s++),"object"==typeof o||w.isFunction(o)||(o={}),s===a&&(o=this,s--);s<a;s++)if(null!=(e=arguments[s]))for(t in e)i=o[t],n=e[t],o!==n&&(u&&n&&(w.isPlainObject(n)||(r=w.isArray(n)))?(i=r?(r=!1,i&&w.isArray(i)?i:[]):i&&w.isPlainObject(i)?i:{},o[t]=w.extend(u,i,n)):void 0!==n&&(o[t]=n));return o},w.extend({expando:"jQuery"+(u+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===w.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return 0<=e-parseFloat(e)},isPlainObject:function(e){if("object"!==w.type(e)||e.nodeType||w.isWindow(e))return!1;try{if(e.constructor&&!m.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}return!0},isEmptyObject:function(e){for(var t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=w.trim(e))&&(1===e.indexOf("use strict")?((t=y.createElement("script")).text=e,y.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(l,"ms-").replace(f,t)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=p(e);if(n){if(s)for(;i<o&&!1!==(r=t.apply(e[i],n));i++);else for(i in e)if(r=t.apply(e[i],n),!1===r)break}else if(s)for(;i<o&&!1!==(r=t.call(e[i],i,e[i]));i++);else for(i in e)if(r=t.call(e[i],i,e[i]),!1===r)break;return e},trim:function(e){return null==e?"":s.call(e)},makeArray:function(e,t){t=t||[];return null!=e&&(p(Object(e))?w.merge(t,"string"==typeof e?[e]:e):a.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!=s&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,s=[];if(p(e))for(;i<o;i++)null!=(r=t(e[i],i,n))&&s.push(r);else for(i in e)r=t(e[i],i,n),null!=r&&s.push(r);return g.apply([],s)},guid:1,proxy:function(e,t){var n,r;return"string"==typeof t&&(r=e[t],t=e,e=r),w.isFunction(e)?(n=c.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(c.call(arguments)))}).guid=e.guid=e.guid||w.guid++,r):void 0},now:Date.now,support:v}),w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){r["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,f,b,o,t,p,w,l,c,d,T,r,h,g,i,s,m,x="sizzle"+-new Date,v=n.document,C=0,y=0,a=ne(),N=ne(),u=ne(),k=function(e,t){return e===t&&(c=!0),0},E="undefined",D={}.hasOwnProperty,j=[],S=j.pop,A=j.push,L=j.push,q=j.slice,H=j.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=P.replace("w","w#"),R="\\["+F+"*("+P+")"+F+"*(?:([*^$|!~]?=)"+F+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+F+"*\\]",W=":("+P+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+R.replace(3,8)+")*)|.*)\\)|)",$=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),B=new RegExp("^"+F+"*,"+F+"*"),I=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),_=new RegExp("="+F+"*([^\\]'\"]*?)"+F+"*\\]","g"),X=new RegExp(W),z=new RegExp("^"+M+"$"),U={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+O+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,K=/'|\\/g,Z=new RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)};try{L.apply(j=q.call(v.childNodes),v.childNodes),j[v.childNodes.length].nodeType}catch(e){L={apply:j.length?function(e,t){A.apply(e,q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function te(e,t,n,r){var i,o,s,a,u,l,c;if((t?t.ownerDocument||t:v)!==T&&d(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(i=(t=t||T).nodeType)&&9!==i)return[];if(h&&!r){if(l=Q.exec(e))if(c=l[1]){if(9===i){if(!(a=t.getElementById(c))||!a.parentNode)return n;if(a.id===c)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(c))&&m(t,a)&&a.id===c)return n.push(a),n}else{if(l[2])return L.apply(n,t.getElementsByTagName(e)),n;if((c=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return L.apply(n,t.getElementsByClassName(c)),n}if(f.qsa&&(!g||!g.test(e))){if(u=a=x,l=t,c=9===i&&e,1===i&&"object"!==t.nodeName.toLowerCase()){for(s=ce(e),(a=t.getAttribute("id"))?u=a.replace(K,"\\$&"):t.setAttribute("id",u),u="[id='"+u+"'] ",o=s.length;o--;)s[o]=u+fe(s[o]);l=J.test(e)&&ue(t.parentNode)||t,c=s.join(",")}if(c)try{return L.apply(n,l.querySelectorAll(c)),n}catch(e){}finally{a||t.removeAttribute("id")}}}return function(e,t,n,r){var i,o,s,a,u,l=ce(e);if(!r&&1===l.length){if(2<(o=l[0]=l[0].slice(0)).length&&"ID"===(s=o[0]).type&&f.getById&&9===t.nodeType&&h&&b.relative[o[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(Z,ee),t)||[])[0]))return n;e=e.slice(o.shift().value.length)}for(i=U.needsContext.test(e)?0:o.length;i--&&(s=o[i],!b.relative[a=s.type]);)if((u=b.find[a])&&(r=u(s.matches[0].replace(Z,ee),J.test(o[0].type)&&ue(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&fe(o)))return L.apply(n,r),n;break}}return p(e,l)(r,t,!h,n,J.test(e)&&ue(t.parentNode)||t),n}(e.replace($,"$1"),t,n,r)}function ne(){var n=[];function r(e,t){return n.push(e+" ")>b.cacheLength&&delete r[n.shift()],r[e+" "]=t}return r}function re(e){return e[x]=!0,e}function ie(e){var t=T.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t)}}function oe(e,t){for(var n=e.split("|"),r=e.length;r--;)b.attrHandle[n[r]]=t}function se(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ae(s){return re(function(o){return o=+o,re(function(e,t){for(var n,r=s([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ue(e){return e&&typeof e.getElementsByTagName!==E&&e}for(e in f=te.support={},t=te.isXML=function(e){e=e&&(e.ownerDocument||e).documentElement;return!!e&&"HTML"!==e.nodeName},d=te.setDocument=function(e){var u=e?e.ownerDocument||e:v,e=u.defaultView;return u!==T&&9===u.nodeType&&u.documentElement?(r=(T=u).documentElement,h=!t(u),e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",function(){d()},!1):e.attachEvent&&e.attachEvent("onunload",function(){d()})),f.attributes=ie(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=ie(function(e){return e.appendChild(u.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=G.test(u.getElementsByClassName)&&ie(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),f.getById=ie(function(e){return r.appendChild(e).id=x,!u.getElementsByName||!u.getElementsByName(x).length}),f.getById?(b.find.ID=function(e,t){if(typeof t.getElementById!==E&&h){e=t.getElementById(e);return e&&e.parentNode?[e]:[]}},b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){e=typeof e.getAttributeNode!==E&&e.getAttributeNode("id");return e&&e.value===t}}),b.find.TAG=f.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==E?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=f.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==E&&h?t.getElementsByClassName(e):void 0},i=[],g=[],(f.qsa=G.test(u.querySelectorAll))&&(ie(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+F+"*(?:value|"+O+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ie(function(e){var t=u.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+F+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=G.test(s=r.webkitMatchesSelector||r.mozMatchesSelector||r.oMatchesSelector||r.msMatchesSelector))&&ie(function(e){f.disconnectedMatch=s.call(e,"div"),s.call(e,"[s!='']:x"),i.push("!=",W)}),g=g.length&&new RegExp(g.join("|")),i=i.length&&new RegExp(i.join("|")),e=G.test(r.compareDocumentPosition),m=e||G.test(r.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},k=e?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===u||e.ownerDocument===v&&m(v,e)?-1:t===u||t.ownerDocument===v&&m(v,t)?1:l?H.call(l,e)-H.call(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!i||!o)return e===u?-1:t===u?1:i?-1:o?1:l?H.call(l,e)-H.call(l,t):0;if(i===o)return se(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[r]===a[r];)r++;return r?se(s[r],a[r]):s[r]===v?-1:a[r]===v?1:0},u):T},te.matches=function(e,t){return te(e,null,null,t)},te.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&d(e),t=t.replace(_,"='$1']"),!(!f.matchesSelector||!h||i&&i.test(t)||g&&g.test(t)))try{var n=s.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<te(t,T,null,[e]).length},te.contains=function(e,t){return(e.ownerDocument||e)!==T&&d(e),m(e,t)},te.attr=function(e,t){(e.ownerDocument||e)!==T&&d(e);var n=b.attrHandle[t.toLowerCase()],n=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!h):void 0;return void 0!==n?n:f.attributes||!h?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},te.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},te.uniqueSort=function(e){var t,n=[],r=0,i=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(k),c){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return l=null,e},o=te.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=te.selectors={cacheLength:50,createPseudo:re,match:U,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||te.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&te.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&X.test(n)&&(t=ce(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=a[e+" "];return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&a(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==E&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(e){e=te.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===r:"!="===n?e!==r:"^="===n?r&&0===e.indexOf(r):"*="===n?r&&-1<e.indexOf(r):"$="===n?r&&e.slice(-r.length)===r:"~="===n?-1<(" "+e+" ").indexOf(r):"|="===n&&(e===r||e.slice(0,r.length+1)===r+"-"))}},CHILD:function(d,e,t,h,g){var m="nth"!==d.slice(0,3),v="last"!==d.slice(-4),y="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,s,a,u,l=m!=v?"nextSibling":"previousSibling",c=e.parentNode,f=y&&e.nodeName.toLowerCase(),p=!n&&!y;if(c){if(m){for(;l;){for(o=e;o=o[l];)if(y?o.nodeName.toLowerCase()===f:1===o.nodeType)return!1;u=l="only"===d&&!u&&"nextSibling"}return!0}if(u=[v?c.firstChild:c.lastChild],v&&p){for(a=(r=(i=c[x]||(c[x]={}))[d]||[])[0]===C&&r[1],s=r[0]===C&&r[2],o=a&&c.childNodes[a];o=++a&&o&&o[l]||(s=a=0)||u.pop();)if(1===o.nodeType&&++s&&o===e){i[d]=[C,a,s];break}}else if(p&&(r=(e[x]||(e[x]={}))[d])&&r[0]===C)s=r[1];else for(;(o=++a&&o&&o[l]||(s=a=0)||u.pop())&&((y?o.nodeName.toLowerCase()!==f:1!==o.nodeType)||!++s||(p&&((o[x]||(o[x]={}))[d]=[C,s]),o!==e)););return(s-=g)===h||s%h==0&&0<=s/h}}},PSEUDO:function(e,o){var t,s=b.pseudos[e]||b.setFilters[e.toLowerCase()]||te.error("unsupported pseudo: "+e);return s[x]?s(o):1<s.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?re(function(e,t){for(var n,r=s(e,o),i=r.length;i--;)e[n=H.call(e,r[i])]=!(t[n]=r[i])}):function(e){return s(e,0,t)}):s}},pseudos:{not:re(function(e){var r=[],i=[],a=p(e.replace($,"$1"));return a[x]?re(function(e,t,n,r){for(var i,o=a(e,null,r,[]),s=e.length;s--;)(i=o[s])&&(e[s]=!(t[s]=i))}):function(e,t,n){return r[0]=e,a(r,null,n,i),!i.pop()}}),has:re(function(t){return function(e){return 0<te(t,e).length}}),contains:re(function(t){return function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:re(function(n){return z.test(n||"")||te.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=h?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:ae(function(){return[0]}),last:ae(function(e,t){return[t-1]}),eq:ae(function(e,t,n){return[n<0?n+t:n]}),even:ae(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ae(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ae(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:ae(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function le(){}function ce(e,t){var n,r,i,o,s,a,u,l=N[e+" "];if(l)return t?0:l.slice(0);for(s=e,a=[],u=b.preFilter;s;){for(o in n&&!(r=B.exec(s))||(r&&(s=s.slice(r[0].length)||s),a.push(i=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),s=s.slice(n.length)),b.filter)!(r=U[o].exec(s))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?te.error(e):N(e,a).slice(0)}function fe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function pe(s,e,t){var a=e.dir,u=t&&"parentNode"===a,l=y++;return e.first?function(e,t,n){for(;e=e[a];)if(1===e.nodeType||u)return s(e,t,n)}:function(e,t,n){var r,i,o=[C,l];if(n){for(;e=e[a];)if((1===e.nodeType||u)&&s(e,t,n))return!0}else for(;e=e[a];)if(1===e.nodeType||u){if((r=(i=e[x]||(e[x]={}))[a])&&r[0]===C&&r[1]===l)return o[2]=r[2];if((i[a]=o)[2]=s(e,t,n))return!0}}}function de(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function he(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)!(o=e[a])||n&&!n(o,r,i)||(s.push(o),l&&t.push(a));return s}function ge(d,h,g,m,v,e){return m&&!m[x]&&(m=ge(m)),v&&!v[x]&&(v=ge(v,e)),re(function(e,t,n,r){var i,o,s,a=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)te(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:he(c,a,d,n,r),p=g?v||(e?d:l||m)?[]:t:f;if(g&&g(f,p,n,r),m)for(i=he(p,u),m(i,[],n,r),o=i.length;o--;)(s=i[o])&&(p[u[o]]=!(f[u[o]]=s));if(e){if(v||d){if(v){for(i=[],o=p.length;o--;)(s=p[o])&&i.push(f[o]=s);v(null,p=[],i,r)}for(o=p.length;o--;)(s=p[o])&&-1<(i=v?H.call(e,s):a[o])&&(e[i]=!(t[i]=s))}}else p=he(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):L.apply(t,p)})}function me(m,v){function e(e,t,n,r,i){var o,s,a,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=C+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t!==T&&t);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(s=0;a=m[s++];)if(a(o,t,n)){r.push(o);break}i&&(C=h)}y&&((o=!a&&o)&&u--,e&&c.push(o))}if(u+=l,y&&l!==u){for(s=0;a=v[s++];)a(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=S.call(r));f=he(f)}L.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&te.uniqueSort(r)}return i&&(C=h,w=p),c}var y=0<v.length,x=0<m.length;return y?re(e):e}return le.prototype=b.filters=b.pseudos,b.setFilters=new le,p=te.compile=function(e,t){var n,r=[],i=[],o=u[e+" "];if(!o){for(n=(t=t||ce(e)).length;n--;)((o=function e(t){for(var r,n,i,o=t.length,s=b.relative[t[0].type],a=s||b.relative[" "],u=s?1:0,l=pe(function(e){return e===r},a,!0),c=pe(function(e){return-1<H.call(r,e)},a,!0),f=[function(e,t,n){return!s&&(n||t!==w)||((r=t).nodeType?l:c)(e,t,n)}];u<o;u++)if(n=b.relative[t[u].type])f=[pe(de(f),n)];else{if((n=b.filter[t[u].type].apply(null,t[u].matches))[x]){for(i=++u;i<o&&!b.relative[t[i].type];i++);return ge(1<u&&de(f),1<u&&fe(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace($,"$1"),n,u<i&&e(t.slice(u,i)),i<o&&e(t=t.slice(i)),i<o&&fe(t))}f.push(n)}return de(f)}(t[n]))[x]?r:i).push(o);o=u(e,me(i,r))}return o},f.sortStable=x.split("").sort(k).join("")===x,f.detectDuplicates=!!c,d(),f.sortDetached=ie(function(e){return 1&e.compareDocumentPosition(T.createElement("div"))}),ie(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||oe("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&ie(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||oe("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),ie(function(e){return null==e.getAttribute("disabled")})||oe(O,function(e,t,n){return n?void 0:!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),te}(h);w.find=d,w.expr=d.selectors,w.expr[":"]=w.expr.pseudos,w.unique=d.uniqueSort,w.text=d.getText,w.isXMLDoc=d.isXML,w.contains=d.contains;var x=w.expr.match.needsContext,b=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/;function C(e,n,r){if(w.isFunction(n))return w.grep(e,function(e,t){return!!n.call(e,t,e)!==r});if(n.nodeType)return w.grep(e,function(e){return e===n!==r});if("string"==typeof n){if(T.test(n))return w.filter(n,e,r);n=w.filter(n,e)}return w.grep(e,function(e){return 0<=i.call(n,e)!==r})}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<n;t++)if(w.contains(i[t],this))return!0}));for(t=0;t<n;t++)w.find(e,i[t],r);return(r=this.pushStack(1<n?w.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(C(this,e||[],!1))},not:function(e){return this.pushStack(C(this,e||[],!0))},is:function(e){return!!C(this,"string"==typeof e&&x.test(e)?w(e):e||[],!1).length}});var N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(w.fn.init=function(e,t){var n,r;if(!e)return this;if("string"!=typeof e)return e.nodeType?(this.context=this[0]=e,this.length=1,this):w.isFunction(e)?void 0!==k.ready?k.ready(e):e(w):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),w.makeArray(e,this));if(!(n="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:N.exec(e))||!n[1]&&t)return(!t||t.jquery?t||k:this.constructor(t)).find(e);if(n[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),b.test(n[1])&&w.isPlainObject(t))for(n in t)w.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=y.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=y,this.selector=e,this}).prototype=w.fn;var k=w(y),E=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function j(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}w.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=x.test(e)||"string"!=typeof e?w(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?w.unique(o):o)},index:function(e){return e?"string"==typeof e?i.call(w(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.unique(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),w.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return w.dir(e,"parentNode")},parentsUntil:function(e,t,n){return w.dir(e,"parentNode",n)},next:function(e){return j(e,"nextSibling")},prev:function(e){return j(e,"previousSibling")},nextAll:function(e){return w.dir(e,"nextSibling")},prevAll:function(e){return w.dir(e,"previousSibling")},nextUntil:function(e,t,n){return w.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return w.dir(e,"previousSibling",n)},siblings:function(e){return w.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return w.sibling(e.firstChild)},contents:function(e){return e.contentDocument||w.merge([],e.childNodes)}},function(r,i){w.fn[r]=function(e,t){var n=w.map(this,i,e);return(t="Until"!==r.slice(-5)?e:t)&&"string"==typeof t&&(n=w.filter(t,n)),1<this.length&&(D[r]||w.unique(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var S,A=/\S+/g,L={};function q(){y.removeEventListener("DOMContentLoaded",q,!1),h.removeEventListener("load",q,!1),w.ready()}w.Callbacks=function(i){var e,n;i="string"==typeof i?L[i]||(n=L[e=i]={},w.each(e.match(A)||[],function(e,t){n[t]=!0}),n):w.extend({},i);function r(e){for(t=i.memory&&e,o=!0,l=a||0,a=0,u=c.length,s=!0;c&&l<u;l++)if(!1===c[l].apply(e[0],e[1])&&i.stopOnFalse){t=!1;break}s=!1,c&&(f?f.length&&r(f.shift()):t?c=[]:p.disable())}var t,o,s,a,u,l,c=[],f=!i.once&&[],p={add:function(){var e;return c&&(e=c.length,function r(e){w.each(e,function(e,t){var n=w.type(t);"function"===n?i.unique&&p.has(t)||c.push(t):t&&t.length&&"string"!==n&&r(t)})}(arguments),s?u=c.length:t&&(a=e,r(t))),this},remove:function(){return c&&w.each(arguments,function(e,t){for(var n;-1<(n=w.inArray(t,c,n));)c.splice(n,1),s&&(n<=u&&u--,n<=l&&l--)}),this},has:function(e){return e?-1<w.inArray(e,c):!(!c||!c.length)},empty:function(){return c=[],u=0,this},disable:function(){return c=f=t=void 0,this},disabled:function(){return!c},lock:function(){return f=void 0,t||p.disable(),this},locked:function(){return!f},fireWith:function(e,t){return!c||o&&!f||(t=[e,(t=t||[]).slice?t.slice():t],s?f.push(t):r(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},w.extend({Deferred:function(e){var o=[["resolve","done",w.Callbacks("once memory"),"resolved"],["reject","fail",w.Callbacks("once memory"),"rejected"],["notify","progress",w.Callbacks("memory")]],i="pending",s={state:function(){return i},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var i=arguments;return w.Deferred(function(r){w.each(o,function(e,t){var n=w.isFunction(i[e])&&i[e];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&w.isFunction(e.promise)?e.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[t[0]+"With"](this===s?r.promise():this,n?[e]:arguments)})}),i=null}).promise()},promise:function(e){return null!=e?w.extend(e,s):s}},a={};return s.pipe=s.then,w.each(o,function(e,t){var n=t[2],r=t[3];s[t[1]]=n.add,r&&n.add(function(){i=r},o[1^e][2].disable,o[2][2].lock),a[t[0]]=function(){return a[t[0]+"With"](this===a?s:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){function t(t,n,r){return function(e){n[t]=this,r[t]=1<arguments.length?c.call(arguments):e,r===i?l.notifyWith(n,r):--u||l.resolveWith(n,r)}}var i,n,r,o=0,s=c.call(arguments),a=s.length,u=1!==a||e&&w.isFunction(e.promise)?a:0,l=1===u?e:w.Deferred();if(1<a)for(i=new Array(a),n=new Array(a),r=new Array(a);o<a;o++)s[o]&&w.isFunction(s[o].promise)?s[o].promise().done(t(o,r,s)).fail(l.reject).progress(t(o,n,i)):--u;return u||l.resolveWith(r,s),l.promise()}}),w.fn.ready=function(e){return w.ready.promise().done(e),this},w.extend({isReady:!1,readyWait:1,holdReady:function(e){e?w.readyWait++:w.ready(!0)},ready:function(e){(!0===e?--w.readyWait:w.isReady)||((w.isReady=!0)!==e&&0<--w.readyWait||(S.resolveWith(y,[w]),w.fn.trigger&&w(y).trigger("ready").off("ready")))}}),w.ready.promise=function(e){return S||(S=w.Deferred(),"complete"===y.readyState?setTimeout(w.ready):(y.addEventListener("DOMContentLoaded",q,!1),h.addEventListener("load",q,!1))),S.promise(e)},w.ready.promise();var H=w.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===w.type(n))for(a in i=!0,n)w.access(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,w.isFunction(r)||(s=!0),t=l?s?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(w(e),n)}):t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};function O(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=w.expando+Math.random()}w.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},O.uid=1,O.accepts=w.acceptData,O.prototype={key:function(t){if(!O.accepts(t))return 0;var n={},r=t[this.expando];if(!r){r=O.uid++;try{n[this.expando]={value:r},Object.defineProperties(t,n)}catch(e){n[this.expando]=r,w.extend(t,n)}}return this.cache[r]||(this.cache[r]={}),r},set:function(e,t,n){var r,e=this.key(e),i=this.cache[e];if("string"==typeof t)i[t]=n;else if(w.isEmptyObject(i))w.extend(this.cache[e],t);else for(r in t)i[r]=t[r];return i},get:function(e,t){e=this.cache[this.key(e)];return void 0===t?e:e[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,w.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,e=this.key(e),i=this.cache[e];if(void 0===t)this.cache[e]={};else{n=(r=w.isArray(t)?t.concat(t.map(w.camelCase)):(e=w.camelCase(t),t in i?[t,e]:(r=e)in i?[r]:r.match(A)||[])).length;for(;n--;)delete i[r[n]]}},hasData:function(e){return!w.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var F=new O,P=new O,M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function W(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(R,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:M.test(n)?w.parseJSON(n):n)}catch(e){}P.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return P.hasData(e)||F.hasData(e)},data:function(e,t,n){return P.access(e,t,n)},removeData:function(e,t){P.remove(e,t)},_data:function(e,t,n){return F.access(e,t,n)},_removeData:function(e,t){F.remove(e,t)}}),w.fn.extend({data:function(r,e){var t,n,i,o=this[0],s=o&&o.attributes;if(void 0!==r)return"object"==typeof r?this.each(function(){P.set(this,r)}):H(this,function(t){var e,n=w.camelCase(r);if(o&&void 0===t)return void 0!==(e=P.get(o,r))||void 0!==(e=P.get(o,n))?e:void 0!==(e=W(o,n,void 0))?e:void 0;this.each(function(){var e=P.get(this,n);P.set(this,n,t),-1!==r.indexOf("-")&&void 0!==e&&P.set(this,r,t)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=P.get(o),1===o.nodeType&&!F.get(o,"hasDataAttrs"))){for(t=s.length;t--;)0===(n=s[t].name).indexOf("data-")&&(n=w.camelCase(n.slice(5)),W(o,n,i[n]));F.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){P.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;return e?(r=F.get(e,t=(t||"fx")+"queue"),n&&(!r||w.isArray(n)?r=F.access(e,t,w.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){w.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return F.get(e,n)||F.access(e,n,{empty:w.Callbacks("once memory").add(function(){F.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?w.queue(this[0],t):void 0===n?this:this.each(function(){var e=w.queue(this,t,n);w._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&w.dequeue(this,t)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(s,[s])}var r,i=1,o=w.Deferred(),s=this,a=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(r=F.get(s[a],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}});function $(e,t){return"none"===w.css(e=t||e,"display")||!w.contains(e.ownerDocument,e)}var n=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,B=["Top","Right","Bottom","Left"],I=/^(?:checkbox|radio)$/i;(u=y.createDocumentFragment().appendChild(y.createElement("div"))).innerHTML="<input type='radio' checked='checked' name='t'/>",v.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue;var _="undefined";v.focusinBubbles="onfocusin"in h;var X=/^key/,z=/^(?:mouse|contextmenu)|click/,U=/^(?:focusinfocus|focusoutblur)$/,V=/^([^.]*)(?:\.(.+)|)$/;function Y(){return!0}function G(){return!1}function Q(){try{return y.activeElement}catch(e){}}w.event={global:{},add:function(t,e,n,r,i){var o,s,a,u,l,c,f,p,d,h=F.get(t);if(h)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=w.guid++),(a=h.events)||(a=h.events={}),(s=h.handle)||(s=h.handle=function(e){return typeof w!=_&&w.event.triggered!==e.type?w.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(A)||[""]).length;u--;)f=d=(l=V.exec(e[u])||[])[1],p=(l[2]||"").split(".").sort(),f&&(c=w.event.special[f]||{},f=(i?c.delegateType:c.bindType)||f,c=w.event.special[f]||{},l=w.extend({type:f,origType:d,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:p.join(".")},o),(d=a[f])||((d=a[f]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(t,r,p,s)||t.addEventListener&&t.addEventListener(f,s,!1)),c.add&&(c.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),w.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=F.hasData(e)&&F.get(e);if(m&&(u=m.events)){for(l=(t=(t||"").match(A)||[""]).length;l--;)if(d=g=(a=V.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||w.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&(delete m.handle,F.remove(e,"events"))}},trigger:function(e,t,n,r){var i,o,s,a,u,l,c=[n||y],f=m.call(e,"type")?e.type:e,p=m.call(e,"namespace")?e.namespace.split("."):[],d=o=n=n||y;if(3!==n.nodeType&&8!==n.nodeType&&!U.test(f+w.event.triggered)&&(0<=f.indexOf(".")&&(f=(p=f.split(".")).shift(),p.sort()),a=f.indexOf(":")<0&&"on"+f,(e=e[w.expando]?e:new w.Event(f,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:w.makeArray(t,[e]),l=w.event.special[f]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!w.isWindow(n)){for(s=l.delegateType||f,U.test(s+f)||(d=d.parentNode);d;d=d.parentNode)c.push(d),o=d;o===(n.ownerDocument||y)&&c.push(o.defaultView||o.parentWindow||h)}for(i=0;(d=c[i++])&&!e.isPropagationStopped();)e.type=1<i?s:l.bindType||f,(u=(F.get(d,"events")||{})[e.type]&&F.get(d,"handle"))&&u.apply(d,t),(u=a&&d[a])&&u.apply&&w.acceptData(d)&&(e.result=u.apply(d,t),!1===e.result&&e.preventDefault());return e.type=f,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(c.pop(),t)||!w.acceptData(n)||a&&w.isFunction(n[f])&&!w.isWindow(n)&&((o=n[a])&&(n[a]=null),n[w.event.triggered=f](),w.event.triggered=void 0,o&&(n[a]=o)),e.result}},dispatch:function(e){e=w.event.fix(e);var t,n,r,i,o,s=c.call(arguments),a=(F.get(this,"events")||{})[e.type]||[],u=w.event.special[e.type]||{};if((s[0]=e).delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(o=w.event.handlers.call(this,e,a),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(i=r.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,void 0!==(i=((w.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;n<a;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?0<=w(i,this).index(u):w.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i=t.button;return null==e.pageX&&null!=t.clientX&&(n=(r=e.target.ownerDocument||y).documentElement,r=r.body,e.pageX=t.clientX+(n&&n.scrollLeft||r&&r.scrollLeft||0)-(n&&n.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||r&&r.scrollTop||0)-(n&&n.clientTop||r&&r.clientTop||0)),e.which||void 0===i||(e.which=1&i?1:2&i?3:4&i?2:0),e}},fix:function(e){if(e[w.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:X.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new w.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=y),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==Q()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===Q()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&w.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return w.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){e=w.extend(new w.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?w.event.trigger(e,null,t):w.event.dispatch.call(t,e),e.isDefaultPrevented()&&n.preventDefault()}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},w.Event=function(e,t){return this instanceof w.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.getPreventDefault&&e.getPreventDefault()?Y:G):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||w.now(),void(this[w.expando]=!0)):new w.Event(e,t)},w.Event.prototype={isDefaultPrevented:G,isPropagationStopped:G,isImmediatePropagationStopped:G,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Y,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Y,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Y,this.stopPropagation()}},w.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,i){w.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||w.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),v.focusinBubbles||w.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){w.event.simulate(r,e.target,w.event.fix(e),!0)}w.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=F.access(e,r);t||e.addEventListener(n,i,!0),F.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=F.access(e,r)-1;t?F.access(e,r,t):(e.removeEventListener(n,i,!0),F.remove(e,r))}}}),w.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){for(s in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=G;else if(!r)return this;return 1===i&&(o=r,(r=function(e){return w().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=w.guid++)),this.each(function(){w.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=G),this.each(function(){w.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this},trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?w.event.trigger(e,t,n,!0):void 0}});var J=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,K=/<([\w:]+)/,Z=/<|&#?\w+;/,ee=/<(?:script|style|link)/i,te=/checked\s*(?:[^=]|=\s*.checked.)/i,ne=/^$|\/(?:java|ecma)script/i,re=/^true\/(.*)/,ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,oe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function se(e,t){return w.nodeName(e,"table")&&w.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ae(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ue(e){var t=re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function le(e,t){for(var n=0,r=e.length;n<r;n++)F.set(e[n],"globalEval",!t||F.get(t[n],"globalEval"))}function ce(e,t){var n,r,i,o,s,a;if(1===t.nodeType){if(F.hasData(e)&&(o=F.access(e),s=F.set(t,o),a=o.events))for(i in delete s.handle,s.events={},a)for(n=0,r=a[i].length;n<r;n++)w.event.add(t,i,a[i][n]);P.hasData(e)&&(e=P.access(e),e=w.extend({},e),P.set(t,e))}}function fe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&w.nodeName(e,t)?w.merge([e],n):n}oe.optgroup=oe.option,oe.tbody=oe.tfoot=oe.colgroup=oe.caption=oe.thead,oe.th=oe.td,w.extend({clone:function(e,t,n){var r,i,o,s,a,u,l,c=e.cloneNode(!0),f=w.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(s=fe(c),r=0,i=(o=fe(e)).length;r<i;r++)a=o[r],u=s[r],l=void 0,"input"===(l=u.nodeName.toLowerCase())&&I.test(a.type)?u.checked=a.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=a.defaultValue);if(t)if(n)for(o=o||fe(e),s=s||fe(c),r=0,i=o.length;r<i;r++)ce(o[r],s[r]);else ce(e,c);return 0<(s=fe(c,"script")).length&&le(s,!f&&fe(e,"script")),c},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l=t.createDocumentFragment(),c=[],f=0,p=e.length;f<p;f++)if((i=e[f])||0===i)if("object"===w.type(i))w.merge(c,i.nodeType?[i]:i);else if(Z.test(i)){for(o=o||l.appendChild(t.createElement("div")),s=(K.exec(i)||["",""])[1].toLowerCase(),s=oe[s]||oe._default,o.innerHTML=s[1]+i.replace(J,"<$1></$2>")+s[2],u=s[0];u--;)o=o.lastChild;w.merge(c,o.childNodes),(o=l.firstChild).textContent=""}else c.push(t.createTextNode(i));for(l.textContent="",f=0;i=c[f++];)if((!r||-1===w.inArray(i,r))&&(a=w.contains(i.ownerDocument,i),o=fe(l.appendChild(i),"script"),a&&le(o),n))for(u=0;i=o[u++];)ne.test(i.type||"")&&n.push(i);return l},cleanData:function(e){for(var t,n,r,i,o,s,a=w.event.special,u=0;void 0!==(n=e[u]);u++){if(w.acceptData(n)&&((o=n[F.expando])&&(t=F.cache[o]))){if((r=Object.keys(t.events||{})).length)for(s=0;void 0!==(i=r[s]);s++)a[i]?w.event.remove(n,i):w.removeEvent(n,i,t.handle);F.cache[o]&&delete F.cache[o]}delete P.cache[n[P.expando]]}}}),w.fn.extend({text:function(e){return H(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||se(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=se(this,e)).insertBefore(e,t.firstChild)})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?w.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||w.cleanData(fe(n)),n.parentNode&&(t&&w.contains(n.ownerDocument,n)&&le(fe(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(fe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return H(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ee.test(e)&&!oe[(K.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(J,"<$1></$2>");try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(fe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,w.cleanData(fe(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(n,r){n=g.apply([],n);var e,t,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=n[0],d=w.isFunction(p);if(d||1<l&&"string"==typeof p&&!v.checkClone&&te.test(p))return this.each(function(e){var t=c.eq(e);d&&(n[0]=p.call(this,e,t.html())),t.domManip(n,r)});if(l&&(t=(e=w.buildFragment(n,this[0].ownerDocument,!1,this)).firstChild,1===e.childNodes.length&&(e=t),t)){for(o=(i=w.map(fe(e,"script"),ae)).length;u<l;u++)s=e,u!==f&&(s=w.clone(s,!0,!0),o&&w.merge(i,fe(s,"script"))),r.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,w.map(i,ue),u=0;u<o;u++)s=i[u],ne.test(s.type||"")&&!F.access(s,"globalEval")&&w.contains(a,s)&&(s.src?w._evalUrl&&w._evalUrl(s.src):w.globalEval(s.textContent.replace(ie,"")))}return this}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){w.fn[e]=function(e){for(var t,n=[],r=w(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),w(r[o])[s](t),a.apply(n,t.get());return this.pushStack(n)}});var pe,de={};function he(e,t){e=w(t.createElement(e)).appendTo(t.body),t=h.getDefaultComputedStyle?h.getDefaultComputedStyle(e[0]).display:w.css(e[0],"display");return e.detach(),t}function ge(e){var t=y,n=de[e];return n||("none"!==(n=he(e,t))&&n||((t=(pe=(pe||w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=he(e,t),pe.detach()),de[e]=n),n}function me(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)}var ve,ye,xe,be,we,Te=/^margin/,Ce=new RegExp("^("+n+")(?!px)[a-z%]+$","i");function Ne(e,t,n){var r,i,o=e.style;return(n=n||me(e))&&(i=n.getPropertyValue(t)||n[t]),n&&(""!==i||w.contains(e.ownerDocument,e)||(i=w.style(e,t)),Ce.test(i)&&Te.test(t)&&(r=o.width,e=o.minWidth,t=o.maxWidth,o.minWidth=o.maxWidth=o.width=i,i=n.width,o.width=r,o.minWidth=e,o.maxWidth=t)),void 0!==i?i+"":i}function ke(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function Ee(){we.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",xe.appendChild(be);var e=h.getComputedStyle(we,null);ve="1%"!==e.top,ye="4px"===e.width,xe.removeChild(be)}xe=y.documentElement,be=y.createElement("div"),(we=y.createElement("div")).style.backgroundClip="content-box",we.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===we.style.backgroundClip,be.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",be.appendChild(we),h.getComputedStyle&&w.extend(v,{pixelPosition:function(){return Ee(),ve},boxSizingReliable:function(){return null==ye&&Ee(),ye},reliableMarginRight:function(){var e=we.appendChild(y.createElement("div"));return e.style.cssText=we.style.cssText="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e.style.marginRight=e.style.width="0",we.style.width="1px",xe.appendChild(be),e=!parseFloat(h.getComputedStyle(e,null).marginRight),xe.removeChild(be),we.innerHTML="",e}}),w.swap=function(e,t,n,r){var i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.apply(e,r||[]),t)e.style[i]=o[i];return r};var De=/^(none|table(?!-c[ea]).+)/,je=new RegExp("^("+n+")(.*)$","i"),Se=new RegExp("^([+-])=("+n+")","i"),Ae={position:"absolute",visibility:"hidden",display:"block"},Le={letterSpacing:0,fontWeight:400},qe=["Webkit","O","Moz","ms"];function He(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=qe.length;i--;)if((t=qe[i]+n)in e)return t;return r}function Oe(e,t,n){var r=je.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Fe(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;o<4;o+=2)"margin"===n&&(s+=w.css(e,n+B[o],!0,i)),r?("content"===n&&(s-=w.css(e,"padding"+B[o],!0,i)),"margin"!==n&&(s-=w.css(e,"border"+B[o]+"Width",!0,i))):(s+=w.css(e,"padding"+B[o],!0,i),"padding"!==n&&(s+=w.css(e,"border"+B[o]+"Width",!0,i)));return s}function Pe(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=me(e),s="border-box"===w.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=Ne(e,t,o))<0||null==i)&&(i=e.style[t]),Ce.test(i))return i;r=s&&(v.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Fe(e,t,n||(s?"border":"content"),r,o)+"px"}function Me(e,t){for(var n,r,i,o=[],s=0,a=e.length;s<a;s++)(r=e[s]).style&&(o[s]=F.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&$(r)&&(o[s]=F.access(r,"olddisplay",ge(r.nodeName)))):o[s]||(i=$(r),(n&&"none"!==n||!i)&&F.set(r,"olddisplay",i?n:w.css(r,"display"))));for(s=0;s<a;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function Re(e,t,n,r,i){return new Re.prototype.init(e,t,n,r,i)}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=Ne(e,"opacity");return""===e?"1":e}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=w.camelCase(t),u=e.style;return t=w.cssProps[a]||(w.cssProps[a]=He(u,a)),s=w.cssHooks[t]||w.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=Se.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(w.css(e,t)),o="number"),void(null!=n&&n==n&&("number"!==o||w.cssNumber[a]||(n+="px"),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]="",u[t]=n))))}},css:function(e,t,n,r){var i,o=w.camelCase(t);return t=w.cssProps[o]||(w.cssProps[o]=He(e.style,o)),"normal"===(i=void 0===(i=(o=w.cssHooks[t]||w.cssHooks[o])&&"get"in o?o.get(e,!0,n):i)?Ne(e,t,r):i)&&t in Le&&(i=Le[t]),""===n||n?(t=parseFloat(i),!0===n||w.isNumeric(t)?t||0:i):i}}),w.each(["height","width"],function(e,i){w.cssHooks[i]={get:function(e,t,n){return t?0===e.offsetWidth&&De.test(w.css(e,"display"))?w.swap(e,Ae,function(){return Pe(e,i,n)}):Pe(e,i,n):void 0},set:function(e,t,n){var r=n&&me(e);return Oe(0,t,n?Fe(e,i,n,"border-box"===w.css(e,"boxSizing",!1,r),r):0)}}}),w.cssHooks.marginRight=ke(v.reliableMarginRight,function(e,t){return t?w.swap(e,{display:"inline-block"},Ne,[e,"marginRight"]):void 0}),w.each({margin:"",padding:"",border:"Width"},function(i,o){w.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+B[t]+o]=r[t]||r[t-2]||r[0];return n}},Te.test(i)||(w.cssHooks[i+o].set=Oe)}),w.fn.extend({css:function(e,t){return H(this,function(e,t,n){var r,i,o={},s=0;if(w.isArray(t)){for(r=me(e),i=t.length;s<i;s++)o[t[s]]=w.css(e,t[s],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,1<arguments.length)},show:function(){return Me(this,!0)},hide:function(){return Me(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){$(this)?w(this).show():w(this).hide()})}}),((w.Tween=Re).prototype={constructor:Re,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=Re.propHooks[this.prop];return(e&&e.get?e:Re.propHooks._default).get(this)},run:function(e){var t=Re.propHooks[this.prop];return this.pos=e=this.options.duration?w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(t&&t.set?t:Re.propHooks._default).set(this),this}}).init.prototype=Re.prototype,(Re.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[w.cssProps[e.prop]]||w.cssHooks[e.prop])?w.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}}).scrollTop=Re.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},w.fx=Re.prototype.init,w.fx.step={};var We,$e,Be=/^(?:toggle|show|hide)$/,Ie=new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i"),_e=/queueHooks$/,Xe=[function(t,e,n){var r,i,o,s,a,u,l,c=this,f={},p=t.style,d=t.nodeType&&$(t),h=F.get(t,"fxshow");for(r in n.queue||(null==(a=w._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,w.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===(l="none"===(l=w.css(t,"display"))?ge(t.nodeName):l)&&"none"===w.css(t,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),e)if(i=e[r],Be.exec(i)){if(delete e[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;d=!0}f[r]=h&&h[r]||w.style(t,r)}if(!w.isEmptyObject(f))for(r in h?"hidden"in h&&(d=h.hidden):h=F.access(t,"fxshow",{}),o&&(h.hidden=!d),d?w(t).show():c.done(function(){w(t).hide()}),c.done(function(){for(var e in F.remove(t,"fxshow"),f)w.style(t,e,f[e])}),f)s=Ye(d?h[r]:0,r,c),r in h||(h[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}],ze={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),t=Ie.exec(t),i=t&&t[3]||(w.cssNumber[e]?"":"px"),o=(w.cssNumber[e]||"px"!==i&&+r)&&Ie.exec(w.css(n.elem,e)),s=1,a=20;if(o&&o[3]!==i)for(i=i||o[3],t=t||[],o=+r||1;w.style(n.elem,e,(o/=s=s||".5")+i),s!==(s=n.cur()/r)&&1!==s&&--a;);return t&&(o=n.start=+o||+r||0,n.unit=i,n.end=t[1]?o+(t[1]+1)*t[2]:+t[2]),n}]};function Ue(){return setTimeout(function(){We=void 0}),We=w.now()}function Ve(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=B[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Ye(e,t,n){for(var r,i=(ze[t]||[]).concat(ze["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function Ge(i,e,t){var n,o,r=0,s=Xe.length,a=w.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var e=We||Ue(),e=Math.max(0,l.startTime+l.duration-e),t=1-(e/l.duration||0),n=0,r=l.tweens.length;n<r;n++)l.tweens[n].run(t);return a.notifyWith(i,[l,t,e]),t<1&&r?e:(a.resolveWith(i,[l]),!1)},l=a.promise({elem:i,props:w.extend({},e),opts:w.extend(!0,{specialEasing:{}},t),originalProperties:e,originalOptions:t,startTime:We||Ue(),duration:t.duration,tweens:[],createTween:function(e,t){e=w.Tween(i,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(e),e},stop:function(e){var t=0,n=e?l.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)l.tweens[t].run(1);return e?a.resolveWith(i,[l,e]):a.rejectWith(i,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,s;for(n in e)if(r=w.camelCase(n),i=t[r],o=e[n],w.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=w.cssHooks[r],s&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<s;r++)if(n=Xe[r].call(l,i,c,l.opts))return n;return w.map(c,Ye,l),w.isFunction(l.opts.start)&&l.opts.start.call(i,l),w.fx.timer(w.extend(u,{elem:i,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}w.Animation=w.extend(Ge,{tweener:function(e,t){for(var n,r=0,i=(e=w.isFunction(e)?(t=e,["*"]):e.split(" ")).length;r<i;r++)n=e[r],ze[n]=ze[n]||[],ze[n].unshift(t)},prefilter:function(e,t){t?Xe.unshift(e):Xe.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||w.isFunction(e)&&e,duration:e,easing:n&&t||t&&!w.isFunction(t)&&t};return r.duration=w.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in w.fx.speeds?w.fx.speeds[r.duration]:w.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){w.isFunction(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter($).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=w.isEmptyObject(t),o=w.speed(e,n,r),r=function(){var e=Ge(this,w.extend({},t),o);(i||F.get(this,"finish"))&&e.stop(!0)};return r.finish=r,i||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(i,e,o){function s(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=w.timers,r=F.get(this);if(t)r[t]&&r[t].stop&&s(r[t]);else for(t in r)r[t]&&r[t].stop&&_e.test(t)&&s(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||w.dequeue(this,i)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=F.get(this),n=t[s+"queue"],r=t[s+"queueHooks"],i=w.timers,o=n?n.length:0;for(t.finish=!0,w.queue(this,s,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===s&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),w.each(["toggle","show","hide"],function(e,r){var i=w.fn[r];w.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(Ve(r,!0),e,t,n)}}),w.each({slideDown:Ve("show"),slideUp:Ve("hide"),slideToggle:Ve("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){w.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(We=w.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),We=void 0},w.fx.timer=function(e){w.timers.push(e),e()?w.fx.start():w.timers.pop()},w.fx.interval=13,w.fx.start=function(){$e=$e||setInterval(w.fx.tick,w.fx.interval)},w.fx.stop=function(){clearInterval($e),$e=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(r,e){return r=w.fx&&w.fx.speeds[r]||r,this.queue(e=e||"fx",function(e,t){var n=setTimeout(e,r);t.stop=function(){clearTimeout(n)}})},d=y.createElement("input"),u=y.createElement("select"),n=u.appendChild(y.createElement("option")),d.type="checkbox",v.checkOn=""!==d.value,v.optSelected=n.selected,u.disabled=!0,v.optDisabled=!n.disabled,(d=y.createElement("input")).value="t",d.type="radio",v.radioValue="t"===d.value;var Qe,Je=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return H(this,w.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute==_?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(t=t.toLowerCase(),r=w.attrHooks[t]||(w.expr.match.bool.test(t)?Qe:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=w.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void w.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(A);if(o&&1===e.nodeType)for(;n=o[i++];)r=w.propFix[n]||n,w.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&w.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Qe={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var o=Je[t]||w.find.attr;Je[t]=function(e,t,n){var r,i;return n||(i=Je[t],Je[t]=r,r=null!=o(e,t,n)?t.toLowerCase():null,Je[t]=i),r}});var Ke=/^(?:input|select|textarea|button)$/i;w.fn.extend({prop:function(e,t){return H(this,w.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!w.isXMLDoc(e))&&(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ke.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),v.optSelected||(w.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});var Ze=/[\t\r\n\f]/g;w.fn.extend({addClass:function(t){var e,n,r,i,o,s,a="string"==typeof t&&t,u=0,l=this.length;if(w.isFunction(t))return this.each(function(e){w(this).addClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(A)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ze," "):" ")){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=w.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(t){var e,n,r,i,o,s,a=0===arguments.length||"string"==typeof t&&t,u=0,l=this.length;if(w.isFunction(t))return this.each(function(e){w(this).removeClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(A)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ze," "):"")){for(o=0;i=e[o++];)for(;0<=r.indexOf(" "+i+" ");)r=r.replace(" "+i+" "," ");s=t?w.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(i,t){var o=typeof i;return"boolean"==typeof t&&"string"==o?t?this.addClass(i):this.removeClass(i):this.each(w.isFunction(i)?function(e){w(this).toggleClass(i.call(this,e,this.className,t),t)}:function(){if("string"==o)for(var e,t=0,n=w(this),r=i.match(A)||[];e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else o!=_&&"boolean"!=o||(this.className&&F.set(this,"__className__",this.className),this.className=!this.className&&!1!==i&&F.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&0<=(" "+this[n].className+" ").replace(Ze," ").indexOf(t))return!0;return!1}});var et=/\r/g;w.fn.extend({val:function(t){var n,e,r,i=this[0];return arguments.length?(r=w.isFunction(t),this.each(function(e){1===this.nodeType&&(null==(e=r?t.call(this,e,w(this).val()):t)?e="":"number"==typeof e?e+="":w.isArray(e)&&(e=w.map(e,function(e){return null==e?"":e+""})),(n=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):i?(n=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(i,"value"))?e:"string"==typeof(e=i.value)?e.replace(et,""):null==e?"":e:void 0}}),w.extend({valHooks:{select:{get:function(e){for(var t,n=e.options,r=e.selectedIndex,i="select-one"===e.type||r<0,o=i?null:[],s=i?r+1:n.length,a=r<0?s:i?r:0;a<s;a++)if(!(!(t=n[a]).selected&&a!==r||(v.optDisabled?t.disabled:null!==t.getAttribute("disabled"))||t.parentNode.disabled&&w.nodeName(t.parentNode,"optgroup"))){if(t=w(t).val(),i)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,o=w.makeArray(t),s=i.length;s--;)((r=i[s]).selected=0<=w.inArray(w(r).val(),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){return w.isArray(t)?e.checked=0<=w.inArray(w(e).val(),t):void 0}},v.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,n){w.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var tt=w.now(),nt=/\?/;w.parseJSON=function(e){return JSON.parse(e+"")},w.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+e),t};var rt,it,ot=/#.*$/,st=/([?&])_=[^&]*/,at=/^(.*?):[ \t]*([^\r\n]*)$/gm,ut=/^(?:GET|HEAD)$/,lt=/^\/\//,ct=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ft={},pt={},dt="*/".concat("*");try{it=location.href}catch(e){(it=y.createElement("a")).href="",it=it.href}function ht(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(A)||[];if(w.isFunction(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function gt(t,r,i,o){var s={},a=t===pt;function u(e){var n;return s[e]=!0,w.each(t[e]||[],function(e,t){t=t(r,i,o);return"string"!=typeof t||a||s[t]?a?!(n=t):void 0:(r.dataTypes.unshift(t),u(t),!1)}),n}return u(r.dataTypes[0])||!s["*"]&&u("*")}function mt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r=r||{})[n]=t[n]);return r&&w.extend(!0,e,r),e}rt=ct.exec(it.toLowerCase())||[],w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:it,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":w.parseJSON,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?mt(mt(e,w.ajaxSettings),t):mt(w.ajaxSettings,e)},ajaxPrefilter:ht(ft),ajaxTransport:ht(pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0);var u,l,c,n,f,p,r,d=w.ajaxSetup({},t=t||{}),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?w(h):w.event,m=w.Deferred(),v=w.Callbacks("once memory"),y=d.statusCode||{},i={},o={},x=0,s="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!n)for(n={};t=at.exec(c);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?c:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=o[n]=o[n]||e,i[e]=t),this},overrideMimeType:function(e){return x||(d.mimeType=e),this},statusCode:function(e){if(e)if(x<2)for(var t in e)y[t]=[y[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){e=e||s;return u&&u.abort(e),a(0,e),this}};if(m.promise(b).complete=v.add,b.success=b.done,b.error=b.fail,d.url=((e||d.url||it)+"").replace(ot,"").replace(lt,rt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=w.trim(d.dataType||"*").toLowerCase().match(A)||[""],null==d.crossDomain&&(e=ct.exec(d.url.toLowerCase()),d.crossDomain=!(!e||e[1]===rt[1]&&e[2]===rt[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(rt[3]||("http:"===rt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=w.param(d.data,d.traditional)),gt(ft,d,t,b),2===x)return b;for(r in(p=d.global)&&0==w.active++&&w.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!ut.test(d.type),l=d.url,d.hasContent||(d.data&&(l=d.url+=(nt.test(l)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=st.test(l)?l.replace(st,"$1_="+tt++):l+(nt.test(l)?"&":"?")+"_="+tt++)),d.ifModified&&(w.lastModified[l]&&b.setRequestHeader("If-Modified-Since",w.lastModified[l]),w.etag[l]&&b.setRequestHeader("If-None-Match",w.etag[l])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&b.setRequestHeader("Content-Type",d.contentType),b.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+dt+"; q=0.01":""):d.accepts["*"]),d.headers)b.setRequestHeader(r,d.headers[r]);if(d.beforeSend&&(!1===d.beforeSend.call(h,b,d)||2===x))return b.abort();for(r in s="abort",{success:1,error:1,complete:1})b[r](d[r]);if(u=gt(pt,d,t,b)){b.readyState=1,p&&g.trigger("ajaxSend",[b,d]),d.async&&0<d.timeout&&(f=setTimeout(function(){b.abort("timeout")},d.timeout));try{x=1,u.send(i,a)}catch(e){if(!(x<2))throw e;a(-1,e)}}else a(-1,"No Transport");function a(e,t,n,r){var i,o,s,a=t;2!==x&&(x=2,f&&clearTimeout(f),u=void 0,c=r||"",b.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s=s||i}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}(d,b,n)),s=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,s,b,r),r?(d.ifModified&&((n=b.getResponseHeader("Last-Modified"))&&(w.lastModified[l]=n),(n=b.getResponseHeader("etag"))&&(w.etag[l]=n)),204===e||"HEAD"===d.type?a="nocontent":304===e?a="notmodified":(a=s.state,i=s.data,r=!(o=s.error))):(o=a,!e&&a||(a="error",e<0&&(e=0))),b.status=e,b.statusText=(t||a)+"",r?m.resolveWith(h,[i,a,b]):m.rejectWith(h,[b,a,o]),b.statusCode(y),y=void 0,p&&g.trigger(r?"ajaxSuccess":"ajaxError",[b,d,r?i:o]),v.fireWith(h,[b,a]),p&&(g.trigger("ajaxComplete",[b,d]),--w.active||w.event.trigger("ajaxStop")))}return b},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,i){w[i]=function(e,t,n,r){return w.isFunction(t)&&(r=r||n,n=t,t=void 0),w.ajax({url:e,type:i,dataType:r,data:t,success:n})}}),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},w.fn.extend({wrapAll:function(t){var e;return w.isFunction(t)?this.each(function(e){w(this).wrapAll(t.call(this,e))}):(this[0]&&(e=w(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(n){return this.each(w.isFunction(n)?function(e){w(this).wrapInner(n.call(this,e))}:function(){var e=w(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=w.isFunction(t);return this.each(function(e){w(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(){return this.parent().each(function(){w.nodeName(this,"body")||w(this).replaceWith(this.childNodes)}).end()}}),w.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},w.expr.filters.visible=function(e){return!w.expr.filters.hidden(e)};var vt=/%20/g,yt=/\[\]$/,xt=/\r?\n/g,bt=/^(?:submit|button|image|reset|file)$/i,wt=/^(?:input|select|textarea|keygen)/i;w.param=function(e,t){function n(e,t){t=w.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}var r,i=[];if(void 0===t&&(t=w.ajaxSettings&&w.ajaxSettings.traditional),w.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){if(w.isArray(e))w.each(e,function(e,t){i||yt.test(r)?o(r,t):n(r+"["+("object"==typeof t?e:"")+"]",t,i,o)});else if(i||"object"!==w.type(e))o(r,e);else for(var t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&").replace(vt,"+")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&wt.test(this.nodeName)&&!bt.test(e)&&(this.checked||!I.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:w.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(xt,"\r\n")}}):{name:t.name,value:n.replace(xt,"\r\n")}}).get()}}),w.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Tt=0,Ct={},Nt={0:200,1223:204},kt=w.ajaxSettings.xhr();h.ActiveXObject&&w(h).on("unload",function(){for(var e in Ct)Ct[e]()}),v.cors=!!kt&&"withCredentials"in kt,v.ajax=kt=!!kt,w.ajaxTransport(function(o){var s;return v.cors||kt&&!o.crossDomain?{send:function(e,t){var n,r=o.xhr(),i=++Tt;if(r.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)r[n]=o.xhrFields[n];for(n in o.mimeType&&r.overrideMimeType&&r.overrideMimeType(o.mimeType),o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);s=function(e){return function(){s&&(delete Ct[i],s=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?t(r.status,r.statusText):t(Nt[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=s(),r.onerror=s("error"),s=Ct[i]=s("abort"),r.send(o.hasContent&&o.data||null)},abort:function(){s&&s()}}:void 0}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(n){var r,i;if(n.crossDomain)return{send:function(e,t){r=w("<script>").prop({async:!0,charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),y.head.appendChild(r[0])},abort:function(){i&&i()}}});var Et=[],Dt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Et.pop()||w.expando+"_"+tt++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,s=!1!==e.jsonp&&(Dt.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dt.test(e.data)&&"data");return s||"jsonp"===e.dataTypes[0]?(r=e.jsonpCallback=w.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Dt,"$1"+r):!1!==e.jsonp&&(e.url+=(nt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||w.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=h[r],h[r]=function(){o=arguments},n.always(function(){h[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Et.push(r)),o&&w.isFunction(i)&&i(o[0]),o=i=void 0}),"script"):void 0}),w.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||y;var r=b.exec(e),n=!n&&[];return r?[t.createElement(r[1])]:(r=w.buildFragment([e],t,n),n&&n.length&&w(n).remove(),w.merge([],r.childNodes))};var jt=w.fn.load;w.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return 0<=a&&(r=e.slice(a),e=e.slice(0,a)),w.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<s.length&&w.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},w.expr.filters.animated=function(t){return w.grep(w.timers,function(e){return t===e.elem}).length};var St=h.document.documentElement;function At(e){return w.isWindow(e)?e:9===e.nodeType&&e.defaultView}w.offset={setOffset:function(e,t,n){var r,i,o,s,a=w.css(e,"position"),u=w(e),l={};"static"===a&&(e.style.position="relative"),o=u.offset(),r=w.css(e,"top"),s=w.css(e,"left"),s=("absolute"===a||"fixed"===a)&&-1<(r+s).indexOf("auto")?(i=(a=u.position()).top,a.left):(i=parseFloat(r)||0,parseFloat(s)||0),null!=(t=w.isFunction(t)?t.call(e,n,o):t).top&&(l.top=t.top-o.top+i),null!=t.left&&(l.left=t.left-o.left+s),"using"in t?t.using.call(e,l):u.css(l)}},w.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){w.offset.setOffset(this,t,e)});var e,n=this[0],r={top:0,left:0},i=n&&n.ownerDocument;return i?(e=i.documentElement,w.contains(e,n)?(typeof n.getBoundingClientRect!=_&&(r=n.getBoundingClientRect()),i=At(i),{top:r.top+i.pageYOffset-e.clientTop,left:r.left+i.pageXOffset-e.clientLeft}):r):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===w.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),(r=!w.nodeName(e[0],"html")?e.offset():r).top+=w.css(e[0],"borderTopWidth",!0),r.left+=w.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-w.css(n,"marginTop",!0),left:t.left-r.left-w.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||St;e&&!w.nodeName(e,"html")&&"static"===w.css(e,"position");)e=e.offsetParent;return e||St})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;w.fn[t]=function(e){return H(this,function(e,t,n){var r=At(e);return void 0===n?r?r[i]:e[t]:void(r?r.scrollTo(o?h.pageXOffset:n,o?n:h.pageYOffset):e[t]=n)},t,e,arguments.length,null)}}),w.each(["top","left"],function(e,n){w.cssHooks[n]=ke(v.pixelPosition,function(e,t){return t?(t=Ne(e,n),Ce.test(t)?w(e).position()[n]+"px":t):void 0})}),w.each({Height:"height",Width:"width"},function(o,s){w.each({padding:"inner"+o,content:s,"":"outer"+o},function(r,e){w.fn[e]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return H(this,function(e,t,n){var r;return w.isWindow(e)?e.document.documentElement["client"+o]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+o],r["scroll"+o],e.body["offset"+o],r["offset"+o],r["client"+o])):void 0===n?w.css(e,t,i):w.style(e,t,n,i)},s,n?e:void 0,n,null)}})}),w.fn.size=function(){return this.length},w.fn.andSelf=w.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Lt=h.jQuery,qt=h.$;return w.noConflict=function(e){return h.$===w&&(h.$=qt),e&&h.jQuery===w&&(h.jQuery=Lt),w},typeof e==_&&(h.jQuery=h.$=w),w});
var names = ["Tiger", "Samuel", "Leeloo", "Bella", "Mo", "Sly", "Beezy", "Maple", "Rodney", "Yonce", "Reginald", "Winifred"],
    ages = ["9 Weeks", "12 Weeks", "3 Months", "8 Weeks", "1 Year", "15 Weeks", "4 Months", "2 Months", "14 Weeks", "6 Months", "10 Weeks", "8 Months"];
$(".kittens").find("li").each(function (e, n) {
  var t = $(n).find("img"),
      a = $(n).find(".name"),
      n = $(n).find(".age");
  t.attr("src", "http://placekitten.com/250/250?image=" + e), a.text(names[e]), n.text(ages[e]);
});
!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (h, e) {
  function t(e, t) {
    return t.toUpperCase();
  }

  var n = [],
      c = n.slice,
      g = n.concat,
      a = n.push,
      i = n.indexOf,
      r = {},
      o = r.toString,
      m = r.hasOwnProperty,
      s = "".trim,
      v = {},
      y = h.document,
      u = "2.1.0",
      w = function (e, t) {
    return new w.fn.init(e, t);
  },
      l = /^-ms-/,
      f = /-([\da-z])/gi;

  function p(e) {
    var t = e.length,
        n = w.type(e);
    return "function" !== n && !w.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  w.fn = w.prototype = {
    jquery: u,
    constructor: w,
    selector: "",
    length: 0,
    toArray: function () {
      return c.call(this);
    },
    get: function (e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this);
    },
    pushStack: function (e) {
      e = w.merge(this.constructor(), e);
      return e.prevObject = this, e.context = this.context, e;
    },
    each: function (e, t) {
      return w.each(this, e, t);
    },
    map: function (n) {
      return this.pushStack(w.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(c.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
          e = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= e && e < t ? [this[e]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o = arguments[0] || {},
        s = 1,
        a = arguments.length,
        u = !1;

    for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || w.isFunction(o) || (o = {}), s === a && (o = this, s--); s < a; s++) if (null != (e = arguments[s])) for (t in e) i = o[t], n = e[t], o !== n && (u && n && (w.isPlainObject(n) || (r = w.isArray(n))) ? (i = r ? (r = !1, i && w.isArray(i) ? i : []) : i && w.isPlainObject(i) ? i : {}, o[t] = w.extend(u, i, n)) : void 0 !== n && (o[t] = n));

    return o;
  }, w.extend({
    expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isFunction: function (e) {
      return "function" === w.type(e);
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      return 0 <= e - parseFloat(e);
    },
    isPlainObject: function (e) {
      if ("object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;

      try {
        if (e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (e) {
        return !1;
      }

      return !0;
    },
    isEmptyObject: function (e) {
      for (var t in e) return !1;

      return !0;
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e;
    },
    globalEval: function (e) {
      var t,
          n = eval;
      (e = w.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(l, "ms-").replace(f, t);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r,
          i = 0,
          o = e.length,
          s = p(e);

      if (n) {
        if (s) for (; i < o && !1 !== (r = t.apply(e[i], n)); i++);else for (i in e) if (r = t.apply(e[i], n), !1 === r) break;
      } else if (s) for (; i < o && !1 !== (r = t.call(e[i], i, e[i])); i++);else for (i in e) if (r = t.call(e[i], i, e[i]), !1 === r) break;

      return e;
    },
    trim: function (e) {
      return null == e ? "" : s.call(e);
    },
    makeArray: function (e, t) {
      t = t || [];
      return null != e && (p(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : a.call(t, e)), t;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i = 0,
          o = e.length,
          s = [];
      if (p(e)) for (; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);else for (i in e) r = t(e[i], i, n), null != r && s.push(r);
      return g.apply([], s);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r;
      return "string" == typeof t && (r = e[t], t = e, e = r), w.isFunction(e) ? (n = c.call(arguments, 2), (r = function () {
        return e.apply(t || this, n.concat(c.call(arguments)));
      }).guid = e.guid = e.guid || w.guid++, r) : void 0;
    },
    now: Date.now,
    support: v
  }), w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    r["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        f,
        b,
        o,
        t,
        p,
        w,
        l,
        c,
        d,
        T,
        r,
        h,
        g,
        i,
        s,
        m,
        x = "sizzle" + -new Date(),
        v = n.document,
        C = 0,
        y = 0,
        a = ne(),
        N = ne(),
        u = ne(),
        k = function (e, t) {
      return e === t && (c = !0), 0;
    },
        E = "undefined",
        D = {}.hasOwnProperty,
        j = [],
        S = j.pop,
        A = j.push,
        L = j.push,
        q = j.slice,
        H = j.indexOf || function (e) {
      for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;

      return -1;
    },
        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        F = "[\\x20\\t\\r\\n\\f]",
        P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        M = P.replace("w", "w#"),
        R = "\\[" + F + "*(" + P + ")" + F + "*(?:([*^$|!~]?=)" + F + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + F + "*\\]",
        W = ":(" + P + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + R.replace(3, 8) + ")*)|.*)\\)|)",
        $ = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
        B = new RegExp("^" + F + "*," + F + "*"),
        I = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        _ = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
        X = new RegExp(W),
        z = new RegExp("^" + M + "$"),
        U = {
      ID: new RegExp("^#(" + P + ")"),
      CLASS: new RegExp("^\\.(" + P + ")"),
      TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + R),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + O + ")$", "i"),
      needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
    },
        V = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        K = /'|\\/g,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
        ee = function (e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    };

    try {
      L.apply(j = q.call(v.childNodes), v.childNodes), j[v.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: j.length ? function (e, t) {
          A.apply(e, q.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);

          e.length = n - 1;
        }
      };
    }

    function te(e, t, n, r) {
      var i, o, s, a, u, l, c;
      if ((t ? t.ownerDocument || t : v) !== T && d(t), n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (i = (t = t || T).nodeType) && 9 !== i) return [];

      if (h && !r) {
        if (l = Q.exec(e)) if (c = l[1]) {
          if (9 === i) {
            if (!(a = t.getElementById(c)) || !a.parentNode) return n;
            if (a.id === c) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && m(t, a) && a.id === c) return n.push(a), n;
        } else {
          if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
          if ((c = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(c)), n;
        }

        if (f.qsa && (!g || !g.test(e))) {
          if (u = a = x, l = t, c = 9 === i && e, 1 === i && "object" !== t.nodeName.toLowerCase()) {
            for (s = ce(e), (a = t.getAttribute("id")) ? u = a.replace(K, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", o = s.length; o--;) s[o] = u + fe(s[o]);

            l = J.test(e) && ue(t.parentNode) || t, c = s.join(",");
          }

          if (c) try {
            return L.apply(n, l.querySelectorAll(c)), n;
          } catch (e) {} finally {
            a || t.removeAttribute("id");
          }
        }
      }

      return function (e, t, n, r) {
        var i,
            o,
            s,
            a,
            u,
            l = ce(e);

        if (!r && 1 === l.length) {
          if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (s = o[0]).type && f.getById && 9 === t.nodeType && h && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
            e = e.slice(o.shift().value.length);
          }

          for (i = U.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);) if ((u = b.find[a]) && (r = u(s.matches[0].replace(Z, ee), J.test(o[0].type) && ue(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && fe(o))) return L.apply(n, r), n;
            break;
          }
        }

        return p(e, l)(r, t, !h, n, J.test(e) && ue(t.parentNode) || t), n;
      }(e.replace($, "$1"), t, n, r);
    }

    function ne() {
      var n = [];

      function r(e, t) {
        return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t;
      }

      return r;
    }

    function re(e) {
      return e[x] = !0, e;
    }

    function ie(e) {
      var t = T.createElement("div");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
      }
    }

    function oe(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) b.attrHandle[n[r]] = t;
    }

    function se(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r) return r;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function ae(s) {
      return re(function (o) {
        return o = +o, re(function (e, t) {
          for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }

    function ue(e) {
      return e && typeof e.getElementsByTagName !== E && e;
    }

    for (e in f = te.support = {}, t = te.isXML = function (e) {
      e = e && (e.ownerDocument || e).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }, d = te.setDocument = function (e) {
      var u = e ? e.ownerDocument || e : v,
          e = u.defaultView;
      return u !== T && 9 === u.nodeType && u.documentElement ? (r = (T = u).documentElement, h = !t(u), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function () {
        d();
      }, !1) : e.attachEvent && e.attachEvent("onunload", function () {
        d();
      })), f.attributes = ie(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), f.getElementsByTagName = ie(function (e) {
        return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length;
      }), f.getElementsByClassName = G.test(u.getElementsByClassName) && ie(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), f.getById = ie(function (e) {
        return r.appendChild(e).id = x, !u.getElementsByName || !u.getElementsByName(x).length;
      }), f.getById ? (b.find.ID = function (e, t) {
        if (typeof t.getElementById !== E && h) {
          e = t.getElementById(e);
          return e && e.parentNode ? [e] : [];
        }
      }, b.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete b.find.ID, b.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          e = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
          return e && e.value === t;
        };
      }), b.find.TAG = f.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);
        if ("*" !== e) return o;

        for (; n = o[i++];) 1 === n.nodeType && r.push(n);

        return r;
      }, b.find.CLASS = f.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== E && h ? t.getElementsByClassName(e) : void 0;
      }, i = [], g = [], (f.qsa = G.test(u.querySelectorAll)) && (ie(function (e) {
        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + O + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ie(function (e) {
        var t = u.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (f.matchesSelector = G.test(s = r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ie(function (e) {
        f.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), i.push("!=", W);
      }), g = g.length && new RegExp(g.join("|")), i = i.length && new RegExp(i.join("|")), e = G.test(r.compareDocumentPosition), m = e || G.test(r.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            t = t && t.parentNode;
        return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }, k = e ? function (e, t) {
        if (e === t) return c = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === v && m(v, e) ? -1 : t === u || t.ownerDocument === v && m(v, t) ? 1 : l ? H.call(l, e) - H.call(l, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return c = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];
        if (!i || !o) return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : l ? H.call(l, e) - H.call(l, t) : 0;
        if (i === o) return se(e, t);

        for (n = e; n = n.parentNode;) s.unshift(n);

        for (n = t; n = n.parentNode;) a.unshift(n);

        for (; s[r] === a[r];) r++;

        return r ? se(s[r], a[r]) : s[r] === v ? -1 : a[r] === v ? 1 : 0;
      }, u) : T;
    }, te.matches = function (e, t) {
      return te(e, null, null, t);
    }, te.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== T && d(e), t = t.replace(_, "='$1']"), !(!f.matchesSelector || !h || i && i.test(t) || g && g.test(t))) try {
        var n = s.call(e, t);
        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {}
      return 0 < te(t, T, null, [e]).length;
    }, te.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && d(e), m(e, t);
    }, te.attr = function (e, t) {
      (e.ownerDocument || e) !== T && d(e);
      var n = b.attrHandle[t.toLowerCase()],
          n = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !h) : void 0;
      return void 0 !== n ? n : f.attributes || !h ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }, te.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, te.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(k), c) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));

        for (; r--;) e.splice(n[r], 1);
      }

      return l = null, e;
    }, o = te.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r++];) n += o(t);

      return n;
    }, (b = te.selectors = {
      cacheLength: 50,
      createPseudo: re,
      match: U,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || te.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && te.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[5] && e[2];
          return U.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && X.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = a[e + " "];
          return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && a(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "");
          });
        },
        ATTR: function (t, n, r) {
          return function (e) {
            e = te.attr(e, t);
            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD: function (d, e, t, h, g) {
          var m = "nth" !== d.slice(0, 3),
              v = "last" !== d.slice(-4),
              y = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                s,
                a,
                u,
                l = m != v ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = y && e.nodeName.toLowerCase(),
                p = !n && !y;

            if (c) {
              if (m) {
                for (; l;) {
                  for (o = e; o = o[l];) if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;

                  u = l = "only" === d && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [v ? c.firstChild : c.lastChild], v && p) {
                for (a = (r = (i = c[x] || (c[x] = {}))[d] || [])[0] === C && r[1], s = r[0] === C && r[2], o = a && c.childNodes[a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();) if (1 === o.nodeType && ++s && o === e) {
                  i[d] = [C, a, s];
                  break;
                }
              } else if (p && (r = (e[x] || (e[x] = {}))[d]) && r[0] === C) s = r[1];else for (; (o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++s || (p && ((o[x] || (o[x] = {}))[d] = [C, s]), o !== e)););

              return (s -= g) === h || s % h == 0 && 0 <= s / h;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
              s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || te.error("unsupported pseudo: " + e);
          return s[x] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function (e, t) {
            for (var n, r = s(e, o), i = r.length; i--;) e[n = H.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return s(e, 0, t);
          }) : s;
        }
      },
      pseudos: {
        not: re(function (e) {
          var r = [],
              i = [],
              a = p(e.replace($, "$1"));
          return a[x] ? re(function (e, t, n, r) {
            for (var i, o = a(e, null, r, []), s = e.length; s--;) (i = o[s]) && (e[s] = !(t[s] = i));
          }) : function (e, t, n) {
            return r[0] = e, a(r, null, n, i), !i.pop();
          };
        }),
        has: re(function (t) {
          return function (e) {
            return 0 < te(t, e).length;
          };
        }),
        contains: re(function (t) {
          return function (e) {
            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
          };
        }),
        lang: re(function (n) {
          return z.test(n || "") || te.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function (e) {
            var t;

            do {
              if (t = h ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return !1 === e.disabled;
        },
        disabled: function (e) {
          return !0 === e.disabled;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return Y.test(e.nodeName);
        },
        input: function (e) {
          return V.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: ae(function () {
          return [0];
        }),
        last: ae(function (e, t) {
          return [t - 1];
        }),
        eq: ae(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ae(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ae(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ae(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);

          return e;
        }),
        gt: ae(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = function (t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }(e);

    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = function (n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }(e);

    function le() {}

    function ce(e, t) {
      var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l = N[e + " "];
      if (l) return t ? 0 : l.slice(0);

      for (s = e, a = [], u = b.preFilter; s;) {
        for (o in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), s = s.slice(n.length)), b.filter) !(r = U[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), s = s.slice(n.length));

        if (!n) break;
      }

      return t ? s.length : s ? te.error(e) : N(e, a).slice(0);
    }

    function fe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function pe(s, e, t) {
      var a = e.dir,
          u = t && "parentNode" === a,
          l = y++;
      return e.first ? function (e, t, n) {
        for (; e = e[a];) if (1 === e.nodeType || u) return s(e, t, n);
      } : function (e, t, n) {
        var r,
            i,
            o = [C, l];

        if (n) {
          for (; e = e[a];) if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
        } else for (; e = e[a];) if (1 === e.nodeType || u) {
          if ((r = (i = e[x] || (e[x] = {}))[a]) && r[0] === C && r[1] === l) return o[2] = r[2];
          if ((i[a] = o)[2] = s(e, t, n)) return !0;
        }
      };
    }

    function de(i) {
      return 1 < i.length ? function (e, t, n) {
        for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;

        return !0;
      } : i[0];
    }

    function he(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) !(o = e[a]) || n && !n(o, r, i) || (s.push(o), l && t.push(a));

      return s;
    }

    function ge(d, h, g, m, v, e) {
      return m && !m[x] && (m = ge(m)), v && !v[x] && (v = ge(v, e)), re(function (e, t, n, r) {
        var i,
            o,
            s,
            a = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) te(e, t[r], n);

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : he(c, a, d, n, r),
            p = g ? v || (e ? d : l || m) ? [] : t : f;

        if (g && g(f, p, n, r), m) for (i = he(p, u), m(i, [], n, r), o = i.length; o--;) (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));

        if (e) {
          if (v || d) {
            if (v) {
              for (i = [], o = p.length; o--;) (s = p[o]) && i.push(f[o] = s);

              v(null, p = [], i, r);
            }

            for (o = p.length; o--;) (s = p[o]) && -1 < (i = v ? H.call(e, s) : a[o]) && (e[i] = !(t[i] = s));
          }
        } else p = he(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : L.apply(t, p);
      });
    }

    function me(m, v) {
      function e(e, t, n, r, i) {
        var o,
            s,
            a,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = C += null == p ? 1 : Math.random() || .1,
            g = d.length;

        for (i && (w = t !== T && t); l !== g && null != (o = d[l]); l++) {
          if (x && o) {
            for (s = 0; a = m[s++];) if (a(o, t, n)) {
              r.push(o);
              break;
            }

            i && (C = h);
          }

          y && ((o = !a && o) && u--, e && c.push(o));
        }

        if (u += l, y && l !== u) {
          for (s = 0; a = v[s++];) a(c, f, t, n);

          if (e) {
            if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = S.call(r));
            f = he(f);
          }

          L.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && te.uniqueSort(r);
        }

        return i && (C = h, w = p), c;
      }

      var y = 0 < v.length,
          x = 0 < m.length;
      return y ? re(e) : e;
    }

    return le.prototype = b.filters = b.pseudos, b.setFilters = new le(), p = te.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = u[e + " "];

      if (!o) {
        for (n = (t = t || ce(e)).length; n--;) ((o = function e(t) {
          for (var r, n, i, o = t.length, s = b.relative[t[0].type], a = s || b.relative[" "], u = s ? 1 : 0, l = pe(function (e) {
            return e === r;
          }, a, !0), c = pe(function (e) {
            return -1 < H.call(r, e);
          }, a, !0), f = [function (e, t, n) {
            return !s && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n);
          }]; u < o; u++) if (n = b.relative[t[u].type]) f = [pe(de(f), n)];else {
            if ((n = b.filter[t[u].type].apply(null, t[u].matches))[x]) {
              for (i = ++u; i < o && !b.relative[t[i].type]; i++);

              return ge(1 < u && de(f), 1 < u && fe(t.slice(0, u - 1).concat({
                value: " " === t[u - 2].type ? "*" : ""
              })).replace($, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && fe(t));
            }

            f.push(n);
          }

          return de(f);
        }(t[n]))[x] ? r : i).push(o);

        o = u(e, me(i, r));
      }

      return o;
    }, f.sortStable = x.split("").sort(k).join("") === x, f.detectDuplicates = !!c, d(), f.sortDetached = ie(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("div"));
    }), ie(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || oe("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), f.attributes && ie(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || oe("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), ie(function (e) {
      return null == e.getAttribute("disabled");
    }) || oe(O, function (e, t, n) {
      return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
    }), te;
  }(h);

  w.find = d, w.expr = d.selectors, w.expr[":"] = w.expr.pseudos, w.unique = d.uniqueSort, w.text = d.getText, w.isXMLDoc = d.isXML, w.contains = d.contains;
  var x = w.expr.match.needsContext,
      b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      T = /^.[^:#\[\.,]*$/;

  function C(e, n, r) {
    if (w.isFunction(n)) return w.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    });
    if (n.nodeType) return w.grep(e, function (e) {
      return e === n !== r;
    });

    if ("string" == typeof n) {
      if (T.test(n)) return w.filter(n, e, r);
      n = w.filter(n, e);
    }

    return w.grep(e, function (e) {
      return 0 <= i.call(n, e) !== r;
    });
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function (e) {
      var t,
          n = this.length,
          r = [],
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < n; t++) if (w.contains(i[t], this)) return !0;
      }));

      for (t = 0; t < n; t++) w.find(e, i[t], r);

      return (r = this.pushStack(1 < n ? w.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r;
    },
    filter: function (e) {
      return this.pushStack(C(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(C(this, e || [], !0));
    },
    is: function (e) {
      return !!C(this, "string" == typeof e && x.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (w.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? void 0 !== k.ready ? k.ready(e) : e(w) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || k : this.constructor(t)).find(e);

    if (n[1]) {
      if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), b.test(n[1]) && w.isPlainObject(t)) for (n in t) w.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }

    return (r = y.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = y, this.selector = e, this;
  }).prototype = w.fn;
  var k = w(y),
      E = /^(?:parents|prev(?:Until|All))/,
      D = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function j(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);

    return e;
  }

  w.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }

      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

      return n;
    }
  }), w.fn.extend({
    has: function (e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }

      return this.pushStack(1 < o.length ? w.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(w(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.unique(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), w.each({
    parent: function (e) {
      e = e.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    },
    parents: function (e) {
      return w.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return w.dir(e, "parentNode", n);
    },
    next: function (e) {
      return j(e, "nextSibling");
    },
    prev: function (e) {
      return j(e, "previousSibling");
    },
    nextAll: function (e) {
      return w.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return w.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return w.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return w.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return w.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return w.sibling(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || w.merge([], e.childNodes);
    }
  }, function (r, i) {
    w.fn[r] = function (e, t) {
      var n = w.map(this, i, e);
      return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = w.filter(t, n)), 1 < this.length && (D[r] || w.unique(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var S,
      A = /\S+/g,
      L = {};

  function q() {
    y.removeEventListener("DOMContentLoaded", q, !1), h.removeEventListener("load", q, !1), w.ready();
  }

  w.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? L[i] || (n = L[e = i] = {}, w.each(e.match(A) || [], function (e, t) {
      n[t] = !0;
    }), n) : w.extend({}, i);

    function r(e) {
      for (t = i.memory && e, o = !0, l = a || 0, a = 0, u = c.length, s = !0; c && l < u; l++) if (!1 === c[l].apply(e[0], e[1]) && i.stopOnFalse) {
        t = !1;
        break;
      }

      s = !1, c && (f ? f.length && r(f.shift()) : t ? c = [] : p.disable());
    }

    var t,
        o,
        s,
        a,
        u,
        l,
        c = [],
        f = !i.once && [],
        p = {
      add: function () {
        var e;
        return c && (e = c.length, function r(e) {
          w.each(e, function (e, t) {
            var n = w.type(t);
            "function" === n ? i.unique && p.has(t) || c.push(t) : t && t.length && "string" !== n && r(t);
          });
        }(arguments), s ? u = c.length : t && (a = e, r(t))), this;
      },
      remove: function () {
        return c && w.each(arguments, function (e, t) {
          for (var n; -1 < (n = w.inArray(t, c, n));) c.splice(n, 1), s && (n <= u && u--, n <= l && l--);
        }), this;
      },
      has: function (e) {
        return e ? -1 < w.inArray(e, c) : !(!c || !c.length);
      },
      empty: function () {
        return c = [], u = 0, this;
      },
      disable: function () {
        return c = f = t = void 0, this;
      },
      disabled: function () {
        return !c;
      },
      lock: function () {
        return f = void 0, t || p.disable(), this;
      },
      locked: function () {
        return !f;
      },
      fireWith: function (e, t) {
        return !c || o && !f || (t = [e, (t = t || []).slice ? t.slice() : t], s ? f.push(t) : r(t)), this;
      },
      fire: function () {
        return p.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!o;
      }
    };
    return p;
  }, w.extend({
    Deferred: function (e) {
      var o = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]],
          i = "pending",
          s = {
        state: function () {
          return i;
        },
        always: function () {
          return a.done(arguments).fail(arguments), this;
        },
        then: function () {
          var i = arguments;
          return w.Deferred(function (r) {
            w.each(o, function (e, t) {
              var n = w.isFunction(i[e]) && i[e];
              a[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && w.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        promise: function (e) {
          return null != e ? w.extend(e, s) : s;
        }
      },
          a = {};
      return s.pipe = s.then, w.each(o, function (e, t) {
        var n = t[2],
            r = t[3];
        s[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function () {
          return a[t[0] + "With"](this === a ? s : this, arguments), this;
        }, a[t[0] + "With"] = n.fireWith;
      }), s.promise(a), e && e.call(a, a), a;
    },
    when: function (e) {
      function t(t, n, r) {
        return function (e) {
          n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
        };
      }

      var i,
          n,
          r,
          o = 0,
          s = c.call(arguments),
          a = s.length,
          u = 1 !== a || e && w.isFunction(e.promise) ? a : 0,
          l = 1 === u ? e : w.Deferred();
      if (1 < a) for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && w.isFunction(s[o].promise) ? s[o].promise().done(t(o, r, s)).fail(l.reject).progress(t(o, n, i)) : --u;
      return u || l.resolveWith(r, s), l.promise();
    }
  }), w.fn.ready = function (e) {
    return w.ready.promise().done(e), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? w.readyWait++ : w.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || (S.resolveWith(y, [w]), w.fn.trigger && w(y).trigger("ready").off("ready"));
    }
  }), w.ready.promise = function (e) {
    return S || (S = w.Deferred(), "complete" === y.readyState ? setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", q, !1), h.addEventListener("load", q, !1))), S.promise(e);
  }, w.ready.promise();

  var H = w.access = function (e, t, n, r, i, o, s) {
    var a = 0,
        u = e.length,
        l = null == n;
    if ("object" === w.type(n)) for (a in i = !0, n) w.access(e, t, a, n[a], !0, o, s);else if (void 0 !== r && (i = !0, w.isFunction(r) || (s = !0), t = l ? s ? (t.call(e, r), null) : (l = t, function (e, t, n) {
      return l.call(w(e), n);
    }) : t)) for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  };

  function O() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {};
      }
    }), this.expando = w.expando + Math.random();
  }

  w.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }, O.uid = 1, O.accepts = w.acceptData, O.prototype = {
    key: function (t) {
      if (!O.accepts(t)) return 0;
      var n = {},
          r = t[this.expando];

      if (!r) {
        r = O.uid++;

        try {
          n[this.expando] = {
            value: r
          }, Object.defineProperties(t, n);
        } catch (e) {
          n[this.expando] = r, w.extend(t, n);
        }
      }

      return this.cache[r] || (this.cache[r] = {}), r;
    },
    set: function (e, t, n) {
      var r,
          e = this.key(e),
          i = this.cache[e];
      if ("string" == typeof t) i[t] = n;else if (w.isEmptyObject(i)) w.extend(this.cache[e], t);else for (r in t) i[r] = t[r];
      return i;
    },
    get: function (e, t) {
      e = this.cache[this.key(e)];
      return void 0 === t ? e : e[t];
    },
    access: function (e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, w.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r,
          e = this.key(e),
          i = this.cache[e];
      if (void 0 === t) this.cache[e] = {};else {
        n = (r = w.isArray(t) ? t.concat(t.map(w.camelCase)) : (e = w.camelCase(t), t in i ? [t, e] : (r = e) in i ? [r] : r.match(A) || [])).length;

        for (; n--;) delete i[r[n]];
      }
    },
    hasData: function (e) {
      return !w.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    }
  };
  var F = new O(),
      P = new O(),
      M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      R = /([A-Z])/g;

  function W(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(R, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? w.parseJSON(n) : n);
      } catch (e) {}

      P.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function (e) {
      return P.hasData(e) || F.hasData(e);
    },
    data: function (e, t, n) {
      return P.access(e, t, n);
    },
    removeData: function (e, t) {
      P.remove(e, t);
    },
    _data: function (e, t, n) {
      return F.access(e, t, n);
    },
    _removeData: function (e, t) {
      F.remove(e, t);
    }
  }), w.fn.extend({
    data: function (r, e) {
      var t,
          n,
          i,
          o = this[0],
          s = o && o.attributes;
      if (void 0 !== r) return "object" == typeof r ? this.each(function () {
        P.set(this, r);
      }) : H(this, function (t) {
        var e,
            n = w.camelCase(r);
        if (o && void 0 === t) return void 0 !== (e = P.get(o, r)) || void 0 !== (e = P.get(o, n)) ? e : void 0 !== (e = W(o, n, void 0)) ? e : void 0;
        this.each(function () {
          var e = P.get(this, n);
          P.set(this, n, t), -1 !== r.indexOf("-") && void 0 !== e && P.set(this, r, t);
        });
      }, null, e, 1 < arguments.length, null, !0);

      if (this.length && (i = P.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
        for (t = s.length; t--;) 0 === (n = s[t].name).indexOf("data-") && (n = w.camelCase(n.slice(5)), W(o, n, i[n]));

        F.set(o, "hasDataAttrs", !0);
      }

      return i;
    },
    removeData: function (e) {
      return this.each(function () {
        P.remove(this, e);
      });
    }
  }), w.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (r = F.get(e, t = (t || "fx") + "queue"), n && (!r || w.isArray(n) ? r = F.access(e, t, w.makeArray(n)) : r.push(n)), r || []) : void 0;
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        w.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return F.get(e, n) || F.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          F.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? w.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = w.queue(this, t, n);
        w._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      function n() {
        --i || o.resolveWith(s, [s]);
      }

      var r,
          i = 1,
          o = w.Deferred(),
          s = this,
          a = this.length;

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (r = F.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));

      return n(), o.promise(t);
    }
  });

  function $(e, t) {
    return "none" === w.css(e = t || e, "display") || !w.contains(e.ownerDocument, e);
  }

  var n = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      B = ["Top", "Right", "Bottom", "Left"],
      I = /^(?:checkbox|radio)$/i;
  (u = y.createDocumentFragment().appendChild(y.createElement("div"))).innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, u.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue;
  var _ = "undefined";
  v.focusinBubbles = "onfocusin" in h;
  var X = /^key/,
      z = /^(?:mouse|contextmenu)|click/,
      U = /^(?:focusinfocus|focusoutblur)$/,
      V = /^([^.]*)(?:\.(.+)|)$/;

  function Y() {
    return !0;
  }

  function G() {
    return !1;
  }

  function Q() {
    try {
      return y.activeElement;
    } catch (e) {}
  }

  w.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
          s,
          a,
          u,
          l,
          c,
          f,
          p,
          d,
          h = F.get(t);
      if (h) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = w.guid++), (a = h.events) || (a = h.events = {}), (s = h.handle) || (s = h.handle = function (e) {
        return typeof w != _ && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0;
      }), u = (e = (e || "").match(A) || [""]).length; u--;) f = d = (l = V.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = w.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = w.event.special[f] || {}, l = w.extend({
        type: f,
        origType: d,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && w.expr.match.needsContext.test(i),
        namespace: p.join(".")
      }, o), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s, !1)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), w.event.global[f] = !0);
    },
    remove: function (e, t, n, r, i) {
      var o,
          s,
          a,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          m = F.hasData(e) && F.get(e);

      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(A) || [""]).length; l--;) if (d = g = (a = V.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
          for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));

          s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, d, m.handle), delete u[d]);
        } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);

        w.isEmptyObject(u) && (delete m.handle, F.remove(e, "events"));
      }
    },
    trigger: function (e, t, n, r) {
      var i,
          o,
          s,
          a,
          u,
          l,
          c = [n || y],
          f = m.call(e, "type") ? e.type : e,
          p = m.call(e, "namespace") ? e.namespace.split(".") : [],
          d = o = n = n || y;

      if (3 !== n.nodeType && 8 !== n.nodeType && !U.test(f + w.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, (e = e[w.expando] ? e : new w.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : w.makeArray(t, [e]), l = w.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
        if (!r && !l.noBubble && !w.isWindow(n)) {
          for (s = l.delegateType || f, U.test(s + f) || (d = d.parentNode); d; d = d.parentNode) c.push(d), o = d;

          o === (n.ownerDocument || y) && c.push(o.defaultView || o.parentWindow || h);
        }

        for (i = 0; (d = c[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : l.bindType || f, (u = (F.get(d, "events") || {})[e.type] && F.get(d, "handle")) && u.apply(d, t), (u = a && d[a]) && u.apply && w.acceptData(d) && (e.result = u.apply(d, t), !1 === e.result && e.preventDefault());

        return e.type = f, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(c.pop(), t) || !w.acceptData(n) || a && w.isFunction(n[f]) && !w.isWindow(n) && ((o = n[a]) && (n[a] = null), n[w.event.triggered = f](), w.event.triggered = void 0, o && (n[a] = o)), e.result;
      }
    },
    dispatch: function (e) {
      e = w.event.fix(e);
      var t,
          n,
          r,
          i,
          o,
          s = c.call(arguments),
          a = (F.get(this, "events") || {})[e.type] || [],
          u = w.event.special[e.type] || {};

      if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (o = w.event.handlers.call(this, e, a), t = 0; (r = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (i = ((w.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));

        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          s = [],
          a = t.delegateCount,
          u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (!0 !== u.disabled || "click" !== e.type) {
        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? 0 <= w(i, this).index(u) : w.find(i, this, null, [u]).length), r[i] && r.push(o);

        r.length && s.push({
          elem: u,
          handlers: r
        });
      }
      return a < t.length && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n,
            r,
            i = t.button;
        return null == e.pageX && null != t.clientX && (n = (r = e.target.ownerDocument || y).documentElement, r = r.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e;
      }
    },
    fix: function (e) {
      if (e[w.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];

      for (s || (this.fixHooks[i] = s = z.test(i) ? this.mouseHooks : X.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new w.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];

      return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          return this !== Q() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === Q() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && w.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function (e) {
          return w.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      e = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? w.event.trigger(e, null, t) : w.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault();
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, w.Event = function (e, t) {
    return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? Y : G) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), void (this[w.expando] = !0)) : new w.Event(e, t);
  }, w.Event.prototype = {
    isDefaultPrevented: G,
    isPropagationStopped: G,
    isImmediatePropagationStopped: G,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Y, e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Y, e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = Y, this.stopPropagation();
    }
  }, w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, i) {
    w.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || w.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), v.focusinBubbles || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    function i(e) {
      w.event.simulate(r, e.target, w.event.fix(e), !0);
    }

    w.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this,
            t = F.access(e, r);
        t || e.addEventListener(n, i, !0), F.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this,
            t = F.access(e, r) - 1;
        t ? F.access(e, r, t) : (e.removeEventListener(n, i, !0), F.remove(e, r));
      }
    };
  }), w.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;

      if ("object" == typeof e) {
        for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], i);

        return this;
      }

      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = G;else if (!r) return this;
      return 1 === i && (o = r, (r = function (e) {
        return w().off(e), o.apply(this, arguments);
      }).guid = o.guid || (o.guid = w.guid++)), this.each(function () {
        w.event.add(this, e, r, n, t);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = G), this.each(function () {
        w.event.remove(this, e, n, t);
      });

      for (i in e) this.off(i, t, e[i]);

      return this;
    },
    trigger: function (e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      return n ? w.event.trigger(e, t, n, !0) : void 0;
    }
  });
  var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      K = /<([\w:]+)/,
      Z = /<|&#?\w+;/,
      ee = /<(?:script|style|link)/i,
      te = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ne = /^$|\/(?:java|ecma)script/i,
      re = /^true\/(.*)/,
      ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      oe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function se(e, t) {
    return w.nodeName(e, "table") && w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function ae(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function ue(e) {
    var t = re.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function le(e, t) {
    for (var n = 0, r = e.length; n < r; n++) F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"));
  }

  function ce(e, t) {
    var n, r, i, o, s, a;

    if (1 === t.nodeType) {
      if (F.hasData(e) && (o = F.access(e), s = F.set(t, o), a = o.events)) for (i in delete s.handle, s.events = {}, a) for (n = 0, r = a[i].length; n < r; n++) w.event.add(t, i, a[i][n]);
      P.hasData(e) && (e = P.access(e), e = w.extend({}, e), P.set(t, e));
    }
  }

  function fe(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && w.nodeName(e, t) ? w.merge([e], n) : n;
  }

  oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td, w.extend({
    clone: function (e, t, n) {
      var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = e.cloneNode(!0),
          f = w.contains(e.ownerDocument, e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = fe(c), r = 0, i = (o = fe(e)).length; r < i; r++) a = o[r], u = s[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && I.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
      if (t) if (n) for (o = o || fe(e), s = s || fe(c), r = 0, i = o.length; r < i; r++) ce(o[r], s[r]);else ce(e, c);
      return 0 < (s = fe(c, "script")).length && le(s, !f && fe(e, "script")), c;
    },
    buildFragment: function (e, t, n, r) {
      for (var i, o, s, a, u, l = t.createDocumentFragment(), c = [], f = 0, p = e.length; f < p; f++) if ((i = e[f]) || 0 === i) if ("object" === w.type(i)) w.merge(c, i.nodeType ? [i] : i);else if (Z.test(i)) {
        for (o = o || l.appendChild(t.createElement("div")), s = (K.exec(i) || ["", ""])[1].toLowerCase(), s = oe[s] || oe._default, o.innerHTML = s[1] + i.replace(J, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;

        w.merge(c, o.childNodes), (o = l.firstChild).textContent = "";
      } else c.push(t.createTextNode(i));

      for (l.textContent = "", f = 0; i = c[f++];) if ((!r || -1 === w.inArray(i, r)) && (a = w.contains(i.ownerDocument, i), o = fe(l.appendChild(i), "script"), a && le(o), n)) for (u = 0; i = o[u++];) ne.test(i.type || "") && n.push(i);

      return l;
    },
    cleanData: function (e) {
      for (var t, n, r, i, o, s, a = w.event.special, u = 0; void 0 !== (n = e[u]); u++) {
        if (w.acceptData(n) && (o = n[F.expando]) && (t = F.cache[o])) {
          if ((r = Object.keys(t.events || {})).length) for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
          F.cache[o] && delete F.cache[o];
        }

        delete P.cache[n[P.expando]];
      }
    }
  }), w.fn.extend({
    text: function (e) {
      return H(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || se(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        var t;
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = se(this, e)).insertBefore(e, t.firstChild);
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      for (var n, r = e ? w.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(fe(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && le(fe(n, "script")), n.parentNode.removeChild(n));

      return this;
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(fe(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function (e) {
      return H(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ee.test(e) && !oe[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(J, "<$1></$2>");

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(fe(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var t = arguments[0];
      return this.domManip(arguments, function (e) {
        t = this.parentNode, w.cleanData(fe(this)), t && t.replaceChild(e, this);
      }), t && (t.length || t.nodeType) ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (n, r) {
      n = g.apply([], n);
      var e,
          t,
          i,
          o,
          s,
          a,
          u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          p = n[0],
          d = w.isFunction(p);
      if (d || 1 < l && "string" == typeof p && !v.checkClone && te.test(p)) return this.each(function (e) {
        var t = c.eq(e);
        d && (n[0] = p.call(this, e, t.html())), t.domManip(n, r);
      });

      if (l && (t = (e = w.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
        for (o = (i = w.map(fe(e, "script"), ae)).length; u < l; u++) s = e, u !== f && (s = w.clone(s, !0, !0), o && w.merge(i, fe(s, "script"))), r.call(this[u], s, u);

        if (o) for (a = i[i.length - 1].ownerDocument, w.map(i, ue), u = 0; u < o; u++) s = i[u], ne.test(s.type || "") && !F.access(s, "globalEval") && w.contains(a, s) && (s.src ? w._evalUrl && w._evalUrl(s.src) : w.globalEval(s.textContent.replace(ie, "")));
      }

      return this;
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    w.fn[e] = function (e) {
      for (var t, n = [], r = w(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), w(r[o])[s](t), a.apply(n, t.get());

      return this.pushStack(n);
    };
  });
  var pe,
      de = {};

  function he(e, t) {
    e = w(t.createElement(e)).appendTo(t.body), t = h.getDefaultComputedStyle ? h.getDefaultComputedStyle(e[0]).display : w.css(e[0], "display");
    return e.detach(), t;
  }

  function ge(e) {
    var t = y,
        n = de[e];
    return n || ("none" !== (n = he(e, t)) && n || ((t = (pe = (pe || w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = he(e, t), pe.detach()), de[e] = n), n;
  }

  function me(e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null);
  }

  var ve,
      ye,
      xe,
      be,
      we,
      Te = /^margin/,
      Ce = new RegExp("^(" + n + ")(?!px)[a-z%]+$", "i");

  function Ne(e, t, n) {
    var r,
        i,
        o = e.style;
    return (n = n || me(e)) && (i = n.getPropertyValue(t) || n[t]), n && ("" !== i || w.contains(e.ownerDocument, e) || (i = w.style(e, t)), Ce.test(i) && Te.test(t) && (r = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = r, o.minWidth = e, o.maxWidth = t)), void 0 !== i ? i + "" : i;
  }

  function ke(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }

  function Ee() {
    we.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", xe.appendChild(be);
    var e = h.getComputedStyle(we, null);
    ve = "1%" !== e.top, ye = "4px" === e.width, xe.removeChild(be);
  }

  xe = y.documentElement, be = y.createElement("div"), (we = y.createElement("div")).style.backgroundClip = "content-box", we.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === we.style.backgroundClip, be.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", be.appendChild(we), h.getComputedStyle && w.extend(v, {
    pixelPosition: function () {
      return Ee(), ve;
    },
    boxSizingReliable: function () {
      return null == ye && Ee(), ye;
    },
    reliableMarginRight: function () {
      var e = we.appendChild(y.createElement("div"));
      return e.style.cssText = we.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", e.style.marginRight = e.style.width = "0", we.style.width = "1px", xe.appendChild(be), e = !parseFloat(h.getComputedStyle(e, null).marginRight), xe.removeChild(be), we.innerHTML = "", e;
    }
  }), w.swap = function (e, t, n, r) {
    var i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];

    return r;
  };
  var De = /^(none|table(?!-c[ea]).+)/,
      je = new RegExp("^(" + n + ")(.*)$", "i"),
      Se = new RegExp("^([+-])=(" + n + ")", "i"),
      Ae = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Le = {
    letterSpacing: 0,
    fontWeight: 400
  },
      qe = ["Webkit", "O", "Moz", "ms"];

  function He(e, t) {
    if (t in e) return t;

    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = qe.length; i--;) if ((t = qe[i] + n) in e) return t;

    return r;
  }

  function Oe(e, t, n) {
    var r = je.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function Fe(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += w.css(e, n + B[o], !0, i)), r ? ("content" === n && (s -= w.css(e, "padding" + B[o], !0, i)), "margin" !== n && (s -= w.css(e, "border" + B[o] + "Width", !0, i))) : (s += w.css(e, "padding" + B[o], !0, i), "padding" !== n && (s += w.css(e, "border" + B[o] + "Width", !0, i)));

    return s;
  }

  function Pe(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = me(e),
        s = "border-box" === w.css(e, "boxSizing", !1, o);

    if (i <= 0 || null == i) {
      if (((i = Ne(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ce.test(i)) return i;
      r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + Fe(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }

  function Me(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) (r = e[s]).style && (o[s] = F.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (o[s] = F.access(r, "olddisplay", ge(r.nodeName)))) : o[s] || (i = $(r), (n && "none" !== n || !i) && F.set(r, "olddisplay", i ? n : w.css(r, "display"))));

    for (s = 0; s < a; s++) (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));

    return e;
  }

  function Re(e, t, n, r, i) {
    return new Re.prototype.init(e, t, n, r, i);
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            e = Ne(e, "opacity");
            return "" === e ? "1" : e;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            s,
            a = w.camelCase(t),
            u = e.style;
        return t = w.cssProps[a] || (w.cssProps[a] = He(u, a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = Se.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(w.css(e, t)), o = "number"), void (null != n && n == n && ("number" !== o || w.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n))));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o = w.camelCase(t);
      return t = w.cssProps[o] || (w.cssProps[o] = He(e.style, o)), "normal" === (i = void 0 === (i = (o = w.cssHooks[t] || w.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ne(e, t, r) : i) && t in Le && (i = Le[t]), "" === n || n ? (t = parseFloat(i), !0 === n || w.isNumeric(t) ? t || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, i) {
    w.cssHooks[i] = {
      get: function (e, t, n) {
        return t ? 0 === e.offsetWidth && De.test(w.css(e, "display")) ? w.swap(e, Ae, function () {
          return Pe(e, i, n);
        }) : Pe(e, i, n) : void 0;
      },
      set: function (e, t, n) {
        var r = n && me(e);
        return Oe(0, t, n ? Fe(e, i, n, "border-box" === w.css(e, "boxSizing", !1, r), r) : 0);
      }
    };
  }), w.cssHooks.marginRight = ke(v.reliableMarginRight, function (e, t) {
    return t ? w.swap(e, {
      display: "inline-block"
    }, Ne, [e, "marginRight"]) : void 0;
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    w.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + B[t] + o] = r[t] || r[t - 2] || r[0];

        return n;
      }
    }, Te.test(i) || (w.cssHooks[i + o].set = Oe);
  }), w.fn.extend({
    css: function (e, t) {
      return H(this, function (e, t, n) {
        var r,
            i,
            o = {},
            s = 0;

        if (w.isArray(t)) {
          for (r = me(e), i = t.length; s < i; s++) o[t[s]] = w.css(e, t[s], !1, r);

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, 1 < arguments.length);
    },
    show: function () {
      return Me(this, !0);
    },
    hide: function () {
      return Me(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        $(this) ? w(this).show() : w(this).hide();
      });
    }
  }), ((w.Tween = Re).prototype = {
    constructor: Re,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = Re.propHooks[this.prop];
      return (e && e.get ? e : Re.propHooks._default).get(this);
    },
    run: function (e) {
      var t = Re.propHooks[this.prop];
      return this.pos = e = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (t && t.set ? t : Re.propHooks._default).set(this), this;
    }
  }).init.prototype = Re.prototype, (Re.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
      },
      set: function (e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }).scrollTop = Re.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, w.fx = Re.prototype.init, w.fx.step = {};
  var We,
      $e,
      Be = /^(?:toggle|show|hide)$/,
      Ie = new RegExp("^(?:([+-])=|)(" + n + ")([a-z%]*)$", "i"),
      _e = /queueHooks$/,
      Xe = [function (t, e, n) {
    var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = this,
        f = {},
        p = t.style,
        d = t.nodeType && $(t),
        h = F.get(t, "fxshow");

    for (r in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u();
    }), a.unqueued++, c.always(function () {
      c.always(function () {
        a.unqueued--, w.queue(t, "fx").length || a.empty.fire();
      });
    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === (l = "none" === (l = w.css(t, "display")) ? ge(t.nodeName) : l) && "none" === w.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    })), e) if (i = e[r], Be.exec(i)) {
      if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
        if ("show" !== i || !h || void 0 === h[r]) continue;
        d = !0;
      }

      f[r] = h && h[r] || w.style(t, r);
    }

    if (!w.isEmptyObject(f)) for (r in h ? "hidden" in h && (d = h.hidden) : h = F.access(t, "fxshow", {}), o && (h.hidden = !d), d ? w(t).show() : c.done(function () {
      w(t).hide();
    }), c.done(function () {
      for (var e in F.remove(t, "fxshow"), f) w.style(t, e, f[e]);
    }), f) s = Ye(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0));
  }],
      ze = {
    "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          t = Ie.exec(t),
          i = t && t[3] || (w.cssNumber[e] ? "" : "px"),
          o = (w.cssNumber[e] || "px" !== i && +r) && Ie.exec(w.css(n.elem, e)),
          s = 1,
          a = 20;
      if (o && o[3] !== i) for (i = i || o[3], t = t || [], o = +r || 1; w.style(n.elem, e, (o /= s = s || ".5") + i), s !== (s = n.cur() / r) && 1 !== s && --a;);
      return t && (o = n.start = +o || +r || 0, n.unit = i, n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2]), n;
    }]
  };

  function Ue() {
    return setTimeout(function () {
      We = void 0;
    }), We = w.now();
  }

  function Ve(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = B[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function Ye(e, t, n) {
    for (var r, i = (ze[t] || []).concat(ze["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function Ge(i, e, t) {
    var n,
        o,
        r = 0,
        s = Xe.length,
        a = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (o) return !1;

      for (var e = We || Ue(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);

      return a.notifyWith(i, [l, t, e]), t < 1 && r ? e : (a.resolveWith(i, [l]), !1);
    },
        l = a.promise({
      elem: i,
      props: w.extend({}, e),
      opts: w.extend(!0, {
        specialEasing: {}
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: We || Ue(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        e = w.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(e), e;
      },
      stop: function (e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (o) return this;

        for (o = !0; t < n; t++) l.tweens[t].run(1);

        return e ? a.resolveWith(i, [l, e]) : a.rejectWith(i, [l, e]), this;
      }
    }),
        c = l.props;

    for (function (e, t) {
      var n, r, i, o, s;

      for (n in e) if (r = w.camelCase(n), i = t[r], o = e[n], w.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = w.cssHooks[r], s && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < s; r++) if (n = Xe[r].call(l, i, c, l.opts)) return n;

    return w.map(c, Ye, l), w.isFunction(l.opts.start) && l.opts.start.call(i, l), w.fx.timer(w.extend(u, {
      elem: i,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }

  w.Animation = w.extend(Ge, {
    tweener: function (e, t) {
      for (var n, r = 0, i = (e = w.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], ze[n] = ze[n] || [], ze[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Xe.unshift(e) : Xe.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? w.extend({}, e) : {
      complete: n || !n && t || w.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !w.isFunction(t) && t
    };
    return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter($).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = w.isEmptyObject(t),
          o = w.speed(e, n, r),
          r = function () {
        var e = Ge(this, w.extend({}, t), o);
        (i || F.get(this, "finish")) && e.stop(!0);
      };

      return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
    },
    stop: function (i, e, o) {
      function s(e) {
        var t = e.stop;
        delete e.stop, t(o);
      }

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = w.timers,
            r = F.get(this);
        if (t) r[t] && r[t].stop && s(r[t]);else for (t in r) r[t] && r[t].stop && _e.test(t) && s(r[t]);

        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));

        !e && o || w.dequeue(this, i);
      });
    },
    finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e,
            t = F.get(this),
            n = t[s + "queue"],
            r = t[s + "queueHooks"],
            i = w.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, w.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));

        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);

        delete t.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, r) {
    var i = w.fn[r];

    w.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ve(r, !0), e, t, n);
    };
  }), w.each({
    slideDown: Ve("show"),
    slideUp: Ve("hide"),
    slideToggle: Ve("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    w.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (We = w.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || w.fx.stop(), We = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), e() ? w.fx.start() : w.timers.pop();
  }, w.fx.interval = 13, w.fx.start = function () {
    $e = $e || setInterval(w.fx.tick, w.fx.interval);
  }, w.fx.stop = function () {
    clearInterval($e), $e = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (r, e) {
    return r = w.fx && w.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
      var n = setTimeout(e, r);

      t.stop = function () {
        clearTimeout(n);
      };
    });
  }, d = y.createElement("input"), u = y.createElement("select"), n = u.appendChild(y.createElement("option")), d.type = "checkbox", v.checkOn = "" !== d.value, v.optSelected = n.selected, u.disabled = !0, v.optDisabled = !n.disabled, (d = y.createElement("input")).value = "t", d.type = "radio", v.radioValue = "t" === d.value;
  var Qe,
      Je = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return H(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute == _ ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (t = t.toLowerCase(), r = w.attrHooks[t] || (w.expr.match.bool.test(t) ? Qe : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void w.removeAttr(e, t));
    },
    removeAttr: function (e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(A);
      if (o && 1 === e.nodeType) for (; n = o[i++];) r = w.propFix[n] || n, w.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && w.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    }
  }), Qe = {
    set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var o = Je[t] || w.find.attr;

    Je[t] = function (e, t, n) {
      var r, i;
      return n || (i = Je[t], Je[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, Je[t] = i), r;
    };
  });
  var Ke = /^(?:input|select|textarea|button)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return H(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    propFix: {
      for: "htmlFor",
      class: "className"
    },
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !w.isXMLDoc(e)) && (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), v.optSelected || (w.propHooks.selected = {
    get: function (e) {
      e = e.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex, null;
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });
  var Ze = /[\t\r\n\f]/g;
  w.fn.extend({
    addClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          s,
          a = "string" == typeof t && t,
          u = 0,
          l = this.length;
      if (w.isFunction(t)) return this.each(function (e) {
        w(this).addClass(t.call(this, e, this.className));
      });
      if (a) for (e = (t || "").match(A) || []; u < l; u++) if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : " ")) {
        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");

        s = w.trim(r), n.className !== s && (n.className = s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          s,
          a = 0 === arguments.length || "string" == typeof t && t,
          u = 0,
          l = this.length;
      if (w.isFunction(t)) return this.each(function (e) {
        w(this).removeClass(t.call(this, e, this.className));
      });
      if (a) for (e = (t || "").match(A) || []; u < l; u++) if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : "")) {
        for (o = 0; i = e[o++];) for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");

        s = t ? w.trim(r) : "", n.className !== s && (n.className = s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : this.each(w.isFunction(i) ? function (e) {
        w(this).toggleClass(i.call(this, e, this.className, t), t);
      } : function () {
        if ("string" == o) for (var e, t = 0, n = w(this), r = i.match(A) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);else o != _ && "boolean" != o || (this.className && F.set(this, "__className__", this.className), this.className = !this.className && !1 !== i && F.get(this, "__className__") || "");
      });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Ze, " ").indexOf(t)) return !0;

      return !1;
    }
  });
  var et = /\r/g;
  w.fn.extend({
    val: function (t) {
      var n,
          e,
          r,
          i = this[0];
      return arguments.length ? (r = w.isFunction(t), this.each(function (e) {
        1 === this.nodeType && (null == (e = r ? t.call(this, e, w(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : w.isArray(e) && (e = w.map(e, function (e) {
          return null == e ? "" : e + "";
        })), (n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e));
      })) : i ? (n = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(et, "") : null == e ? "" : e : void 0;
    }
  }), w.extend({
    valHooks: {
      select: {
        get: function (e) {
          for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r < 0, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++) if (!(!(t = n[a]).selected && a !== r || (v.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && w.nodeName(t.parentNode, "optgroup"))) {
            if (t = w(t).val(), i) return t;
            o.push(t);
          }

          return o;
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = w.makeArray(t), s = i.length; s--;) ((r = i[s]).selected = 0 <= w.inArray(w(r).val(), o)) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function (e, t) {
        return w.isArray(t) ? e.checked = 0 <= w.inArray(w(e).val(), t) : void 0;
      }
    }, v.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
    w.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), w.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });
  var tt = w.now(),
      nt = /\?/;
  w.parseJSON = function (e) {
    return JSON.parse(e + "");
  }, w.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), t;
  };
  var rt,
      it,
      ot = /#.*$/,
      st = /([?&])_=[^&]*/,
      at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ut = /^(?:GET|HEAD)$/,
      lt = /^\/\//,
      ct = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      ft = {},
      pt = {},
      dt = "*/".concat("*");

  try {
    it = location.href;
  } catch (e) {
    (it = y.createElement("a")).href = "", it = it.href;
  }

  function ht(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(A) || [];
      if (w.isFunction(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }

  function gt(t, r, i, o) {
    var s = {},
        a = t === pt;

    function u(e) {
      var n;
      return s[e] = !0, w.each(t[e] || [], function (e, t) {
        t = t(r, i, o);
        return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1);
      }), n;
    }

    return u(r.dataTypes[0]) || !s["*"] && u("*");
  }

  function mt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);

    return r && w.extend(!0, e, r), e;
  }

  rt = ct.exec(it.toLowerCase()) || [], w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: it,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": dt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": w.parseJSON,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? mt(mt(e, w.ajaxSettings), t) : mt(w.ajaxSettings, e);
    },
    ajaxPrefilter: ht(ft),
    ajaxTransport: ht(pt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0);
      var u,
          l,
          c,
          n,
          f,
          p,
          r,
          d = w.ajaxSetup({}, t = t || {}),
          h = d.context || d,
          g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
          m = w.Deferred(),
          v = w.Callbacks("once memory"),
          y = d.statusCode || {},
          i = {},
          o = {},
          x = 0,
          s = "canceled",
          b = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (2 === x) {
            if (!n) for (n = {}; t = at.exec(c);) n[t[1].toLowerCase()] = t[2];
            t = n[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function () {
          return 2 === x ? c : null;
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase();
          return x || (e = o[n] = o[n] || e, i[e] = t), this;
        },
        overrideMimeType: function (e) {
          return x || (d.mimeType = e), this;
        },
        statusCode: function (e) {
          if (e) if (x < 2) for (var t in e) y[t] = [y[t], e[t]];else b.always(e[b.status]);
          return this;
        },
        abort: function (e) {
          e = e || s;
          return u && u.abort(e), a(0, e), this;
        }
      };
      if (m.promise(b).complete = v.add, b.success = b.done, b.error = b.fail, d.url = ((e || d.url || it) + "").replace(ot, "").replace(lt, rt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = w.trim(d.dataType || "*").toLowerCase().match(A) || [""], null == d.crossDomain && (e = ct.exec(d.url.toLowerCase()), d.crossDomain = !(!e || e[1] === rt[1] && e[2] === rt[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (rt[3] || ("http:" === rt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), gt(ft, d, t, b), 2 === x) return b;

      for (r in (p = d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ut.test(d.type), l = d.url, d.hasContent || (d.data && (l = d.url += (nt.test(l) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = st.test(l) ? l.replace(st, "$1_=" + tt++) : l + (nt.test(l) ? "&" : "?") + "_=" + tt++)), d.ifModified && (w.lastModified[l] && b.setRequestHeader("If-Modified-Since", w.lastModified[l]), w.etag[l] && b.setRequestHeader("If-None-Match", w.etag[l])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + dt + "; q=0.01" : "") : d.accepts["*"]), d.headers) b.setRequestHeader(r, d.headers[r]);

      if (d.beforeSend && (!1 === d.beforeSend.call(h, b, d) || 2 === x)) return b.abort();

      for (r in s = "abort", {
        success: 1,
        error: 1,
        complete: 1
      }) b[r](d[r]);

      if (u = gt(pt, d, t, b)) {
        b.readyState = 1, p && g.trigger("ajaxSend", [b, d]), d.async && 0 < d.timeout && (f = setTimeout(function () {
          b.abort("timeout");
        }, d.timeout));

        try {
          x = 1, u.send(i, a);
        } catch (e) {
          if (!(x < 2)) throw e;
          a(-1, e);
        }
      } else a(-1, "No Transport");

      function a(e, t, n, r) {
        var i,
            o,
            s,
            a = t;
        2 !== x && (x = 2, f && clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              s = s || i;
            }

            o = o || s;
          }
          return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
        }(d, b, n)), s = function (e, t, n, r) {
          var i,
              o,
              s,
              a,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];

          for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
              !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
              break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t);else try {
              t = s(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: s ? e : "No conversion from " + u + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(d, s, b, r), r ? (d.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (w.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (w.etag[l] = n)), 204 === e || "HEAD" === d.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? m.resolveWith(h, [i, a, b]) : m.rejectWith(h, [b, a, o]), b.statusCode(y), y = void 0, p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? i : o]), v.fireWith(h, [b, a]), p && (g.trigger("ajaxComplete", [b, d]), --w.active || w.event.trigger("ajaxStop")));
      }

      return b;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, i) {
    w[i] = function (e, t, n, r) {
      return w.isFunction(t) && (r = r || n, n = t, t = void 0), w.ajax({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      });
    };
  }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    });
  }, w.fn.extend({
    wrapAll: function (t) {
      var e;
      return w.isFunction(t) ? this.each(function (e) {
        w(this).wrapAll(t.call(this, e));
      }) : (this[0] && (e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;

        return e;
      }).append(this)), this);
    },
    wrapInner: function (n) {
      return this.each(w.isFunction(n) ? function (e) {
        w(this).wrapInner(n.call(this, e));
      } : function () {
        var e = w(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = w.isFunction(t);
      return this.each(function (e) {
        w(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        w.nodeName(this, "body") || w(this).replaceWith(this.childNodes);
      }).end();
    }
  }), w.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0;
  }, w.expr.filters.visible = function (e) {
    return !w.expr.filters.hidden(e);
  };
  var vt = /%20/g,
      yt = /\[\]$/,
      xt = /\r?\n/g,
      bt = /^(?:submit|button|image|reset|file)$/i,
      wt = /^(?:input|select|textarea|keygen)/i;
  w.param = function (e, t) {
    function n(e, t) {
      t = w.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    }

    var r,
        i = [];
    if (void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      n(this.name, this.value);
    });else for (r in e) !function n(r, e, i, o) {
      if (w.isArray(e)) w.each(e, function (e, t) {
        i || yt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o);
      });else if (i || "object" !== w.type(e)) o(r, e);else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
    }(r, e[r], t, n);
    return i.join("&").replace(vt, "+");
  }, w.fn.extend({
    serialize: function () {
      return w.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !I.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : w.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(xt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(xt, "\r\n")
        };
      }).get();
    }
  }), w.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };
  var Tt = 0,
      Ct = {},
      Nt = {
    0: 200,
    1223: 204
  },
      kt = w.ajaxSettings.xhr();
  h.ActiveXObject && w(h).on("unload", function () {
    for (var e in Ct) Ct[e]();
  }), v.cors = !!kt && "withCredentials" in kt, v.ajax = kt = !!kt, w.ajaxTransport(function (o) {
    var s;
    return v.cors || kt && !o.crossDomain ? {
      send: function (e, t) {
        var n,
            r = o.xhr(),
            i = ++Tt;
        if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) r[n] = o.xhrFields[n];

        for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);

        s = function (e) {
          return function () {
            s && (delete Ct[i], s = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? t(r.status, r.statusText) : t(Nt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
              text: r.responseText
            } : void 0, r.getAllResponseHeaders()));
          };
        }, r.onload = s(), r.onerror = s("error"), s = Ct[i] = s("abort"), r.send(o.hasContent && o.data || null);
      },
      abort: function () {
        s && s();
      }
    } : void 0;
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain) return {
      send: function (e, t) {
        r = w("<script>").prop({
          async: !0,
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), y.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Et = [],
      Dt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Et.pop() || w.expando + "_" + tt++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        s = !1 !== e.jsonp && (Dt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(e.data) && "data");
    return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Dt, "$1" + r) : !1 !== e.jsonp && (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || w.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = h[r], h[r] = function () {
      o = arguments;
    }, n.always(function () {
      h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Et.push(r)), o && w.isFunction(i) && i(o[0]), o = i = void 0;
    }), "script") : void 0;
  }), w.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || y;
    var r = b.exec(e),
        n = !n && [];
    return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, n), n && n.length && w(n).remove(), w.merge([], r.childNodes));
  };
  var jt = w.fn.load;
  w.fn.load = function (e, t, n) {
    if ("string" != typeof e && jt) return jt.apply(this, arguments);
    var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
    return 0 <= a && (r = e.slice(a), e = e.slice(0, a)), w.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && w.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [e.responseText, t, e]);
    }), this;
  }, w.expr.filters.animated = function (t) {
    return w.grep(w.timers, function (e) {
      return t === e.elem;
    }).length;
  };
  var St = h.document.documentElement;

  function At(e) {
    return w.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }

  w.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          s,
          a = w.css(e, "position"),
          u = w(e),
          l = {};
      "static" === a && (e.style.position = "relative"), o = u.offset(), r = w.css(e, "top"), s = w.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), null != (t = w.isFunction(t) ? t.call(e, n, o) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l);
    }
  }, w.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        w.offset.setOffset(this, t, e);
      });
      var e,
          n = this[0],
          r = {
        top: 0,
        left: 0
      },
          i = n && n.ownerDocument;
      return i ? (e = i.documentElement, w.contains(e, n) ? (typeof n.getBoundingClientRect != _ && (r = n.getBoundingClientRect()), i = At(i), {
        top: r.top + i.pageYOffset - e.clientTop,
        left: r.left + i.pageXOffset - e.clientLeft
      }) : r) : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            r = {
          top: 0,
          left: 0
        };
        return "fixed" === w.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (r = !w.nodeName(e[0], "html") ? e.offset() : r).top += w.css(e[0], "borderTopWidth", !0), r.left += w.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - w.css(n, "marginTop", !0),
          left: t.left - r.left - w.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || St; e && !w.nodeName(e, "html") && "static" === w.css(e, "position");) e = e.offsetParent;

        return e || St;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    w.fn[t] = function (e) {
      return H(this, function (e, t, n) {
        var r = At(e);
        return void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset) : e[t] = n);
      }, t, e, arguments.length, null);
    };
  }), w.each(["top", "left"], function (e, n) {
    w.cssHooks[n] = ke(v.pixelPosition, function (e, t) {
      return t ? (t = Ne(e, n), Ce.test(t) ? w(e).position()[n] + "px" : t) : void 0;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (o, s) {
    w.each({
      padding: "inner" + o,
      content: s,
      "": "outer" + o
    }, function (r, e) {
      w.fn[e] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return H(this, function (e, t, n) {
          var r;
          return w.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? w.css(e, t, i) : w.style(e, t, n, i);
        }, s, n ? e : void 0, n, null);
      };
    });
  }), w.fn.size = function () {
    return this.length;
  }, w.fn.andSelf = w.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Lt = h.jQuery,
      qt = h.$;
  return w.noConflict = function (e) {
    return h.$ === w && (h.$ = qt), e && h.jQuery === w && (h.jQuery = Lt), w;
  }, typeof e == _ && (h.jQuery = h.$ = w), w;
});
var names=["Tiger","Samuel","Leeloo","Bella","Mo","Sly","Beezy","Maple","Rodney","Yonce","Reginald","Winifred"],ages=["9 Weeks","12 Weeks","3 Months","8 Weeks","1 Year","15 Weeks","4 Months","2 Months","14 Weeks","6 Months","10 Weeks","8 Months"];$(".kittens").find("li").each(function(e,n){var t=$(n).find("img"),a=$(n).find(".name"),n=$(n).find(".age");t.attr("src","http://placekitten.com/250/250?image="+e),a.text(names[e]),n.text(ages[e])});
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(h,e){function t(e,t){return t.toUpperCase()}var n=[],c=n.slice,g=n.concat,a=n.push,i=n.indexOf,r={},o=r.toString,m=r.hasOwnProperty,s="".trim,v={},y=h.document,u="2.1.0",w=function(e,t){return new w.fn.init(e,t)},l=/^-ms-/,f=/-([\da-z])/gi;function p(e){var t=e.length,n=w.type(e);return"function"!==n&&!w.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e))}w.fn=w.prototype={jquery:u,constructor:w,selector:"",length:0,toArray:function(){return c.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:c.call(this)},pushStack:function(e){e=w.merge(this.constructor(),e);return e.prevObject=this,e.context=this.context,e},each:function(e,t){return w.each(this,e,t)},map:function(n){return this.pushStack(w.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:a,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o=arguments[0]||{},s=1,a=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[s]||{},s++),"object"==typeof o||w.isFunction(o)||(o={}),s===a&&(o=this,s--);s<a;s++)if(null!=(e=arguments[s]))for(t in e)i=o[t],n=e[t],o!==n&&(u&&n&&(w.isPlainObject(n)||(r=w.isArray(n)))?(i=r?(r=!1,i&&w.isArray(i)?i:[]):i&&w.isPlainObject(i)?i:{},o[t]=w.extend(u,i,n)):void 0!==n&&(o[t]=n));return o},w.extend({expando:"jQuery"+(u+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===w.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return 0<=e-parseFloat(e)},isPlainObject:function(e){if("object"!==w.type(e)||e.nodeType||w.isWindow(e))return!1;try{if(e.constructor&&!m.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}return!0},isEmptyObject:function(e){for(var t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=w.trim(e))&&(1===e.indexOf("use strict")?((t=y.createElement("script")).text=e,y.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(l,"ms-").replace(f,t)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=p(e);if(n){if(s)for(;i<o&&!1!==(r=t.apply(e[i],n));i++);else for(i in e)if(r=t.apply(e[i],n),!1===r)break}else if(s)for(;i<o&&!1!==(r=t.call(e[i],i,e[i]));i++);else for(i in e)if(r=t.call(e[i],i,e[i]),!1===r)break;return e},trim:function(e){return null==e?"":s.call(e)},makeArray:function(e,t){t=t||[];return null!=e&&(p(Object(e))?w.merge(t,"string"==typeof e?[e]:e):a.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!=s&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,s=[];if(p(e))for(;i<o;i++)null!=(r=t(e[i],i,n))&&s.push(r);else for(i in e)r=t(e[i],i,n),null!=r&&s.push(r);return g.apply([],s)},guid:1,proxy:function(e,t){var n,r;return"string"==typeof t&&(r=e[t],t=e,e=r),w.isFunction(e)?(n=c.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(c.call(arguments)))}).guid=e.guid=e.guid||w.guid++,r):void 0},now:Date.now,support:v}),w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){r["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,f,b,o,t,p,w,l,c,d,T,r,h,g,i,s,m,x="sizzle"+-new Date,v=n.document,C=0,y=0,a=ne(),N=ne(),u=ne(),k=function(e,t){return e===t&&(c=!0),0},E="undefined",D={}.hasOwnProperty,j=[],S=j.pop,A=j.push,L=j.push,q=j.slice,H=j.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=P.replace("w","w#"),R="\\["+F+"*("+P+")"+F+"*(?:([*^$|!~]?=)"+F+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+F+"*\\]",W=":("+P+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+R.replace(3,8)+")*)|.*)\\)|)",$=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),B=new RegExp("^"+F+"*,"+F+"*"),I=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),_=new RegExp("="+F+"*([^\\]'\"]*?)"+F+"*\\]","g"),X=new RegExp(W),z=new RegExp("^"+M+"$"),U={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+O+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,K=/'|\\/g,Z=new RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)};try{L.apply(j=q.call(v.childNodes),v.childNodes),j[v.childNodes.length].nodeType}catch(e){L={apply:j.length?function(e,t){A.apply(e,q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function te(e,t,n,r){var i,o,s,a,u,l,c;if((t?t.ownerDocument||t:v)!==T&&d(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(i=(t=t||T).nodeType)&&9!==i)return[];if(h&&!r){if(l=Q.exec(e))if(c=l[1]){if(9===i){if(!(a=t.getElementById(c))||!a.parentNode)return n;if(a.id===c)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(c))&&m(t,a)&&a.id===c)return n.push(a),n}else{if(l[2])return L.apply(n,t.getElementsByTagName(e)),n;if((c=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return L.apply(n,t.getElementsByClassName(c)),n}if(f.qsa&&(!g||!g.test(e))){if(u=a=x,l=t,c=9===i&&e,1===i&&"object"!==t.nodeName.toLowerCase()){for(s=ce(e),(a=t.getAttribute("id"))?u=a.replace(K,"\\$&"):t.setAttribute("id",u),u="[id='"+u+"'] ",o=s.length;o--;)s[o]=u+fe(s[o]);l=J.test(e)&&ue(t.parentNode)||t,c=s.join(",")}if(c)try{return L.apply(n,l.querySelectorAll(c)),n}catch(e){}finally{a||t.removeAttribute("id")}}}return function(e,t,n,r){var i,o,s,a,u,l=ce(e);if(!r&&1===l.length){if(2<(o=l[0]=l[0].slice(0)).length&&"ID"===(s=o[0]).type&&f.getById&&9===t.nodeType&&h&&b.relative[o[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(Z,ee),t)||[])[0]))return n;e=e.slice(o.shift().value.length)}for(i=U.needsContext.test(e)?0:o.length;i--&&(s=o[i],!b.relative[a=s.type]);)if((u=b.find[a])&&(r=u(s.matches[0].replace(Z,ee),J.test(o[0].type)&&ue(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&fe(o)))return L.apply(n,r),n;break}}return p(e,l)(r,t,!h,n,J.test(e)&&ue(t.parentNode)||t),n}(e.replace($,"$1"),t,n,r)}function ne(){var n=[];function r(e,t){return n.push(e+" ")>b.cacheLength&&delete r[n.shift()],r[e+" "]=t}return r}function re(e){return e[x]=!0,e}function ie(e){var t=T.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t)}}function oe(e,t){for(var n=e.split("|"),r=e.length;r--;)b.attrHandle[n[r]]=t}function se(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ae(s){return re(function(o){return o=+o,re(function(e,t){for(var n,r=s([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ue(e){return e&&typeof e.getElementsByTagName!==E&&e}for(e in f=te.support={},t=te.isXML=function(e){e=e&&(e.ownerDocument||e).documentElement;return!!e&&"HTML"!==e.nodeName},d=te.setDocument=function(e){var u=e?e.ownerDocument||e:v,e=u.defaultView;return u!==T&&9===u.nodeType&&u.documentElement?(r=(T=u).documentElement,h=!t(u),e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",function(){d()},!1):e.attachEvent&&e.attachEvent("onunload",function(){d()})),f.attributes=ie(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=ie(function(e){return e.appendChild(u.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=G.test(u.getElementsByClassName)&&ie(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),f.getById=ie(function(e){return r.appendChild(e).id=x,!u.getElementsByName||!u.getElementsByName(x).length}),f.getById?(b.find.ID=function(e,t){if(typeof t.getElementById!==E&&h){e=t.getElementById(e);return e&&e.parentNode?[e]:[]}},b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){e=typeof e.getAttributeNode!==E&&e.getAttributeNode("id");return e&&e.value===t}}),b.find.TAG=f.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==E?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=f.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==E&&h?t.getElementsByClassName(e):void 0},i=[],g=[],(f.qsa=G.test(u.querySelectorAll))&&(ie(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+F+"*(?:value|"+O+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ie(function(e){var t=u.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+F+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=G.test(s=r.webkitMatchesSelector||r.mozMatchesSelector||r.oMatchesSelector||r.msMatchesSelector))&&ie(function(e){f.disconnectedMatch=s.call(e,"div"),s.call(e,"[s!='']:x"),i.push("!=",W)}),g=g.length&&new RegExp(g.join("|")),i=i.length&&new RegExp(i.join("|")),e=G.test(r.compareDocumentPosition),m=e||G.test(r.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},k=e?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===u||e.ownerDocument===v&&m(v,e)?-1:t===u||t.ownerDocument===v&&m(v,t)?1:l?H.call(l,e)-H.call(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!i||!o)return e===u?-1:t===u?1:i?-1:o?1:l?H.call(l,e)-H.call(l,t):0;if(i===o)return se(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[r]===a[r];)r++;return r?se(s[r],a[r]):s[r]===v?-1:a[r]===v?1:0},u):T},te.matches=function(e,t){return te(e,null,null,t)},te.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&d(e),t=t.replace(_,"='$1']"),!(!f.matchesSelector||!h||i&&i.test(t)||g&&g.test(t)))try{var n=s.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<te(t,T,null,[e]).length},te.contains=function(e,t){return(e.ownerDocument||e)!==T&&d(e),m(e,t)},te.attr=function(e,t){(e.ownerDocument||e)!==T&&d(e);var n=b.attrHandle[t.toLowerCase()],n=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!h):void 0;return void 0!==n?n:f.attributes||!h?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},te.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},te.uniqueSort=function(e){var t,n=[],r=0,i=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(k),c){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return l=null,e},o=te.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=te.selectors={cacheLength:50,createPseudo:re,match:U,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||te.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&te.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&X.test(n)&&(t=ce(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=a[e+" "];return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&a(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==E&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(e){e=te.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===r:"!="===n?e!==r:"^="===n?r&&0===e.indexOf(r):"*="===n?r&&-1<e.indexOf(r):"$="===n?r&&e.slice(-r.length)===r:"~="===n?-1<(" "+e+" ").indexOf(r):"|="===n&&(e===r||e.slice(0,r.length+1)===r+"-"))}},CHILD:function(d,e,t,h,g){var m="nth"!==d.slice(0,3),v="last"!==d.slice(-4),y="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,s,a,u,l=m!=v?"nextSibling":"previousSibling",c=e.parentNode,f=y&&e.nodeName.toLowerCase(),p=!n&&!y;if(c){if(m){for(;l;){for(o=e;o=o[l];)if(y?o.nodeName.toLowerCase()===f:1===o.nodeType)return!1;u=l="only"===d&&!u&&"nextSibling"}return!0}if(u=[v?c.firstChild:c.lastChild],v&&p){for(a=(r=(i=c[x]||(c[x]={}))[d]||[])[0]===C&&r[1],s=r[0]===C&&r[2],o=a&&c.childNodes[a];o=++a&&o&&o[l]||(s=a=0)||u.pop();)if(1===o.nodeType&&++s&&o===e){i[d]=[C,a,s];break}}else if(p&&(r=(e[x]||(e[x]={}))[d])&&r[0]===C)s=r[1];else for(;(o=++a&&o&&o[l]||(s=a=0)||u.pop())&&((y?o.nodeName.toLowerCase()!==f:1!==o.nodeType)||!++s||(p&&((o[x]||(o[x]={}))[d]=[C,s]),o!==e)););return(s-=g)===h||s%h==0&&0<=s/h}}},PSEUDO:function(e,o){var t,s=b.pseudos[e]||b.setFilters[e.toLowerCase()]||te.error("unsupported pseudo: "+e);return s[x]?s(o):1<s.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?re(function(e,t){for(var n,r=s(e,o),i=r.length;i--;)e[n=H.call(e,r[i])]=!(t[n]=r[i])}):function(e){return s(e,0,t)}):s}},pseudos:{not:re(function(e){var r=[],i=[],a=p(e.replace($,"$1"));return a[x]?re(function(e,t,n,r){for(var i,o=a(e,null,r,[]),s=e.length;s--;)(i=o[s])&&(e[s]=!(t[s]=i))}):function(e,t,n){return r[0]=e,a(r,null,n,i),!i.pop()}}),has:re(function(t){return function(e){return 0<te(t,e).length}}),contains:re(function(t){return function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:re(function(n){return z.test(n||"")||te.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=h?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:ae(function(){return[0]}),last:ae(function(e,t){return[t-1]}),eq:ae(function(e,t,n){return[n<0?n+t:n]}),even:ae(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ae(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ae(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:ae(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function le(){}function ce(e,t){var n,r,i,o,s,a,u,l=N[e+" "];if(l)return t?0:l.slice(0);for(s=e,a=[],u=b.preFilter;s;){for(o in n&&!(r=B.exec(s))||(r&&(s=s.slice(r[0].length)||s),a.push(i=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),s=s.slice(n.length)),b.filter)!(r=U[o].exec(s))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?te.error(e):N(e,a).slice(0)}function fe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function pe(s,e,t){var a=e.dir,u=t&&"parentNode"===a,l=y++;return e.first?function(e,t,n){for(;e=e[a];)if(1===e.nodeType||u)return s(e,t,n)}:function(e,t,n){var r,i,o=[C,l];if(n){for(;e=e[a];)if((1===e.nodeType||u)&&s(e,t,n))return!0}else for(;e=e[a];)if(1===e.nodeType||u){if((r=(i=e[x]||(e[x]={}))[a])&&r[0]===C&&r[1]===l)return o[2]=r[2];if((i[a]=o)[2]=s(e,t,n))return!0}}}function de(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function he(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)!(o=e[a])||n&&!n(o,r,i)||(s.push(o),l&&t.push(a));return s}function ge(d,h,g,m,v,e){return m&&!m[x]&&(m=ge(m)),v&&!v[x]&&(v=ge(v,e)),re(function(e,t,n,r){var i,o,s,a=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)te(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:he(c,a,d,n,r),p=g?v||(e?d:l||m)?[]:t:f;if(g&&g(f,p,n,r),m)for(i=he(p,u),m(i,[],n,r),o=i.length;o--;)(s=i[o])&&(p[u[o]]=!(f[u[o]]=s));if(e){if(v||d){if(v){for(i=[],o=p.length;o--;)(s=p[o])&&i.push(f[o]=s);v(null,p=[],i,r)}for(o=p.length;o--;)(s=p[o])&&-1<(i=v?H.call(e,s):a[o])&&(e[i]=!(t[i]=s))}}else p=he(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):L.apply(t,p)})}function me(m,v){function e(e,t,n,r,i){var o,s,a,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=C+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t!==T&&t);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(s=0;a=m[s++];)if(a(o,t,n)){r.push(o);break}i&&(C=h)}y&&((o=!a&&o)&&u--,e&&c.push(o))}if(u+=l,y&&l!==u){for(s=0;a=v[s++];)a(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=S.call(r));f=he(f)}L.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&te.uniqueSort(r)}return i&&(C=h,w=p),c}var y=0<v.length,x=0<m.length;return y?re(e):e}return le.prototype=b.filters=b.pseudos,b.setFilters=new le,p=te.compile=function(e,t){var n,r=[],i=[],o=u[e+" "];if(!o){for(n=(t=t||ce(e)).length;n--;)((o=function e(t){for(var r,n,i,o=t.length,s=b.relative[t[0].type],a=s||b.relative[" "],u=s?1:0,l=pe(function(e){return e===r},a,!0),c=pe(function(e){return-1<H.call(r,e)},a,!0),f=[function(e,t,n){return!s&&(n||t!==w)||((r=t).nodeType?l:c)(e,t,n)}];u<o;u++)if(n=b.relative[t[u].type])f=[pe(de(f),n)];else{if((n=b.filter[t[u].type].apply(null,t[u].matches))[x]){for(i=++u;i<o&&!b.relative[t[i].type];i++);return ge(1<u&&de(f),1<u&&fe(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace($,"$1"),n,u<i&&e(t.slice(u,i)),i<o&&e(t=t.slice(i)),i<o&&fe(t))}f.push(n)}return de(f)}(t[n]))[x]?r:i).push(o);o=u(e,me(i,r))}return o},f.sortStable=x.split("").sort(k).join("")===x,f.detectDuplicates=!!c,d(),f.sortDetached=ie(function(e){return 1&e.compareDocumentPosition(T.createElement("div"))}),ie(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||oe("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&ie(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||oe("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),ie(function(e){return null==e.getAttribute("disabled")})||oe(O,function(e,t,n){return n?void 0:!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),te}(h);w.find=d,w.expr=d.selectors,w.expr[":"]=w.expr.pseudos,w.unique=d.uniqueSort,w.text=d.getText,w.isXMLDoc=d.isXML,w.contains=d.contains;var x=w.expr.match.needsContext,b=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/;function C(e,n,r){if(w.isFunction(n))return w.grep(e,function(e,t){return!!n.call(e,t,e)!==r});if(n.nodeType)return w.grep(e,function(e){return e===n!==r});if("string"==typeof n){if(T.test(n))return w.filter(n,e,r);n=w.filter(n,e)}return w.grep(e,function(e){return 0<=i.call(n,e)!==r})}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<n;t++)if(w.contains(i[t],this))return!0}));for(t=0;t<n;t++)w.find(e,i[t],r);return(r=this.pushStack(1<n?w.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(C(this,e||[],!1))},not:function(e){return this.pushStack(C(this,e||[],!0))},is:function(e){return!!C(this,"string"==typeof e&&x.test(e)?w(e):e||[],!1).length}});var N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(w.fn.init=function(e,t){var n,r;if(!e)return this;if("string"!=typeof e)return e.nodeType?(this.context=this[0]=e,this.length=1,this):w.isFunction(e)?void 0!==k.ready?k.ready(e):e(w):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),w.makeArray(e,this));if(!(n="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:N.exec(e))||!n[1]&&t)return(!t||t.jquery?t||k:this.constructor(t)).find(e);if(n[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),b.test(n[1])&&w.isPlainObject(t))for(n in t)w.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=y.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=y,this.selector=e,this}).prototype=w.fn;var k=w(y),E=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function j(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}w.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=x.test(e)||"string"!=typeof e?w(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?w.unique(o):o)},index:function(e){return e?"string"==typeof e?i.call(w(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.unique(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),w.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return w.dir(e,"parentNode")},parentsUntil:function(e,t,n){return w.dir(e,"parentNode",n)},next:function(e){return j(e,"nextSibling")},prev:function(e){return j(e,"previousSibling")},nextAll:function(e){return w.dir(e,"nextSibling")},prevAll:function(e){return w.dir(e,"previousSibling")},nextUntil:function(e,t,n){return w.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return w.dir(e,"previousSibling",n)},siblings:function(e){return w.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return w.sibling(e.firstChild)},contents:function(e){return e.contentDocument||w.merge([],e.childNodes)}},function(r,i){w.fn[r]=function(e,t){var n=w.map(this,i,e);return(t="Until"!==r.slice(-5)?e:t)&&"string"==typeof t&&(n=w.filter(t,n)),1<this.length&&(D[r]||w.unique(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var S,A=/\S+/g,L={};function q(){y.removeEventListener("DOMContentLoaded",q,!1),h.removeEventListener("load",q,!1),w.ready()}w.Callbacks=function(i){var e,n;i="string"==typeof i?L[i]||(n=L[e=i]={},w.each(e.match(A)||[],function(e,t){n[t]=!0}),n):w.extend({},i);function r(e){for(t=i.memory&&e,o=!0,l=a||0,a=0,u=c.length,s=!0;c&&l<u;l++)if(!1===c[l].apply(e[0],e[1])&&i.stopOnFalse){t=!1;break}s=!1,c&&(f?f.length&&r(f.shift()):t?c=[]:p.disable())}var t,o,s,a,u,l,c=[],f=!i.once&&[],p={add:function(){var e;return c&&(e=c.length,function r(e){w.each(e,function(e,t){var n=w.type(t);"function"===n?i.unique&&p.has(t)||c.push(t):t&&t.length&&"string"!==n&&r(t)})}(arguments),s?u=c.length:t&&(a=e,r(t))),this},remove:function(){return c&&w.each(arguments,function(e,t){for(var n;-1<(n=w.inArray(t,c,n));)c.splice(n,1),s&&(n<=u&&u--,n<=l&&l--)}),this},has:function(e){return e?-1<w.inArray(e,c):!(!c||!c.length)},empty:function(){return c=[],u=0,this},disable:function(){return c=f=t=void 0,this},disabled:function(){return!c},lock:function(){return f=void 0,t||p.disable(),this},locked:function(){return!f},fireWith:function(e,t){return!c||o&&!f||(t=[e,(t=t||[]).slice?t.slice():t],s?f.push(t):r(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},w.extend({Deferred:function(e){var o=[["resolve","done",w.Callbacks("once memory"),"resolved"],["reject","fail",w.Callbacks("once memory"),"rejected"],["notify","progress",w.Callbacks("memory")]],i="pending",s={state:function(){return i},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var i=arguments;return w.Deferred(function(r){w.each(o,function(e,t){var n=w.isFunction(i[e])&&i[e];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&w.isFunction(e.promise)?e.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[t[0]+"With"](this===s?r.promise():this,n?[e]:arguments)})}),i=null}).promise()},promise:function(e){return null!=e?w.extend(e,s):s}},a={};return s.pipe=s.then,w.each(o,function(e,t){var n=t[2],r=t[3];s[t[1]]=n.add,r&&n.add(function(){i=r},o[1^e][2].disable,o[2][2].lock),a[t[0]]=function(){return a[t[0]+"With"](this===a?s:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){function t(t,n,r){return function(e){n[t]=this,r[t]=1<arguments.length?c.call(arguments):e,r===i?l.notifyWith(n,r):--u||l.resolveWith(n,r)}}var i,n,r,o=0,s=c.call(arguments),a=s.length,u=1!==a||e&&w.isFunction(e.promise)?a:0,l=1===u?e:w.Deferred();if(1<a)for(i=new Array(a),n=new Array(a),r=new Array(a);o<a;o++)s[o]&&w.isFunction(s[o].promise)?s[o].promise().done(t(o,r,s)).fail(l.reject).progress(t(o,n,i)):--u;return u||l.resolveWith(r,s),l.promise()}}),w.fn.ready=function(e){return w.ready.promise().done(e),this},w.extend({isReady:!1,readyWait:1,holdReady:function(e){e?w.readyWait++:w.ready(!0)},ready:function(e){(!0===e?--w.readyWait:w.isReady)||((w.isReady=!0)!==e&&0<--w.readyWait||(S.resolveWith(y,[w]),w.fn.trigger&&w(y).trigger("ready").off("ready")))}}),w.ready.promise=function(e){return S||(S=w.Deferred(),"complete"===y.readyState?setTimeout(w.ready):(y.addEventListener("DOMContentLoaded",q,!1),h.addEventListener("load",q,!1))),S.promise(e)},w.ready.promise();var H=w.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===w.type(n))for(a in i=!0,n)w.access(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,w.isFunction(r)||(s=!0),t=l?s?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(w(e),n)}):t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};function O(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=w.expando+Math.random()}w.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},O.uid=1,O.accepts=w.acceptData,O.prototype={key:function(t){if(!O.accepts(t))return 0;var n={},r=t[this.expando];if(!r){r=O.uid++;try{n[this.expando]={value:r},Object.defineProperties(t,n)}catch(e){n[this.expando]=r,w.extend(t,n)}}return this.cache[r]||(this.cache[r]={}),r},set:function(e,t,n){var r,e=this.key(e),i=this.cache[e];if("string"==typeof t)i[t]=n;else if(w.isEmptyObject(i))w.extend(this.cache[e],t);else for(r in t)i[r]=t[r];return i},get:function(e,t){e=this.cache[this.key(e)];return void 0===t?e:e[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,w.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,e=this.key(e),i=this.cache[e];if(void 0===t)this.cache[e]={};else{n=(r=w.isArray(t)?t.concat(t.map(w.camelCase)):(e=w.camelCase(t),t in i?[t,e]:(r=e)in i?[r]:r.match(A)||[])).length;for(;n--;)delete i[r[n]]}},hasData:function(e){return!w.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var F=new O,P=new O,M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function W(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(R,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:M.test(n)?w.parseJSON(n):n)}catch(e){}P.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return P.hasData(e)||F.hasData(e)},data:function(e,t,n){return P.access(e,t,n)},removeData:function(e,t){P.remove(e,t)},_data:function(e,t,n){return F.access(e,t,n)},_removeData:function(e,t){F.remove(e,t)}}),w.fn.extend({data:function(r,e){var t,n,i,o=this[0],s=o&&o.attributes;if(void 0!==r)return"object"==typeof r?this.each(function(){P.set(this,r)}):H(this,function(t){var e,n=w.camelCase(r);if(o&&void 0===t)return void 0!==(e=P.get(o,r))||void 0!==(e=P.get(o,n))?e:void 0!==(e=W(o,n,void 0))?e:void 0;this.each(function(){var e=P.get(this,n);P.set(this,n,t),-1!==r.indexOf("-")&&void 0!==e&&P.set(this,r,t)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=P.get(o),1===o.nodeType&&!F.get(o,"hasDataAttrs"))){for(t=s.length;t--;)0===(n=s[t].name).indexOf("data-")&&(n=w.camelCase(n.slice(5)),W(o,n,i[n]));F.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){P.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;return e?(r=F.get(e,t=(t||"fx")+"queue"),n&&(!r||w.isArray(n)?r=F.access(e,t,w.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){w.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return F.get(e,n)||F.access(e,n,{empty:w.Callbacks("once memory").add(function(){F.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?w.queue(this[0],t):void 0===n?this:this.each(function(){var e=w.queue(this,t,n);w._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&w.dequeue(this,t)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(s,[s])}var r,i=1,o=w.Deferred(),s=this,a=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(r=F.get(s[a],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}});function $(e,t){return"none"===w.css(e=t||e,"display")||!w.contains(e.ownerDocument,e)}var n=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,B=["Top","Right","Bottom","Left"],I=/^(?:checkbox|radio)$/i;(u=y.createDocumentFragment().appendChild(y.createElement("div"))).innerHTML="<input type='radio' checked='checked' name='t'/>",v.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue;var _="undefined";v.focusinBubbles="onfocusin"in h;var X=/^key/,z=/^(?:mouse|contextmenu)|click/,U=/^(?:focusinfocus|focusoutblur)$/,V=/^([^.]*)(?:\.(.+)|)$/;function Y(){return!0}function G(){return!1}function Q(){try{return y.activeElement}catch(e){}}w.event={global:{},add:function(t,e,n,r,i){var o,s,a,u,l,c,f,p,d,h=F.get(t);if(h)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=w.guid++),(a=h.events)||(a=h.events={}),(s=h.handle)||(s=h.handle=function(e){return typeof w!=_&&w.event.triggered!==e.type?w.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(A)||[""]).length;u--;)f=d=(l=V.exec(e[u])||[])[1],p=(l[2]||"").split(".").sort(),f&&(c=w.event.special[f]||{},f=(i?c.delegateType:c.bindType)||f,c=w.event.special[f]||{},l=w.extend({type:f,origType:d,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:p.join(".")},o),(d=a[f])||((d=a[f]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(t,r,p,s)||t.addEventListener&&t.addEventListener(f,s,!1)),c.add&&(c.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),w.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=F.hasData(e)&&F.get(e);if(m&&(u=m.events)){for(l=(t=(t||"").match(A)||[""]).length;l--;)if(d=g=(a=V.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||w.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&(delete m.handle,F.remove(e,"events"))}},trigger:function(e,t,n,r){var i,o,s,a,u,l,c=[n||y],f=m.call(e,"type")?e.type:e,p=m.call(e,"namespace")?e.namespace.split("."):[],d=o=n=n||y;if(3!==n.nodeType&&8!==n.nodeType&&!U.test(f+w.event.triggered)&&(0<=f.indexOf(".")&&(f=(p=f.split(".")).shift(),p.sort()),a=f.indexOf(":")<0&&"on"+f,(e=e[w.expando]?e:new w.Event(f,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:w.makeArray(t,[e]),l=w.event.special[f]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!w.isWindow(n)){for(s=l.delegateType||f,U.test(s+f)||(d=d.parentNode);d;d=d.parentNode)c.push(d),o=d;o===(n.ownerDocument||y)&&c.push(o.defaultView||o.parentWindow||h)}for(i=0;(d=c[i++])&&!e.isPropagationStopped();)e.type=1<i?s:l.bindType||f,(u=(F.get(d,"events")||{})[e.type]&&F.get(d,"handle"))&&u.apply(d,t),(u=a&&d[a])&&u.apply&&w.acceptData(d)&&(e.result=u.apply(d,t),!1===e.result&&e.preventDefault());return e.type=f,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(c.pop(),t)||!w.acceptData(n)||a&&w.isFunction(n[f])&&!w.isWindow(n)&&((o=n[a])&&(n[a]=null),n[w.event.triggered=f](),w.event.triggered=void 0,o&&(n[a]=o)),e.result}},dispatch:function(e){e=w.event.fix(e);var t,n,r,i,o,s=c.call(arguments),a=(F.get(this,"events")||{})[e.type]||[],u=w.event.special[e.type]||{};if((s[0]=e).delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(o=w.event.handlers.call(this,e,a),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(i=r.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,void 0!==(i=((w.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;n<a;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?0<=w(i,this).index(u):w.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i=t.button;return null==e.pageX&&null!=t.clientX&&(n=(r=e.target.ownerDocument||y).documentElement,r=r.body,e.pageX=t.clientX+(n&&n.scrollLeft||r&&r.scrollLeft||0)-(n&&n.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||r&&r.scrollTop||0)-(n&&n.clientTop||r&&r.clientTop||0)),e.which||void 0===i||(e.which=1&i?1:2&i?3:4&i?2:0),e}},fix:function(e){if(e[w.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:X.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new w.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=y),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==Q()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===Q()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&w.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return w.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){e=w.extend(new w.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?w.event.trigger(e,null,t):w.event.dispatch.call(t,e),e.isDefaultPrevented()&&n.preventDefault()}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},w.Event=function(e,t){return this instanceof w.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.getPreventDefault&&e.getPreventDefault()?Y:G):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||w.now(),void(this[w.expando]=!0)):new w.Event(e,t)},w.Event.prototype={isDefaultPrevented:G,isPropagationStopped:G,isImmediatePropagationStopped:G,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Y,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Y,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Y,this.stopPropagation()}},w.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,i){w.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||w.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),v.focusinBubbles||w.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){w.event.simulate(r,e.target,w.event.fix(e),!0)}w.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=F.access(e,r);t||e.addEventListener(n,i,!0),F.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=F.access(e,r)-1;t?F.access(e,r,t):(e.removeEventListener(n,i,!0),F.remove(e,r))}}}),w.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){for(s in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=G;else if(!r)return this;return 1===i&&(o=r,(r=function(e){return w().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=w.guid++)),this.each(function(){w.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=G),this.each(function(){w.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this},trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?w.event.trigger(e,t,n,!0):void 0}});var J=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,K=/<([\w:]+)/,Z=/<|&#?\w+;/,ee=/<(?:script|style|link)/i,te=/checked\s*(?:[^=]|=\s*.checked.)/i,ne=/^$|\/(?:java|ecma)script/i,re=/^true\/(.*)/,ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,oe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function se(e,t){return w.nodeName(e,"table")&&w.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ae(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ue(e){var t=re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function le(e,t){for(var n=0,r=e.length;n<r;n++)F.set(e[n],"globalEval",!t||F.get(t[n],"globalEval"))}function ce(e,t){var n,r,i,o,s,a;if(1===t.nodeType){if(F.hasData(e)&&(o=F.access(e),s=F.set(t,o),a=o.events))for(i in delete s.handle,s.events={},a)for(n=0,r=a[i].length;n<r;n++)w.event.add(t,i,a[i][n]);P.hasData(e)&&(e=P.access(e),e=w.extend({},e),P.set(t,e))}}function fe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&w.nodeName(e,t)?w.merge([e],n):n}oe.optgroup=oe.option,oe.tbody=oe.tfoot=oe.colgroup=oe.caption=oe.thead,oe.th=oe.td,w.extend({clone:function(e,t,n){var r,i,o,s,a,u,l,c=e.cloneNode(!0),f=w.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(s=fe(c),r=0,i=(o=fe(e)).length;r<i;r++)a=o[r],u=s[r],l=void 0,"input"===(l=u.nodeName.toLowerCase())&&I.test(a.type)?u.checked=a.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=a.defaultValue);if(t)if(n)for(o=o||fe(e),s=s||fe(c),r=0,i=o.length;r<i;r++)ce(o[r],s[r]);else ce(e,c);return 0<(s=fe(c,"script")).length&&le(s,!f&&fe(e,"script")),c},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l=t.createDocumentFragment(),c=[],f=0,p=e.length;f<p;f++)if((i=e[f])||0===i)if("object"===w.type(i))w.merge(c,i.nodeType?[i]:i);else if(Z.test(i)){for(o=o||l.appendChild(t.createElement("div")),s=(K.exec(i)||["",""])[1].toLowerCase(),s=oe[s]||oe._default,o.innerHTML=s[1]+i.replace(J,"<$1></$2>")+s[2],u=s[0];u--;)o=o.lastChild;w.merge(c,o.childNodes),(o=l.firstChild).textContent=""}else c.push(t.createTextNode(i));for(l.textContent="",f=0;i=c[f++];)if((!r||-1===w.inArray(i,r))&&(a=w.contains(i.ownerDocument,i),o=fe(l.appendChild(i),"script"),a&&le(o),n))for(u=0;i=o[u++];)ne.test(i.type||"")&&n.push(i);return l},cleanData:function(e){for(var t,n,r,i,o,s,a=w.event.special,u=0;void 0!==(n=e[u]);u++){if(w.acceptData(n)&&((o=n[F.expando])&&(t=F.cache[o]))){if((r=Object.keys(t.events||{})).length)for(s=0;void 0!==(i=r[s]);s++)a[i]?w.event.remove(n,i):w.removeEvent(n,i,t.handle);F.cache[o]&&delete F.cache[o]}delete P.cache[n[P.expando]]}}}),w.fn.extend({text:function(e){return H(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||se(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=se(this,e)).insertBefore(e,t.firstChild)})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?w.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||w.cleanData(fe(n)),n.parentNode&&(t&&w.contains(n.ownerDocument,n)&&le(fe(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(fe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return H(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ee.test(e)&&!oe[(K.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(J,"<$1></$2>");try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(fe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,w.cleanData(fe(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(n,r){n=g.apply([],n);var e,t,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=n[0],d=w.isFunction(p);if(d||1<l&&"string"==typeof p&&!v.checkClone&&te.test(p))return this.each(function(e){var t=c.eq(e);d&&(n[0]=p.call(this,e,t.html())),t.domManip(n,r)});if(l&&(t=(e=w.buildFragment(n,this[0].ownerDocument,!1,this)).firstChild,1===e.childNodes.length&&(e=t),t)){for(o=(i=w.map(fe(e,"script"),ae)).length;u<l;u++)s=e,u!==f&&(s=w.clone(s,!0,!0),o&&w.merge(i,fe(s,"script"))),r.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,w.map(i,ue),u=0;u<o;u++)s=i[u],ne.test(s.type||"")&&!F.access(s,"globalEval")&&w.contains(a,s)&&(s.src?w._evalUrl&&w._evalUrl(s.src):w.globalEval(s.textContent.replace(ie,"")))}return this}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){w.fn[e]=function(e){for(var t,n=[],r=w(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),w(r[o])[s](t),a.apply(n,t.get());return this.pushStack(n)}});var pe,de={};function he(e,t){e=w(t.createElement(e)).appendTo(t.body),t=h.getDefaultComputedStyle?h.getDefaultComputedStyle(e[0]).display:w.css(e[0],"display");return e.detach(),t}function ge(e){var t=y,n=de[e];return n||("none"!==(n=he(e,t))&&n||((t=(pe=(pe||w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=he(e,t),pe.detach()),de[e]=n),n}function me(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)}var ve,ye,xe,be,we,Te=/^margin/,Ce=new RegExp("^("+n+")(?!px)[a-z%]+$","i");function Ne(e,t,n){var r,i,o=e.style;return(n=n||me(e))&&(i=n.getPropertyValue(t)||n[t]),n&&(""!==i||w.contains(e.ownerDocument,e)||(i=w.style(e,t)),Ce.test(i)&&Te.test(t)&&(r=o.width,e=o.minWidth,t=o.maxWidth,o.minWidth=o.maxWidth=o.width=i,i=n.width,o.width=r,o.minWidth=e,o.maxWidth=t)),void 0!==i?i+"":i}function ke(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function Ee(){we.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",xe.appendChild(be);var e=h.getComputedStyle(we,null);ve="1%"!==e.top,ye="4px"===e.width,xe.removeChild(be)}xe=y.documentElement,be=y.createElement("div"),(we=y.createElement("div")).style.backgroundClip="content-box",we.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===we.style.backgroundClip,be.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",be.appendChild(we),h.getComputedStyle&&w.extend(v,{pixelPosition:function(){return Ee(),ve},boxSizingReliable:function(){return null==ye&&Ee(),ye},reliableMarginRight:function(){var e=we.appendChild(y.createElement("div"));return e.style.cssText=we.style.cssText="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e.style.marginRight=e.style.width="0",we.style.width="1px",xe.appendChild(be),e=!parseFloat(h.getComputedStyle(e,null).marginRight),xe.removeChild(be),we.innerHTML="",e}}),w.swap=function(e,t,n,r){var i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.apply(e,r||[]),t)e.style[i]=o[i];return r};var De=/^(none|table(?!-c[ea]).+)/,je=new RegExp("^("+n+")(.*)$","i"),Se=new RegExp("^([+-])=("+n+")","i"),Ae={position:"absolute",visibility:"hidden",display:"block"},Le={letterSpacing:0,fontWeight:400},qe=["Webkit","O","Moz","ms"];function He(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=qe.length;i--;)if((t=qe[i]+n)in e)return t;return r}function Oe(e,t,n){var r=je.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Fe(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;o<4;o+=2)"margin"===n&&(s+=w.css(e,n+B[o],!0,i)),r?("content"===n&&(s-=w.css(e,"padding"+B[o],!0,i)),"margin"!==n&&(s-=w.css(e,"border"+B[o]+"Width",!0,i))):(s+=w.css(e,"padding"+B[o],!0,i),"padding"!==n&&(s+=w.css(e,"border"+B[o]+"Width",!0,i)));return s}function Pe(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=me(e),s="border-box"===w.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=Ne(e,t,o))<0||null==i)&&(i=e.style[t]),Ce.test(i))return i;r=s&&(v.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Fe(e,t,n||(s?"border":"content"),r,o)+"px"}function Me(e,t){for(var n,r,i,o=[],s=0,a=e.length;s<a;s++)(r=e[s]).style&&(o[s]=F.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&$(r)&&(o[s]=F.access(r,"olddisplay",ge(r.nodeName)))):o[s]||(i=$(r),(n&&"none"!==n||!i)&&F.set(r,"olddisplay",i?n:w.css(r,"display"))));for(s=0;s<a;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function Re(e,t,n,r,i){return new Re.prototype.init(e,t,n,r,i)}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=Ne(e,"opacity");return""===e?"1":e}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=w.camelCase(t),u=e.style;return t=w.cssProps[a]||(w.cssProps[a]=He(u,a)),s=w.cssHooks[t]||w.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=Se.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(w.css(e,t)),o="number"),void(null!=n&&n==n&&("number"!==o||w.cssNumber[a]||(n+="px"),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]="",u[t]=n))))}},css:function(e,t,n,r){var i,o=w.camelCase(t);return t=w.cssProps[o]||(w.cssProps[o]=He(e.style,o)),"normal"===(i=void 0===(i=(o=w.cssHooks[t]||w.cssHooks[o])&&"get"in o?o.get(e,!0,n):i)?Ne(e,t,r):i)&&t in Le&&(i=Le[t]),""===n||n?(t=parseFloat(i),!0===n||w.isNumeric(t)?t||0:i):i}}),w.each(["height","width"],function(e,i){w.cssHooks[i]={get:function(e,t,n){return t?0===e.offsetWidth&&De.test(w.css(e,"display"))?w.swap(e,Ae,function(){return Pe(e,i,n)}):Pe(e,i,n):void 0},set:function(e,t,n){var r=n&&me(e);return Oe(0,t,n?Fe(e,i,n,"border-box"===w.css(e,"boxSizing",!1,r),r):0)}}}),w.cssHooks.marginRight=ke(v.reliableMarginRight,function(e,t){return t?w.swap(e,{display:"inline-block"},Ne,[e,"marginRight"]):void 0}),w.each({margin:"",padding:"",border:"Width"},function(i,o){w.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+B[t]+o]=r[t]||r[t-2]||r[0];return n}},Te.test(i)||(w.cssHooks[i+o].set=Oe)}),w.fn.extend({css:function(e,t){return H(this,function(e,t,n){var r,i,o={},s=0;if(w.isArray(t)){for(r=me(e),i=t.length;s<i;s++)o[t[s]]=w.css(e,t[s],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,1<arguments.length)},show:function(){return Me(this,!0)},hide:function(){return Me(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){$(this)?w(this).show():w(this).hide()})}}),((w.Tween=Re).prototype={constructor:Re,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=Re.propHooks[this.prop];return(e&&e.get?e:Re.propHooks._default).get(this)},run:function(e){var t=Re.propHooks[this.prop];return this.pos=e=this.options.duration?w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(t&&t.set?t:Re.propHooks._default).set(this),this}}).init.prototype=Re.prototype,(Re.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[w.cssProps[e.prop]]||w.cssHooks[e.prop])?w.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}}).scrollTop=Re.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},w.fx=Re.prototype.init,w.fx.step={};var We,$e,Be=/^(?:toggle|show|hide)$/,Ie=new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i"),_e=/queueHooks$/,Xe=[function(t,e,n){var r,i,o,s,a,u,l,c=this,f={},p=t.style,d=t.nodeType&&$(t),h=F.get(t,"fxshow");for(r in n.queue||(null==(a=w._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,w.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===(l="none"===(l=w.css(t,"display"))?ge(t.nodeName):l)&&"none"===w.css(t,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),e)if(i=e[r],Be.exec(i)){if(delete e[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;d=!0}f[r]=h&&h[r]||w.style(t,r)}if(!w.isEmptyObject(f))for(r in h?"hidden"in h&&(d=h.hidden):h=F.access(t,"fxshow",{}),o&&(h.hidden=!d),d?w(t).show():c.done(function(){w(t).hide()}),c.done(function(){for(var e in F.remove(t,"fxshow"),f)w.style(t,e,f[e])}),f)s=Ye(d?h[r]:0,r,c),r in h||(h[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}],ze={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),t=Ie.exec(t),i=t&&t[3]||(w.cssNumber[e]?"":"px"),o=(w.cssNumber[e]||"px"!==i&&+r)&&Ie.exec(w.css(n.elem,e)),s=1,a=20;if(o&&o[3]!==i)for(i=i||o[3],t=t||[],o=+r||1;w.style(n.elem,e,(o/=s=s||".5")+i),s!==(s=n.cur()/r)&&1!==s&&--a;);return t&&(o=n.start=+o||+r||0,n.unit=i,n.end=t[1]?o+(t[1]+1)*t[2]:+t[2]),n}]};function Ue(){return setTimeout(function(){We=void 0}),We=w.now()}function Ve(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=B[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Ye(e,t,n){for(var r,i=(ze[t]||[]).concat(ze["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function Ge(i,e,t){var n,o,r=0,s=Xe.length,a=w.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var e=We||Ue(),e=Math.max(0,l.startTime+l.duration-e),t=1-(e/l.duration||0),n=0,r=l.tweens.length;n<r;n++)l.tweens[n].run(t);return a.notifyWith(i,[l,t,e]),t<1&&r?e:(a.resolveWith(i,[l]),!1)},l=a.promise({elem:i,props:w.extend({},e),opts:w.extend(!0,{specialEasing:{}},t),originalProperties:e,originalOptions:t,startTime:We||Ue(),duration:t.duration,tweens:[],createTween:function(e,t){e=w.Tween(i,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(e),e},stop:function(e){var t=0,n=e?l.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)l.tweens[t].run(1);return e?a.resolveWith(i,[l,e]):a.rejectWith(i,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,s;for(n in e)if(r=w.camelCase(n),i=t[r],o=e[n],w.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=w.cssHooks[r],s&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<s;r++)if(n=Xe[r].call(l,i,c,l.opts))return n;return w.map(c,Ye,l),w.isFunction(l.opts.start)&&l.opts.start.call(i,l),w.fx.timer(w.extend(u,{elem:i,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}w.Animation=w.extend(Ge,{tweener:function(e,t){for(var n,r=0,i=(e=w.isFunction(e)?(t=e,["*"]):e.split(" ")).length;r<i;r++)n=e[r],ze[n]=ze[n]||[],ze[n].unshift(t)},prefilter:function(e,t){t?Xe.unshift(e):Xe.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||w.isFunction(e)&&e,duration:e,easing:n&&t||t&&!w.isFunction(t)&&t};return r.duration=w.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in w.fx.speeds?w.fx.speeds[r.duration]:w.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){w.isFunction(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter($).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=w.isEmptyObject(t),o=w.speed(e,n,r),r=function(){var e=Ge(this,w.extend({},t),o);(i||F.get(this,"finish"))&&e.stop(!0)};return r.finish=r,i||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(i,e,o){function s(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=w.timers,r=F.get(this);if(t)r[t]&&r[t].stop&&s(r[t]);else for(t in r)r[t]&&r[t].stop&&_e.test(t)&&s(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||w.dequeue(this,i)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=F.get(this),n=t[s+"queue"],r=t[s+"queueHooks"],i=w.timers,o=n?n.length:0;for(t.finish=!0,w.queue(this,s,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===s&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),w.each(["toggle","show","hide"],function(e,r){var i=w.fn[r];w.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(Ve(r,!0),e,t,n)}}),w.each({slideDown:Ve("show"),slideUp:Ve("hide"),slideToggle:Ve("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){w.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(We=w.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),We=void 0},w.fx.timer=function(e){w.timers.push(e),e()?w.fx.start():w.timers.pop()},w.fx.interval=13,w.fx.start=function(){$e=$e||setInterval(w.fx.tick,w.fx.interval)},w.fx.stop=function(){clearInterval($e),$e=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(r,e){return r=w.fx&&w.fx.speeds[r]||r,this.queue(e=e||"fx",function(e,t){var n=setTimeout(e,r);t.stop=function(){clearTimeout(n)}})},d=y.createElement("input"),u=y.createElement("select"),n=u.appendChild(y.createElement("option")),d.type="checkbox",v.checkOn=""!==d.value,v.optSelected=n.selected,u.disabled=!0,v.optDisabled=!n.disabled,(d=y.createElement("input")).value="t",d.type="radio",v.radioValue="t"===d.value;var Qe,Je=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return H(this,w.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute==_?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(t=t.toLowerCase(),r=w.attrHooks[t]||(w.expr.match.bool.test(t)?Qe:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=w.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void w.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(A);if(o&&1===e.nodeType)for(;n=o[i++];)r=w.propFix[n]||n,w.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&w.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Qe={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var o=Je[t]||w.find.attr;Je[t]=function(e,t,n){var r,i;return n||(i=Je[t],Je[t]=r,r=null!=o(e,t,n)?t.toLowerCase():null,Je[t]=i),r}});var Ke=/^(?:input|select|textarea|button)$/i;w.fn.extend({prop:function(e,t){return H(this,w.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!w.isXMLDoc(e))&&(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ke.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),v.optSelected||(w.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});var Ze=/[\t\r\n\f]/g;w.fn.extend({addClass:function(t){var e,n,r,i,o,s,a="string"==typeof t&&t,u=0,l=this.length;if(w.isFunction(t))return this.each(function(e){w(this).addClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(A)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ze," "):" ")){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=w.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(t){var e,n,r,i,o,s,a=0===arguments.length||"string"==typeof t&&t,u=0,l=this.length;if(w.isFunction(t))return this.each(function(e){w(this).removeClass(t.call(this,e,this.className))});if(a)for(e=(t||"").match(A)||[];u<l;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ze," "):"")){for(o=0;i=e[o++];)for(;0<=r.indexOf(" "+i+" ");)r=r.replace(" "+i+" "," ");s=t?w.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(i,t){var o=typeof i;return"boolean"==typeof t&&"string"==o?t?this.addClass(i):this.removeClass(i):this.each(w.isFunction(i)?function(e){w(this).toggleClass(i.call(this,e,this.className,t),t)}:function(){if("string"==o)for(var e,t=0,n=w(this),r=i.match(A)||[];e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else o!=_&&"boolean"!=o||(this.className&&F.set(this,"__className__",this.className),this.className=!this.className&&!1!==i&&F.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&0<=(" "+this[n].className+" ").replace(Ze," ").indexOf(t))return!0;return!1}});var et=/\r/g;w.fn.extend({val:function(t){var n,e,r,i=this[0];return arguments.length?(r=w.isFunction(t),this.each(function(e){1===this.nodeType&&(null==(e=r?t.call(this,e,w(this).val()):t)?e="":"number"==typeof e?e+="":w.isArray(e)&&(e=w.map(e,function(e){return null==e?"":e+""})),(n=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):i?(n=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(i,"value"))?e:"string"==typeof(e=i.value)?e.replace(et,""):null==e?"":e:void 0}}),w.extend({valHooks:{select:{get:function(e){for(var t,n=e.options,r=e.selectedIndex,i="select-one"===e.type||r<0,o=i?null:[],s=i?r+1:n.length,a=r<0?s:i?r:0;a<s;a++)if(!(!(t=n[a]).selected&&a!==r||(v.optDisabled?t.disabled:null!==t.getAttribute("disabled"))||t.parentNode.disabled&&w.nodeName(t.parentNode,"optgroup"))){if(t=w(t).val(),i)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,o=w.makeArray(t),s=i.length;s--;)((r=i[s]).selected=0<=w.inArray(w(r).val(),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){return w.isArray(t)?e.checked=0<=w.inArray(w(e).val(),t):void 0}},v.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,n){w.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var tt=w.now(),nt=/\?/;w.parseJSON=function(e){return JSON.parse(e+"")},w.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+e),t};var rt,it,ot=/#.*$/,st=/([?&])_=[^&]*/,at=/^(.*?):[ \t]*([^\r\n]*)$/gm,ut=/^(?:GET|HEAD)$/,lt=/^\/\//,ct=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ft={},pt={},dt="*/".concat("*");try{it=location.href}catch(e){(it=y.createElement("a")).href="",it=it.href}function ht(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(A)||[];if(w.isFunction(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function gt(t,r,i,o){var s={},a=t===pt;function u(e){var n;return s[e]=!0,w.each(t[e]||[],function(e,t){t=t(r,i,o);return"string"!=typeof t||a||s[t]?a?!(n=t):void 0:(r.dataTypes.unshift(t),u(t),!1)}),n}return u(r.dataTypes[0])||!s["*"]&&u("*")}function mt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r=r||{})[n]=t[n]);return r&&w.extend(!0,e,r),e}rt=ct.exec(it.toLowerCase())||[],w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:it,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":w.parseJSON,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?mt(mt(e,w.ajaxSettings),t):mt(w.ajaxSettings,e)},ajaxPrefilter:ht(ft),ajaxTransport:ht(pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0);var u,l,c,n,f,p,r,d=w.ajaxSetup({},t=t||{}),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?w(h):w.event,m=w.Deferred(),v=w.Callbacks("once memory"),y=d.statusCode||{},i={},o={},x=0,s="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!n)for(n={};t=at.exec(c);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?c:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=o[n]=o[n]||e,i[e]=t),this},overrideMimeType:function(e){return x||(d.mimeType=e),this},statusCode:function(e){if(e)if(x<2)for(var t in e)y[t]=[y[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){e=e||s;return u&&u.abort(e),a(0,e),this}};if(m.promise(b).complete=v.add,b.success=b.done,b.error=b.fail,d.url=((e||d.url||it)+"").replace(ot,"").replace(lt,rt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=w.trim(d.dataType||"*").toLowerCase().match(A)||[""],null==d.crossDomain&&(e=ct.exec(d.url.toLowerCase()),d.crossDomain=!(!e||e[1]===rt[1]&&e[2]===rt[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(rt[3]||("http:"===rt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=w.param(d.data,d.traditional)),gt(ft,d,t,b),2===x)return b;for(r in(p=d.global)&&0==w.active++&&w.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!ut.test(d.type),l=d.url,d.hasContent||(d.data&&(l=d.url+=(nt.test(l)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=st.test(l)?l.replace(st,"$1_="+tt++):l+(nt.test(l)?"&":"?")+"_="+tt++)),d.ifModified&&(w.lastModified[l]&&b.setRequestHeader("If-Modified-Since",w.lastModified[l]),w.etag[l]&&b.setRequestHeader("If-None-Match",w.etag[l])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&b.setRequestHeader("Content-Type",d.contentType),b.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+dt+"; q=0.01":""):d.accepts["*"]),d.headers)b.setRequestHeader(r,d.headers[r]);if(d.beforeSend&&(!1===d.beforeSend.call(h,b,d)||2===x))return b.abort();for(r in s="abort",{success:1,error:1,complete:1})b[r](d[r]);if(u=gt(pt,d,t,b)){b.readyState=1,p&&g.trigger("ajaxSend",[b,d]),d.async&&0<d.timeout&&(f=setTimeout(function(){b.abort("timeout")},d.timeout));try{x=1,u.send(i,a)}catch(e){if(!(x<2))throw e;a(-1,e)}}else a(-1,"No Transport");function a(e,t,n,r){var i,o,s,a=t;2!==x&&(x=2,f&&clearTimeout(f),u=void 0,c=r||"",b.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s=s||i}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}(d,b,n)),s=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,s,b,r),r?(d.ifModified&&((n=b.getResponseHeader("Last-Modified"))&&(w.lastModified[l]=n),(n=b.getResponseHeader("etag"))&&(w.etag[l]=n)),204===e||"HEAD"===d.type?a="nocontent":304===e?a="notmodified":(a=s.state,i=s.data,r=!(o=s.error))):(o=a,!e&&a||(a="error",e<0&&(e=0))),b.status=e,b.statusText=(t||a)+"",r?m.resolveWith(h,[i,a,b]):m.rejectWith(h,[b,a,o]),b.statusCode(y),y=void 0,p&&g.trigger(r?"ajaxSuccess":"ajaxError",[b,d,r?i:o]),v.fireWith(h,[b,a]),p&&(g.trigger("ajaxComplete",[b,d]),--w.active||w.event.trigger("ajaxStop")))}return b},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,i){w[i]=function(e,t,n,r){return w.isFunction(t)&&(r=r||n,n=t,t=void 0),w.ajax({url:e,type:i,dataType:r,data:t,success:n})}}),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},w.fn.extend({wrapAll:function(t){var e;return w.isFunction(t)?this.each(function(e){w(this).wrapAll(t.call(this,e))}):(this[0]&&(e=w(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(n){return this.each(w.isFunction(n)?function(e){w(this).wrapInner(n.call(this,e))}:function(){var e=w(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=w.isFunction(t);return this.each(function(e){w(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(){return this.parent().each(function(){w.nodeName(this,"body")||w(this).replaceWith(this.childNodes)}).end()}}),w.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},w.expr.filters.visible=function(e){return!w.expr.filters.hidden(e)};var vt=/%20/g,yt=/\[\]$/,xt=/\r?\n/g,bt=/^(?:submit|button|image|reset|file)$/i,wt=/^(?:input|select|textarea|keygen)/i;w.param=function(e,t){function n(e,t){t=w.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}var r,i=[];if(void 0===t&&(t=w.ajaxSettings&&w.ajaxSettings.traditional),w.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){if(w.isArray(e))w.each(e,function(e,t){i||yt.test(r)?o(r,t):n(r+"["+("object"==typeof t?e:"")+"]",t,i,o)});else if(i||"object"!==w.type(e))o(r,e);else for(var t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&").replace(vt,"+")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&wt.test(this.nodeName)&&!bt.test(e)&&(this.checked||!I.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:w.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(xt,"\r\n")}}):{name:t.name,value:n.replace(xt,"\r\n")}}).get()}}),w.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Tt=0,Ct={},Nt={0:200,1223:204},kt=w.ajaxSettings.xhr();h.ActiveXObject&&w(h).on("unload",function(){for(var e in Ct)Ct[e]()}),v.cors=!!kt&&"withCredentials"in kt,v.ajax=kt=!!kt,w.ajaxTransport(function(o){var s;return v.cors||kt&&!o.crossDomain?{send:function(e,t){var n,r=o.xhr(),i=++Tt;if(r.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)r[n]=o.xhrFields[n];for(n in o.mimeType&&r.overrideMimeType&&r.overrideMimeType(o.mimeType),o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);s=function(e){return function(){s&&(delete Ct[i],s=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?t(r.status,r.statusText):t(Nt[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=s(),r.onerror=s("error"),s=Ct[i]=s("abort"),r.send(o.hasContent&&o.data||null)},abort:function(){s&&s()}}:void 0}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(n){var r,i;if(n.crossDomain)return{send:function(e,t){r=w("<script>").prop({async:!0,charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),y.head.appendChild(r[0])},abort:function(){i&&i()}}});var Et=[],Dt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Et.pop()||w.expando+"_"+tt++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,s=!1!==e.jsonp&&(Dt.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dt.test(e.data)&&"data");return s||"jsonp"===e.dataTypes[0]?(r=e.jsonpCallback=w.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Dt,"$1"+r):!1!==e.jsonp&&(e.url+=(nt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||w.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=h[r],h[r]=function(){o=arguments},n.always(function(){h[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Et.push(r)),o&&w.isFunction(i)&&i(o[0]),o=i=void 0}),"script"):void 0}),w.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||y;var r=b.exec(e),n=!n&&[];return r?[t.createElement(r[1])]:(r=w.buildFragment([e],t,n),n&&n.length&&w(n).remove(),w.merge([],r.childNodes))};var jt=w.fn.load;w.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return 0<=a&&(r=e.slice(a),e=e.slice(0,a)),w.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<s.length&&w.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},w.expr.filters.animated=function(t){return w.grep(w.timers,function(e){return t===e.elem}).length};var St=h.document.documentElement;function At(e){return w.isWindow(e)?e:9===e.nodeType&&e.defaultView}w.offset={setOffset:function(e,t,n){var r,i,o,s,a=w.css(e,"position"),u=w(e),l={};"static"===a&&(e.style.position="relative"),o=u.offset(),r=w.css(e,"top"),s=w.css(e,"left"),s=("absolute"===a||"fixed"===a)&&-1<(r+s).indexOf("auto")?(i=(a=u.position()).top,a.left):(i=parseFloat(r)||0,parseFloat(s)||0),null!=(t=w.isFunction(t)?t.call(e,n,o):t).top&&(l.top=t.top-o.top+i),null!=t.left&&(l.left=t.left-o.left+s),"using"in t?t.using.call(e,l):u.css(l)}},w.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){w.offset.setOffset(this,t,e)});var e,n=this[0],r={top:0,left:0},i=n&&n.ownerDocument;return i?(e=i.documentElement,w.contains(e,n)?(typeof n.getBoundingClientRect!=_&&(r=n.getBoundingClientRect()),i=At(i),{top:r.top+i.pageYOffset-e.clientTop,left:r.left+i.pageXOffset-e.clientLeft}):r):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===w.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),(r=!w.nodeName(e[0],"html")?e.offset():r).top+=w.css(e[0],"borderTopWidth",!0),r.left+=w.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-w.css(n,"marginTop",!0),left:t.left-r.left-w.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||St;e&&!w.nodeName(e,"html")&&"static"===w.css(e,"position");)e=e.offsetParent;return e||St})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;w.fn[t]=function(e){return H(this,function(e,t,n){var r=At(e);return void 0===n?r?r[i]:e[t]:void(r?r.scrollTo(o?h.pageXOffset:n,o?n:h.pageYOffset):e[t]=n)},t,e,arguments.length,null)}}),w.each(["top","left"],function(e,n){w.cssHooks[n]=ke(v.pixelPosition,function(e,t){return t?(t=Ne(e,n),Ce.test(t)?w(e).position()[n]+"px":t):void 0})}),w.each({Height:"height",Width:"width"},function(o,s){w.each({padding:"inner"+o,content:s,"":"outer"+o},function(r,e){w.fn[e]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return H(this,function(e,t,n){var r;return w.isWindow(e)?e.document.documentElement["client"+o]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+o],r["scroll"+o],e.body["offset"+o],r["offset"+o],r["client"+o])):void 0===n?w.css(e,t,i):w.style(e,t,n,i)},s,n?e:void 0,n,null)}})}),w.fn.size=function(){return this.length},w.fn.andSelf=w.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Lt=h.jQuery,qt=h.$;return w.noConflict=function(e){return h.$===w&&(h.$=qt),e&&h.jQuery===w&&(h.jQuery=Lt),w},typeof e==_&&(h.jQuery=h.$=w),w});
window.Modernizr=function(i,l,a){function t(e){p.cssText=e}function c(e,t){return typeof e===t}function n(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var n in e)if(p[e[n]]!==a)return"pfx"!=t||e[n];return!1}function r(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+b.join(r+" ")+r).split(" ");return c(t,"string")||void 0===t?s(o,t):function(e,t,n){for(var r in e){var o=t[e[r]];if(o!==a)return!1===n?e[r]:c(o,"function")?o.bind(n||t):o}return!1}(o=(e+" "+x.join(r+" ")+r).split(" "),t,n)}var e,o,u={},d=l.documentElement,f="modernizr",p=l.createElement(f).style,m=l.createElement("input"),h=":)",g={}.toString,v=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",b=y.split(" "),x=y.toLowerCase().split(" "),C="http://www.w3.org/2000/svg",E={},S={},w={},k=[],T=k.slice,j=function(e,t,n,r){var o,i,a=l.createElement("div"),c=l.body,s=c||l.createElement("body");if(parseInt(n,10))for(;n--;)(i=l.createElement("div")).id=r?r[n]:f+(n+1),a.appendChild(i);return o=["&#173;","<style>",e,"</style>"].join(""),a.id=f,s.innerHTML+=o,s.appendChild(a),c||d.appendChild(s),e=t(a,e),c?a.parentNode.removeChild(a):s.parentNode.removeChild(s),!!e},N=(o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||l.createElement(o[e]||"div");var n=(e="on"+e)in t;return n||(t=!t.setAttribute?l.createElement("div"):t).setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=c(t[e],"function"),void 0===t[e]||(t[e]=a),t.removeAttribute(e)),t=null,n}),M={}.hasOwnProperty,P=void 0!==M&&void 0!==M.call?function(e,t){return M.call(e,t)}:function(e,t){return t in e&&void 0===e.constructor.prototype[t]};Function.prototype.bind||(Function.prototype.bind=function(n){var r=this;if("function"!=typeof r)throw new TypeError;var o=T.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=r.prototype;var t=new e,e=r.apply(t,o.concat(T.call(arguments)));return Object(e)===e?e:t}return r.apply(n,o.concat(T.call(arguments)))};return i});var A,L,$;A=["fontface","touch","csstransforms3d","generatedcontent"],y=['@font-face {font-family:"font";src:url("https://")}',["@media (",v.join("touch-enabled),("),f,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",v.join("transform-3d),("),f,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',h,'";visibility:hidden}'].join("")].join(""),j(y,function(e,t){for(var n=l.styleSheets[l.styleSheets.length-1],n=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",r=e.childNodes,o={};L--;)o[r[L].id]=r[L];u.touch="ontouchstart"in i||i.DocumentTouch&&l instanceof DocumentTouch||9===(o.touch&&o.touch.offsetTop),u.csstransforms3d=9===(o.csstransforms3d&&o.csstransforms3d.offsetLeft)&&3===o.csstransforms3d.offsetHeight,u.generatedcontent=1<=(o.generatedcontent&&o.generatedcontent.offsetHeight),u.fontface=/src/i.test(n)&&0===n.indexOf(t.split(" ")[0])},L=A.length,A);for($ in E.flexbox=function(){return r("flexOrder")},E.canvas=function(){var e=l.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},E.canvastext=function(){return!!u.canvas&&!!c(l.createElement("canvas").getContext("2d").fillText,"function")},E.webgl=function(){try{var e=l.createElement("canvas"),t=!(!i.WebGLRenderingContext||!e.getContext("experimental-webgl")&&!e.getContext("webgl")),e=a}catch(e){t=!1}return t},E.touch=function(){return u.touch},E.geolocation=function(){return!!navigator.geolocation},E.postmessage=function(){return!!i.postMessage},E.websqldatabase=function(){return!!i.openDatabase},E.indexedDB=function(){return!!r("indexedDB",i)},E.hashchange=function(){return N("hashchange",i)&&(l.documentMode===a||7<l.documentMode)},E.history=function(){return!!i.history&&!!history.pushState},E.draganddrop=function(){var e=l.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},E.websockets=function(){for(var e=-1,t=b.length;++e<t;)if(i[b[e]+"WebSocket"])return!0;return"WebSocket"in i},E.rgba=function(){return t("background-color:rgba(150,255,150,.5)"),n(p.backgroundColor,"rgba")},E.hsla=function(){return t("background-color:hsla(120,40%,100%,.5)"),n(p.backgroundColor,"rgba")||n(p.backgroundColor,"hsla")},E.multiplebgs=function(){return t("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(p.background)},E.backgroundsize=function(){return r("backgroundSize")},E.borderimage=function(){return r("borderImage")},E.borderradius=function(){return r("borderRadius")},E.boxshadow=function(){return r("boxShadow")},E.textshadow=function(){return""===l.createElement("div").style.textShadow},E.opacity=function(){return t(v.join("opacity:.55;")+""),/^0.55$/.test(p.opacity)},E.cssanimations=function(){return r("animationName")},E.csscolumns=function(){return r("columnCount")},E.cssgradients=function(){var e="background-image:";return t((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+v.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),n(p.backgroundImage,"gradient")},E.cssreflections=function(){return r("boxReflect")},E.csstransforms=function(){return!!r("transform")},E.csstransforms3d=function(){var e=!!r("perspective");return e=e&&"webkitPerspective"in d.style?u.csstransforms3d:e},E.csstransitions=function(){return r("transition")},E.fontface=function(){return u.fontface},E.generatedcontent=function(){return u.generatedcontent},E.video=function(){var e=l.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},E.audio=function(){var e=l.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},E.localstorage=function(){try{return localStorage.setItem(f,f),localStorage.removeItem(f),!0}catch(e){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(f,f),sessionStorage.removeItem(f),!0}catch(e){return!1}},E.webworkers=function(){return!!i.Worker},E.applicationcache=function(){return!!i.applicationCache},E.svg=function(){return!!l.createElementNS&&!!l.createElementNS(C,"svg").createSVGRect},E.inlinesvg=function(){var e=l.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C},E.smil=function(){return!!l.createElementNS&&/SVGAnimate/.test(g.call(l.createElementNS(C,"animate")))},E.svgclippaths=function(){return!!l.createElementNS&&/SVGClipPath/.test(g.call(l.createElementNS(C,"clipPath")))},E)P(E,$)&&(e=$.toLowerCase(),u[e]=E[$](),k.push((u[e]?"":"no-")+e));return u.input||(u.input=function(e){for(var t=0,n=e.length;t<n;t++)w[e[t]]=e[t]in m;return w.list&&(w.list=!!l.createElement("datalist")&&!!i.HTMLDataListElement),w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(e){for(var t,n,r,o=0,i=e.length;o<i;o++)m.setAttribute("type",n=e[o]),(t="text"!==m.type)&&(m.value=h,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&m.style.WebkitAppearance!==a?(d.appendChild(m),t=(r=l.defaultView).getComputedStyle&&"textfield"!==r.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,d.removeChild(m)):/^(search|tel)$/.test(n)||(/^(url|email)$/.test(n)?t=m.checkValidity&&!1===m.checkValidity():/^color$/.test(n)?(d.appendChild(m),d.offsetWidth,t=m.value!=h,d.removeChild(m)):t=m.value!=h)),S[e[o]]=!!t;return S}("search tel url email datetime date month week time datetime-local number range color".split(" "))),u.addTest=function(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&u.addTest(n,e[n]);else{if(e=e.toLowerCase(),u[e]!==a)return u;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,u[e]=t}return u},t(""),m=null,function(e,t){function l(e){for(var t,n,r={},o=e.createElement,i=e.createDocumentFragment,a="string"==typeof(n=p.elements)?n.split(" "):n,c=i(),s=a.length;s--;)t=a[s],r[t]=o(t),c.createElement(t);e.createElement=function(e){var t=(r[e]||(r[e]=o(e))).cloneNode(!1);return p.shivMethods&&!f.test(e)?c.appendChild(t):t},e.createDocumentFragment=function(){var e=c.cloneNode(!1);return p.shivMethods&&l(e),e}}function n(e){var t,n,r;return e.documentShived||(p.shivCSS&&!o&&(n="article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}",r=(t=e).createElement("p"),t=t.getElementsByTagName("head")[0]||t.documentElement,r.innerHTML="x<style>"+n+"</style>",t=!!t.insertBefore(r.lastChild,t.firstChild)),(t=p.shivMethods&&!i?!l(e):t)&&(e.documentShived=t)),e}var o,i,r,a,c,s,u,d=e.html5||{},f=/^<|^(?:button|iframe|input|script|textarea)$/i;a=t.createElement("a"),c=e.getComputedStyle,s=t.documentElement,(u=t.body||(r=s.insertBefore(t.createElement("body"),s.firstChild))).insertBefore(a,u.firstChild),a.hidden=!0,a.innerHTML="<xyz></xyz>",o="none"==(a.currentStyle||c(a,null)).display,i=1==a.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}(),u.removeChild(a),r&&s.removeChild(r);var p={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),shivCSS:!1!==d.shivCSS,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:n};e.html5=p,n(t)}(this,l),u._version="2.5.2",u._prefixes=v,u._domPrefixes=x,u._cssomPrefixes=b,u.mq=function(e){var t,n=i.matchMedia||i.msMatchMedia;return n?n(e).matches:(j("@media "+e+" { #"+f+" { position: absolute; } }",function(e){t="absolute"==(i.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},u.hasEvent=N,u.testProp=function(e){return s([e])},u.testAllProps=r,u.testStyles=j,u.prefixed=function(e,t,n){return t?r(e,t,n):r(e,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+k.join(" ")),u}(this,this.document),function(e,p){function d(e){return"[object Function]"==o.call(e)}function m(e){return"string"==typeof e}function f(){}function h(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function g(){var e=b.shift();x=1,e?e.t?v(function(){("c"==e.t?T.injectCss:T.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),g()):x=0}function t(e,t,n,r,o){return x=0,t=t||"j",m(e)?(a="c"==t?w:S,c=e,s=t,t=this.i++,o=(o=o)||T.errorTimeout,l={},d=u=0,f={t:s,s:c,e:n,a:r,x:o},1===k[c]&&(d=1,k[c]=[],l=p.createElement(a)),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){i.call(this,d)},b.splice(t,0,f),"img"!=a&&(d||2===k[c]?(E.insertBefore(l,C?null:y),v(i,o)):k[c].push(l))):(b.splice(this.i++,0,e),1==b.length&&g()),this;function i(e){if(!u&&h(l.readyState)&&(f.r=u=1,x||g(),l.onload=l.onreadystatechange=null,e))for(var t in"img"!=a&&v(function(){E.removeChild(l)},50),k[c])k[c].hasOwnProperty(t)&&k[c][t].onload()}var a,c,s,l,u,d,f}function c(){var e=T;return e.loader={load:t,i:0},e}var n,r=p.documentElement,v=e.setTimeout,y=p.getElementsByTagName("script")[0],o={}.toString,b=[],x=0,i="MozAppearance"in r.style,C=i&&!!p.createRange().compareNode,E=C?r:y.parentNode,r=!!p.attachEvent,S=i?"object":r?"script":"img",w=r?"script":S,a=Array.isArray||function(e){return"[object Array]"==o.call(e)},s=[],k={},l={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},T=function(e){function u(e,t,n,r,o){var i=function(e){for(var t,n,e=e.split("!"),r=s.length,o=e.pop(),i=e.length,o={url:o,origUrl:o,prefixes:e},a=0;a<i;a++)n=e[a].split("="),(t=l[n.shift()])&&(o=t(o,n));for(a=0;a<r;a++)o=s[a](o);return o}(e),a=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(t=t&&(d(t)?t:t[e]||t[r]||t[e.split("/").pop().split("?")[0]]||g),i.instead?i.instead(e,t,n,r,o):(k[i.url]?i.noexec=!0:k[i.url]=1,n.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":void 0,i.noexec,i.attrs,i.timeout),(d(t)||d(a))&&n.load(function(){c(),t&&t(i.origUrl,o,r),a&&a(i.origUrl,o,r),k[i.url]=2})))}function t(e,t){function n(n,e){if(n){if(m(n))u(n,c=!e?function(){var e=[].slice.call(arguments);s.apply(this,e),l()}:c,t,0,i);else if(Object(n)===n)for(o in r=function(){var e,t=0;for(e in n)n.hasOwnProperty(e)&&t++;return t}(),n)n.hasOwnProperty(o)&&(e||--r||(d(c)?c=function(){var e=[].slice.call(arguments);s.apply(this,e),l()}:c[o]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),l()}}(s[o])),u(n[o],c,t,o,i))}else e||l()}var r,o,i=!!e.test,a=e.load||e.both,c=e.callback||f,s=c,l=e.complete||f;n(i?e.yep:e.nope,!!a),a&&n(a)}var n,r,o=this.yepnope.loader;if(m(e))u(e,0,o,0);else if(a(e))for(n=0;n<e.length;n++)m(r=e[n])?u(r,0,o,0):a(r)?T(r):Object(r)===r&&t(r,o);else Object(e)===e&&t(e,o)};T.addPrefix=function(e,t){l[e]=t},T.addFilter=function(e){s.push(e)},T.errorTimeout=1e4,null==p.readyState&&p.addEventListener&&(p.readyState="loading",p.addEventListener("DOMContentLoaded",n=function(){p.removeEventListener("DOMContentLoaded",n,0),p.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=g,e.yepnope.injectJs=function(e,t,n,r,o,i){var a,c,s=p.createElement("script"),r=r||T.errorTimeout;for(c in s.src=e,n)s.setAttribute(c,n[c]);t=i?g:t||f,s.onreadystatechange=s.onload=function(){!a&&h(s.readyState)&&(a=1,t(),s.onload=s.onreadystatechange=null)},v(function(){a||t(a=1)},r),o?s.onload():y.parentNode.insertBefore(s,y)},e.yepnope.injectCss=function(e,t,n,r,o,i){var a,t=i?g:t||f;for(a in(r=p.createElement("link")).href=e,r.rel="stylesheet",r.type="text/css",n)r.setAttribute(a,n[a]);o||(y.parentNode.insertBefore(r,y),v(t,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};