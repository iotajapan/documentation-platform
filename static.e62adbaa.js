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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のコンピュータがイミュータブルなデータと価値を相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続をたどって各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードは、アドレスと秘密鍵のペアを導出し、IOTAトークンを取り出すバンドルに署名するために使用される秘密のパスワードです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"トランザクションは、単独で使用することも、他のトランザクションと一緒にパッケージ化することもできる単一の操作です。単独型のトランザクションは、たとえばIOTAトークンを含まないデータのみを送信するものです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルは、データを送信したり、ノードにIOTAトークンを特定のアドレスから特定のアドレスに転送するように指示する1つ以上のトランザクショングループです。バンドル内の各トランザクションの運命は、残りの部分に依存します。つまりすべてのトランザクションが有効か、またはすべて無効かです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードとは、偽造物がないことを確認するためにトランザクションを検証する責任があるコンピュータです。 IOTAネットワーク内のクライアントは、トランザクションを検証してタングルに添付できるように、バンドルをノードに送信する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テストトークンを送信する（Node.js）","summary":"商品やサービスと引き換えにIOTAトークンを誰かに送ることができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"IOTAネットワーク","summary":"IOTAでは、トランザクションのバンドルをノードに送信する必要があります。IOTAには、3つのパブリックネットワークがあります。各ネットワークには、ノードがトランザクションを追加できるそれぞれ独自の分散台帳（タングル）があります。どのパブリックネットワーク上のノードにバンドルを接続して送信するかを選べます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/iota-basics/0.1/introduction/overview","name":"IOTAの基本概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のIOTAトークンの量を定義しま..."},{"id":"docs/iota-basics/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはIOTAトークンを保持するアカウントで、署名はアドレスの所有権を証明します。"},{"id":"docs/iota-basics/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"トランザクションは、ノードに送信できる単一の操作です。トランザクションはIOTAトークンの取り出し/預け入れや、データを送信することができます。ノードに1つ以上のトランザクションを送信するには、トランザクションをバンドルにパッケージ化する必要があります。"},{"id":"docs/iota-basics/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、MWMと同じ数の0トリットが並ぶまで繰り返しハッシュ化を行います。 MWMが高いほど、プルーフオブワークは難しくなります。クライアントとしてIOTAネットワークと対話するときは、ネッ..."},{"id":"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/iota-basics/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ/から変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/iota-basics/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/iota-basics/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/iota-basics/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/iota-basics/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/iota-basics/0.1/references/tryte-alphabet","name":"トライト文字","summary":"この表は、トライトからトライトがエンコードされた文字への変換と、それに相当する10進数の値を表しています。"},{"id":"docs/iota-basics/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/iota-basics/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/the-tangle/0.1/introduction/overview","name":"タングル概要","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続を辿って各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態の..."},{"id":"docs/the-tangle/0.1/concepts/the-coordinator","name":"コーディネーター","summary":"コーディネーターは、同じアドレスから定期的にトランザクションのバンドルを作成、署名、および送信するクライアントアプリケーションです。これらのバンドルには、ノードが合意に達するために使用するマイルストーンと呼ばれるトランザクションが含まれています。マイルストーンがタングル内のトランザクションを直接または間接的に参照して承..."},{"id":"docs/the-tangle/0.1/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。"},{"id":"docs/the-tangle/0.1/concepts/incentives-in-the-tangle","name":"タングル内のインセンティブ","summary":"チップ選択アルゴリズムは強制されていません。その代わりに、ノードは、自分のトランザクションが確定される最良の機会を得るためにチップ選択アルゴリズムを使用するインセンティブがあります。"},{"id":"docs/the-tangle/0.1/concepts/proof-of-work","name":"プルーフオブワーク","summary":"プルーフオブワークは、計算は難しいが検証は簡単な数学的問題に対する答えです。 IOTAでは、プルーフオブワークはスパムトランザクションからネットワークを保護します。バンドル内の各トランザクションには、有効であることを証明するプルーフオブワークが含まれている必要があります。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iri/0.1/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。 IRIを実行するコンピューターはIRIノードと呼ばれます。"},{"id":"docs/iri/0.1/concepts/the-ledger","name":"台帳","summary":"ノードは、自分が受け取った有効なすべてのトランザクションを、組み込みの追加専用のRocksDBデータベースである台帳に格納することによって記録します。 IOTAネットワーク内の全ノードの集合データベースがタングルを構成します。"},{"id":"docs/iri/0.1/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/iri/0.1/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/iri/0.1/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/iri/0.1/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバーでIRIノードを実行する","summary":"Linuxサーバー上でIRIを実行すると、LinuxサーバーがIOTAネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、コンピュータはIRIノード用のLinuxサーバーになり、IOTAネットワークに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバーを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバーに接続します。"},{"id":"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/iri/0.1/how-to-guides/interact-with-an-iri-node","name":"ノードに情報をリクエストする","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/iri/0.1/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/iri/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"IRIのインストール、設定、または実行中に、これらの一般的な問題のいくつかを見かけることがあります。"},{"id":"docs/iri/0.1/references/api-reference","name":"APIリファレンス","summary":"重要： このAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。"},{"id":"docs/iri/0.1/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/iri/0.1/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/iri/0.1/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/iri/0.1/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/iri/0.1/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/hub/0.1/introduction/overview","name":"ハブ概要","summary":"ハブはアプリケーションにプラグインできるヘッドレスマルチユーザーウォレットです。gRPC APIを通して、ハブはIOTAトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、ID、預け入れアドレス、取り出しリクエストなどのユーザー情報を保存します..."},{"id":"docs/hub/0.1/concepts/sweeps","name":"スウィープ","summary":"スウィープは、ユーザーの取り出し操作を実行し、IOTAトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1つに転送するバンドルです。スウィープは、攻撃者が使用済みアドレスからトークンを盗む可能性を減らすためのオプションの安全機能です。"},{"id":"docs/hub/0.1/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/hub/0.1/how-to-guides/install-the-signing-server","name":"署名サーバーをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバーに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバーをインストールして実行します。"},{"id":"docs/hub/0.1/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本について..."},{"id":"docs/hub/0.1/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/hub/0.1/how-to-guides/integrate-hub","name":"ハブを暗号資産取引所に統合する","summary":"シナリオA： IOTAトークンが外部のオンラインウォレット（別名：ホットウォレット）に手動で転送される複数のユーザーアカウント。"},{"id":"docs/hub/0.1/references/api-reference","name":"APIリファレンス","summary":"タングルとハブデータベースへの接続を簡単にするために、ハブにはgRPC APIがあります。このAPIリファレンスを使用してメソッドを見つけ、メソッドが行うことを学んでください。"},{"id":"docs/hub/0.1/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/hub/0.1/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバに問い合わせることによって見つけることができます。"},{"id":"docs/hub/0.1/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/hub/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/compass/0.1/introduction/overview","name":"コンパス概要","summary":"コンパスはコーディネーターのオープンソース実装です。テストおよび開発の目的で、コンパスを使用して独自のIOTAネットワークを運用することができます。"},{"id":"docs/compass/0.1/how-to-guides/create-an-iota-network","name":"IOTAネットワークを作成する","summary":"自分のIOTAネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをIRIノードに接続することができます。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/compass/0.1/references/contribution-guidelines","name":"貢献ガイドライン","summary":""},{"id":"docs/trinity/0.1/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。"},{"id":"docs/trinity/0.1/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/trinity/0.1/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/trinity/0.1/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/trinity/0.1/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/trinity/0.1/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/trinity/0.1/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/trinity/0.1/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/receive-a-transaction","name":"トランザクションを受取る","summary":"トリニティには、トランザクションを受取り、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/trinity/0.1/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/trinity/0.1/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/trinity/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/tools/0.1/introduction/overview","name":"Tools and utilities","summary":"Fast-track the development of your own applications by reusing or adapting code that's already been written by the IOTA developer community."},{"id":"docs/tools/0.1/mam-watcher/overview","name":"MAM watcher overview","summary":"MAM (masked authenticated messaging) is a communication protocol that allows you to publish and subscribe to an encrypted data stream called a channel. The MAM ..."},{"id":"docs/tools/0.1/one-command-tangle/overview","name":"One-command private test Tangle","summary":"This application allows you to set up your own IOTA network by using a single Docker command. When you run this command, you'll have your own IOTA test network ..."},{"id":"docs/tools/0.1/raspberry-pi-pub-sub/overview","name":"Raspberry Pi sensor data publisher","summary":"This application sends real-time temperature data (the current temperature in Celsius) from a Raspberry Pi to the Devnet Tangle every minute. Then, it subscribe..."},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"Peer-to-peer energy grid","summary":"Although the supply of energy is often automated, the payment system is expensive to integrate and often requires manual intervention. By creating a peer-to-pee..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"Application architecture","summary":"The P2P energy grid application publishes data from sources, producers, consumers, and the grid to MAM channels through a node in an IOTA network."},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"Deploy the P2P energy grid app","summary":"To start using the P2P energy grid app, deploy your own application."},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"Tangle data storage overview","summary":"Data boosts innovation for public and private sector organisations, and can be used to create new revenue streams. However, without a vendor-neutral way of veri..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"Application architecture","summary":"The Tangle data storage application consists of two parts: A graphical user interface (GUI), written in React and a back-end API, written in NodeJS."},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"Deploy and test the Tangle data storage app","summary":"To start storing data in the IPFS node and the Tangle, deploy the application and use our graphical user interface to upload file data, retrieve file data, and ..."},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"Track and trace overview","summary":"Due to a lack of both due diligence and a vendor-neutral data source, returnable assets that are used within distribution networks are often not returned to the..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"Application architecture","summary":"The track-and-trace application uses the IOTA MAM protocol to give returnable assets an ID and to track those assets in streams of transactions called MAM chann..."},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"Deploy and test the track and trace app","summary":"To start tracking data on the Tangle, deploy the application and use our graphical user interface to search for and upload assets."},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"EventMachineオブジェクトでアカウントが開始されると、EventMachineオブジェクトは発生時にイベントを発行します。イベントの一例は、バンドルをノードに送信したときです。リスナーのインスタンスを作成することで、これらのイベントをリッスンしてイベントに対処することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-java/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスの再利用やペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり取りす..."},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-js/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/general/0.1/introduction/overview","name":"General overview","summary":"This section contains some prerequisite information that aims to help you complete some of our guides."},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"Expose your local device to the Internet","summary":"To connect a device to those outside of your local network, you need to expose it to the Internet. A common reason to expose your local device to the Internet i..."},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"Set up a Linux server on a virtual machine","summary":"Many of the IOTA tutorials and guides require a Linux operating system. If your computer is running a different operating system, you can use Linux inside a vir..."},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"Set up a single-board computer","summary":"A single board computer (SBC) is a small computer in which a single circuit board includes memory, input/output ports, a microprocessor and any other necessary ..."},{"id":"docs/general/0.1/references/troubleshooting","name":"Troubleshooting","summary":"Make sure that you selected a 64-bit version of Ubuntu in VirtualBox."},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTA Smart City Blueprints","summary":"This repository consists of examples implementing IOTA for Smart Cities"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTA is a clone of AstroPi, which is a project that used Raspberry Pis on the International Space Station (ISS) to keep astronauts up to date about their ..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"Build your own AstroPiOTA","summary":"In order to run AstroPiOTA, you must have the correct hardware and operating system for a Raspberry Pi."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"Run AstroPiOTA","summary":"The following instructions assume the operating system is configured. Because this installation has several components, scripts are included to make sure that e..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"Connect to the Raspberry Pi through SSH","summary":"If you want to run AstroPiOTA without a monitor and keyboard, you need it's network address to interact with it over SSH. To find the IP address of the Raspberr..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"Customize AstroPiOTA","summary":"The AstroPiOTA sender gathers sensor data from Sense HAT, publishes it to the scrolling marquee, and sends it in JSON format to a MAM channel on the Tangle. The..."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.024,1,34.479,2,43.581,3,34.479,4,3.262]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,4.947]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.007,4,4.553,5,28.9,6,28.9,7,28.9,8,28.9,9,28.9,10,28.9,11,28.9,12,28.9,13,28.9,14,28.9,15,28.9,16,23.535]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,2.97,4,3.194,17,14.971,18,33.755,19,27.489,20,29.978,21,29.978,22,33.755,23,33.755,24,5.178,25,33.755]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,2.951,4,3.986,26,36.296]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,2.835,4,4.238]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,2.693,4,3.086,17,14.664,27,32.614,28,19.888,29,32.614,30,32.614,31,32.614,32,32.614,33,32.614,34,10.42,35,32.614,36,32.614,37,32.614,38,32.614,39,32.614,40,32.614,41,15.06,42,32.614]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.308]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,2.879,4,4.304,43,35.494,44,35.494,45,35.494]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.308]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,2.958,4,3.82,17,13.053,24,4.91,34,11.246,46,18.557,47,18.557,48,10.439,49,18.557,50,6.731,51,9.937,52,26.068,53,14.091,54,10.276,55,31.26,56,18.557,57,11.574,58,18.557,59,9.334,60,15.006,61,12.014,62,13.275,63,18.557,64,24.066,65,14.091,66,11.505,67,20.723,68,22.898,69,10.646,70,12.596,71,27.099,72,16.48,73,18.557,74,12.014,75,15.112,76,12.014,77,11.053,78,8.343,79,18.557,80,14.091,81,15.112,82,18.557,83,15.17,84,12.596,85,11.505,86,11.053,87,16.48,88,22.068,89,11.053,90,13.629,91,21.726,92,16.48,93,18.557,94,18.557,95,16.099,96,18.557,97,18.557,98,12.596,99,16.48,100,14.091,101,18.557,102,12.596,103,13.275,104,18.557,105,18.557,106,24.066,107,18.557,108,10.646,109,18.557,110,18.557,111,14.091,112,18.557]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[83,20.287]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.057,4,4.142,17,8.562,24,6.595,50,8.375,83,12.274,89,13.752,113,23.089,114,14.314,115,13.752,116,12.363,117,12.785,118,8.375,119,12.363,120,18.803,121,9.62,122,20.505,123,20.505,124,23.089,125,20.505,126,23.089,127,23.089,128,18.803,129,20.505,130,20.505,131,20.505,132,18.803,133,18.803,134,20.505,135,20.505,136,20.505,137,20.505,138,15.671,139,23.089,140,13.752,141,10.114,142,8.757,143,20.505,144,9.62,145,20.505,146,14.947]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.308]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.006,24,4.903,41,14.76,119,17.117,147,31.965,148,31.965,149,28.388,150,31.965,151,31.965,152,21.696,153,31.965,154,21.696,155,24.271,156,31.965,157,31.965,158,31.965,159,31.965]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[83,20.287]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.054,4,4.152,24,5.764,41,11.546,50,12.109,83,12.954,89,14.892,114,15.502,115,14.892,116,13.389,117,13.846,118,9.07,119,17.876,121,10.418,122,22.206,123,22.206,125,22.206,129,22.206,130,22.206,131,22.206,132,20.363,133,20.363,134,22.206,135,22.206,136,22.206,137,22.206,138,16.971,144,10.418,149,22.206,160,25.004,161,25.004,162,25.004,163,25.004]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[164,46.43]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,2.902,4,4.074,51,16.153,54,16.704,119,16.153,146,26.611,164,26.79,165,14.757,166,30.166,167,30.166,168,26.79,169,26.79,170,30.166,171,30.166,172,30.166,173,30.166,174,30.166,175,24.566,176,30.166,177,30.166]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.308]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.066,24,4.38,28,14.363,34,9.124,102,19.383,103,20.429,141,12.51,178,28.558,179,19.383,180,23.257,181,21.684,182,21.684,183,21.684,184,23.57,185,18.488,186,13.187,187,29.649,188,29.649,189,12.51,190,28.558,191,28.558]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,4.947]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,2.917,4,3.747,24,5.676,119,22.144,165,13.77,192,24.25,193,30.135,194,35.175,195,24.25,196,24.25,197,22.941,198,24.25,199,24.25,200,24.25,201,24.25,202,24.25,203,24.25,204,24.25,205,31.401,206,24.25,207,21.172,208,24.25,209,32.704,210,24.25,211,24.832,212,24.25,213,24.25,214,24.25,215,24.25,216,24.25,217,24.25,218,24.25,219,24.25,220,24.25,221,24.25,222,24.25]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.308]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.405,4,3.597]],["docTitle/docs/iota-basics/0.1/introduction/overview",[4,4.947]],["docBody/docs/iota-basics/0.1/introduction/overview",[0,3.025,4,4.283,17,14.031,24,5.804,223,30.356,224,30.356,225,30.356,226,30.356,227,30.356,228,30.356,229,30.356,230,30.356,231,30.356,232,30.356,233,30.356]],["docTitle/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.308]],["docBody/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.024,4,2.551,24,5.381,34,8.614,41,12.45,50,9.78,67,17.454,84,23.812,90,13.56,186,12.45,234,26.961,235,26.961,236,26.961,237,26.961,238,26.961,239,26.961,240,26.961,241,26.961,242,26.961,243,26.961,244,35.083,245,26.961,246,26.961,247,26.961,248,26.961,249,26.961,250,26.961,251,23.944,252,26.961,253,26.961,254,26.961,255,26.961,256,26.961,257,26.961,258,26.961]],["docTitle/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.308]],["docBody/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.018,4,3.813,17,10.718,24,5.627,34,11.72,41,13.345,57,12.343,62,20.673,121,12.041,145,25.666,189,12.66,259,28.9,260,28.9,261,28.9,262,28.9,263,21.944,264,28.9,265,28.9,266,28.9,267,28.9,268,28.9,269,20.673,270,28.9,271,28.9,272,28.9]],["docTitle/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,3.308]],["docBody/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,2.643,24,5.485,28,17.985,273,35.758,274,35.758,275,35.758,276,35.758,277,35.758,278,35.758]],["docTitle/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.308]],["docBody/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.017,70,23.073,279,22.007,280,27.683,281,27.683,282,33.993,283,30.189,284,33.993,285,33.993]],["docTitle/docs/iota-basics/0.1/concepts/trinary",[57,22.329]],["docBody/docs/iota-basics/0.1/concepts/trinary",[57,15.619,286,36.571,287,36.571,288,36.571,289,36.571,290,36.571,291,36.571]],["docTitle/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.015,4,2.985,24,5.943,83,12.241,114,19.558,115,18.789,116,16.893,117,17.469,118,11.443,128,25.691,144,13.144,292,31.547,293,34.411,294,31.547,295,31.547,296,31.547]],["docTitle/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.027,4,2.89,24,5.826,48,12.388,50,11.081,83,11.854,114,18.939,115,18.194,116,16.358,117,16.916,118,11.081,119,16.358,120,24.877,144,12.728,297,30.548,298,30.548,299,30.548,300,27.129,301,30.548]],["docTitle/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.075,4,3.751,24,6.639,66,17.295,83,10.825,114,17.295,115,16.615,116,14.938,117,15.448,118,10.119,138,18.935,144,11.623,186,12.882,302,27.897,303,27.897,304,27.897,305,27.897,306,35.866]],["docTitle/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.016,4,3.393,17,10.346,24,6.639,83,10.825,114,17.295,115,16.615,116,14.938,117,15.448,118,10.119,119,14.938,120,22.718,128,22.718,142,13.603,144,11.623,189,15.711,307,24.775,308,27.897,309,22.718,310,27.897,311,27.897,312,27.897,313,27.233,314,27.897,315,27.897,316,27.897]],["docTitle/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.035,4,2.718,24,6.699,83,11.148,114,17.81,115,17.11,116,15.383,117,15.908,118,10.421,144,11.97,189,12.584,307,25.513,317,28.728,318,28.728,319,36.545,320,26.142,321,25.513,322,36.545,323,28.728,324,25.513,325,28.728]],["docTitle/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.308]],["docBody/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.072,17,9.519,24,6.216,28,12.911,34,8.201,57,10.963,83,9.961,114,15.914,115,15.289,116,13.745,117,14.214,118,9.311,119,13.745,144,10.695,189,11.244,263,19.491,326,25.67,327,22.797,328,25.67,329,25.67,330,25.67,331,25.67,332,25.67,333,25.67,334,25.67,335,33.971,336,25.67,337,25.67,338,13.745,339,25.67,340,19.491,341,25.67]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.308]],["docBody/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,2.726,342,37.715]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.308]],["docBody/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,2.702,269,26.564,280,30.241,343,17.626]],["docTitle/docs/iota-basics/0.1/references/security-levels",[0,3.308]],["docBody/docs/iota-basics/0.1/references/security-levels",[0,2.387,4,3.568,344,37.715]],["docTitle/docs/iota-basics/0.1/references/tryte-alphabet",[0,3.308]],["docBody/docs/iota-basics/0.1/references/tryte-alphabet",[0,2.387,84,25.599,345,37.715]],["docTitle/docs/iota-basics/0.1/references/units-of-iota-tokens",[4,4.947]],["docBody/docs/iota-basics/0.1/references/units-of-iota-tokens",[0,2.332,4,4.022,34,11.773,346,36.851,347,36.851]],["docTitle/docs/iota-basics/0.1/references/glossary",[0,3.308]],["docBody/docs/iota-basics/0.1/references/glossary",[0,3.027,4,3.995,34,10.892,52,21.016,57,14.56,165,14.951,211,19.595,348,25.807,349,25.807,350,25.807,351,25.807,352,25.807,353,25.807,354,25.807,355,25.807,356,25.807,357,25.807,358,25.807,359,25.807,360,25.807,361,25.807,362,25.807,363,25.807,364,25.807,365,25.807,366,25.807,367,25.807,368,25.807,369,25.807,370,25.807,371,25.807]],["docTitle/docs/the-tangle/0.1/introduction/overview",[0,3.308]],["docBody/docs/the-tangle/0.1/introduction/overview",[0,2.991,4,4.167,17,14.545,19,26.205,20,28.577,21,28.577,24,6.016,28,16.184,372,32.179,373,32.179,374,32.179,375,32.179]],["docTitle/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.308]],["docBody/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.048,4,3.284,17,14.347,24,6.295,34,13.609,57,11.325,121,14.46,376,26.517,377,26.517,378,30.82,379,30.82,380,26.517,381,26.517,382,26.517,383,26.517,384,26.517,385,26.517,386,26.517,387,26.517,388,26.517,389,26.517,390,26.517,391,26.517,392,26.517]],["docTitle/docs/the-tangle/0.1/concepts/tip-selection",[0,3.308]],["docBody/docs/the-tangle/0.1/concepts/tip-selection",[0,3.098,4,2.993,17,13.381,24,5.534,34,7.377,189,10.114,393,23.089,394,23.089,395,29.084,396,23.089,397,38.811,398,20.505,399,23.089,400,23.089,401,23.089,402,23.089,403,23.089,404,23.089,405,23.089,406,23.089,407,23.089,408,23.089,409,23.089,410,23.089,411,23.089,412,23.089,413,23.089]],["docTitle/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.308]],["docBody/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,2.92,69,24.485,142,12.454,189,14.384,414,32.836,415,16.515,416,32.836,417,27.631,418,32.836,419,26.74,420,39.705,421,32.836]],["docTitle/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.308]],["docBody/docs/the-tangle/0.1/concepts/proof-of-work",[0,2.958,4,3.968,17,11.699,24,5.943,28,19.488,211,31.844,422,31.547,423,31.547,424,31.547,425,31.547,426,31.547,427,31.547,428,31.547,429,31.547,430,31.547]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.308]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.003,16,24.113,50,10.74,76,19.169,90,14.893,91,20.098,106,26.296,431,29.61,432,26.251,433,29.61,434,29.61,435,29.61,436,29.61,437,23.095,438,29.61,439,29.61,440,29.61,441,13.312,442,22.483,443,20.098,444,29.61,445,16.396]],["docTitle/docs/iota-js/0.1/README",[4,3.738,447,35.09]],["docBody/docs/iota-js/0.1/README",[0,2.933,4,3.602,48,11.075,50,6.25,83,11.895,86,10.263,87,15.303,88,20.894,89,18.257,90,15.417,115,10.263,165,10.207,183,28.904,269,12.326,281,14.032,395,21.928,417,16.61,447,15.303,448,8.936,449,17.231,450,10.435,451,10.683,452,17.231,453,17.231,454,17.231,455,17.231,456,17.231,457,17.231,458,17.231,459,41.532,460,17.231,461,33.96,462,13.084,463,17.231,464,17.231,465,17.231,466,17.231,467,17.231,468,17.231,469,17.231,470,17.231,471,17.231,472,17.231,473,17.231,474,17.231,475,17.231,476,17.231,477,17.231,478,17.231,479,17.231,480,17.231,481,20.894,482,17.231,483,17.231,484,17.231,485,19.481,486,17.231,487,17.231,488,17.231,489,17.231,490,17.231,491,17.231,492,17.231,493,17.231,494,17.231,495,10.683,496,17.231,497,17.231,498,11.695,499,17.231,500,17.231,501,15.303,502,8.415,503,17.231,504,7.359,505,17.231,506,17.231]],["docTitle/docs/iota-java/0.1/README",[4,3.738,91,26.819]],["docBody/docs/iota-java/0.1/README",[0,2.964,4,3.932,17,6.483,48,8.458,50,6.341,70,17.602,91,28.21,92,23.031,165,11.388,300,15.525,309,14.236,448,9.066,450,10.547,451,10.838,498,11.865,507,17.481,508,17.481,509,17.481,510,17.481,511,15.525,512,12.505,513,17.481,514,17.481,515,23.474,516,21.119,517,17.481,518,17.481,519,15.525,520,17.481,521,17.481,522,17.481,523,17.481,524,17.481,525,17.481,526,25.933,527,17.481,528,17.481,529,17.481,530,17.481,531,17.481,532,17.481,533,17.481,534,17.481,535,36.53,536,17.481,537,17.481,538,17.481,539,9.68,540,10.838,541,17.481,542,17.481,543,17.481,544,17.481,545,17.481,546,17.481,547,25.933,548,17.481,549,17.481,550,17.481,551,17.481,552,17.481,553,17.481,554,17.481,555,17.481,556,17.481,557,17.481,558,17.481,559,17.481,560,17.481,561,22.645,562,30.915,563,17.481,564,17.481,565,17.481,566,17.481,567,17.481,568,17.481,569,17.481,570,17.481,571,17.481,572,17.481,573,15.525,574,17.481]],["docTitle/docs/iota-go/0.1/README",[4,3.738,95,19.873]],["docBody/docs/iota-go/0.1/README",[0,3.05,4,3.972,17,7.848,48,6.902,50,7.677,76,13.701,85,25.333,95,18.802,98,14.365,99,18.795,121,8.818,165,11.471,211,22.609,448,10.976,450,8.607,451,13.121,573,18.795,575,21.163,576,21.163,577,21.163,578,21.163,579,16.07,580,21.163,581,21.163,582,21.163,583,21.163,584,21.163,585,21.163,586,21.163,587,21.163,588,21.163,589,21.163,590,21.163,591,21.163,592,21.163,593,29.776,594,21.163,595,21.163,596,21.163,597,37.382,598,29.776,599,21.163,600,21.163,601,21.163,602,21.163,603,18.795,604,21.163,605,21.163,606,21.163]],["docTitle/docs/iri/0.1/introduction/overview",[4,4.947]],["docBody/docs/iri/0.1/introduction/overview",[0,2.775,4,3.31,165,13.73,607,34.98,608,34.98,609,34.98,610,34.98,611,34.98,612,34.98,613,34.98]],["docTitle/docs/iri/0.1/concepts/the-ledger",[0,3.308]],["docBody/docs/iri/0.1/concepts/the-ledger",[0,3.021,4,3.128,24,6.115,100,25.103,143,29.361,165,11.009,614,33.061,615,33.061,616,33.061,617,26.924,618,33.061]],["docTitle/docs/iri/0.1/concepts/neighbor-iri-node",[165,17.408]],["docBody/docs/iri/0.1/concepts/neighbor-iri-node",[0,2.632,165,14.688,619,35.494,620,35.494,621,35.494,622,35.494,623,35.494,624,35.494]],["docTitle/docs/iri/0.1/concepts/transaction-validation",[0,3.308]],["docBody/docs/iri/0.1/concepts/transaction-validation",[0,3.023,4,3.045,17,11.933,165,15.29,625,32.179,626,39.22,627,32.179,628,32.179,629,32.179]],["docTitle/docs/iri/0.1/concepts/zero-message-queue",[0,3.308]],["docBody/docs/iri/0.1/concepts/zero-message-queue",[0,2.852,24,5.289,34,11.016,141,15.104,630,28.079,631,34.479,632,34.479,633,34.479,634,34.479,635,34.479,636,34.479,637,30.621]],["docTitle/docs/iri/0.1/concepts/local-snapshot",[0,3.308]],["docBody/docs/iri/0.1/concepts/local-snapshot",[0,3.038,24,5.902,28,13.192,64,23.293,84,17.802,165,14.507,638,26.228,639,26.228,640,26.228,641,26.228,642,23.293,643,26.228,644,34.456,645,26.228,646,30.6,647,34.456,648,26.228,649,34.456,650,26.228,651,26.228,652,26.228,653,26.228,654,26.228,655,26.228,656,30.6,657,26.228,658,26.228,659,26.228]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[660,46.43]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[0,2.859,24,6.431,48,5.893,76,11.699,86,15.829,91,28.455,119,14.231,138,12.265,144,7.529,165,15.413,186,12.272,194,23.602,450,7.349,540,11.203,617,14.716,660,16.048,661,18.071,662,14.716,663,12.927,664,13.721,665,16.048,666,16.048,667,16.048,668,23.602,669,16.048,670,16.048,671,16.048,672,18.071,673,16.048,674,18.071,675,18.071,676,18.071,677,18.071,678,18.071,679,18.071,680,18.071,681,26.576,682,18.071,683,18.071,684,18.071,685,18.071,686,18.071,687,18.071,688,18.071,689,18.071,690,18.071,691,13.721,692,18.071,693,18.071,694,18.071,695,18.071,696,18.071,697,18.071,698,11.699,699,18.071,700,18.071,701,18.071,702,18.071,703,18.071,704,18.071,705,18.071,706,18.071,707,16.048,708,18.071,709,18.071,710,18.071,711,18.071,712,18.071,713,18.071,714,18.071,715,18.071,716,18.071,717,18.071,718,18.071,719,18.071,720,18.071,721,18.071,722,16.048,723,18.071,724,18.071,725,16.048,726,16.048,727,16.048,728,16.048,729,16.048]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[730,46.43]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[0,2.742,24,5.413,48,10.02,51,11.853,54,12.257,76,14.33,146,28.846,165,15.49,168,19.658,169,19.658,450,9.002,504,13.122,617,18.026,662,18.026,663,15.834,664,16.807,665,19.658,666,19.658,667,19.658,668,27.286,669,19.658,670,19.658,671,19.658,673,19.658,698,22.846,722,19.658,725,19.658,726,19.658,727,19.658,728,19.658,729,19.658,730,19.658,731,22.135,732,22.135,733,18.026,734,22.135,735,22.135,736,22.135,737,22.135,738,22.135,739,22.135,740,22.135,741,22.135,742,22.135,743,22.135,744,22.135,745,22.135,746,22.135,747,22.135,748,22.135,749,22.135,750,15.834,751,18.026,752,22.135,753,22.135]],["docTitle/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.308]],["docBody/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,2.94,24,5.648,754,29.074,755,29.074,756,29.074,757,29.074,758,32.703,759,29.074,760,29.074,761,42.487,762,29.074,763,29.074,764,29.074,765,18.025,766,29.074,767,29.074,768,29.074,769,20.798,770,29.074,771,29.074,772,29.074,773,29.074,774,29.074,775,29.074,776,29.074,777,29.074,778,29.074,779,29.074]],["docTitle/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.308]],["docBody/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.048,17,12.013,165,10.787,646,34.973,656,34.973,780,32.395,781,32.395,782,32.395,783,32.395,784,26.381]],["docTitle/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[165,17.408]],["docBody/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[165,12.365,785,37.134,786,37.134,787,37.134,788,37.134]],["docTitle/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.308]],["docBody/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,2.998,17,10.848,24,4.487,34,9.345,48,13.218,57,12.493,83,17.041,100,30.774,116,15.663,117,16.197,118,10.61,144,12.188,437,26.399,789,29.251,790,29.251,791,25.977,792,25.977,793,29.251]],["docTitle/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.308]],["docBody/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3,17,9.57,24,5.229,34,8.245,57,11.022,62,18.461,66,15.999,83,17.164,116,13.819,117,14.29,118,9.361,144,10.753,207,28.079,327,22.919,437,26.89,637,22.919,791,22.919,792,22.919,794,25.807,795,25.807,796,25.807,797,25.807,798,25.807,799,25.807,800,25.807,801,25.807,802,25.807,803,25.807,804,25.807,805,25.807]],["docTitle/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[515,30.002,806,35.09]],["docBody/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[0,2.986,24,5.48,28,11.394,34,7.238,48,7.388,85,14.045,86,13.493,91,15.377,102,15.377,142,11.842,207,20.213,515,17.202,663,16.206,806,20.119,807,22.655,808,35.725,809,22.655,810,22.655,811,22.655,812,22.655,813,22.655,814,22.655,815,22.655,816,22.655,817,22.655,818,22.655,819,22.655,820,22.655,821,22.655,822,22.655,823,22.655,824,22.655,825,20.119,826,22.655,827,31.222,828,17.202,829,22.655,830,22.655,831,22.655,832,22.655,833,22.655,834,22.655,835,22.655,836,22.655,837,22.655,838,22.655,839,22.655,840,20.119,841,22.655,842,22.655,843,22.655,844,22.655,845,18.449,846,22.655,847,22.655,848,22.655,849,22.655,850,22.655,851,22.655,852,22.655,853,22.655,854,22.655,855,22.655]],["docTitle/docs/iri/0.1/how-to-guides/update-the-iri",[165,17.408]],["docBody/docs/iri/0.1/how-to-guides/update-the-iri",[0,2.23,50,12.781,165,15.409,186,16.27,691,26.754,856,35.235,857,35.235,858,35.235]],["docTitle/docs/iri/0.1/references/troubleshooting",[0,3.308]],["docBody/docs/iri/0.1/references/troubleshooting",[0,2.733,24,5.178,165,14.382,859,33.755,860,20.927,861,33.755,862,33.755,863,33.755,864,33.755,865,33.755,866,33.755,867,33.755,868,33.755,869,33.755]],["docTitle/docs/iri/0.1/references/api-reference",[48,17.05]],["docBody/docs/iri/0.1/references/api-reference",[0,3.086,4,1.342,17,5.262,24,4.711,48,7.216,83,16.815,100,10.774,121,5.912,280,11.555,281,11.555,283,12.601,293,12.601,324,12.601,398,12.601,417,9.186,437,26.865,498,15.017,870,14.189,871,14.189,872,14.189,873,22.125,874,15.827,875,14.189,876,43.333,877,38.483,878,35.289,879,22.125,880,14.189,881,14.189,882,14.189,883,14.189,884,14.189,885,14.189,886,14.189,887,11.555,888,14.189,889,14.189,890,9.631,891,14.189,892,14.189,893,14.189,894,14.189,895,14.189,896,14.189,897,14.189,898,14.189,899,14.189]],["docTitle/docs/iri/0.1/references/api-errors",[48,17.05]],["docBody/docs/iri/0.1/references/api-errors",[0,2.601,48,12.291,165,12.549,186,13.929,395,29.404,415,15.172,417,19.529,878,35.063,900,30.166,901,36.504,902,37.688,903,30.166,904,30.166,905,30.166,906,26.79,907,14.731,908,30.166,909,30.166,910,16.153,911,19.529,912,30.166,913,30.166,914,24.566]],["docTitle/docs/iri/0.1/references/data-in-the-ledger",[0,3.308]],["docBody/docs/iri/0.1/references/data-in-the-ledger",[0,2.702,165,12.365,915,37.134,916,30.241]],["docTitle/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,3.308]],["docBody/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,2.405,642,33.758]],["docTitle/docs/iri/0.1/references/iri-configuration-options",[165,17.408]],["docBody/docs/iri/0.1/references/iri-configuration-options",[0,3.022,24,5.266,48,12.516,69,19.696,165,11.432,207,26.401,417,26.401,917,26.086,918,26.086,919,18.385,920,40.78,921,26.07,922,21.286,923,34.334,924,30.491,925,19.696,926,19.012,927,26.07,928,26.086,929,26.086,930,26.086]],["docTitle/docs/iri/0.1/references/zmq-events",[207,33.846]],["docBody/docs/iri/0.1/references/zmq-events",[0,2.678,24,5.61,28,18.394,34,11.684,207,23.676,931,36.571]],["docTitle/docs/hub/0.1/introduction/overview",[0,3.308]],["docBody/docs/hub/0.1/introduction/overview",[0,3.069,4,4.14,24,6.182,34,9.233,48,9.425,932,23.749,933,28.9,934,28.9,935,28.9,936,25.666,937,28.9,938,25.666,939,28.9,940,28.9,941,28.9]],["docTitle/docs/hub/0.1/concepts/sweeps",[0,3.308]],["docBody/docs/hub/0.1/concepts/sweeps",[0,3.041,4,3.681,24,5.967,34,10.145,41,14.663,938,28.201,942,31.755,943,31.755,944,21.553,945,31.755,946,31.755,947,31.755,948,31.755]],["docTitle/docs/hub/0.1/how-to-guides/install-hub",[0,3.308]],["docBody/docs/hub/0.1/how-to-guides/install-hub",[0,3.065,4,1.749,24,4.899,34,5.906,50,6.706,51,9.899,68,13.224,85,11.461,102,18.341,138,12.547,437,11.461,450,10.99,498,12.547,698,11.968,860,16.753,901,16.417,944,23.848,949,18.486,950,10.237,951,19.33,952,18.486,953,23.998,954,16.417,955,26.678,956,18.486,957,18.486,958,16.417,959,11.968,960,18.486,961,18.486,962,18.486,963,14.037,964,18.486,965,18.486,966,15.055,967,18.486,968,35.135,969,18.486,970,14.037,971,16.417,972,18.486,973,15.055,974,18.486,975,18.486,976,23.998,977,18.486,978,18.486,979,18.486,980,18.486,981,18.486,982,18.486,983,18.486,984,18.486,985,18.486,986,18.486,987,22.006,988,18.486,989,18.486,990,16.417,991,10.237,992,16.417,993,15.055,994,18.486,995,18.486,996,18.486,997,18.486,998,18.486,999,18.486,1000,10.237,1001,18.486,1002,18.486,1003,18.486]],["docTitle/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.308]],["docBody/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.059,4,2.057,50,7.884,57,9.283,85,13.475,102,14.753,138,14.753,450,8.84,698,14.072,860,13.475,936,19.303,944,14.753,950,12.036,951,15.548,953,19.303,954,19.303,955,26.536,958,19.303,973,17.701,976,35.332,992,19.303,993,17.701,1004,37.822,1005,21.736,1006,21.736,1007,21.736,1008,41.211,1009,34.948,1010,34.948,1011,21.736,1012,21.736,1013,30.338,1014,30.338,1015,19.303,1016,21.736,1017,21.736,1018,21.736,1019,21.736,1020,21.736,1021,21.736,1022,21.736,1023,21.736,1024,21.736,1025,21.736]],["docTitle/docs/hub/0.1/how-to-guides/get-started-with-the-api",[48,12.886,932,25.58]],["docBody/docs/hub/0.1/how-to-guides/get-started-with-the-api",[0,3.025,4,2.784,24,6.234,48,12.102,89,17.528,765,18.245,932,24.023,973,23.966,1026,29.429,1027,29.429,1028,29.429,1029,29.429,1030,29.429,1031,29.429,1032,26.136,1033,29.429,1034,29.429,1035,29.429,1036,29.429,1037,29.429,1038,23.966,1039,29.429]],["docTitle/docs/hub/0.1/how-to-guides/query-the-database",[1038,42.576]],["docBody/docs/hub/0.1/how-to-guides/query-the-database",[0,2.962,24,6.586,932,21.551,944,22.595,971,35.554,1038,32.603,1040,33.289,1041,33.289,1042,29.564,1043,33.289]],["docTitle/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.308]],["docBody/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.112,4,2.926,17,8.285,34,7.137,50,12.863,75,25.181,155,16.963,959,20.018,1000,12.371,1044,35.462,1045,30.921,1046,22.34,1047,35.462,1048,22.34,1049,22.34,1050,22.34,1051,22.34,1052,22.34,1053,22.34,1054,22.34,1055,22.34,1056,22.34]],["docTitle/docs/hub/0.1/references/api-reference",[48,17.05]],["docBody/docs/hub/0.1/references/api-reference",[0,2.966,48,8.508,932,16.888,944,17.706,959,16.888,987,21.244,1057,26.086,1058,26.086,1059,26.086,1060,26.086,1061,26.086,1062,26.086,1063,26.086,1064,26.086,1065,26.086,1066,26.086,1067,26.086,1068,26.086,1069,26.086,1070,26.086,1071,26.086,1072,26.086,1073,26.086,1074,26.086,1075,26.086,1076,26.086,1077,26.086,1078,26.086,1079,26.086,1080,26.086,1081,26.086,1082,26.086,1083,26.086,1084,26.086,1085,26.086,1086,26.086,1087,26.086,1088,26.086,1089,26.086,1090,26.086,1091,26.086,1092,26.086,1093,26.086,1094,26.086,1095,26.086,1096,26.086,1097,16.173,1098,23.167]],["docTitle/docs/hub/0.1/references/command-line-flags",[0,3.308]],["docBody/docs/hub/0.1/references/command-line-flags",[0,2.332,1099,36.851,1100,36.851,1101,36.851,1102,36.851,1103,36.851]],["docTitle/docs/hub/0.1/references/database-tables",[0,3.308]],["docBody/docs/hub/0.1/references/database-tables",[0,3.015,48,10.636,1032,28.964,1042,28.964,1104,32.614,1105,32.614,1106,32.614,1107,32.614,1108,32.614,1109,32.614,1110,32.614,1111,32.614,1112,32.614,1113,32.614]],["docTitle/docs/hub/0.1/references/security-considerations",[0,3.308]],["docBody/docs/hub/0.1/references/security-considerations",[0,3.048,4,4.215,17,14.847,41,15.371,1114,33.289]],["docTitle/docs/hub/0.1/references/troubleshooting",[0,3.308]],["docBody/docs/hub/0.1/references/troubleshooting",[0,2.666,539,20.099,579,27.56,932,23.498,1115,36.296,1116,36.296,1117,36.296]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.308]],["docBody/docs/compass/0.1/introduction/overview",[0,2.912,4,4.415,24,5.289,34,11.016,1118,34.479,1119,34.479]],["docTitle/docs/compass/0.1/how-to-guides/create-an-iota-network",[4,4.947]],["docBody/docs/compass/0.1/how-to-guides/create-an-iota-network",[0,3.046,4,2.989,17,6.727,24,5.689,28,9.123,34,5.795,41,12.306,48,8.691,50,6.579,57,7.747,62,19.063,66,11.245,70,12.311,142,6.879,146,17.253,165,12.913,197,11.245,395,12.975,450,7.377,828,13.773,860,11.245,887,14.771,927,13.773,932,11.743,951,12.975,955,23.987,1120,18.139,1121,18.139,1122,9.407,1123,13.773,1124,14.771,1125,18.139,1126,18.139,1127,16.109,1128,18.139,1129,18.139,1130,18.139,1131,18.139,1132,18.139,1133,26.649,1134,18.139,1135,10.584,1136,18.139,1137,18.139,1138,18.139,1139,18.139,1140,18.139,1141,18.139,1142,18.139,1143,18.139,1144,18.139,1145,18.139,1146,18.139,1147,18.139,1148,23.667,1149,18.139,1150,16.109,1151,13.773,1152,18.139,1153,18.139,1154,18.139,1155,18.139,1156,18.139,1157,18.139,1158,18.139,1159,18.139,1160,18.139,1161,18.139,1162,18.139,1163,18.139,1164,16.109,1165,18.139,1166,25.726,1167,25.726,1168,18.139,1169,18.139,1170,11.743]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.308]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.009,4,3.004,51,17.004,146,27.23,165,14.005,343,15.072,504,13.562,927,24.112,955,24.112,1000,17.584,1148,37.353,1150,28.201,1151,24.112,1171,25.86,1172,31.755,1173,22.716,1174,31.755,1175,31.755,1176,15.971,1177,31.755,1178,31.755]],["docTitle/docs/compass/0.1/references/contribution-guidelines",[0,3.308]],["docBody/docs/compass/0.1/references/contribution-guidelines",[0,2.702,450,17.363,451,23.022]],["docTitle/docs/trinity/0.1/introduction/overview",[0,3.308]],["docBody/docs/trinity/0.1/introduction/overview",[0,3.04,4,3.804,24,5.142,179,22.752,180,27.298,1179,33.521,1180,33.521,1181,33.521]],["docTitle/docs/trinity/0.1/concepts/hardware-wallet",[0,3.308]],["docBody/docs/trinity/0.1/concepts/hardware-wallet",[0,3.057,4,2.784,28,14.802,34,9.402,57,12.569,877,26.136,878,23.966,921,30.86,1182,40.643,1183,29.429,1184,26.136,1185,29.429,1186,40.643,1187,29.429,1188,29.429,1189,29.429]],["docTitle/docs/trinity/0.1/concepts/node-quorum",[0,3.308]],["docBody/docs/trinity/0.1/concepts/node-quorum",[0,2.714,34,11.956,1190,37.423]],["docTitle/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.051,24,6.605,67,21.701,182,25.452,184,21.701,185,21.701]],["docTitle/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.059,4,3.741,41,18.259,55,28.964,1191,32.614,1192,32.614,1193,32.614,1194,26.56]],["docTitle/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.039,51,14.437,53,20.472,54,14.93,179,18.3,1195,26.961,1196,26.961,1197,31.363,1198,26.961,1199,26.961,1200,38.999,1201,21.956,1202,26.961,1203,26.961,1204,23.944,1205,35.083,1206,26.961,1207,25.248,1208,26.961,1209,26.961,1210,17.533,1211,26.961,1212,26.961,1213,26.961,1214,26.961,1215,26.961]],["docTitle/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/read-your-balance",[0,2.852,165,12.461]],["docTitle/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.052,4,4.083,24,6.81,41,14.017,80,23.049,189,13.297,1216,24.721,1217,30.356,1218,24.721,1219,14.824,1220,24.721,1221,17.414]],["docTitle/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.011,24,5.142,41,18.563,189,17.61,1216,27.298,1221,23.062,1222,33.521,1223,25.452]],["docTitle/docs/trinity/0.1/how-to-guides/create-a-qr-code",[1223,39.697]],["docBody/docs/trinity/0.1/how-to-guides/create-a-qr-code",[0,2.576,4,3.239,24,5.251,80,25.994,118,12.418,121,14.264,1223,34.141,1224,34.235,1225,34.235,1226,34.235,1227,34.235,1228,34.235]],["docTitle/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.078,24,5.967,50,11.518,141,13.91,1229,31.755,1230,31.755,1231,24.112,1232,31.755,1233,31.755]],["docTitle/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.08,24,5.849,50,11.151,179,20.866,415,15.462,498,20.866,765,19.059,1234,30.743,1235,25.036,1236,30.743,1237,30.743,1238,30.743]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.113,24,4.46,68,20.798,184,18.822,561,15.569,1235,23.677,1239,29.074]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.024,1240,35.758,1241,19.8]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.051,17,11.776,179,29.755,1000,17.584,1242,24.112,1243,31.755,1244,38.904,1245,28.201,1246,25.86,1247,28.201]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.021,4,3.358,50,12.875,165,11.819]],["docTitle/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.073,24,5.106,927,25.277,1248,33.289,1249,29.564,1250,33.289]],["docTitle/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.308]],["docBody/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.071,24,5.479,51,14.844,53,14.538,54,19.78,60,10.602,76,17.947,81,15.592,84,12.996,88,15.592,116,14.844,179,12.996,437,17.187,443,12.996,450,11.274,451,11.87,504,8.177,519,17.004,540,11.87,664,21.049,698,12.395,828,14.538,925,10.984,1015,24.619,1167,15.592,1201,15.592,1216,15.592,1251,19.147,1252,27.722,1253,19.147,1254,19.147,1255,19.147,1256,19.147,1257,19.147,1258,17.004,1259,19.147,1260,27.722,1261,27.722,1262,19.147,1263,19.147,1264,12.996,1265,19.147,1266,19.147,1267,19.147,1268,19.147,1269,19.147,1270,19.147,1271,19.147,1272,19.147,1273,19.147,1274,19.147,1275,19.147,1276,19.147,1277,19.147,1278,19.147,1279,19.147,1280,19.147,1281,12.996,1282,19.147,1283,19.147,1284,19.147,1285,13.696,1286,19.147,1287,19.147,1288,19.147]],["docTitle/docs/trinity/0.1/references/troubleshooting",[0,3.308]],["docBody/docs/trinity/0.1/references/troubleshooting",[0,3.102,4,2.872,24,5.804,1289,23.049,1290,18.08,1291,30.356,1292,30.356]],["docTitle/docs/tools/0.1/introduction/overview",[1293,26.819,1294,32.177]],["docBody/docs/tools/0.1/introduction/overview",[0,1.582,4,3.556,24,3.835,108,14.344,118,9.07,119,13.389,141,14.623,142,12.661,146,16.187,432,22.383,441,11.241,450,10.169,907,12.211,910,17.876,911,16.187,919,13.389,991,13.846,1135,9.931,1210,11.241,1219,16.302,1281,22.658,1293,22.658,1294,20.363,1295,25.004,1296,13.846,1297,25.004,1298,16.971,1299,16.187,1300,22.206,1301,17.886,1302,24.329,1303,16.971,1304,18.986,1305,22.206,1306,14.344,1307,17.886,1308,16.971,1309,18.986,1310,12.967,1311,13.389,1312,9.931,1313,18.986,1314,17.313,1315,16.79,1316,25.004,1317,20.363,1318,14.892,1319,25.348,1320,16.971,1321,20.363,1322,20.363,1323,15.502,1324,13.846]],["docTitle/docs/tools/0.1/mam-watcher/overview",[441,14.277,1304,24.113,1325,19.688]],["docBody/docs/tools/0.1/mam-watcher/overview",[0,1.989,4,1.192,24,3.089,50,4.569,52,16.4,54,13.933,59,14.458,60,6.975,78,5.663,83,4.888,85,7.809,89,7.502,95,6.335,108,20.19,118,4.569,121,5.248,141,16.936,142,11.922,186,11.619,189,11.022,205,15.292,320,9.01,338,6.745,415,10.129,441,16.949,450,8.19,462,15.292,504,8.601,539,6.975,540,12.485,561,16.832,698,8.154,907,9.835,910,6.745,922,7.809,925,7.226,966,10.257,970,9.564,991,11.152,1135,13.314,1173,9.01,1176,16.861,1210,15.071,1219,15.351,1241,6.975,1302,8.154,1304,21.828,1305,11.186,1306,14.435,1307,22.486,1308,8.549,1309,23.868,1312,14.521,1323,12.485,1324,11.152,1325,7.809,1326,8.154,1327,16.491,1328,7.226,1329,19.488,1330,7.502,1331,10.257,1332,8.549,1333,6.335,1334,6.745,1335,7.502,1336,12.596,1337,9.564,1338,13.038,1339,11.995,1340,9.01,1341,11.186,1342,8.154,1343,11.152,1344,6.975,1345,6.745,1346,6.532,1347,9.01,1348,10.257,1349,10.257,1350,13.669,1351,14.406,1352,12.596,1353,15.292,1354,14.986,1355,6.975,1356,21.828,1357,22.346,1358,8.549,1359,10.257,1360,11.186,1361,17.999,1362,9.564,1363,12.485,1364,27.3,1365,13.933,1366,13.038,1367,9.564,1368,7.502,1369,16.4,1370,20.139,1371,27.916,1372,11.186,1373,8.549,1374,10.257,1375,12.596,1376,12.596,1377,11.186,1378,15.292,1379,8.549,1380,8.549,1381,8.549,1382,9.01,1383,9.564,1384,8.549,1385,11.186,1386,10.257,1387,8.549,1388,11.186,1389,9.01,1390,8.549,1391,9.01,1392,10.257,1393,11.186,1394,8.154]],["docTitle/docs/tools/0.1/one-command-tangle/overview",[142,8.649,502,11.136,907,11.136,910,12.211,1366,14.763]],["docBody/docs/tools/0.1/one-command-tangle/overview",[0,2.116,4,3.036,17,3.375,24,3.074,34,2.908,48,5.025,50,3.301,51,4.873,57,3.887,59,4.577,60,5.04,76,5.892,78,6.928,83,3.532,90,4.577,95,10.079,118,5.589,141,3.987,142,7.6,146,17.077,155,17.905,165,10.162,175,12.549,182,15.215,186,7.115,189,13.368,193,16.319,197,12.423,205,15.215,263,6.911,321,20.942,343,12.521,378,17.796,379,17.796,395,6.51,415,18.741,441,4.092,450,6.267,481,7.412,485,6.911,501,8.083,502,16.89,504,13.034,512,11.023,561,8.251,630,7.412,662,7.412,663,6.51,750,11.023,828,6.911,887,12.549,890,6.177,907,13.988,910,16.341,919,21.241,925,5.221,926,5.04,991,5.04,1000,8.533,1097,12.423,1122,4.72,1124,23.327,1135,6.12,1164,8.083,1166,7.412,1167,16.319,1170,5.892,1173,6.51,1176,10.079,1210,16.752,1219,11.516,1220,16.319,1221,13.528,1231,6.911,1290,5.421,1293,10.459,1294,7.412,1299,5.892,1304,6.911,1306,5.221,1308,6.177,1310,7.991,1311,12.627,1312,15.077,1313,6.911,1324,8.533,1327,8.84,1328,5.221,1330,9.178,1331,7.412,1332,6.177,1333,4.577,1334,4.873,1335,9.178,1337,6.911,1338,5.892,1340,11.023,1343,13.058,1344,5.04,1345,4.873,1346,7.991,1347,6.51,1348,12.549,1351,6.51,1353,6.911,1355,13.058,1356,6.911,1357,8.083,1362,6.911,1365,5.04,1366,12.973,1368,5.421,1379,6.177,1380,6.177,1384,6.177,1387,10.459,1389,6.51,1390,16.005,1391,6.51,1392,7.412,1393,8.083,1394,5.892,1395,8.083,1396,9.101,1397,9.101,1398,9.976,1399,9.101,1400,9.101,1401,9.101,1402,9.101,1403,11.935,1404,20.039,1405,11.7,1406,7.412,1407,11.7,1408,7.412,1409,9.101,1410,9.101,1411,8.083,1412,6.51,1413,7.412,1414,6.911,1415,7.412,1416,13.685,1417,9.101,1418,7.412,1419,12.549,1420,9.101,1421,8.083,1422,5.421,1423,20.039,1424,9.101,1425,7.412,1426,6.911,1427,8.083,1428,11.7,1429,7.412,1430,6.51,1431,15.409,1432,8.083,1433,6.911,1434,5.892,1435,5.892,1436,9.101,1437,11.935,1438,7.412,1439,7.412,1440,8.083,1441,9.101,1442,7.412,1443,9.101,1444,6.177,1445,9.553,1446,8.083,1447,6.177,1448,20.039,1449,6.911,1450,8.533,1451,8.083,1452,8.083,1453,7.412,1454,6.51,1455,7.412,1456,6.177,1457,7.412,1458,6.911,1459,8.083,1460,8.083,1461,7.412,1462,9.101,1463,9.101,1464,8.083,1465,5.892]],["docTitle/docs/tools/0.1/raspberry-pi-pub-sub/overview",[1135,9.057,1314,11.826,1315,11.469,1328,13.082,1466,15.478]],["docBody/docs/tools/0.1/raspberry-pi-pub-sub/overview",[0,1.521,4,2.615,50,4.268,78,12.424,83,4.566,85,7.294,89,7.008,90,5.918,95,9.588,103,8.417,108,6.75,118,8.718,119,18.33,140,7.008,141,10.528,142,12.329,154,18.757,181,8.934,186,8.803,189,14.239,207,15.559,269,8.417,279,7.617,313,14.475,320,8.417,338,14.798,343,5.585,415,9.588,441,5.29,450,7.753,504,10.264,539,6.515,540,11.819,561,10.208,579,8.934,698,7.617,890,7.986,907,5.746,925,6.75,991,10.557,1097,11.819,1135,15.936,1176,13.899,1210,16.027,1219,16.716,1221,6.75,1241,6.515,1281,7.986,1298,7.986,1306,6.75,1307,13.637,1310,12.464,1311,12.869,1312,12.911,1314,14.332,1315,13.899,1317,9.582,1318,7.008,1319,24.682,1320,18.757,1321,9.582,1322,15.525,1324,10.557,1326,7.617,1328,6.75,1329,7.294,1330,7.008,1331,9.582,1332,7.986,1333,9.588,1334,6.3,1335,14.314,1337,8.934,1338,7.617,1339,14.314,1342,7.617,1343,10.557,1345,6.3,1346,9.887,1347,8.417,1348,15.525,1349,9.582,1350,7.986,1353,14.475,1355,15.303,1363,7.294,1381,16.312,1386,9.582,1389,8.417,1390,7.986,1403,11.355,1408,9.582,1419,15.525,1427,10.449,1433,8.934,1437,7.008,1442,9.582,1446,10.449,1450,10.557,1455,9.582,1465,7.617,1466,20.61,1467,18.249,1468,8.417,1469,19.064,1470,9.582,1471,11.766,1472,14.475,1473,8.934,1474,11.766,1475,9.582,1476,7.617,1477,11.766,1478,19.064,1479,19.064,1480,8.934,1481,11.819,1482,11.766,1483,12.342,1484,10.449,1485,9.582,1486,8.934,1487,19.064,1488,19.064,1489,11.766,1490,10.449,1491,10.449,1492,11.766,1493,19.064,1494,10.449,1495,11.766,1496,11.766,1497,11.766,1498,19.064,1499,11.766,1500,19.064,1501,11.766,1502,8.934,1503,10.449,1504,8.934,1505,12.342,1506,8.417,1507,7.986,1508,10.449,1509,10.449,1510,8.934,1511,7.617,1512,19.064]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.308]],["docBody/docs/blueprints/0.1/introduction/overview",[0,2.951,4,4.232,140,18.547,142,11.81,1135,15.267,1296,17.243,1513,25.359,1514,31.14,1515,19.306,1516,29.187,1517,21.136,1518,21.136,1519,22.275,1520,31.14,1521,18.547,1522,21.136,1523,31.14]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.308]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.048,4,3.105,16,19.848,24,3.738,34,7.787,48,10.702,57,10.409,144,10.155,432,24.673,441,14.753,450,9.912,1135,15.763,1241,13.496,1339,14.516,1341,21.645,1354,14.516,1513,19.848,1524,24.372,1525,24.372,1526,24.372,1527,24.372,1528,24.372,1529,24.372,1530,24.372,1531,24.372,1532,24.372,1533,24.372,1534,24.372,1535,24.372,1536,24.372,1537,24.372,1538,24.372,1539,18.506,1540,19.848,1541,18.506,1542,22.273,1543,24.372,1544,24.372]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.308]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.034,4,2.639,50,10.119,144,11.623,950,15.448,1135,11.08,1314,14.468,1315,14.031,1466,18.935,1513,22.718,1545,27.897,1546,24.775,1547,27.897,1548,27.897,1549,27.897,1550,22.718,1551,19.956,1552,27.897,1553,27.897,1554,22.718,1555,27.897,1556,27.897,1557,27.897,1558,24.775,1559,21.182,1560,21.182,1561,24.775,1562,24.775,1563,24.775,1564,24.775,1565,24.775,1566,24.775]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.308]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.059,4,2.957,24,5.293,48,12.995,50,6.458,57,7.604,61,20.23,66,11.038,80,13.518,83,6.909,116,9.533,117,9.859,118,6.458,144,14.377,441,15.514,924,15.811,959,11.526,1207,11.526,1241,9.859,1264,12.084,1314,9.233,1315,8.954,1328,10.213,1440,23.344,1466,12.084,1550,21.407,1551,12.736,1554,14.499,1558,15.811,1559,13.518,1560,13.518,1561,15.811,1562,15.811,1563,15.811,1564,15.811,1565,15.811,1566,15.811,1567,23.883,1568,12.736,1569,25.448,1570,23.728,1571,21.21,1572,13.518,1573,15.811,1574,14.499,1575,17.804,1576,17.804,1577,17.804,1578,17.804,1579,17.804,1580,17.804,1581,23.344,1582,17.804,1583,17.804,1584,17.804,1585,23.344,1586,17.804,1587,17.804,1588,17.804,1589,17.804,1590,17.804,1591,17.804,1592,17.804,1593,17.804,1594,17.804,1595,17.804]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.308]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.026,4,3.726,89,19.294,140,19.294,144,13.497,432,23.455,450,13.175,950,17.938,1515,20.084,1550,26.381,1596,32.395,1597,32.395]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.308]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.079,4,2.623,17,12.085,28,9.63,34,8.857,50,11.82,57,13.917,62,19.831,66,17.187,83,7.43,86,11.404,90,13.943,140,11.404,205,27.123,279,21.096,515,14.538,950,10.602,959,21.096,1197,14.538,1515,23.502,1542,18.816,1546,24.619,1574,15.592,1598,19.147,1599,12.996,1600,27.722,1601,19.147,1602,19.147,1603,19.147,1604,19.147,1605,19.147,1606,19.147,1607,19.147,1608,19.147,1609,19.147,1610,19.147,1611,19.147,1612,19.147,1613,19.147,1614,19.147,1615,19.147,1616,27.722,1617,19.147,1618,27.722,1619,19.147,1620,19.147,1621,19.147,1622,19.147,1623,19.147,1624,19.147]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1516,31.884,1517,18.018,1518,18.018]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,1.114,4,2.938,24,2.701,59,15.616,74,16.879,90,8.856,118,6.387,121,7.337,140,10.488,141,7.713,142,6.678,189,7.713,340,13.37,432,18.492,441,15.431,442,13.37,450,7.161,485,13.37,502,8.599,874,18.651,922,10.917,925,10.102,991,9.751,1122,9.132,1135,10.355,1219,8.599,1221,10.102,1241,9.751,1289,13.37,1290,10.488,1302,16.879,1306,10.102,1312,13.632,1323,16.164,1324,9.751,1326,11.4,1328,10.102,1329,10.917,1332,11.952,1333,8.856,1335,15.529,1339,10.488,1344,9.751,1365,14.438,1367,13.37,1368,10.488,1388,15.638,1405,19.797,1435,11.4,1439,14.34,1444,11.952,1450,14.438,1511,11.4,1516,26.061,1517,28.264,1518,26.043,1519,26.211,1542,17.697,1599,11.952,1625,15.638,1626,31.048,1627,27.573,1628,17.609,1629,13.37,1630,8.856,1631,17.609,1632,23.575,1633,19.797,1634,15.638,1635,17.609,1636,16.879,1637,14.34,1638,19.797,1639,17.697,1640,17.697,1641,11.952,1642,13.37,1643,15.638,1644,15.638,1645,12.596,1646,17.609,1647,17.609,1648,12.596,1649,17.609,1650,15.638,1651,17.609,1652,15.638,1653,15.638,1654,14.34,1655,17.609,1656,11.952,1657,21.233,1658,15.638,1659,15.638,1660,11.952]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[950,21.88,1210,17.764]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,0.309,4,2.197,19,3.971,28,2.453,48,9.547,59,6.161,61,5.755,65,3.703,66,3.023,77,2.905,78,5.507,84,6.034,98,6.034,102,3.31,108,22.473,111,3.703,121,2.032,133,3.971,142,9.869,144,8.986,152,13.368,155,3.703,165,4.079,175,3.971,181,13.334,183,3.703,186,12.015,187,7.24,189,2.136,279,3.157,338,4.76,343,2.315,415,7.597,419,7.24,441,15.647,451,3.023,481,7.24,495,5.511,504,6.451,512,3.488,561,2.611,691,3.703,751,3.971,890,15.763,906,4.331,907,5.982,910,8.088,911,3.157,919,8.088,925,2.798,926,4.923,950,11.943,959,11.369,991,11.943,1097,3.023,1122,4.61,1123,6.75,1135,6.975,1210,5.507,1219,5.982,1221,2.798,1231,3.703,1241,4.923,1290,7.296,1296,2.7,1302,20.068,1303,3.31,1306,2.798,1307,6.359,1308,6.034,1310,4.61,1312,10.334,1318,13.832,1323,7.595,1327,7.028,1328,10.074,1330,8.997,1334,18.053,1339,2.905,1342,12.75,1343,4.923,1344,2.7,1346,10.214,1354,2.905,1355,2.7,1358,3.31,1365,6.783,1366,3.157,1368,2.905,1374,3.971,1377,4.331,1378,3.703,1379,8.315,1382,8.763,1383,3.703,1394,11.369,1398,3.157,1403,2.905,1405,3.703,1414,6.75,1415,7.24,1422,10.459,1426,3.703,1429,9.976,1434,9.779,1437,5.295,1445,3.023,1449,3.703,1461,7.24,1465,3.157,1467,11.469,1468,6.359,1470,3.971,1473,6.75,1476,9.779,1481,3.023,1486,6.75,1505,5.755,1511,5.755,1516,6.75,1517,15.763,1518,27.236,1519,15.428,1521,11.73,1541,9.302,1551,3.488,1567,5.511,1570,3.703,1571,3.31,1599,14.639,1627,25.999,1630,7.597,1632,6.75,1633,3.703,1638,24.646,1639,3.31,1641,3.31,1642,9.302,1645,6.359,1648,3.488,1654,26.963,1660,6.034,1661,32.497,1662,3.971,1663,3.971,1664,3.971,1665,3.971,1666,3.971,1667,3.971,1668,3.023,1669,6.75,1670,2.905,1671,3.703,1672,3.971,1673,3.971,1674,3.971,1675,3.971,1676,3.971,1677,3.971,1678,3.971,1679,3.971,1680,4.877,1681,4.877,1682,4.877,1683,5.295,1684,8.89,1685,4.877,1686,8.89,1687,3.31,1688,4.877,1689,7.895,1690,4.331,1691,3.971,1692,7.24,1693,3.971,1694,6.359,1695,4.877,1696,23.108,1697,4.877,1698,4.877,1699,4.331,1700,3.703,1701,3.971,1702,3.488,1703,4.877,1704,3.971,1705,4.877,1706,4.877,1707,7.895,1708,6.75,1709,19.154,1710,7.895,1711,4.877,1712,4.331,1713,4.877,1714,4.877,1715,4.877,1716,8.89,1717,4.877,1718,4.877,1719,12.562,1720,3.971,1721,4.877,1722,4.877,1723,4.331,1724,7.895,1725,4.877,1726,3.971,1727,10.805,1728,11.469,1729,15.595,1730,15.105,1731,17.561,1732,4.877,1733,12.562,1734,3.971,1735,11.919,1736,3.971,1737,4.877,1738,7.895,1739,12.25,1740,4.877,1741,14.955,1742,4.877,1743,13.415,1744,8.89,1745,19.695,1746,4.877,1747,15.595,1748,7.24,1749,6.75,1750,4.877,1751,8.89,1752,8.89,1753,7.895,1754,4.877,1755,12.25,1756,4.331,1757,7.895,1758,8.89,1759,8.89,1760,7.895,1761,19.695,1762,7.895,1763,4.877,1764,4.331,1765,3.703,1766,4.331,1767,12.25,1768,4.877,1769,4.877,1770,21.568,1771,3.31,1772,4.877,1773,4.331,1774,8.89,1775,3.971,1776,4.877,1777,8.89,1778,4.877,1779,4.877,1780,8.89,1781,8.89,1782,3.971,1783,3.703,1784,4.331,1785,4.877,1786,4.331,1787,4.331,1788,7.895,1789,4.877,1790,12.25,1791,4.877,1792,3.703,1793,4.331,1794,4.877,1795,4.331,1796,4.877,1797,4.331,1798,26.02,1799,8.89,1800,4.877,1801,4.877,1802,3.971,1803,3.703,1804,4.331,1805,7.895,1806,3.703,1807,8.89,1808,4.877,1809,4.331,1810,4.877,1811,12.25,1812,4.877,1813,4.877,1814,7.24,1815,4.877,1816,4.877,1817,15.105,1818,4.877,1819,12.25,1820,4.331,1821,4.877,1822,4.877,1823,4.877,1824,4.877,1825,4.331]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1517,15.478,1518,15.478,1519,16.313,1670,13.582,1826,14.763]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,0.975,4,3.273,24,2.364,48,9.344,61,18.548,78,16.402,83,14.156,108,8.842,141,6.752,144,11.937,338,8.254,343,18.586,415,16.142,441,10.604,450,6.269,504,16.214,758,13.689,907,7.527,911,9.979,919,19.535,926,21.023,993,23.332,1122,7.994,1176,7.752,1210,6.93,1241,8.535,1258,13.689,1264,10.462,1299,9.979,1312,6.122,1314,7.994,1315,7.752,1324,8.535,1326,9.979,1333,11.863,1334,12.63,1345,8.254,1346,16.645,1515,9.556,1517,21.784,1518,27.245,1519,22.959,1521,14.048,1551,20.495,1567,24.277,1568,16.872,1569,19.208,1570,21.754,1571,23.478,1572,11.704,1573,13.689,1574,12.552,1630,7.752,1654,19.208,1661,19.208,1670,21.729,1723,25.444,1724,28.503,1826,20.778,1827,11.026,1828,32.095,1829,12.552,1830,11.704,1831,13.689,1832,15.414,1833,15.414,1834,13.689,1835,11.026,1836,17.909,1837,12.552,1838,11.704,1839,15.414,1840,11.704,1841,36.482,1842,20.495]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[142,10.068,1135,10.543,1325,16.457,1521,15.811]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,0.812,4,2.41,24,1.968,59,12.811,60,7.105,61,8.306,74,13.231,118,4.654,121,5.346,140,17.302,142,15.055,188,10.448,189,5.62,279,16.49,343,9.701,432,17.302,450,5.218,495,18.01,502,6.266,516,10.448,561,6.87,603,11.394,707,11.394,874,9.178,921,9.742,966,10.448,991,11.317,1000,7.105,1135,17.024,1170,13.231,1176,12.811,1210,9.188,1219,6.266,1221,7.36,1281,8.708,1306,7.36,1309,9.742,1312,14.618,1320,8.708,1324,7.105,1325,7.954,1327,14.613,1329,7.954,1330,7.642,1332,8.708,1333,6.453,1334,6.87,1335,12.173,1344,7.105,1346,6.654,1355,7.105,1364,10.448,1366,16.49,1378,15.518,1380,13.872,1387,8.708,1398,16.49,1403,7.642,1405,9.742,1414,19.341,1422,21.116,1450,11.317,1467,9.742,1472,15.518,1475,10.448,1504,15.518,1509,11.394,1515,12.671,1521,18.895,1542,13.872,1625,11.394,1630,6.453,1636,18.807,1637,10.448,1639,8.708,1640,8.708,1641,8.708,1656,13.872,1657,10.448,1668,7.954,1683,7.642,1710,11.394,1727,9.178,1735,8.708,1757,11.394,1784,18.15,1793,25.799,1795,11.394,1802,10.448,1804,11.394,1837,20.744,1838,19.341,1843,20.438,1844,20.438,1845,18.15,1846,20.438,1847,12.83,1848,11.394,1849,11.394,1850,18.15,1851,16.644,1852,16.644,1853,24.088,1854,22.621,1855,12.83,1856,12.83,1857,12.83,1858,20.438,1859,12.83,1860,12.83,1861,11.394,1862,10.448,1863,11.394,1864,11.394,1865,11.394,1866,20.438,1867,12.83,1868,12.83,1869,11.394,1870,12.83,1871,11.394,1872,12.83,1873,9.742,1874,12.83,1875,10.448,1876,10.448,1877,12.83,1878,12.83,1879,18.15,1880,11.394,1881,10.448,1882,12.83,1883,12.83,1884,12.83,1885,12.83,1886,20.438,1887,11.394,1888,10.448,1889,20.744]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[950,21.88,1210,17.764]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,0.967,4,1.883,48,10.861,67,5.837,69,5.172,77,9.105,78,11.795,83,7.722,90,7.689,98,17.807,111,11.607,118,3.27,121,3.757,141,3.949,142,10.811,144,3.757,152,10.376,186,7.059,189,12.486,269,6.45,279,26.203,309,7.342,415,14.336,495,5.59,502,4.403,504,8.499,840,8.007,890,6.12,907,7.465,916,16.207,950,14.528,991,11.02,1000,4.993,1122,10.321,1135,14.442,1170,5.837,1176,20.74,1197,25.287,1207,5.837,1210,10.537,1219,4.403,1264,15.908,1299,5.837,1301,16.766,1302,9.897,1306,5.172,1308,10.376,1312,12.692,1333,10.009,1334,10.656,1345,8.186,1346,7.928,1354,9.105,1358,17.807,1362,6.846,1365,4.993,1373,13.507,1378,17.796,1380,6.12,1384,6.12,1422,11.853,1429,7.342,1430,6.45,1435,5.837,1437,9.105,1450,12.978,1456,6.12,1457,7.342,1465,9.897,1481,9.477,1510,11.607,1511,19.668,1521,19.835,1554,7.342,1572,6.846,1599,17.807,1630,4.535,1633,6.846,1638,6.846,1639,10.376,1640,6.12,1648,10.935,1650,8.007,1656,6.12,1662,12.449,1663,12.449,1664,12.449,1665,12.449,1666,12.449,1667,12.449,1668,9.477,1669,11.607,1670,16.977,1671,11.607,1672,12.449,1673,12.449,1674,12.449,1675,12.449,1676,12.449,1677,12.449,1678,12.449,1679,12.449,1683,9.105,1687,6.12,1692,7.342,1701,7.342,1702,6.45,1726,16.207,1727,6.45,1728,6.846,1734,7.342,1765,11.607,1771,6.12,1783,6.846,1792,11.607,1827,6.45,1835,10.935,1836,11.607,1852,24.74,1853,15.111,1889,32.61,1890,11.607,1891,7.342,1892,12.449,1893,12.449,1894,19.087,1895,12.449,1896,13.576,1897,7.342,1898,9.016,1899,8.007,1900,12.449,1901,8.007,1902,7.342,1903,7.342,1904,9.016,1905,9.016,1906,19.901,1907,15.287,1908,9.016,1909,24.74,1910,6.846,1911,15.287,1912,8.007,1913,9.016,1914,9.016,1915,12.449,1916,13.576,1917,7.342,1918,9.016,1919,8.007,1920,8.007,1921,9.016,1922,9.016,1923,8.007,1924,8.007,1925,9.016,1926,9.016,1927,8.007,1928,9.016,1929,9.016]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[142,7.58,502,9.76,1135,7.938,1521,11.904,1670,11.904,1826,12.939]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,0.909,4,3.168,24,2.202,48,8.937,69,8.237,78,10.039,83,8.665,95,7.221,118,5.208,140,8.552,141,9.782,142,14.036,181,10.902,188,11.693,189,13.541,279,23.958,338,7.688,415,13.782,450,5.839,502,10.905,907,10.905,914,11.693,916,22.315,1000,7.951,1135,16.252,1176,22.176,1197,16.956,1207,9.295,1210,10.039,1264,9.745,1301,15.974,1308,18.599,1312,8.869,1317,11.693,1327,8.237,1333,13.782,1334,7.688,1355,12.365,1358,26.677,1373,9.745,1419,11.693,1422,19.944,1426,10.902,1454,10.271,1456,9.745,1458,10.902,1459,12.751,1505,9.295,1510,10.902,1521,22.791,1599,25.119,1630,7.221,1636,9.295,1670,22.042,1687,9.745,1694,10.271,1700,10.902,1727,10.271,1753,12.751,1760,12.751,1771,9.745,1792,10.902,1805,19.831,1826,17.74,1827,10.271,1850,12.751,1851,11.693,1852,22.315,1871,12.751,1881,11.693,1889,32.718,1890,10.902,1891,11.693,1892,11.693,1893,11.693,1894,22.315,1900,18.185,1901,12.751,1902,11.693,1909,27.27,1923,12.751,1930,14.358,1931,14.358,1932,12.751,1933,19.831,1934,16.956,1935,14.358,1936,14.358,1937,12.751,1938,10.271,1939,12.751]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[1296,17.585,1325,19.688,1522,21.554]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,0.505,4,2.706,24,1.225,54,10.065,59,9.142,61,8.921,74,8.921,78,8.171,90,4.017,118,2.897,121,5.741,132,6.503,141,3.498,142,5.226,152,9.353,184,5.17,189,3.498,340,6.064,432,10.825,441,10.971,450,3.248,502,3.9,504,3.411,845,14.802,874,9.857,911,5.17,919,7.379,921,6.064,922,8.543,925,4.581,991,4.422,1097,4.951,1122,14.834,1135,9.692,1204,7.092,1210,3.59,1219,3.9,1220,6.503,1221,4.581,1241,4.422,1245,7.092,1296,19.764,1298,5.42,1299,11.767,1302,5.17,1303,5.42,1306,4.581,1311,4.276,1312,13.842,1318,10.825,1323,8.543,1324,4.422,1325,4.951,1326,5.17,1327,4.581,1328,4.581,1329,4.951,1332,5.42,1333,4.017,1334,4.276,1335,8.207,1337,6.064,1343,4.422,1346,9.426,1355,7.63,1359,11.222,1367,10.463,1368,4.756,1379,9.353,1381,5.42,1382,13.002,1387,5.42,1394,5.17,1398,5.17,1412,5.713,1418,6.503,1421,7.092,1422,4.756,1435,5.17,1439,11.222,1444,9.353,1445,4.951,1450,7.63,1470,6.503,1472,6.064,1473,10.463,1476,5.17,1481,4.951,1483,5.17,1494,12.238,1503,12.238,1507,5.42,1511,27.011,1522,16.564,1539,6.064,1542,9.353,1629,16.42,1630,6.931,1633,6.064,1636,11.767,1637,6.503,1638,6.064,1640,12.337,1643,7.092,1645,5.713,1648,5.713,1652,7.092,1653,12.238,1656,9.353,1657,11.222,1658,7.092,1659,7.092,1660,12.337,1661,11.222,1668,4.951,1669,6.064,1683,8.207,1687,5.42,1692,6.503,1693,11.222,1699,12.238,1719,13.002,1727,5.713,1728,6.064,1733,17.457,1735,5.42,1736,6.503,1773,7.092,1775,6.503,1782,11.222,1787,7.092,1797,7.092,1802,6.503,1814,6.503,1836,10.463,1837,6.503,1838,16.42,1845,7.092,1848,7.092,1849,7.092,1851,6.503,1853,13.801,1854,19.205,1861,7.092,1862,11.222,1863,12.238,1873,6.064,1875,11.222,1887,7.092,1888,6.503,1900,6.503,1903,11.222,1938,5.713,1940,13.78,1941,7.986,1942,7.986,1943,35.522,1944,7.986,1945,29.168,1946,12.238,1947,12.238,1948,7.986,1949,7.986,1950,13.78,1951,7.986,1952,30.229,1953,18.176,1954,13.78,1955,13.78,1956,13.78,1957,7.986,1958,9.857,1959,7.092,1960,7.092,1961,7.986,1962,12.238,1963,13.78,1964,7.986,1965,16.141,1966,7.986,1967,7.986,1968,7.986,1969,7.986,1970,7.986,1971,30.229,1972,7.986,1973,7.092,1974,16.141,1975,13.78,1976,7.986,1977,7.986,1978,7.986,1979,7.986,1980,7.986,1981,13.78,1982,25.402,1983,7.986,1984,7.986,1985,7.986,1986,6.503,1987,7.986,1988,7.986,1989,7.986,1990,7.986,1991,12.238,1992,14.802,1993,18.176,1994,7.986,1995,11.222,1996,7.986,1997,7.986,1998,5.42,1999,7.092,2000,7.986,2001,7.092,2002,7.986,2003,7.986,2004,7.092,2005,7.092,2006,7.986,2007,7.986,2008,7.986,2009,7.986,2010,7.986,2011,7.986,2012,10.463,2013,13.78,2014,7.986,2015,7.986,2016,7.986,2017,13.78,2018,13.78,2019,7.986,2020,7.092,2021,7.986,2022,7.986,2023,7.986,2024,7.986,2025,7.986,2026,7.092]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[950,21.88,1210,17.764]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,0.33,4,3.014,17,1.932,34,1.664,48,5.182,59,14.144,60,14.185,61,6.11,65,3.955,69,5.414,74,8.378,77,5.621,78,7.143,90,6.509,98,6.406,108,21.179,111,3.955,118,4.694,140,3.102,141,11.221,142,10.216,144,2.17,183,3.955,185,3.372,186,5.975,189,6.96,313,3.955,340,9.826,343,2.472,417,6.11,432,5.621,441,17.774,443,10.785,451,3.229,462,3.955,495,3.229,498,3.535,502,2.544,504,2.224,561,12.926,691,3.955,890,3.535,907,2.544,914,4.242,919,6.929,922,3.229,950,11.395,959,8.378,990,4.626,1122,8.24,1123,7.166,1135,2.069,1170,6.11,1210,7.143,1219,2.544,1223,7.166,1235,10.538,1241,2.884,1242,3.955,1246,4.242,1264,6.406,1281,3.535,1285,3.726,1289,3.955,1290,14.377,1296,14.185,1299,3.372,1301,3.726,1302,6.11,1306,5.414,1309,3.955,1310,6.711,1311,2.789,1312,12.949,1318,9.463,1320,6.406,1324,16.164,1326,3.372,1327,9.115,1328,2.988,1329,3.229,1330,3.102,1334,5.054,1335,9.463,1339,3.102,1343,13.367,1345,2.789,1346,13.285,1351,13.166,1354,3.102,1358,8.783,1359,4.242,1364,10.538,1365,2.884,1367,3.955,1368,3.102,1369,7.686,1371,4.626,1373,3.535,1379,3.535,1383,7.166,1384,6.406,1385,8.382,1387,3.535,1390,3.535,1392,4.242,1398,3.372,1422,16.749,1437,7.707,1445,3.229,1447,3.535,1449,3.955,1450,2.884,1453,4.242,1457,4.242,1465,6.11,1467,3.955,1472,3.955,1475,4.242,1476,11.915,1481,3.229,1486,7.166,1502,3.955,1505,6.11,1507,3.535,1511,19.527,1521,3.102,1522,12.492,1540,7.686,1541,7.166,1567,12.757,1569,4.242,1581,4.626,1629,7.166,1630,7.991,1636,6.11,1639,3.535,1644,4.626,1648,3.726,1660,18.283,1662,4.242,1663,4.242,1664,4.242,1665,4.242,1666,4.242,1667,4.242,1668,5.851,1669,13.975,1670,7.707,1671,3.955,1672,4.242,1673,4.242,1674,4.242,1675,4.242,1676,4.242,1677,4.242,1678,4.242,1679,4.242,1683,3.102,1687,15.253,1690,11.492,1691,4.242,1693,7.686,1696,11.492,1701,4.242,1702,6.751,1708,3.955,1709,11.492,1719,27.209,1726,4.242,1728,3.955,1729,4.626,1733,13.166,1735,8.783,1747,8.382,1748,10.538,1756,4.626,1765,7.166,1766,4.626,1771,8.783,1775,7.686,1782,16.758,1786,11.492,1788,8.382,1792,3.955,1814,4.242,1826,16.584,1829,4.242,1835,3.726,1836,3.955,1838,3.955,1853,3.955,1862,4.242,1864,19.957,1865,19.957,1869,8.382,1873,12.065,1876,4.242,1879,4.626,1890,3.955,1892,4.242,1893,4.242,1894,4.242,1895,4.242,1903,4.242,1910,7.166,1916,25.924,1933,11.492,1937,4.626,1939,8.382,1943,32.195,1945,11.492,1946,8.382,1947,4.626,1958,3.726,1959,4.626,1965,8.382,1973,16.345,1974,4.626,1982,19.957,1992,4.242,1998,3.535,1999,19.957,2001,4.626,2020,4.626,2027,26.787,2028,5.208,2029,8.382,2030,9.438,2031,5.208,2032,5.208,2033,5.208,2034,4.626,2035,5.208,2036,12.941,2037,5.208,2038,22.472,2039,9.438,2040,12.941,2041,9.438,2042,12.941,2043,12.941,2044,8.382,2045,5.208,2046,5.208,2047,8.382,2048,11.492,2049,4.626,2050,5.208,2051,12.941,2052,8.382,2053,5.208,2054,4.626,2055,5.208,2056,5.208,2057,9.438,2058,5.208,2059,3.955,2060,5.208,2061,5.208,2062,11.492,2063,5.208,2064,10.538,2065,5.208,2066,5.208,2067,5.208,2068,5.208,2069,4.626,2070,5.208,2071,5.208,2072,18.275,2073,5.208,2074,5.208,2075,5.208,2076,9.438,2077,5.208,2078,5.208,2079,5.208,2080,5.208,2081,8.382,2082,5.208,2083,5.208,2084,5.208,2085,5.208,2086,5.208,2087,5.208,2088,5.208,2089,5.208,2090,5.208,2091,5.208,2092,5.208,2093,5.208,2094,9.438,2095,5.208,2096,5.208]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[502,11.136,1296,12.627,1522,15.478,1670,13.582,1826,14.763]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[4,2.482,59,13.192,78,17.3,90,13.192,108,15.046,118,9.514,141,11.489,142,9.948,144,10.928,338,14.044,343,12.449,415,13.192,441,11.792,450,10.667,502,12.808,1000,14.524,1135,10.417,1210,11.792,1219,12.808,1296,21.308,1312,13.685,1323,16.261,1324,14.524,1333,17.33,1335,15.621,1343,14.524,1345,14.044,1363,16.261,1381,17.802,1450,14.524,1456,17.802,1486,19.915,1507,17.802,1522,23.387,1567,21.362,1599,17.802,1639,17.802,1670,25.281,1826,22.307,1891,21.359,1909,21.359,1943,21.359,2062,30.6,2097,26.228,2098,26.228]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.308]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.061,4,2.482,24,5.902,41,18.871,48,11.237,95,13.192,448,13.602,765,16.261,2099,21.359,2100,21.359,2101,21.359,2102,26.228,2103,26.228,2104,26.228,2105,26.228,2106,26.228,2107,26.228,2108,26.228,2109,26.228,2110,26.228,2111,26.228,2112,26.228,2113,34.456,2114,23.293,2115,26.228,2116,26.228,2117,26.228,2118,26.228,2119,26.228]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.308]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.008,24,6.363,34,8.711,50,9.89,95,13.714,448,22.288,1312,10.829,1318,16.24,2120,22.205,2121,22.205,2122,22.205,2123,22.205,2124,22.205,2125,22.205,2126,22.205,2127,22.205,2128,22.205,2129,22.205,2130,22.205,2131,24.215,2132,27.266,2133,27.266,2134,27.266,2135,27.266,2136,27.266,2137,27.266,2138,27.266,2139,27.266,2140,24.215,2141,27.266,2142,27.266]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.308]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.024,24,5.106,95,16.743,448,17.264,765,20.638,2143,33.289,2144,33.289,2145,40.034,2146,33.289,2147,33.289]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.308]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.051,24,5.967,95,15.971,184,20.558,185,20.558,512,22.716,765,19.687,2148,31.755,2149,31.755,2150,31.755,2151,31.755,2152,31.755,2153,31.755]],["docTitle/docs/iota-go/0.1/references/cda-faq",[2154,35.485]],["docBody/docs/iota-go/0.1/references/cda-faq",[0,2.741,41,15.697,448,17.629,2154,23.073,2155,27.683,2156,27.683,2157,33.014,2158,27.683,2159,27.683,2160,27.683,2161,27.683,2162,27.683,2163,27.683,2164,27.683]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.308]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.057,4,2.784,24,5.692,41,18.767,48,9.598,165,9.799,448,19.245,765,18.245,1422,17.528,2099,23.966,2100,23.966,2101,23.966,2165,29.429,2166,29.429,2167,29.429,2168,29.429,2169,29.429,2170,29.429]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.308]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,2.924,4,2.67,24,6.446,34,9.017,50,10.238,448,24.451,2120,22.984,2121,22.984,2122,22.984,2123,22.984,2124,22.984,2125,22.984,2126,22.984,2127,22.984,2128,22.984,2129,22.984,2130,22.984,2140,25.065,2171,25.065,2172,25.065,2173,28.224,2174,28.224,2175,28.224,2176,28.224]],["docTitle/docs/iota-java/0.1/references/cda-faq",[2154,35.485]],["docBody/docs/iota-java/0.1/references/cda-faq",[0,2.741,41,15.697,448,17.629,2154,23.073,2155,27.683,2156,27.683,2157,33.014,2158,27.683,2159,27.683,2160,27.683,2161,27.683,2162,27.683,2163,27.683,2164,27.683]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.308]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.042,4,2.854,24,4.627,34,9.638,41,17.403,48,9.838,184,19.529,448,19.545,765,18.702,1298,20.475,2099,24.566,2100,24.566,2101,24.566,2114,26.79,2177,30.166,2178,30.166,2179,30.166,2180,30.166,2181,30.166]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.308]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,2.937,4,2.734,24,6.182,34,9.233,50,10.483,448,23.841,2120,23.535,2121,23.535,2122,23.535,2123,23.535,2124,23.535,2125,23.535,2126,23.535,2127,23.535,2128,23.535,2129,23.535,2130,23.535,2171,25.666,2172,25.666,2182,28.9,2183,28.9,2184,28.9,2185,28.9,2186,28.9,2187,28.9]],["docTitle/docs/iota-js/0.1/references/cda-faq",[2154,35.485]],["docBody/docs/iota-js/0.1/references/cda-faq",[0,2.741,41,15.697,448,17.629,2154,23.073,2155,27.683,2156,27.683,2157,33.014,2158,27.683,2159,27.683,2160,27.683,2161,27.683,2162,27.683,2163,27.683,2164,27.683]],["docTitle/docs/general/0.1/introduction/overview",[67,25.58,1325,24.496]],["docBody/docs/general/0.1/introduction/overview",[4,3.856,67,24.116,485,22.483,495,18.357,922,18.357,1097,18.357,1135,11.76,1303,20.098,1310,15.356,1311,15.855,1312,14.795,1325,18.357,1327,16.986,1338,19.169,1344,16.396,1345,15.855,1437,17.636,1454,21.181,1481,18.357,1483,24.116,1571,20.098,1645,21.181,1683,17.636,1719,21.181,1765,22.483,1876,24.113,2004,26.296,2188,37.251,2189,29.61,2190,22.483,2191,29.61,2192,29.61]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[926,14.699,1339,15.811,1340,18.989,1425,21.618]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,0.478,4,0.714,51,11.142,54,4.18,59,13.004,60,11.522,69,11.937,70,11.817,72,18.479,74,4.887,78,9.355,86,4.496,95,6.601,121,7.254,144,3.145,152,5.123,154,5.123,184,4.887,185,15.258,186,19.509,197,10.794,343,15.226,415,3.796,432,4.496,502,6.409,504,5.605,516,6.147,539,7.267,561,14.875,733,6.147,750,5.4,769,30.378,784,6.147,860,4.68,907,6.409,910,4.042,919,15.755,922,8.136,926,19.378,944,11.817,951,5.4,970,5.731,1097,10.794,1122,6.806,1176,8.756,1219,3.686,1290,10.369,1293,5.123,1300,6.704,1310,9.029,1312,8.264,1318,4.496,1320,5.123,1322,6.147,1327,4.33,1333,3.796,1339,23.315,1340,22.947,1343,4.18,1344,7.267,1345,7.027,1346,15.259,1350,5.123,1354,7.816,1355,7.267,1361,5.4,1363,10.794,1365,9.641,1366,4.887,1372,6.704,1380,11.817,1383,5.731,1384,8.908,1387,8.908,1389,5.4,1390,5.123,1391,5.4,1394,8.496,1395,6.704,1403,4.496,1406,6.147,1407,5.731,1411,6.704,1414,5.731,1415,10.687,1416,11.655,1425,19.193,1430,12.454,1434,8.496,1435,4.887,1437,4.496,1447,23.752,1454,9.388,1458,13.22,1483,15.258,1502,5.731,1504,5.731,1505,8.496,1506,5.4,1567,16.029,1568,14.885,1571,5.123,1634,22.961,1641,5.123,1660,5.123,1683,4.496,1694,5.4,1700,5.731,1712,6.704,1733,9.388,1735,5.123,1738,6.704,1741,5.731,1749,5.731,1783,5.731,1820,6.704,1842,18.495,1899,6.704,1920,15.462,1927,6.704,1934,5.731,1938,5.4,1960,6.704,1962,6.704,1986,6.147,1991,15.462,1998,5.123,2048,6.704,2054,6.704,2059,5.731,2072,11.655,2190,13.22,2193,6.704,2194,31.078,2195,33.934,2196,20.808,2197,34.133,2198,29.423,2199,7.548,2200,7.548,2201,7.548,2202,7.548,2203,7.548,2204,6.147,2205,6.704,2206,6.147,2207,21.055,2208,18.479,2209,6.704,2210,7.548,2211,7.548,2212,6.704,2213,5.731,2214,13.124,2215,7.548,2216,15.462,2217,7.548,2218,7.548,2219,7.548,2220,7.548,2221,7.548,2222,7.548,2223,23.568,2224,7.548,2225,27.78,2226,20.808,2227,7.548,2228,23.568,2229,13.124,2230,7.548,2231,6.147,2232,13.124,2233,7.548,2234,7.548,2235,7.548,2236,17.41,2237,7.548,2238,7.548,2239,13.124,2240,13.124,2241,6.704,2242,7.548,2243,7.548,2244,7.548]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[51,10.702,1310,10.365,1311,10.702,1567,12.391,1641,13.566,2206,16.276]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,0.58,4,0.868,34,2.93,51,23.837,54,16.96,57,3.917,59,4.612,60,8.588,69,13.594,77,5.462,78,10.654,81,7.468,85,5.685,95,7.8,103,6.56,121,3.821,141,4.017,185,5.937,186,12.234,197,14.691,313,6.963,320,6.56,338,8.304,343,15.282,495,9.615,504,14.814,539,16.96,540,5.685,561,8.304,663,6.56,733,21.577,751,7.468,769,18.953,860,12.493,907,4.478,910,10.79,919,10.79,922,5.685,951,6.56,963,11.775,970,6.963,1122,14.915,1170,5.937,1176,14.464,1207,18.618,1210,9.059,1231,6.963,1293,6.224,1298,10.526,1299,5.937,1310,12.289,1311,8.304,1312,13.319,1330,5.462,1333,4.612,1334,8.304,1344,5.078,1346,4.756,1350,6.224,1354,19.973,1361,6.56,1363,5.685,1365,5.078,1368,5.462,1382,6.56,1384,6.224,1390,6.224,1403,5.462,1406,7.468,1407,20.118,1430,6.56,1432,8.144,1434,18.618,1437,5.462,1438,7.468,1447,6.224,1449,11.775,1450,5.078,1451,8.144,1455,7.468,1458,17.993,1460,8.144,1465,10.04,1476,5.937,1483,13.045,1504,6.963,1505,5.937,1506,6.56,1507,6.224,1508,8.144,1541,6.963,1551,11.094,1567,27.087,1572,11.775,1630,7.8,1640,17.983,1641,22.761,1683,5.462,1689,8.144,1694,14.414,1704,7.468,1733,14.414,1803,6.963,1806,6.963,1827,6.56,1830,11.775,1831,8.144,1840,6.963,1902,7.468,1934,21.837,1938,11.094,1986,7.468,2012,6.963,2049,8.144,2059,6.963,2190,11.775,2194,8.144,2205,8.144,2206,27.309,2207,12.629,2209,8.144,2245,16.084,2246,9.17,2247,6.56,2248,9.17,2249,9.17,2250,9.17,2251,9.17,2252,8.144,2253,9.17,2254,9.17,2255,9.17,2256,12.629,2257,9.17,2258,8.144,2259,9.17,2260,13.773,2261,9.17,2262,9.17,2263,15.508,2264,7.468,2265,9.17,2266,9.17,2267,6.963,2268,9.17,2269,9.17,2270,23.42,2271,8.144,2272,24.224,2273,9.17,2274,9.17,2275,9.17,2276,9.17,2277,23.697,2278,9.17,2279,9.17,2280,9.17,2281,8.144,2282,19.298]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[1310,11.826,1311,12.211,1313,17.315,1480,17.315,2245,15.478]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,1.654,4,0.568,24,2.228,50,2.176,51,9.459,53,4.555,57,2.562,59,3.017,60,5.935,65,4.555,68,17.496,70,4.072,74,11.436,77,3.573,78,12.996,86,3.573,103,10.391,121,8.456,154,11.989,185,13.139,186,16.449,197,9.005,251,5.328,338,9.459,343,17.171,502,2.93,504,6.204,511,5.328,512,10.391,539,5.935,561,7.778,630,11.829,750,4.291,769,23.53,784,8.728,860,3.719,907,9.911,910,17.158,911,9.404,919,18.755,925,3.441,926,8.044,1000,5.935,1122,16.132,1151,4.555,1171,8.728,1173,4.291,1194,23.54,1201,4.885,1210,2.697,1281,4.072,1293,4.072,1298,18.736,1303,4.072,1310,16.132,1311,14.781,1312,13.064,1313,13.413,1315,7.306,1318,6.383,1323,12.582,1339,18.526,1340,10.391,1343,17.744,1344,3.322,1345,3.212,1346,14.316,1349,4.885,1351,4.291,1360,5.328,1361,14.518,1363,15.163,1374,4.885,1379,4.072,1381,7.274,1386,11.829,1394,3.884,1398,3.884,1403,6.383,1407,11.029,1418,4.885,1426,4.555,1430,4.291,1433,13.413,1434,9.404,1435,6.938,1438,4.885,1444,7.274,1445,3.719,1447,18.736,1450,5.935,1453,8.728,1454,4.291,1456,21.113,1464,5.328,1465,6.938,1468,7.667,1473,8.138,1480,17.109,1483,14.587,1485,11.829,1507,7.274,1511,3.884,1515,6.644,1571,4.072,1585,5.328,1629,4.555,1630,3.017,1632,4.555,1640,9.859,1642,4.555,1645,4.291,1656,4.072,1660,4.072,1671,4.555,1683,6.383,1691,4.885,1694,17.496,1700,17.109,1704,4.885,1707,5.328,1735,4.072,1736,4.885,1743,5.328,1749,4.555,1783,15.41,1806,13.413,1809,5.328,1825,5.328,1830,4.555,1835,7.667,1842,7.667,1875,4.885,1881,8.728,1888,8.728,1897,4.885,1938,7.667,1992,4.885,2005,5.328,2027,5.328,2029,5.328,2044,12.9,2047,5.328,2059,8.138,2064,4.885,2131,5.328,2190,8.138,2195,18.024,2204,4.885,2208,18.024,2213,4.555,2216,12.9,2245,13.775,2252,5.328,2256,4.885,2258,5.328,2272,18.736,2283,40.565,2284,10.717,2285,5.328,2286,5.999,2287,5.999,2288,5.999,2289,5.999,2290,5.999,2291,5.999,2292,5.999,2293,5.999,2294,5.999,2295,17.109,2296,5.999,2297,26.134,2298,29.212,2299,20.295,2300,5.999,2301,5.999,2302,5.999,2303,15.687,2304,15.687,2305,9.518,2306,5.999,2307,10.717,2308,5.328,2309,14.526,2310,10.717,2311,10.717,2312,10.717,2313,10.717,2314,10.717,2315,5.999,2316,10.717,2317,5.999,2318,5.999,2319,5.999,2320,15.687,2321,14.526,2322,5.999,2323,11.829,2324,5.999,2325,5.999,2326,5.999,2327,5.999,2328,5.999,2329,5.999,2330,5.999,2331,5.999,2332,5.999,2333,5.999,2334,5.999,2335,14.526,2336,10.717,2337,17.664,2338,5.999,2339,5.999,2340,10.717,2341,5.999,2342,5.999,2343,5.999,2344,5.999,2345,5.999,2346,5.999,2347,5.999,2348,5.999,2349,5.999,2350,5.999,2351,5.999,2352,5.999,2353,5.999]],["docTitle/docs/general/0.1/references/troubleshooting",[2354,46.43]],["docBody/docs/general/0.1/references/troubleshooting",[69,18.966,451,20.497,540,20.497,664,30.273,860,20.497,1127,29.361,1173,23.65,1355,18.307,1365,18.307,1391,23.65,1630,16.628,2213,25.103,2245,22.44,2260,29.361,2354,29.361,2355,33.061,2356,33.061,2357,33.061,2358,26.924,2359,33.061]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,2.512,1539,20.156,1636,17.185,2360,23.575]],["docBody/docs/smartcity/0.1/introduction/overview",[4,3.331,34,8.662,118,9.835,121,14.671,142,10.283,415,13.637,441,12.189,445,21.654,926,19.498,1135,10.768,1296,15.013,1303,18.403,1312,10.768,1314,14.061,1315,13.637,1324,15.013,1334,14.518,1338,17.553,1347,19.395,1412,19.395,1481,16.809,1515,16.809,1539,26.736,1542,18.403,1559,20.587,1560,20.587,1630,13.637,1636,17.553,1687,18.403,1840,20.587,1842,19.395,1890,20.587,1995,22.08,1998,18.403,2264,22.08,2360,31.27,2361,27.113,2362,24.078,2363,24.078,2364,27.113,2365,24.078,2366,24.078,2367,24.078,2368,27.113,2369,24.078,2370,27.113]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[445,28.95]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[77,10.803,78,8.155,90,9.123,98,12.311,108,10.406,118,6.579,121,7.558,141,7.946,142,10.107,320,12.975,441,14.202,442,13.773,443,12.311,445,23.625,504,11.382,539,10.044,926,14.757,1124,14.771,1135,15.402,1218,14.771,1219,8.858,1221,10.406,1241,10.044,1242,13.773,1247,16.109,1285,19.063,1296,10.044,1301,12.975,1307,12.975,1311,9.713,1312,13.829,1314,13.821,1315,13.403,1319,20.235,1326,11.743,1338,20.451,1347,12.975,1412,19.063,1413,14.771,1466,21.442,1481,11.245,1505,11.743,1559,13.773,1560,13.773,1568,12.975,1762,32.941,1764,16.109,1830,13.773,1835,12.975,1840,13.773,1842,12.975,1897,14.771,1915,14.771,1917,14.771,1958,12.975,1995,14.771,1998,12.311,2213,13.773,2245,12.311,2247,12.975,2264,14.771,2362,23.667,2363,16.109,2365,16.109,2366,16.109,2367,16.109,2371,18.139,2372,18.139,2373,18.139,2374,26.533,2375,24.907,2376,23.667,2377,18.139,2378,18.139,2379,18.139,2380,18.139,2381,23.667,2382,18.139,2383,18.139,2384,18.139,2385,18.139,2386,18.139,2387,18.139,2388,18.139,2389,18.139,2390,18.139,2391,18.139,2392,18.139,2393,18.139,2394,18.139,2395,18.139,2396,16.109,2397,16.109,2398,16.109,2399,16.109,2400,16.109]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[445,21.88,1285,28.265]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[57,12.164,75,26.007,77,9.093,78,6.864,86,9.093,121,6.361,152,10.363,338,15.251,343,15.158,443,10.363,445,15.771,504,10,539,12.966,540,17.657,1122,12.143,1123,11.593,1166,12.433,1170,15.158,1171,12.433,1176,7.679,1207,9.884,1249,20.794,1285,10.921,1290,9.093,1312,9.3,1314,22.38,1315,21.704,1342,15.158,1344,8.454,1345,8.175,1368,13.946,1373,10.363,1408,12.433,1428,17.779,1434,15.158,1445,17.657,1447,15.892,1480,17.779,1483,15.158,1484,20.794,1485,19.068,1540,12.433,1632,26.153,1656,10.363,1668,9.465,1702,16.749,1708,17.779,1749,11.593,1771,15.892,1827,10.921,1829,12.433,1910,11.593,1924,13.559,2052,13.559,2245,10.363,2247,10.921,2256,12.433,2267,11.593,2272,15.892,2282,12.433,2285,20.794,2295,17.779,2298,25.293,2303,13.559,2304,20.794,2323,19.068,2369,13.559,2374,20.373,2375,20.373,2401,15.267,2402,15.267,2403,11.593,2404,12.433,2405,23.415,2406,15.267,2407,23.415,2408,15.267,2409,31.936,2410,31.936,2411,25.293,2412,28.481,2413,15.267,2414,15.267,2415,20.794,2416,23.415,2417,23.415,2418,15.267,2419,15.267,2420,15.267,2421,15.267,2422,15.267,2423,13.559,2424,15.267,2425,15.267,2426,15.267,2427,15.267,2428,15.267,2429,13.559,2430,11.593,2431,23.415]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[445,21.88,504,16.875]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,1.944,4,2.649,54,17.007,68,8.606,69,6.901,77,11.56,78,10.969,83,10.864,86,11.56,89,7.165,90,12.271,95,6.051,121,8.087,141,5.27,142,4.563,154,8.165,187,9.797,197,19.041,343,9.213,415,14.081,417,7.788,437,7.458,441,5.408,445,18.184,504,10.42,539,22.664,579,9.134,845,15.806,874,8.606,910,14.991,925,11.135,926,6.661,963,18.526,1000,10.748,1122,6.239,1151,9.134,1176,9.762,1194,15.806,1207,12.565,1218,9.797,1289,9.134,1310,14.519,1314,18.643,1315,17.375,1323,15.126,1329,7.458,1333,6.051,1335,16.674,1342,12.565,1344,6.661,1345,10.393,1350,13.174,1354,14.531,1355,15.503,1356,14.738,1358,8.165,1361,8.606,1365,10.748,1391,13.884,1428,9.134,1433,9.134,1434,7.788,1437,7.165,1445,7.458,1456,8.165,1461,15.806,1468,8.606,1476,7.788,1506,8.606,1515,7.458,1630,6.051,1668,15.126,1702,13.884,1708,9.134,1719,17.453,1720,15.806,1734,9.797,1741,21.258,1803,14.738,1806,9.134,1895,9.797,1896,10.684,1932,10.684,1934,18.526,2012,9.134,2026,10.684,2034,10.684,2193,10.684,2204,9.797,2207,9.797,2231,19.869,2247,8.606,2270,15.806,2272,13.174,2282,9.797,2295,18.526,2308,10.684,2323,9.797,2358,9.797,2374,27.263,2375,27.263,2403,9.134,2404,9.797,2411,17.237,2415,10.684,2423,17.237,2430,21.258,2432,12.03,2433,12.03,2434,19.409,2435,12.03,2436,12.03,2437,12.03,2438,12.03,2439,19.409,2440,12.03,2441,12.03,2442,12.03,2443,19.409,2444,12.03,2445,12.03,2446,19.409,2447,12.03,2448,12.03,2449,19.409,2450,12.03,2451,12.03,2452,12.03,2453,12.03,2454,12.03,2455,12.03,2456,12.03,2457,12.03,2458,19.409,2459,9.797,2460,10.684]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[343,10.824,1314,11.826,1315,11.469,1343,12.627,2272,15.478]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[57,8.695,59,14.571,60,16.042,78,15.163,118,7.385,180,16.58,186,16.966,338,10.902,343,16.008,437,17.961,445,11.274,504,14.404,539,11.274,750,14.564,769,24.126,910,10.902,919,10.902,1176,19.527,1290,12.126,1312,8.086,1314,21.529,1315,20.879,1330,12.126,1342,13.18,1343,11.274,1346,10.559,1354,12.126,1355,11.274,1363,12.622,1368,12.126,1373,13.819,1382,14.564,1398,13.18,1403,12.126,1428,15.459,1435,18.755,1444,13.819,1445,12.622,1491,18.081,1668,17.961,1803,15.459,1834,18.081,1910,21.998,2012,21.998,2231,31.617,2247,14.564,2267,21.998,2271,29.952,2272,22.891,2295,15.459,2358,16.58,2374,14.564,2375,14.564,2403,15.459,2404,16.58,2429,18.081,2430,21.998,2459,16.58,2461,28.971,2462,28.971,2463,28.971,2464,20.359,2465,20.359,2466,20.359,2467,20.359]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[445,21.88,1958,28.265]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[4,1.582,28,5.044,54,5.553,59,5.044,60,13.89,66,6.217,67,6.492,108,14.39,118,6.064,119,5.37,121,8.957,141,17.357,142,10.572,154,11.347,182,7.615,186,9.927,193,8.167,197,6.217,263,7.615,338,5.37,419,8.167,441,17.55,442,7.615,443,6.807,445,19.238,459,8.906,462,16.323,495,6.217,502,4.897,561,8.952,825,8.906,907,4.897,910,5.37,911,10.823,919,8.952,926,9.257,963,12.694,987,8.167,991,5.553,1097,6.217,1098,14.847,1135,15.737,1176,8.408,1184,8.906,1219,4.897,1221,12.333,1242,16.323,1246,13.614,1290,5.973,1296,5.553,1310,11.149,1311,8.952,1312,12.682,1314,5.201,1315,5.044,1318,5.973,1319,24.246,1320,14.591,1321,8.167,1327,5.753,1328,15.99,1329,10.365,1330,5.973,1333,5.044,1338,6.492,1342,10.823,1350,6.807,1351,7.174,1353,12.694,1356,21.164,1362,7.615,1363,10.365,1365,5.553,1366,10.823,1369,13.614,1380,14.591,1381,6.807,1389,11.959,1394,6.492,1403,5.973,1412,7.174,1413,8.167,1422,5.973,1442,8.167,1444,11.347,1450,9.257,1452,8.906,1466,20.434,1468,7.174,1476,6.492,1490,8.906,1502,19.046,1506,7.174,1510,7.615,1568,7.174,1570,7.615,1630,5.044,1642,7.615,1720,8.167,1741,7.615,1748,20.427,1771,14.591,1873,12.694,1880,14.847,1912,19.092,1915,13.614,1917,20.427,1919,8.906,1958,11.959,1998,17.025,2064,22.699,2069,14.847,2081,8.906,2212,8.906,2241,14.847,2267,7.615,2270,8.167,2281,14.847,2305,8.906,2320,14.847,2374,24.852,2375,23.931,2376,8.906,2381,19.092,2396,8.906,2397,8.906,2398,8.906,2399,8.906,2400,8.906,2403,7.615,2430,12.694,2459,26.004,2460,26.736,2468,21.498,2469,10.029,2470,30.105,2471,10.029,2472,21.498,2473,16.718,2474,10.029,2475,10.029,2476,16.718,2477,10.029,2478,10.029,2479,16.718,2480,10.029,2481,10.029,2482,16.718,2483,10.029,2484,10.029,2485,10.029,2486,10.029,2487,16.718,2488,10.029,2489,10.029,2490,10.029,2491,10.029,2492,10.029,2493,10.029,2494,10.029,2495,10.029,2496,10.029,2497,10.029,2498,10.029]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-faq":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["0",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["0.2",{"_index":2486,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["01",{"_index":2221,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0またはvalu",{"_index":844,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":428,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":366,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["1.0",{"_index":2405,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":514,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["10.197.0.57",{"_index":2338,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.197.3.57",{"_index":2342,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":961,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":972,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["100",{"_index":647,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":651,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["10:57:54.417129",{"_index":982,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10gb",{"_index":816,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1128,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":261,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":262,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":852,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":284,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1528,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2425,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["115200",{"_index":2332,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["120",{"_index":783,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["127.0.0.1",{"_index":2211,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["128",{"_index":1614,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1615,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["13",{"_index":2484,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["13906",{"_index":983,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["14265",{"_index":671,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["14600",{"_index":668,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["16",{"_index":2345,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45日間マイルストーンを送信できます。マイルストーン送信の間隔は2",{"_index":1132,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["17.05",{"_index":739,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["18.04",{"_index":951,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["18でiri",{"_index":861,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["1i",{"_index":1248,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":351,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1222,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["1つが81トライトのセグメントに分割されます。その後、各セグメントは26",{"_index":243,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1610,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":2175,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":253,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのアドレスを導出するために使用されます。秘密鍵とアドレスは1対1のペアと考えることができます。アドレスは公開されており、クライアントはトランザクションのアドレスフィールドを使用してiotaトークンとメッセージを送信できます。秘密鍵は秘密であり、アドレスからiota",{"_index":237,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのキーダイジェストを導出するために1回ハッシュ化されます。たとえば、1つのキーフラグメントによって1",{"_index":246,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つの頂点を表す一種の有向非巡回グラフ（dag",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["1つは、iota",{"_index":228,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1234,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["1と2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1と2",{"_index":392,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":289,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["1に接続され、トランザクション1はトランザクション2",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1のアドレスから80i",{"_index":270,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":1001,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":388,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1より大きい場合、署名は1",{"_index":264,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":371,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1回でもiota",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1532,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化され、81",{"_index":247,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":258,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1度iotaトークンを取り出したアドレスからは2度とiotaトークンを取り出してはいけません。したがって、転送バンドルでは、iotaトークンを取り出したアドレスの残りのiota",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1度吸収し、セキュリティレベルごとに27回圧搾します（セキュリティレベル1だと27回、セキュリティレベル2だと54回、セキュリティレベル3だと81",{"_index":241,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":835,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":848,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":312,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["2,187、4,374、または6,561",{"_index":242,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,187、4374、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントがあります。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。これは27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":245,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":574,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1607,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1260,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1164,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["2.7piのiota",{"_index":1149,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["20",{"_index":1440,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":877,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["2015",{"_index":1531,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016",{"_index":2424,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1597,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1533,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20mi",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2128",{"_index":1616,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1618,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":784,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["243",{"_index":881,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["24を指定すると、コンパスは31年以上にわたってマイルストーンを送信できますが、マークル木を作成するには長い時間がかかります。深さ8",{"_index":1134,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["25",{"_index":2426,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1620,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["255",{"_index":2212,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["255.255.0.0",{"_index":2343,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["255.255.255.0",{"_index":2339,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256",{"_index":2340,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256\\*256",{"_index":2349,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2673",{"_index":342,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":244,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27、54、または81",{"_index":254,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27、54、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":257,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":255,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2944.17",{"_index":2351,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2gb",{"_index":815,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16",{"_index":2344,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":412,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":413,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":399,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2",{"_index":393,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクション（マイルストーンのセキュリティレベルが2",{"_index":390,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":2102,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの末尾トランザクションの1つにも接続されています。）この2",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1033,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1036,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの親を参照する必要があります。トランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドやバンドル内の最後のトランザクションのbranchtransactionフィールドとtrunktransact",{"_index":233,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":401,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":347,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":271,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":344,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/security-levels":{}}}],["2人のユーザー間で転送を発行します（processtransf",{"_index":1056,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["2回以上トークンを取り出してはいけません。したがって、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":265,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2度とiota",{"_index":938,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":314,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2種類のリスナーがあります。1つはチャネルを使用するもので、もう1",{"_index":2144,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":287,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["3",{"_index":57,"docTitle":{"docs/iota-basics/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/trinary":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3+)とpip",{"_index":792,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":263,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["3000",{"_index":2063,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["30mi",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["30秒ごとに、transfer",{"_index":2115,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1009,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":356,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["384ハッシュ関数を使用してシードとインデックスを足し合わせたものをハッシュ化し、81",{"_index":240,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["3\\*8",{"_index":2215,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["3x8=24",{"_index":2341,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["3つの0のトリット（000トリット）がトライトの9",{"_index":427,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":364,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3のアドレスから80i",{"_index":272,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1192,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":370,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法3",{"_index":369,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":288,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["4",{"_index":62,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1259,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":439,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["400",{"_index":878,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["401",{"_index":909,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["4gb",{"_index":662,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["4x3",{"_index":2406,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、数式：2depthのdepthによって定まります。上の図では、マークル木の深さは2",{"_index":380,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["4のiri",{"_index":692,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1030,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1141,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["5",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["50",{"_index":1187,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["50,000",{"_index":657,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":659,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["55mi",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3に関連付けられています。したがって、トランザクション5はトランザクション2と3",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["64",{"_index":664,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1190,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/node-quorum":{}}}],["6か7",{"_index":865,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6でiota",{"_index":1002,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親です。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":375,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["6はトランザクション5（および表示されていない別のトランザクション）に接続されています。そのため、トランザクション6はトランザクション5を介して間接的にトランザクション3",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["7",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["8",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":791,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":2368,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["81",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/references/glossary":{},"docs/tools/0.1/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":903,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":230,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1126,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["8、またはnode.j",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["9",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90文字です。余分な9",{"_index":225,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["990,100",{"_index":649,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["9999",{"_index":1010,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1530,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9個（デブネット上のmwm）または7個（スパムネット上のmwm）の0",{"_index":277,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":352,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1807,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abil",{"_index":1773,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["abov",{"_index":2081,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["absent",{"_index":908,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["acceler",{"_index":2385,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["acceleromet",{"_index":2384,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["accept",{"_index":1695,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["access",{"_index":1660,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["accord",{"_index":2068,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["account",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["account.send()メソッドに渡して、使用可能な残高の合計をcda",{"_index":2176,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["account.shutdown",{"_index":2118,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["achiev",{"_index":1756,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["acquir",{"_index":2051,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["act",{"_index":1474,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["action",{"_index":1976,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["actual",{"_index":1820,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["acycl",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["ad",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["adapt",{"_index":1298,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["add",{"_index":1435,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["addit",{"_index":1656,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["addition",{"_index":1768,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["addneighbor",{"_index":871,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["addneighbors(uri",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-errors":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["addresscountaggreg",{"_index":850,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["address、obsoletetag、timestamp、value、currentindex、およびlastindex",{"_index":426,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["administr",{"_index":2235,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advanc",{"_index":2239,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advantag",{"_index":1682,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["affect",{"_index":1421,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["again",{"_index":1464,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["against",{"_index":1937,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["aggreg",{"_index":1766,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["aid",{"_index":2366,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["aim",{"_index":2189,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["algorithm",{"_index":1922,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["alloc",{"_index":1824,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["allow",{"_index":1327,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":853,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["alon",{"_index":2408,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["alongsid",{"_index":2082,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["alpha",{"_index":397,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":409,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alreadi",{"_index":1300,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["alter",{"_index":1856,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["altern",{"_index":1726,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["although",{"_index":1625,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["alway",{"_index":751,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amazon",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amongst",{"_index":1778,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["amount",{"_index":1231,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amp;lt;packag",{"_index":598,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1216,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["anoth",{"_index":1468,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyon",{"_index":1362,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyth",{"_index":2192,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["apach",{"_index":515,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":48,"docTitle":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/database-tables":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["apiがあります。api",{"_index":227,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1057,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":918,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1040,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":870,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1028,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1144,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["apiを使い始めるでgrpc",{"_index":1116,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["apiを使用しているため、すべてのzmq",{"_index":813,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを通してiri",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiを通して、ハブはiotaトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、id",{"_index":933,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1162,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":618,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["apiメソッドの詳細については、api",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":867,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":900,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":719,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":754,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":402,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":400,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["app",{"_index":1826,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["appear",{"_index":1352,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{}}}],["append",{"_index":2073,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["appli",{"_index":1927,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["applic",{"_index":1210,"docTitle":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["applications/utilities/termin",{"_index":1205,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["appnam",{"_index":2455,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["approach",{"_index":2254,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["appvers",{"_index":2456,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":953,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":950,"docTitle":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["archive（ppa",{"_index":964,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["area",{"_index":1841,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["aren't",{"_index":2004,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}}}],["argon2",{"_index":934,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["argument",{"_index":2317,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["arm64",{"_index":591,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armbian",{"_index":2306,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["around",{"_index":1492,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["arrow",{"_index":1979,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["artimaガイドはjreでscala",{"_index":820,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":293,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iri/0.1/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["asciitotrytes(json.stringify(data",{"_index":2091,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":296,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1215,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["ask",{"_index":1825,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["asset",{"_index":1943,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["assetcustodianid",{"_index":2041,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":2040,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1213,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueid",{"_index":2043,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assign",{"_index":2200,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["associ",{"_index":1782,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assum",{"_index":1896,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["astronaut",{"_index":2372,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropi",{"_index":2362,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiota",{"_index":445,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiota'",{"_index":2493,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["attach",{"_index":1170,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["attachmenttimestamp",{"_index":282,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":879,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["authent",{"_index":1241,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["author",{"_index":1879,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["autoconfirm",{"_index":339,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["autom",{"_index":1626,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["automat",{"_index":1932,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["avail",{"_index":911,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/tools/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["averag",{"_index":1780,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["avoid",{"_index":2202,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["avxベースのpow",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["aw",{"_index":2257,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awesom",{"_index":1270,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["awsまたはmicrosoft",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["aとは対照的に、トークンを複数のユーザーからコールドウォレットに移動するのはそれほど簡単ではありません。ただし、ハブにハブ所有者のアドレスの一部を無視させることは可能です。そのためには、hub_addressテーブル行のis_cold_storageフィールドを1に設定する必要があります。これにより、sweepservic",{"_index":1049,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["aに100mi",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["back",{"_index":1893,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["backcolour",{"_index":2488,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["background",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["backup",{"_index":1810,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["badgerdbを使用している場合は、def",{"_index":2106,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["badgerdbデータベースに格納されています。データベースディレクトリを保存するパスをdb",{"_index":2104,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["balanceev",{"_index":1060,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["balancesubscript",{"_index":1045,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balancesubscriptionrequest",{"_index":1061,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["bar",{"_index":1508,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["barometr",{"_index":2382,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["base",{"_index":1642,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["basi",{"_index":1794,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["basics/0.1/how",{"_index":803,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["batteri",{"_index":2419,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["baud",{"_index":2330,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bazel",{"_index":955,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["bazelを使ってビルドし、dock",{"_index":1129,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["be",{"_index":1919,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["beast.cc:65",{"_index":984,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["becom",{"_index":1857,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["befor",{"_index":1437,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["behavior",{"_index":2329,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["behind",{"_index":1913,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["belong",{"_index":1994,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["below",{"_index":1669,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["benefici",{"_index":2250,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["benefit",{"_index":1503,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["best",{"_index":416,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["beta",{"_index":1471,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["beta1",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["better",{"_index":2014,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["between",{"_index":419,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bigger",{"_index":2347,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bill",{"_index":1740,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["bin/hub/hub",{"_index":975,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1018,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1115,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["biometr",{"_index":1240,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{}}}],["bit",{"_index":2213,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["blake2",{"_index":1621,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1622,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["block",{"_index":2084,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["blue",{"_index":1184,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["blueprint",{"_index":1636,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["board",{"_index":1480,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["boost",{"_index":1843,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["boot",{"_index":2437,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["bootstrap",{"_index":501,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1157,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1159,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["bosch",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["both",{"_index":1394,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bottom",{"_index":2464,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["bounci",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1181,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["branchtransact",{"_index":281,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":880,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iri/0.1/concepts/the-ledger":{}}}],["branchtransactionフィールドとtrunktransact",{"_index":374,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュ値を参照して、トランザクション（子）を他の2",{"_index":231,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["break",{"_index":1402,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["bridg",{"_index":2276,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["broadcast",{"_index":1160,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["broadcastandstor",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":882,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["browser",{"_index":2237,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["bt",{"_index":2236,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":840,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":811,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":812,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1180,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["build",{"_index":1285,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["build.gradleファイルにiotaledg",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":831,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["built",{"_index":1438,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bundl",{"_index":269,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["bundle.md",{"_index":805,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["bundles、addresses、tags、approve",{"_index":886,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["busi",{"_index":1854,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["byte",{"_index":2336,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bがまだ存在していない場合は、ユーザーbがハブに作成されます（createus",{"_index":1055,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーa",{"_index":1054,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーaからiota",{"_index":1048,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["c",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1199,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["calcul",{"_index":1429,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["calibr",{"_index":2482,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["call",{"_index":1330,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["callback",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["can't",{"_index":1504,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["can’t",{"_index":1673,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["capabl",{"_index":1829,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["captur",{"_index":1910,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["card",{"_index":2304,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["carefulli",{"_index":2428,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["cartesian",{"_index":2393,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["case",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["castl",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1007,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaがまだアクティブであることを確認した後、sendtocda()メソッドを使用してioaトークンをcda",{"_index":2184,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":2128,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにパースするには、depositオブジェクトのparsemagnetlink",{"_index":2142,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send",{"_index":2173,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send()メソッドに渡すことで、予想量のiotaトークンをcda",{"_index":2138,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":2133,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの状態によって、cdaからiotaトークンを取り出すことができるのか、cdaにiota",{"_index":2171,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは81",{"_index":2100,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":2132,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。その結果、cda",{"_index":2122,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、それらを任意の形式にシリアル化して配布することができます。たとえば、timeout_at、multi_use、およびexpected_amountの各パラメータを使用して、cda",{"_index":2140,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaへiota",{"_index":2137,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":2136,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクとして使用するには、cdaをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":2185,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":2187,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":2141,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するには、cda",{"_index":2123,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを使用して、署名済みアドレスの再利用のリスクを軽減します。誰かにiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、あなたは送信者にあなたがその時間の後にだけcdaからiotaトークンを取り出すつもりであることを知らせます。その結果、送信者は、cdaの残り時間に応じて、iota",{"_index":2121,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値がなくなる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":2162,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaフィールドをgeneratecda",{"_index":2182,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cda）を使用する必要があります。cdaは、アカウント内のiota",{"_index":2120,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["celciu",{"_index":1489,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["celsiu",{"_index":1321,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["centigrad",{"_index":2474,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["central",{"_index":1814,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["certain",{"_index":2233,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["certif",{"_index":1203,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chain",{"_index":1862,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["challeng",{"_index":1861,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["chang",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channel",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channelroot",{"_index":2066,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey",{"_index":2067,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["checkconsist",{"_index":884,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["checkconsistency(transact",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":960,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["choos",{"_index":1831,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["chosen",{"_index":2033,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["chrome、firefox",{"_index":1604,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["chronolog",{"_index":2498,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["circl",{"_index":1981,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["circuit",{"_index":2285,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":834,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["citi",{"_index":2360,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["clean",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["click",{"_index":1934,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["client",{"_index":1450,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["client.crt、client.key、およびca.crt）をハブサーバーにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバーのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1023,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1027,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["clone",{"_index":1347,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["close",{"_index":2274,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloud",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloudflar",{"_index":1921,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["cmd+spacebar",{"_index":2279,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1013,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1267,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["codes.dag.sh",{"_index":1225,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["collect",{"_index":1494,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["color",{"_index":2491,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["column",{"_index":2238,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["combin",{"_index":1734,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["come",{"_index":2247,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["command",{"_index":910,"docTitle":{"docs/tools/0.1/one-command-tangle/overview":{}},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["command変数を別のapi",{"_index":793,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["common/flags/flags.h",{"_index":1100,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["commun",{"_index":1302,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["compact",{"_index":2291,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compani",{"_index":2049,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["compar",{"_index":1510,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["comparison",{"_index":418,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["compass",{"_index":1124,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1156,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["complet",{"_index":1454,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["complex",{"_index":1693,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["compon",{"_index":1702,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["compos",{"_index":1431,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1463,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["comput",{"_index":2245,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["concept",{"_index":1899,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["config.json",{"_index":1139,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1589,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1588,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1137,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["configur",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["confirm",{"_index":1419,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["confirmed.jsファイルでは、iota",{"_index":328,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["congratul",{"_index":2268,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["conjunct",{"_index":1818,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["connect",{"_index":343,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["consensu",{"_index":1777,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["consid",{"_index":1418,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["consist",{"_index":1890,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["consol",{"_index":1353,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["consolid",{"_index":1711,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["construct",{"_index":1495,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["consum",{"_index":1654,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["consumer'",{"_index":1819,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contact",{"_index":1977,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["contain",{"_index":1765,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{}}}],["content",{"_index":1852,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["context",{"_index":1799,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["continu",{"_index":1707,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["contract",{"_index":2022,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["contribut",{"_index":1744,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["control",{"_index":1367,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["convert",{"_index":1246,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["convertor",{"_index":2495,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["coordin",{"_index":2394,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["coordinates.net",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["copi",{"_index":1350,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cord",{"_index":2431,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["core",{"_index":306,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["cornerston",{"_index":1855,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["correct",{"_index":1749,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["correspond",{"_index":1884,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["cost",{"_index":2013,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["countri",{"_index":2026,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["cp2102",{"_index":2300,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["cpu",{"_index":1127,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/references/troubleshooting":{}}}],["creat",{"_index":59,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["createitem",{"_index":2093,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createitemchannel",{"_index":2087,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createuserrepli",{"_index":1062,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["createuserrequest",{"_index":1063,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["creation",{"_index":2061,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["cron",{"_index":2462,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crontab",{"_index":2429,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crud",{"_index":1796,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["cryptograph",{"_index":1876,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{}}}],["ctps1",{"_index":348,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ctrl",{"_index":828,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1019,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1035,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":876,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":353,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":354,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1245,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["current",{"_index":1320,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["currentindex",{"_index":326,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドと、バンドルの終わり（先頭トランザクション）を定義するlastindexフィールドの両方が与えられます。次に、先頭トランザクションを除くバンドル内の各トランザクションは、trunktransactionフィールドを介して互いに接続されます。次に、各トランザクションのaddress、value、obsoletetag、currentindex、lastindex、およびtimestampの各フィールドの値が、スポンジ関数によって吸収され圧搾され、81",{"_index":260,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":310,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["custodi",{"_index":1999,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["custodian",{"_index":1982,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["custom",{"_index":1958,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cut",{"_index":1822,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["cを押してrepl",{"_index":829,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1154,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":744,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":593,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":438,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["daemon",{"_index":1174,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":359,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["dag）であり、2015年にserguei",{"_index":372,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["danceなどのweb",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["danger:json.exception.parse_error.101",{"_index":979,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["danger:シードごとにアカウントを1",{"_index":2114,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["data",{"_index":1135,"docTitle":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["databas",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["data変数をasciitotryt",{"_index":295,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["date",{"_index":1413,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dave",{"_index":2398,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1008,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":691,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbfiles.iota.org",{"_index":869,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":695,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ddn",{"_index":2226,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["de",{"_index":2399,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":999,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["declar",{"_index":2020,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["decrypt",{"_index":1309,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dedic",{"_index":1902,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["default",{"_index":1806,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["defer",{"_index":2117,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["defin",{"_index":2056,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["degre",{"_index":2485,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["delet",{"_index":1761,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deliv",{"_index":1957,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["deliveri",{"_index":1967,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["demo",{"_index":1887,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["demonstr",{"_index":1637,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["deni",{"_index":1172,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["depend",{"_index":1349,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dependencies.jarという.jar",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["deploy",{"_index":1670,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["depth",{"_index":395,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-errors":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["depthパラメータの値を減らします。iri",{"_index":904,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1138,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["deregist",{"_index":1758,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deregistr",{"_index":1750,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["describ",{"_index":1668,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["descript",{"_index":1791,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["design",{"_index":2035,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["desktop",{"_index":1201,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["despit",{"_index":2025,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["detail",{"_index":1486,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["dev",{"_index":2086,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dev/ttyusb",{"_index":2327,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusbx",{"_index":2324,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1281,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["developer'",{"_index":2451,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["developブランチから新しいgit",{"_index":1268,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1280,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["devic",{"_index":1339,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["device'",{"_index":2234,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["devnet",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["devnet.thetangle.org",{"_index":319,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":337,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":2139,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":318,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetで自分のアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":2174,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetトークンは、mainnet",{"_index":1594,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1592,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":2101,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1238,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":709,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":790,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp",{"_index":2201,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1123,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["differ",{"_index":1733,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["difficult",{"_index":2002,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["digest",{"_index":305,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["digit",{"_index":1864,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dikw",{"_index":1526,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["dilig",{"_index":1942,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["direct",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["directli",{"_index":1708,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["directori",{"_index":1348,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["disconnect",{"_index":1409,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["discord",{"_index":106,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{}}}],["discordの#helpおよび#fullnod",{"_index":868,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1292,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":786,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["display",{"_index":1700,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dispos",{"_index":1988,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["distribut",{"_index":1640,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["distributor",{"_index":1956,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1206,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":2225,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["do",{"_index":1991,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":505,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナでiri",{"_index":730,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":734,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナも再起動するには、dock",{"_index":749,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする(#ビルド済みのiri",{"_index":736,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":735,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドする(#ソースコードからiri",{"_index":737,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":738,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、コンピュータはiriノード用のlinuxサーバーになり、iota",{"_index":731,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":748,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1140,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["document",{"_index":1515,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["doesn't",{"_index":2296,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["domain",{"_index":2223,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["don't",{"_index":1938,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["done",{"_index":1690,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dot",{"_index":1978,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["doubl",{"_index":2265,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["doubt",{"_index":2357,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["down",{"_index":2467,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["download",{"_index":1207,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["driver",{"_index":2458,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["dropdown",{"_index":2232,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duck",{"_index":2228,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["due",{"_index":1940,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["dure",{"_index":2472,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dynam",{"_index":1634,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["e",{"_index":1233,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["e.g",{"_index":2038,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["e0328",{"_index":981,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["each",{"_index":1476,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["earth",{"_index":2365,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earthquak",{"_index":2367,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earth’",{"_index":2391,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["easi",{"_index":1959,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["easier",{"_index":1635,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["easiest",{"_index":2436,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["easili",{"_index":1475,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["econom",{"_index":1963,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["edit",{"_index":1457,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["effect",{"_index":2242,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["effici",{"_index":2292,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["eloqu",{"_index":1658,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["embed",{"_index":1691,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["employ",{"_index":1685,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["enabl",{"_index":1720,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":636,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["encourag",{"_index":1676,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["encrypt",{"_index":1306,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["end",{"_index":1894,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["endeavor",{"_index":1664,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["endpoint",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["energi",{"_index":1517,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["english",{"_index":2439,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enough",{"_index":1442,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enter",{"_index":1458,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["entir",{"_index":1870,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["entiti",{"_index":1638,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["entri",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":405,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["enviro",{"_index":1478,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["environ",{"_index":1338,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":819,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1497,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["envis",{"_index":2003,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["equilibria",{"_index":414,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["error",{"_index":987,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["errorcod",{"_index":1092,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["error。例：status::cancel",{"_index":1064,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["establish",{"_index":2277,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["eth",{"_index":2313,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ethernet",{"_index":2297,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ev",{"_index":444,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":824,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["even",{"_index":1388,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{}}}],["event",{"_index":1467,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["event_logger.go",{"_index":2148,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":2145,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトでアカウントが開始されると、eventmachin",{"_index":2143,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":2149,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["everyth",{"_index":1935,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ev）の充電料金をiota",{"_index":440,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exact",{"_index":2017,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["exampl",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["example&lt",{"_index":606,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":604,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exce",{"_index":1996,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["exchang",{"_index":2057,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["execut",{"_index":1433,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1198,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["exist",{"_index":2072,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["expect",{"_index":1746,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":2164,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールドを持つcda",{"_index":2163,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールド値を持つcda",{"_index":2159,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expectedamount",{"_index":2126,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["expens",{"_index":1628,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["experi",{"_index":2413,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["expert",{"_index":1679,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["explain",{"_index":1659,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["explor",{"_index":313,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["export",{"_index":1501,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["expos",{"_index":1425,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["express",{"_index":1832,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["extend",{"_index":2071,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["extern",{"_index":2048,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extract",{"_index":2263,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["facad",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fahrenheit",{"_index":2475,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fail",{"_index":2441,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["fals",{"_index":325,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["faq",{"_index":2154,"docTitle":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["far",{"_index":1984,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["fashion",{"_index":1737,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["fast",{"_index":1295,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{}}}],["fastest",{"_index":2278,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":2319,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["featur",{"_index":2289,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1269,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1271,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1255,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fetch",{"_index":1385,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["fetcher.j",{"_index":1357,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["fetchtemp.j",{"_index":1498,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["few",{"_index":2227,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["field",{"_index":1505,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fijter'",{"_index":2400,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1176,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1152,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["final",{"_index":2471,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["find",{"_index":1363,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["findtransact",{"_index":885,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["findtransactionobject",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":2062,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":2240,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["first",{"_index":1351,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["flag",{"_index":1462,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["flash",{"_index":2307,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["flink",{"_index":808,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":809,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":806,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["folder",{"_index":1803,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["follow",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["forc",{"_index":2386,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fork",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["form",{"_index":1784,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["format",{"_index":1917,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["forward",{"_index":2194,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["found",{"_index":2320,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["foundat",{"_index":603,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["four",{"_index":1649,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["framework",{"_index":1258,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["free",{"_index":1432,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["front",{"_index":1900,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["fulfil",{"_index":1966,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["full",{"_index":1459,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["function",{"_index":340,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["futur",{"_index":1787,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["gateway",{"_index":1920,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gateway4",{"_index":2217,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gather",{"_index":2469,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["gcc、clang、または@iota_toolchain",{"_index":954,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["gener",{"_index":67,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["generate_ca.sh",{"_index":1006,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1017,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1012,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatecda()メソッドは以下のフィールドを持つcda",{"_index":2186,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":839,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["get",{"_index":1484,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["getaccountdata",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1065,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getaddressinforequest",{"_index":1066,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbal",{"_index":887,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1067,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalancerequest",{"_index":1068,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalances(address",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":229,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["getbundl",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1044,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1069,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1070,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getinclusionst",{"_index":324,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":322,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":334,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":888,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":300,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":301,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.j",{"_index":2453,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":720,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":752,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":889,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettips(\\[callback",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":398,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":891,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettrytes(hash",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1071,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1072,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["ginkgo",{"_index":597,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":601,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":698,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["github",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":2135,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":675,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1288,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1119,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":941,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":678,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":676,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["give",{"_index":1383,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["given",{"_index":2027,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["glass",{"_index":1952,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["gnu/linux",{"_index":2422,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":95,"docTitle":{"docs/iota-go/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["goal",{"_index":2248,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":602,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":435,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goodby",{"_index":1751,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["googl",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{}}}],["googleアカウントでのoauth",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1608,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1600,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1605,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1609,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goでのpow",{"_index":595,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":436,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gp",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1214,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["graphic",{"_index":1891,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["green",{"_index":1980,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["grid",{"_index":1518,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["group",{"_index":1947,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["grpc",{"_index":932,"docTitle":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["grpcc",{"_index":1029,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":998,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1026,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバーを提供します。ハブは、対話するために使用できるgrpc",{"_index":997,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":949,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["gs1",{"_index":2045,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guarante",{"_index":1775,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guard（gpg",{"_index":967,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["gui",{"_index":1892,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["guid",{"_index":1483,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["guides/confirm",{"_index":804,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["gyroscop",{"_index":2387,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["handl",{"_index":1974,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["hard",{"_index":2492,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hardwar",{"_index":1827,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["hash",{"_index":279,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["hash(hash(ノード1",{"_index":386,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ1",{"_index":382,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ3",{"_index":384,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(ノード2",{"_index":387,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ2",{"_index":383,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ4",{"_index":385,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hashcashと同様に、各トランザクションはそれが検証されることができる前にpowを含まなければなりません。このpowは、有効なトランザクションを作成するのにかかる時間および計算能力を増大させることによって、iotaネットワークにスパム防止を提供します。さらに、スパムトランザクションがネットワークに及ぼす影響を減らすために、ノードは有効なpow",{"_index":424,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["hat",{"_index":2375,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["have",{"_index":1886,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["hdmi",{"_index":2416,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["head",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["headless",{"_index":2395,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["heat",{"_index":2481,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["held",{"_index":1990,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["hello",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1481,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["helpフラグを付けてiri",{"_index":928,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["here",{"_index":2264,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["high",{"_index":442,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["histori",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["home/binディレクトリを$path",{"_index":957,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hook",{"_index":2364,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["hope",{"_index":1667,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["host",{"_index":1694,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["http",{"_index":498,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["http&#x3a;//localhost:14265",{"_index":1448,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1161,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["http&#x3a;//localhost:14265のノードに接続して以下のシードでログインするようにiota",{"_index":1165,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["http&#x3a;127.0.0.1:14265",{"_index":1393,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["httpconnector",{"_index":2170,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/iotaledger/iota.j",{"_index":2370,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1812,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1811,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1813,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1392,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":220,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//www.gp",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsではなくhttpプロトコルを使用していることを確認してください。ノードのアドレスは、コマンドラインフラグのapiaddress",{"_index":980,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["httpsプロキシサーバーを設定したい場合は、nginx",{"_index":779,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":774,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":944,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":996,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":995,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1058,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hub/db/db.cc",{"_index":1101,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/server/server.cc",{"_index":1102,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/service/sweep_service.cc",{"_index":1103,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub_address",{"_index":1105,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address_bal",{"_index":1106,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address行でis_cold_storageを0に設定し、seed_uuid",{"_index":1053,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hub_address行でis_cold_storageを1に設定し、seed_uuid",{"_index":1052,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1073,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1093,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["huge",{"_index":2352,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["human",{"_index":1663,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["humid",{"_index":2376,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["i'm",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1278,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ibc",{"_index":1946,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["id",{"_index":959,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["idea",{"_index":1397,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["ideal",{"_index":1644,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ident",{"_index":2496,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["identification）フォーマットは\"udp://ipaddress:port",{"_index":896,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["identification）フォーマットは、\"udp://ipaddress:port",{"_index":875,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1613,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":2169,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":2108,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1611,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfig",{"_index":2312,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ignor",{"_index":2210,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["illegalargumentexcept",{"_index":1178,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["illustr",{"_index":1732,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["imag",{"_index":1727,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["immedi",{"_index":1815,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["immut",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["implement",{"_index":1687,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{}}}],["import",{"_index":1502,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["imu",{"_index":2381,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["incent",{"_index":2023,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["incentiv",{"_index":1989,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["includ",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["increas",{"_index":1359,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["independ",{"_index":2031,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["index",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1493,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["indic",{"_index":2483,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["individu",{"_index":2433,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["industri",{"_index":1954,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["inerti",{"_index":2380,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["inet",{"_index":2209,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inexpens",{"_index":2301,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:depth",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["info:go",{"_index":1331,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":2315,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":762,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:このテストトークンはdevnet",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:無料のspamnet",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["inform",{"_index":1719,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["infrastructur",{"_index":1633,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["init",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initi",{"_index":1748,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["initiatetransf",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["innov",{"_index":1844,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["input",{"_index":902,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["input/output",{"_index":2286,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insert",{"_index":2047,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insid",{"_index":2246,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inspir",{"_index":2397,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["instal",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1284,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["instanc",{"_index":1410,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["instead",{"_index":1379,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["instruct",{"_index":1333,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["int128",{"_index":592,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["integr",{"_index":1629,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["intend",{"_index":1688,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["intens",{"_index":1697,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["interact",{"_index":1445,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["interconnect",{"_index":1681,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["interfac",{"_index":1456,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["intern",{"_index":1842,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["internet",{"_index":1340,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interplanetari",{"_index":1904,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["interruptattachingtotangl",{"_index":893,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["interv",{"_index":1416,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["intervent",{"_index":1631,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["introduc",{"_index":2095,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["invalid",{"_index":901,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/install-hub":{}}}],["involv",{"_index":1648,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["io",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1265,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1266,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iri/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["iota.j",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":294,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":302,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota.lib.j",{"_index":2452,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota/ipf",{"_index":1906,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":2179,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota://uriで始まり、その後に90",{"_index":1230,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1232,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iotaaccountオブジェクトにはデフォルトの設定がありますが、少なくともシードとmongodb",{"_index":2166,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapi",{"_index":2167,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":506,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaでは、トランザクションのバンドルをノードに送信する必要があります。iotaには、3",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaでは、署名方法の性質上、各アドレスから1度だけしかiotaトークンを取り出さない方が良いため、秘密鍵とアドレスのペアが複数個必要となります。そのため、アドレスからiota",{"_index":238,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":224,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":345,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":360,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":376,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":290,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":286,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":937,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。同じ秘密鍵を使用して別のバンドルに署名すると、攻撃者は秘密鍵に総当たり攻撃を行い、そのアドレスからiotaトークンを盗むことができます。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは2度とiota",{"_index":943,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは無許可型のdltです。したがって、ノードを個人や企業を含む誰でもが実行することができます。大量のapi呼び出しはコストがかかる可能性があるため、ノード所有者はそれらを一般に公開しないことがよくあります。そのため、iota",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1520,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1291,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["iotaアドレス以上のものです。これらのアドレスは、条件付預け入れアドレス（cda",{"_index":2099,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1602,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1603,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":298,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":307,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":291,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":292,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":431,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":837,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1523,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルを使用してデータをmam",{"_index":1545,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":363,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1239,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1108,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":940,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1155,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iotaトークンの値が、iota",{"_index":626,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":628,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの取り出し/預け入れや、データを送信することができます。ノードに1",{"_index":259,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークンの総供給量は(333",{"_index":346,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":2127,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンの量があります。この場合は1,000個のiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":629,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":368,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンをcda",{"_index":2172,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1591,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1",{"_index":942,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを使うには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名し、その署名をトランザクションのsignaturemessagefrag",{"_index":248,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":939,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":297,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":350,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンを特定のアドレスから特定のアドレスに転送するように指示する1",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1104,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":285,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":317,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを送受信するために、クライアントはバンドルと呼ばれるトランザクションのパッケージをノードに送信します。バンドル内のトランザクションは、あるアドレスから別のアドレスにiota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":267,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":627,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをiri",{"_index":1120,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":361,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークに接続するためのiotaapiオブジェクトと、シードを管理するためのiotaaccount",{"_index":2165,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードが台帳のコピーを保持し、iota",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のiota",{"_index":223,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiota",{"_index":159,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":724,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントはシードを作成して秘密にする必要があります。シードとは、クライアントにアドレスへのアクセスを許可する81",{"_index":235,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":619,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":362,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュが事前定義されたmwmと同じかそれ以上の数の0",{"_index":275,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":226,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":625,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはiota",{"_index":234,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルの暗号学的ハッシュ関数のマスターキーです。各シードは、ほぼ無制限の固有の秘密鍵とアドレス（957",{"_index":236,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1524,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1217,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1593,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1595,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1179,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["iota財団のgithub",{"_index":1195,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のwebサイト、iota",{"_index":687,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1537,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":218,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1534,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1282,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1535,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1538,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":573,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":232,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1536,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":769,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ip_address_from_step_7",{"_index":2280,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ipf",{"_index":1889,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipv4",{"_index":2334,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":2316,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスか、duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":665,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":770,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":768,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバーのipアドレスに変更します。sign",{"_index":1024,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":771,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri",{"_index":165,"docTitle":{"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iri.conf",{"_index":761,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":856,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":864,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":643,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":866,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":717,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":639,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":638,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":673,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":700,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":613,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriは次のポートを使用します。ローカルネットワークでlinuxサーバーを実行している場合は、これらのポートをコンピュータのパブリックip",{"_index":666,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":716,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを実行するコンピューターはiri",{"_index":608,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriを構築済みのdock",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":674,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":367,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":915,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":773,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":622,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードがなければ、iota",{"_index":610,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":978,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":641,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":640,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":931,"docTitle":{},"docBody":{"docs/iri/0.1/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":620,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":624,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードとコンパスを同じサーバーまたは仮想マシンにインストールします。しかし、複数のiri",{"_index":1121,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1145,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":905,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":913,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":912,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":723,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":611,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1142,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":729,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":788,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":787,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":635,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":612,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、iri",{"_index":780,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの台帳のトランザクションによって参照されているトランザクションですが、iri",{"_index":623,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":609,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1146,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":621,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":650,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":785,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":832,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":732,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを走らせる（dock",{"_index":164,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":764,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションが適しています。設定オプションを変更したい場合は、config.ini",{"_index":706,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iri設定オプションをフラグとして渡すことで、iri",{"_index":741,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":917,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":743,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjava",{"_index":607,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iri：latest",{"_index":747,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["isn't",{"_index":1874,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":330,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iss",{"_index":2371,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["issu",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/references/troubleshooting":{}}}],["it'",{"_index":1382,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["item",{"_index":1798,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["itemid",{"_index":2096,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ixi",{"_index":920,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":715,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ja",{"_index":447,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":684,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":91,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["java_max_memori",{"_index":704,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":703,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":702,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascriptでmam",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":433,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javaがインストールされていることを確認するには、java",{"_index":682,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":821,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":434,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":694,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":705,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":693,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":677,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":699,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":679,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":683,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":740,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":701,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2423,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie.img",{"_index":2427,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jitpack",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["job",{"_index":2463,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["join",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["jota",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":503,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1915,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["json.exception.parse_error.101",{"_index":985,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1131,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1191,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keccak",{"_index":239,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["keep",{"_index":1412,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["keepass",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kept",{"_index":1703,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":355,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["kernel",{"_index":2355,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["key",{"_index":1364,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["keyboard",{"_index":2295,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":847,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":846,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":849,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":304,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kind",{"_index":1512,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["kit",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["know",{"_index":1381,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["knowledg",{"_index":1836,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["known",{"_index":2005,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lack",{"_index":1941,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["lan",{"_index":1723,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lang",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1247,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["larg",{"_index":1441,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["last",{"_index":990,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["later",{"_index":1710,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["latest",{"_index":320,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["latestmileston",{"_index":2457,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["latestmilestoneindex",{"_index":394,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":615,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":725,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":727,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":726,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":616,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":728,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":410,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":617,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["launch",{"_index":2259,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["layer",{"_index":1439,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["layers_calcul",{"_index":1136,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["lead",{"_index":2011,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["learn",{"_index":1657,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["led",{"_index":2403,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["ledger",{"_index":921,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["left",{"_index":2218,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["legaci",{"_index":2450,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["legion",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["level",{"_index":1650,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートとシード履歴をleveldbデータベースのleveldown",{"_index":2180,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":1335,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["licens",{"_index":1839,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lifecycl",{"_index":1871,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["light",{"_index":1166,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["lighter",{"_index":2290,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lightweight",{"_index":1689,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["limit",{"_index":914,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["line",{"_index":1374,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["link",{"_index":432,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/tools/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linux",{"_index":51,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":814,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1125,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["linuxサーバーでiri",{"_index":660,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバーで、ターミナルウィンドウを開いて、nginx",{"_index":756,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバーで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":718,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバー上でiriを実行すると、linuxサーバーがiotaネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":661,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1212,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["list",{"_index":1449,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["listen",{"_index":2241,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["liter",{"_index":989,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["live",{"_index":1722,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["load",{"_index":1931,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["local",{"_index":926,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["local_snapshots_base_path",{"_index":645,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":646,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":655,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":658,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":781,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":648,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":656,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":782,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localhost",{"_index":1411,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["localis",{"_index":2446,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1873,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["log",{"_index":512,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["login",{"_index":2333,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["logist",{"_index":1951,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["longer",{"_index":1753,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["look",{"_index":1485,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":826,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["lose",{"_index":1960,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["loss",{"_index":1964,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["lost",{"_index":2054,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["low",{"_index":1646,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["ls",{"_index":2326,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lt",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;&lt;&lt;&lt;&lt;&lt;&lt",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["lt;assetcustodianid",{"_index":2074,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["lt;assetuniqueid",{"_index":2039,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":952,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":962,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mac",{"_index":733,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["machin",{"_index":1641,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["macosx",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1262,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["made",{"_index":2373,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnet",{"_index":2392,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnetomet",{"_index":2390,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["main",{"_index":1701,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mainnet",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":857,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木の深さは23です。したがって、コーディネーターの公開鍵と秘密鍵のペアは8,388,608",{"_index":381,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーン署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":389,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1118,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["maintain",{"_index":1716,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mainten",{"_index":1868,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["major",{"_index":1713,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["make",{"_index":1365,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["malform",{"_index":1150,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":441,"docTitle":{"docs/tools/0.1/mam-watcher/overview":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.attach",{"_index":2089,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.changemod",{"_index":2088,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.client.j",{"_index":2085,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam.creat",{"_index":2092,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamsecret",{"_index":2473,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamstat",{"_index":1376,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{}}}],["mamのgithub",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["mamチャネルの作成と使用、web",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1514,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["manag",{"_index":1235,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mani",{"_index":2190,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["manner",{"_index":1684,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["manual",{"_index":1289,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["manufactur",{"_index":1953,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["map",{"_index":845,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":855,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":968,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1601,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":969,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1041,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["markdown",{"_index":1930,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["marketplac",{"_index":1513,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["marque",{"_index":2470,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mask",{"_index":1326,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["match",{"_index":1939,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["maven",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":696,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":396,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":407,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maxdepth",{"_index":411,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maximum",{"_index":1396,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["meaning",{"_index":2058,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["measur",{"_index":1762,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mechan",{"_index":1686,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["memori",{"_index":2256,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["menu",{"_index":2445,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["merkl",{"_index":378,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["messag",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["messages.proto",{"_index":1059,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1525,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["met",{"_index":1776,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["meta",{"_index":1911,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["metadata",{"_index":916,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["method",{"_index":1378,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["mi",{"_index":1186,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["microprocessor",{"_index":2287,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["mileston",{"_index":321,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["milestonesとしてsnapshot.meta",{"_index":652,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["minimum",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["minut",{"_index":1322,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["minweightmagnitud",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["misplac",{"_index":1961,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["miss",{"_index":1965,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mistak",{"_index":1672,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1189,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":680,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":443,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1242,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["model",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modifi",{"_index":2070,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["modul",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moduleのbuild.gradl",{"_index":94,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["momentum",{"_index":2388,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["monetari",{"_index":1400,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["mongodb",{"_index":1833,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["monitor",{"_index":1342,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["monitorinterv",{"_index":945,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["more",{"_index":1323,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moreov",{"_index":2001,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mostusedaddressesaggreg",{"_index":854,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mous",{"_index":2415,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["much",{"_index":1743,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi",{"_index":2131,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi_us",{"_index":2161,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multi_useフィールドを持つcda",{"_index":2157,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multipl",{"_index":1950,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["multius",{"_index":2125,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":2130,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["mvn",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":278,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmが高いほど、プルーフオブワークは難しくなります。クライアントとしてiotaネットワークと対話するときは、ネットワークに適したmwm",{"_index":274,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmは14です。したがって、すべてのトランザクションハッシュ値は、14個の0",{"_index":276,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":365,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、mwmと同じ数の0",{"_index":273,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["my_password",{"_index":2311,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["my_ssid",{"_index":2310,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["myaccount.go",{"_index":2152,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":974,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mysql",{"_index":971,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1043,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["name",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":605,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":599,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":600,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":746,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1182,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["nativ",{"_index":1252,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["natur",{"_index":1643,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["navig",{"_index":2269,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["near",{"_index":2480,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nearli",{"_index":1858,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["necessari",{"_index":2288,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["necessarili",{"_index":2191,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["need",{"_index":1346,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["neighbor",{"_index":2193,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":721,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":753,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":895,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":872,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbour",{"_index":1721,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["net",{"_index":1257,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yaml",{"_index":2222,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["netmask",{"_index":2208,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=16",{"_index":2348,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=24",{"_index":2346,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["network",{"_index":919,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neutral",{"_index":1849,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["never",{"_index":1452,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["new",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neweventloggerplugin",{"_index":2153,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["next",{"_index":1389,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nginx",{"_index":758,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":767,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":772,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":777,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバーが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":760,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":766,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":755,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバーでポート5000",{"_index":763,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmap",{"_index":2337,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":415,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node'",{"_index":1446,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["node.j",{"_index":83,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":796,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1253,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["nodej",{"_index":1895,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["noder",{"_index":2449,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":421,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["nonc",{"_index":283,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iri/0.1/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":429,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["nordic",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["note",{"_index":2207,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["now",{"_index":1361,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":2110,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":842,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":892,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["number",{"_index":1992,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["numberformatexcept",{"_index":1177,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1153,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["object",{"_index":1916,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["obtain",{"_index":2076,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["occur",{"_index":1730,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["odomet",{"_index":1867,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["off",{"_index":1666,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["offici",{"_index":2361,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["offlin",{"_index":1706,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["offload",{"_index":1698,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ok",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":404,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["omit",{"_index":1801,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["on",{"_index":907,"docTitle":{"docs/tools/0.1/one-command-tangle/overview":{}},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["onboard",{"_index":2010,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["onc",{"_index":1786,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["onlin",{"_index":2243,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["onto",{"_index":2029,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["open",{"_index":1354,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["openjdk",{"_index":681,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1015,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["oper",{"_index":1434,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["option",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["orang",{"_index":2305,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["order",{"_index":1771,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["organ",{"_index":1949,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["organis",{"_index":1846,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["origin",{"_index":1944,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["os",{"_index":2293,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ot",{"_index":250,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["otherwis",{"_index":2204,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["otsは未知数の秘密鍵を明らかにしてしまいます。秘密鍵の半分が明らかになるように正規化することで、アドレスから1度だけは安全にiota",{"_index":252,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["ots）iota",{"_index":358,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ots）を使用しているため、秘密鍵は1つのバンドルに対してのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":377,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["out",{"_index":1465,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["output",{"_index":1741,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["outsid",{"_index":1406,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["outsourc",{"_index":1714,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["outstand",{"_index":1816,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["over",{"_index":1368,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["overflow",{"_index":863,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["overview",{"_index":1325,"docTitle":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{}}}],["ow",{"_index":1790,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["owner",{"_index":1945,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["ownership",{"_index":1869,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["p2p",{"_index":1519,"docTitle":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["pack",{"_index":2410,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["packag",{"_index":963,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["package.json",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["page",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["paid",{"_index":1779,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2404,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["paramet",{"_index":906,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["parent",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pars",{"_index":986,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["part",{"_index":1792,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["parti",{"_index":1838,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["particip",{"_index":2024,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["partit",{"_index":1800,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["partner",{"_index":688,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["pass",{"_index":1760,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["password",{"_index":68,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["past",{"_index":1506,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["path",{"_index":1204,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":745,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["pattern",{"_index":1680,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pay",{"_index":1739,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["payload",{"_index":1747,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["payment",{"_index":1627,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddress",{"_index":1781,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1193,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1516,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pend",{"_index":327,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["per",{"_index":1772,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["perceiv",{"_index":1997,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["perform",{"_index":1692,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["period",{"_index":1745,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["perman",{"_index":1793,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["permanod",{"_index":707,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":708,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1171,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["permissionless",{"_index":1797,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["persistenceadapt",{"_index":2177,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["persistencepath",{"_index":2178,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1479,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["phone",{"_index":2052,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["photo",{"_index":1249,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["physic",{"_index":2220,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["pi",{"_index":1315,"docTitle":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pictur",{"_index":1651,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pin",{"_index":2414,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pip3.2",{"_index":2435,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pipe",{"_index":2442,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["place",{"_index":1809,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["placehold",{"_index":2281,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["plan",{"_index":2015,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["platform",{"_index":2251,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["platformio",{"_index":2321,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":690,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["plu",{"_index":2412,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["plug",{"_index":2323,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pngファイルとしてqr",{"_index":1226,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1599,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1623,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["point",{"_index":1420,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["pointer",{"_index":1872,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["pointsとしてsnapshot.meta",{"_index":654,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":2112,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":2116,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pool",{"_index":1823,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["popov教授によってiota",{"_index":373,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["popul",{"_index":1933,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["popular",{"_index":2249,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["port",{"_index":1447,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["portal",{"_index":1717,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":789,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["possibl",{"_index":1875,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["post",{"_index":1912,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["postgresまたはfirebas",{"_index":1606,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-go/0.1/README":{}}}],["pow_arm_c128",{"_index":590,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":594,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["power",{"_index":1632,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["powは、クライアントによって行われてもよく、またはattachtotangl",{"_index":425,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powは大量の電子メールスパムを減らすための概念として導入されました。この概念はhashcashとして知られており、すべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":423,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":596,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを計算する関数はpearldiv",{"_index":430,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["pow）は試行錯誤を用いて計算され、それ故、pow",{"_index":422,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["ppaをダウンロードするためにgnu",{"_index":965,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["pr",{"_index":1031,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["pre",{"_index":1428,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["predict",{"_index":1995,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prefer",{"_index":2034,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":406,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["prepar",{"_index":2302,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["preparetransf",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prerequisit",{"_index":1345,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["present",{"_index":1903,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["press",{"_index":1460,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pressur",{"_index":2383,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prevent",{"_index":1924,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["price",{"_index":1770,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["primari",{"_index":2075,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["principl",{"_index":1926,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["print",{"_index":825,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["privaci",{"_index":966,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["privat",{"_index":1366,"docTitle":{"docs/tools/0.1/one-command-tangle/overview":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["process",{"_index":1473,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["processtransf",{"_index":1046,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["processtransferbatchrepli",{"_index":1074,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1075,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1076,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["produc",{"_index":1661,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["producer'",{"_index":1767,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpric",{"_index":1774,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["product",{"_index":1337,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["program",{"_index":1835,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["progress",{"_index":1336,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{}}}],["project",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["promotetransact",{"_index":331,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":970,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["proof",{"_index":924,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["propos",{"_index":1769,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["proprietari",{"_index":1993,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["protect",{"_index":2030,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["protocol",{"_index":922,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["prove",{"_index":1877,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["provid",{"_index":1735,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["provis",{"_index":1718,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pub/sub",{"_index":1316,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{}}}],["public",{"_index":1380,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publish",{"_index":1328,"docTitle":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pubsub",{"_index":1488,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["pueotseitfevewcwbtsizm9nkrgjeimxtulbacgfrqk9imgiclbkw9ttevsdqmgwkbxpvcbmmcxwmnpdx",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["purchas",{"_index":2407,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["purpl",{"_index":1983,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["purpos",{"_index":1426,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["put",{"_index":1757,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["putti",{"_index":2282,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pyramid",{"_index":1527,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":437,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2434,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":958,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":742,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1223,"docTitle":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1224,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1228,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1227,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qubic",{"_index":2021,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["question",{"_index":1675,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["queue",{"_index":631,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["quickli",{"_index":1427,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["quickstart",{"_index":1332,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["r",{"_index":1287,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["rack",{"_index":1955,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["ram",{"_index":663,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ramが4gb未満など、リソースが限られている場合は、iriではなくciri",{"_index":672,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["random",{"_index":420,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["raspberri",{"_index":1314,"docTitle":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["raspberrypi",{"_index":1487,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["raspbian",{"_index":2411,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["rasperri",{"_index":2294,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rate",{"_index":2331,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["raw",{"_index":2478,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["re",{"_index":2097,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["react",{"_index":1264,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1598,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1251,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":991,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["readi",{"_index":1408,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["readm",{"_index":446,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1587,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["real",{"_index":1317,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reason",{"_index":1986,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["reattach",{"_index":2113,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["reboot",{"_index":2358,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["recap",{"_index":2080,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["receipt",{"_index":1918,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["receiv",{"_index":1221,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.j",{"_index":2460,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recommend",{"_index":1453,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["reconcil",{"_index":2032,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["record",{"_index":1414,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["recov",{"_index":1969,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["recoveri",{"_index":1948,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":851,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["redund",{"_index":1705,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["refer",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["referenc",{"_index":1417,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":403,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["regattachingtotangleイベントをリッスンする新しいcallbackeventlisten",{"_index":2146,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["regist",{"_index":1709,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["registered/deregist",{"_index":1754,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["registr",{"_index":1696,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["regular",{"_index":1415,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["relat",{"_index":1973,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["releas",{"_index":686,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["relev",{"_index":2060,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reliabl",{"_index":2252,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["remain",{"_index":1878,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["rememb",{"_index":2090,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["remot",{"_index":2448,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["remote=fals",{"_index":930,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remote=tru",{"_index":929,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remov",{"_index":1461,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["removeneighbor",{"_index":894,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["removeneighbors(uri",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["rent",{"_index":2253,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["repl",{"_index":827,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["replac",{"_index":2216,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["replaybundl",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":332,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["replic",{"_index":1652,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["report",{"_index":1998,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["repositori",{"_index":1324,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{}}}],["repres",{"_index":1962,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["reproduc",{"_index":1901,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reput",{"_index":2019,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["req",{"_index":1016,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1630,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["research",{"_index":1677,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["reset",{"_index":2494,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["resolv",{"_index":2359,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["resourc",{"_index":874,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["respect",{"_index":1788,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["respons",{"_index":890,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["rest",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["restart",{"_index":750,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["restrict",{"_index":1369,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["result",{"_index":1430,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["retriev",{"_index":1358,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["retrievefil",{"_index":1908,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrofit",{"_index":509,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1511,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["reus",{"_index":1297,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{}}}],["reveal",{"_index":2000,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["revenu",{"_index":1847,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["revok",{"_index":1882,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["reward",{"_index":2018,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["rgb",{"_index":2490,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["right",{"_index":2059,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["risk",{"_index":1399,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["robot",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":614,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["role",{"_index":1972,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["root",{"_index":2064,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["rootのbuild.gradl",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["root：//iota",{"_index":802,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["rotat",{"_index":2389,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["round",{"_index":2477,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["router",{"_index":2195,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["router'",{"_index":2196,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1143,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["rpchub",{"_index":973,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["rpi",{"_index":1828,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["rule",{"_index":2197,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":504,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["runtim",{"_index":818,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["runコマンドに次のフラグを1",{"_index":1099,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1286,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["s3",{"_index":1928,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["safe",{"_index":1808,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["salt",{"_index":936,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltとseed_uuid",{"_index":1051,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["saltパラメーターはもう必要ありません。署名サーバー（signer:50051）と使用するssl",{"_index":1025,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":977,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1114,"docTitle":{},"docBody":{"docs/hub/0.1/references/security-considerations":{}}}],["same",{"_index":1384,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["sampl",{"_index":2396,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["save",{"_index":2012,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sbc",{"_index":2283,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":822,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scalar",{"_index":1096,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["scalaプログラミング言語とsbt",{"_index":817,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scan",{"_index":2044,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["scenario",{"_index":1653,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["scene",{"_index":1914,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["schedul",{"_index":1834,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scope",{"_index":2079,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["scratch",{"_index":2420,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["screen",{"_index":2267,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["screen/tmuxセッション、system",{"_index":992,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":2231,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1586,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["scroll",{"_index":2459,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sd",{"_index":2303,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["seamlessli",{"_index":2006,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["search",{"_index":1507,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["second",{"_index":1444,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seconds変数を1",{"_index":329,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["secret",{"_index":1370,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{}}}],["section",{"_index":2188,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["sector",{"_index":1845,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["secur",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["see",{"_index":1355,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["seed",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seed99999999999999999999999999999999999999999999999999999999999999999999999999999",{"_index":1423,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["seed9999999999999999999999999999999999999999999999999999999999999999999999999999999の合計残高を取得するには、getbalancesエンドポイントを呼び出します。これまでにiota",{"_index":1163,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["seed_uuid",{"_index":1050,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":2103,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":2168,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1034,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":299,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["seek",{"_index":1678,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["seen",{"_index":1987,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["select",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["selector",{"_index":1244,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1219,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["send()メソッドを使用してデータトランザクションをcda",{"_index":2147,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["sender",{"_index":2468,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.j",{"_index":1356,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sendtransf",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":309,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2374,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sensehat",{"_index":2369,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2461,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1466,"docTitle":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sent",{"_index":1490,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["separ",{"_index":1704,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sequenc",{"_index":1729,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["seri",{"_index":2028,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["serial",{"_index":2322,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["server",{"_index":1567,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":776,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["set",{"_index":1310,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["setinterv",{"_index":333,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["setup",{"_index":2258,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sever",{"_index":2432,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sha",{"_index":1619,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1197,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256チェックサムは、apach",{"_index":697,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1196,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1200,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha512",{"_index":1617,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["share",{"_index":1472,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["shell",{"_index":2271,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ship",{"_index":1863,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["shipment",{"_index":2016,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["show",{"_index":1728,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["showdata",{"_index":2497,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shown",{"_index":2479,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shut",{"_index":2466,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shutdown",{"_index":2151,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["side",{"_index":1371,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sidekey",{"_index":1759,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sign",{"_index":1305,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{}}}],["signal",{"_index":1752,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドに、マークル木を再構築できるようにするためにマークル木から足りないデータが含まれている1",{"_index":391,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つインプットアドレスは、ゼロトークンのアウトプットトランザクションのsignaturemessagefrag",{"_index":256,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":266,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signbundlerepli",{"_index":1077,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signbundlerequest",{"_index":1078,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signed_uuid",{"_index":1107,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1011,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1021,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1020,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1529,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["similar",{"_index":1671,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simpl",{"_index":511,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplest",{"_index":2325,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplifi",{"_index":1975,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["singl",{"_index":1313,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["situat",{"_index":1674,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["size",{"_index":1805,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["slash",{"_index":2219,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["slider",{"_index":2266,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["slightli",{"_index":2401,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["slow",{"_index":2487,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["small",{"_index":2284,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["smaller",{"_index":2402,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1539,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sn",{"_index":800,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":927,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1147,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["snapshot.meta",{"_index":642,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":644,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1148,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{}}}],["snippet",{"_index":2083,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["socket",{"_index":1175,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["softwar",{"_index":1830,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["solder",{"_index":1482,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["solid",{"_index":653,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["solidif",{"_index":923,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["solut",{"_index":1853,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["soon",{"_index":2379,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["sourc",{"_index":1334,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["source'",{"_index":1755,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sourceディレクトリに移動してrepl",{"_index":830,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["space",{"_index":2363,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["spamnet",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":219,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":221,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":714,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":1897,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["speed",{"_index":2476,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["spent",{"_index":858,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["spread",{"_index":2008,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["src/desktop/out",{"_index":1263,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1275,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1279,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":2046,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":2272,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssl",{"_index":1004,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1022,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["stack",{"_index":862,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["stackoverflow",{"_index":1117,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["stakehold",{"_index":1971,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["standard",{"_index":1795,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["start",{"_index":338,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":2150,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":976,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["starter",{"_index":2409,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1151,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["static",{"_index":2198,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["station",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["statist",{"_index":2454,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["statsrepli",{"_index":1079,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statsrequest",{"_index":1080,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statu",{"_index":2042,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status",{"_index":2055,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["stay",{"_index":2203,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["step",{"_index":1390,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["still",{"_index":1470,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["stop",{"_index":1763,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["storag",{"_index":1521,"docTitle":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["store",{"_index":1422,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["store.clos",{"_index":2107,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1907,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetransact",{"_index":897,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["storetransactions(tryt",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":2105,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["straight",{"_index":2199,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["stream",{"_index":1329,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":823,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["structur",{"_index":1804,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["studio",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sub",{"_index":2230,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subdomain",{"_index":2229,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subject",{"_index":1401,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1014,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["subnet",{"_index":2335,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["subscrib",{"_index":1307,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subscript",{"_index":2377,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subse",{"_index":303,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":102,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["success:congratul",{"_index":1386,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:おめでとうございます:tada",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["success:おめでとうございます！:tada",{"_index":765,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1158,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["such",{"_index":1683,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sudo",{"_index":1436,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["summar",{"_index":1970,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":994,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["suppli",{"_index":1405,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["support",{"_index":1303,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sure",{"_index":1391,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["surpris",{"_index":2440,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sweep",{"_index":1109,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweep_max_deposit",{"_index":947,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":948,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_tail",{"_index":1110,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1081,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1082,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepev",{"_index":1083,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinforequest",{"_index":1084,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinterv",{"_index":946,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1037,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1085,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["symbol",{"_index":2443,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sync",{"_index":1725,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["syntax",{"_index":988,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["system",{"_index":1122,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sとledger",{"_index":1183,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1188,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1185,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["tab",{"_index":2275,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tabl",{"_index":1699,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["tada",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tail",{"_index":335,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":336,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["take",{"_index":1783,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["taken",{"_index":1821,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["tangl",{"_index":142,"docTitle":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tanglebeatはzmq",{"_index":833,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["task",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tcp",{"_index":669,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":799,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":222,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":670,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["technic",{"_index":1898,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["technolog",{"_index":1645,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tell",{"_index":1742,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["temp.pi",{"_index":1496,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["temperatur",{"_index":1319,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["templat",{"_index":1477,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["tempy.pi",{"_index":1499,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["termin",{"_index":2270,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["test",{"_index":502,"docTitle":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["text",{"_index":2430,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["textcolour",{"_index":2489,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["thank",{"_index":2007,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["that'",{"_index":1299,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["theme",{"_index":1243,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1274,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1273,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themselv",{"_index":1785,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["therefor",{"_index":2214,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["thetangle.org",{"_index":1003,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":637,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1341,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["third",{"_index":1837,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["those",{"_index":1387,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["threshold",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["through",{"_index":1343,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["thu",{"_index":2069,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tick",{"_index":1133,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["tild",{"_index":2444,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["time",{"_index":1318,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":2134,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":2155,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを取り出すことができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":2156,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":2160,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeoutat",{"_index":2124,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":2129,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesource()メソッドでアカウントを作成した場合は、timesource()メソッドをtimeoutat",{"_index":2183,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":2181,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timesrcパッケージを使用して、正確な時刻を返すオブジェクトを作成します。この例では、タイムソースはgoogl",{"_index":2109,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["timestamp",{"_index":1885,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["timezon",{"_index":2447,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tip",{"_index":417,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2465,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1220,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["took",{"_index":2350,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tool",{"_index":1293,"docTitle":{"docs/tools/0.1/introduction/overview":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["toolbox",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["top",{"_index":1375,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{}}}],["total",{"_index":1404,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["tpsiriノードを介した1",{"_index":349,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["trace",{"_index":1522,"docTitle":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["traceabl",{"_index":1647,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["tracer",{"_index":2037,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1296,"docTitle":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tracker",{"_index":2036,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["trade",{"_index":1639,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["transact",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["transaction'",{"_index":1923,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["transaction.j",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":315,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/introduction/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":308,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1250,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1276,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":379,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["tri",{"_index":1173,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["trigger",{"_index":1469,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["triniti",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["trinity.app",{"_index":1211,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1209,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["troubleshoot",{"_index":2354,"docTitle":{"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["true",{"_index":323,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["trunk",{"_index":316,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":280,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iri/0.1/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":311,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransactionフィールドを辿ることによって、バンドル内の各トランザクションを見つけて検証します。ノードが先頭トランザクション（またはlastindex",{"_index":268,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["trust",{"_index":1851,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["trustanchor",{"_index":859,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["tryte",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":883,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":898,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["tupl",{"_index":2065,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["turn",{"_index":2308,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tutori",{"_index":1455,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tv",{"_index":2417,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["twin",{"_index":1865,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["two",{"_index":1373,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["tx",{"_index":838,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["type",{"_index":1098,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["t定数を作成し、それをprop",{"_index":1277,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":2299,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":860,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":757,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["udp",{"_index":667,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["udp://p101.testnet.iota.cafe:14666",{"_index":710,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p102.testnet.iota.cafe:14666",{"_index":711,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p103.testnet.iota.cafe:14666",{"_index":712,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["udp://p104.testnet.iota.cafe:14666",{"_index":713,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ui",{"_index":2077,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1272,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["unarchiv",{"_index":2262,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["unauthor",{"_index":1925,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["uncertainti",{"_index":1665,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unchang",{"_index":1509,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":841,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":843,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":341,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["under",{"_index":1372,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["understand",{"_index":1840,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["unexpect",{"_index":2328,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["unfortun",{"_index":2224,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["uniqu",{"_index":1929,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["unit",{"_index":1218,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["unregist",{"_index":1789,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["unsuccess",{"_index":1985,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["until",{"_index":1360,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["up",{"_index":1311,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updat",{"_index":1290,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updateitem",{"_index":2094,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upgrad",{"_index":2273,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["upload",{"_index":1909,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["upper",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstream/develop",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":778,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":775,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uri（uniqu",{"_index":873,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["url",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1624,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1168,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["urlまたはip",{"_index":1236,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":722,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1312,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["usa",{"_index":2438,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usabl",{"_index":2098,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["usag",{"_index":1817,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["usb",{"_index":2298,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["useless",{"_index":1859,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["user",{"_index":1000,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["user_account",{"_index":1032,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/database-tables":{}}}],["user_account_bal",{"_index":1111,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["user_address",{"_index":1042,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/database-tables":{}}}],["user_address_bal",{"_index":1112,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1086,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1094,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1087,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1095,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["usernam",{"_index":2309,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["userwithdraw",{"_index":1047,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["userwithdraw()メソッドを使用して、預け入れアドレスからのiota",{"_index":1039,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["userwithdrawcancelrepli",{"_index":1088,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1089,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1090,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1091,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":956,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1005,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1130,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["usual",{"_index":1712,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["util",{"_index":1294,"docTitle":{"docs/tools/0.1/introduction/overview":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["uuid",{"_index":1038,"docTitle":{"docs/hub/0.1/how-to-guides/query-the-database":{}},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["uuid：seeduuid",{"_index":935,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["v0.9.1",{"_index":572,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":571,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":570,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":569,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valid",{"_index":1308,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["valu",{"_index":1097,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["variabl",{"_index":1377,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["variant",{"_index":2353,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["vat",{"_index":2050,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["vc",{"_index":1261,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["vehicl",{"_index":1866,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["vendor",{"_index":1848,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["verac",{"_index":1860,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["verif",{"_index":1612,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["verifi",{"_index":1850,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["version",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1202,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":685,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["video",{"_index":2378,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["view",{"_index":1880,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["virtual",{"_index":2206,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":2260,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{}}}],["visibl",{"_index":1883,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["vista",{"_index":1256,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["w",{"_index":251,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w3school",{"_index":2421,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wait",{"_index":1491,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["walkeralpha",{"_index":408,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["wall",{"_index":2418,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wallet",{"_index":1167,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["walletにログインしたときに、全残高を見るためにはrec",{"_index":1169,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/create-an-iota-network":{}}}],["walletディレクトリでnpm",{"_index":1283,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1724,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["want",{"_index":1403,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["warn",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/how-to-guides/create-an-iota-network":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1237,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["warning:disclaim",{"_index":1662,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["warning:do",{"_index":1424,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["wast",{"_index":1968,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["watch",{"_index":1764,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["watcher",{"_index":1304,"docTitle":{"docs/tools/0.1/mam-watcher/overview":{}},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{}}}],["water",{"_index":1655,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["way",{"_index":1344,"docTitle":{},"docBody":{"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["weather",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["web",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["webapp",{"_index":2053,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["websit",{"_index":1888,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["webサイト、またはiota",{"_index":689,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1596,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなどで、cda",{"_index":2158,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1229,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバーのip",{"_index":759,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["weight",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["well",{"_index":1881,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["went",{"_index":1936,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["wereaddressesspentfrom",{"_index":899,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["whenev",{"_index":1738,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["whole",{"_index":1802,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["wide",{"_index":993,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["wider",{"_index":1715,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["wifi",{"_index":1194,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["window",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["windowsまたはlinux",{"_index":1254,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["winternitzワンタイム署名方式（w",{"_index":249,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["winternitzワンタイム署名（w",{"_index":357,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":2111,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1113,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["within",{"_index":1736,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["without",{"_index":1398,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["withplugin",{"_index":2119,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wl",{"_index":2314,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wlp3s0",{"_index":2318,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":925,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/tools/0.1/mam-watcher/overview":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["workflow",{"_index":1731,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1590,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["worri",{"_index":2255,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["write",{"_index":2009,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["written",{"_index":1301,"docTitle":{},"docBody":{"docs/tools/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["wui",{"_index":2078,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["x",{"_index":1585,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["x86",{"_index":2356,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1208,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["year",{"_index":1443,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{}}}],["you'd",{"_index":2205,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["you'll",{"_index":1395,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["you'r",{"_index":1407,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["you'v",{"_index":1451,"docTitle":{},"docBody":{"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["yougetsignal.com",{"_index":2244,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["yourself",{"_index":1905,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["zero",{"_index":630,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/tools/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":798,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":810,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zip",{"_index":2261,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":207,"docTitle":{"docs/iri/0.1/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["zmqwatcher.j",{"_index":1500,"docTitle":{},"docBody":{"docs/tools/0.1/raspberry-pi-pub-sub/overview":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":797,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":633,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":801,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":634,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":807,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":836,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":795,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":794,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":632,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
//# sourceMappingURL=static.e62adbaa.js.map