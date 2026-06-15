/* @ds-bundle: {"format":3,"namespace":"TraceWeaveDesignSystem_c485d4","components":[{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"SectionHeader","sourcePath":"components/data/SectionHeader.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/LoadingState.jsx"},{"name":"Spinner","sourcePath":"components/feedback/LoadingState.jsx"},{"name":"LoadingState","sourcePath":"components/feedback/LoadingState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/foundation/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"FilterChips","sourcePath":"components/navigation/FilterChips.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"StickyNav","sourcePath":"components/navigation/StickyNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AuditCard","sourcePath":"components/records/AuditCard.jsx"},{"name":"CertificateCard","sourcePath":"components/records/CertificateCard.jsx"},{"name":"DocumentPreviewCard","sourcePath":"components/records/DocumentPreviewCard.jsx"},{"name":"EvidenceCard","sourcePath":"components/records/EvidenceCard.jsx"},{"name":"QRComponent","sourcePath":"components/records/QRComponent.jsx"},{"name":"CertificationBadge","sourcePath":"components/trust/CertificationBadge.jsx"},{"name":"CERT_VALIDITY","sourcePath":"components/trust/CertificationBadge.jsx"},{"name":"EvidenceBadge","sourcePath":"components/trust/EvidenceBadge.jsx"},{"name":"EVIDENCE_KINDS","sourcePath":"components/trust/EvidenceBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/trust/StatusBadge.jsx"},{"name":"STATUS_TYPES","sourcePath":"components/trust/StatusBadge.jsx"},{"name":"TrustIndicator","sourcePath":"components/trust/TrustIndicator.jsx"},{"name":"TRUST_LEVELS","sourcePath":"components/trust/TrustIndicator.jsx"}],"sourceHashes":{"components/data/Accordion.jsx":"dc2d45ce1e8d","components/data/Card.jsx":"1d1b0307dc0b","components/data/MetricCard.jsx":"c8278600551c","components/data/SectionHeader.jsx":"1e247e9a978a","components/data/Table.jsx":"8f3bdcb6ad6f","components/data/Timeline.jsx":"606b04ac7bcb","components/feedback/Drawer.jsx":"092ba6d04c1d","components/feedback/EmptyState.jsx":"77bd2edcf5fb","components/feedback/ErrorState.jsx":"ebee6c609f93","components/feedback/LoadingState.jsx":"c454a426070f","components/feedback/Modal.jsx":"7e1d136714a5","components/feedback/Tooltip.jsx":"d983bdd6d1e3","components/forms/Button.jsx":"f8b0cf4d6d49","components/forms/Field.jsx":"a6d92fd7d6b2","components/forms/IconButton.jsx":"0a526d6a0bf2","components/forms/Input.jsx":"1370dbb84b0b","components/forms/SearchField.jsx":"7d2c2313263f","components/forms/Select.jsx":"3d5e69618102","components/foundation/Icon.jsx":"49e34aa56462","components/navigation/Breadcrumb.jsx":"79a7b45ad913","components/navigation/FilterChips.jsx":"0654ba5a2af6","components/navigation/Pagination.jsx":"bc2ee1af1c6e","components/navigation/StickyNav.jsx":"8a526d89d93d","components/navigation/Tabs.jsx":"6b644ba5a1de","components/records/AuditCard.jsx":"6c5a1024806d","components/records/CertificateCard.jsx":"fb0c6e3e1a8d","components/records/DocumentPreviewCard.jsx":"976ab13b80c6","components/records/EvidenceCard.jsx":"824d07dae183","components/records/QRComponent.jsx":"d8cdbc951a53","components/trust/CertificationBadge.jsx":"3a93e01ed074","components/trust/EvidenceBadge.jsx":"f9d300974181","components/trust/StatusBadge.jsx":"264aeb5b4909","components/trust/TrustIndicator.jsx":"3a50fea1e513"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TraceWeaveDesignSystem_c485d4 = window.TraceWeaveDesignSystem_c485d4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base container. Border-first, minimal shadow. Optional
 * interactive lift. Compose richer cards (Metric, Evidence…) on top.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  as = 'div',
  className,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  }[padding] ?? 'var(--space-5)';
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      display: 'block',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: pad,
      boxShadow: 'var(--shadow-xs)',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'box-shadow var(--motion-base) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard), transform var(--motion-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — an editorial block divider. Eyebrow label, title,
 * optional description and a trailing actions slot. Sets vertical rhythm.
 */
function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  level = 2,
  divider = false,
  className,
  style,
  ...rest
}) {
  const Title = `h${level}`;
  const titleSize = level <= 1 ? 'var(--type-h1-size)' : level === 2 ? 'var(--type-h2-size)' : 'var(--type-h3-size)';
  const titleLh = level <= 1 ? 'var(--type-h1-lh)' : level === 2 ? 'var(--type-h2-lh)' : 'var(--type-h3-lh)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      paddingBottom: divider ? 'var(--space-4)' : 0,
      borderBottom: divider ? '1px solid var(--divider)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Title, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: titleSize,
      lineHeight: titleLh,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '64ch'
    }
  }, description)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, actions));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LoadingState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton + Spinner — loading states. Prefer skeletons that match the
 * shape of incoming content; reserve the spinner for inline/button waits.
 * Calm shimmer, no flashy pulse.
 */
function Skeleton({
  width = '100%',
  height = 14,
  radius = 'var(--radius-xs)',
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-hidden": "true",
    style: {
      display: 'block',
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg, var(--neutral-100) 25%, var(--neutral-200) 37%, var(--neutral-100) 63%)',
      backgroundSize: '400% 100%',
      animation: 'tw-shimmer 1.4s ease-in-out infinite',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes tw-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}@media (prefers-reduced-motion: reduce){span{animation:none!important}}`));
}
function Spinner({
  size = 18,
  stroke = 2,
  className,
  style,
  label = 'Loading',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: className,
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: 'tw-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "var(--neutral-200)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "var(--action)",
    strokeWidth: stroke,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes tw-spin{to{transform:rotate(360deg)}}`));
}

