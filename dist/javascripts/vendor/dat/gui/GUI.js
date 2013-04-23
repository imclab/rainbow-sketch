define(["dat/utils/css","text!dat/gui/saveDialogue.html","text!dat/gui/style.css","dat/controllers/factory","dat/controllers/Controller","dat/controllers/BooleanController","dat/controllers/FunctionController","dat/controllers/NumberControllerBox","dat/controllers/NumberControllerSlider","dat/controllers/OptionController","dat/controllers/ColorController","dat/utils/requestAnimationFrame","dat/dom/CenteredDiv","dat/dom/dom","dat/utils/common"],function(t,e,n,i,s,r,o,a,l,u,h,c,d,f,p){function m(t,e,n,r){if(void 0===e[n])throw Error("Object "+e+' has no property "'+n+'"');var o;if(r.color)o=new h(e,n);else{var a=[e,n].concat(r.factoryArgs);o=i.apply(t,a)}r.before instanceof s&&(r.before=r.before.__li),y(t,o),f.addClass(o.domElement,"c");var l=document.createElement("span");f.addClass(l,"property-name"),l.innerHTML=o.property;var u=document.createElement("div");u.appendChild(l),u.appendChild(o.domElement);var c=_(t,u,r.before);return f.addClass(c,U.CLASS_CONTROLLER_ROW),f.addClass(c,typeof o.getValue()),g(t,c,o),t.__controllers.push(o),o}function _(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,params.before):t.__ul.appendChild(i),t.onResize(),i}function g(t,e,n){if(n.__li=e,n.__gui=t,p.extend(n,{options:function(e){return arguments.length>1?(n.remove(),m(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[p.toArray(arguments)]})):p.isArray(e)||p.isObject(e)?(n.remove(),m(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[e]})):void 0},name:function(t){return n.__li.firstElementChild.firstElementChild.innerHTML=t,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof l){var i=new a(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});p.each(["updateDisplay","onChange","onFinishChange"],function(t){var e=n[t],s=i[t];n[t]=i[t]=function(){var t=Array.prototype.slice.call(arguments);return e.apply(n,t),s.apply(i,t)}}),f.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof a){var s=function(e){return p.isNumber(n.__min)&&p.isNumber(n.__max)?(n.remove(),m(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]})):e};n.min=p.compose(s,n.min),n.max=p.compose(s,n.max)}else n instanceof r?(f.bind(e,"click",function(){f.fakeEvent(n.__checkbox,"click")}),f.bind(n.__checkbox,"click",function(t){t.stopPropagation()})):n instanceof o?(f.bind(e,"click",function(){f.fakeEvent(n.__button,"click")}),f.bind(e,"mouseover",function(){f.addClass(n.__button,"hover")}),f.bind(e,"mouseout",function(){f.removeClass(n.__button,"hover")})):n instanceof h&&(f.addClass(e,"color"),n.updateDisplay=p.compose(function(t){return e.style.borderLeftColor=""+n.__color,t},n.updateDisplay),n.updateDisplay());n.setValue=p.compose(function(e){return t.getRoot().__preset_select&&n.isModified()&&S(t.getRoot(),!0),e},n.setValue)}function y(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(-1!=i){var s=n.__rememberedObjectIndecesToControllers[i];if(void 0===s&&(s={},n.__rememberedObjectIndecesToControllers[i]=s),s[e.property]=e,n.load&&n.load.remembered){var r,o=n.load.remembered;if(o[t.preset])r=o[t.preset];else{if(!o[I])return;r=o[I]}if(r[i]&&void 0!==r[i][e.property]){var a=r[i][e.property];e.initialValue=a,e.setValue(a)}}}}function v(t,e){return document.location.href+"."+e}function b(t){function e(){u.style.display=t.useLocalStorage?"block":"none"}var n=t.__save_row=document.createElement("li");f.addClass(t.domElement,"has-save"),t.__ul.insertBefore(n,t.__ul.firstChild),f.addClass(n,"save-row");var i=document.createElement("span");i.innerHTML="&nbsp;",f.addClass(i,"button gears");var s=document.createElement("span");s.innerHTML="Save",f.addClass(s,"button"),f.addClass(s,"save");var r=document.createElement("span");r.innerHTML="New",f.addClass(r,"button"),f.addClass(r,"save-as");var o=document.createElement("span");o.innerHTML="Revert",f.addClass(o,"button"),f.addClass(o,"revert");var a=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?p.each(t.load.remembered,function(e,n){E(t,n,n==t.preset)}):E(t,I,!1),f.bind(a,"change",function(){for(var e=0;t.__preset_select.length>e;e++)t.__preset_select[e].innerHTML=t.__preset_select[e].value;t.preset=this.value}),n.appendChild(a),n.appendChild(i),n.appendChild(s),n.appendChild(r),n.appendChild(o),R){var l=document.getElementById("dg-save-locally"),u=document.getElementById("dg-local-explain");l.style.display="block";var h=document.getElementById("dg-local-storage");"true"===localStorage.getItem(v(t,"isLocal"))&&h.setAttribute("checked","checked"),e(),f.bind(h,"change",function(){t.useLocalStorage=!t.useLocalStorage,e()})}var c=document.getElementById("dg-new-constructor");f.bind(c,"keydown",function(t){!t.metaKey||67!==t.which&&67!=t.keyCode||k.hide()}),f.bind(i,"click",function(){c.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),k.show(),c.focus(),c.select()}),f.bind(s,"click",function(){t.save()}),f.bind(r,"click",function(){var e=prompt("Enter a new preset name.");e&&t.saveAs(e)}),f.bind(o,"click",function(){t.revert()})}function x(t){function e(e){return e.preventDefault(),s=e.clientX,f.addClass(t.__closeButton,U.CLASS_DRAG),f.bind(window,"mousemove",n),f.bind(window,"mouseup",i),!1}function n(e){return e.preventDefault(),t.width+=s-e.clientX,t.onResize(),s=e.clientX,!1}function i(){f.removeClass(t.__closeButton,U.CLASS_DRAG),f.unbind(window,"mousemove",n),f.unbind(window,"mouseup",i)}t.__resize_handle=document.createElement("div"),p.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});var s;f.bind(t.__resize_handle,"mousedown",e),f.bind(t.__closeButton,"mousedown",e),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function w(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function C(t,e){var n={};return p.each(t.__rememberedObjects,function(i,s){var r={},o=t.__rememberedObjectIndecesToControllers[s];p.each(o,function(t,n){r[n]=e?t.initialValue:t.getValue()}),n[s]=r}),n}function E(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function A(t){for(var e=0;t.__preset_select.length>e;e++)t.__preset_select[e].value==t.preset&&(t.__preset_select.selectedIndex=e)}function S(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];n.innerHTML=e?n.value+"*":n.value}function M(t){0!=t.length&&c(function(){M(t)}),p.each(t,function(t){t.updateDisplay()})}t.inject(n);var k,T,z="dg",L=72,N=20,I="Default",R=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}}(),O=!0,D=!1,P=[],U=function(t){function e(){localStorage.setItem(v(i,"gui"),JSON.stringify(i.getSaveObject()))}function n(){var t=i.getRoot();t.width+=1,p.defer(function(){t.width-=1})}var i=this;this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),f.addClass(this.domElement,z),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],t=t||{},t=p.defaults(t,{autoPlace:!0,width:U.DEFAULT_WIDTH}),t=p.defaults(t,{resizable:t.autoPlace,hideable:t.autoPlace}),p.isUndefined(t.load)?t.load={preset:I}:t.preset&&(t.load.preset=t.preset),p.isUndefined(t.parent)&&t.hideable&&P.push(this),t.resizable=p.isUndefined(t.parent)&&t.resizable,t.autoPlace&&p.isUndefined(t.scrollable)&&(t.scrollable=!0);var s=R&&"true"===localStorage.getItem(v(this,"isLocal"));if(Object.defineProperties(this,{parent:{get:function(){return t.parent}},scrollable:{get:function(){return t.scrollable}},autoPlace:{get:function(){return t.autoPlace}},preset:{get:function(){return i.parent?i.getRoot().preset:t.load.preset},set:function(e){i.parent?i.getRoot().preset=e:t.load.preset=e,A(this),i.revert()}},width:{get:function(){return t.width},set:function(e){t.width=e,w(i,e)}},name:{get:function(){return t.name},set:function(e){t.name=e,o&&(o.innerHTML=t.name)}},closed:{get:function(){return t.closed},set:function(e){t.closed=e,t.closed?f.addClass(i.__ul,U.CLASS_CLOSED):f.removeClass(i.__ul,U.CLASS_CLOSED),this.onResize(),i.__closeButton&&(i.__closeButton.innerHTML=e?U.TEXT_OPEN:U.TEXT_CLOSED)}},load:{get:function(){return t.load}},useLocalStorage:{get:function(){return s},set:function(t){R&&(s=t,t?f.bind(window,"unload",e):f.unbind(window,"unload",e),localStorage.setItem(v(i,"isLocal"),t))}}}),p.isUndefined(t.parent)){if(t.closed=!1,f.addClass(this.domElement,U.CLASS_MAIN),f.makeSelectable(this.domElement,!1),R&&s){i.useLocalStorage=!0;var r=localStorage.getItem(v(this,"gui"));r&&(t.load=JSON.parse(r))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=U.TEXT_CLOSED,f.addClass(this.__closeButton,U.CLASS_CLOSE_BUTTON),this.domElement.appendChild(this.__closeButton),f.bind(this.__closeButton,"click",function(){i.closed=!i.closed})}else{void 0===t.closed&&(t.closed=!0);var o=document.createTextNode(t.name);f.addClass(o,"controller-name");var a=_(i,o),l=function(t){return t.preventDefault(),i.closed=!i.closed,!1};f.addClass(this.__ul,U.CLASS_CLOSED),f.addClass(a,"title"),f.bind(a,"click",l),t.closed||(this.closed=!1)}t.autoPlace&&(p.isUndefined(t.parent)&&(O&&(T=document.createElement("div"),f.addClass(T,z),f.addClass(T,U.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(T),O=!1),T.appendChild(this.domElement),f.addClass(this.domElement,U.CLASS_AUTO_PLACE)),this.parent||w(i,t.width)),f.bind(window,"resize",function(){i.onResize()}),f.bind(this.__ul,"webkitTransitionEnd",function(){i.onResize()}),f.bind(this.__ul,"transitionend",function(){i.onResize()}),f.bind(this.__ul,"oTransitionEnd",function(){i.onResize()}),this.onResize(),t.resizable&&x(this),i.getRoot(),t.parent||n()};return U.toggleHide=function(){D=!D,p.each(P,function(t){t.domElement.style.zIndex=D?-999:999,t.domElement.style.opacity=D?0:1})},U.CLASS_AUTO_PLACE="a",U.CLASS_AUTO_PLACE_CONTAINER="ac",U.CLASS_MAIN="main",U.CLASS_CONTROLLER_ROW="cr",U.CLASS_TOO_TALL="taller-than-window",U.CLASS_CLOSED="closed",U.CLASS_CLOSE_BUTTON="close-button",U.CLASS_DRAG="drag",U.DEFAULT_WIDTH=245,U.TEXT_CLOSED="Close Controls",U.TEXT_OPEN="Open Controls",f.bind(window,"keydown",function(t){"text"===document.activeElement.type||t.which!==L&&t.keyCode!=L||U.toggleHide()},!1),p.extend(U.prototype,{add:function(t,e){return m(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return m(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.slice(this.__controllers.indexOf(t),1);var e=this;p.defer(function(){e.onResize()})},destroy:function(){this.autoPlace&&T.removeChild(this.domElement)},addFolder:function(t){if(void 0!==this.__folders[t])throw Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new U(e);this.__folders[t]=n;var i=_(this,n.domElement);return f.addClass(i,"folder"),n},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=f.getOffset(t.__ul).top,n=0;p.each(t.__ul.childNodes,function(e){t.autoPlace&&e===t.__save_row||(n+=f.getHeight(e))}),n>window.innerHeight-e-N?(f.addClass(t.domElement,U.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-N+"px"):(f.removeClass(t.domElement,U.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&p.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},remember:function(){if(p.isUndefined(k)&&(k=new d,k.domElement.innerHTML=e),this.parent)throw Error("You can only call remember on a top level GUI.");var t=this;p.each(Array.prototype.slice.call(arguments),function(e){0==t.__rememberedObjects.length&&b(t),-1==t.__rememberedObjects.indexOf(e)&&t.__rememberedObjects.push(e)}),this.autoPlace&&w(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=C(this)),t.folders={},p.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=C(this),S(this,!1)},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[I]=C(this,!0)),this.load.remembered[t]=C(this),this.preset=t,E(this,t,!0)},revert:function(t){p.each(this.__controllers,function(e){this.getRoot().load.remembered?y(t||this.getRoot(),e):e.setValue(e.initialValue)},this),p.each(this.__folders,function(t){t.revert(t)}),t||S(this.getRoot(),!1)},listen:function(t){var e=0==this.__listening.length;this.__listening.push(t),e&&M(this.__listening)}}),U});