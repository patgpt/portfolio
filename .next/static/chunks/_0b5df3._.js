(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0b5df3._.js", {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/PrismicRichText.js [app-client] (ecmascript)");
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicRichText"], {
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
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
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
"[project]/node_modules/@prismicio/react/dist/PrismicProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicContext": (()=>PrismicContext),
    "PrismicProvider": (()=>PrismicProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const PrismicContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({});
const PrismicProvider = ({ client, linkResolver, richTextComponents, internalLinkComponent, externalLinkComponent, children })=>{
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "PrismicProvider.useMemo[value]": ()=>({
                client,
                linkResolver,
                richTextComponents,
                internalLinkComponent,
                externalLinkComponent
            })
    }["PrismicProvider.useMemo[value]"], [
        client,
        linkResolver,
        richTextComponents,
        internalLinkComponent,
        externalLinkComponent
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PrismicContext.Provider, {
        value,
        children
    });
};
;
 //# sourceMappingURL=PrismicProvider.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/usePrismicContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "usePrismicContext": (()=>usePrismicContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/PrismicProvider.js [app-client] (ecmascript)");
;
;
const usePrismicContext = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicContext"]) || {};
};
;
 //# sourceMappingURL=usePrismicContext.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@prismicio/types/dist/value/richText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RichTextNodeType": (()=>RichTextNodeType)
});
const RichTextNodeType = {
    heading1: "heading1",
    heading2: "heading2",
    heading3: "heading3",
    heading4: "heading4",
    heading5: "heading5",
    heading6: "heading6",
    paragraph: "paragraph",
    preformatted: "preformatted",
    strong: "strong",
    em: "em",
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    image: "image",
    embed: "embed",
    hyperlink: "hyperlink",
    label: "label",
    span: "span"
};
;
 //# sourceMappingURL=richText.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/asText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asText": (()=>asText)
});
const asText = (richTextField, separator = " ")=>{
    let result = "";
    for(let i = 0; i < richTextField.length; i++){
        if ("text" in richTextField[i]) {
            result += (result ? separator : "") + richTextField[i].text;
        }
    }
    return result;
};
;
 //# sourceMappingURL=asText.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asTree": (()=>asTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-client] (ecmascript)");
