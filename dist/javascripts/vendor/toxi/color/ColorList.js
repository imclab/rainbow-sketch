define(["require","exports","module","../internals","../math/mathUtils","./TColor","./HSVDistanceProxy","./RGBDistanceProxy","./ProximityComparator","./AccessCriteria"],function(t,e,n){var i=t("../internals"),r=t("../math/mathUtils"),o=t("./TColor"),s=t("./HSVDistanceProxy"),a=t("./RGBDistanceProxy"),u=t("./ProximityComparator"),l=t("./AccessCriteria"),c=function(t){return arguments.length>1?c.call(this,arguments):(this.colors=[],void 0!==t&&this.addAll(t),void 0)};c.prototype={constructor:c,add:function(t){return this.colors.push(t.copy()),this},addAll:function(t){var e=this;return i.each(t,function(t){e.colors.push(t)}),this},adjustBrightness:function(t){return i.each(this.colors,function(e){e.lighten(t)}),this},adjustSaturation:function(t){return i.each(this.colors,function(e){e.saturate(t)}),this},clusterSort:function(t,e,n,i){var r,o=this.colors.slice(0),s=[],a=1,u=0,l=o.length;o.sort(t.compare).reverse();for(var c=0;l>c;c++){var h=o[c];a>h.getComponentValue(t)&&(r=o.slice(u,c),r.sort(e.compare),s.push.apply(s,r),a-=1/n,u=c)}return r=[],Array.prototype.push.apply(r,o.slice(u,o.length)),r.sort(e.compare),s.push.apply(s,r),i&&s.reverse(),this.colors=s,this},complement:function(){return this.each(function(t){t.complement()}),this},contains:function(t){for(var e=0,n=this.colors.length;n>e;e++)if(this.colors[e].equals(t))return!0;return!1},each:function(t){return i.each(this.colors,t),this},get:function(t){return 0>t&&(t+=this.colors.length),this.colors[t]},getAverage:function(){var t=0,e=0,n=0,i=0;this.each(function(r){t+=r.rgb[0],e+=r.rgb[1],n+=r.rgb[2],i+=r.alpha()});var r=this.colors.length;return r>0?o.newRGBA(t/r,e/r,n/r,i/r):void 0},getBlended:function(t){for(var e=[],n=this.colors.length,i=0;n>i;i++){var r=i>0?i-1:e.length-1,o=this.colors[r];e.push(this.colors[i].getBlended(o,t))}return new c(e)},getDarkest:function(){var t,e=Number.MAX_VALUE;return this.each(function(n){var i=n.luminance();e>i&&(t=n,e=i)}),t},getLightest:function(){var t,e=Number.MIN_VALUE;return this.each(function(n){var i=n.luminance();i>e&&(t=n,e=i)}),t},getRandom:function(){var t=Math.floor(r.random(this.colors.length));return this.colors[t]},getReverse:function(){return new c(this.colors).reverse()},invert:function(){return this.each(function(t){t.invert()}),this},iterator:function(){return new i.Iterator(this.colors)},reverse:function(){return this.colors.reverse(),this},rotateRYB:function(t,e){var n;return n=t!==Math.floor(t)||e?r.degrees(t):t,this.each(function(t){t.rotateRYB(n)}),this},size:function(){return this.colors.length},sort:function(){return this.sortByCriteria(l.HUE,!1)},sortByComparator:function(t,e){return"function"==typeof t&&t.compare===void 0&&(t={compare:t}),this.colors.sort(t.compare),e&&this.colors.reverse(),this},sortByCriteria:function(t,e){return this.sortByComparator(t,e)},sortByDistance:function(t,e){if(1===arguments.length&&(e=arguments[0],t=new s),0===this.colors.length)return this;var n=this.getDarkest(),i=this.colors.slice(0),r=[];i.splice(i.indexOf(n),1),r.push(n);for(var o=0;i.length>1;){for(var a=i[0],u=r[o],l=t.distanceBetween(a,u),c=i.length-1;c>=0;c--){var h=i[c],d=t.distanceBetween(h,u);l>d&&(a=h,l=d)}i.splice(i.indexOf(a),1),r.push(a),o++}return r.push(i[0]),e&&r.reverse(),this.colors=r,this},sortByProximityTo:function(t,e,n){return 2==arguments.length&&(t=arguments[0],e=new a,n=arguments[1]),this.sortByComparator(new u(t,e),n)},toARGBArray:function(){var t=[];return this.each(function(e){t.push(e.toARGB())}),t}},c.createFromARGBArray=function(t,e,n,i){if(i=i||100,e=r.min(e,t.length),!n&&e==t.length)return new c(t);var s,a=[],u=o.BLACK.copy(),l=0,h=!0,d=0;for(l=0;e>l;l++)if(n){h=!0,d=0;do s=r.random(t.length),u.setARGB(t[s]),h=!(a.indexOf(u)>=0);while(!h&&i>++d);if(!(i>d))break;a.push(u.copy())}else s=r.random(t.length),a.push(o.newARGB(t[s]));return new c(a)},n.exports=c});