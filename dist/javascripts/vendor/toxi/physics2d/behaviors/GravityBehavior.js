define(["require","exports","module","../../internals","./ConstantForceBehavior"],function(t,e,i){var n=t("../../internals"),s=t("./ConstantForceBehavior"),r=function(t){s.call(this,t)};n.extend(r,s),r.prototype.configure=function(t){this.timeStep=t,this.scaledForce=this.force.scale(t*t)},i.exports=r});