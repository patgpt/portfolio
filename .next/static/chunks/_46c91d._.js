(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_46c91d._.js", {

"[project]/src/components/BentoBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BentoBox": (()=>BentoBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function BentoBox({ children, size = "small", className, onClick }) {
    const sizeClasses = {
        small: "col-span-1 row-span-1",
        medium: "col-span-2 row-span-1",
        large: "col-span-2 row-span-2"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("card transition-all duration-300 group", "hover:scale-[1.02] hover:shadow-xl", "backdrop-blur-sm bg-opacity-90", "border border-base-content/10", "break-inside-avoid bg-base-100", sizeClasses[size], className),
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-body",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/BentoBox.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BentoBox.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = BentoBox;
var _c;
__turbopack_refresh__.register(_c, "BentoBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BentoBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/BentoBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/next/dist/PrismicNextImage.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
/**
 * Component for "CompaniesIHaveWorkedWithSlice" Slices.
 */ const CompaniesIHaveWorkedWithSlice = ({ slice })=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompaniesIHaveWorkedWithSlice.useEffect": ()=>{
            const timer = setInterval({
                "CompaniesIHaveWorkedWithSlice.useEffect.timer": ()=>{
                    setCurrentIndex({
                        "CompaniesIHaveWorkedWithSlice.useEffect.timer": (prevIndex)=>prevIndex === slice.primary.logo.length - 1 ? 0 : prevIndex + 1
                    }["CompaniesIHaveWorkedWithSlice.useEffect.timer"]);
                }
            }["CompaniesIHaveWorkedWithSlice.useEffect.timer"], 3000); // Change slide every 3 seconds
            return ({
                "CompaniesIHaveWorkedWithSlice.useEffect": ()=>clearInterval(timer)
            })["CompaniesIHaveWorkedWithSlice.useEffect"];
        }
    }["CompaniesIHaveWorkedWithSlice.useEffect"], [
        slice.primary.logo.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slice-type": slice.slice_type,
        "data-slice-variation": slice.variation,
        className: "col-span-1 lg:col-span-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BentoBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoBox"], {
            variant: "primary",
            size: "medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrismicRichText, {
                    field: slice.primary.title
                }, void 0, false, {
                    fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-60 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: 300,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: -300,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "flex items-center justify-center w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicNextImage"], {
                                field: slice.primary.logo[currentIndex].company_logo,
                                className: "h-60 w-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, currentIndex, false, {
                            fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/slices/CompaniesIHaveWorkedWithSlice/index.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_s(CompaniesIHaveWorkedWithSlice, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = CompaniesIHaveWorkedWithSlice;
const __TURBOPACK__default__export__ = CompaniesIHaveWorkedWithSlice;
var _c;
__turbopack_refresh__.register(_c, "CompaniesIHaveWorkedWithSlice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/slice-simulator/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@prismicio/simulator/dist/lib/throttle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "throttle": (()=>throttle)
});
const throttle = (fn, delay = 16)=>{
    let lastExec = 0;
    let timer = null;
    return function(...args) {
        const now = Date.now();
        const delta = now - lastExec;
        if (delta >= delay) {
            fn.apply(this, args);
            lastExec = now;
        } else {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                fn.apply(this, args);
                lastExec = Date.now();
            }, delay - delta);
        }
    };
};
;
 //# sourceMappingURL=throttle.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APIRequestType": (()=>APIRequestType),
    "ClientRequestType": (()=>ClientRequestType)
});
var APIRequestType;
(function(APIRequestType2) {
    APIRequestType2["SetActiveSlice"] = "setActiveSlice";
    APIRequestType2["SetSliceZoneSize"] = "setSliceZoneSize";
})(APIRequestType || (APIRequestType = {}));
var ClientRequestType;
(function(ClientRequestType2) {
    ClientRequestType2["Ping"] = "ping";
    ClientRequestType2["SetSliceZone"] = "setSliceZone";
    ClientRequestType2["ScrollToSlice"] = "scrollToSlice";
})(ClientRequestType || (ClientRequestType = {}));
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StateEventType": (()=>StateEventType)
});
var StateEventType;
(function(StateEventType2) {
    StateEventType2["Slices"] = "slices";
    StateEventType2["ActiveSlice"] = "activeSlice";
    StateEventType2["Message"] = "message";
})(StateEventType || (StateEventType = {}));
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/statuses/codes.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"100\":\"Continue\",\"101\":\"Switching Protocols\",\"102\":\"Processing\",\"103\":\"Early Hints\",\"200\":\"OK\",\"201\":\"Created\",\"202\":\"Accepted\",\"203\":\"Non-Authoritative Information\",\"204\":\"No Content\",\"205\":\"Reset Content\",\"206\":\"Partial Content\",\"207\":\"Multi-Status\",\"208\":\"Already Reported\",\"226\":\"IM Used\",\"300\":\"Multiple Choices\",\"301\":\"Moved Permanently\",\"302\":\"Found\",\"303\":\"See Other\",\"304\":\"Not Modified\",\"305\":\"Use Proxy\",\"307\":\"Temporary Redirect\",\"308\":\"Permanent Redirect\",\"400\":\"Bad Request\",\"401\":\"Unauthorized\",\"402\":\"Payment Required\",\"403\":\"Forbidden\",\"404\":\"Not Found\",\"405\":\"Method Not Allowed\",\"406\":\"Not Acceptable\",\"407\":\"Proxy Authentication Required\",\"408\":\"Request Timeout\",\"409\":\"Conflict\",\"410\":\"Gone\",\"411\":\"Length Required\",\"412\":\"Precondition Failed\",\"413\":\"Payload Too Large\",\"414\":\"URI Too Long\",\"415\":\"Unsupported Media Type\",\"416\":\"Range Not Satisfiable\",\"417\":\"Expectation Failed\",\"418\":\"I'm a Teapot\",\"421\":\"Misdirected Request\",\"422\":\"Unprocessable Entity\",\"423\":\"Locked\",\"424\":\"Failed Dependency\",\"425\":\"Too Early\",\"426\":\"Upgrade Required\",\"428\":\"Precondition Required\",\"429\":\"Too Many Requests\",\"431\":\"Request Header Fields Too Large\",\"451\":\"Unavailable For Legal Reasons\",\"500\":\"Internal Server Error\",\"501\":\"Not Implemented\",\"502\":\"Bad Gateway\",\"503\":\"Service Unavailable\",\"504\":\"Gateway Timeout\",\"505\":\"HTTP Version Not Supported\",\"506\":\"Variant Also Negotiates\",\"507\":\"Insufficient Storage\",\"508\":\"Loop Detected\",\"509\":\"Bandwidth Limit Exceeded\",\"510\":\"Not Extended\",\"511\":\"Network Authentication Required\"}"));}}),
"[project]/node_modules/statuses/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module dependencies.
 * @private
 */ var codes = __turbopack_require__("[project]/node_modules/statuses/codes.json (json)");
