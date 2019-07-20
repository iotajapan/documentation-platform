(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://docs.iotajapan.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentMenuItemsPropTypes = exports.ProjectsPropTypes = exports.ViewDataPropTypes = exports.FooterDataPropTypes = exports.HomeDataPropTypes = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeDataPropTypes = exports.HomeDataPropTypes = _propTypes2.default.shape({
    headerTopLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        href: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })).isRequired,
    popularTopics: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        query: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })),
    cards: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        href: _propTypes2.default.string.isRequired,
        image: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })).isRequired
});

var FooterDataPropTypes = exports.FooterDataPropTypes = _propTypes2.default.shape({
    footerDocsSectionTitle: _propTypes2.default.string.isRequired,
    footerSections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        heading: _propTypes2.default.string.isRequired,
        links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            link: _propTypes2.default.string.isRequired,
            name: _propTypes2.default.string.isRequired
        })).isRequired
    })).isRequired,
    footerStaticContent: _propTypes2.default.shape({
        address: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
        legal: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
        copyright: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
    })
});

var ViewDataPropTypes = exports.ViewDataPropTypes = _propTypes2.default.shape({
    siteName: _propTypes2.default.string.isRequired,
    enableFeedback: _propTypes2.default.bool,
    enableSignup: _propTypes2.default.bool,
    disableSearch: _propTypes2.default.bool
});

var ProjectsPropTypes = exports.ProjectsPropTypes = _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    folder: _propTypes2.default.string.isRequired,
    home: _propTypes2.default.shape({
        description: _propTypes2.default.string.isRequired,
        links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired,
            link: _propTypes2.default.string.isRequired,
            description: _propTypes2.default.string.isRequired
        })).isRequired
    }),
    versions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        version: _propTypes2.default.string.isRequired,
        pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired,
            link: _propTypes2.default.string.isRequired,
            toc: _propTypes2.default.arrayOf(_propTypes2.default.shape({
                level: _propTypes2.default.number.isRequired,
                name: _propTypes2.default.string.isRequired
            }))
        })).isRequired
    })).isRequired
}));

var ContentMenuItemsPropTypes = exports.ContentMenuItemsPropTypes = _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    folder: _propTypes2.default.string,
    link: _propTypes2.default.string.isRequired
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Text = __webpack_require__(12);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                {
                    id: this.props.id,
                    target: this.props.target,
                    href: this.props.href,
                    rel: this.props.target === '_blank' ? 'noopener noreferrer' : undefined,
                    className: (0, _classnames2.default)('link', this.props.className, { 'disabled': this.props.disabled })
                },
                this.props.children || _react2.default.createElement(
                    _Text2.default,
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return Link;
}(_react2.default.PureComponent);

Link.propTypes = {
    id: _propTypes2.default.string,
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    text: _propTypes2.default.string,
    className: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    disabled: _propTypes2.default.bool
};
exports.default = Link;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPreviousPage = exports.getNextPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.parseProjectUrl = parseProjectUrl;
exports.combineProjectUrl = combineProjectUrl;
exports.createPageTableOfContents = createPageTableOfContents;
exports.createProjectLinks = createProjectLinks;
exports.createProjectTopics = createProjectTopics;
exports.createSideMenuEntries = createSideMenuEntries;
exports.buildItemTree = buildItemTree;
exports.lookupProject = lookupProject;
exports.getVersionsUrl = getVersionsUrl;
exports.getLatestVersion = getLatestVersion;
exports.getProjectTitle = getProjectTitle;
exports.getDocumentTitle = getDocumentTitle;
exports.getProjectVersionPagesUrl = getProjectVersionPagesUrl;
exports.getProjectVersionPages = getProjectVersionPages;
exports.getPage = getPage;
exports.replaceVersion = replaceVersion;

var _paths = __webpack_require__(21);

function parseProjectUrl(projectFullURL) {
    ///docs/hub/2.0/something/something/something

    var urlParts = projectFullURL.split('/');
    var projectFolder = urlParts[2];
    var projectVersion = urlParts[3];
    var projectDocParts = urlParts.slice(4);
    var projectDoc = projectDocParts.join('/');

    return {
        projectFullURL: projectFullURL,
        projectFolder: projectFolder,
        projectVersion: projectVersion,
        projectDocParts: projectDocParts,
        projectDoc: projectDoc,
        projectDocTitle: projectDocParts[projectDocParts.length - 1]
    };
}

function combineProjectUrl(projectParts) {
    ///docs/hub/2.0/something/something/something
    return '/docs/' + projectParts.projectFolder + '/' + projectParts.projectVersion + '/' + projectParts.projectDoc;
}

function createPageTableOfContents(projectUrlParts, projects) {
    var project = lookupProject(projectUrlParts, projects);

    var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    var toc = [{ name: '序説', link: '#root' }];

    if (projectVersionPages) {
        var currentIndex = projectVersionPages.find(function (indexItem) {
            return indexItem.link === projectUrlParts.projectFullURL;
        });

        if (currentIndex && currentIndex.toc) {
            toc = toc.concat(currentIndex.toc.filter(function (item) {
                return item.level > 1;
            }).map(function (item) {
                return { name: item.name, link: '#' + (0, _paths.sanitizeHashId)(item.name, false, true), level: item.level };
            }));
        }
    }

    return toc;
}

function createProjectLinks(projects) {
    var menuEntries = [];

    for (var i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            var latestVersion = getLatestVersion(projects[i]);
            var projectVersionPages = getProjectVersionPages(projects[i], latestVersion);

            var me = {
                folder: projects[i].folder,
                name: projects[i].name,
                link: projectVersionPages[0].link
            };

            menuEntries.push(me);
        }
    }

    return menuEntries;
}

function createProjectTopics(projects) {
    var projectTopics = [];

    for (var i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            projectTopics.push(_extends({ name: projects[i].name }, projects[i].home));
        }
    }

    return projectTopics;
}

function createSideMenuEntries(projects, projectFullURL) {
    var menuEntries = [];

    for (var i = 0; i < projects.length; i++) {
        if (projects[i].home) {
            var latestVersion = getLatestVersion(projects[i]);
            if (latestVersion) {
                var projectVersionPages = getProjectVersionPages(projects[i], latestVersion);
                if (projectVersionPages) {
                    var isChildActive = getPage(projectVersionPages, projectFullURL) !== undefined;
                    menuEntries.push({
                        name: projects[i].name,
                        expanded: isChildActive,
                        selected: isChildActive,
                        items: buildItemTree(projectVersionPages, projectFullURL)
                    });
                }
            }
        }
    }
    return menuEntries;
}

function buildItemTree(projectVersionPages, projectFullURL) {
    var tree = [];
    var inSection = void 0;
    var inSectionSub = void 0;

    for (var i = 0; i < projectVersionPages.length; i++) {
        var nameParts = projectVersionPages[i].name.split('/');
        if (nameParts.length === 1) {
            tree.push({
                type: 'section-link',
                link: projectVersionPages[i].link,
                name: projectVersionPages[i].name,
                selected: projectVersionPages[i].link === projectFullURL
            });
            inSection = undefined;
            inSectionSub = undefined;
        } else {
            var currentSection = inSection ? inSection.name : '';
            if (nameParts[0] !== currentSection) {
                inSection = {
                    type: 'section-header',
                    name: nameParts[0],
                    items: [],
                    expanded: false
                };
                tree.push(inSection);
                inSectionSub = undefined;
            }
            if (projectVersionPages[i].link === projectFullURL) {
                inSection.selected = true;
            }

            if (nameParts.length === 2) {
                inSection.items.push({
                    type: 'section-header-item',
                    name: nameParts.slice(1).join('/'),
                    link: projectVersionPages[i].link,
                    selected: projectVersionPages[i].link === projectFullURL
                });
            } else {
                var currentSectionSub = inSectionSub ? inSectionSub.name : '';
                if (nameParts[1] !== currentSectionSub) {
                    inSectionSub = {
                        type: 'section-header-sub',
                        name: nameParts[1],
                        items: [],
                        expanded: false
                    };
                    inSection.items.push(inSectionSub);
                }
                if (projectVersionPages[i].link === projectFullURL) {
                    inSectionSub.selected = true;
                }
                inSectionSub.items.push({
                    name: nameParts.slice(2).join('/'),
                    link: projectVersionPages[i].link,
                    selected: projectVersionPages[i].link === projectFullURL
                });
            }
        }
    }

    return tree;
}

function lookupProject(projectUrlParts, projects) {
    return projects.find(function (p) {
        return p.folder === projectUrlParts.projectFolder;
    });
}

function getVersionsUrl(projectUrlParts, projects) {
    var project = lookupProject(projectUrlParts, projects);
    return project && project.versions ? project.versions.map(function (pv) {
        return pv.version;
    }) : [];
}

function getLatestVersion(project) {
    return project && project.versions && project.versions.length > 0 ? project.versions[project.versions.length - 1].version : '';
}

function getProjectTitle(projectUrlParts, projects) {
    var project = lookupProject(projectUrlParts, projects);

    return project ? project.name : projectUrlParts.projectFolder;
}

function getDocumentTitle(projectUrlParts, projects) {
    var project = lookupProject(projectUrlParts, projects);

    var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    var indexItem = getPage(projectVersionPages, projectUrlParts.projectFullURL);
    var docTitle = void 0;
    if (indexItem) {
        if (indexItem.toc) {
            var h1 = indexItem.toc.find(function (docHeader) {
                return docHeader.level === 1;
            });
            if (h1) {
                docTitle = h1.name;
            }
        }
    }
    if (!docTitle) {
        docTitle = projectUrlParts.projectDocTitle;
    }
    return docTitle;
}

function getProjectVersionPagesUrl(projectPartsUrlPart, projectVersion, projects) {
    return getProjectVersionPages(lookupProject(projectPartsUrlPart, projects), projectVersion);
}

function getProjectVersionPages(project, projectVersion) {
    if (project && project.versions) {
        var version = project.versions.find(function (pv) {
            return pv.version === projectVersion;
        });

        if (version) {
            return version.pages;
        }
    }
}

function getPage(versionPages, itemUrl) {
    return versionPages ? versionPages.find(function (indexItem) {
        return indexItem.link === itemUrl;
    }) : undefined;
}

function replaceVersion(projectUrlParts, newVersion, projects) {
    var project = lookupProject(projectUrlParts, projects);

    var projectVersionPages = getProjectVersionPages(project, newVersion);
    if (projectVersionPages) {
        var newUrl = combineProjectUrl(projectUrlParts);

        // If there is not an equivalent document in the new version of the documentation
        // the just return the first page for the new version
        var foundIndex = projectVersionPages.findIndex(function (indexItem) {
            return indexItem.link === newUrl;
        });
        if (foundIndex >= 0) {
            return newUrl;
        } else {
            return projectVersionPages[0].link;
        }
    }
}

var getNextPage = exports.getNextPage = function getNextPage(projectUrlParts, projects) {
    var nextPage = void 0;
    var project = lookupProject(projectUrlParts, projects);

    var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        var currentIndex = projectVersionPages.findIndex(function (indexItem) {
            return indexItem.link === projectUrlParts.projectFullURL;
        });
        if (currentIndex >= 0 && currentIndex < projectVersionPages.length) {
            nextPage = projectVersionPages[currentIndex + 1];
        }
    }

    // We exhausted the pages in the current project, so we need to find the next project
    if (!nextPage) {
        var projectIndex = projects.findIndex(function (p) {
            return p.folder === projectUrlParts.projectFolder;
        });
        projectIndex++;
        if (projectIndex === projects.length) {
            projectIndex = 0;
        }

        // Skip any that don't have home page content
        while (!projects[projectIndex].home) {
            projectIndex++;
            if (projectIndex === projects.length) {
                projectIndex = 0;
            }
        }

        var latestVersion = getLatestVersion(projects[projectIndex]);
        var _projectVersionPages = getProjectVersionPages(projects[projectIndex], latestVersion);

        nextPage = _projectVersionPages[0];
    }

    return nextPage;
};

var getPreviousPage = exports.getPreviousPage = function getPreviousPage(projectUrlParts, projects) {
    var prevPage = void 0;
    var project = lookupProject(projectUrlParts, projects);

    var projectVersionPages = getProjectVersionPages(project, projectUrlParts.projectVersion);
    if (projectVersionPages) {
        var currentIndex = projectVersionPages.findIndex(function (indexItem) {
            return indexItem.link === projectUrlParts.projectFullURL;
        });
        if (currentIndex > 0) {
            prevPage = projectVersionPages[currentIndex - 1];
        }
    }

    // We exhausted the pages in the current project, so we need to find the previous project
    if (!prevPage) {
        var projectIndex = projects.findIndex(function (p) {
            return p.folder === projectUrlParts.projectFolder;
        });
        projectIndex--;
        if (projectIndex < 0) {
            projectIndex = projects.length - 1;
        }

        // Skip any that don't have home page content
        while (!projects[projectIndex].home) {
            projectIndex--;
            if (projectIndex < 0) {
                projectIndex = projects.length - 1;
            }
        }

        var latestVersion = getLatestVersion(projects[projectIndex]);
        var _projectVersionPages2 = getProjectVersionPages(projects[projectIndex], latestVersion);

        prevPage = _projectVersionPages2[_projectVersionPages2.length - 1];
    }

    return prevPage;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.feed = exports.submitEmail = exports.submitMissing = exports.submitFeedback = undefined;

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var sendRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(apiEndpoint, endpoint, method) {
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _axios2.default)({
                            method: method,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            url: apiEndpoint + '/' + endpoint,
                            data: data
                        });

                    case 2:
                        response = _context.sent;
                        return _context.abrupt('return', response ? response.data : null);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function sendRequest(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var submitFeedback = exports.submitFeedback = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(apiEndpoint, document, data) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return sendRequest(apiEndpoint, 'feedback', 'POST', { document: document, wasItUseful: data.wasItUseful, comments: data.comments });

                    case 3:
                        return _context2.abrupt('return', _context2.sent);

                    case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2['catch'](0);

                        // eslint-disable-next-line no-console
                        console.error(_context2.t0);

                        return _context2.abrupt('return', {
                            success: false,
                            message: 'Failed to submit feedback.'
                        });

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 6]]);
    }));

    return function submitFeedback(_x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
    };
}();

var submitMissing = exports.submitMissing = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(apiEndpoint, document, fromDocument) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return sendRequest(apiEndpoint, 'missing', 'POST', { document: document, fromDocument: fromDocument });

                    case 3:
                        return _context3.abrupt('return', _context3.sent);

                    case 6:
                        _context3.prev = 6;
                        _context3.t0 = _context3['catch'](0);

                        // eslint-disable-next-line no-console
                        console.error(_context3.t0);

                        return _context3.abrupt('return', {
                            success: false,
                            message: 'Failed to submit missing.'
                        });

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 6]]);
    }));

    return function submitMissing(_x8, _x9, _x10) {
        return _ref3.apply(this, arguments);
    };
}();

var submitEmail = exports.submitEmail = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(apiEndpoint, email) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return sendRequest(apiEndpoint, 'email', 'POST', { email: email });

                    case 3:
                        return _context4.abrupt('return', _context4.sent);

                    case 6:
                        _context4.prev = 6;
                        _context4.t0 = _context4['catch'](0);

                        // eslint-disable-next-line no-console
                        console.error(_context4.t0);

                        return _context4.abrupt('return', {
                            success: false,
                            message: 'Failed to submit email.'
                        });

                    case 10:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 6]]);
    }));

    return function submitEmail(_x11, _x12) {
        return _ref4.apply(this, arguments);
    };
}();

var feed = exports.feed = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(apiEndpoint, context, page, pageSize) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return sendRequest(apiEndpoint, 'feed/' + context + '?page=' + page + '&pageSize=' + pageSize, 'GET');

                    case 3:
                        return _context5.abrupt('return', _context5.sent);

                    case 6:
                        _context5.prev = 6;
                        _context5.t0 = _context5['catch'](0);

                        // eslint-disable-next-line no-console
                        console.error(_context5.t0);

                        return _context5.abrupt('return', {
                            success: false,
                            message: 'Failed to retreive feed.'
                        });

                    case 10:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 6]]);
    }));

    return function feed(_x13, _x14, _x15, _x16) {
        return _ref5.apply(this, arguments);
    };
}();

var _axios = __webpack_require__(61);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initCorpusIndex = exports.extractHighlights = exports.constructHighlights = exports.extractSearchQuery = exports.constructSearchQuery = exports.performSearch = undefined;

var _qs = __webpack_require__(34);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_PARAM_NAME = 'q';
var QUERY_PARAM_HIGHLIGHTS = 'highlights';

var performSearch = exports.performSearch = function performSearch(history, query) {
    history.push('/search?' + constructSearchQuery(query));
};

var constructSearchQuery = exports.constructSearchQuery = function constructSearchQuery(query) {
    return QUERY_PARAM_NAME + '=' + query.trim();
};

var extractSearchQuery = exports.extractSearchQuery = function extractSearchQuery(location) {
    var params = _qs2.default.parse(location.search, { ignoreQueryPrefix: true });
    return params && params[QUERY_PARAM_NAME] ? params[QUERY_PARAM_NAME] : '';
};

var constructHighlights = exports.constructHighlights = function constructHighlights(highlights) {
    return QUERY_PARAM_HIGHLIGHTS + '=' + highlights.join(';');
};

var extractHighlights = exports.extractHighlights = function extractHighlights(location) {
    var params = _qs2.default.parse(location.search, { ignoreQueryPrefix: true });
    return params && params[QUERY_PARAM_HIGHLIGHTS] ? params[QUERY_PARAM_HIGHLIGHTS].split(';') : [];
};

var initCorpusIndex = exports.initCorpusIndex = function initCorpusIndex() {
    var corpus = __webpack_require__(95);
    var index = __webpack_require__(96);

    var documents = corpus.reduce(function (memo, doc) {
        memo[doc.id] = doc;
        return memo;
    }, {});

    return {
        documents: documents,
        index: index
    };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_React$PureComponent) {
    _inherits(Heading, _React$PureComponent);

    function Heading() {
        _classCallCheck(this, Heading);

        return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
    }

    _createClass(Heading, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('h' + this.props.level, {
                className: (0, _classnames2.default)('heading', this.props.className),
                id: this.props.id
            }, this.props.children || this.props.text);
        }
    }]);

    return Heading;
}(_react2.default.PureComponent);

Heading.propTypes = {
    level: _propTypes2.default.number,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    text: _propTypes2.default.string,
    className: _propTypes2.default.string,
    id: _propTypes2.default.string
};
Heading.defaultProps = {
    level: 1
};
exports.default = Heading;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_React$PureComponent) {
    _inherits(Text, _React$PureComponent);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {
            if (this.props.html) {
                return _react2.default.createElement('span', { className: (0, _classnames2.default)('text', this.props.className), dangerouslySetInnerHTML: { __html: this.props.children } });
            }

            return _react2.default.createElement(
                'span',
                { className: (0, _classnames2.default)('text', this.props.className) },
                this.props.children
            );
        }
    }]);

    return Text;
}(_react2.default.PureComponent);

Text.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    className: _propTypes2.default.string,
    html: _propTypes2.default.bool
};
exports.default = Text;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _ClickOutside = __webpack_require__(37);

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideMenu = function (_React$Component) {
    _inherits(SideMenu, _React$Component);

    function SideMenu(props) {
        _classCallCheck(this, SideMenu);

        var _this = _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call(this, props));

        _this.state = {
            menuData: [],
            expanded: undefined
        };

        _this.handleHeadingClick = _this.handleHeadingClick.bind(_this);
        _this.handleCloseClick = _this.handleCloseClick.bind(_this);
        _this.keydown = _this.keydown.bind(_this);
        return _this;
    }

    _createClass(SideMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.keydown, false);

            this.setState({
                menuData: (0, _projects.createSideMenuEntries)(this.props.projects, this.props.highlightedItem)
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.highlightedItem !== prevProps.highlightedItem) {
                this.setState({
                    menuData: (0, _projects.createSideMenuEntries)(this.props.projects, this.props.highlightedItem)
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            document.body.classList.toggle('no-scroll', nextProps.isMenuOpen);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('keydown', this.keydown, false);
        }
    }, {
        key: 'handleHeadingClick',
        value: function handleHeadingClick(index) {
            this.setState(function (state) {
                return {
                    menuData: state.menuData.map(function (item, ind) {
                        return ind == index ? _extends({}, item, { expanded: !item.expanded }) : _extends({}, item, { expanded: false });
                    })
                };
            });
        }
    }, {
        key: 'handleCloseClick',
        value: function handleCloseClick() {
            if (this.props.isMenuOpen && this.props.onCloseClick) {
                document.body.classList.toggle('no-scroll', false);
                this.props.onCloseClick();
            }
        }
    }, {
        key: 'keydown',
        value: function keydown(event) {
            if (event.keyCode === 27 && this.props.isMenuOpen) {
                this.props.onCloseClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _ClickOutside2.default,
                { onClickOutside: this.handleCloseClick },
                _react2.default.createElement(
                    'section',
                    { className: (0, _classnames2.default)('side-menu', { 'side-menu__shown': this.props.isMenuOpen }, { 'side-menu__hidden': !this.props.isMenuOpen }) },
                    _react2.default.createElement(
                        'h4',
                        { className: 'side-menu__caption' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3'
                        ),
                        _react2.default.createElement('button', { className: 'side-menu__close', onClick: this.handleCloseClick })
                    ),
                    this.state.menuData.map(function (menuItem, index) {
                        return _react2.default.createElement(
                            'section',
                            { key: index,
                                className: (0, _classnames2.default)('side-menu__group', { 'side-menu__group--expanded': menuItem.expanded }, { 'side-menu__group--selected': menuItem.selected }) },
                            _react2.default.createElement(
                                'h5',
                                { className: 'side-menu__heading', onClick: function onClick() {
                                        return _this2.handleHeadingClick(index);
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    menuItem.name
                                )
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'side-menu__list' },
                                menuItem.items.map(function (menuListItem, miIndex) {
                                    return _react2.default.createElement(
                                        _react2.default.Fragment,
                                        { key: miIndex },
                                        menuListItem.type === 'section-link' && _react2.default.createElement(
                                            'li',
                                            { className: (0, _classnames2.default)('side-menu-item', { 'side-menu-item--active': menuListItem.selected }) },
                                            _react2.default.createElement(
                                                _Link2.default,
                                                { href: menuListItem.link,
                                                    target: menuListItem.link.startsWith('http') ? '_blank' : undefined,
                                                    className: (0, _classnames2.default)({ 'side-menu-item--active': menuListItem.selected }) },
                                                menuListItem.name
                                            )
                                        ),
                                        menuListItem.type === 'section-header' && _react2.default.createElement(
                                            'div',
                                            { className: 'side-menu__sub-list' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'side-menu-item__header' },
                                                menuListItem.name
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                menuListItem.items.map(function (subItem, idx) {
                                                    return _react2.default.createElement(
                                                        _react2.default.Fragment,
                                                        { key: idx },
                                                        _react2.default.createElement(
                                                            'li',
                                                            { className: (0, _classnames2.default)('side-menu-item', { 'side-menu-item--active': subItem.selected }) },
                                                            subItem.type === 'section-header-item' && _react2.default.createElement(
                                                                _Link2.default,
                                                                {
                                                                    href: subItem.link,
                                                                    target: subItem.link.startsWith('http') ? '_blank' : undefined,
                                                                    className: (0, _classnames2.default)({ 'side-menu-item--active': subItem.selected }) },
                                                                subItem.name
                                                            ),
                                                            subItem.type === 'section-header-sub' && _react2.default.createElement(
                                                                _react2.default.Fragment,
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { onClick: function onClick() {
                                                                            return _this2.setState({ expanded: subItem });
                                                                        } },
                                                                    subItem.name,
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'side-menu__item-superscript' },
                                                                        subItem.items.length > 1 ? ' [' + subItem.items.length + ']' : ''
                                                                    )
                                                                ),
                                                                (subItem.selected || subItem === _this2.state.expanded) && _react2.default.createElement(
                                                                    'ul',
                                                                    { className: 'side-menu-item-sub' },
                                                                    subItem.items.map(function (child, idx3) {
                                                                        return _react2.default.createElement(
                                                                            'li',
                                                                            { key: idx3,
                                                                                className: (0, _classnames2.default)('side-menu-item-sub-child', { 'side-menu-item-sub-child--active': child.selected })
                                                                            },
                                                                            _react2.default.createElement(
                                                                                _Link2.default,
                                                                                { href: child.link, target: child.link.startsWith('http') ? '_blank' : undefined },
                                                                                child.name
                                                                            )
                                                                        );
                                                                    })
                                                                )
                                                            ),
                                                            '                                                            '
                                                        )
                                                    );
                                                })
                                            )
                                        )
                                    );
                                })
                            )
                        );
                    })
                )
            );
        }
    }]);

    return SideMenu;
}(_react2.default.Component);

SideMenu.propTypes = {
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    onCloseClick: _propTypes2.default.func,
    isMenuOpen: _propTypes2.default.bool,
    highlightedItem: _propTypes2.default.string
};
exports.default = SideMenu;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localStorageSet = localStorageSet;
exports.localStorageGet = localStorageGet;
/**
     * Store something in the local storage.
     * @param name The name of the item to store.
     * @param data The name of the item to store.
     * @returns Nothing.
     */
function localStorageSet(name, data) {
    try {
        if (window.localStorage) {
            window.localStorage.setItem(name, JSON.stringify(data));
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

/**
 * Retrieve something from the local storage.
 * @param name The name of the item to store.
 * @returns The data or undefined if it does not exist.
 */
function localStorageGet(name) {
    try {
        if (window.localStorage) {
            var data = window.localStorage.getItem(name);
            if (data) {
                return JSON.parse(data);
            }
        }
    } catch (err) {
        return undefined;
    }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _Footer = __webpack_require__(97);

var _Footer2 = _interopRequireDefault(_Footer);

var _propTypes3 = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$PureComponent) {
    _inherits(Container, _React$PureComponent);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.children,
                _react2.default.createElement(_Footer2.default, { projects: this.props.projects, history: this.props.history, location: this.props.location, footerData: this.props.footerData })
            );
        }
    }]);

    return Container;
}(_react2.default.PureComponent);

Container.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location,
    footerData: _propTypes3.FooterDataPropTypes.isRequired
};
exports.default = Container;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyleProptype = __webpack_require__(26);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomSticky = function (_React$PureComponent) {
    _inherits(BottomSticky, _React$PureComponent);

    function BottomSticky() {
        _classCallCheck(this, BottomSticky);

        return _possibleConstructorReturn(this, (BottomSticky.__proto__ || Object.getPrototypeOf(BottomSticky)).apply(this, arguments));
    }

    _createClass(BottomSticky, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.handleBottomStop = this.handleBottomStop.bind(this);

            document.addEventListener('scroll', this.handleBottomStop);
            window.addEventListener('resize', this.handleBottomStop);

            // We must set the initial position on next redraw cycle
            // otherwise the component gets the initial position
            // wrong based on the parent bottom until first scroll
            setTimeout(function () {
                return _this2.handleBottomStop();
            }, 0);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.handleBottomStop);
            window.removeEventListener('resize', this.handleBottomStop);
        }
    }, {
        key: 'handleBottomStop',
        value: function handleBottomStop() {
            var thisDom = _reactDom2.default.findDOMNode(this);
            var parentDom = thisDom.parentNode;

            var parentRect = parentDom.getBoundingClientRect();

            if (window.innerHeight - parentRect.bottom > 0) {
                thisDom.style.bottom = Math.abs(window.innerHeight - parentRect.bottom) + this.props.bottomOffset + 'px';
            } else {
                thisDom.style.bottom = this.props.bottomOffset + 'px';
            }

            thisDom.style.opacity = 1;
        }
    }, {
        key: 'render',
        value: function render() {
            var style = _extends({}, this.props.styles, {
                position: 'fixed',
                opacity: 0,
                bottom: this.props.bottomOffset + 'px'
            });

            style[this.props.horizontalAlign] = this.props.horizontalOffset;

            if (this.props.zIndex) {
                style.zIndex = this.props.zIndex;
            }

            return _react2.default.createElement(
                'div',
                { style: style },
                this.props.children
            );
        }
    }]);

    return BottomSticky;
}(_react2.default.PureComponent);

BottomSticky.defaultProps = {
    horizontalOffset: 20,
    horizontalAlign: 'left',
    bottomOffset: 20
};
BottomSticky.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    horizontalOffset: _propTypes2.default.number.isRequired,
    horizontalAlign: _propTypes2.default.oneOf(['left', 'right']),
    bottomOffset: _propTypes2.default.number.isRequired,
    styles: _reactStyleProptype2.default,
    zIndex: _propTypes2.default.number
};
exports.default = BottomSticky;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeedbackButton = __webpack_require__(62);

var _FeedbackButton2 = _interopRequireDefault(_FeedbackButton);

var _FeedbackForm = __webpack_require__(63);

var _FeedbackForm2 = _interopRequireDefault(_FeedbackForm);

var _FeedbackOverlay = __webpack_require__(64);

var _FeedbackOverlay2 = _interopRequireDefault(_FeedbackOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_React$Component) {
    _inherits(Feedback, _React$Component);

    function Feedback(props) {
        _classCallCheck(this, Feedback);

        var _this = _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call(this, props));

        _this.state = {
            isExpanded: false,
            wasItUseful: undefined,
            showButtonContent: true,
            showForm: false
        };

        _this.handleOnExpand = _this.handleOnExpand.bind(_this);
        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
        return _this;
    }

    _createClass(Feedback, [{
        key: 'handleOnExpand',
        value: function handleOnExpand(expand) {
            var _this2 = this;

            this.setState({ isExpanded: expand }, function () {
                if (expand) {
                    // Hide the button content immediately
                    _this2.setState({ showButtonContent: false });
                    setTimeout(function () {
                        _this2.setState({ showForm: true });
                        // Wait for animation completion before hiding scroll
                        document.body.classList.toggle('no-scroll', true);
                    }, 200);
                } else {
                    // Hide form straight away
                    _this2.setState({ showForm: false }, function () {
                        // Wait for collapse animation to complete before showing button content
                        setTimeout(function () {
                            _this2.setState({ showButtonContent: true });
                            // Wait for animation completion before showing scroll
                            document.body.classList.toggle('no-scroll', false);
                        }, 500);
                    });
                }
            });
        }
    }, {
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            this.setState({ wasItUseful: e.wasItUseful });
            var onSubmit = this.props.onSubmit;

            if (onSubmit) {
                onSubmit(e);
            }
            this.handleOnExpand(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_FeedbackButton2.default, {
                    onClick: function onClick() {
                        return _this3.handleOnExpand(true);
                    },
                    isExpanded: this.state.isExpanded,
                    showButtonContent: this.state.showButtonContent,
                    wasItUseful: this.state.wasItUseful }),
                _react2.default.createElement(
                    _FeedbackOverlay2.default,
                    { isExpanded: this.state.showForm },
                    this.state.showForm && _react2.default.createElement(_FeedbackForm2.default, { onClose: function onClose() {
                            return _this3.handleOnExpand(false);
                        }, onSubmit: this.handleOnSubmit })
                )
            );
        }
    }]);

    return Feedback;
}(_react2.default.Component);

Feedback.propTypes = {
    onSubmit: _propTypes2.default.func
};
exports.default = Feedback;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sanitizeHashId = sanitizeHashId;
function sanitizeHashId(id, skipLowerCase, isForAnchor) {
    // make lower case
    // de-escape spaces
    // replace spaces with hyphens
    if (!id) {
        return id;
    }
    if (!skipLowerCase) {
        id = id.toLowerCase();
    }
    if (isForAnchor) {
        id = id.replace(/\./g, '');
    }
    return id.replace(/\\ /g, ' ').replace(/\?/g, '').replace(/'/g, '').replace(/ /g, '-');
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputSearch = function (_React$Component) {
    _inherits(InputSearch, _React$Component);

    function InputSearch(props) {
        _classCallCheck(this, InputSearch);

        var _this = _possibleConstructorReturn(this, (InputSearch.__proto__ || Object.getPrototypeOf(InputSearch)).call(this, props));

        _this.state = { query: _this.props.query === undefined ? '' : _this.props.query };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.handleKeyChange = _this.handleKeyChange.bind(_this);
        return _this;
    }

    _createClass(InputSearch, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.query != prevProps.query) {
                this.setState({
                    query: this.props.query === undefined ? '' : this.props.query
                });
            }
        }
    }, {
        key: 'handleKeyChange',
        value: function handleKeyChange(e) {
            this.props.onKeyUp(e);
            if (e.key === 'Enter') {
                if (this.props.onSearch) {
                    this.props.onSearch(this.state.query);
                }
            }
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(_ref) {
            var value = _ref.target.value;

            this.setState({ query: value });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState({ query: '' });
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.searchInput.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var query = this.state.query;

            return _react2.default.createElement('input', {
                className: this.props.className,
                placeholder: this.props.placeholder,
                type: 'search',
                autoComplete: 'off',
                value: query,
                name: 'query',
                onChange: this.handleInputChange,
                onKeyUp: this.handleKeyChange,
                ref: function ref(input) {
                    _this2.searchInput = input;
                }
            });
        }
    }]);

    return InputSearch;
}(_react2.default.Component);

InputSearch.propTypes = {
    query: _propTypes2.default.string,
    onSearch: _propTypes2.default.func,
    onKeyUp: _propTypes2.default.func,
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string
};
exports.default = InputSearch;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reactStatic = __webpack_require__(5);

var _Logo = __webpack_require__(38);

var _Logo2 = _interopRequireDefault(_Logo);

var _search = __webpack_require__(10);

var _InputSearch = __webpack_require__(22);

var _InputSearch2 = _interopRequireDefault(_InputSearch);

var _propTypes3 = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyHeader = function (_React$Component) {
    _inherits(StickyHeader, _React$Component);

    function StickyHeader(props) {
        _classCallCheck(this, StickyHeader);

        var _this = _possibleConstructorReturn(this, (StickyHeader.__proto__ || Object.getPrototypeOf(StickyHeader)).call(this, props));

        _this.state = {
            inputExpanded: false,
            searchResults: []
        };

        _this.inputExpandHandler = _this.inputExpandHandler.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.onSearch = _this.onSearch.bind(_this);
        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        _this.handleCloseClick = _this.handleCloseClick.bind(_this);
        return _this;
    }

    _createClass(StickyHeader, [{
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            this.setState({ inputExpanded: false });
            if (this.props.onBurgerClick) {
                this.props.onBurgerClick();
            }
        }
    }, {
        key: 'handleCloseClick',
        value: function handleCloseClick() {
            this.setState({ inputExpanded: false });
        }
    }, {
        key: 'onSearch',
        value: function onSearch(query) {
            (0, _search.performSearch)(this.props.history, query);
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            if (e.key === 'Escape') {
                this.setState({ inputExpanded: false });
            }
        }
    }, {
        key: 'inputExpandHandler',
        value: function inputExpandHandler() {
            if (!this.state.inputExpanded) {
                this.setState({ inputExpanded: true });
                this.searchInput.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'header',
                { className: (0, _classnames2.default)('sticky-header', { 'sticky-header--expanded': this.state.inputExpanded }) },
                _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/', exact: true },
                    _react2.default.createElement('img', { className: 'sticky-header__brand', src: _Logo2.default })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sticky-header__control' },
                    !this.props.viewData.disableSearch && _react2.default.createElement(
                        'div',
                        {
                            onClick: this.inputExpandHandler,
                            className: (0, _classnames2.default)('input-sticky-wrapper', {
                                'input-sticky-wrapper--expanded': this.state.inputExpanded
                            })
                        },
                        _react2.default.createElement(_InputSearch2.default, {
                            ref: function ref(input) {
                                _this2.searchInput = input;
                            },
                            className: 'input-search-sticky',
                            placeholder: 'Search for topics',
                            onKeyUp: this.handleKeyUp,
                            onSearch: this.onSearch
                        }),
                        _react2.default.createElement('button', {
                            className: 'sticky-header__icon-close',
                            onClick: this.handleCloseClick
                        })
                    ),
                    _react2.default.createElement('button', {
                        className: 'sticky-header__icon-burger',
                        onClick: this.handleBurgerClick
                    })
                )
            );
        }
    }]);

    return StickyHeader;
}(_react2.default.Component);

StickyHeader.propTypes = {
    onBurgerClick: _propTypes2.default.func,
    history: _reactRouterPropTypes2.default.history,
    viewData: _propTypes3.ViewDataPropTypes.isRequired
};
exports.default = (0, _reactStatic.withRouter)(StickyHeader);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reactStatic = __webpack_require__(5);

var _BottomSticky = __webpack_require__(18);

var _BottomSticky2 = _interopRequireDefault(_BottomSticky);

var _ScrollInContainer = __webpack_require__(27);

var _ScrollInContainer2 = _interopRequireDefault(_ScrollInContainer);

var _EmailSignup = __webpack_require__(57);

var _EmailSignup2 = _interopRequireDefault(_EmailSignup);

var _Feedback = __webpack_require__(20);

var _Feedback2 = _interopRequireDefault(_Feedback);

var _FloatingMenu = __webpack_require__(65);

var _FloatingMenu2 = _interopRequireDefault(_FloatingMenu);

var _HomePageCard = __webpack_require__(66);

var _HomePageCard2 = _interopRequireDefault(_HomePageCard);

var _ProjectTopicsContainer = __webpack_require__(69);

var _ProjectTopicsContainer2 = _interopRequireDefault(_ProjectTopicsContainer);

var _SideMenu = __webpack_require__(13);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _Header = __webpack_require__(94);

var _Header2 = _interopRequireDefault(_Header);

var _api = __webpack_require__(9);

var _localStorage = __webpack_require__(14);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _search = __webpack_require__(10);

