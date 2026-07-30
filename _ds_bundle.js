/* @ds-bundle: {"format":4,"namespace":"SurgeDesignSystem_be3e4e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ChecklistItem","sourcePath":"components/product/ChecklistItem.jsx"},{"name":"InputTile","sourcePath":"components/product/InputTile.jsx"},{"name":"MenuList","sourcePath":"components/product/MenuList.jsx"},{"name":"PhoneFrame","sourcePath":"components/product/PhoneFrame.jsx"},{"name":"ProgressBar","sourcePath":"components/product/ProgressBar.jsx"},{"name":"SuccessCheck","sourcePath":"components/product/SuccessCheck.jsx"},{"name":"VoiceBar","sourcePath":"components/product/VoiceBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7cf3cabbd5bc","components/core/Button.jsx":"5eb8924e68c6","components/core/Card.jsx":"9ae71cb943f7","components/core/Eyebrow.jsx":"c3f5ea1e5255","components/core/Icon.jsx":"fd99093253e1","components/product/ChecklistItem.jsx":"eaf650d4f482","components/product/InputTile.jsx":"1e263cfa65ce","components/product/MenuList.jsx":"c81d1e177ce4","components/product/PhoneFrame.jsx":"618941d3fc6c","components/product/ProgressBar.jsx":"5ccfc70db5b6","components/product/SuccessCheck.jsx":"f9f8429f5be6","components/product/VoiceBar.jsx":"a393148f730b","ui_kits/app/app.js":"e4c1b2596e65","ui_kits/website/demos.js":"7ea59cb2b1bf","ui_kits/website/sections.js":"d208d3fa9ce5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SurgeDesignSystem_be3e4e = window.SurgeDesignSystem_be3e4e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  dark = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      padding: '6px 14px',
      borderRadius: 'var(--radius-sm)',
      background: dark ? '#26272B' : 'var(--blue-50)',
      color: dark ? '#fff' : 'var(--blue-600)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  caps = false,
  children,
  style,
  ...rest
}) {
  const [hov, setHov] = useState(false),
    [act, setAct] = useState(false);
  const pal = {
    primary: {
      bg: hov ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      fg: '#fff',
      bd: 'none'
    },
    brand: {
      bg: hov ? '#000' : 'var(--ink)',
      fg: '#fff',
      bd: 'none'
    },
    ghost: {
      bg: hov ? 'rgba(23,24,26,.06)' : 'transparent',
      fg: 'var(--ink)',
      bd: '1px solid var(--line-strong)'
    },
    success: {
      bg: hov ? 'var(--green-600)' : 'var(--success)',
      fg: '#fff',
      bd: 'none'
    }
  }[variant];
  const sz = {
    sm: {
      p: '8px 18px',
      f: 14
    },
    md: {
      p: '12px 26px',
      f: 16
    },
    lg: {
      p: '16px 34px',
      f: 18
    }
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setAct(false);
    },
    onMouseDown: () => setAct(true),
    onMouseUp: () => setAct(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: caps ? sz.f - 2 : sz.f,
      letterSpacing: caps ? '0.1em' : '0',
      textTransform: caps ? 'uppercase' : 'none',
      padding: sz.p,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-pill)',
      border: pal.bd,
      background: pal.bg,
      color: pal.fg,
      cursor: 'pointer',
      transform: act ? 'scale(.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  float = false,
  tilt = 0,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: float ? 'var(--shadow-float)' : 'var(--shadow-card)',
      transform: tilt ? `rotate(${tilt}deg)` : 'none',
      padding: 'var(--space-6)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ink-2)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const P = {
  waveform: /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "18",
    width: "5",
    height: "12",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "10",
    width: "5",
    height: "28",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "4",
    width: "5",
    height: "40",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "12",
    width: "5",
    height: "24",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "19",
    width: "5",
    height: "10",
    rx: "2.5"
  })),
  scan: /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "3.5",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "19"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "24",
    cy: "24",
    rx: "19",
    ry: "8",
    transform: "rotate(-20 24 24)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 5v38",
    transform: "rotate(20 24 24)"
  })),
  documents: /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "3.5",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "8",
    width: "22",
    height: "28",
    rx: "3",
    transform: "rotate(-6 15 22)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "14",
    width: "22",
    height: "18",
    rx: "3",
    transform: "rotate(6 33 23)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29",
    cy: "21",
    r: "2.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 30l5-5 4 4 4-4 5 5"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M10 25l9 9 19-19",
    stroke: "currentColor",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  arrowUp: /*#__PURE__*/React.createElement("path", {
    d: "M24 38V12M12 22l12-11 12 11",
    stroke: "currentColor",
    strokeWidth: "5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  pause: /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "12",
    width: "7",
    height: "24",
    rx: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "27",
    y: "12",
    width: "7",
    height: "24",
    rx: "3"
  })),
  bolt: /*#__PURE__*/React.createElement("path", {
    d: "M27.5 8 14 27h8l-2.5 13L34 21h-8l1.5-13z",
    fill: "currentColor"
  })
};
function Icon({
  name,
  size = 24,
  color = 'var(--icon-tint)',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: {
      color,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, P[name] || null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/product/ChecklistItem.jsx
try { (() => {
function ChecklistItem({
  children,
  checked = true,
  delay = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      animation: `surge-fade-up var(--dur-reveal) var(--ease-out) ${delay}ms both`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: checked ? 'var(--blue-500)' : 'var(--surface-dim)',
      border: checked ? 'none' : '1px solid var(--line-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, children));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/product/InputTile.jsx
try { (() => {
const {
  useState
} = React;
function InputTile({
  icon = 'waveform',
  label = 'Voice Note',
  iconSize = 56,
  labelSize = 16,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: hov ? 'var(--shadow-float)' : 'var(--shadow-card)',
      transform: hov ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      cursor: 'pointer',
      padding: '28px 18px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      minWidth: 120,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: labelSize,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { InputTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/InputTile.jsx", error: String((e && e.message) || e) }); }

// components/product/MenuList.jsx
try { (() => {
function MenuList({
  items = [],
  onSelect,
  dense = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-menu)',
      padding: dense ? '8px 0' : '10px 0',
      minWidth: dense ? 0 : 260,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onSelect && onSelect(it),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: dense ? 15 : 18,
      color: 'var(--ink)',
      padding: dense ? '10px 18px' : '13px 24px',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-dim)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it)));
}
Object.assign(__ds_scope, { MenuList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/MenuList.jsx", error: String((e && e.message) || e) }); }

// components/product/PhoneFrame.jsx
try { (() => {
function PhoneFrame({
  width = 340,
  children,
  style
}) {
  const h = width * 2.06;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: h,
      background: '#1E1F22',
      borderRadius: width * 0.155,
      padding: width * 0.032,
      boxShadow: 'var(--shadow-phone)',
      position: 'relative',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--paper)',
      borderRadius: width * 0.125,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: width * 0.045,
      left: '50%',
      transform: 'translateX(-50%)',
      width: width * 0.34,
      height: width * 0.1,
      background: '#000',
      borderRadius: 999,
      zIndex: 5
    }
  }), children));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// components/product/ProgressBar.jsx
try { (() => {
function ProgressBar({
  label = 'Generating estimate…',
  progress = 0.6,
  animate = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dim)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      width: animate ? undefined : `${progress * 100}%`,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--blue-500)',
      animation: animate ? 'surge-progress 2.8s var(--ease-in-out) infinite alternate' : 'none'
    }
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--ink)',
      marginTop: 12
    }
  }, label));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/product/SuccessCheck.jsx
try { (() => {
function SuccessCheck({
  size = 64,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'surge-pop var(--dur-slow) var(--ease-spring) both',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: size * 0.42,
    color: "#fff"
  }));
}
Object.assign(__ds_scope, { SuccessCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SuccessCheck.jsx", error: String((e && e.message) || e) }); }

// components/product/VoiceBar.jsx
try { (() => {
function VoiceBar({
  time = '0:04',
  state = 'recording',
  style
}) {
  const done = state === 'done';
  const bars = [3, 4, 5, 6, 8, 10, 13, 16, 18, 14, 10, 7, 5, 4, 3];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 12px',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--line-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pause",
    size: 18,
    color: "var(--ink-2)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 2.5,
      height: 22,
      minWidth: 120,
      justifyContent: 'center'
    }
  }, bars.map((h, i) => done ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 2.5,
      height: 2.5,
      borderRadius: 2,
      background: 'var(--ink-3)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 2.5,
      height: h,
      borderRadius: 2,
      background: i > 3 && i < 11 ? 'var(--ink)' : 'var(--ink-3)',
      animation: i > 3 && i < 11 ? `surge-wave 1.1s var(--ease-in-out) ${i * 0.08}s infinite` : 'none',
      transformOrigin: 'center'
    }
  }))), !done && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: done ? 'var(--success)' : 'var(--blue-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: done ? 'check' : 'arrowUp',
    size: 18,
    color: done ? '#fff' : 'var(--blue-500)'
  })));
}
Object.assign(__ds_scope, { VoiceBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/VoiceBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app.js
try { (() => {
const ADS = window.SurgeDesignSystem_be3e4e;
const {
  PhoneFrame: PF,
  VoiceBar: VB,
  MenuList: ML,
  ProgressBar: PB,
  InputTile: IT,
  Icon: IC,
  Button: BT,
  Badge: BD
} = ADS;
const AQ = ['How thick was the drywall in the ceiling?', 'How much drywall did you remove?', 'How long will you leave the dehumidifier?', 'Is the wall and baseboard affected?'];
const AJOBS = ['Interior reconstruction', 'Exterior reconstruction', 'Mitigation', 'Contents', 'Mold', 'Fire mitigation', 'Biohazard', 'Time & Material'];
const LINES = [['DRY 1/2" - Remove & replace drywall', '188 SF', '$412.84'], ['Tear out wet drywall, cleanup, bag', '64 SF', '$96.32'], ['Dehumidifier (per 24 hr period)', '3 EA', '$247.65'], ['Air mover (per 24 hr period)', '9 EA', '$314.19'], ['Apply antimicrobial agent to walls', '188 SF', '$67.11'], ['Baseboard - Remove & replace 3 1/4"', '42 LF', '$188.58'], ['Content manipulation charge', '2 HR', '$97.40'], ['Final cleaning - construction', '310 SF', '$110.05']];
function Fade({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      inset: 0,
      animation: 'surge-fade-up .5s var(--ease-out) both'
    }
  }, children);
}
function Pad({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '78px 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, children);
}
function Title({
  children,
  action,
  size = 32
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: size,
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }
  }, children), action);
}
function App() {
  const [screen, setScreen] = React.useState('login');
  const [menu, setMenu] = React.useState(false);
  const [checks, setChecks] = React.useState(0);
  const [noteDone, setNoteDone] = React.useState(false);
  const [exported, setExported] = React.useState(false);
  React.useEffect(() => {
    if (screen === 'voice' && checks < 5) {
      const t = setTimeout(() => setChecks(c => c + 1), 1000);
      return () => clearTimeout(t);
    }
    if (screen === 'voice' && checks >= 5 && !noteDone) {
      const t = setTimeout(() => setNoteDone(true), 700);
      return () => clearTimeout(t);
    }
    if (screen === 'generating') {
      const t = setTimeout(() => setScreen('estimate'), 3400);
      return () => clearTimeout(t);
    }
  }, [screen, checks, noteDone]);
  const go = s => {
    setMenu(false);
    setScreen(s);
    if (s === 'voice') {
      setChecks(0);
      setNoteDone(false);
    }
    if (s === 'estimate') setExported(false);
  };
  return /*#__PURE__*/React.createElement(PF, {
    width: 370
  }, screen === 'login' && /*#__PURE__*/React.createElement(Fade, {
    k: "login"
  }, /*#__PURE__*/React.createElement(Pad, {
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    height: "36",
    alt: "Surge"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      marginTop: 26
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      marginTop: 8
    }
  }, "Estimates in seconds, on site."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 34,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    defaultValue: "alex@titanrestoration.com",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      padding: '15px 18px',
      borderRadius: 14,
      border: '1px solid var(--line-strong)',
      background: '#fff',
      color: 'var(--ink)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      padding: '15px 18px',
      borderRadius: 14,
      border: '1px solid var(--line-strong)',
      background: '#fff',
      color: 'var(--ink)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(BT, {
    variant: "brand",
    size: "lg",
    onClick: () => go('projects'),
    style: {
      marginTop: 8
    }
  }, "Log in")))), screen === 'projects' && /*#__PURE__*/React.createElement(Fade, {
    k: "projects"
  }, /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Title, {
    action: /*#__PURE__*/React.createElement(BT, {
      variant: "primary",
      size: "sm",
      onClick: () => setMenu(m => !m)
    }, "New")
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['1427 Maplewood Dr', 'Mitigation · yesterday'], ['88 Harbor View Ct', 'Mold · Mon'], ['302 Birch Hollow Ln', 'Fire mitigation · last week']].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => go('capture'),
    style: {
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 18,
      padding: 16,
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: 'var(--blue-50)',
      borderRadius: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: ['waveform', 'documents', 'scan'][i],
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, p[1]))))), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 112,
      right: 20,
      zIndex: 10,
      animation: 'surge-fade-up .3s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(ML, {
    dense: true,
    items: AJOBS,
    onSelect: () => go('capture')
  })))), screen === 'capture' && /*#__PURE__*/React.createElement(Fade, {
    k: "capture"
  }, /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Title, {
    size: 29
  }, "Generate Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      margin: '-10px 0 16px'
    }
  }, "1427 Maplewood Dr \xB7 Mitigation"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dim)',
      borderRadius: 20,
      padding: 12,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IT, {
    icon: "waveform",
    label: "Voice Note",
    iconSize: 42,
    labelSize: 13.5,
    onClick: () => go('voice'),
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13
    }
  }), /*#__PURE__*/React.createElement(IT, {
    icon: "scan",
    label: "3D Scan",
    iconSize: 42,
    labelSize: 13.5,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13
    }
  }), /*#__PURE__*/React.createElement(IT, {
    icon: "documents",
    label: "Documents",
    iconSize: 42,
    labelSize: 13.5,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BT, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('projects')
  }, "Back")))), screen === 'voice' && /*#__PURE__*/React.createElement(Fade, {
    k: "voice"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      filter: noteDone ? 'blur(9px)' : 'none',
      transition: 'filter .45s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "Mitigation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, "Some follow-up questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      marginTop: 52,
      flex: 1
    }
  }, AQ.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      opacity: i < checks ? 1 : .25,
      transition: 'opacity .5s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--blue-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transform: i < checks ? 'scale(1)' : 'scale(.7)',
      transition: 'transform .4s var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "check",
    size: 13,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16.5,
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, q)))), /*#__PURE__*/React.createElement(VB, {
    time: '0:0' + Math.min(checks + 1, 9),
    state: checks >= 4 ? 'done' : 'recording'
  }))), noteDone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 24,
      background: '#fff',
      borderRadius: 24,
      boxShadow: 'var(--shadow-float)',
      padding: '44px 26px 24px',
      textAlign: 'center',
      animation: 'surge-pop .55s var(--ease-spring) both'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      fontWeight: 600
    }
  }, "Note submitted"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginTop: 6
    }
  }, "6 mins / 35 questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(BT, {
    variant: "brand",
    size: "lg",
    onClick: () => go('generating')
  }, "Generate Estimate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--line-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "pause",
    size: 16,
    color: "var(--ink-2)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderBottom: '2px dotted var(--line-strong)',
      margin: '0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "check",
    size: 16,
    color: "#fff"
  }))))), screen === 'generating' && /*#__PURE__*/React.createElement(Fade, {
    k: "gen"
  }, /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Title, {
    size: 29
  }, "Generate Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dim)',
      borderRadius: 20,
      padding: 12,
      display: 'flex',
      gap: 10,
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement(IT, {
    icon: "waveform",
    label: "Voice Note",
    iconSize: 42,
    labelSize: 13.5,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(IT, {
    icon: "scan",
    label: "3D Scan",
    iconSize: 42,
    labelSize: 13.5,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(IT, {
    icon: "documents",
    label: "Documents",
    iconSize: 42,
    labelSize: 13.5,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '22px 4px 15px',
      gap: 13,
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(PB, {
    label: "Generating estimate\u2026"
  })))), screen === 'estimate' && /*#__PURE__*/React.createElement(Fade, {
    k: "est"
  }, /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Title, {
    action: /*#__PURE__*/React.createElement(BT, {
      variant: "primary",
      size: "sm",
      onClick: () => setExported(true)
    }, "Export")
  }, "Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      margin: '-8px 0 14px'
    }
  }, "1427 Maplewood Dr \xB7 Mitigation \xB7 $1,534.14 total"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, LINES.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 13,
      padding: '11px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: `surge-fade-up .6s var(--ease-out) ${i * 70}ms both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, l[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-3)',
      flexShrink: 0
    }
  }, l[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)',
      flexShrink: 0,
      fontVariantNumeric: 'tabular-nums'
    }
  }, l[2])))), exported && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(244,243,238,.78)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      animation: 'surge-fade-up .35s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'surge-pop .55s var(--ease-spring) both'
    }
  }, /*#__PURE__*/React.createElement(IC, {
    name: "check",
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Estimate exported"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(BD, {
    dark: true
  }, "PDF"), /*#__PURE__*/React.createElement(BD, {
    dark: true
  }, "Xactimate")), /*#__PURE__*/React.createElement(BT, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('projects')
  }, "Back to projects")))));
}
window.SurgeApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.js", error: String((e && e.message) || e) }); }

