'use strict';

var colors = require('../node_modules/@blueprintjs/colors/lib/esm/colors.js');

var colorsConfig = {
    colors: {
        bp5: {
            black: colors.Colors.BLACK,
            white: colors.Colors.WHITE,
            "dark-gray": {
                1: colors.Colors.DARK_GRAY1,
                2: colors.Colors.DARK_GRAY2,
                3: colors.Colors.DARK_GRAY3,
                4: colors.Colors.DARK_GRAY4,
                5: colors.Colors.DARK_GRAY5
            },
            gray: {
                1: colors.Colors.GRAY1,
                2: colors.Colors.GRAY2,
                3: colors.Colors.GRAY3,
                4: colors.Colors.GRAY4,
                5: colors.Colors.GRAY5
            },
            "light-gray": {
                1: colors.Colors.LIGHT_GRAY1,
                2: colors.Colors.LIGHT_GRAY2,
                3: colors.Colors.LIGHT_GRAY3,
                4: colors.Colors.LIGHT_GRAY4,
                5: colors.Colors.LIGHT_GRAY5
            },
            blue: {
                1: colors.Colors.BLUE1,
                2: colors.Colors.BLUE2,
                3: colors.Colors.BLUE3,
                4: colors.Colors.BLUE4,
                5: colors.Colors.BLUE5
            },
            green: {
                1: colors.Colors.GREEN1,
                2: colors.Colors.GREEN2,
                3: colors.Colors.GREEN3,
                4: colors.Colors.GREEN4,
                5: colors.Colors.GREEN5
            },
            orange: {
                1: colors.Colors.ORANGE1,
                2: colors.Colors.ORANGE2,
                3: colors.Colors.ORANGE3,
                4: colors.Colors.ORANGE4,
                5: colors.Colors.ORANGE5
            },
            red: {
                1: colors.Colors.RED1,
                2: colors.Colors.RED2,
                3: colors.Colors.RED3,
                4: colors.Colors.RED4,
                5: colors.Colors.RED5
            },
            vermilion: {
                1: colors.Colors.VERMILION1,
                2: colors.Colors.VERMILION2,
                3: colors.Colors.VERMILION3,
                4: colors.Colors.VERMILION4,
                5: colors.Colors.VERMILION5
            },
            rose: {
                1: colors.Colors.ROSE1,
                2: colors.Colors.ROSE2,
                3: colors.Colors.ROSE3,
                4: colors.Colors.ROSE4,
                5: colors.Colors.ROSE5
            },
            violet: {
                1: colors.Colors.VIOLET1,
                2: colors.Colors.VIOLET2,
                3: colors.Colors.VIOLET3,
                4: colors.Colors.VIOLET4,
                5: colors.Colors.VIOLET5
            },
            indigo: {
                1: colors.Colors.INDIGO1,
                2: colors.Colors.INDIGO2,
                3: colors.Colors.INDIGO3,
                4: colors.Colors.INDIGO4,
                5: colors.Colors.INDIGO5
            },
            cerulean: {
                1: colors.Colors.CERULEAN1,
                2: colors.Colors.CERULEAN2,
                3: colors.Colors.CERULEAN3,
                4: colors.Colors.CERULEAN4,
                5: colors.Colors.CERULEAN5
            },
            turquoise: {
                1: colors.Colors.TURQUOISE1,
                2: colors.Colors.TURQUOISE2,
                3: colors.Colors.TURQUOISE3,
                4: colors.Colors.TURQUOISE4,
                5: colors.Colors.TURQUOISE5
            },
            forest: {
                1: colors.Colors.FOREST1,
                2: colors.Colors.FOREST2,
                3: colors.Colors.FOREST3,
                4: colors.Colors.FOREST4,
                5: colors.Colors.FOREST5
            },
            lime: {
                1: colors.Colors.LIME1,
                2: colors.Colors.LIME2,
                3: colors.Colors.LIME3,
                4: colors.Colors.LIME4,
                5: colors.Colors.LIME5
            },
            gold: {
                1: colors.Colors.GOLD1,
                2: colors.Colors.GOLD2,
                3: colors.Colors.GOLD3,
                4: colors.Colors.GOLD4,
                5: colors.Colors.GOLD5
            },
            sepia: {
                1: colors.Colors.SEPIA1,
                2: colors.Colors.SEPIA2,
                3: colors.Colors.SEPIA3,
                4: colors.Colors.SEPIA4,
                5: colors.Colors.SEPIA5
            },
            intent: {
                primary: colors.Colors.BLUE3,
                success: colors.Colors.GREEN3,
                warning: colors.Colors.ORANGE3,
                danger: colors.Colors.RED3
            },
            "app-background-color": {
                DEFAULT: colors.Colors.LIGHT_GRAY5,
                dark: colors.Colors.DARK_GRAY2
            },
            "text-color": {
                DEFAULT: colors.Colors.DARK_GRAY1,
                dark: colors.Colors.LIGHT_GRAY5,
                muted: {
                    DEFAULT: colors.Colors.GRAY1,
                    dark: colors.Colors.GRAY4
                },
                disabled: {
                    DEFAULT: colors.Colors.GRAY1 + "99",
                    dark: colors.Colors.GRAY4 + "99"
                }
            },
            "heading-color": {
                DEFAULT: colors.Colors.DARK_GRAY1,
                dark: colors.Colors.LIGHT_GRAY5
            },
            "link-color": {
                DEFAULT: colors.Colors.BLUE2,
                dark: colors.Colors.BLUE5
            },
            "text-selection-color": "#7dbcff" + "99",
            "icon-color": {
                DEFAULT: colors.Colors.GRAY1,
                dark: colors.Colors.GRAY4,
                hover: {
                    DEFAULT: colors.Colors.DARK_GRAY1,
                    dark: colors.Colors.LIGHT_GRAY5
                },
                disabled: {
                    DEFAULT: colors.Colors.GRAY1 + "99",
                    dark: colors.Colors.GRAY4 + "99"
                },
                selected: {
                    DEFAULT: colors.Colors.BLUE3,
                    dark: colors.Colors.BLUE3
                }
            },
            divider: {
                black: {
                    DEFAULT: colors.Colors.BLACK + "26",
                    dark: colors.Colors.BLACK + "66",
                    muted: colors.Colors.BLACK + "1a"
                },
                white: {
                    dark: colors.Colors.WHITE + "33",
                    muted: colors.Colors.WHITE + "1a"
                }
            },
            code: {
                "text-color": {
                    DEFAULT: colors.Colors.GRAY1,
                    dark: colors.Colors.GRAY4
                },
                "background-color": {
                    DEFAULT: colors.Colors.WHITE + "b3",
                    dark: colors.Colors.BLACK + "4d"
                }
            }
        }
    }
};

exports.colorsConfig = colorsConfig;