/**
 * Module exports.
 * @public
 */ module.exports = status;
// status code to message map
status.message = codes;
// status message (lower-case) to code map
status.code = createMessageToStatusCodeMap(codes);
// array of status codes
status.codes = createStatusCodeList(codes);
// status codes for redirects
status.redirect = {
    300: true,
    301: true,
    302: true,
    303: true,
    305: true,
    307: true,
    308: true
};
// status codes for empty bodies
status.empty = {
    204: true,
    205: true,
    304: true
};
// status codes for when you should retry the request
status.retry = {
    502: true,
    503: true,
    504: true
};
/**
 * Create a map of message to status code.
 * @private
 */ function createMessageToStatusCodeMap(codes) {
    var map = {};
    Object.keys(codes).forEach(function forEachCode(code) {
        var message = codes[code];
        var status = Number(code);
        // populate map
        map[message.toLowerCase()] = status;
    });
    return map;
}
/**
 * Create a list of all status codes.
 * @private
 */ function createStatusCodeList(codes) {
    return Object.keys(codes).map(function mapCode(code) {
        return Number(code);
    });
}
/**
 * Get the status code for given message.
 * @private
 */ function getStatusCode(message) {
    var msg = message.toLowerCase();
    if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
        throw new Error('invalid status message: "' + message + '"');
    }
    return status.code[msg];
}
/**
 * Get the status message for given code.
 * @private
 */ function getStatusMessage(code) {
    if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
        throw new Error('invalid status code: ' + code);
    }
    return status.message[code];
}
/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */ function status(code) {
    if (typeof code === 'number') {
        return getStatusMessage(code);
    }
    if (typeof code !== 'string') {
        throw new TypeError('code must be a number or string');
    }
    // '403'
    var n = parseInt(code, 10);
    if (!isNaN(n)) {
        return getStatusMessage(n);
    }
    return getStatusCode(code);
}
}}),
"[project]/node_modules/@prismicio/simulator/dist/channel/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InternalEmitterRequestType": (()=>InternalEmitterRequestType),
    "InternalReceiverRequestType": (()=>InternalReceiverRequestType)
});
var InternalEmitterRequestType;
(function(InternalEmitterRequestType2) {
    InternalEmitterRequestType2["Connect"] = "connect";
})(InternalEmitterRequestType || (InternalEmitterRequestType = {}));
var InternalReceiverRequestType;
(function(InternalReceiverRequestType2) {
    InternalReceiverRequestType2["Ready"] = "ready";
})(InternalReceiverRequestType || (InternalReceiverRequestType = {}));
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/channel/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChannelNotSetError": (()=>ChannelNotSetError),
    "ConnectionTimeoutError": (()=>ConnectionTimeoutError),
    "NotReadyError": (()=>NotReadyError),
    "PortNotSetError": (()=>PortNotSetError),
    "RequestTimeoutError": (()=>RequestTimeoutError),
    "ResponseError": (()=>ResponseError),
    "TooManyConcurrentRequestsError": (()=>TooManyConcurrentRequestsError)
});
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
class ResponseError extends Error {
    constructor(errorResponse){
        super(errorResponse.msg);
        __publicField(this, "response");
        this.response = errorResponse;
    }
}
class ConnectionTimeoutError extends Error {
    constructor(){
        super("Connection timed out");
    }
}
class TooManyConcurrentRequestsError extends Error {
    constructor(request){
        super(`Too many concurrent requests`);
        __publicField(this, "request");
        this.request = request;
    }
}
class RequestTimeoutError extends Error {
    constructor(request){
        super(`Request \`${request.requestID}\` timed out`);
        __publicField(this, "request");
        this.request = request;
    }
}
class NotReadyError extends Error {
}
class PortNotSetError extends Error {
    constructor(){
        super("Port is not set");
    }
}
class ChannelNotSetError extends Error {
    constructor(){
        super("Channel is not set");
    }
}
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/channel/messages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createErrorResponseMessage": (()=>createErrorResponseMessage),
    "createRequestMessage": (()=>createRequestMessage),
    "createSuccessResponseMessage": (()=>createSuccessResponseMessage),
    "isErrorResponseMessage": (()=>isErrorResponseMessage),
    "isRequestMessage": (()=>isRequestMessage),
    "isResponseMessage": (()=>isResponseMessage),
    "isSuccessResponseMessage": (()=>isSuccessResponseMessage),
    "validateMessage": (()=>validateMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$statuses$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/statuses/index.js [app-client] (ecmascript)");
;
let requestID = 0;
const createRequestMessage = (type, data, prefix = "")=>{
    return {
        requestID: `${prefix}${requestID++}`,
        type,
        data
    };
};
const createSuccessResponseMessage = (requestID2, data, status = 200)=>{
    var _a;
    if (status >= 400) {
        throw new TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${status}\``);
    }
    return {
        requestID: requestID2,
        status,
        msg: ((_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$statuses$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].message[status]) == null ? void 0 : _a.replace(/\.$/, "").toLowerCase()) ?? "",
        data
    };
};
const createErrorResponseMessage = (requestID2, error, status = 400)=>{
    var _a;
    if (status < 400) {
        throw new TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${status}\``);
    }
    return {
        requestID: requestID2,
        status,
        msg: ((_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$statuses$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].message[status]) == null ? void 0 : _a.replace(/\.$/, "").toLowerCase()) ?? "",
        error
    };
};
const validateMessage = (message)=>{
    if (typeof message !== "object" || message === null) {
        throw new TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof message}\``);
    } else if (!Object.keys(message).every((key)=>[
            "requestID",
            "type",
            "data",
            "status",
            "msg",
            "error"
        ].includes(key))) {
        throw new TypeError(`Invalid message received: ${JSON.stringify(message)}`);
    } else if (typeof message.requestID !== "string") {
        throw new TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof message.id}\``);
    }
    return message;
};
const isRequestMessage = (message)=>{
    return "type" in message;
};
const isResponseMessage = (message)=>{
    return !("type" in message);
};
const isSuccessResponseMessage = (message)=>{
    return isResponseMessage(message) && !("error" in message);
};
const isErrorResponseMessage = (message)=>{
    return isResponseMessage(message) && !("data" in message);
};
;
 //# sourceMappingURL=messages.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/channel/ChannelNetwork.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChannelNetwork": (()=>ChannelNetwork),
    "channelNetworkDefaultOptions": (()=>channelNetworkDefaultOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/messages.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
const channelNetworkDefaultOptions = {
    debug: false,
    maximumRequestConcurrency: 20,
    defaultTimeout: 5e3,
    requestIDPrefix: "channel-"
};
class ChannelNetwork {
    constructor(requestHandlers, options){
        __publicField(this, "requestHandlers");
        __publicField(this, "options");
        __publicField(this, "_port", null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        __publicField(this, "_pendingRequests", /* @__PURE__ */ new Map());
        this.requestHandlers = requestHandlers;
        this.options = {
            ...channelNetworkDefaultOptions,
            ...options
        };
    }
    get port() {
        if (!this._port) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortNotSetError"]();
        }
        return this._port;
    }
    set port(port) {
        if (this._port) {
            this._port.onmessage = null;
        }
        this._port = port;
        if (this._port) {
            this._port.onmessage = this.onMessage.bind(this);
        }
    }
    createRequestMessage(type, data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestMessage"])(type, data, this.options.requestIDPrefix);
    }
    async onMessage(event) {
        if (this.options.debug) {
            console.debug(event.data);
        }
        try {
            const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateMessage"])(event.data);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRequestMessage"])(message)) {
                if (!this.requestHandlers[message.type]) {
                    this.postResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorResponseMessage"])(message.requestID, void 0, 501));
                } else {
                    try {
                        const response = await this.requestHandlers[message.type](message, {
                            success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSuccessResponseMessage"].bind(this, message.requestID),
                            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorResponseMessage"].bind(this, message.requestID)
                        });
                        this.postResponse(response);
                    } catch (error) {
                        this.postResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorResponseMessage"])(message.requestID, error, 500));
                    }
                }
            } else {
                if (!this._pendingRequests.has(message.requestID)) {
                    console.error(`Unknown request ID received in response: ${JSON.stringify(message)}`);
                } else {
                    this._pendingRequests.get(message.requestID)(message);
                    this._pendingRequests.delete(message.requestID);
                }
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.warn(error.message);
            } else {
                throw error;
            }
        }
    }
    postRequest(request, postMessage = (request2)=>this.port.postMessage(request2), options = {}) {
        if (this.options.debug) {
            console.debug(request);
        }
        if (this._pendingRequests.size >= this.options.maximumRequestConcurrency) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooManyConcurrentRequestsError"](request);
        }
        return new Promise((resolve, reject)=>{
            const requestTimeout = setTimeout(()=>{
                if (this._pendingRequests.has(request.requestID)) {
                    this._pendingRequests.delete(request.requestID);
                }
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestTimeoutError"](request));
            }, options.timeout || this.options.defaultTimeout);
            this._pendingRequests.set(request.requestID, (response)=>{
                clearTimeout(requestTimeout);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSuccessResponseMessage"])(response) ? resolve(response) : reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponseError"](response));
            });
            postMessage(request);
        });
    }
    postResponse(response, postMessage = (response2)=>this.port.postMessage(response2)) {
        if (this.options.debug) {
            console.debug(response);
        }
        postMessage(response);
        return response;
    }
}
;
 //# sourceMappingURL=ChannelNetwork.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/channel/ChannelReceiver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChannelReceiver": (()=>ChannelReceiver),
    "channelReceiverDefaultOptions": (()=>channelReceiverDefaultOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$ChannelNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/ChannelNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/messages.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
;
;
const channelReceiverDefaultOptions = {
    readyTimeout: 2e4,
    requestIDPrefix: "receiver-"
};
class ChannelReceiver extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$ChannelNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelNetwork"] {
    constructor(requestHandlers, options){
        super(requestHandlers, {
            ...channelReceiverDefaultOptions,
            ...options
        });
        __publicField(this, "_ready", false);
        window.addEventListener("message", (event)=>{
            this._onPublicMessage(event);
        });
    }
    /**
   * Tells the emitter that receiver is ready
   */ async ready() {
        if (window.parent === window) {
            throw new Error("Receiver is currently not embedded as an iframe");
        }
        this._ready = false;
        const request = this.createRequestMessage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalReceiverRequestType"].Ready, void 0);
        const response = await this.postRequest(request, (request2)=>{
            window.parent.postMessage(request2, "*");
        }, {
            timeout: this.options.readyTimeout
        });
        this._ready = true;
        return response;
    }
    /**
   * Handles public messages
   */ _onPublicMessage(event) {
        try {
            const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateMessage"])(event.data);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRequestMessage"])(message)) {
                if (this.options.debug) {
                    console.debug(event.data);
                }
                switch(message.type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalEmitterRequestType"].Connect:
                        this.port = event.ports[0];
                        const { data } = message;
                        this.options = {
                            ...this.options,
                            ...data,
                            // Ensure core options remain the same
                            debug: this.options.debug,
                            requestIDPrefix: this.options.requestIDPrefix,
                            readyTimeout: this.options.readyTimeout
                        };
                        const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSuccessResponseMessage"])(message.requestID, void 0);
                        this.postResponse(response);
                        break;
                    default:
                        this.postResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorResponseMessage"])(message.requestID, void 0), (response2)=>{
                            event.source.postMessage(response2, event.origin);
                        });
                        break;
                }
            } else {
                if (!this._ready) {
                    this.onMessage(event);
                }
            }
        } catch (error) {
            if (error instanceof TypeError) ;
            else {
                throw error;
            }
        }
    }
    postFormattedRequest(type, data, options = {}) {
        if (!this._ready) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotReadyError"]("Receiver is not ready, use `ChannelReceiver.ready()` first");
        }
        return this.postRequest(this.createRequestMessage(type, data), void 0, options);
    }
}
;
 //# sourceMappingURL=ChannelReceiver.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/SimulatorAPI.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SimulatorAPI": (()=>SimulatorAPI),
    "simulatorAPIDefaultOptions": (()=>simulatorAPIDefaultOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$statuses$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/statuses/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$ChannelReceiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/ChannelReceiver.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var _a, _b;
;
;
;
;
const simulatorAPIDefaultOptions = {
    requestIDPrefix: "api-",
    activeSliceAPI: false,
    sliceZoneSizeAPI: false
};
class SimulatorAPI extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$ChannelReceiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelReceiver"] {
    constructor(requestHandlers, options){
        var _a2, _b2;
        const debug = (options == null ? void 0 : options.debug) || /[?&]debug=true/i.test(decodeURIComponent(window.location.search));
        super({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientRequestType"].Ping]: (_req, res)=>{
                return res.success("pong");
            },
            ...requestHandlers
        }, {
            ...simulatorAPIDefaultOptions,
            ...options,
            debug
        });
        __publicField(this, _a, async (data)=>{
            return await this.postFormattedRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIRequestType"].SetActiveSlice, data);
        });
        __publicField(this, _b, async (data)=>{
            return await this.postFormattedRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIRequestType"].SetSliceZoneSize, data);
        });
        if (debug) {
            window.prismic || (window.prismic = {});
            (_a2 = window.prismic).sliceSimulator || (_a2.sliceSimulator = {});
            (_b2 = window.prismic.sliceSimulator).api || (_b2.api = []);
            window.prismic.sliceSimulator.api.push(this);
        }
    }
}
_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIRequestType"].SetActiveSlice, _b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIRequestType"].SetSliceZoneSize;
;
 //# sourceMappingURL=SimulatorAPI.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/lib/EventEmitter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EventEmitter": (()=>EventEmitter)
});
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
class EventEmitter {
    constructor(){
        __publicField(this, "_listeners", {});
    }
    on(event, listener, key = null) {
        this._listeners[event] = [
            ...this._listeners[event] ?? [],
            [
                listener,
                key
            ]
        ];
    }
    off(event, listenerOrKey) {
        this._listeners[event] = (this._listeners[event] ?? []).filter(([listener, key])=>typeof listenerOrKey === "function" ? listener !== listenerOrKey : key !== listenerOrKey);
    }
    emit(event, payload) {
        (this._listeners[event] ?? []).forEach((listener)=>listener[0](payload));
    }
}
;
 //# sourceMappingURL=EventEmitter.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/domHelpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getActiveSliceDOM": (()=>getActiveSliceDOM),
    "getSimulatorDOM": (()=>getSimulatorDOM),
    "getSimulatorRootDOM": (()=>getSimulatorRootDOM),
    "getSliceZoneDOM": (()=>getSliceZoneDOM),
    "simulatorClass": (()=>simulatorClass),
    "simulatorRootClass": (()=>simulatorRootClass)
});
const simulatorClass = "slice-simulator";
const simulatorRootClass = "slice-simulator--root";
const getSimulatorDOM = ()=>{
    return document.querySelector(`.${simulatorClass}`);
};
const getSimulatorRootDOM = ()=>{
    return document.querySelector(`.${simulatorRootClass}`);
};
const getSliceZoneDOM = (expectedNumberOfChildren)=>{
    let node = document.querySelector(`.${simulatorClass} [data-slice-zone]`);
    if (node) {
        if (node.children.length !== expectedNumberOfChildren) {
            console.warn(`Flagged SliceZone has an unexpected number of children, found ${node.children.length} but expected ${expectedNumberOfChildren}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`);
        }
        return node;
    }
    node = document.querySelector(`.${simulatorClass} .${simulatorRootClass}`);
    if (!node) {
        return null;
    }
    const searchDepth = 5;
    for(let i = 0; i < searchDepth; i++){
        if (node.children.length === expectedNumberOfChildren) {
            return node;
        } else if (node.children.length) {
            node = node.children[0];
        } else {
            break;
        }
    }
    return null;
};
const getActiveSliceDOM = ($sliceZone, mouse)=>{
    const raycast = document.elementsFromPoint(mouse.x, mouse.y).reverse();
    const sliceZoneIndex = raycast.indexOf($sliceZone);
    if (sliceZoneIndex === -1) {
        return null;
    }
    const $slice = raycast[sliceZoneIndex + 1];
    if (!$slice) {
        return null;
    }
    return $slice;
};
;
 //# sourceMappingURL=domHelpers.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDefaultMessage": (()=>getDefaultMessage),
    "getDefaultProps": (()=>getDefaultProps),
    "getDefaultSlices": (()=>getDefaultSlices)
});
const getDefaultProps = ()=>({
        zIndex: 100,
        background: "#ffffff"
    });
