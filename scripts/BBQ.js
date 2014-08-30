/*Copyright (c) 2012 Jessie

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var BBQ;BBQ=BBQ||{};(function(e){var t=e.document,n=function(e,t){var n=e[t];return typeof n=="object"&&null!==n},r=function(e,t){var n=e[t];var r=typeof n;return r=="function"||r=="object"&&null!==n||r=="unknown"},i=function(){var e=arguments.length;while(e--){if(!BBQ[arguments[e]]){return false}}return true},s=n(t,"documentElement")&&t.documentElement,o=!!Function.prototype.call;var u=[function(){return new e.ActiveXObject("Microsoft.XMLHTTP")},function(){return new e.ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new e.ActiveXObject("Msxml2.XMLHTTP.6.0")}],a,f;if(r(e,"XMLHttpRequest")){try{if(new e.XMLHttpRequest){f=function(){return new XMLHttpRequest}}}catch(l){}}else if(r(e,"ActiveXObject")){for(a=u.length;a--;){try{if(u[a]()){f=u[a]}}catch(l){}}}var c;if(o&&Function.prototype.bind){c=function(e,t){return e.bind.apply(e,Array.prototype.slice.call(arguments,1))}}else if(o&&Array.prototype.slice){c=function(e,t){var n=Array.prototype.slice.call(arguments,2);if(n.length){return function(){e.apply(t,Array.prototype.concat.apply(n,arguments))}}return function(){e.apply(t,arguments)}}}var h;if(f&&c){h=function(e,t,n){function o(e){var t=false,n=e.status,r=n>=200&&n<300,i=n===304;if(r||i||n===0&&e.responseText){t=true}return t}function u(){if(e.readyState===4){if(o(e)){if(r){r(e.responseText,e)}}else if(i){i(e)}if(s){s(e)}}}n=n||{};n.thisObject=n.thisObject||e;var r,i,s;if(n.success){r=c(n.success,n.thisObject)}if(n.fail){i=c(n.fail,n.thisObject)}if(n.complete){s=c(n.complete,n.thisObject)}e.open("GET",t);e.onreadystatechange=u;e.send(null);return e}}var p;if(s&&n(s,"classList")&&r(s.classList,"remove")){p=function(e,t){return e.classList.remove(t)}}else if(s&&"string"==typeof s.className){p=function(e,t){var n,r;if(e.className){if(e.className==t){e.className=""}else{n=new RegExp("(^|\\s)"+t+"(\\s|$)");r=e.className.match(n);if(r&&r.length==3){e.className=e.className.replace(n,r[1]&&r[2]?" ":"")}}}}}var d;if(s&&r(s,"addEventListener")){d=function(e,t,n){var r=function(t){n.call(e,t)};e.addEventListener(t,r,false);return r}}else if(s&&r(s,"attachEvent")){BBQ.theseObjects=[];var v=0;d=function(e,t,n){var r=v++;BBQ.theseObjects[r]=e;var i=function(){var t=window.event;n.call(e,t)};e.attachEvent("on"+t,i);e=null;return i}}var m;if(f&&h){m=function(e,t){var n=f();return h(n,e,t)}}var g;if(s&&n(s,"classList")&&r(s.classList,"add")){g=function(e,t){return e.classList.add(t)}}else if(s&&"string"===typeof s.className){g=function(e,t){var n;if(!e.className){e.className=t}else{n=new RegExp("(^|\\s)"+t+"(\\s|$)");if(!n.test(e.className)){e.className+=" "+t}}}}BBQ.isHostMethod=r;BBQ.isHostObjectProperty=n;BBQ.areFeatures=i;BBQ.xhrCreate=f;BBQ.bind=c;BBQ.xhrGet=h;BBQ.removeClass=p;BBQ.attachListener=d;BBQ.ajaxGet=m;BBQ.addClass=g;t=s=null})(this)