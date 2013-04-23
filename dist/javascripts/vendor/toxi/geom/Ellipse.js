define(["require","exports","module","../internals","../math/mathUtils","./Vec2D","./Polygon2D"],function(t,e,n){var i=t("../internals"),r=t("../math/mathUtils"),s=t("./Vec2D"),o=t("./Polygon2D"),a=function(t,e,n,r){this.radius=new s,0===arguments.length?(s.apply(this,[0,0]),this.setRadii(1,1)):i.tests.hasXY(t)?(s.apply(this,[t.x,t.y]),i.tests.hasXY(e)?this.setRadii(e.x,e.y):this.setRadii(e,n)):void 0===r?void 0===n?(s.apply(this,[0,0]),this.setRadii(t,e)):(s.apply(this,[t,e]),this.setRadii(n,n)):(s.apply(this,[t,e]),this.setRadii(n,r))};i.extend(a,s),a.prototype.containsPoint=function(t){var e=this.getFoci();return t.distanceTo(e[0])+t.distanceTo(e[1])<2*r.max(this.radius.x,this.radius.y)},a.prototype.getArea=function(){return r.PI*radius.x*radius.y},a.prototype.getCircumference=function(){return Math.sqrt(.5*this.radius.magSquared())*r.TWO_PI},a.prototype.getFoci=function(){var t=[];return this.radius.x>this.radius.y?(t[0]=this.sub(this.focus,0),t[1]=this.add(this.focus,0)):(t[0]=this.sub(0,this.focus),t[1]=this.add(0,this.focus)),t},a.prototype.getRadii=function(){return this.radius.copy()},a.prototype.setRadii=function(t,e){return i.tests.hasXY(t)&&(e=t.y,t=t.x),this.radius.set(t,e),this.focus=this.radius.magnitude(),this},a.prototype.toPolygon2D=function(t){for(var e=new o,n=r.TWO_PI/t,i=0;t>i;i++){var a=s.fromTheta(i*n).scaleSelf(this.radius).addSelf(this);e.add(a)}return e},n.exports=a});