;
const uuid = ()=>{
    return (++uuid.i).toString();
};
uuid.i = 0;
const asTree = (nodes)=>{
    const preparedNodes = prepareNodes(nodes);
    const children = [];
    for(let i = 0; i < preparedNodes.length; i++){
        children.push(nodeToTreeNode(preparedNodes[i]));
    }
    return {
        key: uuid(),
        children
    };
};
const createTreeNode = (node, children = [])=>{
    return {
        key: uuid(),
        type: node.type,
        text: "text" in node ? node.text : void 0,
        node,
        children
    };
};
const createTextTreeNode = (text)=>{
    return createTreeNode({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].span,
        text,
        spans: []
    });
};
const prepareNodes = (nodes)=>{
    const mutNodes = nodes.slice(0);
    for(let i = 0; i < mutNodes.length; i++){
        const node = mutNodes[i];
        if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem || node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem) {
            const items = [
                node
            ];
            while(mutNodes[i + 1] && mutNodes[i + 1].type === node.type){
                items.push(mutNodes[i + 1]);
                mutNodes.splice(i, 1);
            }
            if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem) {
                mutNodes[i] = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].list,
                    items
                };
            } else {
                mutNodes[i] = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList,
                    items
                };
            }
        }
    }
    return mutNodes;
};
const nodeToTreeNode = (node)=>{
    if ("text" in node) {
        return createTreeNode(node, textNodeSpansToTreeNodeChildren(node.spans, node));
    }
    if ("items" in node) {
        const children = [];
        for(let i = 0; i < node.items.length; i++){
            children.push(nodeToTreeNode(node.items[i]));
        }
        return createTreeNode(node, children);
    }
    return createTreeNode(node);
};
const textNodeSpansToTreeNodeChildren = (spans, node, parentSpan)=>{
    if (!spans.length) {
        return [
            createTextTreeNode(node.text)
        ];
    }
    const mutSpans = spans.slice(0);
    mutSpans.sort((a, b)=>a.start - b.start || b.end - a.end);
    const children = [];
    for(let i = 0; i < mutSpans.length; i++){
        const span = mutSpans[i];
        const parentSpanStart = parentSpan && parentSpan.start || 0;
        const spanStart = span.start - parentSpanStart;
        const spanEnd = span.end - parentSpanStart;
        const text = node.text.slice(spanStart, spanEnd);
        const childSpans = [];
        for(let j = i; j < mutSpans.length; j++){
            const siblingSpan = mutSpans[j];
            if (siblingSpan !== span) {
                if (siblingSpan.start >= span.start && siblingSpan.end <= span.end) {
                    childSpans.push(siblingSpan);
                    mutSpans.splice(j, 1);
                    j--;
                } else if (siblingSpan.start < span.end && siblingSpan.end > span.start) {
                    childSpans.push({
                        ...siblingSpan,
                        end: span.end
                    });
                    mutSpans[j] = {
                        ...siblingSpan,
                        start: span.end
                    };
                }
            }
        }
        if (i === 0 && spanStart > 0) {
            children.push(createTextTreeNode(node.text.slice(0, spanStart)));
        }
        const spanWithText = {
            ...span,
            text
        };
        children.push(createTreeNode(spanWithText, textNodeSpansToTreeNodeChildren(childSpans, {
            ...node,
            text
        }, span)));
        if (spanEnd < node.text.length) {
            children.push(createTextTreeNode(node.text.slice(spanEnd, mutSpans[i + 1] ? mutSpans[i + 1].start - parentSpanStart : void 0)));
        }
    }
    return children;
};
;
 //# sourceMappingURL=asTree.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/composeSerializers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "composeSerializers": (()=>composeSerializers)
});
const composeSerializers = (...serializers)=>{
    return (...args)=>{
        for(let i = 0; i < serializers.length; i++){
            const serializer = serializers[i];
            if (serializer) {
                const res = serializer(...args);
                if (res != null) {
                    return res;
                }
            }
        }
    };
};
;
 //# sourceMappingURL=composeSerializers.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/serialize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serialize": (()=>serialize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-client] (ecmascript)");
;
const serialize = (richTextField, serializer)=>{
    return serializeTreeNodes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTree"])(richTextField).children, serializer);
};
const serializeTreeNodes = (nodes, serializer)=>{
    const serializedTreeNodes = [];
    for(let i = 0; i < nodes.length; i++){
        const treeNode = nodes[i];
        const serializedTreeNode = serializer(treeNode.type, treeNode.node, treeNode.text, serializeTreeNodes(treeNode.children, serializer), treeNode.key);
        if (serializedTreeNode != null) {
            serializedTreeNodes.push(serializedTreeNode);
        }
    }
    return serializedTreeNodes;
};
;
 //# sourceMappingURL=serialize.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RichTextReversedNodeType": (()=>RichTextReversedNodeType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-client] (ecmascript)");
;
const RichTextReversedNodeType = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem]: "listItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem]: "oListItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].list]: "list",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList]: "oList"
};
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/wrapMapSerializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wrapMapSerializer": (()=>wrapMapSerializer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/types.js [app-client] (ecmascript)");
;
const wrapMapSerializer = (mapSerializer)=>{
    return (type, node, text, children, key)=>{
        const tagSerializer = mapSerializer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextReversedNodeType"][type] || type];
        if (tagSerializer) {
            return tagSerializer({
                // @ts-expect-error cannot type check here
                type,
                // @ts-expect-error cannot type check here
                node,
                // @ts-expect-error cannot type check here
                text,
                // @ts-expect-error cannot type check here
                children,
                // @ts-expect-error cannot type check here
                key
            });
        }
    };
};
;
 //# sourceMappingURL=wrapMapSerializer.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Element": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextNodeType"]),
    "asText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asText"]),
    "asTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTree"]),
    "composeSerializers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$composeSerializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeSerializers"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"]),
    "wrapMapSerializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$wrapMapSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapMapSerializer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$composeSerializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/composeSerializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/serialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$wrapMapSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/wrapMapSerializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Element": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Element"]),
    "asText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["asText"]),
    "asTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["asTree"]),
    "composeSerializers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["composeSerializers"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serialize"]),
    "wrapMapSerializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["wrapMapSerializer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/@prismicio/react/dist/package.json.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = "2.9.1";
