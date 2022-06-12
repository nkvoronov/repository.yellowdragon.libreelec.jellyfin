"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9165],{69165:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}}),i(5769),i(61013),i(27471),i(63238),i(61418),i(17460),i(14078),i(52077),i(72482),i(48410),i(99785);var a=i(65009),s=i.n(a),l=i(83094),n=i(27515),c=i(90914),r=i(12392),o=i(78695),d=i(44614),b=i(28978),u=(i(45368),i(83225),i(78066),i(21865),i(20716),i(85427),i(6626),i(15359),i(53913));function p(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return e.preventDefault(),!1}function v(e,t,i){!function(e,t,a,l,n){var c=e.querySelector(".genreFilters");l.length?c.classList.remove("hide"):c.classList.add("hide");var r="";r+=l.map((function(e){var t,a,l="";return l+="<label>",l+='<input is="emby-checkbox" type="checkbox"'+(t=e,(-1!==((a=-1===(i.settings.GenreIds||"").indexOf("|")?",":"|")+(i.settings.GenreIds||"")+a).indexOf(a+t.Id+a)?" checked":"")+' data-filter="')+e.Id+'" class="chkGenreFilter"/>',(l+="<span>"+s()(e.Name)+"</span>")+"</label>"})).join(""),c.querySelector(".filterOptions").innerHTML=r}(e,0,0,t.Genres)}function f(e,t,i){var a=i.checked;a=a||null,b.setFilter(t,a)}function m(e,t){for(var i=l.ZP.parentWithClass(e,"checkboxList-verticalwrap"),a=n.Z.getFocusableElements(i),s=-1,c=0,r=a.length;c<r;c++)if(a[c]===e){s=c;break}s+=t,s=Math.min(a.length-1,s);var o=a[s=Math.max(0,s)];o&&n.Z.focus(o)}function g(e,t,a){Promise.resolve().then(i.bind(i,74227)).then((function(i){var s=a?"on":"off";i.centerFocus[s](e,t)}))}function k(e){switch(e.detail.command){case"left":m(e.target,-1),e.preventDefault();break;case"right":m(e.target,1),e.preventDefault()}}function y(e,t){for(var i=e.querySelectorAll(".checkboxList-verticalwrap"),a=0,s=i.length;a<s;a++)t?r.default.on(i[a],k):r.default.off(i[a],k)}var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"show",value:function(e){return new Promise((function(t){var i={removeOnClose:!0,scrollY:!1};o.Z.tv?i.size="fullscreen":i.size="small";var a=c.default.createDialog(i);a.classList.add("formDialog");var s="";s+='<div class="formDialogHeader">',s+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(d.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),s+='<h3 class="formDialogHeaderTitle">${Filters}</h3>',s+="</div>",s+='<div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding basicFilterSection focuscontainer-x" style="margin-top:2em"> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="IsUnplayed"> <input type="checkbox" is="emby-checkbox"/> <span>${Unplayed}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsPlayed"> <input type="checkbox" is="emby-checkbox"/> <span>${Played}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsFavorite"> <input type="checkbox" is="emby-checkbox"/> <span>${Favorite}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsResumable"> <input type="checkbox" is="emby-checkbox"/> <span>${ContinueWatching}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="SeriesStatus"> <h2 class="checkboxListLabel">${HeaderSeriesStatus}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Continuing"/> <span>${Continuing}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Ended"/> <span>${Ended}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding hide genreFilters focuscontainer-x"> <h2 class="checkboxListLabel">${Genres}</h2> <div class="checkboxList checkboxList-verticalwrap filterOptions"> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="VideoType"> <h2 class="checkboxListLabel">${HeaderVideoType}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="IsHD"/> <span>HD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="Is4K"/> <span>4K</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="IsSD"/> <span>SD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="Is3D"/> <span>3D</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Bluray"/> <span>Blu-ray</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Dvd"/> <span>DVD</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding featureSection hide focuscontainer-x"> <h2 class="checkboxListLabel">${Features}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="HasSubtitles"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Subtitles}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasTrailer"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Trailers}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasSpecialFeature"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Extras}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeSong"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${ThemeSongs}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeVideo"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${ThemeVideos}</span> </label> </div> </div> </form> </div> </div> ',a.innerHTML=d.ZP.translateHtml(s,"core");for(var l,n=a.querySelectorAll(".viewSetting"),r=0,p=n.length;r<p;r++)-1===e.visibleSettings.indexOf(n[r].getAttribute("data-settingname"))?n[r].classList.add("hide"):n[r].classList.remove("hide");!function(e,t){e.querySelector("form").addEventListener("submit",h);var i,a,s=e.querySelectorAll(".simpleFilter");for(i=0,a=s.length;i<a;i++)"INPUT"===s[i].tagName?s[i].checked=t[s[i].getAttribute("data-settingname")]||!1:s[i].querySelector("input").checked=t[s[i].getAttribute("data-settingname")]||!1;var l=t.VideoTypes?t.VideoTypes.split(","):[];for(i=0,a=(s=e.querySelectorAll(".chkVideoTypeFilter")).length;i<a;i++)s[i].checked=-1!==l.indexOf(s[i].getAttribute("data-filter"));var n=t.SeriesStatus?t.SeriesStatus.split(","):[];for(i=0,a=(s=e.querySelectorAll(".chkSeriesStatus")).length;i<a;i++)s[i].checked=-1!==n.indexOf(s[i].getAttribute("data-filter"));e.querySelector(".basicFilterSection .viewSetting:not(.hide)")?e.querySelector(".basicFilterSection").classList.remove("hide"):e.querySelector(".basicFilterSection").classList.add("hide"),e.querySelector(".featureSection .viewSetting:not(.hide)")?e.querySelector(".featureSection").classList.remove("hide"):e.querySelector(".featureSection").classList.add("hide")}(a,e.settings),function(e,t){var i=u.Z.getApiClient(t.serverId),a=Object.assign(t.filterMenuOptions,{UserId:i.getCurrentUserId(),ParentId:t.parentId,IncludeItemTypes:t.itemTypes.join(",")});i.getFilters(a).then((function(i){v(e,i,t)}))}(a,e),y(a,!0),a.querySelector(".btnCancel").addEventListener("click",(function(){c.default.close(a)})),o.Z.tv&&g(a.querySelector(".formDialogContent"),!1,!0),a.querySelector("form").addEventListener("change",(function(){l=!0}),!0),c.default.open(a).then((function(){return y(a,!1),o.Z.tv&&g(a.querySelector(".formDialogContent"),!1,!1),l?(function(e,t,i){for(var a=e.querySelectorAll(".simpleFilter"),s=0,l=a.length;s<l;s++)"INPUT"===a[s].tagName?f(0,i+"-filter-"+a[s].getAttribute("data-settingname"),a[s]):f(0,i+"-filter-"+a[s].getAttribute("data-settingname"),a[s].querySelector("input"));for(var n=[],c=0,r=(a=e.querySelectorAll(".chkVideoTypeFilter")).length;c<r;c++)a[c].checked&&n.push(a[c].getAttribute("data-filter"));b.setFilter(i+"-filter-VideoTypes",n.join(","));for(var o=[],d=0,u=(a=e.querySelectorAll(".chkSeriesStatus")).length;d<u;d++)a[d].checked&&o.push(a[d].getAttribute("data-filter"));for(var p=[],h=0,v=(a=e.querySelectorAll(".chkGenreFilter")).length;h<v;h++)a[h].checked&&p.push(a[h].getAttribute("data-filter"));b.setFilter(i+"-filter-GenreIds",p.join(","))}(a,e.settings,e.settingsKey),t()):t()}))}))}}])&&p(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);