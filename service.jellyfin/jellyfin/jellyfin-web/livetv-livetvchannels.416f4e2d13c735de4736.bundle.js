(self.webpackChunk=self.webpackChunk||[]).push([[7031],{67097:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}}),r(63238),r(61418),r(5769);var n=r(61097),a=r(17146),i=r(2587),o=r(6594),l=r(47005),s=r(28978);function u(t,e,u){function c(){return(y||(y={query:{StartIndex:0,Fields:"PrimaryImageAspectRatio"}}),s.libraryPageSize()>0&&(y.query.Limit=s.libraryPageSize()),y).query}function d(e,l){o.ZP.show(),b=!0;var u=c(),y=ApiClient;u.UserId=y.getCurrentUserId(),y.getLiveTvChannels(u).then((function(l){(function(t,e){function r(){b||(s.libraryPageSize()>0&&(l.StartIndex+=l.Limit),d(t))}function o(){b||(s.libraryPageSize()>0&&(l.StartIndex=Math.max(0,l.StartIndex-l.Limit)),d(t))}var l=c();t.querySelector(".paging").innerHTML=i.ZP.getQueryPagingHtml({startIndex:l.StartIndex,limit:l.Limit,totalRecordCount:e.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,filterButton:!1});var u,y,v,m,h=(u=e.Items,n.default.getCardsHtml({items:u,shape:"square",showTitle:!0,lazy:!0,cardLayout:!0,showDetailsMenu:!0,showCurrentProgram:!0,showCurrentProgramTime:!0})),f=t.querySelector("#items");for(f.innerHTML=h,a.default.lazyChildren(f),y=0,v=(m=t.querySelectorAll(".btnNextPage")).length;y<v;y++)m[y].addEventListener("click",r);for(y=0,v=(m=t.querySelectorAll(".btnPreviousPage")).length;y<v;y++)m[y].addEventListener("click",o)})(e,l),o.ZP.hide(),b=!1,Promise.resolve().then(r.bind(r,6610)).then((function(e){e.default.autoFocus(t)}))}))}var y,b=!1;u.querySelector(".btnFilter").addEventListener("click",(function(){var t;t=u,r.e(3201).then(r.bind(r,83201)).then((function(e){var r=new(0,e.default)({query:c(),mode:"livetvchannels",serverId:ApiClient.serverId()});l.Events.on(r,"filterchange",(function(){d(t)})),r.show()}))})),this.renderTab=function(){d(u)}}r(51547)},2587:function(t,e,r){"use strict";r(5769),r(61013),r(48410),r(63238),r(61418),r(17460),r(911),r(72482),r(14078);var n=r(28978),a=r(53754);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o={getSavedQueryKey:function(t){return window.location.href.split("#")[0]+(t||"")},loadSavedQueryValues:function(t,e){var r=n.get(t);return r?(r=JSON.parse(r),Object.assign(e,r)):e},saveQueryValues:function(t,e){var r={};e.SortBy&&(r.SortBy=e.SortBy),e.SortOrder&&(r.SortOrder=e.SortOrder),n.set(t,JSON.stringify(r))},saveViewSetting:function(t,e){n.set(t+"-_view",e)},getSavedView:function(t){return n.get(t+"-_view")},showLayoutMenu:function(t,e,n){var i=!0;n||(i=!1,n=(n=t.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(t){return{name:a.ZP.translate(t),id:t,selected:e==t}}));Promise.resolve().then(r.bind(r,32465)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),i||window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,n=t.totalRecordCount,i="",o=Math.min(e+r,n),l=r<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?e+1:0,o,n),i+="</span>"),(l||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=n?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,1115)),r.e(1674).then(r.bind(r,21674))]).then((function(e){var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function n(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function o(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=t.items.length;s<u;s++){var y=t.items[s],b=y.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==b?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+b+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var v=l.querySelectorAll(".menuSortBy");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",n);var m=l.querySelectorAll(".menuSortOrder");for(s=0,u=m.length;s<u;s++)m[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,e.ZP=o}}]);