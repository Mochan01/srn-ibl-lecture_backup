"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleBase = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 700px;\n  height: 327px;\n  background-image: url(\"lecture_title_base.png\");\n  position: relative;\n"], ["\n  width: 700px;\n  height: 327px;\n  background-image: url(\"lecture_title_base.png\");\n  position: relative;\n"])));
var CommentArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  padding: 40px 32px;\n  width: 400px;\n  height: 240px;\n  left: 270px;\n  top: 56px;\n  overflow: hidden;\n  h1 {\n    font-size: 24px;\n    line-height: 1;\n    margin-bottom: 40px;\n    color: #1a6cf1;\n    font-weight: bold;\n  }\n  h2 {\n    font-size: 16px;\n    color: #5a5a5a;\n  }\n"], ["\n  position: absolute;\n  padding: 40px 32px;\n  width: 400px;\n  height: 240px;\n  left: 270px;\n  top: 56px;\n  overflow: hidden;\n  h1 {\n    font-size: 24px;\n    line-height: 1;\n    margin-bottom: 40px;\n    color: #1a6cf1;\n    font-weight: bold;\n  }\n  h2 {\n    font-size: 16px;\n    color: #5a5a5a;\n  }\n"])));
var TitleBase = function (_a) {
    var unitName = _a.unitName, unitTitle = _a.unitTitle;
    return (react_1.default.createElement(Main, null,
        react_1.default.createElement(CommentArea, null,
            react_1.default.createElement("h1", null, unitName),
            react_1.default.createElement("h2", null, unitTitle))));
};
exports.TitleBase = TitleBase;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TitleBase.js.map