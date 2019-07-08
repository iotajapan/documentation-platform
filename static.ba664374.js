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
                return { name: item.name, link: '#' + (0, _paths.sanitizeHashId)(item.name), level: item.level };
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
            }
            inSection.items.push({
                name: nameParts.slice(1).join('/'),
                link: projectVersionPages[i].link,
                selected: projectVersionPages[i].link === projectFullURL
            });
            if (projectVersionPages[i].link === projectFullURL) {
                inSection.selected = true;
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
            menuData: []
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
                                                        'li',
                                                        { key: idx,
                                                            className: (0, _classnames2.default)('side-menu-item', { 'side-menu-item--active': subItem.selected }) },
                                                        _react2.default.createElement(
                                                            _Link2.default,
                                                            {
                                                                href: subItem.link,
                                                                target: subItem.link.startsWith('http') ? '_blank' : undefined,
                                                                className: (0, _classnames2.default)({ 'side-menu-item--active': subItem.selected }) },
                                                            subItem.name
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
function sanitizeHashId(id, skipLowerCase) {
    // make lower case
    // de-escape spaces
    // replace spaces with hyphens
    if (!id) {
        return id;
    }
    if (!skipLowerCase) {
        id = id.toLowerCase();
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
                            link: match[3]
                        });
                    } else {
                        var matchSecondary = /__(.*)__ ####/g.exec(match[1]);
                        if (matchSecondary && matchSecondary.length === 2) {
                            projectTopics.push({
                                bullet: 'secondary',
                                name: matchSecondary[1],
                                description: match[4],
                                link: match[3]
                            });
                        } else {
                            var matchPlain = /(.*) ####/g.exec(match[1]);
                            if (matchPlain && matchPlain.length === 2) {
                                projectTopics.push({
                                    bullet: 'none',
                                    name: matchPlain[1],
                                    description: match[4],
                                    link: match[3]
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
                        card.content
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
                            content.substring(0, match.index)
                        ));
                        output.push(this.inlineCodeBlock({ value: match[1] }));
                        content = content.substring(match.index + match[0].length);
                    } else {
                        output.push(_react2.default.createElement(
                            'span',
                            { style: { whiteSpace: 'pre-line' }, key: output.length },
                            content
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
                        localProps.href += '#' + (0, _paths.sanitizeHashId)(anchorParts[1]);
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
        value: function inlineCodeBlock(props) {
            return _react2.default.createElement('div', {
                className: 'text text-inline--code markdown-code-inline',
                dangerouslySetInnerHTML: { __html: props.value } });
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
            }).join('')));
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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のコンピュータがイミュータブルなデータと価値を相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続をたどって各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードは、アドレスと秘密鍵のペアを導出し、IOTAトークンを取り出すバンドルに署名するために使用される秘密のパスワードです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"トランザクションは、単独で使用することも、他のトランザクションと一緒にパッケージ化することもできる単一の操作です。単独型のトランザクションは、たとえばIOTAトークンを含まないデータのみを送信するものです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルは、データを送信したり、ノードにIOTAトークンを特定のアドレスから特定のアドレスに転送するように指示する1つ以上のトランザクショングループです。バンドル内の各トランザクションの運命は、残りの部分に依存します。つまりすべてのトランザクションが有効か、またはすべて無効かです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードとは、偽造物がないことを確認するためにトランザクションを検証する責任があるコンピュータです。 IOTAネットワーク内のクライアントは、トランザクションを検証してタングルに添付できるように、バンドルをノードに送信する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テストトークンを送信する（Node.js）","summary":"商品やサービスと引き換えにIOTAトークンを誰かに送ることができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"IOTAネットワーク","summary":"IOTAでは、トランザクションのバンドルをノードに送信する必要があります。IOTAには、3つのパブリックネットワークがあります。各ネットワークには、ノードがトランザクションを追加できるそれぞれ独自の分散台帳（タングル）があります。どのパブリックネットワーク上のノードにバンドルを接続して送信するかを選べます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/iota-basics/0.1/introduction/overview","name":"IOTAの基本概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のIOTAトークンの量を定義しま..."},{"id":"docs/iota-basics/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはIOTAトークンを保持するアカウントで、署名はアドレスの所有権を証明します。"},{"id":"docs/iota-basics/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"トランザクションは、ノードに送信できる単一の操作です。トランザクションはIOTAトークンの取り出し/預け入れや、データを送信することができます。ノードに1つ以上のトランザクションを送信するには、トランザクションをバンドルにパッケージ化する必要があります。"},{"id":"docs/iota-basics/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、MWMと同じ数の0トリットが並ぶまで繰り返しハッシュ化を行います。 MWMが高いほど、プルーフオブワークは難しくなります。クライアントとしてIOTAネットワークと対話するときは、ネッ..."},{"id":"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/iota-basics/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトに変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/iota-basics/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/iota-basics/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/iota-basics/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/iota-basics/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/iota-basics/0.1/references/tryte-alphabet","name":"トライト文字","summary":"この表は、トライトからトライトがエンコードされた文字への変換と、それに相当する10進数の値を表しています。"},{"id":"docs/iota-basics/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/iota-basics/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/the-tangle/0.1/introduction/overview","name":"タングル概要","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続を辿って各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態の..."},{"id":"docs/the-tangle/0.1/concepts/the-coordinator","name":"コーディネーター","summary":"コーディネーターは、同じアドレスから定期的にトランザクションのバンドルを作成、署名、および送信するクライアントアプリケーションです。これらのバンドルには、ノードが合意に達するために使用するマイルストーンと呼ばれるトランザクションが含まれています。マイルストーンがタングル内のトランザクションを直接または間接的に参照して承..."},{"id":"docs/the-tangle/0.1/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。"},{"id":"docs/the-tangle/0.1/concepts/incentives-in-the-tangle","name":"タングル内のインセンティブ","summary":"チップ選択アルゴリズムは強制されていません。その代わりに、ノードは、自分のトランザクションが確定される最良の機会を得るためにチップ選択アルゴリズムを使用するインセンティブがあります。"},{"id":"docs/the-tangle/0.1/concepts/proof-of-work","name":"プルーフオブワーク","summary":"プルーフオブワークは、計算は難しいが検証は簡単な数学的問題に対する答えです。 IOTAでは、プルーフオブワークはスパムトランザクションからネットワークを保護します。バンドル内の各トランザクションには、有効であることを証明するプルーフオブワークが含まれている必要があります。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iri/0.1/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。 IRIを実行するコンピューターはIRIノードと呼ばれます。"},{"id":"docs/iri/0.1/concepts/the-ledger","name":"台帳","summary":"ノードは、自分が受け取った有効なすべてのトランザクションを、組み込みの追加専用のRocksDBデータベースである台帳に格納することによって記録します。 IOTAネットワーク内の全ノードの集合データベースがタングルを構成します。"},{"id":"docs/iri/0.1/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/iri/0.1/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/iri/0.1/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/iri/0.1/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバーでIRIノードを実行する","summary":"Linuxサーバー上でIRIを実行すると、LinuxサーバーがIOTAネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、コンピュータはIRIノード用のLinuxサーバーになり、IOTAネットワークに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバーを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバーに接続します。"},{"id":"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/iri/0.1/how-to-guides/interact-with-an-iri-node","name":"ノードに情報をリクエストする","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/iri/0.1/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/iri/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"IRIのインストール、設定、または実行中に、これらの一般的な問題のいくつかを見かけることがあります。"},{"id":"docs/iri/0.1/references/api-reference","name":"APIリファレンス","summary":"重要： このAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。"},{"id":"docs/iri/0.1/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/iri/0.1/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/iri/0.1/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/iri/0.1/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/iri/0.1/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/hub/0.1/introduction/overview","name":"ハブ概要","summary":"ハブはアプリケーションにプラグインできるヘッドレスマルチユーザーウォレットです。gRPC APIを通して、ハブはIOTAトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、ID、預け入れアドレス、取り出しリクエストなどのユーザー情報を保存します..."},{"id":"docs/hub/0.1/concepts/sweeps","name":"スウィープ","summary":"スウィープは、ユーザーの取り出し操作を実行し、IOTAトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1つに転送するバンドルです。スウィープは、攻撃者が使用済みアドレスからトークンを盗む可能性を減らすためのオプションの安全機能です。"},{"id":"docs/hub/0.1/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/hub/0.1/how-to-guides/install-the-signing-server","name":"署名サーバーをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバーに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバーをインストールして実行します。"},{"id":"docs/hub/0.1/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本について..."},{"id":"docs/hub/0.1/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/hub/0.1/how-to-guides/integrate-hub","name":"ハブを暗号資産取引所に統合する","summary":"シナリオA： IOTAトークンが外部のオンラインウォレット（別名：ホットウォレット）に手動で転送される複数のユーザーアカウント。"},{"id":"docs/hub/0.1/references/api-reference","name":"APIリファレンス","summary":"タングルとハブデータベースへの接続を簡単にするために、ハブにはgRPC APIがあります。このAPIリファレンスを使用してメソッドを見つけ、メソッドが行うことを学んでください。"},{"id":"docs/hub/0.1/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/hub/0.1/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバに問い合わせることによって見つけることができます。"},{"id":"docs/hub/0.1/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/hub/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/compass/0.1/introduction/overview","name":"コンパス概要","summary":"コンパスはコーディネーターのオープンソース実装です。テストおよび開発の目的で、コンパスを使用して独自のIOTAネットワークを運用することができます。"},{"id":"docs/compass/0.1/how-to-guides/create-an-iota-network","name":"IOTAネットワークを作成する","summary":"自分のIOTAネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをIRIノードに接続することができます。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/compass/0.1/references/contribution-guidelines","name":"貢献ガイドライン","summary":""},{"id":"docs/trinity/0.1/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。"},{"id":"docs/trinity/0.1/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/trinity/0.1/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/trinity/0.1/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/trinity/0.1/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/trinity/0.1/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/trinity/0.1/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/trinity/0.1/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/receive-a-transaction","name":"トランザクションを受取る","summary":"トリニティには、トランザクションを受取り、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/trinity/0.1/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/trinity/0.1/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/trinity/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"Peer-to-peer energy grid","summary":"Although the supply of energy is often automated, the payment system is expensive to integrate and often requires manual intervention. By creating a peer-to-pee..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"Application architecture","summary":"The P2P energy grid application publishes data from sources, producers, consumers, and the grid to MAM channels through a node in an IOTA network."},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"Deploy the P2P energy grid app","summary":"To start using the P2P energy grid app, deploy your own application."},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"Tangle data storage overview","summary":"Data boosts innovation for public and private sector organisations, and can be used to create new revenue streams. However, without a vendor-neutral way of veri..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"Application architecture","summary":"The Tangle data storage application consists of two parts: A graphical user interface (GUI), written in React and a back-end API, written in NodeJS."},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"Deploy and test the Tangle data storage app","summary":"To start storing data in the IPFS node and the Tangle, deploy the application and use our graphical user interface to upload file data, retrieve file data, and ..."},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"Track and trace overview","summary":"Due to a lack of both due diligence and a vendor-neutral data source, returnable assets that are used within distribution networks are often not returned to the..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"Application architecture","summary":"The track-and-trace application uses the IOTA MAM protocol to give returnable assets an ID and to track those assets in streams of transactions called MAM chann..."},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"Deploy and test the track and trace app","summary":"To start tracking data on the Tangle, deploy the application and use our graphical user interface to search for and upload assets."},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"EventMachineオブジェクトでアカウントが開始されると、EventMachineオブジェクトは発生時にイベントを発行します。イベントの一例は、バンドルをノードに送信したときです。リスナーのインスタンスを作成することで、これらのイベントをリッスンしてイベントに対処することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-java/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-js/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/general/0.1/introduction/overview","name":"General overview","summary":"This section contains some prerequisite information that aims to help you complete some of our guides."},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"Expose your local device to the Internet","summary":"To connect a device to those outside of your local network, you need to expose it to the Internet. A common reason to expose your local device to the Internet i..."},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"Set up a Linux server on a virtual machine","summary":"Many of the IOTA tutorials and guides require a Linux operating system. If your computer is running a different operating system, you can use Linux inside a vir..."},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"Set up a single-board computer","summary":"A single board computer (SBC) is a small computer in which a single circuit board includes memory, input/output ports, a microprocessor and any other necessary ..."},{"id":"docs/general/0.1/references/troubleshooting","name":"Troubleshooting","summary":"Make sure that you selected a 64-bit version of Ubuntu in VirtualBox."},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTA Smart City Blueprints","summary":"This repository consists of examples implementing IOTA for Smart Cities"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTA is a clone of AstroPi, which is a project that used Raspberry Pis on the International Space Station (ISS) to keep astronauts up to date about their ..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"Build your own AstroPiOTA","summary":"In order to run AstroPiOTA, you must have the correct hardware and operating system for a Raspberry Pi."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"Run AstroPiOTA","summary":"The following instructions assume the operating system is configured. Because this installation has several components, scripts are included to make sure that e..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"Connect to the Raspberry Pi through SSH","summary":"If you want to run AstroPiOTA without a monitor and keyboard, you need it's network address to interact with it over SSH. To find the IP address of the Raspberr..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"Customize AstroPiOTA","summary":"The AstroPiOTA sender gathers sensor data from Sense HAT, publishes it to the scrolling marquee, and sends it in JSON format to a MAM channel on the Tangle. The..."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.07,1,34.045,2,43.194,3,34.045,4,3.358]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,5.045]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.05,4,4.71,5,28.29,6,28.29,7,28.29,8,28.29,9,28.29,10,28.29,11,28.29,12,28.29,13,28.29,14,28.29,15,28.29,16,23.006]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.014,4,3.284,17,14.993,18,33.293,19,27.074,20,29.543,21,29.543,22,33.293,23,33.293,24,5.246,25,33.293]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,2.996,4,4.121,26,35.941]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,2.878,4,4.386]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,2.726,4,3.167,17,14.669,27,32.11,28,19.532,29,32.11,30,32.11,31,32.11,32,32.11,33,32.11,34,10.338,35,32.11,36,32.11,37,32.11,38,32.11,39,32.11,40,32.11,41,14.719,42,32.11]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.31]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,2.921,4,4.452,43,35.103,44,35.103,45,35.103]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.31]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,2.996,4,3.919,17,12.94,24,4.924,34,11.097,46,17.879,47,17.879,48,10.275,49,17.879,50,6.87,51,9.851,52,27.727,53,13.549,54,10.21,55,30.586,56,17.879,57,11.44,58,17.879,59,9.522,60,15.614,61,11.536,62,12.758,63,17.879,64,23.361,65,13.549,66,11.042,67,20.16,68,22.296,69,10.21,70,12.1,71,26.326,72,15.866,73,17.879,74,11.536,75,14.54,76,12.1,77,10.604,78,8.675,79,17.879,80,13.549,81,14.54,82,17.879,83,15.872,84,12.1,85,12.1,86,10.604,87,15.866,88,21.409,89,11.536,90,14.021,91,21.146,92,15.866,93,17.879,94,17.879,95,17.216,96,17.879,97,17.879,98,12.1,99,15.866,100,13.549,101,17.879,102,12.1,103,13.549,104,17.879,105,17.879,106,23.361,107,17.879,108,11.536,109,17.879,110,17.879,111,13.549,112,17.879]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[83,21.126]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.102,4,4.267,17,8.409,24,6.69,50,8.607,83,12.771,89,14.452,113,22.4,114,13.834,115,13.285,116,11.93,117,12.342,118,8.813,119,12.791,120,18.216,121,9.487,122,19.877,123,19.877,124,22.4,125,19.877,126,22.4,127,22.4,128,18.216,129,19.877,130,19.877,131,19.877,132,18.216,133,18.216,134,19.877,135,19.877,136,19.877,137,19.877,138,15.159,139,22.4,140,13.834,141,10.868,142,9.487,143,19.877,144,9.252,145,19.877,146,15.984]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.31]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.05,24,4.954,41,14.412,119,17.953,147,31.439,148,31.439,149,27.899,150,31.439,151,31.439,152,21.276,153,31.439,154,22.434,155,25.567,156,31.439,157,31.439,158,31.439,159,31.439]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[83,21.126]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.099,4,4.279,24,5.823,41,11.153,50,12.568,83,13.51,89,15.697,114,15.026,115,14.43,116,12.958,117,13.405,118,9.572,119,18.678,121,10.304,122,21.59,123,21.59,125,21.59,129,21.59,130,21.59,131,21.59,132,19.785,133,19.785,134,21.59,135,21.59,136,21.59,137,21.59,138,16.465,144,10.049,149,21.59,160,24.33,161,24.33,162,24.33,163,24.33]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[164,45.389]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,2.941,4,4.201,51,16.301,54,16.895,119,16.895,146,28.975,164,26.255,165,14.739,166,29.587,167,29.587,168,26.255,169,26.255,170,29.587,171,29.587,172,29.587,173,29.587,174,29.587,175,26.255,176,29.587,177,29.587]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.31]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.113,24,4.403,28,13.966,34,8.995,102,18.908,103,21.173,141,13.556,178,27.94,179,18.908,180,22.721,181,22.721,182,22.721,183,21.173,184,23.112,185,18.027,186,13.966,187,29.131,188,29.131,189,13.171,190,27.94,191,27.94]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,5.045]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,2.954,4,3.847,24,5.729,119,23.289,165,13.702,192,23.568,193,32.264,194,34.612,195,23.568,196,23.568,197,23.458,198,23.568,199,23.568,200,23.568,201,23.568,202,23.568,203,23.568,204,23.568,205,36.192,206,23.568,207,21.666,208,23.568,209,32.015,210,23.568,211,24.261,212,23.568,213,23.568,214,23.568,215,23.568,216,23.568,217,23.568,218,23.568,219,23.568,220,23.568,221,23.568,222,23.568]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.31]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.442,4,3.722]],["docTitle/docs/iota-basics/0.1/introduction/overview",[4,5.045]],["docBody/docs/iota-basics/0.1/introduction/overview",[0,3.07,4,4.423,17,14.003,24,5.878,223,29.782,224,29.782,225,29.782,226,29.782,227,29.782,228,29.782,229,29.782,230,29.782,231,29.782,232,29.782,233,29.782]],["docTitle/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.31]],["docBody/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.067,4,2.595,24,5.43,34,8.471,41,12.062,50,10.11,67,16.977,84,23.318,90,14.014,186,13.153,234,26.313,235,26.313,236,26.313,237,26.313,238,26.313,239,26.313,240,26.313,241,26.313,242,26.313,243,26.313,244,34.456,245,26.313,246,26.313,247,26.313,248,26.313,249,26.313,250,26.313,251,23.35,252,26.313,253,26.313,254,26.313,255,26.313,256,26.313,257,26.313,258,26.313]],["docTitle/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.31]],["docBody/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.062,4,3.923,17,10.621,24,5.69,34,11.625,41,12.968,57,12.294,62,20.187,121,11.982,145,25.104,189,13.335,259,28.29,260,28.29,261,28.29,262,28.29,263,23.006,264,28.29,265,28.29,266,28.29,267,28.29,268,28.29,269,21.438,270,28.29,271,28.29,272,28.29]],["docTitle/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,3.31]],["docBody/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,2.679,24,5.575,28,17.684,273,35.378,274,35.378,275,35.378,276,35.378,277,35.378,278,35.378]],["docTitle/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.31]],["docBody/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.063,70,22.698,279,22.698,280,27.275,281,27.275,282,33.54,283,29.763,284,33.54,285,33.54]],["docTitle/docs/iota-basics/0.1/concepts/trinary",[57,22.227]],["docBody/docs/iota-basics/0.1/concepts/trinary",[57,15.743,286,36.229,287,36.229,288,36.229,289,36.229,290,36.229,291,36.229]],["docTitle/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.065,4,3.101,24,6.079,83,12.985,114,19.417,115,18.646,116,16.744,117,17.322,118,12.369,128,25.567,144,12.985,292,31.439,293,31.439,294,31.439,295,31.439]],["docTitle/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.072,4,2.957,24,5.902,48,12.317,50,11.519,83,12.382,114,18.515,115,17.78,116,15.967,117,16.518,118,11.795,119,17.119,120,24.38,144,12.382,296,29.979,297,29.979,298,29.979,299,26.603,300,29.979]],["docTitle/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.121,4,3.855,24,6.743,66,16.84,83,11.262,114,16.84,115,16.171,116,14.521,117,15.023,118,10.727,138,18.452,144,11.262,186,13.629,301,27.266,302,27.266,303,27.266,304,27.266,305,35.263]],["docTitle/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.06,4,3.478,17,10.236,24,6.743,83,11.262,114,16.84,115,16.171,116,14.521,117,15.023,118,10.727,119,15.569,120,22.173,128,22.173,142,14.935,144,11.262,189,16.622,306,24.195,307,27.266,308,22.173,309,27.266,310,27.266,311,27.266,312,28.676,313,27.266,314,27.266,315,27.266]],["docTitle/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.08,4,2.773,24,6.808,83,11.612,114,17.363,115,16.674,116,14.973,117,15.49,118,11.061,144,11.612,189,13.252,306,24.948,316,28.114,317,28.114,318,35.964,319,29.247,320,28.114,321,35.964,322,28.114,323,24.948,324,28.114]],["docTitle/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.31]],["docBody/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.118,17,9.386,24,6.296,28,12.498,34,8.049,57,10.865,83,10.327,114,15.442,115,14.829,116,13.316,117,13.776,118,9.837,119,14.277,144,10.327,189,11.786,263,20.332,325,25.003,326,22.187,327,25.003,328,25.003,329,25.003,330,25.003,331,25.003,332,25.003,333,25.003,334,33.313,335,25.003,336,25.003,337,14.277,338,25.003,339,18.947,340,25.003]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.31]],["docBody/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,2.768,341,37.429]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.31]],["docBody/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,2.742,269,27.902,280,29.942,342,18.405]],["docTitle/docs/iota-basics/0.1/references/security-levels",[0,3.31]],["docBody/docs/iota-basics/0.1/references/security-levels",[0,2.422,4,3.692,343,37.429]],["docTitle/docs/iota-basics/0.1/references/tryte-alphabet",[0,3.31]],["docBody/docs/iota-basics/0.1/references/tryte-alphabet",[0,2.422,84,25.33,344,37.429]],["docTitle/docs/iota-basics/0.1/references/units-of-iota-tokens",[4,5.045]],["docBody/docs/iota-basics/0.1/references/units-of-iota-tokens",[0,2.363,4,4.16,34,11.758,345,36.522,346,36.522]],["docTitle/docs/iota-basics/0.1/references/glossary",[0,3.31]],["docBody/docs/iota-basics/0.1/references/glossary",[0,3.07,4,4.112,34,10.765,52,22.311,57,14.53,165,14.926,211,19.053,347,25.142,348,25.142,349,25.142,350,25.142,351,25.142,352,25.142,353,25.142,354,25.142,355,25.142,356,25.142,357,25.142,358,25.142,359,25.142,360,25.142,361,25.142,362,25.142,363,25.142,364,25.142,365,25.142,366,25.142,367,25.142,368,25.142,369,25.142,370,25.142]],["docTitle/docs/the-tangle/0.1/introduction/overview",[0,3.31]],["docBody/docs/the-tangle/0.1/introduction/overview",[0,3.035,4,4.302,17,14.544,19,25.746,20,28.094,21,28.094,24,6.105,28,15.826,371,31.66,372,31.66,373,31.66,374,31.66]],["docTitle/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.31]],["docBody/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.092,4,3.36,17,14.302,24,6.38,34,13.546,57,11.238,121,14.428,375,25.861,376,25.861,377,34.066,378,34.066,379,25.861,380,25.861,381,25.861,382,25.861,383,25.861,384,25.861,385,25.861,386,25.861,387,25.861,388,25.861,389,25.861,390,25.861,391,25.861]],["docTitle/docs/the-tangle/0.1/concepts/tip-selection",[0,3.31]],["docBody/docs/the-tangle/0.1/concepts/tip-selection",[0,3.145,4,3.05,17,13.293,24,5.58,34,7.212,189,10.559,392,22.4,393,22.4,394,30.359,395,22.4,396,38.18,397,19.877,398,22.4,399,22.4,400,22.4,401,22.4,402,22.4,403,22.4,404,22.4,405,22.4,406,22.4,407,22.4,408,22.4,409,22.4,410,22.4,411,22.4,412,22.4]],["docTitle/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.31]],["docBody/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,2.961,69,24.126,142,13.697,189,15.244,413,32.339,414,17.818,415,32.339,416,27.26,417,32.339,418,26.299,419,39.244,420,32.339]],["docTitle/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.31]],["docBody/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.001,4,4.091,17,11.641,24,6.027,28,19.119,211,31.431,421,31.008,422,31.008,423,31.008,424,31.008,425,31.008,426,31.008,427,31.008,428,31.008,429,31.008]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.31]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.046,16,23.597,50,11.149,76,19.637,90,15.454,91,19.637,106,25.749,430,29.017,431,26.94,432,29.017,433,29.017,434,29.017,435,29.017,436,22.663,437,29.017,438,29.017,439,29.017,440,14.962,441,21.989,442,19.637,443,29.017,444,15.987]],["docTitle/docs/iota-js/0.1/README",[4,3.783,446,34.033]],["docBody/docs/iota-js/0.1/README",[0,2.969,4,3.686,48,10.918,50,6.366,83,12.337,86,9.826,87,14.702,88,20.23,89,19.272,90,15.908,115,9.826,165,10.034,183,28.319,269,12.556,281,13.474,394,22.635,416,16.05,446,14.702,447,8.543,448,16.568,449,11.099,450,10.233,451,16.568,452,16.568,453,16.568,454,16.568,455,16.568,456,16.568,457,16.568,458,41.099,459,16.568,460,33.201,461,13.474,462,16.568,463,16.568,464,16.568,465,16.568,466,16.568,467,16.568,468,16.568,469,16.568,470,16.568,471,16.568,472,16.568,473,16.568,474,16.568,475,16.568,476,16.568,477,16.568,478,16.568,479,16.568,480,22.075,481,16.568,482,16.568,483,16.568,484,20.23,485,16.568,486,16.568,487,16.568,488,16.568,489,16.568,490,16.568,491,16.568,492,16.568,493,16.568,494,10.233,495,16.568,496,16.568,497,11.213,498,16.568,499,16.568,500,16.568,501,8.543,502,16.568,503,7.595,504,16.568,505,16.568]],["docTitle/docs/iota-java/0.1/README",[4,3.783,91,25.954]],["docBody/docs/iota-java/0.1/README",[0,3.002,4,4.039,17,6.313,48,8.271,50,6.461,70,17.022,91,27.71,92,22.321,165,11.236,299,14.921,308,13.674,447,8.67,449,11.223,450,10.385,497,11.379,506,16.815,507,16.815,508,16.815,509,16.815,510,14.921,511,12.743,512,16.815,513,16.815,514,22.836,515,20.455,516,16.815,517,16.815,518,14.921,519,16.815,520,16.815,521,16.815,522,16.815,523,16.815,524,16.815,525,25.153,526,16.815,527,16.815,528,16.815,529,16.815,530,16.815,531,16.815,532,16.815,533,16.815,534,35.808,535,16.815,536,16.815,537,16.815,538,9.973,539,11.379,540,16.815,541,16.815,542,16.815,543,16.815,544,16.815,545,16.815,546,25.153,547,16.815,548,16.815,549,16.815,550,16.815,551,16.815,552,16.815,553,16.815,554,16.815,555,16.815,556,16.815,557,16.815,558,16.815,559,16.815,560,24.729,561,30.135,562,16.815,563,16.815,564,16.815,565,16.815,566,16.815,567,16.815,568,16.815,569,16.815,570,16.815,571,16.815,572,14.921,573,16.815]],["docTitle/docs/iota-go/0.1/README",[4,3.783,95,21.131]],["docBody/docs/iota-go/0.1/README",[0,3.094,4,4.083,17,7.685,48,6.732,50,7.866,76,13.854,85,27.242,95,20.224,98,13.854,99,18.166,121,8.67,165,11.333,211,22.001,447,10.556,449,9.134,450,12.643,572,18.166,574,20.472,575,20.472,576,20.472,577,20.472,578,16.648,579,20.472,580,20.472,581,20.472,582,20.472,583,20.472,584,20.472,585,20.472,586,20.472,587,20.472,588,20.472,589,20.472,590,20.472,591,20.472,592,29.032,593,20.472,594,20.472,595,20.472,596,36.707,597,29.032,598,20.472,599,20.472,600,20.472,601,20.472,602,18.166,603,20.472,604,20.472,605,20.472]],["docTitle/docs/iri/0.1/introduction/overview",[4,5.045]],["docBody/docs/iri/0.1/introduction/overview",[0,2.813,4,3.409,165,13.72,606,34.566,607,34.566,608,34.566,609,34.566,610,34.566,611,34.566,612,34.566]],["docTitle/docs/iri/0.1/concepts/the-ledger",[0,3.31]],["docBody/docs/iri/0.1/concepts/the-ledger",[0,3.066,4,3.213,24,6.211,100,24.684,143,28.905,165,10.943,613,32.573,614,32.573,615,32.573,616,26.488,617,32.573]],["docTitle/docs/iri/0.1/concepts/neighbor-iri-node",[165,17.184]],["docBody/docs/iri/0.1/concepts/neighbor-iri-node",[0,2.667,165,14.698,618,35.103,619,35.103,620,35.103,621,35.103,622,35.103,623,35.103]],["docTitle/docs/iri/0.1/concepts/transaction-validation",[0,3.31]],["docBody/docs/iri/0.1/concepts/transaction-validation",[0,3.068,4,3.123,17,11.886,165,15.295,624,31.66,625,38.74,626,31.66,627,31.66,628,31.66]],["docTitle/docs/iri/0.1/concepts/zero-message-queue",[0,3.31]],["docBody/docs/iri/0.1/concepts/zero-message-queue",[0,2.892,24,5.365,34,10.961,141,16.518,629,30.211,630,34.045,631,34.045,632,34.045,633,34.045,634,34.045,635,34.045,636,30.211]],["docTitle/docs/iri/0.1/concepts/local-snapshot",[0,3.31]],["docBody/docs/iri/0.1/concepts/local-snapshot",[0,3.082,24,5.97,28,12.781,64,22.689,84,17.303,165,14.469,637,25.569,638,25.569,639,25.569,640,25.569,641,22.689,642,25.569,643,33.812,644,25.569,645,30.004,646,33.812,647,25.569,648,33.812,649,25.569,650,25.569,651,25.569,652,25.569,653,25.569,654,25.569,655,30.004,656,25.569,657,25.569,658,25.569]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[659,45.389]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[0,2.891,24,6.511,48,5.721,76,11.774,86,15.302,91,27.964,119,14.732,138,11.774,144,7.186,165,15.394,186,12.896,194,22.894,449,7.762,539,11.774,616,14.148,659,15.438,660,17.398,661,15.438,662,13.184,663,13.184,664,15.438,665,15.438,666,15.438,667,22.894,668,15.438,669,15.438,670,15.438,671,17.398,672,15.438,673,17.398,674,17.398,675,17.398,676,17.398,677,17.398,678,17.398,679,17.398,680,25.8,681,17.398,682,17.398,683,17.398,684,17.398,685,17.398,686,17.398,687,17.398,688,17.398,689,17.398,690,13.184,691,17.398,692,17.398,693,17.398,694,17.398,695,17.398,696,17.398,697,12.414,698,17.398,699,17.398,700,17.398,701,17.398,702,17.398,703,17.398,704,17.398,705,17.398,706,15.438,707,17.398,708,17.398,709,17.398,710,17.398,711,17.398,712,17.398,713,17.398,714,17.398,715,17.398,716,17.398,717,17.398,718,17.398,719,17.398,720,17.398,721,15.438,722,17.398,723,17.398,724,15.438,725,15.438,726,15.438,727,15.438,728,15.438]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[729,45.389]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[0,2.77,24,5.452,48,9.864,51,11.814,54,12.245,76,14.512,146,31.434,165,15.479,168,19.028,169,19.028,449,9.567,503,13.75,616,17.438,661,19.028,662,16.25,663,16.25,664,19.028,665,19.028,666,19.028,667,26.618,668,19.028,669,19.028,670,19.028,672,19.028,697,24.686,721,19.028,724,19.028,725,19.028,726,19.028,727,19.028,728,19.028,729,19.028,730,21.443,731,21.443,732,17.438,733,21.443,734,21.443,735,21.443,736,21.443,737,21.443,738,21.443,739,21.443,740,21.443,741,21.443,742,21.443,743,21.443,744,21.443,745,21.443,746,21.443,747,21.443,748,21.443,749,16.25,750,17.438,751,21.443,752,21.443]],["docTitle/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.31]],["docBody/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,2.98,24,5.713,753,28.468,754,28.468,755,28.468,756,28.468,757,32.171,758,28.468,759,28.468,760,41.995,761,28.468,762,28.468,763,28.468,764,17.582,765,28.468,766,28.468,767,28.468,768,20.314,769,28.468,770,28.468,771,28.468,772,28.468,773,28.468,774,28.468,775,28.468,776,28.468,777,28.468,778,28.468]],["docTitle/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.31]],["docBody/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.095,17,11.969,165,10.711,645,34.525,655,34.525,779,31.883,780,31.883,781,31.883,782,31.883,783,25.928]],["docTitle/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[165,17.184]],["docBody/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[165,12.369,784,36.819,785,36.819,786,36.819,787,36.819]],["docTitle/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.31]],["docBody/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.041,17,10.755,24,4.514,34,9.223,48,13.156,57,12.449,83,17.947,100,30.318,116,15.258,117,15.785,118,11.271,144,11.833,436,25.997,788,28.649,789,28.649,790,25.423,791,25.423,792,28.649]],["docTitle/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.31]],["docBody/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.042,17,9.439,24,5.269,34,8.094,57,10.926,62,17.94,66,15.528,83,18.068,116,13.39,117,13.852,118,9.891,144,10.384,207,29.008,326,22.311,436,26.473,636,22.311,790,22.311,791,22.311,793,25.142,794,25.142,795,25.142,796,25.142,797,25.142,798,25.142,799,25.142,800,25.142,801,25.142,802,25.142,803,25.142,804,25.142]],["docTitle/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[514,29.063,805,34.033]],["docBody/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[0,3.026,24,5.522,28,10.979,34,7.071,48,7.223,85,14.864,86,13.027,91,14.864,102,14.864,142,12.919,207,20.642,514,16.645,662,16.645,805,19.491,806,21.964,807,35.043,808,21.964,809,21.964,810,21.964,811,21.964,812,21.964,813,21.964,814,21.964,815,21.964,816,21.964,817,21.964,818,21.964,819,21.964,820,21.964,821,21.964,822,21.964,823,21.964,824,19.491,825,21.964,826,30.502,827,17.862,828,21.964,829,21.964,830,21.964,831,21.964,832,21.964,833,21.964,834,21.964,835,21.964,836,21.964,837,21.964,838,21.964,839,19.491,840,21.964,841,21.964,842,21.964,843,21.964,844,17.862,845,21.964,846,21.964,847,21.964,848,21.964,849,21.964,850,21.964,851,21.964,852,21.964,853,21.964,854,21.964]],["docTitle/docs/iri/0.1/how-to-guides/update-the-iri",[165,17.184]],["docBody/docs/iri/0.1/how-to-guides/update-the-iri",[0,2.254,50,13.384,165,15.428,186,17.412,690,26.396,855,34.832,856,34.832,857,34.832]],["docTitle/docs/iri/0.1/references/troubleshooting",[0,3.31]],["docBody/docs/iri/0.1/references/troubleshooting",[0,2.769,24,5.246,165,14.373,858,33.293,859,20.562,860,33.293,861,33.293,862,33.293,863,33.293,864,33.293,865,33.293,866,33.293,867,33.293,868,33.293]],["docTitle/docs/iri/0.1/references/api-reference",[48,16.82]],["docBody/docs/iri/0.1/references/api-reference",[0,3.132,4,1.339,17,5.098,24,4.712,48,7.021,83,17.658,100,10.291,121,5.752,280,11.044,281,11.044,283,12.051,323,12.051,397,12.051,416,8.762,436,26.404,497,14.449,869,13.581,870,13.581,871,13.581,872,21.35,873,15.235,874,13.581,875,42.752,876,37.938,877,34.767,878,21.35,879,13.581,880,13.581,881,13.581,882,13.581,883,13.581,884,13.581,885,13.581,886,12.051,887,13.581,888,13.581,889,10.291,890,13.581,891,13.581,892,13.581,893,13.581,894,13.581,895,13.581,896,13.581,897,13.581,898,13.581,899,13.581]],["docTitle/docs/iri/0.1/references/api-errors",[48,16.82]],["docBody/docs/iri/0.1/references/api-errors",[0,2.628,48,12.215,165,12.479,186,14.789,394,30.772,414,16.301,416,19.089,877,34.634,900,29.587,901,36.033,902,37.147,903,29.587,904,29.587,905,29.587,906,26.255,907,16.895,908,29.587,909,29.587,910,18.273,911,20.023,912,29.587,913,29.587,914,24.06]],["docTitle/docs/iri/0.1/references/data-in-the-ledger",[0,3.31]],["docBody/docs/iri/0.1/references/data-in-the-ledger",[0,2.742,165,12.369,915,36.819,916,29.942]],["docTitle/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,3.31]],["docBody/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,2.442,641,33.492]],["docTitle/docs/iri/0.1/references/iri-configuration-options",[165,17.184]],["docBody/docs/iri/0.1/references/iri-configuration-options",[0,3.065,24,5.308,48,12.422,69,19.235,165,11.317,207,27.218,416,25.95,917,25.425,918,25.425,919,19.235,920,40.219,921,25.527,922,21.734,923,33.686,924,29.892,925,21.734,926,19.235,927,25.527,928,25.425,929,25.425,930,25.425]],["docTitle/docs/iri/0.1/references/zmq-events",[207,34.615]],["docBody/docs/iri/0.1/references/zmq-events",[0,2.717,24,5.709,28,18.11,34,11.664,207,24.518,931,36.229]],["docTitle/docs/hub/0.1/introduction/overview",[0,3.31]],["docBody/docs/hub/0.1/introduction/overview",[0,3.116,4,4.269,24,6.267,34,9.108,48,9.303,932,23.297,933,28.29,934,28.29,935,28.29,936,25.104,937,28.29,938,25.104,939,28.29,940,28.29,941,28.29]],["docTitle/docs/hub/0.1/concepts/sweeps",[0,3.31]],["docBody/docs/hub/0.1/concepts/sweeps",[0,3.087,4,3.788,24,6.053,34,10.052,41,14.313,938,27.706,942,31.222,943,31.222,944,21.129,945,31.222,946,31.222,947,31.222,948,31.222]],["docTitle/docs/hub/0.1/how-to-guides/install-hub",[0,3.31]],["docBody/docs/hub/0.1/how-to-guides/install-hub",[0,3.11,4,1.757,24,4.912,34,5.734,50,6.843,51,9.812,68,12.708,85,12.052,102,17.764,138,12.052,436,10.999,449,11.711,497,12.052,697,12.708,859,16.212,901,15.803,944,23.281,949,17.809,950,9.812,951,18.731,952,17.809,953,23.293,954,15.803,955,26.07,956,17.809,957,17.809,958,15.803,959,11.49,960,17.809,961,17.809,962,17.809,963,13.496,964,17.809,965,17.809,966,15.803,967,17.809,968,34.401,969,17.809,970,14.483,971,15.803,972,17.809,973,14.483,974,17.809,975,17.809,976,23.293,977,17.809,978,17.809,979,17.809,980,17.809,981,17.809,982,17.809,983,17.809,984,17.809,985,17.809,986,17.809,987,21.346,988,17.809,989,17.809,990,15.803,991,11.49,992,15.803,993,14.483,994,17.809,995,17.809,996,17.809,997,17.809,998,17.809,999,17.809,1000,10.169,1001,17.809,1002,17.809,1003,17.809]],["docTitle/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.31]],["docBody/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.104,4,2.076,50,8.086,57,9.145,85,14.241,102,14.241,138,14.241,449,9.389,697,15.016,859,12.997,936,18.674,944,14.241,950,11.594,951,15.016,953,18.674,954,18.674,955,25.952,958,18.674,973,17.113,976,34.749,992,18.674,993,17.113,1004,37.16,1005,21.044,1006,21.044,1007,21.044,1008,40.616,1009,34.246,1010,34.246,1011,21.044,1012,21.044,1013,29.603,1014,29.603,1015,18.674,1016,21.044,1017,21.044,1018,21.044,1019,21.044,1020,21.044,1021,21.044,1022,21.044,1023,21.044,1024,21.044,1025,21.044]],["docTitle/docs/hub/0.1/how-to-guides/get-started-with-the-api",[48,12.611,932,24.744]],["docBody/docs/hub/0.1/how-to-guides/get-started-with-the-api",[0,3.069,4,2.844,24,6.323,48,12.018,89,18.602,764,17.807,932,23.58,973,23.446,1026,28.831,1027,28.831,1028,28.831,1029,28.831,1030,28.831,1031,28.831,1032,25.585,1033,28.831,1034,28.831,1035,28.831,1036,28.831,1037,28.831,1038,23.446,1039,28.831]],["docTitle/docs/hub/0.1/how-to-guides/query-the-database",[1038,41.595]],["docBody/docs/hub/0.1/how-to-guides/query-the-database",[0,3.005,24,6.7,932,21.168,944,22.203,971,35.13,1038,32.194,1040,32.809,1041,32.809,1042,29.114,1043,32.809]],["docTitle/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.31]],["docBody/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.16,4,2.978,17,8.127,34,6.97,50,13.361,75,24.556,155,17.605,959,19.483,1000,12.362,1044,34.773,1045,30.196,1046,21.649,1047,34.773,1048,21.649,1049,21.649,1050,21.649,1051,21.649,1052,21.649,1053,21.649,1054,21.649,1055,21.649,1056,21.649]],["docTitle/docs/hub/0.1/references/api-reference",[48,16.82]],["docBody/docs/hub/0.1/references/api-reference",[0,3.006,48,8.361,932,16.404,944,17.206,959,16.404,987,20.676,1057,25.425,1058,25.425,1059,25.425,1060,25.425,1061,25.425,1062,25.425,1063,25.425,1064,25.425,1065,25.425,1066,25.425,1067,25.425,1068,25.425,1069,25.425,1070,25.425,1071,25.425,1072,25.425,1073,25.425,1074,25.425,1075,25.425,1076,25.425,1077,25.425,1078,25.425,1079,25.425,1080,25.425,1081,25.425,1082,25.425,1083,25.425,1084,25.425,1085,25.425,1086,25.425,1087,25.425,1088,25.425,1089,25.425,1090,25.425,1091,25.425,1092,25.425,1093,25.425,1094,25.425,1095,25.425,1096,25.425,1097,17.206,1098,22.562]],["docTitle/docs/hub/0.1/references/command-line-flags",[0,3.31]],["docBody/docs/hub/0.1/references/command-line-flags",[0,2.363,1099,36.522,1100,36.522,1101,36.522,1102,36.522,1103,36.522]],["docTitle/docs/hub/0.1/references/database-tables",[0,3.31]],["docBody/docs/hub/0.1/references/database-tables",[0,3.06,48,10.559,1032,28.494,1042,28.494,1104,32.11,1105,32.11,1106,32.11,1107,32.11,1108,32.11,1109,32.11,1110,32.11,1111,32.11,1112,32.11,1113,32.11]],["docTitle/docs/hub/0.1/references/security-considerations",[0,3.31]],["docBody/docs/hub/0.1/references/security-considerations",[0,3.095,4,4.354,17,14.862,41,15.04,1114,32.809]],["docTitle/docs/hub/0.1/references/troubleshooting",[0,3.31]],["docBody/docs/hub/0.1/references/troubleshooting",[0,2.704,538,21.316,578,29.227,932,23.189,1115,35.941,1116,35.941,1117,35.941]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.31]],["docBody/docs/compass/0.1/introduction/overview",[0,2.954,4,4.567,24,5.365,34,10.961,1118,34.045,1119,34.045]],["docTitle/docs/compass/0.1/how-to-guides/create-an-iota-network",[4,5.045]],["docBody/docs/compass/0.1/how-to-guides/create-an-iota-network",[0,3.089,4,3.04,17,6.557,24,5.733,28,8.73,34,5.623,41,11.861,48,8.508,50,6.711,57,7.589,62,18.463,66,10.786,70,11.819,142,7.397,146,18.463,165,12.801,197,11.268,394,13.235,449,7.792,827,14.203,859,10.786,886,15.498,927,13.235,932,11.268,951,12.462,955,23.356,1120,17.465,1121,17.465,1122,9.302,1123,13.235,1124,15.498,1125,17.465,1126,17.465,1127,15.498,1128,17.465,1129,17.465,1130,17.465,1131,17.465,1132,17.465,1133,25.874,1134,17.465,1135,11.544,1136,17.465,1137,17.465,1138,17.465,1139,17.465,1140,17.465,1141,17.465,1142,17.465,1143,17.465,1144,17.465,1145,17.465,1146,17.465,1147,17.465,1148,22.96,1149,17.465,1150,15.498,1151,13.235,1152,17.465,1153,17.465,1154,17.465,1155,17.465,1156,17.465,1157,17.465,1158,17.465,1159,17.465,1160,17.465,1161,17.465,1162,17.465,1163,17.465,1164,17.465,1165,17.465,1166,27.349,1167,27.349,1168,17.465,1169,17.465,1170,11.819]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.31]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.02,4,3.079,51,17.202,146,29.687,165,13.976,342,15.607,503,14.313,927,23.66,955,23.66,1000,17.829,1148,36.918,1150,27.706,1151,23.66,1171,25.39,1172,31.222,1173,25.39,1174,31.222,1175,31.222,1176,17.202,1177,31.222,1178,31.222]],["docTitle/docs/compass/0.1/references/contribution-guidelines",[0,3.31]],["docBody/docs/compass/0.1/references/contribution-guidelines",[0,2.742,449,18.905,450,22.74]],["docTitle/docs/trinity/0.1/introduction/overview",[0,3.31]],["docBody/docs/trinity/0.1/introduction/overview",[0,3.086,4,3.922,24,5.208,179,22.366,180,26.876,1179,33.049,1180,33.049,1181,33.049]],["docTitle/docs/trinity/0.1/concepts/hardware-wallet",[0,3.31]],["docBody/docs/trinity/0.1/concepts/hardware-wallet",[0,3.103,4,2.844,28,14.412,34,9.282,57,12.529,876,25.585,877,23.446,921,30.407,1182,40.125,1183,28.831,1184,25.585,1185,28.831,1186,40.125,1187,28.831,1188,28.831,1189,28.831]],["docTitle/docs/trinity/0.1/concepts/node-quorum",[0,3.31]],["docBody/docs/trinity/0.1/concepts/node-quorum",[0,2.755,34,11.951,1190,37.122]],["docTitle/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.097,24,6.721,67,21.323,182,26.876,184,21.323,185,21.323]],["docTitle/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.106,4,3.854,41,17.912,55,28.494,1191,32.11,1192,32.11,1193,32.11,1194,26.112]],["docTitle/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.084,51,14.498,53,19.94,54,15.025,179,17.807,1195,26.313,1196,26.313,1197,30.891,1198,26.313,1199,26.313,1200,38.419,1201,21.398,1202,26.313,1203,26.313,1204,23.35,1205,34.456,1206,26.313,1207,24.788,1208,26.313,1209,26.313,1210,19.205,1211,26.313,1212,26.313,1213,26.313,1214,26.313,1215,26.313]],["docTitle/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/read-your-balance",[0,2.897,165,12.471]],["docTitle/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.098,4,4.21,24,6.927,41,13.652,80,22.569,189,14.039,1216,24.219,1217,29.782,1218,24.219,1219,16.409,1220,26.428,1221,18.393]],["docTitle/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.056,24,5.208,41,18.228,189,18.743,1216,26.876,1221,24.557,1222,33.049,1223,25.045]],["docTitle/docs/trinity/0.1/how-to-guides/create-a-qr-code",[1223,38.762]],["docBody/docs/trinity/0.1/how-to-guides/create-a-qr-code",[0,2.608,4,3.333,24,5.325,80,25.607,118,13.294,121,14.311,1223,33.787,1224,33.79,1225,33.79,1226,33.79,1227,33.79,1228,33.79]],["docTitle/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.125,24,6.053,50,11.997,141,15.148,1229,31.222,1230,31.222,1231,25.39,1232,31.222,1233,31.222]],["docTitle/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.127,24,5.927,50,11.596,179,20.424,414,16.628,497,20.424,764,18.639,1234,30.179,1235,24.542,1236,30.179,1237,30.179,1238,30.179]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.161,24,4.486,68,20.314,184,18.368,560,16.884,1235,23.151,1239,28.468]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.071,1240,35.378,1241,20.982]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.097,17,11.721,179,29.375,1000,17.829,1242,23.66,1243,31.222,1244,38.41,1245,27.706,1246,25.39,1247,27.706]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.067,4,3.462,50,13.488,165,11.793]],["docTitle/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.121,24,5.17,927,24.863,1248,32.809,1249,29.114,1250,32.809]],["docTitle/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.31]],["docBody/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.116,24,5.515,51,14.851,53,13.992,54,19.986,60,10.951,76,18.241,81,15.015,84,12.495,88,15.015,116,14.355,179,12.495,436,16.647,442,12.495,449,12.026,450,11.403,503,8.464,518,16.385,539,12.495,663,20.426,697,13.175,827,15.015,925,11.913,1015,23.919,1167,16.385,1201,15.015,1216,15.015,1251,18.464,1252,26.954,1253,18.464,1254,18.464,1255,18.464,1256,18.464,1257,18.464,1258,16.385,1259,18.464,1260,26.954,1261,26.954,1262,18.464,1263,18.464,1264,12.495,1265,18.464,1266,18.464,1267,18.464,1268,18.464,1269,18.464,1270,18.464,1271,18.464,1272,18.464,1273,18.464,1274,18.464,1275,18.464,1276,18.464,1277,18.464,1278,18.464,1279,18.464,1280,18.464,1281,13.992,1282,18.464,1283,18.464,1284,18.464,1285,13.175,1286,18.464,1287,18.464,1288,18.464]],["docTitle/docs/trinity/0.1/references/troubleshooting",[0,3.31]],["docBody/docs/trinity/0.1/references/troubleshooting",[0,3.15,4,2.937,24,5.878,1289,22.569,1290,18.393,1291,29.782,1292,29.782]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.31]],["docBody/docs/blueprints/0.1/introduction/overview",[0,2.993,4,4.37,140,18.891,142,12.955,1135,16.921,1293,24.875,1294,30.588,1295,18.891,1296,28.741,1297,20.7,1298,20.7,1299,21.827,1300,30.588,1301,18.141,1302,17.467,1303,20.7,1304,30.588]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.31]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.092,4,3.169,16,19.266,24,3.733,34,7.627,48,10.565,57,10.295,144,9.785,431,25.235,440,16.566,449,10.57,1135,17.44,1241,14.051,1293,19.266,1305,23.692,1306,23.692,1307,23.692,1308,23.692,1309,23.692,1310,15.286,1311,23.692,1312,23.692,1313,23.692,1314,14.632,1315,23.692,1316,23.692,1317,23.692,1318,23.692,1319,23.692,1320,23.692,1321,23.692,1322,23.692,1323,17.954,1324,19.266,1325,17.954,1326,21.743,1327,23.692,1328,23.692]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.31]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.079,4,2.689,50,10.477,144,11.262,950,15.023,1135,12.165,1293,22.173,1329,27.266,1330,24.195,1331,27.266,1332,27.266,1333,27.266,1334,22.173,1335,19.456,1336,27.266,1337,27.266,1338,22.173,1339,27.266,1340,27.266,1341,27.266,1342,24.195,1343,20.662,1344,20.662,1345,24.195,1346,24.195,1347,24.195,1348,24.195,1349,24.195,1350,15.569,1351,15.023,1352,20.662,1353,24.195]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.31]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.103,4,3.006,24,5.32,48,12.888,50,6.583,57,7.446,61,19.661,66,10.582,80,12.984,83,7.077,116,9.125,117,9.44,118,6.741,144,13.944,440,17.407,924,15.204,959,11.055,1207,11.055,1241,10.162,1264,11.595,1334,20.744,1335,12.226,1338,13.933,1342,15.204,1343,12.984,1344,12.984,1345,15.204,1346,15.204,1347,15.204,1348,15.204,1349,15.204,1350,9.784,1351,9.44,1352,12.984,1353,15.204,1354,23.369,1355,12.226,1356,24.781,1357,23.093,1358,20.623,1359,12.984,1360,15.204,1361,13.933,1362,17.134,1363,17.134,1364,17.134,1365,17.134,1366,17.134,1367,17.134,1368,22.636,1369,17.134,1370,17.134,1371,17.134,1372,22.636,1373,11.595,1374,17.134,1375,17.134,1376,17.134,1377,17.134,1378,17.134,1379,17.134,1380,17.134,1381,17.134,1382,17.134,1383,17.134,1384,25.508]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.31]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.071,4,3.837,89,20.571,140,19.691,144,13.169,431,24.029,449,14.225,950,17.567,1295,19.691,1334,25.928,1385,31.883,1386,31.883]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.31]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.125,4,2.658,17,11.951,28,9.23,34,8.678,50,12.231,57,13.833,62,19.234,66,16.647,83,7.626,86,10.951,90,14.355,140,11.403,205,31.06,279,21.543,514,13.992,950,10.173,959,20.539,1197,13.992,1295,22.99,1326,18.241,1330,23.919,1361,15.015,1387,18.464,1388,12.495,1389,26.954,1390,18.464,1391,18.464,1392,18.464,1393,18.464,1394,18.464,1395,18.464,1396,18.464,1397,18.464,1398,18.464,1399,18.464,1400,18.464,1401,18.464,1402,18.464,1403,18.464,1404,18.464,1405,26.954,1406,18.464,1407,26.954,1408,18.464,1409,18.464,1410,18.464,1411,18.464,1412,18.464,1413,18.464]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1296,30.841,1297,17.298,1298,17.298]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,1.096,4,2.985,24,2.67,59,16.121,74,16.32,90,9.023,118,6.665,121,7.175,140,10.463,141,8.219,142,7.175,189,7.986,339,12.838,431,18.695,440,17.31,441,12.838,449,7.558,484,13.777,501,8.735,873,18.049,922,10.93,925,10.93,991,10.93,1122,9.023,1135,11.285,1219,9.334,1221,10.463,1241,10.047,1289,12.838,1290,10.463,1296,25.44,1297,27.766,1298,25.5,1299,25.633,1310,10.93,1326,17.118,1373,11.465,1388,11.465,1414,15.033,1415,20.57,1416,30.269,1417,26.861,1418,16.941,1419,12.838,1420,8.468,1421,16.941,1422,22.938,1423,15.002,1424,19.168,1425,17.118,1426,15.033,1427,16.941,1428,16.32,1429,13.777,1430,19.168,1431,17.118,1432,17.118,1433,11.465,1434,12.838,1435,15.033,1436,15.033,1437,14.588,1438,12.089,1439,16.941,1440,16.941,1441,18.049,1442,16.941,1443,10.047,1444,12.089,1445,16.941,1446,15.033,1447,16.941,1448,15.033,1449,15.033,1450,13.777,1451,11.465,1452,16.941,1453,11.465,1454,15.002,1455,17.118,1456,20.57,1457,15.033,1458,15.033,1459,12.089,1460,12.089,1461,15.033,1462,11.465,1463,13.777,1464,11.465,1465,11.465,1466,11.465,1467,10.93,1468,10.93,1469,13.777,1470,9.334]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[950,21.131,1210,19.171]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,0.298,4,2.207,19,3.743,28,2.301,48,9.339,59,6.209,61,5.438,65,3.488,66,2.843,77,2.73,78,5.656,84,5.704,98,5.704,102,3.115,108,24.799,111,3.488,121,1.949,133,3.743,142,10.651,144,8.566,152,12.79,155,3.743,165,3.916,175,4.084,181,13.671,183,3.488,186,12.571,187,6.854,189,2.17,279,3.115,337,4.813,342,2.301,414,7.945,418,6.854,440,17.519,450,2.843,480,7.479,494,5.205,503,6.61,511,3.488,560,2.73,690,3.488,750,3.743,889,16.956,906,4.084,907,6.657,910,8.906,911,3.115,919,8.234,925,2.97,926,4.813,950,11.427,959,10.846,991,13.381,1097,3.115,1122,4.489,1123,6.387,1135,7.5,1210,5.827,1219,6.423,1221,2.843,1231,3.743,1241,4.998,1290,7.2,1296,6.387,1297,15.142,1298,26.674,1299,14.8,1301,11.209,1302,2.628,1310,2.97,1314,2.843,1325,8.834,1335,3.284,1354,5.205,1357,3.488,1358,3.115,1373,11.377,1388,14.036,1415,3.743,1417,25.201,1420,7.208,1422,6.387,1423,6.914,1424,3.488,1425,7.889,1430,23.949,1431,3.115,1433,3.115,1434,8.834,1437,10.929,1438,6.014,1441,21.5,1443,2.73,1444,3.284,1450,26.235,1451,5.704,1464,5.704,1465,3.115,1467,2.97,1471,19.496,1472,31.867,1473,5.205,1474,3.743,1475,3.743,1476,3.743,1477,3.743,1478,3.743,1479,3.743,1480,2.843,1481,6.387,1482,2.97,1483,2.73,1484,3.488,1485,3.743,1486,3.743,1487,3.743,1488,3.743,1489,3.743,1490,3.743,1491,3.743,1492,3.284,1493,3.743,1494,4.603,1495,4.603,1496,4.603,1497,4.998,1498,7.2,1499,6.387,1500,8.428,1501,3.115,1502,10.792,1503,9.759,1504,4.603,1505,11.996,1506,8.428,1507,10.382,1508,3.115,1509,4.603,1510,7.479,1511,9.759,1512,4.084,1513,3.743,1514,6.854,1515,3.743,1516,6.014,1517,4.603,1518,22.317,1519,4.603,1520,6.854,1521,4.603,1522,4.084,1523,3.488,1524,3.743,1525,3.743,1526,3.284,1527,4.603,1528,3.743,1529,4.603,1530,4.603,1531,7.479,1532,8.834,1533,6.387,1534,4.084,1535,18.404,1536,7.479,1537,4.603,1538,5.438,1539,4.084,1540,4.603,1541,4.603,1542,4.603,1543,8.428,1544,4.603,1545,4.603,1546,11.996,1547,3.743,1548,4.603,1549,4.603,1550,4.084,1551,7.479,1552,4.603,1553,3.743,1554,10.29,1555,10.928,1556,14.918,1557,11.727,1558,14.42,1559,16.811,1560,4.603,1561,11.996,1562,2.97,1563,3.743,1564,9.759,1565,11.377,1566,3.743,1567,4.603,1568,4.084,1569,14.436,1570,7.479,1571,11.657,1572,4.603,1573,14.322,1574,4.603,1575,12.796,1576,8.428,1577,18.899,1578,8.834,1579,4.603,1580,14.918,1581,13.486,1582,6.854,1583,6.854,1584,6.854,1585,7.479,1586,6.387,1587,4.603,1588,8.428,1589,8.428,1590,7.479,1591,4.603,1592,11.657,1593,4.084,1594,7.479,1595,6.854,1596,8.428,1597,8.428,1598,7.479,1599,18.899,1600,7.479,1601,4.603,1602,4.084,1603,3.488,1604,4.084,1605,11.657,1606,4.603,1607,4.603,1608,20.74,1609,3.115,1610,10.345,1611,4.603,1612,3.743,1613,4.084,1614,4.603,1615,8.428,1616,5.704,1617,3.743,1618,4.603,1619,8.428,1620,4.603,1621,4.603,1622,7.479,1623,8.428,1624,8.428,1625,3.743,1626,3.488,1627,4.084,1628,4.603,1629,4.084,1630,4.084,1631,7.479,1632,4.603,1633,11.657,1634,4.603,1635,4.813,1636,7.479,1637,3.488,1638,4.084,1639,4.603,1640,3.284,1641,4.084,1642,4.603,1643,4.084,1644,25.149,1645,3.488,1646,8.428,1647,4.603,1648,3.743,1649,4.603,1650,3.743,1651,3.488,1652,4.084,1653,7.479,1654,3.488,1655,8.428,1656,2.97,1657,4.603,1658,4.084,1659,4.603,1660,11.657,1661,3.284,1662,4.603,1663,4.603,1664,6.854,1665,4.603,1666,2.843,1667,4.603,1668,14.42,1669,4.603,1670,11.657,1671,4.084,1672,3.743,1673,4.603,1674,4.603,1675,4.603,1676,4.603,1677,4.084]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1297,14.826,1298,14.826,1299,15.633,1483,12.993,1678,14.135]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,0.956,4,3.336,24,2.329,48,9.156,61,17.965,78,17.341,83,14.763,108,9.536,141,7.171,144,11.501,337,8.44,342,19.231,414,17.247,440,11.759,449,6.594,503,17.077,757,13.115,907,8.44,911,10.002,919,20.41,926,21.272,993,22.643,1122,7.872,1176,8.143,1210,7.388,1241,8.766,1258,13.115,1264,10.002,1295,9.128,1297,21.184,1298,26.715,1299,22.337,1301,13.525,1335,19.869,1350,8.44,1351,8.143,1354,23.76,1355,16.273,1356,18.545,1357,21.101,1358,22.89,1359,11.2,1360,13.115,1361,12.019,1420,7.388,1437,6.423,1450,18.545,1459,10.547,1468,9.536,1470,12.565,1471,13.525,1472,18.545,1483,21.199,1502,17.875,1550,24.709,1551,27.778,1678,20.197,1679,8.766,1680,10.547,1681,31.303,1682,10.547,1683,12.019,1684,11.2,1685,13.115,1686,14.78,1687,14.78,1688,13.115,1689,10.547,1690,17.282,1691,12.019,1692,11.2,1693,14.78,1694,11.2,1695,35.743,1696,19.869]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[142,10.826,1135,11.404,1301,15.16,1697,17.298]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,0.793,4,2.432,24,1.931,59,13.13,60,7.268,61,7.907,74,12.695,118,4.821,121,5.19,140,17.431,142,16.52,188,9.966,189,5.777,279,16.685,342,9.836,431,17.431,449,5.468,494,17.431,501,6.319,515,9.966,560,7.268,602,10.875,706,10.875,873,8.745,921,9.287,966,10.875,991,12.695,1000,6.998,1135,18.856,1170,13.316,1176,13.584,1210,9.836,1219,6.752,1221,7.569,1281,9.287,1295,12.152,1301,18.332,1326,13.316,1414,10.875,1415,9.966,1420,6.126,1428,18.21,1429,9.966,1431,8.293,1432,8.293,1433,8.293,1437,15.668,1443,7.268,1453,13.316,1454,11.67,1455,13.316,1456,9.966,1465,8.293,1466,8.293,1468,7.907,1469,9.966,1470,6.752,1471,7.268,1480,7.569,1497,7.268,1498,15.227,1501,16.685,1502,6.998,1507,21.418,1536,10.875,1554,8.745,1557,9.966,1564,8.293,1565,8.293,1582,20.049,1594,10.875,1627,17.461,1638,25.045,1641,10.875,1645,18.683,1650,9.966,1652,10.875,1656,7.907,1666,7.569,1672,16.001,1691,20.049,1692,18.683,1697,8.293,1698,19.677,1699,19.677,1700,14.911,1701,17.461,1702,19.677,1703,12.255,1704,10.875,1705,10.875,1706,17.461,1707,16.001,1708,16.001,1709,16.001,1710,23.423,1711,21.878,1712,16.001,1713,12.255,1714,12.255,1715,12.255,1716,19.677,1717,12.255,1718,10.875,1719,12.255,1720,10.875,1721,9.966,1722,10.875,1723,10.875,1724,10.875,1725,19.677,1726,12.255,1727,12.255,1728,10.875,1729,12.255,1730,10.875,1731,12.255,1732,9.287,1733,12.255,1734,9.287,1735,9.966,1736,9.966,1737,12.255,1738,12.255,1739,12.255,1740,17.461,1741,10.875,1742,9.966,1743,12.255,1744,12.255,1745,9.287,1746,12.255,1747,10.875,1748,10.875,1749,12.255,1750,19.677,1751,10.875,1752,9.966,1753,20.049]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[950,21.131,1210,19.171]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,0.946,4,1.886,48,10.68,67,5.524,69,4.889,77,8.669,78,12.317,83,7.899,90,7.785,98,17.18,111,11.077,118,3.369,121,3.626,141,4.154,142,11.711,144,3.537,152,9.892,186,7.306,189,13.034,269,6.489,279,26.927,308,6.963,414,15.235,494,5.288,501,4.415,503,8.767,839,7.598,889,6.489,907,8.346,916,15.552,950,13.987,991,12.339,1000,4.889,1122,10.185,1135,15.876,1170,5.795,1176,22.353,1197,24.612,1207,5.524,1210,11.302,1219,4.718,1264,15.301,1301,19.262,1314,9.027,1338,6.963,1359,6.489,1388,17.18,1420,4.28,1423,5.078,1424,6.489,1430,6.489,1431,9.892,1432,5.795,1437,13.523,1441,10.43,1444,10.43,1446,7.598,1451,19.985,1453,5.795,1454,13.41,1462,5.795,1465,5.795,1470,10.537,1471,11.342,1474,11.886,1475,11.886,1476,11.886,1477,11.886,1478,11.886,1479,11.886,1480,9.027,1481,11.077,1482,9.431,1483,16.399,1484,11.077,1485,11.886,1486,11.886,1487,11.886,1488,11.886,1489,11.886,1490,11.886,1491,11.886,1492,10.43,1493,11.886,1497,8.669,1502,8.346,1507,11.811,1508,5.795,1514,6.963,1525,6.963,1526,6.11,1538,9.431,1553,15.552,1554,6.11,1555,6.489,1563,6.963,1584,11.886,1603,11.077,1609,5.795,1610,7.598,1626,6.489,1637,11.077,1661,18.115,1672,18.387,1679,8.669,1680,6.11,1682,6.11,1689,10.43,1690,11.077,1700,6.489,1709,24.015,1710,14.492,1753,31.996,1754,11.077,1755,13.646,1756,6.963,1757,6.11,1758,11.886,1759,17.134,1760,11.886,1761,18.387,1762,11.886,1763,12.971,1764,6.963,1765,8.562,1766,7.598,1767,11.886,1768,7.598,1769,6.963,1770,6.963,1771,8.562,1772,8.562,1773,19.124,1774,7.598,1775,14.617,1776,8.562,1777,24.015,1778,6.489,1779,14.617,1780,7.598,1781,8.562,1782,8.562,1783,11.886,1784,12.971,1785,6.963,1786,8.562,1787,7.598,1788,11.886,1789,7.598,1790,8.562,1791,8.562,1792,6.489,1793,7.598,1794,7.598,1795,7.598,1796,8.562,1797,6.489,1798,8.562,1799,7.598,1800,8.562,1801,8.562]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[142,8.118,501,9.883,1135,8.552,1301,11.368,1483,11.368,1678,12.367]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,0.89,4,3.225,24,2.166,48,8.743,69,7.849,78,10.457,83,8.902,95,7.573,118,5.408,140,8.489,141,10.457,142,15.362,181,11.178,188,11.178,189,14.191,279,24.546,337,7.849,414,14.649,449,6.133,501,11.114,907,12.308,914,11.178,916,21.622,1000,7.849,1135,17.967,1176,23.987,1197,16.334,1207,8.869,1210,10.774,1264,9.302,1301,22.272,1388,24.546,1420,6.871,1428,8.869,1437,9.366,1470,14.649,1471,8.152,1483,21.511,1498,8.489,1507,20.195,1508,9.302,1516,9.809,1523,10.417,1554,9.809,1584,21.622,1590,12.198,1598,12.198,1609,9.302,1616,9.302,1637,10.417,1648,11.178,1653,19.127,1661,27.554,1666,13.312,1678,17.155,1680,9.809,1706,12.198,1708,11.178,1709,21.622,1730,12.198,1742,11.178,1753,32.128,1754,10.417,1755,9.809,1756,11.178,1757,9.809,1758,11.178,1759,16.334,1760,11.178,1761,21.622,1767,17.528,1768,12.198,1769,11.178,1777,26.591,1788,11.178,1793,12.198,1802,13.746,1803,13.746,1804,13.746,1805,12.198,1806,19.127,1807,16.334,1808,13.746,1809,13.746,1810,13.746,1811,11.178,1812,12.198,1813,10.417,1814,13.746,1815,9.809,1816,12.198]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[1302,17.517,1303,20.76,1697,20.76]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,0.49,4,2.736,24,1.193,54,9.951,59,9.282,61,8.484,74,8.484,78,8.455,90,4.033,118,2.979,121,5.569,132,6.158,141,3.674,142,5.569,152,8.899,184,4.886,189,3.569,339,5.738,431,10.763,440,12.148,449,3.378,501,3.904,503,3.471,844,14.172,873,9.383,911,5.124,919,7.508,921,5.738,922,8.484,925,4.886,991,4.886,1097,5.124,1122,14.776,1135,10.512,1204,6.72,1210,3.785,1219,4.172,1220,6.72,1221,4.677,1241,4.491,1245,6.72,1302,19.926,1303,15.944,1323,5.738,1326,8.899,1373,5.124,1419,15.773,1420,6.573,1424,5.738,1425,8.899,1428,11.244,1429,6.158,1430,5.738,1432,11.794,1435,6.72,1437,14.793,1438,5.403,1441,5.403,1444,5.403,1448,6.72,1449,11.668,1451,27.793,1453,8.899,1454,7.799,1455,8.899,1456,10.693,1457,6.72,1458,6.72,1459,5.403,1460,9.383,1461,11.668,1462,5.124,1463,10.693,1464,11.794,1465,5.124,1466,5.124,1467,4.886,1468,4.886,1469,6.158,1470,4.172,1471,4.491,1472,10.693,1473,4.677,1480,4.677,1481,5.738,1482,4.886,1497,7.799,1498,4.677,1501,5.124,1502,9.951,1503,5.124,1505,5.403,1507,4.677,1508,5.124,1514,6.158,1515,10.693,1520,10.693,1522,11.668,1532,9.965,1534,6.72,1546,12.436,1554,5.403,1555,5.738,1561,16.812,1562,4.886,1565,5.124,1566,6.158,1569,11.244,1578,13.207,1613,6.72,1617,6.158,1625,10.693,1630,6.72,1640,5.403,1643,6.72,1650,6.158,1664,6.158,1666,8.121,1682,12.436,1690,9.965,1691,6.158,1692,15.773,1697,5.124,1701,6.72,1704,6.72,1705,6.72,1708,6.158,1710,13.207,1711,18.47,1712,6.158,1720,6.72,1721,10.693,1722,11.668,1732,5.738,1735,10.693,1745,5.738,1751,6.72,1752,6.158,1767,6.158,1770,10.693,1815,5.403,1817,13.149,1818,7.572,1819,7.572,1820,34.99,1821,7.572,1822,28.403,1823,11.668,1824,11.668,1825,7.572,1826,5.124,1827,7.572,1828,5.738,1829,13.149,1830,7.572,1831,29.374,1832,17.427,1833,13.149,1834,13.149,1835,13.149,1836,7.572,1837,9.383,1838,6.72,1839,6.72,1840,7.572,1841,11.668,1842,13.149,1843,7.572,1844,15.465,1845,7.572,1846,7.572,1847,7.572,1848,7.572,1849,7.572,1850,7.572,1851,29.374,1852,7.572,1853,6.72,1854,5.738,1855,6.72,1856,15.465,1857,13.149,1858,7.572,1859,7.572,1860,7.572,1861,7.572,1862,7.572,1863,13.149,1864,24.62,1865,7.572,1866,7.572,1867,7.572,1868,6.158,1869,7.572,1870,7.572,1871,7.572,1872,7.572,1873,11.668,1874,14.172,1875,17.427,1876,7.572,1877,11.668,1878,10.693,1879,7.572,1880,7.572,1881,13.149,1882,5.124,1883,6.72,1884,7.572,1885,6.72,1886,7.572,1887,7.572,1888,6.72,1889,6.72,1890,4.491,1891,7.572,1892,13.149,1893,7.572,1894,7.572,1895,7.572,1896,7.572,1897,7.572,1898,9.965,1899,13.149,1900,5.403,1901,7.572,1902,7.572,1903,7.572,1904,7.572,1905,5.738,1906,13.149,1907,13.149,1908,7.572,1909,6.72,1910,7.572,1911,7.572,1912,7.572,1913,7.572,1914,7.572,1915,6.72]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[950,21.131,1210,19.171]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,0.318,4,3.057,17,1.846,34,1.583,48,4.993,59,14.511,60,14.678,61,5.777,65,3.727,69,5.113,74,7.952,77,5.311,78,7.366,90,6.564,98,6.06,108,23.311,111,3.727,118,4.849,140,3.038,141,12.007,142,11.038,144,2.031,183,3.727,185,3.173,186,6.161,189,7.157,312,4,339,9.34,342,2.458,416,5.777,431,5.53,440,20.01,442,10.275,450,3.038,461,4,494,3.038,497,3.328,501,2.536,503,2.255,560,13.808,690,3.727,889,3.727,907,2.808,914,4,919,7.038,922,3.173,950,10.891,959,7.952,990,4.364,1122,8.086,1123,6.785,1135,2.194,1170,6.06,1210,7.59,1219,2.71,1223,6.785,1235,10.023,1241,2.917,1242,3.727,1246,4,1264,6.06,1281,3.727,1285,3.51,1289,3.727,1290,14.379,1301,2.917,1302,14.132,1303,11.936,1310,3.173,1314,3.038,1324,7.282,1325,6.785,1354,12.209,1356,4,1368,4.364,1373,3.328,1419,6.785,1420,7.59,1423,2.917,1428,5.777,1431,3.328,1436,4.364,1437,13.797,1441,6.389,1444,3.51,1451,19.823,1454,2.917,1455,10.275,1459,3.51,1463,4,1464,17.638,1465,6.06,1466,3.328,1467,3.173,1468,18.27,1471,5.311,1473,14.379,1474,4,1475,4,1476,4,1477,4,1478,4,1479,4,1480,5.53,1481,13.366,1482,3.173,1483,7.31,1484,3.727,1485,4,1486,4,1487,4,1488,4,1489,4,1490,4,1491,4,1492,6.389,1493,4,1497,2.917,1498,9.377,1501,3.328,1502,14.132,1503,11.936,1507,16.827,1508,14.641,1512,10.937,1513,4,1515,7.282,1518,10.937,1524,4,1525,4,1526,6.389,1532,3.727,1533,3.727,1535,10.937,1538,7.952,1546,26.597,1553,4,1555,3.727,1556,4.364,1557,4,1561,12.586,1562,3.173,1564,3.328,1565,8.341,1569,9.796,1580,7.946,1583,10.023,1593,4.364,1595,7.282,1603,6.785,1604,4.364,1609,8.341,1612,7.282,1616,6.06,1617,7.282,1625,16.075,1629,10.937,1631,7.946,1635,7.038,1637,3.727,1661,8.795,1664,4,1678,15.968,1679,2.917,1682,3.51,1683,4,1689,3.51,1690,3.727,1692,3.727,1710,3.727,1712,4,1718,4.364,1721,4,1723,19.198,1724,19.198,1728,7.946,1732,11.506,1734,6.785,1736,4,1740,4.364,1745,3.727,1747,4.364,1748,10.937,1754,3.727,1755,3.51,1758,4,1759,3.727,1760,4,1761,4,1762,4,1770,4,1774,4.364,1778,6.785,1784,25.128,1797,6.785,1806,10.937,1812,4.364,1816,7.946,1820,31.558,1822,10.937,1823,7.946,1824,4.364,1837,3.51,1838,4.364,1844,7.946,1855,15.651,1856,4.364,1864,19.198,1874,4,1877,4.364,1882,3.328,1883,19.198,1885,4.364,1890,2.917,1900,3.51,1909,4.364,1916,25.993,1917,4.918,1918,7.946,1919,8.954,1920,4.918,1921,4.918,1922,4.918,1923,4.364,1924,4.918,1925,12.325,1926,4.918,1927,8.954,1928,21.634,1929,14.343,1930,8.954,1931,12.325,1932,8.954,1933,12.325,1934,12.325,1935,7.946,1936,4.918,1937,4.918,1938,7.946,1939,10.937,1940,4.364,1941,4.918,1942,12.325,1943,7.946,1944,4.918,1945,4.364,1946,4.918,1947,4.918,1948,8.954,1949,4.918,1950,3.727,1951,4.918,1952,4.918,1953,10.937,1954,3.51,1955,4.918,1956,10.023,1957,4.918,1958,7.946,1959,4.918,1960,4.918,1961,4.918,1962,4.918,1963,4.364,1964,4.918,1965,4.918,1966,17.542,1967,4.918,1968,4.918,1969,4.918,1970,8.954,1971,4.918,1972,4.918,1973,4.918,1974,4.918,1975,4,1976,7.946,1977,4.918,1978,4.918,1979,4.918,1980,4,1981,4.918,1982,4.918,1983,4.918,1984,4.918,1985,4.364,1986,4.918,1987,4.918,1988,4.918,1989,4.918,1990,4.918,1991,4.918,1992,8.954,1993,4.918,1994,4.918]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[501,11.296,1302,12.51,1303,14.826,1483,12.993,1678,14.135]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[4,2.522,59,13.618,78,18.379,90,13.618,108,16.497,118,10.059,141,12.405,142,10.829,144,10.561,337,14.6,342,12.781,414,14.088,440,13.184,449,11.408,501,13.184,1000,14.6,1135,11.408,1210,12.781,1219,14.088,1302,21.632,1303,22.882,1354,20.882,1388,17.303,1425,17.303,1431,17.303,1437,14.693,1454,15.164,1455,17.303,1468,16.497,1470,18.629,1473,15.791,1483,24.862,1595,20.793,1678,21.815,1679,15.164,1756,20.793,1757,18.245,1777,20.793,1820,20.793,1900,18.245,1905,19.376,1953,30.004,1995,17.303,1996,25.569,1997,25.569]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.31]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.106,4,2.522,24,5.97,41,18.478,48,11.118,95,14.088,447,13.184,764,15.791,1998,20.793,1999,20.793,2000,20.793,2001,25.569,2002,25.569,2003,25.569,2004,25.569,2005,25.569,2006,25.569,2007,25.569,2008,25.569,2009,25.569,2010,25.569,2011,25.569,2012,33.812,2013,22.689,2014,25.569,2015,25.569,2016,25.569,2017,25.569,2018,25.569]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.31]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.051,24,6.453,34,8.571,50,10.23,95,14.669,447,21.899,1437,11.569,1569,17.177,2019,21.65,2020,21.65,2021,21.65,2022,21.65,2023,21.65,2024,21.65,2025,21.65,2026,21.65,2027,21.65,2028,21.65,2029,21.65,2030,23.625,2031,26.623,2032,26.623,2033,26.623,2034,26.623,2035,26.623,2036,26.623,2037,26.623,2038,26.623,2039,23.625,2040,26.623,2041,26.623]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.31]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.069,24,5.17,95,18.077,447,16.917,764,20.263,2042,32.809,2043,32.809,2044,39.588,2045,32.809,2046,32.809]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.31]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.097,24,6.053,95,17.202,184,20.145,185,20.145,511,23.66,764,19.283,2047,31.222,2048,31.222,2049,31.222,2050,31.222,2051,31.222,2052,31.222]],["docTitle/docs/iota-go/0.1/references/cda-faq",[2053,34.615]],["docBody/docs/iota-go/0.1/references/cda-faq",[0,2.777,41,15.375,447,17.294,2053,22.698,2054,27.275,2055,27.275,2056,32.622,2057,27.275,2058,27.275,2059,27.275,2060,27.275,2061,27.275,2062,27.275,2063,27.275]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.31]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.103,4,2.844,24,5.759,41,18.394,48,9.481,165,9.686,447,18.844,764,17.807,1507,17.807,1998,23.446,1999,23.446,2000,23.446,2064,28.831,2065,28.831,2066,28.831,2067,28.831,2068,28.831,2069,28.831]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.31]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,2.963,4,2.722,24,6.542,34,8.885,50,10.604,447,24.105,2019,22.444,2020,22.444,2021,22.444,2022,22.444,2023,22.444,2024,22.444,2025,22.444,2026,22.444,2027,22.444,2028,22.444,2029,22.444,2039,24.491,2070,24.491,2071,24.491,2072,27.599,2073,27.599,2074,27.599,2075,27.599]],["docTitle/docs/iota-java/0.1/references/cda-faq",[2053,34.615]],["docBody/docs/iota-java/0.1/references/cda-faq",[0,2.777,41,15.375,447,17.294,2053,22.698,2054,27.275,2055,27.275,2056,32.622,2057,27.275,2058,27.275,2059,27.275,2060,27.275,2061,27.275,2062,27.275,2063,27.275]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.31]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.088,4,2.918,24,4.662,34,9.525,41,17.029,48,9.729,184,19.089,447,19.154,764,18.273,1828,22.421,1998,24.06,1999,24.06,2000,24.06,2013,26.255,2076,29.587,2077,29.587,2078,29.587,2079,29.587,2080,29.587]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.31]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,2.976,4,2.79,24,6.267,34,9.108,50,10.87,447,23.486,2019,23.006,2020,23.006,2021,23.006,2022,23.006,2023,23.006,2024,23.006,2025,23.006,2026,23.006,2027,23.006,2028,23.006,2029,23.006,2070,25.104,2071,25.104,2081,28.29,2082,28.29,2083,28.29,2084,28.29,2085,28.29,2086,28.29]],["docTitle/docs/iota-js/0.1/references/cda-faq",[2053,34.615]],["docBody/docs/iota-js/0.1/references/cda-faq",[0,2.777,41,15.375,447,17.294,2053,22.698,2054,27.275,2055,27.275,2056,32.622,2057,27.275,2058,27.275,2059,27.275,2060,27.275,2061,27.275,2062,27.275,2063,27.275]],["docTitle/docs/general/0.1/introduction/overview",[67,24.744,1697,25.954]],["docBody/docs/general/0.1/introduction/overview",[4,3.969,67,23.675,484,23.597,494,17.921,922,18.722,1097,19.637,1135,12.946,1358,19.637,1437,15.946,1438,20.705,1443,17.209,1482,18.722,1497,17.209,1498,17.921,1538,18.722,1546,20.705,1603,21.989,1635,16.569,1640,20.705,1679,17.209,1697,19.637,1736,23.597,1813,21.989,1826,24.833,1888,25.749,1890,17.209,2087,36.695,2088,29.017,2089,21.989,2090,21.989,2091,29.017,2092,29.017]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[926,14.596,1310,16.492,2093,22.682,2094,20.786]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,0.463,4,0.705,51,11.023,54,4.084,59,13.314,60,11.866,69,11.425,70,11.286,72,17.754,74,4.615,78,9.707,86,4.242,95,6.894,121,7.063,144,2.954,152,4.841,154,5.104,184,4.615,185,14.666,186,20.799,197,10.76,342,15.612,414,3.941,431,4.418,501,6.451,503,5.736,515,5.817,538,7.421,560,15.965,732,5.817,749,5.42,768,29.851,783,5.817,859,4.418,907,7.145,910,4.418,919,16.31,922,8.073,926,19.52,944,11.286,951,5.104,970,5.817,1097,11.286,1122,6.664,1176,9.189,1219,3.941,1290,10.3,1310,24.788,1314,7.727,1354,15.439,1355,14.276,1358,4.841,1423,9.891,1426,22.184,1433,4.841,1437,8.694,1443,7.421,1462,4.841,1464,4.841,1470,3.941,1473,4.418,1497,4.242,1498,4.418,1502,16.31,1505,8.928,1511,8.467,1516,5.104,1523,5.42,1538,4.615,1539,6.347,1561,8.928,1565,4.841,1569,4.615,1570,6.347,1573,5.42,1582,5.817,1586,5.42,1612,5.817,1616,8.467,1622,11.103,1626,5.42,1635,9.523,1645,5.42,1656,4.615,1666,7.727,1671,6.347,1679,7.421,1696,17.838,1700,12.638,1707,5.817,1734,5.42,1745,9.482,1766,6.347,1789,14.799,1792,12.638,1797,9.482,1799,6.347,1807,5.42,1811,13.562,1813,9.482,1815,5.104,1826,15.383,1839,6.347,1841,6.347,1868,5.817,1873,14.799,1882,4.841,1939,6.347,1945,6.347,1950,5.42,1954,24.393,1966,11.103,1975,5.817,1980,5.817,1995,11.286,2089,12.638,2093,20.171,2094,25.399,2095,6.347,2096,6.347,2097,30.334,2098,33.242,2099,20.007,2100,33.31,2101,28.562,2102,7.153,2103,7.153,2104,7.153,2105,7.153,2106,7.153,2107,7.153,2108,5.817,2109,6.347,2110,5.817,2111,5.817,2112,20.329,2113,17.754,2114,6.347,2115,6.347,2116,7.153,2117,7.153,2118,7.153,2119,6.347,2120,5.42,2121,12.512,2122,7.153,2123,5.42,2124,5.42,2125,14.799,2126,7.153,2127,7.153,2128,7.153,2129,7.153,2130,7.153,2131,7.153,2132,22.73,2133,7.153,2134,12.512,2135,26.918,2136,20.007,2137,7.153,2138,7.153,2139,22.73,2140,12.512,2141,7.153,2142,5.817,2143,5.817,2144,12.512,2145,5.42,2146,7.153,2147,7.153,2148,7.153,2149,16.677,2150,7.153,2151,7.153,2152,7.153,2153,7.153,2154,12.512,2155,12.512,2156,6.347,2157,7.153,2158,7.153,2159,5.817,2160,7.153]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[51,10.561,1354,11.838,1433,12.972,1635,10.945,1890,11.368,2111,15.588]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,0.564,4,0.859,34,2.804,51,24.22,54,17.006,57,3.785,59,4.639,60,8.797,69,13.058,77,5.166,78,11.095,81,7.084,85,5.895,95,8.172,103,6.601,121,3.689,141,4.226,185,5.62,186,12.82,197,14.754,312,7.084,319,7.084,337,8.47,342,15.677,494,9.161,503,15.531,538,17.663,539,5.895,560,8.797,662,6.601,732,20.856,750,7.084,768,18.3,859,11.963,907,4.974,910,11.963,919,11.061,922,5.62,951,6.216,963,11.24,970,7.084,1122,14.863,1170,5.895,1176,15.376,1207,18.005,1210,9.682,1231,7.084,1314,20.203,1325,6.601,1335,10.584,1354,26.622,1359,11.24,1420,7.414,1423,5.166,1432,17.356,1433,22.138,1437,14.215,1443,5.166,1454,5.166,1467,5.62,1470,4.799,1471,8.797,1492,10.584,1497,5.166,1502,4.974,1503,5.895,1510,7.73,1511,18.886,1516,13.822,1524,12.062,1528,7.084,1538,5.62,1561,13.822,1564,5.895,1578,6.601,1616,5.895,1635,13.058,1651,6.601,1654,6.601,1656,5.62,1680,6.216,1682,6.216,1684,11.24,1685,7.73,1694,6.601,1707,7.084,1769,7.084,1792,6.601,1797,6.601,1807,21.148,1811,18.596,1815,10.584,1826,13.108,1828,11.24,1868,7.084,1890,8.797,1898,6.601,1900,6.216,1940,7.73,1950,6.601,1954,6.216,1975,7.084,1995,5.895,2089,11.24,2095,7.73,2097,7.73,2109,7.73,2110,20.856,2111,26.602,2112,12.062,2115,7.73,2123,6.601,2124,6.601,2145,6.601,2159,7.084,2161,8.711,2162,15.475,2163,8.711,2164,6.216,2165,7.73,2166,8.711,2167,8.711,2168,8.711,2169,8.711,2170,8.711,2171,7.73,2172,8.711,2173,8.711,2174,8.711,2175,12.062,2176,8.711,2177,7.73,2178,8.711,2179,13.162,2180,8.711,2181,8.711,2182,14.832,2183,7.084,2184,8.711,2185,8.711,2186,6.601,2187,8.711,2188,8.711,2189,8.711,2190,22.694,2191,7.73,2192,23.617,2193,8.711,2194,8.711,2195,8.711,2196,8.711,2197,22.867,2198,8.711,2199,8.711,2200,8.711,2201,8.711,2202,8.711,2203,7.73,2204,18.596]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[1635,12.51,1890,12.993,2162,14.826,2205,19.441,2206,17.816]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,1.635,4,0.559,24,2.185,50,2.179,51,9.321,53,4.298,57,2.465,59,3.021,60,6.041,65,4.298,68,16.843,70,3.838,74,10.915,77,3.364,78,13.602,86,3.364,103,10.505,121,8.256,154,12.072,185,12.578,186,17.403,197,8.944,251,5.033,337,9.66,342,17.684,501,2.924,503,6.355,510,5.033,511,10.505,538,6.041,560,8.222,629,12.302,749,4.298,768,22.868,783,8.283,859,3.503,907,11.132,910,19.263,911,9.382,919,19.533,925,3.659,926,7.916,1000,5.816,1122,16.108,1151,4.298,1171,8.283,1173,4.612,1194,22.799,1201,4.612,1210,2.835,1281,4.298,1295,6.29,1310,19.513,1351,7.638,1358,3.838,1372,5.033,1419,4.298,1420,2.835,1422,4.298,1425,13.193,1432,9.382,1434,4.298,1437,13.926,1438,4.047,1443,3.364,1451,3.838,1453,3.838,1454,6.041,1460,7.268,1462,6.893,1464,3.838,1473,19.263,1484,4.298,1492,7.268,1497,6.041,1499,7.718,1501,3.838,1502,15.266,1505,4.047,1511,9.382,1513,4.612,1516,16.843,1520,8.283,1523,16.443,1528,4.612,1531,5.033,1532,4.298,1562,3.659,1565,3.838,1566,4.612,1568,5.033,1569,6.571,1575,5.033,1586,4.298,1626,14.773,1635,17.27,1640,4.047,1648,4.612,1654,12.82,1656,6.571,1658,5.033,1677,5.033,1679,3.364,1684,4.298,1689,7.268,1696,7.268,1735,4.612,1742,8.283,1752,8.283,1757,21.581,1764,4.612,1792,4.298,1813,4.298,1815,7.268,1826,14.684,1828,20.259,1853,5.033,1874,4.612,1889,5.033,1890,15.856,1900,7.268,1905,7.718,1916,5.033,1918,5.033,1929,4.612,1935,12.302,1938,5.033,1950,7.718,1954,19.077,1956,4.612,1985,9.038,1995,15.973,2030,5.033,2089,7.718,2094,11.273,2098,17.299,2108,4.612,2110,11.273,2113,17.299,2120,4.298,2125,12.302,2145,14.773,2159,4.612,2162,13.193,2165,5.033,2171,5.033,2175,4.612,2177,5.033,2192,18.092,2205,15.012,2206,17.645,2207,39.869,2208,10.185,2209,5.033,2210,5.671,2211,5.671,2212,5.671,2213,5.671,2214,5.671,2215,5.671,2216,5.671,2217,5.671,2218,5.671,2219,16.443,2220,5.671,2221,25.268,2222,28.438,2223,19.494,2224,5.671,2225,5.671,2226,12.302,2227,5.671,2228,15.012,2229,15.012,2230,9.038,2231,5.671,2232,10.185,2233,5.033,2234,13.863,2235,10.185,2236,10.185,2237,15.012,2238,10.185,2239,10.185,2240,10.185,2241,5.671,2242,10.185,2243,5.671,2244,5.671,2245,5.671,2246,15.012,2247,13.863,2248,13.863,2249,5.671,2250,11.273,2251,5.671,2252,5.671,2253,5.671,2254,5.671,2255,5.671,2256,5.671,2257,5.671,2258,5.671,2259,5.671,2260,5.671,2261,5.671,2262,5.671,2263,13.863,2264,10.185,2265,16.917,2266,5.671,2267,5.671,2268,10.185,2269,5.671,2270,5.671,2271,5.671,2272,5.671,2273,5.671,2274,5.671,2275,5.671,2276,5.671,2277,5.671,2278,5.671,2279,5.671,2280,5.671,2281,5.671,2282,5.671,2283,5.671]],["docTitle/docs/general/0.1/references/troubleshooting",[2284,45.389]],["docBody/docs/general/0.1/references/troubleshooting",[69,18.6,450,20.117,539,22.043,663,29.869,859,20.117,1127,28.905,1173,26.488,1420,16.282,1423,19.318,1666,20.117,2120,24.684,2143,26.488,2162,22.043,2179,28.905,2284,28.905,2285,32.573,2286,32.573,2287,32.573,2288,26.488,2289,32.573]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,2.521,1323,19.37,1428,16.492,2290,22.682]],["docBody/docs/smartcity/0.1/introduction/overview",[4,3.411,34,8.521,118,10.413,121,14.649,142,11.21,414,14.583,440,13.647,444,21.228,926,19.751,1135,11.809,1295,16.346,1302,15.113,1323,26.211,1326,17.912,1343,20.057,1344,20.057,1350,15.113,1351,14.583,1420,13.23,1428,17.077,1437,11.502,1468,17.077,1471,15.697,1482,17.077,1508,17.912,1640,18.886,1694,20.057,1696,18.886,1754,20.057,1854,20.057,1878,21.523,1882,17.912,2090,20.057,2183,21.523,2290,30.693,2291,26.467,2292,23.487,2293,23.487,2294,23.487,2295,26.467,2296,23.487,2297,23.487,2298,23.487,2299,26.467,2300,23.487,2301,26.467]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[444,28.182]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[77,10.358,78,8.473,90,9.302,98,11.819,108,11.268,118,6.871,121,7.397,141,8.473,142,10.958,319,14.203,440,15.891,441,13.235,442,11.819,444,23.186,503,11.861,538,10.358,926,14.774,1124,15.498,1135,17.001,1218,14.203,1219,9.623,1221,10.786,1241,10.358,1242,13.235,1247,15.498,1285,18.463,1302,9.973,1343,13.235,1344,13.235,1350,14.774,1351,14.256,1352,23.356,1355,12.462,1437,14.808,1459,12.462,1482,11.268,1585,15.498,1600,32.287,1602,15.498,1616,11.819,1684,13.235,1689,12.462,1694,13.235,1696,12.462,1759,13.235,1764,14.203,1783,14.203,1785,14.203,1837,12.462,1854,19.607,1878,14.203,1882,11.819,1890,10.358,2090,23.356,2120,13.235,2162,11.819,2164,12.462,2183,14.203,2292,15.498,2293,22.96,2294,15.498,2296,15.498,2297,15.498,2298,15.498,2302,17.465,2303,17.465,2304,15.498,2305,17.465,2306,25.963,2307,24.317,2308,22.96,2309,22.96,2310,17.465,2311,17.465,2312,17.465,2313,17.465,2314,22.96,2315,17.465,2316,17.465,2317,17.465,2318,17.465,2319,17.465,2320,17.465,2321,17.465,2322,17.465,2323,17.465,2324,17.465,2325,17.465,2326,17.465,2327,17.465,2328,17.465,2329,15.498,2330,15.498,2331,15.498,2332,15.498,2333,15.498]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[444,21.131,1285,27.367]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[57,12.026,75,25.325,77,8.681,78,7.101,86,8.681,121,6.199,152,9.905,337,15.802,342,15.567,442,9.905,444,15.247,503,10.376,538,13.424,539,18.728,1122,12.054,1123,11.092,1166,12.988,1170,15.317,1171,11.902,1176,8.064,1207,9.443,1249,20.085,1285,10.444,1290,9.039,1324,11.902,1350,24.31,1351,23.456,1422,25.518,1437,9.836,1443,8.681,1453,9.905,1467,14.603,1480,9.039,1511,15.317,1526,16.151,1533,17.152,1562,17.855,1581,16.151,1586,11.092,1609,15.317,1679,8.681,1680,10.444,1683,11.902,1755,10.444,1778,11.092,1795,12.988,1826,15.317,1943,12.988,1954,16.151,2162,9.905,2164,10.444,2175,11.902,2186,11.092,2192,15.317,2204,11.902,2206,18.406,2209,20.085,2219,17.152,2222,24.558,2226,20.085,2228,12.988,2229,20.085,2250,18.406,2300,12.988,2306,19.747,2307,19.747,2334,14.636,2335,14.636,2336,11.092,2337,11.902,2338,22.634,2339,14.636,2340,22.634,2341,14.636,2342,31.141,2343,31.141,2344,24.558,2345,18.406,2346,27.674,2347,14.636,2348,14.636,2349,20.085,2350,22.634,2351,14.636,2352,22.634,2353,14.636,2354,14.636,2355,14.636,2356,22.634,2357,14.636,2358,14.636,2359,12.988,2360,14.636,2361,14.636,2362,14.636,2363,14.636,2364,14.636,2365,12.988,2366,11.092,2367,22.634]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[444,21.131,503,17.581]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,1.934,4,2.679,54,17.066,68,8.189,69,6.553,77,11.068,78,11.441,83,11.219,86,11.068,89,7.405,90,12.559,95,6.323,121,7.904,141,5.568,142,4.861,154,8.189,187,9.333,197,19.283,342,9.328,414,14.966,416,7.405,436,7.088,440,5.918,444,17.646,503,10.81,538,23.883,578,9.333,844,15.175,873,8.189,910,16.776,925,12.04,926,6.553,963,17.871,1000,10.656,1122,6.112,1151,8.697,1176,10.282,1194,15.175,1207,12.04,1218,9.333,1289,8.697,1295,7.088,1314,14.564,1350,20.087,1351,18.598,1420,5.737,1423,11.068,1425,15.959,1443,6.807,1455,18.383,1466,7.767,1470,6.323,1480,14.564,1499,8.697,1503,7.767,1511,7.767,1526,13.316,1533,8.697,1538,7.405,1546,16.827,1547,15.175,1562,7.405,1563,9.333,1573,20.585,1581,13.316,1635,15.511,1636,16.559,1651,14.141,1654,8.697,1661,8.189,1666,16.776,1679,11.068,1757,8.189,1762,9.333,1763,10.184,1805,10.184,1807,17.871,1898,8.697,1915,10.184,1923,10.184,2096,10.184,2108,9.333,2112,9.333,2123,14.141,2124,8.697,2142,19.177,2143,15.175,2145,8.697,2164,8.189,2190,15.175,2192,12.629,2204,9.333,2219,17.871,2233,10.184,2237,10.184,2250,9.333,2288,9.333,2306,26.675,2307,26.675,2336,8.697,2337,9.333,2344,16.559,2345,9.333,2349,10.184,2359,16.559,2366,20.585,2368,11.476,2369,11.476,2370,18.661,2371,11.476,2372,11.476,2373,11.476,2374,11.476,2375,18.661,2376,11.476,2377,11.476,2378,11.476,2379,18.661,2380,11.476,2381,11.476,2382,18.661,2383,11.476,2384,11.476,2385,18.661,2386,11.476,2387,11.476,2388,11.476,2389,11.476,2390,11.476,2391,11.476,2392,11.476,2393,11.476,2394,18.661,2395,9.333,2396,16.559,2397,10.184]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[342,10.951,1350,12.51,1351,12.07,1473,13.53,2192,14.826]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[57,8.548,59,15.028,60,16.735,78,16.008,118,7.738,180,15.996,186,18.019,337,11.232,342,16.493,436,17.427,444,10.837,503,15.126,538,11.666,749,14.906,768,23.545,910,12.148,919,11.232,1176,21.029,1290,12.148,1314,12.148,1350,23.364,1351,22.543,1437,8.548,1460,14.036,1462,19.095,1467,12.691,1473,12.148,1480,17.427,1501,13.311,1502,11.232,1562,12.691,1564,13.311,1578,14.906,1581,14.036,1651,14.906,1656,12.691,1666,12.148,1688,17.455,1755,14.036,1778,21.383,1898,21.383,1995,13.311,2142,31.038,2164,14.036,2186,21.383,2191,29.28,2192,22.33,2219,14.906,2288,15.996,2306,14.036,2307,14.036,2336,14.906,2337,15.996,2345,15.996,2365,17.455,2366,21.383,2395,15.996,2398,28.216,2399,28.216,2400,28.216,2401,19.67,2402,19.67,2403,19.67,2404,19.67,2405,19.67]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[444,21.131,1837,27.367]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[4,1.58,28,4.768,54,5.447,59,5.08,60,14.381,66,5.891,67,6.154,108,15.645,118,6.301,119,5.447,121,8.767,141,18.882,142,11.447,154,11.428,182,7.757,186,10.348,193,8.464,197,6.154,263,7.757,337,5.447,418,7.757,440,19.757,441,7.228,442,6.455,444,18.7,458,8.464,461,16.834,494,5.891,501,4.918,560,9.498,824,8.464,907,5.447,910,5.891,911,10.838,919,9.145,926,9.145,963,12.137,987,7.757,991,6.154,1097,6.455,1098,14.212,1135,17.364,1176,8.824,1184,8.464,1219,5.255,1221,12.785,1242,15.687,1246,13.024,1290,5.891,1302,5.447,1350,5.447,1351,5.255,1352,22.175,1355,6.806,1357,7.228,1373,18.29,1420,4.768,1423,5.657,1434,7.228,1437,13.514,1454,9.498,1460,11.428,1466,10.838,1470,5.255,1498,5.891,1499,7.228,1503,6.455,1505,6.806,1507,5.891,1547,7.757,1564,6.455,1569,6.154,1573,7.228,1581,11.428,1583,19.719,1609,14.009,1635,11.821,1645,12.137,1656,6.154,1700,15.687,1732,12.137,1734,15.687,1741,14.212,1780,18.37,1783,13.024,1785,19.719,1787,8.464,1788,7.757,1794,8.464,1837,11.428,1854,7.228,1882,16.41,1890,9.498,1905,7.228,1929,7.757,1956,21.978,1958,14.212,1963,14.212,1976,8.464,1980,19.719,1995,10.838,2090,7.228,2114,14.212,2119,8.464,2123,7.228,2124,7.228,2156,14.212,2186,7.228,2190,7.757,2203,14.212,2230,8.464,2246,14.212,2304,8.464,2306,24.219,2307,23.288,2308,27.597,2309,8.464,2314,18.37,2329,8.464,2330,8.464,2331,8.464,2332,8.464,2333,8.464,2336,7.228,2366,12.137,2395,25.29,2396,23.983,2397,25.967,2406,20.701,2407,9.538,2408,29.262,2409,9.538,2410,20.701,2411,16.015,2412,9.538,2413,9.538,2414,9.538,2415,16.015,2416,9.538,2417,9.538,2418,16.015,2419,9.538,2420,9.538,2421,16.015,2422,9.538,2423,9.538,2424,9.538,2425,9.538,2426,16.015,2427,9.538,2428,9.538,2429,9.538,2430,9.538,2431,9.538,2432,9.538,2433,9.538,2434,9.538,2435,16.015,2436,9.538,2437,9.538,2438,9.538,2439,9.538,2440,9.538,2441,9.538]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-faq":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["0",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["0.2",{"_index":2425,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["01",{"_index":2130,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0またはvalu",{"_index":843,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":427,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":365,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["1.0",{"_index":2338,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["10.197.0.57",{"_index":2266,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.197.3.57",{"_index":2270,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":961,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":972,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["100",{"_index":646,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1371,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":650,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["10:57:54.417129",{"_index":982,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10gb",{"_index":815,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1128,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":261,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":262,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":851,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":284,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1309,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2361,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["115200",{"_index":2260,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["120",{"_index":782,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["127.0.0.1",{"_index":2117,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["128",{"_index":1403,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1404,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["13",{"_index":2423,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["13906",{"_index":983,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["14265",{"_index":670,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["14600",{"_index":667,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["16",{"_index":2273,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45日間マイルストーンを送信できます。マイルストーン送信の間隔は2",{"_index":1132,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["17.05",{"_index":738,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["18.04",{"_index":951,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["18でiri",{"_index":860,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["1i",{"_index":1248,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":350,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1222,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["1つが81トライトのセグメントに分割されます。その後、各セグメントは26",{"_index":243,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1399,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":2074,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":253,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのアドレスを導出するために使用されます。秘密鍵とアドレスは1対1のペアと考えることができます。アドレスは公開されており、クライアントはトランザクションのアドレスフィールドを使用してiotaトークンとメッセージを送信できます。秘密鍵は秘密であり、アドレスからiota",{"_index":237,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのキーダイジェストを導出するために1回ハッシュ化されます。たとえば、1つのキーフラグメントによって1",{"_index":246,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つの頂点を表す一種の有向非巡回グラフ（dag",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["1つは、iota",{"_index":228,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1234,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["1と2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1と2",{"_index":391,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":289,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["1に接続され、トランザクション1はトランザクション2",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1のアドレスから80i",{"_index":270,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":1001,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":387,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1より大きい場合、署名は1",{"_index":264,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":370,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1回でもiota",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1315,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化され、81",{"_index":247,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":258,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1度iotaトークンを取り出したアドレスからは2度とiotaトークンを取り出してはいけません。したがって、転送バンドルでは、iotaトークンを取り出したアドレスの残りのiota",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1度吸収し、セキュリティレベルごとに27回圧搾します（セキュリティレベル1だと27回、セキュリティレベル2だと54回、セキュリティレベル3だと81",{"_index":241,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":834,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":847,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":311,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["2,187、4,374、または6,561",{"_index":242,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,187、4374、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントがあります。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。これは27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":245,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":573,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1396,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":509,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1260,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1164,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["2.7piのiota",{"_index":1149,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["20",{"_index":1384,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":876,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["2015",{"_index":1313,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016",{"_index":2360,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1386,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1316,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20mi",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2128",{"_index":1405,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1407,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":783,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["243",{"_index":880,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["24を指定すると、コンパスは31年以上にわたってマイルストーンを送信できますが、マークル木を作成するには長い時間がかかります。深さ8",{"_index":1134,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["25",{"_index":2362,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1409,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["255",{"_index":2119,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["255.255.0.0",{"_index":2271,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["255.255.255.0",{"_index":2267,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256",{"_index":2268,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256\\*256",{"_index":2278,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2673",{"_index":341,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":244,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27、54、または81",{"_index":254,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27、54、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":257,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":255,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2944.17",{"_index":2280,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2gb",{"_index":814,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16",{"_index":2272,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":411,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":412,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":398,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2",{"_index":392,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクション（マイルストーンのセキュリティレベルが2",{"_index":389,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":2001,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの末尾トランザクションの1つにも接続されています。）この2",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1033,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1036,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの親を参照する必要があります。トランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドやバンドル内の最後のトランザクションのbranchtransactionフィールドとtrunktransact",{"_index":233,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":400,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":346,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":271,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":343,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/security-levels":{}}}],["2人のユーザー間で転送を発行します（processtransf",{"_index":1056,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["2回以上トークンを取り出してはいけません。したがって、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":265,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2度とiota",{"_index":938,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":313,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2種類のリスナーがあります。1つはチャネルを使用するもので、もう1",{"_index":2043,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":287,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["3",{"_index":57,"docTitle":{"docs/iota-basics/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/trinary":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3+)とpip",{"_index":791,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":263,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["3000",{"_index":1955,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["30mi",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["30秒ごとに、transfer",{"_index":2014,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1009,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":355,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["384ハッシュ関数を使用してシードとインデックスを足し合わせたものをハッシュ化し、81",{"_index":240,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["3\\*8",{"_index":2122,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["3x8=24",{"_index":2269,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["3つの0のトリット（000トリット）がトライトの9",{"_index":426,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":363,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3のアドレスから80i",{"_index":272,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1192,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":369,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法3",{"_index":368,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":288,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["4",{"_index":62,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1259,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":438,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["400",{"_index":877,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["401",{"_index":909,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["4gb",{"_index":661,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["4x3",{"_index":2339,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、数式：2depthのdepthによって定まります。上の図では、マークル木の深さは2",{"_index":379,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["4のiri",{"_index":691,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1030,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1141,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["5",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["50",{"_index":1187,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["50,000",{"_index":656,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":658,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["55mi",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3に関連付けられています。したがって、トランザクション5はトランザクション2と3",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["64",{"_index":663,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1190,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/node-quorum":{}}}],["6か7",{"_index":864,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6でiota",{"_index":1002,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親です。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":374,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["6はトランザクション5（および表示されていない別のトランザクション）に接続されています。そのため、トランザクション6はトランザクション5を介して間接的にトランザクション3",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["7",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["8",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":790,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":2299,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["81",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/references/glossary":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":903,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":230,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1126,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["8、またはnode.j",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["9",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90文字です。余分な9",{"_index":225,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["990,100",{"_index":648,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["9999",{"_index":1010,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1312,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9個（デブネット上のmwm）または7個（スパムネット上のmwm）の0",{"_index":277,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":351,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1367,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1655,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abil",{"_index":1613,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["abov",{"_index":1976,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["absent",{"_index":908,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["acceler",{"_index":2318,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["acceleromet",{"_index":2317,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["accept",{"_index":1517,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["access",{"_index":1464,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["accord",{"_index":1962,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["account",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["account.send()メソッドに渡して、使用可能な残高の合計をcda",{"_index":2075,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["account.shutdown",{"_index":2017,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["achiev",{"_index":1593,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["acquir",{"_index":1942,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["action",{"_index":1858,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["actual",{"_index":1671,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["acycl",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["ad",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["adapt",{"_index":1828,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["add",{"_index":1462,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["addit",{"_index":1453,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["addition",{"_index":1606,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["addneighbor",{"_index":870,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["addneighbors(uri",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["addresscountaggreg",{"_index":849,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["address、obsoletetag、timestamp、value、currentindex、およびlastindex",{"_index":425,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["administr",{"_index":2148,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advanc",{"_index":2154,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advantag",{"_index":1496,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["affect",{"_index":1845,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["again",{"_index":2255,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["against",{"_index":1812,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["aggreg",{"_index":1604,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["aid",{"_index":2297,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["aim",{"_index":2088,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["algorithm",{"_index":1791,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["alloc",{"_index":1676,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["allow",{"_index":1498,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":852,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["alon",{"_index":2341,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["alongsid",{"_index":1977,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["alpha",{"_index":396,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":408,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alreadi",{"_index":2102,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["alter",{"_index":1714,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["altern",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["although",{"_index":1414,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["alway",{"_index":750,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amazon",{"_index":1359,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amongst",{"_index":1620,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["amount",{"_index":1231,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amp;lt;packag",{"_index":597,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1216,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["anoth",{"_index":1499,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyon",{"_index":1794,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyth",{"_index":2092,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["apach",{"_index":514,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":48,"docTitle":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/database-tables":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["apiがあります。api",{"_index":227,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1057,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":918,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1333,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1341,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1040,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":869,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1028,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1144,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["apiを使い始めるでgrpc",{"_index":1116,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["apiを使用しているため、すべてのzmq",{"_index":812,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを通してiri",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiを通して、ハブはiotaトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、id",{"_index":933,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1162,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":617,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["apiメソッドの詳細については、api",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":866,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":900,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":718,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":753,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":401,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":399,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["app",{"_index":1678,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["append",{"_index":1967,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["appli",{"_index":1799,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["applic",{"_index":1210,"docTitle":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["applications/utilities/termin",{"_index":1205,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["appnam",{"_index":2391,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["approach",{"_index":2173,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["appvers",{"_index":2392,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":953,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":950,"docTitle":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["archive（ppa",{"_index":964,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["area",{"_index":1695,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["aren't",{"_index":1888,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}}}],["argon2",{"_index":934,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["argument",{"_index":2243,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["arm64",{"_index":590,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armbian",{"_index":2231,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["arrow",{"_index":1861,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["artimaガイドはjreでscala",{"_index":819,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":891,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["asciitotrytes(json.stringify(data",{"_index":1989,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1215,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["ask",{"_index":1677,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["asset",{"_index":1820,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["assetcustodianid",{"_index":1932,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1931,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1213,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueid",{"_index":1934,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assign",{"_index":2104,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["associ",{"_index":1625,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assum",{"_index":1763,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["astronaut",{"_index":2303,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropi",{"_index":2293,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiota",{"_index":444,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiota'",{"_index":2434,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["attach",{"_index":1170,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["attachmenttimestamp",{"_index":282,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":878,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["authent",{"_index":1241,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["author",{"_index":1740,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["autoconfirm",{"_index":338,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["autom",{"_index":1416,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["automat",{"_index":1805,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["avail",{"_index":911,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["averag",{"_index":1623,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["avoid",{"_index":2106,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["avxベースのpow",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["aw",{"_index":2176,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awesom",{"_index":1270,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["awsまたはmicrosoft",{"_index":1337,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1338,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["aとは対照的に、トークンを複数のユーザーからコールドウォレットに移動するのはそれほど簡単ではありません。ただし、ハブにハブ所有者のアドレスの一部を無視させることは可能です。そのためには、hub_addressテーブル行のis_cold_storageフィールドを1に設定する必要があります。これにより、sweepservic",{"_index":1049,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["aに100mi",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["back",{"_index":1760,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["backcolour",{"_index":2428,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["background",{"_index":1357,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["backup",{"_index":1659,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["badgerdbを使用している場合は、def",{"_index":2005,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["badgerdbデータベースに格納されています。データベースディレクトリを保存するパスをdb",{"_index":2003,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["balanceev",{"_index":1060,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["balancesubscript",{"_index":1045,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balancesubscriptionrequest",{"_index":1061,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["bar",{"_index":2201,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["barometr",{"_index":2315,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["base",{"_index":1434,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["basi",{"_index":1639,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["basics/0.1/how",{"_index":802,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["batteri",{"_index":2354,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["baud",{"_index":2258,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bazel",{"_index":955,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["bazelを使ってビルドし、dock",{"_index":1129,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["be",{"_index":1787,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["beast.cc:65",{"_index":984,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["becom",{"_index":1715,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["befor",{"_index":1538,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["behavior",{"_index":2257,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["behind",{"_index":1781,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["belong",{"_index":1876,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["below",{"_index":1481,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["benefici",{"_index":2168,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["benefit",{"_index":1881,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["best",{"_index":415,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["beta1",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["better",{"_index":1901,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["between",{"_index":418,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bigger",{"_index":2276,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bill",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["bin/hub/hub",{"_index":975,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1018,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1115,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["biometr",{"_index":1240,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{}}}],["bit",{"_index":2120,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["blake2",{"_index":1410,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1411,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["block",{"_index":1979,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["blue",{"_index":1184,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["blueprint",{"_index":1428,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["board",{"_index":2206,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["boost",{"_index":1698,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["boot",{"_index":2373,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["bootstrap",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1157,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1159,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["bosch",{"_index":1345,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["both",{"_index":1505,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bottom",{"_index":2401,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["bounci",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1181,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["branchtransact",{"_index":281,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":879,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iri/0.1/concepts/the-ledger":{}}}],["branchtransactionフィールドとtrunktransact",{"_index":373,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュ値を参照して、トランザクション（子）を他の2",{"_index":231,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["bridg",{"_index":2196,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["broadcast",{"_index":1160,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["broadcastandstor",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":881,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["browser",{"_index":2150,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["bt",{"_index":2149,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":839,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":810,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":811,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1180,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["build",{"_index":1285,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["build.gradleファイルにiotaledg",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":830,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["built",{"_index":2165,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bundl",{"_index":269,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["bundle.md",{"_index":804,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["bundles、addresses、tags、approve",{"_index":885,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["busi",{"_index":1711,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["byte",{"_index":2264,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bがまだ存在していない場合は、ユーザーbがハブに作成されます（createus",{"_index":1055,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーa",{"_index":1054,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーaからiota",{"_index":1048,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["c",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1199,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["calcul",{"_index":1610,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["calibr",{"_index":2421,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["call",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["callback",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["can't",{"_index":1707,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["can’t",{"_index":1486,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["capabl",{"_index":1683,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["captur",{"_index":1778,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["card",{"_index":2229,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["carefulli",{"_index":2364,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["cartesian",{"_index":2326,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["case",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["castl",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1007,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":447,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaがまだアクティブであることを確認した後、sendtocda()メソッドを使用してioaトークンをcda",{"_index":2083,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":2027,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにパースするには、depositオブジェクトのparsemagnetlink",{"_index":2041,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send",{"_index":2072,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send()メソッドに渡すことで、予想量のiotaトークンをcda",{"_index":2037,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":2032,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの状態によって、cdaからiotaトークンを取り出すことができるのか、cdaにiota",{"_index":2070,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは81",{"_index":1999,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":2031,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。その結果、cda",{"_index":2021,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、それらを任意の形式にシリアル化して配布することができます。たとえば、timeout_at、multi_use、およびexpected_amountの各パラメータを使用して、cda",{"_index":2039,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaへiota",{"_index":2036,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":2035,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクとして使用するには、cdaをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":2084,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":2086,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":2040,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するには、cda",{"_index":2022,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを使用して、署名済みアドレスの再利用のリスクを軽減します。誰かにiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、あなたは送信者にあなたがその時間の後にだけcdaからiotaトークンを取り出すつもりであることを知らせます。その結果、送信者は、cdaの残り時間に応じて、iota",{"_index":2020,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値がなくなる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":2061,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaフィールドをgeneratecda",{"_index":2081,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cda）を使用する必要があります。cdaは、アカウント内のiota",{"_index":2019,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["celsiu",{"_index":2413,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["centigrad",{"_index":2412,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["central",{"_index":1664,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["certain",{"_index":2146,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["certif",{"_index":1203,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chain",{"_index":1721,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["challeng",{"_index":1720,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["chang",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channel",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channelroot",{"_index":1960,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey",{"_index":1961,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["checkconsist",{"_index":883,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["checkconsistency(transact",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":960,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["choos",{"_index":1685,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["chosen",{"_index":1922,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["chrome、firefox",{"_index":1393,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["chronolog",{"_index":2441,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["circl",{"_index":1863,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["circuit",{"_index":2209,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":833,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["citi",{"_index":2290,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["clean",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["click",{"_index":1807,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["client",{"_index":1454,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["client.crt、client.key、およびca.crt）をハブサーバーにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバーのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1023,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1027,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["clone",{"_index":2292,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["close",{"_index":2194,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloud",{"_index":1335,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloudflar",{"_index":1790,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["cmd+spacebar",{"_index":2200,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1013,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1267,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["codes.dag.sh",{"_index":1225,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["collect",{"_index":1892,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["color",{"_index":2431,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["column",{"_index":2153,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["combin",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["come",{"_index":2164,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["command",{"_index":910,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["command変数を別のapi",{"_index":792,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":515,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["common/flags/flags.h",{"_index":1100,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["commun",{"_index":1441,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["compact",{"_index":2215,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compani",{"_index":1940,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["compar",{"_index":1788,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["comparison",{"_index":417,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["compass",{"_index":1124,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1156,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["complet",{"_index":1813,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["complex",{"_index":1515,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["compon",{"_index":1526,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["composeapi(\\[set",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["comput",{"_index":2162,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["concept",{"_index":1766,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["config.json",{"_index":1139,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1377,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1376,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1137,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["configur",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["confirm",{"_index":1810,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["confirmed.jsファイルでは、iota",{"_index":327,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["congratul",{"_index":2187,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["conjunct",{"_index":1669,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["connect",{"_index":342,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["consensu",{"_index":1619,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["consid",{"_index":1853,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["consist",{"_index":1754,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["consol",{"_index":2435,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["consolid",{"_index":1537,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["consum",{"_index":1450,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["consumer'",{"_index":1670,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contact",{"_index":1859,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["contain",{"_index":1603,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{}}}],["content",{"_index":1709,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["context",{"_index":1646,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["continu",{"_index":1531,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["contract",{"_index":1911,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["contribut",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["control",{"_index":1463,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["convert",{"_index":1246,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["convertor",{"_index":2437,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["coordin",{"_index":2327,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["coordinates.net",{"_index":1370,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["copi",{"_index":2123,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cord",{"_index":2367,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["core",{"_index":305,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["cornerston",{"_index":1713,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["correct",{"_index":1586,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["correspond",{"_index":1746,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["cost",{"_index":1899,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["countri",{"_index":1915,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["cp2102",{"_index":2224,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["cpu",{"_index":1127,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/references/troubleshooting":{}}}],["creat",{"_index":59,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["createitem",{"_index":1991,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createitemchannel",{"_index":1984,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createuserrepli",{"_index":1062,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["createuserrequest",{"_index":1063,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["creation",{"_index":1952,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["cron",{"_index":2399,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crontab",{"_index":2365,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crud",{"_index":1642,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["cryptograph",{"_index":1736,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{}}}],["ctps1",{"_index":347,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ctrl",{"_index":827,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ctrl+c",{"_index":1019,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1035,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":875,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":352,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":353,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1245,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["current",{"_index":1734,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["currentindex",{"_index":325,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドと、バンドルの終わり（先頭トランザクション）を定義するlastindexフィールドの両方が与えられます。次に、先頭トランザクションを除くバンドル内の各トランザクションは、trunktransactionフィールドを介して互いに接続されます。次に、各トランザクションのaddress、value、obsoletetag、currentindex、lastindex、およびtimestampの各フィールドの値が、スポンジ関数によって吸収され圧搾され、81",{"_index":260,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":309,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["custodi",{"_index":1883,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["custodian",{"_index":1864,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["custom",{"_index":1837,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cut",{"_index":1674,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["cを押してrepl",{"_index":828,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1154,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":743,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":592,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":437,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["daemon",{"_index":1174,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":358,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["dag）であり、2015年にserguei",{"_index":371,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["danceなどのweb",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["danger:json.exception.parse_error.101",{"_index":979,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["danger:シードごとにアカウントを1",{"_index":2013,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["data",{"_index":1135,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["databas",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["data変数をasciitotryt",{"_index":294,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["date",{"_index":2304,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dave",{"_index":2331,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1008,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":690,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbfiles.iota.org",{"_index":868,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":694,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ddn",{"_index":2136,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["de",{"_index":2332,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":999,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["declar",{"_index":1909,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["decrypt",{"_index":1747,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dedic",{"_index":1769,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["default",{"_index":1654,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["defer",{"_index":2016,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["defin",{"_index":1947,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["degre",{"_index":2424,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["delet",{"_index":1599,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deliv",{"_index":1836,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["deliveri",{"_index":1847,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["demo",{"_index":1751,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["demonstr",{"_index":1429,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["deni",{"_index":1172,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["depend",{"_index":2274,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dependencies.jarという.jar",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["deploy",{"_index":1483,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["depth",{"_index":394,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-errors":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["depthパラメータの値を減らします。iri",{"_index":904,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1138,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["deregist",{"_index":1596,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deregistr",{"_index":1587,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["describ",{"_index":1480,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["descript",{"_index":1634,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["design",{"_index":1924,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["desktop",{"_index":1201,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["despit",{"_index":1914,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["detail",{"_index":1595,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["dev",{"_index":1982,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dev/ttyusb",{"_index":2254,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusbx",{"_index":2251,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1281,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["developer'",{"_index":2387,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["developブランチから新しいgit",{"_index":1268,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1280,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["devic",{"_index":1310,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["device'",{"_index":2147,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["devnet",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["devnet.thetangle.org",{"_index":318,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":336,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":2038,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":317,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetで自分のアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":2073,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetトークンは、mainnet",{"_index":1382,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1380,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1340,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":2000,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1238,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":708,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":789,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp",{"_index":2105,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1123,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["differ",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["difficult",{"_index":1886,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["digest",{"_index":304,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["digit",{"_index":1723,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dikw",{"_index":1307,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["dilig",{"_index":1819,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["direct",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["directli",{"_index":1533,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["discord",{"_index":106,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{}}}],["discordの#helpおよび#fullnod",{"_index":867,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1292,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":785,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["display",{"_index":1523,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dispos",{"_index":1870,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["distribut",{"_index":1432,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["distributor",{"_index":1835,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1206,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":2135,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["do",{"_index":1873,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":504,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナでiri",{"_index":729,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":733,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナも再起動するには、dock",{"_index":748,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする(#ビルド済みのiri",{"_index":735,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":734,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドする(#ソースコードからiri",{"_index":736,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":737,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、コンピュータはiriノード用のlinuxサーバーになり、iota",{"_index":730,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":747,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1140,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["document",{"_index":1295,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["doesn't",{"_index":2220,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["domain",{"_index":2132,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["don't",{"_index":1815,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["done",{"_index":1512,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dot",{"_index":1860,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["doubl",{"_index":2184,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["doubt",{"_index":2287,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["down",{"_index":2405,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["download",{"_index":1207,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["driver",{"_index":2394,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["dropdown",{"_index":2144,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duck",{"_index":2139,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["due",{"_index":1817,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["dure",{"_index":2410,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dynam",{"_index":1426,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["e",{"_index":1233,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["e.g",{"_index":1928,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["e0328",{"_index":981,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["each",{"_index":1503,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["earth",{"_index":2296,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earthquak",{"_index":2298,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earth’",{"_index":2324,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["easi",{"_index":1838,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["easier",{"_index":1427,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["easiest",{"_index":2372,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["easili",{"_index":1718,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["econom",{"_index":1842,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["edit",{"_index":1774,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["effect",{"_index":2157,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["effici",{"_index":2216,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["eloqu",{"_index":1457,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["embed",{"_index":1513,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["employ",{"_index":1504,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["enabl",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":635,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["encourag",{"_index":1489,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["encrypt",{"_index":1465,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["end",{"_index":1761,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["endeavor",{"_index":1476,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["endpoint",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["energi",{"_index":1297,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["english",{"_index":2375,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enough",{"_index":2427,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enter",{"_index":1811,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["entir",{"_index":1729,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["entiti",{"_index":1430,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["entri",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":404,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["environ",{"_index":2090,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":818,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["envis",{"_index":1887,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["equilibria",{"_index":413,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["error",{"_index":987,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["errorcod",{"_index":1092,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["error。例：status::cancel",{"_index":1064,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["establish",{"_index":2197,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["eth",{"_index":2239,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ethernet",{"_index":2221,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ev",{"_index":443,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":823,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["even",{"_index":1439,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["event",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["event_logger.go",{"_index":2047,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":2044,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトでアカウントが開始されると、eventmachin",{"_index":2042,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":2048,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["everyth",{"_index":1808,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ev）の充電料金をiota",{"_index":439,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exact",{"_index":1906,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["exampl",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["example&lt",{"_index":605,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":603,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exce",{"_index":1879,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["exchang",{"_index":1948,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["execut",{"_index":2237,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1198,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["exist",{"_index":1966,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["expect",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":2063,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールドを持つcda",{"_index":2062,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールド値を持つcda",{"_index":2058,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expectedamount",{"_index":2025,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["expens",{"_index":1418,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["experi",{"_index":2347,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["expert",{"_index":1493,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["explain",{"_index":1458,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["explor",{"_index":312,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["expos",{"_index":2093,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["express",{"_index":1686,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["extend",{"_index":1965,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["extern",{"_index":1939,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extract",{"_index":2182,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["facad",{"_index":512,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fahrenheit",{"_index":2414,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fail",{"_index":2377,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["fals",{"_index":324,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["faq",{"_index":2053,"docTitle":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["far",{"_index":1866,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["fashion",{"_index":1567,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["fastest",{"_index":2198,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":2245,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["featur",{"_index":2213,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1269,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1271,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1255,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fetch",{"_index":1927,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["few",{"_index":2137,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["field",{"_index":1616,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fijter'",{"_index":2333,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1176,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1152,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["final",{"_index":2409,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["find",{"_index":1995,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["findtransact",{"_index":884,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["findtransactionobject",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1953,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":2155,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["first",{"_index":1929,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["flash",{"_index":2232,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["flink",{"_index":807,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":808,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":805,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["folder",{"_index":1651,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["follow",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["forc",{"_index":2319,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fork",{"_index":498,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["form",{"_index":1627,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["format",{"_index":1785,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["forward",{"_index":2097,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["found",{"_index":2246,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["foundat",{"_index":602,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["four",{"_index":1445,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["framework",{"_index":1258,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["free",{"_index":2170,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["front",{"_index":1767,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["fulfil",{"_index":1846,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["full",{"_index":1814,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["function",{"_index":339,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["futur",{"_index":1630,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["gateway",{"_index":1789,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gateway4",{"_index":2126,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gather",{"_index":2407,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["gcc、clang、または@iota_toolchain",{"_index":954,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["gener",{"_index":67,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["generate_ca.sh",{"_index":1006,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1017,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1012,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatecda()メソッドは以下のフィールドを持つcda",{"_index":2085,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":838,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["get",{"_index":2356,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["getaccountdata",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1065,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getaddressinforequest",{"_index":1066,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbal",{"_index":886,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["getbalancerepli",{"_index":1067,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalancerequest",{"_index":1068,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalances(address",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":229,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["getbundl",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1044,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1069,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1070,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getinclusionst",{"_index":323,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":321,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":333,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":887,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":299,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":300,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.j",{"_index":2389,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":719,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":751,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":888,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettips(\\[callback",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":397,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":890,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettrytes(hash",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1071,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1072,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["ginkgo",{"_index":596,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":600,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":697,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["github",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":2034,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":674,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1288,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1119,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":941,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":677,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":675,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["give",{"_index":1612,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["given",{"_index":1916,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["glass",{"_index":1831,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["gnu/linux",{"_index":2358,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":95,"docTitle":{"docs/iota-go/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["goal",{"_index":2166,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":601,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":434,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goodby",{"_index":1588,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["googl",{"_index":1334,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{}}}],["googleアカウントでのoauth",{"_index":1339,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1397,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1389,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1394,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1398,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goでのpow",{"_index":594,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":435,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":574,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gp",{"_index":1368,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1214,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["graphic",{"_index":1756,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["green",{"_index":1862,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["grid",{"_index":1298,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["group",{"_index":1824,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["grpc",{"_index":932,"docTitle":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["grpcc",{"_index":1029,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":998,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1026,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバーを提供します。ハブは、対話するために使用できるgrpc",{"_index":997,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":949,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["gs1",{"_index":1936,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guarante",{"_index":1617,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guard（gpg",{"_index":967,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["gui",{"_index":1758,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guid",{"_index":1826,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["guides/confirm",{"_index":803,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["gyroscop",{"_index":2320,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["handl",{"_index":1856,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["hard",{"_index":2432,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hardwar",{"_index":1680,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["hash",{"_index":279,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["hash(hash(ノード1",{"_index":385,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ1",{"_index":381,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ3",{"_index":383,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(ノード2",{"_index":386,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ2",{"_index":382,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ4",{"_index":384,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hashcashと同様に、各トランザクションはそれが検証されることができる前にpowを含まなければなりません。このpowは、有効なトランザクションを作成するのにかかる時間および計算能力を増大させることによって、iotaネットワークにスパム防止を提供します。さらに、スパムトランザクションがネットワークに及ぼす影響を減らすために、ノードは有効なpow",{"_index":423,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["hat",{"_index":2307,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["have",{"_index":1750,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["hdmi",{"_index":2350,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["head",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["headless",{"_index":2328,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["heat",{"_index":2420,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["held",{"_index":1872,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["hello",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1482,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["helpフラグを付けてiri",{"_index":928,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["here",{"_index":2183,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["high",{"_index":441,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["histori",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["home/binディレクトリを$path",{"_index":957,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hook",{"_index":2295,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["hope",{"_index":1479,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["host",{"_index":1516,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1361,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["http",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1161,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["http&#x3a;//localhost:14265のノードに接続して以下のシードでログインするようにiota",{"_index":1165,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["httpconnector",{"_index":2069,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/iotaledger/iota.j",{"_index":2301,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1662,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1660,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1663,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1362,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1363,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1983,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":220,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//www.gp",{"_index":1369,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsではなくhttpプロトコルを使用していることを確認してください。ノードのアドレスは、コマンドラインフラグのapiaddress",{"_index":980,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["httpsプロキシサーバーを設定したい場合は、nginx",{"_index":778,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":773,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":944,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":996,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":995,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1058,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hub/db/db.cc",{"_index":1101,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/server/server.cc",{"_index":1102,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/service/sweep_service.cc",{"_index":1103,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub_address",{"_index":1105,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address_bal",{"_index":1106,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address行でis_cold_storageを0に設定し、seed_uuid",{"_index":1053,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hub_address行でis_cold_storageを1に設定し、seed_uuid",{"_index":1052,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1073,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1093,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["huge",{"_index":2281,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["human",{"_index":1475,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["humid",{"_index":2309,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["i'm",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1278,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ibc",{"_index":1823,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["id",{"_index":959,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ideal",{"_index":1436,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ident",{"_index":2439,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["identification）フォーマットは\"udp://ipaddress:port",{"_index":896,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["identification）フォーマットは、\"udp://ipaddress:port",{"_index":874,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1365,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1402,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":2068,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":2007,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1400,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfig",{"_index":2238,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ignor",{"_index":2116,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["illegalargumentexcept",{"_index":1178,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["illustr",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["imag",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["immedi",{"_index":1665,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["immut",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["implement",{"_index":1508,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["import",{"_index":1980,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["imu",{"_index":2314,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["incent",{"_index":1912,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["incentiv",{"_index":1871,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["includ",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["increas",{"_index":1877,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["independ",{"_index":1920,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["index",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["indic",{"_index":2422,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["individu",{"_index":2369,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["industri",{"_index":1833,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["inerti",{"_index":2313,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["inet",{"_index":2115,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inexpens",{"_index":2225,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:depth",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["info:ipv6",{"_index":2241,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":761,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:このテストトークンはdevnet",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:無料のspamnet",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["inform",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["infrastructur",{"_index":1424,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["init",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initi",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["initiatetransf",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["innov",{"_index":1699,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["input",{"_index":902,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["input/output",{"_index":2210,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insert",{"_index":1938,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insid",{"_index":2163,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inspir",{"_index":2330,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["instal",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1284,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["instead",{"_index":1532,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["instruct",{"_index":1470,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["int128",{"_index":591,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["integr",{"_index":1419,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["intend",{"_index":1509,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["intens",{"_index":1519,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["interact",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["interconnect",{"_index":1495,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["interfac",{"_index":1757,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["intern",{"_index":1696,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["internet",{"_index":2094,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interplanetari",{"_index":1771,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["interruptattachingtotangl",{"_index":893,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["interv",{"_index":2134,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["intervent",{"_index":1421,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["introduc",{"_index":1993,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["invalid",{"_index":901,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/install-hub":{}}}],["involv",{"_index":1444,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["io",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1265,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1266,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iri/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["iota.j",{"_index":1326,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":293,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":301,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota.lib.j",{"_index":2388,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota/ipf",{"_index":1773,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":2078,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota://uriで始まり、その後に90",{"_index":1230,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1232,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iotaaccountオブジェクトにはデフォルトの設定がありますが、少なくともシードとmongodb",{"_index":2065,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapi",{"_index":2066,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":505,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaでは、トランザクションのバンドルをノードに送信する必要があります。iotaには、3",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaでは、署名方法の性質上、各アドレスから1度だけしかiotaトークンを取り出さない方が良いため、秘密鍵とアドレスのペアが複数個必要となります。そのため、アドレスからiota",{"_index":238,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":224,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":344,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":359,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":375,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":290,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":286,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":937,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。同じ秘密鍵を使用して別のバンドルに署名すると、攻撃者は秘密鍵に総当たり攻撃を行い、そのアドレスからiotaトークンを盗むことができます。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは2度とiota",{"_index":943,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは無許可型のdltです。したがって、ノードを個人や企業を含む誰でもが実行することができます。大量のapi呼び出しはコストがかかる可能性があるため、ノード所有者はそれらを一般に公開しないことがよくあります。そのため、iota",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1300,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1291,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["iotaアドレス以上のものです。これらのアドレスは、条件付預け入れアドレス（cda",{"_index":1998,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1391,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1392,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":297,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":306,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":291,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":292,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":430,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":836,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1304,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルを使用してデータをmam",{"_index":1329,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":362,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1239,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1108,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":940,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1155,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iotaトークンの値が、iota",{"_index":625,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":627,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの取り出し/預け入れや、データを送信することができます。ノードに1",{"_index":259,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークンの総供給量は(333",{"_index":345,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":2026,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンの量があります。この場合は1,000個のiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":628,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":367,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンをcda",{"_index":2071,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1379,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1",{"_index":942,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを使うには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名し、その署名をトランザクションのsignaturemessagefrag",{"_index":248,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":939,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":296,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":349,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンを特定のアドレスから特定のアドレスに転送するように指示する1",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1104,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":285,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":316,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを送受信するために、クライアントはバンドルと呼ばれるトランザクションのパッケージをノードに送信します。バンドル内のトランザクションは、あるアドレスから別のアドレスにiota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":267,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":626,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをiri",{"_index":1120,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":360,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークに接続するためのiotaapiオブジェクトと、シードを管理するためのiotaaccount",{"_index":2064,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードが台帳のコピーを保持し、iota",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のiota",{"_index":223,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiota",{"_index":159,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":723,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントはシードを作成して秘密にする必要があります。シードとは、クライアントにアドレスへのアクセスを許可する81",{"_index":235,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":618,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":361,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュが事前定義されたmwmと同じかそれ以上の数の0",{"_index":275,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":226,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":624,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはiota",{"_index":234,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルの暗号学的ハッシュ関数のマスターキーです。各シードは、ほぼ無制限の固有の秘密鍵とアドレス（957",{"_index":236,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1305,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1217,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1381,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1383,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1179,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["iota財団のgithub",{"_index":1195,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のwebサイト、iota",{"_index":686,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1321,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":218,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1317,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1330,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1282,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1318,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1322,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":572,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":232,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1319,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":768,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ip_address_from_step_7",{"_index":2202,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ipf",{"_index":1753,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipv4",{"_index":2262,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":2242,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスか、duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":664,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":769,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":767,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバーのipアドレスに変更します。sign",{"_index":1024,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":770,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri",{"_index":165,"docTitle":{"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iri.conf",{"_index":760,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":855,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":863,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":642,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":865,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":716,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":638,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":637,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":672,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":699,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":612,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriは次のポートを使用します。ローカルネットワークでlinuxサーバーを実行している場合は、これらのポートをコンピュータのパブリックip",{"_index":665,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":715,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを実行するコンピューターはiri",{"_index":607,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriを構築済みのdock",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":673,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":366,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":915,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":772,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":621,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードがなければ、iota",{"_index":609,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":978,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":640,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":639,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":931,"docTitle":{},"docBody":{"docs/iri/0.1/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":619,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":623,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードとコンパスを同じサーバーまたは仮想マシンにインストールします。しかし、複数のiri",{"_index":1121,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1145,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":905,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":913,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":912,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":722,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":610,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1142,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":728,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":787,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":786,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":634,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":611,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、iri",{"_index":779,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの台帳のトランザクションによって参照されているトランザクションですが、iri",{"_index":622,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":608,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1146,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":620,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":649,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":784,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":831,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":731,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを走らせる（dock",{"_index":164,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":763,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションが適しています。設定オプションを変更したい場合は、config.ini",{"_index":705,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iri設定オプションをフラグとして渡すことで、iri",{"_index":740,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":917,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":742,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjava",{"_index":606,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iri：latest",{"_index":746,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["isn't",{"_index":1733,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":329,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iss",{"_index":2302,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["issu",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/references/troubleshooting":{}}}],["it'",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["item",{"_index":1644,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["itemid",{"_index":1994,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ixi",{"_index":920,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":714,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ja",{"_index":446,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":683,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":91,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["java_max_memori",{"_index":703,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":702,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":701,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1360,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascriptでmam",{"_index":1328,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":432,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javaがインストールされていることを確認するには、java",{"_index":681,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":820,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":433,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":693,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":704,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":692,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":676,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":698,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":678,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":682,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":739,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":506,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":700,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2359,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie.img",{"_index":2363,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jitpack",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["job",{"_index":2400,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["join",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["jota",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":502,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1783,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["json.exception.parse_error.101",{"_index":985,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1131,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1191,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keccak",{"_index":239,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["keep",{"_index":1854,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["keepass",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kept",{"_index":1527,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":354,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["kernel",{"_index":2285,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["key",{"_index":1748,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["keyboard",{"_index":2219,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":846,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":845,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":848,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":303,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1353,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["know",{"_index":1905,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["knowledg",{"_index":1690,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["known",{"_index":1889,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lack",{"_index":1818,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["lan",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lang",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1247,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["last",{"_index":990,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["later",{"_index":1536,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["latest",{"_index":319,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["latestmileston",{"_index":2393,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["latestmilestoneindex",{"_index":393,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":614,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":724,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":726,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":725,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":615,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":727,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":409,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":616,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["launch",{"_index":2178,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["layer",{"_index":1461,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["layers_calcul",{"_index":1136,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["lead",{"_index":1897,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["learn",{"_index":1456,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["led",{"_index":2336,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["ledger",{"_index":921,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["left",{"_index":2127,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["legaci",{"_index":2386,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["legion",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["level",{"_index":1446,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートとシード履歴をleveldbデータベースのleveldown",{"_index":2079,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":1455,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["licens",{"_index":1693,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lifecycl",{"_index":1730,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["light",{"_index":1166,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["lighter",{"_index":2214,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lightweight",{"_index":1510,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["limit",{"_index":914,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["line",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["link",{"_index":431,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linux",{"_index":51,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":813,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1125,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["linuxサーバーでiri",{"_index":659,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバーで、ターミナルウィンドウを開いて、nginx",{"_index":755,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバーで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":717,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバー上でiriを実行すると、linuxサーバーがiotaネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":660,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1212,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["list",{"_index":1524,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["listen",{"_index":2156,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["liter",{"_index":989,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["live",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["load",{"_index":1803,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["local",{"_index":926,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["local_snapshots_base_path",{"_index":644,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":645,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":654,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":657,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":780,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":647,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":655,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":781,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localhost",{"_index":2118,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["localis",{"_index":2382,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1732,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["log",{"_index":511,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["login",{"_index":2261,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["logist",{"_index":1830,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["longer",{"_index":1590,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["look",{"_index":2226,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":825,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["lose",{"_index":1839,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["loss",{"_index":1843,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["lost",{"_index":1945,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["low",{"_index":1440,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["ls",{"_index":2253,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lt",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;&lt;&lt;&lt;&lt;&lt;&lt",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["lt;assetcustodianid",{"_index":1968,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["lt;assetuniqueid",{"_index":1930,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":952,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":962,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mac",{"_index":732,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["machin",{"_index":1433,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["macosx",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1262,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["made",{"_index":2305,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnet",{"_index":2325,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnetomet",{"_index":2323,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["main",{"_index":1525,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mainnet",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":856,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木の深さは23です。したがって、コーディネーターの公開鍵と秘密鍵のペアは8,388,608",{"_index":380,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーン署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":388,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1118,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["maintain",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mainten",{"_index":1727,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["major",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["make",{"_index":1423,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["malform",{"_index":1150,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":440,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.attach",{"_index":1987,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.changemod",{"_index":1986,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.client.j",{"_index":1981,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.creat",{"_index":1990,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamsecret",{"_index":2411,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamのgithub",{"_index":1327,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["mamチャネルの作成と使用、web",{"_index":1332,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1294,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["manag",{"_index":1235,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mani",{"_index":2089,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["manner",{"_index":1500,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["manual",{"_index":1289,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["manufactur",{"_index":1832,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["map",{"_index":844,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":854,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":968,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1390,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":969,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1041,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["markdown",{"_index":1802,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["marketplac",{"_index":1293,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["marque",{"_index":2408,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mask",{"_index":1459,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["match",{"_index":1816,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["maven",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":695,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":395,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":406,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maxdepth",{"_index":410,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["meaning",{"_index":1949,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["measur",{"_index":1600,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mechan",{"_index":1506,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["memori",{"_index":2175,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["menu",{"_index":2381,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["merkl",{"_index":377,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["messag",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["messages.proto",{"_index":1059,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1306,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["met",{"_index":1618,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["meta",{"_index":1779,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["metadata",{"_index":916,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["method",{"_index":1672,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["mi",{"_index":1186,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["microprocessor",{"_index":2211,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["mileston",{"_index":320,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["milestonesとしてsnapshot.meta",{"_index":651,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["minimum",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["minut",{"_index":2138,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["minweightmagnitud",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["misplac",{"_index":1840,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["miss",{"_index":1844,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mistak",{"_index":1485,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1189,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":679,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":442,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1242,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["model",{"_index":1324,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modifi",{"_index":1964,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["modul",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moduleのbuild.gradl",{"_index":94,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["momentum",{"_index":2321,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mongodb",{"_index":1687,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["monitor",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["monitorinterv",{"_index":945,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["more",{"_index":1425,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moreov",{"_index":1885,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mostusedaddressesaggreg",{"_index":853,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mous",{"_index":2349,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["much",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi",{"_index":2030,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi_us",{"_index":2060,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multi_useフィールドを持つcda",{"_index":2056,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multipl",{"_index":1829,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["multius",{"_index":2024,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":2029,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["mvn",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":278,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmが高いほど、プルーフオブワークは難しくなります。クライアントとしてiotaネットワークと対話するときは、ネットワークに適したmwm",{"_index":274,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmは14です。したがって、すべてのトランザクションハッシュ値は、14個の0",{"_index":276,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":364,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、mwmと同じ数の0",{"_index":273,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["my_password",{"_index":2236,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["my_ssid",{"_index":2235,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["myaccount.go",{"_index":2051,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":974,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mysql",{"_index":971,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1043,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["name",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":604,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":598,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":599,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":745,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1182,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["nativ",{"_index":1252,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["natur",{"_index":1435,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["navig",{"_index":2189,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["near",{"_index":2419,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nearli",{"_index":1716,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["necessari",{"_index":2212,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["necessarili",{"_index":2091,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["need",{"_index":1502,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["neighbor",{"_index":2096,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":720,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":752,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":895,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":871,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbour",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["net",{"_index":1257,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1342,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yaml",{"_index":2131,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["netmask",{"_index":2113,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=16",{"_index":2277,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=24",{"_index":2275,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["network",{"_index":919,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neutral",{"_index":1705,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["never",{"_index":2438,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["new",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neweventloggerplugin",{"_index":2052,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["next",{"_index":2114,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nginx",{"_index":757,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":766,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":771,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":776,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバーが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":759,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":765,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":754,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバーでポート5000",{"_index":762,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmap",{"_index":2265,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":414,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":83,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":795,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1253,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["nodej",{"_index":1762,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["noder",{"_index":2385,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":420,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["nonc",{"_index":283,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iri/0.1/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":428,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["nordic",{"_index":1347,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1356,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["note",{"_index":2112,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["now",{"_index":2145,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":2009,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":841,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":892,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["number",{"_index":1874,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["numberformatexcept",{"_index":1177,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1153,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1364,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["object",{"_index":1784,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["obtain",{"_index":1970,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["occur",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["odomet",{"_index":1726,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["off",{"_index":1478,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["offici",{"_index":2291,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["offlin",{"_index":1530,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["offload",{"_index":1521,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ok",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":403,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["omit",{"_index":1649,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["on",{"_index":907,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["onboard",{"_index":1896,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["onc",{"_index":1629,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["onlin",{"_index":2158,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["onto",{"_index":1918,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["open",{"_index":1314,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["openjdk",{"_index":680,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1015,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["oper",{"_index":1511,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["option",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["orang",{"_index":2230,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["order",{"_index":1609,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["organ",{"_index":1827,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["organis",{"_index":1702,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["origin",{"_index":1821,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["os",{"_index":2217,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ot",{"_index":250,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["otherwis",{"_index":2108,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["otsは未知数の秘密鍵を明らかにしてしまいます。秘密鍵の半分が明らかになるように正規化することで、アドレスから1度だけは安全にiota",{"_index":252,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["ots）iota",{"_index":357,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ots）を使用しているため、秘密鍵は1つのバンドルに対してのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":376,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["out",{"_index":1492,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["output",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["outsid",{"_index":2095,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["outsourc",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["outstand",{"_index":1667,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["over",{"_index":1467,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["overflow",{"_index":862,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["overview",{"_index":1697,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}}}],["ow",{"_index":1633,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["owner",{"_index":1822,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ownership",{"_index":1728,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["p2p",{"_index":1299,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["pack",{"_index":2343,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["packag",{"_index":963,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["package.json",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["page",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["paid",{"_index":1621,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2337,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["paramet",{"_index":906,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["parent",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pars",{"_index":986,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["part",{"_index":1637,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["parti",{"_index":1692,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["particip",{"_index":1913,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["partit",{"_index":1647,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["partner",{"_index":687,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["pass",{"_index":1598,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["password",{"_index":68,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["past",{"_index":2124,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["path",{"_index":1204,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":744,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["pattern",{"_index":1494,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pay",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["payload",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["payment",{"_index":1417,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddress",{"_index":1624,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1193,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1296,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pend",{"_index":326,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["per",{"_index":1611,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["perceiv",{"_index":1880,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["perform",{"_index":1514,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["period",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["perman",{"_index":1638,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["permanod",{"_index":706,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":707,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1171,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["permissionless",{"_index":1643,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["persistenceadapt",{"_index":2076,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["persistencepath",{"_index":2077,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phone",{"_index":1943,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["photo",{"_index":1249,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["physic",{"_index":2129,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["pi",{"_index":1351,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pictur",{"_index":1447,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pin",{"_index":2348,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pip3.2",{"_index":2371,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pipe",{"_index":2378,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["place",{"_index":1658,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["placehold",{"_index":2203,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["plan",{"_index":1902,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["platform",{"_index":2169,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["platformio",{"_index":2248,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1336,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":689,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["plu",{"_index":2346,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["plug",{"_index":2250,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pngファイルとしてqr",{"_index":1226,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1388,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1331,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1412,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pointer",{"_index":1731,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["pointsとしてsnapshot.meta",{"_index":653,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":2011,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":2015,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pool",{"_index":1675,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["popov教授によってiota",{"_index":372,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["popul",{"_index":1806,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["popular",{"_index":2167,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["port",{"_index":1954,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["portal",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":788,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["possibl",{"_index":1735,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["post",{"_index":1780,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["postgresまたはfirebas",{"_index":1395,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-go/0.1/README":{}}}],["pow_arm_c128",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":593,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["power",{"_index":1422,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["powは、クライアントによって行われてもよく、またはattachtotangl",{"_index":424,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powは大量の電子メールスパムを減らすための概念として導入されました。この概念はhashcashとして知られており、すべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":422,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":595,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを計算する関数はpearldiv",{"_index":429,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["pow）は試行錯誤を用いて計算され、それ故、pow",{"_index":421,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["ppaをダウンロードするためにgnu",{"_index":965,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["pr",{"_index":1031,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["pre",{"_index":2345,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["predict",{"_index":1878,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prefer",{"_index":1923,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":405,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["prepar",{"_index":2227,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["preparetransf",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prerequisit",{"_index":1679,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["present",{"_index":1770,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["press",{"_index":2199,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pressur",{"_index":2316,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prevent",{"_index":1795,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["price",{"_index":1608,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["primari",{"_index":1969,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["principl",{"_index":1798,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["print",{"_index":824,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["privaci",{"_index":966,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["privat",{"_index":1645,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["process",{"_index":1520,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["processtransf",{"_index":1046,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["processtransferbatchrepli",{"_index":1074,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1075,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1076,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["produc",{"_index":1472,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["producer'",{"_index":1605,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpric",{"_index":1615,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["product",{"_index":1904,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["program",{"_index":1689,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["project",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["promotetransact",{"_index":330,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":970,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["proof",{"_index":924,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["propos",{"_index":1607,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["proprietari",{"_index":1875,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["protect",{"_index":1919,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["protocol",{"_index":922,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["prove",{"_index":1737,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["provid",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["provis",{"_index":1545,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["public",{"_index":1700,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publish",{"_index":1373,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pueotseitfevewcwbtsizm9nkrgjeimxtulbacgfrqk9imgiclbkw9ttevsdqmgwkbxpvcbmmcxwmnpdx",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["purchas",{"_index":2340,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["purpl",{"_index":1865,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["purpos",{"_index":1648,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["put",{"_index":1594,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["putti",{"_index":2204,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pyramid",{"_index":1308,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":436,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2370,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":958,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":741,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1223,"docTitle":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1224,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1228,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1227,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qubic",{"_index":1910,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["question",{"_index":1488,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["queue",{"_index":630,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["quickstart",{"_index":1469,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["r",{"_index":1287,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["rack",{"_index":1834,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["ram",{"_index":662,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ramが4gb未満など、リソースが限られている場合は、iriではなくciri",{"_index":671,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["random",{"_index":419,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["raspberri",{"_index":1350,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["raspbian",{"_index":2344,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["rasperri",{"_index":2218,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rate",{"_index":2259,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["raw",{"_index":2417,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["re",{"_index":1996,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["react",{"_index":1264,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1387,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1251,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":991,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["readi",{"_index":2351,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["readm",{"_index":445,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1375,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["real",{"_index":1804,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reason",{"_index":1868,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["reattach",{"_index":2012,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["reboot",{"_index":2288,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["recap",{"_index":1974,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["receipt",{"_index":1786,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["receiv",{"_index":1221,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.j",{"_index":2397,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recommend",{"_index":1985,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["reconcil",{"_index":1921,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["record",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["recov",{"_index":1849,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["recoveri",{"_index":1825,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":850,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["redund",{"_index":1529,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["refer",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":402,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["regattachingtotangleイベントをリッスンする新しいcallbackeventlisten",{"_index":2045,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["regist",{"_index":1535,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["registered/deregist",{"_index":1591,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["registr",{"_index":1518,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["regular",{"_index":1622,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["relat",{"_index":1855,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["releas",{"_index":685,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["relev",{"_index":1951,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reliabl",{"_index":2171,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["remain",{"_index":1739,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["rememb",{"_index":1988,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["remot",{"_index":2384,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["remote=fals",{"_index":930,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remote=tru",{"_index":929,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remov",{"_index":1636,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["removeneighbor",{"_index":894,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["removeneighbors(uri",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["rent",{"_index":2172,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["repl",{"_index":826,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["replac",{"_index":2125,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["replaybundl",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":331,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["replic",{"_index":1448,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["report",{"_index":1882,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["repositori",{"_index":1468,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{}}}],["repres",{"_index":1841,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["reproduc",{"_index":1768,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reput",{"_index":1908,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["req",{"_index":1016,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1420,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["research",{"_index":1490,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reset",{"_index":2436,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["resolv",{"_index":2289,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["resourc",{"_index":873,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["respect",{"_index":1631,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["respons",{"_index":889,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["rest",{"_index":1325,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["restart",{"_index":749,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["restrict",{"_index":1958,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["result",{"_index":1792,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["retriev",{"_index":1661,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["retrievefil",{"_index":1776,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrofit",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1451,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["reveal",{"_index":1884,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["revenu",{"_index":1703,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["revok",{"_index":1743,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["reward",{"_index":1907,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["rgb",{"_index":2430,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["right",{"_index":1950,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["robot",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":613,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["role",{"_index":1852,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["root",{"_index":1956,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["rootのbuild.gradl",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["root：//iota",{"_index":801,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["rotat",{"_index":2322,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["round",{"_index":2416,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["router",{"_index":2098,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["router'",{"_index":2099,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1143,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["rpchub",{"_index":973,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["rpi",{"_index":1681,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["rule",{"_index":2100,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":503,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["runtim",{"_index":817,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["runコマンドに次のフラグを1",{"_index":1099,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1286,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["s3",{"_index":1800,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["safe",{"_index":1657,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["salt",{"_index":936,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltとseed_uuid",{"_index":1051,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["saltパラメーターはもう必要ありません。署名サーバー（signer:50051）と使用するssl",{"_index":1025,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":977,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1114,"docTitle":{},"docBody":{"docs/hub/0.1/references/security-considerations":{}}}],["same",{"_index":1797,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["sampl",{"_index":2329,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["save",{"_index":1898,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sbc",{"_index":2207,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":821,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scalar",{"_index":1096,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["scalaプログラミング言語とsbt",{"_index":816,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scan",{"_index":1935,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["scenario",{"_index":1449,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["scene",{"_index":1782,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["schedul",{"_index":1688,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scope",{"_index":1973,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["scratch",{"_index":2355,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["screen",{"_index":2186,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["screen/tmuxセッション、system",{"_index":992,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":2142,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1374,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["scroll",{"_index":2395,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sd",{"_index":2228,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["seamlessli",{"_index":1891,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["search",{"_index":1900,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["second",{"_index":1460,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seconds変数を1",{"_index":328,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["section",{"_index":2087,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["sector",{"_index":1701,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["secur",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["see",{"_index":1666,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["seed",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seed9999999999999999999999999999999999999999999999999999999999999999999999999999999の合計残高を取得するには、getbalancesエンドポイントを呼び出します。これまでにiota",{"_index":1163,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["seed_uuid",{"_index":1050,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":2002,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":2067,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1034,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":298,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["seek",{"_index":1491,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["seen",{"_index":1869,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["select",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["selector",{"_index":1244,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1348,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1219,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["send()メソッドを使用してデータトランザクションをcda",{"_index":2046,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["sender",{"_index":2406,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.j",{"_index":2396,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sendtransf",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":308,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2306,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sensehat",{"_index":2300,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2398,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1352,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sent",{"_index":2433,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["separ",{"_index":1528,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sequenc",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["seri",{"_index":1917,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["serial",{"_index":2249,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["server",{"_index":1354,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":775,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1355,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["set",{"_index":1635,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["setinterv",{"_index":332,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["setup",{"_index":2177,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sever",{"_index":2368,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sha",{"_index":1408,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1197,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256チェックサムは、apach",{"_index":696,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1196,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1200,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha512",{"_index":1406,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["share",{"_index":1712,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["shell",{"_index":2191,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ship",{"_index":1722,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["shipment",{"_index":1903,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["show",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["showdata",{"_index":2440,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shown",{"_index":2418,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shut",{"_index":2404,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shutdown",{"_index":2050,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["side",{"_index":1957,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sidekey",{"_index":1597,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signal",{"_index":1589,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドに、マークル木を再構築できるようにするためにマークル木から足りないデータが含まれている1",{"_index":390,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つインプットアドレスは、ゼロトークンのアウトプットトランザクションのsignaturemessagefrag",{"_index":256,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":266,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signbundlerepli",{"_index":1077,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signbundlerequest",{"_index":1078,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signed_uuid",{"_index":1107,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1011,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1021,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1020,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1311,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["similar",{"_index":1484,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simpl",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplest",{"_index":2252,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplifi",{"_index":1857,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["singl",{"_index":2205,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["situat",{"_index":1487,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["size",{"_index":1653,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["slash",{"_index":2128,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["slider",{"_index":2185,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["slightli",{"_index":2334,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["slow",{"_index":2426,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["small",{"_index":2208,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["smaller",{"_index":2335,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1323,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sn",{"_index":799,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":927,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1147,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["snapshot.meta",{"_index":641,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":643,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1148,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["snippet",{"_index":1978,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["socket",{"_index":1175,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["softwar",{"_index":1684,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["solid",{"_index":652,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["solidif",{"_index":923,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["solut",{"_index":1710,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["soon",{"_index":2312,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["sourc",{"_index":1471,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["source'",{"_index":1592,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sourceディレクトリに移動してrepl",{"_index":829,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["space",{"_index":2294,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["spamnet",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":219,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":221,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":713,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":1764,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["speed",{"_index":2415,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["spent",{"_index":857,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["spread",{"_index":1894,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["src/desktop/out",{"_index":1263,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1275,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1279,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1937,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":2192,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssl",{"_index":1004,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1022,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["stack",{"_index":861,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["stackoverflow",{"_index":1117,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["stakehold",{"_index":1851,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["standard",{"_index":1641,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["start",{"_index":337,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":2049,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":976,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["starter",{"_index":2342,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1151,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["static",{"_index":2101,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["station",{"_index":1344,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["statist",{"_index":2390,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["statsrepli",{"_index":1079,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statsrequest",{"_index":1080,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statu",{"_index":1933,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status",{"_index":1946,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["stay",{"_index":2107,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["step",{"_index":1975,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["still",{"_index":1534,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["stop",{"_index":1601,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["storag",{"_index":1301,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["store",{"_index":1507,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["store.clos",{"_index":2006,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1775,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetransact",{"_index":897,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["storetransactions(tryt",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":2004,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["straight",{"_index":2103,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["stream",{"_index":1466,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":822,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["structur",{"_index":1652,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["studio",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sub",{"_index":2141,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subdomain",{"_index":2140,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1014,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["subnet",{"_index":2263,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["subscrib",{"_index":1585,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subscript",{"_index":2310,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subse",{"_index":302,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":102,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["success:congratul",{"_index":2247,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:おめでとうございます:tada",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["success:おめでとうございます！:tada",{"_index":764,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1158,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["such",{"_index":1497,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["summar",{"_index":1850,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":994,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["suppli",{"_index":1415,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["support",{"_index":1640,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sure",{"_index":2143,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["surpris",{"_index":2376,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sweep",{"_index":1109,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweep_max_deposit",{"_index":947,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":948,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_tail",{"_index":1110,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1081,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1082,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepev",{"_index":1083,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinforequest",{"_index":1084,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinterv",{"_index":946,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1037,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1085,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["symbol",{"_index":2379,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sync",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["syntax",{"_index":988,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["system",{"_index":1122,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sとledger",{"_index":1183,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1188,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1185,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["tab",{"_index":2195,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tabl",{"_index":1522,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["tada",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tail",{"_index":334,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":335,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["take",{"_index":1626,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["taken",{"_index":1673,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["tangl",{"_index":142,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tanglebeatはzmq",{"_index":832,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["task",{"_index":1358,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tcp",{"_index":668,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":798,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":222,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":669,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["technic",{"_index":1765,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["technolog",{"_index":1438,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tell",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["temperatur",{"_index":2308,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["termin",{"_index":2190,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["test",{"_index":501,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["text",{"_index":2366,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["textcolour",{"_index":2429,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["thank",{"_index":1893,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["that'",{"_index":1682,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["theme",{"_index":1243,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1274,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1273,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themselv",{"_index":1628,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["therefor",{"_index":2121,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["thetangle.org",{"_index":1003,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":636,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1320,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1349,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["third",{"_index":1691,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["those",{"_index":1745,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["threshold",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["through",{"_index":1473,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["thu",{"_index":1963,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tick",{"_index":1133,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["tild",{"_index":2380,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["time",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":2033,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":2054,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを取り出すことができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":2055,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":2059,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeoutat",{"_index":2023,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":2028,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesource()メソッドでアカウントを作成した場合は、timesource()メソッドをtimeoutat",{"_index":2082,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":2080,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timesrcパッケージを使用して、正確な時刻を返すオブジェクトを作成します。この例では、タイムソースはgoogl",{"_index":2008,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["timestamp",{"_index":1749,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["timezon",{"_index":2383,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tip",{"_index":416,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2402,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1220,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["took",{"_index":2279,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tool",{"_index":2159,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["toolbox",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["tpsiriノードを介した1",{"_index":348,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["trace",{"_index":1303,"docTitle":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["traceabl",{"_index":1442,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["tracer",{"_index":1926,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1302,"docTitle":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tracker",{"_index":1925,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["trade",{"_index":1431,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["transact",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["transaction'",{"_index":1793,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["transaction.j",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":314,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/introduction/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":307,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1250,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1276,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":378,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["tri",{"_index":1173,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["triniti",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["trinity.app",{"_index":1211,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1209,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["troubleshoot",{"_index":2284,"docTitle":{"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["true",{"_index":322,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["trunk",{"_index":315,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":280,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iri/0.1/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":310,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransactionフィールドを辿ることによって、バンドル内の各トランザクションを見つけて検証します。ノードが先頭トランザクション（またはlastindex",{"_index":268,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["trust",{"_index":1708,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["trustanchor",{"_index":858,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["tryte",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytestoascii()メソッドに渡して、ascii",{"_index":295,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["trytesパラメータには、attachtotangl",{"_index":882,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":898,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["tupl",{"_index":1959,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["turn",{"_index":2233,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tutori",{"_index":2161,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tv",{"_index":2352,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["twin",{"_index":1724,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["two",{"_index":1755,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["tx",{"_index":837,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["type",{"_index":1098,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["t定数を作成し、それをprop",{"_index":1277,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":2223,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":859,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":756,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["udp",{"_index":666,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["udp://p101.testnet.iota.cafe:14666",{"_index":709,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p102.testnet.iota.cafe:14666",{"_index":710,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p103.testnet.iota.cafe:14666",{"_index":711,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p104.testnet.iota.cafe:14666",{"_index":712,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ui",{"_index":1971,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1272,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["unarchiv",{"_index":2181,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["unauthor",{"_index":1796,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["uncertainti",{"_index":1477,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unchang",{"_index":1738,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":840,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":842,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":340,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["under",{"_index":2152,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["understand",{"_index":1694,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["unexpect",{"_index":2256,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["unfortun",{"_index":2133,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["uniqu",{"_index":1801,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["unit",{"_index":1218,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["unregist",{"_index":1632,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["unsuccess",{"_index":1867,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["until",{"_index":2283,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["up",{"_index":1890,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updat",{"_index":1290,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updateitem",{"_index":1992,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upgrad",{"_index":2193,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["upload",{"_index":1777,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["upper",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstream/develop",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":777,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":774,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uri（uniqu",{"_index":872,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["url",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1413,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1168,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["urlまたはip",{"_index":1236,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":721,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1437,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["usa",{"_index":2374,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usabl",{"_index":1997,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["usag",{"_index":1668,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["usb",{"_index":2222,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["useless",{"_index":1717,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["user",{"_index":1000,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["user_account",{"_index":1032,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/database-tables":{}}}],["user_account_bal",{"_index":1111,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["user_address",{"_index":1042,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/database-tables":{}}}],["user_address_bal",{"_index":1112,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1086,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1094,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1087,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1095,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["usernam",{"_index":2234,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["userwithdraw",{"_index":1047,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["userwithdraw()メソッドを使用して、預け入れアドレスからのiota",{"_index":1039,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["userwithdrawcancelrepli",{"_index":1088,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1089,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1090,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1091,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":956,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1005,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1130,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["usual",{"_index":1539,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["uuid",{"_index":1038,"docTitle":{"docs/hub/0.1/how-to-guides/query-the-database":{}},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["uuid：seeduuid",{"_index":935,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["v0.9.1",{"_index":571,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":570,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":569,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valid",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["valu",{"_index":1097,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["variabl",{"_index":1614,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["variant",{"_index":2282,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["vat",{"_index":1941,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["vc",{"_index":1261,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["vehicl",{"_index":1725,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["vendor",{"_index":1704,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["verac",{"_index":1719,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["verif",{"_index":1401,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["verifi",{"_index":1706,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["version",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1202,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":684,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["video",{"_index":2311,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["view",{"_index":1741,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["virtual",{"_index":2111,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":2179,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{}}}],["visibl",{"_index":1744,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["vista",{"_index":1256,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["w",{"_index":251,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w3school",{"_index":2357,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wait",{"_index":2403,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["walkeralpha",{"_index":407,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["wall",{"_index":2353,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wallet",{"_index":1167,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["walletにログインしたときに、全残高を見るためにはrec",{"_index":1169,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["walletディレクトリでnpm",{"_index":1283,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["want",{"_index":1656,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["warn",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1237,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["warning:disclaim",{"_index":1474,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["wast",{"_index":1848,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["watch",{"_index":1602,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["water",{"_index":1452,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["way",{"_index":1443,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["weather",{"_index":1343,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["web",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["webapp",{"_index":1944,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["websit",{"_index":1752,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["webサイト、またはiota",{"_index":688,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1385,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなどで、cda",{"_index":2057,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1229,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバーのip",{"_index":758,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["weight",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["well",{"_index":1742,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["went",{"_index":1809,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["wereaddressesspentfrom",{"_index":899,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["whenev",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["whole",{"_index":1650,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["wide",{"_index":993,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["wider",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["wifi",{"_index":1194,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["window",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["windowsまたはlinux",{"_index":1254,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["winternitzワンタイム署名方式（w",{"_index":249,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["winternitzワンタイム署名（w",{"_index":356,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":2010,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1113,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["within",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["without",{"_index":1501,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["withplugin",{"_index":2018,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wl",{"_index":2240,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wlp3s0",{"_index":2244,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":925,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["workflow",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1378,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["worri",{"_index":2174,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["write",{"_index":1895,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["written",{"_index":1759,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["wui",{"_index":1972,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["x",{"_index":1372,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["x86",{"_index":2286,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1208,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1346,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["you'd",{"_index":2109,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["you'll",{"_index":2151,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["you'r",{"_index":2110,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["you'v",{"_index":2188,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["yougetsignal.com",{"_index":2160,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["yourself",{"_index":1772,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["zero",{"_index":629,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":797,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":809,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zip",{"_index":2180,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":207,"docTitle":{"docs/iri/0.1/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":796,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":632,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":800,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":633,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":806,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":835,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":794,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":793,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":631,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1366,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
            (0, _scroll.scrollIntoView)(document.querySelector(href), function () {
                _this3.props.history.replace('' + _this3.props.history.location.pathname + _this3.props.history.location.search + (href === '#root' ? '' : href));
            });
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

var _Link = __webpack_require__(6);

var _Link2 = _interopRequireDefault(_Link);

var _projects = __webpack_require__(8);

var _propTypes3 = __webpack_require__(3);

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
                                        'li',
                                        {
                                            key: idx2,
                                            className: (0, _classnames2.default)('tree-menu__section-item', { 'tree-menu__section-item--selected': item.selected })
                                        },
                                        _react2.default.createElement(
                                            _Link2.default,
                                            { href: item.link, target: item.link.startsWith('http') ? '_blank' : undefined },
                                            item.name
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
//# sourceMappingURL=static.ba664374.js.map