var _Container = __webpack_require__(15);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            isMenuOpen: false
        };

        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // We must store last path in here as when we create react-static
            // there is no other way of getting where we were for 404 logging
            (0, _localStorage.localStorageSet)('lastDocPath', '/home/');

            // Trigger the search index load here so a search is quicker
            (0, _search.initCorpusIndex)();

            if (!this.props.staticHome) {
                window.addEventListener('resize', this.handleResize);
                this.handleResize();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (!this.props.staticHome) {
                window.removeEventListener('resize', this.handleResize);
            }
        }
    }, {
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            this.setState({ isMenuOpen: !this.state.isMenuOpen });
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            document.querySelector('#image-background').style.height = document.querySelector('.cards-container').clientHeight + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.props.staticHome ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Home | ',
                        this.props.viewData.siteName
                    )
                ),
                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.staticHome } })
            ) : _react2.default.createElement(
                _Container2.default,
                this.props,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Home | ',
                        this.props.viewData.siteName
                    )
                ),
                _react2.default.createElement(_Header2.default, {
                    history: this.props.history,
                    headerTitle: this.props.homeData.headerTitle,
                    topTitles: this.props.homeData.headerTopLinks,
                    popularTopics: this.props.homeData.popularTopics,
                    onBurgerClick: this.handleBurgerClick,
                    viewData: this.props.viewData
                }),
                _react2.default.createElement(_SideMenu2.default, {
                    isMenuOpen: this.state.isMenuOpen,
                    projects: this.props.projects,
                    onCloseClick: this.handleBurgerClick,
                    highlightedItem: this.state.projectFullURL }),
                _react2.default.createElement('div', { id: 'image-background', style: { background: '#f3f2f1', width: '100%', height: '0px', position: 'absolute' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'layouts--2-column' },
                    _react2.default.createElement(
                        'div',
                        { className: 'left-column' },
                        _react2.default.createElement(
                            _ScrollInContainer2.default,
                            { topOffset: 50, bottomOffset: 150 },
                            _react2.default.createElement(_FloatingMenu2.default, { menuItems: (0, _projects.createProjectLinks)(this.props.projects) })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'right-column' },
                        _react2.default.createElement(
                            'article',
                            null,
                            _react2.default.createElement(_HomePageCard2.default, { content: this.props.homeData.cards })
                        ),
                        _react2.default.createElement(
                            'article',
                            null,
                            _react2.default.createElement(_ProjectTopicsContainer2.default, { content: (0, _projects.createProjectTopics)(this.props.projects) })
                        )
                    ),
                    this.props.viewData.enableFeedback && _react2.default.createElement(
                        _BottomSticky2.default,
                        { zIndex: 10, horizontalAlign: 'right' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tablet-down-hidden' },
                            _react2.default.createElement(_Feedback2.default, { onSubmit: function onSubmit(data) {
                                    return (0, _api.submitFeedback)(_this2.props.apiEndpoint, '/home/', data);
                                } })
                        )
                    )
                ),
                this.props.viewData.enableSignup && _react2.default.createElement(_EmailSignup2.default, { apiEndpoint: this.props.apiEndpoint })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.propTypes = {
    apiEndpoint: _propTypes2.default.string.isRequired,
    homeData: _propTypes3.HomeDataPropTypes.isRequired,
    viewData: _propTypes3.ViewDataPropTypes.isRequired,
    hideSignup: _propTypes2.default.bool,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location,
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    staticHome: _propTypes2.default.string
};
exports.default = (0, _reactStatic.withSiteData)(Home);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-style-proptype");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollInContainer = function (_React$Component) {
    _inherits(ScrollInContainer, _React$Component);

    function ScrollInContainer() {
        _classCallCheck(this, ScrollInContainer);

        return _possibleConstructorReturn(this, (ScrollInContainer.__proto__ || Object.getPrototypeOf(ScrollInContainer)).apply(this, arguments));
    }

    _createClass(ScrollInContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll = this.handleScroll.bind(this);
            this.handleResize = this.handleResize.bind(this);

            document.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            this.handleScroll();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.handleScroll();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            var thisDom = _reactDom2.default.findDOMNode(this);
            var parentDom = thisDom.parentNode;

            var thisRect = thisDom.getBoundingClientRect();
            var parentRect = parentDom.getBoundingClientRect();

            var computedParent = getComputedStyle(parentDom);

            if (parentRect.top < 0) {
                var newRelativeTop = -parentRect.top + this.props.topOffset;
                if (this._lastRelativeTop === undefined) {
                    this._lastRelativeTop = newRelativeTop;
                }

                var thisHeight = thisRect.height + this.props.bottomOffset;

                var fixBottom = false;
                if (thisHeight + this._lastRelativeTop >= parentRect.height) {
                    fixBottom = true;
                }

                this._lastRelativeTop = Math.floor(newRelativeTop);

                if (fixBottom) {
                    thisDom.style.top = parentRect.height - thisHeight + 'px';
                    thisDom.style.position = 'relative';
                    thisDom.style.width = 'auto';
                } else {
                    var parentTopPadding = parseInt(computedParent.paddingTop, 10);
                    var parentLeftPadding = parseInt(computedParent.paddingLeft, 10);
                    var parentRightPadding = parseInt(computedParent.paddingRight, 10);

                    thisDom.style.top = parentTopPadding + this.props.topOffset + 'px';
                    thisDom.style.position = 'fixed';
                    thisDom.style.width = parentRect.width - parentLeftPadding - parentRightPadding + 'px';
                }
            } else {
                thisDom.style.top = this.props.topOffset + 'px';
                thisDom.style.position = 'relative';
                thisDom.style.width = 'auto';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return ScrollInContainer;
}(_react2.default.Component);

ScrollInContainer.defaultProps = {
    topOffset: 0,
    bottomOffset: 100
};
ScrollInContainer.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    topOffset: _propTypes2.default.number,
    bottomOffset: _propTypes2.default.number
};
exports.default = ScrollInContainer;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Markdown = __webpack_require__(29);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectTopicsInner = function (_React$Component) {
    _inherits(ProjectTopicsInner, _React$Component);

    function ProjectTopicsInner() {
        _classCallCheck(this, ProjectTopicsInner);

        return _possibleConstructorReturn(this, (ProjectTopicsInner.__proto__ || Object.getPrototypeOf(ProjectTopicsInner)).apply(this, arguments));
    }

    _createClass(ProjectTopicsInner, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('project-topics', { 'project-topics__compressed': this.props.compressed }) },
                this.props.content.map(function (item, idx) {
                    return _react2.default.createElement(
                        'div',
                        { key: idx, className: 'project-topic__item' },
                        item.link && _react2.default.createElement(
                            _Link2.default,
                            { href: item.link, target: item.link.startsWith('http') ? '_blank' : undefined, className: 'project-topic__link' },
                            _react2.default.createElement(
                                'span',
                                { className: (0, _classnames2.default)('project-topic__heading', 'text--level6', { 'project-topic__primary-bullet': item.bullet === 'primary' }, { 'project-topic__secondary-bullet': item.bullet === 'secondary' }) },
                                item.name
                            )
                        ),
                        !item.link && _react2.default.createElement(
                            'span',
                            { className: (0, _classnames2.default)('project-topic__heading', 'text--level6', { 'project-topic__primary-bullet': item.bullet === 'primary' }, { 'project-topic__secondary-bullet': item.bullet === 'secondary' }) },
                            item.name
                        ),
                        _react2.default.createElement(_Markdown2.default, { className: 'project-topic__subheading', source: item.description, highlights: _this2.props.highlights })
                    );
                })
            );
        }
    }]);

    return ProjectTopicsInner;
}(_react2.default.Component);

ProjectTopicsInner.propTypes = {
    content: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        link: _propTypes2.default.string.isRequired,
        description: _propTypes2.default.string.isRequired,
        bullet: _propTypes2.default.oneOf(['none', 'primary', 'secondary'])
    })).isRequired,
    compressed: _propTypes2.default.bool,
    highlights: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
exports.default = ProjectTopicsInner;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _emojiDictionary = __webpack_require__(71);

var _emojiDictionary2 = _interopRequireDefault(_emojiDictionary);

var _googleMapReact = __webpack_require__(30);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

__webpack_require__(72);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = __webpack_require__(73);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reprism = __webpack_require__(74);

var _bash = __webpack_require__(75);

var _bash2 = _interopRequireDefault(_bash);

var _c = __webpack_require__(76);

var _c2 = _interopRequireDefault(_c);

var _cpp = __webpack_require__(77);

var _cpp2 = _interopRequireDefault(_cpp);

var _java = __webpack_require__(78);

var _java2 = _interopRequireDefault(_java);

var _javascript = __webpack_require__(79);

var _javascript2 = _interopRequireDefault(_javascript);

var _json = __webpack_require__(80);

var _json2 = _interopRequireDefault(_json);

var _jsx = __webpack_require__(81);

var _jsx2 = _interopRequireDefault(_jsx);

var _python = __webpack_require__(82);

var _python2 = _interopRequireDefault(_python);

var _logoSmall = __webpack_require__(31);

var _logoSmall2 = _interopRequireDefault(_logoSmall);

var _clipboard = __webpack_require__(32);

var _paths = __webpack_require__(21);

var _Heading = __webpack_require__(11);

var _Heading2 = _interopRequireDefault(_Heading);

var _HeadingLabel = __webpack_require__(83);

var _HeadingLabel2 = _interopRequireDefault(_HeadingLabel);

var _MapMarker = __webpack_require__(33);

var _MapMarker2 = _interopRequireDefault(_MapMarker);

var _MarkdownCard = __webpack_require__(85);

var _MarkdownCard2 = _interopRequireDefault(_MarkdownCard);

var _MessageBox = __webpack_require__(86);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _ProjectTopicsInner = __webpack_require__(28);

var _ProjectTopicsInner2 = _interopRequireDefault(_ProjectTopicsInner);

var _Tabs = __webpack_require__(87);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Feed = __webpack_require__(88);

var _Feed2 = _interopRequireDefault(_Feed);

__webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reprism.loadLanguages)(_jsx2.default, _bash2.default, _c2.default, _cpp2.default, _java2.default, _javascript2.default, _json2.default, _python2.default);

var Markdown = function (_PureComponent) {
    _inherits(Markdown, _PureComponent);

    function Markdown(props) {
        _classCallCheck(this, Markdown);

        var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

        _this.state = {
            content: '',
            imageUrl: ''
        };

        _this.tabContainers = [];
        _this.projectTopicContainers = [];
        _this.headingLabels = [];
        _this.cards = [];
        _this.messageBoxes = [];
        _this.objects = [];

        _this.html = _this.html.bind(_this);
        _this.heading = _this.heading.bind(_this);
        _this.textRenderer = _this.textRenderer.bind(_this);
        _this.tableRenderer = _this.tableRenderer.bind(_this);
        _this.tableCellRenderer = _this.tableCellRenderer.bind(_this);
        _this.tableRowRenderer = _this.tableRowRenderer.bind(_this);
        _this.replaceSearchQuery = _this.replaceSearchQuery.bind(_this);
        _this.stripSearchQuery = _this.stripSearchQuery.bind(_this);
        _this.codeBlock = _this.codeBlock.bind(_this);
        _this.handleCopy = _this.handleCopy.bind(_this);
        _this.handleFeedLoaded = _this.handleFeedLoaded.bind(_this);
        _this.imageRenderer = _this.imageRenderer.bind(_this);

        _this.currentTable = undefined;
        _this.currentTableRow = 0;
        _this.currentTableHeaders = [];
        _this.headingCounters = {};
        _this.copyIdCounter = 0;
        return _this;
    }

    _createClass(Markdown, [{
        key: 'handleCopy',
        value: function handleCopy(code, elemName) {
            (0, _clipboard.copyToClipboard)(code);

            document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', true);

            setTimeout(function () {
                document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', false);
            }, 2000);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.highlights = [];
            this.headingCounters = {};
            if (this.props.highlights) {
                this.highlights = this.highlights.concat(this.props.highlights);
            }
            if (this.props.query) {
                if (this.highlights.indexOf(this.props.query) < 0) {
                    this.highlights.push(this.props.query);
                }
            }

            var content = this.fixReprismSyntaxHighlighting(this.props.source);

            // Strip the h1 from the start of the content
            content = content.trim().replace(/(^# .*)/, '').trim();

            var tabMatches = this.findTabContainers(content);
            for (var i = 0; i < tabMatches.length; i++) {
                this.tabContainers.push(this.findTabs(tabMatches[i]));
                content = content.replace(tabMatches[i], '<tabs index="' + i + '"></tabs>');
            }

            var projectTopicMatches = this.findProjectTopicContainers(content);
            for (var _i = 0; _i < projectTopicMatches.length; _i++) {
                this.projectTopicContainers.push(this.findProjectTopics(projectTopicMatches[_i]));
                content = content.replace(projectTopicMatches[_i], '<project-topics index="' + _i + '"></project-topics>');
            }

            var headingMatches = this.findHeadingLabels(content);
            for (var _i2 = 0; _i2 < headingMatches.length; _i2++) {
                content = content.replace(headingMatches[_i2], '<heading-label index="' + _i2 + '"></heading-label>');
            }

            var cardMatches = this.findCards(content);
            for (var _i3 = 0; _i3 < cardMatches.length; _i3++) {
                content = content.replace(cardMatches[_i3], '<card index="' + _i3 + '"></card>');
            }

            var messageBoxMatches = this.findMessageBoxes(content);
            for (var _i4 = 0; _i4 < messageBoxMatches.length; _i4++) {
                content = content.replace(messageBoxMatches[_i4], '<message-box index="' + _i4 + '"></message-box>');
            }

            var objectMatches = this.findObjects(content);
            for (var _i5 = 0; _i5 < objectMatches.length; _i5++) {
                content = content.replace(objectMatches[_i5].content, '<' + objectMatches[_i5].type + ' index="' + _i5 + '"></' + objectMatches[_i5].type + '>');
            }

            content = this.replaceSearchQuery(content);

            this.setState({
                content: content
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.highlights = [];
            this.headingCounters = {};
        }
    }, {
        key: 'fixReprismSyntaxHighlighting',
        value: function fixReprismSyntaxHighlighting(content) {
            return content.replace(/```Python/g, '```python').replace(/```c\+\+/g, '```cpp').replace(/```proto/g, '```cpp').replace(/```bash/g, '```shell');
        }
    }, {
        key: 'stripSearchQuery',
        value: function stripSearchQuery(content) {
            return content.replace(/<query text="(.*?)" \/>/g, '$1');
        }
    }, {
        key: 'replaceSearchQuery',
        value: function replaceSearchQuery(content, useSpan) {
            if (this.highlights.length > 0) {
                var re = new RegExp('(^\\s|\\s$|\\S\\s|\\s\\S)(' + this.highlights.join('|') + ')(^\\s|\\s$|\\S\\s|\\s\\S)', 'gi');

                if (useSpan) {
                    content = content.replace(re, '$1<span class="search-keyword">$2</span>$3');
                } else {
                    content = content.replace(re, '$1<query text="$2" />$3');
                }
            }

            return content;
        }
    }, {
        key: 'findTabContainers',
        value: function findTabContainers(content) {
            var matches = [];
            var re = /^--------------------$([\S\s]*?)^--------------------$/gm;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    matches.push(match[0]);
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'findTabs',
        value: function findTabs(tabContainer) {
            var tabs = [];
            var re = /### (.*)([\S\s]*?)---/g;

            var match = void 0;
            do {
                match = re.exec(tabContainer);
                if (match && match.length === 3) {
                    tabs.push({
                        title: match[1],
                        content: match[2]
                    });
                }
            } while (match);

            return tabs;
        }
    }, {
        key: 'findProjectTopicContainers',
        value: function findProjectTopicContainers(content) {
            var matches = [];
            var re = /^---------------$([\S\s]*?)^---------------$/gm;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    matches.push(match[0]);
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'findProjectTopics',
        value: function findProjectTopics(projectTopicContainer) {
            var projectTopics = [];
            var re = /#### (.*)\n(\[.*\]\((.*)\))?([\S\s]*?)---/g;

            var match = void 0;
            do {
                match = re.exec(projectTopicContainer);
                if (match && match.length === 5) {
                    var matchPrimary = /\*\*(.*)\*\* ####/g.exec(match[1]);
                    if (matchPrimary && matchPrimary.length === 2) {
                        projectTopics.push({
                            bullet: 'primary',
                            name: matchPrimary[1],
                            description: match[4],
                            link: match[3].replace(/.md$/i, '')
                        });
                    } else {
                        var matchSecondary = /__(.*)__ ####/g.exec(match[1]);
                        if (matchSecondary && matchSecondary.length === 2) {
                            projectTopics.push({
                                bullet: 'secondary',
                                name: matchSecondary[1],
                                description: match[4],
                                link: match[3].replace(/.md$/i, '')
                            });
                        } else {
                            var matchPlain = /(.*) ####/g.exec(match[1]);
                            if (matchPlain && matchPlain.length === 2) {
                                projectTopics.push({
                                    bullet: 'none',
                                    name: matchPlain[1],
                                    description: match[4],
                                    link: match[3].replace(/.md$/i, '')
                                });
                            }
                        }
                    }
                }
            } while (match);

            return projectTopics;
        }
    }, {
        key: 'findCards',
        value: function findCards(content) {
            var matches = [];
            var re = /^-------------------------\s+!\[(.*?)\]\((.*?)\)\s+## \[(.*?)\]\((.*?)\)\s+([\S\s]*?)-------------------------$/gm;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 6) {
                    this.cards.push({
                        alt: match[1],
                        img: match[2],
                        title: match[3],
                        link: match[4],
                        content: match[5]
                    });
                    matches.push(match[0]);
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'findHeadingLabels',
        value: function findHeadingLabels(content) {
            var matches = [];
            var re = /### (.*) ###/g;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    var matchPrimary = /\*\*(.*)\*\*/g.exec(match[1]);
                    if (matchPrimary && matchPrimary.length === 2) {
                        this.headingLabels.push({ style: 'primary', content: matchPrimary[1] });
                        matches.push(match[0]);
                    } else {
                        var matchSecondary = /__(.*)__/g.exec(match[1]);
                        if (matchSecondary && matchSecondary.length === 2) {
                            this.headingLabels.push({ style: 'secondary', content: matchSecondary[1] });
                            matches.push(match[0]);
                        }
                    }
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'findMessageBoxes',
        value: function findMessageBoxes(content) {
            var matches = [];
            var re = /:::(success:|danger:|warning:|info:)(.+?)?(\n[\s\S]*?)?:::/gm;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 4) {
                    this.messageBoxes.push({
                        type: match[1].replace(':', ''),
                        title: match[2] && this.emojify(match[2].trim()),
                        content: match[3] && this.emojify(match[3].trim())
                    });
                    matches.push(match[0]);
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'findObjects',
        value: function findObjects(content) {
            var matches = [];
            var re = /¬¬¬\s\[(.*?)\]\s([\s\S]*?)\s¬¬¬/gm;

            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 3) {
                    if (match[1] === 'feed' || match[1] === 'map') {
                        this.objects.push(JSON.parse(match[2]));
                        matches.push({ type: match[1], content: match[0] });
                    }
                }
            } while (match);

            return matches;
        }
    }, {
        key: 'html',
        value: function html(props) {
            var _this2 = this;

            if (props.value.startsWith('<tabs')) {
                var re = /<tabs index="(.*)">/;
                var match = re.exec(props.value);

                if (match && match.length === 2) {
                    var index = parseInt(match[1], 10);
                    var headers = this.tabContainers[index].map(function (tc) {
                        return tc.title;
                    });
                    var content = this.tabContainers[index].map(function (tc, idx) {
                        return _react2.default.createElement(_reactMarkdown2.default, {
                            key: idx,
                            source: tc.content,
                            renderers: {
                                text: _this2.textRenderer,
                                code: function code(props) {
                                    return _this2.codeBlock(props, false);
                                }
                            } });
                    });
                    return _react2.default.createElement(_Tabs2.default, { headers: headers, contents: content });
                }
            } else if (props.value.startsWith('<project-topics')) {
                var _re = /<project-topics index="(.*)">/;
                var _match = _re.exec(props.value);

                if (_match && _match.length === 2) {
                    var _index = parseInt(_match[1], 10);
                    return _react2.default.createElement(_ProjectTopicsInner2.default, { content: this.projectTopicContainers[_index], compressed: true, highlights: this.highlights });
                }
            } else if (props.value.startsWith('<feed')) {
                var _re2 = /<feed index="(.*)">/;
                var _match2 = _re2.exec(props.value);

                if (_match2 && _match2.length === 2) {
                    var _index2 = parseInt(_match2[1], 10);
                    var feed = this.objects[_index2];
                    return _react2.default.createElement(_Feed2.default, {
                        displayType: feed.displayType,
                        context: feed.context,
                        apiEndpoint: this.props.apiEndpoint,
                        googleMapsKey: this.props.googleMapsKey,
                        onLoaded: this.handleFeedLoaded,
                        history: this.props.history
                    });
                }
            } else if (props.value.startsWith('<map')) {
                var _re3 = /<map index="(.*)">/;
                var _match3 = _re3.exec(props.value);

                if (_match3 && _match3.length === 2) {
                    var _index3 = parseInt(_match3[1], 10);
                    var map = this.objects[_index3];
                    return _react2.default.createElement(
                        'div',
                        { className: 'markdown-map' },
                        _react2.default.createElement(
                            _googleMapReact2.default,
                            {
                                bootstrapURLKeys: { key: this.props.googleMapsKey },
                                defaultCenter: {
                                    lat: map.center.lat,
                                    lng: map.center.lng
                                },
                                defaultZoom: map.zoom
                            },
                            map.markers && map.markers.map(function (marker, idx) {
                                return _react2.default.createElement(
                                    _MapMarker2.default,
                                    { lat: marker.lat, lng: marker.lng, key: idx },
                                    _react2.default.createElement('img', { src: _logoSmall2.default, alt: 'IOTA' }),
                                    marker.name
                                );
                            })
                        )
                    );
                }
            } else if (props.value.startsWith('<heading-label')) {
                var _re4 = /<heading-label index="(.*)">/;
                var _match4 = _re4.exec(props.value);

                if (_match4 && _match4.length === 2) {
                    var _index4 = parseInt(_match4[1], 10);
                    var headingLabel = this.headingLabels[_index4];
                    return _react2.default.createElement(
                        _HeadingLabel2.default,
                        { style: headingLabel.style, id: (0, _paths.sanitizeHashId)(headingLabel.content) },
                        headingLabel.content
                    );
                }
            } else if (props.value.startsWith('<card')) {
                var _re5 = /<card index="(.*)">/;
                var _match5 = _re5.exec(props.value);

                if (_match5 && _match5.length === 2) {
                    var _index5 = parseInt(_match5[1], 10);
                    var card = this.cards[_index5];
                    return _react2.default.createElement(
                        _MarkdownCard2.default,
                        {
                            id: (0, _paths.sanitizeHashId)(card.title),
                            alt: card.alt,
                            img: card.img,
                            title: card.title,
                            link: card.link.replace(/.md$/i, '')
                        },
                        this.boldify(card.content)
                    );
                }
            } else if (props.value.startsWith('<message-box')) {
                var _re6 = /<message-box index="(.*)">/;
                var _match6 = _re6.exec(props.value);

                if (_match6 && _match6.length === 2) {
                    var _index6 = parseInt(_match6[1], 10);
                    var messageBox = this.messageBoxes[_index6];
                    return _react2.default.createElement(_MessageBox2.default, { type: messageBox.type, title: messageBox.title, content: this.linkify(messageBox.content) });
                }
            } else if (props.value.startsWith('<a name')) {
                var _re7 = /<a name="(.*)"/i;
                var _match7 = _re7.exec(props.value);

                if (_match7 && _match7.length === 2) {
                    return _react2.default.createElement('a', { id: (0, _paths.sanitizeHashId)(_match7[1]) });
                }
            } else if (props.value.startsWith('<query')) {
                var _re8 = /<query text="(.*)"/i;
                var _match8 = _re8.exec(props.value);

                if (_match8 && _match8.length === 2) {
                    return _react2.default.createElement(
                        'span',
                        { className: 'search-keyword' },
                        _match8[1]
                    );
                }
            } else if (props.value.startsWith('<img')) {
                var _re9 = /<img src="(.*?)"\s*(?:alt="(.*?)")?/i;
                var _match9 = _re9.exec(props.value);

                if (_match9 && (_match9.length === 2 || _match9.length === 3)) {
                    return this.imageRenderer({
                        src: _match9[1],
                        alt: _match9[2] || ''
                    });
                }
            }

            // Do default html processing
            // https://github.com/rexxars/react-markdown/blob/b6caaba0437b00132d58337913e66a7d1bfb30ce/src/renderers.js#L100-L113
            if (props.skipHtml) {
                return null;
            }

            var tag = props.isBlock ? 'div' : 'span';
            if (props.escapeHtml) {
                var comp = _react2.default.Fragment || tag;
                return _react2.default.createElement(comp, null, props.value);
            }

            var nodeProps = { dangerouslySetInnerHTML: { __html: props.value } };
            return _react2.default.createElement(tag, nodeProps);
        }
    }, {
        key: 'linkify',
        value: function linkify(content) {
            var _this3 = this;

            var output = [];
            var re = /\[(.*?)\]\((.*?)\)/;
            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 3) {
                    output.push(_react2.default.createElement(
                        'span',
                        { style: { whiteSpace: 'pre-line' }, key: output.length },
                        content.substring(0, match.index)
                    ));
                    output.push(this.aLink({
                        children: match[1],
                        href: match[2],
                        key: output.length
                    }));
                    content = content.substring(match.index + match[0].length);
                } else {
                    output.push(_react2.default.createElement(
                        'span',
                        { style: { whiteSpace: 'pre-line' }, key: output.length },
                        content
                    ));
                }
            } while (match);

            return output.map(function (o) {
                return _this3.messageBoxCode(o);
            });
        }
    }, {
        key: 'messageBoxCode',
        value: function messageBoxCode(item) {
            if (item.type === 'span') {
                var output = [];
                var re = /(?:`+)([\s\S]*?)(?:`+)/;
                var content = item.props.children;
                var match = void 0;
                do {
                    match = re.exec(content);
                    if (match && match.length === 2) {
                        output.push(_react2.default.createElement(
                            'span',
                            { style: { whiteSpace: 'pre-line' }, key: output.length },
                            this.boldify(content.substring(0, match.index))
                        ));
                        output.push(this.inlineCodeBlock({ value: match[1] }, output.length));
                        content = content.substring(match.index + match[0].length);
                    } else {
                        output.push(_react2.default.createElement(
                            'span',
                            { style: { whiteSpace: 'pre-line' }, key: output.length },
                            this.boldify(content)
                        ));
                    }
                } while (match);
                return output;
            }

            return item;
        }
    }, {
        key: 'aLink',
        value: function aLink(props) {
            var localProps = _extends({}, props);
            if (localProps.href.startsWith('javascript:void(0)')) {
                if (localProps.children && localProps.children.length > 0) {
                    if (localProps.children[0].props && localProps.children[0].props.value) {
                        localProps.href = localProps.children[0].props.value;
                        localProps.target = '_blank';
                        localProps.rel = 'noopener noreferrer';
                    }
                }
            } else if (localProps.href.startsWith('http') || localProps.href.startsWith('iota')) {
                localProps.target = '_blank';
                localProps.rel = 'noopener noreferrer';
            } else {
                if (localProps.href.startsWith('#')) {
                    // Make sure the tag is consistently named
                    localProps.href = (0, _paths.sanitizeHashId)(localProps.href);
                } else {
                    // For local links remove .md extension
                    var anchorParts = localProps.href.split('#');
                    localProps.href = (0, _paths.sanitizeHashId)(anchorParts[0], true).replace(/.md$/i, '');
                    if (anchorParts.length === 2) {
                        localProps.href += '#' + (0, _paths.sanitizeHashId)(anchorParts[1], false, true);
                    }
                }
            }
            return _react2.default.createElement('a', localProps);
        }
    }, {
        key: 'codeBlock',
        value: function codeBlock(props, wrap) {
            var _this4 = this;

            var html = props.value;
            try {
                html = (0, _reprism.highlight)(html, props.language);
            } catch (err) {
                html = '<pre className="reprism markup language-markup"><code>' + html + '</code></pre>';
            }
            html = this.replaceSearchQuery(html, true);

            if (wrap) {
                this.copyIdCounter++;
                var elemName = 'copy-feedback-' + this.copyIdCounter;
                return _react2.default.createElement(
                    'div',
                    { className: 'markdown-code__wrapper' },
                    _react2.default.createElement(
                        'span',
                        { className: 'markdown-code-copy--wrapper' },
                        _react2.default.createElement(
                            'span',
                            { className: 'markdown-code-copy-feedback', id: elemName },
                            'Copied'
                        ),
                        _react2.default.createElement('button', { className: 'markdown-code--copy', onClick: function onClick() {
                                return _this4.handleCopy(props.value, elemName);
                            } })
                    ),
                    _react2.default.createElement('div', { className: 'markdown-code', dangerouslySetInnerHTML: { __html: html } })
                );
            } else {
                return _react2.default.createElement('div', {
                    className: 'markdown-code',
                    dangerouslySetInnerHTML: { __html: html } });
            }
        }
    }, {
        key: 'inlineCodeBlock',
        value: function inlineCodeBlock(props, key) {
            return _react2.default.createElement('div', {
                className: 'text text-inline--code markdown-code-inline',
                dangerouslySetInnerHTML: { __html: props.value },
                key: key });
        }
    }, {
        key: 'textRenderer',
        value: function textRenderer(props) {
            return this.emojify(props.children);
        }
    }, {
        key: 'emojify',
        value: function emojify(item) {
            return item.replace(/:\w+:/gi, function (name) {
                return _emojiDictionary2.default.getUnicode(name) || name;
            });
        }
    }, {
        key: 'boldify',
        value: function boldify(content) {
            var output = [];
            var re = /\*\*(.*?)\*\*/;
            var match = void 0;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    output.push(_react2.default.createElement(
                        'span',
                        { key: output.length },
                        content.substring(0, match.index)
                    ));
                    output.push(_react2.default.createElement(
                        'strong',
                        { key: output.length },
                        match[1]
                    ));
                    content = content.substring(match.index + match[0].length);
                } else {
                    output.push(_react2.default.createElement(
                        'span',
                        { key: output.length },
                        content
                    ));
                }
            } while (match);
            return output;
        }
    }, {
        key: 'tableRenderer',
        value: function tableRenderer(props) {
            var coreProps = this.getCoreProps(props);
            this.currentTableHeaders = [];
            this.currentTableRow = -1;
            if (props.columnAlignment.length > 3) {
                coreProps.className = 'table--compact';
            }
            return _react2.default.createElement('table', coreProps, props.children);
        }
    }, {
        key: 'tableRowRenderer',
        value: function tableRowRenderer(props) {
            this.currentTableRow++;
            this.currentTableColumn = -1;
            return _react2.default.createElement('tr', this.getCoreProps(props), props.children);
        }
    }, {
        key: 'tableCellRenderer',
        value: function tableCellRenderer(props) {
            var coreProps = this.getCoreProps(props);
            this.currentTableColumn++;
            var children = props.children;

            if (this.currentTableRow === 0) {
                this.currentTableHeaders[this.currentTableColumn] = props.children.length > 0 ? props.children[0].props.children : '';
            } else {
                children = [_react2.default.createElement('span', { className: 'table-body-row-item--inline-header', key: 0 }, this.currentTableHeaders[this.currentTableColumn]), _react2.default.createElement('span', { key: 1 }, children)];
            }
            return _react2.default.createElement(props.isHeader ? 'th' : 'td', coreProps, children);
        }
    }, {
        key: 'paragraph',
        value: function paragraph(props) {
            return _react2.default.createElement('div', _extends({ className: 'text-paragraph' }, props));
        }
    }, {
        key: 'heading',
        value: function heading(props) {
            var id = (0, _paths.sanitizeHashId)(this.stripSearchQuery(props.children.map(function (a) {
                return a.props.value;
            }).join('')), false, true);
            if (this.headingCounters[id] === undefined) {
                this.headingCounters[id] = -1;
            }
            this.headingCounters[id]++;
            if (this.headingCounters[id] > 0) {
                id = id + '_' + this.headingCounters[id];
            }
            return _react2.default.createElement(_Heading2.default, _extends({ className: 'text--tertiary', level: props.level, id: id }, props));
        }
    }, {
        key: 'imageRenderer',
        value: function imageRenderer(props) {
            var _this5 = this;

            return _react2.default.createElement('img', { src: props.src, alt: props.alt || '', onClick: function onClick(e) {
                    _this5.setState({ imageUrl: e.target.src });
                    document.body.classList.toggle('no-scroll', true);
                } });
        }
    }, {
        key: 'getCoreProps',
        value: function getCoreProps(props) {
            return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
        }
    }, {
        key: 'handleFeedLoaded',
        value: function handleFeedLoaded(itemCount) {
            if (this.props.onContentChanged) {
                this.props.onContentChanged(itemCount);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                'div',
                { className: 'markdown__wrapper' },
                _react2.default.createElement(_reactMarkdown2.default, {
                    source: this.state.content,
                    renderers: {
                        text: this.textRenderer,
                        code: function code(props) {
                            return _this6.codeBlock(props, true);
                        },
                        inlineCode: function inlineCode(props) {
                            return _this6.inlineCodeBlock(props);
                        },
                        html: this.html,
                        link: this.aLink,
                        paragraph: this.paragraph,
                        heading: this.heading,
                        table: this.tableRenderer,
                        tableRow: this.tableRowRenderer,
                        tableCell: this.tableCellRenderer,
                        image: this.imageRenderer,
                        img: this.imageRenderer
                    },
                    skipHtml: false,
                    escapeHtml: false }),
                this.state.imageUrl && _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('div', { className: 'image-popup--overlay' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'image-popup', onClick: function onClick() {
                                _this6.setState({ imageUrl: undefined });
                                document.body.classList.toggle('no-scroll', false);
                            } },
                        _react2.default.createElement('img', { src: this.state.imageUrl })
                    )
                )
            );
        }
    }]);

    return Markdown;
}(_react.PureComponent);

Markdown.propTypes = {
    source: _propTypes2.default.string.isRequired,
    query: _propTypes2.default.string,
    highlights: _propTypes2.default.arrayOf(_propTypes2.default.string),
    apiEndpoint: _propTypes2.default.string,
    googleMapsKey: _propTypes2.default.string,
    history: _reactRouterPropTypes2.default.history,
    onContentChanged: _propTypes2.default.func
};
exports.default = Markdown;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-small.5001cd42.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyToClipboard = copyToClipboard;
function copyToClipboard(text) {
    try {
        var textArea = document.createElement('textarea');

        // Prevent zooming on iOS
        textArea.style.fontSize = '12pt';
        // Reset box model
        textArea.style.border = '0';
        textArea.style.padding = '0';
        textArea.style.margin = '0';
        // Move element out of screen horizontally
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || document.documentElement.scrollTop;
        textArea.style.top = yPosition + 'px';

        textArea.setAttribute('readonly', '');
        textArea.value = text;

        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand('Copy');
        textArea.remove();

        return true;
    } catch (err) {
        // Not much we can do
        return false;
    }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to display an event map marker.
 */
var MapMarker = function (_Component) {
    _inherits(MapMarker, _Component);

    function MapMarker() {
        _classCallCheck(this, MapMarker);

        return _possibleConstructorReturn(this, (MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).apply(this, arguments));
    }

    _createClass(MapMarker, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({ className: 'map-marker' }, this.props),
                this.props.children
            );
        }
    }]);

    return MapMarker;
}(_react.Component);

MapMarker.propTypes = {
    children: _propTypes2.default.any,
    lat: _propTypes2.default.number.isRequired,
    lng: _propTypes2.default.number.isRequired
};
exports.default = MapMarker;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        var maxPerPage = _this.props.maxPerPage ? _this.props.maxPerPage : 10;

        _this.state = {
            maxPerPage: maxPerPage,
            numberOfPages: Math.ceil(_this.props.totalCount / maxPerPage),
            currentPage: props.page
        };

        _this.handleNext = _this.handleNext.bind(_this);
        return _this;
    }

    _createClass(Pagination, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.totalCount != prevProps.totalCount) {
                this.setState({
                    numberOfPages: Math.ceil(this.props.totalCount / this.state.maxPerPage),
                    currentPage: 0
                });
            }
        }
    }, {
        key: 'handleNext',
        value: function handleNext(newIndex) {
            if (this.props.onDataPaginated) {
                this.props.onDataPaginated(newIndex, newIndex * this.state.maxPerPage, Math.min((newIndex + 1) * this.state.maxPerPage - 1, this.props.totalCount - 1));
                this.setState({ currentPage: newIndex });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.state.numberOfPages > 1 ? _react2.default.createElement(
                'ul',
                { className: 'pagination' },
                [].concat(_toConsumableArray(Array(this.state.numberOfPages))).map(function (p, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index, className: (0, _classnames2.default)('pagination-item', { 'pagination-item--selected': _this2.state.currentPage === index }) },
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.handleNext(index);
                                } },
                            index + 1
                        )
                    );
                })
            ) : null;
        }
    }]);

    return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
    totalCount: _propTypes2.default.number.isRequired,
    page: _propTypes2.default.number.isRequired,
    maxPerPage: _propTypes2.default.number,
    onDataPaginated: _propTypes2.default.func
};
exports.default = Pagination;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var scrollIntoView = exports.scrollIntoView = function scrollIntoView(elem, cb) {
    var animate = function animate(start, from, to, duration) {
        var time = Math.min(1, (Date.now() - start) / duration);
        var eased = 0.5 * (1 - Math.cos(Math.PI * time));

        document.scrollingElement.scrollTop = eased * (to - from) + from;

        if (time < 1) {
            setTimeout(function () {
                return animate(start, from, to, duration);
            }, 0);
        } else if (cb) {
            cb();
        }
    };

    animate(Date.now(), document.scrollingElement.scrollTop, elem.offsetTop, 1000);
};

