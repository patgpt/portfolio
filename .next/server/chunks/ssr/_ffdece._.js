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
"[project]/src/slices/AboutMeSlice/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BentoBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/BentoBox.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bounded$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Bounded.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/react-server/PrismicRichText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/next/dist/PrismicNextLink.js [app-rsc] (ecmascript)");
;
;
;
;
;
/**
 * Component for "AboutMeSlice" Slices.
 */ const AboutMeSlice = ({ slice })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slice-type": slice.slice_type,
        "data-slice-variation": slice.variation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bounded$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BentoBox$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BentoBox"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                        field: slice.primary.about_me_text
                    }, void 0, false, {
                        fileName: "[project]/src/slices/AboutMeSlice/index.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$PrismicNextLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicNextLink"], {
                        field: slice.primary.get_in_touch_cta,
                        children: slice.primary.get_in_touch_cta.text
                    }, void 0, false, {
                        fileName: "[project]/src/slices/AboutMeSlice/index.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/slices/AboutMeSlice/index.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/slices/AboutMeSlice/index.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/slices/AboutMeSlice/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AboutMeSlice;
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@prismicio/types/dist/value/richText.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/richtext/dist/asText.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asTree": (()=>asTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-rsc] (ecmascript)");
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
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].span,
        text,
        spans: []
    });
};
const prepareNodes = (nodes)=>{
    const mutNodes = nodes.slice(0);
    for(let i = 0; i < mutNodes.length; i++){
        const node = mutNodes[i];
        if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem || node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem) {
            const items = [
                node
            ];
            while(mutNodes[i + 1] && mutNodes[i + 1].type === node.type){
                items.push(mutNodes[i + 1]);
                mutNodes.splice(i, 1);
            }
            if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem) {
                mutNodes[i] = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].list,
                    items
                };
            } else {
                mutNodes[i] = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList,
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
"[project]/node_modules/@prismicio/richtext/dist/composeSerializers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/richtext/dist/serialize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serialize": (()=>serialize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-rsc] (ecmascript)");
;
const serialize = (richTextField, serializer)=>{
    return serializeTreeNodes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asTree"])(richTextField).children, serializer);
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
"[project]/node_modules/@prismicio/richtext/dist/types.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RichTextReversedNodeType": (()=>RichTextReversedNodeType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-rsc] (ecmascript)");
;
const RichTextReversedNodeType = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem]: "listItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem]: "oListItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].list]: "list",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList]: "oList"
};
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@prismicio/richtext/dist/wrapMapSerializer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wrapMapSerializer": (()=>wrapMapSerializer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/types.js [app-rsc] (ecmascript)");
;
const wrapMapSerializer = (mapSerializer)=>{
    return (type, node, text, children, key)=>{
        const tagSerializer = mapSerializer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextReversedNodeType"][type] || type];
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
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Element": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"]),
    "asText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asText"]),
    "asTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asTree"]),
    "composeSerializers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$composeSerializers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["composeSerializers"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"]),
    "wrapMapSerializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$wrapMapSerializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapMapSerializer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$types$2f$dist$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/types/dist/value/richText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/asTree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$composeSerializers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/composeSerializers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/serialize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$wrapMapSerializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/wrapMapSerializer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Element": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Element"]),
    "asText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["asText"]),
    "asTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["asTree"]),
    "composeSerializers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["composeSerializers"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serialize"]),
    "wrapMapSerializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["wrapMapSerializer"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript) <exports>");
}}),
"[project]/node_modules/@prismicio/react/dist/package.json.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = "2.9.1";
;
 //# sourceMappingURL=package.json.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "devMsg": (()=>devMsg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/package.json.js [app-rsc] (ecmascript)");
;
const devMsg = (slug)=>{
    return `https://prismic.dev/msg/react/v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}/${slug}`;
};
;
 //# sourceMappingURL=devMsg.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/documentToLinkField.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "documentToLinkField": (()=>documentToLinkField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-rsc] (ecmascript)");
