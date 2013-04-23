define(["require","exports","module","../math/mathUtils","../geom/Vec2D","../geom/Vec3D","../internals"],function(t,e,n){function i(t){return t[0]=Math.floor(360*t[0]),t[1]=Math.floor(100*t[1]),t[2]=Math.floor(100*t[2]),t}function r(t,e){return(e=e||!1)?(t[0]=Math.floor(100*t[0]),t[1]=Math.floor(100*t[1]),t[2]=Math.floor(100*t[2]),"rgba("+t[0]+"%,"+t[1]+"%,"+t[2]+"%,"+t[3]+")"):(t[0]=Math.floor(255*t[0]),t[1]=Math.floor(255*t[1]),t[2]=Math.floor(255*t[2]),t)}var s=t("../internals"),o=t("../math/mathUtils"),a=t("../geom/Vec2D"),u=t("../geom/Vec3D"),h=function(t){return 0>t&&(t=4294967295+t+1),t.toString(16)},l=function(t){if(this.rgb=[],this.hsv=[],this.cmyk=[],this._alpha=1,void 0!==t){var e=t.toCMYKAArray();this.cmyk=e.splice(0,4),this.hsv=t.toHSVAArray().splice(0,3),this.rgb=t.toRGBAArray().splice(0,3),this._alpha=t._alpha}};l.prototype={add:function(t){return this.copy().addSelf(t)},addSelf:function(t){return this.rgb[0]=o.min(this.rgb[0]+t.rgb[0],1),this.rgb[1]=o.min(this.rgb[1]+t.rgb[1],1),this.rgb[2]=o.min(this.rgb[2]+t.rgb[2],1),this.setRGB(this.rgb)},adjustConstrast:function(t){return.5>this.hsv[2]?this.darken(t):this.lighten(t)},adjustHSV:function(t,e,n){return this.setHSV([this.hsv[0]+t,this.hsv[1]+e,this.hsv[2]+n])},adjustRGB:function(t,e,n){return this.setRGB([this.rgb[0]+t,this.rgb[1]+e,this.rgb[2]+n])},alpha:function(){return this._alpha},analog:function(t,e){var n=o.degrees(t);return this.rotateRYB(n*o.normalizedRandom()),this.hsv[1]+=e*o.normalizedRandom(),this.hsv[2]+=e*o.normalizedRandom(),this.setHSV(this.hsv)},black:function(){return this.cmyk[3]},blend:function(t,e){void 0===e&&(e=.5);var n=t.toRGBAArray();return this.rgb[0]+=(n[0]-this.rgb[0])*e,this.rgb[1]+=(n[1]-this.rgb[1])*e,this.rgb[2]+=(n[2]-this.rgb[2])*e,this._alpha+=(t._alpha-this._alpha)*e,this.setRGB(this.rgb)},blue:function(){return this.rgb[2]},brightness:function(){return this.hsv[2]},complement:function(){return this.rotateRYB(180)},copy:function(){return new l(this)},cyan:function(){return this.cmyk[0]},darken:function(t){return this.hsv[2]=o.clip(this.hsv[2]-t,0,1),this.setHSV(this.hsv)},desaturate:function(t){return this.hsv[1]=o.clip(this.hsv[1]-t,0,1),this.setHSV(this.hsv)},differenceTo:function(t){return l.newRGB(Math.abs(this.rgb[0]-t.rgb[0]),Math.abs(this.rgb[1]-t.rgb[1]),Math.abs(this.rgb[2]-t.rgb[2]))},distanceToCMYK:function(t){var e=t.toCMYKAArray(),n=this.cmyk[0]-e[0],i=this.cmyk[1]-e[1],r=this.cmyk[2]-e[2],s=this.cmyk[3]-e[3];return Math.sqrt(n*n+i*i+r*r+s*s)},distanceToHSV:function(t){var e=this.hsv[0]*o.TWO_PI,n=t.hue()*o.TWO_PI,i=new u(o.cos(e)*this.hsv[1],o.sin(e)*this.hsv[1],this.hsv[2]),r=new u(o.cos(n)*t.saturation(),o.sin(n)*t.saturation(),t.brightness());return i.distanceTo(r)},distanceToRGB:function(t){var e=t.toRGBAArray(),n=this.rgb[0]-e[0],i=this.rgb[1]-e[1],r=this.rgb[2]-e[2];return Math.sqrt(n*n+i*i+r*r)},equals:function(t){if(s.tests.isTColor(t)){var e=t,n=e.rgb[0]-this.rgb[0],i=e.rgb[1]-this.rgb[1],r=e.rgb[2]-this.rgb[2],o=e.alpha()-this._alpha,a=Math.sqrt(n*n+i*i+r*r+o*o);return l.EPS>a}return!1},getAnalog:function(t,e){return new l(this).analog(t,e)},getBlended:function(t,e){return new l(this).blend(t,e)},getComplement:function(){return new l(this).complement()},getComponentValue:function(t){return t.getComponentValueFor(this)},getDarkened:function(t){return new l(this).darken(t)},getDesaturated:function(t){return new l(this).desaturate(t)},getDifferenceTo:function(t){return this.copy().differenceTo(t)},getInverted:function(){return new l(this).invert()},getLightened:function(t){return new l(this).lighten(t)},getRotatedRYB:function(t){return new l(this).rotateRYB(t)},getSaturated:function(t){return new l(this).saturate(t)},green:function(){return this.rgb[1]},hue:function(){return this.hsv[0]},invert:function(){return this.rgb[0]=1-this.rgb[0],this.rgb[1]=1-this.rgb[1],this.rgb[2]=1-this.rgb[2],this.setRGB(this.rgb)},isBlack:function(){return this.rgb[0]<=l.BLACK_POINT&&this.rgb[0]==this.rgb[1]&&this.rgb[0]==this.rgb[2]},isGrey:function(){return this.hsv[1]<l.GREY_THRESHOLD},isWhite:function(){return this.rgb[0]>=l.WHITE_POINT&&this.rgb[0]==this.rgb[1]&&this.rgb[0]==this.rgb[2]},lighten:function(t){return this.hsv[2]=o.clip(this.hsv[2]+t,0,1),this.setHSV(this.hsv)},luminance:function(){return.299*this.rgb[0]+.587*this.rgb[1]+.114*this.rgb[2]},magenta:function(){return this.cmyk[1]},red:function(){return this.rgb[0]},rotateRYB:function(t){var e,n,i=(parseInt(o.degrees(t),10),360*this.hsv[0]),r=0;t%=360;var s=0;for(r=0;l.RYB_WHEEL.length-1>r;r++)if(e=l.RYB_WHEEL[r],n=l.RYB_WHEEL[r+1],n.y<e.y&&(n.y+=360),i>=e.y&&n.y>=i){s=e.x+(n.x-e.x)*(i-e.y)/(n.y-e.y);break}for(s=(s+t)%360,r=0;l.RYB_WHEEL.length-1>r;r++)if(e=l.RYB_WHEEL[r],n=l.RYB_WHEEL[r+1],n.y<e.y&&(n.y+=360),s>=e.x&&n.x>=s){i=e.y+(n.y-e.y)*(s-e.x)/(n.x-e.x);break}return this.hsv[0]=i%360/360,this.setHSV(this.hsv)},saturate:function(t){return this.hsv[1]=o.clip(this.hsv[1]+t,0,1),this.setHSV(this.hsv)},saturation:function(){return this.hsv[1]},setAlpha:function(t){return this._alpha=t,this},setARGB:function(t){return this.setRGB((255&t>>16)*l.INV8BIT,(255&t>>8)*l.INV8BIT,(255&t)*l.INV8BIT),this._alpha=(t>>>24)*l.INV8BIT,this},setBlack:function(t){return this.cmyk[3]=t,this.setCMYK(this.cmyk)},setBlue:function(t){return this.rgb[2]=t,this.setRGB(this.rgb)},setBrightness:function(t){return this.hsv[2]=o.clip(t,0,1),this.setHSV(this.hsv)},setCMYK:function(t,e,n,i){return s.tests.isArray(t)&&(e=t[1],n=t[2],i=t[3],t=t[0]),this.cmyk[0]=t,this.cmyk[1]=e,this.cmyk[2]=n,this.cmyk[3]=i,this.rgb=l.cmykToRGB(this.cmyk[0],this.cmyk[1],this.cmyk[2],this.cmyk[3]),this.hsv=l.rgbToHSV(this.rgb[0],this.rgb[1],this.rgb[2]),this},setCyan:function(t){return this.cmyk[0]=t,this.setCMYK(this.cmyk)},setGreen:function(t){return this.rgb[1]=t,this.setRGB(this.rgb)},setHSV:function(t,e,n){s.tests.isArray(t)&&(e=t[1],n=t[2],t=t[0]);var i=[t,e,n];return this.hsv[0]=i[0]%1,0>this.hsv[0]&&this.hsv[0]++,this.hsv[1]=o.clip(i[1],0,1),this.hsv[2]=o.clip(i[2],0,1),this.rgb=l.hsvToRGB(this.hsv[0],this.hsv[1],this.hsv[2]),this.cmyk=l.rgbToCMYK(this.rgb[0],this.rgb[1],this.rgb[2]),this},setHue:function(t){return t%=1,0>t&&t++,this.hsv[0]=t,this.setHSV(this.hsv)},setMagenta:function(t){return this.cmyk[1]=t,this.setCMYK(this.cmyk)},setRed:function(t){return this.rgb[0]=t,this.setRGB(this.rgb)},setRGB:function(t,e,n){return s.tests.isArray(t)&&(e=t[1],n=t[2],t=t[0]),this.rgb[0]=o.clip(t,0,1),this.rgb[1]=o.clip(e,0,1),this.rgb[2]=o.clip(n,0,1),this.cmyk=l.rgbToCMYK(this.rgb[0],this.rgb[1],this.rgb[2]),this.hsv=l.rgbToHSV(this.rgb[0],this.rgb[1],this.rgb[2]),this},setSaturation:function(t){return this.hsv[1]=o.clip(t,0,1),this.setHSV(this.hsv)},setYellow:function(t){return this.cmyk[2]=t,this.setCMYK(this.cmyk)},sub:function(t){return this.copy().subSelf(t)},subSelf:function(t){return this.rgb[0]=o.max(this.rgb[0]-t.rgb[0],0),this.rgb[1]=o.max(this.rgb[1]-t.rgb[1],0),this.rgb[2]=o.max(this.rgb[2]-t.rgb[2],0),this.setRGB(this.rgb)},toARGB:function(){var t=parseInt(255*this.rgb[0],10),e=parseInt(255*this.rgb[1],10),n=parseInt(255*this.rgb[2],10),i=parseInt(255*this._alpha,10);return t<<16|e<<8|n|i<<24},toCMYKAArray:function(t){return void 0===t&&(t=[]),t[0]=this.cmyk[0],t[1]=this.cmyk[1],t[2]=this.cmyk[2],t[3]=this.cmyk[3],t[4]=this._alpha,t},toHex:function(){var t=h(this.toARGB());return t.length>6&&(t=t.substring(2)),t},toHexCSS:function(){return"#"+this.toHex()},toHSVAArray:function(t){return void 0===t&&(t=[]),t[0]=this.hsv[0],t[1]=this.hsv[1],t[2]=this.hsv[2],t[3]=this._alpha,t},toHSLCSS:function(){var t=i(this.toHSVAArray());return"hsl("+t[0]+","+t[1]+"%,"+t[2]+"%)"},toHSLACSS:function(){var t=i(this.toHSVAArray());return"hsla("+t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]+")"},toInt:function(){return Number("0x"+this.toHex())},toRGBAArray:function(t,e){return void 0===t&&(t=[]),void 0==e&&(e=0),t[e++]=this.rgb[0],t[e++]=this.rgb[1],t[e++]=this.rgb[2],t[e]=this._alpha,t},toRGBCSS:function(t){var e=r(this.toRGBAArray(),t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"},toRGBACSS:function(t){var e=r(this.toRGBAArray(),t);return"rgba("+e[0]+","+e[1]+","+e[2]+","+e[3]+")"},toString:function(){return"TColor: rgb: "+this.rgb[0]+", "+this.rgb[1]+", "+this.rgb[2]+" hsv: "+this.hsv[0]+","+this.hsv[1]+","+this.hsv[2]+" cmyk: "+this.cmyk[0]+", "+this.cmyk[1]+","+this.cmyk[2]+","+this.cmyk[3]+" alpha: "+this._alpha},yellow:function(){return this.cmyk[2]}},l.INV60DEGREES=60/360,l.INV8BIT=1/255,l.EPS=.001,l.BLACK_POINT=.08,l.WHITE_POINT=1,l.GREY_THRESHOLD=.01,l.cmykToRGB=function(t,e,n,i,r){return void 0===r&&(r=[0,0,0]),r[0]=1-Math.min(1,t+i),r[1]=1-Math.min(1,e+i),r[2]=1-Math.min(1,n+i),r},l.hexToRGB=function(t,e){return void 0===e&&(e=[]),t="#"==t.charAt(0)?t.substring(1,7):t,e[0]=parseInt(t.substring(0,2),16)*l.INV8BIT,e[1]=parseInt(t.substring(2,4),16)*l.INV8BIT,e[2]=parseInt(t.substring(4,6),16)*l.INV8BIT,e},l.hsvToRGB=function(t,e,n,i){if(void 0===i&&(i=[]),0===e)i[0]=i[1]=i[2]=n;else{t/=l.INV60DEGREES;var r=parseInt(t,10),s=t-r,o=n*(1-e),a=n*(1-e*s),u=n*(1-e*(1-s));0===r?(i[0]=n,i[1]=u,i[2]=o):1==r?(i[0]=a,i[1]=n,i[2]=o):2==r?(i[0]=o,i[1]=n,i[2]=u):3==r?(i[0]=o,i[1]=a,i[2]=n):4==r?(i[0]=u,i[1]=o,i[2]=n):(i[0]=n,i[1]=o,i[2]=a)}return i},l.labToRGB=function(t,e,n,i){void 0===i&&(i=[]);var r=(t+16)/116,s=e/500+r,o=r-n/200,a=0;for(i[0]=s,i[1]=r,i[2]=o,a=0;3>a;a++){var u=Math.pow(i[a],3);i[a]=u>.008856?u:(i[a]-16/116)/7.787}s=.95047*i[0],r=i[1],o=1.08883*i[2],i[0]=3.2406*s+-1.5372*r+o*-.4986,i[1]=s*-.9689+1.8758*r+.0415*o,i[2]=.0557*s+r*-.204+1.057*o;var h=1/2.4;for(a=0;3>a;a++)i[a]=i[a]>.0031308?1.055*Math.pow(i[a],h)-.055:12.92*i[a];return i},l.newARGB=function(t){return l.newRGBA((255&t>>16)*l.INV8BIT,(255&t>>8)*l.INV8BIT,(255&t)*l.INV8BIT,(t>>>24)*l.INV8BIT)},l.newCMYK=function(t,e,n,i){return l.newCMYKA(t,e,n,i,1)},l.newCMYKA=function(t,e,n,i,r){var s=new l;return s.setCMYK([t,e,n,i]),s.setAlpha(o.clip(r,0,1)),s},l.newCSS=function(t){function e(e){var n=t.substr(0,t.length-1);return n.substr(e.length+1,n.length).split(",")}function n(t){var e=0,n=t.length;for(e=0;n>e;e++)t[e]=Number(t[e]);return t}for(;t.indexOf(" ")>-1;)t=t.replace(" ","");t=t.toLowerCase();var i={"#":function(){return l.newHex(t.substr(1,t.length))},rgba:function(){var t=n(e("rgba"));return l.newRGBA(t[0]/255,t[1]/255,t[2]/255,t[3])},rgb:function(){var t=n(e("rgb"));return l.newRGBA(t[0]/255,t[1]/255,t[2]/255,1)},hsla:function(t){return t=t||e("hsla"),t[0]=Number(t[0])/360,t[1]=Number(t[1].substr(0,t[1].length-1))/100,t[2]=Number(t[2].substr(0,t[2].length-1))/100,t[3]=Number(t[3]),l.newHSVA(t[0],t[1],t[2],t[3])},hsl:function(){var t=e("hsl");return t.push(1),i.hsla(t)}};if(void 0!==l.X11[t])return l.X11[t].copy();for(var r in i)if(t.indexOf(r)>-1)return i[r]()},l.newGray=function(t){return l.newGrayAlpha(t,1)},l.newGrayAlpha=function(t,e){var n=new l;return n.setRGB([t,t,t]),n.setAlpha(e),n},l.newHex=function(t){var e=new l;return e.setRGB(l.hexToRGB(t)),e.setAlpha(1),e},l.newHSV=function(t,e,n){return l.newHSVA(t,e,n,1)},l.newHSVA=function(t,e,n,i){var r=new l;return r.setHSV(t,e,n),r.setAlpha(o.clip(i,0,1)),r},l.newRandom=function(){return l.newRGBA(Math.random(),Math.random(),Math.random(),1)},l.newRGB=function(t,e,n){return l.newRGBA(t,e,n,1)},l.newRGBA=function(t,e,n,i){var r=new l;return r.setRGB(t,e,n),r.setAlpha(o.clip(i,0,1)),r},l.rgbToCMYK=function(t,e,n,i){return void 0===i&&(i=[]),i[0]=1-t,i[1]=1-e,i[2]=1-n,i[3]=o.min(i[0],i[1],i[2]),i[0]=o.clip(i[0]-i[3],0,1),i[1]=o.clip(i[1]-i[3],0,1),i[2]=o.clip(i[2]-i[3],0,1),i[3]=o.clip(i[3],0,1),i},l.rgbToHex=function(t,e,n){var i=h(255*o.clip(t,0,1))+h(255*o.clip(e,0,1))+h(255*o.clip(n,0,1));return i},l.rgbToHSV=function(t,e,n,i){void 0===i&&(i=[]);var r=0,a=0,u=o.max(t,e,n),h=u-o.min(t,e,n);return 0!==u&&(a=h/u),0!==a&&(r=0===s.numberCompare(t,u)?(e-n)/h:0===s.numberCompare(e,u)?2+(n-t)/h:4+(t-e)/h),r*=l.INV60DEGREES,0>r&&(r+=1),i[0]=r,i[1]=a,i[2]=u,i},l.RED=l.newRGB(1,0,0),l.RYB_WHEEL=[new a(0,0),new a(15,8),new a(30,17),new a(45,26),new a(60,34),new a(75,41),new a(90,48),new a(105,54),new a(120,60),new a(135,81),new a(150,103),new a(165,123),new a(180,138),new a(195,155),new a(210,171),new a(225,187),new a(240,204),new a(255,219),new a(270,234),new a(285,251),new a(300,267),new a(315,282),new a(330,298),new a(345,329),new a(360,0)],l.GREEN=l.newRGB(0,1,0),l.BLUE=l.newRGB(0,0,1),l.CYAN=l.newRGB(0,1,1),l.MAGENTA=l.newRGB(1,0,1),l.YELLOW=l.newRGB(1,1,0),l.BLACK=l.newRGB(0,0,0),l.WHITE=l.newRGB(1,1,1),l.X11={},function(){var t,e,n={indianred:[205,92,92],lightcoral:[240,128,128],salmon:[250,128,114],darksalmon:[233,150,122],lightsalmon:[255,160,122],red:[255,0,0],crimson:[220,20,60],fireBrick:[178,34,34],darkred:[139,0,0],pink:[255,192,203],lightpink:[255,182,193],hotpink:[255,105,180],deeppink:[255,20,147],mediumvioletred:[199,21,133],palevioletred:[219,112,147],coral:[255,127,80],tomato:[255,99,71],orangered:[255,69,0],darkorange:[255,140,0],orange:[255,165,0],gold:[255,215,0],yellow:[255,255,0],lightyellow:[255,255,224],lemonchiffon:[255,250,205],lightgoldenrodyellow:[250,250,210],papayawhip:[255,239,213],moccasin:[255,228,181],peachpuff:[255,218,185],palegoldenrod:[238,232,170],khaki:[240,230,140],darkkhaki:[189,183,107],lavender:[230,230,250],thistle:[216,191,216],plum:[221,160,221],violet:[238,130,238],orchid:[218,112,214],fuchsia:[255,0,255],Magenta:[255,0,255],mediumorchid:[186,85,211],mediumpurple:[147,112,219],blueviolet:[138,43,226],darkviolet:[148,0,211],darkorchid:[153,50,204],darkmagenta:[139,0,139],purple:[128,0,128],indigo:[75,0,130],darkslateblue:[72,61,139],slateblue:[106,90,205],mediumslateblue:[123,104,238],greenyellow:[173,255,47],chartreuse:[127,255,0],lawngreen:[124,252,0],lime:[0,255,0],limegreen:[50,205,50],palegreen:[152,251,152],lightgreen:[144,238,144],mediumspringgreen:[0,250,154],springgreen:[0,255,127],mediumseagreen:[60,179,113],seagreen:[46,139,87],forestgreen:[34,139,34],green:[0,128,0],darkgreen:[0,100,0],yellowgreen:[154,205,50],olivedrab:[107,142,35],olive:[128,128,0],darkolivegreen:[85,107,47],mediumaquamarine:[102,205,170],darkseagreen:[143,188,143],lightseagreen:[32,178,170],darkcyan:[0,139,139],teal:[0,128,128],aqua:[0,255,255],cyan:[0,255,255],lightcyan:[224,255,255],paleturquoise:[175,238,238],aquamarine:[127,255,212],turquoise:[64,224,208],mediumturquoise:[72,209,204],darkturquoise:[0,206,209],cadetblue:[95,158,160],steelblue:[70,130,180],lightsteelblue:[176,196,222],powderblue:[176,224,230],lightblue:[173,216,230],skyblue:[135,206,235],lightskyblue:[135,206,250],deepskyblue:[0,191,255],dodgerblue:[30,144,255],cornflowerblue:[100,149,237],royalblue:[65,105,225],blue:[0,0,255],mediumblue:[0,0,205],darkblue:[0,0,139],navy:[0,0,128],midnightblue:[25,25,112],cornsilk:[255,248,220],blanchedalmond:[255,235,205],bisque:[255,228,196],navajowhite:[255,222,173],wheat:[245,222,179],burlywood:[222,184,135],tan:[210,180,140],rosybrown:[188,143,143],sandybrown:[244,164,96],goldenrod:[218,165,32],darkgoldenrod:[184,134,11],Peru:[205,133,63],chocolate:[210,105,30],saddlebrown:[139,69,19],sienna:[160,82,45],brown:[165,42,42],maroon:[128,0,0],white:[255,255,255],snow:[255,250,250],honeydew:[240,255,240],mintcream:[245,255,250],azure:[240,255,255],aliceblue:[240,248,255],ghostwhite:[248,248,255],whitesmoke:[245,245,245],seashell:[255,245,238],beige:[245,245,220],oldlace:[253,245,230],floralwhite:[255,250,240],ivory:[255,255,240],antiquewhite:[250,235,215],linen:[250,240,230],lavenderblush:[255,240,245],mistyrose:[255,228,225],gainsboro:[220,220,220],lightgrey:[211,211,211],silver:[192,192,192],darkgray:[169,169,169],gray:[128,128,128],dimgray:[105,105,105],lightslategray:[119,136,153],slategray:[112,128,144],darkslategray:[47,79,79],black:[0,0,0]};for(t in n)e=n[t],l.X11[t]=l.newRGB(e[0]/255,e[1]/255,e[2]/255)}(),n.exports=l});