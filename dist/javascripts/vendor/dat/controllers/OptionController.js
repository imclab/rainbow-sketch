define(["dat/controllers/Controller","dat/dom/dom","dat/utils/common"],function(t,e,i){var n=function(t,s,r){n.superclass.call(this,t,s);var o=this;if(this.__select=document.createElement("select"),i.isArray(r)){var a={};i.each(r,function(t){a[t]=t}),r=a}i.each(r,function(t,e){var i=document.createElement("option");i.innerHTML=e,i.setAttribute("value",t),o.__select.appendChild(i)}),this.updateDisplay(),e.bind(this.__select,"change",function(){var t=this.options[this.selectedIndex].value;o.setValue(t)}),this.domElement.appendChild(this.__select)};return n.superclass=t,i.extend(n.prototype,t.prototype,{setValue:function(t){var e=n.superclass.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),e},updateDisplay:function(){return this.__select.value=this.getValue(),n.superclass.prototype.updateDisplay.call(this)}}),n});