/** LoadingState — a centred spinner + message for full-panel waits. */
function LoadingState({
  message = 'Loading…',
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 'var(--space-9)',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Spinner, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, message));
}
Object.assign(__ds_scope, { Skeleton, Spinner, LoadingState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LoadingState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef
} = React;
/**
 * Tooltip — a small, quiet hint on hover/focus. For definitions, full
 * values, and explaining trust/status icons. Dark surface, fast fade.
 */
function Tooltip({
  content,
  children,
  side = 'top',
  delay = 120,
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 60,
      padding: '6px 9px',
      maxWidth: 240,
      width: 'max-content',
      background: 'var(--neutral-900)',
      color: 'var(--neutral-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.4,
      fontWeight: 400,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      transform: `${pos.transform} translateY(${open ? '0' : side === 'top' ? '2px' : '-2px'})`,
      transition: 'opacity var(--motion-fast) var(--ease-standard), transform var(--motion-fast) var(--ease-standard), visibility var(--motion-fast)',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — the label / helper / error wrapper for any form control.
 * Keeps every form row consistent: label on top, control, then either a
 * helper hint or an error message (never both).
 */
function Field({
  label,
  htmlFor,
  required = false,
  optional = false,
  helper,
  error,
  children,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--critical-fg)',
      fontWeight: 500
    }
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: 400,
      fontSize: 12
    }
  }, "Optional")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--critical-fg)',
      lineHeight: 1.4
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TraceWeave icon set — a curated subset of Lucide geometry on a 24px grid,
 * drawn with a refined 1.75 stroke. Technical, never illustrative.
 * Add new glyphs to PATHS only; keep the visual language consistent.
 */

const PATHS = {
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  'chevron-down': /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  'chevron-up': /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }),
  'chevron-right': /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  'chevron-left': /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })),
  'shield-check': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  'badge-check': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  'alert-triangle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  'alert-circle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h.01"
  })),
  circle: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }),
  'dot-filled': /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }),
  ban: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.9 4.9 14.2 14.2"
  })),
  'file-text': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9H8"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3"
  })),
  'external-link': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 21 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  })),
  'qr-code': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21v-1"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  filter: /*#__PURE__*/React.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  })),
  building: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18h4"
  })),
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  'more-horizontal': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  })),
  copy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
  })),
  eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  archive: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "5",
    x: "2",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12h4"
  })),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
  })),
  droplet: /*#__PURE__*/React.createElement("path", {
    d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
  }),
  link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  })),
  history: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l4 2"
  })),
  'pen-line': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
  }))
};

/**
 * Icon — a single SVG glyph from the TraceWeave set.
 * Inherits colour via `currentColor`; size in px.
 */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  className,
  style,
  label,
  ...rest
}) {
  const glyph = PATHS[name];
  const a11y = label ? {
    role: 'img',
    'aria-label': label
  } : {
    'aria-hidden': true
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, a11y, rest), glyph || PATHS.circle);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Accordion — progressive disclosure for dense passport sections.
 * Quiet rows, chevron affordance, smooth height reveal. Controlled or
 * uncontrolled; `multiple` allows several panels open at once.
 */
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = false,
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(() => new Set(defaultOpen));
  const toggle = id => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(id)) next.delete(id);else next.add(id);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(it.id ?? i);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id ?? i,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(it.id ?? i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '14px 16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background-color var(--motion-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--surface-sunken)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 16,
      style: {
        color: 'var(--text-muted)',
        transform: isOpen ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--motion-base) var(--ease-standard)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, it.title), it.aside && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0
      }
    }, it.aside)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--motion-slow) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 16px 16px 44px',
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetricCard — a single key figure with label, optional trend and trust
 * level. The number is the protagonist; everything else supports it.
 */
const TREND = {
  up: {
    icon: 'arrow-up-right',
    color: 'var(--verified-fg)'
  },
  down: {
    icon: 'arrow-up-right',
    color: 'var(--critical-fg)',
    flip: true
  },
  flat: {
    icon: 'arrow-right',
    color: 'var(--text-muted)'
  }
};
function MetricCard({
  label,
  value,
  unit,
  trend,
  trendLabel,
  trust,
  icon,
  className,
  style,
  ...rest
}) {
  const T = trend ? TREND[trend] : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, unit)), (T || trust) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 18
    }
  }, T && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 600,
      color: T.color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: T.icon,
    size: 14,
    style: {
      transform: T.flip ? 'rotate(90deg)' : undefined
    }
  }), trendLabel), trust));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — the data workhorse. Quiet hairlines, generous row height,
 * mono for data values via column align/mono flags. Cells accept any
 * node, so TrustIndicator / StatusBadge drop straight in.
 *
 * columns: [{ key, header, align, mono, width, sortable }]
 * rows: array of objects keyed by column.key; each row may set `_href`.
 */
function Table({
  columns = [],
  rows = [],
  sort,
  onSort,
  rowKey = 'id',
  onRowClick,
  zebra = false,
  density = 'comfortable',
  empty,
  className,
  style,
  ...rest
}) {
  const padY = density === 'compact' ? 8 : 12;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: className,
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, columns.map(c => {
    const isSorted = sort && sort.key === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      style: {
        textAlign: c.align || 'left',
        padding: `10px 16px`,
        borderBottom: '1px solid var(--border-subtle)',
        width: c.width,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !c.sortable,
      onClick: () => c.sortable && onSort && onSort(c.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: c.sortable ? 'pointer' : 'default',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        flexDirection: c.align === 'right' ? 'row-reverse' : 'row'
      }
    }, c.header, c.sortable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isSorted ? sort.dir === 'asc' ? 'chevron-up' : 'chevron-down' : 'chevron-down',
      size: 13,
      style: {
        opacity: isSorted ? 1 : 0.3
      }
    })));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: 'var(--space-8)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, empty || 'No records')) : rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i,
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    style: {
      background: zebra && i % 2 ? 'var(--surface-sunken)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color var(--motion-fast) var(--ease-standard)'
    },
    onMouseEnter: onRowClick ? e => {
      e.currentTarget.style.background = 'var(--neutral-50)';
    } : undefined,
    onMouseLeave: onRowClick ? e => {
      e.currentTarget.style.background = zebra && i % 2 ? 'var(--surface-sunken)' : 'transparent';
    } : undefined
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: `${padY}px 16px`,
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
      fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: c.mono ? 13 : 14,
      fontFeatureSettings: c.mono ? "'zero' 1" : undefined,
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : undefined,
      color: c.strong ? 'var(--text-strong)' : 'var(--text-body)',
      fontWeight: c.strong ? 600 : 400,
      whiteSpace: c.wrap ? 'normal' : 'nowrap'
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Timeline — chronological trace of events along a supply chain or a
 * record's history. Each node can carry a trust level and metadata.
 *
 * items: [{ title, meta, description, icon, level, trust, content }]
 *   level: 'verified'|'declared'|'pending'|'muted' tints the node marker
 */
const NODE = {
  verified: 'var(--verified-fg)',
  declared: 'var(--declared-fg)',
  pending: 'var(--pending-fg)',
  muted: 'var(--neutral-400)'
};
function Timeline({
  items = [],
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: className,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const color = NODE[it.level] || NODE.declared;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '24px 1fr',
        columnGap: 14,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: 'var(--radius-full)',
        background: 'var(--surface-card)',
        border: `2px solid ${color}`,
        color,
        flexShrink: 0,
        marginTop: 1
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 13
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: color
      }
    })), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: 'var(--border-default)',
        minHeight: 14,
        marginTop: 2
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)',
        fontFeatureSettings: "'zero' 1"
      }
    }, it.meta)), it.description && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '3px 0 0',
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--text-muted)'
      }
    }, it.description), (it.trust || it.content) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, it.trust, it.content)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Drawer — a side panel for detail views and longer flows (inspecting a
 * supplier, editing a claim) without losing the underlying context.
 */
