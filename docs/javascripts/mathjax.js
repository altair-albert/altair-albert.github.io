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
