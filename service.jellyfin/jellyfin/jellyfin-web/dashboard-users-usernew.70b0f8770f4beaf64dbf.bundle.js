(self.webpackChunk=self.webpackChunk||[]).push([[8306],{32683:function(e,n,l){"use strict";l.r(n),l(98010),l(5769),l(61013),l(63238),l(61418),l(17460),l(14078),l(71848);var a=l(6594),t=l(53754),s=(l(65219),l(76543)),c=l(38440);function i(){var e=$(this).parents(".page")[0];return a.ZP.show(),function(e){var n={};n.Name=$("#txtUsername",e).val(),n.Password=$("#txtPassword",e).val(),ApiClient.createUser(n).then((function(n){n.Policy.EnableAllFolders=$("#chkEnableAllFolders",e).is(":checked"),n.Policy.EnabledFolders=[],n.Policy.EnableAllFolders||(n.Policy.EnabledFolders=$(".chkFolder",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),n.Policy.EnableAllChannels=$("#chkEnableAllChannels",e).is(":checked"),n.Policy.EnabledChannels=[],n.Policy.EnableAllChannels||(n.Policy.EnabledChannels=$(".chkChannel",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){s.ZP.navigate("useredit.html?userId="+n.Id)}))}),(function(e){(0,c.Z)(t.ZP.translate("ErrorDefault")),a.ZP.hide()}))}(e),!1}$(document).on("pageinit","#newUserPage",(function(){var e=this;$("#chkEnableAllChannels",e).on("change",(function(){this.checked?$(".channelAccessListContainer",e).hide():$(".channelAccessListContainer",e).show()})),$("#chkEnableAllFolders",e).on("change",(function(){this.checked?$(".folderAccessListContainer",e).hide():$(".folderAccessListContainer",e).show()})),$(".newUserProfileForm").off("submit",i).on("submit",i)})).on("pageshow","#newUserPage",(function(){!function(e){$("#txtUsername",e).val(""),$("#txtPassword",e).val(""),a.ZP.show();var n=ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),l=ApiClient.getJSON(ApiClient.getUrl("Channels"));Promise.all([n,l]).then((function(n){!function(e,n){var l="";l+='<h3 class="checkboxListLabel">'+t.ZP.translate("HeaderLibraries")+"</h3>",l+='<div class="checkboxList paperList" style="padding:.5em 1em;">';for(var a=0;a<n.length;a++){var s=n[a];l+='<label><input type="checkbox" is="emby-checkbox" class="chkFolder" data-id="'+s.Id+'"/><span>'+s.Name+"</span></label>"}l+="</div>",$(".folderAccess",e).html(l).trigger("create"),$("#chkEnableAllFolders",e).prop("checked",!1)}(e,n[0].Items),function(e,n){var l="";l+='<h3 class="checkboxListLabel">'+t.ZP.translate("Channels")+"</h3>",l+='<div class="checkboxList paperList" style="padding:.5em 1em;">';for(var a=0;a<n.length;a++){var s=n[a];l+='<label><input type="checkbox" is="emby-checkbox" class="chkChannel" data-id="'+s.Id+'"/><span>'+s.Name+"</span></label>"}l+="</div>",$(".channelAccess",e).show().html(l).trigger("create"),n.length?$(".channelAccessContainer",e).show():$(".channelAccessContainer",e).hide(),$("#chkEnableAllChannels",e).prop("checked",!1)}(e,n[1].Items),a.ZP.hide()}))}(this)}))}}]);