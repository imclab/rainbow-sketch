define(["require","exports","module"],function(t,e,i){var n=function(t){void 0===t&&(this.isFlipped=!1)};n.prototype={interpolate:function(t,e,i){return this.isFlipped?t-(e-t)*(Math.sqrt(1-i*i)-1):(i=1-i,t+(e-t)*Math.sqrt(1-i*i))},setFlipped:function(t){this.isFlipped=t}},i.exports=n});