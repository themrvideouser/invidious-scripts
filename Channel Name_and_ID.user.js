// ==UserScript==
// @name         Channel Name + ID
// @namespace    http://tampermonkey.net/
// @version      2022-03-09
// @description  try to take over the world!
// @author       You
// @include      *dev.viewtube.io/*
// @include      *grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion/*
// @include      *inv.cthd.icu/*
// @include      *inv.riverside.rocks/*
// @include      *invidio.us/*
// @include      *invidio.xamh.de/*
// @include      *invidiou.sh/*
// @include      *invidious-jp.kavin.rocks/*
// @include      *invidious-us.kavin.rocks/*
// @include      *invidious.13ad.de/*
// @include      *invidious.drycat.fr/*
// @include      *invidious.esmailelbob.xyz/*
// @include      *invidious.exonip.de/*
// @include      *invidious.fdn.fr/*
// @include      *invidious.flokinet.to/*
// @include      *invidious.ggc-project.de/*
// @include      *invidious.himiko.cloud/*
// @include      *invidious.hub.ne.kr/*
// @include      *invidious.kabi.tk/*
// @include      *invidious.kavin.rocks/*
// @include      *invidious.namazso.eu/*
// @include      *invidious.nixnet.xyz/*
// @include      *invidious.noho.st/*
// @include      *invidious.osi.kr/*
// @include      *invidious.privacy.gd/*
// @include      *invidious.s1gm4.eu/*
// @include      *invidious.silkky.cloud/*
// @include      *invidious.snopyta.org/*
// @include      *invidious.tinfoil-hat.net/*
// @include      *invidious.weblibre.org/*
// @include      *invidious.zapashcanon.fr/*
// @include      *tube.connect.cafe/*
// @include      *tube.incognet.io/*
// @include      *tube.poal.co/*
// @include      *vid.mint.lgbt/*
// @include      *vid.puffyan.us/*
// @include      *vid.wxzm.sx/*
// @include      *watch.nettohikari.com/*
// @include      *y.com.cm/*
// @include      *yewtu.be/*
// @include      *youtube.076.ne.jp/*
// @include      *yt.artemislena.eu/*
// @include      *yt.cyberhost.uk/*
// @include      *yt.didw.to/*
// @include      *yt.elukerio.org/*
// @include      *yt.lelux.fi/*
// @include      *yt.openalgeria.org/*
// @include      *ytb.trom.tf/*
// @include      *ytprivate.com/*
// @icon         data:image/png;base64,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

// @grant        none
// ==/UserScript==




//  _____  _          __  __      __   __ _     _            _   _
// |_   _|| |_   ___ |  \/  | _ _ \ \ / /(_) __| | ___  ___ | | | | ___ ___  _ _
//   | |  |   \ / -_)| |\/| || '_| \   / | |/ _` |/ -_)/ _ \| |_| |(_-// -_)| '_|
//   |_|  |_||_|\___||_|  |_||_|    \_/  |_|\__/_|\___|\___/ \___/ /__/\___||_|



(function() {
    'use strict';
    if(document.getElementsByClassName("channel-profile")[0] && document.querySelector('link[rel="alternate"]').href) {
        var channelURL = document.getElementsByClassName("channel-profile")[0];
        var channel = channelURL.textContent.trim();

        var link = document.querySelector('link[rel="alternate"]').href;
        var array = link.split("/");
        var id = array.pop();

        var name = "\"" + channel + "-" + id + "\"";

        var span = document.createElement("span");
        var text = document.createTextNode(name);
        span.appendChild(text);
        channelURL.appendChild(span);
    }
})();