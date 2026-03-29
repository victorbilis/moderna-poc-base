import * as e from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, n, i = "";
	if (typeof e == "string" || typeof e == "number") i += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var a = e.length;
		for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (i && (i += " "), i += n);
	} else for (n in e) e[n] && (i && (i += " "), i += n);
	return i;
}
function i() {
	for (var e, t, n = 0, i = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (i && (i += " "), i += t);
	return i;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var a = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, o = i, s = (e, t) => (n) => {
	if (t?.variants == null) return o(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, s = Object.keys(r).map((e) => {
		let t = n?.[e], o = i?.[e];
		if (t === null) return null;
		let s = a(t) || a(o);
		return r[e][s];
	}), c = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return o(e, s, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...c
			}[t]) : {
				...i,
				...c
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
};
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function c(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function l(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = c(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : c(e[t], null);
			}
		};
	};
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var u = /* @__PURE__ */ t(((e) => {
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
})), d = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === te ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case D: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case ee: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case E:
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
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === E) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = O.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (k.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				M || (M = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return N[e] || (N[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
			if (f !== void 0) if (a) if (A(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (k.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), I[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === E && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), O = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, A = Array.isArray, j = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var M, N = {}, P = h.react_stack_bottom_frame.bind(h, s)(), F = j(a(s)), I = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : P, r ? j(a(e)) : F);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : P, r ? j(a(e)) : F);
		};
	})();
})), f = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = u() : t.exports = d();
})))();
/* @__NO_SIDE_EFFECTS__ */
function p(t) {
	let n = /* @__PURE__ */ h(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(_);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, f.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, f.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var m = /* @__PURE__ */ p("Slot");
/* @__NO_SIDE_EFFECTS__ */
function h(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = y(r), a = v(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? l(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var g = Symbol("radix.slottable");
function _(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === g;
}
function v(e, t) {
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
function y(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/clsx/dist/clsx.js
var b = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t, r, i = "";
		if (typeof e == "string" || typeof e == "number") i += e;
		else if (typeof e == "object") if (Array.isArray(e)) {
			var a = e.length;
			for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (i && (i += " "), i += r);
		} else for (r in e) e[r] && (i && (i += " "), i += r);
		return i;
	}
	function r() {
		for (var e, t, r = 0, i = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = n(e)) && (i && (i += " "), i += t);
		return i;
	}
	t.exports = r, t.exports.clsx = r;
})), x = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
	var t = (e, t) => {
		let n = Array(e.length + t.length);
		for (let t = 0; t < e.length; t++) n[t] = e[t];
		for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
		return n;
	}, n = (e, t) => ({
		classGroupId: e,
		validator: t
	}), r = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
		nextPart: e,
		validators: t,
		classGroupId: n
	}), i = "-", a = [], o = "arbitrary..", s = (e) => {
		let n = u(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
		return {
			getClassGroupId: (e) => {
				if (e.startsWith("[") && e.endsWith("]")) return l(e);
				let t = e.split(i);
				return c(t, t[0] === "" && t.length > 1 ? 1 : 0, n);
			},
			getConflictingClassGroupIds: (e, n) => {
				if (n) {
					let n = o[e], i = r[e];
					return n ? i ? t(i, n) : n : i || a;
				}
				return r[e] || a;
			}
		};
	}, c = (e, t, n) => {
		if (e.length - t === 0) return n.classGroupId;
		let r = e[t], a = n.nextPart.get(r);
		if (a) {
			let n = c(e, t + 1, a);
			if (n) return n;
		}
		let o = n.validators;
		if (o === null) return;
		let s = t === 0 ? e.join(i) : e.slice(t).join(i), l = o.length;
		for (let e = 0; e < l; e++) {
			let t = o[e];
			if (t.validator(s)) return t.classGroupId;
		}
	}, l = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
		let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
		return r ? o + r : void 0;
	})(), u = (e) => {
		let { theme: t, classGroups: n } = e;
		return d(n, t);
	}, d = (e, t) => {
		let n = r();
		for (let r in e) {
			let i = e[r];
			f(i, n, r, t);
		}
		return n;
	}, f = (e, t, n, r) => {
		let i = e.length;
		for (let a = 0; a < i; a++) {
			let i = e[a];
			p(i, t, n, r);
		}
	}, p = (e, t, n, r) => {
		if (typeof e == "string") {
			m(e, t, n);
			return;
		}
		if (typeof e == "function") {
			h(e, t, n, r);
			return;
		}
		g(e, t, n, r);
	}, m = (e, t, n) => {
		let r = e === "" ? t : _(t, e);
		r.classGroupId = n;
	}, h = (e, t, r, i) => {
		if (v(e)) {
			f(e(i), t, r, i);
			return;
		}
		t.validators === null && (t.validators = []), t.validators.push(n(r, e));
	}, g = (e, t, n, r) => {
		let i = Object.entries(e), a = i.length;
		for (let e = 0; e < a; e++) {
			let [a, o] = i[e];
			f(o, _(t, a), n, r);
		}
	}, _ = (e, t) => {
		let n = e, a = t.split(i), o = a.length;
		for (let e = 0; e < o; e++) {
			let t = a[e], i = n.nextPart.get(t);
			i || (i = r(), n.nextPart.set(t, i)), n = i;
		}
		return n;
	}, v = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, y = (e) => {
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
	}, b = "!", x = ":", S = [], C = (e, t, n, r, i) => ({
		modifiers: e,
		hasImportantModifier: t,
		baseClassName: n,
		maybePostfixModifierPosition: r,
		isExternal: i
	}), w = (e) => {
		let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
			let t = [], n = 0, r = 0, i = 0, a, o = e.length;
			for (let s = 0; s < o; s++) {
				let o = e[s];
				if (n === 0 && r === 0) {
					if (o === x) {
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
			s.endsWith(b) ? (c = s.slice(0, -1), l = !0) : s.startsWith(b) && (c = s.slice(1), l = !0);
			let u = a && a > i ? a - i : void 0;
			return C(t, l, c, u);
		};
		if (t) {
			let e = t + x, n = r;
			r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : C(S, !1, t, void 0, !0);
		}
		if (n) {
			let e = r;
			r = (t) => n({
				className: t,
				parseClassName: e
			});
		}
		return r;
	}, T = (e) => {
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
	}, ee = (e) => ({
		cache: y(e.cacheSize),
		parseClassName: w(e),
		sortModifiers: T(e),
		...s(e)
	}), E = /\s+/, D = (e, t) => {
		let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(E), c = "";
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
			let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + b : g, v = _ + h;
			if (o.indexOf(v) > -1) continue;
			o.push(v);
			let y = i(h, m);
			for (let e = 0; e < y.length; ++e) {
				let t = y[e];
				o.push(_ + t);
			}
			c = t + (c.length > 0 ? " " + c : c);
		}
		return c;
	}, te = (...e) => {
		let t = 0, n, r, i = "";
		for (; t < e.length;) (n = e[t++]) && (r = O(n)) && (i && (i += " "), i += r);
		return i;
	}, O = (e) => {
		if (typeof e == "string") return e;
		let t, n = "";
		for (let r = 0; r < e.length; r++) e[r] && (t = O(e[r])) && (n && (n += " "), n += t);
		return n;
	}, k = (e, ...t) => {
		let n, r, i, a, o = (o) => (n = ee(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
			let t = r(e);
			if (t) return t;
			let a = D(e, n);
			return i(e, a), a;
		};
		return a = o, (...e) => a(te(...e));
	}, A = [], j = (e) => {
		let t = (t) => t[e] || A;
		return t.isThemeGetter = !0, t;
	}, M = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, N = /^\((?:(\w[\w-]*):)?(.+)\)$/i, P = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, F = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, I = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ne = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, re = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ie = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e) => P.test(e), R = (e) => !!e && !Number.isNaN(Number(e)), z = (e) => !!e && Number.isInteger(Number(e)), ae = (e) => e.endsWith("%") && R(e.slice(0, -1)), B = (e) => F.test(e), oe = () => !0, V = (e) => I.test(e) && !ne.test(e), H = () => !1, U = (e) => re.test(e), se = (e) => ie.test(e), ce = (e) => !W(e) && !q(e), le = (e) => Y(e, xe, H), W = (e) => M.test(e), G = (e) => Y(e, $, V), ue = (e) => Y(e, Se, R), de = (e) => Y(e, we, oe), fe = (e) => Y(e, Ce, H), pe = (e) => Y(e, Z, H), me = (e) => Y(e, Q, se), K = (e) => Y(e, Te, U), q = (e) => N.test(e), J = (e) => X(e, $), he = (e) => X(e, Ce), ge = (e) => X(e, Z), _e = (e) => X(e, xe), ve = (e) => X(e, Q), ye = (e) => X(e, Te, !0), be = (e) => X(e, we, !0), Y = (e, t, n) => {
		let r = M.exec(e);
		return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
	}, X = (e, t, n = !1) => {
		let r = N.exec(e);
		return r ? r[1] ? t(r[1]) : n : !1;
	}, Z = (e) => e === "position" || e === "percentage", Q = (e) => e === "image" || e === "url", xe = (e) => e === "length" || e === "size" || e === "bg-size", $ = (e) => e === "length", Se = (e) => e === "number", Ce = (e) => e === "family-name", we = (e) => e === "number" || e === "weight", Te = (e) => e === "shadow", Ee = /* @__PURE__ */ Object.defineProperty({
		__proto__: null,
		isAny: oe,
		isAnyNonArbitrary: ce,
		isArbitraryFamilyName: fe,
		isArbitraryImage: me,
		isArbitraryLength: G,
		isArbitraryNumber: ue,
		isArbitraryPosition: pe,
		isArbitraryShadow: K,
		isArbitrarySize: le,
		isArbitraryValue: W,
		isArbitraryVariable: q,
		isArbitraryVariableFamilyName: he,
		isArbitraryVariableImage: ve,
		isArbitraryVariableLength: J,
		isArbitraryVariablePosition: ge,
		isArbitraryVariableShadow: ye,
		isArbitraryVariableSize: _e,
		isArbitraryVariableWeight: be,
		isArbitraryWeight: de,
		isFraction: L,
		isInteger: z,
		isNumber: R,
		isPercent: ae,
		isTshirtSize: B
	}, Symbol.toStringTag, { value: "Module" }), De = () => {
		let e = j("color"), t = j("font"), n = j("text"), r = j("font-weight"), i = j("tracking"), a = j("leading"), o = j("breakpoint"), s = j("container"), c = j("spacing"), l = j("radius"), u = j("shadow"), d = j("inset-shadow"), f = j("text-shadow"), p = j("drop-shadow"), m = j("blur"), h = j("perspective"), g = j("aspect"), _ = j("ease"), v = j("animate"), y = () => [
			"auto",
			"avoid",
			"all",
			"avoid-page",
			"page",
			"left",
			"right",
			"column"
		], b = () => [
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
		], x = () => [
			...b(),
			q,
			W
		], S = () => [
			"auto",
			"hidden",
			"clip",
			"visible",
			"scroll"
		], C = () => [
			"auto",
			"contain",
			"none"
		], w = () => [
			q,
			W,
			c
		], T = () => [
			L,
			"full",
			"auto",
			...w()
		], ee = () => [
			z,
			"none",
			"subgrid",
			q,
			W
		], E = () => [
			"auto",
			{ span: [
				"full",
				z,
				q,
				W
			] },
			z,
			q,
			W
		], D = () => [
			z,
			"auto",
			q,
			W
		], te = () => [
			"auto",
			"min",
			"max",
			"fr",
			q,
			W
		], O = () => [
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
		], k = () => [
			"start",
			"end",
			"center",
			"stretch",
			"center-safe",
			"end-safe"
		], A = () => ["auto", ...w()], M = () => [
			L,
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
			...w()
		], N = () => [
			L,
			"screen",
			"full",
			"dvw",
			"lvw",
			"svw",
			"min",
			"max",
			"fit",
			...w()
		], P = () => [
			L,
			"screen",
			"full",
			"lh",
			"dvh",
			"lvh",
			"svh",
			"min",
			"max",
			"fit",
			...w()
		], F = () => [
			e,
			q,
			W
		], I = () => [
			...b(),
			ge,
			pe,
			{ position: [q, W] }
		], ne = () => ["no-repeat", { repeat: [
			"",
			"x",
			"y",
			"space",
			"round"
		] }], re = () => [
			"auto",
			"cover",
			"contain",
			_e,
			le,
			{ size: [q, W] }
		], ie = () => [
			ae,
			J,
			G
		], V = () => [
			"",
			"none",
			"full",
			l,
			q,
			W
		], H = () => [
			"",
			R,
			J,
			G
		], U = () => [
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
		], Y = () => [
			R,
			ae,
			ge,
			pe
		], X = () => [
			"",
			"none",
			m,
			q,
			W
		], Z = () => [
			"none",
			R,
			q,
			W
		], Q = () => [
			"none",
			R,
			q,
			W
		], xe = () => [
			R,
			q,
			W
		], $ = () => [
			L,
			"full",
			...w()
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
				blur: [B],
				breakpoint: [B],
				color: [oe],
				container: [B],
				"drop-shadow": [B],
				ease: [
					"in",
					"out",
					"in-out"
				],
				font: [ce],
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
				"inset-shadow": [B],
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
				radius: [B],
				shadow: [B],
				spacing: ["px", R],
				text: [B],
				"text-shadow": [B],
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
					L,
					W,
					q,
					g
				] }],
				container: ["container"],
				columns: [{ columns: [
					R,
					W,
					q,
					s
				] }],
				"break-after": [{ "break-after": y() }],
				"break-before": [{ "break-before": y() }],
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
				"object-position": [{ object: x() }],
				overflow: [{ overflow: S() }],
				"overflow-x": [{ "overflow-x": S() }],
				"overflow-y": [{ "overflow-y": S() }],
				overscroll: [{ overscroll: C() }],
				"overscroll-x": [{ "overscroll-x": C() }],
				"overscroll-y": [{ "overscroll-y": C() }],
				position: [
					"static",
					"fixed",
					"absolute",
					"relative",
					"sticky"
				],
				inset: [{ inset: T() }],
				"inset-x": [{ "inset-x": T() }],
				"inset-y": [{ "inset-y": T() }],
				start: [{
					"inset-s": T(),
					start: T()
				}],
				end: [{
					"inset-e": T(),
					end: T()
				}],
				"inset-bs": [{ "inset-bs": T() }],
				"inset-be": [{ "inset-be": T() }],
				top: [{ top: T() }],
				right: [{ right: T() }],
				bottom: [{ bottom: T() }],
				left: [{ left: T() }],
				visibility: [
					"visible",
					"invisible",
					"collapse"
				],
				z: [{ z: [
					z,
					"auto",
					q,
					W
				] }],
				basis: [{ basis: [
					L,
					"full",
					"auto",
					s,
					...w()
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
					R,
					L,
					"auto",
					"initial",
					"none",
					W
				] }],
				grow: [{ grow: [
					"",
					R,
					q,
					W
				] }],
				shrink: [{ shrink: [
					"",
					R,
					q,
					W
				] }],
				order: [{ order: [
					z,
					"first",
					"last",
					"none",
					q,
					W
				] }],
				"grid-cols": [{ "grid-cols": ee() }],
				"col-start-end": [{ col: E() }],
				"col-start": [{ "col-start": D() }],
				"col-end": [{ "col-end": D() }],
				"grid-rows": [{ "grid-rows": ee() }],
				"row-start-end": [{ row: E() }],
				"row-start": [{ "row-start": D() }],
				"row-end": [{ "row-end": D() }],
				"grid-flow": [{ "grid-flow": [
					"row",
					"col",
					"dense",
					"row-dense",
					"col-dense"
				] }],
				"auto-cols": [{ "auto-cols": te() }],
				"auto-rows": [{ "auto-rows": te() }],
				gap: [{ gap: w() }],
				"gap-x": [{ "gap-x": w() }],
				"gap-y": [{ "gap-y": w() }],
				"justify-content": [{ justify: [...O(), "normal"] }],
				"justify-items": [{ "justify-items": [...k(), "normal"] }],
				"justify-self": [{ "justify-self": ["auto", ...k()] }],
				"align-content": [{ content: ["normal", ...O()] }],
				"align-items": [{ items: [...k(), { baseline: ["", "last"] }] }],
				"align-self": [{ self: [
					"auto",
					...k(),
					{ baseline: ["", "last"] }
				] }],
				"place-content": [{ "place-content": O() }],
				"place-items": [{ "place-items": [...k(), "baseline"] }],
				"place-self": [{ "place-self": ["auto", ...k()] }],
				p: [{ p: w() }],
				px: [{ px: w() }],
				py: [{ py: w() }],
				ps: [{ ps: w() }],
				pe: [{ pe: w() }],
				pbs: [{ pbs: w() }],
				pbe: [{ pbe: w() }],
				pt: [{ pt: w() }],
				pr: [{ pr: w() }],
				pb: [{ pb: w() }],
				pl: [{ pl: w() }],
				m: [{ m: A() }],
				mx: [{ mx: A() }],
				my: [{ my: A() }],
				ms: [{ ms: A() }],
				me: [{ me: A() }],
				mbs: [{ mbs: A() }],
				mbe: [{ mbe: A() }],
				mt: [{ mt: A() }],
				mr: [{ mr: A() }],
				mb: [{ mb: A() }],
				ml: [{ ml: A() }],
				"space-x": [{ "space-x": w() }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": w() }],
				"space-y-reverse": ["space-y-reverse"],
				size: [{ size: M() }],
				"inline-size": [{ inline: ["auto", ...N()] }],
				"min-inline-size": [{ "min-inline": ["auto", ...N()] }],
				"max-inline-size": [{ "max-inline": ["none", ...N()] }],
				"block-size": [{ block: ["auto", ...P()] }],
				"min-block-size": [{ "min-block": ["auto", ...P()] }],
				"max-block-size": [{ "max-block": ["none", ...P()] }],
				w: [{ w: [
					s,
					"screen",
					...M()
				] }],
				"min-w": [{ "min-w": [
					s,
					"screen",
					"none",
					...M()
				] }],
				"max-w": [{ "max-w": [
					s,
					"screen",
					"none",
					"prose",
					{ screen: [o] },
					...M()
				] }],
				h: [{ h: [
					"screen",
					"lh",
					...M()
				] }],
				"min-h": [{ "min-h": [
					"screen",
					"lh",
					"none",
					...M()
				] }],
				"max-h": [{ "max-h": [
					"screen",
					"lh",
					...M()
				] }],
				"font-size": [{ text: [
					"base",
					n,
					J,
					G
				] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [{ font: [
					r,
					be,
					de
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
					ae,
					W
				] }],
				"font-family": [{ font: [
					he,
					fe,
					t
				] }],
				"font-features": [{ "font-features": [W] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [{ tracking: [
					i,
					q,
					W
				] }],
				"line-clamp": [{ "line-clamp": [
					R,
					"none",
					q,
					ue
				] }],
				leading: [{ leading: [a, ...w()] }],
				"list-image": [{ "list-image": [
					"none",
					q,
					W
				] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"list-style-type": [{ list: [
					"disc",
					"decimal",
					"none",
					q,
					W
				] }],
				"text-alignment": [{ text: [
					"left",
					"center",
					"right",
					"justify",
					"start",
					"end"
				] }],
				"placeholder-color": [{ placeholder: F() }],
				"text-color": [{ text: F() }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline"
				],
				"text-decoration-style": [{ decoration: [...U(), "wavy"] }],
				"text-decoration-thickness": [{ decoration: [
					R,
					"from-font",
					"auto",
					q,
					G
				] }],
				"text-decoration-color": [{ decoration: F() }],
				"underline-offset": [{ "underline-offset": [
					R,
					"auto",
					q,
					W
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
				indent: [{ indent: w() }],
				"vertical-align": [{ align: [
					"baseline",
					"top",
					"middle",
					"bottom",
					"text-top",
					"text-bottom",
					"sub",
					"super",
					q,
					W
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
					q,
					W
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
				"bg-position": [{ bg: I() }],
				"bg-repeat": [{ bg: ne() }],
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
							z,
							q,
							W
						],
						radial: [
							"",
							q,
							W
						],
						conic: [
							z,
							q,
							W
						]
					},
					ve,
					me
				] }],
				"bg-color": [{ bg: F() }],
				"gradient-from-pos": [{ from: ie() }],
				"gradient-via-pos": [{ via: ie() }],
				"gradient-to-pos": [{ to: ie() }],
				"gradient-from": [{ from: F() }],
				"gradient-via": [{ via: F() }],
				"gradient-to": [{ to: F() }],
				rounded: [{ rounded: V() }],
				"rounded-s": [{ "rounded-s": V() }],
				"rounded-e": [{ "rounded-e": V() }],
				"rounded-t": [{ "rounded-t": V() }],
				"rounded-r": [{ "rounded-r": V() }],
				"rounded-b": [{ "rounded-b": V() }],
				"rounded-l": [{ "rounded-l": V() }],
				"rounded-ss": [{ "rounded-ss": V() }],
				"rounded-se": [{ "rounded-se": V() }],
				"rounded-ee": [{ "rounded-ee": V() }],
				"rounded-es": [{ "rounded-es": V() }],
				"rounded-tl": [{ "rounded-tl": V() }],
				"rounded-tr": [{ "rounded-tr": V() }],
				"rounded-br": [{ "rounded-br": V() }],
				"rounded-bl": [{ "rounded-bl": V() }],
				"border-w": [{ border: H() }],
				"border-w-x": [{ "border-x": H() }],
				"border-w-y": [{ "border-y": H() }],
				"border-w-s": [{ "border-s": H() }],
				"border-w-e": [{ "border-e": H() }],
				"border-w-bs": [{ "border-bs": H() }],
				"border-w-be": [{ "border-be": H() }],
				"border-w-t": [{ "border-t": H() }],
				"border-w-r": [{ "border-r": H() }],
				"border-w-b": [{ "border-b": H() }],
				"border-w-l": [{ "border-l": H() }],
				"divide-x": [{ "divide-x": H() }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": H() }],
				"divide-y-reverse": ["divide-y-reverse"],
				"border-style": [{ border: [
					...U(),
					"hidden",
					"none"
				] }],
				"divide-style": [{ divide: [
					...U(),
					"hidden",
					"none"
				] }],
				"border-color": [{ border: F() }],
				"border-color-x": [{ "border-x": F() }],
				"border-color-y": [{ "border-y": F() }],
				"border-color-s": [{ "border-s": F() }],
				"border-color-e": [{ "border-e": F() }],
				"border-color-bs": [{ "border-bs": F() }],
				"border-color-be": [{ "border-be": F() }],
				"border-color-t": [{ "border-t": F() }],
				"border-color-r": [{ "border-r": F() }],
				"border-color-b": [{ "border-b": F() }],
				"border-color-l": [{ "border-l": F() }],
				"divide-color": [{ divide: F() }],
				"outline-style": [{ outline: [
					...U(),
					"none",
					"hidden"
				] }],
				"outline-offset": [{ "outline-offset": [
					R,
					q,
					W
				] }],
				"outline-w": [{ outline: [
					"",
					R,
					J,
					G
				] }],
				"outline-color": [{ outline: F() }],
				shadow: [{ shadow: [
					"",
					"none",
					u,
					ye,
					K
				] }],
				"shadow-color": [{ shadow: F() }],
				"inset-shadow": [{ "inset-shadow": [
					"none",
					d,
					ye,
					K
				] }],
				"inset-shadow-color": [{ "inset-shadow": F() }],
				"ring-w": [{ ring: H() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: F() }],
				"ring-offset-w": [{ "ring-offset": [R, G] }],
				"ring-offset-color": [{ "ring-offset": F() }],
				"inset-ring-w": [{ "inset-ring": H() }],
				"inset-ring-color": [{ "inset-ring": F() }],
				"text-shadow": [{ "text-shadow": [
					"none",
					f,
					ye,
					K
				] }],
				"text-shadow-color": [{ "text-shadow": F() }],
				opacity: [{ opacity: [
					R,
					q,
					W
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
				"mask-image-linear-pos": [{ "mask-linear": [R] }],
				"mask-image-linear-from-pos": [{ "mask-linear-from": Y() }],
				"mask-image-linear-to-pos": [{ "mask-linear-to": Y() }],
				"mask-image-linear-from-color": [{ "mask-linear-from": F() }],
				"mask-image-linear-to-color": [{ "mask-linear-to": F() }],
				"mask-image-t-from-pos": [{ "mask-t-from": Y() }],
				"mask-image-t-to-pos": [{ "mask-t-to": Y() }],
				"mask-image-t-from-color": [{ "mask-t-from": F() }],
				"mask-image-t-to-color": [{ "mask-t-to": F() }],
				"mask-image-r-from-pos": [{ "mask-r-from": Y() }],
				"mask-image-r-to-pos": [{ "mask-r-to": Y() }],
				"mask-image-r-from-color": [{ "mask-r-from": F() }],
				"mask-image-r-to-color": [{ "mask-r-to": F() }],
				"mask-image-b-from-pos": [{ "mask-b-from": Y() }],
				"mask-image-b-to-pos": [{ "mask-b-to": Y() }],
				"mask-image-b-from-color": [{ "mask-b-from": F() }],
				"mask-image-b-to-color": [{ "mask-b-to": F() }],
				"mask-image-l-from-pos": [{ "mask-l-from": Y() }],
				"mask-image-l-to-pos": [{ "mask-l-to": Y() }],
				"mask-image-l-from-color": [{ "mask-l-from": F() }],
				"mask-image-l-to-color": [{ "mask-l-to": F() }],
				"mask-image-x-from-pos": [{ "mask-x-from": Y() }],
				"mask-image-x-to-pos": [{ "mask-x-to": Y() }],
				"mask-image-x-from-color": [{ "mask-x-from": F() }],
				"mask-image-x-to-color": [{ "mask-x-to": F() }],
				"mask-image-y-from-pos": [{ "mask-y-from": Y() }],
				"mask-image-y-to-pos": [{ "mask-y-to": Y() }],
				"mask-image-y-from-color": [{ "mask-y-from": F() }],
				"mask-image-y-to-color": [{ "mask-y-to": F() }],
				"mask-image-radial": [{ "mask-radial": [q, W] }],
				"mask-image-radial-from-pos": [{ "mask-radial-from": Y() }],
				"mask-image-radial-to-pos": [{ "mask-radial-to": Y() }],
				"mask-image-radial-from-color": [{ "mask-radial-from": F() }],
				"mask-image-radial-to-color": [{ "mask-radial-to": F() }],
				"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
				"mask-image-radial-size": [{ "mask-radial": [{
					closest: ["side", "corner"],
					farthest: ["side", "corner"]
				}] }],
				"mask-image-radial-pos": [{ "mask-radial-at": b() }],
				"mask-image-conic-pos": [{ "mask-conic": [R] }],
				"mask-image-conic-from-pos": [{ "mask-conic-from": Y() }],
				"mask-image-conic-to-pos": [{ "mask-conic-to": Y() }],
				"mask-image-conic-from-color": [{ "mask-conic-from": F() }],
				"mask-image-conic-to-color": [{ "mask-conic-to": F() }],
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
				"mask-position": [{ mask: I() }],
				"mask-repeat": [{ mask: ne() }],
				"mask-size": [{ mask: re() }],
				"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
				"mask-image": [{ mask: [
					"none",
					q,
					W
				] }],
				filter: [{ filter: [
					"",
					"none",
					q,
					W
				] }],
				blur: [{ blur: X() }],
				brightness: [{ brightness: [
					R,
					q,
					W
				] }],
				contrast: [{ contrast: [
					R,
					q,
					W
				] }],
				"drop-shadow": [{ "drop-shadow": [
					"",
					"none",
					p,
					ye,
					K
				] }],
				"drop-shadow-color": [{ "drop-shadow": F() }],
				grayscale: [{ grayscale: [
					"",
					R,
					q,
					W
				] }],
				"hue-rotate": [{ "hue-rotate": [
					R,
					q,
					W
				] }],
				invert: [{ invert: [
					"",
					R,
					q,
					W
				] }],
				saturate: [{ saturate: [
					R,
					q,
					W
				] }],
				sepia: [{ sepia: [
					"",
					R,
					q,
					W
				] }],
				"backdrop-filter": [{ "backdrop-filter": [
					"",
					"none",
					q,
					W
				] }],
				"backdrop-blur": [{ "backdrop-blur": X() }],
				"backdrop-brightness": [{ "backdrop-brightness": [
					R,
					q,
					W
				] }],
				"backdrop-contrast": [{ "backdrop-contrast": [
					R,
					q,
					W
				] }],
				"backdrop-grayscale": [{ "backdrop-grayscale": [
					"",
					R,
					q,
					W
				] }],
				"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
					R,
					q,
					W
				] }],
				"backdrop-invert": [{ "backdrop-invert": [
					"",
					R,
					q,
					W
				] }],
				"backdrop-opacity": [{ "backdrop-opacity": [
					R,
					q,
					W
				] }],
				"backdrop-saturate": [{ "backdrop-saturate": [
					R,
					q,
					W
				] }],
				"backdrop-sepia": [{ "backdrop-sepia": [
					"",
					R,
					q,
					W
				] }],
				"border-collapse": [{ border: ["collapse", "separate"] }],
				"border-spacing": [{ "border-spacing": w() }],
				"border-spacing-x": [{ "border-spacing-x": w() }],
				"border-spacing-y": [{ "border-spacing-y": w() }],
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
					q,
					W
				] }],
				"transition-behavior": [{ transition: ["normal", "discrete"] }],
				duration: [{ duration: [
					R,
					"initial",
					q,
					W
				] }],
				ease: [{ ease: [
					"linear",
					"initial",
					_,
					q,
					W
				] }],
				delay: [{ delay: [
					R,
					q,
					W
				] }],
				animate: [{ animate: [
					"none",
					v,
					q,
					W
				] }],
				backface: [{ backface: ["hidden", "visible"] }],
				perspective: [{ perspective: [
					h,
					q,
					W
				] }],
				"perspective-origin": [{ "perspective-origin": x() }],
				rotate: [{ rotate: Z() }],
				"rotate-x": [{ "rotate-x": Z() }],
				"rotate-y": [{ "rotate-y": Z() }],
				"rotate-z": [{ "rotate-z": Z() }],
				scale: [{ scale: Q() }],
				"scale-x": [{ "scale-x": Q() }],
				"scale-y": [{ "scale-y": Q() }],
				"scale-z": [{ "scale-z": Q() }],
				"scale-3d": ["scale-3d"],
				skew: [{ skew: xe() }],
				"skew-x": [{ "skew-x": xe() }],
				"skew-y": [{ "skew-y": xe() }],
				transform: [{ transform: [
					q,
					W,
					"",
					"none",
					"gpu",
					"cpu"
				] }],
				"transform-origin": [{ origin: x() }],
				"transform-style": [{ transform: ["3d", "flat"] }],
				translate: [{ translate: $() }],
				"translate-x": [{ "translate-x": $() }],
				"translate-y": [{ "translate-y": $() }],
				"translate-z": [{ "translate-z": $() }],
				"translate-none": ["translate-none"],
				accent: [{ accent: F() }],
				appearance: [{ appearance: ["none", "auto"] }],
				"caret-color": [{ caret: F() }],
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
					q,
					W
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
				"scroll-m": [{ "scroll-m": w() }],
				"scroll-mx": [{ "scroll-mx": w() }],
				"scroll-my": [{ "scroll-my": w() }],
				"scroll-ms": [{ "scroll-ms": w() }],
				"scroll-me": [{ "scroll-me": w() }],
				"scroll-mbs": [{ "scroll-mbs": w() }],
				"scroll-mbe": [{ "scroll-mbe": w() }],
				"scroll-mt": [{ "scroll-mt": w() }],
				"scroll-mr": [{ "scroll-mr": w() }],
				"scroll-mb": [{ "scroll-mb": w() }],
				"scroll-ml": [{ "scroll-ml": w() }],
				"scroll-p": [{ "scroll-p": w() }],
				"scroll-px": [{ "scroll-px": w() }],
				"scroll-py": [{ "scroll-py": w() }],
				"scroll-ps": [{ "scroll-ps": w() }],
				"scroll-pe": [{ "scroll-pe": w() }],
				"scroll-pbs": [{ "scroll-pbs": w() }],
				"scroll-pbe": [{ "scroll-pbe": w() }],
				"scroll-pt": [{ "scroll-pt": w() }],
				"scroll-pr": [{ "scroll-pr": w() }],
				"scroll-pb": [{ "scroll-pb": w() }],
				"scroll-pl": [{ "scroll-pl": w() }],
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
					q,
					W
				] }],
				fill: [{ fill: ["none", ...F()] }],
				"stroke-w": [{ stroke: [
					R,
					J,
					G,
					ue
				] }],
				stroke: [{ stroke: ["none", ...F()] }],
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
	}, Oe = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (ke(e, "cacheSize", t), ke(e, "prefix", n), ke(e, "experimentalParseClassName", r), Ae(e.theme, a.theme), Ae(e.classGroups, a.classGroups), Ae(e.conflictingClassGroups, a.conflictingClassGroups), Ae(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ke(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), je(e.theme, i.theme), je(e.classGroups, i.classGroups), je(e.conflictingClassGroups, i.conflictingClassGroups), je(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Me(e, i, "orderSensitiveModifiers"), e), ke = (e, t, n) => {
		n !== void 0 && (e[t] = n);
	}, Ae = (e, t) => {
		if (t) for (let n in t) ke(e, n, t[n]);
	}, je = (e, t) => {
		if (t) for (let n in t) Me(e, t, n);
	}, Me = (e, t, n) => {
		let r = t[n];
		r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
	}, Ne = (e, ...t) => typeof e == "function" ? k(De, e, ...t) : k(() => Oe(De(), e), ...t), Pe = /* @__PURE__ */ k(De);
	e.createTailwindMerge = k, e.extendTailwindMerge = Ne, e.fromTheme = j, e.getDefaultConfig = De, e.mergeConfigs = Oe, e.twJoin = te, e.twMerge = Pe, e.validators = Ee;
})), S = (/* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.cn = r;
	var t = b(), n = x();
	function r() {
		var e = [...arguments];
		return (0, n.twMerge)((0, t.clsx)(e));
	}
})))(), C = s("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function w({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	return /* @__PURE__ */ (0, f.jsx)(r ? m : "button", {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: (0, S.cn)(C({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/layout/navbar.tsx
function T() {
	return /* @__PURE__ */ (0, f.jsxs)("header", {
		className: "h-14 border-b flex items-center justify-between px-6",
		children: [/* @__PURE__ */ (0, f.jsx)("h1", {
			className: "font-semibold text-lg",
			children: "Base UI"
		}), /* @__PURE__ */ (0, f.jsx)("div", {
			className: "flex items-center gap-2",
			children: /* @__PURE__ */ (0, f.jsx)(w, {
				variant: "outline",
				children: "Login"
			})
		})]
	});
}
//#endregion
//#region src/components/layout/sidebar.tsx
function ee() {
	return /* @__PURE__ */ (0, f.jsx)("aside", {
		className: "w-64 border-r h-screen p-4",
		children: /* @__PURE__ */ (0, f.jsxs)("nav", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, f.jsx)("a", {
				href: "#",
				className: (0, S.cn)("block rounded-md px-3 py-2 text-sm hover:bg-muted"),
				children: "Dashboard"
			}), /* @__PURE__ */ (0, f.jsx)("a", {
				href: "#",
				className: "block rounded-md px-3 py-2 text-sm hover:bg-muted",
				children: "Usuários"
			})]
		})
	});
}
//#endregion
export { w as Button, T as Navbar, ee as Sidebar, C as buttonVariants };
