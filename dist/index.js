var o = function() {
  return o = Object.assign || function(n) {
    for (var r, A = 1, a = arguments.length; A < a; A++) {
      r = arguments[A];
      for (var R in r)
        Object.prototype.hasOwnProperty.call(r, R) && (n[R] = r[R]);
    }
    return n;
  }, o.apply(this, arguments);
};
var L = {
  BLACK: "#111418",
  DARK_GRAY1: "#1C2127",
  DARK_GRAY2: "#252A31",
  DARK_GRAY3: "#2F343C",
  DARK_GRAY4: "#383E47",
  DARK_GRAY5: "#404854",
  GRAY1: "#5F6B7C",
  GRAY2: "#738091",
  GRAY3: "#8F99A8",
  GRAY4: "#ABB3BF",
  GRAY5: "#C5CBD3",
  LIGHT_GRAY1: "#D3D8DE",
  LIGHT_GRAY2: "#DCE0E5",
  LIGHT_GRAY3: "#E5E8EB",
  LIGHT_GRAY4: "#EDEFF2",
  LIGHT_GRAY5: "#F6F7F9",
  WHITE: "#FFFFFF"
}, D = {
  BLUE1: "#184A90",
  BLUE2: "#215DB0",
  BLUE3: "#2D72D2",
  BLUE4: "#4C90F0",
  BLUE5: "#8ABBFF",
  GREEN1: "#165A36",
  GREEN2: "#1C6E42",
  GREEN3: "#238551",
  GREEN4: "#32A467",
  GREEN5: "#72CA9B",
  ORANGE1: "#77450D",
  ORANGE2: "#935610",
  ORANGE3: "#C87619",
  ORANGE4: "#EC9A3C",
  ORANGE5: "#FBB360",
  RED1: "#8E292C",
  RED2: "#AC2F33",
  RED3: "#CD4246",
  RED4: "#E76A6E",
  RED5: "#FA999C"
}, G = {
  CERULEAN1: "#0C5174",
  CERULEAN2: "#0F6894",
  CERULEAN3: "#147EB3",
  CERULEAN4: "#3FA6DA",
  CERULEAN5: "#68C1EE",
  FOREST1: "#1D7324",
  FOREST2: "#238C2C",
  FOREST3: "#29A634",
  FOREST4: "#43BF4D",
  FOREST5: "#62D96B",
  GOLD1: "#5C4405",
  GOLD2: "#866103",
  GOLD3: "#D1980B",
  GOLD4: "#F0B726",
  GOLD5: "#FBD065",
  INDIGO1: "#5642A6",
  INDIGO2: "#634DBF",
  INDIGO3: "#7961DB",
  INDIGO4: "#9881F3",
  INDIGO5: "#BDADFF",
  LIME1: "#43501B",
  LIME2: "#5A701A",
  LIME3: "#8EB125",
  LIME4: "#B6D94C",
  LIME5: "#D4F17E",
  ROSE1: "#A82255",
  ROSE2: "#C22762",
  ROSE3: "#DB2C6F",
  ROSE4: "#F5498B",
  ROSE5: "#FF66A1",
  SEPIA1: "#5E4123",
  SEPIA2: "#7A542E",
  SEPIA3: "#946638",
  SEPIA4: "#AF855A",
  SEPIA5: "#D0B090",
  TURQUOISE1: "#004D46",
  TURQUOISE2: "#007067",
  TURQUOISE3: "#00A396",
  TURQUOISE4: "#13C9BA",
  TURQUOISE5: "#7AE1D8",
  VERMILION1: "#96290D",
  VERMILION2: "#B83211",
  VERMILION3: "#D33D17",
  VERMILION4: "#EB6847",
  VERMILION5: "#FF9980",
  VIOLET1: "#5C255C",
  VIOLET2: "#7C327C",
  VIOLET3: "#9D3F9D",
  VIOLET4: "#BD6BBD",
  VIOLET5: "#D69FD6"
}, E = o(o(o({}, L), D), G);
const p = (e, n = "") => {
  const r = {};
  return Object.keys(e).forEach((A) => {
    const a = e[A];
    let R = `${n}-${String(A)}`;
    n === "" && (R = String(A)), A === "DEFAULT" && (R = n), typeof a == "object" && a !== null && !Array.isArray(a) ? Object.assign(r, p(a, R)) : r[R] = a;
  }), r;
}, I = {
  colors: p({
    bp5: {
      black: E.BLACK,
      white: E.WHITE,
      "dark-gray": {
        1: E.DARK_GRAY1,
        2: E.DARK_GRAY2,
        3: E.DARK_GRAY3,
        4: E.DARK_GRAY4,
        5: E.DARK_GRAY5
      },
      gray: {
        1: E.GRAY1,
        2: E.GRAY2,
        3: E.GRAY3,
        4: E.GRAY4,
        5: E.GRAY5
      },
      "light-gray": {
        1: E.LIGHT_GRAY1,
        2: E.LIGHT_GRAY2,
        3: E.LIGHT_GRAY3,
        4: E.LIGHT_GRAY4,
        5: E.LIGHT_GRAY5
      },
      blue: {
        1: E.BLUE1,
        2: E.BLUE2,
        3: E.BLUE3,
        4: E.BLUE4,
        5: E.BLUE5
      },
      green: {
        1: E.GREEN1,
        2: E.GREEN2,
        3: E.GREEN3,
        4: E.GREEN4,
        5: E.GREEN5
      },
      orange: {
        1: E.ORANGE1,
        2: E.ORANGE2,
        3: E.ORANGE3,
        4: E.ORANGE4,
        5: E.ORANGE5
      },
      red: {
        1: E.RED1,
        2: E.RED2,
        3: E.RED3,
        4: E.RED4,
        5: E.RED5
      },
      vermilion: {
        1: E.VERMILION1,
        2: E.VERMILION2,
        3: E.VERMILION3,
        4: E.VERMILION4,
        5: E.VERMILION5
      },
      rose: {
        1: E.ROSE1,
        2: E.ROSE2,
        3: E.ROSE3,
        4: E.ROSE4,
        5: E.ROSE5
      },
      violet: {
        1: E.VIOLET1,
        2: E.VIOLET2,
        3: E.VIOLET3,
        4: E.VIOLET4,
        5: E.VIOLET5
      },
      indigo: {
        1: E.INDIGO1,
        2: E.INDIGO2,
        3: E.INDIGO3,
        4: E.INDIGO4,
        5: E.INDIGO5
      },
      cerulean: {
        1: E.CERULEAN1,
        2: E.CERULEAN2,
        3: E.CERULEAN3,
        4: E.CERULEAN4,
        5: E.CERULEAN5
      },
      turquoise: {
        1: E.TURQUOISE1,
        2: E.TURQUOISE2,
        3: E.TURQUOISE3,
        4: E.TURQUOISE4,
        5: E.TURQUOISE5
      },
      forest: {
        1: E.FOREST1,
        2: E.FOREST2,
        3: E.FOREST3,
        4: E.FOREST4,
        5: E.FOREST5
      },
      lime: {
        1: E.LIME1,
        2: E.LIME2,
        3: E.LIME3,
        4: E.LIME4,
        5: E.LIME5
      },
      gold: {
        1: E.GOLD1,
        2: E.GOLD2,
        3: E.GOLD3,
        4: E.GOLD4,
        5: E.GOLD5
      },
      sepia: {
        1: E.SEPIA1,
        2: E.SEPIA2,
        3: E.SEPIA3,
        4: E.SEPIA4,
        5: E.SEPIA5
      },
      intent: {
        primary: E.BLUE3,
        success: E.GREEN3,
        warning: E.ORANGE3,
        danger: E.RED3
      },
      "app-background-color": {
        DEFAULT: E.LIGHT_GRAY5,
        dark: E.DARK_GRAY2
      },
      "text-color": {
        DEFAULT: E.DARK_GRAY1,
        dark: E.LIGHT_GRAY5,
        muted: {
          DEFAULT: E.GRAY1,
          dark: E.GRAY4
        },
        disabled: {
          DEFAULT: E.GRAY1 + "99",
          dark: E.GRAY4 + "99"
          /* HexOpacity.p60 */
        }
      },
      "heading-color": {
        DEFAULT: E.DARK_GRAY1,
        dark: E.LIGHT_GRAY5
      },
      "link-color": {
        DEFAULT: E.BLUE2,
        dark: E.BLUE5
      },
      // eslint-disable-next-line prefer-template
      "text-selection-color": "#7dbcff99",
      "icon-color": {
        DEFAULT: E.GRAY1,
        dark: E.GRAY4,
        hover: {
          DEFAULT: E.DARK_GRAY1,
          dark: E.LIGHT_GRAY5
        },
        disabled: {
          DEFAULT: E.GRAY1 + "99",
          dark: E.GRAY4 + "99"
          /* HexOpacity.p60 */
        },
        selected: {
          DEFAULT: E.BLUE3,
          dark: E.BLUE3
        }
      },
      divider: {
        black: {
          DEFAULT: E.BLACK + "26",
          dark: E.BLACK + "66",
          muted: E.BLACK + "1a"
          /* HexOpacity.p10 */
        },
        white: {
          dark: E.WHITE + "33",
          muted: E.WHITE + "1a"
          /* HexOpacity.p10 */
        }
      },
      code: {
        "text-color": {
          DEFAULT: E.GRAY1,
          dark: E.GRAY4
        },
        "background-color": {
          DEFAULT: E.WHITE + "b3",
          dark: E.BLACK + "4d"
          /* HexOpacity.p30 */
        }
      }
    }
  })
}, i = {
  boxShadow: p({
    bp5: {
      elevation: {
        0: {
          DEFAULT: "0 0 0 1px rgba(17, 20, 24, 0.15)",
          dark: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)"
        },
        1: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 1px 1px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 1px 1px 0 rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        2: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 1px 1px rgba(17, 20, 24, 0.2)",
            "0 2px 6px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 1px 1px rgba(17, 20, 24, 0.4)",
            "0 2px 6px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        3: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 2px 4px rgba(17, 20, 24, 0.2)",
            "0 8px 24px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 2px 4px rgba(17, 20, 24, 0.4)",
            "0 8px 24px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        4: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 4px 8px rgba(17, 20, 24, 0.2)",
            "0 18px 46px 6px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 4px 8px rgba(17, 20, 24, 0.4)",
            "0 18px 46px 6px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        }
      },
      input: {
        DEFAULT: [
          "inset 0 0 0 1px rgba(17, 20, 24, 0.2)",
          "inset 0 1px 1px rgba(17, 20, 24, 0.3)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "inset 0 -1px 1px 0 rgba(255, 255, 255, 0.3)"
        ].join(", ")
      },
      dialog: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.4)",
          "0 8px 24px rgba(17, 20, 24, 0.4)"
        ].join(", ")
      },
      popover: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "0 0 0 1px hsl(215, 3%, 38%)",
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.4)",
          "0 8px 24px rgba(17, 20, 24, 0.4)"
        ].join(", ")
      },
      tooltip: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: ["0 2px 4px rgba(17, 20, 24, 0.4)", "0 8px 24px rgba(17, 20, 24, 0.4)"].join(", ")
      },
      toast: {
        DEFAULT: [
          "inset 0 0 0 1px rgba(17, 20, 24, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.2 * 2)",
          "0 8px 24px rgba(17, 20, 24, 0.2 * 2)"
        ].join(", ")
      }
    }
  })
}, x = {
  fontFamily: p({
    bp5: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "blueprint-icons-16",
        "sans-serif"
      ],
      mono: ["monospace"]
    }
  })
}, t = {
  transitionTimingFunction: p({
    bp5: {
      DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
      bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
    }
  })
}, O = {
  content: [],
  theme: {
    extend: {
      ...I,
      ...i,
      ...x,
      ...t
    }
  }
};
export {
  O as blueprint,
  I as colorsConfig,
  x as fontFamilyConfig,
  i as shadowsConfig,
  t as transitionTimingConfig
};