const getDefaultSlices = ()=>{
    return [];
};
const getDefaultMessage = ()=>{
    return "";
};
;
 //# sourceMappingURL=getDefault.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/State.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "State": (()=>State)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$EventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/lib/EventEmitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/lib/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/domHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
;
;
;
class State extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$EventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(args){
        super();
        __publicField(this, "_slices");
        __publicField(this, "_activeSlice");
        __publicField(this, "_message");
        __publicField(this, "_mouse");
        __publicField(this, "_setActiveSlice", ()=>{
            if (this.slices.length === 0) {
                this.activeSlice = null;
                return;
            }
            const $sliceZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliceZoneDOM"])(this.slices.length);
            if (!$sliceZone) {
                this.activeSlice = null;
                return;
            }
            const $activeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSliceDOM"])($sliceZone, this._mouse);
            if (!$activeSlice) {
                this.activeSlice = null;
                return;
            }
            const activeSliceIndex = Array.prototype.indexOf.call($sliceZone.children, $activeSlice);
            this.activeSlice = {
                rect: $activeSlice.getBoundingClientRect(),
                sliceID: this.slices[activeSliceIndex].slice_type,
                variationID: this.slices[activeSliceIndex].variation,
                index: activeSliceIndex
            };
        });
        __publicField(this, "setActiveSlice", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])(this._setActiveSlice, 16));
        this._slices = (args == null ? void 0 : args.slices) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSlices"])();
        this._activeSlice = null;
        this._message = "";
        this._mouse = {
            x: 0,
            y: 0
        };
    }
    set slices(slices) {
        this._slices = slices;
        this.message = "";
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Slices, slices);
    }
    get slices() {
        return this._slices;
    }
    set activeSlice(activeSlice) {
        this._activeSlice = activeSlice;
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].ActiveSlice, activeSlice);
    }
    get activeSlice() {
        return this._activeSlice;
    }
    set message(message) {
        this._message = message;
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Message, message);
    }
    get message() {
        return this._message;
    }
    async init() {
        window.addEventListener("mousemove", (event)=>{
            this._mouse = {
                x: event.clientX,
                y: event.clientY
            };
        });
    }
    setSliceZone(slices) {
        this.slices = slices;
    }
}
;
 //# sourceMappingURL=State.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/messages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sliceSimulatorAccessedDirectly": (()=>sliceSimulatorAccessedDirectly)
});
const div = (content)=>`<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${content}</div>`;
const a = (href, label)=>`<a href="${href}" style="text-decoration: underline;">${label || href}<a>`;
const header = "   _____ ___          _____ _                 __      __            \n  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____\n  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ `__ \\/ / / / / __ `/ __/ __ \\/ ___/\n ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    \n/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     \n                  / /_  __  __   / __ \\_____(_)________ ___  (_)____\n                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ `__ \\/ / ___/\n                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  \n               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  \n                     /____/\n\n";
const footer = "\n\n\n\n\n\n                                                - The Prismic team";
const sliceSimulatorAccessedDirectly = div([
    header,
    `You're seeing this page because you're accessing Slice simulator
directly, e.g:

  - ${a("http://localhost:3000/slice-simulator")}



The Slice simulator can only be accessed through Slice Machine or the
Page Builder. To preview your Slices, head over to Slice Machine:

  - ${a("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${a("https://github.com/prismicio/slice-machine/issues/new/choose")}`,
    footer
].join(""));
;
 //# sourceMappingURL=messages.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/SimulatorManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SimulatorManager": (()=>SimulatorManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/lib/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$SimulatorAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/SimulatorAPI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$statuses$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/statuses/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/channel/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$State$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/State.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/domHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/messages.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
