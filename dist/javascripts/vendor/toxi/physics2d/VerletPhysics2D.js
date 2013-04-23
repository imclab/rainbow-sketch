define(["require","exports","module","../internals","./behaviors/GravityBehavior","../geom/Rect","../geom/Vec2D"],function(t,e,i){var n=t("../internals"),s=t("./behaviors/GravityBehavior"),r=t("../geom/Rect"),o=t("../geom/Vec2D"),a=0,h=function(t,e,i,r){var h,u={numIterations:50,drag:0,timeStep:1};1==arguments.length&&(arguments[0].gravity||arguments[0].numIterations||arguments[0].timeStep||arguments[0].drag)?(h=arguments[0],u.gravity=h.gravity,u.numIterations=h.numIterations||u.numIterations,u.drag=h.drag||u.drag,u.timeStep=h.timeStep||u.timeStep):1==arguments.length?u.gravity=t:4==arguments.length&&(u.gravity=t,u.numIterations=e,u.drag=i,u.timeStep=r),this.behaviors=[],this.particles=[],this.springs=[],this.numIterations=u.numIterations,this.timeStep=u.timeStep,this.setDrag(u.drag),u.gravity&&(n.tests.hasXY(u.gravity)&&(u.gravity=new s(new o(u.gravity))),this.addBehavior(u.gravity)),this.id=a++};h.addConstraintToAll=function(t,e){for(var i=0;e.length>i;i++)e[i].addConstraint(t)},h.removeConstraintFromAll=function(t,e){for(var i=0;e.length>i;i++)e[i].removeConstraint(t)},h.prototype={addBehavior:function(t){t.configure(this.timeStep),this.behaviors.push(t)},addParticle:function(t){return this.particles.push(t),this},addSpring:function(t){return void 0===this.getSpring(t.a,t.b)&&this.springs.push(t),this},clear:function(){return this.particles=[],this.springs=[],this},constrainToBounds:function(){var t,e=0;for(e=0;this.particles.length>e;e++)t=this.particles[e],void 0!==t.bounds&&t.constrain(t.bounds);if(void 0!==this.worldBounds)for(e=0;this.particles.length>e;e++)t=this.particles[e],t.constrain(this.worldBounds)},getCurrentBounds:function(){var t,e=new o(Number.MAX_VALUE,Number.MAX_VALUE),i=new o(Number.MIN_VALUE,Number.MIN_VALUE),n=0;for(n=0;this.particles.length>n;n++)t=this.particles[n],e.minSelf(t),i.maxSelf(t);return new r(e,i)},getDrag:function(){return 1-this.drag},getNumIterations:function(){return this.numIterations},getSpring:function(t,e){var i=0;for(i=0;this.springs.length>i;i++){var n=this.springs[i];if(n.a===t&&n.b===e||n.a===e&&n.b===e)return n}return void 0},getTimeStep:function(){return this.timeStep},getWorldBounds:function(){return this.worldBounds},removeBehavior:function(t){return n.removeItemFrom(t,this.behaviors)},removeParticle:function(t){return n.removeItemFrom(t,this.particles)},removeSpring:function(t){return n.removeItemFrom(t,this.springs)},removeSpringElements:function(t){return void 0!==this.removeSpring(t)?this.removeParticle(t.a)&&this.removeParticle(t.b):!1},setDrag:function(t){this.drag=1-t},setNumIterations:function(t){this.numIterations=t},setTimeStep:function(t){this.timeStep=t;var e=0,i=this.behaviors.length;for(e=0;i>e;e++){var n=this.behaviors[e];n.configure(t)}},setWorldBounds:function(t){return this.worldBounds=t,this},update:function(){return this.updateParticles(),this.updateSprings(),this.constrainToBounds(),this},updateParticles:function(){var t,e,i=0,n=0;for(i=0;this.behaviors.length>i;i++)for(t=this.behaviors[i],n=0;this.particles.length>n;n++)e=this.particles[n],t.applyBehavior(e);for(n=0;this.particles.length>n;n++)e=this.particles[n],e.scaleVelocity(this.drag),e.update()},updateSprings:function(){var t=0,e=0;for(t=this.numIterations;t>0;t--)for(e=0;this.springs.length>e;e++){var i=this.springs[e];i.update(1===t)}}},i.exports=h});