function Drawer({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  side = 'right',
  width = 460,
  className,
  style,
  ...rest
}) {
  if (!open) return null;
  const enter = side === 'right' ? 'tw-drawer-r' : 'tw-drawer-l';
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      animation: 'tw-fade var(--motion-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      [side]: 0,
      width: '100%',
      maxWidth: width,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderLeft: side === 'right' ? '1px solid var(--border-subtle)' : 'none',
      borderRight: side === 'left' ? '1px solid var(--border-subtle)' : 'none',
      boxShadow: 'var(--shadow-lg)',
      animation: `${enter} var(--motion-slow) var(--ease-out)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '18px 20px',
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h3-size)',
      lineHeight: 'var(--type-h3-lh)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      padding: 6,
      margin: -6,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '18px 20px',
      overflowY: 'auto',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '14px 20px',
      borderTop: '1px solid var(--divider)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes tw-fade{from{opacity:0}to{opacity:1}}@keyframes tw-drawer-r{from{transform:translateX(16px);opacity:.6}to{transform:none;opacity:1}}@keyframes tw-drawer-l{from{transform:translateX(-16px);opacity:.6}to{transform:none;opacity:1}}`));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EmptyState — a calm, helpful placeholder when there's nothing yet.
 * Never a dead end: explain why, offer the next step.
 */
function EmptyState({
  icon = 'file-text',
  title,
  description,
  action,
  variant = 'panel',
  className,
  style,
  ...rest
}) {
  const bordered = variant === 'panel';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 6,
      padding: 'var(--space-9) var(--space-6)',
      background: bordered ? 'var(--surface-card)' : 'transparent',
      border: bordered ? '1px dashed var(--border-default)' : 'none',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-subtle)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '42ch'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ErrorState — a composed, non-alarmist error block. Clay accent, plain
 * language, a way forward (retry / contact). Never blames the user.
 */
