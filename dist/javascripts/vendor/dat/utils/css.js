define([],function(){return{load:function(t,e){e=e||document;var n=e.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=t,e.getElementsByTagName("head")[0].appendChild(n)},inject:function(t,e){e=e||document;var n=document.createElement("style");n.type="text/css",n.innerHTML=t,e.getElementsByTagName("head")[0].appendChild(n)}}});