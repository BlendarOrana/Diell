import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var DiellLogo = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 80 : _b, width = _a.width, height = _a.height, _c = _a.primaryColor, primaryColor = _c === void 0 ? '#fbbf24' : _c, // yellow-400
    _d = _a.secondaryColor, // yellow-400
    secondaryColor = _d === void 0 ? '#f97316' : _d; // orange-500
    _a.inactiveColor; // orange-500
    var textColor = _a.textColor, halfColor = _a.halfColor, // New prop
    upHalfColor = _a.upHalfColor, // New prop
    _f = _a.animationDuration, // New prop
    animationDuration = _f === void 0 ? 300 : _f, _g = _a.hoverScale, hoverScale = _g === void 0 ? 1.2 : _g, _h = _a.showText, showText = _h === void 0 ? true : _h, _j = _a.text, text = _j === void 0 ? 'DIELL' : _j, _k = _a.showBackground, showBackground = _k === void 0 ? false : _k, _l = _a.backgroundColor, backgroundColor = _l === void 0 ? '#f3f4f6' : _l, onClick = _a.onClick, externalOnMouseEnter = _a.onMouseEnter, externalOnMouseLeave = _a.onMouseLeave, _m = _a.className, className = _m === void 0 ? '' : _m, _o = _a.style, style = _o === void 0 ? {} : _o, _p = _a.containerStyle, containerStyle = _p === void 0 ? {} : _p, _q = _a.alt, alt = _q === void 0 ? 'Diell Logo' : _q, _r = _a.title, title = _r === void 0 ? 'Diell Logo' : _r;
    var _s = useState(false), isComplete = _s[0], setIsComplete = _s[1];
    // Calculate dimensions
    var logoWidth = width || size;
    var logoHeight = height || size;
    var logoSize = typeof logoWidth === 'number' ? logoWidth : parseInt(logoWidth);
    // Advanced formula for ray positioning
    // translation = desired_gap + half_of_ray_height
    var rayTranslation = {
        initial: logoSize * 0.2 + (logoSize * 0.1) / 2, // Gap + half initial height
        hover: logoSize * 0.2 + (logoSize * 0.15) / 2, // Gap + half hover height
    };
    var handleMouseEnter = function () {
        setIsComplete(true);
        externalOnMouseEnter === null || externalOnMouseEnter === void 0 ? void 0 : externalOnMouseEnter();
    };
    var handleMouseLeave = function () {
        setIsComplete(false);
        externalOnMouseLeave === null || externalOnMouseLeave === void 0 ? void 0 : externalOnMouseLeave();
    };
    // Color calculation - always active, only glow effects on hover
    var getActiveColor = function () {
        return primaryColor;
    };
    var getDynamicTextColor = function () {
        if (textColor)
            return textColor;
        return primaryColor;
    };
    // Get ray color based on position and half_color/upHalfColor props
    var getRayColor = function (rayIndex) {
        var color = getActiveColor();
        // Apply halfColor (left-right split) - rays 0-3 are right half
        if (halfColor) {
            var isRightHalf = rayIndex <= 3;
            if (isRightHalf)
                color = halfColor;
        }
        // Apply upHalfColor (up-down split) - rays 7, 0, 1, 2 are top half
        if (upHalfColor) {
            var isTopHalf = rayIndex === 7 || rayIndex === 0 || rayIndex === 1 || rayIndex === 2;
            if (isTopHalf)
                color = upHalfColor;
        }
        return color;
    };
    // Container component
    var LogoContent = function () {
        // Text glow effect - only on hover
        var textGlowEffect = isComplete
            ? "0 0 ".concat(logoSize * 0.03, "px ").concat(primaryColor, ", 0 0 ").concat(logoSize * 0.1, "px ").concat(primaryColor, ", 0 0 ").concat(logoSize * 0.2, "px ").concat(secondaryColor)
            : 'none';
        return (jsxs("div", { className: "relative cursor-pointer flex flex-col items-center justify-center ".concat(className), style: __assign({ width: logoWidth, height: showText ? "calc(".concat(logoHeight, "px + 40px)") : logoHeight }, style), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onClick: onClick, title: title, role: "img", "aria-label": alt, children: [jsx("div", { className: "relative flex items-center justify-center", style: { width: logoSize, height: logoSize }, children: jsxs("div", { className: "absolute inset-0 rounded-full flex items-center justify-center transition-all ease-out", style: {
                            borderColor: getActiveColor(),
                            transform: isComplete ? "scale(".concat(hoverScale, ")") : 'scale(1)',
                            transitionDuration: "".concat(animationDuration, "ms")
                        }, children: [isComplete && (jsx("div", { className: "absolute rounded-full transition-all ease-out", style: {
                                    width: '120%',
                                    height: '120%',
                                    borderColor: "".concat(primaryColor, "99"), // Add transparency
                                    background: 'transparent',
                                    transitionDuration: "".concat(animationDuration * 1.5, "ms")
                                } })), __spreadArray([], Array(8), true).map(function (_, i) { return (jsx("div", { className: "absolute", style: {
                                    width: logoSize * 0.045,
                                    height: isComplete ? logoSize * 0.15 : logoSize * 0.1,
                                    transform: "rotate(".concat(i * 45, "deg) translateY(-").concat(isComplete ? rayTranslation.hover : rayTranslation.initial, "px)"),
                                    backgroundColor: getRayColor(i),
                                    boxShadow: isComplete
                                        ? "0 0 ".concat(logoSize * 0.2, "px ").concat(getRayColor(i))
                                        : 'none', // No glow when not hovering
                                    transition: "all ".concat(animationDuration, "ms ease-out")
                                } }, i)); }), (halfColor || upHalfColor) ? (
                            // Colored circle using gradient(s)
                            jsx("div", { className: "absolute rounded-full transition-all ease-out", style: {
                                    width: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                                    height: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: halfColor && upHalfColor
                                        ? "conic-gradient(from 0deg, ".concat(upHalfColor, " 0deg, ").concat(upHalfColor, " 90deg, ").concat(getActiveColor(), " 90deg, ").concat(getActiveColor(), " 180deg, ").concat(getActiveColor(), " 180deg, ").concat(getActiveColor(), " 270deg, ").concat(upHalfColor, " 270deg, ").concat(upHalfColor, " 360deg)")
                                        : halfColor
                                            ? "linear-gradient(270deg, ".concat(halfColor, " 50%, ").concat(getActiveColor(), " 50%)")
                                            : "linear-gradient(180deg, ".concat(upHalfColor, " 50%, ").concat(getActiveColor(), " 50%)"),
                                    boxShadow: isComplete
                                        ? "0 0 ".concat(logoSize * 0.3, "px ").concat(primaryColor, ", 0 0 ").concat(logoSize * 0.6, "px ").concat(secondaryColor)
                                        : 'none',
                                    transitionDuration: "".concat(animationDuration, "ms")
                                } })) : (
                            // Regular single-color circle
                            jsx("div", { className: "absolute rounded-full transition-all ease-out", style: {
                                    width: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                                    height: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: getActiveColor(),
                                    boxShadow: isComplete
                                        ? "0 0 ".concat(logoSize * 0.3, "px ").concat(primaryColor, ", 0 0 ").concat(logoSize * 0.6, "px ").concat(secondaryColor)
                                        : 'none',
                                    transitionDuration: "".concat(animationDuration, "ms")
                                } }))] }) }), showText && (jsx("h1", { className: "font-bold tracking-widest transition-all text-center mt-2", style: {
                        fontSize: logoSize * 0.2,
                        color: getDynamicTextColor(),
                        textShadow: textGlowEffect,
                        transition: "all ".concat(animationDuration, "ms ease-out")
                    }, children: text }))] }));
    };
    // Return with or without background container
    if (showBackground) {
        return (jsx("div", { className: "flex flex-col items-center justify-center min-h-screen", style: __assign({ backgroundColor: backgroundColor }, containerStyle), children: jsx(LogoContent, {}) }));
    }
    return jsx(LogoContent, {});
};

export { DiellLogo };
//# sourceMappingURL=index.esm.js.map