function ErrorState({
  title = 'Something didn’t load',
  description = 'We couldn’t fetch this just now. You can try again.',
  action,
  code,
  variant = 'panel',
  className,
  style,
  ...rest
}) {
  const bordered = variant === 'panel';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 6,
      padding: 'var(--space-9) var(--space-6)',
      background: bordered ? 'var(--surface-card)' : 'transparent',
      border: bordered ? '1px solid var(--border-subtle)' : 'none',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      background: 'var(--critical-bg)',
      color: 'var(--critical-fg)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-triangle",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action), code && /*#__PURE__*/React.createElement("code", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, code));
}
Object.assign(__ds_scope, { ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — a focused, centred dialog for confirmations and short tasks.
 * Scrim + calm scale-in. Keep content brief; long flows belong in Drawer.
 */
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  className,
  style,
  ...rest
}) {
  if (!open) return null;
  const width = {
    sm: 400,
    md: 520,
    lg: 680
  }[size] || 520;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      animation: 'tw-fade var(--motion-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'tw-modal var(--motion-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h3-size)',
      lineHeight: 'var(--type-h3-lh)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      padding: 6,
      margin: -6,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      overflowY: 'auto',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '14px 22px',
      borderTop: '1px solid var(--divider)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes tw-fade{from{opacity:0}to{opacity:1}}@keyframes tw-modal{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive.
 * Calm, precise, never shouty. Four variants, three sizes.
 *
 *   primary   — the one key action on a view (petrol fill)
 *   secondary — common actions (bordered, neutral)
 *   ghost     — low-emphasis, toolbar/inline actions
 *   danger    — destructive, used sparingly (clay, not alarm red)
 */

const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    font: 13,
    padX: 12,
    gap: 6,
    icon: 15
  },
  md: {
    h: 'var(--control-height-md)',
    font: 14,
    padX: 16,
    gap: 7,
    icon: 16
  },
  lg: {
    h: 'var(--control-height-lg)',
    font: 15,
    padX: 20,
    gap: 8,
    icon: 18
  }
};
const VARIANTS = {
  primary: {
    '--bg': 'var(--action)',
    '--bgh': 'var(--action-hover)',
    '--bga': 'var(--action-active)',
    '--fg': 'var(--text-on-brand)',
    '--bd': 'transparent'
  },
  secondary: {
    '--bg': 'var(--surface-card)',
    '--bgh': 'var(--neutral-50)',
    '--bga': 'var(--neutral-100)',
    '--fg': 'var(--text-strong)',
    '--bd': 'var(--border-default)'
  },
  ghost: {
    '--bg': 'transparent',
    '--bgh': 'var(--neutral-100)',
    '--bga': 'var(--neutral-200)',
    '--fg': 'var(--text-body)',
    '--bd': 'transparent'
  },
  danger: {
    '--bg': 'var(--surface-card)',
    '--bgh': 'var(--critical-bg)',
    '--bga': 'var(--critical-bg)',
    '--fg': 'var(--critical-fg)',
    '--bd': 'var(--critical-border)'
  }
};
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className,
  style,
  ...rest
}) {
  const S = SIZES[size] || SIZES.md;
  const V = VARIANTS[variant] || VARIANTS.secondary;
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    className: className,
    style: {
      ...V,
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: `${S.gap}px`,
      height: S.h,
      padding: `0 ${S.padX}px`,
      fontFamily: 'var(--font-sans)',
      fontSize: `${S.font}px`,
      fontWeight: 600,
      lineHeight: 1,
      color: 'var(--fg)',
      background: 'var(--bg)',
      border: '1px solid var(--bd)',
      borderRadius: 'var(--radius-sm)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'background-color var(--motion-fast) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard), color var(--motion-fast) var(--ease-standard)',
      ...style
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.background = 'var(--bga)';
    },
    onMouseUp: e => {
      if (!isDisabled) e.currentTarget.style.background = 'var(--bgh)';
    },
    onMouseEnter: e => {
      if (!isDisabled) e.currentTarget.style.background = 'var(--bgh)';
    },
    onMouseLeave: e => {
      if (!isDisabled) e.currentTarget.style.background = 'var(--bg)';
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle",
    size: S.icon,
    style: {
      animation: 'tw-spin 0.7s linear infinite',
      opacity: 0.7
    }
  }) : iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: S.icon
  }), children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: S.icon
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes tw-spin { to { transform: rotate(360deg); } }`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IconButton — a square, icon-only action for toolbars and dense rows. */

const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 18
  },
  lg: {
    box: 48,
    icon: 20
  }
};
const VARIANTS = {
  secondary: {
    bg: 'var(--surface-card)',
    bgh: 'var(--neutral-50)',
    fg: 'var(--text-body)',
    bd: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    bgh: 'var(--neutral-100)',
    fg: 'var(--text-muted)',
    bd: 'transparent'
  },
  primary: {
    bg: 'var(--action)',
    bgh: 'var(--action-hover)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent'
  }
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className,
  style,
  ...rest
}) {
  const S = SIZES[size] || SIZES.md;
  const V = VARIANTS[variant] || VARIANTS.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: S.box,
      height: S.box,
      padding: 0,
      color: V.fg,
      background: V.bg,
      border: `1px solid ${V.bd}`,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-color)',
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = V.bgh;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = V.bg;
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: S.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a single-line text field. Label, helper and error states live
 * in the Field wrapper; this is the control itself. Mono variant for codes.
 */

const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    font: 13,
    padX: 10
  },
  md: {
    h: 'var(--control-height-md)',
    font: 14,
    padX: 12
  },
  lg: {
    h: 'var(--control-height-lg)',
    font: 15,
    padX: 14
  }
};
function Input({
  size = 'md',
  iconLeft,
  iconRight,
  invalid = false,
  disabled = false,
  mono = false,
  prefix,
  className,
  style,
  ...rest
}) {
  const S = SIZES[size] || SIZES.md;
  const border = invalid ? 'var(--critical-border)' : 'var(--border-default)';
  const field = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    className: className,
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: `0 ${iconRight ? 4 : S.padX}px 0 ${iconLeft || prefix ? 4 : S.padX}px`,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: `${S.font}px`,
      color: 'var(--text-strong)',
      fontFeatureSettings: mono ? "'zero' 1" : undefined,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height: S.h,
      paddingLeft: iconLeft || prefix ? S.padX : 0,
      paddingRight: iconRight ? S.padX : 0,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      opacity: disabled ? 0.6 : 1,
      transition: 'var(--transition-color), box-shadow var(--motion-fast) var(--ease-standard)'
    },
    onFocusCapture: e => {
      if (!invalid) {
        e.currentTarget.style.borderColor = 'var(--focus-ring)';
        e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-halo)';
      }
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = border;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: S.font - 1,
      color: 'var(--text-subtle)'
    }
  }, prefix), field, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchField — a search input with leading magnifier and a clear button.
 * The primary way Sustainability Managers find records fast.
 */

const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    font: 13
  },
  md: {
    h: 'var(--control-height-md)',
    font: 14
  },
  lg: {
    h: 'var(--control-height-lg)',
    font: 15
  }
};
function SearchField({
  value,
  onChange,
  onClear,
  placeholder = 'Search…',
  size = 'md',
  shortcut,
  className,
  style,
  ...rest
}) {
  const S = SIZES[size] || SIZES.md;
  const hasValue = value != null && value !== '';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      height: S.h,
      padding: '0 10px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-color), box-shadow var(--motion-fast) var(--ease-standard)'
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--focus-ring)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-halo)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16,
    style: {
      color: 'var(--text-subtle)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    className: className,
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: `${S.font}px`,
      color: 'var(--text-strong)',
      ...style
    }
  }, rest)), hasValue ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: onClear,
    style: {
      display: 'inline-flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })) : shortcut ? /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xs)',
      padding: '1px 5px'
    }
  }, shortcut) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — a styled native select for short, known option lists.
 * Native on purpose: accessible, keyboard-friendly, mobile-correct.
 */

const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    font: 13,
    padX: 10
  },
  md: {
    h: 'var(--control-height-md)',
    font: 14,
    padX: 12
  },
  lg: {
    h: 'var(--control-height-lg)',
    font: 15,
    padX: 14
  }
};
function Select({
  options = [],
  value,
  onChange,
  placeholder,
  size = 'md',
  invalid = false,
  disabled = false,
  className,
  style,
  ...rest
}) {
  const S = SIZES[size] || SIZES.md;
  const border = invalid ? 'var(--critical-border)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      height: S.h,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      opacity: disabled ? 0.6 : 1,
      transition: 'var(--transition-color)'
    },
    onFocusCapture: e => {
      if (!invalid) e.currentTarget.style.borderColor = 'var(--focus-ring)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = border;
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    className: className,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '100%',
      height: '100%',
      padding: `0 ${S.padX + 22}px 0 ${S.padX}px`,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: `${S.font}px`,
      color: value === '' || value == null ? 'var(--text-subtle)' : 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      disabled: opt.disabled
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: S.padX,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — shows the user's place in the passport hierarchy and lets
 * them step back. Quiet by default, current page in strong text.
 */
function Breadcrumb({
  items = [],
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, it.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none',
        padding: '2px 4px',
        borderRadius: 'var(--radius-xs)',
        transition: 'var(--transition-color)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-strong)';
        e.currentTarget.style.background = 'var(--neutral-100)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.background = 'transparent';
      }
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: last ? 600 : 400,
        padding: '2px 4px'
      },
      "aria-current": last ? 'page' : undefined
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        color: 'var(--text-subtle)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterChips.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FilterChips — removable active filters, plus an optional "Clear all". */
function FilterChips({
  chips = [],
  onRemove,
  onClear,
  className,
  style,
  ...rest
}) {
  if (!chips.length) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      ...style
    }
  }, rest), chips.map(c => {
    const chip = typeof c === 'string' ? {
      id: c,
      label: c
    } : c;
    return /*#__PURE__*/React.createElement("span", {
      key: chip.id,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 6px 4px 10px',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xs)',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, chip.field && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)'
      }
    }, chip.field, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--text-strong)'
      }
    }, chip.label), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": `Remove ${chip.label}`,
      onClick: () => onRemove && onRemove(chip.id),
      style: {
        display: 'inline-flex',
        padding: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--text-subtle)',
        borderRadius: 'var(--radius-xs)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-strong)';
        e.currentTarget.style.background = 'var(--neutral-100)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-subtle)';
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x",
      size: 14
    })));
  }), onClear && chips.length > 1 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-link)',
      padding: '4px 6px'
    }
  }, "Clear all"));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pagination — page navigation for tables and lists, with result range. */
function pages(current, total) {
  const out = [];
  const push = v => out.push(v);
  if (total <= 7) {
    for (let i = 1; i <= total; i++) push(i);
    return out;
  }
  push(1);
  if (current > 3) push('…');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) push(i);
  if (current < total - 2) push('…');
  push(total);
  return out;
}
function Pagination({
  page = 1,
  pageCount = 1,
  total,
  pageSize,
  onPageChange,
  className,
  style,
  ...rest
}) {
  const list = pages(page, pageCount);
  const from = total != null && pageSize ? (page - 1) * pageSize + 1 : null;
  const to = total != null && pageSize ? Math.min(page * pageSize, total) : null;
  const navBtn = (disabled, onClick, icon, label) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      ...style
    }
  }, rest), from != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-body)'
    }
  }, from, "\u2013", to), " of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-body)'
    }
  }, total)) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, navBtn(page <= 1, () => onPageChange && onPageChange(page - 1), 'chevron-left', 'Previous page'), list.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      width: 28,
      textAlign: 'center',
      color: 'var(--text-subtle)',
      fontSize: 13
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => onPageChange && onPageChange(p),
    "aria-current": p === page ? 'page' : undefined,
    style: {
      minWidth: 32,
      height: 32,
      padding: '0 6px',
      border: `1px solid ${p === page ? 'var(--action)' : 'transparent'}`,
      borderRadius: 'var(--radius-sm)',
      background: p === page ? 'var(--action-subtle)' : 'transparent',
      color: p === page ? 'var(--action)' : 'var(--text-body)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: p === page ? 600 : 400,
      cursor: 'pointer',
      transition: 'var(--transition-color)'
    }
  }, p)), navBtn(page >= pageCount, () => onPageChange && onPageChange(page + 1), 'chevron-right', 'Next page')));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StickyNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickyNav — a sub-navigation rail that pins within a long passport view
 * and highlights the active section. Quiet left-border indicator.
 */
function StickyNav({
  items = [],
  active,
  onSelect,
  title,
  top = 'var(--space-7)',
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: className,
    style: {
      position: 'sticky',
      top,
      alignSelf: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 180,
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "tw-label",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      padding: '0 12px 8px'
    }
  }, title), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || `#${it.id}`,
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(it.id);
        }
      },
      "aria-current": on ? 'true' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: '7px 12px',
        borderRadius: 'var(--radius-sm)',
        borderLeft: `2px solid ${on ? 'var(--action)' : 'transparent'}`,
        background: on ? 'var(--action-subtle)' : 'transparent',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        fontSize: 14,
        fontWeight: on ? 600 : 400,
        textDecoration: 'none',
        transition: 'var(--transition-color)'
      },
      onMouseEnter: e => {
        if (!on) {
          e.currentTarget.style.background = 'var(--neutral-100)';
          e.currentTarget.style.color = 'var(--text-body)';
        }
      },
      onMouseLeave: e => {
        if (!on) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--text-muted)';
        }
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), it.meta != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-subtle)'
      }
    }, it.meta));
  }));
}
Object.assign(__ds_scope, { StickyNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StickyNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — section switching within a view. Underline style by default
 * (editorial, quiet); 'enclosed' for segmented controls.
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  size = 'md',
  className,
  style,
  ...rest
}) {
  const font = size === 'sm' ? 13 : 14;
  const padY = size === 'sm' ? 8 : 10;
  if (variant === 'enclosed') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "tablist",
      className: className,
      style: {
        display: 'inline-flex',
        gap: 2,
        padding: 3,
        background: 'var(--surface-sunken)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        ...style
      }
    }, rest), items.map(it => {
      const active = it.value === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        role: "tab",
        "aria-selected": active,
        onClick: () => onChange && onChange(it.value),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: `6px 12px`,
          border: 'none',
          borderRadius: 'var(--radius-xs)',
          fontFamily: 'var(--font-sans)',
          fontSize: font,
          fontWeight: 600,
          color: active ? 'var(--text-strong)' : 'var(--text-muted)',
          background: active ? 'var(--surface-card)' : 'transparent',
          boxShadow: active ? 'var(--shadow-xs)' : 'none',
          cursor: 'pointer',
          transition: 'var(--transition-color)'
        }
      }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: it.icon,
        size: 15
      }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-subtle)'
        }
      }, it.count));
    }));
  }

  // underline
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: className,
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--divider)',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: `${padY}px 12px`,
        marginBottom: -1,
        border: 'none',
        background: 'transparent',
        borderBottom: `2px solid ${active ? 'var(--action)' : 'transparent'}`,
        fontFamily: 'var(--font-sans)',
        fontSize: font,
        fontWeight: 600,
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-color)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: active ? 'var(--action)' : 'var(--text-subtle)',
        background: active ? 'var(--action-subtle)' : 'var(--surface-sunken)',
        borderRadius: 'var(--radius-xs)',
        padding: '0 5px'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/records/QRComponent.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * QRComponent — the public entry point to a passport. Renders a calm,
 * brand-tinted QR-style matrix to canvas (deterministic from `value`) with
 * an optional caption and copy/download actions.
 *
 * NOTE: this draws a representative matrix for layout/preview, not a
 * scannable code. Swap the draw() body for a real QR encoder in production.
 */
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function QRComponent({
  value = 'https://dpp.traceweave.eu/',
  size = 132,
  caption,
  label = 'Scan to open passport',
  dark = 'var(--brand-800)',
  onCopy,
  onDownload,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const N = 25; // modules per side
    const quiet = 2;
    const total = N + quiet * 2;
    cv.width = size * dpr;
    cv.height = size * dpr;
    const ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    const cell = size / total;
    const fg = getComputedStyle(cv).getPropertyValue('--qr-dark').trim() || '#123433';
    ctx.clearRect(0, 0, size, size);
    const grid = [];
    let seed = hash(value);
    const rand = () => {
      seed = seed * 1664525 + 1013904223 >>> 0;
      return seed / 4294967296;
    };
    for (let r = 0; r < N; r++) {
      grid[r] = [];
      for (let c = 0; c < N; c++) grid[r][c] = rand() > 0.5;
    }
    const isFinder = (r, c) => r < 7 && c < 7 || r < 7 && c >= N - 7 || r >= N - 7 && c < 7;
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (isFinder(r, c)) grid[r][c] = false;
    ctx.fillStyle = fg;
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!grid[r][c]) continue;
        const x = (c + quiet) * cell,
          y = (r + quiet) * cell;
        ctx.beginPath();
        ctx.roundRect(x + cell * 0.12, y + cell * 0.12, cell * 0.76, cell * 0.76, cell * 0.22);
        ctx.fill();
      }
    }

    // finder eyes
    const eye = (gr, gc) => {
      const x = (gc + quiet) * cell,
        y = (gr + quiet) * cell,
        s = 7 * cell;
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.roundRect(x, y, s, s, cell * 1.1);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.roundRect(x + cell, y + cell, s - 2 * cell, s - 2 * cell, cell * 0.8);
      ctx.fill();
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.roundRect(x + 2 * cell, y + 2 * cell, s - 4 * cell, s - 4 * cell, cell * 0.5);
      ctx.fill();
    };
    eye(0, 0);
    eye(0, N - 7);
    eye(N - 7, 0);
  }, [value, size, dark]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      '--qr-dark': dark,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      display: 'block'
    },
    role: "img",
    "aria-label": label
  }), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textAlign: 'center',
      fontFeatureSettings: "'zero' 1",
      maxWidth: size + 24,
      wordBreak: 'break-all'
    }
  }, caption), (onCopy || onDownload) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, onCopy && /*#__PURE__*/React.createElement(QRBtn, {
    icon: "copy",
    label: "Copy link",
    onClick: onCopy
  }), onDownload && /*#__PURE__*/React.createElement(QRBtn, {
    icon: "download",
    label: "Download",
    onClick: onDownload
  })));
}
function QRBtn({
  icon,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 28,
      padding: '0 10px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), label);
}
Object.assign(__ds_scope, { QRComponent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/QRComponent.jsx", error: String((e && e.message) || e) }); }

// components/trust/CertificationBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CertificationBadge — represents a named certification or standard
 * (GOTS, OEKO-TEX, GRS, …) with its validity state. Reads as a small
 * credential chip; the standard's initials sit in a mono monogram so
 * the component never needs to ship third-party logos.
 */

const VALIDITY = {
  valid: {
    icon: 'badge-check',
    fg: 'var(--verified-fg)',
    bg: 'var(--verified-bg)',
    border: 'var(--verified-border)',
    note: 'Valid'
  },
  expiring: {
    icon: 'clock',
    fg: 'var(--pending-fg)',
    bg: 'var(--pending-bg)',
    border: 'var(--pending-border)',
    note: 'Expiring soon'
  },
  expired: {
    icon: 'alert-circle',
    fg: 'var(--critical-fg)',
    bg: 'var(--critical-bg)',
    border: 'var(--critical-border)',
    note: 'Expired'
  },
  pending: {
    icon: 'clock',
    fg: 'var(--declared-fg)',
    bg: 'var(--declared-bg)',
    border: 'var(--declared-border)',
    note: 'Awaiting renewal'
  }
};

/**
 * CertificationBadge
 * @param {string} standard — short name, e.g. "GOTS", "OEKO-TEX"
 * @param {string} monogram — 2–4 char monogram (defaults to first letters of standard)
 * @param {keyof VALIDITY} validity
 * @param {string} scope — what it certifies, e.g. "Organic cotton"
 * @param {string} reference — certificate number (mono)
 * @param {string} expires — human date string
 * @param {'chip'|'row'} variant — compact chip, or a fuller row with scope/ref
 */
function CertificationBadge({
  standard = 'STD',
  monogram,
  validity = 'valid',
  scope,
  reference,
  expires,
  variant = 'chip',
  href,
  className,
  style,
  ...rest
}) {
  const V = VALIDITY[validity] || VALIDITY.valid;
  const mono = (monogram || standard.replace(/[^A-Za-z0-9]/g, '').slice(0, 4)).toUpperCase();
  const Tag = href ? 'a' : 'div';
  const monogramEl = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: V.fg,
      background: V.bg,
      border: `1px solid ${V.border}`,
      borderRadius: 'var(--radius-xs)',
      flexShrink: 0
    }
  }, mono);
  if (variant === 'row') {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      href: href,
      className: className,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'var(--transition-color)',
        ...style
      }
    }, rest), React.cloneElement(monogramEl, {
      style: {
        ...monogramEl.props.style,
        width: 40,
        height: 40,
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--text-strong)',
        fontSize: 14
      }
    }, standard), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        color: V.fg,
        fontSize: 12,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: V.icon,
      size: 13
    }), V.note)), scope && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, scope), (reference || expires) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-subtle)',
        marginTop: 4,
        fontFeatureSettings: "'zero' 1",
        display: 'flex',
        gap: 12
      }
    }, reference && /*#__PURE__*/React.createElement("span", null, reference), expires && /*#__PURE__*/React.createElement("span", null, "exp. ", expires))));
  }

  // chip
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    title: `${standard} — ${V.note}${scope ? ` · ${scope}` : ''}`,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '3px 9px 3px 4px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), React.cloneElement(monogramEl, {
    style: {
      ...monogramEl.props.style,
      width: 22,
      height: 22,
      fontSize: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 13
    }
  }, standard), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: V.icon,
    size: 14,
    style: {
      color: V.fg
    }
  }));
}
const CERT_VALIDITY = VALIDITY;
Object.assign(__ds_scope, { CertificationBadge, CERT_VALIDITY });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/CertificationBadge.jsx", error: String((e && e.message) || e) }); }

