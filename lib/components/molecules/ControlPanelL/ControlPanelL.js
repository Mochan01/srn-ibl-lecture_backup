"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanelL = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var ControlPanelA_1 = require("../../atoms/ControlPanelA/ControlPanelA");
var Grid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  row-gap: 4px;\n"], ["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  row-gap: 4px;\n"])));
var StyleControlPanelL = (0, styled_components_1.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .swiper-pagination-bullet {\n    display: block;\n    background-image: url(\"lecture_star_off.png\");\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 32px;\n    height: 30px;\n    margin: auto;\n  }\n  .swiper-pagination-bullet-active {\n    background-image: url(\"lecture_star_on.png\");\n  }\n"], ["\n  .swiper-pagination-bullet {\n    display: block;\n    background-image: url(\"lecture_star_off.png\");\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 32px;\n    height: 30px;\n    margin: auto;\n  }\n  .swiper-pagination-bullet-active {\n    background-image: url(\"lecture_star_on.png\");\n  }\n"])));
var ControlPanelL = function (_a) {
    var id = _a.id;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyleControlPanelL, null),
        react_1.default.createElement(ControlPanelA_1.ControlPanelA, null,
            react_1.default.createElement(Grid, { id: id }))));
};
exports.ControlPanelL = ControlPanelL;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ControlPanelL.js.map