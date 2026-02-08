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
                var __webpack_modules__ = {};
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
                    __webpack_require__.rv = ()=>"1.7.5";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.5";
                })();
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
                            justifyContent: "center",
                            backgroundColor: "#1a1a1a",
                            height: "100%",
                            width: "100%",
                            paddingTop: "20px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px"
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
                            fontSize: "60px",
                            marginBottom: "20px",
                            lines: 1
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
                            fontSize: "18px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "message"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#cccccc",
                            marginBottom: "30px",
                            textAlign: "center",
                            lines: 2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "buttons"
                            ]
                        ],
                        {
                            flexDirection: "row"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button"
                            ]
                        ],
                        {
                            minWidth: "70px",
                            height: "40px",
                            borderRadius: "8px",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "0",
                            paddingRight: "16px",
                            paddingBottom: "0",
                            paddingLeft: "16px",
                            marginTop: "0",
                            marginRight: "8px",
                            marginBottom: "0",
                            marginLeft: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "button-text"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "next-btn"
                            ]
                        ],
                        {
                            backgroundColor: "#667eea"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "restart-btn"
                            ]
                        ],
                        {
                            backgroundColor: "#ff416c"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            levelId: '',
                            levelPath: ''
                        },
                        onInit () {
                            const { levelId, levelPath } = this.$page.options;
                            this.levelId = levelId || 'level01';
                            this.levelPath = levelPath || 'pages/levels/level01/index.ux';
                        },
                        onBackPress () {
                            this.restartLevel();
                            return true;
                        },
                        nextLevel () {
                            _system.default.replace({
                                uri: `/${this.levelPath}`
                            });
                        },
                        restartLevel () {
                            _system.default.replace({
                                uri: `/${this.levelPath}`
                            });
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
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "icon"
                                ],
                                value: "🎉"
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "恭喜通关！"
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "message"
                                ],
                                value: "成功将所有箱子推到目标点！"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "buttons"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "button",
                                        "next-btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.nextLevel(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "button-text"
                                        ],
                                        value: "下一关"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "button",
                                        "restart-btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.restartLevel(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "button-text"
                                        ],
                                        value: "重玩"
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
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
