define(["require","exports","module","../internals","./VerletSpring2D"],function(t,e,i){var n=t("../internals"),s=t("./VerletSpring2D"),r=function(t,e,i,n){s.call(this,t,e,i,n),this.setRestLength(i)};n.extend(r,s),r.prototype.update=function(t){this.b.distanceToSquared(this.a)<this.restLengthSquared&&this.parent.update.call(this,t)},i.exports=r});