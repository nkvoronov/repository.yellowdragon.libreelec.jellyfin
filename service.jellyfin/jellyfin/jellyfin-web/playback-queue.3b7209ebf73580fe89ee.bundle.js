(self.webpackChunk=self.webpackChunk||[]).push([[5098,7046],{27046:function(e,t,n){"use strict";n.r(t),n.d(t,{getCommands:function(){return m},show:function(){return p}}),n(23938),n(63238),n(61418),n(911),n(5769);var a=n(47518),i=n(53754),o=n(32465),r=n(38102),l=n(6383),s=n(71616),u=n(53218),c=n(53913),d=n(38440);function m(e){var t=e.item,n=e.user,o=u.O.canPlay(t),l=(a.Z.operaTv||a.Z.web0s)&&!n.Policy.IsAdministrator,c=[];o&&"Photo"!==t.MediaType&&(!1!==e.play&&c.push({name:i.ZP.translate("Play"),id:"resume",icon:"play_arrow"}),e.playAllFromHere&&"Program"!==t.Type&&"TvChannel"!==t.Type&&c.push({name:i.ZP.translate("PlayAllFromHere"),id:"playallfromhere",icon:"play_arrow"})),null!==u.O.getCurrentPlayer()&&(e.stopPlayback&&c.push({name:i.ZP.translate("StopPlayback"),id:"stopPlayback",icon:"stop"}),e.clearQueue&&c.push({name:i.ZP.translate("ClearQueue"),id:"clearQueue",icon:"clear_all"})),u.O.canQueue(t)&&(!1!==e.queue&&c.push({name:i.ZP.translate("AddToPlayQueue"),id:"queue",icon:"playlist_add"}),!1!==e.queue&&c.push({name:i.ZP.translate("PlayNext"),id:"queuenext",icon:"playlist_add"})),(t.IsFolder||"MusicArtist"===t.Type||"MusicGenre"===t.Type)&&"livetv"!==t.CollectionType&&!1!==e.shuffle&&c.push({name:i.ZP.translate("Shuffle"),id:"shuffle",icon:"shuffle"}),"Audio"!==t.MediaType&&"MusicAlbum"!==t.Type&&"MusicArtist"!==t.Type&&"MusicGenre"!==t.Type||!1===e.instantMix||s.ZP.isLocalItem(t)||c.push({name:i.ZP.translate("InstantMix"),id:"instantmix",icon:"explore"}),c.length&&c.push({divider:!0}),l||(s.ZP.supportsAddingToCollection(t)&&c.push({name:i.ZP.translate("AddToCollection"),id:"addtocollection",icon:"playlist_add"}),s.ZP.supportsAddingToPlaylist(t)&&!1!==e.playlist&&c.push({name:i.ZP.translate("AddToPlaylist"),id:"addtoplaylist",icon:"playlist_add"})),"Timer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&c.push({name:i.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"Recording"===t.Type&&"InProgress"===t.Status&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&c.push({name:i.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"SeriesTimer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&c.push({name:i.ZP.translate("CancelSeries"),id:"cancelseriestimer",icon:"cancel"}),t.CanDelete&&!1!==e.deleteItem&&("Playlist"===t.Type||"BoxSet"===t.Type?c.push({name:i.ZP.translate("Delete"),id:"delete",icon:"delete"}):c.push({name:i.ZP.translate("DeleteMedia"),id:"delete",icon:"delete"})),t.CanDownload&&r.M.supports("filedownload")&&"Book"!==t.Type&&(c.push({name:i.ZP.translate("Download"),id:"download",icon:"file_download"}),c.push({name:i.ZP.translate("CopyStreamURL"),id:"copy-stream",icon:"content_copy"})),c.length&&c.push({divider:!0});var d=s.ZP.canEdit(n,t);if(d&&!1!==e.edit&&"SeriesTimer"!==t.Type){var m="Timer"===t.Type||"SeriesTimer"===t.Type?i.ZP.translate("Edit"):i.ZP.translate("EditMetadata");c.push({name:m,id:"edit",icon:"edit"})}return s.ZP.canEditImages(n,t)&&!1!==e.editImages&&c.push({name:i.ZP.translate("EditImages"),id:"editimages",icon:"image"}),d&&("Video"!==t.MediaType||"TvChannel"===t.Type||"Program"===t.Type||"Virtual"===t.LocationType||"Recording"===t.Type&&"Completed"!==t.Status||!1!==e.editSubtitles&&c.push({name:i.ZP.translate("EditSubtitles"),id:"editsubtitles",icon:"closed_caption"})),!1!==e.identify&&s.ZP.canIdentify(n,t)&&c.push({name:i.ZP.translate("Identify"),id:"identify",icon:"edit"}),t.MediaSources&&!1!==e.moremediainfo&&c.push({name:i.ZP.translate("MoreMediaInfo"),id:"moremediainfo",icon:"info"}),"Program"===t.Type&&!1!==e.record&&t.TimerId&&c.push({name:i.ZP.translate("ManageRecording"),id:"record",icon:"fiber_manual_record"}),"Program"===t.Type&&!1!==e.record&&(t.TimerId||c.push({name:i.ZP.translate("Record"),id:"record",icon:"fiber_manual_record"})),s.ZP.canRefreshMetadata(t,n)&&c.push({name:i.ZP.translate("RefreshMetadata"),id:"refresh",icon:"refresh"}),t.PlaylistItemId&&e.playlistId&&c.push({name:i.ZP.translate("RemoveFromPlaylist"),id:"removefromplaylist",icon:"remove"}),e.collectionId&&c.push({name:i.ZP.translate("RemoveFromCollection"),id:"removefromcollection",icon:"remove"}),l||!0===e.share&&s.ZP.canShare(t,n)&&c.push({name:i.ZP.translate("Share"),id:"share",icon:"share"}),!1!==e.sync&&s.ZP.canSync(n,t)&&c.push({name:i.ZP.translate("Sync"),id:"sync",icon:"sync"}),!1!==e.openAlbum&&t.AlbumId&&"Photo"!==t.MediaType&&c.push({name:i.ZP.translate("ViewAlbum"),id:"album",icon:"album"}),!1!==e.openArtist&&t.AlbumArtists&&t.AlbumArtists.length&&c.push({name:i.ZP.translate("ViewAlbumArtist"),id:"artist",icon:"person"}),c}function y(e,t,n,a){return function(){e({command:t,updated:n,deleted:a})}}function g(e,t,n,a){var i=n?a?"queueNext":"queue":"play",o=0;t&&e.UserData&&e.UserData.PlaybackPositionTicks&&(o=e.UserData.PlaybackPositionTicks),"Program"===e.Type?u.O[i]({ids:[e.ChannelId],startPositionTicks:o,serverId:e.ServerId}):u.O[i]({items:[e],startPositionTicks:o})}function p(e){var t=m(e);return t.length?o.default.show({items:t,positionTo:e.positionTo,resolveOnClick:["share"]}).then((function(t){return function(e,t,a){var o=e.Id,r=e.ServerId,s=c.Z.getApiClient(r);return new Promise((function(c,m){switch(t){case"addtocollection":n.e(6372).then(n.bind(n,86372)).then((function(e){new(0,e.default)({items:[o],serverId:r}).then(y(c,t,!0),y(c,t))}));break;case"addtoplaylist":n.e(8013).then(n.bind(n,8013)).then((function(e){new(0,e.default)({items:[o],serverId:r}).then(y(c,t,!0),y(c,t))}));break;case"download":n.e(4111).then(n.bind(n,84111)).then((function(n){var a=s.getItemDownloadUrl(o);n.download([{url:a,itemId:o,serverId:r,title:e.Name,filename:e.Path.replace(/^.*[\\\/]/,"")}]),y(y(c,t),t)()}));break;case"copy-stream":var p=s.getItemDownloadUrl(o),f=function(){var e=document.createElement("textarea");e.value=p,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy")?(0,d.Z)(i.ZP.translate("CopyStreamURLSuccess")):prompt(i.ZP.translate("CopyStreamURL"),p),document.body.removeChild(e)};void 0===navigator.clipboard?f():navigator.clipboard.writeText(p).then((function(){(0,d.Z)(i.ZP.translate("CopyStreamURLSuccess"))})).catch((function(){f()})),y(c,t)();break;case"editsubtitles":n.e(1569).then(n.bind(n,91569)).then((function(e){e.default.show(o,r).then(y(c,t,!0),y(c,t))}));break;case"edit":(function(e,t){return new Promise((function(a,i){var o=e.serverInfo().Id;"Timer"===t.Type?n.e(132).then(n.bind(n,80132)).then((function(e){e.default.show(t.Id,o).then(a,i)})):"SeriesTimer"===t.Type?n.e(4281).then(n.bind(n,44281)).then((function(e){e.default.show(t.Id,o).then(a,i)})):n.e(6508).then(n.bind(n,66508)).then((function(e){e.default.show(t.Id,o).then(a,i)}))}))})(s,e).then(y(c,t,!0),y(c,t));break;case"editimages":n.e(7067).then(n.bind(n,87067)).then((function(e){e.show({itemId:o,serverId:r}).then(y(c,t,!0),y(c,t))}));break;case"identify":n.e(5598).then(n.bind(n,35598)).then((function(e){e.show(o,r).then(y(c,t,!0),y(c,t))}));break;case"moremediainfo":n.e(1765).then(n.bind(n,81765)).then((function(e){e.show(o,r).then(y(c,t),y(c,t))}));break;case"refresh":!function(e,t){n.e(4231).then(n.bind(n,14231)).then((function(n){new(0,n.default)({itemIds:[t.Id],serverId:e.serverInfo().Id,mode:"CollectionFolder"===t.Type?"scan":null}).show()}))}(s,e),y(c,t)();break;case"open":l.appRouter.showItem(e),y(c,t)();break;case"play":g(e,!1),y(c,t)();break;case"resume":g(e,!0),y(c,t)();break;case"queue":g(e,!1,!0),y(c,t)();break;case"queuenext":g(e,!1,!0,!0),y(c,t)();break;case"stopPlayback":u.O.stop();break;case"clearQueue":u.O.clearQueue();break;case"record":n.e(4104).then(n.bind(n,34104)).then((function(e){e.default.show(o,r).then(y(c,t,!0),y(c,t))}));break;case"shuffle":u.O.shuffle(e),y(c,t)();break;case"instantmix":u.O.instantMix(e),y(c,t)();break;case"delete":(function(e,t){return new Promise((function(e,a){n.e(6860).then(n.bind(n,96860)).then((function(n){n.deleteItem({item:t,navigate:!1}).then((function(){e(!0)}),a)}))}))})(0,e).then(y(c,t,!0,!0),y(c,t));break;case"share":navigator.share({title:e.Name,text:e.Overview,url:"".concat(s.serverAddress(),"/web/index.html#!/").concat(l.appRouter.getRouteUrl(e))});break;case"album":l.appRouter.showItem(e.AlbumId,e.ServerId),y(c,t)();break;case"artist":l.appRouter.showItem(e.AlbumArtists[0].Id,e.ServerId),y(c,t)();break;case"playallfromhere":case"queueallfromhere":y(c,t)();break;case"removefromplaylist":s.ajax({url:s.getUrl("Playlists/"+a.playlistId+"/Items",{EntryIds:[e.PlaylistItemId].join(",")}),type:"DELETE"}).then((function(){y(c,t,!0)()}));break;case"removefromcollection":s.ajax({type:"DELETE",url:s.getUrl("Collections/"+a.collectionId+"/Items",{Ids:[e.Id].join(",")})}).then((function(){y(c,t,!0)()}));break;case"canceltimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){var n=e.default,o=t.TimerId||t.Id;n.cancelTimerWithConfirmation(o,t.ServerId).then((function(){y(a,i,!0)()}))}))}(0,e,c,t);break;case"cancelseriestimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){e.default.cancelSeriesTimerWithConfirmation(t.Id,t.ServerId).then((function(){y(a,i,!0)()}))}))}(0,e,c,t);break;default:m()}}))}(e.item,t,e)})):Promise.reject()}t.default={getCommands:m,show:p}},92642:function(e,t,n){"use strict";n(61013),t.Z={getNowPlayingNames:function(e,t){var n=e,a=null,i=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(i=e.IndexNumber+" - "+i),null!=e.ParentIndexNumber&&(i=e.ParentIndexNumber+"."+i));var o="";e.ArtistItems&&e.ArtistItems.length?(a={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=i,i=e.SeriesName||e.Album,a=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var r=[];return r.push({text:i,item:n}),o&&r.push({text:o,item:a}),r}}},85834:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}}),n(23938),n(98010),n(95623),n(27471),n(61013),n(72410),n(48410),n(63238),n(43512),n(32081),n(61418),n(61514),n(911),n(5769);var a=n(28469),i=n(28321),o=n(66056),r=n(17146),l=n(53218),s=n(92642),u=n(47005),c=n(38102),d=n(53754),m=n(78695),y=n(28978),g=n(61097),p=n(27046),f=(n(5100),n(51547),n(1892)),b=n.n(f),h=n(21100),v=(b()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,n(76560),n(53913)),P=n(38440),S=n(6383);function w(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw o}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=!0,k=!0;function x(e,t){t?e.classList.remove("hide"):e.classList.add("hide")}function A(){function e(e,n,a){Q=a;var o=a.NowPlayingItem,r=l.O.getPlayerInfo().supportedCommands;G=r;var u=a.PlayState||{},c=r.includes("DisplayMessage")||r.includes("SendString")||r.includes("Select");if(x(n.querySelector(".btnToggleFullscreen"),o&&"Video"==o.MediaType&&r.includes("ToggleFullscreen")),function(e,t){var n=G;x(t.querySelector(".btnAudioTracks"),l.O.audioTracks(e).length>1&&-1!=n.indexOf("SetAudioStreamIndex"))}(e,n),function(e,t){var n=G;x(t.querySelector(".btnSubtitles"),l.O.subtitleTracks(e).length&&-1!=n.indexOf("SetSubtitleStreamIndex"))}(e,n),r.includes("DisplayMessage")&&!z.isLocalPlayer?n.querySelector(".sendMessageSection").classList.remove("hide"):n.querySelector(".sendMessageSection").classList.add("hide"),r.includes("SendString")&&!z.isLocalPlayer?n.querySelector(".sendTextSection").classList.remove("hide"):n.querySelector(".sendTextSection").classList.add("hide"),r.includes("Select")&&!z.isLocalPlayer?n.querySelector(".navigationSection").classList.remove("hide"):n.querySelector(".navigationSection").classList.add("hide"),c&&!z.isLocalPlayer?n.querySelector(".remoteControlSection").classList.remove("hide"):n.querySelector(".remoteControlSection").classList.add("hide"),x(n.querySelector(".btnStop"),null!=o),x(n.querySelector(".btnNextTrack"),null!=o),x(n.querySelector(".btnPreviousTrack"),null!=o),m.Z.mobile){var d=l.O.isPlayingVideo()&&null!==o,P=!l.O.isPlayingVideo()&&null!==o;x(n.querySelector(".btnRepeat"),P),x(n.querySelector(".btnShuffleQueue"),P),x(n.querySelector(".btnRewind"),d),x(n.querySelector(".btnFastForward"),d),x(n.querySelector(".nowPlayingSecondaryButtons .btnShuffleQueue"),d),x(n.querySelector(".nowPlayingSecondaryButtons .btnRepeat"),d)}else x(n.querySelector(".btnRewind"),null!=o),x(n.querySelector(".btnFastForward"),null!=o);var S=n.querySelector(".nowPlayingPositionSlider");if(S&&o&&o.RunTimeTicks&&S.setKeyboardSteps(1e6*y.skipBackLength()/o.RunTimeTicks,1e6*y.skipForwardLength()/o.RunTimeTicks),S&&!S.dragging){S.disabled=!u.CanSeek;var I=a.MediaSource&&null==a.MediaSource.RunTimeTicks;S.setIsClear(I)}b(u.IsPaused,null!=o),h(u.PositionTicks,o?o.RunTimeTicks:null),f(n,u.IsMuted,u.VolumeLevel),o&&"Video"==o.MediaType?n.classList.remove("hideVideoButtons"):n.classList.add("hideVideoButtons"),t(l.O.getRepeatMode()),q(!1),function(e,t,n){var a,o=t.NowPlayingItem,r=o?(a=o,s.Z.getNowPlayingNames(a,void 0).map((function(e){return e.text})).join("<br/>")).replace("<br/>"," - "):"";if(o){var l=o.ServerId||n;if("Audio"==o.Type||"Audio"==o.MediaStreams[0].Type){var u=o.Name,c="",d="";if(null!=o.Artists)if(null!=o.ArtistItems){var m,y=w(o.ArtistItems);try{for(y.s();!(m=y.n()).done;){var f=m.value,b=f.Name,h=f.Id;c+='<a class="button-link emby-button" is="emby-linkbutton" href="#!/details?id='.concat(h,"&serverId=").concat(l,'">').concat(b,"</a>"),f!==o.ArtistItems.slice(-1)[0]&&(c+=", ")}}catch(e){y.e(e)}finally{y.f()}}else if(o.Artists){var P,S=w(o.Artists);try{for(S.s();!(P=S.n()).done;){var I=P.value;c+="<a>".concat(I,"</a>"),I!==o.Artists.slice(-1)[0]&&(c+=", ")}}catch(e){S.e(e)}finally{S.f()}}null!=o.Album&&(d='<a class="button-link emby-button" is="emby-linkbutton" href="#!/details?id='+o.AlbumId+"&serverId=".concat(l,'">')+o.Album+"</a>"),e.querySelector(".nowPlayingAlbum").innerHTML=d,e.querySelector(".nowPlayingArtist").innerHTML=c,e.querySelector(".nowPlayingSongName").innerHTML=u}else if("Episode"==o.Type){if(null!=o.SeasonName){var T=o.SeasonName;e.querySelector(".nowPlayingSeason").innerHTML='<a class="button-link emby-button" is="emby-linkbutton" href="#!/details?id='+o.SeasonId+"&serverId=".concat(l,'">').concat(T,"</a>")}if(null!=o.SeriesName){var k=o.SeriesName;null!=o.SeriesId?e.querySelector(".nowPlayingSerie").innerHTML='<a class="button-link emby-button" is="emby-linkbutton" href="#!/details?id='+o.SeriesId+"&serverId=".concat(l,'">').concat(k,"</a>"):e.querySelector(".nowPlayingSerie").innerHTML=k}e.querySelector(".nowPlayingEpisode").innerHTML=o.Name}else e.querySelector(".nowPlayingPageTitle").innerHTML=r;r.length>0&&"Audio"!=o.Type&&"Episode"!=o.Type?e.querySelector(".nowPlayingPageTitle").classList.remove("hide"):e.querySelector(".nowPlayingPageTitle").classList.add("hide");var x=function(e,t){if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,v.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,v.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,v.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(o,{maxHeight:300})||function(e,t){return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],v.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,v.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(o,{maxHeight:300}),A=e.querySelector(".btnToggleContextMenu"),L=document.activeElement===A,q=A.cloneNode(!0);A.parentNode.replaceChild(q,A),A=e.querySelector(".btnToggleContextMenu"),L&&A.focus();var C={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,openAlbum:!1,positionTo:A},M=v.Z.getApiClient(o.ServerId);M.getItem(M.getCurrentUserId(),o.Id).then((function(e){M.getCurrentUser().then((function(t){A.addEventListener("click",(function(){p.default.show(Object.assign({item:e,user:t},C))}))}))})),function(e,t,n){var a=t.NowPlayingItem,i=e.querySelector(".nowPlayingPageImageContainer");n?(i.innerHTML='<img class="nowPlayingPageImage" src="'+n+'" />',"Audio"==a.Type?(e.querySelector(".nowPlayingPageImage").classList.add("nowPlayingPageImageAudio"),e.querySelector(".nowPlayingPageImageContainer").classList.remove("nowPlayingPageImageAudio")):(e.querySelector(".nowPlayingPageImageContainer").classList.add("nowPlayingPageImagePoster"),e.querySelector(".nowPlayingPageImage").classList.remove("nowPlayingPageImageAudio"))):i.innerHTML='<div class="nowPlayingPageImageContainerNoAlbum"><button data-action="link" class="cardImageContainer coveredImage '+g.default.getDefaultBackgroundClass(a.Name)+' cardContent cardContent-shadow itemAction"><span class="cardImageIcon material-icons album"></span></button></div>'}(e,t,x),i.ZP.setBackdrops([o]),M.getItem(M.getCurrentUserId(),o.Id).then((function(t){var n=t.UserData||{},a=null==n.Likes?"":n.Likes;e.querySelector(".nowPlayingPageUserDataButtonsTitle").innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+a+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite"></span></button>',e.querySelector(".nowPlayingPageUserDataButtons").innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+a+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite"></span></button>'}))}else i.ZP.clearBackdrop(),e.querySelector(".nowPlayingPageUserDataButtons").innerHTML=""}(n,a)}function t(e){var t=V.querySelectorAll(".repeatToggleButton"),n='<span class="material-icons repeat"></span>',a=!0;switch(e){case"RepeatAll":break;case"RepeatOne":n='<span class="material-icons repeat_one"></span>';break;case"RepeatNone":default:a=!1}var i,o=w(t);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.classList.toggle("buttonActive",a),r.innerHTML=n}}catch(e){o.e(e)}finally{o.f()}}function f(e,t,n){var a=e,i=G;-1===i.indexOf("Mute")&&(T=!1),-1===i.indexOf("SetVolume")&&(k=!1),z.isLocalPlayer&&c.M.supports("physicalvolumecontrol")&&(T=!1,k=!1);var o=a.querySelector(".buttonMute"),r=o.querySelector(".material-icons");if(r.classList.remove("volume_off","volume_up"),t?(o.setAttribute("title",d.ZP.translate("Unmute")),r.classList.add("volume_off")):(o.setAttribute("title",d.ZP.translate("Mute")),r.classList.add("volume_up")),T||k){o.classList.toggle("hide",!T);var l=e.querySelector(".nowPlayingVolumeSlider"),s=e.querySelector(".nowPlayingVolumeSliderContainer");l&&(s.classList.toggle("hide",!k),l.dragging||(l.value=n||0))}else e.querySelector(".volumecontrol").classList.add("hide")}function b(e,t){var n=V.querySelector(".btnPlayPause"),a=n.querySelector(".material-icons");a.classList.remove("play_circle_filled","pause_circle_filled"),a.classList.add(e?"play_circle_filled":"pause_circle_filled"),x(n,t)}function h(e,t){var n=V,i=n.querySelector(".nowPlayingPositionSlider");if(i&&!i.dragging)if(t){var o=e/t;o*=100,i.value=o}else i.value=0;n.querySelector(".positionTime").innerHTML=null==e?"--:--":a.ZP.getDisplayRunningTime(e),n.querySelector(".runtime").innerHTML=null!=t?a.ZP.getDisplayRunningTime(t):"--:--"}function I(e){return l.O.getPlaylist(e)}function A(e,t){console.debug("remotecontrol event: "+e.type),O.call(this,e,t)}function L(){t(l.O.getRepeatMode())}function q(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=l.O.getQueueShuffleMode(this),a=V,i="buttonActive",o=a.querySelectorAll(".btnShuffleQueue"),r=w(o);try{for(r.s();!(e=r.n()).done;){var s=e.value;switch(n){case"Shuffle":s.classList.add(i);break;case"Sorted":default:s.classList.remove(i)}}}catch(e){r.e(e)}finally{r.f()}t&&C()}function C(e){var t,n;t=V,I(n=this).then((function(e){var a="",i=!0;m.Z.mobile&&(e.length>0?t.querySelector(".btnTogglePlaylist").classList.remove("hide"):t.querySelector(".btnTogglePlaylist").classList.add("hide"),i=!1),a+=o.Z.getListViewHtml({items:e,smallIcon:!0,action:"setplaylistindex",enableUserDataButtons:i,rightButtons:[{icon:"remove_circle_outline",title:d.ZP.translate("ButtonRemove"),id:"remove"}],dragHandle:!0});var s=t.querySelector(".playlist"),u=s.querySelector("button:focus");if(s.innerHTML=a,null!==u){u=u.getAttribute("data-playlistitemid");var c=s.querySelector('button[data-playlistitemid="'.concat(u,'"]'));null!==c&&c.focus()}var y=l.O.getCurrentPlaylistItemId(n);if(y){var g=s.querySelector('.listItem[data-playlistItemId="'.concat(y,'"] .listItemImage'));g&&(g.classList.remove("lazy"),g.classList.add("playlistIndexIndicatorImage"))}r.default.lazyChildren(s)}))}function M(e,t){var n=V;if(void 0!==t)for(var a=t.playlistItemIds,i=0,o=a.length;i<o;i++){var r=n.querySelector('.listItem[data-playlistItemId="'+a[i]+'"]');r&&r.parentNode.removeChild(r)}else C()}function Z(t,n){console.debug("remotecontrol event: "+t.type),n.NextMediaType||(e(this,V,{}),S.appRouter.back())}function E(e){b(this.paused(),!0)}function O(t,n){e(this,V,n),C()}function B(e){var t=(new Date).getTime();t-K<700||(K=t,W=l.O.duration(this),h(1e4*l.O.currentTime(this),W))}function N(e){f(V,this.isMuted(),this.getVolume())}function R(){var e=z;e&&(u.Events.off(e,"playbackstart",A),u.Events.off(e,"statechange",O),u.Events.off(e,"repeatmodechange",L),u.Events.off(e,"shufflequeuemodechange",q),u.Events.off(e,"playlistitemremove",M),u.Events.off(e,"playlistitemmove",C),u.Events.off(e,"playlistitemadd",C),u.Events.off(e,"playbackstop",Z),u.Events.off(e,"volumechange",N),u.Events.off(e,"pause",E),u.Events.off(e,"unpause",E),u.Events.off(e,"timeupdate",B),z=null)}function D(e,t){if(R(),z=t,t){var n=l.O.getPlayerState(t);O.call(t,{type:"init"},n),u.Events.on(t,"playbackstart",A),u.Events.on(t,"statechange",O),u.Events.on(t,"repeatmodechange",L),u.Events.on(t,"shufflequeuemodechange",q),u.Events.on(t,"playlistitemremove",M),u.Events.on(t,"playlistitemmove",C),u.Events.on(t,"playlistitemadd",C),u.Events.on(t,"playbackstop",Z),u.Events.on(t,"volumechange",N),u.Events.on(t,"pause",E),u.Events.on(t,"unpause",E),u.Events.on(t,"timeupdate",B);var a=l.O.getPlayerInfo().supportedCommands;G=a,function(e,t){for(var n=e.querySelectorAll(".btnCommand"),a=0,i=n.length;a<i;a++){var o=-1!==t.indexOf(n[a].getAttribute("data-command"));n[a].disabled=!o}}(e,a)}}function U(){z&&(this.classList.contains("repeatToggleButton")?function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}}():l.O.sendCommand({Name:this.getAttribute("data-command")},z))}function _(){n.e(8013).then(n.bind(n,8013)).then((function(e){var t=e.default;I(z).then((function(e){return e.filter((function(e){return e.Id&&e.ServerId}))})).then((function(e){var n=e.length?e[0].ServerId:ApiClient.serverId();new t({items:e.map((function(e){return e.Id})),serverId:n,enableAddToPlayQueue:!1,defaultValue:"new"})}))}))}function j(){D(V,l.O.getCurrentPlayer())}function F(e){var t=e.target;return l.O.sendCommand({Name:"DisplayMessage",Arguments:{Header:t.querySelector("#txtMessageTitle").value,Text:t.querySelector("#txtMessageText",t).value}},z),t.querySelector("input").value="",(0,P.Z)("Message sent."),e.preventDefault(),e.stopPropagation(),!1}function H(e){var t=e.target;return l.O.sendCommand({Name:"SendString",Arguments:{String:t.querySelector("#txtTypeText",t).value}},z),t.querySelector("input").value="",(0,P.Z)("Text sent."),e.preventDefault(),e.stopPropagation(),!1}var V,z,Q,G=[],K=0,W=0,Y=this;Y.init=function(e,t){!function(e,t){var i='<div class="volumecontrol flex align-items-center flex-wrap-wrap justify-content-center">';i+='<button is="paper-icon-button-light" class="buttonMute autoSize" title='.concat(d.ZP.translate("Mute"),'><span class="xlargePaperIconButton material-icons volume_up"></span></button>'),i+='<div class="sliderContainer nowPlayingVolumeSliderContainer"><input is="emby-slider" type="range" step="1" min="0" max="100" value="0" class="nowPlayingVolumeSlider"/></div>',i+="</div>";var o=t.querySelector(".playlistSectionButton");if(m.Z.mobile?(o.querySelector(".btnTogglePlaylist").insertAdjacentHTML("afterend",i),o.classList.add("playlistSectionButtonTransparent"),t.querySelector(".btnTogglePlaylist").classList.remove("hide"),t.querySelector(".playlistSectionButton").classList.remove("justify-content-center"),t.querySelector(".playlistSectionButton").classList.add("justify-content-space-between")):(t.querySelector(".nowPlayingSecondaryButtons").insertAdjacentHTML("beforeend",i),o.classList.remove("align-items-center","justify-content-center"),o.classList.add("align-items-right","justify-content-flex-end"),t.querySelector(".playlist").classList.remove("hide"),t.querySelector(".btnSavePlaylist").classList.remove("hide"),t.classList.add("padded-bottom")),function(e){for(var t=e.querySelectorAll(".btnCommand"),i=e.querySelector(".nowPlayingPositionSlider"),o=0,r=t.length;o<r;o++)t[o].addEventListener("click",U);e.querySelector(".btnToggleFullscreen").addEventListener("click",(function(e){z&&l.O.sendCommand({Name:e.target.getAttribute("data-command")},z)})),e.querySelector(".btnAudioTracks").addEventListener("click",(function(e){var t,a,i,o;z&&Q&&Q.NowPlayingItem&&(t=z,a=e.target,Q.NowPlayingItem,i=l.O.getAudioStreamIndex(t),o=l.O.audioTracks(t).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==i&&(t.selected=!0),t})),Promise.resolve().then(n.bind(n,32465)).then((function(e){e.show({items:o,positionTo:a,callback:function(e){l.O.setAudioStreamIndex(parseInt(e),t)}})})))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(e){var t,a,i,o;z&&Q&&Q.NowPlayingItem&&(t=z,a=e.target,Q.NowPlayingItem,i=l.O.getSubtitleStreamIndex(t),(o=l.O.subtitleTracks(t).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==i&&(t.selected=!0),t}))).unshift({id:-1,name:d.ZP.translate("Off"),selected:null==i}),Promise.resolve().then(n.bind(n,32465)).then((function(e){e.show({items:o,positionTo:a,callback:function(e){l.O.setSubtitleStreamIndex(parseInt(e),t)}})})))})),e.querySelector(".btnStop").addEventListener("click",(function(){z&&l.O.stop(z)})),e.querySelector(".btnPlayPause").addEventListener("click",(function(){z&&l.O.playPause(z)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){z&&l.O.nextTrack(z)})),e.querySelector(".btnRewind").addEventListener("click",(function(){z&&l.O.rewind(z)})),e.querySelector(".btnFastForward").addEventListener("click",(function(){z&&l.O.fastForward(z)}));var s,u=w(e.querySelectorAll(".btnShuffleQueue"));try{for(u.s();!(s=u.n()).done;)s.value.addEventListener("click",(function(){z&&l.O.toggleQueueShuffleMode(z)}))}catch(e){u.e(e)}finally{u.f()}e.querySelector(".btnPreviousTrack").addEventListener("click",(function(e){if(z)if("Audio"===Q.NowPlayingItem.MediaType&&(z._currentTime>=5||!l.O.previousTrack(z))){if(e.detail>1&&l.O.previousTrack(z))return;l.O.seekPercent(0,z),i.value=0}else l.O.previousTrack(z)})),e.querySelector(".btnPreviousTrack").addEventListener("dblclick",(function(){z&&l.O.previousTrack(z)})),i.addEventListener("change",(function(){var e=this.value;if(z){var t=parseFloat(e);l.O.seekPercent(t,z)}})),i.getBubbleText=function(e){if(!Q||!Q.NowPlayingItem||!W)return"--:--";var t=W;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},e.querySelector(".nowPlayingVolumeSlider").addEventListener("input",(function(e){l.O.setVolume(e.target.value,z)})),e.querySelector(".buttonMute").addEventListener("click",(function(){l.O.toggleMute(z)}));var c=e.querySelector(".playlist");c.addEventListener("action-remove",(function(e){l.O.removeFromPlaylist([e.detail.playlistItemId],z)})),c.addEventListener("itemdrop",(function(e){var t=e.detail.newIndex,n=e.detail.playlistItemId;l.O.movePlaylistItem(n,t,z)})),e.querySelector(".btnSavePlaylist").addEventListener("click",_),e.querySelector(".btnTogglePlaylist").addEventListener("click",(function(){e.querySelector(".playlist").classList.contains("hide")?(e.querySelector(".playlist").classList.remove("hide"),e.querySelector(".btnSavePlaylist").classList.remove("hide"),e.querySelector(".volumecontrol").classList.add("hide"),m.Z.mobile&&e.querySelector(".playlistSectionButton").classList.remove("playlistSectionButtonTransparent")):(e.querySelector(".playlist").classList.add("hide"),e.querySelector(".btnSavePlaylist").classList.add("hide"),(T||k)&&e.querySelector(".volumecontrol").classList.remove("hide"),m.Z.mobile&&e.querySelector(".playlistSectionButton").classList.add("playlistSectionButtonTransparent"))}))}(t),t.querySelector(".sendMessageForm").addEventListener("submit",F),t.querySelector(".typeTextForm").addEventListener("submit",H),u.Events.on(l.O,"playerchange",j),m.Z.tv){var r=t.querySelector(".nowPlayingPositionSlider");r.classList.add("focusable"),r.enableKeyboardDragging()}}(0,V=t)},Y.onShow=function(){var e;e=V,window.location.hash,D(e,l.O.getCurrentPlayer())},Y.destroy=function(){R(),u.Events.off(l.O,"playerchange",j),Q=null}}var L=n(17025);function q(e,t){var n=new A;n.init(e,e.querySelector(".remoteControlContent")),e.addEventListener("viewshow",(function(e){L.Z.setTransparentMenu(!0),n&&n.onShow()})),e.addEventListener("viewbeforehide",(function(e){L.Z.setTransparentMenu(!1),n&&n.destroy()}))}n(78066)},21100:function(e,t,n){"use strict";var a=n(93476),i=n.n(a),o=n(91678),r=n.n(o),l=n(43097),s=i()((function(e){return e[1]})),u=r()(l.Z);s.push([e.id,'.nowPlayingPage{padding:5em 0 0!important}.nowPlayingInfoContainer{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-shrink:0;flex-shrink:0}.navigationSection{text-align:center}.btnArrowUp{border-radius:40% 40% 10% 10%}.btnArrowLeft{border-radius:40% 10% 10% 40%}.btnArrowRight{border-radius:10% 40% 40% 10%}.btnArrowDown{border-radius:10% 10% 40% 40%}.btnOk{border-radius:10%}.nowPlayingPageTitle{margin:0 0 .5em .5em}.nowPlayingAlbum a,.nowPlayingArtist a{font-weight:400;text-align:left!important;color:inherit!important}.nowPlayingButtonsContainer{display:-webkit-flex;display:flex}.infoContainer,.sliderContainer{-webkit-flex-shrink:0;flex-shrink:0}.nowPlayingInfoContainerMedia{text-align:left;margin-bottom:1em}.nowPlayingPositionSlider{width:-webkit-fill-available;width:stretch}.nowPlayingPositionSliderContainer{margin:.2em 1em;width:100%;z-index:0}.nowPlayingInfoButtons{-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-shrink:0;flex-shrink:0}.nowPlayingInfoButtons,.nowPlayingInfoControls,.nowPlayingTime{display:-webkit-flex;display:flex}.nowPlayingPageImageContainer{width:16%;margin-right:1em;position:relative;-webkit-flex-shrink:0;flex-shrink:0}.nowPlayingPageImageContainerNoAlbum{width:100%;position:relative}.nowPlayingPageImageContainerNoAlbum button{cursor:default}.nowPlayingPageImageContainerNoAlbum:after{content:"";display:block;padding-bottom:100%}.btnPlayPause{font-size:xx-large;padding:0;margin:0}.nowPlayingInfoControls{-webkit-flex-grow:1;flex-grow:1;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center}.nowPlayingPageImage{display:block;bottom:0;left:0;right:0;margin:0 auto;width:100%;box-shadow:0 0 1.9vh #000;border:.1em solid #222;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none}.contextMenuList{padding:1.5em 0}.contextMenuList a{color:inherit!important}.contextMenuList .material-icons.listItemIcon{font-size:x-large}.nowPlayingSecondaryButtons{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-end;justify-content:flex-end;z-index:0}.layout-mobile .playlistSectionButtonTransparent{background:transparent!important}.layout-mobile .playlistSection .contextMenu,.layout-mobile .playlistSection .playlist{position:absolute;top:12.2em;bottom:4.2em;overflow:scroll;padding:0 1em;display:inline-block;left:0;right:0;z-index:1000}.layout-mobile .playlistSectionButton{position:fixed;bottom:0;left:0;height:4.2em;right:0;padding-left:7.3%;padding-right:7.3%}.layout-desktop .nowPlayingPlaylist,.layout-desktop .playlistSectionButton,.layout-tv .nowPlayingPlaylist,.layout-tv .playlistSectionButton{background:none}.layout-mobile .playlistSectionButton .btnTogglePlaylist{font-size:larger;margin:0}.layout-mobile .playlistSectionButton .btnSavePlaylist{margin:0;border-radius:0}.layout-mobile .playlistSectionButton .volumecontrol{margin:0;padding-right:0;border-radius:0}.layout-mobile .playlistSectionButton .btnToggleContextMenu{font-size:larger;margin:0}.layout-desktop .nowPlayingInfoButtons .btnRepeat,.layout-desktop .nowPlayingInfoButtons .btnShuffleQueue,.layout-desktop .playlistSectionButton .volumecontrol,.layout-mobile .nowPlayingPageUserDataButtons,.layout-mobile .nowPlayingSecondaryButtons .volumecontrol,.layout-tv .nowPlayingInfoButtons .btnRepeat,.layout-tv .nowPlayingInfoButtons .btnShuffleQueue,.layout-tv .playlistSectionButton .volumecontrol,.nowPlayingInfoControls .nowPlayingPageUserDataButtonsTitle{display:none}@media (min-width:63em){.nowPlayingPage{padding:8em 0 0!important}}@media (min-width:80em){.nowPlayingPageImageContainer{margin-right:.75em}}@media (orientation:portrait) and (max-width:43em){.remoteControlContent{padding-left:7.3%!important;padding-right:7.3%!important;display:-webkit-flex;display:flex;height:100%;-webkit-flex-direction:column;flex-direction:column}.layout-desktop .nowPlayingPageUserDataButtons{display:none}.nowPlayingInfoContainer{-webkit-flex-direction:column!important;flex-direction:column!important;-webkit-align-items:center;align-items:center;width:100%;height:calc(100% - 4.2em)}.nowPlayingPageTitle{margin:0}.nowPlayingAlbum,.nowPlayingArtist{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nowPlayingInfoContainerMedia{text-align:left!important;width:80%}.nowPlayingPositionSliderContainer{margin:.2em 1em}.nowPlayingInfoButtons{-webkit-justify-content:center;justify-content:center;font-size:x-large;height:100%}.nowPlayingPageImageContainer{width:100%;margin:auto auto .5em}.nowPlayingPageImageContainerNoAlbum .cardImageContainer .cardImageIcon{font-size:15em;color:inherit}.nowPlayingInfoControls{margin:.5em 0 1em;width:100%;-webkit-justify-content:start!important;justify-content:start!important}.nowPlayingSecondaryButtons{-webkit-justify-content:center;justify-content:center}.nowPlayingInfoControls .nowPlayingPageUserDataButtonsTitle{width:20%;font-size:large;display:unset}.nowPlayingInfoControls .nowPlayingPageUserDataButtonsTitle button{padding-top:0;padding-right:0;margin-right:0;float:right;border-radius:0}.nowPlayingInfoButtons .btnRepeat,.nowPlayingInfoButtons .btnRewind{position:absolute;left:0;margin-left:0;padding-left:7.3%;font-size:smaller}.nowPlayingInfoButtons .btnFastForward,.nowPlayingInfoButtons .btnShuffleQueue{position:absolute;right:0;margin-right:0;padding-right:7.3%;font-size:smaller}.paper-icon-button-light{background-color:transparent!important}.btnPlayPause{padding:0;margin:0;font-size:1.7em}.nowPlayingPageImage{overflow-y:hidden;overflow:hidden;margin:0 auto}.nowPlayingPageImage.nowPlayingPageImageAudio{width:100%}.nowPlayingPageImageContainer.nowPlayingPageImagePoster{height:50%;overflow:hidden}.nowPlayingPageImageContainer.nowPlayingPageImagePoster img{height:100%;width:auto}.playlistSectionButton .volumecontrol{width:100%}.remoteControlSection{margin:4.2em 0 0;padding:0 0 4.2em}.nowPlayingButtonsContainer{display:-webkit-flex;display:flex;height:100%;-webkit-flex-direction:column;flex-direction:column}}.nowPlayingTime{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;margin:0 1em}.nowPlayingNavButtonContainer{width:30em}.smallBackdropPosterItem .cardOverlayInner>div{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.playlistIndexIndicatorImage{background-size:auto auto!important;background-size:initial!important;background-image:url('+u+")!important}.playlistIndexIndicatorImage>*{display:none}.hideVideoButtons .videoButton{display:none}.nowPlayingVolumeSliderContainer{width:9em}@media (max-width:63em){.nowPlayingInfoButtons .btnStop,.nowPlayingInfoButtons .playlist .listItemMediaInfo{display:none!important}.navigationSection .collapseContent .material-icons{font-size:4em}}",""]),t.Z=s},43097:function(e,t,n){"use strict";t.Z=n.p+"74ce2b743c33a4197e5c7a3871888200.gif"}}]);