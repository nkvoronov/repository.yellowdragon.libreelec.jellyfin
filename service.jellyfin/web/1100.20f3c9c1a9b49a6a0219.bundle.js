(self.webpackChunk=self.webpackChunk||[]).push([[1100],{61100:function(e,t,a){"use strict";a.r(t),a.d(t,{show:function(){return c}}),a(23938),a(48410),a(63238),a(43512),a(32081),a(61418);var o=a(1115),n=a(28469),l=a(53754),s=(a(50447),a(21865),a(16589),a(53200)),r=a.n(s);function i(e){var t=0,a=e%1;return a&&(t=parseInt(60*a)),n.ZP.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}function c(e){return new Promise((function(t,a){var n=o.default.createDialog({removeOnClose:!0,size:"small"});n.classList.add("formDialog");var s,c,u,d,p,v="";v+=l.ZP.translateHtml(r()),n.innerHTML=v,function(e){for(var t="",a=0;a<24;a++)t+='<option value="'.concat(a,'">').concat(i(a),"</option>");t+='<option value="24">'.concat(i(0),"</option>"),e.querySelector("#selectStart").innerHTML=t,e.querySelector("#selectEnd").innerHTML=t}(n),s=n,u=(c=e.schedule).DayOfWeek,d=c.StartHour,p=c.EndHour,s.querySelector("#selectDay").value=u||"Sunday",s.querySelector("#selectStart").value=d||0,s.querySelector("#selectEnd").value=p||0,o.default.open(n),n.addEventListener("close",(function(){n.submitted?t(e.schedule):a()})),n.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(n)})),n.querySelector("form").addEventListener("submit",(function(t){return function(e,t){var a={DayOfWeek:e.querySelector("#selectDay").value,StartHour:e.querySelector("#selectStart").value,EndHour:e.querySelector("#selectEnd").value};parseFloat(a.StartHour)>=parseFloat(a.EndHour)?alert(l.ZP.translate("ErrorStartHourGreaterThanEnd")):(e.submitted=!0,t.schedule=Object.assign(t.schedule,a),o.default.close(e))}(n,e),t.preventDefault(),!1}))}))}t.default={show:c}},53200:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" title="${Previous}" tabindex="-1"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"> ${HeaderAccessSchedule} </h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <form class="scheduleForm" style="margin:auto"> <div class="selectContainer"> <select is="emby-select" id="selectDay" label="${LabelAccessDay}"> <option value="Sunday">${Sunday}</option> <option value="Monday">${Monday}</option> <option value="Tuesday">${Tuesday}</option> <option value="Wednesday">${Wednesday}</option> <option value="Thursday">${Thursday}</option> <option value="Friday">${Friday}</option> <option value="Saturday">${Saturday}</option> <option value="Everyday">${OptionEveryday}</option> <option value="Weekday">${OptionWeekdays}</option> <option value="Weekend">${OptionWeekends}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectHour" id="selectStart" label="${LabelAccessStart}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectHour" id="selectEnd" label="${LabelAccessEnd}"></select> </div> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised button-submit block formDialogFooterItem"> <span>${Add}</span> </button> </div> </form> </div> </div> '}}]);