(self.webpackChunk=self.webpackChunk||[]).push([[205],{79293:function(e,t,r){"use strict";r.r(t),r(15610),r(5769),r(72410),r(63238),r(61418),r(40895),r(17460),r(14078);var o=r(6383),n=r(61097),a=r(83094),i=r(53754),l=r(38102),s=r(78695),c=r(27515),u=(r(51547),r(48366),r(53913));function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function m(e){return function(){var t=this.apiClient,r={SortBy:(e.types,"SeriesName,SortName"),SortOrder:"Ascending",Filters:"IsFavorite",Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",CollapseBoxSetItems:!1,ExcludeLocationTypes:"Virtual",EnableTotalRecordCount:!1,Limit:20},o=t.getCurrentUserId();return"MusicArtist"===e.types?t.getArtists(o,r):"Person"===e.types?t.getPeople(o,r):(r.IncludeItemTypes=e.types,t.getItems(o,r))}}function f(e,t){return o.appRouter.getRouteUrl("list",{serverId:t,itemTypes:e.types,isFavorite:!0})}function y(e){return function(t){l.M.preferVisualCards&&e.autoCardLayout&&e.showTitle;var r=this.apiClient.serverId(),o=s.Z.tv?[{name:i.ZP.translate("All"),id:"more",icon:"favorite",routeUrl:f(e,r)}]:null,a=0;return e.showTitle&&a++,e.showYear&&a++,e.showParentTitle&&a++,n.default.getCardsHtml({items:t,preferThumb:e.preferThumb,shape:e.shape,centerText:e.centerText&&!0,overlayText:!1!==e.overlayText,showTitle:e.showTitle,showYear:e.showYear,showParentTitle:e.showParentTitle,scalable:!0,coverImage:e.coverImage,overlayPlayButton:e.overlayPlayButton,overlayMoreButton:e.overlayMoreButton&&!0,action:e.action,allowBottomPadding:!1,cardLayout:false,leadingButtons:o,lines:a})}}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.params=r,this.apiClient=u.Z.currentApiClient(),this.sectionsContainer=t.querySelector(".sections"),function(e,t,r){var o,n=[{name:"Movies",types:"Movie",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Shows",types:"Series",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Episodes",types:"Episode",shape:"overflowBackdrop",preferThumb:!1,showTitle:!0,showParentTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Videos",types:"Video",shape:"overflowBackdrop",preferThumb:!0,showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Collections",types:"BoxSet",shape:"overflowPortrait",showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Playlists",types:"Playlist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"People",types:"Person",shape:"overflowPortrait",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Artists",types:"MusicArtist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Albums",types:"MusicAlbum",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Songs",types:"Audio",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayMoreButton:!0,action:"instantmix",coverImage:!0},{name:"Books",types:"Book",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0}],l="",c=v(n);try{for(c.s();!(o=c.n()).done;){var u=o.value,h="verticalSection";u.showTitle||(h+=" verticalSection-extrabottompadding"),l+='<div class="'+h+' hide">',l+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',s.Z.tv?l+='<h2 class="sectionTitle sectionTitle-cards">'+i.ZP.translate(u.name)+"</h2>":(l+='<a is="emby-linkbutton" href="'+f(u,r.serverId())+'" class="more button-flat button-flat-mini sectionTitleTextButton">',l+='<h2 class="sectionTitle sectionTitle-cards">',l+=i.ZP.translate(u.name),l+="</h2>",l+='<span class="material-icons chevron_right"></span>',l+="</a>"),l+="</div>",l+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"><div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="markfavorite"></div></div>',l+="</div>"}}catch(e){c.e(e)}finally{c.f()}t.innerHTML=l,window.CustomElements.upgradeSubtree(t);for(var d=t.querySelectorAll(".itemsContainer"),p=0,g=d.length;p<g;p++){var T=d[p];T.fetchData=m(n[p]).bind(e),T.getItemsHtml=y(n[p]).bind(e),T.parentContainer=a.ZP.parentWithClass(T,"verticalSection")}}(this,this.sectionsContainer,this.apiClient)}var t,r;return t=e,(r=[{key:"onResume",value:function(e){var t,r=(this.apiClient,[]),o=this.view,n=v(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(n.s();!(t=n.n()).done;){var a=t.value;r.push(a.resume(e))}}catch(e){n.e(e)}finally{n.f()}Promise.all(r).then((function(){e.autoFocus&&c.Z.autoFocus(o)}))}},{key:"onPause",value:function(){var e,t=v(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(t.s();!(e=t.n()).done;)e.value.pause()}catch(e){t.e(e)}finally{t.f()}}},{key:"destroy",value:function(){this.view=null,this.params=null,this.apiClient=null;var e,t=v(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(t.s();!(e=t.n()).done;){var r=e.value;r.fetchData=null,r.getItemsHtml=null,r.parentContainer=null}}catch(e){t.e(e)}finally{t.f()}this.sectionsContainer=null}}])&&h(t.prototype,r),e}();t.default=p},48366:function(e,t,r){"use strict";r(63238),r(61418),r(5769);var o=r(13800),n=r(83094),a=r(78695),i=r(12392),l=r(27515),s=r(47518),c=(r(67752),r(1892)),u=r.n(c),h=r(75869),v=(u()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,Object.create(HTMLDivElement.prototype));function d(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}v.createdCallback=function(){this.classList.add("emby-scroller")},v.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},v.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},v.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},v.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},v.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},v.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},v.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},v.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},v.addScrollEventListener=function(e,t){this.scroller&&n.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},v.removeScrollEventListener=function(e,t){this.scroller&&n.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},v.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.ZP.on(this,d);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:u||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:u||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!u,allowNativeScroll:!u,forceHideScrollbars:u,requireAnimation:u&&s.Z.edge};this.scroller=new o.Z(this,h),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,n.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),u&&function(e){r.e(6229).then(r.bind(r,6229)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},v.pause=function(){var e=this.headroom;e&&e.pause()},v.resume=function(){var e=this.headroom;e&&e.resume()},v.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.ZP.off(this,d);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:v,extends:"div"})},75869:function(e,t,r){"use strict";var o=r(93476),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:3.3%;margin-right:3.3%}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{padding-left:3.3%;padding-right:3.3%;margin-left:0;margin-right:0}",""]),t.Z=n}}]);