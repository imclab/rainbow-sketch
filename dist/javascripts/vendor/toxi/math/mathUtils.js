define(["require","exports","module"],function(t,e,i){MathUtils={},MathUtils.SQRT2=Math.sqrt(2),MathUtils.SQRT3=Math.sqrt(3),MathUtils.LOG2=Math.log(2),MathUtils.PI=3.141592653589793,MathUtils.INV_PI=1/MathUtils.PI,MathUtils.HALF_PI=MathUtils.PI/2,MathUtils.THIRD_PI=MathUtils.PI/3,MathUtils.QUARTER_PI=MathUtils.PI/4,MathUtils.TWO_PI=2*MathUtils.PI,MathUtils.THREE_HALVES_PI=MathUtils.TWO_PI-MathUtils.HALF_PI,MathUtils.PI_SQUARED=MathUtils.PI*MathUtils.PI,MathUtils.EPS=1.1920928955078125e-7,MathUtils.DEG2RAD=MathUtils.PI/180,MathUtils.RAD2DEG=180/MathUtils.PI,MathUtils.SHIFT23=1<<23,MathUtils.INV_SHIFT23=1/MathUtils.SHIFT23,MathUtils.SIN_A=-4/(MathUtils.PI*MathUtils.PI),MathUtils.SIN_B=4/MathUtils.PI,MathUtils.SIN_P=.225,MathUtils.abs=Math.abs,MathUtils.ceilPowerOf2=function(t){for(var e=1;t>e;)e<<=1;return e},MathUtils.clip=function(t,e,i){return e>t?e:t>i?i:t},MathUtils.clipNormalized=function(t){return 0>t?0:t>1?1:t},MathUtils.cos=Math.cos,MathUtils.degrees=function(t){return t*this.RAD2DEG},MathUtils.fastCos=function(t){return MathUtils.fastSin(t+(t>MathUtils.HALF_PI?-MathUtils.THREE_HALVES_PI:MathUtils.HALF_PI))},MathUtils.fastSin=function(t){return t=MathUtils.SIN_B*t+MathUtils.SIN_A*t*Math.abs(t),MathUtils.SIN_P*(t*Math.abs(t)-t)+t},MathUtils.flipCoin=function(){return.5>Math.random()},MathUtils.floor=function(t){var e=parseInt(t,10);return 0>t&&t!=e&&e--,e},MathUtils.floorPowerOf2=function(t){return parseInt(Math.pow(2,parseInt(Math.log(t)/MathUtils.LOG2,10)),10)},MathUtils.max=function(t,e,i){return void 0===i?Math.max(t,e):t>e?t>i?t:i:e>i?e:i},MathUtils.min=function(t,e,i){return void 0===i?Math.min(t,e):e>t?i>t?t:i:i>e?e:i},MathUtils.normalizedRandom=function(){return 2*Math.random()-1},MathUtils.radians=function(t){return t*MathUtils.DEG2RAD},MathUtils.random=function(t,e,i){return 1===arguments.length?parseInt(arguments[0],10)===arguments[0]?parseInt(Math.random()*arguments[0],10):Math.random()*arguments[0]:(2==arguments.length&&(i=e,e=t,t=Math.random),e||i?i?t()*(i-e)+e:(i=e,t()*i):Math.random())},MathUtils.reduceAngle=function(t){return t%=MathUtils.TWO_PI,Math.abs(t)>MathUtils.PI&&(t-=MathUtils.TWO_PI),Math.abs(t)>MathUtils.HALF_PI&&(t=MathUtils.PI-t),t},MathUtils.sign=function(t){return 0>t?-1:t>0?1:0},MathUtils.sin=function(t){return t=MathUtils.reduceAngle(t),Math.abs(t)<=MathUtils.QUARTER_PI?MathUtils.fastSin(t):MathUtils.fastCos(MathUtils.HALF_PI-t)},i.exports=MathUtils});