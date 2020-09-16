// ==UserScript==
// @name        蔡神博客消毒
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  蔡神太强了,为了防止偷偷复制他的代码被他QJ,我们自己写个油猴来办到这件事!
// @author       liqiqiorz
// @match        *://caizirui.xyz/*
// @match        *://*.csdn.net/*
// @match        *://caizirui.xyz/
// @match        http://www.caizirui.xyz/*
// @match        https://www.caizirui.xyz/*
//
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  function addLink(e) {
    e.preventDefault();
    var pagelink = '\nRead more: ' + document.location.href,
        copytext = window.getSelection();
    var clipdata = e.clipboardData || window.clipboardData;
    if (clipdata) {
      clipdata.setData('Text', copytext);
    }
  }
  document.addEventListener('copy', addLink);
})();