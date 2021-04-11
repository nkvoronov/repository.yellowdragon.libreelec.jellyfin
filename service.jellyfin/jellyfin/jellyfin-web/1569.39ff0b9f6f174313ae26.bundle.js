(self.webpackChunk=self.webpackChunk||[]).push([[1569],{91569:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}}),n(98010),n(58112),n(61013),n(63238),n(61418),n(5769);var i,a,s=n(38102),l=n(1115),r=n(78695),o=n(53754),u=n(28978),c=n(6594),d=n(27515),b=n(83094),m=(n(50447),n(17734),n(21865),n(16589),n(56561),n(1892)),v=n.n(m),h=n(57712),g=(v()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,n(78066),n(93462),n(53913)),p=n(38440),f=n(56346),S=n(40918),y=n.n(S);function I(e,t){var n="Items/"+i.Id+"/RemoteSearch/Subtitles/"+t,s=g.Z.getApiClient(i.ServerId);s.ajax({type:"POST",url:s.getUrl(n)}).then((function(){a=!0,(0,p.Z)(o.ZP.translate("MessageDownloadQueued")),d.Z.autoFocus(e)}))}function Z(e,t,n){function a(t){i=t,function(e,t){var n=(t.MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type})),i="";n.length&&(i+="<h2>"+o.ZP.translate("MySubtitles")+"</h2>",i+="<div>",i+=n.map((function(e){var t="",n=r.Z.tv?"button":"div",i=r.Z.tv&&e.Path?"listItem listItem-border btnDelete":"listItem listItem-border";return r.Z.tv&&(i+=" listItem-focusscale listItem-button"),t+="<"+n+' class="'+(i+=" listItem-noborder")+'" data-index="'+e.Index+'">',t+='<span class="listItemIcon material-icons closed_caption"></span>',t+='<div class="listItemBody two-line">',t+="<div>",t+=e.DisplayTitle||"",t+="</div>",e.Path&&(t+='<div class="secondary listItemBodyText">'+e.Path+"</div>"),t+="</a>",t+="</div>",r.Z.tv||e.Path&&(t+='<button is="paper-icon-button-light" data-index="'+e.Index+'" title="'+o.ZP.translate("Delete")+'" class="btnDelete listItemButton"><span class="material-icons delete"></span></button>'),t+"</"+n+">"})).join(""),i+="</div>");var a=e.querySelector(".subtitleList");n.length?a.classList.remove("hide"):a.classList.add("hide"),a.innerHTML=i}(e,t);var n=t.Path||"",a=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));a>-1&&(n=n.substring(a+1)),n?(e.querySelector(".pathValue").innerHTML=n,e.querySelector(".originalFile").classList.remove("hide")):(e.querySelector(".pathValue").innerHTML="",e.querySelector(".originalFile").classList.add("hide")),c.ZP.hide()}e.querySelector(".noSearchResults").classList.add("hide"),"string"==typeof n?t.getItem(t.getCurrentUserId(),n).then(a):a(n)}function L(e){var t=this,n=t.querySelector("#selectLanguage",t).value;return function(e,t){u.set("subtitleeditor-language",t),c.ZP.show();var n=g.Z.getApiClient(i.ServerId),a=n.getUrl("Items/"+i.Id+"/RemoteSearch/Subtitles/"+t);n.getJSON(a).then((function(t){!function(e,t){var n="",i="";if(!t.length)return e.querySelector(".noSearchResults").classList.remove("hide"),e.querySelector(".subtitleResults").innerHTML="",void c.ZP.hide();e.querySelector(".noSearchResults").classList.add("hide");for(var a=0,s=t.length;a<s;a++){var l=t[a],u=l.ProviderName;u!==n&&(a>0&&(i+="</div>"),i+="<h2>"+u+"</h2>",i+="<div>",n=u);var d=r.Z.tv?"button":"div",b=r.Z.tv?"listItem listItem-border btnOptions":"listItem listItem-border";r.Z.tv&&(b+=" listItem-focusscale listItem-button"),i+="<"+d+' class="'+b+'" data-subid="'+l.Id+'">',i+='<span class="listItemIcon material-icons closed_caption"></span>',i+='<div class="listItemBody '+(l.Comment||l.IsHashMatch?"three-line":"two-line")+'">',i+="<div>"+l.Name+"</div>",i+='<div class="secondary listItemBodyText">',l.Format&&(i+='<span style="margin-right:1em;">'+o.ZP.translate("FormatValue",l.Format)+"</span>"),null!=l.DownloadCount&&(i+="<span>"+o.ZP.translate("DownloadsValue",l.DownloadCount)+"</span>"),i+="</div>",l.Comment&&(i+='<div class="secondary listItemBodyText">'+l.Comment+"</div>"),l.IsHashMatch&&(i+='<div class="secondary listItemBodyText"><div class="inline-flex align-items-center justify-content-center" style="background:#3388cc;color:#fff;padding: .3em 1em;border-radius:1000em;">'+o.ZP.translate("PerfectMatch")+"</div></div>"),i+="</div>",r.Z.tv||(i+='<button type="button" is="paper-icon-button-light" data-subid="'+l.Id+'" class="btnDownload listItemButton"><span class="material-icons file_download"></span></button>'),i+="</"+d+">"}t.length&&(i+="</div>"),e.querySelector(".subtitleResults").innerHTML=i,c.ZP.hide()}(e,t)}))}(b.ZP.parentWithClass(t,"formDialogContent"),n),e.preventDefault(),!1}function P(e){var t=b.ZP.parentWithClass(e.target,"btnDelete");if(t){var n=t.getAttribute("data-index");!function(e,t){var n=o.ZP.translate("MessageAreYouSureDeleteSubtitles");(0,f.Z)({title:o.ZP.translate("ConfirmDeletion"),text:n,confirmText:o.ZP.translate("Delete"),primary:"delete"}).then((function(){c.ZP.show();var n=i.Id,s="Videos/"+n+"/Subtitles/"+t,l=g.Z.getApiClient(i.ServerId);l.ajax({type:"DELETE",url:l.getUrl(s)}).then((function(){a=!0,Z(e,l,n)}))}))}(b.ZP.parentWithClass(t,"subtitleEditorDialog"),n)}}function C(e){var t,i=b.ZP.parentWithClass(e.target,"btnOptions");i&&(t=i.getAttribute("data-subid"),function(e,t,i){var a=[];a.push({name:o.ZP.translate("Download"),id:"download"}),Promise.resolve().then(n.bind(n,32465)).then((function(n){n.show({items:a,positionTo:e}).then((function(e){switch(e){case"download":I(t,i)}}))}))}(i,b.ZP.parentWithClass(i,"subtitleEditorDialog"),t));var a=b.ZP.parentWithClass(e.target,"btnDownload");a&&(t=a.getAttribute("data-subid"),I(b.ZP.parentWithClass(a,"subtitleEditorDialog"),t))}function D(e,t,i){Promise.resolve().then(n.bind(n,74227)).then((function(n){var a=n.default,s=i?"on":"off";a.centerFocus[s](e,t)}))}function q(e){var t=b.ZP.parentWithClass(e.target,"subtitleEditorDialog"),s=t.querySelector("#selectLanguage"),l=g.Z.getApiClient(i.ServerId);Promise.all([n.e(3800),n.e(8025)]).then(n.bind(n,8025)).then((function(e){e.default.show({languages:{list:s.innerHTML,value:s.value},itemId:i.Id,serverId:i.ServerId}).then((function(e){e&&(a=!0,Z(t,l,i.Id))}))}))}var x={show:function(e,t){return c.ZP.show(),function(e,t){a=!1;var n=g.Z.getApiClient(t);return n.getItem(n.getCurrentUserId(),e).then((function(e){var t={removeOnClose:!0,scrollY:!1};r.Z.tv?t.size="fullscreen":t.size="small";var i=l.default.createDialog(t);i.classList.add("formDialog"),i.classList.add("subtitleEditorDialog"),i.innerHTML=o.ZP.translateHtml(y(),"core"),i.querySelector(".originalSubtitleFileLabel").innerHTML=o.ZP.translate("File"),i.querySelector(".subtitleSearchForm").addEventListener("submit",L),i.querySelector(".btnOpenUploadMenu").addEventListener("click",q);var c=i.querySelector(".btnSubmit");r.Z.tv?(D(i.querySelector(".formDialogContent"),!1,!0),i.querySelector(".btnSearchSubtitles").classList.add("hide")):c.classList.add("hide"),!r.Z.tv&&s.M.supports("externallinks")||i.querySelector(".btnHelp").remove();var d=i.querySelector(".formDialogContent");return i.querySelector(".subtitleList").addEventListener("click",P),i.querySelector(".subtitleResults").addEventListener("click",C),n.getCultures().then((function(e){!function(e,t,n){var i=e.querySelector("#selectLanguage");i.innerHTML=n.map((function(e){return'<option value="'+e.ThreeLetterISOLanguageName+'">'+e.DisplayName+"</option>"}));var a=u.get("subtitleeditor-language");a?i.value=a:t.getCurrentUser().then((function(e){var t=e.Configuration.SubtitleLanguagePreference;t&&(i.value=t)}))}(d,n,e)})),i.querySelector(".btnCancel").addEventListener("click",(function(){l.default.close(i)})),new Promise((function(t,s){i.addEventListener("close",(function(){r.Z.tv&&D(i.querySelector(".formDialogContent"),!1,!1),a?t():s()})),l.default.open(i),Z(d,n,e)}))}))}(e,t)}}},57712:function(e,t,n){"use strict";var i=n(93476),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,".originalSubtitleFileLabel{margin-right:1em}",""]),t.Z=a},40918:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle">${Subtitles}</h3> <a is="emby-linkbutton" rel="noopener noreferrer" data-autohide="true" class="button-link btnHelp flex align-items-center" href="https://docs.jellyfin.org/general/server/media/subtitles.html" target="_blank" style="margin-left:auto;margin-right:.5em;padding:.25em" title="${Help}"><span class="material-icons info"></span><span style="margin-left:.25em">${Help}</span></a> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <div class="subtitleList" style="margin-bottom:2em"></div> <h2>${SearchForSubtitles}</h2> <p style="margin:1.5em 0" class="originalFile"><span class="originalSubtitleFileLabel secondaryText"></span><span class="pathValue"></span></p> <form class="subtitleSearchForm" style="max-width:none"> <div class="flex align-items-center"> <div class="selectContainer flex-grow" style="margin-bottom:0"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}" autofocus></select> </div> <button type="submit" is="paper-icon-button-light" title="${Search}" class="btnSearchSubtitles flex-shrink-zero emby-select-iconbutton"><span class="material-icons search"></span></button> <button type="button" is="paper-icon-button-light" title="${Upload}" class="btnOpenUploadMenu flex-shrink-zero emby-select-iconbutton"><span class="material-icons add"></span></button> </div> <button is="emby-button" type="submit" class="raised btnSubmit block button-submit">${Search}</button> </form> <br/> <div class="subtitleResults"></div> <div class="noSearchResults hide"> ${NoSubtitleSearchResultsFound} </div> </div> </div> '}}]);