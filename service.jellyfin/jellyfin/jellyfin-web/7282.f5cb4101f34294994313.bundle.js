(self.webpackChunk=self.webpackChunk||[]).push([[7282,7425],{27282:function(e,t,n){"use strict";n.r(t),n.d(t,{setTabs:function(){return h},selectedTabIndex:function(){return v},getTabsElement:function(){return f}}),n(61013),n(63238),n(61418),n(5769);var s,a,i,r=n(83094),o=n(47518),l=n(47005),c=(n(29366),n(78066),document.querySelector(".skinHeader"));function d(){a||(a=c.querySelector(".headerTabs"))}function u(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function b(e){function t(e){if(r.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function h(e,t,r,h,v,f,m){if(!e)return s&&(a||(a=c.querySelector(".headerTabs")),d(),document.body.classList.remove("withSectionTabs"),a.innerHTML="",a.classList.add("hide"),s=null),{tabsContainer:a,replaced:!1};d();var y=a;if(s||y.classList.remove("hide"),s!==e){var g=0,p='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+r().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></button>",g++,t})).join("")+"</div></div>";return y.innerHTML=p,window.CustomElements.upgradeSubtree(y),document.body.classList.add("withSectionTabs"),s=e,function(e,t,s){if(o.Z.touch){var a=function(n,s){b(s)&&e.contains(s)&&t.selectNext()},i=function(n,s){b(s)&&e.contains(s)&&t.selectPrevious()};n.e(5344).then(n.bind(n,85344)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);l.Events.on(n,"swipeleft",a),l.Events.on(n,"swiperight",i),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,i=y.querySelector('[is="emby-tabs"]')),i.addEventListener("beforetabchange",(function(e){var t=h();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var s=t[e.detail.selectedTabIndex];s&&s.classList.add("is-active")})),v&&i.addEventListener("beforetabchange",v),f&&i.addEventListener("tabchange",f),!1!==m&&(i.selectedIndex?i.selectedIndex(t):(i.readySelectedIndex=t,i.addEventListener("ready",u))),{tabsContainer:y,tabs:y.querySelector('[is="emby-tabs"]'),replaced:!0}}return i||(i=y.querySelector('[is="emby-tabs"]')),i.selectedIndex(t),s=e,{tabsContainer:y,tabs:i,replaced:!1}}function v(e){i||(i=a.querySelector('[is="emby-tabs"]')),null!=e?i.selectedIndex(e):i.triggerTabChange()}function f(){return document.querySelector(".tabs-viewmenubar")}},29366:function(e,t,n){"use strict";n(32081),n(67752);var s=n(83094),a=n(13800),i=n(47518),r=n(27515),o=n(1892),l=n.n(o),c=n(90685),d=(l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,n(2553),Object.create(HTMLDivElement.prototype)),u="emby-tab-button",b=u+"-active";function h(e){e.classList.add(b)}function v(e,t,n){var s;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:n}})),null!=n&&n!==t&&(s=null)&&s.classList.remove("is-active")}function f(e){var t=this,n=t.querySelector("."+b),a=s.ZP.parentWithClass(e.target,u);if(a&&a!==n){n&&n.classList.remove(b);var i=n?parseInt(n.getAttribute("data-index")):null;h(a);var r=parseInt(a.getAttribute("data-index"));v(t,r,i),setTimeout((function(){t.selectedTabIndex=r,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:r,previousIndex:i}}))}),120),t.scroller&&t.scroller.toCenter(a,!1)}}function m(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function y(e){return e.querySelector("."+b)}function g(e,t){for(var n=e[t];n;){if(n.classList.contains(u)&&!n.classList.contains("hide"))return n;n=n[t]}return null}d.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),s.ZP.addEventListener(this,"click",f,{passive:!0}),s.ZP.addEventListener(this,"focusout",m))},d.focus=function(){var e=this.querySelector("."+b),t=this.querySelector(".lastFocused");t?r.Z.focus(t):e?r.Z.focus(e):r.Z.autoFocus(this)},d.refresh=function(){this.scroller&&this.scroller.reload()},d.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new a.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!i.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+b),t=e?parseInt(e.getAttribute("data-index")):parseInt(this.getAttribute("data-index")||"0");if(-1!==t){this.selectedTabIndex=t;var n=this.querySelectorAll("."+u)[t];n&&h(n)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},d.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),s.ZP.removeEventListener(this,"click",f,{passive:!0})},d.selectedIndex=function(e,t){var n=this;if(null==e)return n.selectedTabIndex||0;var s=n.selectedIndex();n.selectedTabIndex=e;var a=n.querySelectorAll("."+u);if(s===e||!1===t){v(n,e,s),n.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var i=a[s];h(a[e]),s!==e&&i&&i.classList.remove(b)}else f.call(n,{target:a[e]})},d.selectNext=function(){var e=g(y(this),"nextSibling");e&&f.call(this,{target:e})},d.selectPrevious=function(){var e=g(y(this),"previousSibling");e&&f.call(this,{target:e})},d.triggerBeforeTabChange=function(e){v(this,this.selectedIndex())},d.triggerTabChange=function(e){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},d.setTabEnabled=function(e,t){var n=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?n.classList.remove("hide"):n.classList.remove("add")},document.registerElement("emby-tabs",{prototype:d,extends:"div"})},90685:function(e,t,n){"use strict";var s=n(93476),a=n.n(s)()((function(e){return e[1]}));a.push([e.id,".emby-tab-button{box-sizing:border-box;background:transparent;box-shadow:none;cursor:pointer;outline:none;width:auto;font-family:inherit;font-size:inherit;display:inline-block;vertical-align:middle;-webkit-flex-shrink:0;flex-shrink:0;margin:0;padding:1.5em;position:relative;height:auto;min-width:0;line-height:1.25;border-radius:0;overflow:hidden;font-weight:600}.emby-tab-button.show-focus:focus{-webkit-transform:scale(1.3)!important;transform:scale(1.3)!important;background:0!important}.emby-tabs-slider{position:relative}.tabContent:not(.is-active){display:none}",""]),t.Z=a}}]);