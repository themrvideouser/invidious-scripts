// ==UserScript==
// @name         InVidio.us Whitelisted Regions Full Names + Flags
// @namespace    http://tampermonkey.net/
// @version      2022-03-09
// @description  Tells you the names of the beautiful Countries where you can watch that Cat YouTube Video without Anti-GeoBlocking Tools like VPN, Tor, Proxies
// @author       TheMrVideouser
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

// https://www.countryflags.io/
// depends on https://gist.github.com/ssskip/5a94bfcd2835bf1dea52 ( json of country codes (ISO 3166-1 alpha-2) and corresponding names )

// data:text/javascript;base64,ewogICJBRiI6ICJBZmdoYW5pc3RhbiIsCiAgIkFYIjogIkFsYW5kIElzbGFuZHMiLAogICJBTCI6ICJBbGJhbmlhIiwKICAiRFoiOiAiQWxnZXJpYSIsCiAgIkFTIjogIkFtZXJpY2FuIFNhbW9hIiwKICAiQUQiOiAiQW5kb3JyYSIsCiAgIkFPIjogIkFuZ29sYSIsCiAgIkFJIjogIkFuZ3VpbGxhIiwKICAiQVEiOiAiQW50YXJjdGljYSIsCiAgIkFHIjogIkFudGlndWEgQW5kIEJhcmJ1ZGEiLAogICJBUiI6ICJBcmdlbnRpbmEiLAogICJBTSI6ICJBcm1lbmlhIiwKICAiQVciOiAiQXJ1YmEiLAogICJBVSI6ICJBdXN0cmFsaWEiLAogICJBVCI6ICJBdXN0cmlhIiwKICAiQVoiOiAiQXplcmJhaWphbiIsCiAgIkJTIjogIkJhaGFtYXMiLAogICJCSCI6ICJCYWhyYWluIiwKICAiQkQiOiAiQmFuZ2xhZGVzaCIsCiAgIkJCIjogIkJhcmJhZG9zIiwKICAiQlkiOiAiQmVsYXJ1cyIsCiAgIkJFIjogIkJlbGdpdW0iLAogICJCWiI6ICJCZWxpemUiLAogICJCSiI6ICJCZW5pbiIsCiAgIkJNIjogIkJlcm11ZGEiLAogICJCVCI6ICJCaHV0YW4iLAogICJCTyI6ICJCb2xpdmlhIiwKICAiQkEiOiAiQm9zbmlhIEFuZCBIZXJ6ZWdvdmluYSIsCiAgIkJXIjogIkJvdHN3YW5hIiwKICAiQlYiOiAiQm91dmV0IElzbGFuZCIsCiAgIkJSIjogIkJyYXppbCIsCiAgIklPIjogIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSIsCiAgIkJOIjogIkJydW5laSBEYXJ1c3NhbGFtIiwKICAiQkciOiAiQnVsZ2FyaWEiLAogICJCRiI6ICJCdXJraW5hIEZhc28iLAogICJCSSI6ICJCdXJ1bmRpIiwKICAiS0giOiAiQ2FtYm9kaWEiLAogICJDTSI6ICJDYW1lcm9vbiIsCiAgIkNBIjogIkNhbmFkYSIsCiAgIkNWIjogIkNhcGUgVmVyZGUiLAogICJLWSI6ICJDYXltYW4gSXNsYW5kcyIsCiAgIkNGIjogIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyIsCiAgIlREIjogIkNoYWQiLAogICJDTCI6ICJDaGlsZSIsCiAgIkNOIjogIkNoaW5hIiwKICAiQ1giOiAiQ2hyaXN0bWFzIElzbGFuZCIsCiAgIkNDIjogIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzIiwKICAiQ08iOiAiQ29sb21iaWEiLAogICJLTSI6ICJDb21vcm9zIiwKICAiQ0ciOiAiQ29uZ28iLAogICJDRCI6ICJDb25nbywgRGVtb2NyYXRpYyBSZXB1YmxpYyIsCiAgIkNLIjogIkNvb2sgSXNsYW5kcyIsCiAgIkNSIjogIkNvc3RhIFJpY2EiLAogICJDSSI6ICJDb3RlIERcIkl2b2lyZSIsCiAgIkhSIjogIkNyb2F0aWEiLAogICJDVSI6ICJDdWJhIiwKICAiQ1kiOiAiQ3lwcnVzIiwKICAiQ1oiOiAiQ3plY2ggUmVwdWJsaWMiLAogICJESyI6ICJEZW5tYXJrIiwKICAiREoiOiAiRGppYm91dGkiLAogICJETSI6ICJEb21pbmljYSIsCiAgIkRPIjogIkRvbWluaWNhbiBSZXB1YmxpYyIsCiAgIkVDIjogIkVjdWFkb3IiLAogICJFRyI6ICJFZ3lwdCIsCiAgIlNWIjogIkVsIFNhbHZhZG9yIiwKICAiR1EiOiAiRXF1YXRvcmlhbCBHdWluZWEiLAogICJFUiI6ICJFcml0cmVhIiwKICAiRUUiOiAiRXN0b25pYSIsCiAgIkVUIjogIkV0aGlvcGlhIiwKICAiRksiOiAiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpIiwKICAiRk8iOiAiRmFyb2UgSXNsYW5kcyIsCiAgIkZKIjogIkZpamkiLAogICJGSSI6ICJGaW5sYW5kIiwKICAiRlIiOiAiRnJhbmNlIiwKICAiR0YiOiAiRnJlbmNoIEd1aWFuYSIsCiAgIlBGIjogIkZyZW5jaCBQb2x5bmVzaWEiLAogICJURiI6ICJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMiLAogICJHQSI6ICJHYWJvbiIsCiAgIkdNIjogIkdhbWJpYSIsCiAgIkdFIjogIkdlb3JnaWEiLAogICJERSI6ICJHZXJtYW55IiwKICAiR0giOiAiR2hhbmEiLAogICJHSSI6ICJHaWJyYWx0YXIiLAogICJHUiI6ICJHcmVlY2UiLAogICJHTCI6ICJHcmVlbmxhbmQiLAogICJHRCI6ICJHcmVuYWRhIiwKICAiR1AiOiAiR3VhZGVsb3VwZSIsCiAgIkdVIjogIkd1YW0iLAogICJHVCI6ICJHdWF0ZW1hbGEiLAogICJHRyI6ICJHdWVybnNleSIsCiAgIkdOIjogIkd1aW5lYSIsCiAgIkdXIjogIkd1aW5lYS1CaXNzYXUiLAogICJHWSI6ICJHdXlhbmEiLAogICJIVCI6ICJIYWl0aSIsCiAgIkhNIjogIkhlYXJkIElzbGFuZCAmIE1jZG9uYWxkIElzbGFuZHMiLAogICJWQSI6ICJIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKSIsCiAgIkhOIjogIkhvbmR1cmFzIiwKICAiSEsiOiAiSG9uZyBLb25nIiwKICAiSFUiOiAiSHVuZ2FyeSIsCiAgIklTIjogIkljZWxhbmQiLAogICJJTiI6ICJJbmRpYSIsCiAgIklEIjogIkluZG9uZXNpYSIsCiAgIklSIjogIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgT2YiLAogICJJUSI6ICJJcmFxIiwKICAiSUUiOiAiSXJlbGFuZCIsCiAgIklNIjogIklzbGUgT2YgTWFuIiwKICAiSUwiOiAiSXNyYWVsIiwKICAiSVQiOiAiSXRhbHkiLAogICJKTSI6ICJKYW1haWNhIiwKICAiSlAiOiAiSmFwYW4iLAogICJKRSI6ICJKZXJzZXkiLAogICJKTyI6ICJKb3JkYW4iLAogICJLWiI6ICJLYXpha2hzdGFuIiwKICAiS0UiOiAiS2VueWEiLAogICJLSSI6ICJLaXJpYmF0aSIsCiAgIktSIjogIktvcmVhIiwKICAiS1AiOiAiTm9ydGggS29yZWEiLAogICJLVyI6ICJLdXdhaXQiLAogICJLRyI6ICJLeXJneXpzdGFuIiwKICAiTEEiOiAiTGFvIFBlb3BsZVwicyBEZW1vY3JhdGljIFJlcHVibGljIiwKICAiTFYiOiAiTGF0dmlhIiwKICAiTEIiOiAiTGViYW5vbiIsCiAgIkxTIjogIkxlc290aG8iLAogICJMUiI6ICJMaWJlcmlhIiwKICAiTFkiOiAiTGlieWFuIEFyYWIgSmFtYWhpcml5YSIsCiAgIkxJIjogIkxpZWNodGVuc3RlaW4iLAogICJMVCI6ICJMaXRodWFuaWEiLAogICJMVSI6ICJMdXhlbWJvdXJnIiwKICAiTU8iOiAiTWFjYW8iLAogICJNSyI6ICJNYWNlZG9uaWEiLAogICJNRyI6ICJNYWRhZ2FzY2FyIiwKICAiTVciOiAiTWFsYXdpIiwKICAiTVkiOiAiTWFsYXlzaWEiLAogICJNViI6ICJNYWxkaXZlcyIsCiAgIk1MIjogIk1hbGkiLAogICJNVCI6ICJNYWx0YSIsCiAgIk1IIjogIk1hcnNoYWxsIElzbGFuZHMiLAogICJNUSI6ICJNYXJ0aW5pcXVlIiwKICAiTVIiOiAiTWF1cml0YW5pYSIsCiAgIk1VIjogIk1hdXJpdGl1cyIsCiAgIllUIjogIk1heW90dGUiLAogICJNWCI6ICJNZXhpY28iLAogICJGTSI6ICJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIE9mIiwKICAiTUQiOiAiTW9sZG92YSIsCiAgIk1DIjogIk1vbmFjbyIsCiAgIk1OIjogIk1vbmdvbGlhIiwKICAiTUUiOiAiTW9udGVuZWdybyIsCiAgIk1TIjogIk1vbnRzZXJyYXQiLAogICJNQSI6ICJNb3JvY2NvIiwKICAiTVoiOiAiTW96YW1iaXF1ZSIsCiAgIk1NIjogIk15YW5tYXIiLAogICJOQSI6ICJOYW1pYmlhIiwKICAiTlIiOiAiTmF1cnUiLAogICJOUCI6ICJOZXBhbCIsCiAgIk5MIjogIk5ldGhlcmxhbmRzIiwKICAiQU4iOiAiTmV0aGVybGFuZHMgQW50aWxsZXMiLAogICJOQyI6ICJOZXcgQ2FsZWRvbmlhIiwKICAiTloiOiAiTmV3IFplYWxhbmQiLAogICJOSSI6ICJOaWNhcmFndWEiLAogICJORSI6ICJOaWdlciIsCiAgIk5HIjogIk5pZ2VyaWEiLAogICJOVSI6ICJOaXVlIiwKICAiTkYiOiAiTm9yZm9sayBJc2xhbmQiLAogICJNUCI6ICJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMiLAogICJOTyI6ICJOb3J3YXkiLAogICJPTSI6ICJPbWFuIiwKICAiUEsiOiAiUGFraXN0YW4iLAogICJQVyI6ICJQYWxhdSIsCiAgIlBTIjogIlBhbGVzdGluaWFuIFRlcnJpdG9yeSwgT2NjdXBpZWQiLAogICJQQSI6ICJQYW5hbWEiLAogICJQRyI6ICJQYXB1YSBOZXcgR3VpbmVhIiwKICAiUFkiOiAiUGFyYWd1YXkiLAogICJQRSI6ICJQZXJ1IiwKICAiUEgiOiAiUGhpbGlwcGluZXMiLAogICJQTiI6ICJQaXRjYWlybiIsCiAgIlBMIjogIlBvbGFuZCIsCiAgIlBUIjogIlBvcnR1Z2FsIiwKICAiUFIiOiAiUHVlcnRvIFJpY28iLAogICJRQSI6ICJRYXRhciIsCiAgIlJFIjogIlJldW5pb24iLAogICJSTyI6ICJSb21hbmlhIiwKICAiUlUiOiAiUnVzc2lhbiBGZWRlcmF0aW9uIiwKICAiUlciOiAiUndhbmRhIiwKICAiQkwiOiAiU2FpbnQgQmFydGhlbGVteSIsCiAgIlNIIjogIlNhaW50IEhlbGVuYSIsCiAgIktOIjogIlNhaW50IEtpdHRzIEFuZCBOZXZpcyIsCiAgIkxDIjogIlNhaW50IEx1Y2lhIiwKICAiTUYiOiAiU2FpbnQgTWFydGluIiwKICAiUE0iOiAiU2FpbnQgUGllcnJlIEFuZCBNaXF1ZWxvbiIsCiAgIlZDIjogIlNhaW50IFZpbmNlbnQgQW5kIEdyZW5hZGluZXMiLAogICJXUyI6ICJTYW1vYSIsCiAgIlNNIjogIlNhbiBNYXJpbm8iLAogICJTVCI6ICJTYW8gVG9tZSBBbmQgUHJpbmNpcGUiLAogICJTQSI6ICJTYXVkaSBBcmFiaWEiLAogICJTTiI6ICJTZW5lZ2FsIiwKICAiUlMiOiAiU2VyYmlhIiwKICAiU0MiOiAiU2V5Y2hlbGxlcyIsCiAgIlNMIjogIlNpZXJyYSBMZW9uZSIsCiAgIlNHIjogIlNpbmdhcG9yZSIsCiAgIlNLIjogIlNsb3Zha2lhIiwKICAiU0kiOiAiU2xvdmVuaWEiLAogICJTQiI6ICJTb2xvbW9uIElzbGFuZHMiLAogICJTTyI6ICJTb21hbGlhIiwKICAiWkEiOiAiU291dGggQWZyaWNhIiwKICAiR1MiOiAiU291dGggR2VvcmdpYSBBbmQgU2FuZHdpY2ggSXNsLiIsCiAgIkVTIjogIlNwYWluIiwKICAiTEsiOiAiU3JpIExhbmthIiwKICAiU0QiOiAiU3VkYW4iLAogICJTUiI6ICJTdXJpbmFtZSIsCiAgIlNKIjogIlN2YWxiYXJkIEFuZCBKYW4gTWF5ZW4iLAogICJTWiI6ICJTd2F6aWxhbmQiLAogICJTRSI6ICJTd2VkZW4iLAogICJDSCI6ICJTd2l0emVybGFuZCIsCiAgIlNZIjogIlN5cmlhbiBBcmFiIFJlcHVibGljIiwKICAiVFciOiAiVGFpd2FuIiwKICAiVEoiOiAiVGFqaWtpc3RhbiIsCiAgIlRaIjogIlRhbnphbmlhIiwKICAiVEgiOiAiVGhhaWxhbmQiLAogICJUTCI6ICJUaW1vci1MZXN0ZSIsCiAgIlRHIjogIlRvZ28iLAogICJUSyI6ICJUb2tlbGF1IiwKICAiVE8iOiAiVG9uZ2EiLAogICJUVCI6ICJUcmluaWRhZCBBbmQgVG9iYWdvIiwKICAiVE4iOiAiVHVuaXNpYSIsCiAgIlRSIjogIlR1cmtleSIsCiAgIlRNIjogIlR1cmttZW5pc3RhbiIsCiAgIlRDIjogIlR1cmtzIEFuZCBDYWljb3MgSXNsYW5kcyIsCiAgIlRWIjogIlR1dmFsdSIsCiAgIlVHIjogIlVnYW5kYSIsCiAgIlVBIjogIlVrcmFpbmUiLAogICJBRSI6ICJVbml0ZWQgQXJhYiBFbWlyYXRlcyIsCiAgIkdCIjogIlVuaXRlZCBLaW5nZG9tIiwKICAiVVMiOiAiVW5pdGVkIFN0YXRlcyIsCiAgIlVNIjogIlVuaXRlZCBTdGF0ZXMgT3V0bHlpbmcgSXNsYW5kcyIsCiAgIlVZIjogIlVydWd1YXkiLAogICJVWiI6ICJVemJla2lzdGFuIiwKICAiVlUiOiAiVmFudWF0dSIsCiAgIlZFIjogIlZlbmV6dWVsYSIsCiAgIlZOIjogIlZpZXRuYW0iLAogICJWRyI6ICJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaCIsCiAgIlZJIjogIlZpcmdpbiBJc2xhbmRzLCBVLlMuIiwKICAiV0YiOiAiV2FsbGlzIEFuZCBGdXR1bmEiLAogICJFSCI6ICJXZXN0ZXJuIFNhaGFyYSIsCiAgIllFIjogIlllbWVuIiwKICAiWk0iOiAiWmFtYmlhIiwKICAiWlciOiAiWmltYmFid2UiCn0=

