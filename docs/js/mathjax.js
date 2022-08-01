/*
 * mathjax.js
 * Copyright (C) 2022 Albert Lv <altair.albert@yahoo.com>
 *
 * Distributed under terms of the MIT license.
 */
window.MathJax = {
    tex : {
        inlineMath : [ [ "\\(", "\\)" ] ],
        displayMath : [ [ "\\[", "\\]" ] ],
        processEscapes : true,
        processEnvironments : true
    },
    options : {
        ignoreHtmlClass : ".*|",
        processHtmlClass : "arithmatex"
    }
};

document.subscribe(() => {
                        MathJax.typesetPromise()})

// baidu analysis
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?22cd821b8226d5aef228d8541c9f279c";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// google analytics

(function () {
  var hm = document.createElement("script");
  hm.src = "https://www.googletagmanager.com/gtag/js?id=G-LPSL3YGLRT";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LPSL3YGLRT');
})();
