---
title: Input光标操作
date: 2017-12-13 22:22:57
tags: JavaScript
---

## IE
- document
    + selection
        * createRange
            - moveStart
        * empty
        * clear
        * type

- element
    + createTextRange
        * moveStart
        * moveEnd
        * collapse
        * select

## Chrome等
- element
    + selectionStart
    + selectionEnd
    + setSelectionRange(start, end)


