"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentedBy = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 600px;\n  height: 42px;\n  background-image: url(\"lecture_title_offer.png\");\n"], ["\n  width: 600px;\n  height: 42px;\n  background-image: url(\"lecture_title_offer.png\");\n"])));
var PresentedBy = function (_a) {
    return react_1.default.createElement(Main, null);
};
exports.PresentedBy = PresentedBy;
var templateObject_1;
//# sourceMappingURL=PresentedBy.js.map