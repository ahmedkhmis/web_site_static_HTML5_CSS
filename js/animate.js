
/* ===========METHODES PUBLIQUES : ne rien changer !===cross-browser (nov2011): Chrome, FireFox, Safari, Opera ...et InternetExplorer >v.5=========== */

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8 m(a,b){b=(b==1)?0.n:b;a.5.h=b;a.5.o=\'p(h=\'+b*q+\')\';a.5.s=b;a.5.t=b}8 u(a){d(a.4(0,1)==\'#\'){i c=a.v>=7?2:1;i r,g,b;r=a.4(1,c);g=a.4(1+c,c);b=a.4(1+c*2,c);d(c===1){r=r+r;g=g+g;b=b+b}r=e(r,f);g=e(g,f);b=e(b,f);6\'j(\'+r+\',\'+g+\',\'+b+\')\'}k{6 l}}8 w(a){a+=\'\';d(a.4(0,3)==\'j\'){6 a.x(/[0-9]+/y)}k{6 l}}',35,35,'||||substr|style|return||function|||||if|parseInt|16||opacity|var|rgb|else|false|setOpacity|99999|filter|alpha|100||MozOpacity|KhtmlOpacity|sharp2rgb|length|rgbString2Array|match|gi'.split('|'),0,{}))


function transfer(a,b){var c,transfered={};for(c in b){transfered[c]=b[c]}for(c in a){transfered[c]=a[c]}return transfered}


function easeInOut(a,b,c,d,e){var f=b-a;var g=a+(Math.pow(((1/c)*d),e)*f);return g}


function Animate(d,e) 
{this.defSettings={"elem":window.document.body,"from":{},"to":{},"restart":false,"ease":1,"duration":1000,"frameRate":30,"onFinish":false};
this.defSettings=transfer(d,this.defSettings);
this.guessProp=function(a){var b=this.options.elem;
switch(a){case'width':return b.offsetWidth+'px';case'height':return b.offsetHeight+'px';
case'top':return(typeof(getPos)=='undefined')?'0px':getPos(b).t+'px';
case'bottom':return(typeof(getPos)=='undefined')?'0px':getPos(b).b+'px';
case'left':return(typeof(getPos)=='undefined')?'0px':getPos(b).l+'px';
case'right':return(typeof(getPos)=='undefined')?'0px':getPos(b).r+'px';
case'borderWidth':return'1px';case'borderColor':return'rgb(0,0,0)';
case'backgroundColor':return'rgb(255,255,255)';
case'color':return'rgb(0,0,0)';
case'opacity':return 1;
default:return 0}return false};
this.readProp=function(a){var b={};
b.asked=a+'';b.unit=b.asked.match(/px|em|%/);
b.clean=parseFloat(b.asked);
var c=b.asked.match(/rgb|(#[a-f0-9]{3,6})/i);
if(typeof rgbString2Array=='function'&&typeof sharp2rgb=='function'&&c){b.clean=b.asked;
b.rgb=rgbString2Array(sharp2rgb(b.asked));
if(!b.rgb){b.rgb=rgbString2Array(b.asked)}}return b};
this.readFromTo=function(a){if(!a){return false}var i,lg,tmp,prop,eachDeclared={};
if(typeof a=='string'){a=a.trim();
var b=a.split(/;/);
lg=b.length;for(i=0;i<lg;i++){if(!b[i]){b.splice(i,1)}}lg=b.length;
a={};for(i=0;i<lg;i++){tmp=b[i].split(/:/);prop=tmp[0].trim();
a[prop]=tmp[1].trim()}}for(prop in a){eachDeclared[prop]=this.readProp(a[prop]+'')}return eachDeclared};
this.go=function(a){var b,prop;this.options=transfer(a?a:{},this.defSettings);
var c=this.options.elem.style;
this.totalFrames=Math.ceil(this.options.duration/1000*this.options.frameRate);
if(this.options.restart){this.frameNb=0}
else
{this.frameNb=this.framesLeft?this.framesLeft:0}this.from=this.readFromTo(this.options.from?this.options.from:this.defSettings.from);
this.to=this.readFromTo(this.options.to?this.options.to:this.defSettings.to);
for(prop in this.to)
{if(!this.from[prop])
{if(c[prop]||c[prop]===0)
{this.from[prop]=this.readProp(c[prop])}if(!this.from[prop]){this.from[prop]=this.readProp(this.guessProp(prop))}}}for(prop in this.from){c[prop]=this.from[prop].clean}
this.next()};
this.frame=function(){var a=this.options.elem.style;
var c,coulFrom,coulTo,prop;for(prop in this.to)
{if(this.to[prop].rgb){coulTo=this.to[prop].rgb;coulFrom=this.from[prop].rgb;
var r=easeInOut(parseInt(coulFrom[0],10),parseInt(coulTo[0],10),this.totalFrames,this.frameNb,this.options.ease);
var g=easeInOut(parseInt(coulFrom[1],10),parseInt(coulTo[1],10),this.totalFrames,this.frameNb,this.options.ease);
var b=easeInOut(parseInt(coulFrom[2],10),parseInt(coulTo[2],10),this.totalFrames,this.frameNb,this.options.ease);
a[prop]='rgb('+Math.round(r)+','+Math.round(g)+','+Math.round(b)+')'}
else
{c=easeInOut(this.from[prop].clean,this.to[prop].clean,this.totalFrames,this.frameNb,this.options.ease);
if(this.to[prop].units==='px'){c=parseInt(c,10)}a[prop]=c+this.to[prop].unit;
if(prop==='opacity'&&typeof setOpacity=='function'){setOpacity(this.options.elem,c)}}}
if(this.frameNb===this.totalFrames){if(typeof this.options.onFinish=='function')
{setTimeout(this.options.onFinish,1)}}
else
{this.frameNb++;
this.framesLeft=this.totalFrames-this.frameNb;this.next()}};
this.next=function(){this.prog=setTimeout(function(){f.frame()},1000/this.options.frameRate)};
this.pause=function(){clearTimeout(this.prog)};
var f=this;
if(e){this.go(typeof e=='object'?e:{})}}


function setOpacity(elem,value) 
{value=(value==1)?0.99999:value;elem.style.opacity=value;
elem.style.filter='alpha(opacity='+value*100+')';
elem.style.MozOpacity=value;elem.style.KhtmlOpacity=value}


function fade(elem,to,from,options)
{this.elem=elem||document.body;this.to=to!==undefined?to:1;
var st=this.elem.style;
this.from=(from===undefined?(!st.opacity&&st.opacity!==0?(this.to>0?0:1):parseFloat(st.opacity)):from);options=options||{};
this.duration=options.duration||500;this.frameRate=options.frameRate||30;this.onFinish=options.onFinish;
this.totalFrames=Math.ceil(this.duration/1000*this.frameRate);
this.perFrame=(this.to-this.from)/this.totalFrames;this.frameNb=0;
var self=this;
this.next=function()
{this.prog=setTimeout(function()
{self.frame()},1000/this.frameRate)};
this.frame=function()
{setOpacity(this.elem,this.from+this.perFrame*this.frameNb);
if(this.frameNb===this.totalFrames)
{setOpacity(this.elem,this.to);
if(typeof this.onFinish=='function')
{setTimeout(this.onFinish,1)}}else{this.frameNb++;this.next()}};
this.next()}


function byId(id){return document.getElementById(id)}


/* ===========METHODES PUBLIQUES : fin=========== */



/* ===========CONFIGURATIONS PRIVEES (mes animations) : elles figurent dans un fichier .js annexe afin de pas risquer de corrompre accidentellement les methodes publiques  =========== */


