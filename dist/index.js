import * as e from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function r(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function i(...e) {
	return (t) => {
		let n = !1, i = e.map((e) => {
			let i = r(e, t);
			return !n && typeof i == "function" && (n = !0), i;
		});
		if (n) return () => {
			for (let t = 0; t < i.length; t++) {
				let n = i[t];
				typeof n == "function" ? n() : r(e[t], null);
			}
		};
	};
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var a = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), o = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === ne ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case S: return "Suspense";
				case C: return "SuspenseList";
				case E: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case ee: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case te:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case w: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case T:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === T) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = D.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (O.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				j || (j = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return M[e] || (M[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (k(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (O.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", F[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), F[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === T && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), D = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, k = Array.isArray, A = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var j, M = {}, N = h.react_stack_bottom_frame.bind(h, s)(), P = A(a(s)), F = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > D.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : N, r ? A(a(e)) : P);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > D.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : N, r ? A(a(e)) : P);
		};
	})();
})), s = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = a() : t.exports = o();
})))(), c = Symbol.for("react.lazy"), l = e.use;
function u(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function d(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === c && "_payload" in e && u(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function f(t) {
	let n = /* @__PURE__ */ m(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t;
		d(i) && typeof l == "function" && (i = l(i._payload));
		let o = e.Children.toArray(i), c = o.find(g);
		if (c) {
			let t = c.props.children, i = o.map((n) => n === c ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, s.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, s.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var p = /* @__PURE__ */ f("Slot");
/* @__NO_SIDE_EFFECTS__ */
function m(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...a } = t;
		if (d(r) && typeof l == "function" && (r = l(r._payload)), e.isValidElement(r)) {
			let t = _(r), o = ee(a, r.props);
			return r.type !== e.Fragment && (o.ref = n ? i(n, t) : t), e.cloneElement(r, o);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var h = Symbol("radix.slottable");
function g(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === h;
}
function ee(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function _(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
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
function y() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = v(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var b = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, x = y, te = (e, t) => (n) => {
	if (t?.variants == null) return x(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = b(t) || b(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return x(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, S = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, C = (e, t) => ({
	classGroupId: e,
	validator: t
}), w = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), T = "-", E = [], ne = "arbitrary..", D = (e) => {
	let t = A(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return k(e);
			let n = e.split(T);
			return O(n, n[0] === "" && n.length > 1 ? 1 : 0, t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? S(i, t) : t : i || E;
			}
			return n[e] || E;
		}
	};
}, O = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = O(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(T) : e.slice(t).join(T), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, k = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? ne + r : void 0;
})(), A = (e) => {
	let { theme: t, classGroups: n } = e;
	return j(n, t);
}, j = (e, t) => {
	let n = w();
	for (let r in e) {
		let i = e[r];
		M(i, n, r, t);
	}
	return n;
}, M = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		N(i, t, n, r);
	}
}, N = (e, t, n, r) => {
	if (typeof e == "string") {
		P(e, t, n);
		return;
	}
	if (typeof e == "function") {
		F(e, t, n, r);
		return;
	}
	re(e, t, n, r);
}, P = (e, t, n) => {
	let r = e === "" ? t : I(t, e);
	r.classGroupId = n;
}, F = (e, t, n, r) => {
	if (L(e)) {
		M(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(C(n, e));
}, re = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		M(o, I(t, a), n, r);
	}
}, I = (e, t) => {
	let n = e, r = t.split(T), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = w(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, L = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, R = (e) => {
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
}, z = "!", ie = ":", B = [], ae = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), V = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === ie) {
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
		s.endsWith(z) ? (c = s.slice(0, -1), l = !0) : s.startsWith(z) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ae(t, l, c, u);
	};
	if (t) {
		let e = t + ie, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ae(B, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, H = (e) => {
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
}, oe = (e) => ({
	cache: R(e.cacheSize),
	parseClassName: V(e),
	sortModifiers: H(e),
	...D(e)
}), U = /\s+/, se = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(U), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), ee = d ? g + z : g, _ = ee + h;
		if (o.indexOf(_) > -1) continue;
		o.push(_);
		let v = i(h, m);
		for (let e = 0; e < v.length; ++e) {
			let t = v[e];
			o.push(ee + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, ce = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = le(n)) && (i && (i += " "), i += r);
	return i;
}, le = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = le(e[r])) && (n && (n += " "), n += t);
	return n;
}, ue = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = oe(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = se(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ce(...e));
}, de = [], W = (e) => {
	let t = (t) => t[e] || de;
	return t.isThemeGetter = !0, t;
}, fe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, me = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, he = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ge = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _e = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ve = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ye = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, G = (e) => me.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), q = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && K(e.slice(0, -1)), J = (e) => he.test(e), xe = () => !0, Se = (e) => ge.test(e) && !_e.test(e), Ce = () => !1, we = (e) => ve.test(e), Te = (e) => ye.test(e), Ee = (e) => !Y(e) && !Z(e), De = (e) => Q(e, Ue, Ce), Y = (e) => fe.test(e), X = (e) => Q(e, We, Se), Oe = (e) => Q(e, Ge, K), ke = (e) => Q(e, qe, xe), Ae = (e) => Q(e, Ke, Ce), je = (e) => Q(e, Ve, Ce), Me = (e) => Q(e, He, Te), Ne = (e) => Q(e, Je, we), Z = (e) => pe.test(e), Pe = (e) => $(e, We), Fe = (e) => $(e, Ke), Ie = (e) => $(e, Ve), Le = (e) => $(e, Ue), Re = (e) => $(e, He), ze = (e) => $(e, Je, !0), Be = (e) => $(e, qe, !0), Q = (e, t, n) => {
	let r = fe.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $ = (e, t, n = !1) => {
	let r = pe.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ve = (e) => e === "position" || e === "percentage", He = (e) => e === "image" || e === "url", Ue = (e) => e === "length" || e === "size" || e === "bg-size", We = (e) => e === "length", Ge = (e) => e === "number", Ke = (e) => e === "family-name", qe = (e) => e === "number" || e === "weight", Je = (e) => e === "shadow", Ye = /* @__PURE__ */ ue(() => {
	let e = W("color"), t = W("font"), n = W("text"), r = W("font-weight"), i = W("tracking"), a = W("leading"), o = W("breakpoint"), s = W("container"), c = W("spacing"), l = W("radius"), u = W("shadow"), d = W("inset-shadow"), f = W("text-shadow"), p = W("drop-shadow"), m = W("blur"), h = W("perspective"), g = W("aspect"), ee = W("ease"), _ = W("animate"), v = () => [
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
		Z,
		Y
	], x = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], te = () => [
		"auto",
		"contain",
		"none"
	], S = () => [
		Z,
		Y,
		c
	], C = () => [
		G,
		"full",
		"auto",
		...S()
	], w = () => [
		q,
		"none",
		"subgrid",
		Z,
		Y
	], T = () => [
		"auto",
		{ span: [
			"full",
			q,
			Z,
			Y
		] },
		q,
		Z,
		Y
	], E = () => [
		q,
		"auto",
		Z,
		Y
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		Y
	], D = () => [
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
	], O = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], k = () => ["auto", ...S()], A = () => [
		G,
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
		...S()
	], j = () => [
		G,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], M = () => [
		G,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], N = () => [
		e,
		Z,
		Y
	], P = () => [
		...y(),
		Ie,
		je,
		{ position: [Z, Y] }
	], F = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], re = () => [
		"auto",
		"cover",
		"contain",
		Le,
		De,
		{ size: [Z, Y] }
	], I = () => [
		be,
		Pe,
		X
	], L = () => [
		"",
		"none",
		"full",
		l,
		Z,
		Y
	], R = () => [
		"",
		K,
		Pe,
		X
	], z = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ie = () => [
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
	], B = () => [
		K,
		be,
		Ie,
		je
	], ae = () => [
		"",
		"none",
		m,
		Z,
		Y
	], V = () => [
		"none",
		K,
		Z,
		Y
	], H = () => [
		"none",
		K,
		Z,
		Y
	], oe = () => [
		K,
		Z,
		Y
	], U = () => [
		G,
		"full",
		...S()
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
			blur: [J],
			breakpoint: [J],
			color: [xe],
			container: [J],
			"drop-shadow": [J],
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
			"inset-shadow": [J],
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
			radius: [J],
			shadow: [J],
			spacing: ["px", K],
			text: [J],
			"text-shadow": [J],
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
				G,
				Y,
				Z,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				K,
				Y,
				Z,
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
			overflow: [{ overflow: x() }],
			"overflow-x": [{ "overflow-x": x() }],
			"overflow-y": [{ "overflow-y": x() }],
			overscroll: [{ overscroll: te() }],
			"overscroll-x": [{ "overscroll-x": te() }],
			"overscroll-y": [{ "overscroll-y": te() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: C() }],
			"inset-x": [{ "inset-x": C() }],
			"inset-y": [{ "inset-y": C() }],
			start: [{
				"inset-s": C(),
				start: C()
			}],
			end: [{
				"inset-e": C(),
				end: C()
			}],
			"inset-bs": [{ "inset-bs": C() }],
			"inset-be": [{ "inset-be": C() }],
			top: [{ top: C() }],
			right: [{ right: C() }],
			bottom: [{ bottom: C() }],
			left: [{ left: C() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				q,
				"auto",
				Z,
				Y
			] }],
			basis: [{ basis: [
				G,
				"full",
				"auto",
				s,
				...S()
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
				K,
				G,
				"auto",
				"initial",
				"none",
				Y
			] }],
			grow: [{ grow: [
				"",
				K,
				Z,
				Y
			] }],
			shrink: [{ shrink: [
				"",
				K,
				Z,
				Y
			] }],
			order: [{ order: [
				q,
				"first",
				"last",
				"none",
				Z,
				Y
			] }],
			"grid-cols": [{ "grid-cols": w() }],
			"col-start-end": [{ col: T() }],
			"col-start": [{ "col-start": E() }],
			"col-end": [{ "col-end": E() }],
			"grid-rows": [{ "grid-rows": w() }],
			"row-start-end": [{ row: T() }],
			"row-start": [{ "row-start": E() }],
			"row-end": [{ "row-end": E() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...D(), "normal"] }],
			"justify-items": [{ "justify-items": [...O(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...O()] }],
			"align-content": [{ content: ["normal", ...D()] }],
			"align-items": [{ items: [...O(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...O(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": D() }],
			"place-items": [{ "place-items": [...O(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...O()] }],
			p: [{ p: S() }],
			px: [{ px: S() }],
			py: [{ py: S() }],
			ps: [{ ps: S() }],
			pe: [{ pe: S() }],
			pbs: [{ pbs: S() }],
			pbe: [{ pbe: S() }],
			pt: [{ pt: S() }],
			pr: [{ pr: S() }],
			pb: [{ pb: S() }],
			pl: [{ pl: S() }],
			m: [{ m: k() }],
			mx: [{ mx: k() }],
			my: [{ my: k() }],
			ms: [{ ms: k() }],
			me: [{ me: k() }],
			mbs: [{ mbs: k() }],
			mbe: [{ mbe: k() }],
			mt: [{ mt: k() }],
			mr: [{ mr: k() }],
			mb: [{ mb: k() }],
			ml: [{ ml: k() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: A() }],
			"inline-size": [{ inline: ["auto", ...j()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...j()] }],
			"max-inline-size": [{ "max-inline": ["none", ...j()] }],
			"block-size": [{ block: ["auto", ...M()] }],
			"min-block-size": [{ "min-block": ["auto", ...M()] }],
			"max-block-size": [{ "max-block": ["none", ...M()] }],
			w: [{ w: [
				s,
				"screen",
				...A()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...A()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...A()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...A()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...A()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...A()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Pe,
				X
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Be,
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
				Y
			] }],
			"font-family": [{ font: [
				Fe,
				Ae,
				t
			] }],
			"font-features": [{ "font-features": [Y] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				Y
			] }],
			"line-clamp": [{ "line-clamp": [
				K,
				"none",
				Z,
				Oe
			] }],
			leading: [{ leading: [a, ...S()] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				Y
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				Y
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: N() }],
			"text-color": [{ text: N() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...z(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				K,
				"from-font",
				"auto",
				Z,
				X
			] }],
			"text-decoration-color": [{ decoration: N() }],
			"underline-offset": [{ "underline-offset": [
				K,
				"auto",
				Z,
				Y
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
			indent: [{ indent: S() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Z,
				Y
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
				Z,
				Y
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
			"bg-position": [{ bg: P() }],
			"bg-repeat": [{ bg: F() }],
			"bg-size": [{ bg: re() }],
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
						q,
						Z,
						Y
					],
					radial: [
						"",
						Z,
						Y
					],
					conic: [
						q,
						Z,
						Y
					]
				},
				Re,
				Me
			] }],
			"bg-color": [{ bg: N() }],
			"gradient-from-pos": [{ from: I() }],
			"gradient-via-pos": [{ via: I() }],
			"gradient-to-pos": [{ to: I() }],
			"gradient-from": [{ from: N() }],
			"gradient-via": [{ via: N() }],
			"gradient-to": [{ to: N() }],
			rounded: [{ rounded: L() }],
			"rounded-s": [{ "rounded-s": L() }],
			"rounded-e": [{ "rounded-e": L() }],
			"rounded-t": [{ "rounded-t": L() }],
			"rounded-r": [{ "rounded-r": L() }],
			"rounded-b": [{ "rounded-b": L() }],
			"rounded-l": [{ "rounded-l": L() }],
			"rounded-ss": [{ "rounded-ss": L() }],
			"rounded-se": [{ "rounded-se": L() }],
			"rounded-ee": [{ "rounded-ee": L() }],
			"rounded-es": [{ "rounded-es": L() }],
			"rounded-tl": [{ "rounded-tl": L() }],
			"rounded-tr": [{ "rounded-tr": L() }],
			"rounded-br": [{ "rounded-br": L() }],
			"rounded-bl": [{ "rounded-bl": L() }],
			"border-w": [{ border: R() }],
			"border-w-x": [{ "border-x": R() }],
			"border-w-y": [{ "border-y": R() }],
			"border-w-s": [{ "border-s": R() }],
			"border-w-e": [{ "border-e": R() }],
			"border-w-bs": [{ "border-bs": R() }],
			"border-w-be": [{ "border-be": R() }],
			"border-w-t": [{ "border-t": R() }],
			"border-w-r": [{ "border-r": R() }],
			"border-w-b": [{ "border-b": R() }],
			"border-w-l": [{ "border-l": R() }],
			"divide-x": [{ "divide-x": R() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": R() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...z(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...z(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: N() }],
			"border-color-x": [{ "border-x": N() }],
			"border-color-y": [{ "border-y": N() }],
			"border-color-s": [{ "border-s": N() }],
			"border-color-e": [{ "border-e": N() }],
			"border-color-bs": [{ "border-bs": N() }],
			"border-color-be": [{ "border-be": N() }],
			"border-color-t": [{ "border-t": N() }],
			"border-color-r": [{ "border-r": N() }],
			"border-color-b": [{ "border-b": N() }],
			"border-color-l": [{ "border-l": N() }],
			"divide-color": [{ divide: N() }],
			"outline-style": [{ outline: [
				...z(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				K,
				Z,
				Y
			] }],
			"outline-w": [{ outline: [
				"",
				K,
				Pe,
				X
			] }],
			"outline-color": [{ outline: N() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ze,
				Ne
			] }],
			"shadow-color": [{ shadow: N() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ze,
				Ne
			] }],
			"inset-shadow-color": [{ "inset-shadow": N() }],
			"ring-w": [{ ring: R() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: N() }],
			"ring-offset-w": [{ "ring-offset": [K, X] }],
			"ring-offset-color": [{ "ring-offset": N() }],
			"inset-ring-w": [{ "inset-ring": R() }],
			"inset-ring-color": [{ "inset-ring": N() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ze,
				Ne
			] }],
			"text-shadow-color": [{ "text-shadow": N() }],
			opacity: [{ opacity: [
				K,
				Z,
				Y
			] }],
			"mix-blend": [{ "mix-blend": [
				...ie(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ie() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [K] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": B() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": B() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": N() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": N() }],
			"mask-image-t-from-pos": [{ "mask-t-from": B() }],
			"mask-image-t-to-pos": [{ "mask-t-to": B() }],
			"mask-image-t-from-color": [{ "mask-t-from": N() }],
			"mask-image-t-to-color": [{ "mask-t-to": N() }],
			"mask-image-r-from-pos": [{ "mask-r-from": B() }],
			"mask-image-r-to-pos": [{ "mask-r-to": B() }],
			"mask-image-r-from-color": [{ "mask-r-from": N() }],
			"mask-image-r-to-color": [{ "mask-r-to": N() }],
			"mask-image-b-from-pos": [{ "mask-b-from": B() }],
			"mask-image-b-to-pos": [{ "mask-b-to": B() }],
			"mask-image-b-from-color": [{ "mask-b-from": N() }],
			"mask-image-b-to-color": [{ "mask-b-to": N() }],
			"mask-image-l-from-pos": [{ "mask-l-from": B() }],
			"mask-image-l-to-pos": [{ "mask-l-to": B() }],
			"mask-image-l-from-color": [{ "mask-l-from": N() }],
			"mask-image-l-to-color": [{ "mask-l-to": N() }],
			"mask-image-x-from-pos": [{ "mask-x-from": B() }],
			"mask-image-x-to-pos": [{ "mask-x-to": B() }],
			"mask-image-x-from-color": [{ "mask-x-from": N() }],
			"mask-image-x-to-color": [{ "mask-x-to": N() }],
			"mask-image-y-from-pos": [{ "mask-y-from": B() }],
			"mask-image-y-to-pos": [{ "mask-y-to": B() }],
			"mask-image-y-from-color": [{ "mask-y-from": N() }],
			"mask-image-y-to-color": [{ "mask-y-to": N() }],
			"mask-image-radial": [{ "mask-radial": [Z, Y] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": B() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": B() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": N() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": N() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": y() }],
			"mask-image-conic-pos": [{ "mask-conic": [K] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": B() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": B() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": N() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": N() }],
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
			"mask-position": [{ mask: P() }],
			"mask-repeat": [{ mask: F() }],
			"mask-size": [{ mask: re() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				Y
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				Y
			] }],
			blur: [{ blur: ae() }],
			brightness: [{ brightness: [
				K,
				Z,
				Y
			] }],
			contrast: [{ contrast: [
				K,
				Z,
				Y
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ze,
				Ne
			] }],
			"drop-shadow-color": [{ "drop-shadow": N() }],
			grayscale: [{ grayscale: [
				"",
				K,
				Z,
				Y
			] }],
			"hue-rotate": [{ "hue-rotate": [
				K,
				Z,
				Y
			] }],
			invert: [{ invert: [
				"",
				K,
				Z,
				Y
			] }],
			saturate: [{ saturate: [
				K,
				Z,
				Y
			] }],
			sepia: [{ sepia: [
				"",
				K,
				Z,
				Y
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				Y
			] }],
			"backdrop-blur": [{ "backdrop-blur": ae() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				K,
				Z,
				Y
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				K,
				Z,
				Y
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				K,
				Z,
				Y
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				K,
				Z,
				Y
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				K,
				Z,
				Y
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				K,
				Z,
				Y
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				K,
				Z,
				Y
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				K,
				Z,
				Y
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": S() }],
			"border-spacing-x": [{ "border-spacing-x": S() }],
			"border-spacing-y": [{ "border-spacing-y": S() }],
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
				Z,
				Y
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				K,
				"initial",
				Z,
				Y
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				ee,
				Z,
				Y
			] }],
			delay: [{ delay: [
				K,
				Z,
				Y
			] }],
			animate: [{ animate: [
				"none",
				_,
				Z,
				Y
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				Y
			] }],
			"perspective-origin": [{ "perspective-origin": b() }],
			rotate: [{ rotate: V() }],
			"rotate-x": [{ "rotate-x": V() }],
			"rotate-y": [{ "rotate-y": V() }],
			"rotate-z": [{ "rotate-z": V() }],
			scale: [{ scale: H() }],
			"scale-x": [{ "scale-x": H() }],
			"scale-y": [{ "scale-y": H() }],
			"scale-z": [{ "scale-z": H() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: oe() }],
			"skew-x": [{ "skew-x": oe() }],
			"skew-y": [{ "skew-y": oe() }],
			transform: [{ transform: [
				Z,
				Y,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: b() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: U() }],
			"translate-x": [{ "translate-x": U() }],
			"translate-y": [{ "translate-y": U() }],
			"translate-z": [{ "translate-z": U() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: N() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: N() }],
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
				Z,
				Y
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
			"scroll-m": [{ "scroll-m": S() }],
			"scroll-mx": [{ "scroll-mx": S() }],
			"scroll-my": [{ "scroll-my": S() }],
			"scroll-ms": [{ "scroll-ms": S() }],
			"scroll-me": [{ "scroll-me": S() }],
			"scroll-mbs": [{ "scroll-mbs": S() }],
			"scroll-mbe": [{ "scroll-mbe": S() }],
			"scroll-mt": [{ "scroll-mt": S() }],
			"scroll-mr": [{ "scroll-mr": S() }],
			"scroll-mb": [{ "scroll-mb": S() }],
			"scroll-ml": [{ "scroll-ml": S() }],
			"scroll-p": [{ "scroll-p": S() }],
			"scroll-px": [{ "scroll-px": S() }],
			"scroll-py": [{ "scroll-py": S() }],
			"scroll-ps": [{ "scroll-ps": S() }],
			"scroll-pe": [{ "scroll-pe": S() }],
			"scroll-pbs": [{ "scroll-pbs": S() }],
			"scroll-pbe": [{ "scroll-pbe": S() }],
			"scroll-pt": [{ "scroll-pt": S() }],
			"scroll-pr": [{ "scroll-pr": S() }],
			"scroll-pb": [{ "scroll-pb": S() }],
			"scroll-pl": [{ "scroll-pl": S() }],
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
				Z,
				Y
			] }],
			fill: [{ fill: ["none", ...N()] }],
			"stroke-w": [{ stroke: [
				K,
				Pe,
				X,
				Oe
			] }],
			stroke: [{ stroke: ["none", ...N()] }],
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
//#region src/lib/utils.ts
function Xe(...e) {
	return Ye(y(e));
}
//#endregion
//#region src/components/ui/button.tsx
var Ze = te("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Qe({ className: e, variant: t, size: n, asChild: r = !1, ...i }) {
	return /* @__PURE__ */ (0, s.jsx)(r ? p : "button", {
		"data-slot": "button",
		className: Xe(Ze({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/layout/navbar/Navbar.tsx
function $e({ className: e, brand: t = "Base UI", actions: n, ...r }) {
	return /* @__PURE__ */ (0, s.jsxs)("header", {
		className: Xe("flex h-14 items-center justify-between border-b px-6", e),
		...r,
		children: [/* @__PURE__ */ (0, s.jsx)("h1", {
			className: "text-lg font-semibold",
			children: t
		}), /* @__PURE__ */ (0, s.jsx)("div", {
			className: "flex items-center gap-2",
			children: n ?? /* @__PURE__ */ (0, s.jsx)(Qe, {
				variant: "outline",
				children: "Login"
			})
		})]
	});
}
//#endregion
//#region src/components/layout/sidebar/Sidebar.tsx
var et = [{
	href: "#",
	label: "Dashboard"
}, {
	href: "#",
	label: "Usuários"
}];
function tt({ className: e, items: t = et, ...n }) {
	return /* @__PURE__ */ (0, s.jsx)("aside", {
		className: Xe("h-screen w-64 border-r p-4", e),
		...n,
		children: /* @__PURE__ */ (0, s.jsx)("nav", {
			className: "space-y-2",
			children: t.map((e, t) => /* @__PURE__ */ (0, s.jsx)("a", {
				href: e.href,
				className: "block rounded-md px-3 py-2 text-sm hover:bg-muted",
				children: e.label
			}, `${e.href}-${t}`))
		})
	});
}
//#endregion
export { Qe as Button, $e as Navbar, tt as Sidebar, Ze as buttonVariants };
