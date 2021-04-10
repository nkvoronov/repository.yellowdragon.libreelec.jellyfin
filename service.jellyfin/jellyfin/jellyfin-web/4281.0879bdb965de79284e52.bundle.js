(self.webpackChunk=self.webpackChunk||[]).push([[4281],{44281:function(e,t,n){"use strict";n.r(t),n(63238),n(61418),n(5769);var i,l,o,s=n(1115),a=n(53754),r=n(78695),c=n(6594),d=n(74227),u=n(28469),p=(n(2553),n(78066),n(65219),n(30983),n(50447),n(21865),n(16589),n(26330),n(56561),n(93462),n(53913)),m=n(42754),v=n.n(m),y=!1,b=!1;function f(e,t){e.querySelector("#txtPrePaddingMinutes").value=t.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=t.PostPaddingSeconds/60,e.querySelector(".selectChannels").value=t.RecordAnyChannel?"all":"one",e.querySelector(".selectAirTime").value=t.RecordAnyTime?"any":"original",e.querySelector(".selectShowType").value=t.RecordNewOnly?"new":"all",e.querySelector(".chkSkipEpisodesInLibrary").checked=t.SkipEpisodesInLibrary,e.querySelector(".selectKeepUpTo").value=t.KeepUpTo||0,t.ChannelName||t.ChannelNumber?e.querySelector(".optionChannelOnly").innerHTML=a.ZP.translate("ChannelNameOnly",t.ChannelName||t.ChannelNumber):e.querySelector(".optionChannelOnly").innerHTML=a.ZP.translate("OneChannel"),e.querySelector(".optionAroundTime").innerHTML=a.ZP.translate("AroundTime",u.ZP.getDisplayTime(u.ZP.parseISO8601Date(t.StartDate))),c.ZP.hide()}function h(e){y=!0,b=e,s.default.close(i)}function g(e){var t=this,n=p.Z.getApiClient(o);return n.getLiveTvSeriesTimer(l).then((function(e){e.PrePaddingSeconds=60*t.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*t.querySelector("#txtPostPaddingMinutes").value,e.RecordAnyChannel="all"===t.querySelector(".selectChannels").value,e.RecordAnyTime="any"===t.querySelector(".selectAirTime").value,e.RecordNewOnly="new"===t.querySelector(".selectShowType").value,e.SkipEpisodesInLibrary=t.querySelector(".chkSkipEpisodesInLibrary").checked,e.KeepUpTo=t.querySelector(".selectKeepUpTo").value,n.updateLiveTvSeriesTimer(e)})),e.preventDefault(),!1}function S(e){!function(e){for(var t="",n=0;n<=50;n++)t+='<option value="'+n+'">'+(0===n?a.ZP.translate("AsManyAsPossible"):1===n?a.ZP.translate("ValueOneEpisode"):a.ZP.translate("ValueEpisodeCount",n))+"</option>";e.querySelector(".selectKeepUpTo").innerHTML=t}(e),e.querySelector(".btnCancel").addEventListener("click",(function(){h(!1)})),e.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,t;(e=p.Z.getApiClient(o),t=l,new Promise((function(i,l){Promise.resolve().then(n.bind(n,58104)).then((function(n){n.default.cancelSeriesTimerWithConfirmation(t,e.serverId()).then(i,l)}))}))).then((function(){h(!0)}))})),e.querySelector("form").addEventListener("submit",g)}function C(e,t){var n=p.Z.getApiClient(o);c.ZP.show(),"string"==typeof t?(l=t,n.getLiveTvSeriesTimer(t).then((function(t){f(e,t),c.ZP.hide()}))):t&&(l=t.Id,f(e,t),c.ZP.hide())}function P(){this.querySelector(".btnSubmit").click()}t.default={show:function(e,t,n){return new Promise((function(l,u){y=!1,b=!1,o=t,c.ZP.show(),n=n||{};var p={removeOnClose:!0,scrollY:!1};r.Z.tv?p.size="fullscreen":p.size="small";var m=s.default.createDialog(p);m.classList.add("formDialog"),m.classList.add("recordingDialog"),r.Z.tv||(m.style["min-width"]="20%");var f="";f+=a.ZP.translateHtml(v(),"core"),m.innerHTML=f,!1===n.enableCancel&&m.querySelector(".formDialogFooter").classList.add("hide"),i=m,m.addEventListener("closing",(function(){b||this.querySelector(".btnSubmit").click()})),m.addEventListener("close",(function(){y?l({updated:!0,deleted:b}):u()})),r.Z.tv&&d.default.centerFocus.on(m.querySelector(".formDialogContent"),!1),S(m),C(m,e),s.default.open(m)}))},embed:function(e,t,n){y=!1,b=!1,o=t,c.ZP.show(),n=n||{};var l={removeOnClose:!0,scrollY:!1};r.Z.tv?l.size="fullscreen":l.size="small";var s=n.context;s.classList.add("hide"),s.innerHTML=a.ZP.translateHtml(v(),"core"),s.querySelector(".formDialogHeader").classList.add("hide"),s.querySelector(".formDialogFooter").classList.add("hide"),s.querySelector(".formDialogContent").className="",s.querySelector(".dialogContentInner").className="",s.classList.remove("hide"),s.removeEventListener("change",P),s.addEventListener("change",P),i=s,S(s),C(s,e)}}},94921:function(e,t,n){"use strict";var i=n(93476),l=n.n(i)()((function(e){return e[1]}));l.push([e.id,".recordingDialog-imageContainer{-webkit-flex-shrink:0;flex-shrink:0;padding:1em 1em 1em 0;width:25%}.recordingDialog-img{width:100%}.recordingDialog-itemName{margin-top:.7em}.recordingDetailsContainer{display:-webkit-flex;display:flex}.recordingDetails{-webkit-flex-grow:1;flex-grow:1}.recordingDetailText{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}",""]),t.Z=l},42754:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderSeriesOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form style="max-width:none"> <div class="selectContainer"> <select is="emby-select" class="selectShowType" label="${LabelRecord}"> <option value="new">${NewEpisodesOnly}</option> <option value="all">${AllEpisodes}</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkSkipEpisodesInLibrary"/> <span>${SkipEpisodesAlreadyInMyLibrary}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SkipEpisodesAlreadyInMyLibraryHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChannels" label="${LabelChannels}"> <option class="optionChannelOnly" value="one">${OneChannel}</option> <option value="all">${AllChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectAirTime" label="${LabelAirTime}"> <option class="optionAroundTime" value="original"></option> <option value="any">${Anytime}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectKeepUpTo" label="${LabelKeepUpTo}"></select> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> '},26330:function(e,t,n){"use strict";var i=n(1892),l=n.n(i),o=n(94921);l()(o.Z,{insert:"head",singleton:!1}),o.Z.locals}}]);