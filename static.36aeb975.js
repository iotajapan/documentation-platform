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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のコンピュータがイミュータブルなデータと価値を相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続をたどって各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードは、アドレスと秘密鍵のペアを導出し、IOTAトークンを取り出すバンドルに署名するために使用される秘密のパスワードです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"トランザクションは、単独で使用することも、他のトランザクションと一緒にパッケージ化することもできる単一の操作です。単独型のトランザクションは、たとえばIOTAトークンを含まないデータのみを送信するものです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルは、データを送信したり、ノードにIOTAトークンを特定のアドレスから特定のアドレスに転送するように指示する1つ以上のトランザクショングループです。バンドル内の各トランザクションの運命は、残りの部分に依存します。つまりすべてのトランザクションが有効か、またはすべて無効かです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードとは、偽造物がないことを確認するためにトランザクションを検証する責任があるコンピュータです。 IOTAネットワーク内のクライアントは、トランザクションを検証してタングルに添付できるように、バンドルをノードに送信する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テストトークンを送信する（Node.js）","summary":"商品やサービスと引き換えにIOTAトークンを誰かに送ることができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"IOTAネットワーク","summary":"IOTAでは、トランザクションのバンドルをノードに送信する必要があります。IOTAには、3つのパブリックネットワークがあります。各ネットワークには、ノードがトランザクションを追加できるそれぞれ独自の分散台帳（タングル）があります。どのパブリックネットワーク上のノードにバンドルを接続して送信するかを選べます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/iota-basics/0.1/introduction/overview","name":"IOTAの基本概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のIOTAトークンの量を定義しま..."},{"id":"docs/iota-basics/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはIOTAトークンを保持するアカウントで、署名はアドレスの所有権を証明します。"},{"id":"docs/iota-basics/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"トランザクションは、ノードに送信できる単一の操作です。トランザクションはIOTAトークンの取り出し/預け入れや、データを送信することができます。ノードに1つ以上のトランザクションを送信するには、トランザクションをバンドルにパッケージ化する必要があります。"},{"id":"docs/iota-basics/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、MWMと同じ数の0トリットが並ぶまで繰り返しハッシュ化を行います。 MWMが高いほど、プルーフオブワークは難しくなります。クライアントとしてIOTAネットワークと対話するときは、ネッ..."},{"id":"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/iota-basics/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ/から変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/iota-basics/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/iota-basics/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/iota-basics/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/iota-basics/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/iota-basics/0.1/references/tryte-alphabet","name":"トライト文字","summary":"この表は、トライトからトライトがエンコードされた文字への変換と、それに相当する10進数の値を表しています。"},{"id":"docs/iota-basics/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/iota-basics/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/the-tangle/0.1/introduction/overview","name":"タングル概要","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続を辿って各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態の..."},{"id":"docs/the-tangle/0.1/concepts/the-coordinator","name":"コーディネーター","summary":"コーディネーターは、同じアドレスから定期的にトランザクションのバンドルを作成、署名、および送信するクライアントアプリケーションです。これらのバンドルには、ノードが合意に達するために使用するマイルストーンと呼ばれるトランザクションが含まれています。マイルストーンがタングル内のトランザクションを直接または間接的に参照して承..."},{"id":"docs/the-tangle/0.1/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。"},{"id":"docs/the-tangle/0.1/concepts/incentives-in-the-tangle","name":"タングル内のインセンティブ","summary":"チップ選択アルゴリズムは強制されていません。その代わりに、ノードは、自分のトランザクションが確定される最良の機会を得るためにチップ選択アルゴリズムを使用するインセンティブがあります。"},{"id":"docs/the-tangle/0.1/concepts/proof-of-work","name":"プルーフオブワーク","summary":"プルーフオブワークは、計算は難しいが検証は簡単な数学的問題に対する答えです。 IOTAでは、プルーフオブワークはスパムトランザクションからネットワークを保護します。バンドル内の各トランザクションには、有効であることを証明するプルーフオブワークが含まれている必要があります。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iri/0.1/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。 IRIを実行するコンピューターはIRIノードと呼ばれます。"},{"id":"docs/iri/0.1/concepts/the-ledger","name":"台帳","summary":"ノードは、自分が受け取った有効なすべてのトランザクションを、組み込みの追加専用のRocksDBデータベースである台帳に格納することによって記録します。 IOTAネットワーク内の全ノードの集合データベースがタングルを構成します。"},{"id":"docs/iri/0.1/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/iri/0.1/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/iri/0.1/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/iri/0.1/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバーでIRIノードを実行する","summary":"Linuxサーバー上でIRIを実行すると、LinuxサーバーがIOTAネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、コンピュータはIRIノード用のLinuxサーバーになり、IOTAネットワークに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバーを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバーに接続します。"},{"id":"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/iri/0.1/how-to-guides/interact-with-an-iri-node","name":"ノードに情報をリクエストする","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/iri/0.1/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/iri/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"IRIのインストール、設定、または実行中に、これらの一般的な問題のいくつかを見かけることがあります。"},{"id":"docs/iri/0.1/references/api-reference","name":"APIリファレンス","summary":":::warning:\nこのAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。\n:::"},{"id":"docs/iri/0.1/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/iri/0.1/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/iri/0.1/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/iri/0.1/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/iri/0.1/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/hub/0.1/introduction/overview","name":"ハブ概要","summary":"ハブはアプリケーションにプラグインできるヘッドレスマルチユーザーウォレットです。gRPC APIを通して、ハブはIOTAトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、ID、預け入れアドレス、取り出しリクエストなどのユーザー情報を保存します..."},{"id":"docs/hub/0.1/concepts/sweeps","name":"スウィープ","summary":"スウィープは、ユーザーの取り出し操作を実行し、IOTAトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1つに転送するバンドルです。スウィープは、攻撃者が使用済みアドレスからトークンを盗む可能性を減らすためのオプションの安全機能です。"},{"id":"docs/hub/0.1/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/hub/0.1/how-to-guides/install-the-signing-server","name":"署名サーバーをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバーに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバーをインストールして実行します。"},{"id":"docs/hub/0.1/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本について..."},{"id":"docs/hub/0.1/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/hub/0.1/how-to-guides/integrate-hub","name":"ハブを暗号資産取引所に統合する","summary":"シナリオA： IOTAトークンが外部のオンラインウォレット（別名：ホットウォレット）に手動で転送される複数のユーザーアカウント。"},{"id":"docs/hub/0.1/references/api-reference","name":"APIリファレンス","summary":"タングルとハブデータベースへの接続を簡単にするために、ハブにはgRPC APIがあります。このAPIリファレンスを使用してメソッドを見つけ、メソッドが行うことを学んでください。"},{"id":"docs/hub/0.1/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/hub/0.1/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバに問い合わせることによって見つけることができます。"},{"id":"docs/hub/0.1/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/hub/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/compass/0.1/introduction/overview","name":"コンパス概要","summary":"コンパスはコーディネーターのオープンソース実装です。テストおよび開発の目的で、コンパスを使用して独自のIOTAネットワークを運用することができます。"},{"id":"docs/compass/0.1/how-to-guides/set-up-a-private-tangle","name":"プライベートタングルを設定する","summary":"自分のIOTAネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをIRIノードに接続することができます。そうすることで、自分のトランザクションを添付することができるプライベートタングルを持つことができます。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/compass/0.1/references/contribution-guidelines","name":"貢献ガイドライン","summary":""},{"id":"docs/trinity/0.1/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。"},{"id":"docs/trinity/0.1/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/trinity/0.1/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/trinity/0.1/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/trinity/0.1/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/trinity/0.1/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/trinity/0.1/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/trinity/0.1/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/receive-a-transaction","name":"トランザクションを受取る","summary":"トリニティには、トランザクションを受取り、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/trinity/0.1/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/trinity/0.1/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/trinity/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/utils/0.1/introduction/overview","name":"ユーティリティ","summary":"ユーティリティは、オープンソースのアプリケーションまたはプログラムであり、使用することも、適応させることも、自分のアプリケーションに組み込むこともできます。"},{"id":"docs/utils/0.1/mam-watcher/overview","name":"MAMウォッチャー概要","summary":"MAM（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。MAMウォッチャーを使用すると、チャネル上で暗号化されたメッセージに署名して送信し、そのチャネルを購読してメッセージを検証、復号化、および読み取ることができます。"},{"id":"docs/utils/0.1/one-command-tangle/overview","name":"ワンコマンドプライベートテストタングル","summary":"このアプリケーションを使用すると、単一のDockerコマンドを使用して独自のIOTAネットワークを設定できます。このコマンドを実行すると、独自のIOTAテストネットワークと2.7Pi（最大量）のテストIOTAトークンを使用できます。いかなる金銭的価値も危険にさらすことなく自分のアイデアやアプリケーションをテストするため..."},{"id":"docs/utils/0.1/raspberry-pi-pub-sub/overview","name":"Raspberry Piセンサーデータパブリッシャー","summary":"このアプリケーションは、Raspberry PiからDevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のDevnetノードでイベントストリーム（ZMQ）を購読し、データを受信したときに知らせるメッセージを表示します。"},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"P2Pエネルギーグリッド","summary":"エネルギーの供給はしばしば自動化されていますが、支払いシステムは統合するのに費用がかかり、そしてしばしば手動の介入を必要とします。IOTAを使用してピアツーピア（P2P）エネルギーグリッドを作成することで、電力の転送とその電力に対する支払いを自動化できます。この自動化により、インフラストラクチャはより動的になり、更新が..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"アプリケーションアーキテクチャ","summary":" P2Pエネルギーグリッドアプリケーションは、IOTAネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"P2Pエネルギーグリッドアプリをデプロイする","summary":"P2Pエネルギーグリッドアプリケーションの使用を開始するには、自身のアプリケーションをデプロイします。"},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"タングルデータストレージ概要","summary":"データは、官民組織のイノベーションを促進し、新たな収益源を生み出すために使用することができます。しかし、ベンダーに依存しないデータ検証方法がなければ、データを信頼することはできません。この設計図では、IOTAタングルをイミュータブルなデータ構造として使用し、サードパーティのストレージソリューション内のファイルの内容を検..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"アプリケーションアーキテクチャ","summary":"タングルデータストレージアプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"タングルデータストレージアプリをデプロイしてテストする","summary":"IPFSノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、IOTA財団のグラフィカルユーザーインターフェースを使用してファイルデータをアップロードし、ファイルデータを取得し、ハッシュを比較して内容を確認します。"},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"トラック&トレース概要","summary":"デューデリジェンスとベンダーに依存しないデータソースの両方が欠如しているため、流通ネットワーク内の回収可能資産は多くの場合、元の所有者に返却されません。この設計図では、IOTAタングルおよび他のIOTAテクノロジを使用して、IBCSグループが回収可能資産の回収のためのトラック&トレースシステムをどのように実施したかを説..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"アプリケーションアーキテクチャ","summary":"トラック&トレースアプリケーションはIOTA MAMプロトコルを使用して、回収可能資産にIDを付与し、MAMチャネルと呼ばれるトランザクションのストリームで回収可能資産を追跡します。"},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"トラック&トレースアプリをデプロイしてテストする","summary":"タングルでデータの追跡を開始するには、アプリケーションをデプロイし、IOTA財団のGUIを使用して資産を検索してアップロードします。"},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり..."},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"EventMachineオブジェクトでアカウントが開始されると、EventMachineオブジェクトは発生時にイベントを発行します。イベントの一例は、バンドルをノードに送信したときです。リスナーのインスタンスを作成することで、これらのイベントをリッスンしてイベントに対処することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり..."},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-java/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに格納します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配することなく、IOTAネットワークとやり..."},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"トランザクションを送受信する","summary":"アカウントでトランザクションを送受信するには、条件付預け入れアドレス（CDA）を使用する必要があります。CDAは、アカウント内のIOTAトークンの取り出しおよび預け入れに使用される可能性がある条件を指定できるようにした特別なアドレスです。"},{"id":"docs/iota-js/0.1/how-to-guides/listen-to-events","name":"アカウント内のイベントをリッスンする","summary":"アカウントオブジェクトは、発生したときにイベントを発行します。イベントの例としては、他のアドレスに資金を送ったり、預け入れを受け取ったりしたときです。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-js/0.1/references/cda-faq","name":"条件付預け入れアドレスに関するFAQ","summary":"timeout_atフィールドに指定する値は、送信者が預け入れをするのにどれだけ早くかかるかによって異なります。あなたが送信者と直接連絡を取り合っていて、両方ともが清算の転送を待っている場合は、より短いタイムアウトを指定できます。"},{"id":"docs/general/0.1/introduction/overview","name":"General overview","summary":"This section contains some prerequisite information that aims to help you complete some of our guides."},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"Expose your local device to the Internet","summary":"To connect a device to those outside of your local network, you need to expose it to the Internet. A common reason to expose your local device to the Internet i..."},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"Set up a Linux server on a virtual machine","summary":"Many of the IOTA tutorials and guides require a Linux operating system. If your computer is running a different operating system, you can use Linux inside a vir..."},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"Set up a single-board computer","summary":"A single board computer (SBC) is a small computer in which a single circuit board includes memory, input/output ports, a microprocessor and any other necessary ..."},{"id":"docs/general/0.1/references/troubleshooting","name":"Troubleshooting","summary":"Make sure that you selected a 64-bit version of Ubuntu in VirtualBox."},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTA Smart City Blueprints","summary":"This repository consists of examples implementing IOTA for Smart Cities"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTA is a clone of AstroPi, which is a project that used Raspberry Pis on the International Space Station (ISS) to keep astronauts up to date about their ..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"Build your own AstroPiOTA","summary":"In order to run AstroPiOTA, you must have the correct hardware and operating system for a Raspberry Pi."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"Run AstroPiOTA","summary":"The following instructions assume the operating system is configured. Because this installation has several components, scripts are included to make sure that e..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"Connect to the Raspberry Pi through SSH","summary":"If you want to run AstroPiOTA without a monitor and keyboard, you need it's network address to interact with it over SSH. To find the IP address of the Raspberr..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"Customize AstroPiOTA","summary":"The AstroPiOTA sender gathers sensor data from Sense HAT, publishes it to the scrolling marquee, and sends it in JSON format to a MAM channel on the Tangle. The..."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.258,1,32.945,2,42.779,3,32.945,4,3.397]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,5.067]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.217,4,4.915,5,26.005,6,26.005,7,26.005,8,26.005,9,26.005,10,26.005,11,26.005,12,26.005,13,26.005,14,26.005,15,26.005,16,21.185]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.188,4,3.299,17,14.54,18,31.997,19,28.421,20,28.421,21,28.421,22,31.997,23,31.997,24,4.852,25,31.997]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.181,4,4.284,26,35.394]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.051,4,4.588]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,2.837,4,3.148,17,14.126,27,30.531,28,19.732,29,30.531,30,30.531,31,30.531,32,30.531,33,30.531,34,9.988,35,30.531,36,30.531,37,30.531,38,30.531,39,30.531,40,30.531,41,14.123,42,30.531]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.37]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.089,4,4.644,43,34.301,44,34.301,45,34.301]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.37]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,3.136,4,3.907,17,11.887,24,4.323,34,10.459,46,15.278,47,15.278,48,9.522,49,15.278,50,5.103,51,8.47,52,23.225,53,11.606,54,9.109,55,28.398,56,15.278,57,10.029,58,15.278,59,10.377,60,15.184,61,13.571,62,10.935,63,15.278,64,20.816,65,13.571,66,9.481,67,19.364,68,20.406,69,9.899,70,10.377,71,23.435,72,13.571,73,15.278,74,11.606,75,12.446,76,10.377,77,10.377,78,9.481,79,15.278,80,11.606,81,12.446,82,15.278,83,14.832,84,10.935,85,10.377,86,9.109,87,13.571,88,19.092,89,9.899,90,13.972,91,19.364,92,13.571,93,15.278,94,15.278,95,16.373,96,15.278,97,15.278,98,12.446,99,13.571,100,11.606,101,15.278,102,10.377,103,11.606,104,19.092,105,15.278,106,12.446,107,15.278,108,15.278,109,15.278]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[83,20.03]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.277,4,4.336,17,7.282,24,6.23,50,6.542,83,11.491,89,12.691,110,19.587,111,12.155,112,11.678,113,10.502,114,10.859,115,9.313,116,10.859,117,15.957,118,9.58,119,17.398,120,17.398,121,19.587,122,17.398,123,19.587,124,19.587,125,15.957,126,17.398,127,17.398,128,17.398,129,17.398,130,17.398,131,17.398,132,17.398,133,17.398,134,17.398,135,13.304,136,19.587,137,14.88,138,11.678,139,10.502,140,17.398,141,8.178,142,17.398,143,14.02]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.37]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.225,24,4.506,41,13.745,116,16.474,144,29.715,145,29.715,146,26.394,147,29.715,148,29.715,149,24.207,150,29.715,151,21.269,152,26.394,153,29.715,154,29.715,155,29.715,156,29.715]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[83,20.03]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.275,4,4.36,24,5.288,41,10.001,50,10.099,83,12.325,89,14.008,111,13.416,112,12.89,113,11.592,114,11.986,115,10.279,116,16.765,118,10.575,119,19.204,120,19.204,122,19.204,126,19.204,127,19.204,128,19.204,129,19.204,130,19.204,131,19.204,132,19.204,133,19.204,134,19.204,135,14.685,141,9.027,146,19.204,157,21.62,158,21.62,159,21.62,160,21.62]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[161,43.651]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,3.084,4,4.296,51,15.251,54,16.4,116,15.251,143,28.207,161,24.434,162,14.713,163,27.508,164,27.508,165,24.434,166,24.434,167,27.508,168,27.508,169,27.508,170,27.508,171,27.508,172,27.508,173,27.508,174,27.508]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.37]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.297,24,3.883,28,13.298,34,8.377,102,17.392,103,19.452,138,15.267,175,25.606,176,17.392,177,20.86,178,25.606,179,20.86,180,22.744,181,23.048,182,17.392,183,14.196,184,27.643,185,33.932,186,15.267,187,25.606,188,25.606]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,5.067]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,3.084,4,3.829,24,5.179,116,21.724,162,13.364,189,20.81,190,30.341,191,32.985,192,20.81,193,20.81,194,21.196,195,20.81,196,20.81,197,20.81,198,20.81,199,20.81,200,20.81,201,20.81,202,34.806,203,20.81,204,19.995,205,20.81,206,29.437,207,20.81,208,22.363,209,20.81,210,20.81,211,20.81,212,20.81,213,20.81,214,20.81,215,20.81,216,20.81,217,20.81,218,20.81,219,20.81]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.37]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.592,4,3.898]],["docTitle/docs/iota-basics/0.1/introduction/overview",[4,5.067]],["docBody/docs/iota-basics/0.1/introduction/overview",[0,3.245,4,4.567,17,13.293,24,5.421,220,27.737,221,27.737,222,27.737,223,27.737,224,27.737,225,27.737,226,27.737,227,27.737,228,27.737,229,27.737,230,27.737]],["docTitle/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.37]],["docBody/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.236,4,2.452,24,4.896,34,7.779,41,11,50,7.942,67,16.151,84,23.112,90,14.177,183,13.184,231,23.779,232,23.779,233,23.779,234,23.779,235,23.779,236,23.779,237,23.779,238,23.779,239,23.779,240,23.779,241,32.289,242,23.779,243,23.779,244,23.779,245,23.779,246,23.779,247,23.779,248,21.122,249,23.779,250,23.779,251,23.779,252,23.779,253,23.779,254,23.779,255,23.779]],["docTitle/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.37]],["docBody/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.233,4,3.955,17,9.669,24,5.198,34,11.215,41,12.029,57,11.129,62,18.614,118,12.72,142,23.099,186,15.505,256,26.005,257,26.005,258,26.005,259,26.005,260,21.185,261,26.005,262,26.005,263,26.005,264,26.005,265,26.005,266,21.185,267,26.005,268,26.005,269,26.005]],["docTitle/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,3.37]],["docBody/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,2.814,24,5.255,28,17.999,270,34.658,271,34.658,272,34.658,273,34.658,274,34.658,275,34.658]],["docTitle/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.37]],["docBody/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.248,70,21.944,276,28.697,277,26.319,278,26.319,279,32.307,280,28.697,281,32.307,282,32.307]],["docTitle/docs/iota-basics/0.1/concepts/trinary",[57,21.031]],["docBody/docs/iota-basics/0.1/concepts/trinary",[57,15.31,283,35.774,284,35.774,285,35.774,286,35.774,287,35.774,288,35.774]],["docTitle/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.236,4,3.01,24,5.601,83,11.899,111,18.116,112,17.406,113,15.653,114,16.186,115,13.88,125,23.783,141,12.19,289,29.194,290,32.813,291,29.194,292,29.194,293,29.194]],["docTitle/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.249,4,2.884,24,5.45,48,12.005,50,9.341,83,11.4,111,17.356,112,16.676,113,14.996,114,15.507,115,13.298,116,15.507,117,22.785,141,11.678,294,27.969,295,27.969,296,27.969,297,24.844,298,27.969]],["docTitle/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.307,4,3.866,24,6.328,66,15.416,83,10.126,111,15.416,112,14.811,113,13.32,114,13.773,115,11.811,135,16.874,141,10.373,183,13.773,299,24.843,300,24.843,301,24.843,302,24.843,303,33.255]],["docTitle/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.228,4,3.429,17,9.236,24,6.328,83,10.126,111,15.416,112,14.811,113,13.32,114,13.773,115,11.811,116,13.773,117,20.238,125,20.238,139,17.831,141,10.373,186,19.827,304,22.066,305,24.843,306,20.238,307,24.843,308,24.843,309,24.843,310,27.091,311,24.843,312,24.843,313,24.843]],["docTitle/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.255,4,2.661,24,6.409,83,10.518,111,16.013,112,15.385,113,13.836,114,14.306,115,12.268,141,10.774,186,15.385,304,22.921,314,25.804,315,25.804,316,34.106,317,27.784,318,22.921,319,34.106,320,25.804,321,22.921,322,25.804]],["docTitle/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.37]],["docBody/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.301,17,8.308,24,5.809,28,11.604,34,7.31,57,9.563,83,9.107,111,13.866,112,13.322,113,11.981,114,12.388,115,10.624,116,12.388,141,9.33,186,13.322,260,18.203,323,22.345,324,19.848,325,22.345,326,22.345,327,22.345,328,22.345,329,22.345,330,22.345,331,22.345,332,30.94,333,22.345,334,22.345,335,15.177,336,22.345,337,22.345,338,22.345]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.37]],["docBody/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,2.941,339,37.379]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.37]],["docBody/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,2.903,266,29.782,277,29.782,340,21.797]],["docTitle/docs/iota-basics/0.1/references/security-levels",[0,3.37]],["docBody/docs/iota-basics/0.1/references/security-levels",[0,2.563,4,3.854,341,37.379]],["docTitle/docs/iota-basics/0.1/references/tryte-alphabet",[0,3.37]],["docBody/docs/iota-basics/0.1/references/tryte-alphabet",[0,2.563,84,26.755,342,37.379]],["docTitle/docs/iota-basics/0.1/references/units-of-iota-tokens",[4,5.067]],["docBody/docs/iota-basics/0.1/references/units-of-iota-tokens",[0,2.48,4,4.338,34,11.83,343,36.162,344,36.162]],["docTitle/docs/iota-basics/0.1/references/glossary",[0,3.37]],["docBody/docs/iota-basics/0.1/references/glossary",[0,3.238,4,4.158,34,10.169,52,18.326,57,13.303,162,14.855,208,17.089,345,22.495,346,22.495,347,22.495,348,22.495,349,22.495,350,22.495,351,22.495,352,22.495,353,22.495,354,22.495,355,22.495,356,22.495,357,22.495,358,22.495,359,22.495,360,22.495,361,22.495,362,22.495,363,22.495,364,22.495,365,22.495,366,22.495,367,22.495,368,22.495]],["docTitle/docs/the-tangle/0.1/introduction/overview",[0,3.37]],["docBody/docs/the-tangle/0.1/introduction/overview",[0,3.207,4,4.435,17,13.967,19,26.632,20,26.632,21,26.632,24,5.696,28,15.571,369,29.982,370,29.982,371,29.982,372,29.982]],["docTitle/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.37]],["docBody/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.268,4,3.282,17,13.483,24,5.911,34,13.353,57,9.963,118,15.567,373,23.281,374,23.281,375,31.827,376,31.827,377,23.281,378,23.281,379,23.281,380,23.281,381,23.281,382,23.281,383,23.281,384,23.281,385,23.281,386,23.281,387,23.281,388,23.281,389,23.281]],["docTitle/docs/the-tangle/0.1/concepts/tip-selection",[0,3.37]],["docBody/docs/the-tangle/0.1/concepts/tip-selection",[0,3.335,4,2.907,17,12.28,24,5.008,34,6.408,186,11.678,390,19.587,391,19.587,392,29.083,393,19.587,394,36.129,395,17.398,396,19.587,397,19.587,398,19.587,399,19.587,400,19.587,401,19.587,402,19.587,403,19.587,404,19.587,405,19.587,406,19.587,407,19.587,408,19.587,409,19.587,410,19.587]],["docTitle/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.37]],["docBody/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.12,69,26.912,139,16.521,186,18.371,411,30.813,412,19.965,413,30.813,414,28.212,415,30.813,416,27.37,417,38.211,418,30.813]],["docTitle/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.37]],["docBody/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.163,4,4.179,17,10.854,24,5.601,28,19.185,208,30.786,419,29.194,420,29.194,421,29.194,422,29.194,423,29.194,424,29.194,425,29.194,426,29.194,427,29.194]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.37]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.214,16,21.868,50,8.965,76,18.233,90,16.004,91,18.233,104,21.868,428,26.843,429,26.564,430,26.843,431,26.843,432,26.843,433,26.843,434,21.72,435,26.843,436,26.843,437,26.843,438,12.417,439,21.868,440,19.214,441,26.843,442,14.882]],["docTitle/docs/iota-js/0.1/README",[4,3.713,444,31.984]],["docBody/docs/iota-js/0.1/README",[0,3.094,4,3.602,48,10.12,50,4.616,83,10.905,86,8.24,87,12.276,88,17.663,89,17.335,90,15.952,112,8.24,162,9.125,180,31.023,266,11.259,278,11.259,392,20.325,414,14.727,444,12.276,445,6.962,446,13.821,447,9.279,448,9.388,449,13.821,450,13.821,451,13.821,452,13.821,453,13.821,454,13.821,455,13.821,456,40.55,457,13.821,458,30.299,459,12.276,460,13.821,461,13.821,462,13.821,463,13.821,464,13.821,465,13.821,466,13.821,467,13.821,468,13.821,469,13.821,470,13.821,471,13.821,472,13.821,473,13.821,474,13.821,475,13.821,476,13.821,477,13.821,478,21.682,479,13.821,480,13.821,481,13.821,482,19.259,483,13.821,484,13.821,485,13.821,486,13.821,487,13.821,488,13.821,489,13.821,490,13.821,491,13.821,492,10.499,493,13.821,494,13.821,495,9.893,496,13.821,497,13.821,498,12.276,499,10.499,500,13.821,501,7.41,502,13.821,503,13.821]],["docTitle/docs/iota-java/0.1/README",[4,3.713,91,24.458]],["docBody/docs/iota-java/0.1/README",[0,3.137,4,4.031,17,5.225,48,7.337,50,4.694,70,14.921,91,26.55,92,19.513,162,10.428,297,12.483,306,11.449,445,7.079,447,9.401,448,9.546,495,10.059,504,14.054,505,14.054,506,14.054,507,14.054,508,12.483,509,10.676,510,14.054,511,14.054,512,20.545,513,19.513,514,14.054,515,14.054,516,12.483,517,14.054,518,14.054,519,14.054,520,14.054,521,14.054,522,14.054,523,21.968,524,14.054,525,14.054,526,14.054,527,14.054,528,14.054,529,14.054,530,14.054,531,14.054,532,33.178,533,14.054,534,14.054,535,14.054,536,8.379,537,9.546,538,14.054,539,14.054,540,14.054,541,14.054,542,14.054,543,14.054,544,21.968,545,14.054,546,14.054,547,14.054,548,14.054,549,14.054,550,14.054,551,14.054,552,14.054,553,14.054,554,14.054,555,14.054,556,14.054,557,14.054,558,27.154,559,27.044,560,14.054,561,14.054,562,14.054,563,14.054,564,14.054,565,14.054,566,14.054,567,14.054,568,14.054,569,14.054,570,12.483,571,14.054]],["docTitle/docs/iota-go/0.1/README",[4,3.713,95,20.68]],["docBody/docs/iota-go/0.1/README",[0,3.265,4,4.1,17,6.551,48,5.885,50,5.885,76,11.968,85,26.092,95,19.733,98,14.354,99,15.651,118,8.618,162,10.599,208,19.824,445,8.875,447,7.541,448,11.968,570,15.651,572,17.62,573,17.62,574,17.62,575,17.62,576,14.354,577,17.62,578,17.62,579,17.62,580,17.62,581,17.62,582,17.62,583,17.62,584,17.62,585,17.62,586,17.62,587,17.62,588,17.62,589,17.62,590,26.096,591,17.62,592,17.62,593,17.62,594,34.36,595,26.096,596,17.62,597,17.62,598,17.62,599,17.62,600,17.62,601,17.62,602,17.62,603,17.62]],["docTitle/docs/iri/0.1/introduction/overview",[4,5.067]],["docBody/docs/iri/0.1/introduction/overview",[0,2.959,4,3.466,162,13.741,604,33.61,605,33.61,606,33.61,607,33.61,608,33.61,609,33.61,610,33.61]],["docTitle/docs/iri/0.1/concepts/the-ledger",[0,3.37]],["docBody/docs/iri/0.1/concepts/the-ledger",[0,3.248,4,3.207,24,5.827,100,23.626,140,27.626,162,10.607,611,31.101,612,31.101,613,31.101,614,25.336,615,31.101]],["docTitle/docs/iri/0.1/concepts/neighbor-iri-node",[162,16.76]],["docBody/docs/iri/0.1/concepts/neighbor-iri-node",[0,2.797,162,14.844,616,34.301,617,34.301,618,34.301,619,34.301,620,34.301,621,34.301]],["docTitle/docs/iri/0.1/concepts/transaction-validation",[0,3.37]],["docBody/docs/iri/0.1/concepts/transaction-validation",[0,3.248,4,3.092,17,11.147,162,15.41,622,29.982,623,37.565,624,29.982,625,29.982,626,29.982]],["docTitle/docs/iri/0.1/concepts/zero-message-queue",[0,3.37]],["docBody/docs/iri/0.1/concepts/zero-message-queue",[0,3.047,24,4.996,34,10.778,138,19.642,627,29.264,628,32.945,629,32.945,630,32.945,631,32.945,632,32.945,633,32.945,634,29.264]],["docTitle/docs/iri/0.1/concepts/local-snapshot",[0,3.37]],["docBody/docs/iri/0.1/concepts/local-snapshot",[0,3.255,24,5.459,28,11.924,64,20.394,84,16.434,162,14.311,635,22.96,636,22.96,637,22.96,638,22.96,639,20.394,640,22.96,641,31.525,642,22.96,643,28.003,644,31.525,645,22.96,646,31.525,647,22.96,648,22.96,649,22.96,650,22.96,651,22.96,652,22.96,653,28.003,654,22.96,655,22.96,656,22.96]],["docTitle/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[162,16.76]],["docBody/docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes",[162,12.468,657,36.559,658,36.559,659,36.559,660,36.559]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[661,43.651]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux",[0,2.992,24,5.997,48,4.879,76,9.922,86,13.498,91,26.865,104,11.901,116,12.552,135,9.922,141,6.1,162,15.283,183,12.552,191,20.11,318,12.976,447,6.252,537,9.922,614,11.901,661,12.976,662,14.608,663,12.976,664,11.097,665,11.097,666,12.976,667,12.976,668,12.976,669,12.976,670,12.976,671,12.976,672,14.608,673,12.976,674,14.608,675,14.608,676,14.608,677,14.608,678,14.608,679,14.608,680,14.608,681,22.639,682,14.608,683,14.608,684,14.608,685,14.608,686,14.608,687,14.608,688,14.608,689,14.608,690,14.608,691,12.976,692,14.608,693,14.608,694,14.608,695,14.608,696,14.608,697,14.608,698,9.465,699,14.608,700,14.608,701,14.608,702,14.608,703,14.608,704,14.608,705,14.608,706,14.608,707,14.608,708,14.608,709,14.608,710,14.608,711,14.608,712,14.608,713,14.608,714,14.608,715,14.608,716,14.608,717,14.608,718,14.608,719,14.608,720,14.608,721,14.608,722,12.976,723,14.608,724,14.608,725,12.976,726,12.976,727,12.976,728,12.976,729,11.901,730,12.976]],["docTitle/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[731,43.651]],["docBody/docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker",[0,2.852,24,4.895,48,9.145,51,10.43,54,11.217,76,12.779,143,30.834,162,15.526,165,16.711,166,16.711,447,8.051,501,14.682,614,15.326,663,16.711,664,14.292,665,14.292,666,16.711,667,16.711,668,16.711,669,16.711,670,16.711,671,16.711,673,16.711,698,20.917,722,16.711,725,16.711,726,16.711,727,16.711,728,16.711,730,16.711,731,16.711,732,18.813,733,18.813,734,15.326,735,18.813,736,18.813,737,18.813,738,18.813,739,18.813,740,18.813,741,18.813,742,18.813,743,18.813,744,18.813,745,18.813,746,18.813,747,18.813,748,18.813,749,18.813,750,18.813,751,14.292,752,16.711,753,18.813,754,18.813]],["docTitle/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.37]],["docBody/docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy",[0,3.129,24,5.225,755,26.21,756,26.21,757,26.21,758,26.21,759,34.459,760,26.21,761,26.21,762,40.894,763,26.21,764,26.21,765,26.21,766,15.053,767,26.21,768,26.21,769,26.21,770,18.76,771,26.21,772,26.21,773,26.21,774,26.21,775,26.21,776,26.21,777,26.21,778,26.21,779,26.21,780,26.21]],["docTitle/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.37]],["docBody/docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger",[0,3.281,17,11.248,162,10.318,643,33.557,653,33.557,781,30.254,782,30.254,783,30.254,784,30.254,785,24.646]],["docTitle/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.37]],["docBody/docs/iri/0.1/how-to-guides/interact-with-an-iri-node",[0,3.207,17,9.822,24,4.006,34,8.643,48,12.907,57,11.306,83,17.359,100,29.358,113,14.165,114,14.646,115,12.56,141,11.03,434,25.454,786,26.418,787,26.418,788,23.466,789,23.466,790,26.418]],["docTitle/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.37]],["docBody/docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.201,17,8.364,24,4.713,34,7.359,57,9.627,62,16.102,66,13.959,83,17.421,113,12.061,114,12.472,115,10.695,141,9.393,204,28.323,324,19.982,434,25.876,634,19.982,788,19.982,789,19.982,791,22.495,792,22.495,793,22.495,794,22.495,795,22.495,796,22.495,797,22.495,798,22.495,799,22.495,800,22.495,801,22.495,802,22.495]],["docTitle/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[512,27.354,803,31.984]],["docBody/docs/iri/0.1/how-to-guides/flink-tangle-stream-processing",[0,3.176,24,4.943,28,9.939,34,6.261,48,6.392,85,12.999,86,11.41,91,12.999,102,12.999,139,14.865,204,18.831,512,14.538,664,14.538,803,16.999,804,19.137,805,32.599,806,19.137,807,19.137,808,19.137,809,19.137,810,19.137,811,19.137,812,19.137,813,19.137,814,19.137,815,19.137,816,19.137,817,19.137,818,19.137,819,19.137,820,19.137,821,19.137,822,16.999,823,19.137,824,27.724,825,14.538,826,19.137,827,19.137,828,19.137,829,19.137,830,19.137,831,19.137,832,19.137,833,19.137,834,19.137,835,19.137,836,19.137,837,19.137,838,19.137,839,19.137,840,19.137,841,19.137,842,15.59,843,19.137,844,19.137,845,19.137,846,19.137,847,19.137,848,19.137,849,19.137,850,19.137,851,19.137,852,19.137]],["docTitle/docs/iri/0.1/how-to-guides/update-the-iri",[162,16.76]],["docBody/docs/iri/0.1/how-to-guides/update-the-iri",[0,2.328,50,11.34,162,15.644,183,18.824,691,30.158,853,33.952,854,33.952,855,33.952]],["docTitle/docs/iri/0.1/references/troubleshooting",[0,3.37]],["docBody/docs/iri/0.1/references/troubleshooting",[0,2.897,24,4.852,162,14.405,856,31.997,857,19.855,858,31.997,859,31.997,860,31.997,861,31.997,862,31.997,863,31.997,864,31.997,865,31.997,866,31.997]],["docTitle/docs/iri/0.1/references/api-reference",[48,16.413]],["docBody/docs/iri/0.1/references/api-reference",[0,3.314,4,1.153,17,4.156,24,4.067,48,6.109,50,3.734,83,16.818,100,8.492,118,5.468,277,9.107,278,9.107,280,9.93,290,9.93,321,9.93,395,9.93,414,7.593,434,25.605,495,13.092,867,11.179,868,11.179,869,11.179,870,11.179,871,41.263,872,36.652,873,33.614,874,18.291,875,11.179,876,11.179,877,11.179,878,11.179,879,11.179,880,11.179,881,11.179,882,9.107,883,11.179,884,11.179,885,9.93,886,11.179,887,11.179,888,11.179,889,11.179,890,11.179,891,11.179,892,11.179,893,11.179,894,11.179]],["docTitle/docs/iri/0.1/references/api-errors",[48,16.413]],["docBody/docs/iri/0.1/references/api-errors",[0,2.703,48,11.877,162,12.128,183,15.251,392,29.937,412,17.823,414,18.684,873,33.938,895,27.508,896,35.004,897,35.562,898,27.508,899,27.508,900,27.508,901,27.508,902,18.684,903,27.508,904,27.508,905,17.07,906,22.409,907,27.508,908,27.508,909,27.508]],["docTitle/docs/iri/0.1/references/data-in-the-ledger",[0,3.37]],["docBody/docs/iri/0.1/references/data-in-the-ledger",[0,2.903,162,12.468,910,36.559,911,36.559]],["docTitle/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,3.37]],["docBody/docs/iri/0.1/references/data-in-the-snapshot-metadata-file",[0,2.592,639,33.578]],["docTitle/docs/iri/0.1/references/iri-configuration-options",[162,16.76]],["docBody/docs/iri/0.1/references/iri-configuration-options",[0,3.232,24,4.758,48,11.981,69,20.33,162,10.701,204,26.247,414,26.247,912,22.803,913,22.803,914,21.312,915,38.642,916,27.871,917,23.836,918,31.377,919,27.871,920,23.836,921,19.471,922,23.836,923,22.803,924,22.803,925,22.803]],["docTitle/docs/iri/0.1/references/zmq-events",[204,33.379]],["docBody/docs/iri/0.1/references/zmq-events",[0,2.867,24,5.424,28,18.579,34,11.704,204,24.299,926,35.774]],["docTitle/docs/hub/0.1/introduction/overview",[0,3.37]],["docBody/docs/hub/0.1/introduction/overview",[0,3.302,4,4.369,24,5.815,34,8.508,48,8.685,927,22.212,928,26.005,929,26.005,930,26.005,931,23.099,932,26.005,933,23.099,934,26.005,935,26.005,936,26.005]],["docTitle/docs/hub/0.1/concepts/sweeps",[0,3.37]],["docBody/docs/hub/0.1/concepts/sweeps",[0,3.27,4,3.831,24,5.633,34,9.635,41,13.624,933,26.161,937,29.452,938,29.452,939,20.005,940,29.452,941,29.452,942,29.452,943,29.452]],["docTitle/docs/hub/0.1/how-to-guides/install-hub",[0,3.37]],["docBody/docs/hub/0.1/how-to-guides/install-hub",[0,3.284,4,1.547,24,4.274,34,4.908,50,5.011,51,8.318,68,10.739,85,10.19,102,15.697,135,10.19,434,9.31,447,9.89,495,10.739,698,9.721,857,14.341,896,13.326,939,21.509,944,15.003,945,9.721,946,16.542,947,15.003,948,20.528,949,13.326,950,24.056,951,15.003,952,15.003,953,13.326,954,10.19,955,15.003,956,15.003,957,15.003,958,11.397,959,15.003,960,15.003,961,15.003,962,15.003,963,31.667,964,15.003,965,12.222,966,13.326,967,15.003,968,12.222,969,15.003,970,15.003,971,20.528,972,15.003,973,15.003,974,15.003,975,15.003,976,15.003,977,15.003,978,15.003,979,15.003,980,15.003,981,15.003,982,17.556,983,15.003,984,15.003,985,15.003,986,13.326,987,13.326,988,13.326,989,15.003,990,15.003,991,15.003,992,15.003,993,15.003,994,15.003,995,10.19,996,15.003,997,15.003,998,15.003]],["docTitle/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.37]],["docBody/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.278,4,1.876,50,6.078,57,7.788,85,12.36,102,12.36,135,12.36,447,7.788,698,11.79,857,11.292,931,16.164,939,12.36,945,11.79,946,13.025,948,16.164,949,16.164,950,24.058,953,16.164,968,14.824,971,33.02,987,16.164,988,16.164,999,34.899,1000,18.197,1001,18.197,1002,18.197,1003,38.863,1004,31.67,1005,31.67,1006,18.197,1007,18.197,1008,26.723,1009,26.723,1010,16.164,1011,18.197,1012,18.197,1013,18.197,1014,18.197,1015,18.197,1016,18.197,1017,18.197,1018,18.197,1019,18.197,1020,18.197]],["docTitle/docs/hub/0.1/how-to-guides/get-started-with-the-api",[48,12.026,927,23.33]],["docBody/docs/hub/0.1/how-to-guides/get-started-with-the-api",[0,3.243,4,2.746,24,5.883,48,11.629,89,17.253,766,15.293,927,22.56,968,21.693,1021,26.629,1022,26.629,1023,26.629,1024,26.629,1025,26.629,1026,26.629,1027,23.653,1028,26.629,1029,26.629,1030,26.629,1031,26.629,1032,26.629,1033,21.693,1034,26.629]],["docTitle/docs/hub/0.1/how-to-guides/query-the-database",[1033,40.033]],["docBody/docs/hub/0.1/how-to-guides/query-the-database",[0,3.175,24,6.351,927,20.341,939,21.324,966,34.335,1033,31.49,1035,31.394,1036,31.394,1037,27.886,1038,31.394]],["docTitle/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.37]],["docBody/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.355,4,2.824,17,6.995,34,6.155,50,10.782,75,22.307,152,16.711,954,18.599,995,12.779,1039,32.283,1040,27.382,1041,18.813,1042,32.283,1043,18.813,1044,18.813,1045,18.813,1046,18.813,1047,18.813,1048,18.813,1049,18.813,1050,18.813,1051,18.813]],["docTitle/docs/hub/0.1/references/api-reference",[48,16.413]],["docBody/docs/hub/0.1/references/api-reference",[0,3.156,48,7.616,927,14.775,939,15.489,954,15.489,982,17.323,1052,22.803,1053,22.803,1054,22.803,1055,22.803,1056,22.803,1057,22.803,1058,22.803,1059,22.803,1060,22.803,1061,22.803,1062,22.803,1063,22.803,1064,22.803,1065,22.803,1066,22.803,1067,22.803,1068,22.803,1069,22.803,1070,22.803,1071,22.803,1072,22.803,1073,22.803,1074,22.803,1075,22.803,1076,22.803,1077,22.803,1078,22.803,1079,22.803,1080,22.803,1081,22.803,1082,22.803,1083,22.803,1084,22.803,1085,22.803,1086,22.803,1087,22.803,1088,22.803,1089,22.803,1090,22.803,1091,22.803,1092,17.323,1093,20.255]],["docTitle/docs/hub/0.1/references/command-line-flags",[0,3.37]],["docBody/docs/hub/0.1/references/command-line-flags",[0,2.48,1094,36.162,1095,36.162,1096,36.162,1097,36.162,1098,36.162]],["docTitle/docs/hub/0.1/references/database-tables",[0,3.37]],["docBody/docs/hub/0.1/references/database-tables",[0,3.239,48,10.197,1027,27.119,1037,27.119,1099,30.531,1100,30.531,1101,30.531,1102,30.531,1103,30.531,1104,30.531,1105,30.531,1106,30.531,1107,30.531,1108,30.531]],["docTitle/docs/hub/0.1/references/security-considerations",[0,3.37]],["docBody/docs/hub/0.1/references/security-considerations",[0,3.284,4,4.507,17,14.372,41,14.522,1109,31.394]],["docTitle/docs/hub/0.1/references/troubleshooting",[0,3.37]],["docBody/docs/hub/0.1/references/troubleshooting",[0,2.849,536,21.102,576,28.834,927,22.933,1110,35.394,1111,35.394,1112,35.394]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.37]],["docBody/docs/compass/0.1/introduction/overview",[0,3.12,4,4.767,24,4.996,34,10.778,1113,32.945,1114,32.945]],["docTitle/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.37]],["docBody/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.26,4,2.343,17,5.455,24,5.133,28,7.62,34,4.8,41,10.508,48,7.587,50,4.9,57,6.279,62,16.26,66,9.105,70,9.966,139,7.867,143,16.26,162,12.21,194,9.105,392,11.146,447,6.279,825,11.146,857,9.105,882,11.953,922,11.146,927,9.507,946,10.502,950,21.116,1115,14.673,1116,14.673,1117,9.966,1118,11.953,1119,11.953,1120,14.673,1121,14.673,1122,13.033,1123,14.673,1124,14.673,1125,14.673,1126,14.673,1127,14.673,1128,22.717,1129,14.673,1130,12.594,1131,14.673,1132,14.673,1133,14.673,1134,14.673,1135,14.673,1136,14.673,1137,14.673,1138,14.673,1139,14.673,1140,14.673,1141,14.673,1142,14.673,1143,20.178,1144,14.673,1145,13.033,1146,11.146,1147,14.673,1148,14.673,1149,14.673,1150,14.673,1151,14.673,1152,14.673,1153,14.673,1154,14.673,1155,14.673,1156,13.033,1157,14.673,1158,14.673,1159,14.673,1160,14.673,1161,24.69,1162,22.644,1163,14.673,1164,14.673,1165,11.146]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.37]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.02,4,3.037,51,16.329,143,29.125,162,13.877,340,17.56,501,15.792,922,22.374,950,22.374,995,20.005,1143,36.143,1145,26.161,1146,22.374,1166,23.993,1167,29.452,1168,23.993,1169,29.452,1170,29.452,1171,17.56,1172,29.452,1173,29.452]],["docTitle/docs/compass/0.1/references/contribution-guidelines",[0,3.37]],["docBody/docs/compass/0.1/references/contribution-guidelines",[0,2.903,447,18.118,448,24.832]],["docTitle/docs/trinity/0.1/introduction/overview",[0,3.37]],["docBody/docs/trinity/0.1/introduction/overview",[0,3.274,4,4.009,24,4.806,176,21.526,177,25.818,1174,31.692,1175,31.692,1176,31.692]],["docTitle/docs/trinity/0.1/concepts/hardware-wallet",[0,3.37]],["docBody/docs/trinity/0.1/concepts/hardware-wallet",[0,3.286,4,2.746,28,13.829,34,8.712,57,11.396,872,23.653,873,21.693,916,34.461,1177,38.796,1178,26.629,1179,23.653,1180,26.629,1181,38.796,1182,26.629,1183,26.629,1184,26.629]],["docTitle/docs/trinity/0.1/concepts/node-quorum",[0,3.37]],["docBody/docs/trinity/0.1/concepts/node-quorum",[0,2.922,34,12.093,1185,36.964]],["docTitle/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.288,24,6.378,67,21.526,179,25.818,181,21.526,182,21.526]],["docTitle/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.296,4,3.918,41,17.575,55,27.119,1186,30.531,1187,30.531,1188,30.531,1189,24.872]],["docTitle/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.257,51,13.184,53,18.064,54,14.177,176,16.151,1190,23.779,1191,23.779,1192,32.037,1193,23.779,1194,23.779,1195,36.662,1196,19.372,1197,23.779,1198,23.779,1199,23.779,1200,32.289,1201,23.779,1202,26.242,1203,23.779,1204,23.779,1205,29.867,1206,23.779,1207,23.779,1208,23.779,1209,23.779,1210,23.779]],["docTitle/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.079,162,12.606]],["docTitle/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.282,4,4.309,24,6.558,41,12.83,80,21.071,186,16.537,1211,22.596,1212,27.737,1213,22.596,1214,21.071,1215,27.737,1216,19.853]],["docTitle/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.237,24,4.806,41,17.985,186,23.181,1211,25.818,1216,27.829,1217,31.692,1218,25.818]],["docTitle/docs/trinity/0.1/how-to-guides/create-a-qr-code",[1218,40.033]],["docBody/docs/trinity/0.1/how-to-guides/create-a-qr-code",[0,2.714,4,3.364,24,4.947,80,24.783,115,15.51,118,15.956,1218,36.08,1219,32.623,1220,32.623,1221,32.623,1222,32.623,1223,32.623]],["docTitle/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.318,24,5.633,50,9.837,138,17.56,1224,29.452,1225,29.452,1226,26.161,1227,29.452,1228,29.452]],["docTitle/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.319,24,5.48,50,9.42,176,19.158,412,18.275,495,20.189,766,16.199,1229,28.206,1230,25.054,1231,28.206,1232,28.206,1233,28.206]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.36,24,3.974,68,18.76,181,17.802,558,17.802,1230,23.281,1234,26.21]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.264,1235,34.658,1236,26.329]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.283,17,10.95,176,29.022,995,20.005,1237,23.993,1238,29.452,1239,37.147,1240,29.452,1241,26.161,1242,26.161]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.259,4,3.537,50,11.456,162,11.698]],["docTitle/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.315,24,4.76,922,23.849,1243,31.394,1244,27.886,1245,31.394]],["docTitle/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.37]],["docBody/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.293,24,4.907,51,13.225,53,11.878,54,19.292,60,10.131,76,16.203,81,12.738,84,11.192,88,12.738,113,12.79,176,10.621,434,14.803,440,11.192,447,10.209,448,10.621,501,8.384,516,13.889,537,10.621,665,18.122,698,10.131,825,11.878,920,11.878,1010,21.189,1162,12.738,1196,12.738,1211,12.738,1246,15.636,1247,23.855,1248,15.636,1249,15.636,1250,15.636,1251,15.636,1252,15.636,1253,15.636,1254,15.636,1255,23.855,1256,23.855,1257,15.636,1258,15.636,1259,12.738,1260,15.636,1261,15.636,1262,15.636,1263,15.636,1264,15.636,1265,15.636,1266,15.636,1267,15.636,1268,15.636,1269,15.636,1270,15.636,1271,15.636,1272,15.636,1273,15.636,1274,15.636,1275,15.636,1276,13.889,1277,15.636,1278,15.636,1279,15.636,1280,11.878,1281,15.636,1282,15.636,1283,15.636]],["docTitle/docs/trinity/0.1/references/troubleshooting",[0,3.37]],["docBody/docs/trinity/0.1/references/troubleshooting",[0,3.348,4,2.86,24,5.421,1284,24.637,1285,19.853,1286,27.737,1287,27.737]],["docTitle/docs/utils/0.1/introduction/overview",[0,3.37]],["docBody/docs/utils/0.1/introduction/overview",[0,3.148,4,3.299,24,4.852,429,26.21,438,14.801,447,13.693,1288,28.421,1289,31.997,1290,31.997,1291,16.617,1292,31.997]],["docTitle/docs/utils/0.1/mam-watcher/overview",[438,22.732]],["docBody/docs/utils/0.1/mam-watcher/overview",[0,3.278,4,2.543,24,5.018,50,8.236,52,20.088,102,16.749,438,20.586,447,10.553,698,15.977,1293,24.659,1294,20.088,1295,21.903,1296,37.347,1297,24.659,1298,20.088,1299,24.659,1300,24.659,1301,24.659,1302,24.659,1303,21.903]],["docTitle/docs/utils/0.1/one-command-tangle/overview",[0,3.37]],["docBody/docs/utils/0.1/one-command-tangle/overview",[0,3.234,4,3.44,17,7.413,24,5.058,34,6.523,48,6.659,50,9.537,57,8.533,139,10.691,162,12.423,194,12.373,412,18.501,438,9.223,447,8.533,498,17.711,509,15.147,825,15.147,882,16.243,902,19.395,905,17.719,1119,16.243,1156,17.711,1162,16.243,1165,15.147,1216,14.272,1294,16.243,1303,17.711,1304,19.939,1305,19.939,1306,19.939,1307,19.939,1308,19.939,1309,19.939,1310,28.555,1311,19.939,1312,19.939,1313,19.939,1314,12.373,1315,19.939,1316,19.939,1317,19.939,1318,19.939,1319,15.147,1320,19.939,1321,19.939,1322,19.939,1323,19.939]],["docTitle/docs/utils/0.1/raspberry-pi-pub-sub/overview",[1291,18.7,1324,18.7]],["docBody/docs/utils/0.1/raspberry-pi-pub-sub/overview",[0,3.22,4,3.699,50,7.616,90,13.595,116,17.396,138,13.595,139,12.226,310,18.576,438,10.548,447,9.759,698,14.775,766,13.096,885,20.255,1130,12.642,1291,16.295,1294,18.576,1295,20.255,1324,11.843,1325,22.803,1326,35.873,1327,35.873,1328,22.803,1329,22.803,1330,22.803,1331,22.803,1332,22.803,1333,22.803,1334,22.803,1335,22.803,1336,31.377,1337,31.377,1338,22.803,1339,22.803,1340,22.803]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.37]],["docBody/docs/blueprints/0.1/introduction/overview",[0,3.152,4,4.507,137,21.796,139,15.384,1130,20.256,1341,23.374,1342,28.692,1343,19.488,1344,36.536,1345,23.374,1346,28.692,1347,19.488,1348,28.692,1349,23.374,1350,19.488,1351,23.374,1352,28.692]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.37]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.265,4,3.049,16,17.059,24,3.175,34,6.851,48,9.875,57,8.962,141,8.744,429,24.373,438,13.677,447,8.962,1130,20.646,1236,15.908,1341,17.059,1353,20.941,1354,20.941,1355,20.941,1356,20.941,1357,20.941,1358,15.908,1359,20.941,1360,20.941,1361,20.941,1362,14.989,1363,20.941,1364,20.941,1365,20.941,1366,20.941,1367,20.941,1368,20.941,1369,20.941,1370,20.941,1371,17.059,1372,18.601,1373,17.059,1374,20.083,1375,17.059,1376,17.059]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.37]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.252,4,2.562,50,8.297,141,10.373,945,16.096,1130,13.773,1291,12.902,1324,12.902,1341,20.238,1377,24.843,1378,17.782,1379,24.843,1380,22.066,1381,24.843,1382,20.238,1383,20.238,1384,24.843,1385,24.843,1386,22.066,1387,24.843,1388,24.843,1389,24.843,1390,22.066,1391,18.872,1392,18.872,1393,22.066,1394,22.066,1395,22.066,1396,22.066,1397,22.066,1398,18.872,1399,22.066]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.37]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.274,4,2.827,24,4.69,48,12.371,50,4.795,57,6.144,61,24.352,66,8.909,80,10.906,83,5.852,113,7.698,114,7.96,115,6.826,141,12.915,438,14.308,919,12.752,954,9.751,1202,10.276,1236,10.906,1259,11.696,1291,7.456,1324,7.456,1382,18.196,1383,11.696,1386,12.752,1390,12.752,1391,10.906,1392,10.906,1393,12.752,1394,12.752,1395,12.752,1396,12.752,1397,12.752,1398,10.906,1399,12.752,1400,26.956,1401,10.906,1402,24.352,1403,24.352,1404,20.826,1405,10.906,1406,12.752,1407,11.696,1408,14.357,1409,14.357,1410,14.357,1411,14.357,1412,14.357,1413,14.357,1414,22.336,1415,14.357,1416,14.357,1417,14.357,1418,19.84,1419,12.752,1420,14.357,1421,14.357,1422,14.357,1423,14.357,1424,14.357,1425,14.357,1426,14.357,1427,14.357,1428,14.357,1429,14.357,1430,22.336]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.37]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.253,4,3.896,89,19.602,137,22.983,141,12.632,429,23.443,447,12.947,945,19.602,1343,20.549,1382,24.646,1431,30.254,1432,30.254]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.37]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.305,4,2.46,17,10.753,28,8.121,34,7.804,50,9.659,57,12.377,62,17.074,66,14.803,83,6.373,86,9.322,90,14.222,137,11.878,202,28.742,276,25.69,512,11.878,945,10.131,954,19.644,1192,12.738,1343,23.666,1374,16.203,1378,17.074,1407,12.738,1433,13.889,1434,10.621,1435,23.855,1436,15.636,1437,15.636,1438,15.636,1439,15.636,1440,15.636,1441,15.636,1442,15.636,1443,15.636,1444,15.636,1445,15.636,1446,15.636,1447,15.636,1448,15.636,1449,15.636,1450,15.636,1451,23.855,1452,15.636,1453,23.855,1454,15.636,1455,15.636,1456,15.636,1457,15.636,1458,15.636,1459,15.636]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1347,33.379]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,2.837,24,4.629,74,23.194,429,25.668,438,17.575,1345,24.872,1347,25.806,1374,25.806,1375,24.872,1376,24.872,1434,20.738,1460,30.531,1461,30.531,1462,30.531,1463,16.927,1464,30.531]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[0,3.37]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,3.289,4,1.561,48,13.017,50,5.056,141,9.717,184,18.958,438,18.028,945,9.809,954,10.283,1118,18.958,1288,13.447,1345,29.536,1347,24.626,1378,10.836,1380,13.447,1434,24.626,1465,15.139,1466,15.139,1467,15.139,1468,15.139,1469,15.139,1470,12.333,1471,28.348,1472,15.139,1473,15.139,1474,15.139,1475,15.139,1476,15.139,1477,15.139,1478,23.272,1479,15.139,1480,15.139,1481,15.139,1482,15.139,1483,15.139,1484,15.139,1485,15.139,1486,15.139,1487,15.139,1488,15.139,1489,15.139,1490,15.139,1491,28.348,1492,15.139,1493,15.139,1494,15.139,1495,15.139,1496,15.139,1497,15.139,1498,15.139]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1347,33.379]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,3.216,4,4.261,24,3.658,48,10.89,66,14.97,83,16.842,141,13.614,438,15.082,447,10.324,1259,19.652,1291,12.528,1324,12.528,1347,26.87,1402,21.428,1405,18.326,1406,21.428,1407,19.652,1499,24.123,1500,24.123,1501,24.123,1502,36.933,1503,24.123]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.37]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.307,4,4.129,24,4.313,141,11.878,429,24.846,447,12.174,1374,24.681,1504,23.174,1505,28.447]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.37]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.162,48,12.334,50,9.746,83,8.377,306,16.744,945,13.317,1130,18.809,1171,20.227,1192,27.638,1349,27.638,1378,20.886,1405,15.614,1433,18.257,1434,25.083,1504,27.638,1506,20.553,1507,18.257,1508,18.257,1509,20.553,1510,20.553,1511,33.926,1512,20.553,1513,20.553,1514,20.553,1515,20.553,1516,20.553,1517,20.553,1518,20.553,1519,16.744,1520,20.553,1521,20.553,1522,20.553,1523,20.553,1524,20.553,1525,20.553,1526,20.553,1527,16.744,1528,20.553,1529,20.553,1530,20.553,1531,20.553]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.37]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.012,4,4.209,24,3.53,48,7.776,83,9.489,447,9.963,1130,22.629,1171,25.123,1349,33.25,1434,28.621,1504,33.25,1507,20.679,1508,20.679,1527,29.542,1532,23.281,1533,36.264,1534,23.281,1535,23.281,1536,23.281,1537,23.281]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[0,3.37]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,3.33,4,2.47,24,3.632,141,10,429,22.834,438,15.009,842,19.511,1350,16.268,1351,19.511,1374,22.038,1375,19.511,1376,19.511,1538,23.95,1539,23.95,1540,21.274,1541,23.95,1542,23.95,1543,23.95,1544,23.95]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[0,3.37]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,3.055,4,3.829,17,7.737,34,6.808,50,6.95,90,12.407,438,18.126,1350,23.201,1351,27.826,1373,16.953,1378,14.895,1545,20.81,1546,20.81,1547,20.81,1548,20.81,1549,20.81,1550,20.81,1551,20.81,1552,20.81,1553,26.148,1554,21.07,1555,29.437,1556,20.81,1557,20.81,1558,20.81,1559,20.81,1560,20.81,1561,20.81,1562,20.81,1563,20.81,1564,20.81,1565,20.81,1566,20.81,1567,20.81,1568,20.81,1569,20.81,1570,20.81,1571,20.81,1572,20.81,1573,20.81,1574,20.81,1575,20.81,1576,20.81,1577,20.81,1578,20.81,1579,20.81,1580,20.81,1581,20.81,1582,20.81,1583,20.81]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.37]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,2.972,4,3.501,141,14.176,447,14.53,1434,23.061,1584,33.952,1585,40.535,1586,33.952,1587,33.952]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.37]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.285,4,2.368,24,5.459,41,17.927,48,10.529,95,13.186,445,11.565,766,13.186,1588,18.704,1589,18.704,1590,18.704,1591,22.96,1592,22.96,1593,22.96,1594,22.96,1595,22.96,1596,22.96,1597,22.96,1598,22.96,1599,22.96,1600,22.96,1601,22.96,1602,31.525,1603,20.394,1604,22.96,1605,22.96,1606,22.96,1607,22.96,1608,22.96]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.37]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.216,24,5.998,34,7.892,50,8.057,95,13.854,445,20.814,1463,13.374,1554,17.267,1609,19.652,1610,19.652,1611,19.652,1612,19.652,1613,19.652,1614,19.652,1615,19.652,1616,19.652,1617,19.652,1618,19.652,1619,19.652,1620,21.428,1621,24.123,1622,24.123,1623,24.123,1624,24.123,1625,24.123,1626,24.123,1627,24.123,1628,24.123,1629,21.428,1630,24.123,1631,24.123]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.37]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.253,24,4.76,95,18.03,445,15.813,766,18.03,1632,31.394,1633,31.394,1634,38.655,1635,31.394,1636,31.394]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.37]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.283,24,5.633,95,16.915,181,20.005,182,20.005,509,22.374,766,16.915,1637,29.452,1638,29.452,1639,29.452,1640,29.452,1641,29.452,1642,29.452]],["docTitle/docs/iota-go/0.1/references/cda-faq",[1643,33.379]],["docBody/docs/iota-go/0.1/references/cda-faq",[0,2.909,41,14.944,445,16.273,1643,21.944,1644,26.319,1645,26.319,1646,32.047,1647,26.319,1648,26.319,1649,26.319,1650,26.319,1651,26.319,1652,26.319,1653,26.319]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.37]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.286,4,2.746,24,5.28,41,17.946,48,8.894,162,9.082,445,17.538,766,15.293,1519,21.693,1588,21.693,1589,21.693,1590,21.693,1654,26.629,1655,26.629,1656,26.629,1657,26.629,1658,26.629,1659,26.629]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.37]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.105,4,2.6,24,6.107,34,8.25,50,8.423,445,23.391,1609,20.544,1610,20.544,1611,20.544,1612,20.544,1613,20.544,1614,20.544,1615,20.544,1616,20.544,1617,20.544,1618,20.544,1619,20.544,1629,22.4,1660,22.4,1661,22.4,1662,25.218,1663,25.218,1664,25.218,1665,25.218]],["docTitle/docs/iota-java/0.1/references/cda-faq",[1643,33.379]],["docBody/docs/iota-java/0.1/references/cda-faq",[0,2.909,41,14.944,445,16.273,1643,21.944,1644,26.319,1645,26.319,1646,32.047,1647,26.319,1648,26.319,1649,26.319,1650,26.319,1651,26.319,1652,26.319,1653,26.319]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.37]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.283,4,2.791,24,4.103,34,8.853,41,16.276,48,9.038,181,18.381,445,17.724,766,15.542,1588,22.045,1589,22.045,1590,22.045,1603,24.037,1666,27.061,1667,27.061,1668,27.061,1669,22.045,1670,27.061,1671,27.061]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.37]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.203,4,2.6,24,5.727,50,8.423,445,22.529,1609,20.544,1610,20.544,1611,20.544,1612,20.544,1613,20.544,1614,20.544,1615,20.544,1616,20.544,1617,20.544,1618,20.544,1619,20.544,1660,22.4,1661,22.4,1672,25.218,1673,25.218,1674,25.218,1675,25.218,1676,25.218,1677,25.218,1678,25.218]],["docTitle/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.37]],["docBody/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.284,24,4.76,83,12.796,445,19.471,766,18.03,982,23.849,1679,31.394,1680,31.394]],["docTitle/docs/iota-js/0.1/references/cda-faq",[1643,33.379]],["docBody/docs/iota-js/0.1/references/cda-faq",[0,2.909,41,14.944,445,16.273,1643,21.944,1644,26.319,1645,26.319,1646,32.047,1647,26.319,1648,26.319,1649,26.319,1650,26.319,1651,26.319,1652,26.319,1653,26.319]],["docTitle/docs/general/0.1/introduction/overview",[67,24.458,1681,31.984]],["docBody/docs/general/0.1/introduction/overview",[4,4.016,67,23.774,482,23.843,492,20.392,917,20.392,1092,20.392,1130,14.882,1314,16.657,1404,20.392,1463,19.405,1681,23.843,1682,35.001,1683,26.843,1684,19.214,1685,23.843,1686,26.843,1687,21.868,1688,21.868,1689,25.053,1690,21.868,1691,26.843,1692,18.233,1693,20.392,1694,20.392,1695,20.392,1696,16.657,1697,20.392,1698,26.843,1699,26.843,1700,26.843,1701,23.843,1702,21.868]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[921,14.561,1358,17.826,1703,20.843,1704,19.116]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,0.381,4,0.573,51,9.251,54,3.311,59,14.581,60,10.811,69,10.811,70,9.269,72,14.822,74,4.219,78,10.355,86,3.311,95,5.745,118,6.675,141,2.319,149,4.524,151,3.975,181,3.772,182,13.082,183,21.978,194,8.468,340,16.606,412,3.598,429,3.446,499,7.599,501,5.363,513,4.933,536,5.964,558,15.881,729,11.117,734,4.524,751,4.219,770,28.569,785,4.524,857,3.446,902,6.794,905,3.446,914,17.02,917,7.599,921,19.267,939,9.269,946,3.975,965,4.524,1092,10.367,1117,6.794,1171,8.136,1214,4.219,1285,9.768,1319,4.219,1358,27.233,1362,7.16,1400,16.308,1401,12.676,1404,4.219,1463,9.251,1554,3.975,1684,7.16,1688,8.149,1689,13.786,1690,4.524,1692,6.794,1693,4.219,1694,10.367,1696,8.468,1697,4.219,1703,17.108,1704,22.69,1705,10.003,1706,4.933,1707,19.035,1708,4.933,1709,4.933,1710,27.579,1711,23.586,1712,30.858,1713,13.647,1714,16.686,1715,30.089,1716,25.057,1717,8.149,1718,5.554,1719,5.554,1720,4.933,1721,5.554,1722,5.554,1723,16.308,1724,5.554,1725,21.467,1726,4.524,1727,5.554,1728,5.554,1729,5.554,1730,8.885,1731,4.524,1732,4.933,1733,4.524,1734,4.524,1735,7.16,1736,4.524,1737,4.524,1738,17.488,1739,10.003,1740,9.768,1741,13.647,1742,9.768,1743,4.933,1744,14.822,1745,4.524,1746,4.933,1747,4.933,1748,5.554,1749,5.554,1750,5.554,1751,4.933,1752,5.554,1753,4.219,1754,10.003,1755,5.554,1756,11.117,1757,4.219,1758,4.219,1759,12.122,1760,5.554,1761,8.149,1762,5.554,1763,5.554,1764,4.524,1765,5.554,1766,4.933,1767,5.554,1768,5.554,1769,5.554,1770,5.554,1771,19.26,1772,5.554,1773,4.219,1774,5.554,1775,4.933,1776,5.554,1777,10.003,1778,10.003,1779,5.554,1780,23.382,1781,16.686,1782,12.122,1783,4.219,1784,5.554,1785,5.554,1786,5.554,1787,5.554,1788,19.26,1789,4.524,1790,10.003,1791,5.554,1792,4.524,1793,4.524,1794,4.524,1795,10.003,1796,4.219,1797,4.219,1798,5.554,1799,5.554,1800,5.554,1801,4.933,1802,8.885,1803,13.647,1804,4.933,1805,5.554,1806,5.554,1807,4.933,1808,4.933,1809,7.599,1810,5.554,1811,5.554,1812,5.554,1813,10.003,1814,4.524,1815,10.003,1816,3.975,1817,4.933,1818,4.933,1819,5.554,1820,5.554,1821,5.554]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[51,9.648,1314,10.799,1400,13.22,1696,10.799,1736,14.177,1737,14.177]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,0.469,4,0.706,34,2.238,51,23.597,54,15.721,57,2.928,59,4.647,60,7.804,69,12.592,77,4.647,78,12.06,81,5.574,85,4.647,95,6.918,103,5.198,118,3.347,138,4.079,182,4.647,183,12.282,194,12.06,310,5.574,317,5.574,335,8.181,340,16.714,492,9.15,501,16.491,536,15.721,537,4.647,558,8.181,664,5.198,729,15.832,734,18.047,752,6.077,770,15.856,857,10.012,902,4.647,905,10.012,914,10.959,917,5.198,946,4.897,958,9.15,965,5.574,1117,16.594,1165,5.198,1171,14.566,1202,17.487,1205,13.144,1226,6.077,1314,7.474,1319,5.198,1362,21.104,1373,5.574,1383,9.812,1400,31.527,1405,9.15,1463,16.346,1470,9.812,1669,9.812,1689,11.549,1692,4.647,1693,5.198,1694,9.15,1696,12.06,1697,5.198,1706,6.077,1707,5.198,1708,6.077,1710,6.077,1711,5.198,1726,13.144,1730,6.077,1732,6.077,1733,9.812,1734,18.047,1735,17.487,1736,24.019,1737,24.019,1738,9.812,1740,4.897,1742,4.897,1747,6.077,1756,5.574,1757,5.198,1758,5.198,1761,5.574,1764,5.574,1796,5.198,1797,5.198,1802,14.332,1804,6.077,1808,6.077,1814,19.902,1816,4.897,1822,6.842,1823,8.181,1824,13.201,1825,6.842,1826,4.897,1827,5.574,1828,19.677,1829,5.574,1830,6.077,1831,9.812,1832,6.842,1833,6.842,1834,6.842,1835,6.077,1836,6.842,1837,6.842,1838,6.077,1839,6.842,1840,6.842,1841,6.842,1842,6.842,1843,6.842,1844,10.699,1845,9.812,1846,6.842,1847,6.077,1848,6.842,1849,10.699,1850,6.842,1851,6.842,1852,5.574,1853,5.574,1854,12.045,1855,5.574,1856,6.842,1857,6.842,1858,6.842,1859,5.198,1860,6.842,1861,5.574,1862,12.045,1863,6.842,1864,6.842,1865,6.842,1866,19.902,1867,6.077,1868,6.077,1869,6.842,1870,6.077,1871,21.655,1872,5.574,1873,5.574,1874,6.842,1875,6.842,1876,6.842,1877,6.842,1878,19.435,1879,6.842,1880,6.842,1881,6.842,1882,6.077,1883,6.842,1884,6.842,1885,6.077,1886,15.832,1887,5.574]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[1314,12.401,1696,12.401,1824,13.574,1888,17.751,1889,16.28]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,1.488,4,0.449,24,1.689,50,1.455,51,7.668,53,3.309,57,1.864,59,2.959,60,5.195,65,3.869,68,14.361,70,2.959,74,10.506,77,2.959,78,15.189,86,2.597,103,8.462,118,7.912,151,9.899,182,10.987,183,17.581,194,6.912,248,3.869,335,9.394,340,19.281,499,3.309,501,5.972,508,3.869,509,8.462,536,4.78,558,7.566,627,9.894,751,3.309,770,20.531,785,6.532,857,2.703,902,10.987,905,17.23,906,9.074,914,21.08,920,3.309,921,6.912,995,5.446,1117,18.181,1146,3.309,1166,6.532,1168,3.549,1189,19.94,1196,3.549,1205,3.549,1276,3.869,1314,14.37,1319,3.309,1324,5.785,1343,5.446,1358,20.334,1404,3.309,1418,3.869,1463,15.902,1540,3.869,1554,5.739,1620,3.869,1669,18.865,1684,3.118,1688,3.549,1689,13.054,1692,2.959,1693,6.091,1694,6.091,1696,16.61,1701,3.869,1702,3.549,1704,9.074,1707,17.592,1711,17.592,1712,14.368,1717,3.549,1723,6.091,1726,16.345,1731,3.549,1733,6.532,1734,9.074,1735,7.973,1740,14.361,1744,14.368,1753,3.309,1756,3.549,1759,9.894,1764,6.532,1773,21.093,1775,3.869,1789,6.532,1794,3.549,1797,12.288,1801,3.869,1807,16.199,1816,5.739,1818,14.368,1823,2.959,1824,10.987,1828,9.894,1830,3.869,1831,3.549,1838,3.869,1844,7.122,1845,3.549,1847,3.869,1861,11.267,1868,3.869,1871,15.729,1872,6.532,1882,7.122,1888,12.285,1889,14.857,1890,37.523,1891,8.018,1892,3.869,1893,4.356,1894,4.356,1895,4.356,1896,4.356,1897,4.356,1898,14.368,1899,4.356,1900,4.356,1901,3.869,1902,4.356,1903,4.356,1904,4.356,1905,3.869,1906,4.356,1907,8.018,1908,8.018,1909,4.356,1910,4.356,1911,13.854,1912,4.356,1913,21.694,1914,25.478,1915,16.176,1916,4.356,1917,4.356,1918,4.356,1919,4.356,1920,9.894,1921,4.356,1922,12.285,1923,12.285,1924,8.018,1925,4.356,1926,7.122,1927,4.356,1928,8.018,1929,4.356,1930,4.356,1931,3.869,1932,4.356,1933,3.869,1934,7.122,1935,11.139,1936,8.018,1937,23.776,1938,8.018,1939,8.018,1940,12.285,1941,8.018,1942,7.122,1943,4.356,1944,8.018,1945,8.018,1946,4.356,1947,8.018,1948,4.356,1949,4.356,1950,3.869,1951,4.356,1952,4.356,1953,12.285,1954,11.139,1955,11.139,1956,3.869,1957,4.356,1958,3.309,1959,9.074,1960,4.356,1961,4.356,1962,4.356,1963,4.356,1964,4.356,1965,4.356,1966,4.356,1967,4.356,1968,4.356,1969,4.356,1970,4.356,1971,4.356,1972,3.869,1973,3.869,1974,4.356,1975,4.356,1976,11.139,1977,8.018,1978,13.83,1979,4.356,1980,4.356,1981,4.356,1982,8.018,1983,4.356,1984,6.532,1985,4.356,1986,4.356,1987,4.356,1988,4.356,1989,4.356,1990,4.356,1991,11.139,1992,4.356,1993,4.356,1994,6.532,1995,4.356,1996,4.356,1997,4.356,1998,4.356,1999,4.356,2000,4.356,2001,4.356,2002,4.356,2003,4.356]],["docTitle/docs/general/0.1/references/troubleshooting",[2004,43.651]],["docBody/docs/general/0.1/references/troubleshooting",[69,20.151,448,21.125,537,21.125,665,29.195,857,19.299,1122,27.626,1168,25.336,1742,22.261,1753,23.626,1793,25.336,1809,23.626,1823,21.125,1824,21.125,1849,27.626,2004,27.626,2005,31.101,2006,31.101,2007,31.101,2008,25.336,2009,31.101]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,2.42,1371,19.116,2010,20.843,2011,20.843]],["docBody/docs/smartcity/0.1/introduction/overview",[4,3.346,34,7.835,115,11.387,118,15.87,139,12.841,412,15.518,438,11.079,442,20.401,921,20.134,1130,13.278,1291,12.438,1324,12.438,1343,16.268,1350,16.268,1371,26.432,1374,16.268,1391,18.194,1392,18.194,1463,13.278,1470,19.511,1687,19.511,1695,18.194,1702,19.511,1723,18.194,1783,18.194,1823,16.268,1855,19.511,1873,19.511,2010,28.82,2011,21.274,2012,23.95,2013,23.95,2014,23.95,2015,23.95,2016,21.274,2017,21.274,2018,21.274,2019,23.95,2020,19.511,2021,21.274,2022,21.274,2023,21.274,2024,21.274,2025,23.95,2026,21.274,2027,23.95]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[442,27.245]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[77,9.966,78,9.105,90,8.748,98,11.953,106,11.953,115,6.976,118,7.177,138,8.748,139,12.18,317,11.953,438,12.858,439,11.953,440,10.502,442,22.433,501,12.18,536,8.748,921,14.097,1119,11.953,1130,19.849,1213,11.953,1214,11.146,1216,10.502,1236,11.146,1237,11.953,1242,13.033,1280,17.257,1291,11.798,1314,9.105,1324,11.798,1350,9.966,1391,11.146,1392,11.146,1398,21.116,1401,11.146,1463,17.351,1687,11.953,1695,21.116,1723,11.146,1753,11.146,1761,11.953,1783,11.146,1824,9.966,1826,10.502,1831,11.953,1855,11.953,1873,11.953,1933,13.033,1942,13.033,2016,13.033,2017,20.178,2018,13.033,2020,18.506,2021,13.033,2022,13.033,2023,13.033,2024,13.033,2028,14.673,2029,14.673,2030,13.033,2031,14.673,2032,24.23,2033,22.4,2034,20.178,2035,20.178,2036,14.673,2037,14.673,2038,14.673,2039,14.673,2040,14.673,2041,14.673,2042,14.673,2043,33.852,2044,20.178,2045,14.673,2046,14.673,2047,14.673,2048,14.673,2049,14.673,2050,14.673,2051,14.673,2052,14.673,2053,14.673,2054,14.673,2055,14.673,2056,14.673,2057,14.673,2058,14.673,2059,13.033,2060,13.033,2061,14.673,2062,11.953,2063,13.033,2064,13.033,2065,13.033,2066,13.033,2067,13.033]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[442,19.963,1280,27.354]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[57,10.444,75,22.817,77,8.168,78,7.463,86,7.17,118,5.882,149,9.797,335,16.576,340,16.699,440,8.608,442,13.53,501,10.407,536,11.572,537,16.576,1117,13.184,1118,9.797,1161,10.682,1165,14.745,1166,9.797,1171,7.17,1202,8.608,1244,17.241,1280,9.136,1285,8.608,1291,21.279,1324,21.279,1372,10.682,1463,10.761,1684,8.608,1689,13.893,1692,8.168,1711,14.745,1735,13.893,1794,9.797,1824,8.168,1826,8.608,1835,10.682,1845,9.797,1859,9.136,1871,13.184,1886,9.797,1887,15.812,1889,15.812,1892,17.241,1901,27.297,1911,14.745,1914,21.677,1920,17.241,1922,10.682,1923,17.241,1956,10.682,1958,18.539,1959,15.812,2026,10.682,2032,17.468,2033,17.468,2068,17.241,2069,12.026,2070,12.026,2071,9.136,2072,9.797,2073,19.41,2074,12.026,2075,19.41,2076,12.026,2077,28.008,2078,28.008,2079,21.677,2080,15.812,2081,24.404,2082,17.241,2083,12.026,2084,12.026,2085,12.026,2086,10.682,2087,17.241,2088,17.241,2089,19.41,2090,12.026,2091,14.745,2092,19.41,2093,12.026,2094,12.026,2095,12.026,2096,12.026,2097,12.026,2098,19.41,2099,12.026,2100,12.026,2101,10.682,2102,12.026,2103,12.026,2104,12.026,2105,12.026,2106,12.026,2107,10.682,2108,10.682,2109,9.797,2110,9.136,2111,19.41]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[442,19.963,501,19.307]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,1.822,4,2.451,54,15.84,68,6.588,69,5.963,77,10.568,78,12.542,83,9.686,86,9.276,89,5.963,90,12.05,95,5.286,118,7.61,138,5.487,139,4.935,151,6.588,184,7.498,194,16.486,340,9.276,412,15.398,414,6.251,434,5.711,438,4.257,442,15.986,501,10.837,536,22.732,576,7.498,842,12.675,905,14.747,920,11.82,921,5.711,958,15.354,995,10.568,1117,6.251,1146,6.992,1171,9.276,1189,12.675,1202,11.137,1213,7.498,1284,8.175,1291,16.762,1298,12.675,1324,15.946,1343,6.251,1362,14.467,1527,7.498,1684,11.137,1685,17.953,1692,6.251,1696,14.747,1697,6.992,1709,8.175,1731,7.498,1735,6.588,1738,7.498,1742,11.137,1745,19.36,1757,11.82,1758,6.992,1792,16.465,1793,12.675,1796,6.992,1797,6.992,1809,18.053,1814,16.465,1823,6.251,1826,6.588,1829,7.498,1852,12.675,1853,7.498,1861,7.498,1866,12.675,1871,10.568,1886,7.498,1898,17.953,1911,15.354,1931,8.175,1937,8.175,1940,8.175,1958,6.992,1959,7.498,1984,7.498,2008,7.498,2032,24.884,2033,24.884,2071,6.992,2072,7.498,2079,13.82,2080,7.498,2082,13.82,2087,8.175,2088,8.175,2091,11.82,2101,13.82,2109,16.465,2110,18.053,2112,9.203,2113,9.203,2114,9.203,2115,9.203,2116,15.559,2117,9.203,2118,23.765,2119,9.203,2120,9.203,2121,9.203,2122,9.203,2123,15.559,2124,9.203,2125,9.203,2126,9.203,2127,15.559,2128,9.203,2129,9.203,2130,9.203,2131,15.559,2132,9.203,2133,9.203,2134,13.82,2135,9.203,2136,15.559,2137,15.559,2138,9.203,2139,9.203,2140,9.203,2141,9.203,2142,9.203,2143,9.203,2144,9.203,2145,9.203,2146,9.203,2147,15.559,2148,7.498,2149,9.203,2150,8.175,2151,8.175]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[340,11.915,1291,10.379,1324,10.379,1773,15.181,1871,13.574]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[57,7.198,59,17.122,60,16.333,78,18.761,115,7.997,177,13.702,183,18.618,335,11.424,340,18.025,434,15.642,442,9.325,501,16.21,536,10.028,751,12.777,770,21.64,905,10.437,914,11.424,1171,21.446,1285,12.039,1291,20.335,1324,20.335,1362,12.039,1463,9.325,1707,12.777,1740,12.039,1773,12.777,1789,20.535,1792,29.303,1809,12.777,1816,12.039,1826,12.039,1827,13.702,1852,13.702,1853,20.535,1859,19.149,1867,14.94,1870,26.855,1871,20.535,1887,13.702,1911,12.777,1950,14.94,1958,12.777,1994,13.702,2008,13.702,2032,12.039,2033,12.039,2071,12.777,2072,13.702,2080,13.702,2086,14.94,2091,12.777,2107,22.391,2108,14.94,2109,20.535,2110,19.149,2148,13.702,2152,25.208,2153,16.82,2154,25.208,2155,25.208,2156,16.82,2157,16.82,2158,16.82,2159,16.82,2160,16.82]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[442,19.963,2062,29.334]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[4,1.352,28,3.915,54,4.494,59,5.12,60,13.476,66,4.678,67,5.12,106,16.944,115,6.234,116,4.179,118,8.51,138,21.756,139,12.633,151,9.385,179,6.141,183,9.646,190,6.696,194,4.678,260,6.141,335,5.12,416,6.696,438,16.555,439,6.141,440,5.396,442,17.103,456,6.696,459,15.454,492,5.727,499,5.727,558,8.905,822,6.696,902,5.12,905,4.678,906,10.681,914,8.905,921,8.136,958,9.96,982,5.727,986,6.696,1092,5.727,1093,11.646,1130,20.23,1171,7.817,1179,6.696,1214,5.727,1216,12.453,1237,14.174,1241,11.646,1285,5.396,1291,3.915,1298,19.195,1314,8.136,1324,3.915,1350,5.12,1398,19.639,1401,5.727,1403,6.696,1419,20.929,1463,15.402,1519,6.141,1553,11.646,1554,5.396,1690,6.141,1695,5.727,1696,10.796,1717,6.141,1720,11.646,1740,9.385,1742,5.396,1743,15.454,1745,6.141,1746,11.646,1751,6.696,1757,5.727,1758,5.727,1766,18.475,1782,15.454,1783,15.8,1796,5.727,1816,5.396,1817,11.646,1823,5.12,1827,6.141,1829,6.141,1859,5.727,1866,6.141,1872,10.681,1885,11.646,1905,6.696,1926,6.696,1934,6.696,1953,11.646,1972,20.929,1973,6.696,1984,6.141,1994,10.681,2020,6.141,2030,6.696,2032,22.08,2033,21.063,2034,24.676,2035,6.696,2044,15.454,2059,11.646,2060,18.475,2062,10.681,2063,6.696,2064,6.696,2065,6.696,2066,6.696,2067,6.696,2068,15.454,2071,5.727,2091,9.96,2110,9.96,2134,6.696,2148,22.631,2150,11.646,2151,22.963,2161,17.398,2162,7.538,2163,25.852,2164,7.538,2165,20.799,2166,17.398,2167,17.398,2168,7.538,2169,13.111,2170,13.111,2171,13.111,2172,7.538,2173,7.538,2174,7.538,2175,13.111,2176,7.538,2177,7.538,2178,13.111,2179,7.538,2180,7.538,2181,13.111,2182,7.538,2183,7.538,2184,7.538,2185,7.538,2186,7.538,2187,7.538,2188,7.538,2189,13.111,2190,7.538,2191,7.538,2192,7.538,2193,7.538,2194,7.538,2195,7.538,2196,7.538,2197,7.538,2198,13.111,2199,13.111,2200,7.538,2201,7.538,2202,7.538,2203,7.538,2204,7.538,2205,7.538]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/references/cda-faq":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["0",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["0.2",{"_index":2188,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["01",{"_index":1769,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0またはvalu",{"_index":841,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":425,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":363,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["1.0",{"_index":2073,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":574,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":511,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["10.197.0.57",{"_index":1979,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.197.3.57",{"_index":1985,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":956,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":967,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["100",{"_index":644,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1417,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":648,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["10:57:54.417129",{"_index":977,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10gb",{"_index":813,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1123,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":258,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":259,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":849,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":281,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1357,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2103,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["115200",{"_index":1970,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["120",{"_index":784,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["127.0.0.1",{"_index":1749,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["128",{"_index":1449,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1450,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["13",{"_index":2183,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["13906",{"_index":978,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["14265",{"_index":671,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["15600",{"_index":669,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["16",{"_index":1988,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45日間マイルストーンを送信できます。マイルストーン送信の間隔は2",{"_index":1127,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["17.05",{"_index":740,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["18.04",{"_index":946,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["18でiri",{"_index":858,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["1i",{"_index":1243,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":348,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1217,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["1つが81トライトのセグメントに分割されます。その後、各セグメントは26",{"_index":240,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つにテストデータを公開したくないかもしれません。代わりに、iota",{"_index":1305,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1445,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":1664,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのiriノードと1",{"_index":1308,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":250,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのアドレスを導出するために使用されます。秘密鍵とアドレスは1対1のペアと考えることができます。アドレスは公開されており、クライアントはトランザクションのアドレスフィールドを使用してiotaトークンとメッセージを送信できます。秘密鍵は秘密であり、アドレスからiota",{"_index":234,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのキーダイジェストを導出するために1回ハッシュ化されます。たとえば、1つのキーフラグメントによって1",{"_index":243,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つの頂点を表す一種の有向非巡回グラフ（dag",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["1つは、iota",{"_index":225,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1229,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["1と2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1と2",{"_index":389,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":286,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["1に接続され、トランザクション1はトランザクション2",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1のアドレスから80i",{"_index":267,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":996,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":385,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1より大きい場合、署名は1",{"_index":261,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":368,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1分程度待つと、トランザクションが確定されたときにzmq",{"_index":1338,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["1回だけ作成および登録されます。資産の管理権は時間の経過とともに変化し、特定の資産の管理権の変化に関連する情報を集約するためにmamチャネルを使用することは意味があります。mamチャネルを使用することにより、実装の複雑さを制限でき、すべての異なる管理権の変更を適切な資産に簡単にリンクできます。さらに、mam",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["1回でもiota",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1363,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化され、81",{"_index":244,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":255,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1度iotaトークンを取り出したアドレスからは2度とiotaトークンを取り出してはいけません。したがって、転送バンドルでは、iotaトークンを取り出したアドレスの残りのiota",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1度吸収し、セキュリティレベルごとに27回圧搾します（セキュリティレベル1だと27回、セキュリティレベル2だと54回、セキュリティレベル3だと81",{"_index":238,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":832,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":845,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":309,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["2,187、4,374、または6,561",{"_index":239,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,187、4374、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントがあります。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。これは27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":242,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":571,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1442,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1255,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1159,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["2.7piのiota",{"_index":1144,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["20",{"_index":1430,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":872,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["2015",{"_index":1361,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016",{"_index":2102,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1432,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1364,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20mi",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["20の事前にビルドされた（layerディレクトリ内の）マークル木を使用します。このマークル木は、コンパスが1年以上30",{"_index":1316,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["2128",{"_index":1451,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1453,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":785,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["243",{"_index":876,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["24を指定すると、コンパスは31年以上にわたってマイルストーンを送信できますが、マークル木を作成するには長い時間がかかります。深さ8",{"_index":1129,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["25",{"_index":2104,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1455,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["255",{"_index":1751,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["255.255.0.0",{"_index":1986,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["255.255.255.0",{"_index":1980,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256",{"_index":1982,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["256\\*256",{"_index":1997,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2673",{"_index":339,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":241,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27、54、または81",{"_index":251,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27、54、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":254,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":252,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2944.17",{"_index":1999,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2gb",{"_index":812,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16",{"_index":1987,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":409,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのステップでイベントを発生させることができます。1つはペンディング状態用、もう1",{"_index":1679,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":410,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":396,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2",{"_index":390,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクション（マイルストーンのセキュリティレベルが2",{"_index":387,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":1591,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの末尾トランザクションの1つにも接続されています。）この2",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1028,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1031,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの親を参照する必要があります。トランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドやバンドル内の最後のトランザクションのbranchtransactionフィールドとtrunktransact",{"_index":230,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":398,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":344,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":268,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":341,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/security-levels":{}}}],["2人のユーザー間で転送を発行します（processtransf",{"_index":1051,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["2回以上トークンを取り出してはいけません。したがって、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":262,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2度とiota",{"_index":933,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":311,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2種類のリスナーがあります。1つはチャネルを使用するもので、もう1",{"_index":1633,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2行の下に秘密の81",{"_index":1299,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":284,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["3",{"_index":57,"docTitle":{"docs/iota-basics/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/trinary":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3+)とpip",{"_index":789,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":515,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":260,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["30mi",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["30秒ごとに、transfer",{"_index":1604,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1004,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":353,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["384ハッシュ関数を使用してシードとインデックスを足し合わせたものをハッシュ化し、81",{"_index":237,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["3\\*8",{"_index":1755,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["3x8=24",{"_index":1983,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["3つの0のトリット（000トリット）がトライトの9",{"_index":424,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":361,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3のアドレスから80i",{"_index":269,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1187,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":367,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法3",{"_index":366,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":285,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["4",{"_index":62,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1254,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":436,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["400",{"_index":873,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["401",{"_index":904,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["4gb",{"_index":663,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["4gb以上の空きram",{"_index":1311,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["4x3",{"_index":2074,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、数式：2depthのdepthによって定まります。上の図では、マークル木の深さは2",{"_index":377,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["4のiri",{"_index":692,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1025,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1136,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["5",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["50",{"_index":1182,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["50,000",{"_index":654,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":656,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["55mi",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3に関連付けられています。したがって、トランザクション5はトランザクション2と3",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["64",{"_index":665,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1185,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/node-quorum":{}}}],["6か7",{"_index":862,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6でiota",{"_index":997,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親です。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":372,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["6はトランザクション5（および表示されていない別のトランザクション）に接続されています。そのため、トランザクション6はトランザクション5を介して間接的にトランザクション3",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["7",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["8",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":788,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":2025,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["81",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/references/glossary":{},"docs/utils/0.1/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":898,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":227,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1121,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["8、またはnode.j",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["9",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90文字です。余分な9",{"_index":222,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["990,100",{"_index":646,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["9999",{"_index":1005,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1360,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9個（デブネット上のmwm）または7個（スパムネット上のmwm）の0",{"_index":274,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":349,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1413,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1493,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abc123の登録id",{"_index":1490,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abov",{"_index":2185,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["absent",{"_index":903,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["acceler",{"_index":2048,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["acceleromet",{"_index":2047,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["access",{"_index":1801,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["account",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["account.send()メソッドに渡して、使用可能な残高の合計をcda",{"_index":1665,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["account.shutdown",{"_index":1607,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["actual",{"_index":1784,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["acycl",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["ad",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["adapt",{"_index":1669,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["add",{"_index":1789,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["add()メソッドからのレスポンスにはipfsハッシュが含まれています。これは、タングルに添付される前にメタデータとsha256",{"_index":1522,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["addit",{"_index":1956,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["addneighbor",{"_index":868,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["addneighbors(uri",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-errors":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["addresscountaggreg",{"_index":847,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["address、obsoletetag、timestamp、value、currentindex、およびlastindex",{"_index":423,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["administr",{"_index":1800,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["advanc",{"_index":1813,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["again",{"_index":1965,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["aid",{"_index":2022,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["aim",{"_index":1686,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["allow",{"_index":1690,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":850,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["alon",{"_index":2076,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["alpha",{"_index":394,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":406,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alreadi",{"_index":1718,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["alway",{"_index":752,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amazon",{"_index":1405,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amount",{"_index":1226,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["amp;lt;packag",{"_index":595,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1211,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["anoth",{"_index":1984,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyon",{"_index":2168,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["anyth",{"_index":1700,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["apach",{"_index":512,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":48,"docTitle":{"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/database-tables":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["apiがあります。api",{"_index":224,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1052,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":913,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["apiが提供されます。オブジェクトリポジトリに保存される情報には、iotaタングル上でアクセス可能なチャネルのルートアドレスや制限付きmamチャネルが使用されている場合、mamチャネルに保存されている情報を復号化するために必要な暗号化キー（サイドキーと呼ばれます）が含まれます。次のタプルが作成され、オブジェクトリポジトリに保存されます。&amp;lt;assetuniqueid",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiとして書かれたバックエンドの2つの部分から成ります。このpoc",{"_index":1508,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1381,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1389,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1035,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["apiの形式を取ります。生産者と消費者の両方が自身をグリッドに登録するために使用します。エンティティが登録されると、グリッドはエンティティのmam出力チャネルの監視を開始します。登録が成功すると、idが返されます。このid",{"_index":1484,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは2",{"_index":1513,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["apiは、webサーバー上でホストされる通常のweb",{"_index":1483,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは、永続的に情報を格納する必要があるアーキテクチャのどの部分でも使用できます。apiは標準データベースのcrud操作をサポートし、すべての呼び出しでエンティティ登録id",{"_index":1487,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":867,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1023,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1139,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiを使い始めるでgrpc",{"_index":1111,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["apiを使用しているため、すべてのzmq",{"_index":810,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを使用して情報を交換できます。この設計図のためにmam",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiを通してiri",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiを通して、ハブはiotaトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、id",{"_index":928,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1157,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":615,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["apiサーバー：node.js（express",{"_index":1500,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["apiメソッドの詳細については、api",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":864,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":895,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":719,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":755,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":399,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":397,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの組み合わせで行われます。mam",{"_index":1475,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["api（get",{"_index":1523,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["appli",{"_index":1765,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["applic",{"_index":1205,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["applications/utilities/termin",{"_index":1200,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["appnam",{"_index":2144,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["approach",{"_index":1842,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["appvers",{"_index":2145,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":948,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":945,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["archive（ppa",{"_index":959,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["aren't",{"_index":1698,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["argon2",{"_index":929,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["argument",{"_index":1949,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["arm64",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armbian",{"_index":1927,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["artimaガイドはjreでscala",{"_index":817,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":290,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iri/0.1/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":293,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1210,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["ask",{"_index":1971,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["asset",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["assetcustodianid",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetcustodianidは最初はassetownerid",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetowneridに関する情報は、アプリを通じて挿入されるか、外部の情報源から取得されます（アプリを使用するための登録サーバーなど。この場合は会社のvat",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1208,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueidは、qrコードスキャンによって読み取られ、登録apiを通じてアクセスするassetuniqueidサーバー（例：gs1",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assign",{"_index":1722,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["assum",{"_index":2112,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["astronaut",{"_index":2029,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropi",{"_index":2017,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiota",{"_index":442,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiota'",{"_index":2197,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["attach",{"_index":1165,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["attachmenttimestamp",{"_index":279,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":874,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["authent",{"_index":1236,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["autoconfirm",{"_index":336,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["automat",{"_index":2120,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["avail",{"_index":906,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["avoid",{"_index":1728,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["avxベースのpow",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["aw",{"_index":1846,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awesom",{"_index":1265,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["awsまたはmicrosoft",{"_index":1385,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1386,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["aとは対照的に、トークンを複数のユーザーからコールドウォレットに移動するのはそれほど簡単ではありません。ただし、ハブにハブ所有者のアドレスの一部を無視させることは可能です。そのためには、hub_addressテーブル行のis_cold_storageフィールドを1に設定する必要があります。これにより、sweepservic",{"_index":1044,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["aに100mi",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["backcolour",{"_index":2191,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["background",{"_index":1403,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["badgerdbを使用している場合は、def",{"_index":1595,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["badgerdbデータベースに格納されています。データベースディレクトリを保存するパスをdb",{"_index":1593,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balanceev",{"_index":1055,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["balancesubscript",{"_index":1040,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balancesubscriptionrequest",{"_index":1056,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["bar",{"_index":1883,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["barometr",{"_index":2045,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["base",{"_index":1905,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["basics/0.1/how",{"_index":800,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["batteri",{"_index":2094,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["baud",{"_index":1968,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bazel",{"_index":950,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["bazelを使ってビルドし、dock",{"_index":1124,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["be",{"_index":2187,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["beast.cc:65",{"_index":979,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["befor",{"_index":1697,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["behavior",{"_index":1967,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["benefici",{"_index":1834,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["best",{"_index":413,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["beta1",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["between",{"_index":416,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bigger",{"_index":1995,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bin/hub/hub",{"_index":970,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1013,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1110,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["biometr",{"_index":1235,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{}}}],["bit",{"_index":1753,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["blake2",{"_index":1456,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1457,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blue",{"_index":1179,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["blueprint",{"_index":2011,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["board",{"_index":1889,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["boot",{"_index":2121,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["bootstrap",{"_index":498,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1152,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1154,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bosch",{"_index":1393,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["both",{"_index":1717,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["bottom",{"_index":2156,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["bounci",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1176,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["branchtransact",{"_index":278,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":875,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iri/0.1/concepts/the-ledger":{}}}],["branchtransactionフィールドとtrunktransact",{"_index":371,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュ値を参照して、トランザクション（子）を他の2",{"_index":228,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["bridg",{"_index":1877,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["broadcast",{"_index":1155,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["broadcastandstor",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":877,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["browser",{"_index":1806,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["bt",{"_index":1803,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":837,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":808,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":809,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1175,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["build",{"_index":1280,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["build.gradleファイルにiotaledg",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":828,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["built",{"_index":1830,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bundl",{"_index":266,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{}}}],["bundle.md",{"_index":802,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["bundles、addresses、tags、approve",{"_index":881,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["byte",{"_index":1977,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["bがまだ存在していない場合は、ユーザーbがハブに作成されます（createus",{"_index":1050,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーa",{"_index":1049,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーaからiota",{"_index":1043,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["c",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1194,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["calibr",{"_index":2181,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["call",{"_index":1827,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["callback",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["can't",{"_index":1808,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["capabl",{"_index":2095,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["captur",{"_index":2107,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["card",{"_index":1923,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["carefulli",{"_index":2106,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["cartesian",{"_index":2056,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["case",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["castl",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1002,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":445,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaから取り出しまたはcda",{"_index":1680,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["cdaがまだアクティブであることを確認した後、sendtocda()メソッドを使用してioaトークンをcda",{"_index":1674,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":1617,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにパースするには、depositオブジェクトのparsemagnetlink",{"_index":1631,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send",{"_index":1662,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに予想量が含まれている場合は、cdaオブジェクトをaccount.send()メソッドに渡すことで、予想量のiotaトークンをcda",{"_index":1627,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":1622,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの状態によって、cdaからiotaトークンを取り出すことができるのか、cdaにiota",{"_index":1660,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは81",{"_index":1589,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":1621,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。その結果、cda",{"_index":1611,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、それらを任意の形式にシリアル化して配布することができます。たとえば、timeout_at、multi_use、およびexpected_amountの各パラメータを使用して、cda",{"_index":1629,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaへiota",{"_index":1626,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":1625,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクとして使用するには、cdaをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":1676,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":1678,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":1630,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するには、cda",{"_index":1612,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを使用して、署名済みアドレスの再利用のリスクを軽減します。誰かにiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、あなたは送信者にあなたがその時間の後にだけcdaからiotaトークンを取り出すつもりであることを知らせます。その結果、送信者は、cdaの残り時間に応じて、iota",{"_index":1610,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値がなくなる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":1651,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["cdaフィールドをgeneratecda",{"_index":1672,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cda）を使用する必要があります。cdaは、アカウント内のiota",{"_index":1609,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["celsiu",{"_index":2173,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["centigrad",{"_index":2172,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["certain",{"_index":1798,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["certif",{"_index":1198,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chang",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channel",{"_index":106,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["channelroot",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey&amp;gt",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["checkconsist",{"_index":879,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["checkconsistency(transact",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":955,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["choos",{"_index":1860,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["chrome、firefox",{"_index":1439,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["chronolog",{"_index":2205,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["circuit",{"_index":1892,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":831,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["citi",{"_index":2010,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["clean",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["click",{"_index":1814,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["client",{"_index":1872,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["client.crt、client.key、およびca.crt）をハブサーバーにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバーのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1018,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1022,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["clone",{"_index":2016,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["close",{"_index":1875,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloud",{"_index":1383,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cloudflareなどのパブリックipfsゲートウェイを使用して、トランザクションハッシュを使用してipf",{"_index":1528,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["cmd+spacebar",{"_index":1881,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1008,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1262,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["codes.dag.sh",{"_index":1220,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["color",{"_index":2194,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["column",{"_index":1812,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["combin",{"_index":2115,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["come",{"_index":1826,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["command",{"_index":905,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["command変数を別のapi",{"_index":790,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["common/flags/flags.h",{"_index":1095,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["commun",{"_index":1288,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["compact",{"_index":1899,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compani",{"_index":1841,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["compar",{"_index":2186,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["comparison",{"_index":415,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["compass",{"_index":1119,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1151,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["complet",{"_index":1688,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["compon",{"_index":2082,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["compos",{"_index":1310,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1323,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["comput",{"_index":1824,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["concept",{"_index":1805,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["config.ini",{"_index":706,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["config.json",{"_index":1134,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1423,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1422,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1132,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["configur",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["configurationに移動して、ノードのurlhttp&#x3a;//localhost:14265",{"_index":1321,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["confirmed.jsファイルでは、iota",{"_index":325,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["congratul",{"_index":1863,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["connect",{"_index":340,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["consid",{"_index":2001,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["consist",{"_index":2013,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["consol",{"_index":2199,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["consum",{"_index":1473,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contain",{"_index":1683,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["continu",{"_index":1932,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["convert",{"_index":1241,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["convertor",{"_index":2201,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["coordin",{"_index":2057,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["coordinates.net",{"_index":1416,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["copi",{"_index":1757,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cord",{"_index":2111,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["core",{"_index":303,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":159,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["correct",{"_index":1794,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["countri",{"_index":2133,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["cp2102",{"_index":1916,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["cpu",{"_index":1122,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/references/troubleshooting":{}}}],["creat",{"_index":59,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["createitemchannel",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createuserrepli",{"_index":1057,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["createuserrequest",{"_index":1058,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["cron",{"_index":2154,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["crontab",{"_index":2108,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["cryptograph",{"_index":1691,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["ctps1",{"_index":345,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ctrl",{"_index":825,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1014,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1030,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":871,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":350,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":351,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1240,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["current",{"_index":1743,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["currentindex",{"_index":323,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドと、バンドルの終わり（先頭トランザクション）を定義するlastindexフィールドの両方が与えられます。次に、先頭トランザクションを除くバンドル内の各トランザクションは、trunktransactionフィールドを介して互いに接続されます。次に、各トランザクションのaddress、value、obsoletetag、currentindex、lastindex、およびtimestampの各フィールドの値が、スポンジ関数によって吸収され圧搾され、81",{"_index":257,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":307,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["custom",{"_index":2062,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["cを押してrepl",{"_index":826,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1149,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["cキーを押し、docker",{"_index":1322,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":745,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":590,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":435,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["daemon",{"_index":1169,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":356,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["dag）であり、2015年にserguei",{"_index":369,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["danceなどのweb",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["danger:json.exception.parse_error.101",{"_index":974,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["danger:シードごとにアカウントを1",{"_index":1603,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["data",{"_index":1130,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["databas",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["data変数をasciitotryt",{"_index":292,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["date",{"_index":2030,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dave",{"_index":2065,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1003,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":691,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["dbfiles.iota.org",{"_index":866,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["dbに追加して更新するためのストレージrest",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":695,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ddn",{"_index":1781,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["de",{"_index":2066,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":994,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["dedic",{"_index":1858,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["default",{"_index":1861,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["defer",{"_index":1606,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["degre",{"_index":2184,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["delet",{"_index":1492,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deni",{"_index":1167,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["depend",{"_index":1990,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dependencies.jarという.jar",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["depth",{"_index":392,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-errors":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depthパラメータの値を減らします。iri",{"_index":899,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1133,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["describ",{"_index":2109,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["desktop",{"_index":1196,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusb",{"_index":1964,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dev/ttyusbx",{"_index":1960,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1276,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["developer'",{"_index":2140,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["developブランチから新しいgit",{"_index":1263,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1275,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["devic",{"_index":1358,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["device'",{"_index":1799,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["devnet",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["devnet.thetangle.org",{"_index":316,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":334,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":1628,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":315,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetで自分のアカウントをテストしていて、十分な残高がない場合は、devnet蛇口からdevnet",{"_index":1663,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetタングル上にあることを確認したい場合は、hashフィールドの値をコピーしてdevnet",{"_index":1340,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetトークンは、mainnet",{"_index":1428,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1426,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1388,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1590,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードのzmqaddress",{"_index":1334,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1233,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":709,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":787,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp",{"_index":1724,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1118,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["differ",{"_index":1802,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["digest",{"_index":302,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["dikw",{"_index":1355,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["direct",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["directli",{"_index":2087,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["discord",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["discordの#helpおよび#fullnod",{"_index":865,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1287,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":658,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["display",{"_index":1807,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["distribut",{"_index":1828,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1201,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":1780,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["do",{"_index":1713,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":502,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dockerとdock",{"_index":1309,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコマンドを使用して独自のiotaネットワークを設定できます。このコマンドを実行すると、独自のiotaテストネットワークと2.7pi（最大量）のテストiota",{"_index":1304,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerコマンドを使用して自身のiota",{"_index":1289,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["dockerコンテナでiri",{"_index":731,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":735,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナも再起動するには、dock",{"_index":750,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする(#ビルド済みのiri",{"_index":737,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":736,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドする(#ソースコードからiri",{"_index":738,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":739,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、コンピュータはiriノード用のlinuxサーバーになり、iota",{"_index":732,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":749,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1135,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["document",{"_index":1343,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["doesn't",{"_index":1912,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["domain",{"_index":1771,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["don't",{"_index":1733,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["doubl",{"_index":1856,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["doubt",{"_index":2007,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["down",{"_index":2160,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["download",{"_index":1202,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["driver",{"_index":2147,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["dropdown",{"_index":1795,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duck",{"_index":1788,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["dure",{"_index":2166,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["dynam",{"_index":1725,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["e",{"_index":1228,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["e0328",{"_index":976,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["each",{"_index":1829,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["earth",{"_index":2021,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earthquak",{"_index":2023,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["earth’",{"_index":2054,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["easiest",{"_index":2119,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["edit",{"_index":1320,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["effect",{"_index":1819,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["effici",{"_index":1902,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["embed",{"_index":1904,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["enabl",{"_index":2134,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":633,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["endpoint",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["energi",{"_index":1345,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["english",{"_index":2123,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enough",{"_index":2190,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["enter",{"_index":729,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["entri",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":402,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["enviro",{"_index":1336,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["environ",{"_index":1695,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":816,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1330,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["equilibria",{"_index":411,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["error",{"_index":982,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["errorcod",{"_index":1087,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["error。例：status::cancel",{"_index":1059,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["establish",{"_index":1878,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["eth",{"_index":1944,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ethernet",{"_index":1913,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ev",{"_index":441,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":821,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["event_logger.go",{"_index":1637,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":1634,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトでアカウントが開始されると、eventmachin",{"_index":1632,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":1638,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["ev）の充電料金をiota",{"_index":437,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exampl",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["example&lt",{"_index":603,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":601,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["execut",{"_index":1940,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1193,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["exist",{"_index":1739,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":1653,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールドを持つcda",{"_index":1652,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expected_amountフィールド値を持つcda",{"_index":1648,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["expectedamount",{"_index":1615,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["experi",{"_index":2083,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["explor",{"_index":310,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["expos",{"_index":1703,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extern",{"_index":1772,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["extract",{"_index":1854,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["facad",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fahrenheit",{"_index":2174,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fail",{"_index":2125,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["fals",{"_index":322,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["faq",{"_index":1643,"docTitle":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["fastest",{"_index":1879,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":1952,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["featur",{"_index":1896,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1264,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1266,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1250,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fetcher.j",{"_index":1301,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetcher.jsファイルに、sender.j",{"_index":1302,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetchtemp.j",{"_index":1331,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["fetchtemp.jsファイルとzmqwatcher.jsファイルはモジュールとしてエクスポートされ、index.j",{"_index":1335,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["few",{"_index":1785,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["field",{"_index":1761,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fijter'",{"_index":2067,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1171,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1147,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["final",{"_index":2164,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["find",{"_index":1740,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["findtransact",{"_index":880,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["findtransactionobject",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1585,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":1815,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["first",{"_index":1973,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["flash",{"_index":1928,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["flink",{"_index":805,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":806,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":803,"docTitle":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["folder",{"_index":1852,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["follow",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["forc",{"_index":2049,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["fork",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["format",{"_index":2060,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["forward",{"_index":1710,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["found",{"_index":1953,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["foundat",{"_index":600,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["framework",{"_index":1253,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["free",{"_index":1837,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["function",{"_index":337,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["gateway",{"_index":1741,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gateway4",{"_index":1760,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gather",{"_index":2162,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["gcc、clang、または@iota_toolchain",{"_index":949,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["gener",{"_index":67,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["generate_ca.sh",{"_index":1001,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1012,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1007,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatecda()メソッドは以下のフィールドを持つcda",{"_index":1677,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":836,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["get",{"_index":2098,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["getaccountdata",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1060,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getaddressinforequest",{"_index":1061,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbal",{"_index":882,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1062,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalancerequest",{"_index":1063,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalances(address",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":226,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["getbundl",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1039,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1064,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1065,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getinclusionst",{"_index":321,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":319,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":331,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":883,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":297,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":298,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.j",{"_index":2142,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":720,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":753,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":884,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettips(\\[callback",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":395,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iri/0.1/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":886,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["gettrytes(hash",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1066,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1067,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["get呼び出しを使用して、ページサイズ10のページ5",{"_index":1496,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ginkgo",{"_index":594,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":598,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":698,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["github",{"_index":447,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":1624,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":675,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1283,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1114,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":936,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":678,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":676,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["give",{"_index":1776,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["given",{"_index":1943,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["gnu/linux",{"_index":2100,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":95,"docTitle":{"docs/iota-go/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["goal",{"_index":1832,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":599,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":432,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["googl",{"_index":1382,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{}}}],["googleアカウントでのoauth",{"_index":1387,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1443,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1435,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1440,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1444,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goでのpow",{"_index":592,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":433,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":573,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":572,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gp",{"_index":1414,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1209,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["grid",{"_index":1346,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["grpc",{"_index":927,"docTitle":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["grpcc",{"_index":1024,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":993,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1021,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバーを提供します。ハブは、対話するために使用できるgrpc",{"_index":992,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":944,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guard（gpg",{"_index":962,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guid",{"_index":1689,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["guides/confirm",{"_index":801,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["guiを介してネットワーク上でトランザクションを送受信する場合は、http&#x3a;//localhost:14265で自分のノードに接続して、以下のシードでログインするようにiota",{"_index":1318,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["gyroscop",{"_index":2050,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hard",{"_index":2195,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hardwar",{"_index":1835,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["hash",{"_index":276,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["hash(hash(ノード1",{"_index":383,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ1",{"_index":379,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ3",{"_index":381,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(ノード2",{"_index":384,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ2",{"_index":380,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ4",{"_index":382,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hashcashと同様に、各トランザクションはそれが検証されることができる前にpowを含まなければなりません。このpowは、有効なトランザクションを作成するのにかかる時間および計算能力を増大させることによって、iotaネットワークにスパム防止を提供します。さらに、スパムトランザクションがネットワークに及ぼす影響を減らすために、ノードは有効なpow",{"_index":421,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["hat",{"_index":2033,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hdmi",{"_index":2089,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["headless",{"_index":2061,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["heat",{"_index":2180,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hello",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1687,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["helpフラグを付けてiri",{"_index":923,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["here",{"_index":1855,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["high",{"_index":439,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["histori",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["home/binディレクトリを$path",{"_index":952,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hook",{"_index":2019,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["host",{"_index":1726,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1407,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["http",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1156,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["http&#x3a;//localhost:14265のノードに接続して以下のシードでログインするようにiota",{"_index":1160,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["httpconnector",{"_index":1659,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/iotaledger/iota.j",{"_index":2027,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1494,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1491,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1495,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1408,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1409,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//www.gp",{"_index":1415,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsではなくhttpプロトコルを使用していることを確認してください。ノードのアドレスは、コマンドラインフラグのapiaddress",{"_index":975,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["httpsプロキシサーバーを設定したい場合は、nginx",{"_index":780,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":775,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":939,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":991,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":990,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1053,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hub/db/db.cc",{"_index":1096,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/server/server.cc",{"_index":1097,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/service/sweep_service.cc",{"_index":1098,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub_address",{"_index":1100,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address_bal",{"_index":1101,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address行でis_cold_storageを0に設定し、seed_uuid",{"_index":1048,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hub_address行でis_cold_storageを1に設定し、seed_uuid",{"_index":1047,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1068,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1088,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["huge",{"_index":2000,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["humid",{"_index":2035,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["i'm",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1273,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ibc",{"_index":1539,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["id",{"_index":954,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ident",{"_index":2203,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1411,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1448,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":1658,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":1597,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1446,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfig",{"_index":1941,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ignor",{"_index":1748,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["illegalargumentexcept",{"_index":1173,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["immut",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["implement",{"_index":2014,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["import",{"_index":1766,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["imu",{"_index":2044,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["includ",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["index",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1328,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["indic",{"_index":2182,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["individu",{"_index":2114,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["inerti",{"_index":2042,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["inet",{"_index":1747,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inexpens",{"_index":1918,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:depth",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["info:github",{"_index":1294,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":1946,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":763,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:このテストトークンはdevnet",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:無料のspamnet",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["inform",{"_index":1685,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["init",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initi",{"_index":2165,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["initiatetransf",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["input",{"_index":897,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["input/output",{"_index":1893,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insert",{"_index":1930,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["insid",{"_index":1825,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["inspir",{"_index":2064,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["instal",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1279,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["instead",{"_index":1989,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["instruct",{"_index":1796,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["int128",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["integr",{"_index":1919,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interact",{"_index":1958,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["interfac",{"_index":1937,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["intern",{"_index":1723,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["internet",{"_index":1704,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interruptattachingtotangl",{"_index":888,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["interv",{"_index":1778,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["invalid",{"_index":896,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/hub/0.1/how-to-guides/install-hub":{}}}],["io",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1260,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1261,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iri/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["iota.j",{"_index":1374,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":291,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":299,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota.lib.j",{"_index":2141,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota/ipf",{"_index":1511,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":1668,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota://uriで始まり、その後に90",{"_index":1225,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1227,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iotaaccountオブジェクトにはデフォルトの設定がありますが、少なくともシードとmongodb",{"_index":1655,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapi",{"_index":1656,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":503,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaでは、トランザクションのバンドルをノードに送信する必要があります。iotaには、3",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaでは、署名方法の性質上、各アドレスから1度だけしかiotaトークンを取り出さない方が良いため、秘密鍵とアドレスのペアが複数個必要となります。そのため、アドレスからiota",{"_index":235,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":221,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaの最も重要な利点の1",{"_index":1339,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":342,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":357,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":373,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":287,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":283,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":932,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。同じ秘密鍵を使用して別のバンドルに署名すると、攻撃者は秘密鍵に総当たり攻撃を行い、そのアドレスからiotaトークンを盗むことができます。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは2度とiota",{"_index":938,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、専売のシステムを統合することなく、回収可能資産に関する情報をシームレスに収集および共有するための解決策を提供します。情報を収集している間、iotaはセカンドレイヤー技術のmam",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaは無許可型のdltです。したがって、ノードを個人や企業を含む誰でもが実行することができます。大量のapi呼び出しはコストがかかる可能性があるため、ノード所有者はそれらを一般に公開しないことがよくあります。そのため、iota",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1348,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用してピアツーピア（p2p",{"_index":1460,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1286,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["iotaアドレス以上のものです。これらのアドレスは、条件付預け入れアドレス（cda",{"_index":1588,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1437,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1438,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":295,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":304,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":288,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":289,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":428,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":834,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよびmamチャネルへのアクセスに必要な情報を保存する機能を備えて、既存の資産リポジトリを管理システムの一部として拡張します。ibcsグループの場合、これはibc",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルおよび他のiotaテクノロジを使用して、ibc",{"_index":1538,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1352,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルと、あなたが実行しているinterplanetari",{"_index":1509,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iotaタングルに公開します（mam.attach()）。iotaはトライトを使用しているので、mamペイロードをタングルに送信する前にトライトに変換して（asciitotrytes(json.stringify(data))）mamメッセージを作成する（mam.cr",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルを使用してデータをmam",{"_index":1377,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテクノロジーは、このようなアーキテクチャにおいて有利です。なぜなら、iota",{"_index":1467,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":360,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1234,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1103,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":935,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1150,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaトークンの値が、iota",{"_index":623,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":625,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンの取り出し/預け入れや、データを送信することができます。ノードに1",{"_index":256,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークンの総供給量は(333",{"_index":343,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":1616,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンの量があります。この場合は1,000個のiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":626,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークンはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":365,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンをcda",{"_index":1661,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1425,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1",{"_index":937,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを使うには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名し、その署名をトランザクションのsignaturemessagefrag",{"_index":245,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":934,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":294,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":347,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンを特定のアドレスから特定のアドレスに転送するように指示する1",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1099,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":282,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":314,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを送受信するために、クライアントはバンドルと呼ばれるトランザクションのパッケージをノードに送信します。バンドル内のトランザクションは、あるアドレスから別のアドレスにiota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":264,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":624,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaトークン（およびqub",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaネットワークでアプリケーションをテストしたい場合は、コンパスを実行してコンパスをiri",{"_index":1115,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":358,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークに接続するためのiotaapiオブジェクトと、シードを管理するためのiotaaccount",{"_index":1654,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードが台帳のコピーを保持し、iota",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のiota",{"_index":220,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiotaネットワークではアドレスの残高を更新してはいません。これらのトークンを使用できるのは、devnet",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":724,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントはシードを作成して秘密にする必要があります。シードとは、クライアントにアドレスへのアクセスを許可する81",{"_index":232,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":616,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":359,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュが事前定義されたmwmと同じかそれ以上の数の0",{"_index":272,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":223,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":622,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/transaction-validation":{}}}],["iotaネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはiota",{"_index":231,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルの暗号学的ハッシュ関数のマスターキーです。各シードは、ほぼ無制限の固有の秘密鍵とアドレス（957",{"_index":233,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1353,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1212,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1427,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1429,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1174,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["iota財団のgithub",{"_index":1190,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のgui",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iota財団のwebサイト、iota",{"_index":687,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1369,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1365,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1378,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1277,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1366,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1370,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":570,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":229,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1367,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":770,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ip_address_from_step_7",{"_index":1884,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ipf",{"_index":1504,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsにアップロードします。ipfsはipf",{"_index":1517,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsにファイルを保存してから、イミュータブルで永続的なipf",{"_index":1505,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ipfsは分散webであるため、ipf",{"_index":1529,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、iota",{"_index":1532,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsハッシュを使ってipf",{"_index":1525,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfs）からのトランザクションハッシュを使用してメタデータ、sha256ハッシュおよびipf",{"_index":1524,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipv4",{"_index":1975,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":1947,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスか、duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":666,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":771,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":769,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバーのipアドレスに変更します。sign",{"_index":1019,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":772,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri",{"_index":162,"docTitle":{"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/introduction/overview":{},"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/concepts/neighbor-iri-node":{},"docs/iri/0.1/concepts/transaction-validation":{},"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/troubleshooting":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/data-in-the-ledger":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iri.conf",{"_index":762,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":853,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":861,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":640,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":863,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":717,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":636,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":635,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":673,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":700,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":610,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriは次のポートを使用します。ローカルネットワークでlinuxサーバーを実行している場合は、これらのポートをコンピュータのパブリックip",{"_index":667,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":716,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを実行するコンピューターはiri",{"_index":605,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriを構築済みのdock",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":674,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":364,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":910,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":774,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":619,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードがなければ、iota",{"_index":607,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":973,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":638,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":637,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":926,"docTitle":{},"docBody":{"docs/iri/0.1/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":617,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":621,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードとコンパスを同じサーバーまたは仮想マシンにインストールします。しかし、複数のiri",{"_index":1116,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1140,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":900,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":908,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":907,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":723,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":608,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1137,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":730,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":660,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":659,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":632,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":609,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、iri",{"_index":781,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの台帳のトランザクションによって参照されているトランザクションですが、iri",{"_index":620,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":606,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1141,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":618,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":647,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":657,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":829,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":733,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを維持しているため、タングルが動作しているp2pネットワーク内の近隣ノードと通信できます。グリッドが自身のiriノードを実行することで、残りのエンティティはlanネットワーク内に存在でき、グリッドのみが同期のために残りのタングルへのwanアクセスを必要とします。代替手段は、すべてのエンティティがタングル上のiriノードに直接wan",{"_index":1468,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iriノードを走らせる（dock",{"_index":161,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":765,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションをフラグとして渡すことで、iri",{"_index":742,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri設定オプションを使用すると、ノードをカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":912,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":744,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjava",{"_index":604,"docTitle":{},"docBody":{"docs/iri/0.1/introduction/overview":{}}}],["iri：latest",{"_index":748,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":327,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iss",{"_index":2028,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["issu",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["it'",{"_index":1867,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ixi",{"_index":915,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":715,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["ja",{"_index":444,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":684,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":91,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["java_max_memori",{"_index":704,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":703,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":702,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1406,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascript、react、node.j",{"_index":1506,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascript、react、nodej",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javascript、react、およびnodej",{"_index":1512,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascriptでmam",{"_index":1376,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":430,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javascriptライブラリを使用して、回収可能資産にid",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javaがインストールされていることを確認するには、java",{"_index":682,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":818,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":431,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":505,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":694,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":705,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":693,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":677,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":699,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":679,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":683,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":741,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":504,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":701,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2101,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie.img",{"_index":2105,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jitpack",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["job",{"_index":2155,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["join",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["jota",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":446,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":2059,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["json.exception.parse_error.101",{"_index":980,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["jsonオブジェクトを受信すると、ファイルはipf",{"_index":1521,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1126,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1186,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keccak",{"_index":236,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["keep",{"_index":2020,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["keepass",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":352,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["kernel",{"_index":2005,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["keyboard",{"_index":1911,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":844,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":843,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":846,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":301,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1399,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["know",{"_index":1934,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["known",{"_index":1917,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lang",{"_index":514,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1242,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["lan）またはワイドエリアネットワーク（wan",{"_index":1502,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["last",{"_index":985,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["latest",{"_index":317,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["latestmileston",{"_index":2146,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["latestmilestoneindex",{"_index":391,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":612,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":725,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":727,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":726,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":613,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":728,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":407,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":614,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["launch",{"_index":1848,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["layers_calcul",{"_index":1131,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["led",{"_index":2071,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["ledger",{"_index":916,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["left",{"_index":1762,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["legaci",{"_index":2138,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["legion",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートをleveldbデータベースのleveldown",{"_index":1670,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":2118,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["light",{"_index":1161,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["lighter",{"_index":1897,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lightweight",{"_index":1839,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["limit",{"_index":909,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["line",{"_index":1948,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["link",{"_index":429,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linux",{"_index":51,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":811,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxオペレーティングシステムを使用している場合は、このコマンドの前にsudo",{"_index":1315,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":165,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1120,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["linuxサーバーでiri",{"_index":661,"docTitle":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバーで、ターミナルウィンドウを開いて、nginx",{"_index":757,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバーで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":718,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバー上でiriを実行すると、linuxサーバーがiotaネットワークへ直接アクセスを可能にするノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":662,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1207,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["list",{"_index":1862,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["listen",{"_index":1817,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["liter",{"_index":984,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["local",{"_index":921,"docTitle":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["local_snapshots_base_path",{"_index":642,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":643,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":652,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":655,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":782,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":645,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":653,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":783,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localhost",{"_index":1750,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["localis",{"_index":2131,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["locationは携帯電話のgp",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["log",{"_index":509,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["login",{"_index":1974,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["look",{"_index":1920,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":823,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["lose",{"_index":1767,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["lost",{"_index":1779,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ls",{"_index":1963,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["lt",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバー。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":947,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["ltsバージョンまたは最新バージョンのnode.jsとnpm",{"_index":1295,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":957,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mac",{"_index":734,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["machin",{"_index":1737,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["macosx",{"_index":164,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1257,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["made",{"_index":2031,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnet",{"_index":2055,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnetomet",{"_index":2053,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mainnet",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":854,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木の深さは23です。したがって、コーディネーターの公開鍵と秘密鍵のペアは8,388,608",{"_index":378,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーン署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":386,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetと同じテストトークンの総供給量で独自のプライベートネットワークを運営することができます。このようにして、ネットワーク外の誰かがテストデータのトランザクションを見ることなくデータとiota",{"_index":1306,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1113,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上でアプリケーションを使用する準備が整ったら、アプリケーションをプライベートiriノードから切断して、mainnet",{"_index":1307,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["make",{"_index":1742,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["malform",{"_index":1145,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":438,"docTitle":{"docs/utils/0.1/mam-watcher/overview":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.client.j",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamsecret",{"_index":2170,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamのgithub",{"_index":1375,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mamを使用しない場合は、代わりにiota",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamクライアントライブラリを使用してiotaタングルに保存されます。この機能は、アプリに埋め込むことも、外部サーバー（mamサーバー）を介して実装することもできます。外部サーバー（mamサーバー）との間で、セキュアなhttp",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamサーバーは、最初に、オブジェクトリポジトリから特定の資産に関連付けられているmamチャネルのルートに関連する情報を取得する必要があります。これは、qrコードのスキャンから取得されるか、手動で挿入されるassetuniqueidをプライマリーキーとして使用することによって行われます。これらの情報はそれぞれのmamチャンネルに添付され、iotaタングルにイミュータブルに保存されます。このために、以下の2",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルから読み取ることができるように、電力源は生産者に登録/登録解除する必要があります。これは生産者側で軽量のweb",{"_index":1477,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルがもう使用されていないことを知らせるためにgoodby",{"_index":1476,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルが作成されます。回収可能資産のデジタルツインは、以下の情報で作成されます。&amp;lt;assetuniqueid",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが作成されるか既存のmamチャネルが更新されたら、オブジェクトリポジトリを更新する必要があります。これは、上で紹介したcreateitem()およびupdateitem",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが使用されなくなったことを知らせるために、goodby",{"_index":1485,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルとweb",{"_index":1474,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルに追加されます。そのために、新しいmamメッセージが既存のチャネルに添付され、次の情報が更新されてタングルに保存されます。&amp;lt;assetcustodianid",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの作成と使用、web",{"_index":1380,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルの作成後、中央管理のバックエンドのオブジェクトリポジトリにデータが入力されます。オブジェクトリポジトリはfirebas",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを作成し、javascriptクライアントライブラリを使用してmam",{"_index":1586,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["mamチャネルを作成します。グリッドはこの情報を中央のdbでも追跡しますが、mam",{"_index":1497,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルを作成する前に、トランザクションが保存されるiotaネットワーク（プロバイダ）を選択する必要があります。これは、メインのiotaネットワーク、またはhttps&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1342,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["mamチャネルを使用して特定の資産の保管の変更を登録すると、さまざまな保管担当者情報をiota",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル情報にそれぞれアクセスして更新する（例えば、保存されているデジタルツインを更新するために新しいメッセージを追加する）関数が実装されています。reactで書かれたweb",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル詳細を使用して電力源のmam",{"_index":1479,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamプロトコルを使用して、回収可能資産にidを付与し、mam",{"_index":1545,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージのペイロード（例えば、デジタルツインに含まれる情報）を暗号化すること、および選択された当事者だけにアクセスを保証することを可能にします（mam.changemod",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mam（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。mam",{"_index":1293,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["manag",{"_index":1230,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["mani",{"_index":1694,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["manual",{"_index":1284,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["map",{"_index":842,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":852,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":963,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1436,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":964,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1036,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["marketplac",{"_index":1341,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["marque",{"_index":2163,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mask",{"_index":2036,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["maven",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":696,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":393,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":404,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maxdepth",{"_index":408,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["measur",{"_index":2043,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["memori",{"_index":1845,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["menu",{"_index":2129,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["merkl",{"_index":375,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["messag",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/concepts/zero-message-queue":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["messages.proto",{"_index":1054,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1354,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["metadata",{"_index":911,"docTitle":{},"docBody":{"docs/iri/0.1/references/data-in-the-ledger":{}}}],["mi",{"_index":1181,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["microprocessor",{"_index":1894,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["mileston",{"_index":318,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["milestonesとしてsnapshot.meta",{"_index":649,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["minimum",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["minut",{"_index":1786,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["minweightmagnitud",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1184,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":680,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":440,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1237,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["model",{"_index":1372,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modul",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["moduleのbuild.gradl",{"_index":94,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["momentum",{"_index":2051,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["monitor",{"_index":2091,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["monitorinterv",{"_index":940,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["more",{"_index":1898,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["mostusedaddressesaggreg",{"_index":851,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["mous",{"_index":2088,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["much",{"_index":1900,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi",{"_index":1620,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["multi_us",{"_index":1650,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multi_useフィールドを持つcda",{"_index":1646,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["multius",{"_index":1614,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":1619,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["mvn",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":275,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmが高いほど、プルーフオブワークは難しくなります。クライアントとしてiotaネットワークと対話するときは、ネットワークに適したmwm",{"_index":271,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmは14です。したがって、すべてのトランザクションハッシュ値は、14個の0",{"_index":273,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":362,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、mwmと同じ数の0",{"_index":270,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["my_password",{"_index":1939,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["my_ssid",{"_index":1938,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["myaccount.go",{"_index":1641,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":969,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mysql",{"_index":966,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1038,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["name",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":602,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":596,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":597,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":747,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1177,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["nativ",{"_index":1247,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["navig",{"_index":1865,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["near",{"_index":2179,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["necessari",{"_index":1895,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["necessarili",{"_index":1699,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["need",{"_index":1707,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["neighbor",{"_index":1709,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":721,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":754,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":890,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":869,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["net",{"_index":1252,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1390,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yaml",{"_index":1770,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["netmask",{"_index":1744,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=16",{"_index":1996,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["netmask=24",{"_index":1993,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["network",{"_index":914,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["never",{"_index":2202,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["new",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["neweventloggerplugin",{"_index":1642,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["next",{"_index":1746,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["nginx",{"_index":759,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":768,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":773,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":778,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバーが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":761,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":767,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":756,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバーでポート5000",{"_index":764,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmap",{"_index":1978,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":412,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/api-errors":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":83,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsでjavascriptクライアントライブラリを使用すると、getbal",{"_index":1317,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":793,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1248,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["nodej",{"_index":2139,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["noder",{"_index":2136,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":418,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["nonc",{"_index":280,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iri/0.1/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":426,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["nordic",{"_index":1395,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1402,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nosqlデータベースとして実装され、ポート3000を使用してデプロイされます。特定の資産idに関連付けられたmamチャネルに関連する情報をfirebas",{"_index":1567,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["nosqlデーターベース：mongodb",{"_index":1501,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["note",{"_index":1738,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["now",{"_index":1797,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":1599,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":839,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":887,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["number",{"_index":1961,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["numberformatexcept",{"_index":1172,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1148,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1410,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["offici",{"_index":2015,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["ok",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":401,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["on",{"_index":902,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["onlin",{"_index":1820,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["onto",{"_index":1929,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["open",{"_index":1362,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["openjdk",{"_index":681,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1010,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["oper",{"_index":1735,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["option",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{}}}],["orang",{"_index":1926,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["order",{"_index":2068,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["os",{"_index":1906,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ot",{"_index":247,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["otherwis",{"_index":1731,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["otsは未知数の秘密鍵を明らかにしてしまいます。秘密鍵の半分が明らかになるように正規化することで、アドレスから1度だけは安全にiota",{"_index":249,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["ots）iota",{"_index":355,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ots）を使用しているため、秘密鍵は1つのバンドルに対してのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":374,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["out",{"_index":1844,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["output",{"_index":1745,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["outsid",{"_index":1706,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["over",{"_index":1887,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["overflow",{"_index":860,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["overview",{"_index":1681,"docTitle":{"docs/general/0.1/introduction/overview":{}},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["p2p",{"_index":1347,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["p2pエネルギーグリッドでのエネルギー取引には、4",{"_index":1462,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["p2pエネルギーグリッドアプリケーションは、iotaネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをmam",{"_index":1465,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["p2pエネルギーグリッド内のエンティティがどのようにエネルギーを交換できるかを示しています。p2pエネルギーグリッドの分散型およびマシンベースの性質により、これはiotaの理想的なユースケースになります。iota",{"_index":1461,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pack",{"_index":2078,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["packag",{"_index":958,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["package.json",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["page",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["pageとpag",{"_index":1488,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2072,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["paramet",{"_index":901,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-errors":{}}}],["parent",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pars",{"_index":981,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["partner",{"_index":688,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["password",{"_index":68,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["past",{"_index":1758,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["path",{"_index":1199,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":746,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["paymentidoraddressは、グリッドが支払いを行うことができるiotaアドレス、またはグリッドが別の支払い方法を持つようにするための参照id",{"_index":1482,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddressは、実際のiotaアドレス、または消費者が別の方法で支払いをするために使用できる参照です。グリッドがiota",{"_index":1498,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1188,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1344,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["pend",{"_index":324,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["permanod",{"_index":707,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":708,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1166,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["persistenceadapt",{"_index":1666,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["persistencepath",{"_index":1667,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1337,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["phone",{"_index":2096,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["photo",{"_index":1244,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["physic",{"_index":1768,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["pi",{"_index":1324,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pictur",{"_index":1464,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pin",{"_index":2084,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pip3.2",{"_index":2117,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pipe",{"_index":2126,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piからdevnet",{"_index":1292,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["piからdevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のdevnetノードでイベントストリーム（zmq",{"_index":1325,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["place",{"_index":1981,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["placehold",{"_index":1885,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["platform",{"_index":1836,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["platformio",{"_index":1955,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1384,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":690,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["plu",{"_index":2081,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["plug",{"_index":1959,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pngファイルとしてqr",{"_index":1221,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1434,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャは、電力源、生産者、消費者、およびグリッドがiota",{"_index":1466,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1379,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1458,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pointsとしてsnapshot.meta",{"_index":651,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":1601,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":1605,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["popov教授によってiota",{"_index":370,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["popul",{"_index":1534,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["popular",{"_index":1833,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["port",{"_index":1711,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":786,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{}}}],["possibl",{"_index":1910,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["post",{"_index":2167,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["postgresまたはfirebas",{"_index":1441,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-go/0.1/README":{}}}],["pow_arm_c128",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":591,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["power",{"_index":1901,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["powは、クライアントによって行われてもよく、またはattachtotangl",{"_index":422,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powは大量の電子メールスパムを減らすための概念として導入されました。この概念はhashcashとして知られており、すべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":420,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":593,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを計算する関数はpearldiv",{"_index":427,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["pow）は試行錯誤を用いて計算され、それ故、pow",{"_index":419,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["ppaをダウンロードするためにgnu",{"_index":960,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["pr",{"_index":1026,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["pre",{"_index":2080,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["predict",{"_index":2024,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prefer",{"_index":2130,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":403,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["prepar",{"_index":1921,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["preparetransf",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prerequisit",{"_index":1684,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["press",{"_index":1880,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pressur",{"_index":2046,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["prevent",{"_index":2085,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["print",{"_index":822,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["privaci",{"_index":961,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["privat",{"_index":1720,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["process",{"_index":1924,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["processtransf",{"_index":1041,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["processtransferbatchrepli",{"_index":1069,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1070,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1071,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["produc",{"_index":1472,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpriceフィールドがグリッドによって支払われることが保証されているのではなく、すべての生産者間の合意価格が支払われます。合意価格は、すべてのproducerpric",{"_index":1481,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["program",{"_index":1942,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["project",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["promotetransact",{"_index":328,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":965,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["proof",{"_index":919,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["protocol",{"_index":917,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["provid",{"_index":1775,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["pub/sub",{"_index":1290,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["public",{"_index":1782,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicメソッドの代わりにrestrictedメソッドを使用するようにmamst",{"_index":1300,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["publish",{"_index":1419,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["pubsub",{"_index":1327,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["pueotseitfevewcwbtsizm9nkrgjeimxtulbacgfrqk9imgiclbkw9ttevsdqmgwkbxpvcbmmcxwmnpdx",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["purchas",{"_index":2075,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["purpos",{"_index":1903,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["put",{"_index":1478,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["putti",{"_index":1886,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pyramid",{"_index":1356,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":434,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2116,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":953,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":743,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1218,"docTitle":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1219,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1223,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1222,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["queue",{"_index":628,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["r",{"_index":1282,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ram",{"_index":664,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ramが4gb未満など、リソースが限られている場合は、iriではなくciri",{"_index":672,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["random",{"_index":417,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["raspberri",{"_index":1291,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["raspberrypi",{"_index":1326,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["raspbian",{"_index":2079,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["rasperri",{"_index":1909,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rate",{"_index":1969,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["raw",{"_index":2177,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["react",{"_index":1259,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1433,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["reactで書かれたフロントエンドguiとnode.j",{"_index":1507,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1246,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":986,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["readi",{"_index":2090,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["readm",{"_index":443,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1421,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["reason",{"_index":1708,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["reattach",{"_index":1602,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["reboot",{"_index":2008,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["receiv",{"_index":1216,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.j",{"_index":2151,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recommend",{"_index":1908,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["record",{"_index":1787,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":848,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["refer",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":400,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["regattachingtotangleイベントをリッスンする新しいcallbackeventlisten",{"_index":1635,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["regular",{"_index":1777,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["releas",{"_index":686,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["reliabl",{"_index":1838,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["remot",{"_index":2135,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["remote=fals",{"_index":925,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remote=tru",{"_index":924,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["remov",{"_index":2137,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["removeneighbor",{"_index":889,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["removeneighbors(uri",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["rent",{"_index":1840,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["repl",{"_index":824,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["replac",{"_index":1759,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["replaybundl",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":329,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["report",{"_index":1783,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["repositori",{"_index":2012,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["repres",{"_index":1752,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["req",{"_index":1011,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1823,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["reset",{"_index":2200,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["resolv",{"_index":2009,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["resourc",{"_index":2149,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["respons",{"_index":885,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["rest",{"_index":1373,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["restart",{"_index":751,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["restrict",{"_index":2171,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["result",{"_index":1756,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["retriev",{"_index":1527,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["retrievefil",{"_index":1515,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrieveをクリックします。トランザクションハッシュはapiに渡され、タングル上のトランザクションのメッセージからipfsハッシュやsha256ハッシュなどが取得されます。ipfsハッシュはファイルのダウンロードに使用され、sha256ハッシュはダウンロードしたファイルのsha256",{"_index":1536,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrofit",{"_index":506,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rgb",{"_index":2193,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["right",{"_index":1764,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["robot",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":611,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/the-ledger":{}}}],["root",{"_index":1972,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["rootのbuild.gradl",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["root：//iota",{"_index":799,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["rotat",{"_index":2052,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["round",{"_index":2176,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["router",{"_index":1712,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["router'",{"_index":1714,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1138,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["rpchub",{"_index":968,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["rule",{"_index":1715,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":501,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["runtim",{"_index":815,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["runコマンドに次のフラグを1",{"_index":1094,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1281,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["s3やazur",{"_index":1530,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["salt",{"_index":931,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltとseed_uuid",{"_index":1046,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["saltパラメーターはもう必要ありません。署名サーバー（signer:50051）と使用するssl",{"_index":1020,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":972,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1109,"docTitle":{},"docBody":{"docs/hub/0.1/references/security-considerations":{}}}],["same",{"_index":1730,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["sampl",{"_index":2063,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["save",{"_index":1853,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sbc",{"_index":1890,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":819,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scalar",{"_index":1091,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["scalaプログラミング言語とsbt",{"_index":814,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["scan",{"_index":1991,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["schedul",{"_index":2153,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scratch",{"_index":2097,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["screen",{"_index":1859,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["screen/tmuxセッション、system",{"_index":987,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":1792,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1420,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["scroll",{"_index":2148,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sd",{"_index":1922,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["search",{"_index":1882,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["second",{"_index":1994,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seconds変数を1",{"_index":326,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["section",{"_index":1682,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["secur",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["see",{"_index":1809,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["seed",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["seed9999999999999999999999999999999999999999999999999999999999999999999999999999999の合計残高を取得するには、getbalancesエンドポイントを呼び出します。これまでにiota",{"_index":1158,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["seed_uuid",{"_index":1045,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":1592,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":1657,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1029,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":296,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["select",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["selector",{"_index":1239,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1396,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1214,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["send()メソッドを使用してデータトランザクションをcda",{"_index":1636,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["sender",{"_index":2161,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.j",{"_index":1298,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsウィンドウがトランザクションを送信し、fetcher.j",{"_index":1297,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl（http&#x3a;127.0.0.1:14265",{"_index":1303,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["sendtransf",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":306,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2032,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sensehat",{"_index":2026,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2152,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1398,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sent",{"_index":2196,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["separ",{"_index":1868,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sequenc",{"_index":1469,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["serial",{"_index":1957,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["server",{"_index":1400,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":777,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1401,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["set",{"_index":1696,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["setinterv",{"_index":330,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["setup",{"_index":1847,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sever",{"_index":2113,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sha",{"_index":1454,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1192,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256、およびipf",{"_index":1518,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256チェックサムは、apach",{"_index":697,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュ、およびipfsハッシュはイミュータブルです。ipf",{"_index":1537,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256ハッシュ、およびファイルの内容をipfsノードに送信します（post",{"_index":1516,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1191,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1195,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュをapiから返されたsha256",{"_index":1526,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha512",{"_index":1452,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["shell",{"_index":1870,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["showdata",{"_index":2204,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shown",{"_index":2178,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shut",{"_index":2159,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shutdown",{"_index":1640,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["sidekeyは認証の証としてdelet",{"_index":1486,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sidekeyは認証の証としてdeleteに渡されます。電力源が登録解除されると、生産者は電力源のmam",{"_index":1480,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":142,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドに、マークル木を再構築できるようにするためにマークル木から足りないデータが含まれている1",{"_index":388,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つインプットアドレスは、ゼロトークンのアウトプットトランザクションのsignaturemessagefrag",{"_index":253,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":263,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signbundlerepli",{"_index":1072,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signbundlerequest",{"_index":1073,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signed_uuid",{"_index":1102,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1006,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1016,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1015,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1359,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["similar",{"_index":1925,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simpl",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["simplest",{"_index":1962,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["singl",{"_index":1888,"docTitle":{"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sizeはどちらもオプションであり、デフォルトはそれぞれ0と10",{"_index":1489,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["slash",{"_index":1763,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["slider",{"_index":1857,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["slightli",{"_index":2069,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["slow",{"_index":2189,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["small",{"_index":1891,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["smaller",{"_index":2070,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1371,"docTitle":{"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sn",{"_index":797,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":922,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1142,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["snapshot.meta",{"_index":639,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{},"docs/iri/0.1/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":641,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1143,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["socket",{"_index":1170,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["softwar",{"_index":1831,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["solid",{"_index":650,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/local-snapshot":{}}}],["solidif",{"_index":918,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{}}}],["soon",{"_index":2041,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["sourc",{"_index":1470,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sourceディレクトリに移動してrepl",{"_index":827,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["space",{"_index":2018,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["spamnet",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":218,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":714,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":1933,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["speed",{"_index":2175,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["spent",{"_index":855,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/update-the-iri":{}}}],["src/desktop/out",{"_index":1258,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1270,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1274,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":1871,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssl",{"_index":999,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1017,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["stack",{"_index":859,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["stackoverflow",{"_index":1112,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["stakehold",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["start",{"_index":335,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":1639,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":971,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["starter",{"_index":2077,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1146,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["static",{"_index":1716,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["station",{"_index":1392,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["statist",{"_index":2143,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["statsrepli",{"_index":1074,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statsrequest",{"_index":1075,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statu",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status&amp;gt",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["stay",{"_index":1729,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["step",{"_index":1804,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["stopattaching()メソッドとstartattach",{"_index":1675,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["storag",{"_index":1349,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["storageなどの代替ストレージソリューションを使用するには、一意のハッシュ（たとえばファイルのsha256",{"_index":1531,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["store",{"_index":1519,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["store.clos",{"_index":1596,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1514,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storefile()メソッドは次の形式のjson",{"_index":1520,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetransact",{"_index":892,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["storetransactions(tryt",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":1594,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["straight",{"_index":1719,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["stream",{"_index":2150,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":820,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["studio",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sub",{"_index":1791,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subdomain",{"_index":1790,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1009,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["subnet",{"_index":1976,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["subscrib",{"_index":2038,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subscript",{"_index":2037,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["subse",{"_index":300,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":102,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/mam-watcher/overview":{}}}],["success:congratul",{"_index":1954,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:おめでとうございます:tada",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["success:おめでとうございます！:tada",{"_index":766,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1153,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["such",{"_index":1693,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":989,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["support",{"_index":1702,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{}}}],["sure",{"_index":1793,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["surpris",{"_index":2124,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sweep",{"_index":1104,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweep_max_deposit",{"_index":942,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":943,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_tail",{"_index":1105,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1076,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1077,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepev",{"_index":1078,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinforequest",{"_index":1079,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinterv",{"_index":941,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1032,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1080,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["symbol",{"_index":2127,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["syntax",{"_index":983,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["system",{"_index":1117,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["system（ipf",{"_index":1510,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sとledger",{"_index":1178,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1183,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1180,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["tab",{"_index":1876,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tada",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tail",{"_index":332,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":333,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["take",{"_index":1818,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tangl",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tanglebeatはzmq",{"_index":830,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["tangleディレクトリで、dock",{"_index":1313,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["task",{"_index":1404,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tcp",{"_index":668,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://p101.testnet.iota.cafe:14666",{"_index":710,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p102.testnet.iota.cafe:14666",{"_index":711,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p103.testnet.iota.cafe:14666",{"_index":712,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p104.testnet.iota.cafe:14666",{"_index":713,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":796,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":219,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":207,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":670,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["technolog",{"_index":1701,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["temp.pi",{"_index":1329,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["temperatur",{"_index":2034,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tempy.pi",{"_index":1332,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["termin",{"_index":1866,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["test",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["text",{"_index":2110,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["textcolour",{"_index":2192,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["that'",{"_index":1869,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["theme",{"_index":1238,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1269,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1268,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["therefor",{"_index":1754,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["thetangle.org",{"_index":998,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":634,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1368,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1397,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["those",{"_index":1705,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["threshold",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["through",{"_index":1773,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["thu",{"_index":2198,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["tick",{"_index":1128,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["tild",{"_index":2128,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["time",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":1623,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":1644,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを取り出すことができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":1645,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":1649,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["timeoutat",{"_index":1613,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":1618,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesource()メソッドでアカウントを作成した場合は、timesource()メソッドをtimeoutat",{"_index":1673,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":1671,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timesrcパッケージを使用して、正確な時刻を返すオブジェクトを作成します。この例では、タイムソースはgoogl",{"_index":1598,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["timezon",{"_index":2132,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["timeはトランザクションを開始したデバイス（携帯電話またはweb",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["tip",{"_index":414,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iota-js/0.1/README":{},"docs/iri/0.1/references/api-reference":{},"docs/iri/0.1/references/api-errors":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2157,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1215,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["took",{"_index":1998,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["tool",{"_index":1319,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["toolbox",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["tpsiriノードを介した1",{"_index":346,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["trace",{"_index":1351,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1350,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trade",{"_index":1587,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["trangl",{"_index":1312,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["transact",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["transaction.j",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":312,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/general/0.1/introduction/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":305,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1245,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1271,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":376,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["tri",{"_index":1168,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["triniti",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["trinity.app",{"_index":1206,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1204,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["troubleshoot",{"_index":2004,"docTitle":{"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["true",{"_index":320,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["trunk",{"_index":313,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":277,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iri/0.1/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":308,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransactionフィールドを辿ることによって、バンドル内の各トランザクションを見つけて検証します。ノードが先頭トランザクション（またはlastindex",{"_index":265,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["trustanchor",{"_index":856,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{}}}],["tryte",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":878,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":893,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["turn",{"_index":1931,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["tutori",{"_index":1822,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tv",{"_index":2092,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["two",{"_index":2086,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["tx",{"_index":835,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["type",{"_index":1093,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["t定数を作成し、それをprop",{"_index":1272,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":1915,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":857,"docTitle":{},"docBody":{"docs/iri/0.1/references/troubleshooting":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":758,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1267,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ui（wui）は、mamエクスプローラにアクセスして情報（例：特定の回収可能資産の現在の保管者と所在地）を取得するためのapiを実装しています。タングル上の情報は、オブジェクトリポジトリから取得した必要なチャネルルートアドレスにアクセスすることによって取得できます。足りない資産は同じgui",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unarchiv",{"_index":1851,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":838,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":840,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":338,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["under",{"_index":1811,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["understand",{"_index":1873,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["unexpect",{"_index":1966,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["unfortun",{"_index":1774,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["unit",{"_index":1213,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["until",{"_index":2003,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["up",{"_index":1314,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updat",{"_index":1285,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["updateitem()関数では、まずfirebaseオブジェクトリポジトリでitemidフィールドによって既存の資産が検索され、次にそのオブジェクトに関するすべての情報が新しいmam",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upgrad",{"_index":1874,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["upload",{"_index":1533,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["uploadをクリックして、メタデータをipf",{"_index":1535,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["upper",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":779,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":776,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["uriフォーマットは\"tcp://ipaddress:port",{"_index":891,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["uriフォーマットは、\"tcp://ipaddress:port",{"_index":870,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["url",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1459,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1163,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["urlまたはip",{"_index":1231,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":722,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1463,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["usa",{"_index":2122,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usb",{"_index":1914,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["user",{"_index":995,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["user_account",{"_index":1027,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/database-tables":{}}}],["user_account_bal",{"_index":1106,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["user_address",{"_index":1037,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/database-tables":{}}}],["user_address_bal",{"_index":1107,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1081,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1089,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1082,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1090,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["usernam",{"_index":1935,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["userwithdraw",{"_index":1042,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["userwithdraw()メソッドを使用して、預け入れアドレスからのiota",{"_index":1034,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["userwithdrawcancelrepli",{"_index":1083,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1084,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1085,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1086,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":951,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1000,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1125,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["usual",{"_index":1727,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["uuid",{"_index":1033,"docTitle":{"docs/hub/0.1/how-to-guides/query-the-database":{}},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["uuid：seeduuid",{"_index":930,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["v0.9.1",{"_index":569,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valu",{"_index":1092,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["variant",{"_index":2002,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["vc",{"_index":1256,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["verif",{"_index":1447,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["version",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1197,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":685,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["video",{"_index":2040,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["view",{"_index":2169,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["virtual",{"_index":1736,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":1849,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/references/troubleshooting":{}}}],["vista",{"_index":1251,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["w",{"_index":248,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w3school",{"_index":2099,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wait",{"_index":2158,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["walkeralpha",{"_index":405,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["wall",{"_index":2093,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["wallet",{"_index":1162,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["walletにログインしたときに、全残高を見るためにはrec",{"_index":1164,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["walletディレクトリでnpm",{"_index":1278,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1503,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["want",{"_index":1816,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["warn",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iri/0.1/how-to-guides/update-the-iri":{},"docs/iri/0.1/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1232,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["watch",{"_index":2039,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["watcher",{"_index":1296,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["way",{"_index":1692,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["weather",{"_index":1391,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["web",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{},"docs/iri/0.1/how-to-guides/interact-with-an-iri-node":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["websit",{"_index":1936,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["webサイト、またはiota",{"_index":689,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1431,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなどで、cda",{"_index":1647,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-faq":{},"docs/iota-java/0.1/references/cda-faq":{},"docs/iota-js/0.1/references/cda-faq":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1224,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["webサーバー：nginx",{"_index":1499,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバーのip",{"_index":760,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/set-up-a-reverse-proxy":{}}}],["weight",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["well",{"_index":1907,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wereaddressesspentfrom",{"_index":894,"docTitle":{},"docBody":{"docs/iri/0.1/references/api-reference":{}}}],["whenev",{"_index":1721,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["wide",{"_index":988,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["wifi",{"_index":1189,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["window",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/iri/0.1/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["windowsまたはlinux",{"_index":1249,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["winternitzワンタイム署名方式（w",{"_index":246,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["winternitzワンタイム署名（w",{"_index":354,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":1600,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1108,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["within",{"_index":1992,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["without",{"_index":1950,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["withplugin",{"_index":1608,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wl",{"_index":1945,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wlp3s0",{"_index":1951,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":920,"docTitle":{},"docBody":{"docs/iri/0.1/references/iri-configuration-options":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["workflow",{"_index":1471,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1424,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["worri",{"_index":1843,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["written",{"_index":2058,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["x",{"_index":1418,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["x86",{"_index":2006,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1203,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1394,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["you'd",{"_index":1732,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["you'll",{"_index":1810,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["you'r",{"_index":1734,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["you'v",{"_index":1864,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["yougetsignal.com",{"_index":1821,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["zero",{"_index":627,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":795,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":807,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zip",{"_index":1850,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":204,"docTitle":{"docs/iri/0.1/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{},"docs/iri/0.1/references/iri-configuration-options":{},"docs/iri/0.1/references/zmq-events":{}}}],["zmqwatcher.j",{"_index":1333,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":794,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":630,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":798,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":631,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":804,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":833,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":792,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":791,"docTitle":{},"docBody":{"docs/iri/0.1/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":629,"docTitle":{},"docBody":{"docs/iri/0.1/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1412,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
//# sourceMappingURL=static.36aeb975.js.map