var currentScrollTop = exports.currentScrollTop = function currentScrollTop() {
    return document.scrollingElement.scrollTop;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _reactClickOutside = __webpack_require__(93);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickOutside = function (_PureComponent) {
    _inherits(ClickOutside, _PureComponent);

    function ClickOutside() {
        _classCallCheck(this, ClickOutside);

        return _possibleConstructorReturn(this, (ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).apply(this, arguments));
    }

    _createClass(ClickOutside, [{
        key: 'handleClickOutside',
        value: function handleClickOutside() {
            if (this.props.onClickOutside) {
                this.props.onClickOutside();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return ClickOutside;
}(_react.PureComponent);

ClickOutside.propTypes = {
    onClickOutside: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
exports.default = (0, _reactClickOutside2.default)(ClickOutside);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Logo.a2e87dd3.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reactStatic = __webpack_require__(5);

var _BottomSticky = __webpack_require__(18);

var _BottomSticky2 = _interopRequireDefault(_BottomSticky);

var _DropSelector = __webpack_require__(99);

var _DropSelector2 = _interopRequireDefault(_DropSelector);

var _ScrollInContainer = __webpack_require__(27);

var _ScrollInContainer2 = _interopRequireDefault(_ScrollInContainer);

var _Feedback = __webpack_require__(20);

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Navigator = __webpack_require__(100);

var _Navigator2 = _interopRequireDefault(_Navigator);

var _SideMenu = __webpack_require__(13);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _SubHeader = __webpack_require__(101);

var _SubHeader2 = _interopRequireDefault(_SubHeader);

var _TableOfContents = __webpack_require__(102);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _TreeMenu = __webpack_require__(103);

var _TreeMenu2 = _interopRequireDefault(_TreeMenu);

var _VersionPicker = __webpack_require__(104);

var _VersionPicker2 = _interopRequireDefault(_VersionPicker);

var _Markdown = __webpack_require__(29);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _StickyHeader = __webpack_require__(23);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

var _api = __webpack_require__(9);

var _localStorage = __webpack_require__(14);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _search = __webpack_require__(10);

var _Container = __webpack_require__(15);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Doc = function (_React$Component) {
    _inherits(Doc, _React$Component);

    function Doc(props) {
        _classCallCheck(this, Doc);

        var _this = _possibleConstructorReturn(this, (Doc.__proto__ || Object.getPrototypeOf(Doc)).call(this, props));

        _this.state = {
            projectFullURL: '',
            projectFolder: '',
            projectVersion: '',
            projectDocParts: [],
            projectDoc: '',
            projectDocTitle: '',
            projectVersions: [],
            projectVersionPages: [],
            pageTableOfContents: [],
            isMenuOpen: false
        };

        _this.changeVersion = _this.changeVersion.bind(_this);
        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        _this.handleContentChanged = _this.handleContentChanged.bind(_this);
        return _this;
    }

    _createClass(Doc, [{
        key: 'changeVersion',
        value: function changeVersion(newVersion) {
            var projectParts = (0, _projects.parseProjectUrl)(this.state.projectFullURL);
            var newUrl = (0, _projects.replaceVersion)(projectParts, newVersion, this.props.projects);
            if (newUrl) {
                this.props.history.push(newUrl);
                this.setState({ projectVersion: newVersion });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var projectParts = (0, _projects.parseProjectUrl)(this.props.location.pathname);

            this.setState(_extends({}, projectParts, {
                projectVersions: (0, _projects.getVersionsUrl)(projectParts, this.props.projects),
                projectVersionPages: (0, _projects.getProjectVersionPagesUrl)(projectParts, projectParts.projectVersion, this.props.projects),
                pageTableOfContents: (0, _projects.createPageTableOfContents)(projectParts, this.props.projects)
            }));

            // We must store last path in here as when we create react-static
            // there is no other way of getting where we were for 404 logging
            (0, _localStorage.localStorageSet)('lastDocPath', this.props.location.pathname);

            // Trigger the search index load here so a search is quicker
            (0, _search.initCorpusIndex)();
        }
    }, {
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            this.setState({ isMenuOpen: !this.state.isMenuOpen });
        }
    }, {
        key: 'handleContentChanged',
        value: function handleContentChanged(itemCount) {
            // If the markdown has triggered a content change it must have
            // dynamic content, if the default toc only has the 'introduction'
            // entry see if there is any other h2 entries we can use from the dynamic content
            var projectParts = (0, _projects.parseProjectUrl)(this.props.location.pathname);

            var toc = (0, _projects.createPageTableOfContents)(projectParts, this.props.projects);

            if (itemCount > 0) {
                var markdownHeaders = document.querySelectorAll('.markdown__wrapper h2');
                if (markdownHeaders && markdownHeaders.length > 0) {
                    for (var i = 0; i < markdownHeaders.length; i++) {
                        toc.push({ name: markdownHeaders[i].innerText, link: '#' + markdownHeaders[i].id });
                    }
                }
            }

            this.setState({
                pageTableOfContents: toc
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Container2.default,
                this.props,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        this.props.title + ' | ' + this.props.viewData.siteName
                    )
                ),
                _react2.default.createElement(_StickyHeader2.default, {
                    history: this.props.history,
                    onBurgerClick: this.handleBurgerClick,
                    viewData: this.props.viewData
                }),
                _react2.default.createElement(_SideMenu2.default, {
                    isMenuOpen: this.state.isMenuOpen,
                    projects: this.props.projects,
                    onCloseClick: this.handleBurgerClick,
                    highlightedItem: this.state.projectFullURL }),
                _react2.default.createElement(_SubHeader2.default, {
                    projects: this.props.projects,
                    pathname: this.props.location.pathname
                }),
                _react2.default.createElement(_VersionPicker2.default, {
                    versions: this.state.projectVersions,
                    currentVersion: this.state.projectVersion,
                    onChange: function onChange(newVersion) {
                        return _this2.changeVersion(newVersion);
                    }
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'layouts--3-column' },
                    _react2.default.createElement(
                        'section',
                        { className: 'left-column' },
                        _react2.default.createElement(_DropSelector2.default, {
                            items: (0, _projects.createProjectLinks)(this.props.projects),
                            currentName: (0, _projects.getProjectTitle)(this.state, this.props.projects),
                            style: { marginBottom: '30px' }
                        }),
                        _react2.default.createElement(_TreeMenu2.default, {
                            menuItems: this.state.projectVersionPages,
                            highlightedItem: this.state.projectFullURL
                        })
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'middle-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'middle-toc' },
                            _react2.default.createElement(_TableOfContents2.default, { items: this.state.pageTableOfContents, title: '\u3053\u306E\u30DA\u30FC\u30B8\u306E\u7BC0', compact: true, history: this.props.history })
                        ),
                        _react2.default.createElement(_Markdown2.default, {
                            source: this.props.markdown,
                            query: (0, _search.extractSearchQuery)(this.props.location),
                            highlights: (0, _search.extractHighlights)(this.props.location),
                            apiEndpoint: this.props.apiEndpoint,
                            googleMapsKey: this.props.googleMapsKey,
                            onContentChanged: this.handleContentChanged,
                            history: this.props.history })
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'right-column' },
                        _react2.default.createElement(
                            _ScrollInContainer2.default,
                            { bottomOffset: 200 },
                            _react2.default.createElement(_TableOfContents2.default, { items: this.state.pageTableOfContents, title: '\u3053\u306E\u30DA\u30FC\u30B8\u306E\u7BC0', history: this.props.history })
                        )
                    ),
                    this.props.viewData.enableFeedback && _react2.default.createElement(
                        _BottomSticky2.default,
                        { zIndex: 10, horizontalAlign: 'right' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tablet-down-hidden' },
                            _react2.default.createElement(_Feedback2.default, { onSubmit: function onSubmit(data) {
                                    return (0, _api.submitFeedback)(_this2.props.apiEndpoint, _this2.props.location.pathname, data);
                                } })
                        )
                    )
                ),
                _react2.default.createElement(_Navigator2.default, {
                    projects: this.props.projects,
                    pathname: this.props.location.pathname
                })
            );
        }
    }]);

    return Doc;
}(_react2.default.Component);

Doc.propTypes = {
    title: _propTypes2.default.string.isRequired,
    viewData: _propTypes3.ViewDataPropTypes.isRequired,
    apiEndpoint: _propTypes2.default.string.isRequired,
    googleMapsKey: _propTypes2.default.string.isRequired,
    markdown: _propTypes2.default.string.isRequired,
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location
};
exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)((0, _reactStatic.withRouter)(Doc)));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lunr = __webpack_require__(105);

var _lunr2 = _interopRequireDefault(_lunr);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reactStatic = __webpack_require__(5);

var _InputSearch = __webpack_require__(22);

var _InputSearch2 = _interopRequireDefault(_InputSearch);

var _BottomSticky = __webpack_require__(18);

var _BottomSticky2 = _interopRequireDefault(_BottomSticky);

var _Feedback = __webpack_require__(20);

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Pagination = __webpack_require__(35);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _SearchResult = __webpack_require__(106);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _SideMenu = __webpack_require__(13);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _StickyHeader = __webpack_require__(23);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

var _api = __webpack_require__(9);

var _localStorage = __webpack_require__(14);

var _propTypes3 = __webpack_require__(3);

var _search = __webpack_require__(10);

var _Container = __webpack_require__(15);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            isMenuOpen: false,
            foundResult: [],
            page: 0,
            indexStart: 0,
            indexEnd: 9,
            query: (0, _search.extractSearchQuery)(_this.props.location)
        };

        _this.onSearch = _this.onSearch.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.onDataPaginated = _this.onDataPaginated.bind(_this);
        _this.search = _this.search.bind(_this);
        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.corpusIndex = (0, _search.initCorpusIndex)();

            this.search();
            // We must store last path in here as when we create react-static
            // there is no other way of getting where we were for 404 logging
            (0, _localStorage.localStorageSet)('lastDocPath', this.props.location.pathname);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (this.props.location.search !== prevProps.location.search) {
                this.setState({ query: (0, _search.extractSearchQuery)(this.props.location) }, function () {
                    _this2.search();
                });
            }
        }
    }, {
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            this.setState({ isMenuOpen: !this.state.isMenuOpen });
        }
    }, {
        key: 'onDataPaginated',
        value: function onDataPaginated(pageIndex, start, end) {
            this.setState({ page: pageIndex, indexStart: start, indexEnd: end });
            var target = document.querySelector('#search-top');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, {
        key: 'onSearch',
        value: function onSearch(query) {
            var _this3 = this;

            this.setState({ query: query }, function () {
                _this3.search();
            });

            this.props.history.replace('?' + (0, _search.constructSearchQuery)(query));
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            if (e.key === 'Escape') {
                this.setState({ inputExpanded: false });
            }
        }
    }, {
        key: 'search',
        value: function search() {
            var _this4 = this;

            var searchResults = void 0;
            if (this.state.query) {
                var idx = _lunr2.default.Index.load(this.corpusIndex.index);
                var results = idx.search('*' + this.state.query + '*~2');
                searchResults = results.map(function (result) {
                    return _extends({}, _this4.corpusIndex.documents[result.ref], {
                        matches: Object.keys(result.matchData.metadata)
                    });
                });
            }

            if (searchResults && searchResults.length > 0) {
                this.setState({ foundResult: searchResults, indexStart: 0, indexEnd: Math.min(9, searchResults.length - 1) });
            } else {
                this.setState({ foundResult: [], indexStart: 0, indexEnd: 0 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                _Container2.default,
                this.props,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Search Results | ',
                        this.props.viewData.siteName
                    )
                ),
                _react2.default.createElement('div', { id: 'search-top' }),
                _react2.default.createElement(_StickyHeader2.default, {
                    history: this.props.history,
                    onBurgerClick: this.handleBurgerClick,
                    viewData: this.props.viewData
                }),
                _react2.default.createElement(_SideMenu2.default, {
                    isMenuOpen: this.state.isMenuOpen,
                    projects: this.props.projects,
                    onCloseClick: this.handleBurgerClick }),
                _react2.default.createElement(
                    'section',
                    { className: 'sub-header__wrapper' },
                    _react2.default.createElement(
                        'section',
                        { className: 'sub-header' },
                        _react2.default.createElement(
                            'span',
                            { className: 'sub-header__title sub-header-title__fixed' },
                            'Search results'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'layouts--1-column' },
                    _react2.default.createElement(
                        'div',
                        { className: 'middle-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-wrapper-basic' },
                            _react2.default.createElement(_InputSearch2.default, {
                                query: this.state.query,
                                className: 'input-search-basic',
                                placeholder: 'Search for topics',
                                onKeyUp: this.handleKeyUp,
                                onSearch: this.onSearch
                            })
                        ),
                        _react2.default.createElement(_SearchResult2.default, {
                            foundResult: this.state.foundResult,
                            indexStart: this.state.indexStart,
                            indexEnd: this.state.indexEnd,
                            query: this.state.query
                        }),
                        _react2.default.createElement(
                            'div',
                            { style: { display: 'flex', justifyContent: 'center', marginTop: '30px' } },
                            _react2.default.createElement(_Pagination2.default, {
                                totalCount: this.state.foundResult && this.state.foundResult.length,
                                onDataPaginated: this.onDataPaginated
                            })
                        )
                    ),
                    this.props.viewData.enableFeedback && _react2.default.createElement(
                        _BottomSticky2.default,
                        { zIndex: 10, horizontalAlign: 'right' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tablet-down-hidden' },
                            _react2.default.createElement(_Feedback2.default, { onSubmit: function onSubmit(data) {
                                    return (0, _api.submitFeedback)(_this5.props.apiEndpoint, _this5.props.location.pathname, data);
                                } })
                        )
                    )
                )
            );
        }
    }]);

    return Search;
}(_react2.default.Component);

Search.propTypes = {
    viewData: _propTypes3.ViewDataPropTypes.isRequired,
    apiEndpoint: _propTypes2.default.string.isRequired,
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location
};
exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)((0, _reactStatic.withRouter)(Search)));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _reactStatic = __webpack_require__(5);

var _ParallaxContainer = __webpack_require__(107);

var _ParallaxContainer2 = _interopRequireDefault(_ParallaxContainer);

var _SideMenu = __webpack_require__(13);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _StickyHeader = __webpack_require__(23);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

var _api = __webpack_require__(9);

var _localStorage = __webpack_require__(14);

var _propTypes3 = __webpack_require__(3);

var _Container = __webpack_require__(15);

var _Container2 = _interopRequireDefault(_Container);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$PureComponent) {
    _inherits(NotFound, _React$PureComponent);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));

        _this.state = {
            isMenuOpen: false
        };

        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        return _this;
    }

    _createClass(NotFound, [{
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            this.setState({ isMenuOpen: !this.state.isMenuOpen });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // We must get the last path in here as when we create react-static
            // there is no other way of getting where we were for 404 logging
            // this can be empty
            var lastLocation = (0, _localStorage.localStorageGet)('lastDocPath');

            (0, _api.submitMissing)(this.props.apiEndpoint, this.props.location.pathname, lastLocation);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Container2.default,
                this.props,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Not Found | ',
                        this.props.viewData.siteName
                    )
                ),
                _react2.default.createElement(_StickyHeader2.default, {
                    history: this.props.history,
                    onBurgerClick: this.handleBurgerClick,
                    viewData: this.props.viewData
                }),
                _react2.default.createElement(_SideMenu2.default, {
                    isMenuOpen: this.state.isMenuOpen,
                    projects: this.props.projects,
                    onCloseClick: this.handleBurgerClick }),
                _react2.default.createElement(
                    'section',
                    { className: 'not-found' },
                    _react2.default.createElement(
                        'article',
                        null,
                        _react2.default.createElement(
                            'h1',
                            null,
                            '404'
                        ),
                        _react2.default.createElement(
                            'h2',
                            null,
                            'We\u2019re sorry, but the page you were looking for can\u2019t be found.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'This issue has been automatically logged.'
                        ),
                        _react2.default.createElement(
                            'nav',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: this.props.history.goBack, className: 'button button--secondary' },
                                'Previous'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/', className: 'button button--secondary' },
                                'Home'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'aside',
                        null,
                        _react2.default.createElement(
                            _ParallaxContainer2.default,
                            null,
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '-0.02' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '-0.04' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '-0.06' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '0.08' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '-0.02' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '-0.06' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'data-depth': '0.08' },
                                _react2.default.createElement('img', { src: '/assets/document.svg' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NotFound;
}(_react2.default.PureComponent);

NotFound.propTypes = {
    viewData: _propTypes3.ViewDataPropTypes.isRequired,
    apiEndpoint: _propTypes2.default.string.isRequired,
    projects: _propTypes3.ProjectsPropTypes.isRequired,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location
};
exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)((0, _reactStatic.withRouter)(NotFound)));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(43);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };

    // Render!
    render(_App2.default);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(44);

var _nprogress = __webpack_require__(45);

var _nprogress2 = _interopRequireDefault(_nprogress);

__webpack_require__(46);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(47);

var _reactStatic = __webpack_require__(5);

var _reactStaticRoutes = __webpack_require__(48);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _reactStatic.onLoading)(function (loading) {
                if (loading) {
                    _nprogress2.default.start();
                } else {
                    _nprogress2.default.done();
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactStatic.Router,
                null,
                _react2.default.createElement(_reactStaticRoutes2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("iota-css-theme");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("nprogress/nprogress.css");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(49);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(50);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(51);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(52);

var _reactUniversalComponent = __webpack_require__(53);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/circleci/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Doc',
  file: '/home/circleci/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 39)), (0, _importCss3.default)('src/containers/Doc', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Doc');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return 'src/containers/Doc';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Search',
  file: '/home/circleci/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 40)), (0, _importCss3.default)('src/containers/Search', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Search');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return 'src/containers/Search';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/NotFound',
  file: '/home/circleci/app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 41)), (0, _importCss3.default)('src/containers/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return 'src/containers/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 3

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(54);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(55);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(56);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(24);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Heading = __webpack_require__(11);

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = __webpack_require__(58);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

__webpack_require__(59);

var _InputRegister = __webpack_require__(60);

var _InputRegister2 = _interopRequireDefault(_InputRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignup = function (_React$PureComponent) {
    _inherits(EmailSignup, _React$PureComponent);

    function EmailSignup() {
        _classCallCheck(this, EmailSignup);

        return _possibleConstructorReturn(this, (EmailSignup.__proto__ || Object.getPrototypeOf(EmailSignup)).apply(this, arguments));
    }

    _createClass(EmailSignup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'email-signup' },
                _react2.default.createElement(
                    'div',
                    { className: 'email-signup__wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'email-signup__content' },
                        _react2.default.createElement(_Heading2.default, { level: 2, text: 'Stay up-to-date' }),
                        _react2.default.createElement(
                            _Paragraph2.default,
                            null,
                            'Get the latest IOTA development news straight to your mailbox'
                        )
                    ),
                    _react2.default.createElement(_InputRegister2.default, { apiEndpoint: this.props.apiEndpoint })
                )
            );
        }
    }]);

    return EmailSignup;
}(_react2.default.PureComponent);

EmailSignup.propTypes = {
    apiEndpoint: _propTypes2.default.string.isRequired
};
exports.default = EmailSignup;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = function (_React$PureComponent) {
    _inherits(Paragraph, _React$PureComponent);

    function Paragraph() {
        _classCallCheck(this, Paragraph);

        return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
    }

    _createClass(Paragraph, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                { className: (0, _classnames2.default)('paragraph', this.props.className) },
                this.props.children
            );
        }
    }]);

    return Paragraph;
}(_react2.default.PureComponent);

Paragraph.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    className: _propTypes2.default.string
};
exports.default = Paragraph;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".email-signup{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;min-height:160px;background-color:#f6f6f6}.email-signup__wrapper{max-width:1495px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}.email-signup__content{padding:0 20px}@media (min-width:768px){.email-signup__content{padding:0 40px}}.email-signup__content h2{margin:37px 0 0}.email-signup__content h2 .text{color:#20a49d}.email-signup__content p{color:#1c1e21;font-size:18px;font-weight:300;line-height:1.76;margin-top:5px}.input-register-container.input-register-container--hidden{display:none}.input-register-container__form,.input-register-container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.input-register-container__form{margin:0 16px 25px;-ms-flex-pack:start;justify-content:flex-start}@media (min-width:768px){.input-register-container__form{margin:60px 40px 0}}.error-message{margin-top:10px;color:red}.success-message{color:green}@media (max-width:768px){.email-signup{height:auto}.email-signup__wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.email-signup__content h2{font-size:24px;margin:25px 0 0}}", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputRegister = function (_React$Component) {
    _inherits(InputRegister, _React$Component);

    function InputRegister(props) {
        _classCallCheck(this, InputRegister);

        var _this = _possibleConstructorReturn(this, (InputRegister.__proto__ || Object.getPrototypeOf(InputRegister)).call(this, props));

        _this.state = {
            email: '',
            loading: false,
            success: false,
            apiMessage: null,
            error: null,
            diabled: false
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(InputRegister, [{
        key: 'handleInputChange',
        value: function handleInputChange(_ref) {
            var target = _ref.target;

            this.setState({ email: target.value, error: null });
        }
    }, {
        key: 'submit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
                var _this2 = this;

                var email;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                e.preventDefault();

                                email = this.state.email;


                                if (!email || !this.validateEmail(email)) {
                                    this.setState({ error: 'Please provide a valid e-mail address.' });
                                } else {
                                    this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                        var response;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return (0, _api.submitEmail)(_this2.props.apiEndpoint, email);

                                                    case 2:
                                                        response = _context.sent;

                                                        _this2.setState({ success: response.success, loading: false, apiMessage: response.message });

                                                    case 4:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    })));
                                }

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function submit(_x) {
                return _ref2.apply(this, arguments);
            }

            return submit;
        }()
    }, {
        key: 'validateEmail',
        value: function validateEmail(email) {
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                email = _state.email,
                error = _state.error,
                success = _state.success,
                apiMessage = _state.apiMessage,
                loading = _state.loading;

            return _react2.default.createElement(
                'div',
                { className: 'input-register-container__wrapper' },
                _react2.default.createElement(
                    'form',
                    {
                        onSubmit: this.submit,
                        className: (0, _classnames2.default)('input-register-container__form'),
                        noValidate: true
                    },
                    _react2.default.createElement(
                        'div',
                        {
                            className: (0, _classnames2.default)('input-register-container', { 'input-register-container--hidden': success }) },
                        _react2.default.createElement('input', {
                            type: 'email',
                            className: 'input-register',
                            placeholder: 'Add your email address',
                            value: email,
                            disabled: loading,
                            onChange: this.handleInputChange
                        }),
                        _react2.default.createElement(
                            'button',
                            { className: 'input-register__button', type: 'submit', disabled: loading },
                            _react2.default.createElement(
                                'span',
                                { className: 'input-register__button-text' },
                                'Register'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'error-message' },
                        error
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('success-message', { 'hidden': !success }) },
                        apiMessage
                    )
                )
            );
        }
    }]);

    return InputRegister;
}(_react2.default.Component);

InputRegister.propTypes = {
    apiEndpoint: _propTypes2.default.string.isRequired
};
exports.default = InputRegister;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackButton = function (_React$Component) {
    _inherits(FeedbackButton, _React$Component);

    function FeedbackButton(props) {
        _classCallCheck(this, FeedbackButton);

        var _this = _possibleConstructorReturn(this, (FeedbackButton.__proto__ || Object.getPrototypeOf(FeedbackButton)).call(this, props));

        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }

    _createClass(FeedbackButton, [{
        key: 'handleOnClick',
        value: function handleOnClick(e) {
            var onClick = this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)('feedback-button__wrapper', { 'feedback-button__wrapper--expanded': this.props.isExpanded }) },
                _react2.default.createElement(
                    'button',
                    {
                        className: (0, _classnames2.default)('feedback-button', { 'feedback-button--hide-content': !this.props.showButtonContent }),
                        onClick: this.handleOnClick },
                    _react2.default.createElement('span', {
                        className: (0, _classnames2.default)('feedback-button--icon', { 'feedback-button--icon-yes': this.props.wasItUseful === 'yes' }, { 'feedback-button--icon-no': this.props.wasItUseful === 'no' }) })
                )
            );
        }
    }]);

    return FeedbackButton;
}(_react2.default.Component);

FeedbackButton.propTypes = {
    isExpanded: _propTypes2.default.bool,
    wasItUseful: _propTypes2.default.string,
    showButtonContent: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
};
exports.default = FeedbackButton;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackForm = function (_React$Component) {
    _inherits(FeedbackForm, _React$Component);

    function FeedbackForm(props) {
        _classCallCheck(this, FeedbackForm);

        var _this = _possibleConstructorReturn(this, (FeedbackForm.__proto__ || Object.getPrototypeOf(FeedbackForm)).call(this, props));

        _this.state = {
            wasItUseful: undefined,
            comments: ''
        };

        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
        _this.handleYesNo = _this.handleWasItUseful.bind(_this);
        return _this;
    }

    _createClass(FeedbackForm, [{
        key: 'handleClose',
        value: function handleClose() {
            var onClose = this.props.onClose;

            if (onClose) {
                onClose();
            }
        }
    }, {
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            var onSubmit = this.props.onSubmit;

            if (onSubmit) {
                onSubmit({
                    wasItUseful: this.state.wasItUseful,
                    comments: this.state.comments
                });
            }
            e.preventDefault();
        }
    }, {
        key: 'handleWasItUseful',
        value: function handleWasItUseful(e, wasItUseful) {
            this.setState({ wasItUseful: wasItUseful });
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'feedback-form__wrapper' },
                _react2.default.createElement(
                    'form',
                    { className: 'feedback-form' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Was this page useful?'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Let us know...'
                    ),
                    _react2.default.createElement('button', {
                        className: 'feedback-form-close icon-cross',
                        onClick: this.handleClose }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            {
                                className: (0, _classnames2.default)('feedback-form-button', { 'feedback-form-button--selected': this.state.wasItUseful === 'yes' }) },
                            _react2.default.createElement('button', {
                                className: 'feedback-form-button-circle icon-thumb-up',
                                onClick: function onClick(e) {
                                    return _this2.handleWasItUseful(e, 'yes');
                                } }),
                            _react2.default.createElement(
                                'button',
                                {
                                    className: 'feedback-form-button-label',
                                    onClick: function onClick(e) {
                                        return _this2.handleWasItUseful(e, 'yes');
                                    } },
                                'Yes'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                className: (0, _classnames2.default)('feedback-form-button', { 'feedback-form-button--selected': this.state.wasItUseful === 'no' }) },
                            _react2.default.createElement('button', {
                                className: 'feedback-form-button-circle icon-thumb-down',
                                onClick: function onClick(e) {
                                    return _this2.handleWasItUseful(e, 'no');
                                } }),
                            _react2.default.createElement(
                                'button',
                                {
                                    className: 'feedback-form-button-label',
                                    onClick: function onClick(e) {
                                        return _this2.handleWasItUseful(e, 'no');
                                    } },
                                'No'
                            )
                        )
                    ),
                    _react2.default.createElement('textarea', {
                        placeholder: 'Leave additional thoughts or feedback',
                        rows: '6',
                        value: this.state.comments,
                        onChange: function onChange(e) {
                            return _this2.setState({ comments: e.target.value });
                        }
                    }),
                    _react2.default.createElement(
                        'button',
                        {
                            className: 'feedback-form-button-submit',
                            onClick: this.handleOnSubmit,
                            disabled: this.state.wasItUseful === undefined },
                        'Submit Page Feedback'
                    )
                )
            );
        }
    }]);

    return FeedbackForm;
}(_react2.default.Component);

FeedbackForm.propTypes = {
    onClose: _propTypes2.default.func,
    onSubmit: _propTypes2.default.func
};
exports.default = FeedbackForm;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackOverlay = function (_React$Component) {
    _inherits(FeedbackOverlay, _React$Component);

    function FeedbackOverlay() {
        _classCallCheck(this, FeedbackOverlay);

        return _possibleConstructorReturn(this, (FeedbackOverlay.__proto__ || Object.getPrototypeOf(FeedbackOverlay)).apply(this, arguments));
    }

    _createClass(FeedbackOverlay, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('feedback-overlay', { 'feedback-overlay--expanded': this.props.isExpanded }) },
                this.props.children
            );
        }
    }]);

    return FeedbackOverlay;
}(_react2.default.Component);

FeedbackOverlay.propTypes = {
    isExpanded: _propTypes2.default.bool,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
exports.default = FeedbackOverlay;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _propTypes3 = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingMenu = function (_React$Component) {
    _inherits(FloatingMenu, _React$Component);

    function FloatingMenu(props) {
        _classCallCheck(this, FloatingMenu);

        var _this = _possibleConstructorReturn(this, (FloatingMenu.__proto__ || Object.getPrototypeOf(FloatingMenu)).call(this, props));

        _this.state = {
            activeTarget: null
        };
        return _this;
    }

    _createClass(FloatingMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll = this.handleScroll.bind(this);

            this.targets = this.props.menuItems.map(function (item) {
                var target = item.name.toLowerCase().replace(/ /g, '_');
                return document.getElementById(target);
            });

            document.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleScroll);

            this.handleScroll();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            var threshold = window.innerHeight * 0.35;

            var activeTarget = null;

            this.targets.forEach(function (target) {
                var rect = target.getBoundingClientRect();

                if (rect.top < threshold && rect.bottom > 0) {
                    activeTarget = target.id;
                }
            });

            if (activeTarget !== this.state.activeTarget) {
                this.setState({
                    activeTarget: activeTarget
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'ul',
                { className: 'floating-menu' },
                this.props.menuItems.map(function (item) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.name,
                            className: (0, _classnames2.default)('floating-menu__item', {
                                'floating-menu__item--selected': _this2.props.highlightedItem === item.folder || _this2.state.activeTarget === item.name.toLowerCase().replace(/ /g, '_')
                            })
                        },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: item.link, exact: true },
                            item.name
                        )
                    );
                })
            );
        }
    }]);

    return FloatingMenu;
}(_react2.default.Component);

FloatingMenu.propTypes = {
    menuItems: _propTypes3.ContentMenuItemsPropTypes.isRequired,
    highlightedItem: _propTypes2.default.string
};
exports.default = FloatingMenu;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(67);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardContainer = function (_React$PureComponent) {
    _inherits(CardContainer, _React$PureComponent);

    function CardContainer() {
        _classCallCheck(this, CardContainer);

        return _possibleConstructorReturn(this, (CardContainer.__proto__ || Object.getPrototypeOf(CardContainer)).apply(this, arguments));
    }

    _createClass(CardContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'cards-container' },
                this.props.content.map(function (card) {
                    return _react2.default.createElement(_Card2.default, { key: card.name, card: _extends({}, card) });
                })
            );
        }
    }]);

    return CardContainer;
}(_react2.default.PureComponent);

CardContainer.propTypes = {
    content: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        image: _propTypes2.default.string.isRequired,
        href: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string
    })).isRequired
};
exports.default = CardContainer;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

var _Image = __webpack_require__(68);

var _Image2 = _interopRequireDefault(_Image);

var _Text = __webpack_require__(12);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$PureComponent) {
    _inherits(Card, _React$PureComponent);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'card' },
                _react2.default.createElement(
                    _Link2.default,
                    { href: this.props.card.href, className: 'card__link' },
                    _react2.default.createElement(_Image2.default, { src: this.props.card.image, alt: this.props.card.name, className: 'card__image' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'card__wrapper' },
                        _react2.default.createElement(
                            _Text2.default,
                            { className: 'text--level5 card__label' },
                            this.props.card.name
                        )
                    )
                )
            );
        }
    }]);

    return Card;
}(_react2.default.PureComponent);

Card.propTypes = {
    card: _propTypes2.default.exact({
        image: _propTypes2.default.string.isRequired,
        href: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string
    }).isRequired
};
exports.default = Card;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$PureComponent) {
    _inherits(Image, _React$PureComponent);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    _createClass(Image, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('img', { id: this.props.id, src: this.props.src, alt: this.props.alt, className: (0, _classnames2.default)('image', this.props.className) });
        }
    }]);

    return Image;
}(_react2.default.PureComponent);

Image.propTypes = {
    id: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string
};
exports.default = Image;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProjectTopics = __webpack_require__(70);

var _ProjectTopics2 = _interopRequireDefault(_ProjectTopics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectTopicsContainer = function (_React$Component) {
    _inherits(ProjectTopicsContainer, _React$Component);

    function ProjectTopicsContainer() {
        _classCallCheck(this, ProjectTopicsContainer);

        return _possibleConstructorReturn(this, (ProjectTopicsContainer.__proto__ || Object.getPrototypeOf(ProjectTopicsContainer)).apply(this, arguments));
    }

    _createClass(ProjectTopicsContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'project__wrapper' },
                this.props.content.map(function (c, idx) {
                    return _react2.default.createElement(_ProjectTopics2.default, { key: idx, content: c });
                })
            );
        }
    }]);

    return ProjectTopicsContainer;
}(_react2.default.Component);

ProjectTopicsContainer.propTypes = {
    content: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        description: _propTypes2.default.string.isRequired,
        links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired,
            link: _propTypes2.default.string.isRequired,
            description: _propTypes2.default.string.isRequired
        })).isRequired
    })).isRequired
};
exports.default = ProjectTopicsContainer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Heading = __webpack_require__(11);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(12);

var _Text2 = _interopRequireDefault(_Text);

var _ProjectTopicsInner = __webpack_require__(28);

var _ProjectTopicsInner2 = _interopRequireDefault(_ProjectTopicsInner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectTopics = function (_React$Component) {
    _inherits(ProjectTopics, _React$Component);

    function ProjectTopics() {
        _classCallCheck(this, ProjectTopics);

        return _possibleConstructorReturn(this, (ProjectTopics.__proto__ || Object.getPrototypeOf(ProjectTopics)).apply(this, arguments));
    }

    _createClass(ProjectTopics, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'project', id: this.props.content.name.toLowerCase().replace(/ /g, '_') },
                _react2.default.createElement(
                    _Heading2.default,
                    { className: 'project__heading', level: 2 },
                    this.props.content.name
                ),
                _react2.default.createElement(
                    _Text2.default,
                    { className: 'project__subheading' },
                    this.props.content.description
                ),
                _react2.default.createElement(_ProjectTopicsInner2.default, { content: this.props.content.links })
            );
        }
    }]);

    return ProjectTopics;
}(_react2.default.Component);

ProjectTopics.propTypes = {
    content: _propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        description: _propTypes2.default.string.isRequired,
        links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired,
            link: _propTypes2.default.string.isRequired,
            description: _propTypes2.default.string.isRequired
        })).isRequired
    }).isRequired
};
exports.default = ProjectTopics;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("emoji-dictionary");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("prismjs/themes/prism.css");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("reprism");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/bash");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/c");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/cpp");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/java");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/javascript");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/json");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/jsx");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("reprism/languages/python");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadingLabel = function (_React$Component) {
    _inherits(HeadingLabel, _React$Component);

    function HeadingLabel() {
        _classCallCheck(this, HeadingLabel);

        return _possibleConstructorReturn(this, (HeadingLabel.__proto__ || Object.getPrototypeOf(HeadingLabel)).apply(this, arguments));
    }

    _createClass(HeadingLabel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)('heading-label', { 'heading-label--secondary': this.props.style === 'secondary' }),
                    id: this.props.id },
                this.props.children
            );
        }
    }]);

    return HeadingLabel;
}(_react2.default.Component);

HeadingLabel.propTypes = {
    style: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    id: _propTypes2.default.string
};
exports.default = HeadingLabel;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".map-marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:10px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;background:var(--jade);color:var(--white);text-align:center}.map-marker img{width:20px;height:20px;margin-right:10px;border:none!important}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownCard = function (_React$Component) {
    _inherits(MarkdownCard, _React$Component);

    function MarkdownCard() {
        _classCallCheck(this, MarkdownCard);

        return _possibleConstructorReturn(this, (MarkdownCard.__proto__ || Object.getPrototypeOf(MarkdownCard)).apply(this, arguments));
    }

    _createClass(MarkdownCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'markdown-card' },
                _react2.default.createElement(
                    'div',
                    { className: 'markdown-card--inner' },
                    _react2.default.createElement(
                        _Link2.default,
                        { href: this.props.link, id: this.props.id },
                        _react2.default.createElement('img', { className: 'markdown-card--image', src: this.props.img, alt: this.props.alt }),
                        _react2.default.createElement(
                            'div',
                            { className: 'markdown-card--content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'markdown-card--title' },
                                this.props.title
                            ),
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return MarkdownCard;
}(_react2.default.Component);

MarkdownCard.propTypes = {
    alt: _propTypes2.default.string,
    img: _propTypes2.default.string,
    title: _propTypes2.default.string,
    link: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    id: _propTypes2.default.string
};
exports.default = MarkdownCard;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to display a message box.
 */
var MessageBox = function (_Component) {
    _inherits(MessageBox, _Component);

    function MessageBox(props) {
        _classCallCheck(this, MessageBox);

        var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

        _this.state = {
            showMap: false
        };
        return _this;
    }

    _createClass(MessageBox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)('message-box', { 'message-box__success': this.props.type === 'success' }, { 'message-box__danger': this.props.type === 'danger' }, { 'message-box__info': this.props.type === 'info' }, { 'message-box__warning': this.props.type === 'warning' })
                },
                _react2.default.createElement('div', { className: 'message-box--icon' }),
                _react2.default.createElement(
                    'div',
                    { className: 'message-box--text' },
                    this.props.title && _react2.default.createElement(
                        'div',
                        { className: 'message-box--title' },
                        this.props.title
                    ),
                    this.props.content && _react2.default.createElement(
                        'div',
                        { className: 'message-box--content' },
                        this.props.content
                    )
                )
            );
        }
    }]);

    return MessageBox;
}(_react.Component);

