!function(t){function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var e={};a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="",a(a.s=0)}([function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(){var t=v.node().offsetWidth;y!==t&&(y=t,f.default.resize(),u.default.resize(),g.default.resize())}var i=e(1),l=n(i),o=e(3),d=n(o),s=e(4),f=n(s),c=e(5),u=n(c),p=e(6),g=n(p),v=d3.select("body"),y=0;!function(){v.classed("is-mobile",d.default.any()),window.addEventListener("resize",(0,l.default)(r,150)),f.default.init(),u.default.init(),g.default.init()}()},function(t,a,e){(function(a){function e(t,a,e){function r(a){var e=v,n=y;return v=y=void 0,L=a,m=t.apply(n,e)}function i(t){return L=t,x=setTimeout(f,a),k?r(t):m}function d(t){var e=t-A,n=t-L,r=a-e;return M?_(r,h-n):r}function s(t){var e=t-A,n=t-L;return void 0===A||e>=a||e<0||M&&n>=h}function f(){var t=w();if(s(t))return c(t);x=setTimeout(f,d(t))}function c(t){return x=void 0,O&&v?r(t):(v=y=void 0,m)}function u(){void 0!==x&&clearTimeout(x),L=0,v=A=y=x=void 0}function p(){return void 0===x?m:c(w())}function g(){var t=w(),e=s(t);if(v=arguments,y=this,A=t,e){if(void 0===x)return i(A);if(M)return x=setTimeout(f,a),r(A)}return void 0===x&&(x=setTimeout(f,a)),m}var v,y,h,m,x,A,L=0,k=!1,M=!1,O=!0;if("function"!=typeof t)throw new TypeError(o);return a=l(a)||0,n(e)&&(k=!!e.leading,M="maxWait"in e,h=M?b(l(e.maxWait)||0,a):h,O="trailing"in e?!!e.trailing:O),g.cancel=u,g.flush=p,g}function n(t){var a=typeof t;return!!t&&("object"==a||"function"==a)}function r(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||r(t)&&x.call(t)==s}function l(t){if("number"==typeof t)return t;if(i(t))return d;if(n(t)){var a="function"==typeof t.valueOf?t.valueOf():t;t=n(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var e=u.test(t);return e||p.test(t)?g(t.slice(2),e?2:8):c.test(t)?d:+t}var o="Expected a function",d=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,v="object"==typeof a&&a&&a.Object===Object&&a,y="object"==typeof self&&self&&self.Object===Object&&self,h=v||y||Function("return this")(),m=Object.prototype,x=m.toString,b=Math.max,_=Math.min,w=function(){return h.Date.now()};t.exports=e}).call(a,e(2))},function(t,a){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.android()||n.blackberry()||n.ios()||n.opera()||n.windows()}};a.default=n},function(t,a,e){"use strict";function n(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}function r(){var t=[],a=["5","7","10"],e="";c.forEach(function(n){e=n.variable_harness.split("_")[0];for(var r=0;r<3;r++){var i=[{category:"filler0",value:85-n["mean_"+a[r]]-n["sd_"+a[r]],mean:n["mean_"+a[r]],sd:n["sd_"+a[r]]},{category:"filler1",value:5,mean:n["mean_"+a[r]],sd:n["sd_"+a[r]]},{category:"sd1",value:n["sd_"+a[r]]},{category:"mean",value:1},{category:"sd2",value:n["sd_"+a[r]]},{category:"filler2",value:n["mean_"+a[r]]-n["sd_"+a[r]]},{category:"whitespace",value:270}];t.push(i)}});var n=d3.scaleOrdinal().domain([0,1,2,3,4,5,6]).range(["#f6f6f6","#f6f6f6","#cab2d6","#6a3d9a","#cab2d6","#f2e5f2","none"]),r=d3.scaleOrdinal().domain([0,1,2,3,4,5,6]).range(["#f6f6f6","#f6f6f6","#fdbf6f","#ff7f00","#fdbf6f","#ffedcc","none"]),i=f.append("svg").attr("width",320).attr("height",360).style("overflow","visible").append("g").attr("transform","translate(0,200)");i.append("text").at("class","title").at("x",0).at("y",-270).text(e),i.append("text").at("class","walking-grade").at("x",90).at("y",20).text("5%"),i.append("path").at("class","walking-grade").at("d","M62 8 L62 10 L 118 10 L118 8"),i.append("text").at("class","walking-grade").at("x",150).at("y",20).text("7.5%"),i.append("path").at("class","walking-grade").at("d","M122 8 L122 10 L 178 10 L178 8"),i.append("text").at("class","walking-grade").at("x",210).at("y",20).text("10%"),i.append("text").at("class","walking-grade").at("x",150).at("y",38).text("Walking Grade"),i.append("path").at("class","walking-grade").at("d","M182 8 L182 10 L 238 10 L238 8");var l=90;t.forEach(function(t,a){var e=t,o=d3.arc().innerRadius(l-30).outerRadius(l),d=d3.pie().value(function(t){return t.value}).sort(null);i.selectAll("path.arc").data(d(e)).enter().append("path").attr("d",o).attr("fill",function(t){return a%2==1?n(t.data.category):r(t.data.category)});i.selectAll("text.arc").data(d(e)).enter().append("text").at("class","donut-labels").attr("transform",function(t){var a=t.endAngle<Math.PI?t.startAngle/2+t.endAngle/2:t.startAngle/2+t.endAngle/2+Math.PI,e=o.centroid(t);return e[0]*=1,e[1]*=1,"translate("+e[0]+","+e[1]+") rotate("+180*a/Math.PI+")"}).attr("dy",".50em").style("text-anchor","end").html(function(t){if("filler1"==t.data.category)return t.data.mean+" &plusmn; "+t.data.sd}),l+=30})}function i(){}function l(){}function o(){l(),i()}function d(){var t,a=["measurements"].map(function(t){return"assets/data/"+t+".csv"});(t=d3).loadData.apply(t,n(a).concat([function(t,a){for(var e=0;e<10;e+=2)c=[a[0][e],a[0][e+1]],r();o()}]))}Object.defineProperty(a,"__esModule",{value:!0});var s=d3.select(".first"),f=s.select(".graphic"),c=null;a.default={init:d,resize:o}},function(t,a,e){"use strict";function n(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}function r(){var t=[],a=["5","7","10"],e="";c.forEach(function(n){e=n.variable_harness.split("_")[0];for(var r=0;r<3;r++){var i=[{category:"filler0",value:90},{category:"filler1",value:Math.abs(n["mean_"+a[r]])-n["sd_"+a[r]]},{category:"sd1",value:n["sd_"+a[r]]},{category:"mean",value:1},{category:"sd2",value:n["sd_"+a[r]]},{category:"filler2",value:5,mean:n["mean_"+a[r]],sd:n["sd_"+a[r]]},{category:"filler3",value:85-Math.abs(n["mean_"+a[r]])-n["sd_"+a[r]],mean:n["mean_"+a[r]],sd:n["sd_"+a[r]]},{category:"whitespace",value:180}];t.push(i)}});var n=d3.scaleOrdinal().domain([0,1,2,3,4,5,6,7]).range(["none","#f2e5f2","#cab2d6","#6a3d9a","#cab2d6","#f6f6f6","#f6f6f6","none"]),r=d3.scaleOrdinal().domain([0,1,2,3,4,5,6,7]).range(["none","#ffedcc","#fdbf6f","#ff7f00","#fdbf6f","#f6f6f6","#f6f6f6","none"]),i=f.append("svg").attr("width",320).attr("height",360).style("overflow","visible");i.append("text").at("class","title").at("x",0).at("y",20).text(e),i.append("text").at("class","walking-grade").at("x",90).at("y",60).text("5%"),i.append("path").at("class","walking-grade").at("d","M62 70 L62 68 L 118 68 L118 70"),i.append("text").at("class","walking-grade").at("x",150).at("y",60).text("7.5%"),i.append("path").at("class","walking-grade").at("d","M122 70 L122 68 L 178 68 L178 70"),i.append("text").at("class","walking-grade").at("x",210).at("y",60).text("10%"),i.append("text").at("class","walking-grade").at("x",150).at("y",45).text("Walking Grade"),i.append("path").at("class","walking-grade").at("d","M182 70 L182 68 L 238 68 L238 70");var l=90;t.forEach(function(t,a){var e=t,o=d3.arc().innerRadius(l-30).outerRadius(l),d=d3.pie().value(function(t){return t.value}).sort(null);i.selectAll("path.arc").data(d(e)).enter().append("path").attr("d",o).attr("fill",function(t){return a%2==1?n(t.data.category):r(t.data.category)}).at("transform","translate(0, 80)");i.selectAll("text.arc").data(d(e)).enter().append("text").at("class","donut-labels").attr("transform",function(t){var a=t.endAngle<Math.PI?t.startAngle/2+t.endAngle/2:t.startAngle/2+t.endAngle/2+Math.PI,e=o.centroid(t);return e[0]*=1,e[1]*=1,"translate("+e[0]+","+(e[1]+80)+") rotate("+180*a/Math.PI+")"}).attr("dy",".50em").style("text-anchor","start").html(function(t){if("filler2"==t.data.category)return t.data.mean+" &plusmn; "+t.data.sd}),l+=30})}function i(){}function l(){}function o(){l(),i()}function d(){var t,a=["measurements_negative"].map(function(t){return"assets/data/"+t+".csv"});(t=d3).loadData.apply(t,n(a).concat([function(t,a){for(var e=0;e<10;e+=2)c=[a[0][e],a[0][e+1]],r();o()}]))}Object.defineProperty(a,"__esModule",{value:!0});var s=d3.select(".first-neg"),f=s.select(".graphic"),c=null;a.default={init:d,resize:o}},function(t,a,e){"use strict";function n(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}function r(){var t=u[1].variable_harness.split("_")[0],a=(d3.scaleOrdinal().domain([0,1,2,3,4,5]).range(["#f6f6f6","#cab2d6","#6a3d9a","#cab2d6","#f2e5f2","none"]),d3.scaleOrdinal().domain([0,1,2,3,4,5]).range(["#f6f6f6","#fdbf6f","#ff7f00","#fdbf6f","#ffedcc","none"]),c.append("svg").attr("width",320).attr("height",360).style("overflow","visible"));a.append("text").at("class","title").at("x",0).at("y",10).text(t),a.append("text").at("class","walking-grade").at("x",-150).at("y",0).at("transform","rotate(-90)").text("("+u[1].metric+")"),a.append("text").at("class","walking-grade").at("x",90).at("y",270).text("5%"),a.append("path").at("class","walking-grade").at("d","M62 258 L62 260 L 118 260 L118 258"),a.append("text").at("class","walking-grade").at("x",150).at("y",270).text("7.5%"),a.append("path").at("class","walking-grade").at("d","M122 258 L122 260 L 178 260 L178 258"),a.append("text").at("class","walking-grade").at("x",210).at("y",270).text("10%"),a.append("text").at("class","walking-grade").at("x",150).at("y",288).text("Walking Grade"),a.append("path").at("class","walking-grade").at("d","M182 258 L182 260 L 238 260 L238 258"),u.forEach(function(t,e){for(var n=u[1],r=t.variable_harness.split("_")[1],i=d3.scaleLinear().domain([5,7,10]).range([90,150,210]),l=d3.scaleLinear().domain([0,Math.ceil(+d3.max([n.mean_5,n.mean_7,n.mean_10])+ +n.mean_10/10)]).range([210,0]),o=d3.axisLeft(l),d=(a.append("g").at("transform","translate(40,40)").call(o),["5","7","10"]),e=0;e<3;e++)a.append("rect").at("width",24).at("height",2*(210-l(t["sd_"+d[e]]))).at("x",function(){return"old"==r?i(d[e])-25:i(d[e])+1}).at("y",l(+t["mean_"+d[e]]+ +t["sd_"+d[e]])+40).style("fill",function(){return"old"==r?"#fdbf6f":"#cab2d6"}),a.append("rect").at("width",24).at("height",2).at("x",function(){return"old"==r?i(d[e])-25:i(d[e])+1}).at("y",l(t["mean_"+d[e]])-1+40).style("fill",function(){return"old"==r?"#ff7f00":"#6a3d9a"}),a.append("text").at("class","bar-labels").at("x",function(){return"old"==r?i(d[e])-25+12:i(d[e])+1+12}).at("y",function(){return"old"==r?l(+t["mean_"+d[e]]+ +t["sd_"+d[e]])+30:l(+t["mean_"+d[e]]-+t["sd_"+d[e]])+48}).html("<b>"+t["mean_"+d[e]]+" </b>&plusmn; "+t["sd_"+d[e]]).call(s,30)})}function i(){}function l(){}function o(){l(),i()}function d(){var t,a=["measurements_bars"].map(function(t){return"assets/data/"+t+".csv"});(t=d3).loadData.apply(t,n(a).concat([function(t,a){for(var e=0;e<20;e+=2)u=[a[0][e],a[0][e+1]],r();o()}]))}function s(t,a){t.each(function(){for(var t,e=d3.select(this),n=e.text().split(/\s+/).reverse(),r=[],i=0,l=e.attr("x"),o=e.attr("y"),d=e.text(null).append("tspan").attr("x",l).attr("y",o).attr("dy","0em");t=n.pop();)r.push(t),d.text(r.join(" ")),d.node().getComputedTextLength()>a&&(r.pop(),d.text(r.join(" ")),r=[t],d=e.append("tspan").attr("x",l).attr("y",o).attr("dy",1.1*++i+0+"em").text(t))})}Object.defineProperty(a,"__esModule",{value:!0});var f=d3.select(".second"),c=f.select(".graphic"),u=null;a.default={init:d,resize:o}}]);