;
 //# sourceMappingURL=package.json.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "devMsg": (()=>devMsg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/package.json.js [app-client] (ecmascript)");
;
const devMsg = (slug)=>{
    return `https://prismic.dev/msg/react/v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}/${slug}`;
};
;
 //# sourceMappingURL=devMsg.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "imageThumbnail": (()=>imageThumbnail),
    "link": (()=>link),
    "richText": (()=>richText)
});
const isNonNullish = (input)=>{
    return input != null;
};
const richText = (field)=>{
    if (!isNonNullish(field)) {
        return false;
    } else if (field.length === 1 && "text" in field[0]) {
        return !!field[0].text;
    } else {
        return !!field.length;
    }
};
const imageThumbnail = (thumbnail)=>{
    return isNonNullish(thumbnail) && !!thumbnail.url;
};
const link = (field)=>{
    return isNonNullish(field) && ("id" in field || "url" in field);
};
;
 //# sourceMappingURL=isFilled.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LinkType": (()=>LinkType)
});
const LinkType = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
};
;
 //# sourceMappingURL=link.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/documentToLinkField.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "documentToLinkField": (()=>documentToLinkField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-client] (ecmascript)");
;
const documentToLinkField = (prismicDocument)=>{
    var _a;
    return {
        link_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkType"].Document,
        id: prismicDocument.id,
        uid: prismicDocument.uid || void 0,
        type: prismicDocument.type,
        tags: prismicDocument.tags,
        lang: prismicDocument.lang,
        url: prismicDocument.url == null ? void 0 : prismicDocument.url,
        slug: (_a = prismicDocument.slugs) == null ? void 0 : _a[0],
        // Slug field is not available with GraphQL
        // The REST API does not include a `data` property if the data
        // object is empty.
        //
        // A presence check for `prismicDocument.data` is done to
        // support partial documents. While `documentToLinkField` is
        // not typed to accept partial documents, passing a partial
        // document can happen in untyped projects.
        ...prismicDocument.data && Object.keys(prismicDocument.data).length > 0 ? {
            data: prismicDocument.data
        } : {}
    };
};
;
 //# sourceMappingURL=documentToLinkField.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLink.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asLink": (()=>asLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$documentToLinkField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/documentToLinkField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-client] (ecmascript)");
