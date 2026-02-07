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
                    "./src/components/GameModal/index.ux" (module) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "modal-overlay"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-content"
                                    ]
                                ],
                                {
                                    backgroundColor: "#2a2a2a",
                                    borderRadius: "8px",
                                    paddingTop: "16px",
                                    paddingRight: "16px",
                                    paddingBottom: "16px",
                                    paddingLeft: "16px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    minWidth: "140px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-icon"
                                    ]
                                ],
                                {
                                    width: "48px",
                                    height: "48px",
                                    marginBottom: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-title"
                                    ]
                                ],
                                {
                                    fontSize: "14px",
                                    color: "#ffffff",
                                    marginBottom: "4px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-message"
                                    ]
                                ],
                                {
                                    fontSize: "12px",
                                    color: "#cccccc",
                                    marginBottom: "12px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-buttons"
                                    ]
                                ],
                                {
                                    display: "flex",
                                    gap: "12px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "modal-button"
                                    ]
                                ],
                                {
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
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
                                    'show',
                                    'title',
                                    'message',
                                    'icon',
                                    'buttons',
                                    'closeOnOverlayClick',
                                    'onClose'
                                ],
                                handleOverlayClick () {
                                    if (this.closeOnOverlayClick && this.onClose) this.$emit(this.onClose);
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.show;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__cb__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            if: function() {
                                                return _vm_.show;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "modal-overlay"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.handleOverlayClick(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "modal-content"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.handleOverlayClick(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return _vm_.icon;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "modal-icon"
                                                                    ],
                                                                    src: function() {
                                                                        return _vm_.icon;
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return _vm_.title;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "modal-title"
                                                                    ],
                                                                    value: function() {
                                                                        return _vm_.title;
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return _vm_.message;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "modal-message"
                                                                    ],
                                                                    value: function() {
                                                                        return _vm_.message;
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "modal-buttons"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__cf__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                exp: function() {
                                                                    return _vm_.buttons;
                                                                },
                                                                key: "$idx",
                                                                value: "button"
                                                            }
                                                        }, function($idx, button) {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: function() {
                                                                            const $classValue$ = "modal-button " + button.className;
                                                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                                            return $classValue$;
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return button.onClick(evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return button.icon;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("image", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    src: function() {
                                                                                        return button.icon;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    }),
                                                                    aiot.__ci__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            shown: function() {
                                                                                return button.text;
                                                                            }
                                                                        }
                                                                    }, function() {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    value: function() {
                                                                                        return button.text;
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ];
                                                        })
                                                    ])
                                                ])
                                            ])
                                        ];
                                    })
                                ];
                            });
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
                                if (y === this.state.whiteY && x === this.state.whiteX) return "white-player";
                                if (y === this.state.blackY && x === this.state.blackX) return "black-player";
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
                                }
                                if (levelData.blackPlayer) {
                                    this.state.blackX = levelData.blackPlayer.x;
                                    this.state.blackY = levelData.blackPlayer.y;
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
                                if (isWhite) {
                                    this.state.whiteX = x;
                                    this.state.whiteY = y;
                                } else {
                                    this.state.blackX = x;
                                    this.state.blackY = y;
                                }
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
                                if (y === state.whiteY && x === state.whiteX) return "#FFFFFF";
                                if (y === state.blackY && x === state.blackX) return "#000000";
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
                                if (y === state.whiteY && x === state.whiteX) return "#3498DB";
                                if (y === state.blackY && x === state.blackX) return "#E74C3C";
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
                    $app_exports$['game-modal'] = __webpack_require__("./src/components/GameModal/index.ux");
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
                                justifyContent: "space-between",
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
                                width: "100%",
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
                                width: "100%",
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
                                showWinDialog: false,
                                stepCount: 0,
                                currentPlayerName: '白方',
                                currentPlayer: 7,
                                switchBtnColor: '#3498DB',
                                upBtnColor: '#2ECC71',
                                downBtnColor: '#2ECC71',
                                leftBtnColor: '#2ECC71',
                                rightBtnColor: '#2ECC71',
                                resetBtnColor: '#E74C3C',
                                winButtons: [
                                    {
                                        icon: "/common/image/icons/white-continue.png",
                                        className: "continue-btn",
                                        onClick: "continueGame"
                                    },
                                    {
                                        icon: "/common/image/icons/white-restart.png",
                                        className: "restart-btn",
                                        onClick: "restartGame"
                                    }
                                ]
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
                                this.currentPlayerName = 6 === this.currentPlayer ? '白方' : '黑方';
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
                                this.handleMove(0, -1, 'up');
                            },
                            onDown () {
                                this.handleMove(0, 1, 'down');
                            },
                            onLeft () {
                                this.handleMove(-1, 0, 'left');
                            },
                            onRight () {
                                this.handleMove(1, 0, 'right');
                            },
                            handleMove (dx, dy, buttonType) {
                                const result = this.game.move(dx, dy);
                                if (!result.success) return void prompt.showToast({
                                    message: result.message,
                                    duration: 800
                                });
                                this.flashButton(buttonType);
                                this.updateDisplay();
                                if (this.game.checkWin()) this.showWinDialog = true;
                            },
                            onSwitch () {
                                this.game.switchPlayer();
                                this.flashButton('switch');
                                this.updateDisplay();
                            },
                            onReset () {
                                const levelData = this.getLevel1Data();
                                this.game.initLevel(levelData);
                                this.flashButton('reset');
                                this.updateDisplay();
                            },
                            flashButton (type) {
                                const colorMap = {
                                    up: '#36D1DC',
                                    down: '#36D1DC',
                                    left: '#36D1DC',
                                    right: '#36D1DC',
                                    switch: '#FF416C',
                                    reset: '#FF6B6B'
                                };
                                const defaultColorMap = {
                                    up: '#2ECC71',
                                    down: '#2ECC71',
                                    left: '#2ECC71',
                                    right: '#2ECC71',
                                    switch: '#3498DB',
                                    reset: '#E74C3C'
                                };
                                const colorKey = type + 'BtnColor';
                                this[colorKey] = colorMap[type];
                                setTimeout(()=>{
                                    this[colorKey] = defaultColorMap[type];
                                }, 'switch' === type || 'reset' === type ? 500 : 200);
                            },
                            getCellBg (y, x) {
                                return this.game.getCellBg(y, x);
                            },
                            getCellBorder (y, x) {
                                return this.game.getCellBorder(y, x);
                            },
                            closeWinDialog () {
                                this.showWinDialog = false;
                            },
                            continueGame () {
                                this.showWinDialog = false;
                            },
                            restartGame () {
                                this.showWinDialog = false;
                                this.onReset();
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
                            ]),
                            aiot.__cc__("game-modal", {
                                __vm__: _vm_,
                                __opts__: {
                                    show: function() {
                                        return _vm_.showWinDialog;
                                    },
                                    title: "恭喜通关！",
                                    message: "你成功将所有箱子推到目标点，并让角色回到各自的位置！",
                                    icon: "/common/image/icons/white-tongguan.png",
                                    buttons: function() {
                                        return _vm_.winButtons;
                                    },
                                    closeOnOverlayClick: function() {
                                        return true;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeWinDialog(evt);
                                        }
                                    }
                                }
                            }, [])
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
