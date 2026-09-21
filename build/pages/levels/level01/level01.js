export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/components/ControlButton/index.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "btnSwitch"
                                    ]
                                ],
                                {
                                    width: "50px",
                                    height: "56px",
                                    borderStyle: "none",
                                    borderRadius: "6px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "2px",
                                    paddingRight: "2px",
                                    paddingBottom: "2px",
                                    paddingLeft: "2px",
                                    marginTop: "4px",
                                    marginRight: "4px",
                                    marginBottom: "4px",
                                    marginLeft: "4px",
                                    flexDirection: "column"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "btnArrow"
                                    ]
                                ],
                                {
                                    width: "30px",
                                    height: "30px",
                                    borderStyle: "none",
                                    borderRadius: "4px",
                                    marginTop: "1px",
                                    marginRight: "1px",
                                    marginBottom: "1px",
                                    marginLeft: "1px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "btnUndo"
                                    ]
                                ],
                                {
                                    width: "50px",
                                    height: "36px",
                                    borderStyle: "none",
                                    borderRadius: "6px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "2px",
                                    paddingRight: "2px",
                                    paddingBottom: "2px",
                                    paddingLeft: "2px",
                                    marginTop: "4px",
                                    marginRight: "4px",
                                    marginBottom: "4px",
                                    marginLeft: "4px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "btnReset"
                                    ]
                                ],
                                {
                                    width: "50px",
                                    height: "36px",
                                    borderStyle: "none",
                                    borderRadius: "6px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "2px",
                                    paddingRight: "2px",
                                    paddingBottom: "2px",
                                    paddingLeft: "2px",
                                    marginTop: "4px",
                                    marginRight: "4px",
                                    marginBottom: "4px",
                                    marginLeft: "4px",
                                    fontSize: "12px",
                                    color: "white",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "icon-row"
                                    ]
                                ],
                                {
                                    justifyContent: "center",
                                    marginTop: "2px",
                                    marginRight: "0",
                                    marginBottom: "2px",
                                    marginLeft: "0"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "icon"
                                    ]
                                ],
                                {
                                    width: "20px",
                                    height: "20px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "resetImage"
                                    ]
                                ],
                                {
                                    width: "20px",
                                    height: "20px",
                                    marginTop: "0",
                                    marginRight: "0",
                                    marginBottom: "0",
                                    marginLeft: "0",
                                    paddingTop: "0",
                                    paddingRight: "0",
                                    paddingBottom: "0",
                                    paddingLeft: "0"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "undoImage"
                                    ]
                                ],
                                {
                                    width: "20px",
                                    height: "20px",
                                    marginTop: "0",
                                    marginRight: "0",
                                    marginBottom: "0",
                                    marginLeft: "0",
                                    paddingTop: "0",
                                    paddingRight: "0",
                                    paddingBottom: "0",
                                    paddingLeft: "0"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _default = exports.default = {
                                props: [
                                    "type",
                                    "color",
                                    "arrowIcon",
                                    "isWhite",
                                    "sizeConfig"
                                ],
                                computed: {
                                    btnClass () {
                                        if ("arrow" === this.type) return "btnArrow";
                                        if ("switch" === this.type) return "btnSwitch";
                                        if ("undo" === this.type) return "btnUndo";
                                        if ("reset" === this.type) return "btnReset";
                                        return "control-button";
                                    },
                                    btnStyle () {
                                        if (!this.sizeConfig) return "";
                                        const s = this.sizeConfig;
                                        if ("arrow" === this.type) return `width: ${s.arrowBtnSize}px; height: ${s.arrowBtnSize}px; margin: 1px;`;
                                        if ("switch" === this.type) return `width: ${s.switchBtnWidth}px; height: ${s.switchBtnHeight}px; margin: ${s.btnMargin}px;`;
                                        if ("undo" === this.type) return `width: ${s.undoBtnWidth}px; height: ${s.undoBtnHeight}px; margin: ${s.btnMargin}px;`;
                                        if ("reset" === this.type) return `width: ${s.resetBtnWidth}px; height: ${s.resetBtnHeight}px; margin: ${s.btnMargin}px;`;
                                        return "";
                                    },
                                    iconStyle () {
                                        if (!this.sizeConfig) return "width: 20px; height: 20px; object-fit: contain";
                                        const s = this.sizeConfig;
                                        return `width: ${s.btnIconSize}px; height: ${s.btnIconSize}px; object-fit: contain`;
                                    }
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = _vm_.btnClass;
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("background-color: " + _vm_.color + ";" + _vm_.btnStyle);
                                    }
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "arrow" === _vm_.type;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                src: function() {
                                                    return _vm_.arrowIcon;
                                                },
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                }
                                            }
                                        }, [])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "arrow" !== _vm_.type && "switch" === _vm_.type;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "icon-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "icon"
                                                    ],
                                                    src: "/common/image/icons/white-qie.png",
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "icon"
                                                    ],
                                                    src: "/common/image/icons/white-huan.png",
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "icon-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "icon"
                                                    ],
                                                    src: "/common/image/icons/white-dao.png",
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                    }
                                                }
                                            }, []),
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return _vm_.isWhite;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "icon"
                                                            ],
                                                            src: "/common/image/icons/white-white.png",
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                            }
                                                        }
                                                    }, [])
                                                ];
                                            }),
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return !_vm_.isWhite;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "icon"
                                                            ],
                                                            src: "/common/image/icons/white-black.png",
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                            }
                                                        }
                                                    }, [])
                                                ];
                                            })
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "switch" !== _vm_.type && "arrow" !== _vm_.type && "undo" === _vm_.type;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "undoImage"
                                                ],
                                                src: "/common/image/icons/white-che.png",
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "undoImage"
                                                ],
                                                src: "/common/image/icons/white-xiao.png",
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                }
                                            }
                                        }, [])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "undo" !== _vm_.type && "switch" !== _vm_.type && "arrow" !== _vm_.type && "reset" === _vm_.type;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "resetImage"
                                                ],
                                                src: "/common/image/icons/white-chong.png",
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "resetImage"
                                                ],
                                                src: "/common/image/icons/white-zhi.png",
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                }
                                            }
                                        }, [])
                                    ];
                                })
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/components/GameGrid/index.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "game-grid"
                                    ]
                                ],
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "#1a2530",
                                    paddingTop: "2px",
                                    paddingRight: "2px",
                                    paddingBottom: "2px",
                                    paddingLeft: "2px",
                                    marginTop: "4px",
                                    marginRight: "0",
                                    marginBottom: "4px",
                                    marginLeft: "0",
                                    borderRadius: "4px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "row"
                                    ]
                                ],
                                {
                                    display: "flex"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "cell"
                                    ]
                                ],
                                {
                                    width: "32px",
                                    height: "32px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderTopColor: "#333333",
                                    borderRightColor: "#333333",
                                    borderBottomColor: "#333333",
                                    borderLeftColor: "#333333",
                                    borderStyle: "solid",
                                    borderTopWidth: "1px",
                                    borderRightWidth: "1px",
                                    borderBottomWidth: "1px",
                                    borderLeftWidth: "1px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "combined-icon"
                                    ]
                                ],
                                {
                                    display: "flex",
                                    alignItems: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "icon"
                                    ]
                                ],
                                {
                                    display: "flex"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _default = exports.default = {
                                props: [
                                    'rows',
                                    'columns',
                                    'icons',
                                    'cellStyles',
                                    'sizeConfig'
                                ],
                                computed: {
                                    gridStyle () {
                                        if (!this.sizeConfig) return "padding: 2px; margin: 4px 0;";
                                        const s = this.sizeConfig;
                                        return `padding: ${s.gridPadding}px; margin: ${s.margin}px 0;`;
                                    },
                                    cellStyle () {
                                        if (!this.sizeConfig) return "width: 32px; height: 32px; border-width: 1px; border-style: solid";
                                        const s = this.sizeConfig;
                                        return `width: ${s.cellSize}px; height: ${s.cellSize}px; border-width: ${s.cellBorder}px; border-style: solid`;
                                    },
                                    iconStyle () {
                                        if (!this.sizeConfig) return "width: 20px; height: 20px; object-fit: contain";
                                        const s = this.sizeConfig;
                                        return `width: ${s.cellIconSize}px; height: ${s.cellIconSize}px; object-fit: contain`;
                                    },
                                    iconSmallStyle () {
                                        if (!this.sizeConfig) return "width: 15px; height: 15px; object-fit: contain";
                                        const s = this.sizeConfig;
                                        return `width: ${s.cellIconSmallSize}px; height: ${s.cellIconSmallSize}px; object-fit: contain`;
                                    }
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "game-grid"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.gridStyle);
                                    }
                                }
                            }, [
                                aiot.__cf__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        exp: function() {
                                            return _vm_.rows;
                                        },
                                        key: "y",
                                        value: "indexY"
                                    }
                                }, function(y, indexY) {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "row"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.columns;
                                                    },
                                                    key: "x",
                                                    value: "indexX"
                                                }
                                            }, function(x, indexX) {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "cell"
                                                            ],
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("background-color: " + _vm_.cellStyles[y + "," + x].bg + "; border-color: " + _vm_.cellStyles[y + "," + x].border + ";" + _vm_.cellStyle);
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return _vm_.icons[y + "," + x] && !_vm_.icons[y + "," + x].single && _vm_.icons[y + "," + x].src1 && _vm_.icons[y + "," + x].src2;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "combined-icon"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "icon"
                                                                            ],
                                                                            src: function() {
                                                                                return _vm_.icons[y + "," + x].src1;
                                                                            },
                                                                            style: function() {
                                                                                return __webpack_require__.g.$translateStyle$(_vm_.iconSmallStyle);
                                                                            }
                                                                        }
                                                                    }, []),
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "icon"
                                                                            ],
                                                                            src: function() {
                                                                                return _vm_.icons[y + "," + x].src2;
                                                                            },
                                                                            style: function() {
                                                                                return __webpack_require__.g.$translateStyle$(_vm_.iconSmallStyle);
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return !(_vm_.icons[y + "," + x] && !_vm_.icons[y + "," + x].single && _vm_.icons[y + "," + x].src1 && _vm_.icons[y + "," + x].src2) && _vm_.icons[y + "," + x] && _vm_.icons[y + "," + x].single && _vm_.icons[y + "," + x].src;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "icon"
                                                                        ],
                                                                        src: function() {
                                                                            return _vm_.icons[y + "," + x].src;
                                                                        },
                                                                        style: function() {
                                                                            return __webpack_require__.g.$translateStyle$(_vm_.iconStyle);
                                                                        }
                                                                    }
                                                                }, [])
                                                            ];
                                                        })
                                                    ])
                                                ];
                                            })
                                        ])
                                    ];
                                })
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/common/screenAdapter.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.BASE_SIZES = void 0;
                        exports.adaptFontSize = adaptFontSize;
                        exports.adaptGap = adaptGap;
                        exports.adaptSize = adaptSize;
                        exports.getAdaptedSizes = getAdaptedSizes;
                        exports.getScale = getScale;
                        exports.getStyles = getStyles;
                        const BASE_WIDTH = 192;
                        const BASE_HEIGHT = 490;
                        function getScale(screenWidth, screenHeight) {
                            const width = Number(screenWidth);
                            const height = Number(screenHeight);
                            const validWidth = Number.isFinite(width) && width > 0 ? width : BASE_WIDTH;
                            const fallbackHeight = 212 === validWidth ? 520 : BASE_HEIGHT;
                            const validHeight = Number.isFinite(height) && height > 0 ? height : fallbackHeight;
                            return Math.min(validWidth / BASE_WIDTH, validHeight / BASE_HEIGHT);
                        }
                        function adaptSize(baseSize, scale) {
                            return Math.floor(baseSize * scale);
                        }
                        function adaptGap(baseGap, scale) {
                            return Math.floor(baseGap * scale);
                        }
                        function adaptFontSize(baseFontSize, scale) {
                            return Math.floor(baseFontSize * scale);
                        }
                        const BASE_SIZES = exports.BASE_SIZES = {
                            cellSize: 32,
                            cellIconSize: 20,
                            cellIconSmallSize: 15,
                            cellBorder: 1,
                            switchBtnWidth: 50,
                            switchBtnHeight: 56,
                            arrowBtnSize: 30,
                            undoBtnWidth: 50,
                            undoBtnHeight: 36,
                            resetBtnWidth: 50,
                            resetBtnHeight: 36,
                            btnIconSize: 20,
                            cellGap: 0,
                            btnMargin: 4,
                            btnRowMargin: 2,
                            titleHeight: 28,
                            titleWidth: 120,
                            infoHeight: 36,
                            padding: 8,
                            paddingTop: 28,
                            paddingBottom: 32,
                            margin: 4,
                            marginTop: 4,
                            marginBottom: 4,
                            gridPadding: 2,
                            controlPanelMargin: 2
                        };
                        function getAdaptedSizes(screenWidth, screenHeight) {
                            const scale = getScale(screenWidth, screenHeight);
                            const cellSize = adaptSize(BASE_SIZES.cellSize, scale);
                            const cellBorder = Math.max(1, adaptSize(BASE_SIZES.cellBorder, scale));
                            return {
                                scale,
                                cellSize,
                                cellIconSize: adaptSize(BASE_SIZES.cellIconSize, scale),
                                cellIconSmallSize: Math.min(adaptSize(BASE_SIZES.cellIconSmallSize, scale), Math.floor((cellSize - 2 * cellBorder) / 2)),
                                cellBorder,
                                switchBtnWidth: adaptSize(BASE_SIZES.switchBtnWidth, scale),
                                switchBtnHeight: adaptSize(BASE_SIZES.switchBtnHeight, scale),
                                arrowBtnSize: adaptSize(BASE_SIZES.arrowBtnSize, scale),
                                undoBtnWidth: adaptSize(BASE_SIZES.undoBtnWidth, scale),
                                undoBtnHeight: adaptSize(BASE_SIZES.undoBtnHeight, scale),
                                resetBtnWidth: adaptSize(BASE_SIZES.resetBtnWidth, scale),
                                resetBtnHeight: adaptSize(BASE_SIZES.resetBtnHeight, scale),
                                btnIconSize: adaptSize(BASE_SIZES.btnIconSize, scale),
                                cellGap: adaptSize(BASE_SIZES.cellGap, scale),
                                btnMargin: adaptSize(BASE_SIZES.btnMargin, scale),
                                btnRowMargin: adaptSize(BASE_SIZES.btnRowMargin, scale),
                                titleHeight: adaptSize(BASE_SIZES.titleHeight, scale),
                                titleWidth: adaptSize(BASE_SIZES.titleWidth, scale),
                                infoHeight: adaptSize(BASE_SIZES.infoHeight, scale),
                                padding: adaptSize(BASE_SIZES.padding, scale),
                                paddingTop: Math.ceil(BASE_SIZES.paddingTop * scale),
                                paddingBottom: Math.ceil(BASE_SIZES.paddingBottom * scale),
                                margin: adaptSize(BASE_SIZES.margin, scale),
                                marginTop: adaptSize(BASE_SIZES.marginTop, scale),
                                marginBottom: adaptSize(BASE_SIZES.marginBottom, scale),
                                gridPadding: adaptSize(BASE_SIZES.gridPadding, scale),
                                controlPanelMargin: adaptSize(BASE_SIZES.controlPanelMargin, scale)
                            };
                        }
                        function getStyles(sizes) {
                            return {
                                cell: {
                                    width: `${sizes.cellSize}px`,
                                    height: `${sizes.cellSize}px`,
                                    border: `${sizes.cellBorder}px solid #333333`
                                },
                                cellIcon: {
                                    width: `${sizes.cellIconSize}px`,
                                    height: `${sizes.cellIconSize}px`
                                },
                                cellIconSmall: {
                                    width: `${sizes.cellIconSmallSize}px`,
                                    height: `${sizes.cellIconSmallSize}px`
                                },
                                switchBtn: {
                                    width: `${sizes.switchBtnWidth}px`,
                                    height: `${sizes.switchBtnHeight}px`,
                                    margin: `${sizes.btnMargin}px`
                                },
                                arrowBtn: {
                                    width: `${sizes.arrowBtnSize}px`,
                                    height: `${sizes.arrowBtnSize}px`,
                                    margin: '1px'
                                },
                                undoBtn: {
                                    width: `${sizes.undoBtnWidth}px`,
                                    height: `${sizes.undoBtnHeight}px`,
                                    margin: `${sizes.btnMargin}px`
                                },
                                resetBtn: {
                                    width: `${sizes.resetBtnWidth}px`,
                                    height: `${sizes.resetBtnHeight}px`,
                                    margin: `${sizes.btnMargin}px`
                                },
                                btnIcon: {
                                    width: `${sizes.btnIconSize}px`,
                                    height: `${sizes.btnIconSize}px`
                                },
                                controlPanel: {
                                    margin: `${sizes.controlPanelMargin}px`
                                },
                                btnRow1: {
                                    marginBottom: `${sizes.btnRowMargin}px`
                                },
                                container: {
                                    padding: `${sizes.paddingTop}px ${sizes.padding}px ${sizes.paddingBottom}px`
                                },
                                title: {
                                    height: `${sizes.titleHeight}px`,
                                    width: `${sizes.titleWidth}px`,
                                    margin: `${sizes.marginTop}px 0 3px 0`
                                },
                                info: {
                                    height: `${sizes.infoHeight}px`,
                                    margin: '2px'
                                },
                                gameGrid: {
                                    padding: `${sizes.gridPadding}px`,
                                    margin: `${sizes.margin}px 0`
                                },
                                controlArea: {
                                    marginTop: `${sizes.marginTop}px`
                                },
                                switchArea: {
                                    marginBottom: `${sizes.marginBottom}px`
                                }
                            };
                        }
                    },
                    "./src/game/GameState.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.GameState = void 0;
                        var _constants = __webpack_require__("./src/game/constants.js");
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        class GameState {
                            constructor(){
                                this.mapWidth = 5;
                                this.mapHeight = 7;
                                this.reset();
                            }
                            reset() {
                                this.mapRules = {};
                                this.whiteX = 0;
                                this.whiteY = 0;
                                this.blackX = 0;
                                this.blackY = 0;
                                this.lastPlayerAt = {};
                                this.whiteBoxes = [];
                                this.blackBoxes = [];
                                this.whiteBoxTargets = [];
                                this.blackBoxTargets = [];
                                this.whitePlayerTarget = [];
                                this.blackPlayerTarget = [];
                                this.currentPlayer = _constants.GAME_CONSTANTS.PLAYER_TYPES.BLACK;
                                this.stepCount = 0;
                                this.history = [];
                                this.buildCellLookupCache();
                            }
                            saveState() {
                                const stateSnapshot = {
                                    whiteX: this.whiteX,
                                    whiteY: this.whiteY,
                                    blackX: this.blackX,
                                    blackY: this.blackY,
                                    whiteBoxes: this.whiteBoxes.map((b)=>({
                                            x: b.x,
                                            y: b.y
                                        })),
                                    blackBoxes: this.blackBoxes.map((b)=>({
                                            x: b.x,
                                            y: b.y
                                        })),
                                    currentPlayer: this.currentPlayer,
                                    stepCount: this.stepCount,
                                    lastPlayerAt: _objectSpread({}, this.lastPlayerAt)
                                };
                                this.history.push(stateSnapshot);
                                if (this.history.length > 50) this.history.shift();
                            }
                            undo() {
                                if (0 === this.history.length) return false;
                                const prevState = this.history.pop();
                                this.whiteX = prevState.whiteX;
                                this.whiteY = prevState.whiteY;
                                this.blackX = prevState.blackX;
                                this.blackY = prevState.blackY;
                                this.whiteBoxes = prevState.whiteBoxes;
                                this.blackBoxes = prevState.blackBoxes;
                                this.currentPlayer = prevState.currentPlayer;
                                this.stepCount = prevState.stepCount;
                                this.lastPlayerAt = prevState.lastPlayerAt;
                                this.buildBoxLookupCache();
                                return true;
                            }
                            canUndo() {
                                return this.history.length > 0;
                            }
                            getMapValue(y, x) {
                                return this.mapRules[`${y},${x}`] || _constants.GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR;
                            }
                            setMapValue(y, x, value) {
                                this.mapRules[`${y},${x}`] = value;
                            }
                            buildCellLookupCache() {
                                this.buildBoxLookupCache();
                                this._whiteBoxTargetSet = new Set(this.whiteBoxTargets.map((t)=>`${t.y},${t.x}`));
                                this._blackBoxTargetSet = new Set(this.blackBoxTargets.map((t)=>`${t.y},${t.x}`));
                                this._whitePlayerTargetSet = new Set(this.whitePlayerTarget.map((t)=>`${t.y},${t.x}`));
                                this._blackPlayerTargetSet = new Set(this.blackPlayerTarget.map((t)=>`${t.y},${t.x}`));
                            }
                            buildBoxLookupCache() {
                                this._whiteBoxSet = new Set(this.whiteBoxes.map((b)=>`${b.y},${b.x}`));
                                this._blackBoxSet = new Set(this.blackBoxes.map((b)=>`${b.y},${b.x}`));
                            }
                            hasWhiteBox(x, y) {
                                return this._whiteBoxSet.has(`${y},${x}`);
                            }
                            hasBlackBox(x, y) {
                                return this._blackBoxSet.has(`${y},${x}`);
                            }
                            isWhiteBoxTarget(x, y) {
                                return this._whiteBoxTargetSet.has(`${y},${x}`);
                            }
                            isBlackBoxTarget(x, y) {
                                return this._blackBoxTargetSet.has(`${y},${x}`);
                            }
                            isWhitePlayerTarget(x, y) {
                                return this._whitePlayerTargetSet.has(`${y},${x}`);
                            }
                            isBlackPlayerTarget(x, y) {
                                return this._blackPlayerTargetSet.has(`${y},${x}`);
                            }
                            switchPlayer() {
                                this.currentPlayer = this.currentPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE ? _constants.GAME_CONSTANTS.PLAYER_TYPES.BLACK : _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE;
                                return this.currentPlayer;
                            }
                            recordPlayerMove(x, y, playerType) {
                                this.lastPlayerAt[`${y},${x}`] = playerType;
                            }
                        }
                        exports.GameState = GameState;
                    },
                    "./src/game/IconManager.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.IconManager = void 0;
                        var _constants = __webpack_require__("./src/game/constants.js");
                        const ICON_PATHS = {
                            "white-player": "/common/image/icons/grey-white.png",
                            "black-player": "/common/image/icons/white-black.png",
                            "white-box": "/common/image/icons/grey-box.png",
                            "black-box": "/common/image/icons/white-box.png",
                            "white-target": "/common/image/icons/grey-target.png",
                            "black-target": "/common/image/icons/white-target.png"
                        };
                        class IconManager {
                            constructor(gameState){
                                this.state = gameState;
                            }
                            getIconParts(y, x) {
                                const type = this.getIconType(y, x);
                                if (!type) return {
                                    single: true,
                                    src: '',
                                    src1: '',
                                    src2: ''
                                };
                                const parts = type.split("-");
                                if (4 !== parts.length) return {
                                    single: true,
                                    src: this.getIconImagePath(type),
                                    src1: '',
                                    src2: ''
                                };
                                {
                                    const firstPart = parts[0] + "-" + parts[1];
                                    const secondPart = parts[2] + "-" + parts[3];
                                    return {
                                        single: false,
                                        src: '',
                                        src1: this.getIconImagePath(firstPart),
                                        src2: this.getIconImagePath(secondPart)
                                    };
                                }
                            }
                            getIconType(y, x) {
                                const hasWhitePlayer = y === this.state.whiteY && x === this.state.whiteX;
                                const hasBlackPlayer = y === this.state.blackY && x === this.state.blackX;
                                if (hasWhitePlayer && hasBlackPlayer) {
                                    const lastPlayer = this.state.lastPlayerAt[`${y},${x}`];
                                    if (lastPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE) return "white-player";
                                    return "black-player";
                                }
                                if (hasWhitePlayer) return "white-player";
                                if (hasBlackPlayer) return "black-player";
                                const hasWhiteBox = this.state.hasWhiteBox(x, y);
                                if (hasWhiteBox) return "white-box";
                                const hasBlackBox = this.state.hasBlackBox(x, y);
                                if (hasBlackBox) return "black-box";
                                const isWhiteBoxTarget = this.state.isWhiteBoxTarget(x, y);
                                if (isWhiteBoxTarget) return "white-box-white-target";
                                const isBlackBoxTarget = this.state.isBlackBoxTarget(x, y);
                                if (isBlackBoxTarget) return "black-box-black-target";
                                const isWhitePlayerTarget = this.state.isWhitePlayerTarget(x, y);
                                if (isWhitePlayerTarget) return "white-player-white-target";
                                const isBlackPlayerTarget = this.state.isBlackPlayerTarget(x, y);
                                if (isBlackPlayerTarget) return "black-player-black-target";
                                return null;
                            }
                            getIconImagePath(type) {
                                return ICON_PATHS[type] || "";
                            }
                            updateCellIcons() {
                                const icons = {};
                                for(let y = 0; y < this.state.mapHeight; y++){
                                    for(let x = 0; x < this.state.mapWidth; x++){
                                        const parts = this.getIconParts(y, x);
                                        icons[`${y},${x}`] = parts;
                                    }
                                }
                                return icons;
                            }
                        }
                        exports.IconManager = IconManager;
                    },
                    "./src/game/MoveValidator.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.MoveValidator = void 0;
                        var _constants = __webpack_require__("./src/game/constants.js");
                        class MoveValidator {
                            constructor(gameState){
                                this.state = gameState;
                            }
                            validateMove(dx, dy, isWhite) {
                                const [x, y] = isWhite ? [
                                    this.state.whiteX,
                                    this.state.whiteY
                                ] : [
                                    this.state.blackX,
                                    this.state.blackY
                                ];
                                const [nx, ny] = [
                                    x + dx,
                                    y + dy
                                ];
                                if (!this.checkBoundary(nx, ny)) return {
                                    valid: false,
                                    message: "不能越界！"
                                };
                                if (!this.checkTerrain(nx, ny, isWhite)) {
                                    const message = isWhite ? "白角色只能走黑色地形或白位！" : "黑角色只能走白色地形或黑位！";
                                    return {
                                        valid: false,
                                        message
                                    };
                                }
                                const whiteBoxIndex = this.state.whiteBoxes.findIndex((b)=>b.x === nx && b.y === ny);
                                const blackBoxIndex = this.state.blackBoxes.findIndex((b)=>b.x === nx && b.y === ny);
                                if (-1 !== whiteBoxIndex) return this.validateWhiteBoxPush(dx, dy, isWhite, whiteBoxIndex, nx, ny);
                                if (-1 !== blackBoxIndex) return this.validateBlackBoxPush(dx, dy, isWhite, blackBoxIndex, nx, ny);
                                return {
                                    valid: true,
                                    action: 'move',
                                    data: {
                                        isWhite,
                                        nx,
                                        ny
                                    }
                                };
                            }
                            checkBoundary(x, y) {
                                return x >= 0 && x < this.state.mapWidth && y >= 0 && y < this.state.mapHeight;
                            }
                            checkTerrain(x, y, isWhite) {
                                const targetValue = this.state.getMapValue(y, x);
                                const otherX = isWhite ? this.state.blackX : this.state.whiteX;
                                const otherY = isWhite ? this.state.blackY : this.state.whiteY;
                                const isTargetOppositePlayer = x === otherX && y === otherY;
                                const hasWhiteBox = this.state.hasWhiteBox(x, y);
                                const hasBlackBox = this.state.hasBlackBox(x, y);
                                const isWhiteBoxTarget = this.state.isWhiteBoxTarget(x, y);
                                const isBlackBoxTarget = this.state.isBlackBoxTarget(x, y);
                                const isWhitePlayerTarget = this.state.isWhitePlayerTarget(x, y);
                                const isBlackPlayerTarget = this.state.isBlackPlayerTarget(x, y);
                                if (isWhite) return targetValue === _constants.GAME_CONSTANTS.CELL_TYPES.BLACK_WALL || hasBlackBox || isBlackBoxTarget || isWhitePlayerTarget || isTargetOppositePlayer;
                                return targetValue === _constants.GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR || hasWhiteBox || isWhiteBoxTarget || isBlackPlayerTarget || isTargetOppositePlayer;
                            }
                            validateWhiteBoxPush(dx, dy, isWhite, boxIndex, nx, ny) {
                                if (!isWhite) return {
                                    valid: true,
                                    action: 'move',
                                    data: {
                                        isWhite: false,
                                        nx,
                                        ny
                                    }
                                };
                                const boxNextX = nx + dx;
                                const boxNextY = ny + dy;
                                if (!this.checkBoundary(boxNextX, boxNextY)) return {
                                    valid: false,
                                    message: "箱子不能越界！"
                                };
                                if (this.isBlocked(boxNextX, boxNextY, boxIndex, 'white')) return {
                                    valid: false,
                                    message: "箱子前方被阻挡！"
                                };
                                const boxNextValue = this.state.getMapValue(boxNextY, boxNextX);
                                const onBlackTarget = this.state.isBlackBoxTarget(boxNextX, boxNextY);
                                if (boxNextValue !== _constants.GAME_CONSTANTS.CELL_TYPES.BLACK_WALL && !onBlackTarget) return {
                                    valid: false,
                                    message: "白箱子只能在黑色地形上移动！"
                                };
                                return {
                                    valid: true,
                                    action: 'push',
                                    data: {
                                        isWhite: true,
                                        playerPos: {
                                            nx,
                                            ny
                                        },
                                        boxPos: {
                                            x: boxNextX,
                                            y: boxNextY
                                        },
                                        boxIndex,
                                        boxType: 'white'
                                    }
                                };
                            }
                            validateBlackBoxPush(dx, dy, isWhite, boxIndex, nx, ny) {
                                if (isWhite) return {
                                    valid: true,
                                    action: 'move',
                                    data: {
                                        isWhite: true,
                                        nx,
                                        ny
                                    }
                                };
                                const boxNextX = nx + dx;
                                const boxNextY = ny + dy;
                                if (!this.checkBoundary(boxNextX, boxNextY)) return {
                                    valid: false,
                                    message: "箱子不能越界！"
                                };
                                if (this.isBlocked(boxNextX, boxNextY, boxIndex, 'black')) return {
                                    valid: false,
                                    message: "箱子前方被阻挡！"
                                };
                                const boxNextValue = this.state.getMapValue(boxNextY, boxNextX);
                                const onWhiteTarget = this.state.isWhiteBoxTarget(boxNextX, boxNextY);
                                if (boxNextValue !== _constants.GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR && !onWhiteTarget) return {
                                    valid: false,
                                    message: "黑箱子只能在白色地形上移动！"
                                };
                                return {
                                    valid: true,
                                    action: 'push',
                                    data: {
                                        isWhite: false,
                                        playerPos: {
                                            nx,
                                            ny
                                        },
                                        boxPos: {
                                            x: boxNextX,
                                            y: boxNextY
                                        },
                                        boxIndex,
                                        boxType: 'black'
                                    }
                                };
                            }
                            isBlocked(x, y, excludeIndex, boxType) {
                                if ('white' === boxType) {
                                    const blockedByWhite = this.state.whiteBoxes.some((b, i)=>i !== excludeIndex && b.x === x && b.y === y);
                                    const blockedByBlack = this.state.blackBoxes.some((b)=>b.x === x && b.y === y);
                                    if (blockedByWhite || blockedByBlack) return true;
                                } else {
                                    const blockedByBlack = this.state.blackBoxes.some((b, i)=>i !== excludeIndex && b.x === x && b.y === y);
                                    const blockedByWhite = this.state.whiteBoxes.some((b)=>b.x === x && b.y === y);
                                    if (blockedByWhite || blockedByBlack) return true;
                                }
                                const blockedByPlayer = x === this.state.whiteX && y === this.state.whiteY || x === this.state.blackX && y === this.state.blackY;
                                return blockedByPlayer;
                            }
                        }
                        exports.MoveValidator = MoveValidator;
                    },
                    "./src/game/WinChecker.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.WinChecker = void 0;
                        class WinChecker {
                            constructor(gameState){
                                this.state = gameState;
                            }
                            checkWin() {
                                const whiteWin = this.checkWhiteBoxes();
                                const blackWin = this.checkBlackBoxes();
                                const whitePlayerOnTarget = this.checkWhitePlayerTarget();
                                const blackPlayerOnTarget = this.checkBlackPlayerTarget();
                                return whiteWin && blackWin && whitePlayerOnTarget && blackPlayerOnTarget && (this.state.whiteBoxes.length > 0 || this.state.blackBoxes.length > 0);
                            }
                            checkWhiteBoxes() {
                                return this.state.whiteBoxes.every((box)=>this.state.whiteBoxTargets.some((target)=>target.x === box.x && target.y === box.y));
                            }
                            checkBlackBoxes() {
                                return this.state.blackBoxes.every((box)=>this.state.blackBoxTargets.some((target)=>target.x === box.x && target.y === box.y));
                            }
                            checkWhitePlayerTarget() {
                                return this.state.whitePlayerTarget.some((pos)=>pos.x === this.state.whiteX && pos.y === this.state.whiteY);
                            }
                            checkBlackPlayerTarget() {
                                return this.state.blackPlayerTarget.some((pos)=>pos.x === this.state.blackX && pos.y === this.state.blackY);
                            }
                        }
                        exports.WinChecker = WinChecker;
                    },
                    "./src/game/constants.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.GAME_CONSTANTS = void 0;
                        const GAME_CONSTANTS = exports.GAME_CONSTANTS = {
                            CELL_TYPES: {
                                WHITE_FLOOR: 0,
                                BLACK_WALL: 1
                            },
                            PLAYER_TYPES: {
                                WHITE: 6,
                                BLACK: 7
                            },
                            BUTTON_COLORS: {
                                DEFAULT_SWITCH: "#3498DB",
                                DEFAULT_ARROW: "#2ECC71",
                                DEFAULT_RESET: "#E74C3C",
                                DEFAULT_UNDO: "#9B59B6",
                                PRESSED_SWITCH: "#FF416C",
                                PRESSED_ARROW: "#36D1DC",
                                PRESSED_RESET: "#FF6B6B",
                                PRESSED_UNDO: "#8E44AD"
                            }
                        };
                    },
                    "./src/game/index.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.Game = void 0;
                        var _GameState = __webpack_require__("./src/game/GameState.js");
                        var _MoveValidator = __webpack_require__("./src/game/MoveValidator.js");
                        var _WinChecker = __webpack_require__("./src/game/WinChecker.js");
                        var _IconManager = __webpack_require__("./src/game/IconManager.js");
                        var _constants = __webpack_require__("./src/game/constants.js");
                        function ownKeys(e, r) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                r && (o = o.filter(function(r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })), t.push.apply(t, o);
                            }
                            return t;
                        }
                        function _objectSpread(e) {
                            for(var r = 1; r < arguments.length; r++){
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                                    _defineProperty(e, r, t[r]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                });
                            }
                            return e;
                        }
                        function _defineProperty(e, r, t) {
                            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = t, e;
                        }
                        function _toPropertyKey(t) {
                            var i = _toPrimitive(t, "string");
                            return "symbol" == typeof i ? i : i + "";
                        }
                        function _toPrimitive(t, r) {
                            if ("object" != typeof t || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, r || "default");
                                if ("object" != typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === r ? String : Number)(t);
                        }
                        class Game {
                            constructor(){
                                this.state = new _GameState.GameState();
                                this.validator = new _MoveValidator.MoveValidator(this.state);
                                this.winChecker = new _WinChecker.WinChecker(this.state);
                                this.iconManager = new _IconManager.IconManager(this.state);
                            }
                            initLevel(levelData) {
                                this.state.reset();
                                if (levelData.mapRules) this.state.mapRules = _objectSpread({}, levelData.mapRules);
                                if (levelData.whitePlayer) {
                                    this.state.whiteX = levelData.whitePlayer.x;
                                    this.state.whiteY = levelData.whitePlayer.y;
                                    this.state.recordPlayerMove(levelData.whitePlayer.x, levelData.whitePlayer.y, _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE);
                                }
                                if (levelData.blackPlayer) {
                                    this.state.blackX = levelData.blackPlayer.x;
                                    this.state.blackY = levelData.blackPlayer.y;
                                    this.state.recordPlayerMove(levelData.blackPlayer.x, levelData.blackPlayer.y, _constants.GAME_CONSTANTS.PLAYER_TYPES.BLACK);
                                }
                                if (levelData.whiteBoxes) this.state.whiteBoxes = levelData.whiteBoxes.map((b)=>({
                                        x: b.x,
                                        y: b.y
                                    }));
                                if (levelData.blackBoxes) this.state.blackBoxes = levelData.blackBoxes.map((b)=>({
                                        x: b.x,
                                        y: b.y
                                    }));
                                if (levelData.whiteBoxTargets) this.state.whiteBoxTargets = levelData.whiteBoxTargets.map((t)=>({
                                        x: t.x,
                                        y: t.y
                                    }));
                                if (levelData.blackBoxTargets) this.state.blackBoxTargets = levelData.blackBoxTargets.map((t)=>({
                                        x: t.x,
                                        y: t.y
                                    }));
                                if (levelData.whitePlayerTarget) this.state.whitePlayerTarget = levelData.whitePlayerTarget.map((t)=>({
                                        x: t.x,
                                        y: t.y
                                    }));
                                if (levelData.blackPlayerTarget) this.state.blackPlayerTarget = levelData.blackPlayerTarget.map((t)=>({
                                        x: t.x,
                                        y: t.y
                                    }));
                                if (void 0 !== levelData.currentPlayer) this.state.currentPlayer = levelData.currentPlayer;
                                this.state.buildCellLookupCache();
                            }
                            move(dx, dy) {
                                const isWhite = this.state.currentPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE;
                                const result = this.validator.validateMove(dx, dy, isWhite);
                                if (!result.valid) return {
                                    success: false,
                                    message: result.message
                                };
                                this.state.saveState();
                                if ('move' === result.action) this.movePlayer(result.data.isWhite, result.data.nx, result.data.ny);
                                else if ('push' === result.action) this.pushBox(result.data.isWhite, result.data.playerPos, result.data.boxPos, result.data.boxIndex, result.data.boxType);
                                this.state.stepCount++;
                                const isWin = this.winChecker.checkWin();
                                return {
                                    success: true,
                                    isWin,
                                    display: this.updateCellDisplay()
                                };
                            }
                            undo() {
                                const result = this.state.undo();
                                if (result) return {
                                    success: true
                                };
                                return {
                                    success: false,
                                    message: "无法撤销"
                                };
                            }
                            canUndo() {
                                return this.state.canUndo();
                            }
                            movePlayer(isWhite, x, y) {
                                const playerType = isWhite ? _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE : _constants.GAME_CONSTANTS.PLAYER_TYPES.BLACK;
                                if (isWhite) {
                                    this.state.whiteX = x;
                                    this.state.whiteY = y;
                                } else {
                                    this.state.blackX = x;
                                    this.state.blackY = y;
                                }
                                this.state.recordPlayerMove(x, y, playerType);
                            }
                            pushBox(isWhite, playerPos, boxPos, boxIndex, boxType) {
                                this.movePlayer(isWhite, playerPos.nx, playerPos.ny);
                                if ('white' === boxType) {
                                    this.state.whiteBoxes[boxIndex].x = boxPos.x;
                                    this.state.whiteBoxes[boxIndex].y = boxPos.y;
                                } else {
                                    this.state.blackBoxes[boxIndex].x = boxPos.x;
                                    this.state.blackBoxes[boxIndex].y = boxPos.y;
                                }
                                this.state.buildBoxLookupCache();
                            }
                            updateCellIcons() {
                                return this.updateCellDisplay();
                            }
                            updateCellDisplay() {
                                const icons = {};
                                const styles = {};
                                const state = this.state;
                                for(let y = 0; y < state.mapHeight; y++){
                                    for(let x = 0; x < state.mapWidth; x++){
                                        const key = `${y},${x}`;
                                        icons[key] = this.iconManager.getIconParts(y, x);
                                        styles[key] = {
                                            bg: this.getCellBg(y, x),
                                            border: this.getCellBorder(y, x)
                                        };
                                    }
                                }
                                return {
                                    icons,
                                    styles
                                };
                            }
                            switchPlayer() {
                                this.state.switchPlayer();
                                return this.state.currentPlayer;
                            }
                            checkWin() {
                                return this.winChecker.checkWin();
                            }
                            getCellBg(y, x) {
                                const state = this.state;
                                const isWhiteBoxTarget = state.isWhiteBoxTarget(x, y);
                                const isBlackBoxTarget = state.isBlackBoxTarget(x, y);
                                const hasWhiteBox = state.hasWhiteBox(x, y);
                                const hasBlackBox = state.hasBlackBox(x, y);
                                const hasWhitePlayer = y === state.whiteY && x === state.whiteX;
                                const hasBlackPlayer = y === state.blackY && x === state.blackX;
                                if (hasWhitePlayer && hasBlackPlayer) {
                                    const lastPlayer = state.lastPlayerAt[`${y},${x}`];
                                    if (lastPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE) return "#FFFFFF";
                                    return "#000000";
                                }
                                if (hasWhitePlayer) return "#FFFFFF";
                                if (hasBlackPlayer) return "#000000";
                                if (hasWhiteBox) return "#E0E0E0";
                                if (hasBlackBox) return "#1A1A1A";
                                if (isWhiteBoxTarget) return "#FCD3D3";
                                if (isBlackBoxTarget) return "#333333";
                                const hasWhitePlayerTarget = state.isWhitePlayerTarget(x, y);
                                const hasBlackPlayerTarget = state.isBlackPlayerTarget(x, y);
                                if (hasWhitePlayerTarget) return "#D3D3D3";
                                if (hasBlackPlayerTarget) return "#555555";
                                return 0 === state.getMapValue(y, x) ? "#F8F9FA" : "#2D3748";
                            }
                            getCellBorder(y, x) {
                                const state = this.state;
                                const hasWhitePlayer = y === state.whiteY && x === state.whiteX;
                                const hasBlackPlayer = y === state.blackY && x === state.blackX;
                                if (hasWhitePlayer && hasBlackPlayer) {
                                    const lastPlayer = state.lastPlayerAt[`${y},${x}`];
                                    if (lastPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE) return "#3498DB";
                                    return "#E74C3C";
                                }
                                if (hasWhitePlayer) return "#3498DB";
                                if (hasBlackPlayer) return "#E74C3C";
                                return "#333333";
                            }
                        }
                        exports.Game = Game;
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.5";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.5";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    $app_exports$['game-grid'] = __webpack_require__("./src/components/GameGrid/index.ux");
                    $app_exports$['control-button'] = __webpack_require__("./src/components/ControlButton/index.ux");
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "container"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                backgroundColor: "#1a1a1a",
                                paddingTop: "28px",
                                paddingRight: "8px",
                                paddingBottom: "32px",
                                paddingLeft: "8px",
                                height: "100%",
                                width: "100%"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "title"
                                ]
                            ],
                            {
                                backgroundColor: "#1a1a1a",
                                height: "28px",
                                width: "120px",
                                objectFit: "fill",
                                marginTop: "6px",
                                marginRight: "0",
                                marginBottom: "3px",
                                marginLeft: "0"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "info"
                                ]
                            ],
                            {
                                backgroundColor: "#ffffff",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                marginTop: "2px",
                                marginRight: "2px",
                                marginBottom: "2px",
                                marginLeft: "2px",
                                borderRadius: "6px",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "infoText"
                                ]
                            ],
                            {
                                height: "40px",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                objectFit: "fill",
                                borderRadius: "inherit"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hint"
                                ]
                            ],
                            {
                                height: "40px",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                objectFit: "fill",
                                borderRadius: "inherit"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "controlArea"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "100%",
                                marginTop: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "switchArea"
                                ]
                            ],
                            {
                                marginBottom: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "controlPanel"
                                ]
                            ],
                            {
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "4px",
                                marginRight: "4px",
                                marginBottom: "4px",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btnRow1"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btnRow2"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "controlArea2"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "100%",
                                marginTop: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "undoArea"
                                ]
                            ],
                            {
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "resetArea"
                                ]
                            ],
                            {
                                alignItems: "center"
                            }
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _index = __webpack_require__("./src/game/index.js");
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _screenAdapter = __webpack_require__("./src/common/screenAdapter.js");
                        var _constants = __webpack_require__("./src/game/constants.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const BUTTON_COLORS = _constants.GAME_CONSTANTS.BUTTON_COLORS;
                        const BUTTON_FEEDBACK = {
                            up: [
                                BUTTON_COLORS.DEFAULT_ARROW,
                                BUTTON_COLORS.PRESSED_ARROW,
                                200
                            ],
                            down: [
                                BUTTON_COLORS.DEFAULT_ARROW,
                                BUTTON_COLORS.PRESSED_ARROW,
                                200
                            ],
                            left: [
                                BUTTON_COLORS.DEFAULT_ARROW,
                                BUTTON_COLORS.PRESSED_ARROW,
                                200
                            ],
                            right: [
                                BUTTON_COLORS.DEFAULT_ARROW,
                                BUTTON_COLORS.PRESSED_ARROW,
                                200
                            ],
                            switch: [
                                BUTTON_COLORS.DEFAULT_SWITCH,
                                BUTTON_COLORS.PRESSED_SWITCH,
                                500
                            ],
                            reset: [
                                BUTTON_COLORS.DEFAULT_RESET,
                                BUTTON_COLORS.PRESSED_RESET,
                                500
                            ],
                            undo: [
                                BUTTON_COLORS.DEFAULT_UNDO,
                                BUTTON_COLORS.PRESSED_UNDO,
                                200
                            ]
                        };
                        var _default = exports.default = {
                            private: {
                                rows: [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                columns: [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4
                                ],
                                cellIcons: {},
                                cellStyles: {},
                                currentPlayer: 7,
                                switchBtnColor: "#3498DB",
                                upBtnColor: "#2ECC71",
                                downBtnColor: "#2ECC71",
                                leftBtnColor: "#2ECC71",
                                rightBtnColor: "#2ECC71",
                                resetBtnColor: "#E74C3C",
                                undoBtnColor: "#9B59B6",
                                adaptedSizes: (0, _screenAdapter.getAdaptedSizes)(192)
                            },
                            onInit () {
                                this._destroyed = false;
                                this._leaving = false;
                                this._flashTimers = {};
                                this.initScreenAdapter();
                                this._game = new _index.Game();
                                const levelData = this.getLevel1Data();
                                this._game.initLevel(levelData);
                                this.updateDisplay();
                            },
                            initScreenAdapter () {
                                try {
                                    _system2.default.getInfo({
                                        success: (data)=>{
                                            if (!this._destroyed) this.adaptedSizes = (0, _screenAdapter.getAdaptedSizes)(data && data.screenWidth, data && data.screenHeight);
                                        },
                                        fail: ()=>{
                                            if (!this._destroyed) this.adaptedSizes = (0, _screenAdapter.getAdaptedSizes)(192);
                                        }
                                    });
                                } catch (e) {
                                    this.adaptedSizes = (0, _screenAdapter.getAdaptedSizes)(192);
                                }
                            },
                            getLevel1Data () {
                                return {
                                    whitePlayer: {
                                        x: 4,
                                        y: 1
                                    },
                                    blackPlayer: {
                                        x: 2,
                                        y: 3
                                    },
                                    whiteBoxes: [
                                        {
                                            x: 2,
                                            y: 6
                                        }
                                    ],
                                    blackBoxes: [
                                        {
                                            x: 3,
                                            y: 4
                                        }
                                    ],
                                    whiteBoxTargets: [
                                        {
                                            x: 1,
                                            y: 6
                                        }
                                    ],
                                    blackBoxTargets: [
                                        {
                                            x: 3,
                                            y: 3
                                        }
                                    ],
                                    whitePlayerTarget: [
                                        {
                                            x: 1,
                                            y: 5
                                        }
                                    ],
                                    blackPlayerTarget: [
                                        {
                                            x: 4,
                                            y: 2
                                        }
                                    ],
                                    currentPlayer: 7,
                                    mapRules: this.createMapRules()
                                };
                            },
                            createMapRules () {
                                const width = 5, height = 7;
                                const rules = {};
                                for(let y = 0; y < height; y++){
                                    for(let x = 0; x < width; x++)rules[y + "," + x] = 0;
                                }
                                for(let x = 0; x < width; x++){
                                    rules["0," + x] = 1;
                                    rules[height - 1 + "," + x] = 1;
                                }
                                for(let y = 0; y < height; y++){
                                    rules[y + ",0"] = 1;
                                    rules[y + "," + (width - 1)] = 1;
                                }
                                rules["1,2"] = 1;
                                rules["2,2"] = 1;
                                rules["1,4"] = 1;
                                rules["2,4"] = 1;
                                return rules;
                            },
                            updateDisplay (display) {
                                const result = display || this._game.updateCellDisplay();
                                if (this.cellIcons['0,0']) Object.keys(result.icons).forEach((key)=>{
                                    const icon = result.icons[key];
                                    const currentIcon = this.cellIcons[key];
                                    Object.keys(icon).forEach((field)=>{
                                        if (currentIcon[field] !== icon[field]) currentIcon[field] = icon[field];
                                    });
                                    const style = result.styles[key];
                                    const currentStyle = this.cellStyles[key];
                                    if (currentStyle.bg !== style.bg) currentStyle.bg = style.bg;
                                    if (currentStyle.border !== style.border) currentStyle.border = style.border;
                                });
                                else {
                                    this.cellIcons = result.icons;
                                    this.cellStyles = result.styles;
                                }
                                this.currentPlayer = this._game.state.currentPlayer;
                            },
                            onUp () {
                                this.handleMove(0, -1, "up");
                            },
                            onDown () {
                                this.handleMove(0, 1, "down");
                            },
                            onLeft () {
                                this.handleMove(-1, 0, "left");
                            },
                            onRight () {
                                this.handleMove(1, 0, "right");
                            },
                            handleMove (dx, dy, buttonType) {
                                if (this._leaving || this._destroyed) return;
                                const result = this._game.move(dx, dy);
                                if (!result.success) return void _system3.default.showToast({
                                    message: result.message,
                                    duration: 1500
                                });
                                this.flashButton(buttonType);
                                this.updateDisplay(result.display);
                                if (result.isWin) {
                                    this._leaving = true;
                                    this.clearButtonFeedback();
                                    _system.default.replace({
                                        uri: "/pages/win",
                                        params: {
                                            levelId: "level01",
                                            levelPath: "/pages/levels/level01"
                                        }
                                    });
                                }
                            },
                            onSwitch () {
                                if (this._leaving || this._destroyed) return;
                                this.currentPlayer = this._game.switchPlayer();
                                this.flashButton("switch");
                            },
                            onReset () {
                                if (this._leaving || this._destroyed) return;
                                this.clearButtonFeedback();
                                const levelData = this.getLevel1Data();
                                this._game.initLevel(levelData);
                                this.flashButton("reset");
                                this.updateDisplay();
                            },
                            onUndo () {
                                if (this._leaving || this._destroyed) return;
                                const result = this._game.undo();
                                if (!result.success) return void _system3.default.showToast({
                                    message: result.message,
                                    duration: 1500
                                });
                                this.flashButton("undo");
                                this.updateDisplay();
                            },
                            flashButton (type) {
                                const feedback = BUTTON_FEEDBACK[type];
                                const colorKey = type + "BtnColor";
                                this[colorKey] = feedback[1];
                                if (this._flashTimers[type]) clearTimeout(this._flashTimers[type]);
                                this._flashTimers[type] = setTimeout(()=>{
                                    this[colorKey] = feedback[0];
                                    delete this._flashTimers[type];
                                }, feedback[2]);
                            },
                            clearButtonFeedback () {
                                Object.keys(this._flashTimers).forEach((type)=>{
                                    clearTimeout(this._flashTimers[type]);
                                    this[type + "BtnColor"] = BUTTON_FEEDBACK[type][0];
                                });
                                this._flashTimers = {};
                            },
                            onHide () {
                                this.clearButtonFeedback();
                            },
                            onDestroy () {
                                this._destroyed = true;
                                this.clearButtonFeedback();
                                this._game = null;
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    var $app_template$ = function(vm) {
                        const _vm_ = vm || this;
                        return aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "container"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("padding: " + _vm_.adaptedSizes.paddingTop + "px " + _vm_.adaptedSizes.padding + "px " + _vm_.adaptedSizes.paddingBottom + "px");
                                }
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    src: "/common/image/title.png",
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("width: " + _vm_.adaptedSizes.titleWidth + "px; height: " + _vm_.adaptedSizes.titleHeight + "px; margin: " + _vm_.adaptedSizes.marginTop + "px 0 3px 0");
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "infoText"
                                        ],
                                        src: "/common/image/infoText.png",
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("height: " + (_vm_.adaptedSizes.infoHeight || 40) + "px");
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hint"
                                        ],
                                        src: "/common/image/hint.png",
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("height: " + (_vm_.adaptedSizes.infoHeight || 40) + "px");
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__cc__("game-grid", {
                                __vm__: _vm_,
                                __opts__: {
                                    rows: function() {
                                        return _vm_.rows;
                                    },
                                    columns: function() {
                                        return _vm_.columns;
                                    },
                                    icons: function() {
                                        return _vm_.cellIcons;
                                    },
                                    cellStyles: function() {
                                        return _vm_.cellStyles;
                                    },
                                    sizeConfig: function() {
                                        return _vm_.adaptedSizes;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controlArea"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("margin-top: " + (_vm_.adaptedSizes.marginTop || 4) + "px");
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "switchArea"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("margin-bottom: " + (_vm_.adaptedSizes.marginBottom || 10) + "px");
                                        }
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onSwitch(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__cc__("control-button", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                type: "switch",
                                                color: function() {
                                                    return _vm_.switchBtnColor;
                                                },
                                                isWhite: function() {
                                                    return 7 === _vm_.currentPlayer;
                                                },
                                                sizeConfig: function() {
                                                    return _vm_.adaptedSizes;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "controlPanel"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("margin: " + (_vm_.adaptedSizes.controlPanelMargin || 4) + "px");
                                        }
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btnRow1"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("margin-bottom: " + (_vm_.adaptedSizes.btnRowMargin || 4) + "px");
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onUp(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__cc__("control-button", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    type: "arrow",
                                                    color: function() {
                                                        return _vm_.upBtnColor;
                                                    },
                                                    arrowIcon: "/common/image/icons/white-up-arrow.png",
                                                    sizeConfig: function() {
                                                        return _vm_.adaptedSizes;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btnRow2"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onLeft(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__cc__("control-button", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    type: "arrow",
                                                    color: function() {
                                                        return _vm_.leftBtnColor;
                                                    },
                                                    arrowIcon: "/common/image/icons/white-left-arrow.png",
                                                    sizeConfig: function() {
                                                        return _vm_.adaptedSizes;
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onDown(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__cc__("control-button", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    type: "arrow",
                                                    color: function() {
                                                        return _vm_.downBtnColor;
                                                    },
                                                    arrowIcon: "/common/image/icons/white-down-arrow.png",
                                                    sizeConfig: function() {
                                                        return _vm_.adaptedSizes;
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onRight(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__cc__("control-button", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    type: "arrow",
                                                    color: function() {
                                                        return _vm_.rightBtnColor;
                                                    },
                                                    arrowIcon: "/common/image/icons/white-right-arrow.png",
                                                    sizeConfig: function() {
                                                        return _vm_.adaptedSizes;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controlArea2"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "undoArea"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onUndo(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__cc__("control-button", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                type: "undo",
                                                color: function() {
                                                    return _vm_.undoBtnColor;
                                                },
                                                sizeConfig: function() {
                                                    return _vm_.adaptedSizes;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "resetArea"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onReset(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__cc__("control-button", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                type: "reset",
                                                color: function() {
                                                    return _vm_.resetBtnColor;
                                                },
                                                sizeConfig: function() {
                                                    return _vm_.adaptedSizes;
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
                            ])
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