;
;
const asLink = (linkFieldOrDocument, ...configObjectOrTuple)=>{
    if (!linkFieldOrDocument) {
        return null;
    }
    const linkField = // prettier-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
    // TODO: Remove the `prettier-ignore` comment when this bug is fixed.
    "link_type" in linkFieldOrDocument ? linkFieldOrDocument : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$documentToLinkField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentToLinkField"])(linkFieldOrDocument);
    const [configObjectOrLinkResolver] = configObjectOrTuple;
    let config;
    if (typeof configObjectOrLinkResolver === "function" || configObjectOrLinkResolver == null) {
        config = {
            linkResolver: configObjectOrLinkResolver
        };
    } else {
        config = {
            ...configObjectOrLinkResolver
        };
    }
    switch(linkField.link_type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkType"].Media:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkType"].Web:
            return "url" in linkField ? linkField.url : null;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkType"].Document:
            {
                if ("id" in linkField && config.linkResolver) {
                    const resolvedURL = config.linkResolver(linkField);
                    if (resolvedURL != null) {
                        return resolvedURL;
                    }
                }
                if ("url" in linkField && linkField.url) {
                    return linkField.url;
                }
                return null;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkType"].Any:
        default:
            return null;
    }
};
;
 //# sourceMappingURL=asLink.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isInternalURL": (()=>isInternalURL)
});
const isInternalURL = (url)=>{
    const isInternal = /^(\/(?!\/)|#)/.test(url);
    const isSpecialLink = !isInternal && !/^https?:\/\//.test(url);
    return isInternal && !isSpecialLink;
};
;
 //# sourceMappingURL=isInternalURL.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asLinkAttrs": (()=>asLinkAttrs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-client] (ecmascript)");
;
;
;
const asLinkAttrs = (linkFieldOrDocument, config = {})=>{
    if (linkFieldOrDocument && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
    ("link_type" in linkFieldOrDocument ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["link"])(linkFieldOrDocument) : linkFieldOrDocument)) {
        const target = // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
        "target" in linkFieldOrDocument ? linkFieldOrDocument.target : void 0;
        const rawHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLink"])(linkFieldOrDocument, config.linkResolver);
        const href = rawHref == null ? void 0 : rawHref;
        const isExternal = typeof href === "string" ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInternalURL"])(href) : false;
        const rel = config.rel ? config.rel({
            href,
            isExternal,
            target
        }) : isExternal ? "noreferrer" : void 0;
        return {
            href,
            target,
            rel: rel == null ? void 0 : rel
        };
    }
    return {};
};
;
 //# sourceMappingURL=asLinkAttrs.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/lib/isInternalURL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isInternalURL": (()=>isInternalURL)
});
const isInternalURL = (url)=>{
    const isInternal = /^(\/(?!\/)|#)/.test(url);
    const isSpecialLink = !isInternal && !/^https?:\/\//.test(url);
    return isInternal && !isSpecialLink;
};
;
 //# sourceMappingURL=isInternalURL.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/react-server/PrismicLink.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicLink": (()=>PrismicLink),
    "defaultComponent": (()=>defaultComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/isInternalURL.js [app-client] (ecmascript)");
;
;
;
;
;
const defaultComponent = "a";
const PrismicLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function PrismicLink2(props, ref) {
    const { field, document: doc, linkResolver, internalComponent, externalComponent, children, ...restProps } = props;
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
        if (field) {
            if (!field.link_type) {
                console.error(`[PrismicLink] This "field" prop value caused an error to be thrown.
`, field);
                throw new Error(`[PrismicLink] The provided field is missing required properties to properly render a link. The link will not render. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`);
            } else if (("text" in field ? Object.keys(field).length > 2 : Object.keys(field).length > 1) && !("url" in field || "uid" in field || "id" in field)) {
                console.warn(`[PrismicLink] The provided field is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, field);
            }
        } else if (doc) {
            if (!("url" in doc || "id" in doc)) {
                console.warn(`[PrismicLink] The provided document is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, doc);
            }
        }
    }
    const { href: computedHref, rel: computedRel, ...attrs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLinkAttrs"])(field ?? doc, {
        linkResolver,
        rel: typeof restProps.rel === "function" ? restProps.rel : void 0
    });
    let rel = computedRel;
    if ("rel" in restProps && typeof restProps.rel !== "function") {
        rel = restProps.rel;
    }
    const href = ("href" in restProps ? restProps.href : computedHref) || "";
    const InternalComponent = internalComponent || defaultComponent;
    const ExternalComponent = externalComponent || defaultComponent;
    const Component = href && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInternalURL"])(href) ? InternalComponent : ExternalComponent;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref,
        ...attrs,
        ...restProps,
        href,
        rel,
        children: "children" in props ? children : field == null ? void 0 : field.text
    });
});
;
 //# sourceMappingURL=PrismicLink.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/react-server/PrismicRichText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicRichText": (()=>PrismicRichText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/react-server/PrismicLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-client] (ecmascript)");
