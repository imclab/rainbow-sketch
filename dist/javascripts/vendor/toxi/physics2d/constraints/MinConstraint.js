define(["require","exports","module"],function(t,e,i){var n=function(t,e){this.axis=t,this.threshold=e};n.prototype.applyConstraint=function(t){t.getComponent(this.axis)<this.threshold&&t.setComponent(this.axis,this.threshold)},i.exports=n});