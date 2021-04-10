(self.webpackChunk=self.webpackChunk||[]).push([[1372,6560,7046],{27046:function(e,t,n){"use strict";n.r(t),n.d(t,{getCommands:function(){return m},show:function(){return g}}),n(23938),n(63238),n(61418),n(911),n(5769);var a=n(47518),i=n(53754),r=n(32465),o=n(38102),s=n(6383),l=n(71616),u=n(53218),d=n(53913),c=n(38440);function m(e){var t=e.item,n=e.user,r=u.O.canPlay(t),s=(a.Z.operaTv||a.Z.web0s)&&!n.Policy.IsAdministrator,d=[];r&&"Photo"!==t.MediaType&&(!1!==e.play&&d.push({name:i.ZP.translate("Play"),id:"resume",icon:"play_arrow"}),e.playAllFromHere&&"Program"!==t.Type&&"TvChannel"!==t.Type&&d.push({name:i.ZP.translate("PlayAllFromHere"),id:"playallfromhere",icon:"play_arrow"})),null!==u.O.getCurrentPlayer()&&(e.stopPlayback&&d.push({name:i.ZP.translate("StopPlayback"),id:"stopPlayback",icon:"stop"}),e.clearQueue&&d.push({name:i.ZP.translate("ClearQueue"),id:"clearQueue",icon:"clear_all"})),u.O.canQueue(t)&&(!1!==e.queue&&d.push({name:i.ZP.translate("AddToPlayQueue"),id:"queue",icon:"playlist_add"}),!1!==e.queue&&d.push({name:i.ZP.translate("PlayNext"),id:"queuenext",icon:"playlist_add"})),(t.IsFolder||"MusicArtist"===t.Type||"MusicGenre"===t.Type)&&"livetv"!==t.CollectionType&&!1!==e.shuffle&&d.push({name:i.ZP.translate("Shuffle"),id:"shuffle",icon:"shuffle"}),"Audio"!==t.MediaType&&"MusicAlbum"!==t.Type&&"MusicArtist"!==t.Type&&"MusicGenre"!==t.Type||!1===e.instantMix||l.ZP.isLocalItem(t)||d.push({name:i.ZP.translate("InstantMix"),id:"instantmix",icon:"explore"}),d.length&&d.push({divider:!0}),s||(l.ZP.supportsAddingToCollection(t)&&d.push({name:i.ZP.translate("AddToCollection"),id:"addtocollection",icon:"playlist_add"}),l.ZP.supportsAddingToPlaylist(t)&&!1!==e.playlist&&d.push({name:i.ZP.translate("AddToPlaylist"),id:"addtoplaylist",icon:"playlist_add"})),"Timer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&d.push({name:i.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"Recording"===t.Type&&"InProgress"===t.Status&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&d.push({name:i.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"SeriesTimer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&d.push({name:i.ZP.translate("CancelSeries"),id:"cancelseriestimer",icon:"cancel"}),t.CanDelete&&!1!==e.deleteItem&&("Playlist"===t.Type||"BoxSet"===t.Type?d.push({name:i.ZP.translate("Delete"),id:"delete",icon:"delete"}):d.push({name:i.ZP.translate("DeleteMedia"),id:"delete",icon:"delete"})),t.CanDownload&&o.M.supports("filedownload")&&"Book"!==t.Type&&(d.push({name:i.ZP.translate("Download"),id:"download",icon:"file_download"}),d.push({name:i.ZP.translate("CopyStreamURL"),id:"copy-stream",icon:"content_copy"})),d.length&&d.push({divider:!0});var c=l.ZP.canEdit(n,t);if(c&&!1!==e.edit&&"SeriesTimer"!==t.Type){var m="Timer"===t.Type||"SeriesTimer"===t.Type?i.ZP.translate("Edit"):i.ZP.translate("EditMetadata");d.push({name:m,id:"edit",icon:"edit"})}return l.ZP.canEditImages(n,t)&&!1!==e.editImages&&d.push({name:i.ZP.translate("EditImages"),id:"editimages",icon:"image"}),c&&("Video"!==t.MediaType||"TvChannel"===t.Type||"Program"===t.Type||"Virtual"===t.LocationType||"Recording"===t.Type&&"Completed"!==t.Status||!1!==e.editSubtitles&&d.push({name:i.ZP.translate("EditSubtitles"),id:"editsubtitles",icon:"closed_caption"})),!1!==e.identify&&l.ZP.canIdentify(n,t)&&d.push({name:i.ZP.translate("Identify"),id:"identify",icon:"edit"}),t.MediaSources&&!1!==e.moremediainfo&&d.push({name:i.ZP.translate("MoreMediaInfo"),id:"moremediainfo",icon:"info"}),"Program"===t.Type&&!1!==e.record&&t.TimerId&&d.push({name:i.ZP.translate("ManageRecording"),id:"record",icon:"fiber_manual_record"}),"Program"===t.Type&&!1!==e.record&&(t.TimerId||d.push({name:i.ZP.translate("Record"),id:"record",icon:"fiber_manual_record"})),l.ZP.canRefreshMetadata(t,n)&&d.push({name:i.ZP.translate("RefreshMetadata"),id:"refresh",icon:"refresh"}),t.PlaylistItemId&&e.playlistId&&d.push({name:i.ZP.translate("RemoveFromPlaylist"),id:"removefromplaylist",icon:"remove"}),e.collectionId&&d.push({name:i.ZP.translate("RemoveFromCollection"),id:"removefromcollection",icon:"remove"}),s||!0===e.share&&l.ZP.canShare(t,n)&&d.push({name:i.ZP.translate("Share"),id:"share",icon:"share"}),!1!==e.sync&&l.ZP.canSync(n,t)&&d.push({name:i.ZP.translate("Sync"),id:"sync",icon:"sync"}),!1!==e.openAlbum&&t.AlbumId&&"Photo"!==t.MediaType&&d.push({name:i.ZP.translate("ViewAlbum"),id:"album",icon:"album"}),!1!==e.openArtist&&t.AlbumArtists&&t.AlbumArtists.length&&d.push({name:i.ZP.translate("ViewAlbumArtist"),id:"artist",icon:"person"}),d}function p(e,t,n,a){return function(){e({command:t,updated:n,deleted:a})}}function f(e,t,n,a){var i=n?a?"queueNext":"queue":"play",r=0;t&&e.UserData&&e.UserData.PlaybackPositionTicks&&(r=e.UserData.PlaybackPositionTicks),"Program"===e.Type?u.O[i]({ids:[e.ChannelId],startPositionTicks:r,serverId:e.ServerId}):u.O[i]({items:[e],startPositionTicks:r})}function g(e){var t=m(e);return t.length?r.default.show({items:t,positionTo:e.positionTo,resolveOnClick:["share"]}).then((function(t){return function(e,t,a){var r=e.Id,o=e.ServerId,l=d.Z.getApiClient(o);return new Promise((function(d,m){switch(t){case"addtocollection":n.e(6372).then(n.bind(n,86372)).then((function(e){new(0,e.default)({items:[r],serverId:o}).then(p(d,t,!0),p(d,t))}));break;case"addtoplaylist":n.e(8013).then(n.bind(n,8013)).then((function(e){new(0,e.default)({items:[r],serverId:o}).then(p(d,t,!0),p(d,t))}));break;case"download":n.e(4111).then(n.bind(n,84111)).then((function(n){var a=l.getItemDownloadUrl(r);n.download([{url:a,itemId:r,serverId:o,title:e.Name,filename:e.Path.replace(/^.*[\\\/]/,"")}]),p(p(d,t),t)()}));break;case"copy-stream":var g=l.getItemDownloadUrl(r),h=function(){var e=document.createElement("textarea");e.value=g,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy")?(0,c.Z)(i.ZP.translate("CopyStreamURLSuccess")):prompt(i.ZP.translate("CopyStreamURL"),g),document.body.removeChild(e)};void 0===navigator.clipboard?h():navigator.clipboard.writeText(g).then((function(){(0,c.Z)(i.ZP.translate("CopyStreamURLSuccess"))})).catch((function(){h()})),p(d,t)();break;case"editsubtitles":n.e(1569).then(n.bind(n,91569)).then((function(e){e.default.show(r,o).then(p(d,t,!0),p(d,t))}));break;case"edit":(function(e,t){return new Promise((function(a,i){var r=e.serverInfo().Id;"Timer"===t.Type?n.e(132).then(n.bind(n,80132)).then((function(e){e.default.show(t.Id,r).then(a,i)})):"SeriesTimer"===t.Type?n.e(4281).then(n.bind(n,44281)).then((function(e){e.default.show(t.Id,r).then(a,i)})):n.e(6508).then(n.bind(n,66508)).then((function(e){e.default.show(t.Id,r).then(a,i)}))}))})(l,e).then(p(d,t,!0),p(d,t));break;case"editimages":n.e(7067).then(n.bind(n,87067)).then((function(e){e.show({itemId:r,serverId:o}).then(p(d,t,!0),p(d,t))}));break;case"identify":n.e(5598).then(n.bind(n,35598)).then((function(e){e.show(r,o).then(p(d,t,!0),p(d,t))}));break;case"moremediainfo":n.e(1765).then(n.bind(n,81765)).then((function(e){e.show(r,o).then(p(d,t),p(d,t))}));break;case"refresh":!function(e,t){n.e(4231).then(n.bind(n,14231)).then((function(n){new(0,n.default)({itemIds:[t.Id],serverId:e.serverInfo().Id,mode:"CollectionFolder"===t.Type?"scan":null}).show()}))}(l,e),p(d,t)();break;case"open":s.appRouter.showItem(e),p(d,t)();break;case"play":f(e,!1),p(d,t)();break;case"resume":f(e,!0),p(d,t)();break;case"queue":f(e,!1,!0),p(d,t)();break;case"queuenext":f(e,!1,!0,!0),p(d,t)();break;case"stopPlayback":u.O.stop();break;case"clearQueue":u.O.clearQueue();break;case"record":n.e(4104).then(n.bind(n,34104)).then((function(e){e.default.show(r,o).then(p(d,t,!0),p(d,t))}));break;case"shuffle":u.O.shuffle(e),p(d,t)();break;case"instantmix":u.O.instantMix(e),p(d,t)();break;case"delete":(function(e,t){return new Promise((function(e,a){n.e(6860).then(n.bind(n,96860)).then((function(n){n.deleteItem({item:t,navigate:!1}).then((function(){e(!0)}),a)}))}))})(0,e).then(p(d,t,!0,!0),p(d,t));break;case"share":navigator.share({title:e.Name,text:e.Overview,url:"".concat(l.serverAddress(),"/web/index.html#!/").concat(s.appRouter.getRouteUrl(e))});break;case"album":s.appRouter.showItem(e.AlbumId,e.ServerId),p(d,t)();break;case"artist":s.appRouter.showItem(e.AlbumArtists[0].Id,e.ServerId),p(d,t)();break;case"playallfromhere":case"queueallfromhere":p(d,t)();break;case"removefromplaylist":l.ajax({url:l.getUrl("Playlists/"+a.playlistId+"/Items",{EntryIds:[e.PlaylistItemId].join(",")}),type:"DELETE"}).then((function(){p(d,t,!0)()}));break;case"removefromcollection":l.ajax({type:"DELETE",url:l.getUrl("Collections/"+a.collectionId+"/Items",{Ids:[e.Id].join(",")})}).then((function(){p(d,t,!0)()}));break;case"canceltimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){var n=e.default,r=t.TimerId||t.Id;n.cancelTimerWithConfirmation(r,t.ServerId).then((function(){p(a,i,!0)()}))}))}(0,e,d,t);break;case"cancelseriestimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){e.default.cancelSeriesTimerWithConfirmation(t.Id,t.ServerId).then((function(){p(a,i,!0)()}))}))}(0,e,d,t);break;default:m()}}))}(e.item,t,e)})):Promise.reject()}t.default={getCommands:m,show:g}},51372:function(e,t,n){"use strict";n.r(t),n(95374),n(27471),n(48410),n(43512),n(55849);var a=n(28469),i=n(47005),r=n(47518),o=n(17146),s=n(78695),l=n(53218),u=n(92642),d=n(38102),c=n(83094),m=n(27046),p=(n(21865),n(76560),n(53913)),f=n(1892),g=n.n(f),h=n(89562);function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}g()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var v,b,P,w,I,T,k,B,S,C,x,Z,A,L,E,M=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n,a=this;a.element=((n=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(n),n),a.add=function(e){a.element.appendChild(e)},a.insert=function(e){"string"==typeof e?a.element.insertAdjacentHTML("afterbegin",e):a.element.insertBefore(e,a.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&y(t.prototype,n),e}())({}),R=n(67962),O=n(78535),q=(g()(O.Z,{insert:"head",singleton:!1}),O.Z.locals,n(83495),n(6383)),N=[],U=0,_={},D=0,j=!0;function F(){this.classList.add("hide")}function V(){l.O.playPause(v)}function Q(){if(L)return L;var e,t,n=M.element;return(L=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop"></span></button>',s.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause"></span></button>',s.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),L=n.querySelector(".nowPlayingBar"),s.Z.mobile&&(H(L.querySelector(".btnShuffleQueue")),H(L.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&L.classList.add("noMediaProgress"),R.ZP.on(L),b=(t=L).querySelector(".nowPlayingBarCurrentTime"),P=t.querySelector(".nowPlayingImage"),w=t.querySelector(".nowPlayingBarText"),I=t.querySelector(".nowPlayingBarUserDataButtons"),C=t.querySelector(".nowPlayingBarPositionSlider"),T=t.querySelector(".muteButton"),S=t.querySelectorAll(".playPauseButton"),x=t.querySelector(".toggleRepeatButton"),k=t.querySelector(".nowPlayingBarVolumeSlider"),B=t.querySelector(".nowPlayingBarVolumeSliderContainer"),T.addEventListener("click",(function(){v&&l.O.toggleMute(v)})),t.querySelector(".stopButton").addEventListener("click",(function(){v&&l.O.stop(v)})),S.forEach((function(e){e.addEventListener("click",V)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){v&&l.O.nextTrack(v)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(v)if("Audio"===_.NowPlayingItem.MediaType&&(v._currentTime>=5||!l.O.previousTrack(v))){if(e.detail>1&&l.O.previousTrack(v))return;l.O.seekPercent(0,v),C.value=0}else l.O.previousTrack(v)})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){v&&l.O.previousTrack(v)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){v&&l.O.toggleQueueShuffleMode()})),(x=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),Z=x.querySelector(".material-icons"),B.classList.toggle("hide",d.M.supports("physicalvolumecontrol")),k.addEventListener("input",(function(e){v&&v.setVolume(e.target.value)})),C.addEventListener("change",(function(){if(v){var e=parseFloat(this.value);l.O.seekPercent(e,v)}})),C.getBubbleText=function(e){if(!_||!_.NowPlayingItem||!D)return"--:--";var t=D;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){c.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||q.appRouter.showNowPlaying()}))),L}function H(e){e.classList.add("hide")}function z(e){S&&S.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function W(e){Z.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":Z.classList.add("repeat"),x.classList.add(t);break;case"RepeatOne":Z.classList.add("repeat_one"),x.classList.add(t);break;case"RepeatNone":default:Z.classList.add("repeat"),x.classList.remove(t)}}function Y(e,t,n){if(C&&!C.dragging)if(t){var i=e/t;i*=100,C.value=i}else C.value=0;if(C&&C.setBufferedRanges(n,t,e),b){var r=null==e?"--:--":a.ZP.getDisplayRunningTime(e);t&&(r+=" / "+a.ZP.getDisplayRunningTime(t)),b.innerHTML=r}}function G(e,t){var n=N,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=T.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(i=!1),v.isLocalPlayer&&d.M.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?T.classList.remove("hide"):H(T),k&&(B.classList.toggle("hide",!i),k.dragging||(k.value=t||0))}function J(e,t){console.debug("nowplaying event: "+e.type),ne.call(this,e,t)}function K(){A&&W(l.O.getRepeatMode())}function X(){if(A){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=L.querySelector(".btnShuffleQueue");switch(e){case"Shuffle":n.classList.add(t);break;case"Sorted":default:n.classList.remove(t)}}}function $(){A=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),c.ZP.addEventListener(e,c.ZP.whichTransitionEvent(),F,{once:!0})}(e)}function ee(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&$():t.NextMediaType||$()}function te(e){A&&z(this.paused())}function ne(e,t){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!s.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?$():(A=!0,L||Q(),function(e,t,n){var a;j?(a=Q(),c.ZP.removeEventListener(a,c.ZP.whichTransitionEvent(),F,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):$(),_=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};z(r.IsPaused);var d=i.supportedCommands;if(N=d,-1===d.indexOf("SetRepeatMode")?x.classList.add("hide"):x.classList.remove("hide"),W(l.O.getRepeatMode()),X(),G(r.IsMuted,r.VolumeLevel),C&&!C.dragging){C.disabled=!r.CanSeek;var f=t.MediaSource&&null==t.MediaSource.RunTimeTicks;C.setIsClear(f)}var g=t.NowPlayingItem||{};Y(r.PositionTicks,g.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(w.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerHTML=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerHTML=n[0].text,a.appendChild(l)}w.appendChild(a),w.appendChild(i)}var d=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null,c=!1;if(d!==E&&(E=d,c=!0,d?(o.default.lazyImage(P,d),P.style.display=null,w.style.marginLeft=null):(P.style.backgroundImage="",P.style.display="none",w.style.marginLeft="1em")),t.Id){if(c){var f=p.Z.getApiClient(t.ServerId);f.getItem(f.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!s.Z.mobile){var a=L.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=L.querySelector(".btnToggleContextMenu")};f.getCurrentUser().then((function(t){a.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r))}))}))}I.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite"></span></button>'}))}}else I.innerHTML=""}(t)}(0,t,this)):$()}function ae(e){if(A){var t=(new Date).getTime();if(!(t-U<700)){U=t;var n=this;D=l.O.duration(n),Y(1e4*l.O.currentTime(n),D,l.O.getBufferedRanges(n))}}}function ie(e){A&&G(this.isMuted(),this.getVolume())}function re(e){var t=l.O.getPlayerState(e);ne.call(e,{type:"init"},t)}function oe(e){e!==v&&(function(){var e=v;e&&(i.Events.off(e,"playbackstart",J),i.Events.off(e,"statechange",J),i.Events.off(e,"repeatmodechange",K),i.Events.off(e,"shufflequeuemodechange",X),i.Events.off(e,"playbackstop",ee),i.Events.off(e,"volumechange",ie),i.Events.off(e,"pause",te),i.Events.off(e,"unpause",te),i.Events.off(e,"timeupdate",ae),v=null,$())}(),v=e,e&&(re(e),i.Events.on(e,"playbackstart",J),i.Events.on(e,"statechange",J),i.Events.on(e,"repeatmodechange",K),i.Events.on(e,"shufflequeuemodechange",X),i.Events.on(e,"playbackstop",ee),i.Events.on(e,"volumechange",ie),i.Events.on(e,"pause",te),i.Events.on(e,"unpause",te),i.Events.on(e,"timeupdate",ae)))}i.Events.on(l.O,"playerchange",(function(){oe(l.O.getCurrentPlayer())})),oe(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?j||(j=!0,v?re(v):$()):j&&(j=!1,$())}))},92642:function(e,t,n){"use strict";n(61013),t.Z={getNowPlayingNames:function(e,t){var n=e,a=null,i=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(i=e.IndexNumber+" - "+i),null!=e.ParentIndexNumber&&(i=e.ParentIndexNumber+"."+i));var r="";e.ArtistItems&&e.ArtistItems.length?(a={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},r=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?r=e.Artists.join(", "):e.SeriesName||e.Album?(r=i,i=e.SeriesName||e.Album,a=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(r=e.ProductionYear);var o=[];return o.push({text:i,item:n}),r&&o.push({text:r,item:a}),o}}},76560:function(e,t,n){"use strict";n.r(t);var a=n(1197),i=n(47005),r=n(53754),o=n(78066),s=n(53913);function l(e){var t=this,n=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=s.Z.getApiClient(a),r=this.getAttribute("data-likes");r="true"===r||"false"!==r&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,i,n,0,"true"===this.getAttribute("data-isfavorite")).then((function(e){d(t,e.Likes,e.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&d(this,n.Likes,n.IsFavorite)}function d(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t))}function c(e){var t,n,r;e.removeEventListener("click",l),(r=(t=e)[n="UserDataChanged"])&&(i.Events.off(a.default,n,r),t[n]=null)}function m(e){var t,n,r;c(e),e.addEventListener("click",l),t=e,n="UserDataChanged",r=u.bind(t),i.Events.on(a.default,n,r),t[n]=r}var p=Object.create(o.Z);p.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},p.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");d(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),m(this)}!function(e){e.title=r.ZP.translate("Favorite");var t=e.querySelector(".button-text");t&&(t.innerHTML=e.title)}(this)},p.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),c(this)},p.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};d(this,t.Likes,t.IsFavorite),m(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),c(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})},89562:function(e,t,n){"use strict";var a=n(93476),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,".appfooter{position:fixed;left:0;right:0;z-index:10;bottom:0;transition:-webkit-transform .18s linear;transition:transform .18s linear;transition:transform .18s linear,-webkit-transform .18s linear;contain:layout style}.appfooter.headroom--unpinned{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}",""]),t.Z=i},78535:function(e,t,n){"use strict";var a=n(93476),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,".nowPlayingBarInfoContainer{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:100%;width:40%;overflow:hidden}.nowPlayingBar{text-align:center;will-change:transform;contain:layout style;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.nowPlayingBar-hidden{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.nowPlayingBarTop{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:center;align-items:center;height:4.2em;position:relative;-webkit-justify-content:center;justify-content:center}.mediaButton,.nowPlayingBarUserDataButtons .btnUserItemRating{vertical-align:middle;margin:0;text-align:center}.mediaButton{font-size:120%}.nowPlayingBar .nowPlayingImage{background-position:50%;background-repeat:no-repeat;background-size:contain;height:70%;width:4.2em;-webkit-flex-shrink:0;flex-shrink:0}.nowPlayingBarText{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:92%;margin-right:1em;margin-left:.5em}.nowPlayingBarCenter,.nowPlayingBarText{vertical-align:middle;-webkit-flex-grow:1;flex-grow:1}.nowPlayingBarCenter{text-align:center;z-index:2;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;position:absolute}.nowPlayingBarPositionContainer{position:absolute!important;left:0;top:-.56em;right:0;z-index:1}.headroom--unpinned .nowPlayingBarPositionContainer,.noMediaProgress .nowPlayingBarPositionContainer{display:none}.nowPlayingBarRight{position:relative;margin:0 .5em 0 auto;z-index:2;display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0}.nowPlayingBarCurrentTime{vertical-align:middle;text-align:center;display:inline-block;padding-left:1.5em}.nowPlayingBarVolumeSliderContainer{margin-right:2em}.nowPlayingBarUserDataButtons{display:inline-block}.nowPlayingBarPositionSlider::-webkit-slider-thumb{width:1.2em!important;height:1.2em!important}@media (max-width:70em){.nowPlayingBarRight .nowPlayingBarUserDataButtons{display:none}}@media (max-width:66em){.nowPlayingBar .btnShuffleQueue,.toggleRepeatButton{display:none!important}}@media (max-width:80em){.nowPlayingBarCenter .nowPlayingBarCurrentTime,.nowPlayingBarCenter .stopButton{display:none!important}.nowPlayingBarInfoContainer{width:45%}}.layout-mobile .nowPlayingBarRight button:not(.playPauseButton):not(.nextTrackButton){display:none}.layout-desktop .nowPlayingBarRight .playPauseButton,.layout-mobile .nowPlayingBarRight div,.layout-mobile .nowPlayingBarRight input,.layout-tv .nowPlayingBarRight .playPauseButton{display:none}@media (max-width:56em){.nowPlayingBarCenter{display:none!important}}@media (max-width:60em){.nowPlayingBarRight .nowPlayingBarVolumeSliderContainer{display:none!important}.nowPlayingBarInfoContainer{width:100%}}@media (max-width:24em){.nowPlayingBar .muteButton,.nowPlayingBar .unmuteButton{display:none}}",""]),t.Z=i}}]);