;
const documentToLinkField = (prismicDocument)=>{
    var _a;
    return {
        link_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkType"].Document,
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
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLink.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asLink": (()=>asLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$documentToLinkField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/documentToLinkField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/types/value/link.js [app-rsc] (ecmascript)");
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
    "link_type" in linkFieldOrDocument ? linkFieldOrDocument : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$documentToLinkField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentToLinkField"])(linkFieldOrDocument);
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkType"].Media:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkType"].Web:
            return "url" in linkField ? linkField.url : null;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkType"].Document:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkType"].Any:
        default:
            return null;
    }
};
;
 //# sourceMappingURL=asLink.js.map
}}),
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "asLinkAttrs": (()=>asLinkAttrs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLink.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-rsc] (ecmascript)");
;
;
;
const asLinkAttrs = (linkFieldOrDocument, config = {})=>{
    if (linkFieldOrDocument && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
    ("link_type" in linkFieldOrDocument ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["link"])(linkFieldOrDocument) : linkFieldOrDocument)) {
        const target = // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
        "target" in linkFieldOrDocument ? linkFieldOrDocument.target : void 0;
        const rawHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asLink"])(linkFieldOrDocument, config.linkResolver);
        const href = rawHref == null ? void 0 : rawHref;
        const isExternal = typeof href === "string" ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInternalURL"])(href) : false;
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
"[project]/node_modules/@prismicio/react/dist/lib/isInternalURL.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
"[project]/node_modules/@prismicio/react/dist/react-server/PrismicLink.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicLink": (()=>PrismicLink),
    "defaultComponent": (()=>defaultComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/isInternalURL.js [app-rsc] (ecmascript)");
;
;
;
;
;
const defaultComponent = "a";
const PrismicLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.forwardRef(function PrismicLink2(props, ref) {
    const { field, document: doc, linkResolver, internalComponent, externalComponent, children, ...restProps } = props;
    if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
        if (field) {
            if (!field.link_type) {
                console.error(`[PrismicLink] This "field" prop value caused an error to be thrown.
`, field);
                throw new Error(`[PrismicLink] The provided field is missing required properties to properly render a link. The link will not render. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`);
            } else if (("text" in field ? Object.keys(field).length > 2 : Object.keys(field).length > 1) && !("url" in field || "uid" in field || "id" in field)) {
                console.warn(`[PrismicLink] The provided field is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, field);
            }
        } else if (doc) {
            if (!("url" in doc || "id" in doc)) {
                console.warn(`[PrismicLink] The provided document is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, doc);
            }
        }
    }
    const { href: computedHref, rel: computedRel, ...attrs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asLinkAttrs"])(field ?? doc, {
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
    const Component = href && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInternalURL"])(href) ? InternalComponent : ExternalComponent;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Component, {
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
"[project]/node_modules/@prismicio/react/dist/react-server/PrismicRichText.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismicRichText": (()=>PrismicRichText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/richtext/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/react-server/PrismicLink.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prismicio/react/dist/_node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)");
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
const createDefaultSerializer = (args)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.wrapMapSerializer({
        heading1: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                dir: getDir(node),
                children
            }, key),
        heading2: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                dir: getDir(node),
                children
            }, key),
        heading3: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                dir: getDir(node),
                children
            }, key),
        heading4: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                dir: getDir(node),
                children
            }, key),
        heading5: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                dir: getDir(node),
                children
            }, key),
        heading6: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h6", {
                dir: getDir(node),
                children
            }, key),
        paragraph: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                dir: getDir(node),
                children
            }, key),
        preformatted: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                children: node.text
            }, key),
        strong: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                children
            }, key),
        em: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("em", {
                children
            }, key),
        listItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        oListItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        list: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                children
            }, key),
        oList: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ol", {
                children
            }, key),
        image: ({ node, key })=>{
            const img = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("img", {
                src: node.url,
                alt: node.alt ?? void 0,
                "data-copyright": node.copyright ? node.copyright : void 0
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "block-img",
                children: node.linkTo ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicLink"], {
                    linkResolver: args.linkResolver,
                    internalComponent: args.internalLinkComponent,
                    externalComponent: args.externalLinkComponent,
                    field: node.linkTo,
                    children: img
                }) : img
            }, key);
        },
        embed: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "data-oembed": node.oembed.embed_url,
                "data-oembed-type": node.oembed.type,
                "data-oembed-provider": node.oembed.provider_name,
                dangerouslySetInnerHTML: {
                    __html: node.oembed.html ?? ""
                }
            }, key),
        hyperlink: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$react$2d$server$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicLink"], {
                field: node.data,
                linkResolver: args.linkResolver,
                internalComponent: args.internalLinkComponent,
                externalComponent: args.externalLinkComponent,
                children
            }, key),
        label: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: node.data.label,
                children
            }, key),
        span: ({ text, key })=>{
            const result = [];
            let i = 0;
            for (const line of text.split("\n")){
                if (i > 0) {
                    result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("br", {}, `${i}__break`));
                }
                result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Fragment, {
                    children: line
                }, `${i}__line`));
                i++;
            }
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Fragment, {
                children: result
            }, key);
        }
    });
function PrismicRichText({ linkResolver, field, fallback, components, externalLinkComponent, internalLinkComponent, ...restProps }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if ("className" in restProps) {
                console.warn(`[PrismicRichText] className cannot be passed to <PrismicRichText> since it renders an array without a wrapping component. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("classname-is-not-a-valid-prop")}.`, field);
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$_node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["richText"])(field)) {
            const serializer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.composeSerializers(typeof components === "object" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.wrapMapSerializer(components) : components, createDefaultSerializer({
                linkResolver,
                internalLinkComponent,
                externalLinkComponent
            }));
            const serialized = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$richtext$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.serialize(field, (type, node, text, children, key)=>{
                const result = serializer(type, node, text, children, key);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(result) && result.key == null) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.cloneElement(result, {
                        key
                    });
                } else {
                    return result;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: serialized
            });
        } else {
            return fallback != null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: fallback
            }) : null;
        }
    }, [
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

};

//# sourceMappingURL=_ffdece._.js.map