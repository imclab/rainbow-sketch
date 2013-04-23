define(["require","exports","module","../../math/mathUtils"],function(t,e,i){var n=t("../../math/mathUtils"),s=function(t,e){if(t=t||.1,e=e||1,t>e){var i=e;e=t,t=i}this.min=t,this.max=e,this.currValue=t};s.prototype={adjustCurrentBy:function(t){return this.setCurrent(this.currValue+t)},copy:function(){var t=new s(this.min,this.max);return t.currValue=this.currValue,t},getAt:function(t){return this.min+(this.max-this.min-n.EPS)*t},getCurrent:function(){return this.currValue},getMedian:function(){return.5*(this.min+this.max)},getRange:function(){return this.max-this.min},isValueInRange:function(t){return t>=this.min&&this.max>=t},pickRandom:function(){return this.currValue=n.random(min,max),this.currValue},toArray:function(t){for(var e=[],i=this.min;this.max>i;)e.push(i),i+=t;return e},toString:function(){return"FloatRange: "+this.min+" -> "+this.max}},i.exports=s});