define(["require","exports","module"],function(t,e,n){var i=function(t){this.circle=t,this.isec=void 0};i.prototype={getIntersectionData:function(){return this.isec},intersectsRay:function(t){this.isec.clear();var e=circle.sub(t),n=e.magSquared(),i=e.dot(t.getDirection()),r=circle.getRadius(),s=r*r-(n-i*i);return s>=0&&(this.isec.isIntersection=!0,this.isec.dist=i-Math.sqrt(s),this.isec.pos=t.getPointAtDistance(isec.dist),this.isec.normal=this.isec.pos.sub(this.circle).normalize()),this.isec.isIntersection}},n.exports=i});