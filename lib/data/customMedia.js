"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_media_query_1 = require("styled-media-query");
var customMediaProperty = {
    pc: 1025,
    tb: 1024,
    sp: 480 // 以下
};
var customMediaPropertyPx = Object.keys(customMediaProperty).reduce(function (after, key) {
    var _a;
    return (__assign(__assign({}, after), (_a = {}, _a[key] = customMediaProperty[key] + "px", _a)));
}, {});
var customMedia = (0, styled_media_query_1.generateMedia)(customMediaPropertyPx);
exports.default = customMedia;
//# sourceMappingURL=customMedia.js.map