MessageBox.propTypes = {
    type: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)])
};
exports.default = MessageBox;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _clipboard = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.state = {
            selectedIndex: 0,
            copyActive: false,
            copySuccess: false
        };

        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.handleCopy = _this.handleCopy.bind(_this);
        return _this;
    }

    _createClass(Tabs, [{
        key: 'handleSelect',
        value: function handleSelect(idx) {
            this.setState({ selectedIndex: idx });
        }
    }, {
        key: 'handleCopy',
        value: function handleCopy() {
            var _this2 = this;

            var markdown = this.props.contents[this.state.selectedIndex].props.source;

            var success = (0, _clipboard.copyToClipboard)(markdown.replace(/```.*/g, '').trim());

            this.setState({
                copySuccess: success,
                copyActive: true
            });

            setTimeout(function () {
                _this2.setState({
                    copyActive: false
                });
            }, 2000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'tabs' },
                _react2.default.createElement(
                    'div',
                    { className: 'tab-header' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'tab-header-list' },
                        this.props.headers.map(function (header, headerIdx) {
                            return _react2.default.createElement(
                                'li',
                                { key: headerIdx,
                                    className: (0, _classnames2.default)('tab-header-item', { 'tab-header-item--selected': headerIdx === _this3.state.selectedIndex }) },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this3.handleSelect(headerIdx);
                                        } },
                                    header
                                )
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tab-header-copy' },
                        _react2.default.createElement(
                            'span',
                            { className: (0, _classnames2.default)('tab-header-copy-text', { 'tab-header-copy-text--active': this.state.copyActive }, { 'tab-header-copy-text--failed': !this.state.copySuccess && this.state.copyActive }) },
                            this.state.copySuccess ? 'Copied' : 'Failed'
                        ),
                        _react2.default.createElement('button', { className: 'tab-header-copy-button icon-copy', onClick: function onClick() {
                                return _this3.handleCopy();
                            } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tab-container' },
                    this.props.contents.map(function (content, contentIdx) {
                        return _react2.default.createElement(
                            'div',
                            { key: contentIdx,
                                className: (0, _classnames2.default)('tab-item', { 'tab-item--selected': contentIdx === _this3.state.selectedIndex }) },
                            content
                        );
                    })
                )
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
    headers: _propTypes2.default.arrayOf(_propTypes2.default.string),
    contents: _propTypes2.default.arrayOf(_propTypes2.default.element)
};
exports.default = Tabs;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = __webpack_require__(34);

var _qs2 = _interopRequireDefault(_qs);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _api = __webpack_require__(9);

var _EventCard = __webpack_require__(89);

var _EventCard2 = _interopRequireDefault(_EventCard);

var _Pagination = __webpack_require__(35);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _scroll = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feed = function (_React$Component) {
    _inherits(Feed, _React$Component);

    function Feed(props) {
        _classCallCheck(this, Feed);

        var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

        var paramPage = 0;
        if (props.history.location.search) {
            var params = _qs2.default.parse(props.history.location.search, { ignoreQueryPrefix: true });
            if (params && params.page) {
                paramPage = parseInt(params.page, 10) - 1;
            }
        }

        _this.state = {
            status: '',
            items: [],
            initialHash: props.history.location.hash,
            page: paramPage,
            pageSize: 10,
            totalPages: 0,
            totalItems: 0
        };

        _this.onDataPaginated = _this.onDataPaginated.bind(_this);
        _this.loadData = _this.loadData.bind(_this);
        return _this;
    }

    _createClass(Feed, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.loadData();

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this2 = this;

            var target = document.querySelector('#root');
            if (target) {
                (0, _scroll.scrollIntoView)(target);
            }

            this.setState({
                status: 'Retrieving, please wait...',
                items: [],
                totalPages: 0,
                totalItems: 0
            }, _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var response;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (_this2.props.onLoaded) {
                                    _this2.props.onLoaded(0);
                                }
                                _this2.updatePageUrl();

                                _context2.next = 4;
                                return (0, _api.feed)(_this2.props.apiEndpoint, _this2.props.context, _this2.state.page, _this2.state.pageSize);

                            case 4:
                                response = _context2.sent;


                                if (response.success) {
                                    _this2.setState({
                                        items: response.items,
                                        status: '',
                                        totalPages: response.totalPages,
                                        totalItems: response.totalItems
                                    }, function () {
                                        if (_this2.props.onLoaded) {
                                            _this2.props.onLoaded(response.totalItems);
                                        }
                                        _this2.updatePageUrl();
                                        if (_this2.state.initialHash) {
                                            var _target = document.querySelector(_this2.state.initialHash);
                                            if (_target) {
                                                (0, _scroll.scrollIntoView)(_target);
                                            }
                                        }
                                    });
                                } else {
                                    _this2.setState({
                                        items: [],
                                        status: 'Failed loading feed',
                                        totalPages: 0,
                                        totalItems: 0
                                    });
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            })));
        }
    }, {
        key: 'onDataPaginated',
        value: function onDataPaginated(pageIndex) {
            var _this3 = this;

            this.setState({
                initialHash: '',
                page: pageIndex
            }, _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _this3.loadData();

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this3);
            })));
        }
    }, {
        key: 'updatePageUrl',
        value: function updatePageUrl() {
            var url = this.props.history.location.pathname;
            if (this.state.page > 0) {
                url += '?page=' + (this.state.page + 1);
            }
            if (this.state.initialHash) {
                url += this.state.initialHash;
            }

            this.props.history.replace(url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.status,
                this.state.items.map(function (item, idx) {
                    return _this4.props.displayType === 'event' && _react2.default.createElement(_EventCard2.default, { item: item, key: idx, googleMapsKey: _this4.props.googleMapsKey });
                }),
                this.state.totalPages > 0 && _react2.default.createElement(_Pagination2.default, { totalCount: this.state.totalItems, page: this.state.page, maxPerPage: this.state.pageSize, onDataPaginated: this.onDataPaginated })
            );
        }
    }]);

    return Feed;
}(_react2.default.Component);

Feed.propTypes = {
    apiEndpoint: _propTypes2.default.string.isRequired,
    googleMapsKey: _propTypes2.default.string,
    displayType: _propTypes2.default.string.isRequired,
    context: _propTypes2.default.string.isRequired,
    onLoaded: _propTypes2.default.func,
    history: _reactRouterPropTypes2.default.history
};
exports.default = Feed;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _googleMapReact = __webpack_require__(30);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _moment = __webpack_require__(90);

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logoSmall = __webpack_require__(31);

var _logoSmall2 = _interopRequireDefault(_logoSmall);

var _paths = __webpack_require__(21);

__webpack_require__(91);

var _MapMarker = __webpack_require__(33);

var _MapMarker2 = _interopRequireDefault(_MapMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to display an event.
 */
var EventCard = function (_Component) {
    _inherits(EventCard, _Component);

    function EventCard(props) {
        _classCallCheck(this, EventCard);

        var _this = _possibleConstructorReturn(this, (EventCard.__proto__ || Object.getPrototypeOf(EventCard)).call(this, props));

        _this.state = {
            showMap: false
        };
        return _this;
    }

    _createClass(EventCard, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'event-card' },
                _react2.default.createElement(
                    'h2',
                    { id: (0, _paths.sanitizeHashId)(this.props.item.title), className: 'event-card--title' },
                    this.props.item.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'event-card--date' },
                    (0, _moment2.default)(this.props.item.startUtc).format('MMMM Do YYYY, h:mm a')
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'event-card--description' },
                    this.props.item.description
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'div',
                    { className: 'event-card--venue' },
                    this.props.item.venueName && _react2.default.createElement(
                        'div',
                        { className: 'event-card--venue-name' },
                        this.props.item.venueName
                    ),
                    this.props.item.venueAddress && this.props.item.venueAddress.map(function (a, idx) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'event-card--venue-address', key: idx },
                            a
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'event-card--actions' },
                    _react2.default.createElement(
                        'a',
                        { className: 'button button--secondary', href: this.props.item.urlDetails, target: '_blank', role: 'button', rel: 'noreferrer noopener' },
                        'More Details'
                    )
                ),
                this.props.item.venueLatitude && this.props.item.venueLongitude && _react2.default.createElement(
                    'div',
                    { className: 'event-card--map-container' },
                    _react2.default.createElement(
                        'a',
                        {
                            className: 'event-card--map-toggle icon-up-down',
                            onClick: function onClick() {
                                return _this2.setState({ showMap: !_this2.state.showMap });
                            },
                            role: 'button'
                        },
                        this.state.showMap ? 'Hide Map' : 'Show Map',
                        '\xA0'
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: (0, _classnames2.default)('event-card--map', { 'event-card--map__hidden': !this.state.showMap })
                        },
                        _react2.default.createElement(
                            _googleMapReact2.default,
                            {
                                bootstrapURLKeys: { key: this.props.googleMapsKey },
                                defaultCenter: {
                                    lat: this.props.item.venueLatitude,
                                    lng: this.props.item.venueLongitude
                                },
                                defaultZoom: 14
                            },
                            _react2.default.createElement(
                                _MapMarker2.default,
                                { lat: this.props.item.venueLatitude, lng: this.props.item.venueLongitude },
                                _react2.default.createElement('img', { src: _logoSmall2.default, alt: 'IOTA' }),
                                this.props.item.venueName
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EventCard;
}(_react.Component);

EventCard.propTypes = {
    item: _propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        description: _propTypes2.default.string.isRequired,
        startUtc: _propTypes2.default.string.isRequired,
        urlDetails: _propTypes2.default.string,
        venueName: _propTypes2.default.string,
        venueAddress: _propTypes2.default.arrayOf(_propTypes2.default.string),
        venueLatitude: _propTypes2.default.number,
        venueLongitude: _propTypes2.default.number
    }).isRequired,
    googleMapsKey: _propTypes2.default.string.isRequired

};
exports.default = EventCard;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".event-card{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:20px;margin-bottom:20px;padding:20px;border:1px solid var(--light-grey);border-radius:5px}@media (max-width:514px){.event-card{-ms-flex-direction:column;flex-direction:column}}.event-card .event-card--title{-ms-flex:1 0 50%;flex:1 0 50%;margin:0 0 20px;font-size:20px;font-size:1.25rem;font-weight:700}.event-card .event-card--date{-ms-flex:1 0 50%;flex:1 0 50%;padding-left:10px;color:var(--jade);font-size:16px;font-size:1rem;font-weight:700;line-height:1.75;text-align:right}@media (max-width:514px){.event-card .event-card--date{padding-bottom:10px;padding-left:0;text-align:left}}.event-card .event-card--description{-ms-flex:1 0 100%;flex:1 0 100%;color:var(--body-copy);font-size:16.8px;font-size:1.05rem;line-height:1.75}.event-card .event-card--venue{-ms-flex:1 0 50%;flex:1 0 50%}.event-card .event-card--venue .event-card--venue-name{font-size:16px;font-size:1rem;font-weight:700}.event-card .event-card--venue .event-card--venue-address{font-size:16px;font-size:1rem}.event-card .event-card--actions{display:-ms-flexbox;display:flex;-ms-flex:1 0 50%;flex:1 0 50%;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:end;justify-content:flex-end}@media (max-width:514px){.event-card .event-card--actions{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:20px}}.event-card .event-card--actions .button{margin:0}.event-card .event-card--map-container{width:100%;margin-top:20px}.event-card .event-card--map-container .event-card--map{height:300px;margin-top:20px;-webkit-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease;-webkit-transition-property:height,border,opacity;-o-transition-property:height,border,opacity;transition-property:height,border,opacity;border:1px solid var(--jade);opacity:1}.event-card .event-card--map-container .event-card--map.event-card--map__hidden{height:0;border-color:transparent;opacity:0}.event-card .event-card--map-container .event-card--map .event-card--map-marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:10px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;background:var(--jade);color:var(--white);text-align:center}.event-card .event-card--map-container .event-card--map .event-card--map-marker img{width:20px;height:20px;margin-right:10px;border:none}", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ":not(pre)>code[class*=language-],pre[class*=language-]{background:none;margin:0;padding:0;overflow:visible}code,pre{font-family:Source Code Pro,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace!important}.markdown-code__wrapper{position:relative}.markdown-code{border:1px solid #ececec;border-radius:0 0 5px 5px;background-color:#f8f8f8;padding:20px 25px;overflow:auto;margin-bottom:1.5rem;font-size:.92rem}.tab-item>.markdown-code{border:none;margin:0}.markdown-code pre{line-height:2rem}.markdown-code-inline{display:inline;border:1px solid #ececec;border-radius:3px;background-color:#f8f8f8;padding:0 5px;font-size:.93rem;line-height:1.5}.markdown__wrapper .markdown-code-copy--wrapper{position:absolute;top:5px;right:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.markdown__wrapper .markdown-code-copy-feedback{-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;opacity:0;color:var(--tealish);margin-right:10px}.markdown__wrapper .markdown-code-copy-feedback--active{opacity:1}.markdown-code--copy{border:0;background:none;cursor:pointer;outline:0;opacity:.2;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease}.markdown-code--copy:hover{opacity:.5}.markdown-code--copy:before{font-family:IOTA icons;font-size:18px;content:\"\\1F4C4\"}.markdown__wrapper img{max-width:100%;border:10px solid #f3f2f1;cursor:pointer}.markdown__wrapper dl{padding:1px 0 10px 20px;border-left:3px solid #20a49d}.markdown__wrapper dl dt{font-style:italic;font-weight:600;line-height:1.75;margin-top:16px;margin-bottom:16px;padding:0}.markdown__wrapper dl dd{font-style:italic;font-weight:300;margin-left:0;line-height:1.75}.markdown__wrapper table+h1{margin-top:48px}.markdown__wrapper ol{padding-left:24px;counter-reset:ol-counter}.markdown__wrapper ol li{list-style:none;position:relative;line-height:1.75;font-size:1.05rem}.markdown__wrapper ol li:before{content:counter(ol-counter) \".\";counter-increment:ol-counter;position:absolute;top:0;left:-24px;width:20px;font-weight:600}.markdown__wrapper a{word-break:break-all;word-break:break-word;color:#4f4f4f;text-decoration:underline!important}.markdown__wrapper a,.markdown__wrapper a:hover{-webkit-text-decoration-color:#1e9a93!important;text-decoration-color:#1e9a93!important}.markdown__wrapper a:hover{color:#1e9a93}.markdown__wrapper a:visited{color:#603f98;-webkit-text-decoration-color:#603f98!important;text-decoration-color:#603f98!important}.search-keyword{background-color:#cdbfe4}.markdown-map{width:100%;height:300px;border:1px solid var(--jade)}.markdown__wrapper .image-popup--overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#eee;opacity:.9;z-index:100}.markdown__wrapper .image-popup{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:101;padding:40px;cursor:pointer}.markdown__wrapper .image-popup img{border:none;background:#fff;padding:20px;max-height:100%;max-width:100%}.markdown-card{margin:20px -10px;border:10px solid transparent;-webkit-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease}.markdown-card:hover{border:10px solid #eee}.markdown-card--inner{border:1px solid #eee;cursor:pointer}.markdown-card .link{text-decoration:none!important}.markdown__wrapper .markdown-card--image{border:0}.markdown__wrapper .markdown-card--content{font-weight:400;padding:10px 20px 20px;color:var(--body-copy)}.markdown__wrapper .markdown-card--title{font-weight:700;padding-bottom:10px;color:var(--jade)}", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("react-click-outside");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _Logo = __webpack_require__(38);

var _Logo2 = _interopRequireDefault(_Logo);

var _propTypes3 = __webpack_require__(3);

var _search = __webpack_require__(10);

var _InputSearch = __webpack_require__(22);

var _InputSearch2 = _interopRequireDefault(_InputSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.handleBurgerClick = _this.handleBurgerClick.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'handleBurgerClick',
        value: function handleBurgerClick() {
            if (this.props.onBurgerClick) {
                this.props.onBurgerClick();
            }
        }
    }, {
        key: 'onSearch',
        value: function onSearch(query) {
            (0, _search.performSearch)(this.props.history, query);
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            if (e.key === 'Escape') {
                this.setState({ inputExpanded: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                topTitles = _props.topTitles,
                headerTitle = _props.headerTitle;


            return _react2.default.createElement(
                'header',
                { className: (0, _classnames2.default)('header', { 'compact': this.props.viewData.disableSearch }) },
                _react2.default.createElement(
                    'div',
                    { className: 'header__wrapper' },
                    _react2.default.createElement(
                        'section',
                        { className: 'header__head' },
                        _react2.default.createElement('img', { className: 'header__brand', src: _Logo2.default }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'top-header' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'top-header__items' },
                                    topTitles.map(function (topTitle, index) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: index, className: 'top-header__item' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: topTitle.href, target: '_blank', rel: 'noopener noreferrer' },
                                                topTitle.name
                                            )
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement('button', { className: 'header__icon', onClick: this.handleBurgerClick })
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'header__body', style: {} },
                        _react2.default.createElement(
                            'span',
                            { className: 'header__title text text--level1 text--secondary' },
                            headerTitle
                        ),
                        !this.props.viewData.disableSearch && _react2.default.createElement(
                            'div',
                            { className: 'header__search' },
                            _react2.default.createElement(
                                'div',
                                { className: 'input-wrapper' },
                                _react2.default.createElement(_InputSearch2.default, {
                                    className: 'input-search',
                                    placeholder: '\u30C8\u30D4\u30C3\u30AF\u691C\u7D22',
                                    onKeyUp: this.handleKeyUp,
                                    onSearch: this.onSearch
                                }),
                                this.props.popularTopics && _react2.default.createElement(
                                    'nav',
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Popular topics:'
                                    ),
                                    this.props.popularTopics.map(function (pt, idx) {
                                        return _react2.default.createElement(
                                            _react2.default.Fragment,
                                            { key: idx },
                                            _react2.default.createElement(
                                                'a',
                                                { onClick: function onClick() {
                                                        return _this2.onSearch(pt.query);
                                                    } },
                                                pt.name
                                            ),
                                            idx < _this2.props.popularTopics.length - 1 && _react2.default.createElement(
                                                'span',
                                                null,
                                                ','
                                            )
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

Header.propTypes = {
    headerTitle: _propTypes2.default.string,
    topTitles: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string,
        href: _propTypes2.default.string
    })),
    popularTopics: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        query: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })),
    onBurgerClick: _propTypes2.default.func,
    history: _reactRouterPropTypes2.default.history,
    viewData: _propTypes3.ViewDataPropTypes.isRequired
};
exports.default = Header;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のコンピュータがイミュータブルなデータと価値を相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続をたどって各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードは、アドレスと秘密鍵のペアを導出し、IOTAトークンを取り出すバンドルに署名するために使用される秘密のパスワードです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"トランザクションは、単独で使用することも、他のトランザクションと一緒にパッケージ化することもできる単一の操作です。単独型のトランザクションは、たとえばIOTAトークンを含まないデータのみを送信するものです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルは、データを送信したり、ノードにIOTAトークンを特定のアドレスから特定のアドレスに転送するように指示する1つ以上のトランザクショングループです。バンドル内の各トランザクションの運命は、残りの部分に依存します。つまりすべてのトランザクションが有効か、またはすべて無効かです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードとは、偽造物がないことを確認するためにトランザクションを検証する責任があるコンピュータです。 IOTAネットワーク内のクライアントは、トランザクションを検証してタングルに添付できるように、バンドルをノードに送信する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テストトークンを送信する（Node.js）","summary":"商品やサービスと引き換えにIOTAトークンを誰かに送ることができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"IOTAネットワーク","summary":"IOTAでは、トランザクションのバンドルをノードに送信する必要があります。IOTAには、3つのパブリックネットワークがあります。各ネットワークには、ノードがトランザクションを追加できるそれぞれ独自の分散台帳（タングル）があります。どのパブリックネットワーク上のノードにバンドルを接続して送信するかを選べます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/iota-basics/0.1/introduction/overview","name":"IOTAの基本概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のIOTAトークンの量を定義しま..."},{"id":"docs/iota-basics/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはIOTAトークンを保持するアカウントで、署名はアドレスの所有権を証明します。"},{"id":"docs/iota-basics/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"トランザクションは、ノードに送信できる単一の操作です。トランザクションはIOTAトークンの取り出し/預け入れや、データを送信することができます。ノードに1つ以上のトランザクションを送信するには、トランザクションをバンドルにパッケージ化する必要があります。"},{"id":"docs/iota-basics/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、MWMと同じ数の0トリットが並ぶまで繰り返しハッシュ化を行います。 MWMが高いほど、プルーフオブワークは難しくなります。クライアントとしてIOTAネットワークと対話するときは、ネッ..."},{"id":"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/iota-basics/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ/から変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/iota-basics/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/iota-basics/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/iota-basics/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/iota-basics/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/iota-basics/0.1/references/tryte-alphabet","name":"トライト文字","summary":"この表は、トライトからトライトがエンコードされた文字への変換と、それに相当する10進数の値を表しています。"},{"id":"docs/iota-basics/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/iota-basics/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/the-tangle/0.1/introduction/overview","name":"タングル概要","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続を辿って各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態の..."},{"id":"docs/the-tangle/0.1/concepts/the-coordinator","name":"コーディネーター","summary":"コーディネーターは、同じアドレスから定期的にトランザクションのバンドルを作成、署名、および送信するクライアントアプリケーションです。これらのバンドルには、ノードが合意に達するために使用するマイルストーンと呼ばれるトランザクションが含まれています。マイルストーンがタングル内のトランザクションを直接または間接的に参照して承..."},{"id":"docs/the-tangle/0.1/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。"},{"id":"docs/the-tangle/0.1/concepts/incentives-in-the-tangle","name":"タングル内のインセンティブ","summary":"チップ選択アルゴリズムは強制されていません。その代わりに、ノードは、自分のトランザクションが確定される最良の機会を得るためにチップ選択アルゴリズムを使用するインセンティブがあります。"},{"id":"docs/the-tangle/0.1/concepts/proof-of-work","name":"プルーフオブワーク","summary":"プルーフオブワークは、計算は難しいが検証は簡単な数学的問題に対する答えです。 IOTAでは、プルーフオブワークはスパムトランザクションからネットワークを保護します。バンドル内の各トランザクションには、有効であることを証明するプルーフオブワークが含まれている必要があります。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iri/0.1/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。 IRIを実行するコンピューターはIRIノードと呼ばれます。"},{"id":"docs/iri/0.1/concepts/the-ledger","name":"台帳","summary":"ノードは、自分が受け取った有効なすべてのトランザクションを、組み込みの追加専用のRocksDBデータベースである台帳に格納することによって記録します。 IOTAネットワーク内の全ノードの集合データベースがタングルを構成します。"},{"id":"docs/iri/0.1/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/iri/0.1/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/iri/0.1/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/iri/0.1/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバーでIRIノードを実行する","summary":"Linuxサーバー上でIRIを実行すると、LinuxサーバーがIOTAネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、コンピュータはIRIノード用のLinuxサーバーになり、IOTAネットワークに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバーを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバーに接続します。"},{"id":"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/iri/0.1/how-to-guides/interact-with-an-iri-node","name":"ノードに情報をリクエストする","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/iri/0.1/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/iri/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"IRIのインストール、設定、または実行中に、これらの一般的な問題のいくつかを見かけることがあります。"},{"id":"docs/iri/0.1/references/api-reference","name":"APIリファレンス","summary":":::warning:\nこのAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。\n:::"},{"id":"docs/iri/0.1/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/iri/0.1/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/iri/0.1/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/iri/0.1/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/iri/0.1/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/hub/0.1/introduction/overview","name":"ハブ概要","summary":"ハブはアプリケーションにプラグインできるヘッドレスマルチユーザーウォレットです。gRPC APIを通して、ハブはIOTAトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、ID、預け入れアドレス、取り出しリクエストなどのユーザー情報を保存します..."},{"id":"docs/hub/0.1/concepts/sweeps","name":"スウィープ","summary":"スウィープは、ユーザーの取り出し操作を実行し、IOTAトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1つに転送するバンドルです。スウィープは、攻撃者が使用済みアドレスからトークンを盗む可能性を減らすためのオプションの安全機能です。"},{"id":"docs/hub/0.1/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/hub/0.1/how-to-guides/install-the-signing-server","name":"署名サーバーをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバーに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバーをインストールして実行します。"},{"id":"docs/hub/0.1/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本について..."},{"id":"docs/hub/0.1/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/hub/0.1/how-to-guides/integrate-hub","name":"ハブを暗号資産取引所に統合する","summary":"シナリオA： IOTAトークンが外部のオンラインウォレット（別名：ホットウォレット）に手動で転送される複数のユーザーアカウント。"},{"id":"docs/hub/0.1/references/api-reference","name":"APIリファレンス","summary":"タングルとハブデータベースへの接続を簡単にするために、ハブにはgRPC APIがあります。このAPIリファレンスを使用してメソッドを見つけ、メソッドが行うことを学んでください。"},{"id":"docs/hub/0.1/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/hub/0.1/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバに問い合わせることによって見つけることができます。"},{"id":"docs/hub/0.1/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/hub/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/compass/0.1/introduction/overview","name":"コンパス概要","summary":"コンパスはコーディネーターのオープンソース実装です。テストおよび開発の目的で、コンパスを使用して独自のIOTAネットワークを運用することができます。"},{"id":"docs/compass/0.1/how-to-guides/set-up-a-private-tangle","name":"プライベートタングルを設定する","summary":"自分のIOTAネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをIRIノードに接続することができます。そうすることで、自分のトランザクションを添付することができるプライベートタングルを持つことができます。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/compass/0.1/references/contribution-guidelines","name":"貢献ガイドライン","summary":""},{"id":"docs/trinity/0.1/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。"},{"id":"docs/trinity/0.1/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/trinity/0.1/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/trinity/0.1/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/trinity/0.1/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/trinity/0.1/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/trinity/0.1/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/trinity/0.1/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/receive-a-transaction","name":"トランザクションを受取る","summary":"トリニティには、トランザクションを受取り、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/trinity/0.1/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/trinity/0.1/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/trinity/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/utils/0.1/introduction/overview","name":"ユーティリティ","summary":"ユーティリティは、オープンソースのアプリケーションまたはプログラムであり、使用することも、適応させることも、自分のアプリケーションに組み込むこともできます。"},{"id":"docs/utils/0.1/mam-watcher/overview","name":"MAMウォッチャー概要","summary":"MAM（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。MAMウォッチャーを使用すると、チャネル上で暗号化されたメッセージに署名して送信し、そのチャネルを購読してメッセージを検証、復号化、および読み取ることができます。"},{"id":"docs/utils/0.1/one-command-tangle/overview","name":"ワンコマンドプライベートテストタングル","summary":"このアプリケーションを使用すると、単一のDockerコマンドを使用して独自のIOTAネットワークを設定できます。このコマンドを実行すると、独自のIOTAテストネットワークと2.7Pi（最大量）のテストIOTAトークンを使用できます。いかなる金銭的価値も危険にさらすことなく自分のアイデアやアプリケーションをテストするため..."},{"id":"docs/utils/0.1/raspberry-pi-pub-sub/overview","name":"Raspberry Piセンサーデータパブリッシャー","summary":"このアプリケーションは、Raspberry PiからDevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のDevnetノードでイベントストリーム（ZMQ）を購読し、データを受信したときに知らせるメッセージを表示します。"},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"P2Pエネルギーグリッド","summary":"エネルギーの供給はしばしば自動化されていますが、支払いシステムは統合するのに費用がかかり、そしてしばしば手動の介入を必要とします。IOTAを使用してピアツーピア（P2P）エネルギーグリッドを作成することで、電力の転送とその電力に対する支払いを自動化できます。この自動化により、インフラストラクチャはより動的になり、更新が..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"アプリケーションアーキテクチャ","summary":" P2Pエネルギーグリッドアプリケーションは、IOTAネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"P2Pエネルギーグリッドアプリをデプロイする","summary":"P2Pエネルギーグリッドアプリケーションの使用を開始するには、自身のアプリケーションをデプロイします。"},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"タングルデータストレージ概要","summary":"データは、官民組織のイノベーションを促進し、新たな収益源を生み出すために使用することができます。しかし、ベンダーに依存しないデータ検証方法がなければ、データを信頼することはできません。この設計図では、IOTAタングルをイミュータブルなデータ構造として使用し、サードパーティのストレージソリューション内のファイルの内容を検..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"アプリケーションアーキテクチャ","summary":"タングルデータストレージアプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"タングルデータストレージアプリをデプロイしてテストする","summary":"IPFSノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、IOTA財団のグラフィカルユーザーインターフェースを使用してファイルデータをアップロードし、ファイルデータを取得し、ハッシュを比較して内容を確認します。"},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"トラック&トレース概要","summary":"デューデリジェンスとベンダーに依存しないデータソースの両方が欠如しているため、流通ネットワーク内の回収可能資産は多くの場合、元の所有者に返却されません。この設計図では、IOTAタングルおよび他のIOTAテクノロジを使用して、IBCSグループが回収可能資産の回収のためのトラック&トレースシステムをどのように実施したかを説..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"アプリケーションアーキテクチャ","summary":"トラック&トレースアプリケーションはIOTA MAMプロトコルを使用して、回収可能資産にIDを付与し、MAMチャネルと呼ばれるトランザクションのストリームで回収可能資産を追跡します。"},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"トラック&トレースアプリをデプロイしてテストする","summary":"タングルでデータの追跡を開始するには、アプリケーションをデプロイし、IOTA財団のGUIを使用して資産を検索してアップロードします。"},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、使用済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。あなたはこれらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/how-to-guides/import-seed-state","name":"アカウントに既存のシードステートをインポートする","summary":"既存のシードステートを他の端末のアカウントにインポートすることをお勧めします。そのためには、まずシードステートをエクスポートして正しい形式にする必要があります。"},{"id":"docs/iota-go/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、使用済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-java/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。あなたはこれらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-java/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインはEventListenerインターフェースを実装しており、EventManagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のEventListenerを登録する必要はありません。"},{"id":"docs/iota-java/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、使用済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-js/0.1/how-to-guides/listen-to-events","name":"アカウント内のイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。あなたはこれらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。\nTo make payments, both the sender and the receiver need to have a CDA. The sende..."},{"id":"docs/iota-js/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/general/0.1/introduction/overview","name":"General overview","summary":"This section contains some prerequisite information that aims to help you complete some of our guides."},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"Expose your local device to the Internet","summary":"To connect a device to those outside of your local network, you need to expose it to the Internet. A common reason to expose your local device to the Internet i..."},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"Set up a Linux server on a virtual machine","summary":"Many of the IOTA tutorials and guides require a Linux operating system. If your computer is running a different operating system, you can use Linux inside a vir..."},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"Set up a single-board computer","summary":"A single board computer (SBC) is a small computer in which a single circuit board includes memory, input/output ports, a microprocessor and any other necessary ..."},{"id":"docs/general/0.1/references/troubleshooting","name":"Troubleshooting","summary":"Make sure that you selected a 64-bit version of Ubuntu in VirtualBox."},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTA Smart City Blueprints","summary":"This repository consists of examples implementing IOTA for Smart Cities"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTA is a clone of AstroPi, which is a project that used Raspberry Pis on the International Space Station (ISS) to keep astronauts up to date about their ..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"Build your own AstroPiOTA","summary":"In order to run AstroPiOTA, you must have the correct hardware and operating system for a Raspberry Pi."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"Run AstroPiOTA","summary":"The following instructions assume the operating system is configured. Because this installation has several components, scripts are included to make sure that e..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"Connect to the Raspberry Pi through SSH","summary":"If you want to run AstroPiOTA without a monitor and keyboard, you need it's network address to interact with it over SSH. To find the IP address of the Raspberr..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"Customize AstroPiOTA","summary":"The AstroPiOTA sender gathers sensor data from Sense HAT, publishes it to the scrolling marquee, and sends it in JSON format to a MAM channel on the Tangle. The..."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.306,1,33.114,2,43.089,3,33.114,4,3.519]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,5.255]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.263,4,5.106,5,26.021,6,26.021,7,26.021,8,26.021,9,26.021,10,26.021,11,26.021,12,26.021,13,26.021,14,26.021,15,26.021,16,21.24]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.234,4,3.415,17,14.532,18,32.14,19,28.58,20,28.58,21,28.58,22,32.14,23,32.14,24,4.831,25,32.14]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.237,4,4.477]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.096,4,4.767]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,2.873,4,3.256,17,14.108,26,30.639,27,20.002,28,30.639,29,30.639,30,30.639,31,30.639,32,30.639,33,10.627,34,30.639,35,30.639,36,30.639,37,30.639,38,30.639,39,30.639,40,14.317,41,30.639]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.413]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.133,4,4.824,42,34.507,43,34.507,44,34.507]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.413]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,3.183,4,4.06,17,11.904,24,4.32,33,11.18,45,15.395,46,15.395,47,9.573,48,15.395,49,4.833,50,8.596,51,23.461,52,11.728,53,9.233,54,28.664,55,15.395,56,10.228,57,15.395,58,10.5,59,15.378,60,12.567,61,11.058,62,15.395,63,21.005,64,13.69,65,9.605,66,19.603,67,20.644,68,10.023,69,10.023,70,23.622,71,13.69,72,15.395,73,11.728,74,12.567,75,10.5,76,10.5,77,9.605,78,15.395,79,11.728,80,12.567,81,15.395,82,14.801,83,11.058,84,10.5,85,9.233,86,13.69,87,19.282,88,10.023,89,14.167,90,18.711,91,13.69,92,15.395,93,15.395,94,18.711,95,15.395,96,15.395,97,12.567,98,13.69,99,11.728,100,15.395,101,10.023,102,11.728,103,12.567,104,15.395,105,15.395,106,15.395]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[82,19.947]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.324,4,4.493,17,7.208,24,6.207,49,6.127,82,11.371,88,12.706,107,19.518,108,11.706,109,11.282,110,9.634,111,9.916,112,8.663,113,9.916,114,15.932,115,9.634,116,17.356,117,17.356,118,19.518,119,17.356,120,19.518,121,19.518,122,15.932,123,17.356,124,17.356,125,17.356,126,17.356,127,17.356,128,17.356,129,17.356,130,17.356,131,17.356,132,13.312,133,19.518,134,14.868,135,11.706,136,10.544,137,17.356,138,8.249,139,17.356,140,14.019]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.413]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.271,24,4.479,40,13.927,113,15.142,141,29.804,142,29.804,143,26.503,144,29.804,145,29.804,146,24.328,147,29.804,148,21.407,149,26.503,150,29.804,151,29.804,152,29.804,153,29.804]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[82,19.947]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.314,4,4.518,24,5.256,40,10.08,49,9.503,82,12.21,88,14.043,108,12.938,109,12.47,110,10.648,111,10.96,112,9.574,113,17.768,115,10.648,116,19.182,117,19.182,119,19.182,123,19.182,124,19.182,125,19.182,126,19.182,127,19.182,128,19.182,129,19.182,130,19.182,131,19.182,132,14.713,138,9.117,143,19.182,154,21.571,155,21.571,156,21.571,157,21.571]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[158,43.974]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,3.125,4,4.454,50,15.383,53,16.524,113,13.998,140,28.457,158,24.499,159,15.375,160,27.551,161,27.551,162,24.499,163,24.499,164,27.551,165,27.551,166,27.551,167,27.551,168,27.551,169,27.551,170,27.551,171,27.551]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.413]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.345,24,3.85,27,13.411,33,8.884,101,16.675,102,19.513,135,15.363,172,25.614,173,17.47,174,20.908,175,25.614,176,20.908,177,22.777,178,22.161,179,17.47,180,14.301,181,27.787,182,34.041,183,15.363,184,25.614,185,25.614]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,5.255]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,3.125,4,3.961,24,5.147,113,19.997,159,13.936,186,20.753,187,30.449,188,33.142,189,20.753,190,20.753,191,21.363,192,20.753,193,20.753,194,20.753,195,20.753,196,20.753,197,20.753,198,20.753,199,34.999,200,20.753,201,20.09,202,20.753,203,29.455,204,20.753,205,22.439,206,20.753,207,20.753,208,20.753,209,20.753,210,20.753,211,20.753,212,20.753,213,20.753,214,20.753,215,20.753,216,20.753]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.413]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.63,4,4.05]],["docTitle/docs/iota-basics/0.1/introduction/overview",[4,5.255]],["docBody/docs/iota-basics/0.1/introduction/overview",[0,3.292,4,4.739,17,13.259,24,5.396,217,27.784,218,27.784,219,27.784,220,27.784,221,27.784,222,27.784,223,27.784,224,27.784,225,27.784,226,27.784,227,27.784]],["docTitle/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.413]],["docBody/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.282,4,2.525,24,4.864,33,8.241,40,11.102,49,7.458,66,16.205,83,23.244,89,14.25,180,13.265,228,23.759,229,23.759,230,23.759,231,23.759,232,23.759,233,23.759,234,23.759,235,23.759,236,23.759,237,23.759,238,32.362,239,23.759,240,23.759,241,23.759,242,23.759,243,23.759,244,23.759,245,21.127,246,23.759,247,23.759,248,23.759,249,23.759,250,23.759,251,23.759,252,23.759]],["docTitle/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.413]],["docBody/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.279,4,4.095,17,9.609,24,5.17,33,11.931,40,12.159,56,11.267,61,18.69,115,12.844,139,23.139,183,15.606,253,26.021,254,26.021,255,26.021,256,26.021,257,21.24,258,26.021,259,26.021,260,26.021,261,26.021,262,26.021,263,21.24,264,26.021,265,26.021,266,26.021]],["docTitle/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,3.413]],["docBody/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,2.852,24,5.241,27,18.259,267,34.874,268,34.874,269,34.874,270,34.874,271,34.874,272,34.874]],["docTitle/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.413]],["docBody/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.295,69,21.131,273,28.863,274,26.495,275,26.495,276,32.458,277,28.863,278,32.458,279,32.458]],["docTitle/docs/iota-basics/0.1/concepts/trinary",[56,21.412]],["docBody/docs/iota-basics/0.1/concepts/trinary",[56,15.597,280,36.023,281,36.023,282,36.023,283,36.023,284,36.023,285,36.023]],["docTitle/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.282,4,3.111,24,5.58,82,11.807,108,17.556,109,16.921,110,14.449,111,14.872,112,12.992,122,23.894,138,12.372,286,29.272,287,33.011,288,29.272,289,29.272,290,29.272]],["docTitle/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.295,4,2.978,24,5.426,47,12.024,49,8.797,82,11.303,108,16.806,109,16.198,110,13.832,111,14.237,112,12.437,113,14.237,114,22.873,138,11.844,291,28.022,292,28.022,293,28.022,294,24.918,295,28.022]],["docTitle/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.355,4,4.001,24,6.309,65,15.496,82,10.019,108,14.897,109,14.358,110,12.261,111,12.62,112,11.024,132,16.941,138,10.498,180,13.868,296,24.839,297,24.839,298,24.839,299,24.839,300,33.349]],["docTitle/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.273,4,3.544,17,9.173,24,6.309,82,10.019,108,14.897,109,14.358,110,12.261,111,12.62,112,11.024,113,12.62,114,20.275,122,20.275,136,18.017,138,10.498,183,20.001,301,22.087,302,24.839,303,20.275,304,24.839,305,24.839,306,24.839,307,27.222,308,24.839,309,24.839,310,24.839]],["docTitle/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.302,4,2.743,24,6.391,82,10.413,108,15.483,109,14.923,110,12.743,111,13.116,112,11.458,138,10.911,183,15.483,301,22.957,311,25.816,312,25.816,313,34.219,314,27.932,315,22.957,316,34.219,317,25.816,318,22.957,319,25.816]],["docTitle/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.413]],["docBody/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.349,17,8.237,24,5.782,27,11.678,33,7.736,56,9.658,82,8.997,108,13.378,109,12.894,110,11.01,111,11.332,112,9.9,113,11.332,138,9.427,183,13.378,257,18.207,320,22.305,321,19.834,322,22.305,323,22.305,324,22.305,325,22.305,326,22.305,327,22.305,328,22.305,329,30.986,330,22.305,331,22.305,332,14.521,333,22.305,334,22.305,335,22.305]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.413]],["docBody/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,2.984,336,37.678]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.413]],["docBody/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,2.945,263,30.065,274,30.065,337,22.09]],["docTitle/docs/iota-basics/0.1/references/security-levels",[0,3.413]],["docBody/docs/iota-basics/0.1/references/security-levels",[0,2.6,4,4.004,338,37.678]],["docTitle/docs/iota-basics/0.1/references/tryte-alphabet",[0,3.413]],["docBody/docs/iota-basics/0.1/references/tryte-alphabet",[0,2.6,83,27.063,339,37.678]],["docTitle/docs/iota-basics/0.1/references/units-of-iota-tokens",[4,5.255]],["docBody/docs/iota-basics/0.1/references/units-of-iota-tokens",[0,2.514,4,4.506,33,12.633,340,36.423,341,36.423]],["docTitle/docs/iota-basics/0.1/references/glossary",[0,3.413]],["docBody/docs/iota-basics/0.1/references/glossary",[0,3.283,4,4.306,33,10.798,51,18.332,56,13.48,159,15.52,205,17.108,342,22.458,343,22.458,344,22.458,345,22.458,346,22.458,347,22.458,348,22.458,349,22.458,350,22.458,351,22.458,352,22.458,353,22.458,354,22.458,355,22.458,356,22.458,357,22.458,358,22.458,359,22.458,360,22.458,361,22.458,362,22.458,363,22.458,364,22.458,365,22.458]],["docTitle/docs/the-tangle/0.1/introduction/overview",[0,3.413]],["docBody/docs/the-tangle/0.1/introduction/overview",[0,3.253,4,4.601,17,13.946,19,26.746,20,26.746,21,26.746,24,5.676,27,15.747,366,30.077,367,30.077,368,30.077,369,30.077]],["docTitle/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.413]],["docBody/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.314,4,3.389,17,13.44,24,5.886,33,14.232,56,10.069,115,15.741,370,23.254,371,23.254,372,31.89,373,31.89,374,23.254,375,23.254,376,23.254,377,23.254,378,23.254,379,23.254,380,23.254,381,23.254,382,23.254,383,23.254,384,23.254,385,23.254,386,23.254]],["docTitle/docs/the-tangle/0.1/concepts/tip-selection",[0,3.413]],["docBody/docs/the-tangle/0.1/concepts/tip-selection",[0,3.383,4,2.996,17,12.22,24,4.973,33,6.769,183,11.706,387,19.518,388,19.518,389,29.28,390,19.518,391,36.241,392,17.356,393,19.518,394,19.518,395,19.518,396,19.518,397,19.518,398,19.518,399,19.518,400,19.518,401,19.518,402,19.518,403,19.518,404,19.518,405,19.518,406,19.518,407,19.518]],["docTitle/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.413]],["docBody/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.163,68,27.217,136,16.709,183,18.549,408,30.928,409,20.135,410,30.928,411,28.515,412,30.928,413,27.502,414,38.428,415,30.928]],["docTitle/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.413]],["docBody/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.207,4,4.332,17,10.81,24,5.58,27,19.436,205,31.056,416,29.272,417,29.272,418,29.272,419,29.272,420,29.272,421,29.272,422,29.272,423,29.272,424,29.272]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.413]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.26,16,21.936,49,8.436,75,18.329,89,16.118,90,17.495,103,21.936,425,26.874,426,26.877,427,26.874,428,26.874,429,26.874,430,26.874,431,21.92,432,26.874,433,26.874,434,26.874,435,12.558,436,21.936,437,19.303,438,26.874,439,15.004]],["docTitle/docs/iota-js/0.1/README",[4,3.846,441,32.183]],["docBody/docs/iota-js/0.1/README",[0,3.133,4,3.719,47,10.091,49,4.307,82,10.775,85,8.229,86,12.201,87,17.631,88,17.39,89,16.021,109,7.931,159,9.458,177,31.121,263,11.2,275,11.2,389,20.349,411,14.732,441,12.201,442,6.412,443,13.721,444,9.352,445,9.358,446,13.721,447,13.721,448,13.721,449,13.721,450,13.721,451,13.721,452,13.721,453,40.871,454,13.721,455,30.299,456,12.201,457,13.721,458,13.721,459,13.721,460,13.721,461,13.721,462,13.721,463,13.721,464,13.721,465,13.721,466,13.721,467,13.721,468,13.721,469,13.721,470,13.721,471,13.721,472,13.721,473,13.721,474,13.721,475,21.6,476,13.721,477,13.721,478,13.721,479,19.207,480,13.721,481,13.721,482,13.721,483,13.721,484,13.721,485,13.721,486,13.721,487,13.721,488,13.721,489,10.452,490,13.721,491,13.721,492,9.855,493,13.721,494,13.721,495,12.201,496,9.855,497,13.721,498,7.413,499,13.721,500,13.721]],["docTitle/docs/iota-java/0.1/README",[4,3.846,90,23.561]],["docBody/docs/iota-java/0.1/README",[0,3.179,4,4.17,17,5.153,47,7.29,49,4.381,69,14.249,90,25.546,91,19.463,159,10.828,294,12.409,303,11.391,442,6.521,444,9.477,445,9.518,492,10.023,501,13.954,502,13.954,503,13.954,504,13.954,505,12.409,506,10.63,507,13.954,508,13.954,509,20.573,510,19.463,511,13.954,512,13.954,513,12.409,514,13.954,515,13.954,516,13.954,517,13.954,518,13.954,519,13.954,520,21.888,521,13.954,522,13.954,523,13.954,524,13.954,525,13.954,526,13.954,527,13.954,528,13.954,529,33.22,530,13.954,531,13.954,532,13.954,533,8.369,534,9.518,535,13.954,536,13.954,537,13.954,538,13.954,539,13.954,540,13.954,541,21.888,542,13.954,543,13.954,544,13.954,545,13.954,546,13.954,547,13.954,548,13.954,549,13.954,550,13.954,551,13.954,552,13.954,553,13.954,554,13.954,555,27.384,556,27.006,557,13.954,558,13.954,559,13.954,560,13.954,561,13.954,562,13.954,563,13.954,564,13.954,565,13.954,566,13.954,567,12.409,568,13.954]],["docTitle/docs/iota-go/0.1/README",[4,3.846,94,23.561]],["docBody/docs/iota-go/0.1/README",[0,3.311,4,4.243,17,6.476,47,5.84,49,5.505,75,11.96,84,26.302,94,22.417,97,14.314,98,15.593,115,8.656,159,11.013,205,19.853,442,8.194,444,7.592,445,11.96,567,15.593,569,17.535,570,17.535,571,17.535,572,17.535,573,14.314,574,17.535,575,17.535,576,17.535,577,17.535,578,17.535,579,17.535,580,17.535,581,17.535,582,17.535,583,17.535,584,17.535,585,17.535,586,17.535,587,26.062,588,17.535,589,17.535,590,17.535,591,34.434,592,26.062,593,17.535,594,17.535,595,17.535,596,17.535,597,17.535,598,17.535,599,17.535,600,17.535]],["docTitle/docs/iri/0.1/introduction/overview",[4,5.255]],["docBody/docs/iri/0.1/introduction/overview",[0,3,4,3.591,159,14.363,601,33.796,602,33.796,603,33.796,604,33.796,605,33.796,606,33.796,607,33.796]],["docTitle/docs/iri/0.1/concepts/the-ledger",[0,3.413]],["docBody/docs/iri/0.1/concepts/the-ledger",[0,3.295,4,3.318,24,5.81,99,23.785,137,27.764,159,11.055,608,31.222,609,31.222,610,31.222,611,25.486,612,31.222]],["docTitle/docs/iri/0.1/concepts/neighbor-iri-node",[159,17.509]],["docBody/docs/iri/0.1/concepts/neighbor-iri-node",[0,2.835,159,15.528,613,34.507,614,34.507,615,34.507,616,34.507,617,34.507,618,34.507]],["docTitle/docs/iri/0.1/concepts/transaction-validation",[0,3.413]],["docBody/docs/iri/0.1/concepts/transaction-validation",[0,3.295,4,3.196,17,11.107,159,16.117,619,30.077,620,37.764,621,30.077,622,30.077,623,30.077]],["docTitle/docs/iri/0.1/concepts/zero-message-queue",[0,3.413]],["docBody/docs/iri/0.1/concepts/zero-message-queue",[0,3.09,24,4.977,33,11.485,135,19.86,624,29.446,625,33.114,626,33.114,627,33.114,628,33.114,629,33.114,630,33.114,631,29.446]],["docTitle/docs/iri/0.1/concepts/local-snapshot",[0,3.413]],["docBody/docs/iri/0.1/concepts/local-snapshot",[0,3.301,24,5.43,27,12.005,63,20.389,83,16.469,159,14.942,632,22.929,633,22.929,634,22.929,635,22.929,636,20.389,637,22.929,638,31.583,639,22.929,640,28.084,641,31.583,642,22.929,643,31.583,644,22.929,645,22.929,646,22.929,647,22.929,648,22.929,649,22.929,650,28.084,651,22.929,652,22.929,653,22.929]],["docTitle/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[159,17.509]],["docBody/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[159,13.041,654,36.832,655,36.832,656,36.832,657,36.832]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[658,43.974]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[0,3.028,24,5.969,47,4.833,75,9.896,85,13.534,90,25.855,103,11.844,113,11.465,132,9.896,138,6.133,159,15.969,180,12.599,188,20.066,315,12.903,444,6.283,534,9.896,611,11.844,658,12.903,659,14.51,660,12.903,661,11.053,662,11.053,663,12.903,664,12.903,665,12.903,666,12.903,667,12.903,668,12.903,669,14.51,670,12.903,671,14.51,672,14.51,673,14.51,674,14.51,675,14.51,676,14.51,677,14.51,678,22.566,679,14.51,680,14.51,681,14.51,682,14.51,683,14.51,684,14.51,685,14.51,686,14.51,687,14.51,688,12.903,689,14.51,690,14.51,691,14.51,692,14.51,693,14.51,694,14.51,695,9.446,696,14.51,697,14.51,698,14.51,699,14.51,700,14.51,701,14.51,702,14.51,703,14.51,704,14.51,705,14.51,706,14.51,707,14.51,708,14.51,709,14.51,710,14.51,711,14.51,712,14.51,713,14.51,714,14.51,715,14.51,716,14.51,717,14.51,718,14.51,719,12.903,720,14.51,721,14.51,722,12.903,723,12.903,724,12.903,725,12.903,726,11.844,727,12.903]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[728,43.974]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[0,2.885,24,4.859,47,9.115,50,10.462,53,11.238,75,12.78,140,31.124,159,16.23,162,16.662,163,16.662,444,8.113,498,14.785,611,15.295,660,16.662,661,14.274,662,14.274,663,16.662,664,16.662,665,16.662,666,16.662,667,16.662,668,16.662,670,16.662,695,21.047,719,16.662,722,16.662,723,16.662,724,16.662,725,16.662,727,16.662,728,16.662,729,18.737,730,18.737,731,15.295,732,18.737,733,18.737,734,18.737,735,18.737,736,18.737,737,18.737,738,18.737,739,18.737,740,18.737,741,18.737,742,18.737,743,18.737,744,18.737,745,18.737,746,18.737,747,18.737,748,14.274,749,16.662,750,18.737,751,18.737]],["docTitle/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.413]],["docBody/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.172,24,5.197,752,26.229,753,26.229,754,26.229,755,26.229,756,34.579,757,26.229,758,26.229,759,41.126,760,26.229,761,26.229,762,26.229,763,14.644,764,26.229,765,26.229,766,26.229,767,18.839,768,26.229,769,26.229,770,26.229,771,26.229,772,26.229,773,26.229,774,26.229,775,26.229,776,26.229,777,26.229]],["docTitle/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.413]],["docBody/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.329,17,11.21,159,10.748,640,33.776,650,33.776,778,30.356,779,30.356,780,30.356,781,30.356,782,24.778]],["docTitle/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.413]],["docBody/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.252,17,9.764,24,3.974,33,9.171,47,12.935,56,11.448,82,17.287,99,29.586,110,13.051,111,13.434,112,11.735,138,11.175,431,25.738,783,26.44,784,26.44,785,23.512,786,23.512,787,26.44]],["docTitle/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.413]],["docBody/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.246,17,8.293,24,4.679,33,7.789,56,9.724,61,16.131,65,14.011,82,17.344,110,11.085,111,11.41,112,9.967,138,9.492,201,28.6,321,19.97,431,26.16,631,19.97,785,19.97,786,19.97,788,22.458,789,22.458,790,22.458,791,22.458,792,22.458,793,22.458,794,22.458,795,22.458,796,22.458,797,22.458,798,22.458,799,22.458]],["docTitle/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[509,27.57,800,32.183]],["docBody/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[0,3.219,24,4.907,27,9.981,33,6.612,47,6.35,84,13.002,85,11.434,90,12.411,101,12.411,136,14.972,201,18.902,509,14.523,661,14.523,800,16.952,801,19.064,802,32.651,803,19.064,804,19.064,805,19.064,806,19.064,807,19.064,808,19.064,809,19.064,810,19.064,811,19.064,812,19.064,813,19.064,814,19.064,815,19.064,816,19.064,817,19.064,818,19.064,819,16.952,820,19.064,821,27.713,822,14.523,823,19.064,824,19.064,825,19.064,826,19.064,827,19.064,828,19.064,829,19.064,830,19.064,831,19.064,832,19.064,833,19.064,834,19.064,835,19.064,836,19.064,837,19.064,838,19.064,839,15.561,840,19.064,841,19.064,842,19.064,843,19.064,844,19.064,845,19.064,846,19.064,847,19.064,848,19.064,849,19.064]],["docTitle/docs/iri/0.1/how-to-guides/update-the-iri",[159,17.509]],["docBody/docs/iri/0.1/how-to-guides/update-the-iri",[0,2.357,49,10.72,159,16.372,180,19.066,688,30.365,850,34.148,851,34.148,852,34.148]],["docTitle/docs/iri/0.1/references/troubleshooting",[0,3.413]],["docBody/docs/iri/0.1/references/troubleshooting",[0,2.935,24,4.831,159,15.059,853,32.14,854,20.052,855,32.14,856,32.14,857,32.14,858,32.14,859,32.14,860,32.14,861,32.14,862,32.14,863,32.14]],["docTitle/docs/iri/0.1/references/api-reference",[47,16.471]],["docBody/docs/iri/0.1/references/api-reference",[0,3.361,4,1.177,17,4.091,24,4.024,47,6.057,49,3.478,82,16.723,99,8.44,115,5.469,274,9.044,275,9.044,277,9.852,287,9.852,318,9.852,392,9.852,411,7.556,431,25.864,492,13.063,864,11.079,865,11.079,866,11.079,867,11.079,868,41.457,869,36.865,870,33.84,871,18.186,872,11.079,873,11.079,874,11.079,875,11.079,876,11.079,877,11.079,878,11.079,879,9.044,880,11.079,881,11.079,882,9.852,883,11.079,884,11.079,885,11.079,886,11.079,887,11.079,888,11.079,889,11.079,890,11.079,891,11.079]],["docTitle/docs/iri/0.1/references/api-errors",[47,16.471]],["docBody/docs/iri/0.1/references/api-errors",[0,2.734,47,11.893,159,12.643,180,15.383,389,30.181,409,17.936,411,18.791,870,34.214,892,27.551,893,35.231,894,35.709,895,27.551,896,27.551,897,27.551,898,27.551,899,18.791,900,27.551,901,27.551,902,17.188,903,22.489,904,27.551,905,27.551,906,27.551]],["docTitle/docs/iri/0.1/references/data-in-the-ledger",[0,3.413]],["docBody/docs/iri/0.1/references/data-in-the-ledger",[0,2.945,159,13.041,907,36.832,908,36.832]],["docTitle/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,3.413]],["docBody/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,2.63,636,33.894]],["docTitle/docs/iri/0.1/references/iri-configuration-options",[159,17.509]],["docBody/docs/iri/0.1/references/iri-configuration-options",[0,3.277,24,4.724,47,11.989,68,20.462,159,11.129,201,26.473,411,26.473,909,22.769,910,22.769,911,21.438,912,38.814,913,27.95,914,23.944,915,31.431,916,27.95,917,23.944,918,19.609,919,23.944,920,22.769,921,22.769,922,22.769]],["docTitle/docs/iri/0.1/references/zmq-events",[201,33.728]],["docBody/docs/iri/0.1/references/zmq-events",[0,2.907,24,5.414,27,18.86,33,12.494,201,24.569,923,36.023]],["docTitle/docs/hub/0.1/introduction/overview",[0,3.413]],["docBody/docs/hub/0.1/introduction/overview",[0,3.349,4,4.53,24,5.791,33,9.025,47,8.667,924,22.394,925,26.021,926,26.021,927,26.021,928,23.139,929,26.021,930,23.139,931,26.021,932,26.021,933,26.021]],["docTitle/docs/hub/0.1/concepts/sweeps",[0,3.413]],["docBody/docs/hub/0.1/concepts/sweeps",[0,3.318,4,3.967,24,5.611,33,10.244,40,13.802,930,26.264,934,29.535,935,29.535,936,20.145,937,29.535,938,29.535,939,29.535,940,29.535]],["docTitle/docs/hub/0.1/how-to-guides/install-hub",[0,3.413]],["docBody/docs/hub/0.1/how-to-guides/install-hub",[0,3.331,4,1.584,24,4.233,33,5.17,49,4.679,50,8.322,67,10.706,84,10.166,101,15,132,10.166,431,9.299,444,9.976,492,10.706,695,9.704,854,14.375,893,13.255,936,21.614,941,14.906,942,9.704,943,16.55,944,14.906,945,20.489,946,13.255,947,24.14,948,14.906,949,14.906,950,13.255,951,10.166,952,14.906,953,14.906,954,14.906,955,11.355,956,14.906,957,14.906,958,14.906,959,14.906,960,31.689,961,14.906,962,12.167,963,13.255,964,14.906,965,12.167,966,14.906,967,14.906,968,20.489,969,14.906,970,14.906,971,14.906,972,14.906,973,14.906,974,14.906,975,14.906,976,14.906,977,14.906,978,14.906,979,18.808,980,14.906,981,14.906,982,14.906,983,13.255,984,13.255,985,13.255,986,14.906,987,14.906,988,14.906,989,14.906,990,14.906,991,14.906,992,10.166,993,14.906,994,14.906,995,14.906]],["docTitle/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.413]],["docBody/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.325,4,1.925,49,5.687,56,7.844,84,12.356,101,11.794,132,12.356,444,7.844,695,11.794,854,11.302,928,16.11,936,12.356,942,11.794,943,13.012,945,16.11,946,16.11,947,24.152,950,16.11,965,14.788,968,33.169,984,16.11,985,16.11,996,34.985,997,18.116,998,18.116,999,18.116,1000,39.022,1001,31.705,1002,31.705,1003,18.116,1004,18.116,1005,26.698,1006,26.698,1007,16.11,1008,18.116,1009,18.116,1010,18.116,1011,18.116,1012,18.116,1013,18.116,1014,18.116,1015,18.116,1016,18.116,1017,18.116]],["docTitle/docs/hub/0.1/how-to-guides/get-started-with-the-api",[47,12.054,924,23.561]],["docBody/docs/hub/0.1/how-to-guides/get-started-with-the-api",[0,3.289,4,2.832,24,5.86,47,11.64,88,17.353,763,14.883,924,22.752,965,21.758,1018,26.655,1019,26.655,1020,26.655,1021,26.655,1022,26.655,1023,26.655,1024,23.703,1025,26.655,1026,26.655,1027,26.655,1028,26.655,1029,26.655,1030,21.758,1031,26.655]],["docTitle/docs/hub/0.1/how-to-guides/query-the-database",[1030,40.366]],["docBody/docs/hub/0.1/how-to-guides/query-the-database",[0,3.221,24,6.337,924,20.522,936,21.5,963,34.577,1030,31.74,1032,31.522,1033,31.522,1034,28.031,1035,31.522]],["docTitle/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.413]],["docBody/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.404,4,2.908,17,6.919,33,6.499,49,10.149,74,22.339,149,16.662,951,18.665,992,12.78,1036,32.33,1037,27.367,1038,18.737,1039,32.33,1040,18.737,1041,18.737,1042,18.737,1043,18.737,1044,18.737,1045,18.737,1046,18.737,1047,18.737,1048,18.737]],["docTitle/docs/hub/0.1/references/api-reference",[47,16.471]],["docBody/docs/hub/0.1/references/api-reference",[0,3.199,47,7.584,924,14.823,936,15.53,951,15.53,979,18.586,1049,22.769,1050,22.769,1051,22.769,1052,22.769,1053,22.769,1054,22.769,1055,22.769,1056,22.769,1057,22.769,1058,22.769,1059,22.769,1060,22.769,1061,22.769,1062,22.769,1063,22.769,1064,22.769,1065,22.769,1066,22.769,1067,22.769,1068,22.769,1069,22.769,1070,22.769,1071,22.769,1072,22.769,1073,22.769,1074,22.769,1075,22.769,1076,22.769,1077,22.769,1078,22.769,1079,22.769,1080,22.769,1081,22.769,1082,22.769,1083,22.769,1084,22.769,1085,22.769,1086,22.769,1087,22.769,1088,22.769,1089,17.345,1090,20.247]],["docTitle/docs/hub/0.1/references/command-line-flags",[0,3.413]],["docBody/docs/hub/0.1/references/command-line-flags",[0,2.514,1091,36.423,1092,36.423,1093,36.423,1094,36.423,1095,36.423]],["docTitle/docs/hub/0.1/references/database-tables",[0,3.413]],["docBody/docs/hub/0.1/references/database-tables",[0,3.285,47,10.205,1024,27.245,1034,27.245,1096,30.639,1097,30.639,1098,30.639,1099,30.639,1100,30.639,1101,30.639,1102,30.639,1103,30.639,1104,30.639,1105,30.639]],["docTitle/docs/hub/0.1/references/security-considerations",[0,3.413]],["docBody/docs/hub/0.1/references/security-considerations",[0,3.332,4,4.678,17,14.359,40,14.73,1106,31.522]],["docTitle/docs/hub/0.1/references/troubleshooting",[0,3.413]],["docBody/docs/hub/0.1/references/troubleshooting",[0,2.889,533,21.371,573,29.085,924,23.197,1107,35.632,1108,35.632,1109,35.632]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.413]],["docBody/docs/compass/0.1/introduction/overview",[0,3.164,4,4.952,24,4.977,33,11.485,1110,33.114,1111,33.114]],["docTitle/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.413]],["docBody/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.306,4,2.406,17,5.382,24,5.096,27,7.631,33,5.055,40,10.581,47,7.542,49,4.575,56,6.311,61,16.264,65,9.093,69,9.488,136,7.874,140,16.264,159,12.708,191,9.093,389,11.102,444,6.311,822,11.102,854,9.093,879,11.897,919,11.102,924,9.488,943,10.468,947,21.153,1112,14.574,1113,14.574,1114,9.94,1115,11.897,1116,11.897,1117,14.574,1118,14.574,1119,12.96,1120,14.574,1121,14.574,1122,14.574,1123,14.574,1124,14.574,1125,22.643,1126,14.574,1127,12.643,1128,14.574,1129,14.574,1130,14.574,1131,14.574,1132,14.574,1133,14.574,1134,14.574,1135,14.574,1136,14.574,1137,14.574,1138,14.574,1139,14.574,1140,20.135,1141,14.574,1142,12.96,1143,11.102,1144,14.574,1145,14.574,1146,14.574,1147,14.574,1148,14.574,1149,14.574,1150,14.574,1151,14.574,1152,14.574,1153,12.96,1154,14.574,1155,14.574,1156,14.574,1157,14.574,1158,24.692,1159,22.666,1160,14.574,1161,14.574,1162,11.102]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.413]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.038,4,3.139,50,16.491,140,29.404,159,14.495,337,17.714,498,15.957,919,22.5,947,22.5,992,20.145,1140,36.403,1142,26.264,1143,22.5,1163,24.109,1164,29.535,1165,24.109,1166,29.535,1167,29.535,1168,17.714,1169,29.535,1170,29.535]],["docTitle/docs/compass/0.1/references/contribution-guidelines",[0,3.413]],["docBody/docs/compass/0.1/references/contribution-guidelines",[0,2.945,444,18.479,445,25.121]],["docTitle/docs/trinity/0.1/introduction/overview",[0,3.413]],["docBody/docs/trinity/0.1/introduction/overview",[0,3.322,4,4.157,24,4.784,173,21.708,174,25.981,1171,31.828,1172,31.828,1173,31.828]],["docTitle/docs/trinity/0.1/concepts/hardware-wallet",[0,3.413]],["docBody/docs/trinity/0.1/concepts/hardware-wallet",[0,3.334,4,2.832,27,13.956,33,9.245,56,11.541,869,23.703,870,21.758,913,34.672,1174,38.991,1175,26.655,1176,23.703,1177,26.655,1178,38.991,1179,26.655,1180,26.655,1181,26.655]],["docTitle/docs/trinity/0.1/concepts/node-quorum",[0,3.413]],["docBody/docs/trinity/0.1/concepts/node-quorum",[0,2.965,33,12.92,1182,37.25]],["docTitle/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.336,24,6.365,66,21.708,176,25.981,178,20.721,179,21.708]],["docTitle/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.344,4,4.06,40,17.853,54,27.245,1183,30.639,1184,30.639,1185,30.639,1186,25.01]],["docTitle/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.304,50,13.265,52,18.099,53,14.25,173,16.205,1187,23.759,1188,23.759,1189,32.256,1190,23.759,1191,23.759,1192,36.804,1193,19.394,1194,23.759,1195,23.759,1196,23.759,1197,32.362,1198,23.759,1199,26.435,1200,23.759,1201,23.759,1202,30.042,1203,23.759,1204,23.759,1205,23.759,1206,23.759,1207,23.759]],["docTitle/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.124,159,13.189]],["docTitle/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.329,4,4.468,24,6.544,40,12.983,79,21.166,183,16.664,1208,22.68,1209,27.784,1210,22.68,1211,21.166,1212,24.707,1213,18.95]],["docTitle/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.284,24,4.784,40,18.278,183,23.46,1208,25.981,1213,26.679,1214,31.828,1215,25.981]],["docTitle/docs/trinity/0.1/how-to-guides/create-a-qr-code",[1215,40.366]],["docBody/docs/trinity/0.1/how-to-guides/create-a-qr-code",[0,2.749,4,3.484,24,4.927,79,24.973,112,14.55,115,16.182,1215,36.424,1216,32.783,1217,32.783,1218,32.783,1219,32.783,1220,32.783]],["docTitle/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.367,24,5.611,49,9.272,135,17.714,1221,29.535,1222,29.535,1223,26.264,1224,29.535,1225,29.535]],["docTitle/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.367,24,5.456,49,8.872,173,19.277,409,18.4,492,20.3,763,15.78,1226,28.263,1227,25.132,1228,28.263,1229,28.263,1230,28.263]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.41,24,3.942,67,18.839,178,17.076,555,17.889,1227,23.324,1231,26.229]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.313,1232,34.874,1233,26.566]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.33,17,10.907,173,29.337,992,20.145,1234,24.109,1235,29.535,1236,37.334,1237,29.535,1238,26.264,1239,26.264]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.307,4,3.667,49,10.833,159,12.218]],["docTitle/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.364,24,4.738,919,24.013,1240,31.522,1241,28.031,1242,31.522]],["docTitle/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.413]],["docBody/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.34,24,4.869,50,13.285,52,11.839,53,19.428,59,10.118,75,16.228,80,12.686,83,11.163,87,12.686,110,11.745,173,10.6,431,14.844,437,11.163,444,10.302,445,10.6,498,8.396,513,13.82,534,10.6,662,18.125,695,10.118,822,11.839,917,11.839,1007,21.158,1159,12.686,1193,12.686,1208,12.686,1243,15.541,1244,23.793,1245,15.541,1246,15.541,1247,15.541,1248,15.541,1249,15.541,1250,15.541,1251,15.541,1252,23.793,1253,23.793,1254,15.541,1255,15.541,1256,12.686,1257,15.541,1258,15.541,1259,15.541,1260,15.541,1261,15.541,1262,15.541,1263,15.541,1264,15.541,1265,15.541,1266,15.541,1267,15.541,1268,15.541,1269,15.541,1270,15.541,1271,15.541,1272,15.541,1273,13.82,1274,15.541,1275,15.541,1276,15.541,1277,11.839,1278,15.541,1279,15.541,1280,15.541]],["docTitle/docs/trinity/0.1/references/troubleshooting",[0,3.413]],["docBody/docs/trinity/0.1/references/troubleshooting",[0,3.397,4,2.952,24,5.396,1281,24.707,1282,19.957,1283,27.784,1284,27.784]],["docTitle/docs/utils/0.1/introduction/overview",[0,3.413]],["docBody/docs/utils/0.1/introduction/overview",[0,3.193,4,3.415,24,4.831,426,26.534,435,15.019,444,13.916,1285,28.58,1286,32.14,1287,32.14,1288,16.828,1289,32.14]],["docTitle/docs/utils/0.1/mam-watcher/overview",[435,23.108]],["docBody/docs/utils/0.1/mam-watcher/overview",[0,3.325,4,2.62,24,4.987,49,7.739,51,20.123,101,16.049,435,20.937,444,10.674,695,16.049,1290,24.652,1291,20.123,1292,21.921,1293,37.505,1294,24.652,1295,20.123,1296,24.652,1297,24.652,1298,24.652,1299,24.652,1300,21.921]],["docTitle/docs/utils/0.1/one-command-tangle/overview",[0,3.413]],["docBody/docs/utils/0.1/one-command-tangle/overview",[0,3.28,4,3.552,17,7.339,24,5.024,33,6.893,47,6.619,49,8.965,56,8.604,136,10.736,159,12.939,191,12.398,409,18.592,435,9.286,444,8.604,495,17.671,506,15.138,822,15.138,879,16.221,899,19.478,902,17.817,1116,16.221,1153,17.671,1159,16.221,1162,15.138,1213,13.554,1291,16.221,1300,17.671,1301,19.872,1302,19.872,1303,19.872,1304,19.872,1305,19.872,1306,19.872,1307,28.558,1308,19.872,1309,19.872,1310,19.872,1311,12.398,1312,19.872,1313,19.872,1314,19.872,1315,19.872,1316,15.138,1317,19.872,1318,19.872,1319,19.872,1320,19.872]],["docTitle/docs/utils/0.1/raspberry-pi-pub-sub/overview",[1288,18.949,1321,18.949]],["docBody/docs/utils/0.1/raspberry-pi-pub-sub/overview",[0,3.265,4,3.825,49,7.148,89,13.656,113,15.969,135,13.656,136,12.301,307,18.586,435,10.64,444,9.859,695,14.823,763,12.713,882,20.247,1127,12.713,1288,16.456,1291,18.586,1292,20.247,1321,11.921,1322,22.769,1323,35.996,1324,35.996,1325,22.769,1326,22.769,1327,22.769,1328,22.769,1329,22.769,1330,22.769,1331,22.769,1332,22.769,1333,31.431,1334,31.431,1335,22.769,1336,22.769,1337,22.769]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.413]],["docBody/docs/blueprints/0.1/introduction/overview",[0,3.196,4,4.676,134,21.908,136,15.537,1127,20.495,1338,23.475,1339,28.759,1340,19.615,1341,36.708,1342,23.475,1343,28.759,1344,19.615,1345,28.759,1346,23.475,1347,19.615,1348,23.475,1349,28.759]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.413]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.312,4,3.144,16,17.048,24,3.139,33,7.244,47,9.855,56,9.043,138,8.827,426,24.614,435,13.826,444,9.043,1127,20.869,1233,15.91,1338,17.048,1350,20.885,1351,20.885,1352,20.885,1353,20.885,1354,20.885,1355,15.91,1356,20.885,1357,20.885,1358,20.885,1359,15.001,1360,20.885,1361,20.885,1362,20.885,1363,20.885,1364,20.885,1365,20.885,1366,20.885,1367,20.885,1368,17.048,1369,18.571,1370,17.048,1371,20.181,1372,17.048,1373,17.048]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.413]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.299,4,2.639,49,7.797,138,10.498,942,16.17,1127,13.868,1288,13.005,1321,13.005,1338,20.275,1374,24.839,1375,17.841,1376,24.839,1377,22.087,1378,24.839,1379,18.922,1380,20.275,1381,24.839,1382,24.839,1383,22.087,1384,24.839,1385,24.839,1386,24.839,1387,22.087,1388,18.922,1389,18.922,1390,22.087,1391,22.087,1392,22.087,1393,22.087,1394,22.087,1395,18.922,1396,22.087]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.413]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.32,4,2.91,24,4.651,47,12.374,49,4.476,56,6.173,60,22.351,65,8.895,79,10.861,82,5.751,110,7.038,111,7.244,112,6.328,138,13.078,435,14.459,916,12.678,951,9.724,1199,10.241,1233,10.861,1256,11.638,1288,7.465,1321,7.465,1379,16.957,1380,11.638,1383,12.678,1387,12.678,1388,10.861,1389,10.861,1390,12.678,1391,12.678,1392,12.678,1393,12.678,1394,12.678,1395,10.861,1396,12.678,1397,27.094,1398,10.861,1399,24.349,1400,24.349,1401,20.859,1402,10.861,1403,12.678,1404,11.638,1405,14.258,1406,14.258,1407,14.258,1408,14.258,1409,14.258,1410,14.258,1411,22.259,1412,14.258,1413,14.258,1414,14.258,1415,19.794,1416,12.678,1417,14.258,1418,14.258,1419,14.258,1420,14.258,1421,14.258,1422,14.258,1423,14.258,1424,14.258,1425,14.258,1426,14.258,1427,22.259]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.413]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.3,4,4.036,88,19.762,134,23.124,138,12.83,426,23.697,444,13.144,942,19.762,1340,20.704,1379,23.124,1428,30.356,1429,30.356]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.413]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.352,4,2.528,17,10.676,27,8.137,33,8.252,49,9.076,56,12.518,61,17.09,65,14.844,82,6.269,85,9.321,89,14.27,134,11.839,199,28.805,273,25.708,509,11.839,942,10.118,951,19.718,1189,12.686,1340,23.815,1371,16.228,1375,17.09,1404,12.686,1430,13.82,1431,10.6,1432,23.793,1433,15.541,1434,15.541,1435,15.541,1436,15.541,1437,15.541,1438,15.541,1439,15.541,1440,15.541,1441,15.541,1442,15.541,1443,15.541,1444,15.541,1445,15.541,1446,15.541,1447,15.541,1448,23.793,1449,15.541,1450,23.793,1451,15.541,1452,15.541,1453,15.541,1454,15.541,1455,15.541,1456,15.541]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1344,33.728]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,2.873,24,4.605,73,23.34,426,25.972,435,17.853,1342,25.01,1344,26.057,1371,26.057,1372,25.01,1373,25.01,1431,20.897,1457,30.639,1458,30.639,1459,30.639,1460,17.711,1461,30.639]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[0,3.413]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,3.336,4,1.598,47,13.032,49,4.722,138,9.807,181,18.941,435,18.284,942,9.793,951,10.26,1115,18.941,1285,13.376,1342,29.675,1344,24.796,1375,10.804,1377,13.376,1431,24.796,1462,15.042,1463,15.042,1464,15.042,1465,15.042,1466,15.042,1467,12.279,1468,28.328,1469,15.042,1470,15.042,1471,15.042,1472,15.042,1473,15.042,1474,15.042,1475,23.204,1476,15.042,1477,15.042,1478,15.042,1479,15.042,1480,15.042,1481,15.042,1482,15.042,1483,15.042,1484,15.042,1485,15.042,1486,15.042,1487,15.042,1488,28.328,1489,15.042,1490,15.042,1491,15.042,1492,15.042,1493,15.042,1494,15.042,1495,15.042]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1344,33.728]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,3.261,4,4.416,24,3.623,47,10.886,65,15.041,82,16.761,138,13.814,435,15.273,444,10.439,1256,19.679,1288,12.622,1321,12.622,1344,27.115,1399,21.438,1402,18.365,1403,21.438,1404,19.679,1496,24.108,1497,24.108,1498,24.108,1499,37.081,1500,24.108]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.413]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.356,4,4.279,24,4.285,138,12.049,426,25.122,444,12.344,1371,24.897,1501,23.271,1502,28.509]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.413]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.205,47,12.343,49,9.164,82,8.266,303,16.728,942,13.341,1127,18.986,1168,20.395,1189,27.758,1346,27.758,1375,20.969,1402,15.611,1430,18.223,1431,25.277,1501,27.758,1503,20.493,1504,18.223,1505,18.223,1506,20.493,1507,20.493,1508,34.005,1509,20.493,1510,20.493,1511,20.493,1512,20.493,1513,20.493,1514,20.493,1515,20.493,1516,15.611,1517,20.493,1518,20.493,1519,20.493,1520,20.493,1521,20.493,1522,20.493,1523,20.493,1524,16.728,1525,20.493,1526,20.493,1527,20.493,1528,20.493]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.413]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.05,4,4.36,24,3.495,47,7.745,82,9.38,444,10.069,1127,22.91,1168,25.42,1346,33.494,1431,28.907,1501,33.494,1504,20.678,1505,20.678,1524,29.709,1529,23.254,1530,36.395,1531,23.254,1532,23.254,1533,23.254,1534,23.254]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[0,3.413]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,3.379,4,2.543,24,3.597,138,10.115,426,23.047,435,15.197,839,19.535,1347,16.323,1348,19.535,1371,22.182,1372,19.535,1373,19.535,1535,23.932,1536,23.932,1537,21.282,1538,23.932,1539,23.932,1540,23.932,1541,23.932]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[0,3.413]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,3.095,4,3.961,17,7.664,33,7.198,49,6.515,89,12.447,435,18.392,1347,23.355,1348,27.951,1370,16.94,1375,14.906,1542,20.753,1543,20.753,1544,20.753,1545,20.753,1546,20.753,1547,20.753,1548,20.753,1549,20.753,1550,26.193,1551,21.157,1552,29.455,1553,20.753,1554,20.753,1555,20.753,1556,20.753,1557,20.753,1558,20.753,1559,20.753,1560,20.753,1561,20.753,1562,20.753,1563,20.753,1564,20.753,1565,20.753,1566,20.753,1567,20.753,1568,20.753,1569,20.753,1570,20.753,1571,20.753,1572,20.753,1573,20.753,1574,20.753,1575,20.753,1576,20.753,1577,20.753,1578,20.753,1579,20.753,1580,20.753]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.413]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.013,4,3.629,138,14.433,444,14.786,1431,23.29,1581,34.148,1582,40.819,1583,34.148,1584,34.148]],["docTitle/docs/iota-go/0.1/introduction/overview",[0,3.413]],["docBody/docs/iota-go/0.1/introduction/overview",[0,3.252,4,4.297,24,4.322,47,9.579,49,9.028,442,18.894,1585,23.475,1586,23.475,1587,23.475,1588,23.475,1589,23.475,1590,23.475,1591,23.475,1592,23.475,1593,23.475,1594,23.475,1595,23.475]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.413]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.343,4,2.323,24,5.294,40,14.277,47,7.28,49,6.862,60,17.843,110,10.79,111,11.106,112,9.702,763,12.205,1379,16.652,1516,16.652,1596,17.843,1597,21.859,1598,21.859,1599,21.859,1600,21.859,1601,21.859,1602,19.438,1603,21.859,1604,21.859,1605,19.438,1606,16.652,1607,21.859,1608,21.859,1609,21.859,1610,21.859,1611,21.859,1612,21.859,1613,30.553,1614,21.859,1615,21.859,1616,21.859,1617,21.859]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.413]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.34,24,4.831,763,17.945,1618,32.14,1619,26.235,1620,32.14,1621,32.14]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.413]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.24,24,6.391,113,13.116,442,21.154,1551,18.543,1622,21.073,1623,21.073,1624,21.073,1625,21.073,1626,21.073,1627,25.816,1628,25.816,1629,25.816,1630,25.816,1631,25.816,1632,21.073,1633,21.073,1634,21.073,1635,21.073,1636,25.816,1637,22.957]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.413]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.33,24,5.611,94,19.228,178,19.228,179,20.145,506,22.5,763,16.491,1638,29.535,1639,29.535,1640,29.535,1641,29.535,1642,29.535,1643,29.535]],["docTitle/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.413]],["docBody/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.336,24,4.784,40,14.873,49,9.992,1644,31.828,1645,25.981,1646,31.828,1647,31.828]],["docTitle/docs/iota-go/0.1/references/cda-advice",[442,23.108]],["docBody/docs/iota-go/0.1/references/cda-advice",[0,2.935,40,15.019,442,18.388,1648,26.235,1649,26.235,1650,26.235,1651,32.121,1652,26.235,1653,26.235,1654,26.235,1655,26.235,1656,26.235,1657,26.235,1658,26.235]],["docTitle/docs/iota-java/0.1/introduction/overview",[0,3.413]],["docBody/docs/iota-java/0.1/introduction/overview",[0,3.252,4,4.297,24,4.322,47,9.579,49,9.028,442,18.894,1585,23.475,1586,23.475,1587,23.475,1588,23.475,1589,23.475,1590,23.475,1591,23.475,1592,23.475,1593,23.475,1594,23.475,1595,23.475]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.413]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.37,4,2.68,24,5.064,40,15.744,49,7.917,69,16.419,90,16.419,110,12.449,111,12.814,112,11.194,442,11.785,763,14.081,1516,19.213,1596,20.587,1659,25.221,1660,25.221,1661,25.221,1662,25.221,1663,25.221]],["docTitle/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.413]],["docBody/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.295,178,19.581,332,19.581,496,21.604,763,16.793,1619,24.551,1664,30.077,1665,24.551,1666,24.551,1667,21.604,1668,30.077,1669,24.551,1670,19.581,1671,26.746,1672,30.077]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.413]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.098,24,6.381,113,14.484,442,21.992,1622,23.271,1623,23.271,1624,23.271,1625,23.271,1626,23.271,1632,23.271,1633,23.271,1634,23.271,1635,23.271,1637,25.351]],["docTitle/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.413]],["docBody/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.247,17,11.53,33,10.829,101,20.326,1673,31.222,1674,41.986,1675,41.986,1676,31.222,1677,31.222,1678,31.222]],["docTitle/docs/iota-java/0.1/references/cda-advice",[442,23.108]],["docBody/docs/iota-java/0.1/references/cda-advice",[0,2.935,40,15.019,442,18.388,1648,26.235,1649,26.235,1650,26.235,1651,32.121,1652,26.235,1653,26.235,1654,26.235,1655,26.235,1656,26.235,1657,26.235,1658,26.235]],["docTitle/docs/iota-js/0.1/introduction/overview",[0,3.413]],["docBody/docs/iota-js/0.1/introduction/overview",[0,3.252,4,4.297,24,4.322,47,9.579,49,9.028,442,18.894,1585,23.475,1586,23.475,1587,23.475,1588,23.475,1589,23.475,1590,23.475,1591,23.475,1592,23.475,1593,23.475,1594,23.475,1595,23.475]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.413]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.341,4,3.056,49,9.028,82,11.6,108,17.248,109,16.624,110,14.196,111,14.611,112,12.764,178,18.722,763,16.057,1596,23.475,1679,28.759,1680,28.759,1681,28.759]],["docTitle/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.413]],["docBody/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.348,24,4.784,82,12.839,442,14.873,763,17.771,1619,25.981,1682,31.828]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.413]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.144,4,2.525,24,6.214,113,12.071,442,21.051,1212,21.127,1213,22.072,1622,19.394,1623,19.394,1624,19.394,1625,19.394,1626,19.394,1632,19.394,1633,19.394,1634,19.394,1635,19.394,1670,15.468,1671,21.127,1683,18.099,1684,28.777,1685,26.435,1686,23.759,1687,21.127,1688,23.759,1689,23.759,1690,23.759,1691,23.759,1692,23.759,1693,23.759]],["docTitle/docs/iota-js/0.1/references/cda-advice",[442,23.108]],["docBody/docs/iota-js/0.1/references/cda-advice",[0,2.935,40,15.019,442,18.388,1648,26.235,1649,26.235,1650,26.235,1651,32.121,1652,26.235,1653,26.235,1654,26.235,1655,26.235,1656,26.235,1657,26.235,1658,26.235]],["docTitle/docs/general/0.1/introduction/overview",[66,24.684,1694,32.183]],["docBody/docs/general/0.1/introduction/overview",[4,4.16,66,23.964,479,23.897,489,20.472,914,20.472,1089,20.472,1127,15.004,1311,16.766,1401,20.472,1460,20.31,1687,23.897,1694,23.897,1695,35.135,1696,19.303,1697,23.897,1698,26.874,1699,21.936,1700,21.936,1701,25.236,1702,21.936,1703,26.874,1704,18.329,1705,20.472,1706,20.472,1707,20.472,1708,16.766,1709,20.472,1710,26.874,1711,26.874,1712,26.874,1713,23.897,1714,21.936]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[918,14.697,1355,17.946,1715,20.949,1716,19.23]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,0.378,4,0.583,50,9.249,53,3.289,58,14.569,59,10.784,68,10.784,69,8.807,71,14.73,73,4.178,77,10.335,85,3.289,94,6.444,115,6.678,138,2.318,146,4.477,148,3.939,178,3.57,179,13.057,180,22.215,191,8.44,337,16.672,409,3.57,426,3.422,496,7.11,498,5.348,510,4.877,533,5.937,555,15.882,726,11.043,731,4.477,748,4.178,767,28.779,782,4.477,854,3.422,899,6.751,902,3.422,911,17.034,914,7.541,918,19.362,936,9.227,943,3.939,962,4.477,1089,10.306,1114,6.751,1168,8.114,1211,4.178,1282,9.717,1316,4.178,1355,27.36,1359,7.11,1397,16.272,1398,12.619,1401,4.178,1460,9.576,1551,3.939,1606,4.178,1665,4.477,1666,4.477,1667,3.939,1669,4.477,1670,8.807,1683,7.541,1685,17.939,1696,7.11,1700,8.08,1701,13.75,1702,4.477,1704,6.751,1705,4.178,1706,10.306,1708,8.44,1709,4.178,1715,17.023,1716,22.691,1717,9.899,1718,4.877,1719,4.877,1720,4.877,1721,27.598,1722,23.642,1723,30.933,1724,13.528,1725,16.565,1726,30.063,1727,24.975,1728,5.484,1729,5.484,1730,4.877,1731,5.484,1732,5.484,1733,16.272,1734,5.484,1735,21.36,1736,4.477,1737,5.484,1738,5.484,1739,5.484,1740,8.802,1741,4.877,1742,4.477,1743,4.477,1744,7.11,1745,4.477,1746,4.477,1747,17.436,1748,9.899,1749,9.717,1750,13.528,1751,4.877,1752,14.73,1753,4.477,1754,4.877,1755,5.484,1756,5.484,1757,5.484,1758,4.877,1759,5.484,1760,4.178,1761,9.899,1762,5.484,1763,11.043,1764,4.178,1765,4.178,1766,12.03,1767,5.484,1768,8.08,1769,5.484,1770,5.484,1771,4.477,1772,5.484,1773,4.877,1774,5.484,1775,5.484,1776,5.484,1777,5.484,1778,19.144,1779,5.484,1780,4.178,1781,5.484,1782,4.877,1783,5.484,1784,9.899,1785,9.899,1786,5.484,1787,23.286,1788,16.565,1789,12.03,1790,4.178,1791,5.484,1792,5.484,1793,5.484,1794,5.484,1795,19.144,1796,4.477,1797,9.899,1798,5.484,1799,4.477,1800,4.477,1801,4.477,1802,9.899,1803,4.178,1804,5.484,1805,5.484,1806,5.484,1807,4.877,1808,8.802,1809,13.528,1810,5.484,1811,5.484,1812,4.877,1813,4.877,1814,7.541,1815,5.484,1816,5.484,1817,5.484,1818,9.899,1819,4.477,1820,9.899,1821,3.939,1822,4.877,1823,5.484,1824,5.484,1825,5.484]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[50,9.75,1311,10.894,1397,13.302,1708,10.894,1745,14.254,1746,14.254]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,0.467,4,0.719,33,2.345,50,23.887,53,15.774,56,2.928,58,4.612,59,7.769,68,12.579,76,4.612,77,12.055,80,5.52,84,4.612,94,7.769,102,5.151,115,3.338,135,4.056,179,4.612,180,12.313,191,12.055,307,5.52,314,5.52,332,7.769,337,16.784,489,9.091,498,16.608,533,15.774,534,4.612,555,8.139,661,5.151,726,15.772,731,18.001,749,6.013,767,15.84,854,9.992,899,4.612,902,9.992,911,10.924,914,5.151,943,4.857,955,9.091,962,5.52,1114,16.605,1162,5.151,1168,14.602,1199,17.487,1202,13.074,1223,6.013,1311,7.445,1316,5.151,1359,21.155,1370,5.52,1380,9.741,1397,31.761,1402,9.091,1460,17.025,1467,9.741,1605,6.013,1666,5.52,1667,4.857,1670,4.402,1685,4.857,1701,11.504,1704,4.612,1705,5.151,1706,9.091,1708,12.055,1709,5.151,1718,6.013,1719,6.013,1721,6.013,1722,5.151,1736,13.074,1740,6.013,1741,6.013,1742,9.741,1743,18.001,1744,17.487,1745,24.041,1746,24.041,1747,9.741,1749,4.857,1754,6.013,1763,5.52,1764,5.151,1765,5.151,1768,5.52,1771,5.52,1803,5.151,1808,14.242,1813,6.013,1819,19.873,1821,4.857,1826,6.762,1827,8.139,1828,13.178,1829,6.762,1830,4.857,1831,5.52,1832,19.61,1833,5.52,1834,6.013,1835,9.741,1836,6.762,1837,6.762,1838,6.762,1839,6.013,1840,6.762,1841,6.762,1842,6.013,1843,6.762,1844,6.762,1845,6.762,1846,6.762,1847,6.762,1848,10.612,1849,9.741,1850,6.762,1851,6.013,1852,6.762,1853,10.612,1854,6.762,1855,6.762,1856,5.52,1857,5.52,1858,11.934,1859,5.52,1860,6.762,1861,6.762,1862,6.762,1863,5.151,1864,6.762,1865,5.52,1866,11.934,1867,6.762,1868,6.762,1869,6.762,1870,19.873,1871,6.013,1872,6.013,1873,6.762,1874,6.013,1875,21.746,1876,5.52,1877,5.52,1878,6.762,1879,10.612,1880,6.762,1881,6.762,1882,19.322,1883,6.762,1884,6.762,1885,6.762,1886,6.013,1887,6.762,1888,6.762,1889,6.013,1890,15.772,1891,5.52]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[1311,12.513,1708,12.513,1828,13.68,1892,17.836,1893,16.372]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,1.49,4,0.457,24,1.657,49,1.349,50,7.654,52,3.275,56,1.861,58,2.932,59,5.16,64,3.822,67,14.328,69,2.798,73,10.443,76,2.932,77,15.215,85,2.578,102,8.4,115,7.923,148,9.847,179,10.948,180,17.702,191,6.879,245,3.822,332,8.925,337,19.398,496,3.088,498,5.957,505,3.822,506,8.4,533,4.753,555,7.521,624,9.805,748,3.275,767,20.568,782,6.469,854,2.682,899,10.948,902,17.286,903,9.001,911,21.157,917,3.275,918,6.879,992,5.406,1114,18.209,1143,3.275,1163,6.469,1165,3.509,1186,19.907,1193,3.509,1202,3.509,1273,3.822,1311,14.385,1316,3.275,1321,5.773,1340,5.406,1355,20.338,1401,3.275,1415,3.822,1460,16.553,1537,3.822,1551,5.693,1602,3.822,1606,3.275,1667,11.53,1683,3.275,1685,16.561,1696,3.088,1700,3.509,1701,13.012,1704,2.932,1705,6.038,1706,6.038,1708,16.656,1713,3.822,1714,3.509,1716,9.001,1722,17.564,1723,14.274,1733,6.038,1736,16.283,1742,6.469,1743,9.001,1744,7.92,1749,14.328,1752,14.274,1760,3.275,1763,3.509,1766,9.805,1771,6.469,1780,21.107,1782,3.822,1796,6.469,1801,3.509,1807,3.822,1812,16.109,1821,5.693,1822,14.274,1827,2.932,1828,10.948,1832,9.805,1834,3.822,1835,3.509,1842,3.822,1848,7.048,1849,3.509,1851,3.822,1865,11.191,1872,3.822,1875,15.726,1876,6.469,1879,20.503,1886,7.048,1892,12.191,1893,14.788,1894,37.621,1895,7.925,1896,3.822,1897,4.299,1898,4.299,1899,4.299,1900,4.299,1901,4.299,1902,14.274,1903,4.299,1904,4.299,1905,3.822,1906,4.299,1907,4.299,1908,4.299,1909,4.299,1910,3.822,1911,4.299,1912,7.925,1913,7.925,1914,4.299,1915,4.299,1916,13.8,1917,4.299,1918,21.585,1919,25.464,1920,16.052,1921,4.299,1922,4.299,1923,4.299,1924,4.299,1925,9.805,1926,4.299,1927,12.191,1928,12.191,1929,7.925,1930,4.299,1931,7.048,1932,4.299,1933,7.925,1934,4.299,1935,4.299,1936,3.822,1937,4.299,1938,3.822,1939,7.048,1940,11.027,1941,7.925,1942,23.741,1943,7.925,1944,7.925,1945,12.191,1946,7.925,1947,7.048,1948,7.925,1949,7.925,1950,4.299,1951,7.925,1952,4.299,1953,4.299,1954,3.822,1955,4.299,1956,4.299,1957,12.191,1958,11.027,1959,11.027,1960,3.822,1961,4.299,1962,3.275,1963,9.001,1964,4.299,1965,4.299,1966,4.299,1967,4.299,1968,4.299,1969,4.299,1970,4.299,1971,4.299,1972,4.299,1973,4.299,1974,4.299,1975,4.299,1976,3.822,1977,3.822,1978,4.299,1979,4.299,1980,11.027,1981,7.925,1982,13.709,1983,4.299,1984,4.299,1985,4.299,1986,7.925,1987,4.299,1988,6.469,1989,4.299,1990,4.299,1991,4.299,1992,4.299,1993,4.299,1994,4.299,1995,11.027,1996,4.299,1997,4.299,1998,6.469,1999,4.299,2000,4.299,2001,4.299,2002,4.299,2003,4.299,2004,4.299,2005,4.299,2006,4.299,2007,4.299]],["docTitle/docs/general/0.1/references/troubleshooting",[2008,43.974]],["docBody/docs/general/0.1/references/troubleshooting",[68,20.326,445,21.295,534,21.295,662,29.446,854,19.479,1119,27.764,1165,25.486,1670,20.326,1760,23.785,1800,25.486,1814,23.785,1827,21.295,1828,21.295,1853,27.764,2008,27.764,2009,31.222,2010,31.222,2011,31.222,2012,25.486,2013,31.222]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,2.503,1368,19.23,2014,20.949,2015,20.949]],["docBody/docs/smartcity/0.1/introduction/overview",[4,3.456,33,8.301,112,10.622,115,16.053,136,12.93,409,15.58,435,11.183,439,20.626,918,20.29,1127,13.362,1288,12.53,1321,12.53,1340,16.323,1347,16.323,1368,26.547,1371,16.323,1388,18.231,1389,18.231,1460,13.834,1467,19.535,1699,19.535,1707,18.231,1714,19.535,1733,18.231,1790,18.231,1827,16.323,1859,19.535,1877,19.535,2014,28.92,2015,21.282,2016,23.932,2017,23.932,2018,23.932,2019,23.932,2020,21.282,2021,21.282,2022,21.282,2023,23.932,2024,19.535,2025,21.282,2026,21.282,2027,21.282,2028,21.282,2029,23.932,2030,21.282,2031,23.932]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[439,27.61]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[76,9.94,77,9.093,89,8.741,97,11.897,112,6.469,115,7.194,135,8.741,136,12.233,314,11.897,435,12.976,436,11.897,437,10.468,439,22.694,498,12.233,533,8.741,918,14.127,1116,11.897,1127,20.039,1210,11.897,1211,11.102,1213,9.94,1233,11.102,1234,11.897,1239,12.96,1277,17.249,1288,11.855,1311,9.093,1321,11.855,1347,9.94,1388,11.102,1389,11.102,1395,21.153,1398,11.102,1460,18.1,1645,11.897,1699,11.897,1707,21.153,1733,11.102,1760,11.102,1768,11.897,1790,11.102,1828,9.94,1830,10.468,1835,11.897,1859,11.897,1877,11.897,1938,12.96,1947,12.96,2020,12.96,2021,20.135,2022,12.96,2024,18.483,2025,12.96,2026,12.96,2027,12.96,2028,12.96,2032,14.574,2033,14.574,2034,12.96,2035,14.574,2036,24.354,2037,22.49,2038,20.135,2039,20.135,2040,14.574,2041,14.574,2042,14.574,2043,12.96,2044,14.574,2045,14.574,2046,14.574,2047,14.574,2048,33.907,2049,20.135,2050,14.574,2051,14.574,2052,14.574,2053,14.574,2054,14.574,2055,14.574,2056,14.574,2057,14.574,2058,14.574,2059,14.574,2060,14.574,2061,14.574,2062,14.574,2063,14.574,2064,12.96,2065,14.574,2066,11.897,2067,12.96,2068,12.96,2069,12.96,2070,12.96,2071,12.96]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[439,20.207,1277,27.57]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[56,10.536,74,22.834,76,8.133,77,7.44,85,7.152,115,5.886,146,9.734,332,15.842,337,16.777,437,8.565,439,13.587,498,10.433,533,11.582,534,16.597,1114,13.171,1115,9.734,1158,10.604,1162,14.711,1163,9.734,1168,7.152,1199,8.565,1241,17.172,1277,9.084,1282,8.565,1288,21.551,1321,21.551,1369,10.604,1460,11.163,1696,8.565,1701,13.87,1704,8.133,1722,14.711,1744,13.87,1801,9.734,1828,8.133,1830,8.565,1839,10.604,1849,9.734,1863,9.084,1875,13.171,1890,9.734,1891,15.763,1893,15.763,1896,17.172,1905,27.326,1916,14.711,1919,21.639,1925,17.172,1927,10.604,1928,17.172,1960,10.604,1962,18.538,1963,15.763,2030,10.604,2036,17.479,2037,17.479,2072,17.172,2073,11.925,2074,11.925,2075,9.084,2076,9.734,2077,19.311,2078,11.925,2079,19.311,2080,11.925,2081,27.973,2082,27.973,2083,21.639,2084,15.763,2085,24.334,2086,17.172,2087,11.925,2088,11.925,2089,11.925,2090,10.604,2091,17.172,2092,17.172,2093,19.311,2094,11.925,2095,14.711,2096,19.311,2097,11.925,2098,11.925,2099,11.925,2100,11.925,2101,11.925,2102,19.311,2103,11.925,2104,11.925,2105,10.604,2106,11.925,2107,11.925,2108,11.925,2109,11.925,2110,11.925,2111,10.604,2112,10.604,2113,9.734,2114,9.084,2115,19.311]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[439,20.207,498,19.553]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,1.829,4,2.516,53,15.899,67,6.543,68,5.931,76,10.535,77,12.545,82,9.552,85,9.264,88,5.931,89,12.06,94,5.931,115,7.624,135,5.464,136,4.922,148,6.543,181,7.436,191,16.538,337,9.264,409,15.417,411,6.213,431,5.683,435,4.257,439,16.08,498,10.863,533,22.94,573,7.436,839,12.608,902,14.774,917,11.766,918,5.683,955,15.318,992,10.535,1114,6.213,1143,6.94,1168,9.264,1186,12.608,1199,11.094,1210,7.436,1281,8.101,1288,16.906,1295,12.608,1321,16.071,1340,6.213,1359,14.443,1524,7.436,1606,6.94,1667,6.543,1670,10.056,1696,11.094,1697,17.88,1704,6.213,1708,14.774,1709,6.94,1720,8.101,1744,6.543,1747,7.436,1753,19.331,1764,11.766,1765,6.94,1799,16.413,1800,12.608,1803,6.94,1814,18.04,1819,16.413,1827,6.213,1830,6.543,1833,7.436,1856,12.608,1857,7.436,1865,7.436,1870,12.608,1875,10.535,1890,7.436,1902,17.88,1916,15.318,1936,8.101,1942,8.101,1945,8.101,1962,6.94,1963,7.436,1988,7.436,2012,7.436,2036,25.011,2037,25.011,2075,6.94,2076,7.436,2083,13.735,2084,7.436,2086,13.735,2091,8.101,2092,8.101,2095,11.766,2105,13.735,2113,16.413,2114,18.04,2116,9.11,2117,9.11,2118,9.11,2119,9.11,2120,15.446,2121,9.11,2122,23.681,2123,9.11,2124,9.11,2125,9.11,2126,9.11,2127,15.446,2128,9.11,2129,9.11,2130,9.11,2131,15.446,2132,9.11,2133,9.11,2134,9.11,2135,15.446,2136,9.11,2137,9.11,2138,13.735,2139,9.11,2140,15.446,2141,15.446,2142,9.11,2143,9.11,2144,9.11,2145,9.11,2146,9.11,2147,9.11,2148,9.11,2149,9.11,2150,9.11,2151,15.446,2152,7.436,2153,9.11,2154,8.101,2155,8.101]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[337,12.03,1288,10.501,1321,10.501,1780,15.279,1875,13.68]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[56,7.244,58,17.162,59,16.381,77,18.868,112,7.425,174,13.656,180,18.782,332,10.892,337,18.139,431,15.698,439,9.341,498,16.339,533,10.034,748,12.745,767,21.723,902,10.438,911,11.411,1168,21.633,1282,12.017,1288,20.584,1321,20.584,1359,12.017,1460,9.671,1685,12.017,1749,12.017,1780,12.745,1796,20.539,1799,29.443,1814,12.745,1821,12.017,1830,12.017,1831,13.656,1856,13.656,1857,20.539,1863,19.168,1871,14.877,1874,26.893,1875,20.627,1891,13.656,1916,12.745,1954,14.877,1962,12.745,1998,13.656,2012,13.656,2036,12.017,2037,12.017,2075,12.745,2076,13.656,2084,13.656,2090,14.877,2095,12.745,2111,22.375,2112,14.877,2113,20.539,2114,19.168,2152,13.656,2156,25.162,2157,16.73,2158,25.162,2159,25.162,2160,16.73,2161,16.73,2162,16.73,2163,16.73,2164,16.73]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[439,20.207,2066,29.542]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[4,1.381,27,3.902,53,4.47,58,5.084,59,13.472,65,4.65,66,5.084,112,5.769,113,3.787,115,8.531,135,21.935,136,12.681,148,9.336,176,6.084,180,9.649,187,6.628,191,4.65,257,6.084,332,4.852,413,6.628,435,16.757,436,6.084,437,5.354,439,17.217,453,6.628,456,15.368,489,5.678,496,5.354,555,8.865,819,6.628,899,5.084,902,4.65,903,10.61,911,8.865,918,8.109,955,9.901,979,6.084,983,6.628,1089,5.678,1090,11.558,1127,20.42,1168,7.795,1176,6.628,1211,5.678,1213,11.787,1234,14.107,1238,11.558,1282,5.354,1288,3.902,1295,19.16,1311,8.109,1321,3.902,1347,5.084,1395,19.64,1398,5.678,1400,6.628,1416,20.873,1460,16.029,1516,5.678,1550,11.558,1551,5.354,1645,10.61,1665,10.61,1669,10.61,1670,4.852,1683,5.678,1684,15.368,1702,6.084,1707,5.678,1708,10.782,1730,11.558,1749,9.336,1751,15.368,1753,6.084,1758,6.628,1764,5.678,1765,5.678,1773,18.401,1789,15.368,1790,15.764,1803,5.678,1821,5.354,1827,5.084,1831,6.084,1833,6.084,1863,5.678,1870,6.084,1876,10.61,1889,11.558,1910,6.628,1931,6.628,1939,6.628,1957,11.558,1976,20.873,1977,6.628,1988,6.084,1998,10.61,2024,6.084,2034,6.628,2036,22.149,2037,21.114,2038,24.658,2039,6.628,2043,18.401,2049,15.368,2064,18.401,2066,10.61,2067,6.628,2068,6.628,2069,6.628,2070,6.628,2071,6.628,2072,15.368,2075,5.678,2095,9.901,2114,9.901,2138,6.628,2152,22.635,2154,11.558,2155,22.926,2165,7.454,2166,25.782,2167,7.454,2168,20.693,2169,17.282,2170,17.282,2171,7.454,2172,12.998,2173,12.998,2174,12.998,2175,7.454,2176,7.454,2177,7.454,2178,12.998,2179,7.454,2180,7.454,2181,12.998,2182,7.454,2183,7.454,2184,12.998,2185,7.454,2186,7.454,2187,7.454,2188,7.454,2189,7.454,2190,7.454,2191,7.454,2192,12.998,2193,7.454,2194,7.454,2195,7.454,2196,7.454,2197,7.454,2198,7.454,2199,7.454,2200,7.454,2201,12.998,2202,12.998,2203,7.454,2204,7.454,2205,7.454,2206,7.454,2207,7.454,2208,7.454]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["0",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["0.2",{"_index":2191,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["01",{"_index":1776,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0またはvalu",{"_index":838,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":422,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":360,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["1.0",{"_index":2077,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":571,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":83,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["10.197.0.57",{"_index":1983,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.197.3.57",{"_index":1989,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":953,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":964,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["100",{"_index":641,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1414,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":645,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["10:57:54.417129",{"_index":974,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10gb",{"_index":810,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1120,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":255,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":256,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":846,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":278,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1354,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2107,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["115200",{"_index":1974,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["120",{"_index":781,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["127.0.0.1",{"_index":1756,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["128",{"_index":1446,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1447,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["13",{"_index":2186,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["13906",{"_index":975,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["14265",{"_index":668,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["15600",{"_index":666,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["16",{"_index":1992,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45日間マイルストーンを送信できます。マイルストーン送信の間隔は2",{"_index":1124,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["17.05",{"_index":737,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["18.04",{"_index":943,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["18でiri",{"_index":855,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["1i",{"_index":1240,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":345,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1214,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["1つが81トライトのセグメントに分割されます。その後、各セグメントは26",{"_index":237,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つにテストデータを公開したくないかもしれません。代わりに、iota",{"_index":1302,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1442,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":1632,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのiriノードと1",{"_index":1305,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":247,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのアドレスを導出するために使用されます。秘密鍵とアドレスは1対1のペアと考えることができます。アドレスは公開されており、クライアントはトランザクションのアドレスフィールドを使用してiotaトークンとメッセージを送信できます。秘密鍵は秘密であり、アドレスからiota",{"_index":231,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのキーダイジェストを導出するために1回ハッシュ化されます。たとえば、1つのキーフラグメントによって1",{"_index":240,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つの頂点を表す一種の有向非巡回グラフ（dag",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["1つは、iota",{"_index":222,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1226,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["1と2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1と2",{"_index":386,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":283,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["1に接続され、トランザクション1はトランザクション2",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1のアドレスから80i",{"_index":264,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":993,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":382,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1より大きい場合、署名は1",{"_index":258,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":365,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1分程度待つと、トランザクションが確定されたときにzmq",{"_index":1335,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["1回だけ作成および登録されます。資産の管理権は時間の経過とともに変化し、特定の資産の管理権の変化に関連する情報を集約するためにmamチャネルを使用することは意味があります。mamチャネルを使用することにより、実装の複雑さを制限でき、すべての異なる管理権の変更を適切な資産に簡単にリンクできます。さらに、mam",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["1回でもiota",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1360,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化され、81",{"_index":241,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":252,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1度iotaトークンを取り出したアドレスからは2度とiotaトークンを取り出してはいけません。したがって、転送バンドルでは、iotaトークンを取り出したアドレスの残りのiota",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1度吸収し、セキュリティレベルごとに27回圧搾します（セキュリティレベル1だと27回、セキュリティレベル2だと54回、セキュリティレベル3だと81",{"_index":235,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":829,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":842,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":306,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["2,187、4,374、または6,561",{"_index":236,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,187、4374、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントがあります。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。これは27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":239,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1439,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":504,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":514,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1252,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1156,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["2.7piのiota",{"_index":1141,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["20",{"_index":1427,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":869,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["2015",{"_index":1358,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016",{"_index":2106,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1429,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1361,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20mi",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["20の事前にビルドされた（layerディレクトリ内の）マークル木を使用します。このマークル木は、コンパスが1年以上30",{"_index":1313,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["2128",{"_index":1448,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1450,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":782,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["243",{"_index":873,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["24を指定すると、コンパスは31年以上にわたってマイルストーンを送信できますが、マークル木を作成するには長い時間がかかります。深さ8",{"_index":1126,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["25",{"_index":2108,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1452,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["255",{"_index":1758,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["255.255.0.0",{"_index":1990,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["255.255.255.0",{"_index":1984,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256",{"_index":1986,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256\\*256",{"_index":2001,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2673",{"_index":336,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":238,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27、54、または81",{"_index":248,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27、54、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":251,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":249,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2944.17",{"_index":2003,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2gb",{"_index":809,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16",{"_index":1991,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":406,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":407,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":393,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2",{"_index":387,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクション（マイルストーンのセキュリティレベルが2",{"_index":384,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":1597,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの末尾トランザクションの1つにも接続されています。）この2",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1025,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1028,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの親を参照する必要があります。トランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドやバンドル内の最後のトランザクションのbranchtransactionフィールドとtrunktransact",{"_index":227,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":395,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":341,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":265,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":338,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/security-levels":{}}}],["2人のユーザー間で転送を発行します（processtransf",{"_index":1048,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["2回以上トークンを取り出してはいけません。したがって、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":259,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2度とiota",{"_index":930,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":308,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2種類のイベントをトリガできます。1つはバンドルがペンディング状態にあるとき、もう1",{"_index":1619,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["2種類のリスナがあります。1つはチャネルを使用するもので、もう1",{"_index":1618,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2行の下に秘密の81",{"_index":1296,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":281,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["3",{"_index":56,"docTitle":{"docs/iota-basics/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/trinary":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3+)とpip",{"_index":786,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":512,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":257,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["30mi",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["30秒ごとに、transfer",{"_index":1615,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1001,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":350,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["384ハッシュ関数を使用してシードとインデックスを足し合わせたものをハッシュ化し、81",{"_index":234,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["3\\*8",{"_index":1762,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["3x8=24",{"_index":1987,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["3つの0のトリット（000トリット）がトライトの9",{"_index":421,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":358,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3のアドレスから80i",{"_index":266,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1184,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":364,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法3",{"_index":363,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":282,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["4",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1251,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":433,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["400",{"_index":870,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["401",{"_index":901,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["4gb",{"_index":660,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["4gb以上の空きram",{"_index":1308,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["4x3",{"_index":2078,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、数式：2depthのdepthによって定まります。上の図では、マークル木の深さは2",{"_index":374,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["4のiri",{"_index":689,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1022,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1133,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["5",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["50",{"_index":1179,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["50,000",{"_index":651,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":653,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["55mi",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3に関連付けられています。したがって、トランザクション5はトランザクション2と3",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["64",{"_index":662,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1182,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/node-quorum":{}}}],["6か7",{"_index":859,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6でiota",{"_index":994,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親です。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":369,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["6はトランザクション5（および表示されていない別のトランザクション）に接続されています。そのため、トランザクション6はトランザクション5を介して間接的にトランザクション3",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["7",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["8",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":785,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":2029,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["81",{"_index":51,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/references/glossary":{},"docs/utils/0.1/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":895,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":224,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1118,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["8、またはnode.j",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["9",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90文字です。余分な9",{"_index":219,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["990,100",{"_index":643,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["9999",{"_index":1002,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1357,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9個（デブネット上のmwm）または7個（スパムネット上のmwm）の0",{"_index":271,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":346,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1410,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1490,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abc123の登録id",{"_index":1487,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abov",{"_index":2188,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["absent",{"_index":900,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["acceler",{"_index":2053,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["acceleromet",{"_index":2052,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["access",{"_index":1807,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["account",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["accountlisten",{"_index":1664,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["accountplugin",{"_index":1674,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["activ",{"_index":1688,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["actual",{"_index":1791,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["acycl",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["ad",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["adapt",{"_index":1879,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["add",{"_index":1796,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["add()メソッドからのレスポンスにはipfsハッシュが含まれています。これは、タングルに添付される前にメタデータとsha256",{"_index":1519,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["addit",{"_index":1960,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["addneighbor",{"_index":865,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["addneighbors(uri",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-errors":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["addresscountaggreg",{"_index":844,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["address、obsoletetag、timestamp、value、currentindex、およびlastindex",{"_index":420,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["administr",{"_index":1806,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advanc",{"_index":1818,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["again",{"_index":1969,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["aid",{"_index":2026,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["aim",{"_index":1698,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["allow",{"_index":1702,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":847,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["alon",{"_index":2080,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["alpha",{"_index":391,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":403,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alreadi",{"_index":1728,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["alway",{"_index":749,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amazon",{"_index":1402,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amount",{"_index":1223,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amp;lt;packag",{"_index":592,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1208,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["anoth",{"_index":1988,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyon",{"_index":2171,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyth",{"_index":1712,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["apach",{"_index":509,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":47,"docTitle":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/database-tables":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["apiがあります。api",{"_index":221,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1049,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":910,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["apiが提供されます。オブジェクトリポジトリに保存される情報には、iotaタングル上でアクセス可能なチャネルのルートアドレスや制限付きmamチャネルが使用されている場合、mamチャネルに保存されている情報を復号化するために必要な暗号化キー（サイドキーと呼ばれます）が含まれます。次のタプルが作成され、オブジェクトリポジトリに保存されます。&amp;lt;assetuniqueid",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiとして書かれたバックエンドの2つの部分から成ります。このpoc",{"_index":1505,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1378,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1386,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1032,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["apiの形式を取ります。生産者と消費者の両方が自身をグリッドに登録するために使用します。エンティティが登録されると、グリッドはエンティティのmam出力チャネルの監視を開始します。登録が成功すると、idが返されます。このid",{"_index":1481,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは2",{"_index":1510,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["apiは、webサーバー上でホストされる通常のweb",{"_index":1480,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは、永続的に情報を格納する必要があるアーキテクチャのどの部分でも使用できます。apiは標準データベースのcrud操作をサポートし、すべての呼び出しでエンティティ登録id",{"_index":1484,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":864,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1020,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1136,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiを使い始めるでgrpc",{"_index":1108,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["apiを使用しているため、すべてのzmq",{"_index":807,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを使用して情報を交換できます。この設計図のためにmam",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiを通してiri",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiを通して、ハブはiotaトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、id",{"_index":925,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1154,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":612,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["apiサーバー：node.js（express",{"_index":1497,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["apiメソッドの詳細については、api",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":861,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":892,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":716,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":752,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":396,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":394,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの組み合わせで行われます。mam",{"_index":1472,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["api（get",{"_index":1520,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["appli",{"_index":1772,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["applic",{"_index":1202,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["applications/utilities/termin",{"_index":1197,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["appnam",{"_index":2148,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["approach",{"_index":1846,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["appvers",{"_index":2149,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":945,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":942,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["archive（ppa",{"_index":956,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["aren't",{"_index":1710,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["argon2",{"_index":926,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["argument",{"_index":1953,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["arm64",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armbian",{"_index":1932,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["artimaガイドはjreでscala",{"_index":814,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":287,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iri/0.1/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":290,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1207,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["ask",{"_index":1975,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["asset",{"_index":1538,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["assetcustodianid",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetcustodianidは最初はassetownerid",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetowneridに関する情報は、アプリを通じて挿入されるか、外部の情報源から取得されます（アプリを使用するための登録サーバーなど。この場合は会社のvat",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1205,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueidは、qrコードスキャンによって読み取られ、登録apiを通じてアクセスするassetuniqueidサーバー（例：gs1",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assign",{"_index":1732,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["assum",{"_index":2116,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["astronaut",{"_index":2033,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropi",{"_index":2021,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiota",{"_index":439,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiota'",{"_index":2200,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["attach",{"_index":1162,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["attachmenttimestamp",{"_index":276,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":871,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["authent",{"_index":1233,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["autoconfirm",{"_index":333,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["automat",{"_index":2124,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["avail",{"_index":903,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["avoid",{"_index":1738,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["avxベースのpow",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["aw",{"_index":1850,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awesom",{"_index":1262,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["awesometestplugin",{"_index":1678,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["awsまたはmicrosoft",{"_index":1382,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1383,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["aとは対照的に、トークンを複数のユーザーからコールドウォレットに移動するのはそれほど簡単ではありません。ただし、ハブにハブ所有者のアドレスの一部を無視させることは可能です。そのためには、hub_addressテーブル行のis_cold_storageフィールドを1に設定する必要があります。これにより、sweepservic",{"_index":1041,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["aに100mi",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["backcolour",{"_index":2194,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["background",{"_index":1400,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["badgerdbデータベースに保存されます。データベースディレクトリを保存するパスをdb",{"_index":1599,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balanceev",{"_index":1052,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["balancesubscript",{"_index":1037,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balancesubscriptionrequest",{"_index":1053,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["bar",{"_index":1887,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["barometr",{"_index":2050,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["base",{"_index":1910,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["basics/0.1/how",{"_index":797,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["batteri",{"_index":2098,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["baud",{"_index":1972,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bazel",{"_index":947,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["bazelを使ってビルドし、dock",{"_index":1121,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["be",{"_index":2190,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["beast.cc:65",{"_index":976,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["becom",{"_index":1607,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["befor",{"_index":1709,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["behavior",{"_index":1971,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["benefici",{"_index":1838,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["best",{"_index":410,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["beta1",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["between",{"_index":413,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bigger",{"_index":1999,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bin/hub/hub",{"_index":967,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1010,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1107,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["biometr",{"_index":1232,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{}}}],["bit",{"_index":1760,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["blake2",{"_index":1453,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1454,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blue",{"_index":1176,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["blueprint",{"_index":2015,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["board",{"_index":1893,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["boot",{"_index":2125,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["bootstrap",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1149,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1151,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bosch",{"_index":1390,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["both",{"_index":1683,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bottom",{"_index":2160,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["bounci",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1173,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["branchtransact",{"_index":275,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":872,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iri/0.1/concepts/the-ledger":{}}}],["branchtransactionフィールドとtrunktransact",{"_index":368,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュ値を参照して、トランザクション（子）を他の2",{"_index":225,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["bridg",{"_index":1881,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["broadcast",{"_index":1152,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["broadcastandstor",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":874,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["browser",{"_index":1811,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["bt",{"_index":1809,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":834,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":805,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":806,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1172,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["build",{"_index":1277,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["build.gradleファイルにiotaledg",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":825,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["built",{"_index":1834,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bundl",{"_index":263,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{}}}],["bundle.md",{"_index":799,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["bundles、addresses、tags、approve",{"_index":878,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["byte",{"_index":1981,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bがまだ存在していない場合は、ユーザーbがハブに作成されます（createus",{"_index":1047,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーa",{"_index":1046,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーaからiota",{"_index":1040,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["c",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1191,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["calibr",{"_index":2184,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["call",{"_index":1831,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["callback",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["callbackeventlisten",{"_index":1621,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["can't",{"_index":1813,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["capabl",{"_index":2099,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["captur",{"_index":2111,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["card",{"_index":1928,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["carefulli",{"_index":2110,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["cartesian",{"_index":2061,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["case",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["castl",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":999,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":442,"docTitle":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaがまだアクティブであることを確認した後で、cda",{"_index":1624,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaが必要です。送信者はiotaトークンを含む期限切れのcdaを必要とし、受信者はアクティブなcda",{"_index":1622,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaで残高の大部分を維持することをお勧めします。こうすることで、支払いをより速く、そしてより少ないトランザクションですみます。そのためには、利用可能残高を新しいcda",{"_index":1633,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":1593,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをcda",{"_index":1637,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":1693,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":1628,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの最後の9文字はチェックサムで、アドレスとそのアドレスのすべての条件のハッシュ値です。トリニティやdevent蛇口はcdaをまだサポートしていないため、このチェックサムは、トリニティやdev",{"_index":1625,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":1627,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。故に、cda",{"_index":1623,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、送信する前にcdaを任意の形式にシリアル化できます。generatecda()メソッドは以下のフィールドを持つcdaオブジェクトを返します。cda",{"_index":1635,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":1631,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":1692,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":1636,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成し、利用可能な残高の合計をそのcda",{"_index":1691,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するとき、cdaがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、cda",{"_index":1648,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaを作成するときには、cdaがアクティブか期限切れかを定義する次の条件を指定します。アクティブアドレスにはiotaトークンを預け入れることができますが、取り出すことはできません。逆に期限切れアドレスからはiota",{"_index":1588,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaを使用して、使用済みアドレスからの取り出しリスクを軽減します。誰かにiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、送信者にその期間の後にだけそのアドレスから取り出すつもりであることを知らせます。その結果、送信者は、cda",{"_index":1587,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値がなくなる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":1656,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["celsiu",{"_index":2176,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["centigrad",{"_index":2175,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["certain",{"_index":1804,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["certif",{"_index":1195,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chang",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channel",{"_index":2043,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channelroot",{"_index":1567,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey&amp;gt",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["checkconsist",{"_index":876,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["checkconsistency(transact",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":952,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["choos",{"_index":1864,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["chrome、firefox",{"_index":1436,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["chronolog",{"_index":2208,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["circuit",{"_index":1896,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":828,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["citi",{"_index":2014,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["clean",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["click",{"_index":1819,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["client",{"_index":1876,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["client.crt、client.key、およびca.crt）をハブサーバーにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバーのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1015,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1019,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["clone",{"_index":2020,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["close",{"_index":1605,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["closeabl",{"_index":1604,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["cloud",{"_index":1380,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloudflareなどのパブリックipfsゲートウェイを使用して、トランザクションハッシュを使用してipf",{"_index":1525,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["cmd+spacebar",{"_index":1885,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1005,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1259,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["codes.dag.sh",{"_index":1217,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["color",{"_index":2197,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["column",{"_index":1817,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["combin",{"_index":2119,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["come",{"_index":1830,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["command",{"_index":902,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["command変数を別のapi",{"_index":787,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["common/flags/flags.h",{"_index":1092,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["commun",{"_index":1285,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["compact",{"_index":1903,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compani",{"_index":1845,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["compar",{"_index":2189,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["comparison",{"_index":412,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["compass",{"_index":1116,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1148,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["complet",{"_index":1700,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compon",{"_index":2086,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["compos",{"_index":1307,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1320,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["comput",{"_index":1828,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["concept",{"_index":1810,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["config.ini",{"_index":703,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["config.json",{"_index":1131,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1420,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1419,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1129,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["configur",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["configurationに移動して、ノードのurlhttp&#x3a;//localhost:14265",{"_index":1318,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["confirmed.jsファイルでは、iota",{"_index":322,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["congratul",{"_index":1867,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["connect",{"_index":337,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["consid",{"_index":2005,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["consist",{"_index":2017,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["consol",{"_index":2202,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["consum",{"_index":1470,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contain",{"_index":1687,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{}}}],["continu",{"_index":1937,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["convert",{"_index":1238,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["convertor",{"_index":2204,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["coordin",{"_index":2062,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["coordinates.net",{"_index":1413,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["copi",{"_index":1764,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cord",{"_index":2115,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["core",{"_index":300,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["correct",{"_index":1801,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["countri",{"_index":2137,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["cp2102",{"_index":1921,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["cpu",{"_index":1119,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/references/troubleshooting":{}}}],["creat",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["createitemchannel",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createuserrepli",{"_index":1054,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["createuserrequest",{"_index":1055,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["cron",{"_index":2158,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crontab",{"_index":2112,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["cryptograph",{"_index":1703,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["ctps1",{"_index":342,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ctrl",{"_index":822,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1011,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1027,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":868,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":347,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":348,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1237,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["current",{"_index":1751,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["currentindex",{"_index":320,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドと、バンドルの終わり（先頭トランザクション）を定義するlastindexフィールドの両方が与えられます。次に、先頭トランザクションを除くバンドル内の各トランザクションは、trunktransactionフィールドを介して互いに接続されます。次に、各トランザクションのaddress、value、obsoletetag、currentindex、lastindex、およびtimestampの各フィールドの値が、スポンジ関数によって吸収され圧搾され、81",{"_index":254,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":304,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["custom",{"_index":2066,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cを押してrepl",{"_index":823,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1146,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["cキーを押し、docker",{"_index":1319,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":742,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":432,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["daemon",{"_index":1166,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":353,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["dag）であり、2015年にserguei",{"_index":366,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["danceなどのweb",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["danger:import",{"_index":1601,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["danger:json.exception.parse_error.101",{"_index":971,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["danger:シードごとにアカウントを1",{"_index":1614,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["data",{"_index":1127,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["databas",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["data変数をasciitotryt",{"_index":289,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["date",{"_index":2034,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dave",{"_index":2069,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1000,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":688,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["dbfiles.iota.org",{"_index":863,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["dbに追加して更新するためのストレージrest",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":692,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ddn",{"_index":1788,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["de",{"_index":2070,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":991,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["dedic",{"_index":1862,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["default",{"_index":1865,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["degre",{"_index":2187,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["delet",{"_index":1489,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deni",{"_index":1164,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["depend",{"_index":1994,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dependencies.jarという.jar",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["depth",{"_index":389,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-errors":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth、minweightmagnitude、delay、そしてmaxdepth",{"_index":1679,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["depthパラメータの値を減らします。iri",{"_index":896,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1130,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["describ",{"_index":2113,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["desktop",{"_index":1193,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusb",{"_index":1968,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusbx",{"_index":1964,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1273,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["developer'",{"_index":2144,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["developブランチから新しいgit",{"_index":1260,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1272,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["devent",{"_index":1626,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devic",{"_index":1355,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["device'",{"_index":1805,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["devnet",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["devnet.thetangle.org",{"_index":313,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":331,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":312,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":142,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetタングル上にあることを確認したい場合は、hashフィールドの値をコピーしてdevnet",{"_index":1337,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetトークンは、mainnet",{"_index":1425,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1423,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1385,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1596,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードのzmqaddress",{"_index":1331,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1230,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":706,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":784,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp",{"_index":1734,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1115,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["differ",{"_index":1808,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["digest",{"_index":299,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["dikw",{"_index":1352,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["direct",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["directli",{"_index":2091,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["discord",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["discordの#helpおよび#fullnod",{"_index":862,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1284,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":655,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["display",{"_index":1812,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["distribut",{"_index":1832,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1198,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":1787,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["do",{"_index":1724,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dockerとdock",{"_index":1306,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコマンドを使用して独自のiotaネットワークを設定できます。このコマンドを実行すると、独自のiotaテストネットワークと2.7pi（最大量）のテストiota",{"_index":1301,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerコマンドを使用して自身のiota",{"_index":1286,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["dockerコンテナでiri",{"_index":728,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":732,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナも再起動するには、dock",{"_index":747,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする(#ビルド済みのiri",{"_index":734,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":733,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドする(#ソースコードからiri",{"_index":735,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":736,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、コンピュータはiriノード用のlinuxサーバーになり、iota",{"_index":729,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":746,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1132,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["document",{"_index":1340,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["doesn't",{"_index":1917,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["domain",{"_index":1778,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["don't",{"_index":1742,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["doubl",{"_index":1860,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["doubt",{"_index":2011,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["down",{"_index":2164,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["download",{"_index":1199,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["driver",{"_index":2151,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["dropdown",{"_index":1802,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duck",{"_index":1795,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["dure",{"_index":2169,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dynam",{"_index":1735,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["e",{"_index":1225,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["e0328",{"_index":973,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["each",{"_index":1833,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["earth",{"_index":2025,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earthquak",{"_index":2027,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earth’",{"_index":2059,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["easiest",{"_index":2123,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["edit",{"_index":1317,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["effect",{"_index":1823,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["effici",{"_index":1906,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["embed",{"_index":1909,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["enabl",{"_index":2138,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":630,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["endpoint",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["energi",{"_index":1342,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["english",{"_index":2127,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enough",{"_index":2193,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enter",{"_index":726,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["entri",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":399,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["enviro",{"_index":1333,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["environ",{"_index":1707,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":813,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1327,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["equilibria",{"_index":408,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["error",{"_index":979,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["errorcod",{"_index":1084,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["error。例：status::cancel",{"_index":1056,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["errorイベントを購読します。error",{"_index":1682,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["establish",{"_index":1882,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["eth",{"_index":1948,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ethernet",{"_index":1918,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ev",{"_index":438,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":818,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["event",{"_index":1668,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["event_logger.go",{"_index":1638,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventlistenerインターフェースを実装しており、eventmanagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のeventlisten",{"_index":1673,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":1620,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":1639,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["ev）の充電料金をiota",{"_index":434,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exampl",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["example&lt",{"_index":600,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":598,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["execut",{"_index":1945,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1190,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["exist",{"_index":1748,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":1658,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールドを持つcda",{"_index":1657,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールド値を持つcda",{"_index":1653,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expectedamount",{"_index":1591,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["experi",{"_index":2087,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["expir",{"_index":1686,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["explor",{"_index":307,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["exportedaccountstate構造体をstore.importaccount",{"_index":1647,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["expos",{"_index":1715,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extern",{"_index":1779,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extract",{"_index":1858,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["facad",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fahrenheit",{"_index":2177,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fail",{"_index":2129,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["fals",{"_index":319,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["fastest",{"_index":1883,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":1956,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["featur",{"_index":1900,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1261,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1263,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1247,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fetcher.j",{"_index":1298,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetcher.jsファイルに、sender.j",{"_index":1299,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetchtemp.j",{"_index":1328,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["fetchtemp.jsファイルとzmqwatcher.jsファイルはモジュールとしてエクスポートされ、index.j",{"_index":1332,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["few",{"_index":1792,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["field",{"_index":1768,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fijter'",{"_index":2071,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1168,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1144,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["final",{"_index":2167,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["find",{"_index":1749,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["findtransact",{"_index":877,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["findtransactionobject",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":1820,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["first",{"_index":1977,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["flash",{"_index":1933,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["flink",{"_index":802,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":803,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":800,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["folder",{"_index":1856,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["follow",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["forc",{"_index":2054,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fork",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["format",{"_index":2064,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["forward",{"_index":1721,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["found",{"_index":1957,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["foundat",{"_index":597,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["framework",{"_index":1250,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["free",{"_index":1841,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["function",{"_index":334,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["gateway",{"_index":1750,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gateway4",{"_index":1767,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gather",{"_index":2165,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["gcc、clang、または@iota_toolchain",{"_index":946,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["gener",{"_index":66,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["generate_ca.sh",{"_index":998,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1009,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1004,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":833,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["get",{"_index":2102,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["getaccountdata",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1057,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getaddressinforequest",{"_index":1058,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbal",{"_index":879,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1059,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalancerequest",{"_index":1060,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalances(address",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":223,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["getbundl",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1036,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1061,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1062,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getinclusionst",{"_index":318,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":316,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":328,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":880,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":294,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":295,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.j",{"_index":2146,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":717,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":750,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":881,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettips(\\[callback",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":392,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":883,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettrytes(hash",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1063,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1064,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["get呼び出しを使用して、ページサイズ10のページ5",{"_index":1493,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ginkgo",{"_index":591,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":595,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":695,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["github",{"_index":444,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":1630,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":672,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1280,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1111,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":933,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":675,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":673,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["give",{"_index":1783,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["given",{"_index":1602,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["gnu/linux",{"_index":2104,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":94,"docTitle":{"docs/iota-go/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["goal",{"_index":1836,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":596,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":429,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["googl",{"_index":1379,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["googleアカウントでのoauth",{"_index":1384,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1440,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1432,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1437,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1441,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":572,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goでのpow",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":430,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":95,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":570,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":569,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gp",{"_index":1411,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1206,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":91,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["grid",{"_index":1343,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["grpc",{"_index":924,"docTitle":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["grpcc",{"_index":1021,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":990,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1018,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバーを提供します。ハブは、対話するために使用できるgrpc",{"_index":989,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":941,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guard（gpg",{"_index":959,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guid",{"_index":1701,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["guides/confirm",{"_index":798,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["guiを介してネットワーク上でトランザクションを送受信する場合は、http&#x3a;//localhost:14265で自分のノードに接続して、以下のシードでログインするようにiota",{"_index":1315,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["gyroscop",{"_index":2055,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hard",{"_index":2198,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hardwar",{"_index":1839,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["hash",{"_index":273,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["hash(hash(ノード1",{"_index":380,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ1",{"_index":376,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ3",{"_index":378,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(ノード2",{"_index":381,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ2",{"_index":377,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ4",{"_index":379,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hashcashと同様に、各トランザクションはそれが検証されることができる前にpowを含まなければなりません。このpowは、有効なトランザクションを作成するのにかかる時間および計算能力を増大させることによって、iotaネットワークにスパム防止を提供します。さらに、スパムトランザクションがネットワークに及ぼす影響を減らすために、ノードは有効なpow",{"_index":418,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["hat",{"_index":2037,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hdmi",{"_index":2093,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["headless",{"_index":2065,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["heat",{"_index":2183,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hello",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1699,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["helpフラグを付けてiri",{"_index":920,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["here",{"_index":1859,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["high",{"_index":436,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["histori",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["home/binディレクトリを$path",{"_index":949,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hook",{"_index":2023,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["host",{"_index":1736,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1404,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["http",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1153,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["http&#x3a;//localhost:14265のノードに接続して以下のシードでログインするようにiota",{"_index":1157,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["httpconnector",{"_index":1663,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/iotaledger/iota.j",{"_index":2031,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1491,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1488,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1492,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1405,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1406,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//www.gp",{"_index":1412,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsではなくhttpプロトコルを使用していることを確認してください。ノードのアドレスは、コマンドラインフラグのapiaddress",{"_index":972,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["httpsプロキシサーバーを設定したい場合は、nginx",{"_index":777,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":772,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":936,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":988,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":987,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1050,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hub/db/db.cc",{"_index":1093,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/server/server.cc",{"_index":1094,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/service/sweep_service.cc",{"_index":1095,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub_address",{"_index":1097,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address_bal",{"_index":1098,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address行でis_cold_storageを0に設定し、seed_uuid",{"_index":1045,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hub_address行でis_cold_storageを1に設定し、seed_uuid",{"_index":1044,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1065,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1085,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["huge",{"_index":2004,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["humid",{"_index":2039,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["i'm",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1270,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ibc",{"_index":1536,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["id",{"_index":951,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ident",{"_index":2206,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1408,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idをstore.exportaccount",{"_index":1644,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1445,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":1662,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":1609,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1443,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfig",{"_index":1946,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ignor",{"_index":1755,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["illegalargumentexcept",{"_index":1170,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["immut",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["implement",{"_index":2018,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["import",{"_index":1773,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["imu",{"_index":2049,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["includ",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["index",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1325,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["indic",{"_index":2185,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["individu",{"_index":2118,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["inerti",{"_index":2047,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["inet",{"_index":1754,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inexpens",{"_index":1923,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:depth",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["info:github",{"_index":1291,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":1950,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":760,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:このテストトークンはdevnet",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:無料のspamnet",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["inform",{"_index":1697,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["init",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initi",{"_index":2168,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["initiatetransf",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["input",{"_index":894,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["input/output",{"_index":1897,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insert",{"_index":1935,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insid",{"_index":1829,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inspir",{"_index":2068,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["instal",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1276,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["instead",{"_index":1993,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["instruct",{"_index":1803,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["int128",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["integr",{"_index":1924,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interact",{"_index":1962,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["interfac",{"_index":1942,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["intern",{"_index":1733,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["internet",{"_index":1716,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interruptattachingtotangl",{"_index":885,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["interv",{"_index":1785,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["invalid",{"_index":893,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/install-hub":{}}}],["io",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1257,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1258,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iri/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["iota.j",{"_index":1371,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":288,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":296,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota.lib.j",{"_index":2145,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota/ipf",{"_index":1508,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota://uriで始まり、その後に90",{"_index":1222,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1224,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iotaapi",{"_index":1660,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaでは、トランザクションのバンドルをノードに送信する必要があります。iotaには、3",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaでは、署名方法の性質上、各アドレスから1度だけしかiotaトークンを取り出さない方が良いため、秘密鍵とアドレスのペアが複数個必要となります。そのため、アドレスからiota",{"_index":232,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":218,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaの最も重要な利点の1",{"_index":1336,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":339,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":354,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":370,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":284,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":280,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":929,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。同じ秘密鍵を使用して別のバンドルに署名すると、攻撃者は秘密鍵に総当たり攻撃を行い、そのアドレスからiotaトークンを盗むことができます。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは2度とiota",{"_index":935,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、専売のシステムを統合することなく、回収可能資産に関する情報をシームレスに収集および共有するための解決策を提供します。情報を収集している間、iotaはセカンドレイヤー技術のmam",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaは無許可型のdltです。したがって、ノードを個人や企業を含む誰でもが実行することができます。大量のapi呼び出しはコストがかかる可能性があるため、ノード所有者はそれらを一般に公開しないことがよくあります。そのため、iota",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1345,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用してピアツーピア（p2p",{"_index":1457,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1283,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["iotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1434,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1435,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":292,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":301,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":285,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":286,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":425,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":831,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよびmamチャネルへのアクセスに必要な情報を保存する機能を備えて、既存の資産リポジトリを管理システムの一部として拡張します。ibcsグループの場合、これはibc",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルおよび他のiotaテクノロジを使用して、ibc",{"_index":1535,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1349,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルと、あなたが実行しているinterplanetari",{"_index":1506,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iotaタングルに公開します（mam.attach()）。iotaはトライトを使用しているので、mamペイロードをタングルに送信する前にトライトに変換して（asciitotrytes(json.stringify(data))）mamメッセージを作成する（mam.cr",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルを使用してデータをmam",{"_index":1374,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテクノロジーは、このようなアーキテクチャにおいて有利です。なぜなら、iota",{"_index":1464,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":106,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":357,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1231,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1100,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":932,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1147,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaトークンの値が、iota",{"_index":620,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":622,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの取り出し/預け入れや、データを送信することができます。ノードに1",{"_index":253,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークンの総供給量は(333",{"_index":340,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":1592,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaトークンの量があります。この場合は1,000個のiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":623,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":362,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1422,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1",{"_index":934,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを使うには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":48,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名し、その署名をトランザクションのsignaturemessagefrag",{"_index":242,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":931,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":291,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":344,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンを特定のアドレスから特定のアドレスに転送するように指示する1",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1096,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":279,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":311,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送って欲しい場合、送信者にあなたのcda",{"_index":1634,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを送受信するために、クライアントはバンドルと呼ばれるトランザクションのパッケージをノードに送信します。バンドル内のトランザクションは、あるアドレスから別のアドレスにiota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":261,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":621,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークン（およびqub",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをiri",{"_index":1112,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":355,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードが台帳のコピーを保持し、iota",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のiota",{"_index":217,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiotaネットワークではアドレスの残高を更新してはいません。これらのトークンを使用できるのは、devnet",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":721,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントはシードを作成して秘密にする必要があります。シードとは、クライアントにアドレスへのアクセスを許可する81",{"_index":229,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":613,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":356,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュが事前定義されたmwmと同じかそれ以上の数の0",{"_index":269,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":220,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":619,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはiota",{"_index":228,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルでは、iotaトークンをシードから導出されたアドレスに送信する必要があります。これらのアドレスからは一度だけiotaトークンを取り出すことができます。故に、すべての人が一度もiotaトークンを取り出していないアドレスへ預け入れることが重要です。ただし、iotaトークンを取り出す前に、誰がいつiota",{"_index":1586,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコルの暗号学的ハッシュ関数のマスターキーです。各シードは、ほぼ無制限の固有の秘密鍵とアドレス（957",{"_index":230,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルの複雑さを抽象化し、支払いの実行に集中できるようにします。アカウントでは、2",{"_index":1585,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1350,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1209,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1424,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1426,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1171,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["iota財団のgithub",{"_index":1187,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のgui",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iota財団のwebサイト、iota",{"_index":684,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1366,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1362,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1375,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1274,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1363,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1367,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":226,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1364,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":767,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ip_address_from_step_7",{"_index":1888,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ipf",{"_index":1501,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsにアップロードします。ipfsはipf",{"_index":1514,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsにファイルを保存してから、イミュータブルで永続的なipf",{"_index":1502,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ipfsは分散webであるため、ipf",{"_index":1526,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、iota",{"_index":1529,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsハッシュを使ってipf",{"_index":1522,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfs）からのトランザクションハッシュを使用してメタデータ、sha256ハッシュおよびipf",{"_index":1521,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipv4",{"_index":1979,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":1951,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスか、duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":663,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":768,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":766,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバーのipアドレスに変更します。sign",{"_index":1016,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":769,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri",{"_index":159,"docTitle":{"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["iri.conf",{"_index":759,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":850,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":858,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":637,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":860,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":714,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":633,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":632,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":670,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":697,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":607,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriは次のポートを使用します。ローカルネットワークでlinuxサーバーを実行している場合は、これらのポートをコンピュータのパブリックip",{"_index":664,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":713,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを実行するコンピューターはiri",{"_index":602,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriを構築済みのdock",{"_index":165,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":671,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":361,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":907,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":771,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":616,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードがなければ、iota",{"_index":604,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":970,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":635,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":634,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":923,"docTitle":{},"docBody":{"docs/iri/0.1/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":614,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":618,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードとコンパスを同じサーバーまたは仮想マシンにインストールします。しかし、複数のiri",{"_index":1113,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1137,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":897,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":905,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":904,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":720,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":605,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1134,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":727,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":657,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":656,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":629,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":606,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、iri",{"_index":778,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの台帳のトランザクションによって参照されているトランザクションですが、iri",{"_index":617,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":603,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1138,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":615,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":644,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":654,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":826,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":730,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを維持しているため、タングルが動作しているp2pネットワーク内の近隣ノードと通信できます。グリッドが自身のiriノードを実行することで、残りのエンティティはlanネットワーク内に存在でき、グリッドのみが同期のために残りのタングルへのwanアクセスを必要とします。代替手段は、すべてのエンティティがタングル上のiriノードに直接wan",{"_index":1465,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iriノードを走らせる（dock",{"_index":158,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":762,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションをフラグとして渡すことで、iri",{"_index":739,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":909,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":741,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjava",{"_index":601,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iri：latest",{"_index":745,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":324,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iss",{"_index":2032,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["issu",{"_index":445,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["it'",{"_index":1871,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ixi",{"_index":912,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":712,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ja",{"_index":441,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":681,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":90,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["java_max_memori",{"_index":701,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":700,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":699,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1403,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascript、react、node.j",{"_index":1503,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascript、react、nodej",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javascript、react、およびnodej",{"_index":1509,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascriptでmam",{"_index":1373,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":427,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":446,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javascriptライブラリを使用して、回収可能資産にid",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javaがインストールされていることを確認するには、java",{"_index":679,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":815,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":428,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":502,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":691,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":702,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":690,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":674,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":696,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":676,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":680,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":738,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":501,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":698,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2105,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie.img",{"_index":2109,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jitpack",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["job",{"_index":2159,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["jota",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":443,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1645,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["json.exception.parse_error.101",{"_index":977,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["jsonオブジェクトを受信すると、ファイルはipf",{"_index":1518,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["jsonシードステートをexportedaccountst",{"_index":1646,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1123,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1183,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keccak",{"_index":233,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["keep",{"_index":2024,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["keepass",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":57,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":62,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":349,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["kernel",{"_index":2009,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["keyboard",{"_index":1916,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":841,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":840,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":843,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":298,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1396,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["know",{"_index":1939,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["known",{"_index":1922,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lang",{"_index":511,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1239,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["lan）またはワイドエリアネットワーク（wan",{"_index":1499,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["last",{"_index":982,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["latest",{"_index":314,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["latestmileston",{"_index":2150,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["latestmilestoneindex",{"_index":388,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":609,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":722,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":724,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":723,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":610,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":725,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":404,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":611,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["launch",{"_index":1852,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["layers_calcul",{"_index":1128,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["led",{"_index":2075,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["ledger",{"_index":913,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["left",{"_index":1769,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["legaci",{"_index":2142,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["legion",{"_index":515,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["librari",{"_index":2122,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["light",{"_index":1158,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["lighter",{"_index":1901,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lightweight",{"_index":1843,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["limit",{"_index":906,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["line",{"_index":1952,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["link",{"_index":426,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linux",{"_index":50,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":808,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxオペレーティングシステムを使用している場合は、このコマンドの前にsudo",{"_index":1312,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1117,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["linuxサーバーでiri",{"_index":658,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバーで、ターミナルウィンドウを開いて、nginx",{"_index":754,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバーで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":715,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバー上でiriを実行すると、linuxサーバーがiotaネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":659,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1204,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["list",{"_index":1866,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["listen",{"_index":1669,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["liter",{"_index":981,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["load",{"_index":1677,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["local",{"_index":918,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["local_snapshots_base_path",{"_index":639,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":640,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":649,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":652,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":779,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":642,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":650,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":780,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localhost",{"_index":1757,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["localis",{"_index":2135,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["locationは携帯電話のgp",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["lock",{"_index":1608,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["log",{"_index":506,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["login",{"_index":1978,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["look",{"_index":1925,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":820,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["lose",{"_index":1774,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["lost",{"_index":1786,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ls",{"_index":1967,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lt",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":944,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["ltsバージョンまたは最新バージョンのnode.jsとnpm",{"_index":1292,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":954,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mac",{"_index":731,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["machin",{"_index":1746,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["macosx",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1254,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["made",{"_index":2035,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnet",{"_index":2060,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnetomet",{"_index":2058,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mainnet",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":851,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木の深さは23です。したがって、コーディネーターの公開鍵と秘密鍵のペアは8,388,608",{"_index":375,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーン署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":383,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetと同じテストトークンの総供給量で独自のプライベートネットワークを運営することができます。このようにして、ネットワーク外の誰かがテストデータのトランザクションを見ることなくデータとiota",{"_index":1303,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1110,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上でアプリケーションを使用する準備が整ったら、アプリケーションをプライベートiriノードから切断して、mainnet",{"_index":1304,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["make",{"_index":1670,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["malform",{"_index":1142,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":435,"docTitle":{"docs/utils/0.1/mam-watcher/overview":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.client.j",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamsecret",{"_index":2173,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamのgithub",{"_index":1372,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mamを使用しない場合は、代わりにiota",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamクライアントライブラリを使用してiotaタングルに保存されます。この機能は、アプリに埋め込むことも、外部サーバー（mamサーバー）を介して実装することもできます。外部サーバー（mamサーバー）との間で、セキュアなhttp",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamサーバーは、最初に、オブジェクトリポジトリから特定の資産に関連付けられているmamチャネルのルートに関連する情報を取得する必要があります。これは、qrコードのスキャンから取得されるか、手動で挿入されるassetuniqueidをプライマリーキーとして使用することによって行われます。これらの情報はそれぞれのmamチャンネルに添付され、iotaタングルにイミュータブルに保存されます。このために、以下の2",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルから読み取ることができるように、電力源は生産者に登録/登録解除する必要があります。これは生産者側で軽量のweb",{"_index":1474,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルがもう使用されていないことを知らせるためにgoodby",{"_index":1473,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルが作成されます。回収可能資産のデジタルツインは、以下の情報で作成されます。&amp;lt;assetuniqueid",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが作成されるか既存のmamチャネルが更新されたら、オブジェクトリポジトリを更新する必要があります。これは、上で紹介したcreateitem()およびupdateitem",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが使用されなくなったことを知らせるために、goodby",{"_index":1482,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルとweb",{"_index":1471,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルに追加されます。そのために、新しいmamメッセージが既存のチャネルに添付され、次の情報が更新されてタングルに保存されます。&amp;lt;assetcustodianid",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの作成と使用、web",{"_index":1377,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルの作成後、中央管理のバックエンドのオブジェクトリポジトリにデータが入力されます。オブジェクトリポジトリはfirebas",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを作成し、javascriptクライアントライブラリを使用してmam",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["mamチャネルを作成します。グリッドはこの情報を中央のdbでも追跡しますが、mam",{"_index":1494,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルを作成する前に、トランザクションが保存されるiotaネットワーク（プロバイダ）を選択する必要があります。これは、メインのiotaネットワーク、またはhttps&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1339,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["mamチャネルを使用して特定の資産の保管の変更を登録すると、さまざまな保管担当者情報をiota",{"_index":1545,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル情報にそれぞれアクセスして更新する（例えば、保存されているデジタルツインを更新するために新しいメッセージを追加する）関数が実装されています。reactで書かれたweb",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル詳細を使用して電力源のmam",{"_index":1476,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamプロトコルを使用して、回収可能資産にidを付与し、mam",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージのペイロード（例えば、デジタルツインに含まれる情報）を暗号化すること、および選択された当事者だけにアクセスを保証することを可能にします（mam.changemod",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。mam",{"_index":1290,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["manag",{"_index":1227,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["mani",{"_index":1706,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["manual",{"_index":1281,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["map",{"_index":839,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":849,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":960,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1433,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":961,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1033,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["marketplac",{"_index":1338,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["marque",{"_index":2166,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mask",{"_index":2040,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["maven",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":693,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":390,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":401,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maxdepth",{"_index":405,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["measur",{"_index":2048,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["memori",{"_index":1849,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["menu",{"_index":2133,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["merkl",{"_index":372,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["messag",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["messages.proto",{"_index":1051,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1351,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["metadata",{"_index":908,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["mi",{"_index":1178,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["microprocessor",{"_index":1898,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["mileston",{"_index":315,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["milestonesとしてsnapshot.meta",{"_index":646,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["minimum",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["minut",{"_index":1793,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["minweightmagnitud",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1181,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":677,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":437,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1234,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["model",{"_index":1369,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modul",{"_index":573,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moduleのbuild.gradl",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["momentum",{"_index":2056,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mongodb",{"_index":1659,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["monitor",{"_index":2095,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["monitorinterv",{"_index":937,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["more",{"_index":1902,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mostusedaddressesaggreg",{"_index":848,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mous",{"_index":2092,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["much",{"_index":1904,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi",{"_index":1907,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi_us",{"_index":1655,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multi_useフィールドを持つcda",{"_index":1651,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multius",{"_index":1590,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":1595,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["mvn",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":272,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmが高いほど、プルーフオブワークは難しくなります。クライアントとしてiotaネットワークと対話するときは、ネットワークに適したmwm",{"_index":268,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmは14です。したがって、すべてのトランザクションハッシュ値は、14個の0",{"_index":270,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":359,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、mwmと同じ数の0",{"_index":267,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["my_password",{"_index":1944,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["my_ssid",{"_index":1943,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["myaccount.go",{"_index":1642,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":966,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mysql",{"_index":963,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1035,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["name",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":599,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":593,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":594,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":744,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1174,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["nativ",{"_index":1244,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["navig",{"_index":1869,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["near",{"_index":2182,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["necessari",{"_index":1899,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["necessarili",{"_index":1711,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["need",{"_index":1685,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["neighbor",{"_index":1720,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":718,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":751,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":887,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":866,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["net",{"_index":1249,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1387,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yaml",{"_index":1777,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["netmask",{"_index":1752,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=16",{"_index":2000,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=24",{"_index":1997,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["network",{"_index":911,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["never",{"_index":2205,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["new",{"_index":59,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neweventloggerplugin",{"_index":1643,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["next",{"_index":1665,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nginx",{"_index":756,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":765,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":770,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":775,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバーが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":758,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":764,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":753,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバーでポート5000",{"_index":761,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmap",{"_index":1982,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":409,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":82,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsでjavascriptクライアントライブラリを使用すると、getbal",{"_index":1314,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":790,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1245,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["nodej",{"_index":2143,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["noder",{"_index":2140,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":415,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["nonc",{"_index":277,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iri/0.1/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":423,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["nordic",{"_index":1392,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1399,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nosqlデータベースとして実装され、ポート3000を使用してデプロイされます。特定の資産idに関連付けられたmamチャネルに関連する情報をfirebas",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["nosqlデーターベース：mongodb",{"_index":1498,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["note",{"_index":1747,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["now",{"_index":1667,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":1610,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":836,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":884,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["number",{"_index":1965,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["numberformatexcept",{"_index":1169,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1145,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1407,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["object",{"_index":1603,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["offici",{"_index":2019,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["ok",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":398,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["on",{"_index":899,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["onlin",{"_index":1824,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["onto",{"_index":1934,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["open",{"_index":1359,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["openjdk",{"_index":678,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1007,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["oper",{"_index":1744,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["option",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{}}}],["orang",{"_index":1931,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["order",{"_index":2072,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["os",{"_index":1911,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ot",{"_index":244,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["otherwis",{"_index":1606,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["otsは未知数の秘密鍵を明らかにしてしまいます。秘密鍵の半分が明らかになるように正規化することで、アドレスから1度だけは安全にiota",{"_index":246,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["ots）iota",{"_index":352,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ots）を使用しているため、秘密鍵は1つのバンドルに対してのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":371,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["out",{"_index":1848,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["output",{"_index":1753,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["outsid",{"_index":1718,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["over",{"_index":1891,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["overflow",{"_index":857,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["overview",{"_index":1694,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["p2p",{"_index":1344,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["p2pエネルギーグリッドでのエネルギー取引には、4",{"_index":1459,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["p2pエネルギーグリッドアプリケーションは、iotaネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをmam",{"_index":1462,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["p2pエネルギーグリッド内のエンティティがどのようにエネルギーを交換できるかを示しています。p2pエネルギーグリッドの分散型およびマシンベースの性質により、これはiotaの理想的なユースケースになります。iota",{"_index":1458,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pack",{"_index":2082,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["packag",{"_index":955,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["package.json",{"_index":447,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["page",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["pageとpag",{"_index":1485,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2076,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["paramet",{"_index":898,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["parent",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pars",{"_index":978,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["partner",{"_index":685,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["password",{"_index":67,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["past",{"_index":1765,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["path",{"_index":1196,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":574,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":743,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["payment",{"_index":1671,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["paymentidoraddressは、グリッドが支払いを行うことができるiotaアドレス、またはグリッドが別の支払い方法を持つようにするための参照id",{"_index":1479,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddressは、実際のiotaアドレス、または消費者が別の方法で支払いをするために使用できる参照です。グリッドがiota",{"_index":1495,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1185,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1341,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["pend",{"_index":321,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["permanod",{"_index":704,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":705,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1163,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["persistenceadapterファクトリをアカウントに渡します。このアダプタは、アカウントがシードステートを保存できるローカルデータベースオブジェクトを作成します。デフォルトでは、ローカルデータベースはプロジェクトのルートに保存されます。persistencepath",{"_index":1680,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1334,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["phone",{"_index":2100,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["photo",{"_index":1241,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["physic",{"_index":1775,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["pi",{"_index":1321,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pictur",{"_index":1461,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pin",{"_index":2088,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pip3.2",{"_index":2121,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pipe",{"_index":2130,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piからdevnet",{"_index":1289,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["piからdevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のdevnetノードでイベントストリーム（zmq",{"_index":1322,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["place",{"_index":1985,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["placehold",{"_index":1889,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["platform",{"_index":1840,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["platformio",{"_index":1959,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1381,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":687,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["plu",{"_index":2085,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["plug",{"_index":1963,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["plugin",{"_index":1675,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["pluginインターフェースを実装することができます。このオプションはプラグインが動作するアカウントオブジェクトのためのgetterとsett",{"_index":1676,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["pngファイルとしてqr",{"_index":1218,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1431,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャは、電力源、生産者、消費者、およびグリッドがiota",{"_index":1463,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1376,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1455,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pointsとしてsnapshot.meta",{"_index":648,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":1612,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":1616,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["popov教授によってiota",{"_index":367,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["popul",{"_index":1531,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["popular",{"_index":1837,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["port",{"_index":1722,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":783,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["possibl",{"_index":1915,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["post",{"_index":2170,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["postgresまたはfirebas",{"_index":1438,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-go/0.1/README":{}}}],["pow_arm_c128",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["power",{"_index":1905,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["powは、クライアントによって行われてもよく、またはattachtotangl",{"_index":419,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powは大量の電子メールスパムを減らすための概念として導入されました。この概念はhashcashとして知られており、すべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":417,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":590,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを計算する関数はpearldiv",{"_index":424,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["pow）は試行錯誤を用いて計算され、それ故、pow",{"_index":416,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["ppaをダウンロードするためにgnu",{"_index":957,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["pr",{"_index":1023,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["pre",{"_index":2084,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["predict",{"_index":2028,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prefer",{"_index":2134,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":400,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["prepar",{"_index":1926,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["preparetransf",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prerequisit",{"_index":1696,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["press",{"_index":1884,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pressur",{"_index":2051,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prevent",{"_index":2089,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["print",{"_index":819,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["privaci",{"_index":958,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["privat",{"_index":1730,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["process",{"_index":1929,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["processtransf",{"_index":1038,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["processtransferbatchrepli",{"_index":1066,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1067,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1068,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["produc",{"_index":1469,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpriceフィールドがグリッドによって支払われることが保証されているのではなく、すべての生産者間の合意価格が支払われます。合意価格は、すべてのproducerpric",{"_index":1478,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["program",{"_index":1947,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["project",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["promotetransact",{"_index":325,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":962,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["proof",{"_index":916,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["protocol",{"_index":914,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["provid",{"_index":1782,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["pub/sub",{"_index":1287,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["public",{"_index":1789,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicメソッドの代わりにrestrictedメソッドを使用するようにmamst",{"_index":1297,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["publish",{"_index":1416,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pubsub",{"_index":1324,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["purchas",{"_index":2079,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["purpos",{"_index":1908,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["put",{"_index":1475,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["putti",{"_index":1890,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pyramid",{"_index":1353,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":431,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2120,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":950,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":740,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1215,"docTitle":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1216,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1220,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1219,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["queue",{"_index":625,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["r",{"_index":1279,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ram",{"_index":661,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ramが4gb未満など、リソースが限られている場合は、iriではなくciri",{"_index":669,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["random",{"_index":414,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["raspberri",{"_index":1288,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["raspberrypi",{"_index":1323,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["raspbian",{"_index":2083,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["rasperri",{"_index":1914,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rate",{"_index":1973,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["raw",{"_index":2180,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["react",{"_index":1256,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1430,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["reactで書かれたフロントエンドguiとnode.j",{"_index":1504,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1243,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":983,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["readi",{"_index":2094,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["readm",{"_index":440,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1418,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["reason",{"_index":1719,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["reattach",{"_index":1613,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["reboot",{"_index":2012,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["receiv",{"_index":1213,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.j",{"_index":2155,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recommend",{"_index":1913,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["record",{"_index":1794,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":845,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["refer",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":397,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["regular",{"_index":1784,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["releas",{"_index":683,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["reliabl",{"_index":1842,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["remot",{"_index":2139,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["remote=fals",{"_index":922,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remote=tru",{"_index":921,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remov",{"_index":2141,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["removeneighbor",{"_index":886,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["removeneighbors(uri",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["rent",{"_index":1844,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["repl",{"_index":821,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["replac",{"_index":1766,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["replaybundl",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":326,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["report",{"_index":1790,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["repositori",{"_index":2016,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["repres",{"_index":1759,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["req",{"_index":1008,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1827,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["reset",{"_index":2203,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["resolv",{"_index":2013,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["resourc",{"_index":2153,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["respons",{"_index":882,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["rest",{"_index":1370,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["restart",{"_index":748,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["restrict",{"_index":2174,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["result",{"_index":1763,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["retriev",{"_index":1524,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["retrievefil",{"_index":1512,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrieveをクリックします。トランザクションハッシュはapiに渡され、タングル上のトランザクションのメッセージからipfsハッシュやsha256ハッシュなどが取得されます。ipfsハッシュはファイルのダウンロードに使用され、sha256ハッシュはダウンロードしたファイルのsha256",{"_index":1533,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrofit",{"_index":503,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1537,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rgb",{"_index":2196,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["right",{"_index":1771,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["robot",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":608,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["root",{"_index":1976,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["rootのbuild.gradl",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["root：//iota",{"_index":796,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["rotat",{"_index":2057,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["round",{"_index":2179,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["router",{"_index":1723,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["router'",{"_index":1725,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1135,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["rpchub",{"_index":965,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["rule",{"_index":1726,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":498,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["runtim",{"_index":812,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["runコマンドに次のフラグを1",{"_index":1091,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1278,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["s3やazur",{"_index":1527,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["salt",{"_index":928,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltとseed_uuid",{"_index":1043,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["saltパラメーターはもう必要ありません。署名サーバー（signer:50051）と使用するssl",{"_index":1017,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":969,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1106,"docTitle":{},"docBody":{"docs/hub/0.1/references/security-considerations":{}}}],["same",{"_index":1740,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["sampl",{"_index":2067,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["save",{"_index":1857,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sbc",{"_index":1894,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":816,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scalar",{"_index":1088,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["scalaプログラミング言語とsbt",{"_index":811,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scan",{"_index":1995,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["schedul",{"_index":2157,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scratch",{"_index":2101,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["screen",{"_index":1863,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["screen/tmuxセッション、system",{"_index":984,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":1799,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1417,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["scroll",{"_index":2152,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sd",{"_index":1927,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["search",{"_index":1886,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["second",{"_index":1998,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seconds変数を1",{"_index":323,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["section",{"_index":1695,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["secur",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["see",{"_index":1814,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["seed",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seed9999999999999999999999999999999999999999999999999999999999999999999999999999999の合計残高を取得するには、getbalancesエンドポイントを呼び出します。これまでにiota",{"_index":1155,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["seed_uuid",{"_index":1042,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":1598,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":1661,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1026,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":293,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["select",{"_index":68,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["selector",{"_index":1236,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1393,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1211,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender",{"_index":1684,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.j",{"_index":1295,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsウィンドウがトランザクションを送信し、fetcher.j",{"_index":1294,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl（http&#x3a;127.0.0.1:14265",{"_index":1300,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["sendtransf",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":303,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2036,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sensehat",{"_index":2030,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2156,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1395,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sent",{"_index":2199,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["separ",{"_index":1872,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sequenc",{"_index":1466,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["serial",{"_index":1961,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["server",{"_index":1397,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":774,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1398,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["set",{"_index":1708,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["setinterv",{"_index":327,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["setup",{"_index":1851,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sever",{"_index":2117,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sha",{"_index":1451,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1189,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256、およびipf",{"_index":1515,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256チェックサムは、apach",{"_index":694,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュ、およびipfsハッシュはイミュータブルです。ipf",{"_index":1534,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256ハッシュ、およびファイルの内容をipfsノードに送信します（post",{"_index":1513,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1188,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1192,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュをapiから返されたsha256",{"_index":1523,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha512",{"_index":1449,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["shell",{"_index":1874,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["showdata",{"_index":2207,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shown",{"_index":2181,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shut",{"_index":2163,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shutdown",{"_index":1641,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["sidekeyは認証の証としてdelet",{"_index":1483,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sidekeyは認証の証としてdeleteに渡されます。電力源が登録解除されると、生産者は電力源のmam",{"_index":1477,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドに、マークル木を再構築できるようにするためにマークル木から足りないデータが含まれている1",{"_index":385,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つインプットアドレスは、ゼロトークンのアウトプットトランザクションのsignaturemessagefrag",{"_index":250,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":260,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signbundlerepli",{"_index":1069,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signbundlerequest",{"_index":1070,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signed_uuid",{"_index":1099,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1003,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1013,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1012,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1356,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["similar",{"_index":1930,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simpl",{"_index":505,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplest",{"_index":1966,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["singl",{"_index":1892,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sizeはどちらもオプションであり、デフォルトはそれぞれ0と10",{"_index":1486,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["slash",{"_index":1770,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["slider",{"_index":1861,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["slightli",{"_index":2073,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["slow",{"_index":2192,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["small",{"_index":1895,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["smaller",{"_index":2074,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1368,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sn",{"_index":794,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":919,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1139,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["snapshot.meta",{"_index":636,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":638,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1140,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["socket",{"_index":1167,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["softwar",{"_index":1835,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["solid",{"_index":647,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["solidif",{"_index":915,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["soon",{"_index":2046,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["sourc",{"_index":1467,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sourceディレクトリに移動してrepl",{"_index":824,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["space",{"_index":2022,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["spamnet",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":207,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":711,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":1938,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["speed",{"_index":2178,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["spent",{"_index":852,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["src/desktop/out",{"_index":1255,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1267,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1271,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":1875,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssl",{"_index":996,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1014,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["stack",{"_index":856,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["stackoverflow",{"_index":1109,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["stakehold",{"_index":1539,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["start",{"_index":332,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":1640,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":968,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["startattaching()とstopattach",{"_index":1690,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["starter",{"_index":2081,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1143,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["static",{"_index":1727,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["station",{"_index":1389,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["statist",{"_index":2147,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["statsrepli",{"_index":1071,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statsrequest",{"_index":1072,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statu",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status&amp;gt",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["stay",{"_index":1739,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["step",{"_index":1666,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["storag",{"_index":1346,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["storageなどの代替ストレージソリューションを使用するには、一意のハッシュ（たとえばファイルのsha256",{"_index":1528,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["store",{"_index":1516,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["storeandbroadcast(tryt",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1511,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storefile()メソッドは次の形式のjson",{"_index":1517,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetransact",{"_index":889,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["storetransactions(tryt",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":1600,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["straight",{"_index":1729,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["stream",{"_index":2154,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":817,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["studio",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["sub",{"_index":1798,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subdomain",{"_index":1797,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1006,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["subnet",{"_index":1980,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["subscrib",{"_index":2042,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subscript",{"_index":2041,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subse",{"_index":297,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["success:congratul",{"_index":1958,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:おめでとうございます:tada",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["success:おめでとうございます！:tada",{"_index":763,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1150,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["such",{"_index":1705,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":986,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["support",{"_index":1714,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sure",{"_index":1800,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["surpris",{"_index":2128,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sweep",{"_index":1101,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweep_max_deposit",{"_index":939,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":940,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_tail",{"_index":1102,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1073,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1074,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepev",{"_index":1075,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinforequest",{"_index":1076,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinterv",{"_index":938,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1029,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1077,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["symbol",{"_index":2131,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["syntax",{"_index":980,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["system",{"_index":1114,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["system（ipf",{"_index":1507,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sとledger",{"_index":1175,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1180,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1177,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["tab",{"_index":1880,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tada",{"_index":102,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tail",{"_index":329,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":330,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["take",{"_index":1822,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tangl",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tanglebeatはzmq",{"_index":827,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["tangleディレクトリで、dock",{"_index":1310,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["task",{"_index":1401,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tcp",{"_index":665,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://p101.testnet.iota.cafe:14666",{"_index":707,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p102.testnet.iota.cafe:14666",{"_index":708,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p103.testnet.iota.cafe:14666",{"_index":709,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p104.testnet.iota.cafe:14666",{"_index":710,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":793,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":667,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["technolog",{"_index":1713,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["temp.pi",{"_index":1326,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["temperatur",{"_index":2038,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tempy.pi",{"_index":1329,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["termin",{"_index":1870,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["test",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["text",{"_index":2114,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["textcolour",{"_index":2195,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["that'",{"_index":1873,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["theme",{"_index":1235,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1266,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1265,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["therefor",{"_index":1761,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["thetangle.org",{"_index":995,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":631,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1365,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1394,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["those",{"_index":1717,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["threshold",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["through",{"_index":1780,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["thu",{"_index":2201,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tick",{"_index":1125,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["tild",{"_index":2132,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["time",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":1629,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":1649,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを出金することができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":1650,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":1654,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeoutat",{"_index":1589,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":1594,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timesource()メソッドでアカウントを作成した場合は、timeoutat",{"_index":1689,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":1681,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timezon",{"_index":2136,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["timeはトランザクションを開始したデバイス（携帯電話またはweb",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["tip",{"_index":411,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2161,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["to/from",{"_index":1672,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["token",{"_index":1212,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["took",{"_index":2002,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tool",{"_index":1316,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["toolbox",{"_index":164,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["tpsiriノードを介した1",{"_index":343,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["trace",{"_index":1348,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1347,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trade",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["trangl",{"_index":1309,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["transact",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["transaction.j",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":309,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/general/0.1/introduction/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":302,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1242,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1268,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":373,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["tri",{"_index":1165,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["triniti",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["trinity.app",{"_index":1203,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1201,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["troubleshoot",{"_index":2008,"docTitle":{"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["true",{"_index":317,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["trunk",{"_index":310,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":274,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iri/0.1/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":305,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransactionフィールドを辿ることによって、バンドル内の各トランザクションを見つけて検証します。ノードが先頭トランザクション（またはlastindex",{"_index":262,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["trustanchor",{"_index":853,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["tryte",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":875,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":890,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["turn",{"_index":1936,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tutori",{"_index":1826,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tv",{"_index":2096,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["two",{"_index":2090,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["tx",{"_index":832,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["type",{"_index":1090,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["t定数を作成し、それをprop",{"_index":1269,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":1920,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":854,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":755,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1264,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ui（wui）は、mamエクスプローラにアクセスして情報（例：特定の回収可能資産の現在の保管者と所在地）を取得するためのapiを実装しています。タングル上の情報は、オブジェクトリポジトリから取得した必要なチャネルルートアドレスにアクセスすることによって取得できます。足りない資産は同じgui",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unarchiv",{"_index":1855,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":835,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":837,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":335,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["under",{"_index":1816,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["understand",{"_index":1877,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["unexpect",{"_index":1970,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["unfortun",{"_index":1781,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["unit",{"_index":1210,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["until",{"_index":2007,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["up",{"_index":1311,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updat",{"_index":1282,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updateitem()関数では、まずfirebaseオブジェクトリポジトリでitemidフィールドによって既存の資産が検索され、次にそのオブジェクトに関するすべての情報が新しいmam",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upgrad",{"_index":1878,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["upload",{"_index":1530,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["uploadをクリックして、メタデータをipf",{"_index":1532,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["upper",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":776,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":773,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uriフォーマットは\"tcp://ipaddress:port",{"_index":888,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["uriフォーマットは、\"tcp://ipaddress:port",{"_index":867,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["url",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1456,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1160,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["urlまたはip",{"_index":1228,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":719,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1460,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["usa",{"_index":2126,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usb",{"_index":1919,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["user",{"_index":992,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["user_account",{"_index":1024,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/database-tables":{}}}],["user_account_bal",{"_index":1103,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["user_address",{"_index":1034,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/database-tables":{}}}],["user_address_bal",{"_index":1104,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1078,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1086,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1079,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1087,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["usernam",{"_index":1940,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["userwithdraw",{"_index":1039,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["userwithdraw()メソッドを使用して、預け入れアドレスからのiota",{"_index":1031,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["userwithdrawcancelrepli",{"_index":1080,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1081,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1082,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1083,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":948,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":997,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1122,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["usual",{"_index":1737,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["uuid",{"_index":1030,"docTitle":{"docs/hub/0.1/how-to-guides/query-the-database":{}},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["uuid：seeduuid",{"_index":927,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["v0.9.1",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valu",{"_index":1089,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["variant",{"_index":2006,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["vc",{"_index":1253,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["verif",{"_index":1444,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["version",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1194,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":682,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["video",{"_index":2045,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["view",{"_index":2172,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["virtual",{"_index":1745,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":1853,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{}}}],["vista",{"_index":1248,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["w",{"_index":245,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w3school",{"_index":2103,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wait",{"_index":2162,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["walkeralpha",{"_index":402,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["wall",{"_index":2097,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wallet",{"_index":1159,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["walletにログインしたときに、全残高を見るためにはrec",{"_index":1161,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["walletディレクトリでnpm",{"_index":1275,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1500,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["want",{"_index":1821,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["warn",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1229,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["watch",{"_index":2044,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["watcher",{"_index":1293,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["way",{"_index":1704,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["weather",{"_index":1388,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["web",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["websit",{"_index":1941,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["webサイト、またはiota",{"_index":686,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1428,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなどで、cda",{"_index":1652,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1221,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["webサーバー：nginx",{"_index":1496,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバーのip",{"_index":757,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["weight",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["well",{"_index":1912,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wereaddressesspentfrom",{"_index":891,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["whenev",{"_index":1731,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["wide",{"_index":985,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["wifi",{"_index":1186,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["window",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["windowsまたはlinux",{"_index":1246,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["winternitzワンタイム署名方式（w",{"_index":243,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["winternitzワンタイム署名（w",{"_index":351,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":1611,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1105,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["within",{"_index":1996,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["without",{"_index":1954,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["withplugin",{"_index":1617,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wl",{"_index":1949,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wlp3s0",{"_index":1955,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":917,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["workflow",{"_index":1468,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1421,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["worri",{"_index":1847,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["written",{"_index":2063,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["x",{"_index":1415,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["x86",{"_index":2010,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1200,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1391,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["you'd",{"_index":1741,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["you'll",{"_index":1815,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["you'r",{"_index":1743,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["you'v",{"_index":1868,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["yougetsignal.com",{"_index":1825,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["zero",{"_index":624,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":792,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":804,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zip",{"_index":1854,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":201,"docTitle":{"docs/iri/0.1/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{}}}],["zmqwatcher.j",{"_index":1330,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":791,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":627,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":795,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":628,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":801,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":830,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":789,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":788,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":626,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1409,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _projects = __webpack_require__(8);

var _propTypes = __webpack_require__(3);

var _Heading = __webpack_require__(11);

var _Heading2 = _interopRequireDefault(_Heading);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

var _ScrollToTop = __webpack_require__(98);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _Text = __webpack_require__(12);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        var projectParts = (0, _projects.parseProjectUrl)(_this.props.location.pathname);

        var projectLinks = (0, _projects.createProjectLinks)(_this.props.projects);

        var dynamicSections = [{
            heading: props.footerData.footerDocsSectionTitle,
            links: projectLinks
        }];

        _this.state = {
            projectLinks: (0, _projects.createProjectLinks)(_this.props.projects),
            currentProjectFolder: projectParts.projectFolder,
            footerSections: dynamicSections.concat(props.footerData.footerSections),
            footerStaticContent: props.footerData.footerStaticContent
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Footer, [{
        key: 'handleClick',
        value: function handleClick(urlOrProjectFolder) {
            if (urlOrProjectFolder.startsWith('http')) {
                window.open(urlOrProjectFolder, '_blank');
            } else {
                this.props.history.push(this.state.projectLinks.find(function (pl) {
                    return pl.folder === urlOrProjectFolder;
                }).link);
            }
            this.setState({ currentProject: urlOrProjectFolder });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'footer',
                { className: 'footer' },
                _react2.default.createElement(
                    'div',
                    { className: 'footer__wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-top-content' },
                        this.state.footerSections.map(function (_ref) {
                            var heading = _ref.heading,
                                links = _ref.links;
                            return _react2.default.createElement(
                                'section',
                                { key: heading, className: 'footer-top-content__wrapper' },
                                _react2.default.createElement(_Heading2.default, { level: 3, text: heading, className: 'footer-top-content__heading' }),
                                links.map(function (item) {
                                    return _react2.default.createElement(
                                        _react2.default.Fragment,
                                        { key: item.name },
                                        item.link && _react2.default.createElement(
                                            _Link2.default,
                                            { href: item.link, className: 'footer-top-content__link' },
                                            item.name
                                        )
                                    );
                                })
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-top-content__dropdown-wrapper' },
                        _react2.default.createElement(_Heading2.default, { level: 3, text: 'Jump to a section', className: 'footer-top-content__heading' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'select-wrapper' },
                            _react2.default.createElement(
                                'select',
                                {
                                    onChange: function onChange(e) {
                                        return _this2.handleClick(e.target.value);
                                    },
                                    value: this.state.currentProjectFolder,
                                    className: 'select footer-top-content__dropdown' },
                                _react2.default.createElement(
                                    'option',
                                    { value: '' },
                                    'Select a topic'
                                ),
                                this.state.footerSections.map(function (_ref2) {
                                    var heading = _ref2.heading,
                                        links = _ref2.links;
                                    return _react2.default.createElement(
                                        'optgroup',
                                        { key: heading, label: heading },
                                        links.map(function (item) {
                                            return _react2.default.createElement(
                                                'option',
                                                { key: item.name, value: item.folder || item.link },
                                                item.name
                                            );
                                        })
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-bottom-content' },
                        _react2.default.createElement(
                            'section',
                            { className: 'footer-bottom-content__wrapper' },
                            this.state.footerStaticContent.address.map(function (text) {
                                return _react2.default.createElement(
                                    _Text2.default,
                                    { key: text, className: 'footer-bottom-content__item', html: true },
                                    text
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'footer-bottom-content__wrapper legal' },
                            this.state.footerStaticContent.legal.map(function (text) {
                                return _react2.default.createElement(
                                    _Text2.default,
                                    { key: text, className: 'footer-bottom-content__item', html: true },
                                    text
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'footer-bottom-content__wrapper copyright' },
                            this.state.footerStaticContent.copyright.map(function (text) {
                                return _react2.default.createElement(
                                    _Text2.default,
                                    { key: text, className: 'footer-bottom-content__item', html: true },
                                    text
                                );
                            })
                        ),
                        _react2.default.createElement(_ScrollToTop2.default, null)
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

Footer.propTypes = {
    footerData: _propTypes.FooterDataPropTypes,
    projects: _propTypes.ProjectsPropTypes.isRequired,
    history: _reactRouterPropTypes2.default.history,
    location: _reactRouterPropTypes2.default.location
};
exports.default = Footer;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollToTop = function ScrollToTop() {

    var onScrollToTop = function onScrollToTop() {
        var target = document.querySelector('#root');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return _react2.default.createElement('button', {
        className: 'scroll-to-top',
        onClick: onScrollToTop });
};

exports.default = ScrollToTop;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyleProptype = __webpack_require__(26);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _ClickOutside = __webpack_require__(37);

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropSelector = function (_React$PureComponent) {
    _inherits(DropSelector, _React$PureComponent);

    function DropSelector(props) {
        _classCallCheck(this, DropSelector);

        var _this = _possibleConstructorReturn(this, (DropSelector.__proto__ || Object.getPrototypeOf(DropSelector)).call(this, props));

        _this.state = {
            isExpanded: false
        };

        _this.handleExpand = _this.handleExpand.bind(_this);
        return _this;
    }

    _createClass(DropSelector, [{
        key: 'handleExpand',
        value: function handleExpand() {
            this.setState({ isExpanded: !this.state.isExpanded });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _ClickOutside2.default,
                { onClickOutside: this.state.isExpanded ? this.handleExpand : undefined },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('drop-selector', { 'drop-selector__expanded': this.state.isExpanded }),
                        style: this.props.style },
                    _react2.default.createElement(
                        'div',
                        { className: 'drop-selector-title', onClick: this.handleExpand },
                        _react2.default.createElement(
                            'div',
                            { className: 'drop-selector-title__text' },
                            this.props.currentName
                        ),
                        _react2.default.createElement('div', { className: 'drop-selector-title__icon' })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'drop-selector-list' },
                        this.props.items.map(function (item) {
                            return _react2.default.createElement(
                                'li',
                                { key: item.link, className: (0, _classnames2.default)('drop-selector-list-item', { 'drop-selector-list-item__selected': item.name === _this2.props.currentName }) },
                                _react2.default.createElement(
                                    'a',
                                    { href: item.link },
                                    item.name
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return DropSelector;
}(_react2.default.PureComponent);

DropSelector.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        link: _propTypes2.default.string.isRequired
    })),
    currentName: _propTypes2.default.string,
    style: _reactStyleProptype2.default
};
exports.default = DropSelector;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigator = function (_React$Component) {
    _inherits(Navigator, _React$Component);

    function Navigator(props) {
        _classCallCheck(this, Navigator);

        var _this = _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call(this, props));

        _this.state = {
            nextTitle: '',
            nextUrl: '',
            previousTitle: '',
            previousUrl: ''
        };
        return _this;
    }

    _createClass(Navigator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var projectUrlParts = (0, _projects.parseProjectUrl)(this.props.pathname);
            var nextIndexItem = (0, _projects.getNextPage)(projectUrlParts, this.props.projects);
            var previousIndexItem = (0, _projects.getPreviousPage)(projectUrlParts, this.props.projects);

            this.setState({
                nextTitle: nextIndexItem ? nextIndexItem.name.replace(/\//g, ' / ') : '',
                nextUrl: nextIndexItem ? nextIndexItem.link : '',
                previousTitle: previousIndexItem ? previousIndexItem.name.replace(/\//g, ' / ') : '',
                previousUrl: previousIndexItem ? previousIndexItem.link : ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'navigator' },
                _react2.default.createElement(
                    _Link2.default,
                    { href: this.state.previousUrl, className: 'navigator__back', disabled: !this.state.previousUrl },
                    _react2.default.createElement(
                        'div',
                        { className: 'navigator__label' },
                        '\u524D\u3078'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'navigator__title' },
                        this.state.previousTitle
                    )
                ),
                _react2.default.createElement(
                    _Link2.default,
                    { href: this.state.nextUrl, className: 'navigator__next', disabled: !this.state.nextUrl },
                    _react2.default.createElement(
                        'div',
                        { className: 'navigator__label' },
                        '\u6B21\u3078'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'navigator__title' },
                        this.state.nextTitle
                    )
                )
            );
        }
    }]);

    return Navigator;
}(_react2.default.Component);

Navigator.propTypes = {
    projects: _propTypes3.ProjectsPropTypes,
    pathname: _propTypes2.default.string
};
exports.default = Navigator;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubHeader = function (_React$Component) {
    _inherits(SubHeader, _React$Component);

    function SubHeader(props) {
        _classCallCheck(this, SubHeader);

        var _this = _possibleConstructorReturn(this, (SubHeader.__proto__ || Object.getPrototypeOf(SubHeader)).call(this, props));

        _this.state = {
            currProject: '',
            currTitle: '',
            nextTitle: '',
            nextUrl: '',
            previousTitle: '',
            previousUrl: ''
        };
        return _this;
    }

    _createClass(SubHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var projectUrlParts = (0, _projects.parseProjectUrl)(this.props.pathname);
            var nextIndexItem = (0, _projects.getNextPage)(projectUrlParts, this.props.projects);
            var previousIndexItem = (0, _projects.getPreviousPage)(projectUrlParts, this.props.projects);

            this.setState({
                currProject: (0, _projects.getProjectTitle)(projectUrlParts, this.props.projects),
                currTitle: (0, _projects.getDocumentTitle)(projectUrlParts, this.props.projects),
                nextTitle: nextIndexItem ? nextIndexItem.name : '',
                nextUrl: nextIndexItem ? nextIndexItem.link : '',
                previousTitle: previousIndexItem ? previousIndexItem.name : '',
                previousUrl: previousIndexItem ? previousIndexItem.link : ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'sub-header__wrapper' },
                _react2.default.createElement(
                    'section',
                    { className: 'sub-header' },
                    _react2.default.createElement(
                        'span',
                        { className: 'sub-header__title' },
                        this.state.currProject
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'sub-header__body' },
                        _react2.default.createElement(_Link2.default, { href: this.state.previousUrl, className: 'arrow-button arrow-button--left', disabled: !this.state.previousUrl }),
                        _react2.default.createElement(
                            'span',
                            { className: 'sub-header__bottom-title' },
                            this.state.currTitle
                        ),
                        _react2.default.createElement(_Link2.default, { href: this.state.nextUrl, className: 'arrow-button arrow-button--right', disabled: !this.state.nextUrl })
                    )
                )
            );
        }
    }]);

    return SubHeader;
}(_react2.default.Component);

SubHeader.propTypes = {
    projects: _propTypes3.ProjectsPropTypes,
    pathname: _propTypes2.default.string
};
exports.default = SubHeader;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterPropTypes = __webpack_require__(4);

var _reactRouterPropTypes2 = _interopRequireDefault(_reactRouterPropTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scroll = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableOfContents = function (_React$PureComponent) {
    _inherits(TableOfContents, _React$PureComponent);

    function TableOfContents(props) {
        _classCallCheck(this, TableOfContents);

        var _this = _possibleConstructorReturn(this, (TableOfContents.__proto__ || Object.getPrototypeOf(TableOfContents)).call(this, props));

        _this.state = {
            activeTarget: undefined,
            filteredItems: _this.props.items
        };
        return _this;
    }

    _createClass(TableOfContents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll = this.handleScroll.bind(this);
            this.handleClick = this.handleClick.bind(this);

            document.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (this.props.items.length !== prevProps.items.length || !this.targets) {
                var headingCounters = {};

                var filteredItems = this.props.items;
                if (filteredItems.length > 30) {
                    filteredItems = filteredItems.filter(function (i) {
                        return i.level <= 2;
                    });
                }

                this.targets = filteredItems.map(function (item) {
                    var id = item.link;

                    if (headingCounters[id] === undefined) {
                        headingCounters[id] = -1;
                    }
                    headingCounters[id]++;
                    if (headingCounters[id] > 0) {
                        id = id + '_' + headingCounters[id];
                    }

                    item.link = id;

                    var target = document.getElementById(item.link.substring(1));
                    if (!target) {
                        // eslint-disable-next-line no-console
                        console.error('Unable to find TOC link \'' + item.link.substring(1) + '\' in content');
                    }

                    return target;
                }).filter(function (t) {
                    return t !== undefined && t !== null;
                });

                this.setState({
                    filteredItems: filteredItems
                }, function () {
                    _this2.handleScroll();
                    var defaultTarget = _this2.props.history.location && _this2.props.history.location.hash;
                    if (defaultTarget) {
                        var elem = document.querySelector(defaultTarget);
                        if (elem) {
                            (0, _scroll.scrollIntoView)(elem);
                        }
                    }
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            if (this.targets && this.targets.length > 0) {
                var activeTarget = this.targets[0].id;
                var scrollTop = (0, _scroll.currentScrollTop)();

                for (var i = 0; i < this.targets.length; i++) {
                    if (scrollTop >= this.targets[i].offsetTop - 200) {
                        activeTarget = this.targets[i].id;
                    }
                }

                if (activeTarget !== this.state.activeTarget) {
                    this.setState({
                        activeTarget: activeTarget
                    });
                }
            }
        }
    }, {
        key: 'isElementInViewport',
        value: function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();

            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _this3 = this;

            e.preventDefault();

            var href = e.target.getAttribute('href');
            var target = document.querySelector(href);
            if (!target) {
                // eslint-disable-next-line no-console
                console.error('Unable to find TOC link \'' + href + '\' in content');
            } else {
                (0, _scroll.scrollIntoView)(target, function () {
                    _this3.props.history.replace('' + _this3.props.history.location.pathname + _this3.props.history.location.search + (href === '#root' ? '' : href));
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('table-of-contents', { 'table-of-contents__compact': this.props.compact }) },
                _react2.default.createElement(
                    'h3',
                    { className: 'table-of-contents__section-title' },
                    this.props.title
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'table-of-contents__section' },
                    this.state.filteredItems.map(function (item, idx) {
                        return _react2.default.createElement(
                            'li',
                            { key: idx, className: (0, _classnames2.default)('table-of-contents-list-item', { 'table-of-contents-list-item__sub': item.level > 2 }, { 'table-of-contents-list-item__selected': _this4.state.activeTarget === item.link.substring(1) }) },
                            _react2.default.createElement(
                                'a',
                                { href: item.link, onClick: _this4.handleClick },
                                item.name
                            )
                        );
                    })
                )
            );
        }
    }]);

    return TableOfContents;
}(_react2.default.PureComponent);

TableOfContents.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        link: _propTypes2.default.string.isRequired
    })),
    title: _propTypes2.default.string.isRequired,
    compact: _propTypes2.default.bool,
    history: _reactRouterPropTypes2.default.history
};
exports.default = TableOfContents;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeMenu = function (_React$Component) {
    _inherits(TreeMenu, _React$Component);

    function TreeMenu(props) {
        _classCallCheck(this, TreeMenu);

        var _this = _possibleConstructorReturn(this, (TreeMenu.__proto__ || Object.getPrototypeOf(TreeMenu)).call(this, props));

        _this.state = {
            sections: []
        };
        return _this;
    }

    _createClass(TreeMenu, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.menuItems !== prevProps.menuItems) {
                this.setState({
                    sections: (0, _projects.buildItemTree)(this.props.menuItems, this.props.highlightedItem)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var sections = this.state.sections;

            return _react2.default.createElement(
                'div',
                { className: 'tree-menu' },
                sections.map(function (section, idx) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        { key: idx },
                        section.type === 'section-link' && _react2.default.createElement(
                            'h3',
                            {
                                className: (0, _classnames2.default)('tree-menu__section-title') },
                            _react2.default.createElement(
                                _Link2.default,
                                { to: section.link, target: section.link.startsWith('http') ? '_blank' : undefined },
                                section.name
                            )
                        ),
                        section.type === 'section-header' && _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                'h3',
                                { className: (0, _classnames2.default)('tree-menu__section-title') },
                                section.name
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: (0, _classnames2.default)('tree-menu__section') },
                                section.items.map(function (item, idx2) {
                                    return _react2.default.createElement(
                                        _react2.default.Fragment,
                                        { key: idx2 },
                                        _react2.default.createElement(
                                            'li',
                                            {
                                                className: (0, _classnames2.default)('tree-menu__section-item', { 'tree-menu__section-item--selected': item.selected })
                                            },
                                            item.type === 'section-header-item' && _react2.default.createElement(
                                                _Link2.default,
                                                { href: item.link, target: item.link.startsWith('http') ? '_blank' : undefined },
                                                item.name
                                            ),
                                            item.type === 'section-header-sub' && _react2.default.createElement(
                                                _react2.default.Fragment,
                                                null,
                                                _react2.default.createElement(
                                                    _Link2.default,
                                                    { href: item.items[0].link, target: item.items[0].link.startsWith('http') ? '_blank' : undefined },
                                                    item.name,
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'tree-menu__section-item-superscript' },
                                                        item.items.length > 1 ? ' [' + item.items.length + ']' : ''
                                                    )
                                                ),
                                                item.selected && _react2.default.createElement(
                                                    'ul',
                                                    { className: 'tree-menu__section-item-sub' },
                                                    item.items.map(function (child, idx3) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: idx3,
                                                                className: (0, _classnames2.default)('tree-menu__section-item-sub-child', { 'tree-menu__section-item-sub-child--selected': child.selected })
                                                            },
                                                            _react2.default.createElement(
                                                                _Link2.default,
                                                                { href: child.link, target: child.link.startsWith('http') ? '_blank' : undefined },
                                                                child.name
                                                            )
                                                        );
                                                    })
                                                )
                                            )
                                        )
                                    );
                                })
                            )
                        )
                    );
                })
            );
        }
    }]);

    return TreeMenu;
}(_react2.default.Component);

TreeMenu.propTypes = {
    menuItems: _propTypes3.ContentMenuItemsPropTypes.isRequired,
    highlightedItem: _propTypes2.default.string.isRequired
};
exports.default = TreeMenu;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VersionPicker = function (_React$Component) {
    _inherits(VersionPicker, _React$Component);

    function VersionPicker(props) {
        _classCallCheck(this, VersionPicker);

        return _possibleConstructorReturn(this, (VersionPicker.__proto__ || Object.getPrototypeOf(VersionPicker)).call(this, props));
    }

    _createClass(VersionPicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                versions = _props.versions,
                currentVersion = _props.currentVersion;

            return versions.length > 1 ? _react2.default.createElement(
                'div',
                { className: 'version-picker__wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'version-picker' },
                    _react2.default.createElement('div', { className: 'left-column' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'middle-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'version-picker__current' },
                            '' + (currentVersion === versions[versions.length - 1] ? 'You are viewing the latest version of this documentation' : 'There are newer versions of this documentation available')
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'right-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'version-picker-select__wrapper' },
                            _react2.default.createElement(
                                'select',
                                {
                                    className: 'version-picker__select',
                                    value: currentVersion,
                                    onChange: function onChange(e) {
                                        return _this2.props.onChange(e.target.value);
                                    } },
                                versions.map(function (version, indx) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: indx, value: version },
                                        'Version ',
                                        version
                                    );
                                })
                            )
                        )
                    )
                )
            ) : null;
        }
    }]);

    return VersionPicker;
}(_react2.default.Component);

VersionPicker.propTypes = {
    versions: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    currentVersion: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired
};
exports.default = VersionPicker;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("lunr");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _search = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResult = function (_React$Component) {
    _inherits(SearchResult, _React$Component);

    function SearchResult(props) {
        _classCallCheck(this, SearchResult);

        return _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call(this, props));
    }

    _createClass(SearchResult, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var res = this.props.foundResult.length > 0 ? 'Showing results ' + (this.props.indexStart + 1) + ' to ' + (this.props.indexEnd + 1) + '.' : '';
            return _react2.default.createElement(
                'div',
                { className: 'search-result' },
                _react2.default.createElement(
                    'div',
                    { className: 'search-result__total' },
                    this.props.foundResult.length + ' documents found for "' + this.props.query + '". ' + res
                ),
                this.props.foundResult.slice(this.props.indexStart, this.props.indexEnd + 1).map(function (elm) {
                    return _react2.default.createElement(
                        'section',
                        { key: elm.id, className: 'search-result__item' },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/' + elm.id + '?' + (0, _search.constructSearchQuery)(_this2.props.query) + '&' + (0, _search.constructHighlights)(elm.matches), exact: true },
                            _react2.default.createElement(
                                'div',
                                { className: 'search-result-item__heading' },
                                elm.name
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'search-result-item__link' },
                                '/' + elm.id
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-paragraph' },
                            elm.summary
                        )
                    );
                })
            );
        }
    }]);

    return SearchResult;
}(_react2.default.Component);

SearchResult.propTypes = {
    foundResult: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.string,
        name: _propTypes2.default.string,
        summary: _propTypes2.default.string,
        matches: _propTypes2.default.arrayOf(_propTypes2.default.string)
    })),
    indexStart: _propTypes2.default.number,
    indexEnd: _propTypes2.default.number,
    query: _propTypes2.default.string
};
exports.default = SearchResult;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parallaxJs = __webpack_require__(108);

var _parallaxJs2 = _interopRequireDefault(_parallaxJs);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParallaxContainer = function (_React$PureComponent) {
    _inherits(ParallaxContainer, _React$PureComponent);

    function ParallaxContainer() {
        _classCallCheck(this, ParallaxContainer);

        return _possibleConstructorReturn(this, (ParallaxContainer.__proto__ || Object.getPrototypeOf(ParallaxContainer)).apply(this, arguments));
    }

    _createClass(ParallaxContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.parallaxInstance = new _parallaxJs2.default(this.parallaxEl, {});
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'parallax', ref: function ref(el) {
                        return _this2.parallaxEl = el;
                    } },
                this.props.children
            );
        }
    }]);

    return ParallaxContainer;
}(_react2.default.PureComponent);

ParallaxContainer.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
exports.default = ParallaxContainer;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("parallax-js");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".parallax,.parallax>div{position:absolute;height:100%;width:100%;top:0;left:0;z-index:1;pointer-events:none}.parallax img{position:absolute;-webkit-box-shadow:10px 50px 50px rgba(0,0,0,.15);box-shadow:10px 50px 50px rgba(0,0,0,.15)}.parallax div:first-child img{top:70%;left:16%;-webkit-transform:rotate(12deg) scale(.8);-ms-transform:rotate(12deg) scale(.8);transform:rotate(12deg) scale(.8)}.parallax div:nth-child(2) img{top:20%;left:20%;-webkit-transform:rotate(-12deg);-ms-transform:rotate(-12deg);transform:rotate(-12deg)}.parallax div:nth-child(3) img{top:10%;left:0;-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.parallax div:nth-child(4) img{top:30%;left:10%;-webkit-transform:rotate(8deg) scale(2);-ms-transform:rotate(8deg) scale(2);transform:rotate(8deg) scale(2)}.parallax div:nth-child(5) img{top:50%;left:70%;-webkit-transform:rotate(-12deg) scale(.8);-ms-transform:rotate(-12deg) scale(.8);transform:rotate(-12deg) scale(.8)}.parallax div:nth-child(6) img{top:60%;left:75%;-webkit-transform:rotate(12deg);-ms-transform:rotate(12deg);transform:rotate(12deg)}.parallax div:nth-child(7) img{top:20%;left:90%;-webkit-transform:rotate(-18deg) scale(2);-ms-transform:rotate(-18deg) scale(2);transform:rotate(-18deg) scale(2)}@media (max-width:980px){.parallax div:first-child img{left:-2%}.parallax div:nth-child(2) img{left:2%;top:50%}.parallax div:nth-child(3) img{left:-10%}.parallax div:nth-child(4) img{left:-5%}.parallax div:nth-child(5) img{left:90%}.parallax div:nth-child(6) img{left:85%}.parallax div:nth-child(7) img{left:95%}}@media (max-width:620px){.parallax div:first-child img,.parallax div:nth-child(2) img{display:none}.parallax div:nth-child(3) img{left:-10%;top:0}.parallax div:nth-child(4) img{display:none}.parallax div:nth-child(5) img{top:10%}.parallax div:nth-child(6) img{display:none}.parallax div:nth-child(7) img{left:40%;top:90%}}", ""]);

// exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".not-found{position:relative;width:100%;height:800px;overflow:hidden;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.not-found h1{font-size:140px;line-height:140px;color:#20a49d;font-weight:300;text-align:center;margin:110px 0 20px}.not-found nav{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.not-found .button{text-transform:none;border-color:#3f3f3f;color:#3f3f3f}.not-found .button:hover{text-decoration:none;border-color:#7d7d7d}.not-found h2{font-weight:600;font-size:22px;margin-bottom:25px;color:#3f3f3f}.not-found h2,.not-found p{line-height:32px;max-width:370px;text-align:center}.not-found p{font-weight:400;font-size:16px;margin-bottom:175px;color:#4f4f4f}.not-found aside{position:absolute;height:100%;width:100%;top:0;left:0;z-index:1;pointer-events:none;max-width:1495px;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}@media (max-width:980px){.not-found h1{font-size:90px;line-height:90px;margin:0 0 20px}.not-found h2{font-size:16px;line-height:24px}}@media (max-width:620px){.not-found{height:auto;padding:100px 40px 160px;-webkit-box-sizing:border-box;box-sizing:border-box}.not-found p{margin-bottom:16px}.not-found .button{width:100%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}}", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "#root{min-height:100vh}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.1219a466.js.map