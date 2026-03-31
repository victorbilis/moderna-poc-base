import * as e from "react";
import { CssBaseline as t, ThemeProvider as n } from "@mui/material";
import r from "@mui/material/GlobalStyles";
import { StyledEngineProvider as i, createTheme as a } from "@mui/material/styles";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import c from "@mui/material/Button";
import l from "@mui/material/AppBar";
import u from "@mui/material/Box";
import ee from "@mui/material/Toolbar";
import d from "@mui/material/Typography";
import f from "@mui/material/List";
import p from "@mui/material/ListItem";
import m from "@mui/material/ListItemButton";
import h from "@mui/material/ListItemIcon";
import te from "@mui/material/ListItemText";
//#region src/theme/createBaseTheme.ts
function g() {
	return a({
		cssVariables: { disableCssColorScheme: !0 },
		palette: {
			mode: "light",
			primary: { main: "#3D637D" },
			secondary: { main: "#1d4ed8" },
			background: {
				default: "#f8fafc",
				paper: "#ffffff"
			},
			error: { main: "#dc2626" }
		},
		typography: { fontFamily: [
			"\"Nunito Variable\"",
			"\"Nunito\"",
			"system-ui",
			"Segoe UI",
			"sans-serif"
		].join(",") },
		shape: { borderRadius: 8 }
	});
}
//#endregion
//#region src/theme/BaseThemeProvider.tsx
var _ = "@layer theme, base, mui, components, utilities;";
function ne({ children: a, theme: c }) {
	let l = e.useMemo(() => g(), []);
	return /* @__PURE__ */ s(i, {
		enableCssLayer: !0,
		children: [/* @__PURE__ */ o(r, { styles: _ }), /* @__PURE__ */ s(n, {
			theme: c ?? l,
			children: [/* @__PURE__ */ o(t, {}), a]
		})]
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function v(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = v(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function re() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = v(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var ie = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, y = (e, t) => ({
	classGroupId: e,
	validator: t
}), b = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), x = "-", S = [], C = "arbitrary..", ae = (e) => {
	let t = E(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return T(e);
			let n = e.split(x);
			return w(n, n[0] === "" && n.length > 1 ? 1 : 0, t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? ie(i, t) : t : i || S;
			}
			return n[e] || S;
		}
	};
}, w = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = w(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(x) : e.slice(t).join(x), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, T = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? C + r : void 0;
})(), E = (e) => {
	let { theme: t, classGroups: n } = e;
	return D(n, t);
}, D = (e, t) => {
	let n = b();
	for (let r in e) {
		let i = e[r];
		O(i, n, r, t);
	}
	return n;
}, O = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		k(i, t, n, r);
	}
}, k = (e, t, n, r) => {
	if (typeof e == "string") {
		A(e, t, n);
		return;
	}
	if (typeof e == "function") {
		oe(e, t, n, r);
		return;
	}
	se(e, t, n, r);
}, A = (e, t, n) => {
	let r = e === "" ? t : j(t, e);
	r.classGroupId = n;
}, oe = (e, t, n, r) => {
	if (M(e)) {
		O(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(y(n, e));
}, se = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		O(o, j(t, a), n, r);
	}
}, j = (e, t) => {
	let n = e, r = t.split(x), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = b(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, M = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, N = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, P = "!", F = ":", ce = [], I = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), le = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === F) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(P) ? (c = s.slice(0, -1), l = !0) : s.startsWith(P) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return I(t, l, c, u);
	};
	if (t) {
		let e = t + F, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : I(ce, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, L = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, R = (e) => ({
	cache: N(e.cacheSize),
	parseClassName: le(e),
	sortModifiers: L(e),
	...ae(e)
}), z = /\s+/, B = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(z), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: ee, baseClassName: d, maybePostfixModifierPosition: f } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let p = !!f, m = r(p ? d.substring(0, f) : d);
		if (!m) {
			if (!p) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (m = r(d), !m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			p = !1;
		}
		let h = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), te = ee ? h + P : h, g = te + m;
		if (o.indexOf(g) > -1) continue;
		o.push(g);
		let _ = i(m, p);
		for (let e = 0; e < _.length; ++e) {
			let t = _[e];
			o.push(te + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, ue = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = de(n)) && (i && (i += " "), i += r);
	return i;
}, de = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = de(e[r])) && (n && (n += " "), n += t);
	return n;
}, fe = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = R(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = B(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ue(...e));
}, pe = [], V = (e) => {
	let t = (t) => t[e] || pe;
	return t.isThemeGetter = !0, t;
}, me = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, he = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ge = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, _e = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ve = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ye = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, be = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xe = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, H = (e) => ge.test(e), U = (e) => !!e && !Number.isNaN(Number(e)), W = (e) => !!e && Number.isInteger(Number(e)), Se = (e) => e.endsWith("%") && U(e.slice(0, -1)), G = (e) => _e.test(e), Ce = () => !0, we = (e) => ve.test(e) && !ye.test(e), Te = () => !1, Ee = (e) => be.test(e), De = (e) => xe.test(e), Oe = (e) => !K(e) && !Y(e), ke = (e) => Z(e, Ue, Te), K = (e) => me.test(e), q = (e) => Z(e, We, we), Ae = (e) => Z(e, Ge, U), je = (e) => Z(e, qe, Ce), Me = (e) => Z(e, Ke, Te), Ne = (e) => Z(e, Ve, Te), Pe = (e) => Z(e, He, De), J = (e) => Z(e, Je, Ee), Y = (e) => he.test(e), X = (e) => Q(e, We), Fe = (e) => Q(e, Ke), Ie = (e) => Q(e, Ve), Le = (e) => Q(e, Ue), Re = (e) => Q(e, He), ze = (e) => Q(e, Je, !0), Be = (e) => Q(e, qe, !0), Z = (e, t, n) => {
	let r = me.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Q = (e, t, n = !1) => {
	let r = he.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ve = (e) => e === "position" || e === "percentage", He = (e) => e === "image" || e === "url", Ue = (e) => e === "length" || e === "size" || e === "bg-size", We = (e) => e === "length", Ge = (e) => e === "number", Ke = (e) => e === "family-name", qe = (e) => e === "number" || e === "weight", Je = (e) => e === "shadow", Ye = /* @__PURE__ */ fe(() => {
	let e = V("color"), t = V("font"), n = V("text"), r = V("font-weight"), i = V("tracking"), a = V("leading"), o = V("breakpoint"), s = V("container"), c = V("spacing"), l = V("radius"), u = V("shadow"), ee = V("inset-shadow"), d = V("text-shadow"), f = V("drop-shadow"), p = V("blur"), m = V("perspective"), h = V("aspect"), te = V("ease"), g = V("animate"), _ = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], ne = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], v = () => [
		...ne(),
		Y,
		K
	], re = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ie = () => [
		"auto",
		"contain",
		"none"
	], y = () => [
		Y,
		K,
		c
	], b = () => [
		H,
		"full",
		"auto",
		...y()
	], x = () => [
		W,
		"none",
		"subgrid",
		Y,
		K
	], S = () => [
		"auto",
		{ span: [
			"full",
			W,
			Y,
			K
		] },
		W,
		Y,
		K
	], C = () => [
		W,
		"auto",
		Y,
		K
	], ae = () => [
		"auto",
		"min",
		"max",
		"fr",
		Y,
		K
	], w = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], T = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], E = () => ["auto", ...y()], D = () => [
		H,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...y()
	], O = () => [
		H,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...y()
	], k = () => [
		H,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...y()
	], A = () => [
		e,
		Y,
		K
	], oe = () => [
		...ne(),
		Ie,
		Ne,
		{ position: [Y, K] }
	], se = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], j = () => [
		"auto",
		"cover",
		"contain",
		Le,
		ke,
		{ size: [Y, K] }
	], M = () => [
		Se,
		X,
		q
	], N = () => [
		"",
		"none",
		"full",
		l,
		Y,
		K
	], P = () => [
		"",
		U,
		X,
		q
	], F = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ce = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], I = () => [
		U,
		Se,
		Ie,
		Ne
	], le = () => [
		"",
		"none",
		p,
		Y,
		K
	], L = () => [
		"none",
		U,
		Y,
		K
	], R = () => [
		"none",
		U,
		Y,
		K
	], z = () => [
		U,
		Y,
		K
	], B = () => [
		H,
		"full",
		...y()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [G],
			breakpoint: [G],
			color: [Ce],
			container: [G],
			"drop-shadow": [G],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Oe],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [G],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [G],
			shadow: [G],
			spacing: ["px", U],
			text: [G],
			"text-shadow": [G],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				H,
				K,
				Y,
				h
			] }],
			container: ["container"],
			columns: [{ columns: [
				U,
				K,
				Y,
				s
			] }],
			"break-after": [{ "break-after": _() }],
			"break-before": [{ "break-before": _() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: v() }],
			overflow: [{ overflow: re() }],
			"overflow-x": [{ "overflow-x": re() }],
			"overflow-y": [{ "overflow-y": re() }],
			overscroll: [{ overscroll: ie() }],
			"overscroll-x": [{ "overscroll-x": ie() }],
			"overscroll-y": [{ "overscroll-y": ie() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: b() }],
			"inset-x": [{ "inset-x": b() }],
			"inset-y": [{ "inset-y": b() }],
			start: [{
				"inset-s": b(),
				start: b()
			}],
			end: [{
				"inset-e": b(),
				end: b()
			}],
			"inset-bs": [{ "inset-bs": b() }],
			"inset-be": [{ "inset-be": b() }],
			top: [{ top: b() }],
			right: [{ right: b() }],
			bottom: [{ bottom: b() }],
			left: [{ left: b() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				W,
				"auto",
				Y,
				K
			] }],
			basis: [{ basis: [
				H,
				"full",
				"auto",
				s,
				...y()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				U,
				H,
				"auto",
				"initial",
				"none",
				K
			] }],
			grow: [{ grow: [
				"",
				U,
				Y,
				K
			] }],
			shrink: [{ shrink: [
				"",
				U,
				Y,
				K
			] }],
			order: [{ order: [
				W,
				"first",
				"last",
				"none",
				Y,
				K
			] }],
			"grid-cols": [{ "grid-cols": x() }],
			"col-start-end": [{ col: S() }],
			"col-start": [{ "col-start": C() }],
			"col-end": [{ "col-end": C() }],
			"grid-rows": [{ "grid-rows": x() }],
			"row-start-end": [{ row: S() }],
			"row-start": [{ "row-start": C() }],
			"row-end": [{ "row-end": C() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ae() }],
			"auto-rows": [{ "auto-rows": ae() }],
			gap: [{ gap: y() }],
			"gap-x": [{ "gap-x": y() }],
			"gap-y": [{ "gap-y": y() }],
			"justify-content": [{ justify: [...w(), "normal"] }],
			"justify-items": [{ "justify-items": [...T(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...T()] }],
			"align-content": [{ content: ["normal", ...w()] }],
			"align-items": [{ items: [...T(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...T(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": w() }],
			"place-items": [{ "place-items": [...T(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...T()] }],
			p: [{ p: y() }],
			px: [{ px: y() }],
			py: [{ py: y() }],
			ps: [{ ps: y() }],
			pe: [{ pe: y() }],
			pbs: [{ pbs: y() }],
			pbe: [{ pbe: y() }],
			pt: [{ pt: y() }],
			pr: [{ pr: y() }],
			pb: [{ pb: y() }],
			pl: [{ pl: y() }],
			m: [{ m: E() }],
			mx: [{ mx: E() }],
			my: [{ my: E() }],
			ms: [{ ms: E() }],
			me: [{ me: E() }],
			mbs: [{ mbs: E() }],
			mbe: [{ mbe: E() }],
			mt: [{ mt: E() }],
			mr: [{ mr: E() }],
			mb: [{ mb: E() }],
			ml: [{ ml: E() }],
			"space-x": [{ "space-x": y() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": y() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: D() }],
			"inline-size": [{ inline: ["auto", ...O()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...O()] }],
			"max-inline-size": [{ "max-inline": ["none", ...O()] }],
			"block-size": [{ block: ["auto", ...k()] }],
			"min-block-size": [{ "min-block": ["auto", ...k()] }],
			"max-block-size": [{ "max-block": ["none", ...k()] }],
			w: [{ w: [
				s,
				"screen",
				...D()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...D()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...D()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...D()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...D()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...D()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				X,
				q
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Be,
				je
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Se,
				K
			] }],
			"font-family": [{ font: [
				Fe,
				Me,
				t
			] }],
			"font-features": [{ "font-features": [K] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Y,
				K
			] }],
			"line-clamp": [{ "line-clamp": [
				U,
				"none",
				Y,
				Ae
			] }],
			leading: [{ leading: [a, ...y()] }],
			"list-image": [{ "list-image": [
				"none",
				Y,
				K
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Y,
				K
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: A() }],
			"text-color": [{ text: A() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...F(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				U,
				"from-font",
				"auto",
				Y,
				q
			] }],
			"text-decoration-color": [{ decoration: A() }],
			"underline-offset": [{ "underline-offset": [
				U,
				"auto",
				Y,
				K
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: y() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Y,
				K
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Y,
				K
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: oe() }],
			"bg-repeat": [{ bg: se() }],
			"bg-size": [{ bg: j() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						W,
						Y,
						K
					],
					radial: [
						"",
						Y,
						K
					],
					conic: [
						W,
						Y,
						K
					]
				},
				Re,
				Pe
			] }],
			"bg-color": [{ bg: A() }],
			"gradient-from-pos": [{ from: M() }],
			"gradient-via-pos": [{ via: M() }],
			"gradient-to-pos": [{ to: M() }],
			"gradient-from": [{ from: A() }],
			"gradient-via": [{ via: A() }],
			"gradient-to": [{ to: A() }],
			rounded: [{ rounded: N() }],
			"rounded-s": [{ "rounded-s": N() }],
			"rounded-e": [{ "rounded-e": N() }],
			"rounded-t": [{ "rounded-t": N() }],
			"rounded-r": [{ "rounded-r": N() }],
			"rounded-b": [{ "rounded-b": N() }],
			"rounded-l": [{ "rounded-l": N() }],
			"rounded-ss": [{ "rounded-ss": N() }],
			"rounded-se": [{ "rounded-se": N() }],
			"rounded-ee": [{ "rounded-ee": N() }],
			"rounded-es": [{ "rounded-es": N() }],
			"rounded-tl": [{ "rounded-tl": N() }],
			"rounded-tr": [{ "rounded-tr": N() }],
			"rounded-br": [{ "rounded-br": N() }],
			"rounded-bl": [{ "rounded-bl": N() }],
			"border-w": [{ border: P() }],
			"border-w-x": [{ "border-x": P() }],
			"border-w-y": [{ "border-y": P() }],
			"border-w-s": [{ "border-s": P() }],
			"border-w-e": [{ "border-e": P() }],
			"border-w-bs": [{ "border-bs": P() }],
			"border-w-be": [{ "border-be": P() }],
			"border-w-t": [{ "border-t": P() }],
			"border-w-r": [{ "border-r": P() }],
			"border-w-b": [{ "border-b": P() }],
			"border-w-l": [{ "border-l": P() }],
			"divide-x": [{ "divide-x": P() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": P() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...F(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...F(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: A() }],
			"border-color-x": [{ "border-x": A() }],
			"border-color-y": [{ "border-y": A() }],
			"border-color-s": [{ "border-s": A() }],
			"border-color-e": [{ "border-e": A() }],
			"border-color-bs": [{ "border-bs": A() }],
			"border-color-be": [{ "border-be": A() }],
			"border-color-t": [{ "border-t": A() }],
			"border-color-r": [{ "border-r": A() }],
			"border-color-b": [{ "border-b": A() }],
			"border-color-l": [{ "border-l": A() }],
			"divide-color": [{ divide: A() }],
			"outline-style": [{ outline: [
				...F(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				U,
				Y,
				K
			] }],
			"outline-w": [{ outline: [
				"",
				U,
				X,
				q
			] }],
			"outline-color": [{ outline: A() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ze,
				J
			] }],
			"shadow-color": [{ shadow: A() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				ee,
				ze,
				J
			] }],
			"inset-shadow-color": [{ "inset-shadow": A() }],
			"ring-w": [{ ring: P() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: A() }],
			"ring-offset-w": [{ "ring-offset": [U, q] }],
			"ring-offset-color": [{ "ring-offset": A() }],
			"inset-ring-w": [{ "inset-ring": P() }],
			"inset-ring-color": [{ "inset-ring": A() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				d,
				ze,
				J
			] }],
			"text-shadow-color": [{ "text-shadow": A() }],
			opacity: [{ opacity: [
				U,
				Y,
				K
			] }],
			"mix-blend": [{ "mix-blend": [
				...ce(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ce() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [U] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": I() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": A() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": A() }],
			"mask-image-t-from-pos": [{ "mask-t-from": I() }],
			"mask-image-t-to-pos": [{ "mask-t-to": I() }],
			"mask-image-t-from-color": [{ "mask-t-from": A() }],
			"mask-image-t-to-color": [{ "mask-t-to": A() }],
			"mask-image-r-from-pos": [{ "mask-r-from": I() }],
			"mask-image-r-to-pos": [{ "mask-r-to": I() }],
			"mask-image-r-from-color": [{ "mask-r-from": A() }],
			"mask-image-r-to-color": [{ "mask-r-to": A() }],
			"mask-image-b-from-pos": [{ "mask-b-from": I() }],
			"mask-image-b-to-pos": [{ "mask-b-to": I() }],
			"mask-image-b-from-color": [{ "mask-b-from": A() }],
			"mask-image-b-to-color": [{ "mask-b-to": A() }],
			"mask-image-l-from-pos": [{ "mask-l-from": I() }],
			"mask-image-l-to-pos": [{ "mask-l-to": I() }],
			"mask-image-l-from-color": [{ "mask-l-from": A() }],
			"mask-image-l-to-color": [{ "mask-l-to": A() }],
			"mask-image-x-from-pos": [{ "mask-x-from": I() }],
			"mask-image-x-to-pos": [{ "mask-x-to": I() }],
			"mask-image-x-from-color": [{ "mask-x-from": A() }],
			"mask-image-x-to-color": [{ "mask-x-to": A() }],
			"mask-image-y-from-pos": [{ "mask-y-from": I() }],
			"mask-image-y-to-pos": [{ "mask-y-to": I() }],
			"mask-image-y-from-color": [{ "mask-y-from": A() }],
			"mask-image-y-to-color": [{ "mask-y-to": A() }],
			"mask-image-radial": [{ "mask-radial": [Y, K] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": I() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": A() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": A() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": ne() }],
			"mask-image-conic-pos": [{ "mask-conic": [U] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": I() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": A() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": A() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: oe() }],
			"mask-repeat": [{ mask: se() }],
			"mask-size": [{ mask: j() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Y,
				K
			] }],
			filter: [{ filter: [
				"",
				"none",
				Y,
				K
			] }],
			blur: [{ blur: le() }],
			brightness: [{ brightness: [
				U,
				Y,
				K
			] }],
			contrast: [{ contrast: [
				U,
				Y,
				K
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				f,
				ze,
				J
			] }],
			"drop-shadow-color": [{ "drop-shadow": A() }],
			grayscale: [{ grayscale: [
				"",
				U,
				Y,
				K
			] }],
			"hue-rotate": [{ "hue-rotate": [
				U,
				Y,
				K
			] }],
			invert: [{ invert: [
				"",
				U,
				Y,
				K
			] }],
			saturate: [{ saturate: [
				U,
				Y,
				K
			] }],
			sepia: [{ sepia: [
				"",
				U,
				Y,
				K
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Y,
				K
			] }],
			"backdrop-blur": [{ "backdrop-blur": le() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				U,
				Y,
				K
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				U,
				Y,
				K
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				U,
				Y,
				K
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				U,
				Y,
				K
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				U,
				Y,
				K
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				U,
				Y,
				K
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				U,
				Y,
				K
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				U,
				Y,
				K
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": y() }],
			"border-spacing-x": [{ "border-spacing-x": y() }],
			"border-spacing-y": [{ "border-spacing-y": y() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Y,
				K
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				U,
				"initial",
				Y,
				K
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				te,
				Y,
				K
			] }],
			delay: [{ delay: [
				U,
				Y,
				K
			] }],
			animate: [{ animate: [
				"none",
				g,
				Y,
				K
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				m,
				Y,
				K
			] }],
			"perspective-origin": [{ "perspective-origin": v() }],
			rotate: [{ rotate: L() }],
			"rotate-x": [{ "rotate-x": L() }],
			"rotate-y": [{ "rotate-y": L() }],
			"rotate-z": [{ "rotate-z": L() }],
			scale: [{ scale: R() }],
			"scale-x": [{ "scale-x": R() }],
			"scale-y": [{ "scale-y": R() }],
			"scale-z": [{ "scale-z": R() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: z() }],
			"skew-x": [{ "skew-x": z() }],
			"skew-y": [{ "skew-y": z() }],
			transform: [{ transform: [
				Y,
				K,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: v() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: B() }],
			"translate-x": [{ "translate-x": B() }],
			"translate-y": [{ "translate-y": B() }],
			"translate-z": [{ "translate-z": B() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: A() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: A() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Y,
				K
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": y() }],
			"scroll-mx": [{ "scroll-mx": y() }],
			"scroll-my": [{ "scroll-my": y() }],
			"scroll-ms": [{ "scroll-ms": y() }],
			"scroll-me": [{ "scroll-me": y() }],
			"scroll-mbs": [{ "scroll-mbs": y() }],
			"scroll-mbe": [{ "scroll-mbe": y() }],
			"scroll-mt": [{ "scroll-mt": y() }],
			"scroll-mr": [{ "scroll-mr": y() }],
			"scroll-mb": [{ "scroll-mb": y() }],
			"scroll-ml": [{ "scroll-ml": y() }],
			"scroll-p": [{ "scroll-p": y() }],
			"scroll-px": [{ "scroll-px": y() }],
			"scroll-py": [{ "scroll-py": y() }],
			"scroll-ps": [{ "scroll-ps": y() }],
			"scroll-pe": [{ "scroll-pe": y() }],
			"scroll-pbs": [{ "scroll-pbs": y() }],
			"scroll-pbe": [{ "scroll-pbe": y() }],
			"scroll-pt": [{ "scroll-pt": y() }],
			"scroll-pr": [{ "scroll-pr": y() }],
			"scroll-pb": [{ "scroll-pb": y() }],
			"scroll-pl": [{ "scroll-pl": y() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Y,
				K
			] }],
			fill: [{ fill: ["none", ...A()] }],
			"stroke-w": [{ stroke: [
				U,
				X,
				q,
				Ae
			] }],
			stroke: [{ stroke: ["none", ...A()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/cn.ts
function $(...e) {
	return Ye(re(e));
}
//#endregion
//#region src/components/button/Button.tsx
function Xe(e) {
	switch (e) {
		case "default":
		case "primary": return {
			variant: "contained",
			color: "primary"
		};
		case "outline": return {
			variant: "outlined",
			color: "primary"
		};
		case "secondary": return {
			variant: "contained",
			color: "secondary"
		};
		case "ghost": return {
			variant: "text",
			color: "primary"
		};
		case "destructive": return {
			variant: "text",
			color: "error"
		};
		case "link": return {
			variant: "text",
			color: "primary"
		};
		default: return {
			variant: "contained",
			color: "primary"
		};
	}
}
function Ze(e) {
	switch (e) {
		case "xs":
		case "sm":
		case "icon-xs":
		case "icon-sm": return "small";
		case "lg":
		case "icon-lg": return "large";
		case "icon": return "medium";
		default: return "medium";
	}
}
function Qe(e) {
	switch (e) {
		case "destructive": return "bg-red-500/10 text-red-700 hover:bg-red-500/20 dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25";
		case "link": return "underline underline-offset-4";
		default: return "";
	}
}
function $e(e) {
	switch (e) {
		case "xs": return "min-h-6 px-2 py-0.5 text-xs";
		case "icon": return "min-h-10 min-w-10 p-2";
		case "icon-xs": return "min-h-6 min-w-6 p-0.5 [&_svg]:size-3";
		case "icon-sm": return "min-h-7 min-w-7 p-[0.35rem]";
		case "icon-lg": return "min-h-9 min-w-9 p-2";
		default: return "";
	}
}
function et({ variant: e = "default", size: t = "default", className: n, ...r }) {
	let { variant: i, color: a } = Xe(e);
	return /* @__PURE__ */ o(c, {
		variant: i,
		color: a,
		size: Ze(t),
		disableElevation: !0,
		className: $("font-medium normal-case", Qe(e), $e(t), n),
		...r
	});
}
//#endregion
//#region src/components/layout/navbar/Navbar.tsx
function tt({ brand: e = "Base UI", logo: t, logoSrc: n, logoAlt: r = "", toolbarCenter: i, actions: a, className: c, ...f }) {
	let p = t ?? (n ? /* @__PURE__ */ o(u, {
		component: "img",
		src: n,
		alt: r,
		className: "h-9 max-h-10 w-auto max-w-[180px] object-contain object-left"
	}) : null);
	return /* @__PURE__ */ o(l, {
		position: "static",
		color: "inherit",
		elevation: 0,
		className: $("border-b border-slate-200 bg-white text-slate-900 shadow-[0_1px_0_0_rgba(15,23,42,0.06)]", c),
		...f,
		children: /* @__PURE__ */ s(ee, {
			variant: "dense",
			className: "min-h-14 gap-4 px-4 text-slate-900 sm:px-6",
			children: [
				/* @__PURE__ */ s(u, {
					className: "flex min-w-0 shrink-0 items-center gap-3",
					children: [p, e != null && e !== !1 && /* @__PURE__ */ o(d, {
						variant: "h6",
						component: "div",
						className: $("truncate font-semibold tracking-tight text-slate-900", p && "hidden sm:block"),
						children: e
					})]
				}),
				i == null ? /* @__PURE__ */ o(u, {
					className: "min-w-0 flex-1",
					"aria-hidden": !0
				}) : /* @__PURE__ */ o(u, {
					className: "mx-auto flex min-w-0 max-w-xl flex-1 justify-center px-2",
					children: i
				}),
				/* @__PURE__ */ o(u, {
					className: "flex shrink-0 items-center gap-2 text-slate-700 [&_button]:border-slate-300 [&_button]:text-slate-800 [&_button:hover]:bg-slate-100",
					children: a ?? /* @__PURE__ */ o(et, {
						variant: "outline",
						children: "Login"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/layout/sidebar/Sidebar.tsx
function nt() {
	return /* @__PURE__ */ s("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "size-[1.125rem] shrink-0",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ o("rect", {
				x: "3",
				y: "3",
				width: "7",
				height: "9",
				rx: "1.25"
			}),
			/* @__PURE__ */ o("rect", {
				x: "14",
				y: "3",
				width: "7",
				height: "5",
				rx: "1.25"
			}),
			/* @__PURE__ */ o("rect", {
				x: "14",
				y: "11",
				width: "7",
				height: "10",
				rx: "1.25"
			}),
			/* @__PURE__ */ o("rect", {
				x: "3",
				y: "15",
				width: "7",
				height: "6",
				rx: "1.25"
			})
		]
	});
}
function rt() {
	return /* @__PURE__ */ s("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "size-[1.125rem] shrink-0",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ o("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
			/* @__PURE__ */ o("circle", {
				cx: "9",
				cy: "7",
				r: "4"
			}),
			/* @__PURE__ */ o("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
			/* @__PURE__ */ o("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
		]
	});
}
var it = [{
	href: "#",
	label: "Dashboard",
	subtitle: "Visão geral",
	icon: /* @__PURE__ */ o(nt, {}),
	selected: !0
}, {
	href: "#",
	label: "Usuários",
	subtitle: "Gestão de contas",
	icon: /* @__PURE__ */ o(rt, {})
}];
function at({ items: e = it, className: t, ...n }) {
	return /* @__PURE__ */ s(u, {
		component: "aside",
		className: $("flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 text-slate-900", t),
		...n,
		children: [/* @__PURE__ */ o(d, {
			variant: "overline",
			className: "mb-3 px-2 text-[0.65rem] font-semibold tracking-[0.12em] text-slate-500",
			component: "p",
			children: "Menu"
		}), /* @__PURE__ */ o(f, {
			disablePadding: !0,
			className: "flex flex-col gap-0.5 text-slate-900",
			children: e.map((e, t) => {
				let n = e.subtitle != null;
				return /* @__PURE__ */ o(p, {
					disablePadding: !0,
					className: "block",
					children: /* @__PURE__ */ s(m, {
						component: "a",
						href: e.href,
						"aria-current": e.selected ? "page" : void 0,
						className: $("rounded-lg px-3 py-2 text-slate-800 transition-colors", "hover:bg-slate-100 hover:[&_.sidebar-item-icon]:text-slate-800", e.selected && "bg-[#8ACEFE] hover:bg-[#8ACEFE] [&_.sidebar-item-icon]:text-slate-900", n ? "items-start" : "items-center"),
						children: [e.icon == null ? null : /* @__PURE__ */ o(h, {
							className: $("min-w-0 shrink-0 text-slate-500 [&:not(:empty)]:mr-3 [&:not(:empty)]:min-w-[2.25rem]", e.selected && "text-slate-900", n && "pt-0.5"),
							children: /* @__PURE__ */ o("span", {
								className: "sidebar-item-icon flex items-center justify-center text-slate-500 transition-colors",
								children: e.icon
							})
						}), /* @__PURE__ */ o(te, {
							primary: e.label,
							secondary: n ? e.subtitle : void 0,
							slotProps: {
								primary: {
									variant: "body2",
									className: $("font-medium", e.selected ? "text-slate-900" : "text-slate-800")
								},
								...n ? { secondary: {
									variant: "caption",
									component: "span",
									className: $("mt-0.5 block leading-snug", e.selected ? "text-slate-700" : "text-slate-500")
								} } : {}
							}
						})]
					})
				}, `${e.href}-${String(t)}`);
			})
		})]
	});
}
//#endregion
//#region src/components/layout/app-layout/AppLayout.tsx
function ot({ className: e, contentClassName: t, children: n, navbarProps: r, sidebarProps: i, ...a }) {
	let { className: c, ...l } = i ?? {};
	return /* @__PURE__ */ s(u, {
		className: $("min-h-screen bg-white", e),
		...a,
		children: [/* @__PURE__ */ o(tt, { ...r }), /* @__PURE__ */ s(u, {
			className: "flex",
			children: [/* @__PURE__ */ o(at, {
				className: $("h-[calc(100vh-3.5rem)]", c),
				...l
			}), /* @__PURE__ */ o(u, {
				component: "main",
				className: $("flex-1 bg-[#F6FAFF] p-6 text-slate-900", t),
				children: n
			})]
		})]
	});
}
//#endregion
export { ot as AppLayout, ne as BaseThemeProvider, et as Button, tt as Navbar, at as Sidebar, g as createBaseTheme };
