module.exports = {

"[project]/src/components/Bounded.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)"); // Utility for conditional className merging. Preferred over string concatenation for cleaner, more maintainable code and handling conditional class logic effectively.
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
    const sizeClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(size === "small" && "max-w-xl", size === "base" && "max-w-3xl", size === "wide" && "max-w-4xl", size === "widest" && "max-w-6xl");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        /**
       * Combines the base padding, width, and centering classes
       * with any additional classes provided through className.
       * The padding classes ensure flexible spacing, while width classes control content width for readability and alignment.
       */ className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(paddingXClass, paddingYClass, sizeClass, "mx-auto", className),
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
const __TURBOPACK__default__export__ = Bounded;
}}),
"[project]/src/slices/SocialSlice/index.tsx [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/slices/SocialSlice/index.tsx'

Unexpected token `section`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=src_48f908._.js.map