;
;
;
;
;
;
;
;
class SimulatorManager {
    constructor(args){
        __publicField(this, "state");
        __publicField(this, "_api");
        __publicField(this, "_initialized");
        this.state = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$State$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"](args);
        this._api = null;
        this._initialized = false;
    }
    async init() {
        if (this._initialized) {
            return;
        } else {
            this._initialized = true;
        }
        await this.state.init();
        try {
            await this._initAPI();
        } catch (error) {
            if (error instanceof Error && error.message === "Receiver is currently not embedded as an iframe" && !this.state.slices.length) {
                this.state.message = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceSimulatorAccessedDirectly"];
            }
            console.error(error);
            return;
        }
        this._initListeners();
    }
    async _initAPI() {
        this._api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$SimulatorAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimulatorAPI"]({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientRequestType"].SetSliceZone]: (req, res)=>{
                this.state.setSliceZone(req.data);
                return res.success();
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientRequestType"].ScrollToSlice]: (req, res)=>{
                var _a;
                if (req.data.sliceIndex < 0) {
                    return res.error("`sliceIndex` must be > 0", 400);
                } else if (req.data.sliceIndex >= this.state.slices.length) {
                    return res.error(`\`sliceIndex\` must be < ${this.state.slices.length} (\`<SliceZone />\` current length)`, 400);
                }
                const $sliceZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliceZoneDOM"])(this.state.slices.length);
                if (!$sliceZone) {
                    return res.error("Failed to find `<SliceZone />`", 500);
                }
                this.state.activeSlice = null;
                const $slice = $sliceZone.children[req.data.sliceIndex];
                if (!$slice) {
                    return res.error(`Failed fo find slice at index $\`{req.data.sliceIndex}\` in \`<SliceZone />\``, 500);
                }
                $slice.scrollIntoView({
                    behavior: req.data.behavior,
                    block: req.data.block,
                    inline: req.data.inline
                });
                ((_a = this._api) == null ? void 0 : _a.options.activeSliceAPI) && setTimeout(this.state.setActiveSlice, 750);
                return res.success();
            }
        });
        await this._api.ready();
    }
    _initListeners() {
        var _a, _b;
        if ((_a = this._api) == null ? void 0 : _a.options.activeSliceAPI) {
            window.addEventListener("mousemove", ()=>{
                this.state.setActiveSlice();
            });
            window.addEventListener("resize", ()=>{
                this.state.setActiveSlice();
            });
            window.addEventListener("mousewheel", ()=>{
                setTimeout(this.state.setActiveSlice, 200);
            });
            this.state.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Slices, ()=>{
                this.state.setActiveSlice();
            });
            this.state.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].ActiveSlice, async (activeSlice)=>{
                if (this._api) {
                    try {
                        await this._api.setActiveSlice(activeSlice);
                    } catch (error) {
                        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponseError"] && error.response.status === 400) {
                            console.error(error.response);
                        } else {
                            throw error;
                        }
                    }
                }
            });
        }
        if ((_b = this._api) == null ? void 0 : _b.options.sliceZoneSizeAPI) {
            const resizeObserver = new ResizeObserver((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$lib$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])(async (entries)=>{
                const [entry] = entries;
                if (this._api && entry) {
                    try {
                        await this._api.setSliceZoneSize({
                            rect: entry.contentRect
                        });
                    } catch (error) {
                        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$channel$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponseError"] && error.response.status === 400) {
                            console.error(error.response);
                        } else {
                            throw error;
                        }
                    }
                }
            }, 16));
            const observeSimulatorRoot = ()=>{
                const simulatorRootDOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSimulatorRootDOM"])();
                resizeObserver.disconnect();
                if (simulatorRootDOM) {
                    resizeObserver.observe(simulatorRootDOM);
                }
            };
            const mutationObserver = new MutationObserver(observeSimulatorRoot);
            mutationObserver.observe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSimulatorDOM"])(), {
                subtree: false,
                childList: true
            });
        }
    }
}
;
 //# sourceMappingURL=SimulatorManager.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit/eventHandlers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "disableEventHandler": (()=>disableEventHandler),
    "onClickHandler": (()=>onClickHandler)
});
const disableEventHandler = (event)=>{
    event.preventDefault();
    event.stopPropagation();
};
const onClickHandler = (event)=>{
    if (event.path && event.path.slice(0, 5).some((el)=>el instanceof HTMLAnchorElement)) {
        event.preventDefault();
        event.stopPropagation();
    }
};
;
 //# sourceMappingURL=eventHandlers.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
 //# sourceMappingURL=kit.js.map
}}),
"[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$SimulatorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/SimulatorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$State$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/State.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/domHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$eventHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/eventHandlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/messages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/lz-string/libs/lz-string.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.5
var LZString = function() {
    // private property
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for(var i = 0; i < alphabet.length; i++){
                baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
        }
        return baseReverseDic[alphabet][character];
    }
    var LZString = {
        compressToBase64: function(input) {
            if (input == null) return "";
            var res = LZString._compress(input, 6, function(a) {
                return keyStrBase64.charAt(a);
            });
            switch(res.length % 4){
                default:
                case 0:
                    return res;
                case 1:
                    return res + "===";
                case 2:
                    return res + "==";
                case 3:
                    return res + "=";
            }
        },
        decompressFromBase64: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            return LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrBase64, input.charAt(index));
            });
        },
        compressToUTF16: function(input) {
            if (input == null) return "";
            return LZString._compress(input, 15, function(a) {
                return f(a + 32);
            }) + " ";
        },
        decompressFromUTF16: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 16384, function(index) {
                return compressed.charCodeAt(index) - 32;
            });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(uncompressed) {
            var compressed = LZString.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character
            for(var i = 0, TotalLen = compressed.length; i < TotalLen; i++){
                var current_value = compressed.charCodeAt(i);
                buf[i * 2] = current_value >>> 8;
                buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(compressed) {
            if (compressed === null || compressed === undefined) {
                return LZString.decompress(compressed);
            } else {
                var buf = new Array(compressed.length / 2); // 2 bytes per character
                for(var i = 0, TotalLen = buf.length; i < TotalLen; i++){
                    buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
                }
                var result = [];
                buf.forEach(function(c) {
                    result.push(f(c));
                });
                return LZString.decompress(result.join(''));
            }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(input) {
            if (input == null) return "";
            return LZString._compress(input, 6, function(a) {
                return keyStrUriSafe.charAt(a);
            });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
        },
        compress: function(uncompressed) {
            return LZString._compress(uncompressed, 16, function(a) {
                return f(a);
            });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null) return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for(ii = 0; ii < uncompressed.length; ii += 1){
                context_c = uncompressed.charAt(ii);
                if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                    context_dictionary[context_c] = context_dictSize++;
                    context_dictionaryToCreate[context_c] = true;
                }
                context_wc = context_w + context_c;
                if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                    context_w = context_wc;
                } else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for(i = 0; i < context_numBits; i++){
                                context_data_val = context_data_val << 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else {
                                    context_data_position++;
                                }
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 8; i++){
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else {
                                    context_data_position++;
                                }
                                value = value >> 1;
                            }
                        } else {
                            value = 1;
                            for(i = 0; i < context_numBits; i++){
                                context_data_val = context_data_val << 1 | value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else {
                                    context_data_position++;
                                }
                                value = 0;
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 16; i++){
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else {
                                    context_data_position++;
                                }
                                value = value >> 1;
                            }
                        }
                        context_enlargeIn--;
                        if (context_enlargeIn == 0) {
                            context_enlargeIn = Math.pow(2, context_numBits);
                            context_numBits++;
                        }
                        delete context_dictionaryToCreate[context_w];
                    } else {
                        value = context_dictionary[context_w];
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    // Add wc to the dictionary.
                    context_dictionary[context_wc] = context_dictSize++;
                    context_w = String(context_c);
                }
            }
            // Output the code for w.
            if (context_w !== "") {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 8; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    } else {
                        value = 1;
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = 0;
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 16; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    delete context_dictionaryToCreate[context_w];
                } else {
                    value = context_dictionary[context_w];
                    for(i = 0; i < context_numBits; i++){
                        context_data_val = context_data_val << 1 | value & 1;
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                        value = value >> 1;
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
            }
            // Mark the end of the stream
            value = 2;
            for(i = 0; i < context_numBits; i++){
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                } else {
                    context_data_position++;
                }
                value = value >> 1;
            }
            // Flush the last char
            while(true){
                context_data_val = context_data_val << 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data.push(getCharFromInt(context_data_val));
                    break;
                } else context_data_position++;
            }
            return context_data.join('');
        },
        decompress: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 32768, function(index) {
                return compressed.charCodeAt(index);
            });
        },
        _decompress: function(length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = {
                val: getNextValue(0),
                position: resetValue,
                index: 1
            };
            for(i = 0; i < 3; i += 1){
                dictionary[i] = i;
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while(power != maxpower){
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch(next = bits){
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while(power != maxpower){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while(power != maxpower){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 2:
                    return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while(true){
                if (data.index > length) {
                    return "";
                }
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                while(power != maxpower){
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                switch(c = bits){
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        while(power != maxpower){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        while(power != maxpower){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join('');
                }
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                if (dictionary[c]) {
                    entry = dictionary[c];
                } else {
                    if (c === dictSize) {
                        entry = w + w.charAt(0);
                    } else {
                        return null;
                    }
                }
                result.push(entry);
                // Add w+entry[0] to the dictionary.
                dictionary[dictSize++] = w + entry.charAt(0);
                enlargeIn--;
                w = entry;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
            }
        }
    };
    return LZString;
}();
if (typeof define === 'function' && define.amd) {
    ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
        return LZString;
    }(__turbopack_require__, exports, module));
} else if (("TURBOPACK compile-time value", "object") !== 'undefined' && module != null) {
    module.exports = LZString;
} else if (typeof angular !== 'undefined' && angular != null) {
    angular.module('LZString', []).factory('LZString', function() {
        return LZString;
    });
}
}}),
"[project]/node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SliceSimulatorWrapper": (()=>SliceSimulatorWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/domHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$eventHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/eventHandlers.js [app-client] (ecmascript)");
;
;
const SliceSimulatorWrapper = ({ className, children, zIndex, background, message, hasSlices })=>{
    const defaultProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultProps"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulatorClass"],
            className
        ].filter(Boolean).join(" "),
        style: {
            zIndex: typeof zIndex === "undefined" ? defaultProps.zIndex : zIndex ?? void 0,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            overflow: "auto",
            background: typeof background === "undefined" ? defaultProps.background : background ?? void 0
        },
        children: message ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("article", {
            dangerouslySetInnerHTML: {
                __html: message
            }
        }) : hasSlices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            id: "root",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$domHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulatorRootClass"],
            onClickCapture: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$eventHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onClickHandler"],
            onSubmitCapture: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$eventHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableEventHandler"],
            children
        }) : null
    });
};
;
 //# sourceMappingURL=SliceSimulatorWrapper.js.map
}}),
"[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSlices": (()=>getSlices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lz-string/libs/lz-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)");
;
;
const getSlices = (state)=>{
    return state ? JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decompressFromEncodedURIComponent"])(state)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSlices"])();
};
;
 //# sourceMappingURL=getSlices.js.map
}}),
"[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SliceSimulator": (()=>SliceSimulator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lz-string/libs/lz-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$SliceSimulatorWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$getSlices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$SimulatorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/SimulatorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/getDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/simulator/dist/kit/types.js [app-client] (ecmascript)");
'use client';
'use client';
;
;
;
;
;
;
;
const STATE_PARAMS_KEY = "state";
const simulatorManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$SimulatorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimulatorManager"]();
const SliceSimulator = ({ children, background, zIndex, className })=>{
    const [message, setMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "SliceSimulator.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$getDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultMessage"])()
    }["SliceSimulator.useState"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const state = typeof window !== "undefined" ? new URL(window.location.href).searchParams.get(STATE_PARAMS_KEY) : void 0;
    const hasSlices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$getSlices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlices"])(state).length > 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "SliceSimulator.useEffect": ()=>{
            simulatorManager.state.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Slices, {
                "SliceSimulator.useEffect": (newSlices)=>{
                    const url = new URL(window.location.href);
                    url.searchParams.set(STATE_PARAMS_KEY, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lz$2d$string$2f$libs$2f$lz$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressToEncodedURIComponent"])(JSON.stringify(newSlices)));
                    window.history.replaceState(null, "", url);
                    setTimeout({
                        "SliceSimulator.useEffect": ()=>router.refresh()
                    }["SliceSimulator.useEffect"], 0);
                }
            }["SliceSimulator.useEffect"], "simulator-slices");
            simulatorManager.state.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Message, {
                "SliceSimulator.useEffect": (newMessage)=>setMessage(newMessage)
            }["SliceSimulator.useEffect"], "simulator-message");
            simulatorManager.init();
            return ({
                "SliceSimulator.useEffect": ()=>{
                    simulatorManager.state.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Slices, "simulator-slices");
                    simulatorManager.state.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$simulator$2f$dist$2f$kit$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEventType"].Message, "simulator-message");
                }
            })["SliceSimulator.useEffect"];
        }
    }["SliceSimulator.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$SliceSimulatorWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliceSimulatorWrapper"], {
        message,
        hasSlices,
        background,
        zIndex,
        className,
        children
    });
};
;
 //# sourceMappingURL=SliceSimulator.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw new _bailouttocsr.BailoutToCSRError(reason);
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk);
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
}]);

//# sourceMappingURL=_46c91d._.js.map