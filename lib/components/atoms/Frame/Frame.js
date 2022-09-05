"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frame = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SIZE_1 = require("../../../data/SIZE");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1000px;\n  height: 750px;\n  position: relative;\n"], ["\n  width: 1000px;\n  height: 750px;\n  position: relative;\n"])));
var Head = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-image: url(\"lecture_headline.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: bottom;\n  position: absolute;\n  width: 998px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"], ["\n  background-image: url(\"lecture_headline.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: bottom;\n  position: absolute;\n  width: 998px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"])), SIZE_1.SIZE.HEAD_H);
var Rectangle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-image: url(\"lecture_flame.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 1000px;\n  height: 750px;\n  position: absolute;\n"], ["\n  background-image: url(\"lecture_flame.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 1000px;\n  height: 750px;\n  position: absolute;\n"])));
var Comment = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #fff;\n  line-height: 1;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  color: #fff;\n  line-height: 1;\n  white-space: nowrap;\n  overflow: hidden;\n"])));
var UnitName = (0, styled_components_1.default)(Comment)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 22px;\n  width: 120px;\n  padding-left: 23px;\n"], ["\n  font-size: 22px;\n  width: 120px;\n  padding-left: 23px;\n"])));
var UnitTitle = (0, styled_components_1.default)(Comment)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 30px;\n  width: 880px;\n"], ["\n  font-size: 30px;\n  width: 880px;\n"])));
var Frame = function (_a) {
    var unitName = _a.unitName, unitTitle = _a.unitTitle;
    return (react_1.default.createElement(Main, null,
        react_1.default.createElement(Head, null,
            react_1.default.createElement(UnitName, null, unitName),
            react_1.default.createElement(UnitTitle, null, unitTitle)),
        react_1.default.createElement(Rectangle, null)));
};
exports.Frame = Frame;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Frame.js.map