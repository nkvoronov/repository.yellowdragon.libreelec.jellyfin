(self.webpackChunk=self.webpackChunk||[]).push([[1577],{94704:function(e,t,a){"use strict";a.r(t),a(5769),a(63238),a(61418),a(17460),a(14078),a(71848);var n=a(6594),r=a(17025),o=a(53754),i=(a(17734),a(76543));function u(e){return ApiClient.getCountries().then((function(t){var a="";a+="<option value=''></option>";for(var n=0,r=t.length;n<r;n++){var o=t[n];a+="<option value='"+o.TwoLetterISORegionName+"'>"+o.DisplayName+"</option>"}e.innerHTML=a}))}function l(){var e=this;return n.ZP.show(),ApiClient.getServerConfiguration().then((function(t){t.PreferredMetadataLanguage=e.querySelector("#selectLanguage").value,t.MetadataCountryCode=e.querySelector("#selectCountry").value,ApiClient.updateServerConfiguration(t).then(i.ZP.processServerConfigurationUpdateResult)})),!1}function s(){return[{href:"#!/library.html",name:o.ZP.translate("HeaderLibraries")},{href:"#!/librarydisplay.html",name:o.ZP.translate("Display")},{href:"#!/metadataimages.html",name:o.ZP.translate("Metadata")},{href:"#!/metadatanfo.html",name:o.ZP.translate("TabNfoSettings")}]}$(document).on("pageinit","#metadataImagesConfigurationPage",(function(){$(".metadataImagesConfigurationForm").off("submit",l).on("submit",l)})).on("pageshow","#metadataImagesConfigurationPage",(function(){var e,t,a;r.Z.setTabs("metadata",2,s),n.ZP.show(),e=this,a=[ApiClient.getServerConfiguration(),(t=e.querySelector("#selectLanguage"),ApiClient.getCultures().then((function(e){var a="";a+="<option value=''></option>";for(var n=0,r=e.length;n<r;n++){var o=e[n];a+="<option value='"+o.TwoLetterISOLanguageName+"'>"+o.DisplayName+"</option>"}t.innerHTML=a}))),u(e.querySelector("#selectCountry"))],Promise.all(a).then((function(t){var a=t[0];e.querySelector("#selectLanguage").value=a.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=a.MetadataCountryCode||"",n.ZP.hide()}))}))}}]);