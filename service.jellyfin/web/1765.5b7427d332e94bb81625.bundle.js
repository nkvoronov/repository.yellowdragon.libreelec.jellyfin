(self.webpackChunk=self.webpackChunk||[]).push([[1765],{81765:function(e,a,t){"use strict";t.r(a),t.d(a,{show:function(){return p}}),t(23938),t(61013),t(76056),t(32081);var n=t(1115),o=t(78695),r=t(53754),s=t(6594),i=(t(50447),t(17734),t(78066),t(21865),t(16589),t(56561),t(93462),t(53913)),l=t(58710),c=t.n(l);function d(e,a){return'<span class="mediaInfoLabel">'.concat(e,'</span><span class="mediaInfoAttribute">').concat(a,"</span>")}function p(e,a){return s.ZP.show(),function(e,a){var t=i.Z.getApiClient(a);return t.getItem(t.getCurrentUserId(),e).then((function(e){var a={size:"small",removeOnClose:!0,scrollY:!1};o.Z.tv&&(a.size="fullscreen");var i=n.default.createDialog(a);i.classList.add("formDialog");var l="";l+=r.ZP.translateHtml(c(),"core"),i.innerHTML=l,o.Z.tv&&i.querySelector(".formDialogContent"),n.default.open(i),i.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(i)})),t.getCurrentUser().then((function(a){!function(e,a,t){var n=t.MediaSources.map((function(a){return function(e,a,t){var n="";if(t.Name&&(n+='<div><h2 class="mediaInfoStreamType">'.concat(t.Name,"</h2></div>")),t.Container&&(n+="".concat(d(r.ZP.translate("MediaInfoContainer"),t.Container),"<br/>")),t.Formats&&t.Formats.length&&(n+="".concat(d(r.ZP.translate("MediaInfoFormat"),t.Formats.join(",")),"<br/>")),t.Path&&e&&e.Policy.IsAdministrator&&(n+="".concat(d(r.ZP.translate("MediaInfoPath"),t.Path),"<br/>")),t.Size){var o="".concat((t.Size/1048576).toFixed(0)," MB");n+="".concat(d(r.ZP.translate("MediaInfoSize"),o),"<br/>")}for(var s=0,i=t.MediaStreams.length;s<i;s++){var l=t.MediaStreams[s];if("Data"!==l.Type){n+='<div class="mediaInfoStream">';var c=void 0;switch(l.Type){case"Audio":case"Data":case"Subtitle":case"Video":c=l.Type;break;case"EmbeddedImage":c="Image"}var p=r.ZP.translate(c);n+='<h2 class="mediaInfoStreamType">'.concat(p,"</h2>");var u=[];l.DisplayTitle&&u.push(d("Title",l.DisplayTitle)),l.Language&&"Video"!==l.Type&&u.push(d(r.ZP.translate("MediaInfoLanguage"),l.Language)),l.Codec&&u.push(d(r.ZP.translate("MediaInfoCodec"),l.Codec.toUpperCase())),l.CodecTag&&u.push(d(r.ZP.translate("MediaInfoCodecTag"),l.CodecTag)),null!=l.IsAVC&&u.push(d("AVC",l.IsAVC?"Yes":"No")),l.Profile&&u.push(d(r.ZP.translate("MediaInfoProfile"),l.Profile)),l.Level&&u.push(d(r.ZP.translate("MediaInfoLevel"),l.Level)),(l.Width||l.Height)&&u.push(d(r.ZP.translate("MediaInfoResolution"),"".concat(l.Width,"x").concat(l.Height))),l.AspectRatio&&"mjpeg"!==l.Codec&&u.push(d(r.ZP.translate("MediaInfoAspectRatio"),l.AspectRatio)),"Video"===l.Type&&(null!=l.IsAnamorphic&&u.push(d(r.ZP.translate("MediaInfoAnamorphic"),l.IsAnamorphic?"Yes":"No")),u.push(d(r.ZP.translate("MediaInfoInterlaced"),l.IsInterlaced?"Yes":"No"))),(l.AverageFrameRate||l.RealFrameRate)&&u.push(d(r.ZP.translate("MediaInfoFramerate"),l.AverageFrameRate||l.RealFrameRate)),l.ChannelLayout&&u.push(d(r.ZP.translate("MediaInfoLayout"),l.ChannelLayout)),l.Channels&&u.push(d(r.ZP.translate("MediaInfoChannels"),"".concat(l.Channels," ch"))),l.BitRate&&"mjpeg"!==l.Codec&&u.push(d(r.ZP.translate("MediaInfoBitrate"),"".concat(parseInt(l.BitRate/1e3)," kbps"))),l.SampleRate&&u.push(d(r.ZP.translate("MediaInfoSampleRate"),"".concat(l.SampleRate," Hz"))),l.BitDepth&&u.push(d(r.ZP.translate("MediaInfoBitDepth"),"".concat(l.BitDepth," bit"))),l.VideoRange&&u.push(d(r.ZP.translate("MediaInfoVideoRange"),l.VideoRange)),l.ColorSpace&&u.push(d(r.ZP.translate("MediaInfoColorSpace"),l.ColorSpace)),l.ColorTransfer&&u.push(d(r.ZP.translate("MediaInfoColorTransfer"),l.ColorTransfer)),l.ColorPrimaries&&u.push(d(r.ZP.translate("MediaInfoColorPrimaries"),l.ColorPrimaries)),l.PixelFormat&&u.push(d(r.ZP.translate("MediaInfoPixelFormat"),l.PixelFormat)),l.RefFrames&&u.push(d(r.ZP.translate("MediaInfoRefFrames"),l.RefFrames)),l.NalLengthSize&&u.push(d("NAL",l.NalLengthSize)),"Video"!==l.Type&&u.push(d(r.ZP.translate("MediaInfoDefault"),l.IsDefault?"Yes":"No")),"Subtitle"===l.Type&&(u.push(d(r.ZP.translate("MediaInfoForced"),l.IsForced?"Yes":"No")),u.push(d(r.ZP.translate("MediaInfoExternal"),l.IsExternal?"Yes":"No"))),"Video"===l.Type&&t.Timestamp&&u.push(d(r.ZP.translate("MediaInfoTimestamp"),t.Timestamp)),n+=u.join("<br/>"),n+="</div>"}}return n}(e,0,a)})).join('<div style="border-top:1px solid #444;margin: 1em 0;"></div>');t.MediaSources.length>1&&(n="<br/>".concat(n)),a.querySelector("#mediaInfoContent").innerHTML=n}(a,i,e)})),s.ZP.hide()}))}(e,a)}a.default={show:p}},58710:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"> <span class="material-icons arrow_back"></span> </button> <h3 class="formDialogHeaderTitle">${MoreMediaInfo}</h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner" style="padding:1em"> <div id="mediaInfoContent" class="mediaInfoContent"></div> </div> </div> '}}]);