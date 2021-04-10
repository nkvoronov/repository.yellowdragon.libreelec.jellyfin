(self.webpackChunk=self.webpackChunk||[]).push([[745],{39359:function(e,t,n){"use strict";n.r(t),n(61013),n(63238),n(61418),n(5769),n(71848);var a=n(53754),s=n(30504),i=n(83094),r=n(78695),l=n(6594),d=n(47518),o=(n(17734),n(93462),n(51547),n(5100),n(56561),n(78066),n(76543)),c=n(56346),u=!d.Z.slow&&!d.Z.edge;function v(e){var t="card scalableCard backdropCard backdropCard-scalable",n="";return r.Z.tv&&(t+=" show-focus",u&&(t+=" show-animation")),n+='<div type="button" class="'+t+'" data-id="'+e.Id+'">',n+='<div class="cardBox visualCardBox">',n+='<div class="cardScalable visualCardBox-cardScalable">',n+='<div class="cardPadder-backdrop"></div>',n+='<div class="cardContent searchImage">',n+='<div class="cardImageContainer coveredImage"><span class="cardImageIcon material-icons dvr"></span></div>',n+="</div>",n+="</div>",n+='<div class="cardFooter visualCardBox-cardFooter">',n+='<button is="paper-icon-button-light" class="itemAction btnCardOptions autoSize" data-action="menu"><span class="material-icons more_vert"></span></button>',n+='<div class="cardText">'+(e.FriendlyName||function(e){switch(e=e.toLowerCase()){case"m3u":return"M3U";case"hdhomerun":return"HDHomeRun";case"hauppauge":return"Hauppauge";case"satip":return"DVB";default:return"Unknown"}}(e.Type))+"</div>",n+='<div class="cardText cardText-secondary">',n+=e.Url||"&nbsp;",n+="</div>",n+="</div>",(n+="</div>")+"</div>"}function h(e){l.ZP.show(),ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){e.querySelector(".devicesList").innerHTML=t.map(v).join("")}(e,t.TunerHosts),function(e,t){var s="";if(t.length){s+='<div class="paperList">';for(var i=0,r=t.length;i<r;i++){var d=t[i];s+='<div class="listItem">',s+='<span class="listItemIcon material-icons dvr"></span>',s+='<div class="listItemBody two-line">',s+='<a is="emby-linkbutton" style="display:block;padding:0;margin:0;text-align:left;" class="clearLink" href="'+f(d.Type)+"&id="+d.Id+'">',s+='<h3 class="listItemBodyText">',s+=p(d.Type),s+="</h3>",s+='<div class="listItemBodyText secondary">',s+=d.Path||d.ListingsId||"",s+="</div>",s+="</a>",s+="</div>",s+='<button type="button" is="paper-icon-button-light" class="btnOptions" data-id="'+d.Id+'"><span class="material-icons listItemAside more_vert"></span></button>',s+="</div>"}s+="</div>"}var o=$(".providerList",e).html(s);$(".btnOptions",o).on("click",(function(){var t=this.getAttribute("data-id");!function(e,t,s){var i=[];i.push({name:a.ZP.translate("Delete"),id:"delete"}),i.push({name:a.ZP.translate("MapChannels"),id:"map"}),Promise.resolve().then(n.bind(n,32465)).then((function(r){r.default.show({items:i,positionTo:s}).then((function(s){switch(s){case"delete":!function(e,t){var n=a.ZP.translate("MessageConfirmDeleteGuideProvider");(0,c.Z)(n,a.ZP.translate("HeaderDeleteProvider")).then((function(){l.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/ListingProviders",{Id:t})}).then((function(){h(e)}),(function(){h(e)}))}))}(e,t);break;case"map":!function(e,t){n.e(1916).then(n.bind(n,61916)).then((function(e){new(0,e.default)({serverId:ApiClient.serverInfo().Id,providerId:t}).show()}))}(0,t)}}))}))}(e,t,this)}))}(e,t.ListingProviders)})),l.ZP.hide()}function p(e){switch(e=e.toLowerCase()){case"schedulesdirect":return"Schedules Direct";case"xmltv":return"XMLTV";default:return"Unknown"}}function f(e){switch(e=e.toLowerCase()){case"xmltv":return"#!/livetvguideprovider.html?type=xmltv";case"schedulesdirect":return"#!/livetvguideprovider.html?type=schedulesdirect"}}function m(e){var t,s,r,d=i.ZP.parentWithClass(e.target,"card");if(d){var u=d.getAttribute("data-id"),v=i.ZP.parentWithClass(e.target,"btnCardOptions");v?(t=v,s=u,(r=[]).push({name:a.ZP.translate("Delete"),id:"delete"}),r.push({name:a.ZP.translate("Edit"),id:"edit"}),Promise.resolve().then(n.bind(n,32465)).then((function(e){e.default.show({items:r,positionTo:t}).then((function(e){switch(e){case"delete":!function(e,t){var n=a.ZP.translate("MessageConfirmDeleteTunerDevice");(0,c.Z)(n,a.ZP.translate("HeaderDeleteDevice")).then((function(){l.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/TunerHosts",{Id:t})}).then((function(){h(e)}))}))}(i.ZP.parentWithClass(t,"page"),s);break;case"edit":o.ZP.navigate("livetvtuner.html?id="+s)}}))}))):o.ZP.navigate("livetvtuner.html?id="+u)}}$(document).on("pageinit","#liveTvStatusPage",(function(){var e=this;$(".btnAddDevice",e).on("click",(function(){o.ZP.navigate("livetvtuner.html")})),$(".formAddDevice",e).on("submit",(function(){return function(e){e.querySelector(".dlgAddDevice").close(),l.ZP.show(),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/TunerHosts"),data:JSON.stringify({Type:$("#selectTunerDeviceType",e).val(),Url:$("#txtDevicePath",e).val()}),contentType:"application/json"}).then((function(){h(e)}),(function(){o.ZP.alert({message:a.ZP.translate("ErrorAddingTunerDevice")})}))}(e),!1})),$(".btnAddProvider",e).on("click",(function(){var e,t;e=this,(t=[]).push({name:"Schedules Direct",id:"SchedulesDirect"}),t.push({name:"XMLTV",id:"xmltv"}),Promise.resolve().then(n.bind(n,32465)).then((function(n){n.default.show({items:t,positionTo:e,callback:function(e){o.ZP.navigate(f(e))}})}))})),e.querySelector(".devicesList").addEventListener("click",m)})).on("pageshow","#liveTvStatusPage",(function(){var e=this;h(e),(0,s.Z)({mode:"on",progressElem:e.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:e.querySelector(".btnRefresh")})})).on("pagehide","#liveTvStatusPage",(function(){(0,s.Z)({mode:"off",progressElem:this.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:this.querySelector(".btnRefresh")})}))},30504:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}}),n(98010),n(76056);var a=n(47005),s=n(1197),i=n(53754),r=(n(78066),n(53913));function l(e){function t(){r.Z.getApiClient(v).getScheduledTasks({IsEnabled:!0}).then(n)}function n(t){var n=t.filter((function(t){return t.Key==e.taskKey}))[0];if(e.panel&&(n?e.panel.classList.remove("hide"):e.panel.classList.add("hide")),n){"Idle"==n.State?u.removeAttribute("disabled"):u.setAttribute("disabled","disabled"),u.setAttribute("data-taskid",n.Id);var a=(n.CurrentProgressPercentage||0).toFixed(1);if(e.progressElem&&(e.progressElem.value=a,"Running"==n.State?e.progressElem.classList.remove("hide"):e.progressElem.classList.add("hide")),e.lastResultElem){var s=n.LastExecutionResult?n.LastExecutionResult.Status:"";"Failed"==s?e.lastResultElem.html('<span style="color:#FF0000;">('+i.ZP.translate("LabelFailed")+")</span>"):"Cancelled"==s?e.lastResultElem.html('<span style="color:#0026FF;">('+i.ZP.translate("LabelCancelled")+")</span>"):"Aborted"==s?e.lastResultElem.html('<span style="color:#FF0000;">'+i.ZP.translate("LabelAbortedByServerShutdown")+"</span>"):e.lastResultElem.html(s)}}}function l(){var e;e=this.getAttribute("data-taskid"),r.Z.getApiClient(v).startScheduledTask(e).then(t)}function d(e,t,a){t.serverId()===v&&n(a)}var o,c,u=e.button,v=ApiClient.serverId();e.panel&&e.panel.classList.add("hide"),"off"==e.mode?(u.removeEventListener("click",l),a.Events.off(s.default,"ScheduledTasksInfo",d),r.Z.getApiClient(v).sendMessage("ScheduledTasksInfoStop"),o&&clearInterval(o)):(u.addEventListener("click",l),t(),c=r.Z.getApiClient(v),o&&clearInterval(o),c.sendMessage("ScheduledTasksInfoStart","1000,1000"),o=setInterval((function(){r.Z.getApiClient(v).isMessageChannelOpen()||t()}),5e3),a.Events.on(s.default,"ScheduledTasksInfo",d))}}}]);