(self.webpackChunk=self.webpackChunk||[]).push([[7038],{27038:function(e,a,t){"use strict";t.r(a),t.d(a,{show:function(){return B}}),t(61013),t(76056),t(63238),t(61418);var n,i,o,r,l,s=t(83094),c=t(6594),d=t(38102),u=t(1115),v=t(17146),g=t(47518),m=t(78695),p=t(74227),b=t(53754),y=(t(65219),t(21865),t(78066),t(16589),t(5100),t(53913)),h=t(51967),f=t.n(h),C=!g.Z.slow&&!g.Z.edge,P=!1,k=g.Z.slow?6:30,x=0,L="Primary";function w(){var e={};return e.itemId=n,e}function I(e,a){c.ZP.show();var t=w();t.type=L,t.startIndex=x,t.limit=k,t.IncludeAllLanguages=e.querySelector("#chkAllLanguages").checked;var n=l||"";n&&(t.ProviderName=n),a.getAvailableRemoteImages(t).then((function(i){!function(e,a,t,n,i,o){e.querySelector(".availableImagesPaging").innerHTML=function(e,a,t){var n="",i=Math.min(e+a,t),o=t>a;n+='<div class="listPaging">',n+='<span style="margin-right: 10px;">';var r=t?e+1:0;return n+=b.ZP.translate("ListPaging",r,i,t),n+="</span>",o&&(n+='<div data-role="controlgroup" data-type="horizontal" style="display:inline-block;">',n+='<button is="paper-icon-button-light" title="'+b.ZP.translate("Previous")+'" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',n+='<button is="paper-icon-button-light" title="'+b.ZP.translate("Next")+'" class="btnNextPage autoSize" '+(e+a>=t?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>',n+="</div>"),n+"</div>"}(i,o,t.TotalRecordCount);for(var r="",l=0,s=t.Images.length;l<s;l++)r+=S(t.Images[l],n,a);var c=e.querySelector(".availableImagesList");c.innerHTML=r,v.default.lazyChildren(c);var d=e.querySelector(".btnNextPage"),u=e.querySelector(".btnPreviousPage");d&&d.addEventListener("click",(function(){x+=k,I(e,a)})),u&&u.addEventListener("click",(function(){x-=k,I(e,a)}))}(e,a,i,L,t.startIndex,t.limit),e.querySelector("#selectBrowsableImageType").value=L;var o=i.Providers.map((function(e){return'<option value="'+e+'">'+e+"</option>"})),r=e.querySelector("#selectImageProvider");r.innerHTML='<option value="">'+b.ZP.translate("All")+"</option>"+o,r.value=n,c.ZP.hide()}))}function T(e,a,t,n,i){var o=w();o.Type=n,o.ImageUrl=t,o.ProviderName=i,c.ZP.show(),a.downloadRemoteImage(o).then((function(){P=!0;var a=s.ZP.parentWithClass(e,"dialog");u.default.close(a)}))}function Z(e,a){return a.getUrl("Images/Remote",{imageUrl:e})}function S(e,a,t){var n,o=m.Z.tv?"button":"div",r=!m.Z.tv,l="",s="card scalableCard imageEditorCard";return s+=" "+(n="Backdrop"===a||"Art"===a||"Thumb"===a||"Logo"===a?"backdrop":"Banner"===a?"banner":"Disc"===a?"square":"Episode"===i?"backdrop":"MusicAlbum"===i||"MusicArtist"===i?"square":"portrait")+"Card "+n+"Card-scalable","button"===o?(s+=" btnImageCard",m.Z.tv&&(s+=" show-focus",C&&(s+=" show-animation")),l+='<button type="button" class="'+s+'"'):l+='<div class="'+s+'"',l+=' data-imageprovider="'+e.ProviderName+'" data-imageurl="'+e.Url+'" data-imagetype="'+e.Type+'"',l+=">",l+='<div class="cardBox visualCardBox">',l+='<div class="cardScalable visualCardBox-cardScalable" style="background-color:transparent;">',l+='<div class="cardPadder-'+n+'"></div>',l+='<div class="cardContent">',m.Z.tv||!d.M.supports("externallinks")?l+='<div class="cardImageContainer lazy" data-src="'+Z(e.Url,t)+'" style="background-position:center center;background-size:contain;"></div>':l+='<a is="emby-linkbutton" target="_blank" href="'+Z(e.Url,t)+'" class="button-link cardImageContainer lazy" data-src="'+Z(e.Url,t)+'" style="background-position:center center;background-size:contain"></a>',l+="</div>",l+="</div>",l+='<div class="cardFooter visualCardBox-cardFooter">',l+='<div class="cardText cardTextCentered">'+e.ProviderName+"</div>",(e.Width||e.Height||e.Language)&&(l+='<div class="cardText cardText-secondary cardTextCentered">',e.Width&&e.Height?(l+=e.Width+" x "+e.Height,e.Language&&(l+=" • "+e.Language)):e.Language&&(l+=e.Language),l+="</div>"),null!=e.CommunityRating&&(l+='<div class="cardText cardText-secondary cardTextCentered">',"Likes"===e.RatingType?l+=e.CommunityRating+(1===e.CommunityRating?" like":" likes"):e.CommunityRating?(l+=e.CommunityRating.toFixed(1),e.VoteCount&&(l+=" • "+e.VoteCount+(1===e.VoteCount?" vote":" votes"))):l+="Unrated",l+="</div>"),r&&(l+='<div class="cardText cardTextCentered">',l+='<button is="paper-icon-button-light" class="btnDownloadRemoteImage autoSize" raised" title="'+b.ZP.translate("Download")+'"><span class="material-icons cloud_download"></span></button>',l+="</div>"),l+="</div>",(l+="</div>")+"</"+o+">"}function A(){m.Z.tv&&p.default.centerFocus.off(this,!1),c.ZP.hide(),P?o():r()}function B(e,a,t,d){return new Promise((function(v,g){o=v,r=g,P=!1,x=0,L=d||"Primary",l=null,function(e,a,t){c.ZP.show();var o=y.Z.getApiClient(a);n=e,i=t;var r={removeOnClose:!0};m.Z.tv?r.size="fullscreen":r.size="small";var d=u.default.createDialog(r);d.innerHTML=b.ZP.translateHtml(f(),"core"),m.Z.tv&&p.default.centerFocus.on(d,!1),d.addEventListener("close",A),u.default.open(d);var v=d.querySelector(".formDialogContent");!function(e,a){e.querySelector("#selectBrowsableImageType").addEventListener("change",(function(){L=this.value,x=0,l=null,I(e,a)})),e.querySelector("#selectImageProvider").addEventListener("change",(function(){x=0,l=this.value,I(e,a)})),e.querySelector("#chkAllLanguages").addEventListener("change",(function(){x=0,I(e,a)})),e.addEventListener("click",(function(t){var n=s.ZP.parentWithClass(t.target,"btnDownloadRemoteImage");if(n){var i=s.ZP.parentWithClass(n,"card");T(e,a,i.getAttribute("data-imageurl"),i.getAttribute("data-imagetype"),i.getAttribute("data-imageprovider"))}else{var o=s.ZP.parentWithClass(t.target,"btnImageCard");o&&T(e,a,o.getAttribute("data-imageurl"),o.getAttribute("data-imagetype"),o.getAttribute("data-imageprovider"))}}))}(v,o),d.querySelector(".btnCancel").addEventListener("click",(function(){u.default.close(d)})),I(v,o)}(e,a,t)}))}a.default={show:B}},51967:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${Search} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <div class="flex align-items-center justify-content-center flex-wrap-wrap" style="margin:2em 0"> <div style="margin:0"> <div class="selectContainer"> <select id="selectImageProvider" name="selectImageProvider" is="emby-select" label="${LabelSource}"> <option value="">${All}</option> </select> </div> </div> <div style="margin-left:1em"> <div class="selectContainer"> <select id="selectBrowsableImageType" name="selectBrowsableImageType" is="emby-select" label="${LabelType}"> <option value="Primary">${Primary}</option> <option value="Art">${Art}</option> <option value="Backdrop">${Backdrop}</option> <option value="Banner">${Banner}</option> <option value="Box">${Box}</option> <option value="BoxRear">${BoxRear}</option> <option value="Disc">${Disc}</option> <option value="Logo">${Logo}</option> <option value="Menu">${Menu}</option> <option value="Screenshot">${Screenshot}</option> <option value="Thumb">${Thumb}</option> </select> </div> </div> <div class="availableImagesPaging" style="margin-left:1em"></div> <label style="margin:0 0 0 1em;width:auto"> <input id="chkAllLanguages" type="checkbox" is="emby-checkbox"/> <span>${AllLanguages}</span> </label> </div> <div class="availableImagesList vertical-wrap centered"></div> </div> </div> '}}]);