// ui_kits/website/demos.js
try { (() => {
const DS = window.SurgeDesignSystem_be3e4e;
const {
  PhoneFrame,
  VoiceBar,
  ChecklistItem,
  MenuList,
  ProgressBar,
  InputTile,
  SuccessCheck,
  Icon,
  Button,
  Badge
} = DS;
// Frames-advance probe (shared with sections.js pattern): when frames are frozen, skip CSS transitions entirely.
window.__surgeFramesOK = null;
requestAnimationFrame(() => requestAnimationFrame(() => {
  window.__surgeFramesOK = true;
}));
setTimeout(() => {
  if (window.__surgeFramesOK === null) window.__surgeFramesOK = false;
}, 400);
const tr = css => window.__surgeFramesOK === false ? 'none' : css;
const QUESTIONS = ['How thick was the drywall in the ceiling?', 'How much drywall did you remove?', 'How long will you leave the dehumidifier?', 'Is the wall and baseboard affected?'];
const JOBS = ['Interior reconstruction', 'Exterior reconstruction', 'Mitigation', 'Contents', 'Mold', 'Fire mitigation', 'Biohazard', 'Time & Material'];
function ScreenPad({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '84px 26px 26px',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, children);
}
function ScreenTitle({
  children,
  action,
  small
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: small ? 30 : 34,
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }
  }, children), action);
}
// Looping demo: questions check in → note submitted modal
function FollowUpDemo() {
  const [phase, setPhase] = React.useState(0); // 0..4 checks, 5 modal
  React.useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % 8), 1100);
    return () => clearInterval(t);
  }, []);
  const checks = Math.min(phase, 4),
    modal = phase >= 5 && phase < 7;
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 330
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      filter: modal ? 'blur(9px)' : 'none',
      transition: tr('filter .45s var(--ease-out)')
    }
  }, /*#__PURE__*/React.createElement(ScreenPad, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "Mitigation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, "Some follow-up questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 56,
      flex: 1
    }
  }, QUESTIONS.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      opacity: i < checks ? 1 : .25,
      transform: i < checks ? 'none' : 'translateY(6px)',
      transition: tr('all .5s var(--ease-out)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--blue-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transform: i < checks ? 'scale(1)' : 'scale(.7)',
      transition: tr('transform .4s var(--ease-spring)')
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, q)))), /*#__PURE__*/React.createElement(VoiceBar, {
    time: '0:0' + Math.min(phase + 1, 9),
    state: phase >= 4 ? 'done' : 'recording',
    style: {
      transform: 'scale(.92)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 22,
      background: '#fff',
      borderRadius: 24,
      boxShadow: 'var(--shadow-float)',
      padding: '42px 24px 22px',
      textAlign: 'center',
      opacity: modal ? 1 : 0,
      transform: modal ? 'translateY(0) scale(1)' : 'translateY(30px) scale(.96)',
      transition: tr('all .5s var(--ease-spring)'),
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 27,
      fontWeight: 600
    }
  }, "Note submitted"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginTop: 6
    }
  }, "6 mins / 35 questions"), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 30,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      color: '#fff',
      background: 'var(--ink)',
      border: 'none',
      borderRadius: 999,
      padding: '14px 28px',
      whiteSpace: 'nowrap'
    }
  }, "Generate Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--line-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pause",
    size: 15,
    color: "var(--ink-2)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderBottom: '2px dotted var(--line-strong)',
      margin: '0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "#fff"
  })))));
}
// Projects screen with New menu (loops open/closed)
function ProjectsDemo() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const t = setInterval(() => setOpen(o => !o), 2600);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 330
  }, /*#__PURE__*/React.createElement(ScreenPad, null, /*#__PURE__*/React.createElement(ScreenTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "New")
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-dim)',
      borderRadius: 18,
      padding: 16,
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      background: '#E7E6E0',
      borderRadius: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      width: '70%',
      background: '#E7E6E0',
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      width: '45%',
      background: '#E7E6E0',
      borderRadius: 6
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 112,
      right: 16,
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(.95)',
      transformOrigin: 'top right',
      transition: tr('all .4s var(--ease-out)'),
      pointerEvents: 'none',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(MenuList, {
    dense: true,
    items: JOBS
  }))));
}
// Generate Estimate inputs + progress → Xactimate-ready success (slow loop)
function InputsDemo() {
  const [tick, setTick] = React.useState(0); // 0..100 progress, 100..128 success hold
  React.useEffect(() => {
    const t = setInterval(() => setTick(v => (v + 2) % 128), 140);
    return () => clearInterval(t);
  }, []);
  const p = Math.min(tick, 100) / 100,
    done = tick >= 100;
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 330
  }, /*#__PURE__*/React.createElement(ScreenPad, null, /*#__PURE__*/React.createElement(ScreenTitle, {
    small: true
  }, "Generate Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dim)',
      borderRadius: 20,
      padding: 12,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(InputTile, {
    icon: "waveform",
    label: "Voice Note",
    iconSize: 38,
    labelSize: 13,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '20px 4px 14px',
      gap: 12
    }
  }), /*#__PURE__*/React.createElement(InputTile, {
    icon: "scan",
    label: "3D Scan",
    iconSize: 38,
    labelSize: 13,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '20px 4px 14px',
      gap: 12
    }
  }), /*#__PURE__*/React.createElement(InputTile, {
    icon: "documents",
    label: "Documents",
    iconSize: 38,
    labelSize: 13,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '20px 4px 14px',
      gap: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      opacity: done ? 0 : 1,
      transition: tr('opacity .3s var(--ease-out)')
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    animate: false,
    progress: p,
    label: "Generating estimate\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 26,
      background: '#fff',
      borderRadius: 24,
      boxShadow: 'var(--shadow-float)',
      padding: '32px 24px 28px',
      textAlign: 'center',
      opacity: done ? 1 : 0,
      transform: done ? 'translateY(0) scale(1)' : 'translateY(24px) scale(.96)',
      transition: tr('all .5s var(--ease-spring)'),
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, done && /*#__PURE__*/React.createElement(SuccessCheck, {
    size: 56
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      marginTop: 16
    }
  }, "Estimate ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginTop: 6
    }
  }, "Xactimate-ready \xB7 ESX file generated"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dark: true
  }, "Xactimate"), /*#__PURE__*/React.createElement(Badge, {
    dark: true
  }, "PDF")))));
}
// Export screen + floating docs
function ExportDemo() {
  const doc = (tilt, label, dy) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      boxShadow: 'var(--shadow-float)',
      padding: 18,
      width: 190,
      transform: `rotate(${tilt}deg) translateY(${dy}px)`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--blue-100)',
      borderRadius: 4,
      width: '85%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 56,
      background: 'var(--blue-100)',
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      background: 'var(--blue-100)',
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      background: 'var(--blue-100)',
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      background: 'var(--blue-100)',
      borderRadius: 4,
      width: '75%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      background: 'var(--blue-100)',
      borderRadius: 4,
      width: '60%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dark: true
  }, label)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      position: 'absolute',
      top: -40,
      zIndex: 2
    }
  }, doc(-6, 'PDF', 10), doc(5, 'Xactimate', -14)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 150
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 330
  }, /*#__PURE__*/React.createElement(ScreenPad, null, /*#__PURE__*/React.createElement(ScreenTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Export")
  }, "Estimate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-dim)',
      borderRadius: 16,
      height: 150,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: '#E7E6E0',
      borderRadius: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-dim)',
      borderRadius: 16,
      height: 150,
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      background: '#E7E6E0',
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      background: '#E7E6E0',
      borderRadius: 6,
      width: '65%'
    }
  })))))));
}
Object.assign(window, {
  FollowUpDemo,
  ProjectsDemo,
  InputsDemo,
  ExportDemo,
  ScreenPad,
  ScreenTitle,
  QUESTIONS,
  JOBS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/demos.js", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.js
try { (() => {
const DS2 = window.SurgeDesignSystem_be3e4e;
const {
  Button: BBtn,
  Eyebrow: EEyebrow,
  Card: CCard
} = DS2;
// Frames-advance probe: reveal animations arm ONLY if rAF ticks twice (frozen/capture environments render everything visible, no transitions).
let __framesOK = null;
const __framesWaiters = [];
requestAnimationFrame(() => requestAnimationFrame(() => {
  __framesOK = true;
  __framesWaiters.forEach(f => f());
}));
setTimeout(() => {
  if (__framesOK === null) {
    __framesOK = false;
    __framesWaiters.forEach(f => f());
  }
}, 400);
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  // 'shown' = visible, no transition (default & fallback). 'hidden' = armed start state. 'in' = animating in.
  const [st, setSt] = React.useState('shown');
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let dead = false,
      o = null,
      t = null;
    const arm = () => {
      if (dead || !__framesOK) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) return; // already on screen: stay shown
      setSt('hidden');
      const show = () => {
        if (!dead) setSt('in');
        cleanup();
      };
      if (typeof IntersectionObserver !== 'undefined') {
        o = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) show();
        }, {
          threshold: .18
        });
        o.observe(el);
      }
      const onScroll = () => {
        const r2 = el.getBoundingClientRect();
        if (r2.top < window.innerHeight * 0.92 && r2.bottom > 0) show();
      };
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      // safety: never stay hidden more than 6s
      t = setTimeout(show, 6000);
      var cleanup = () => {
        if (o) o.disconnect();
        window.removeEventListener('scroll', onScroll);
        if (t) clearTimeout(t);
      };
    };
    if (__framesOK === null) __framesWaiters.push(arm);else arm();
    return () => {
      dead = true;
      if (o) o.disconnect();
      if (t) clearTimeout(t);
    };
  }, []);
  const hidden = st === 'hidden';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: hidden ? 0 : 1,
      transform: hidden ? 'translateY(28px)' : 'none',
      transition: st === 'in' ? `all .9s var(--ease-out) ${delay}ms` : 'none',
      ...style
    }
  }, children);
}
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(244,243,238,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    height: "24",
    alt: "Surge"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, ['About', 'Careers', 'Log in'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, l)), /*#__PURE__*/React.createElement(BBtn, {
    variant: "brand",
    caps: true,
    size: "sm"
  }, "Book a demo"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "grid-lines",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '90px var(--container-pad) 70px',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 26
    }
  }, "The only AI estimating tool built for restoration")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 600,
      maxWidth: 820,
      margin: '0 auto'
    }
  }, "Remediation estimates in seconds")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: 620,
      margin: '26px auto 0'
    }
  }, "Surge uses AI to help your team write accurate, high-dollar-value estimates in a fraction of the time. Cut your cycle time in half and increase your revenue per job.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(BBtn, {
    variant: "brand",
    caps: true,
    size: "lg"
  }, "Book a demo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "surge-grad",
    style: {
      position: 'absolute',
      inset: '34% -10% -40%',
      borderRadius: '50% 50% 0 0/30% 30% 0 0',
      filter: 'blur(2px)',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 350
  }, /*#__PURE__*/React.createElement(FollowUpDemo, null)))));
}
function Stories() {
  const T = [["Margin pressure is driving a new era of restoration. Surge gives estimators speed and clarity, turning complexity into an edge.", "R. Palmer", "Owner, Titan-class restoration firm"], ["Estimating used to slow us down. With Surge, anyone in Operations can estimate, and conversational AI turns scope notes into faster payouts.", "D. Fussell", "COO, regional restoration group"], ["We doubled the number of estimates we write in a week and payouts per job are up significantly. Surge changed our company.", "W. Braddy", "Owner, water restoration company"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "grid-lines",
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '90px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 20
    }
  }, "Customer stories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.12
    }
  }, "Our customers see a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-500)'
    }
  }, "12% revenue increase"), " on average, while winning more jobs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      marginTop: 20,
      maxWidth: 420
    }
  }, "Higher-dollar-value claims that get approved. Decrease your cycle time and increase your revenue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(BBtn, {
    variant: "ghost",
    caps: true,
    size: "sm"
  }, "Read more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, T.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 120
  }, /*#__PURE__*/React.createElement(CCard, {
    style: {
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--ink)',
      lineHeight: 1.4,
      letterSpacing: '-0.01em'
    }
  }, "\u201C", t[0], "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--blue-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: 'var(--blue-600)',
      fontSize: 15
    }
  }, t[1][0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, t[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, t[2]))))))))));
}
function FeatureRow({
  eyebrow,
  title,
  body,
  demo,
  flip
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 70,
      alignItems: 'center',
      direction: flip ? 'rtl' : 'ltr'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      maxWidth: 400
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      marginTop: 16,
      maxWidth: 420
    }
  }, body)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    style: {
      direction: 'ltr',
      display: 'flex',
      justifyContent: 'center'
    }
  }, demo));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "grid-lines",
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '100px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.06,
      textAlign: 'center',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, "Standardized, fast documentation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-2)',
      textAlign: 'center',
      maxWidth: 560,
      margin: '22px auto 0',
      lineHeight: 1.55
    }
  }, "Surge makes sure the full scope of every job is documented, and generates a complete, insurance-compliant estimate.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 130,
      marginTop: 110
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "Scope",
    title: "Add value to every type of job",
    body: "Generate high-value estimates, regardless of scope. Write claims with comprehensive, accurate line items for all remediation jobs.",
    demo: /*#__PURE__*/React.createElement(ProjectsDemo, null)
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    flip: true,
    eyebrow: "Inputs",
    title: "Capture on-site details with voice assistant",
    body: "Surge's AI voice assistant guides you through job sites to ensure a complete scope. Add 3D scans, tic sheets, and more.",
    demo: /*#__PURE__*/React.createElement(InputsDemo, null)
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "Export",
    title: "Get Xactimate-ready estimates in seconds",
    body: "Create insurance-compliant estimates in 90 seconds to 2 minutes. Export to Xactimate or a customized PDF.",
    demo: /*#__PURE__*/React.createElement(ExportDemo, null)
  }))));
}
function HowItWorks() {
  const steps = ['Document site conditions', 'Upload images, notes and 3D scans', 'Analyze all documentation together', 'Customize the estimate to carrier', 'Check for errors or missed opportunities', 'Generate line items and upload to Xactimate'];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 1800);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '100px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 70
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, "AI-powered estimates that deliver real value"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-2)',
      lineHeight: 1.55,
      marginTop: 18,
      maxWidth: 420
    }
  }, "Estimating speed and accuracy decrease cycle times by more than 50%, expand capacity, improve win rates, and increase revenue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(BBtn, {
    variant: "primary"
  }, "See impact"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '17px 20px',
      borderRadius: 14,
      background: i === active ? '#fff' : 'transparent',
      boxShadow: i === active ? 'var(--shadow-card)' : 'none',
      transition: 'all .45s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: i === active ? 'var(--blue-500)' : 'var(--ink-3)',
      width: 22,
      fontVariantNumeric: 'tabular-nums',
      transition: 'color .3s'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: i === active ? 600 : 500,
      color: i === active ? 'var(--ink)' : 'var(--ink-2)',
      transition: 'all .3s'
    }
  }, s)))))));
}
function FooterCta() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "surge-grad",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '110px var(--container-pad) 40px',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'rgba(23,24,26,.75)',
      marginBottom: 20
    }
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.06,
      maxWidth: 720,
      margin: '0 auto',
      color: 'var(--ink)'
    }
  }, "Ready to supercharge your remediation company?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(23,24,26,.8)',
      maxWidth: 520,
      margin: '22px auto 0',
      lineHeight: 1.55
    }
  }, "Sign up for a free demo to learn how Surge can help you generate fast, high-value estimates."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(BBtn, {
    variant: "brand",
    caps: true,
    size: "lg"
  }, "Book a demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 110,
      paddingTop: 26,
      borderTop: '1px solid rgba(23,24,26,.18)',
      fontSize: 13,
      color: 'rgba(23,24,26,.75)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Surge Estimates Inc."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Terms of Service")))));
}
function Website() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stories, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(FooterCta, null));
}
Object.assign(window, {
  Website,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.InputTile = __ds_scope.InputTile;

__ds_ns.MenuList = __ds_scope.MenuList;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SuccessCheck = __ds_scope.SuccessCheck;

__ds_ns.VoiceBar = __ds_scope.VoiceBar;

})();