// Attribute FlatIcon: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

// changelog:

// v0.2.2 (2022-03-09)
// sorted instances

// v0.2.1 (2021-10-29)
// added some urls

// v0.2
// flags

// v0.1
// replace Iso Country Codes with actual Country Names
//
(function () {
    'use strict';
    var isoCountry2 = {
        "AF": "Afghanistan",
        "AX": "Aland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua And Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BA": "Bosnia And Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "CV": "Cape Verde",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo",
        "CD": "Congo, Democratic Republic",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "CI": "Cote D\"Ivoire",
        "HR": "Croatia",
        "CU": "Cuba",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island & Mcdonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran, Islamic Republic Of",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle Of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KR": "Korea",
        "KP": "North Korea",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People\"s Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libyan Arab Jamahiriya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MK": "Macedonia",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States Of",
        "MD": "Moldova",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "AN": "Netherlands Antilles",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestinian Territory, Occupied",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Reunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barthelemy",
        "SH": "Saint Helena",
        "KN": "Saint Kitts And Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin",
        "PM": "Saint Pierre And Miquelon",
        "VC": "Saint Vincent And Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome And Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia And Sandwich Isl.",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard And Jan Mayen",
        "SZ": "Swaziland",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan",
        "TJ": "Tajikistan",
        "TZ": "Tanzania",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad And Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks And Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States",
        "UM": "United States Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela",
        "VN": "Vietnam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.S.",
        "WF": "Wallis And Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    };
    // "AF": "Afghanistan",
    var dummyVariablePleaseIgnore = isoCountry2;


    var regExWhiteList = "Whitelisted regions: ";
    var censorShip = "Countries without Censorship🏴‍☠️: ";
    var regions = document.getElementById("allowed_regions");
    var countries = regions.childNodes[0].nodeValue.trim();
    var onlyCountries = countries.replace(regExWhiteList, "")

    var trimmedCountries = onlyCountries.replace(/\s+/g, '')
    var arrayCountries = [];
    arrayCountries = trimmedCountries.split(',');


    //var parent = regions.parentElement;
    var arrayResult = [];
    var errorResult = [];

    // var stringResult = "";
    for(var i = 0; i < arrayCountries.length; i++) {
        for(var index in isoCountry2) {
            if(index == arrayCountries[i]) {
                var country = isoCountry2[index];
                arrayResult[i] = country;
                // stringResult = stringResult+country+" ";
            } else {
                errorResult[i] = country;
            }
        }
    }

    // regions.innerHTML = censorShip + arrayResult.join(", ") + errorResult.join(", ");

    regions.innerHTML = censorShip + arrayResult.join(", ") + errorResult.join(", ");

    var img = document.createElement("img");
    img.src = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/gb.svg";
    var src = document.getElementById("allowed_regions");
    // src.appendChild(img);

    // TODO: Use Flags instead of boring country names!
    // Note: damn Content Security Policy doesn't like to make my life any easier, looks like I need a whole Library for that single Task of embedding images into that website.
    // Grunticon to the rescue!
    // Your code here...
})();