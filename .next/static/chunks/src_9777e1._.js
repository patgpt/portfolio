(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_9777e1._.js", {

"[project]/src/components/Bounded.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)"); // Utility for conditional className merging. Preferred over string concatenation for cleaner, more maintainable code and handling conditional class logic effectively.
;
;
/**
 * Bounded is a layout component that provides consistent padding,
 * maximum width, and centering for its children.
 *
 * Example usage:
 * ```jsx
 * <Bounded as="section" size="wide" className="bg-gray-100" paddingXClass="px-6" paddingYClass="py-4">
 *   <h1 className="text-2xl font-bold">Welcome</h1>
 *   <p>This is a flexible and reusable layout component.</p>
 * </Bounded>
 * ```
 *
 * @component
 * @param {BoundedProps} props - The properties for the component.
 * @returns {JSX.Element} A React component with specified padding and layout styles.
 */ const Bounded = ({ as: Component = "div", children, className = "", size = "base", paddingXClass = "px-4 sm:px-8 md:px-12 lg:px-16", paddingYClass = "" })=>{
    const sizeClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size === "small" && "max-w-xl", size === "base" && "max-w-3xl", size === "wide" && "max-w-4xl", size === "widest" && "max-w-6xl");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        /**
       * Combines the base padding, width, and centering classes
       * with any additional classes provided through className.
       * The padding classes ensure flexible spacing, while width classes control content width for readability and alignment.
       */ className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paddingXClass, paddingYClass, sizeClass, "mx-auto", className),
        children: [
            children,
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Bounded.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_c = Bounded;
const __TURBOPACK__default__export__ = Bounded;
var _c;
__turbopack_refresh__.register(_c, "Bounded");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/slices/PfpSlice/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bounded$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Bounded.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/next/dist/PrismicNextImage.js [app-client] (ecmascript)");
;
;
;
/**
 * Component for "PfpSlice" Slices.
 */ const PfpSlice = ({ slice })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slice-type": slice.slice_type,
        "data-slice-variation": slice.variation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bounded$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoBox, {
                variant: "regular",
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismicNextImage"], {
                    field: slice.primary.profile_image,
                    className: "rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/slices/PfpSlice/index.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/slices/PfpSlice/index.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/slices/PfpSlice/index.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/slices/PfpSlice/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = PfpSlice;
const __TURBOPACK__default__export__ = PfpSlice;
var _c;
__turbopack_refresh__.register(_c, "PfpSlice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9777e1._.js.map