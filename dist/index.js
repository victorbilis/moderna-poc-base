import "react";
import { CssBaseline as e, ThemeProvider as t } from "@mui/material";
import n from "@mui/material/GlobalStyles";
import { StyledEngineProvider as r, createTheme as i } from "@mui/material/styles";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import s from "@mui/material/Button";
import c from "@mui/material/AppBar";
import l from "@mui/material/Box";
import u from "@mui/material/Toolbar";
import ee from "@mui/material/Typography";
import d from "@mui/material/List";
import f from "@mui/material/ListItem";
import p from "@mui/material/ListItemButton";
import m from "@mui/material/ListItemIcon";
import h from "@mui/material/ListItemText";
//#region src/theme/createBaseTheme.ts
function g() {
	return i({
		cssVariables: !0,
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
function v({ children: i, theme: s }) {
	let c = s ?? g();
	return /* @__PURE__ */ o(r, {
		enableCssLayer: !0,
		children: [/* @__PURE__ */ a(n, { styles: _ }), /* @__PURE__ */ o(t, {
			theme: c,
			children: [/* @__PURE__ */ a(e, { enableColorScheme: !0 }), i]
		})]
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function y(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = y(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function b() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = y(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var te = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ne = (e, t) => ({
	classGroupId: e,
	validator: t
}), x = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), S = "-", C = [], re = "arbitrary..", w = (e) => {
	let t = D(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return E(e);
			let n = e.split(S);
			return T(n, n[0] === "" && n.length > 1 ? 1 : 0, t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? te(i, t) : t : i || C;
			}
			return n[e] || C;
		}
	};
}, T = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = T(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(S) : e.slice(t).join(S), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, E = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? re + r : void 0;
})(), D = (e) => {
	let { theme: t, classGroups: n } = e;
	return O(n, t);
}, O = (e, t) => {
	let n = x();
	for (let r in e) {
		let i = e[r];
		k(i, n, r, t);
	}
	return n;
}, k = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		A(i, t, n, r);
	}
}, A = (e, t, n, r) => {
	if (typeof e == "string") {
		ie(e, t, n);
		return;
	}
	if (typeof e == "function") {
		j(e, t, n, r);
		return;
	}
	ae(e, t, n, r);
}, ie = (e, t, n) => {
	let r = e === "" ? t : M(t, e);
	r.classGroupId = n;
}, j = (e, t, n, r) => {
	if (oe(e)) {
		k(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(ne(n, e));
}, ae = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		k(o, M(t, a), n, r);
	}
}, M = (e, t) => {
	let n = e, r = t.split(S), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = x(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, oe = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, N = (e) => {
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
}, P = "!", F = ":", I = [], se = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), L = (e) => {
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
		return se(t, l, c, u);
	};
	if (t) {
		let e = t + F, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : se(I, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ce = (e) => {
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
	parseClassName: L(e),
	sortModifiers: ce(e),
	...w(e)
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
		let h = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), g = ee ? h + P : h, _ = g + m;
		if (o.indexOf(_) > -1) continue;
		o.push(_);
		let v = i(m, p);
		for (let e = 0; e < v.length; ++e) {
			let t = v[e];
			o.push(g + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, V = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = le(n)) && (i && (i += " "), i += r);
	return i;
}, le = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = le(e[r])) && (n && (n += " "), n += t);
	return n;
}, ue = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = R(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = B(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(V(...e));
}, de = [], H = (e) => {
	let t = (t) => t[e] || de;
	return t.isThemeGetter = !0, t;
}, fe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, me = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, he = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ge = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _e = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ve = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ye = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, U = (e) => me.test(e), W = (e) => !!e && !Number.isNaN(Number(e)), G = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && W(e.slice(0, -1)), K = (e) => he.test(e), xe = () => !0, Se = (e) => ge.test(e) && !_e.test(e), Ce = () => !1, we = (e) => ve.test(e), Te = (e) => ye.test(e), Ee = (e) => !q(e) && !Y(e), De = (e) => Z(e, He, Ce), q = (e) => fe.test(e), J = (e) => Z(e, Ue, Se), Oe = (e) => Z(e, We, W), ke = (e) => Z(e, Ke, xe), Ae = (e) => Z(e, Ge, Ce), je = (e) => Z(e, Be, Ce), Me = (e) => Z(e, Ve, Te), Ne = (e) => Z(e, qe, we), Y = (e) => pe.test(e), X = (e) => Q(e, Ue), Pe = (e) => Q(e, Ge), Fe = (e) => Q(e, Be), Ie = (e) => Q(e, He), Le = (e) => Q(e, Ve), Re = (e) => Q(e, qe, !0), ze = (e) => Q(e, Ke, !0), Z = (e, t, n) => {
	let r = fe.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Q = (e, t, n = !1) => {
	let r = pe.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Be = (e) => e === "position" || e === "percentage", Ve = (e) => e === "image" || e === "url", He = (e) => e === "length" || e === "size" || e === "bg-size", Ue = (e) => e === "length", We = (e) => e === "number", Ge = (e) => e === "family-name", Ke = (e) => e === "number" || e === "weight", qe = (e) => e === "shadow", Je = /* @__PURE__ */ ue(() => {
	let e = H("color"), t = H("font"), n = H("text"), r = H("font-weight"), i = H("tracking"), a = H("leading"), o = H("breakpoint"), s = H("container"), c = H("spacing"), l = H("radius"), u = H("shadow"), ee = H("inset-shadow"), d = H("text-shadow"), f = H("drop-shadow"), p = H("blur"), m = H("perspective"), h = H("aspect"), g = H("ease"), _ = H("animate"), v = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], y = () => [
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
	], b = () => [
		...y(),
		Y,
		q
	], te = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ne = () => [
		"auto",
		"contain",
		"none"
	], x = () => [
		Y,
		q,
		c
	], S = () => [
		U,
		"full",
		"auto",
		...x()
	], C = () => [
		G,
		"none",
		"subgrid",
		Y,
		q
	], re = () => [
		"auto",
		{ span: [
			"full",
			G,
			Y,
			q
		] },
		G,
		Y,
		q
	], w = () => [
		G,
		"auto",
		Y,
		q
	], T = () => [
		"auto",
		"min",
		"max",
		"fr",
		Y,
		q
	], E = () => [
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
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...x()], k = () => [
		U,
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
		...x()
	], A = () => [
		U,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...x()
	], ie = () => [
		U,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...x()
	], j = () => [
		e,
		Y,
		q
	], ae = () => [
		...y(),
		Fe,
		je,
		{ position: [Y, q] }
	], M = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], oe = () => [
		"auto",
		"cover",
		"contain",
		Ie,
		De,
		{ size: [Y, q] }
	], N = () => [
		be,
		X,
		J
	], P = () => [
		"",
		"none",
		"full",
		l,
		Y,
		q
	], F = () => [
		"",
		W,
		X,
		J
	], I = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], se = () => [
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
	], L = () => [
		W,
		be,
		Fe,
		je
	], ce = () => [
		"",
		"none",
		p,
		Y,
		q
	], R = () => [
		"none",
		W,
		Y,
		q
	], z = () => [
		"none",
		W,
		Y,
		q
	], B = () => [
		W,
		Y,
		q
	], V = () => [
		U,
		"full",
		...x()
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
			blur: [K],
			breakpoint: [K],
			color: [xe],
			container: [K],
			"drop-shadow": [K],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ee],
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
			"inset-shadow": [K],
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
			radius: [K],
			shadow: [K],
			spacing: ["px", W],
			text: [K],
			"text-shadow": [K],
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
				U,
				q,
				Y,
				h
			] }],
			container: ["container"],
			columns: [{ columns: [
				W,
				q,
				Y,
				s
			] }],
			"break-after": [{ "break-after": v() }],
			"break-before": [{ "break-before": v() }],
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
			"object-position": [{ object: b() }],
			overflow: [{ overflow: te() }],
			"overflow-x": [{ "overflow-x": te() }],
			"overflow-y": [{ "overflow-y": te() }],
			overscroll: [{ overscroll: ne() }],
			"overscroll-x": [{ "overscroll-x": ne() }],
			"overscroll-y": [{ "overscroll-y": ne() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: S() }],
			"inset-x": [{ "inset-x": S() }],
			"inset-y": [{ "inset-y": S() }],
			start: [{
				"inset-s": S(),
				start: S()
			}],
			end: [{
				"inset-e": S(),
				end: S()
			}],
			"inset-bs": [{ "inset-bs": S() }],
			"inset-be": [{ "inset-be": S() }],
			top: [{ top: S() }],
			right: [{ right: S() }],
			bottom: [{ bottom: S() }],
			left: [{ left: S() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				G,
				"auto",
				Y,
				q
			] }],
			basis: [{ basis: [
				U,
				"full",
				"auto",
				s,
				...x()
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
				W,
				U,
				"auto",
				"initial",
				"none",
				q
			] }],
			grow: [{ grow: [
				"",
				W,
				Y,
				q
			] }],
			shrink: [{ shrink: [
				"",
				W,
				Y,
				q
			] }],
			order: [{ order: [
				G,
				"first",
				"last",
				"none",
				Y,
				q
			] }],
			"grid-cols": [{ "grid-cols": C() }],
			"col-start-end": [{ col: re() }],
			"col-start": [{ "col-start": w() }],
			"col-end": [{ "col-end": w() }],
			"grid-rows": [{ "grid-rows": C() }],
			"row-start-end": [{ row: re() }],
			"row-start": [{ "row-start": w() }],
			"row-end": [{ "row-end": w() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": T() }],
			"auto-rows": [{ "auto-rows": T() }],
			gap: [{ gap: x() }],
			"gap-x": [{ "gap-x": x() }],
			"gap-y": [{ "gap-y": x() }],
			"justify-content": [{ justify: [...E(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...E()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": E() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: x() }],
			px: [{ px: x() }],
			py: [{ py: x() }],
			ps: [{ ps: x() }],
			pe: [{ pe: x() }],
			pbs: [{ pbs: x() }],
			pbe: [{ pbe: x() }],
			pt: [{ pt: x() }],
			pr: [{ pr: x() }],
			pb: [{ pb: x() }],
			pl: [{ pl: x() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mbs: [{ mbs: O() }],
			mbe: [{ mbe: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": x() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": x() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: k() }],
			"inline-size": [{ inline: ["auto", ...A()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...A()] }],
			"max-inline-size": [{ "max-inline": ["none", ...A()] }],
			"block-size": [{ block: ["auto", ...ie()] }],
			"min-block-size": [{ "min-block": ["auto", ...ie()] }],
			"max-block-size": [{ "max-block": ["none", ...ie()] }],
			w: [{ w: [
				s,
				"screen",
				...k()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...k()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...k()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...k()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...k()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				X,
				J
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				ze,
				ke
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
				be,
				q
			] }],
			"font-family": [{ font: [
				Pe,
				Ae,
				t
			] }],
			"font-features": [{ "font-features": [q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Y,
				q
			] }],
			"line-clamp": [{ "line-clamp": [
				W,
				"none",
				Y,
				Oe
			] }],
			leading: [{ leading: [a, ...x()] }],
			"list-image": [{ "list-image": [
				"none",
				Y,
				q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Y,
				q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...I(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				W,
				"from-font",
				"auto",
				Y,
				J
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				W,
				"auto",
				Y,
				q
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
			indent: [{ indent: x() }],
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
				q
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
				q
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
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: M() }],
			"bg-size": [{ bg: oe() }],
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
						G,
						Y,
						q
					],
					radial: [
						"",
						Y,
						q
					],
					conic: [
						G,
						Y,
						q
					]
				},
				Le,
				Me
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: N() }],
			"gradient-via-pos": [{ via: N() }],
			"gradient-to-pos": [{ to: N() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: P() }],
			"rounded-s": [{ "rounded-s": P() }],
			"rounded-e": [{ "rounded-e": P() }],
			"rounded-t": [{ "rounded-t": P() }],
			"rounded-r": [{ "rounded-r": P() }],
			"rounded-b": [{ "rounded-b": P() }],
			"rounded-l": [{ "rounded-l": P() }],
			"rounded-ss": [{ "rounded-ss": P() }],
			"rounded-se": [{ "rounded-se": P() }],
			"rounded-ee": [{ "rounded-ee": P() }],
			"rounded-es": [{ "rounded-es": P() }],
			"rounded-tl": [{ "rounded-tl": P() }],
			"rounded-tr": [{ "rounded-tr": P() }],
			"rounded-br": [{ "rounded-br": P() }],
			"rounded-bl": [{ "rounded-bl": P() }],
			"border-w": [{ border: F() }],
			"border-w-x": [{ "border-x": F() }],
			"border-w-y": [{ "border-y": F() }],
			"border-w-s": [{ "border-s": F() }],
			"border-w-e": [{ "border-e": F() }],
			"border-w-bs": [{ "border-bs": F() }],
			"border-w-be": [{ "border-be": F() }],
			"border-w-t": [{ "border-t": F() }],
			"border-w-r": [{ "border-r": F() }],
			"border-w-b": [{ "border-b": F() }],
			"border-w-l": [{ "border-l": F() }],
			"divide-x": [{ "divide-x": F() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": F() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...I(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...I(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...I(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				W,
				Y,
				q
			] }],
			"outline-w": [{ outline: [
				"",
				W,
				X,
				J
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Re,
				Ne
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				ee,
				Re,
				Ne
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: F() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [W, J] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": F() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				d,
				Re,
				Ne
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				W,
				Y,
				q
			] }],
			"mix-blend": [{ "mix-blend": [
				...se(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": se() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [W] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": L() }],
			"mask-image-t-to-pos": [{ "mask-t-to": L() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": L() }],
			"mask-image-r-to-pos": [{ "mask-r-to": L() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": L() }],
			"mask-image-b-to-pos": [{ "mask-b-to": L() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": L() }],
			"mask-image-l-to-pos": [{ "mask-l-to": L() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": L() }],
			"mask-image-x-to-pos": [{ "mask-x-to": L() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": L() }],
			"mask-image-y-to-pos": [{ "mask-y-to": L() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [Y, q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": y() }],
			"mask-image-conic-pos": [{ "mask-conic": [W] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
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
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: M() }],
			"mask-size": [{ mask: oe() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Y,
				q
			] }],
			filter: [{ filter: [
				"",
				"none",
				Y,
				q
			] }],
			blur: [{ blur: ce() }],
			brightness: [{ brightness: [
				W,
				Y,
				q
			] }],
			contrast: [{ contrast: [
				W,
				Y,
				q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				f,
				Re,
				Ne
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				W,
				Y,
				q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				W,
				Y,
				q
			] }],
			invert: [{ invert: [
				"",
				W,
				Y,
				q
			] }],
			saturate: [{ saturate: [
				W,
				Y,
				q
			] }],
			sepia: [{ sepia: [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Y,
				q
			] }],
			"backdrop-blur": [{ "backdrop-blur": ce() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				W,
				Y,
				q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				W,
				Y,
				q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				W,
				Y,
				q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				W,
				Y,
				q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				W,
				Y,
				q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				W,
				Y,
				q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				W,
				Y,
				q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": x() }],
			"border-spacing-x": [{ "border-spacing-x": x() }],
			"border-spacing-y": [{ "border-spacing-y": x() }],
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
				q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				W,
				"initial",
				Y,
				q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				g,
				Y,
				q
			] }],
			delay: [{ delay: [
				W,
				Y,
				q
			] }],
			animate: [{ animate: [
				"none",
				_,
				Y,
				q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				m,
				Y,
				q
			] }],
			"perspective-origin": [{ "perspective-origin": b() }],
			rotate: [{ rotate: R() }],
			"rotate-x": [{ "rotate-x": R() }],
			"rotate-y": [{ "rotate-y": R() }],
			"rotate-z": [{ "rotate-z": R() }],
			scale: [{ scale: z() }],
			"scale-x": [{ "scale-x": z() }],
			"scale-y": [{ "scale-y": z() }],
			"scale-z": [{ "scale-z": z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: B() }],
			"skew-x": [{ "skew-x": B() }],
			"skew-y": [{ "skew-y": B() }],
			transform: [{ transform: [
				Y,
				q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: b() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: V() }],
			"translate-x": [{ "translate-x": V() }],
			"translate-y": [{ "translate-y": V() }],
			"translate-z": [{ "translate-z": V() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
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
				q
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
			"scroll-m": [{ "scroll-m": x() }],
			"scroll-mx": [{ "scroll-mx": x() }],
			"scroll-my": [{ "scroll-my": x() }],
			"scroll-ms": [{ "scroll-ms": x() }],
			"scroll-me": [{ "scroll-me": x() }],
			"scroll-mbs": [{ "scroll-mbs": x() }],
			"scroll-mbe": [{ "scroll-mbe": x() }],
			"scroll-mt": [{ "scroll-mt": x() }],
			"scroll-mr": [{ "scroll-mr": x() }],
			"scroll-mb": [{ "scroll-mb": x() }],
			"scroll-ml": [{ "scroll-ml": x() }],
			"scroll-p": [{ "scroll-p": x() }],
			"scroll-px": [{ "scroll-px": x() }],
			"scroll-py": [{ "scroll-py": x() }],
			"scroll-ps": [{ "scroll-ps": x() }],
			"scroll-pe": [{ "scroll-pe": x() }],
			"scroll-pbs": [{ "scroll-pbs": x() }],
			"scroll-pbe": [{ "scroll-pbe": x() }],
			"scroll-pt": [{ "scroll-pt": x() }],
			"scroll-pr": [{ "scroll-pr": x() }],
			"scroll-pb": [{ "scroll-pb": x() }],
			"scroll-pl": [{ "scroll-pl": x() }],
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
				q
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				W,
				X,
				J,
				Oe
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
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
	return Je(b(e));
}
//#endregion
//#region src/components/button/Button.tsx
function Ye(e) {
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
function Xe(e) {
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
function Ze(e) {
	switch (e) {
		case "destructive": return "bg-red-500/10 text-red-700 hover:bg-red-500/20 dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25";
		case "link": return "underline underline-offset-4";
		default: return "";
	}
}
function Qe(e) {
	switch (e) {
		case "xs": return "min-h-6 px-2 py-0.5 text-xs";
		case "icon": return "min-h-10 min-w-10 p-2";
		case "icon-xs": return "min-h-6 min-w-6 p-0.5 [&_svg]:size-3";
		case "icon-sm": return "min-h-7 min-w-7 p-[0.35rem]";
		case "icon-lg": return "min-h-9 min-w-9 p-2";
		default: return "";
	}
}
function $e({ variant: e = "default", size: t = "default", className: n, ...r }) {
	let { variant: i, color: o } = Ye(e);
	return /* @__PURE__ */ a(s, {
		variant: i,
		color: o,
		size: Xe(t),
		disableElevation: !0,
		className: $("font-medium normal-case", Ze(e), Qe(t), n),
		...r
	});
}
//#endregion
//#region src/components/layout/navbar/Navbar.tsx
function et({ brand: e = "Base UI", logo: t, logoSrc: n, logoAlt: r = "", toolbarCenter: i, actions: s, className: d, ...f }) {
	let p = t ?? (n ? /* @__PURE__ */ a(l, {
		component: "img",
		src: n,
		alt: r,
		className: "h-9 max-h-10 w-auto max-w-[180px] object-contain object-left"
	}) : null);
	return /* @__PURE__ */ a(c, {
		position: "static",
		color: "inherit",
		elevation: 0,
		className: $("border-b border-slate-200 bg-white text-slate-900 shadow-[0_1px_0_0_rgba(15,23,42,0.06)]", d),
		...f,
		children: /* @__PURE__ */ o(u, {
			variant: "dense",
			className: "min-h-14 gap-4 px-4 text-slate-900 sm:px-6",
			children: [
				/* @__PURE__ */ o(l, {
					className: "flex min-w-0 shrink-0 items-center gap-3",
					children: [p, e != null && e !== !1 && /* @__PURE__ */ a(ee, {
						variant: "h6",
						component: "div",
						className: $("truncate font-semibold tracking-tight text-slate-900", p && "hidden sm:block"),
						children: e
					})]
				}),
				i == null ? /* @__PURE__ */ a(l, {
					className: "min-w-0 flex-1",
					"aria-hidden": !0
				}) : /* @__PURE__ */ a(l, {
					className: "mx-auto flex min-w-0 max-w-xl flex-1 justify-center px-2",
					children: i
				}),
				/* @__PURE__ */ a(l, {
					className: "flex shrink-0 items-center gap-2 text-slate-700 [&_button]:border-slate-300 [&_button]:text-slate-800 [&_button:hover]:bg-slate-100",
					children: s ?? /* @__PURE__ */ a($e, {
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
function tt() {
	return /* @__PURE__ */ o("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "size-[1.125rem] shrink-0",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ a("rect", {
				x: "3",
				y: "3",
				width: "7",
				height: "9",
				rx: "1.25"
			}),
			/* @__PURE__ */ a("rect", {
				x: "14",
				y: "3",
				width: "7",
				height: "5",
				rx: "1.25"
			}),
			/* @__PURE__ */ a("rect", {
				x: "14",
				y: "11",
				width: "7",
				height: "10",
				rx: "1.25"
			}),
			/* @__PURE__ */ a("rect", {
				x: "3",
				y: "15",
				width: "7",
				height: "6",
				rx: "1.25"
			})
		]
	});
}
function nt() {
	return /* @__PURE__ */ o("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "size-[1.125rem] shrink-0",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ a("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
			/* @__PURE__ */ a("circle", {
				cx: "9",
				cy: "7",
				r: "4"
			}),
			/* @__PURE__ */ a("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
			/* @__PURE__ */ a("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
		]
	});
}
var rt = [{
	href: "#",
	label: "Dashboard",
	subtitle: "Visão geral",
	icon: /* @__PURE__ */ a(tt, {}),
	selected: !0
}, {
	href: "#",
	label: "Usuários",
	subtitle: "Gestão de contas",
	icon: /* @__PURE__ */ a(nt, {})
}];
function it({ items: e = rt, className: t, ...n }) {
	return /* @__PURE__ */ o(l, {
		component: "aside",
		className: $("flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 text-slate-900", t),
		...n,
		children: [/* @__PURE__ */ a(ee, {
			variant: "overline",
			className: "mb-3 px-2 text-[0.65rem] font-semibold tracking-[0.12em] text-slate-500",
			component: "p",
			children: "Menu"
		}), /* @__PURE__ */ a(d, {
			disablePadding: !0,
			className: "flex flex-col gap-0.5 text-slate-900",
			children: e.map((e, t) => {
				let n = e.subtitle != null;
				return /* @__PURE__ */ a(f, {
					disablePadding: !0,
					className: "block",
					children: /* @__PURE__ */ o(p, {
						component: "a",
						href: e.href,
						"aria-current": e.selected ? "page" : void 0,
						className: $("rounded-lg px-3 py-2 text-slate-800 transition-colors", "hover:bg-slate-100 hover:[&_.sidebar-item-icon]:text-slate-800", e.selected && "bg-[#8ACEFE] hover:bg-[#8ACEFE] [&_.sidebar-item-icon]:text-slate-900", n ? "items-start" : "items-center"),
						children: [e.icon == null ? null : /* @__PURE__ */ a(m, {
							className: $("min-w-0 shrink-0 text-slate-500 [&:not(:empty)]:mr-3 [&:not(:empty)]:min-w-[2.25rem]", e.selected && "text-slate-900", n && "pt-0.5"),
							children: /* @__PURE__ */ a("span", {
								className: "sidebar-item-icon flex items-center justify-center text-slate-500 transition-colors",
								children: e.icon
							})
						}), /* @__PURE__ */ a(h, {
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
function at({ className: e, contentClassName: t, children: n, navbarProps: r, sidebarProps: i, ...s }) {
	let { className: c, ...u } = i ?? {};
	return /* @__PURE__ */ o(l, {
		className: $("min-h-screen bg-white", e),
		...s,
		children: [/* @__PURE__ */ a(et, { ...r }), /* @__PURE__ */ o(l, {
			className: "flex",
			children: [/* @__PURE__ */ a(it, {
				className: $("h-[calc(100vh-3.5rem)]", c),
				...u
			}), /* @__PURE__ */ a(l, {
				component: "main",
				className: $("flex-1 bg-[#F6FAFF] p-6 text-slate-900", t),
				children: n
			})]
		})]
	});
}
//#endregion
export { at as AppLayout, v as BaseThemeProvider, $e as Button, et as Navbar, it as Sidebar, g as createBaseTheme };
