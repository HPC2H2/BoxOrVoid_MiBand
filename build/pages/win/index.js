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
                            marginBottom: "12px",
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
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "level-info"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#cccccc",
                            marginBottom: "20px"
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
                            flexDirection: "row",
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
                                "button-glyph"
                            ]
                        ],
                        {
                            objectFit: "contain",
                            width: "16px",
                            height: "16px"
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
                    const LEVEL_PATH = '/pages/levels/level01';
                    var _default = exports.default = {
                        protected: {
                            levelId: 'level01',
                            levelPath: LEVEL_PATH
                        },
                        onInit () {
                            const path = '/' + String(this.levelPath || '').replace(/^\/+/, '');
                            this.levelPath = path === LEVEL_PATH ? path : LEVEL_PATH;
                            this._leaving = false;
                        },
                        onBackPress () {
                            this.restartLevel();
                            return true;
                        },
                        restartLevel () {
                            if (this._leaving) return;
                            this._leaving = true;
                            _system.default.replace({
                                uri: this.levelPath
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
                                value: "所有目标均已完成"
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "level-info"
                                ],
                                value: "当前版本共 1 关"
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
                                        "restart-btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.restartLevel(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "button-glyph"
                                        ],
                                        src: "/common/image/icons/white-chong.png"
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "button-glyph"
                                        ],
                                        src: "/common/image/icons/white-wan.png"
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
