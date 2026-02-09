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
                                    height: "60px",
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
                                        "btnReset"
                                    ]
                                ],
                                {
                                    width: "55px",
                                    height: "40px",
                                    borderStyle: "none",
                                    borderRadius: "4px",
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
                                    gap: "2px",
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
                                    marginTop: "2px",
                                    marginRight: "2px",
                                    marginBottom: "2px",
                                    marginLeft: "2px",
                                    paddingTop: "2px",
                                    paddingRight: "2px",
                                    paddingBottom: "2px",
                                    paddingLeft: "2px"
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
                                    'type',
                                    'color',
                                    'arrowIcon',
                                    'isWhite'
                                ],
                                computed: {
                                    btnClass () {
                                        if ('arrow' === this.type) return 'btnArrow';
                                        if ('switch' === this.type) return 'btnSwitch';
                                        if ('reset' === this.type) return 'btnReset';
                                        return 'control-button';
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
                                        return __webpack_require__.g.$translateStyle$("background-color: " + _vm_.color);
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
                                                style: {
                                                    width: "20px",
                                                    height: "20px"
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
                                                    src: "/common/image/icons/white-qie.png"
                                                }
                                            }, []),
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "icon"
                                                    ],
                                                    src: "/common/image/icons/white-huan.png"
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
                                                    src: "/common/image/icons/white-dao.png"
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
                                                            src: "/common/image/icons/white-white.png"
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
                                                            src: "/common/image/icons/white-black.png"
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
                                            return "switch" !== _vm_.type && "arrow" !== _vm_.type && "reset" === _vm_.type;
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
                                                style: {
                                                    width: "20px",
                                                    height: "20px"
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
                                                style: {
                                                    width: "20px",
                                                    height: "20px"
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
                                    marginTop: "8px",
                                    marginRight: "0",
                                    marginBottom: "8px",
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
                                    width: "34px",
                                    height: "34px",
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
                                    alignItems: "center",
                                    gap: "1px"
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
                                    'cellStyles'
                                ]
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "game-grid"
                                    ]
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
                                                                return __webpack_require__.g.$translateStyle$("background-color: " + _vm_.cellStyles[y + "," + x].bg + "; border-color: " + _vm_.cellStyles[y + "," + x].border);
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
                                                                            style: {
                                                                                width: "16px",
                                                                                height: "16px"
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
                                                                            style: {
                                                                                width: "16px",
                                                                                height: "16px"
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
                                                                        style: {
                                                                            width: "20px",
                                                                            height: "20px"
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
                    "./src/game/GameState.js" (__unused_rspack_module, exports, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.GameState = void 0;
                        var _constants = __webpack_require__("./src/game/constants.js");
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
                                this.switchBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_SWITCH;
                                this.upBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.downBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.leftBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.rightBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.resetBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_RESET;
                            }
                            getMapValue(y, x) {
                                return this.mapRules[`${y},${x}`] || _constants.GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR;
                            }
                            setMapValue(y, x, value) {
                                this.mapRules[`${y},${x}`] = value;
                            }
                            hasWhiteBox(x, y) {
                                return this.whiteBoxes.some((box)=>box.x === x && box.y === y);
                            }
                            hasBlackBox(x, y) {
                                return this.blackBoxes.some((box)=>box.x === x && box.y === y);
                            }
                            isWhiteBoxTarget(x, y) {
                                return this.whiteBoxTargets.some((target)=>target.x === x && target.y === y);
                            }
                            isBlackBoxTarget(x, y) {
                                return this.blackBoxTargets.some((target)=>target.x === x && target.y === y);
                            }
                            isWhitePlayerTarget(x, y) {
                                return this.whitePlayerTarget.some((target)=>target.x === x && target.y === y);
                            }
                            isBlackPlayerTarget(x, y) {
                                return this.blackPlayerTarget.some((target)=>target.x === x && target.y === y);
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
                        class IconManager {
                            constructor(gameState){
                                this.state = gameState;
                            }
                            getIconParts(y, x) {
                                const type = this.getIconType(y, x);
                                if (!type) return {
                                    single: true,
                                    src: null
                                };
                                const parts = type.split("-");
                                if (4 !== parts.length) return {
                                    single: true,
                                    src: this.getIconImagePath(type)
                                };
                                {
                                    const firstPart = parts[0] + "-" + parts[1];
                                    const secondPart = parts[2] + "-" + parts[3];
                                    return {
                                        single: false,
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
                                const whiteBox = this.state.whiteBoxes.find((b)=>b.x === x && b.y === y);
                                if (whiteBox) return "white-box";
                                const blackBox = this.state.blackBoxes.find((b)=>b.x === x && b.y === y);
                                if (blackBox) return "black-box";
                                const isWhiteBoxTarget = this.state.whiteBoxTargets.some((t)=>t.x === x && t.y === y);
                                if (isWhiteBoxTarget) return "white-box-white-target";
                                const isBlackBoxTarget = this.state.blackBoxTargets.some((t)=>t.x === x && t.y === y);
                                if (isBlackBoxTarget) return "black-box-black-target";
                                const whitePosition = this.state.whitePlayerTarget.find((t)=>t.x === x && t.y === y);
                                if (whitePosition) return "white-player-white-target";
                                const blackPosition = this.state.blackPlayerTarget.find((t)=>t.x === x && t.y === y);
                                if (blackPosition) return "black-player-black-target";
                                return null;
                            }
                            getIconImagePath(type) {
                                const icons = {
                                    "white-player": "/common/image/icons/grey-white.png",
                                    "black-player": "/common/image/icons/white-black.png",
                                    "white-box": "/common/image/icons/grey-box.png",
                                    "black-box": "/common/image/icons/white-box.png",
                                    "white-target": "/common/image/icons/grey-target.png",
                                    "black-target": "/common/image/icons/white-target.png"
                                };
                                return icons[type] || "";
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
                                PRESSED_SWITCH: "#FF416C",
                                PRESSED_ARROW: "#36D1DC",
                                PRESSED_RESET: "#9B59B6"
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
                        class Game {
                            constructor(){
                                this.state = new _GameState.GameState();
                                this.validator = new _MoveValidator.MoveValidator(this.state);
                                this.winChecker = new _WinChecker.WinChecker(this.state);
                                this.iconManager = new _IconManager.IconManager(this.state);
                            }
                            initLevel(levelData) {
                                this.state.reset();
                                if (levelData.mapRules) this.state.mapRules = levelData.mapRules;
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
                                if (levelData.whiteBoxes) this.state.whiteBoxes = [
                                    ...levelData.whiteBoxes
                                ];
                                if (levelData.blackBoxes) this.state.blackBoxes = [
                                    ...levelData.blackBoxes
                                ];
                                if (levelData.whiteBoxTargets) this.state.whiteBoxTargets = [
                                    ...levelData.whiteBoxTargets
                                ];
                                if (levelData.blackBoxTargets) this.state.blackBoxTargets = [
                                    ...levelData.blackBoxTargets
                                ];
                                if (levelData.whitePlayerTarget) this.state.whitePlayerTarget = [
                                    ...levelData.whitePlayerTarget
                                ];
                                if (levelData.blackPlayerTarget) this.state.blackPlayerTarget = [
                                    ...levelData.blackPlayerTarget
                                ];
                                if (void 0 !== levelData.currentPlayer) this.state.currentPlayer = levelData.currentPlayer;
                            }
                            move(dx, dy) {
                                const isWhite = this.state.currentPlayer === _constants.GAME_CONSTANTS.PLAYER_TYPES.WHITE;
                                const result = this.validator.validateMove(dx, dy, isWhite);
                                if (!result.valid) return {
                                    success: false,
                                    message: result.message
                                };
                                if ('move' === result.action) this.movePlayer(result.data.isWhite, result.data.nx, result.data.ny);
                                else if ('push' === result.action) this.pushBox(result.data.isWhite, result.data.playerPos, result.data.boxPos, result.data.boxIndex, result.data.boxType);
                                const isWin = this.winChecker.checkWin();
                                return {
                                    success: true,
                                    isWin,
                                    updatedIcons: this.updateCellIcons()
                                };
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
                            }
                            updateCellIcons() {
                                const icons = {};
                                for(let y = 0; y < this.state.mapHeight; y++){
                                    for(let x = 0; x < this.state.mapWidth; x++)icons[`${y},${x}`] = this.iconManager.getIconParts(y, x);
                                }
                                return icons;
                            }
                            switchPlayer() {
                                this.state.switchPlayer();
                                return this.state.currentPlayer;
                            }
                            checkWin() {
                                return this.winChecker.checkWin();
                            }
                            resetButtonColors() {
                                this.state.switchBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_SWITCH;
                                this.state.upBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.state.downBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.state.leftBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.state.rightBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW;
                                this.state.resetBtnColor = _constants.GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_RESET;
                            }
                            getCellBg(y, x) {
                                const state = this.state;
                                const isWhiteBoxTarget = state.whiteBoxTargets.some((t)=>t.x === x && t.y === y);
                                const isBlackBoxTarget = state.blackBoxTargets.some((t)=>t.x === x && t.y === y);
                                const hasWhiteBox = state.whiteBoxes.some((b)=>b.x === x && b.y === y);
                                const hasBlackBox = state.blackBoxes.some((b)=>b.x === x && b.y === y);
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
                                const whitePlayerTarget = state.whitePlayerTarget.find((t)=>t.x === x && t.y === y);
                                const blackPlayerTarget = state.blackPlayerTarget.find((t)=>t.x === x && t.y === y);
                                if (whitePlayerTarget) return "#D3D3D3";
                                if (blackPlayerTarget) return "#555555";
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
                                paddingTop: "8px",
                                paddingRight: "8px",
                                paddingBottom: "8px",
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
                                height: "30px",
                                width: "70%",
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
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const prompt = $app_require$1("@app-module/system.prompt");
                        var _default = exports.default = {
                            private: {
                                game: null,
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
                                stepCount: 0,
                                currentPlayerName: "白方",
                                currentPlayer: 7,
                                switchBtnColor: "#3498DB",
                                upBtnColor: "#2ECC71",
                                downBtnColor: "#2ECC71",
                                leftBtnColor: "#2ECC71",
                                rightBtnColor: "#2ECC71",
                                resetBtnColor: "#E74C3C"
                            },
                            onInit () {
                                this.game = new _index.Game();
                                const levelData = this.getLevel1Data();
                                this.game.initLevel(levelData);
                                this.updateDisplay();
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
                            updateDisplay () {
                                this.cellIcons = this.game.iconManager.updateCellIcons();
                                this.stepCount = this.game.state.stepCount;
                                this.currentPlayer = this.game.state.currentPlayer;
                                this.currentPlayerName = 6 === this.currentPlayer ? "白方" : "黑方";
                                const styles = {};
                                for(let y = 0; y < 7; y++){
                                    for(let x = 0; x < 5; x++)styles[`${y},${x}`] = {
                                        bg: this.getCellBg(y, x),
                                        border: this.getCellBorder(y, x)
                                    };
                                }
                                this.cellStyles = styles;
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
                                const result = this.game.move(dx, dy);
                                if (!result.success) return void prompt.showToast({
                                    message: result.message,
                                    duration: 800
                                });
                                this.flashButton(buttonType);
                                this.updateDisplay();
                                if (this.game.checkWin()) _system.default.push({
                                    uri: "pages/win",
                                    params: {
                                        levelId: "level01",
                                        levelPath: "pages/levels/level01"
                                    }
                                });
                            },
                            onSwitch () {
                                this.game.switchPlayer();
                                this.flashButton("switch");
                                this.updateDisplay();
                            },
                            onReset () {
                                const levelData = this.getLevel1Data();
                                this.game.initLevel(levelData);
                                this.flashButton("reset");
                                this.updateDisplay();
                            },
                            flashButton (type) {
                                const colorMap = {
                                    up: "#36D1DC",
                                    down: "#36D1DC",
                                    left: "#36D1DC",
                                    right: "#36D1DC",
                                    switch: "#FF416C",
                                    reset: "#FF6B6B"
                                };
                                const defaultColorMap = {
                                    up: "#2ECC71",
                                    down: "#2ECC71",
                                    left: "#2ECC71",
                                    right: "#2ECC71",
                                    switch: "#3498DB",
                                    reset: "#E74C3C"
                                };
                                const colorKey = type + "BtnColor";
                                this[colorKey] = colorMap[type];
                                setTimeout(()=>{
                                    this[colorKey] = defaultColorMap[type];
                                }, "switch" === type || "reset" === type ? 500 : 200);
                            },
                            getCellBg (y, x) {
                                return this.game.getCellBg(y, x);
                            },
                            getCellBorder (y, x) {
                                return this.game.getCellBorder(y, x);
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
                                ]
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    src: "/common/image/title.png"
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
                                        src: "/common/image/infoText.png"
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hint"
                                        ],
                                        src: "/common/image/hint.png"
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
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controlArea"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "switchArea"
                                        ]
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
                                                    return 6 === _vm_.currentPlayer;
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
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btnRow1"
                                            ]
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
                                                    arrowIcon: "/common/image/icons/white-up-arrow.png"
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
                                                    arrowIcon: "/common/image/icons/white-left-arrow.png"
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
                                                    arrowIcon: "/common/image/icons/white-down-arrow.png"
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
                                                    arrowIcon: "/common/image/icons/white-right-arrow.png"
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
                                            }
                                        }
                                    }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGxldmVsc1xcbGV2ZWwwMVxcbGV2ZWwwMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2JveC1vci12b2lkL3NyYy9jb21wb25lbnRzL0NvbnRyb2xCdXR0b24vaW5kZXgudXgiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL2NvbXBvbmVudHMvR2FtZUdyaWQvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL2dhbWUvR2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JveC1vci12b2lkL3NyYy9nYW1lL0ljb25NYW5hZ2VyLmpzIiwid2VicGFjazovL2JveC1vci12b2lkL3NyYy9nYW1lL01vdmVWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL2dhbWUvV2luQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9ib3gtb3Itdm9pZC9zcmMvZ2FtZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL2dhbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ib3gtb3Itdm9pZC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL3BhZ2VzL2xldmVscy9sZXZlbDAxL2xldmVsMDEudXgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJ7e2J0bkNsYXNzfX1cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHt7IGNvbG9yIH19XCI+XHJcbiAgICA8YmxvY2sgaWY9XCJ7eyB0eXBlID09PSAnYXJyb3cnIH19XCI+XHJcbiAgICAgIDxpbWFnZSBzcmM9XCJ7eyBhcnJvd0ljb24gfX1cIiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHhcIiAvPlxyXG4gICAgPC9ibG9jaz5cclxuICAgIDxibG9jayBlbGlmPVwie3sgdHlwZSA9PT0gJ3N3aXRjaCcgfX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb24tcm93XCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtcWllLnBuZ1wiIC8+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtaHVhbi5wbmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb24tcm93XCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtZGFvLnBuZ1wiIC8+XHJcbiAgICAgICAgPGJsb2NrIGlmPVwie3sgaXNXaGl0ZSB9fVwiPlxyXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtd2hpdGUucG5nXCIgLz5cclxuICAgICAgICA8L2Jsb2NrPlxyXG4gICAgICAgIDxibG9jayBpZj1cInt7ICFpc1doaXRlIH19XCI+XHJcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS1ibGFjay5wbmdcIiAvPlxyXG4gICAgICAgIDwvYmxvY2s+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9ibG9jaz5cclxuICAgIDxibG9jayBlbGlmPVwie3sgdHlwZSA9PT0gJ3Jlc2V0JyB9fVwiPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJyZXNldEltYWdlXCIgc3JjPVwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS1jaG9uZy5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHhcIiAvPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJyZXNldEltYWdlXCIgc3JjPVwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS16aGkucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4XCIgLz5cclxuICAgIDwvYmxvY2s+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcclxuICAgICd0eXBlJyxcclxuICAgICdjb2xvcicsXHJcbiAgICAnYXJyb3dJY29uJyxcclxuICAgICdpc1doaXRlJ1xyXG4gIF0sXHJcbiAgXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGJ0bkNsYXNzKCkge1xyXG4gICAgICBpZiAodGhpcy50eXBlID09PSAnYXJyb3cnKSByZXR1cm4gJ2J0bkFycm93J1xyXG4gICAgICBpZiAodGhpcy50eXBlID09PSAnc3dpdGNoJykgcmV0dXJuICdidG5Td2l0Y2gnXHJcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNldCcpIHJldHVybiAnYnRuUmVzZXQnXHJcbiAgICAgIHJldHVybiAnY29udHJvbC1idXR0b24nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJ0blN3aXRjaCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ0bkFycm93IHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDFweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuUmVzZXQge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1yb3cge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnB4O1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZXNldEltYWdlIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJnYW1lLWdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGZvcj1cIih5LCBpbmRleFkpIGluIHJvd3NcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImNlbGxcIlxyXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7eyBjZWxsU3R5bGVzW3kgKyAnLCcgKyB4XS5iZyB9fTsgYm9yZGVyLWNvbG9yOiB7eyBjZWxsU3R5bGVzW3kgKyAnLCcgKyB4XS5ib3JkZXIgfX1cIlxyXG4gICAgICAgICAgZm9yPVwiKHgsIGluZGV4WCkgaW4gY29sdW1uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPCEtLSDnm7TmjqXmuLLmn5Plm77moIcgLS0+XHJcbiAgICAgICAgICA8YmxvY2sgaWY9XCJ7eyBpY29uc1t5ICsgJywnICsgeF0gJiYgIWljb25zW3kgKyAnLCcgKyB4XS5zaW5nbGUgJiYgaWNvbnNbeSArICcsJyArIHhdLnNyYzEgJiYgaWNvbnNbeSArICcsJyArIHhdLnNyYzIgfX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJpbmVkLWljb25cIj5cclxuICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwie3sgaWNvbnNbeSArICcsJyArIHhdLnNyYzEgfX1cIiBzdHlsZT1cIndpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHhcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiBzcmM9XCJ7eyBpY29uc1t5ICsgJywnICsgeF0uc3JjMiB9fVwiIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9ibG9jaz5cclxuICAgICAgICAgIDxibG9jayBlbGlmPVwie3sgaWNvbnNbeSArICcsJyArIHhdICYmIGljb25zW3kgKyAnLCcgKyB4XS5zaW5nbGUgJiYgaWNvbnNbeSArICcsJyArIHhdLnNyYyB9fVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwie3sgaWNvbnNbeSArICcsJyArIHhdLnNyYyB9fVwiIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweFwiIC8+XHJcbiAgICAgICAgICA8L2Jsb2NrPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbiAgXHJcbiAgPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogW1xyXG4gICAgICAncm93cycsXHJcbiAgICAgICdjb2x1bW5zJyxcclxuICAgICAgJ2ljb25zJyxcclxuICAgICAgJ2NlbGxTdHlsZXMnXHJcbiAgICBdXHJcbiAgfVxyXG4gIDwvc2NyaXB0PlxyXG4gIFxyXG4gIDxzdHlsZSBzY29wZWQ+XHJcbiAgLmdhbWUtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MzA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZWxsIHtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21iaW5lZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIDwvc3R5bGU+IiwiaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXBXaWR0aCA9IDVcclxuICAgIHRoaXMubWFwSGVpZ2h0ID0gN1xyXG4gICAgXHJcbiAgICAvLyDliJ3lp4vljJbnirbmgIFcclxuICAgIHRoaXMucmVzZXQoKVxyXG4gIH1cclxuICBcclxuICByZXNldCgpIHtcclxuICAgIC8vIOWcsOWbvuinhOWImVxyXG4gICAgdGhpcy5tYXBSdWxlcyA9IHt9XHJcbiAgICBcclxuICAgIC8vIOinkuiJsuS9jee9rlxyXG4gICAgdGhpcy53aGl0ZVggPSAwXHJcbiAgICB0aGlzLndoaXRlWSA9IDBcclxuICAgIHRoaXMuYmxhY2tYID0gMFxyXG4gICAgdGhpcy5ibGFja1kgPSAwXHJcbiAgICBcclxuICAgIC8vIOiusOW9leavj+S4quS9jee9ruacgOWQjuWIsOi+vueahOinkuiJsu+8iOeUqOS6juS4pOS4quinkuiJsumHjeWPoOaXtueahOaYvuekuuS8mOWFiOe6p++8iVxyXG4gICAgdGhpcy5sYXN0UGxheWVyQXQgPSB7fSAvLyBrZXk6IFwieSx4XCIsIHZhbHVlOiBQTEFZRVJfVFlQRVMuV0hJVEUgb3IgQkxBQ0tcclxuICAgIFxyXG4gICAgLy8g566x5a2QXHJcbiAgICB0aGlzLndoaXRlQm94ZXMgPSBbXVxyXG4gICAgdGhpcy5ibGFja0JveGVzID0gW11cclxuICAgIFxyXG4gICAgLy8g55uu5qCH54K5XHJcbiAgICB0aGlzLndoaXRlQm94VGFyZ2V0cyA9IFtdXHJcbiAgICB0aGlzLmJsYWNrQm94VGFyZ2V0cyA9IFtdXHJcbiAgICB0aGlzLndoaXRlUGxheWVyVGFyZ2V0ID0gW11cclxuICAgIHRoaXMuYmxhY2tQbGF5ZXJUYXJnZXQgPSBbXVxyXG4gICAgXHJcbiAgICAvLyDlvZPliY3njqnlrrZcclxuICAgIHRoaXMuY3VycmVudFBsYXllciA9IEdBTUVfQ09OU1RBTlRTLlBMQVlFUl9UWVBFUy5CTEFDS1xyXG4gICAgXHJcbiAgICAvLyDmjInpkq7popzoibJcclxuICAgIHRoaXMuc3dpdGNoQnRuQ29sb3IgPSBHQU1FX0NPTlNUQU5UUy5CVVRUT05fQ09MT1JTLkRFRkFVTFRfU1dJVENIXHJcbiAgICB0aGlzLnVwQnRuQ29sb3IgPSBHQU1FX0NPTlNUQU5UUy5CVVRUT05fQ09MT1JTLkRFRkFVTFRfQVJST1dcclxuICAgIHRoaXMuZG93bkJ0bkNvbG9yID0gR0FNRV9DT05TVEFOVFMuQlVUVE9OX0NPTE9SUy5ERUZBVUxUX0FSUk9XXHJcbiAgICB0aGlzLmxlZnRCdG5Db2xvciA9IEdBTUVfQ09OU1RBTlRTLkJVVFRPTl9DT0xPUlMuREVGQVVMVF9BUlJPV1xyXG4gICAgdGhpcy5yaWdodEJ0bkNvbG9yID0gR0FNRV9DT05TVEFOVFMuQlVUVE9OX0NPTE9SUy5ERUZBVUxUX0FSUk9XXHJcbiAgICB0aGlzLnJlc2V0QnRuQ29sb3IgPSBHQU1FX0NPTlNUQU5UUy5CVVRUT05fQ09MT1JTLkRFRkFVTFRfUkVTRVRcclxuICB9XHJcbiAgXHJcbiAgLy8g6I635Y+W5Zyw5Zu+5YC8XHJcbiAgZ2V0TWFwVmFsdWUoeSwgeCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwUnVsZXNbYCR7eX0sJHt4fWBdIHx8IEdBTUVfQ09OU1RBTlRTLkNFTExfVFlQRVMuV0hJVEVfRkxPT1JcclxuICB9XHJcbiAgXHJcbiAgLy8g6K6+572u5Zyw5Zu+5YC8XHJcbiAgc2V0TWFwVmFsdWUoeSwgeCwgdmFsdWUpIHtcclxuICAgIHRoaXMubWFwUnVsZXNbYCR7eX0sJHt4fWBdID0gdmFsdWVcclxuICB9XHJcbiAgXHJcbiAgLy8g5qOA5p+l5L2N572u5piv5ZCm5pyJ55m9566x5a2QXHJcbiAgaGFzV2hpdGVCb3goeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMud2hpdGVCb3hlcy5zb21lKGJveCA9PiBib3gueCA9PT0geCAmJiBib3gueSA9PT0geSlcclxuICB9XHJcbiAgXHJcbiAgLy8g5qOA5p+l5L2N572u5piv5ZCm5pyJ6buR566x5a2QXHJcbiAgaGFzQmxhY2tCb3goeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxhY2tCb3hlcy5zb21lKGJveCA9PiBib3gueCA9PT0geCAmJiBib3gueSA9PT0geSlcclxuICB9XHJcbiAgXHJcbiAgLy8g5qOA5p+l5piv5ZCm5piv55m9566x5a2Q55uu5qCH54K5XHJcbiAgaXNXaGl0ZUJveFRhcmdldCh4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy53aGl0ZUJveFRhcmdldHMuc29tZSh0YXJnZXQgPT4gdGFyZ2V0LnggPT09IHggJiYgdGFyZ2V0LnkgPT09IHkpXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOajgOafpeaYr+WQpuaYr+m7keeuseWtkOebruagh+eCuVxyXG4gIGlzQmxhY2tCb3hUYXJnZXQoeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxhY2tCb3hUYXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC54ID09PSB4ICYmIHRhcmdldC55ID09PSB5KVxyXG4gIH1cclxuICBcclxuICAvLyDmo4Dmn6XmmK/lkKbmmK/nmb3op5LoibLnm67moIfngrlcclxuICBpc1doaXRlUGxheWVyVGFyZ2V0KHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLndoaXRlUGxheWVyVGFyZ2V0LnNvbWUodGFyZ2V0ID0+IHRhcmdldC54ID09PSB4ICYmIHRhcmdldC55ID09PSB5KVxyXG4gIH1cclxuICBcclxuICAvLyDmo4Dmn6XmmK/lkKbmmK/pu5Hop5LoibLnm67moIfngrlcclxuICBpc0JsYWNrUGxheWVyVGFyZ2V0KHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmJsYWNrUGxheWVyVGFyZ2V0LnNvbWUodGFyZ2V0ID0+IHRhcmdldC54ID09PSB4ICYmIHRhcmdldC55ID09PSB5KVxyXG4gIH1cclxuICBcclxuICAvLyDliIfmjaLlvZPliY3njqnlrrZcclxuICBzd2l0Y2hQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IEdBTUVfQ09OU1RBTlRTLlBMQVlFUl9UWVBFUy5XSElURSBcclxuICAgICAgPyBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuQkxBQ0sgXHJcbiAgICAgIDogR0FNRV9DT05TVEFOVFMuUExBWUVSX1RZUEVTLldISVRFXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGxheWVyXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOiusOW9leinkuiJsuenu+WKqOWIsOafkOS9jee9rlxyXG4gIHJlY29yZFBsYXllck1vdmUoeCwgeSwgcGxheWVyVHlwZSkge1xyXG4gICAgdGhpcy5sYXN0UGxheWVyQXRbYCR7eX0sJHt4fWBdID0gcGxheWVyVHlwZVxyXG4gIH1cclxufSIsImltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgY2xhc3MgSWNvbk1hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IGdhbWVTdGF0ZVxyXG4gIH1cclxuICBcclxuICAvLyDojrflj5bljZXlhYPmoLzlm77moIfpg6jku7ZcclxuICBnZXRJY29uUGFydHMoeSwgeCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0SWNvblR5cGUoeSwgeClcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICByZXR1cm4geyBzaW5nbGU6IHRydWUsIHNyYzogbnVsbCB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFydHMgPSB0eXBlLnNwbGl0KFwiLVwiKVxyXG4gICAgXHJcbiAgICAvLyDkuJHpmYvkvYblkIjnkIbnmoTorqHnrpfmlrnms5XjgILkuI3nn6XpgZPlkovmlLnov5tcclxuICAgIC8vIOWIpOaWreaYr+WQpumcgOimgeaLhuWIhu+8muWPquacieW9k+aciSAzIOS4qiAnLSfvvIjljbMgcGFydHMubGVuZ3RoID09PSA077yJ5pe25omN5ouGXHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIC8vIOaMieesrDLkuKonLSfvvIjku44w5byA5aeL5piv57Si5byVMu+8ieaLhu+8muWJjTLmrrUgKyDlkI4y5q61XHJcbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHBhcnRzWzBdICsgXCItXCIgKyBwYXJ0c1sxXSAvLyBlLmcuIFwid2hpdGUtYm94XCJcclxuICAgICAgY29uc3Qgc2Vjb25kUGFydCA9IHBhcnRzWzJdICsgXCItXCIgKyBwYXJ0c1szXSAvLyBlLmcuIFwid2hpdGUtdGFyZ2V0XCJcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2luZ2xlOiBmYWxzZSxcclxuICAgICAgICBzcmMxOiB0aGlzLmdldEljb25JbWFnZVBhdGgoZmlyc3RQYXJ0KSxcclxuICAgICAgICBzcmMyOiB0aGlzLmdldEljb25JbWFnZVBhdGgoc2Vjb25kUGFydClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Y2V5Zu+5qCHXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2luZ2xlOiB0cnVlLFxyXG4gICAgICAgIHNyYzogdGhpcy5nZXRJY29uSW1hZ2VQYXRoKHR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8g6I635Y+W5Zu+5qCH57G75Z6LXHJcbiAgZ2V0SWNvblR5cGUoeSwgeCkge1xyXG4gICAgLy8g5qOA5p+l5Lik5Liq6KeS6Imy5piv5ZCm6YO95Zyo6L+Z5Liq5L2N572uXHJcbiAgICBjb25zdCBoYXNXaGl0ZVBsYXllciA9ICh5ID09PSB0aGlzLnN0YXRlLndoaXRlWSAmJiB4ID09PSB0aGlzLnN0YXRlLndoaXRlWClcclxuICAgIGNvbnN0IGhhc0JsYWNrUGxheWVyID0gKHkgPT09IHRoaXMuc3RhdGUuYmxhY2tZICYmIHggPT09IHRoaXMuc3RhdGUuYmxhY2tYKVxyXG4gICAgXHJcbiAgICAvLyDlpoLmnpzkuKTkuKrop5LoibLpg73lnKjlkIzkuIDkvY3nva7vvIzmmL7npLrmnIDlkI7np7vliqjliLDov5nph4znmoTop5LoibJcclxuICAgIGlmIChoYXNXaGl0ZVBsYXllciAmJiBoYXNCbGFja1BsYXllcikge1xyXG4gICAgICBjb25zdCBsYXN0UGxheWVyID0gdGhpcy5zdGF0ZS5sYXN0UGxheWVyQXRbYCR7eX0sJHt4fWBdXHJcbiAgICAgIGlmIChsYXN0UGxheWVyID09PSBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuV0hJVEUpIHtcclxuICAgICAgICByZXR1cm4gXCJ3aGl0ZS1wbGF5ZXJcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJsYWNrLXBsYXllclwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g6KeS6Imy77ya55m96KeS6ImyXHJcbiAgICBpZiAoaGFzV2hpdGVQbGF5ZXIpIHtcclxuICAgICAgcmV0dXJuIFwid2hpdGUtcGxheWVyXCJcclxuICAgIH1cclxuICAgIC8vIOinkuiJsu+8mum7keinkuiJslxyXG4gICAgaWYgKGhhc0JsYWNrUGxheWVyKSB7XHJcbiAgICAgIHJldHVybiBcImJsYWNrLXBsYXllclwiXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55m9566x5a2QXHJcbiAgICBjb25zdCB3aGl0ZUJveCA9IHRoaXMuc3RhdGUud2hpdGVCb3hlcy5maW5kKGIgPT4gYi54ID09PSB4ICYmIGIueSA9PT0geSlcclxuICAgIGlmICh3aGl0ZUJveCkge1xyXG4gICAgICByZXR1cm4gXCJ3aGl0ZS1ib3hcIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIOm7keeuseWtkFxyXG4gICAgY29uc3QgYmxhY2tCb3ggPSB0aGlzLnN0YXRlLmJsYWNrQm94ZXMuZmluZChiID0+IGIueCA9PT0geCAmJiBiLnkgPT09IHkpXHJcbiAgICBpZiAoYmxhY2tCb3gpIHtcclxuICAgICAgcmV0dXJuIFwiYmxhY2stYm94XCJcclxuICAgIH1cclxuXHJcbiAgICAvLyDnrrHlrZDnm67moIfngrnvvIjku4XlvZPml6DnrrHlrZDml7bmiY3mmL7npLrvvIlcclxuICAgIGNvbnN0IGlzV2hpdGVCb3hUYXJnZXQgPSB0aGlzLnN0YXRlLndoaXRlQm94VGFyZ2V0cy5zb21lKHQgPT4gdC54ID09PSB4ICYmIHQueSA9PT0geSlcclxuICAgIGlmIChpc1doaXRlQm94VGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiBcIndoaXRlLWJveC13aGl0ZS10YXJnZXRcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQmxhY2tCb3hUYXJnZXQgPSB0aGlzLnN0YXRlLmJsYWNrQm94VGFyZ2V0cy5zb21lKHQgPT4gdC54ID09PSB4ICYmIHQueSA9PT0geSlcclxuICAgIGlmIChpc0JsYWNrQm94VGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiBcImJsYWNrLWJveC1ibGFjay10YXJnZXRcIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIOinkuiJsuebruagh+eCue+8iOS7heW9k+aXoOinkuiJsuaXtuaJjeaYvuekuu+8iVxyXG4gICAgY29uc3Qgd2hpdGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUud2hpdGVQbGF5ZXJUYXJnZXQuZmluZCh0ID0+IHQueCA9PT0geCAmJiB0LnkgPT09IHkpXHJcbiAgICBpZiAod2hpdGVQb3NpdGlvbikge1xyXG4gICAgICByZXR1cm4gXCJ3aGl0ZS1wbGF5ZXItd2hpdGUtdGFyZ2V0XCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibGFja1Bvc2l0aW9uID0gdGhpcy5zdGF0ZS5ibGFja1BsYXllclRhcmdldC5maW5kKHQgPT4gdC54ID09PSB4ICYmIHQueSA9PT0geSlcclxuICAgIGlmIChibGFja1Bvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybiBcImJsYWNrLXBsYXllci1ibGFjay10YXJnZXRcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOiOt+WPluWbvuagh+i3r+W+hFxyXG4gIGdldEljb25JbWFnZVBhdGgodHlwZSkge1xyXG4gICAgLy8g5Zu+5qCH5pig5bCEXHJcbiAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgXCJ3aGl0ZS1wbGF5ZXJcIjogXCIvY29tbW9uL2ltYWdlL2ljb25zL2dyZXktd2hpdGUucG5nXCIsXHJcbiAgICAgIFwiYmxhY2stcGxheWVyXCI6IFwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS1ibGFjay5wbmdcIixcclxuICAgICAgXCJ3aGl0ZS1ib3hcIjogXCIvY29tbW9uL2ltYWdlL2ljb25zL2dyZXktYm94LnBuZ1wiLFxyXG4gICAgICBcImJsYWNrLWJveFwiOiBcIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtYm94LnBuZ1wiLFxyXG4gICAgICBcIndoaXRlLXRhcmdldFwiOiBcIi9jb21tb24vaW1hZ2UvaWNvbnMvZ3JleS10YXJnZXQucG5nXCIsXHJcbiAgICAgIFwiYmxhY2stdGFyZ2V0XCI6IFwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS10YXJnZXQucG5nXCJcclxuICAgIH1cclxuICAgIHJldHVybiBpY29uc1t0eXBlXSB8fCBcIlwiXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOabtOaWsOaJgOacieWNleWFg+agvOWbvuagh1xyXG4gIHVwZGF0ZUNlbGxJY29ucygpIHtcclxuICAgIGNvbnN0IGljb25zID0ge31cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zdGF0ZS5tYXBIZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhdGUubWFwV2lkdGg7IHgrKykge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRJY29uUGFydHMoeSwgeClcclxuICAgICAgICAvLyDms6jmhI/vvJrljbPkvb8gc3JjIOS4uiBudWxs77yM5Lmf6KaB5a2Y77yM5ZCm5YiZ5qih5p2/5Y+v6IO95peg5rOV5ZON5bqU5Y+Y5YyWXHJcbiAgICAgICAgaWNvbnNbYCR7eX0sJHt4fWBdID0gcGFydHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGljb25zXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lU3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBnYW1lU3RhdGVcclxuICB9XHJcbiAgXHJcbiAgLy8g6aqM6K+B56e75Yqo5ZCI5rOV5oCnXHJcbiAgdmFsaWRhdGVNb3ZlKGR4LCBkeSwgaXNXaGl0ZSkge1xyXG4gICAgY29uc3QgW3gsIHldID0gaXNXaGl0ZSA/IFt0aGlzLnN0YXRlLndoaXRlWCwgdGhpcy5zdGF0ZS53aGl0ZVldIDogW3RoaXMuc3RhdGUuYmxhY2tYLCB0aGlzLnN0YXRlLmJsYWNrWV1cclxuICAgIGNvbnN0IFtueCwgbnldID0gW3ggKyBkeCwgeSArIGR5XVxyXG4gICAgXHJcbiAgICAvLyAxLiDovrnnlYzmo4Dmn6VcclxuICAgIGlmICghdGhpcy5jaGVja0JvdW5kYXJ5KG54LCBueSkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiBcIuS4jeiDvei2iueVjO+8gVwiIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gMi4g5Zyw5b2i5ZCI5rOV5oCn5qOA5p+lXHJcbiAgICBpZiAoIXRoaXMuY2hlY2tUZXJyYWluKG54LCBueSwgaXNXaGl0ZSkpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGlzV2hpdGUgPyBcIueZveinkuiJsuWPquiDvei1sOm7keiJsuWcsOW9ouaIlueZveS9je+8gVwiIDogXCLpu5Hop5LoibLlj6rog73otbDnmb3oibLlnLDlvaLmiJbpu5HkvY3vvIFcIlxyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIG1lc3NhZ2UgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAzLiDmo4Dmn6Xnm67moIfmoLzmmK/lkKbmnInnrrHlrZBcclxuICAgIGNvbnN0IHdoaXRlQm94SW5kZXggPSB0aGlzLnN0YXRlLndoaXRlQm94ZXMuZmluZEluZGV4KGIgPT4gYi54ID09PSBueCAmJiBiLnkgPT09IG55KVxyXG4gICAgY29uc3QgYmxhY2tCb3hJbmRleCA9IHRoaXMuc3RhdGUuYmxhY2tCb3hlcy5maW5kSW5kZXgoYiA9PiBiLnggPT09IG54ICYmIGIueSA9PT0gbnkpXHJcbiAgICBcclxuICAgIC8vIOWkhOeQhueuseWtkOaOqOWKqFxyXG4gICAgaWYgKHdoaXRlQm94SW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlV2hpdGVCb3hQdXNoKGR4LCBkeSwgaXNXaGl0ZSwgd2hpdGVCb3hJbmRleCwgbngsIG55KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoYmxhY2tCb3hJbmRleCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVCbGFja0JveFB1c2goZHgsIGR5LCBpc1doaXRlLCBibGFja0JveEluZGV4LCBueCwgbnkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOaXoOeuseWtkO+8jOebtOaOpeenu+WKqFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHZhbGlkOiB0cnVlLCBcclxuICAgICAgYWN0aW9uOiAnbW92ZScsIFxyXG4gICAgICBkYXRhOiB7IGlzV2hpdGUsIG54LCBueSB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOajgOafpei+ueeVjFxyXG4gIGNoZWNrQm91bmRhcnkoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5zdGF0ZS5tYXBXaWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuc3RhdGUubWFwSGVpZ2h0XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOajgOafpeWcsOW9olxyXG4gIGNoZWNrVGVycmFpbih4LCB5LCBpc1doaXRlKSB7XHJcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRoaXMuc3RhdGUuZ2V0TWFwVmFsdWUoeSwgeClcclxuICAgIGNvbnN0IG90aGVyWCA9IGlzV2hpdGUgPyB0aGlzLnN0YXRlLmJsYWNrWCA6IHRoaXMuc3RhdGUud2hpdGVYXHJcbiAgICBjb25zdCBvdGhlclkgPSBpc1doaXRlID8gdGhpcy5zdGF0ZS5ibGFja1kgOiB0aGlzLnN0YXRlLndoaXRlWVxyXG4gICAgY29uc3QgaXNUYXJnZXRPcHBvc2l0ZVBsYXllciA9IHggPT09IG90aGVyWCAmJiB5ID09PSBvdGhlcllcclxuICAgIFxyXG4gICAgY29uc3QgaGFzV2hpdGVCb3ggPSB0aGlzLnN0YXRlLmhhc1doaXRlQm94KHgsIHkpXHJcbiAgICBjb25zdCBoYXNCbGFja0JveCA9IHRoaXMuc3RhdGUuaGFzQmxhY2tCb3goeCwgeSlcclxuICAgIGNvbnN0IGlzV2hpdGVCb3hUYXJnZXQgPSB0aGlzLnN0YXRlLmlzV2hpdGVCb3hUYXJnZXQoeCwgeSlcclxuICAgIGNvbnN0IGlzQmxhY2tCb3hUYXJnZXQgPSB0aGlzLnN0YXRlLmlzQmxhY2tCb3hUYXJnZXQoeCwgeSlcclxuICAgIGNvbnN0IGlzV2hpdGVQbGF5ZXJUYXJnZXQgPSB0aGlzLnN0YXRlLmlzV2hpdGVQbGF5ZXJUYXJnZXQoeCwgeSlcclxuICAgIGNvbnN0IGlzQmxhY2tQbGF5ZXJUYXJnZXQgPSB0aGlzLnN0YXRlLmlzQmxhY2tQbGF5ZXJUYXJnZXQoeCwgeSlcclxuICAgIFxyXG4gICAgaWYgKGlzV2hpdGUpIHtcclxuICAgICAgLy8g55m96KeS6Imy5Y+v5Lul6LWw77ya6buR5Zyw44CB6buR566x5a2Q44CB6buR566x5a2Q55uu5qCH54K544CB55m96KeS6Imy55uu5qCH54K544CB5a+55pa56KeS6Imy5L2N572uXHJcbiAgICAgIHJldHVybiB0YXJnZXRWYWx1ZSA9PT0gR0FNRV9DT05TVEFOVFMuQ0VMTF9UWVBFUy5CTEFDS19XQUxMIHx8IFxyXG4gICAgICAgICAgICAgaGFzQmxhY2tCb3ggfHwgXHJcbiAgICAgICAgICAgICBpc0JsYWNrQm94VGFyZ2V0IHx8IFxyXG4gICAgICAgICAgICAgaXNXaGl0ZVBsYXllclRhcmdldCB8fCBcclxuICAgICAgICAgICAgIGlzVGFyZ2V0T3Bwb3NpdGVQbGF5ZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOm7keinkuiJsuWPr+S7pei1sO+8mueZveWcsOOAgeeZveeuseWtkOOAgeeZveeuseWtkOebruagh+eCueOAgem7keinkuiJsuebruagh+eCueOAgeWvueaWueinkuiJsuS9jee9rlxyXG4gICAgICByZXR1cm4gdGFyZ2V0VmFsdWUgPT09IEdBTUVfQ09OU1RBTlRTLkNFTExfVFlQRVMuV0hJVEVfRkxPT1IgfHwgXHJcbiAgICAgICAgICAgICBoYXNXaGl0ZUJveCB8fCBcclxuICAgICAgICAgICAgIGlzV2hpdGVCb3hUYXJnZXQgfHwgXHJcbiAgICAgICAgICAgICBpc0JsYWNrUGxheWVyVGFyZ2V0IHx8IFxyXG4gICAgICAgICAgICAgaXNUYXJnZXRPcHBvc2l0ZVBsYXllclxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyDpqozor4Hnmb3nrrHlrZDmjqjliqhcclxuICB2YWxpZGF0ZVdoaXRlQm94UHVzaChkeCwgZHksIGlzV2hpdGUsIGJveEluZGV4LCBueCwgbnkpIHtcclxuICAgIGlmICghaXNXaGl0ZSkge1xyXG4gICAgICAvLyDpu5Hop5LoibLotbDkuIrnmb3nrrHlrZDvvIjlhYHorrjvvIlcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgdmFsaWQ6IHRydWUsIFxyXG4gICAgICAgIGFjdGlvbjogJ21vdmUnLCBcclxuICAgICAgICBkYXRhOiB7IGlzV2hpdGU6IGZhbHNlLCBueCwgbnkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOeZveinkuiJsuaOqOeZveeuseWtkFxyXG4gICAgY29uc3QgYm94TmV4dFggPSBueCArIGR4XHJcbiAgICBjb25zdCBib3hOZXh0WSA9IG55ICsgZHlcclxuICAgIFxyXG4gICAgLy8g566x5a2Q6L6555WM5qOA5p+lXHJcbiAgICBpZiAoIXRoaXMuY2hlY2tCb3VuZGFyeShib3hOZXh0WCwgYm94TmV4dFkpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCLnrrHlrZDkuI3og73otornlYzvvIFcIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOajgOafpeeuseWtkOWJjeaWueaYr+WQpuiiq+mYu+aMoVxyXG4gICAgaWYgKHRoaXMuaXNCbG9ja2VkKGJveE5leHRYLCBib3hOZXh0WSwgYm94SW5kZXgsICd3aGl0ZScpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCLnrrHlrZDliY3mlrnooqvpmLvmjKHvvIFcIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOajgOafpeeuseWtkOebruagh+WcsOW9olxyXG4gICAgY29uc3QgYm94TmV4dFZhbHVlID0gdGhpcy5zdGF0ZS5nZXRNYXBWYWx1ZShib3hOZXh0WSwgYm94TmV4dFgpXHJcbiAgICBjb25zdCBvbkJsYWNrVGFyZ2V0ID0gdGhpcy5zdGF0ZS5pc0JsYWNrQm94VGFyZ2V0KGJveE5leHRYLCBib3hOZXh0WSlcclxuICAgIFxyXG4gICAgaWYgKGJveE5leHRWYWx1ZSAhPT0gR0FNRV9DT05TVEFOVFMuQ0VMTF9UWVBFUy5CTEFDS19XQUxMICYmICFvbkJsYWNrVGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCLnmb3nrrHlrZDlj6rog73lnKjpu5HoibLlnLDlvaLkuIrnp7vliqjvvIFcIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IFxyXG4gICAgICB2YWxpZDogdHJ1ZSwgXHJcbiAgICAgIGFjdGlvbjogJ3B1c2gnLCBcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBpc1doaXRlOiB0cnVlLCBcclxuICAgICAgICBwbGF5ZXJQb3M6IHsgbngsIG55IH0sXHJcbiAgICAgICAgYm94UG9zOiB7IHg6IGJveE5leHRYLCB5OiBib3hOZXh0WSB9LFxyXG4gICAgICAgIGJveEluZGV4LFxyXG4gICAgICAgIGJveFR5cGU6ICd3aGl0ZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyDpqozor4Hpu5HnrrHlrZDmjqjliqhcclxuICB2YWxpZGF0ZUJsYWNrQm94UHVzaChkeCwgZHksIGlzV2hpdGUsIGJveEluZGV4LCBueCwgbnkpIHtcclxuICAgIGlmIChpc1doaXRlKSB7XHJcbiAgICAgIC8vIOeZveinkuiJsui1sOS4ium7keeuseWtkO+8iOWFgeiuuO+8iVxyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogdHJ1ZSwgXHJcbiAgICAgICAgYWN0aW9uOiAnbW92ZScsIFxyXG4gICAgICAgIGRhdGE6IHsgaXNXaGl0ZTogdHJ1ZSwgbngsIG55IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDpu5Hop5LoibLmjqjpu5HnrrHlrZBcclxuICAgIGNvbnN0IGJveE5leHRYID0gbnggKyBkeFxyXG4gICAgY29uc3QgYm94TmV4dFkgPSBueSArIGR5XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5jaGVja0JvdW5kYXJ5KGJveE5leHRYLCBib3hOZXh0WSkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiBcIueuseWtkOS4jeiDvei2iueVjO+8gVwiIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaXNCbG9ja2VkKGJveE5leHRYLCBib3hOZXh0WSwgYm94SW5kZXgsICdibGFjaycpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCLnrrHlrZDliY3mlrnooqvpmLvmjKHvvIFcIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGJveE5leHRWYWx1ZSA9IHRoaXMuc3RhdGUuZ2V0TWFwVmFsdWUoYm94TmV4dFksIGJveE5leHRYKVxyXG4gICAgY29uc3Qgb25XaGl0ZVRhcmdldCA9IHRoaXMuc3RhdGUuaXNXaGl0ZUJveFRhcmdldChib3hOZXh0WCwgYm94TmV4dFkpXHJcbiAgICBcclxuICAgIGlmIChib3hOZXh0VmFsdWUgIT09IEdBTUVfQ09OU1RBTlRTLkNFTExfVFlQRVMuV0hJVEVfRkxPT1IgJiYgIW9uV2hpdGVUYXJnZXQpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiBcIum7keeuseWtkOWPquiDveWcqOeZveiJsuWcsOW9ouS4iuenu+WKqO+8gVwiIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHZhbGlkOiB0cnVlLCBcclxuICAgICAgYWN0aW9uOiAncHVzaCcsIFxyXG4gICAgICBkYXRhOiB7IFxyXG4gICAgICAgIGlzV2hpdGU6IGZhbHNlLCBcclxuICAgICAgICBwbGF5ZXJQb3M6IHsgbngsIG55IH0sXHJcbiAgICAgICAgYm94UG9zOiB7IHg6IGJveE5leHRYLCB5OiBib3hOZXh0WSB9LFxyXG4gICAgICAgIGJveEluZGV4LFxyXG4gICAgICAgIGJveFR5cGU6ICdibGFjaydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyDmo4Dmn6XmmK/lkKbooqvpmLvmjKFcclxuICBpc0Jsb2NrZWQoeCwgeSwgZXhjbHVkZUluZGV4LCBib3hUeXBlKSB7XHJcbiAgICAvLyDmo4Dmn6Xlhbbku5bnrrHlrZBcclxuICAgIGlmIChib3hUeXBlID09PSAnd2hpdGUnKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrZWRCeVdoaXRlID0gdGhpcy5zdGF0ZS53aGl0ZUJveGVzLnNvbWUoXHJcbiAgICAgICAgKGIsIGkpID0+IGkgIT09IGV4Y2x1ZGVJbmRleCAmJiBiLnggPT09IHggJiYgYi55ID09PSB5XHJcbiAgICAgIClcclxuICAgICAgY29uc3QgYmxvY2tlZEJ5QmxhY2sgPSB0aGlzLnN0YXRlLmJsYWNrQm94ZXMuc29tZShiID0+IGIueCA9PT0geCAmJiBiLnkgPT09IHkpXHJcbiAgICAgIGlmIChibG9ja2VkQnlXaGl0ZSB8fCBibG9ja2VkQnlCbGFjaykgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrZWRCeUJsYWNrID0gdGhpcy5zdGF0ZS5ibGFja0JveGVzLnNvbWUoXHJcbiAgICAgICAgKGIsIGkpID0+IGkgIT09IGV4Y2x1ZGVJbmRleCAmJiBiLnggPT09IHggJiYgYi55ID09PSB5XHJcbiAgICAgIClcclxuICAgICAgY29uc3QgYmxvY2tlZEJ5V2hpdGUgPSB0aGlzLnN0YXRlLndoaXRlQm94ZXMuc29tZShiID0+IGIueCA9PT0geCAmJiBiLnkgPT09IHkpXHJcbiAgICAgIGlmIChibG9ja2VkQnlXaGl0ZSB8fCBibG9ja2VkQnlCbGFjaykgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5qOA5p+l6KeS6ImyXHJcbiAgICBjb25zdCBibG9ja2VkQnlQbGF5ZXIgPSAoeCA9PT0gdGhpcy5zdGF0ZS53aGl0ZVggJiYgeSA9PT0gdGhpcy5zdGF0ZS53aGl0ZVkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHggPT09IHRoaXMuc3RhdGUuYmxhY2tYICYmIHkgPT09IHRoaXMuc3RhdGUuYmxhY2tZKVxyXG4gICAgXHJcbiAgICByZXR1cm4gYmxvY2tlZEJ5UGxheWVyXHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFdpbkNoZWNrZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBnYW1lU3RhdGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5qOA5p+l5piv5ZCm6YCa5YWzXHJcbiAgICBjaGVja1dpbigpIHtcclxuICAgICAgY29uc3Qgd2hpdGVXaW4gPSB0aGlzLmNoZWNrV2hpdGVCb3hlcygpXHJcbiAgICAgIGNvbnN0IGJsYWNrV2luID0gdGhpcy5jaGVja0JsYWNrQm94ZXMoKVxyXG4gICAgICBjb25zdCB3aGl0ZVBsYXllck9uVGFyZ2V0ID0gdGhpcy5jaGVja1doaXRlUGxheWVyVGFyZ2V0KClcclxuICAgICAgY29uc3QgYmxhY2tQbGF5ZXJPblRhcmdldCA9IHRoaXMuY2hlY2tCbGFja1BsYXllclRhcmdldCgpXHJcbiAgICAgIFxyXG4gICAgICAvLyDmiYDmnInmnaHku7bpg73mu6HotrPmiY3pgJrlhbNcclxuICAgICAgcmV0dXJuIHdoaXRlV2luICYmIGJsYWNrV2luICYmIHdoaXRlUGxheWVyT25UYXJnZXQgJiYgYmxhY2tQbGF5ZXJPblRhcmdldCAmJlxyXG4gICAgICAgICAgICAgKHRoaXMuc3RhdGUud2hpdGVCb3hlcy5sZW5ndGggPiAwIHx8IHRoaXMuc3RhdGUuYmxhY2tCb3hlcy5sZW5ndGggPiAwKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDmo4Dmn6Xnmb3nrrHlrZBcclxuICAgIGNoZWNrV2hpdGVCb3hlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2hpdGVCb3hlcy5ldmVyeShib3ggPT5cclxuICAgICAgICB0aGlzLnN0YXRlLndoaXRlQm94VGFyZ2V0cy5zb21lKHRhcmdldCA9PiBcclxuICAgICAgICAgIHRhcmdldC54ID09PSBib3gueCAmJiB0YXJnZXQueSA9PT0gYm94LnlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5qOA5p+l6buR566x5a2QXHJcbiAgICBjaGVja0JsYWNrQm94ZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJsYWNrQm94ZXMuZXZlcnkoYm94ID0+XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ibGFja0JveFRhcmdldHMuc29tZSh0YXJnZXQgPT4gXHJcbiAgICAgICAgICB0YXJnZXQueCA9PT0gYm94LnggJiYgdGFyZ2V0LnkgPT09IGJveC55XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOajgOafpeeZveinkuiJslxyXG4gICAgY2hlY2tXaGl0ZVBsYXllclRhcmdldCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2hpdGVQbGF5ZXJUYXJnZXQuc29tZShwb3MgPT5cclxuICAgICAgICBwb3MueCA9PT0gdGhpcy5zdGF0ZS53aGl0ZVggJiYgcG9zLnkgPT09IHRoaXMuc3RhdGUud2hpdGVZXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5qOA5p+l6buR6KeS6ImyXHJcbiAgICBjaGVja0JsYWNrUGxheWVyVGFyZ2V0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ibGFja1BsYXllclRhcmdldC5zb21lKHBvcyA9PlxyXG4gICAgICAgIHBvcy54ID09PSB0aGlzLnN0YXRlLmJsYWNrWCAmJiBwb3MueSA9PT0gdGhpcy5zdGF0ZS5ibGFja1lcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0iLCIvLyDmuLjmiI/luLjph49cclxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xyXG4gICAgQ0VMTF9UWVBFUzoge1xyXG4gICAgICBXSElURV9GTE9PUjogMCwgICAgICAvLyDnmb3lnLBcclxuICAgICAgQkxBQ0tfV0FMTDogMSwgICAgICAgLy8g6buR5aKZXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBQTEFZRVJfVFlQRVM6IHtcclxuICAgICAgV0hJVEU6IDYsICAgICAgICAgICAgLy8g55m96KeS6ImyXHJcbiAgICAgIEJMQUNLOiA3LCAgICAgICAgICAgIC8vIOm7keinkuiJslxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgQlVUVE9OX0NPTE9SUzoge1xyXG4gICAgICBERUZBVUxUX1NXSVRDSDogXCIjMzQ5OERCXCIsXHJcbiAgICAgIERFRkFVTFRfQVJST1c6IFwiIzJFQ0M3MVwiLFxyXG4gICAgICBERUZBVUxUX1JFU0VUOiBcIiNFNzRDM0NcIixcclxuICAgICAgUFJFU1NFRF9TV0lUQ0g6IFwiI0ZGNDE2Q1wiLFxyXG4gICAgICBQUkVTU0VEX0FSUk9XOiBcIiMzNkQxRENcIixcclxuICAgICAgUFJFU1NFRF9SRVNFVDogXCIjOUI1OUI2XCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyDkuo5JY29uTWFuYWdlci5qc+mHjOWumuS5ie+8mlxyXG4gICAgLy8gSUNPTl9UWVBFUzoge1xyXG4gICAgLy8gICBXSElURV9QTEFZRVI6IFwid2hpdGUtcGxheWVyXCIsXHJcbiAgICAvLyAgIEJMQUNLX1BMQVlFUjogXCJibGFjay1wbGF5ZXJcIixcclxuICAgIC8vICAgV0hJVEVfQk9YOiBcIndoaXRlLWJveFwiLFxyXG4gICAgLy8gICBCTEFDS19CT1g6IFwiYmxhY2stYm94XCIsXHJcbiAgICAvLyAgIFdISVRFX0JPWF9UQVJHRVQ6IFwid2hpdGUtYm94LXdoaXRlLXRhcmdldFwiLFxyXG4gICAgLy8gICBCTEFDS19CT1hfVEFSR0VUOiBcImJsYWNrLWJveC1ibGFjay10YXJnZXRcIixcclxuICAgIC8vICAgV0hJVEVfUExBWUVSX1RBUkdFVDogXCJ3aGl0ZS1wbGF5ZXItd2hpdGUtdGFyZ2V0XCIsXHJcbiAgICAvLyAgIEJMQUNLX1BMQVlFUl9UQVJHRVQ6IFwiYmxhY2stcGxheWVyLWJsYWNrLXRhcmdldFwiLFxyXG4gICAgLy8gfSxcclxuICAgIFxyXG4gICAgLy8gSUNPTl9QQVRIUzoge1xyXG4gICAgLy8gICBcIndoaXRlLXBsYXllclwiOiBcIi9jb21tb24vaW1hZ2UvaWNvbnMvZ3JleS13aGl0ZS5wbmdcIixcclxuICAgIC8vICAgXCJibGFjay1wbGF5ZXJcIjogXCIvY29tbW9uL2ltYWdlL2ljb25zL3doaXRlLWJsYWNrLnBuZ1wiLFxyXG4gICAgLy8gICBcIndoaXRlLWJveFwiOiBcIi9jb21tb24vaW1hZ2UvaWNvbnMvZ3JleS1ib3gucG5nXCIsXHJcbiAgICAvLyAgIFwiYmxhY2stYm94XCI6IFwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS1ib3gucG5nXCIsXHJcbiAgICAvLyAgIFwid2hpdGUtdGFyZ2V0XCI6IFwiL2NvbW1vbi9pbWFnZS9pY29ucy9ncmV5LXRhcmdldC5wbmdcIixcclxuICAgIC8vICAgXCJibGFjay10YXJnZXRcIjogXCIvY29tbW9uL2ltYWdlL2ljb25zL3doaXRlLXRhcmdldC5wbmdcIixcclxuICAgIC8vIH1cclxuICB9IiwiaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9HYW1lU3RhdGUnXHJcbmltcG9ydCB7IE1vdmVWYWxpZGF0b3IgfSBmcm9tICcuL01vdmVWYWxpZGF0b3InXHJcbmltcG9ydCB7IFdpbkNoZWNrZXIgfSBmcm9tICcuL1dpbkNoZWNrZXInXHJcbmltcG9ydCB7IEljb25NYW5hZ2VyIH0gZnJvbSAnLi9JY29uTWFuYWdlcidcclxuaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgR2FtZVN0YXRlKClcclxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IE1vdmVWYWxpZGF0b3IodGhpcy5zdGF0ZSlcclxuICAgIHRoaXMud2luQ2hlY2tlciA9IG5ldyBXaW5DaGVja2VyKHRoaXMuc3RhdGUpXHJcbiAgICB0aGlzLmljb25NYW5hZ2VyID0gbmV3IEljb25NYW5hZ2VyKHRoaXMuc3RhdGUpXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOWIneWni+WMluWFs+WNoVxyXG4gIGluaXRMZXZlbChsZXZlbERhdGEpIHtcclxuICAgIHRoaXMuc3RhdGUucmVzZXQoKVxyXG4gICAgXHJcbiAgICAvLyDorr7nva7lnLDlm75cclxuICAgIGlmIChsZXZlbERhdGEubWFwUnVsZXMpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5tYXBSdWxlcyA9IGxldmVsRGF0YS5tYXBSdWxlc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDorr7nva7op5LoibLkvY3nva5cclxuICAgIGlmIChsZXZlbERhdGEud2hpdGVQbGF5ZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS53aGl0ZVggPSBsZXZlbERhdGEud2hpdGVQbGF5ZXIueFxyXG4gICAgICB0aGlzLnN0YXRlLndoaXRlWSA9IGxldmVsRGF0YS53aGl0ZVBsYXllci55XHJcbiAgICAgIC8vIOWIneWni+WMluaXtuiusOW9leeZveinkuiJsuS9jee9rlxyXG4gICAgICB0aGlzLnN0YXRlLnJlY29yZFBsYXllck1vdmUobGV2ZWxEYXRhLndoaXRlUGxheWVyLngsIGxldmVsRGF0YS53aGl0ZVBsYXllci55LCBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuV0hJVEUpXHJcbiAgICB9XHJcbiAgICBpZiAobGV2ZWxEYXRhLmJsYWNrUGxheWVyKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuYmxhY2tYID0gbGV2ZWxEYXRhLmJsYWNrUGxheWVyLnhcclxuICAgICAgdGhpcy5zdGF0ZS5ibGFja1kgPSBsZXZlbERhdGEuYmxhY2tQbGF5ZXIueVxyXG4gICAgICAvLyDliJ3lp4vljJbml7borrDlvZXpu5Hop5LoibLkvY3nva5cclxuICAgICAgdGhpcy5zdGF0ZS5yZWNvcmRQbGF5ZXJNb3ZlKGxldmVsRGF0YS5ibGFja1BsYXllci54LCBsZXZlbERhdGEuYmxhY2tQbGF5ZXIueSwgR0FNRV9DT05TVEFOVFMuUExBWUVSX1RZUEVTLkJMQUNLKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDorr7nva7nrrHlrZBcclxuICAgIGlmIChsZXZlbERhdGEud2hpdGVCb3hlcykge1xyXG4gICAgICB0aGlzLnN0YXRlLndoaXRlQm94ZXMgPSBbLi4ubGV2ZWxEYXRhLndoaXRlQm94ZXNdXHJcbiAgICB9XHJcbiAgICBpZiAobGV2ZWxEYXRhLmJsYWNrQm94ZXMpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5ibGFja0JveGVzID0gWy4uLmxldmVsRGF0YS5ibGFja0JveGVzXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDorr7nva7nm67moIfngrlcclxuICAgIGlmIChsZXZlbERhdGEud2hpdGVCb3hUYXJnZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUud2hpdGVCb3hUYXJnZXRzID0gWy4uLmxldmVsRGF0YS53aGl0ZUJveFRhcmdldHNdXHJcbiAgICB9XHJcbiAgICBpZiAobGV2ZWxEYXRhLmJsYWNrQm94VGFyZ2V0cykge1xyXG4gICAgICB0aGlzLnN0YXRlLmJsYWNrQm94VGFyZ2V0cyA9IFsuLi5sZXZlbERhdGEuYmxhY2tCb3hUYXJnZXRzXVxyXG4gICAgfVxyXG4gICAgaWYgKGxldmVsRGF0YS53aGl0ZVBsYXllclRhcmdldCkge1xyXG4gICAgICB0aGlzLnN0YXRlLndoaXRlUGxheWVyVGFyZ2V0ID0gWy4uLmxldmVsRGF0YS53aGl0ZVBsYXllclRhcmdldF1cclxuICAgIH1cclxuICAgIGlmIChsZXZlbERhdGEuYmxhY2tQbGF5ZXJUYXJnZXQpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5ibGFja1BsYXllclRhcmdldCA9IFsuLi5sZXZlbERhdGEuYmxhY2tQbGF5ZXJUYXJnZXRdXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOiuvue9ruW9k+WJjeeOqeWutlxyXG4gICAgaWYgKGxldmVsRGF0YS5jdXJyZW50UGxheWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID0gbGV2ZWxEYXRhLmN1cnJlbnRQbGF5ZXJcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8g56e75YqoXHJcbiAgbW92ZShkeCwgZHkpIHtcclxuICAgIGNvbnN0IGlzV2hpdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IEdBTUVfQ09OU1RBTlRTLlBMQVlFUl9UWVBFUy5XSElURVxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWxpZGF0b3IudmFsaWRhdGVNb3ZlKGR4LCBkeSwgaXNXaGl0ZSlcclxuICAgIFxyXG4gICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5omn6KGM56e75YqoXHJcbiAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gJ21vdmUnKSB7XHJcbiAgICAgIHRoaXMubW92ZVBsYXllcihyZXN1bHQuZGF0YS5pc1doaXRlLCByZXN1bHQuZGF0YS5ueCwgcmVzdWx0LmRhdGEubnkpXHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5hY3Rpb24gPT09ICdwdXNoJykge1xyXG4gICAgICB0aGlzLnB1c2hCb3goXHJcbiAgICAgICAgcmVzdWx0LmRhdGEuaXNXaGl0ZSxcclxuICAgICAgICByZXN1bHQuZGF0YS5wbGF5ZXJQb3MsXHJcbiAgICAgICAgcmVzdWx0LmRhdGEuYm94UG9zLFxyXG4gICAgICAgIHJlc3VsdC5kYXRhLmJveEluZGV4LFxyXG4gICAgICAgIHJlc3VsdC5kYXRhLmJveFR5cGVcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDmo4Dmn6XmmK/lkKbpgJrlhbNcclxuICAgIGNvbnN0IGlzV2luID0gdGhpcy53aW5DaGVja2VyLmNoZWNrV2luKClcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBpc1dpbixcclxuICAgICAgdXBkYXRlZEljb25zOiB0aGlzLnVwZGF0ZUNlbGxJY29ucygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOenu+WKqOeOqeWutlxyXG4gIG1vdmVQbGF5ZXIoaXNXaGl0ZSwgeCwgeSkge1xyXG4gICAgY29uc3QgcGxheWVyVHlwZSA9IGlzV2hpdGUgPyBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuV0hJVEUgOiBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuQkxBQ0tcclxuICAgIFxyXG4gICAgaWYgKGlzV2hpdGUpIHtcclxuICAgICAgdGhpcy5zdGF0ZS53aGl0ZVggPSB4XHJcbiAgICAgIHRoaXMuc3RhdGUud2hpdGVZID0geVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0ZS5ibGFja1ggPSB4XHJcbiAgICAgIHRoaXMuc3RhdGUuYmxhY2tZID0geVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDorrDlvZXov5nkuKrop5LoibLmnIDlkI7liLDovr7ov5nkuKrkvY3nva5cclxuICAgIHRoaXMuc3RhdGUucmVjb3JkUGxheWVyTW92ZSh4LCB5LCBwbGF5ZXJUeXBlKVxyXG4gIH1cclxuICBcclxuICAvLyDmjqjliqjnrrHlrZBcclxuICBwdXNoQm94KGlzV2hpdGUsIHBsYXllclBvcywgYm94UG9zLCBib3hJbmRleCwgYm94VHlwZSkge1xyXG4gICAgLy8g56e75Yqo546p5a62XHJcbiAgICB0aGlzLm1vdmVQbGF5ZXIoaXNXaGl0ZSwgcGxheWVyUG9zLm54LCBwbGF5ZXJQb3MubnkpXHJcbiAgICBcclxuICAgIC8vIOenu+WKqOeuseWtkFxyXG4gICAgaWYgKGJveFR5cGUgPT09ICd3aGl0ZScpIHtcclxuICAgICAgdGhpcy5zdGF0ZS53aGl0ZUJveGVzW2JveEluZGV4XS54ID0gYm94UG9zLnhcclxuICAgICAgdGhpcy5zdGF0ZS53aGl0ZUJveGVzW2JveEluZGV4XS55ID0gYm94UG9zLnlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuYmxhY2tCb3hlc1tib3hJbmRleF0ueCA9IGJveFBvcy54XHJcbiAgICAgIHRoaXMuc3RhdGUuYmxhY2tCb3hlc1tib3hJbmRleF0ueSA9IGJveFBvcy55XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOabtOaWsOaJgOacieWNleWFg+agvOWbvuagh1xyXG4gIHVwZGF0ZUNlbGxJY29ucygpIHtcclxuICAgIGNvbnN0IGljb25zID0ge31cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zdGF0ZS5tYXBIZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhdGUubWFwV2lkdGg7IHgrKykge1xyXG4gICAgICAgIGljb25zW2Ake3l9LCR7eH1gXSA9IHRoaXMuaWNvbk1hbmFnZXIuZ2V0SWNvblBhcnRzKHksIHgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpY29uc1xyXG4gIH1cclxuICBcclxuICAvLyDliIfmjaLnjqnlrrZcclxuICBzd2l0Y2hQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLnN0YXRlLnN3aXRjaFBsYXllcigpXHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOajgOafpeaYr+WQpumAmuWFs1xyXG4gIGNoZWNrV2luKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2luQ2hlY2tlci5jaGVja1dpbigpXHJcbiAgfVxyXG4gIFxyXG4gIC8vIOmHjee9ruaMiemSruminOiJslxyXG4gIHJlc2V0QnV0dG9uQ29sb3JzKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5zd2l0Y2hCdG5Db2xvciA9IEdBTUVfQ09OU1RBTlRTLkJVVFRPTl9DT0xPUlMuREVGQVVMVF9TV0lUQ0hcclxuICAgIHRoaXMuc3RhdGUudXBCdG5Db2xvciA9IEdBTUVfQ09OU1RBTlRTLkJVVFRPTl9DT0xPUlMuREVGQVVMVF9BUlJPV1xyXG4gICAgdGhpcy5zdGF0ZS5kb3duQnRuQ29sb3IgPSBHQU1FX0NPTlNUQU5UUy5CVVRUT05fQ09MT1JTLkRFRkFVTFRfQVJST1dcclxuICAgIHRoaXMuc3RhdGUubGVmdEJ0bkNvbG9yID0gR0FNRV9DT05TVEFOVFMuQlVUVE9OX0NPTE9SUy5ERUZBVUxUX0FSUk9XXHJcbiAgICB0aGlzLnN0YXRlLnJpZ2h0QnRuQ29sb3IgPSBHQU1FX0NPTlNUQU5UUy5CVVRUT05fQ09MT1JTLkRFRkFVTFRfQVJST1dcclxuICAgIHRoaXMuc3RhdGUucmVzZXRCdG5Db2xvciA9IEdBTUVfQ09OU1RBTlRTLkJVVFRPTl9DT0xPUlMuREVGQVVMVF9SRVNFVFxyXG4gIH1cclxuICBcclxuICAgIC8vIOiOt+WPluWNleWFg+agvOiDjOaZr+minOiJslxyXG4gICAgZ2V0Q2VsbEJnKHksIHgpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpc1doaXRlQm94VGFyZ2V0ID0gc3RhdGUud2hpdGVCb3hUYXJnZXRzLnNvbWUodCA9PiB0LnggPT09IHggJiYgdC55ID09PSB5KVxyXG4gICAgICAgIGNvbnN0IGlzQmxhY2tCb3hUYXJnZXQgPSBzdGF0ZS5ibGFja0JveFRhcmdldHMuc29tZSh0ID0+IHQueCA9PT0geCAmJiB0LnkgPT09IHkpXHJcbiAgICAgICAgY29uc3QgaGFzV2hpdGVCb3ggPSBzdGF0ZS53aGl0ZUJveGVzLnNvbWUoYiA9PiBiLnggPT09IHggJiYgYi55ID09PSB5KVxyXG4gICAgICAgIGNvbnN0IGhhc0JsYWNrQm94ID0gc3RhdGUuYmxhY2tCb3hlcy5zb21lKGIgPT4gYi54ID09PSB4ICYmIGIueSA9PT0geSlcclxuICAgICAgICBcclxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmnInop5LoibJcclxuICAgICAgICBjb25zdCBoYXNXaGl0ZVBsYXllciA9ICh5ID09PSBzdGF0ZS53aGl0ZVkgJiYgeCA9PT0gc3RhdGUud2hpdGVYKVxyXG4gICAgICAgIGNvbnN0IGhhc0JsYWNrUGxheWVyID0gKHkgPT09IHN0YXRlLmJsYWNrWSAmJiB4ID09PSBzdGF0ZS5ibGFja1gpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5aaC5p6c5Lik5Liq6KeS6Imy6YO95Zyo5ZCM5LiA5L2N572u77yM5qC55o2u5pyA5ZCO56e75Yqo55qE6KeS6Imy5pi+56S66IOM5pmv6ImyXHJcbiAgICAgICAgaWYgKGhhc1doaXRlUGxheWVyICYmIGhhc0JsYWNrUGxheWVyKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0UGxheWVyID0gc3RhdGUubGFzdFBsYXllckF0W2Ake3l9LCR7eH1gXVxyXG4gICAgICAgICAgaWYgKGxhc3RQbGF5ZXIgPT09IEdBTUVfQ09OU1RBTlRTLlBMQVlFUl9UWVBFUy5XSElURSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjRkZGRkZGXCJcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIOS8mOWFiOe6pzog6KeS6ImyID4g566x5a2QID4g566x5a2Q55uu5qCH54K5ID4g5Zyw5Zu+XHJcbiAgICAgICAgaWYgKGhhc1doaXRlUGxheWVyKSByZXR1cm4gXCIjRkZGRkZGXCJcclxuICAgICAgICBpZiAoaGFzQmxhY2tQbGF5ZXIpIHJldHVybiBcIiMwMDAwMDBcIlxyXG4gICAgICAgIGlmIChoYXNXaGl0ZUJveCkgcmV0dXJuIFwiI0UwRTBFMFwiXHJcbiAgICAgICAgaWYgKGhhc0JsYWNrQm94KSByZXR1cm4gXCIjMUExQTFBXCJcclxuICAgICAgICBpZiAoaXNXaGl0ZUJveFRhcmdldCkgcmV0dXJuIFwiI0ZDRDNEM1wiXHJcbiAgICAgICAgaWYgKGlzQmxhY2tCb3hUYXJnZXQpIHJldHVybiBcIiMzMzMzMzNcIlxyXG4gICAgXHJcbiAgICAgICAgLy8g6KeS6Imy55uu5qCH54K5XHJcbiAgICAgICAgY29uc3Qgd2hpdGVQbGF5ZXJUYXJnZXQgPSBzdGF0ZS53aGl0ZVBsYXllclRhcmdldC5maW5kKHQgPT4gdC54ID09PSB4ICYmIHQueSA9PT0geSlcclxuICAgICAgICBjb25zdCBibGFja1BsYXllclRhcmdldCA9IHN0YXRlLmJsYWNrUGxheWVyVGFyZ2V0LmZpbmQodCA9PiB0LnggPT09IHggJiYgdC55ID09PSB5KVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHdoaXRlUGxheWVyVGFyZ2V0KSByZXR1cm4gXCIjRDNEM0QzXCIgLy8g55m95L2N6IOM5pmv6ImyXHJcbiAgICAgICAgaWYgKGJsYWNrUGxheWVyVGFyZ2V0KSByZXR1cm4gXCIjNTU1NTU1XCIgLy8g6buR5L2N6IOM5pmv6ImyXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gc3RhdGUuZ2V0TWFwVmFsdWUoeSwgeCkgPT09IDAgPyBcIiNGOEY5RkFcIiA6IFwiIzJEMzc0OFwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOiOt+WPluWNleWFg+agvOi+ueeVjOminOiJslxyXG4gICAgZ2V0Q2VsbEJvcmRlcih5LCB4KSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3QgaGFzV2hpdGVQbGF5ZXIgPSAoeSA9PT0gc3RhdGUud2hpdGVZICYmIHggPT09IHN0YXRlLndoaXRlWClcclxuICAgICAgICBjb25zdCBoYXNCbGFja1BsYXllciA9ICh5ID09PSBzdGF0ZS5ibGFja1kgJiYgeCA9PT0gc3RhdGUuYmxhY2tYKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWmguaenOS4pOS4quinkuiJsumDveWcqOWQjOS4gOS9jee9ru+8jOagueaNruacgOWQjuenu+WKqOeahOinkuiJsuaYvuekuui+ueahhuiJslxyXG4gICAgICAgIGlmIChoYXNXaGl0ZVBsYXllciAmJiBoYXNCbGFja1BsYXllcikge1xyXG4gICAgICAgICAgY29uc3QgbGFzdFBsYXllciA9IHN0YXRlLmxhc3RQbGF5ZXJBdFtgJHt5fSwke3h9YF1cclxuICAgICAgICAgIGlmIChsYXN0UGxheWVyID09PSBHQU1FX0NPTlNUQU5UUy5QTEFZRVJfVFlQRVMuV0hJVEUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzM0OThEQlwiXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjRTc0QzNDXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGhhc1doaXRlUGxheWVyKSByZXR1cm4gXCIjMzQ5OERCXCJcclxuICAgICAgICBpZiAoaGFzQmxhY2tQbGF5ZXIpIHJldHVybiBcIiNFNzRDM0NcIlxyXG4gICAgICAgIHJldHVybiBcIiMzMzMzMzNcIlxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy41XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuNVwiOyIsIjxpbXBvcnQgbmFtZT1cImdhbWUtZ3JpZFwiIHNyYz1cIi4uLy4uLy4uL2NvbXBvbmVudHMvR2FtZUdyaWQvaW5kZXhcIj48L2ltcG9ydD5cclxuPGltcG9ydCBuYW1lPVwiY29udHJvbC1idXR0b25cIiBzcmM9XCIuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRyb2xCdXR0b24vaW5kZXhcIj48L2ltcG9ydD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8aW1hZ2UgY2xhc3M9XCJ0aXRsZVwiIHNyYz1cIi9jb21tb24vaW1hZ2UvdGl0bGUucG5nXCIgLz5cclxuXHJcbiAgICA8IS0tIOa4uOaIj+S/oeaBryAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cImluZm9UZXh0XCIgc3JjPVwiL2NvbW1vbi9pbWFnZS9pbmZvVGV4dC5wbmdcIiAvPlxyXG4gICAgICA8aW1hZ2UgY2xhc3M9XCJoaW50XCIgc3JjPVwiL2NvbW1vbi9pbWFnZS9oaW50LnBuZ1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOeUu+W4gyAtLT5cclxuICAgIDxnYW1lLWdyaWRcclxuICAgICAgcm93cz1cInt7IHJvd3MgfX1cIlxyXG4gICAgICBjb2x1bW5zPVwie3sgY29sdW1ucyB9fVwiXHJcbiAgICAgIGljb25zPVwie3sgY2VsbEljb25zIH19XCJcclxuICAgICAgY2VsbC1zdHlsZXM9XCJ7eyBjZWxsU3R5bGVzIH19XCJcclxuICAgID48L2dhbWUtZ3JpZD5cclxuXHJcbiAgICA8IS0tIOaOp+WItuWMuuWfnyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sQXJlYVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoQXJlYVwiPlxyXG4gICAgICAgIDxkaXYgb25jbGljaz1cIm9uU3dpdGNoXCI+XHJcbiAgICAgICAgICA8Y29udHJvbC1idXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwie3sgc3dpdGNoQnRuQ29sb3IgfX1cIlxyXG4gICAgICAgICAgICBpcy13aGl0ZT1cInt7IGN1cnJlbnRQbGF5ZXIgPT09IDYgfX1cIlxyXG4gICAgICAgICAgPjwvY29udHJvbC1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xQYW5lbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG5Sb3cxXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uY2xpY2s9XCJvblVwXCI+XHJcbiAgICAgICAgICAgIDxjb250cm9sLWJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJhcnJvd1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ7eyB1cEJ0bkNvbG9yIH19XCJcclxuICAgICAgICAgICAgICBhcnJvdy1pY29uPVwiL2NvbW1vbi9pbWFnZS9pY29ucy93aGl0ZS11cC1hcnJvdy5wbmdcIlxyXG4gICAgICAgICAgICA+PC9jb250cm9sLWJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG5Sb3cyXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uY2xpY2s9XCJvbkxlZnRcIj5cclxuICAgICAgICAgICAgPGNvbnRyb2wtYnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImFycm93XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInt7IGxlZnRCdG5Db2xvciB9fVwiXHJcbiAgICAgICAgICAgICAgYXJyb3ctaWNvbj1cIi9jb21tb24vaW1hZ2UvaWNvbnMvd2hpdGUtbGVmdC1hcnJvdy5wbmdcIlxyXG4gICAgICAgICAgICA+PC9jb250cm9sLWJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBvbmNsaWNrPVwib25Eb3duXCI+XHJcbiAgICAgICAgICAgIDxjb250cm9sLWJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJhcnJvd1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ7eyBkb3duQnRuQ29sb3IgfX1cIlxyXG4gICAgICAgICAgICAgIGFycm93LWljb249XCIvY29tbW9uL2ltYWdlL2ljb25zL3doaXRlLWRvd24tYXJyb3cucG5nXCJcclxuICAgICAgICAgICAgPjwvY29udHJvbC1idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25jbGljaz1cIm9uUmlnaHRcIj5cclxuICAgICAgICAgICAgPGNvbnRyb2wtYnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImFycm93XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInt7IHJpZ2h0QnRuQ29sb3IgfX1cIlxyXG4gICAgICAgICAgICAgIGFycm93LWljb249XCIvY29tbW9uL2ltYWdlL2ljb25zL3doaXRlLXJpZ2h0LWFycm93LnBuZ1wiXHJcbiAgICAgICAgICAgID48L2NvbnRyb2wtYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xBcmVhMlwiPlxyXG4gICAgICA8ZGl2IG9uY2xpY2s9XCJvblJlc2V0XCI+XHJcbiAgICAgICAgPGNvbnRyb2wtYnV0dG9uIHR5cGU9XCJyZXNldFwiIGNvbG9yPVwie3sgcmVzZXRCdG5Db2xvciB9fVwiPjwvY29udHJvbC1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi8uLi9nYW1lL2luZGV4XCJcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxyXG5jb25zdCBwcm9tcHQgPSByZXF1aXJlKFwiQHN5c3RlbS5wcm9tcHRcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcml2YXRlOiB7XHJcbiAgICBnYW1lOiBudWxsLFxyXG4gICAgcm93czogWzAsIDEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgY29sdW1uczogWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgY2VsbEljb25zOiB7fSxcclxuICAgIGNlbGxTdHlsZXM6IHt9LFxyXG4gICAgc3RlcENvdW50OiAwLFxyXG4gICAgY3VycmVudFBsYXllck5hbWU6IFwi55m95pa5XCIsXHJcbiAgICBjdXJyZW50UGxheWVyOiA3LFxyXG4gICAgc3dpdGNoQnRuQ29sb3I6IFwiIzM0OThEQlwiLFxyXG4gICAgdXBCdG5Db2xvcjogXCIjMkVDQzcxXCIsXHJcbiAgICBkb3duQnRuQ29sb3I6IFwiIzJFQ0M3MVwiLFxyXG4gICAgbGVmdEJ0bkNvbG9yOiBcIiMyRUNDNzFcIixcclxuICAgIHJpZ2h0QnRuQ29sb3I6IFwiIzJFQ0M3MVwiLFxyXG4gICAgcmVzZXRCdG5Db2xvcjogXCIjRTc0QzNDXCJcclxuICB9LFxyXG5cclxuICBvbkluaXQoKSB7XHJcbiAgICAvLyDliJ3lp4vljJbmuLjmiI9cclxuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKClcclxuXHJcbiAgICAvLyDliqDovb3lhbPljaHmlbDmja5cclxuICAgIGNvbnN0IGxldmVsRGF0YSA9IHRoaXMuZ2V0TGV2ZWwxRGF0YSgpXHJcbiAgICB0aGlzLmdhbWUuaW5pdExldmVsKGxldmVsRGF0YSlcclxuXHJcbiAgICAvLyDmm7TmlrBVSVxyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KClcclxuICB9LFxyXG5cclxuICBnZXRMZXZlbDFEYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2hpdGVQbGF5ZXI6IHt4OiA0LCB5OiAxfSxcclxuICAgICAgYmxhY2tQbGF5ZXI6IHt4OiAyLCB5OiAzfSxcclxuICAgICAgd2hpdGVCb3hlczogW3t4OiAyLCB5OiA2fV0sXHJcbiAgICAgIGJsYWNrQm94ZXM6IFt7eDogMywgeTogNH1dLFxyXG4gICAgICB3aGl0ZUJveFRhcmdldHM6IFt7eDogMSwgeTogNn1dLFxyXG4gICAgICBibGFja0JveFRhcmdldHM6IFt7eDogMywgeTogM31dLFxyXG4gICAgICB3aGl0ZVBsYXllclRhcmdldDogW3t4OiAxLCB5OiA1fV0sXHJcbiAgICAgIGJsYWNrUGxheWVyVGFyZ2V0OiBbe3g6IDQsIHk6IDJ9XSxcclxuICAgICAgY3VycmVudFBsYXllcjogNyxcclxuICAgICAgbWFwUnVsZXM6IHRoaXMuY3JlYXRlTWFwUnVsZXMoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZU1hcFJ1bGVzKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSA1LFxyXG4gICAgICBoZWlnaHQgPSA3XHJcbiAgICBjb25zdCBydWxlcyA9IHt9XHJcblxyXG4gICAgLy8gMS4g6buY6K6k55m95Zyw77yIMO+8iVxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICBydWxlc1t5ICsgXCIsXCIgKyB4XSA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIOWbm+WRqOm7keWimSgxKVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgIHJ1bGVzW1wiMCxcIiArIHhdID0gMVxyXG4gICAgICBydWxlc1toZWlnaHQgLSAxICsgXCIsXCIgKyB4XSA9IDFcclxuICAgIH1cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgcnVsZXNbeSArIFwiLDBcIl0gPSAxXHJcbiAgICAgIHJ1bGVzW3kgKyBcIixcIiArICh3aWR0aCAtIDEpXSA9IDFcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiDlhoXpg6jpu5HloplcclxuICAgIHJ1bGVzW1wiMSwyXCJdID0gMVxyXG4gICAgcnVsZXNbXCIyLDJcIl0gPSAxXHJcbiAgICBydWxlc1tcIjEsNFwiXSA9IDFcclxuICAgIHJ1bGVzW1wiMiw0XCJdID0gMVxyXG5cclxuICAgIHJldHVybiBydWxlc1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmNlbGxJY29ucyA9IHRoaXMuZ2FtZS5pY29uTWFuYWdlci51cGRhdGVDZWxsSWNvbnMoKVxyXG4gICAgdGhpcy5zdGVwQ291bnQgPSB0aGlzLmdhbWUuc3RhdGUuc3RlcENvdW50XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmdhbWUuc3RhdGUuY3VycmVudFBsYXllclxyXG4gICAgdGhpcy5jdXJyZW50UGxheWVyTmFtZSA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gNiA/IFwi55m95pa5XCIgOiBcIum7keaWuVwiXHJcblxyXG4gICAgLy8g6K6h566X5omA5pyJ5Y2V5YWD5qC85qC35byPXHJcbiAgICBjb25zdCBzdHlsZXMgPSB7fVxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCA3OyB5KyspIHtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICBzdHlsZXNbYCR7eX0sJHt4fWBdID0ge1xyXG4gICAgICAgICAgYmc6IHRoaXMuZ2V0Q2VsbEJnKHksIHgpLFxyXG4gICAgICAgICAgYm9yZGVyOiB0aGlzLmdldENlbGxCb3JkZXIoeSwgeClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2VsbFN0eWxlcyA9IHN0eWxlc1xyXG4gIH0sXHJcblxyXG4gIG9uVXAoKSB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdmUoMCwgLTEsIFwidXBcIilcclxuICB9LFxyXG5cclxuICBvbkRvd24oKSB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdmUoMCwgMSwgXCJkb3duXCIpXHJcbiAgfSxcclxuXHJcbiAgb25MZWZ0KCkge1xyXG4gICAgdGhpcy5oYW5kbGVNb3ZlKC0xLCAwLCBcImxlZnRcIilcclxuICB9LFxyXG5cclxuICBvblJpZ2h0KCkge1xyXG4gICAgdGhpcy5oYW5kbGVNb3ZlKDEsIDAsIFwicmlnaHRcIilcclxuICB9LFxyXG5cclxuICBoYW5kbGVNb3ZlKGR4LCBkeSwgYnV0dG9uVHlwZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lLm1vdmUoZHgsIGR5KVxyXG5cclxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcHJvbXB0LnNob3dUb2FzdCh7bWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UsIGR1cmF0aW9uOiA4MDB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyDmjInpkq7pl6rliqjmlYjmnpxcclxuICAgIHRoaXMuZmxhc2hCdXR0b24oYnV0dG9uVHlwZSlcclxuXHJcbiAgICAvLyDmm7TmlrBVSVxyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KClcclxuXHJcbiAgICAvLyB0ZXN0IOi3s+i9rFxyXG4gICAgLy8gaWYgKDEpe1xyXG4gICAgLy8g5qOA5p+l6YCa5YWzXHJcbiAgICBpZiAodGhpcy5nYW1lLmNoZWNrV2luKCkpIHtcclxuICAgICAgLy8g6Lez6L2s5Yiw6YCa5YWz6aG16Z2iXHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICB1cmk6IFwicGFnZXMvd2luXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBsZXZlbElkOiBcImxldmVsMDFcIixcclxuICAgICAgICAgIGxldmVsUGF0aDogXCJwYWdlcy9sZXZlbHMvbGV2ZWwwMVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uU3dpdGNoKCkge1xyXG4gICAgdGhpcy5nYW1lLnN3aXRjaFBsYXllcigpXHJcbiAgICB0aGlzLmZsYXNoQnV0dG9uKFwic3dpdGNoXCIpXHJcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKVxyXG4gIH0sXHJcblxyXG4gIG9uUmVzZXQoKSB7XHJcbiAgICBjb25zdCBsZXZlbERhdGEgPSB0aGlzLmdldExldmVsMURhdGEoKVxyXG4gICAgdGhpcy5nYW1lLmluaXRMZXZlbChsZXZlbERhdGEpXHJcbiAgICB0aGlzLmZsYXNoQnV0dG9uKFwicmVzZXRcIilcclxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpXHJcbiAgfSxcclxuXHJcbiAgZmxhc2hCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgY29sb3JNYXAgPSB7XHJcbiAgICAgIHVwOiBcIiMzNkQxRENcIixcclxuICAgICAgZG93bjogXCIjMzZEMURDXCIsXHJcbiAgICAgIGxlZnQ6IFwiIzM2RDFEQ1wiLFxyXG4gICAgICByaWdodDogXCIjMzZEMURDXCIsXHJcbiAgICAgIHN3aXRjaDogXCIjRkY0MTZDXCIsXHJcbiAgICAgIHJlc2V0OiBcIiNGRjZCNkJcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRDb2xvck1hcCA9IHtcclxuICAgICAgdXA6IFwiIzJFQ0M3MVwiLFxyXG4gICAgICBkb3duOiBcIiMyRUNDNzFcIixcclxuICAgICAgbGVmdDogXCIjMkVDQzcxXCIsXHJcbiAgICAgIHJpZ2h0OiBcIiMyRUNDNzFcIixcclxuICAgICAgc3dpdGNoOiBcIiMzNDk4REJcIixcclxuICAgICAgcmVzZXQ6IFwiI0U3NEMzQ1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29sb3JLZXkgPSB0eXBlICsgXCJCdG5Db2xvclwiXHJcbiAgICB0aGlzW2NvbG9yS2V5XSA9IGNvbG9yTWFwW3R5cGVdXHJcblxyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXNbY29sb3JLZXldID0gZGVmYXVsdENvbG9yTWFwW3R5cGVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGUgPT09IFwic3dpdGNoXCIgfHwgdHlwZSA9PT0gXCJyZXNldFwiID8gNTAwIDogMjAwXHJcbiAgICApXHJcbiAgfSxcclxuXHJcbiAgZ2V0Q2VsbEJnKHksIHgpIHtcclxuICAgIHJldHVybiB0aGlzLmdhbWUuZ2V0Q2VsbEJnKHksIHgpXHJcbiAgfSxcclxuXHJcbiAgZ2V0Q2VsbEJvcmRlcih5LCB4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lLmdldENlbGxCb3JkZXIoeSwgeClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgbWFyZ2luOiA2cHggMCAzcHggMDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbmZvVGV4dCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jb250cm9sQXJlYSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2hBcmVhIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udHJvbFBhbmVsIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5idG5Sb3cxLFxyXG4uYnRuUm93MiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuUm93MSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY29udHJvbEFyZWEyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsiIiwicHJvcHMiLCJjb21wdXRlZCIsImJ0bkNsYXNzIiwidHlwZSIsIl9jb25zdGFudHMiLCJyZXF1aXJlIiwiR2FtZVN0YXRlIiwiY29uc3RydWN0b3IiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsInJlc2V0IiwibWFwUnVsZXMiLCJ3aGl0ZVgiLCJ3aGl0ZVkiLCJibGFja1giLCJibGFja1kiLCJsYXN0UGxheWVyQXQiLCJ3aGl0ZUJveGVzIiwiYmxhY2tCb3hlcyIsIndoaXRlQm94VGFyZ2V0cyIsImJsYWNrQm94VGFyZ2V0cyIsIndoaXRlUGxheWVyVGFyZ2V0IiwiYmxhY2tQbGF5ZXJUYXJnZXQiLCJjdXJyZW50UGxheWVyIiwiR0FNRV9DT05TVEFOVFMiLCJQTEFZRVJfVFlQRVMiLCJCTEFDSyIsInN3aXRjaEJ0bkNvbG9yIiwiQlVUVE9OX0NPTE9SUyIsIkRFRkFVTFRfU1dJVENIIiwidXBCdG5Db2xvciIsIkRFRkFVTFRfQVJST1ciLCJkb3duQnRuQ29sb3IiLCJsZWZ0QnRuQ29sb3IiLCJyaWdodEJ0bkNvbG9yIiwicmVzZXRCdG5Db2xvciIsIkRFRkFVTFRfUkVTRVQiLCJnZXRNYXBWYWx1ZSIsInkiLCJ4IiwiQ0VMTF9UWVBFUyIsIldISVRFX0ZMT09SIiwic2V0TWFwVmFsdWUiLCJ2YWx1ZSIsImhhc1doaXRlQm94Iiwic29tZSIsImJveCIsImhhc0JsYWNrQm94IiwiaXNXaGl0ZUJveFRhcmdldCIsInRhcmdldCIsImlzQmxhY2tCb3hUYXJnZXQiLCJpc1doaXRlUGxheWVyVGFyZ2V0IiwiaXNCbGFja1BsYXllclRhcmdldCIsInN3aXRjaFBsYXllciIsIldISVRFIiwicmVjb3JkUGxheWVyTW92ZSIsInBsYXllclR5cGUiLCJleHBvcnRzIiwiSWNvbk1hbmFnZXIiLCJnYW1lU3RhdGUiLCJzdGF0ZSIsImdldEljb25QYXJ0cyIsImdldEljb25UeXBlIiwic2luZ2xlIiwic3JjIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsImdldEljb25JbWFnZVBhdGgiLCJmaXJzdFBhcnQiLCJzZWNvbmRQYXJ0Iiwic3JjMSIsInNyYzIiLCJoYXNXaGl0ZVBsYXllciIsImhhc0JsYWNrUGxheWVyIiwibGFzdFBsYXllciIsIndoaXRlQm94IiwiZmluZCIsImIiLCJibGFja0JveCIsInQiLCJ3aGl0ZVBvc2l0aW9uIiwiYmxhY2tQb3NpdGlvbiIsImljb25zIiwidXBkYXRlQ2VsbEljb25zIiwiTW92ZVZhbGlkYXRvciIsInZhbGlkYXRlTW92ZSIsImR4IiwiZHkiLCJpc1doaXRlIiwibngiLCJueSIsImNoZWNrQm91bmRhcnkiLCJ2YWxpZCIsIm1lc3NhZ2UiLCJjaGVja1RlcnJhaW4iLCJ3aGl0ZUJveEluZGV4IiwiZmluZEluZGV4IiwiYmxhY2tCb3hJbmRleCIsInZhbGlkYXRlV2hpdGVCb3hQdXNoIiwidmFsaWRhdGVCbGFja0JveFB1c2giLCJhY3Rpb24iLCJkYXRhIiwidGFyZ2V0VmFsdWUiLCJvdGhlclgiLCJvdGhlclkiLCJpc1RhcmdldE9wcG9zaXRlUGxheWVyIiwiQkxBQ0tfV0FMTCIsImJveEluZGV4IiwiYm94TmV4dFgiLCJib3hOZXh0WSIsImlzQmxvY2tlZCIsImJveE5leHRWYWx1ZSIsIm9uQmxhY2tUYXJnZXQiLCJwbGF5ZXJQb3MiLCJib3hQb3MiLCJib3hUeXBlIiwib25XaGl0ZVRhcmdldCIsImV4Y2x1ZGVJbmRleCIsImJsb2NrZWRCeVdoaXRlIiwiaSIsImJsb2NrZWRCeUJsYWNrIiwiYmxvY2tlZEJ5UGxheWVyIiwiV2luQ2hlY2tlciIsImNoZWNrV2luIiwid2hpdGVXaW4iLCJjaGVja1doaXRlQm94ZXMiLCJibGFja1dpbiIsImNoZWNrQmxhY2tCb3hlcyIsIndoaXRlUGxheWVyT25UYXJnZXQiLCJjaGVja1doaXRlUGxheWVyVGFyZ2V0IiwiYmxhY2tQbGF5ZXJPblRhcmdldCIsImNoZWNrQmxhY2tQbGF5ZXJUYXJnZXQiLCJldmVyeSIsInBvcyIsIlBSRVNTRURfU1dJVENIIiwiUFJFU1NFRF9BUlJPVyIsIlBSRVNTRURfUkVTRVQiLCJfR2FtZVN0YXRlIiwiX01vdmVWYWxpZGF0b3IiLCJfV2luQ2hlY2tlciIsIl9JY29uTWFuYWdlciIsIkdhbWUiLCJ2YWxpZGF0b3IiLCJ3aW5DaGVja2VyIiwiaWNvbk1hbmFnZXIiLCJpbml0TGV2ZWwiLCJsZXZlbERhdGEiLCJ3aGl0ZVBsYXllciIsImJsYWNrUGxheWVyIiwidW5kZWZpbmVkIiwibW92ZSIsInJlc3VsdCIsInN1Y2Nlc3MiLCJtb3ZlUGxheWVyIiwicHVzaEJveCIsImlzV2luIiwidXBkYXRlZEljb25zIiwicmVzZXRCdXR0b25Db2xvcnMiLCJnZXRDZWxsQmciLCJnZXRDZWxsQm9yZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJfaW5kZXgiLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInByb21wdCIsIl9kZWZhdWx0IiwicHJpdmF0ZSIsImdhbWUiLCJyb3dzIiwiY29sdW1ucyIsImNlbGxJY29ucyIsImNlbGxTdHlsZXMiLCJzdGVwQ291bnQiLCJjdXJyZW50UGxheWVyTmFtZSIsIm9uSW5pdCIsImdldExldmVsMURhdGEiLCJ1cGRhdGVEaXNwbGF5IiwiY3JlYXRlTWFwUnVsZXMiLCJ3aWR0aCIsImhlaWdodCIsInJ1bGVzIiwic3R5bGVzIiwiYmciLCJib3JkZXIiLCJvblVwIiwiaGFuZGxlTW92ZSIsIm9uRG93biIsIm9uTGVmdCIsIm9uUmlnaHQiLCJidXR0b25UeXBlIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJmbGFzaEJ1dHRvbiIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJwYXJhbXMiLCJsZXZlbElkIiwibGV2ZWxQYXRoIiwib25Td2l0Y2giLCJvblJlc2V0IiwiY29sb3JNYXAiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJzd2l0Y2giLCJkZWZhdWx0Q29sb3JNYXAiLCJjb2xvcktleSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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