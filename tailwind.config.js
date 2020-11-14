const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: {
        content: ["**/*.html"],
        options: {
            whitelist: [
                "xl:w-auto", "active",
            ],
            whitelistPatternsChildren: [/glide/]
        }
    },
    theme: {
        fontFamily: {
            hkbold: [
                "hk_groteskbold", "sans-serif",
            ],
            hksemibold: [
                "hk_grotesksemibold", "sans-serif",
            ],
            hkmedium: [
                "hk_groteskmedium", "sans-serif",
            ],
            hkregular: [
                "hk_groteskregular", "sans-serif",
            ],
            hklight: [
                "hk_grotesklight", "sans-serif",
            ],
            butlerblack: [
                "butlerblack", "sans-serif",
            ],
            butlerextrabold: [
                "butlerblack", "sans-serif",
            ],
            butlerbold: [
                "butlerblack", "sans-serif",
            ],
            butlermedium: [
                "butlermedium", "sans-serif",
            ],
            butlerregular: [
                "butlerregular", "sans-serif",
            ],
            butlerlight: [
                "butlerlight", "sans-serif",
            ],
            butlerultralight: ["butlerultralight", "sans-serif", ]
        },

        screens: {
            xs: "375px",
            ...defaultTheme.screens,
            xxl: "1400px"
        },

        colors: {
            transparent: "transparent",
            white: "#ffffff",
            black: "#000000",
            "primary-lightest": "#fff8f0",
            "primary-lighter": "#ffe8d9",
            "primary-light": "#fb6d11",
            primary: "#f35627 ",
            "secondary-lighter": "#7e736f",
            "secondary-light": "#37241f",
            secondary: "#2d1b15",
            "grey-lighter": "#f9f9f9",
            "grey-light": "#f6f6f6",
            grey: "#f3f3f3 ",
            "grey-dark": "#ececec",
            "grey-darker": "#cac6c4",
            "grey-darkest": "#8c9ba5",
            v: {
                // v for vibrant
                red: "#ff0000 ",
                "green-light": "#eef4e8",
                green: "#31c643",
                "blue-light": "#f4fdfd",
                blue: "#27d4f3",
                "blue-dark": "#32c2ea",
                "purple-light": "#f5f3fc",
                purple: "#3a15ce",
                pink: "#fbf1f0 "
            }
        },

        container: {
            center: true,
            padding: "1rem"
        },

        linearGradientColors: {
            team: [" #2d1b15 10%", "rgba(0, 0, 0, 0) 70%", ]
        },

        customForms: theme => ({
            default: {
                "input, textarea": {
                    fontFamily: theme("fontFamily.hkregular")
                        .join(", "),
                    color: theme("colors.secondary"),
                    padding: `${theme("spacing.3")} ${theme("spacing.5")}`,
                    borderColor: theme("colors.grey-darker"),
                    borderRadius: theme("borderRadius.default"),
                    width: theme("width.full"),
                    outline: theme("outline"),
                    "&:focus": {
                        boxShadow: theme("boxShadow.outline"),
                        borderColor: theme("colors.primary")
                    }
                },
                "multiselect, select": {
                    fontFamily: theme("fontFamily.hkregular")
                        .join(", "),
                    color: theme("colors.secondary-lighter"),
                    padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
                    borderColor: theme("colors.grey-darker"),
                    borderRadius: theme("borderRadius.default"),
                    width: theme("width.full"),
                    outline: theme("outline"),
                    iconColor: theme("colors.primary"),
                    "&:focus": {
                        boxShadow: theme("boxShadow.outline"),
                        borderColor: theme("colors.primary")
                    }
                },
                "checkbox, radio": {
                    borderColor: theme("colors.grey-darker"),
                    "&:checked": {
                        backgroundColor: theme(
                            "backgroundColor.primary")
                    },
                    "&:focus": {
                        boxShadow: theme("boxShadow.outline")
                    }
                }
            }
        }),

        extend: {
            spacing: {
                "14": "3.5rem", //56
                "16": "4rem", //64
                "18": "4.5rem", //72
                "20": "5rem", //80
                "24": "6rem", //96
                "28": "7rem", //112
                "32": "8rem", //128
                "36": "9rem", //144
                "40": "10rem", //160
                "48": "12rem", //192
                "52": "13rem", //208
                "56": "14rem", //224
                "60": "15rem", //240
                "64": "16rem", //256
                "68": "18rem", //288
                "76": "20rem", //320
                "80": "22rem", //352
                "82": "25rem", //400
                "86": "27rem", //432
                "90": "30rem", //480
                "94": "32rem", //512
                "96": "38.4rem", //615
                "100": "51rem", //816,,
            },

            width: {
                "3/10": "30%",
                "3/8": "37%",
                "5/11": "45%",
                "6/11": "55%",
                "13/14": "93%"
            },

            boxShadow: {
                default: "0 2px 2px rgba(58, 14, 23, 0.15)",
                md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                outline: "0 0 0 3px rgb(251,109,17, 0.5)"
            },

            opacity: {
                "85": "0.85"
            },

            fontSize: {
                "7xl": "2.80rem",
                "10xl": "8rem"
            },
            inset: {
                "25": "25%",
                "35": "35%",
                "40": "40%",
                "50": "50%",
                auto: "auto"
            },
            maxHeight: {
                "0": "0",
                infinite: "999px"
            },
            zIndex: {
                "-1": "-1"
            },

            listStyleType: {
                latin: "lower-latin",
                circle: "circle",
                square: "square",
                roman: "upper-roman"
            }
        }
    },
    variants: [
        "responsive",
        "group-hover",
        "hover",
        "focus",
        "last",
    ],
    plugins: [require("tailwindcss-gradients"), require(
        "@tailwindcss/custom-forms"), ]
};
