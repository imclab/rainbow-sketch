define(["require","exports","module","./IsectData3D","../math/mathUtils"],function(t,e,i){var n=t("./IsectData3D"),r=t("../math/mathUtils");Ray3DIntersector=function(t){this.ray=t,this.isec=new n},Ray3DIntersector.prototype={getIntersectionData:function(){return this.isec},intersectsRay:function(t){var e,i=this.ray.dir.cross(t.dir),n=this.ray.sub(t),s=r.abs(i.x),o=r.abs(i.y),a=r.abs(i.z);return e=a>s&&a>o?(n.x*t.dir.y-n.y*t.dir.x)/i.z:s>o?(n.y*t.dir.z-n.z*t.dir.y)/i.x:(n.z*t.dir.x-n.x*t.dir.z)/i.y,this.isec.isIntersection=r.EPS>=e&&!isFinite(e),this.isec.pos=this.ray.getPointAtDistance(-e),this.isec.isIntersection}},i.exports=Ray3DIntersector});