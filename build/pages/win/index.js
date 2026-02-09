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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHdpblxcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3gtb3Itdm9pZC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vYm94LW9yLXZvaWQvc3JjL3BhZ2VzL3dpbi9pbmRleC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjVcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy41XCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDx0ZXh0IGNsYXNzPVwiaWNvblwiPvCfjok8L3RleHQ+XHJcbiAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+5oGt5Zac6YCa5YWz77yBPC90ZXh0PlxyXG4gICAgPHRleHQgY2xhc3M9XCJtZXNzYWdlXCI+5oiQ5Yqf5bCG5omA5pyJ566x5a2Q5o6o5Yiw55uu5qCH54K577yBPC90ZXh0PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIG5leHQtYnRuXCIgb25jbGljaz1cIm5leHRMZXZlbFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7kuIvkuIDlhbM8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHJlc3RhcnQtYnRuXCIgb25jbGljaz1cInJlc3RhcnRMZXZlbFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7ph43njqk8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJyBcclxuLy8g5b2T5LiA5YWz5ri45oiP57uT5p2f5ZCO77yM6Lez6L2s5Yiw6L+Z5Liq6aG16Z2i44CC6L+Z5Liq6aG16Z2i5pyJ5LiJ5Liq5oyJ6ZKu77ya5LiL5LiA5YWz44CB6YeN546p5ZKM6L+U5Zue5Li76I+c5Y2V44CCXHJcbi8vIOeCueWHu+S4i+S4gOWFs+S8mui3s+i9rOWIsOS4i+S4gOWFs+eahOmhtemdou+8jOeCueWHu+mHjeeOqeS8mumHjeaWsOWKoOi9veW9k+WJjeWFs+WNoeOAglxyXG4vLyDov5Tlm57kuLvoj5zljZXmmoLml7bmsqHmnInvvIzlkI7nu63lj6/ku6Xmt7vliqDkuIDkuKrmjInpkq7lrp7njrDov5nkuKrlip/og73jgIJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcml2YXRlOiB7XHJcbiAgICBsZXZlbElkOiAnJyxcclxuICAgIGxldmVsUGF0aDogJycsXHJcbiAgfSxcclxuXHJcbiAgb25Jbml0KCkge1xyXG4gICAgLy8g6I635Y+W5b2T5YmN5YWz5Y2h5L+h5oGvXHJcbiAgICBjb25zdCB7IGxldmVsSWQsIGxldmVsUGF0aCB9ID0gdGhpcy4kcGFnZS5vcHRpb25zXHJcbiAgICB0aGlzLmxldmVsSWQgPSBsZXZlbElkIHx8ICdsZXZlbDAxJ1xyXG4gICAgdGhpcy5sZXZlbFBhdGggPSBsZXZlbFBhdGggfHwgJ3BhZ2VzL2xldmVscy9sZXZlbDAxL2luZGV4LnV4J1xyXG4gIH0sXHJcblxyXG4gIG9uQmFja1ByZXNzKCkge1xyXG4gICAgLy8g5oum5oiq6L+U5Zue6ZSuXHJcbiAgICB0aGlzLnJlc3RhcnRMZXZlbCgpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0sXHJcbiAgXHJcbiAgbmV4dExldmVsKCkge1xyXG4gICAgLy8g6Lez6L2s5Yiw5LiL5LiA5YWzXHJcbiAgICByb3V0ZXIucmVwbGFjZSh7XHJcbiAgICAgIHVyaTogYC8ke3RoaXMubGV2ZWxQYXRofWBcclxuICAgIH0pXHJcbiAgfSxcclxuICBcclxuICByZXN0YXJ0TGV2ZWwoKSB7XHJcbiAgICByb3V0ZXIucmVwbGFjZSh7XHJcbiAgICAgIHVyaTogYC8ke3RoaXMubGV2ZWxQYXRofWBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jb250YWluZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbGluZXM6IDE7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZXM6IDI7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm5leHQtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4ucmVzdGFydC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQxNmM7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwibGV2ZWxJZCIsImxldmVsUGF0aCIsIm9uSW5pdCIsIiRwYWdlIiwib3B0aW9ucyIsIm9uQmFja1ByZXNzIiwicmVzdGFydExldmVsIiwibmV4dExldmVsIiwicm91dGVyIiwicmVwbGFjZSIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNrQjNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFDO29CQUFEO29CQUduQyxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRWU7d0JBQ2JHLFNBQVM7NEJBQ1BDLFNBQVM7NEJBQ1RDLFdBQVc7d0JBQ2I7d0JBRUFDOzRCQUVFLE1BQU0sRUFBRUYsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsT0FBTzs0QkFDakQsSUFBSSxDQUFDSixPQUFPLEdBQUdBLFdBQVc7NEJBQzFCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxhQUFhO3dCQUNoQzt3QkFFQUk7NEJBRUUsSUFBSSxDQUFDQyxZQUFZOzRCQUNqQixPQUFPO3dCQUNUO3dCQUVBQzs0QkFFRUMsUUFBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7Z0NBQ2JDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDVCxTQUFTLEVBQUU7NEJBQzNCO3dCQUNGO3dCQUVBSzs0QkFDRUUsUUFBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7Z0NBQ2JDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDVCxTQUFTLEVBQUU7NEJBQzNCO3dCQUNGO29CQUdGIn0=