(self.webpackChunk=self.webpackChunk||[]).push([[9322],{99531:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r(15610),r(72410),r(63238),r(40895),r(17460),r(72482);var n=r(78695),a=r(6594),i=r(2587),o=r(61097),s=r(37262),l=r(53754),u=r(6383);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r){function d(){var e=y(),r=S[e];return r||((r=S[e]={query:{SortBy:"Random",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,EnableTotalRecordCount:!1},view:"Poster"}).query.ParentId=t.topParentId,i.ZP.loadSavedQueryValues(e,r.query)),r}function m(){return d().query}function y(){return i.ZP.getSavedQueryKey("seriesgenres")}function b(){return!n.Z.desktop}function f(){return b()?"overflowBackdrop":"backdrop"}function h(){return b()?"overflowPortrait":"portrait"}function p(e){var n=e.target,a=n.getAttribute("data-id"),i=g.getCurrentViewStyle(),s="Thumb"==i||"ThumbCard"==i?5:9;b()&&(s=10);var l={SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Thumb"==i||"ThumbCard"==i?"Primary,Backdrop,Thumb":"Primary",Limit:s,GenreIds:a,EnableTotalRecordCount:!1,ParentId:t.topParentId};ApiClient.getItems(ApiClient.getCurrentUserId(),l).then((function(e){"Thumb"==i?o.default.buildCards(e.Items,{itemsContainer:n,shape:f(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!1}):"ThumbCard"==i?o.default.buildCards(e.Items,{itemsContainer:n,shape:f(),preferThumb:!0,showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"PosterCard"==i?o.default.buildCards(e.Items,{itemsContainer:n,shape:h(),showTitle:!0,scalable:!0,centerText:!1,cardLayout:!0,showYear:!0}):"Poster"==i&&o.default.buildCards(e.Items,{itemsContainer:n,shape:h(),scalable:!0,showTitle:!0,centerText:!0,showYear:!0,overlayMoreButton:!0,allowBottomPadding:!1}),e.Items.length>=l.Limit&&r.querySelector(".btnMoreFromGenre"+a+" .material-icons").classList.remove("hide")}))}var v,g=this,S={};g.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},g.getCurrentViewStyle=function(){return d().view},g.setCurrentViewStyle=function(e){d().view=e,i.ZP.saveViewSetting(y(),e),g.preRender(),g.renderTab()},g.enableViewSelection=!0,g.preRender=function(){v=function(){a.ZP.show();var e=m();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},g.renderTab=function(){!function(e,r){var o=m();r.then((function(r){var d,m=e.querySelector("#items"),f="",h=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}(r.Items);try{for(h.s();!(d=h.n()).done;){var v=d.value;if(f+='<div class="verticalSection">',f+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',f+='<a is="emby-linkbutton" href="'+u.appRouter.getRouteUrl(v,{context:"tvshows",parentId:t.topParentId})+'" class="more button-flat button-flat-mini sectionTitleTextButton btnMoreFromGenre'+v.Id+'">',f+='<h2 class="sectionTitle sectionTitle-cards">',f+=v.Name,f+="</h2>",f+='<span class="material-icons hide chevron_right"></span>',f+="</a>",f+="</div>",b()){var g="scrollX hiddenScrollX";n.Z.tv&&(g+="smoothScrollX padded-top-focusscale padded-bottom-focusscale"),f+='<div is="emby-itemscontainer" class="itemsContainer '+g+' lazy padded-left padded-right" data-id="'+v.Id+'">'}else f+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap lazy padded-left padded-right" data-id="'+v.Id+'">';f+="</div>",f+="</div>"}}catch(e){h.e(e)}finally{h.f()}r.Items.length||(f="",f+='<div class="noItemsMessage centerMessage">',f+="<h1>"+l.ZP.translate("MessageNothingHere")+"</h1>",f+="<p>"+l.ZP.translate("MessageNoGenresAvailable")+"</p>",f+="</div>"),m.innerHTML=f,s.ZP.lazyChildren(m,p),i.ZP.saveQueryValues(y(),o),a.ZP.hide()}))}(r,v)}}r(78066)},2587:function(e,t,r){"use strict";r(5769),r(61013),r(48410),r(63238),r(61418),r(17460),r(911),r(72482),r(14078);var n=r(28978),a=r(53754);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=n.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),n.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,32465)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+r,n),s=r<n;return i+='<div class="listPaging">',s&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,1115)),r.e(1674).then(r.bind(r,21674))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var s=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});s.classList.add("ui-body-a"),s.classList.add("background-theme-a"),s.classList.add("formDialog");var l,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",l=0,u=e.items.length;l<u;l++){var m=e.items[l],y=m.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==y?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+y+'" class="menuSortBy" '+c+" /><span>"+m.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",s.innerHTML=d,r.open(s);var b=s.querySelectorAll(".menuSortBy");for(l=0,u=b.length;l<u;l++)b[l].addEventListener("change",n);var f=s.querySelectorAll(".menuSortOrder");for(l=0,u=f.length;l<u;l++)f[l].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);