;
;
;
;
;
;
const getDir = (node)=>{
    if ("direction" in node && node.direction === "rtl") {
        return "rtl";
    }
};
const createDefaultSerializer = (args)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.wrapMapSerializer({
        heading1: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                dir: getDir(node),
                children
            }, key),
        heading2: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                dir: getDir(node),
                children
            }, key),
        heading3: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                dir: getDir(node),
                children
            }, key),
        heading4: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                dir: getDir(node),
                children
            }, key),
        heading5: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                dir: getDir(node),
                children
            }, key),
        heading6: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h6", {
                dir: getDir(node),
                children
            }, key),
        paragraph: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                dir: getDir(node),
                children
            }, key),
        preformatted: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                children: node.text
            }, key),
        strong: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                children
            }, key),
        em: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("em", {
                children
            }, key),
        listItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        oListItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        list: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                children
            }, key),
        oList: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ol", {
                children
            }, key),
        image: ({ node, key })=>{
            const img = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                src: node.url,
                alt: node.alt ?? void 0,
                "data-copyright": node.copyright ? node.copyright : void 0
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "block-img",
                children: node.linkTo ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicLink"], {
                    linkResolver: args.linkResolver,
                    internalComponent: args.internalLinkComponent,
                    externalComponent: args.externalLinkComponent,
                    field: node.linkTo,
                    children: img
                }) : img
            }, key);
        },
        embed: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "data-oembed": node.oembed.embed_url,
                "data-oembed-type": node.oembed.type,
                "data-oembed-provider": node.oembed.provider_name,
                dangerouslySetInnerHTML: {
                    __html: node.oembed.html ?? ""
                }
            }, key),
        hyperlink: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicLink"], {
                field: node.data,
                linkResolver: args.linkResolver,
                internalComponent: args.internalLinkComponent,
                externalComponent: args.externalLinkComponent,
                children
            }, key),
        label: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: node.data.label,
                children
            }, key),
        span: ({ text, key })=>{
            const result = [];
            let i = 0;
            for (const line of text.split("\n")){
                if (i > 0) {
                    result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("br", {}, `${i}__break`));
                }
                result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, {
                    children: line
                }, `${i}__line`));
                i++;
            }
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, {
                children: result
            }, key);
        }
    });
function PrismicRichText({ linkResolver, field, fallback, components, externalLinkComponent, internalLinkComponent, ...restProps }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "PrismicRichText.useMemo": ()=>{
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                if ("className" in restProps) {
                    console.warn(`[PrismicRichText] className cannot be passed to <PrismicRichText> since it renders an array without a wrapping component. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devMsg"])("classname-is-not-a-valid-prop")}.`, field);
                }
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["richText"])(field)) {
                const serializer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.composeSerializers(typeof components === "object" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.wrapMapSerializer(components) : components, createDefaultSerializer({
                    linkResolver,
                    internalLinkComponent,
                    externalLinkComponent
                }));
                const serialized = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.serialize(field, {
                    "PrismicRichText.useMemo.serialized": (type, node, text, children, key)=>{
                        const result = serializer(type, node, text, children, key);
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(result) && result.key == null) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(result, {
                                key
                            });
                        } else {
                            return result;
                        }
                    }
                }["PrismicRichText.useMemo.serialized"]);
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: serialized
                });
            } else {
                return fallback != null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: fallback
                }) : null;
            }
        }
    }["PrismicRichText.useMemo"], [
        field,
        internalLinkComponent,
        externalLinkComponent,
        components,
        linkResolver,
        fallback
    ]);
}
;
 //# sourceMappingURL=PrismicRichText.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/PrismicRichText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicRichText": (()=>PrismicRichText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$usePrismicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/usePrismicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicRichText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/react-server/PrismicRichText.js [app-client] (ecmascript)");
;
;
;
;
const PrismicRichText = function PrismicRichText2({ components, ...restProps }) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$usePrismicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrismicContext"])();
    const serializer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.composeSerializers(typeof components === "object" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.wrapMapSerializer(components) : components, typeof context.richTextComponents === "object" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.wrapMapSerializer(context.richTextComponents) : context.richTextComponents);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicRichText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicRichText"], {
        components: serializer,
        internalLinkComponent: context.internalLinkComponent,
        externalLinkComponent: context.externalLinkComponent,
        ...restProps
    });
};
;
 //# sourceMappingURL=PrismicRichText.js.map
}}),
}]);

//# sourceMappingURL=_0b5df3._.js.map