// components/trust/EvidenceBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EvidenceBadge — signals that a claim is backed by an attached artefact
 * (a document, a lab test, a measurement). Compact, scannable, links to
 * the underlying evidence. Pairs with TrustIndicator: trust = WHO backs it,
 * evidence = WHAT backs it.
 */

const KIND = {
  document: {
    label: 'Document',
    icon: 'file-text'
  },
  certificate: {
    label: 'Certificate',
    icon: 'badge-check'
  },
  test: {
    label: 'Lab test',
    icon: 'droplet'
  },
  measurement: {
    label: 'Measurement',
    icon: 'leaf'
  },
  audit: {
    label: 'Audit',
    icon: 'shield-check'
  },
  link: {
    label: 'Reference',
    icon: 'link'
  }
};

/**
 * EvidenceBadge
 * @param {keyof KIND} kind
 * @param {number} count — show "×N" when multiple artefacts back the claim
 * @param {boolean} present — false renders a muted "no evidence" state
 */
function EvidenceBadge({
  kind = 'document',
  label,
  count,
  present = true,
  href,
  onClick,
  size = 'md',
  className,
  style,
  ...rest
}) {
  const K = KIND[kind] || KIND.document;
  const Z = size === 'sm' ? {
    font: 12,
    icon: 13,
    padY: 2,
    padX: 7
  } : {
    font: 13,
    icon: 15,
    padY: 3,
    padX: 9
  };
  const interactive = Boolean(href || onClick);
  const Tag = href ? 'a' : 'span';
  const palette = present ? {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-default)'
  } : {
    background: 'var(--muted-bg)',
    color: 'var(--text-subtle)',
    border: '1px dashed var(--muted-border)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: `${Z.padY}px ${Z.padX}px`,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: `${Z.font}px`,
      fontWeight: 500,
      lineHeight: 1.2,
      textDecoration: 'none',
      cursor: interactive ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      transition: 'var(--transition-color)',
      ...palette,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: present ? K.icon : 'ban',
    size: Z.icon,
    style: {
      color: present ? 'var(--text-muted)' : 'var(--text-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", null, label || (present ? K.label : 'No evidence')), present && count > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Z.font - 1,
      color: 'var(--text-muted)',
      fontFeatureSettings: "'zero' 1"
    }
  }, "\xD7", count), interactive && present && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: Z.icon - 2,
    style: {
      color: 'var(--text-subtle)'
    }
  }));
}
const EVIDENCE_KINDS = KIND;
Object.assign(__ds_scope, { EvidenceBadge, EVIDENCE_KINDS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/EvidenceBadge.jsx", error: String((e && e.message) || e) }); }

// components/trust/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusBadge — communicates the state of a piece of information
 * (not the state of the user). One calm, consistent language across
 * tables, cards and headers. Informative, never alarmist.
 */

const STATUS = {
  verified: {
    label: 'Verified',
    icon: 'badge-check',
    fg: 'var(--verified-fg)',
    bg: 'var(--verified-bg)',
    border: 'var(--verified-border)'
  },
  declared: {
    label: 'Declared',
    icon: 'pen-line',
    fg: 'var(--declared-fg)',
    bg: 'var(--declared-bg)',
    border: 'var(--declared-border)'
  },
  pending: {
    label: 'Pending validation',
    icon: 'clock',
    fg: 'var(--pending-fg)',
    bg: 'var(--pending-bg)',
    border: 'var(--pending-border)'
  },
  unavailable: {
    label: 'Unavailable',
    icon: 'ban',
    fg: 'var(--muted-fg)',
    bg: 'var(--muted-bg)',
    border: 'var(--muted-border)'
  },
  archived: {
    label: 'Archived',
    icon: 'archive',
    fg: 'var(--muted-fg)',
    bg: 'var(--muted-bg)',
    border: 'var(--muted-border)'
  },
  expired: {
    label: 'Expired',
    icon: 'alert-circle',
    fg: 'var(--critical-fg)',
    bg: 'var(--critical-bg)',
    border: 'var(--critical-border)'
  },
  draft: {
    label: 'Draft',
    icon: 'circle',
    fg: 'var(--muted-fg)',
    bg: 'transparent',
    border: 'var(--muted-border)',
    dashed: true
  }
};
const SIZES = {
  sm: {
    font: 12,
    icon: 13,
    padY: 2,
    padX: 7,
    gap: 5
  },
  md: {
    font: 13,
    icon: 15,
    padY: 3,
    padX: 9,
    gap: 6
  }
};

/**
 * StatusBadge
 * @param {keyof STATUS} status
 * @param {'solid'|'subtle'|'minimal'} emphasis — fill | soft fill (default) | text-only
 */
function StatusBadge({
  status = 'declared',
  emphasis = 'subtle',
  size = 'md',
  label,
  className,
  style,
  ...rest
}) {
  const S = STATUS[status] || STATUS.declared;
  const Z = SIZES[size] || SIZES.md;
  const text = label || S.label;
  const palette = emphasis === 'solid' ? {
    background: S.fg,
    color: '#fff',
    border: '1px solid transparent'
  } : emphasis === 'minimal' ? {
    background: 'transparent',
    color: S.fg,
    border: '1px solid transparent',
    paddingLeft: 0,
    paddingRight: 0
  } : {
    background: S.bg,
    color: S.fg,
    border: `1px ${S.dashed ? 'dashed' : 'solid'} ${S.border}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${Z.gap}px`,
      padding: `${Z.padY}px ${Z.padX}px`,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: `${Z.font}px`,
      lineHeight: 1.2,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      ...palette,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: S.icon,
    size: Z.icon
  }), text);
}
const STATUS_TYPES = STATUS;
Object.assign(__ds_scope, { StatusBadge, STATUS_TYPES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/records/AuditCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AuditCard — a third-party audit or assessment result. Outcome, auditor,
 * date and an optional score. Calm framing even for failed audits.
 */
const OUTCOME = {
  passed: {
    label: 'Passed',
    icon: 'badge-check',
    fg: 'var(--verified-fg)',
    bg: 'var(--verified-bg)'
  },
  conditional: {
    label: 'Conditional',
    icon: 'alert-circle',
    fg: 'var(--pending-fg)',
    bg: 'var(--pending-bg)'
  },
  failed: {
    label: 'Action required',
    icon: 'alert-triangle',
    fg: 'var(--critical-fg)',
    bg: 'var(--critical-bg)'
  },
  scheduled: {
    label: 'Scheduled',
    icon: 'calendar',
    fg: 'var(--declared-fg)',
    bg: 'var(--declared-bg)'
  }
};
function AuditCard({
  title,
  auditor,
  type,
  date,
  outcome = 'passed',
  score,
  scoreMax = 100,
  reference,
  status,
  onView,
  className,
  style,
  ...rest
}) {
  const O = OUTCOME[outcome] || OUTCOME.passed;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      padding: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: O.bg,
      color: O.fg,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: O.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, auditor, type ? ` · ${type}` : ''))), status ? /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5,
      fontWeight: 600,
      color: O.fg,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: O.icon,
    size: 14
  }), O.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      paddingTop: 13,
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, date && /*#__PURE__*/React.createElement(Meta, {
    k: "Date",
    v: date
  }), reference && /*#__PURE__*/React.createElement(Meta, {
    k: "Ref",
    v: reference
  }), score != null && /*#__PURE__*/React.createElement(Meta, {
    k: "Score",
    v: `${score}/${scoreMax}`
  })), onView && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onView,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-link)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Report ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14
  }))));
}
function Meta({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-strong)',
      marginTop: 2,
      fontFeatureSettings: "'zero' 1"
    }
  }, v));
}
Object.assign(__ds_scope, { AuditCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/AuditCard.jsx", error: String((e && e.message) || e) }); }

// components/records/CertificateCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CertificateCard — a fuller record for a single certification: standard,
 * scope, issuing body, validity window and a download/inspect affordance.
 */
function CertificateCard({
  standard,
  monogram,
  scope,
  issuer,
  reference,
  issued,
  expires,
  validity = 'valid',
  status,
  onDownload,
  onView,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '16px 16px 14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CertificationBadge, {
    standard: standard,
    monogram: monogram,
    validity: validity,
    variant: "chip",
    style: {
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, scope || standard), issuer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, "Issued by ", issuer)), status && /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      background: 'var(--border-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Reference', reference], ['Issued', issued], ['Expires', expires]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--surface-card)',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-strong)',
      marginTop: 3,
      fontFeatureSettings: "'zero' 1"
    }
  }, v || '—')))), (onDownload || onView) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 14px',
      borderTop: '1px solid var(--divider)'
    }
  }, onView && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onView,
    style: btnStyle(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "eye",
    size: 15
  }), "View"), onDownload && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDownload,
    style: btnStyle(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "download",
    size: 15
  }), "Download")));
}
function btnStyle() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 32,
    padding: '0 12px',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer'
  };
}
Object.assign(__ds_scope, { CertificateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/CertificateCard.jsx", error: String((e && e.message) || e) }); }

// components/records/DocumentPreviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DocumentPreviewCard — a file with a thumbnail preview strip, type chip,
 * size/date metadata and quick actions. For attachments, exports, PDFs.
 */
const EXT_LABEL = {
  pdf: 'PDF',
  xlsx: 'XLSX',
  csv: 'CSV',
  png: 'PNG',
  jpg: 'JPG',
  docx: 'DOCX',
  zip: 'ZIP'
};
function DocumentPreviewCard({
  title,
  fileType = 'pdf',
  size,
  date,
  pages,
  status,
  thumbnail,
  onView,
  onDownload,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden',
      transition: 'box-shadow var(--motion-base) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 96,
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-text",
    size: 28,
    style: {
      color: 'var(--neutral-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xs)',
      padding: '2px 6px'
    }
  }, EXT_LABEL[fileType] || fileType.toUpperCase()), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      marginTop: 2,
      display: 'flex',
      gap: 8
    }
  }, size && /*#__PURE__*/React.createElement("span", null, size), pages && /*#__PURE__*/React.createElement("span", null, pages, " pp"), date && /*#__PURE__*/React.createElement("span", null, date))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      flexShrink: 0
    }
  }, onView && /*#__PURE__*/React.createElement(IconBtn, {
    icon: "eye",
    label: "View",
    onClick: onView
  }), onDownload && /*#__PURE__*/React.createElement(IconBtn, {
    icon: "download",
    label: "Download",
    onClick: onDownload
  }))));
}
function IconBtn({
  icon,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      transition: 'var(--transition-color)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--neutral-100)';
      e.currentTarget.style.color = 'var(--text-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-muted)';
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { DocumentPreviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/DocumentPreviewCard.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The TraceWeave Trust System.
 * Every datum can declare its level of backing. Three levels, one
 * visual language, reusable in tables, cards, timelines and documents.
 *
 *   verified  — confirmed by an independent third party  (highest)
 *   declared  — self-reported by the brand               (neutral)
 *   pending   — submitted, awaiting validation           (in progress)
 *
 * Never punitive. The goal is to build trust, not assign blame.
 */

const LEVELS = {
  verified: {
    label: 'Verified',
    icon: 'shield-check',
    fg: 'var(--verified-fg)',
    bg: 'var(--verified-bg)',
    border: 'var(--verified-border)',
    note: 'Confirmed by an independent third party'
  },
  declared: {
    label: 'Declared',
    icon: 'pen-line',
    fg: 'var(--declared-fg)',
    bg: 'var(--declared-bg)',
    border: 'var(--declared-border)',
    note: 'Self-reported by the brand'
  },
  pending: {
    label: 'Pending',
    icon: 'clock',
    fg: 'var(--pending-fg)',
    bg: 'var(--pending-bg)',
    border: 'var(--pending-border)',
    note: 'Submitted, awaiting validation'
  }
};
const SIZES = {
  sm: {
    icon: 14,
    font: 12,
    padY: 2,
    padX: 6,
    gap: 5,
    dot: 7
  },
  md: {
    icon: 16,
    font: 13,
    padY: 3,
    padX: 8,
    gap: 6,
    dot: 8
  }
};

/**
 * TrustIndicator — the reusable trust-level signal.
 *
 * variant:
 *   'inline' — icon + label, no fill (default; sits in prose, tables)
 *   'badge'  — soft-filled chip (cards, headers)
 *   'dot'    — coloured dot + label (compact tables, legends)
 *   'icon'   — glyph only, with title (tightest cells; pair with a tooltip)
 */
function TrustIndicator({
  level = 'declared',
  variant = 'inline',
  size = 'md',
  by,
  showLabel = true,
  className,
  style,
  ...rest
}) {
  const L = LEVELS[level] || LEVELS.declared;
  const S = SIZES[size] || SIZES.md;
  const title = by ? `${L.label} · ${by}` : `${L.label} — ${L.note}`;
  const label = showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: L.fg,
      fontSize: S.font,
      lineHeight: 1.2
    }
  }, L.label, by && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)',
      marginLeft: 5
    }
  }, "\xB7 ", by));
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: `${S.gap}px`,
    fontFamily: 'var(--font-sans)',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    ...style
  };
  if (variant === 'icon') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      title: title,
      style: {
        ...base,
        color: L.fg
      }
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: L.icon,
      size: S.icon,
      label: L.label
    }));
  }
  if (variant === 'dot') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      title: title,
      style: base
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: S.dot,
        height: S.dot,
        borderRadius: 'var(--radius-full)',
        background: L.fg,
        flexShrink: 0
      }
    }), label);
  }
  if (variant === 'badge') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      title: title,
      style: {
        ...base,
        padding: `${S.padY}px ${S.padX}px`,
        background: L.bg,
        border: `1px solid ${L.border}`,
        borderRadius: 'var(--radius-xs)',
        color: L.fg
      }
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: L.icon,
      size: S.icon
    }), label);
  }

  // inline (default)
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    title: title,
    style: {
      ...base,
      color: L.fg
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: L.icon,
    size: S.icon
  }), label);
}
const TRUST_LEVELS = LEVELS;
Object.assign(__ds_scope, { TrustIndicator, TRUST_LEVELS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustIndicator.jsx", error: String((e && e.message) || e) }); }

// components/records/EvidenceCard.jsx
try { (() => {
/**
 * EvidenceCard — a single piece of supporting evidence behind a claim:
 * what it is, who backs it, and a link to view it. The atomic unit of
 * the Trust System at card scale.
 */
const KIND_ICON = {
  document: 'file-text',
  certificate: 'badge-check',
  test: 'droplet',
  measurement: 'leaf',
  audit: 'shield-check',
  photo: 'eye'
};
function EvidenceCard({
  title,
  kind = 'document',
  level = 'declared',
  by,
  meta,
  reference,
  onView,
  href,
  className,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 14px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'box-shadow var(--motion-base) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: KIND_ICON[kind] || 'file-text',
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrustIndicator, {
    level: level,
    by: by,
    size: "sm"
  }), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      fontFeatureSettings: "'zero' 1"
    }
  }, meta)), reference && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, reference)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      color: 'var(--text-subtle)',
      display: 'inline-flex',
      paddingTop: 2
    },
    onClick: onView
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: href ? 'arrow-up-right' : 'eye',
    size: 16
  })));
}
Object.assign(__ds_scope, { EvidenceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/EvidenceCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ErrorState = __ds_scope.ErrorState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.LoadingState = __ds_scope.LoadingState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.StickyNav = __ds_scope.StickyNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AuditCard = __ds_scope.AuditCard;

__ds_ns.CertificateCard = __ds_scope.CertificateCard;

__ds_ns.DocumentPreviewCard = __ds_scope.DocumentPreviewCard;

__ds_ns.EvidenceCard = __ds_scope.EvidenceCard;

__ds_ns.QRComponent = __ds_scope.QRComponent;

__ds_ns.CertificationBadge = __ds_scope.CertificationBadge;

__ds_ns.CERT_VALIDITY = __ds_scope.CERT_VALIDITY;

__ds_ns.EvidenceBadge = __ds_scope.EvidenceBadge;

__ds_ns.EVIDENCE_KINDS = __ds_scope.EVIDENCE_KINDS;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.STATUS_TYPES = __ds_scope.STATUS_TYPES;

__ds_ns.TrustIndicator = __ds_scope.TrustIndicator;

__ds_ns.TRUST_LEVELS = __ds_scope.TRUST_LEVELS;

})();
