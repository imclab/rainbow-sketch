define(["dat/dom/dom","dat/utils/common"],function(t,e){var i=function(){this.backgroundElement=document.createElement("div"),e.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear"}),t.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),e.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var i=this;t.bind(this.backgroundElement,"click",function(){i.hide()})};return i.prototype.show=function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),e.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},i.prototype.hide=function(){var e=this,i=function(){e.domElement.style.display="none",e.backgroundElement.style.display="none",t.unbind(e.domElement,"webkitTransitionEnd",i),t.unbind(e.domElement,"transitionend",i),t.unbind(e.domElement,"oTransitionEnd",i)};t.bind(this.domElement,"webkitTransitionEnd",i),t.bind(this.domElement,"transitionend",i),t.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},i.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-t.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-t.getHeight(this.domElement)/2+"px"},i});