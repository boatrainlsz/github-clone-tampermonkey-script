// ==UserScript==
// @name        github clone enhancement
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      boatrainlsz
// @description 2020/7/1 上午10:56:13
// ==/UserScript==
(function () {
    let clipboard = document.getElementsByTagName("clipboard-copy");
//prepend 'git clone' to clipboard's value attribute
    clipboard[0].setAttribute("value", "git clone " + clipboard[0].getAttribute("value"));
})();