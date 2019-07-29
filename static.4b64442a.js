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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のコンピュータがイミュータブルなデータと価値（IOTAトークン）を相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":"バンドルを作成するときは、ネットワーク内の2つの既存のトランザクションを参照する必要があります。ノードがトランザクションを受け取ると、ノードは受け取ったトランザクションを既存のトランザクションに添付します。すべてのトランザクション間の添付関係は、タングルと呼ばれるデータ構造を形成します。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードは、アドレスと秘密鍵のペアを導出し、IOTAトークンを取り出すバンドルに署名するために使用される秘密のパスワードです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"トランザクションは、単独で使用することも、他のトランザクションと一緒にパッケージ化することもできる単一の操作です。単独型のトランザクションは、たとえばIOTAトークンを含まないデータのみを送信するものです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルは、データを送信したり、ノードにIOTAトークンを特定のアドレスから特定のアドレスに転送するように指示する1つ以上のトランザクショングループです。バンドル内の各トランザクションの運命は、残りの部分に依存します。つまりすべてのトランザクションが有効か、またはすべて無効かです。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードとは、偽造物がないことを確認するためにトランザクションを検証する責任があるコンピュータです。 IOTAネットワーク内のクライアントは、トランザクションを検証してタングルに添付できるように、バンドルをノードに送信する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テストトークンを送信する（Node.js）","summary":"商品やサービスと引き換えにIOTAトークンを誰かに送ることができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"IOTAネットワーク","summary":"IOTAでは、トランザクションのバンドルをノードに送信する必要があります。IOTAには、3つのパブリックネットワークがあります。各ネットワークには、ノードがトランザクションを追加できるそれぞれ独自の分散台帳（タングル）があります。どのパブリックネットワーク上のノードにバンドルを接続して送信するかを選べます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/iota-basics/0.1/introduction/overview","name":"IOTAの基本概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のIOTAトークンの量を定義しま..."},{"id":"docs/iota-basics/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはIOTAトークンを保持するアカウントで、署名はアドレスの所有権を証明します。"},{"id":"docs/iota-basics/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"トランザクションは、ノードに送信できる単一の操作です。トランザクションはIOTAトークンの取り出し/預け入れや、データを送信することができます。ノードに1つ以上のトランザクションを送信するには、トランザクションをバンドルにパッケージ化する必要があります。"},{"id":"docs/iota-basics/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"最小重量値（minimum weight magnitude：MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、MWMと同じ数の0トリットが並ぶまで繰り返しハッシュ化を行います。 MWMが高いほど、プルーフオブワークは難しくなります。クライアン..."},{"id":"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/iota-basics/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/iota-basics/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/iota-basics/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/iota-basics/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/iota-basics/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/iota-basics/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/iota-basics/0.1/references/tryte-alphabet","name":"トライト文字","summary":"この表は、トライトからトライトがエンコードされた文字への変換と、それに相当する10進数の値を表しています。"},{"id":"docs/iota-basics/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/iota-basics/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/the-tangle/0.1/introduction/overview","name":"タングル概要","summary":"バンドルを送信する前に、トランザクションをネットワーク内の2つの既存のトランザクションに添付する必要があります。これを行うと、ノードは接続を辿って各トランザクションを見つけて検証できます。これらの接続は、タングルと呼ばれるデータ構造を形成します。 タングル内のトランザクションは、ペンディングまたは確定済みの2つの状態の..."},{"id":"docs/the-tangle/0.1/concepts/the-coordinator","name":"コーディネーター","summary":"コーディネーターは、同じアドレスから定期的にトランザクションのバンドルを作成、署名、および送信するクライアントアプリケーションです。これらのバンドルには、ノードが合意に達するために使用するマイルストーンと呼ばれるトランザクションが含まれています。マイルストーンがタングル内のトランザクションを直接または間接的に参照して承..."},{"id":"docs/the-tangle/0.1/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。"},{"id":"docs/the-tangle/0.1/concepts/incentives-in-the-tangle","name":"タングル内のインセンティブ","summary":"チップ選択アルゴリズムは強制されていません。その代わりに、ノードは、自分のトランザクションが確定される最良の機会を得るためにチップ選択アルゴリズムを使用するインセンティブがあります。"},{"id":"docs/the-tangle/0.1/concepts/proof-of-work","name":"プルーフオブワーク","summary":"プルーフオブワークは、計算は難しいが検証は簡単な数学的問題に対する答えです。 IOTAでは、プルーフオブワークはスパムトランザクションからネットワークを保護します。バンドル内の各トランザクションには、有効であることを証明するプルーフオブワークが含まれている必要があります。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/node-software/0.1/introduction/overview","name":"ノードソフトウェア","summary":"IOTAネットワークは、相互に接続されたノードから構成されています。これらのノードは、同じノードソフトウェアを実行するコンピュータです。このソフトウェアは、ノードにタングルへの読み取り/書き込みアクセス権を付与し、ノードがトランザクションを検証してトランザクションを台帳に保存できるようにします。"},{"id":"docs/node-software/0.1/iri/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。現在IRIはクライアントがIOTAトークンを相互に転送できるIOTA Mainnet上で実行されているソフトウェアです。"},{"id":"docs/node-software/0.1/iri/concepts/the-ledger","name":"台帳","summary":"ノードは、自分が受け取った有効なすべてのトランザクションを、組み込みの追加専用のRocksDBデータベースである台帳に格納することによって記録します。 IOTAネットワーク内の全ノードの集合データベースがタングルを構成します。"},{"id":"docs/node-software/0.1/iri/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/node-software/0.1/iri/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/node-software/0.1/iri/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/node-software/0.1/iri/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバでIRIノードを実行する","summary":"IRIソフトウェアを実行すると、お使いのデバイスがIOTAネットワークに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、デバイスはIRIノード用のLinuxサーバになり、IOTAネットワークに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバに接続します。"},{"id":"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node","name":"ノードに情報をリクエストする","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy","name":"プルーフオブワーク用プロキシサーバをインストールする","summary":"attachToTangleエンドポイントはリソースを大量に消費します。結果として、attachToTangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、ノードにプルーフオブワークをさせるのではなく、専用のプロキシサーバをインストールしてプルーフオブワーク（P..."},{"id":"docs/node-software/0.1/iri/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/node-software/0.1/iri/references/troubleshooting","name":"トラブルシューティング","summary":"このリファレンスガイドを使用して、IRIのインストール、設定、または実行に関連する問題を解決してください。"},{"id":"docs/node-software/0.1/iri/references/api-reference","name":"APIリファレンス","summary":":::warning:\nこのAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。\n:::"},{"id":"docs/node-software/0.1/iri/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/node-software/0.1/iri/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/node-software/0.1/iri/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/node-software/0.1/goshimmer/introduction/overview","name":"GoShimmer","summary":"GoShimmerは、CoordicideにつながるIOTAネットワークの進行中のプロトタイプです。Coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、IOTAネットワークを分散化することができます。この目標を達成するために、GoShimmerはそれぞれが特定の役割を持つモジュールで構..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node","name":"GoShimmerノードを実行する","summary":"GoShimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはCoordicide testnetになります。これは、次のIOTAプロトコルのリ..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/send-spam","name":"自分のノードにスパムトランザクションを送信する","summary":"ノードが1秒間に処理できるトランザクション数をテストするには、Web APIエンドポイントを使用してスパムトランザクションを送信します。"},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events","name":"トランザクションイベントを購読する","summary":"ノードがトランザクションを受信すると、ノードは受信したトランザクションをトランザクションイベントとしてゼロメッセージキュー（ZMQ）と呼ばれるサービスに発行します。クライアントとして、このイベントを購読し、ノードが受信するすべてのトランザクションの詳細を受信することができます。"},{"id":"docs/node-software/0.1/goshimmer/references/command-line-flags","name":"コマンドラインフラグ","summary":"GoShimmerコードを実行するコマンドでは、以下のフラグを渡してノードのデフォルトの動作を変更できます。たとえば、デフォルトの自動ピアリングポートを変更するように選択できます。"},{"id":"docs/hub/0.1/introduction/overview","name":"ハブ概要","summary":"ハブはアプリケーションにプラグインできるヘッドレスマルチユーザーウォレットです。gRPC APIを通して、ハブはIOTAトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、ID、預け入れアドレス、取り出しリクエストなどのユーザー情報を保存します..."},{"id":"docs/hub/0.1/concepts/sweeps","name":"スウィープ","summary":"スウィープは、ユーザーの取り出し操作を実行し、IOTAトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1つに転送するバンドルです。スウィープは、攻撃者が使用済みアドレスからトークンを盗む可能性を減らすためのオプションの安全機能です。"},{"id":"docs/hub/0.1/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/hub/0.1/how-to-guides/install-the-signing-server","name":"署名サーバをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバをインストールして実行します。"},{"id":"docs/hub/0.1/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本について..."},{"id":"docs/hub/0.1/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/hub/0.1/how-to-guides/integrate-hub","name":"ハブを暗号資産取引所に統合する","summary":"シナリオA： IOTAトークンが外部のオンラインウォレット（別名：ホットウォレット）に手動で転送される複数のユーザーアカウント。"},{"id":"docs/hub/0.1/references/api-reference","name":"APIリファレンス","summary":"タングルとハブデータベースへの接続を簡単にするために、ハブにはgRPC APIがあります。このAPIリファレンスを使用してメソッドを見つけ、メソッドが行うことを学んでください。"},{"id":"docs/hub/0.1/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバの機能をカスタマイズできます。"},{"id":"docs/hub/0.1/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバに問い合わせることによって見つけることができます。"},{"id":"docs/hub/0.1/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/hub/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/compass/0.1/introduction/overview","name":"コンパス概要","summary":"コンパスは、ノードがトランザクションについて合意に達することを可能にする、コーディネーターのオープンソース実装です。コンパスを使用すると、プライベートタングルに添付されるトランザクションについてノードが合意に達することができます。MainnetやDevnetなどのパブリックIOTAネットワークの外部でアイデアをテストお..."},{"id":"docs/compass/0.1/how-to-guides/set-up-a-private-tangle","name":"プライベートタングルを設定する","summary":"プライベートタングルは運用者がコントロールするもので、運用者が知っているノードだけを含みます。MainnetやDevnetなどのパブリックIOTAネットワークを使用せずにアプリケーションをテストしたい場合は、プライベートタングルを設定することができます。そのためには、コンパスを実行して、コンパスをIRIノードに接続しま..."},{"id":"docs/compass/0.1/references/compass-configuration-options","name":"コンパス設定オプション","summary":"コンパス設定オプションを使用すると、ニーズに応じてプライベートタングルをカスタマイズできます。たとえば、特定のテスト用に軽量のプライベートタングルを作成したり、Mainnetに似た、よりリソース集約型のプライベートタングルを作成したりすることができます。"},{"id":"docs/compass/0.1/references/merkle-tree-compute-times","name":"マークル木計算時間","summary":"マークル木の計算にかかる時間を把握するために、Amazon Web Services上の仮想プライベートサーバのインスタンス（T2.Xlarge）でテストを行いました。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/compass/0.1/references/contribution-guidelines","name":"貢献ガイドライン","summary":""},{"id":"docs/trinity/0.1/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。"},{"id":"docs/trinity/0.1/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/trinity/0.1/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/trinity/0.1/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/trinity/0.1/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/trinity/0.1/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/trinity/0.1/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/trinity/0.1/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/receive-a-transaction","name":"トランザクションを受取る","summary":"トリニティには、トランザクションを受取り、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/trinity/0.1/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/trinity/0.1/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/trinity/0.1/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/trinity/0.1/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/trinity/0.1/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/trinity/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/utils/0.1/introduction/overview","name":"ユーティリティ","summary":"ユーティリティは、オープンソースのアプリケーションまたはプログラムであり、使用することも、適応させることも、自分のアプリケーションに組み込むこともできます。"},{"id":"docs/utils/0.1/mam-watcher/overview","name":"MAMウォッチャー概要","summary":"MAM（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。MAMウォッチャーを使用すると、チャネル上で暗号化されたメッセージに署名して送信し、そのチャネルを購読してメッセージを検証、復号化、および読み取ることができます。"},{"id":"docs/utils/0.1/one-command-tangle/overview","name":"ワンコマンドプライベートテストタングル","summary":"このアプリケーションを使用すると、単一のDockerコマンドを使用して独自のIOTAネットワークを設定できます。このコマンドを実行すると、独自のIOTAテストネットワークと2.7Pi（最大量）のテストIOTAトークンを使用できます。いかなる金銭的価値も危険にさらすことなく自分のアイデアやアプリケーションをテストするため..."},{"id":"docs/utils/0.1/raspberry-pi-pub-sub/overview","name":"Raspberry Piセンサーデータパブリッシャー","summary":"このアプリケーションは、Raspberry PiからDevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のDevnetノードでイベントストリーム（ZMQ）を購読し、データを受信したときに知らせるメッセージを表示します。"},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"P2Pエネルギーグリッド","summary":"エネルギーの供給はしばしば自動化されていますが、支払いシステムは統合するのに費用がかかり、そしてしばしば手動の介入を必要とします。IOTAを使用してピアツーピア（P2P）エネルギーグリッドを作成することで、電力の転送とその電力に対する支払いを自動化できます。この自動化により、インフラストラクチャはより動的になり、更新が..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"アプリケーションアーキテクチャ","summary":" P2Pエネルギーグリッドアプリケーションは、IOTAネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"P2Pエネルギーグリッドアプリをデプロイする","summary":"P2Pエネルギーグリッドアプリケーションの使用を開始するには、自身のアプリケーションをデプロイします。"},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"タングルデータストレージ概要","summary":"データは、官民組織のイノベーションを促進し、新たな収益源を生み出すために使用することができます。しかし、ベンダーに依存しないデータ検証方法がなければ、データを信頼することはできません。この設計図では、IOTAタングルをイミュータブルなデータ構造として使用し、サードパーティのストレージソリューション内のファイルの内容を検..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"アプリケーションアーキテクチャ","summary":"タングルデータストレージアプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"タングルデータストレージアプリをデプロイしてテストする","summary":"IPFSノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、IOTA財団のグラフィカルユーザーインターフェースを使用してファイルデータをアップロードし、ファイルデータを取得し、ハッシュを比較して内容を確認します。"},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"トラック&トレース概要","summary":"デューデリジェンスとベンダーに依存しないデータソースの両方が欠如しているため、流通ネットワーク内の回収可能資産は多くの場合、元の所有者に返却されません。この設計図では、IOTAタングルおよび他のIOTAテクノロジを使用して、IBCSグループが回収可能資産の回収のためのトラック&トレースシステムをどのように実施したかを説..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"アプリケーションアーキテクチャ","summary":"トラック&トレースアプリケーションはIOTA MAMプロトコルを使用して、回収可能資産にIDを付与し、MAMチャネルと呼ばれるトランザクションのストリームで回収可能資産を追跡します。"},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"トラック&トレースアプリをデプロイしてテストする","summary":"タングルでデータの追跡を開始するには、アプリケーションをデプロイし、IOTA財団のGUIを使用して資産を検索してアップロードします。"},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/how-to-guides/import-seed-state","name":"アカウントに既存のシードステートをインポートする","summary":"既存のシードステートを他の端末のアカウントにインポートすることをお勧めします。そのためには、まずシードステートをエクスポートして正しい形式にする必要があります。"},{"id":"docs/iota-go/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-java/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-java/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインはEventListenerインターフェースを実装しており、EventManagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のEventListenerを登録する必要はありません。"},{"id":"docs/iota-java/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-js/0.1/how-to-guides/listen-to-events","name":"アカウント内のイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-js/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/general/0.1/introduction/overview","name":"一般概要","summary":"IOTAは、暗号化された方法でデータと価値（IOTAトークン）を転送することを可能にするプロトコルです。そのため、IOTAは多くの環境で使用できますが、そのうちのいくつかは以前にセットアップしたことも使ったこともないかもしれません。"},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"ローカルデバイスをインターネットに公開する","summary":"デバイスをローカルネットワークの外部に接続するには、デバイスをインターネットに公開する必要があります。ローカルデバイスをインターネットに公開する一般的な理由は、IOTAノードを隣接ノードに接続することです。"},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"仮想マシン上にLinuxサーバをセットアップする","summary":"IOTAのチュートリアルやガイドの多くはLinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でLinuxを使用できます。"},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"シングルボードコンピュータを設定する","summary":"シングルボードコンピュータ（SBC）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。SBCは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。IOTAテクノロジを使用する専用の組み込みアプリ..."},{"id":"docs/general/0.1/how-to-guides/install-go-on-sbc","name":"シングルボードコンピュータにGoをインストールする","summary":"Goプログラミング言語を使用するアプリケーションを作成または実行するには、Goプログラミング言語をインストールする必要があります。"},{"id":"docs/general/0.1/references/troubleshooting","name":"トラブルシューティング","summary":""},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTAスマートシティ設計図","summary":"AstroPiOTAは、タングルを使用してローカル環境データを追跡するためにMAMに接続されている国際宇宙ステーションからのAstroPiのクローンです。地球上で、AstroPiOTAはローカルの天気予報を理解し報告するのを助け、地震予知に役立つかもしれません。"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTAはAstroPiのクローンです。AstroPiは、ISS（国際宇宙ステーション）でRaspberry Piを使用して、宇宙飛行士が自分の環境について最新の情報を入手できるようにしたプロジェクトです。 AstroPiは、温度、湿度、その他のデータを検知するためにRaspberry PiコンピュータとS..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"自分のAstroPiOTAをビルドする","summary":"AstroPiOTAを実行するには、正しいハードウェアとRaspberry Pi用のオペレーティングシステムが必要です。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"AstroPiOTAを実行する","summary":"以下の手順は、オペレーティングシステムが設定されていることを前提としています。このインストールには複数のコンポーネントがあるため、それらを組み合わせる前に各コンポーネントが個別に機能することを確認するためのスクリプトが含まれています。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"SSHでRaspberry Piに接続する","summary":"モニターやキーボードなしでAstroPiOTAを実行したい場合は、SSHを介して対話するためにAstroPiOTAのネットワークアドレスが必要です。Raspberry PiのIPアドレスを見つけるには、Pythonスクリプトを使用できます。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"AstroPiOTAをカスタマイズする","summary":"AstroPiOTA送信者はSense HATからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをJSON形式でタングルのMAMチャネルに送信します。AstroPiOTA受信者はMAMチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、Astr..."},{"id":"docs/smartcity/0.1/astropiota/references/sensehat-specs","name":"Sense HAT Specifications","summary":"This list contains the specifications for the Sense HAT hardware that's used in the AstroPiOTA project."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.456,1,31.898,2,42.746,3,31.898,4,4.042]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,6.067]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.385,4,6.078,5,23.614,6,23.614,7,23.614,8,23.614,9,23.614,10,23.614,11,23.614,12,23.614,13,23.614,14,23.614,15,23.614,16,23.614,17,19.341]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.376,4,3.94,18,10.874,19,31.09,20,27.698,21,27.698,22,27.698,23,31.09,24,31.09,25,4.562,26,31.09]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.39,4,5.335]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.233,4,5.716]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,2.929,4,3.662,18,12.948,27,28.895,28,20.256,29,28.895,30,28.895,31,28.895,32,28.895,33,28.895,34,9.545,35,28.895,36,28.895,37,28.895,38,28.895,39,28.895,40,28.895,41,13.733,42,28.895]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.432]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.26,4,5.762,43,33.646,44,33.646,45,33.646]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.432]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,3.266,4,4.566,18,10.285,25,3.775,34,9.713,46,12.857,47,12.857,48,8.66,49,12.857,50,4.092,51,7.035,52,21.071,53,9.289,54,8.094,55,26.197,56,12.857,57,9.085,58,12.857,59,11.454,60,15.749,61,11.454,62,8.437,63,12.857,64,18.332,65,12.857,66,7.788,67,21.071,68,21.071,69,10.53,70,8.437,71,20.577,72,12.857,73,12.857,74,11.454,75,10.53,76,8.83,77,12.857,78,12.857,79,12.857,80,9.84,81,11.454,82,12.857,83,13.55,84,9.289,85,8.83,86,8.437,87,11.454,88,16.853,89,8.437,90,12.954,91,16.883,92,11.454,93,12.857,94,12.857,95,17.669,96,12.857,97,12.857,98,10.53,99,11.454,100,9.84,101,12.857,102,8.83,103,10.53,104,9.84,105,12.857,106,12.857,107,12.857]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[83,18.906]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.455,4,5.189,18,5.883,25,5.837,50,5.354,83,10.014,89,11.038,108,16.82,109,10.189,110,9.83,111,7.994,112,8.43,113,8.206,114,8.67,115,13.776,116,10.189,117,14.985,118,14.985,119,16.82,120,14.985,121,16.82,122,16.82,123,13.776,124,14.985,125,14.985,126,14.985,127,13.776,128,13.776,129,14.985,130,14.985,131,14.985,132,14.985,133,10.189,134,16.82,135,12.873,136,12.153,137,10.589,138,14.985,139,7.255,140,14.985,141,11.552]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.432]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.405,25,4.095,41,13.265,114,14.386,142,27.909,143,27.909,144,24.864,145,27.909,146,27.909,147,27.909,148,27.909,149,27.909,150,24.864,151,27.909,152,27.909,153,27.909,154,27.909]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[83,18.906]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.445,4,5.236,25,4.797,41,8.979,50,8.798,83,10.916,89,12.397,109,11.443,110,11.04,111,8.979,112,9.468,113,9.216,114,16.851,116,11.443,117,16.83,118,16.83,120,16.83,124,16.83,125,16.83,126,16.83,127,15.472,128,15.472,129,16.83,130,16.83,131,16.83,132,16.83,133,11.443,139,8.148,144,16.83,155,18.891,156,18.891,157,18.891,158,18.891]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[159,42.653]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,3.217,4,5.186,51,13.854,54,15.939,114,13.051,141,26.306,159,22.557,160,14.642,161,25.319,162,25.319,163,22.557,164,25.319,165,25.319,166,25.319,167,25.319,168,25.319,169,25.319,170,25.319,171,25.319,172,25.319]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.432]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.489,25,3.399,28,12.677,34,7.653,102,15.913,103,18.976,136,16.739,173,23.169,174,15.913,175,20.641,176,23.169,177,20.641,178,20.641,179,23.091,180,17.732,181,14.585,182,26.177,183,31.96,184,14.035,185,23.169,186,23.169]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,6.067]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,3.199,4,4.461,25,4.672,114,19.372,160,12.893,187,18.057,188,26.081,189,31.362,190,18.057,191,18.057,192,23.007,193,18.057,194,18.057,195,18.057,196,18.057,197,18.057,198,18.057,199,18.057,200,33.481,201,18.057,202,17.548,203,18.057,204,26.739,205,18.057,206,19.319,207,18.057,208,18.057,209,18.057,210,18.057,211,18.057,212,18.057,213,18.057,214,18.057,215,18.057,216,18.057,217,18.057]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.432]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.752,4,4.864]],["docTitle/docs/iota-basics/0.1/introduction/overview",[4,6.067]],["docBody/docs/iota-basics/0.1/introduction/overview",[0,3.425,4,5.584,18,11.957,25,5.016,218,25.583,219,25.583,220,25.583,221,25.583,222,25.583,223,25.583,224,25.583,225,25.583,226,25.583,227,25.583,228,25.583]],["docTitle/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.432]],["docBody/docs/iota-basics/0.1/concepts/addresses-and-signatures",[0,3.405,4,2.683,25,4.403,34,6.993,41,10.062,50,6.739,67,17.34,84,21.68,90,13.328,181,13.328,229,21.171,230,21.171,231,21.171,232,21.171,233,21.171,234,21.171,235,21.171,236,21.171,237,21.171,238,21.171,239,30.007,240,21.171,241,21.171,242,21.171,243,21.171,244,21.171,245,21.171,246,18.861,247,21.171,248,21.171,249,21.171,250,21.171,251,21.171,252,21.171,253,21.171]],["docTitle/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.432]],["docBody/docs/iota-basics/0.1/concepts/bundles-and-transactions",[0,3.405,4,4.683,18,8.259,25,4.751,34,10.697,41,11.224,57,10.426,62,15.497,116,14.305,140,21.038,184,14.305,254,23.614,255,23.614,256,23.614,257,23.614,258,19.341,259,23.614,260,23.614,261,23.614,262,23.614,263,23.614,264,19.341,265,23.614,266,23.614,267,23.614]],["docTitle/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,3.432]],["docBody/docs/iota-basics/0.1/concepts/minimum-weight-magnitude",[0,2.894,25,4.87,28,18.161,127,27.185,128,27.185,268,33.191,269,33.191,270,33.191,271,33.191,272,33.191,273,33.191]],["docTitle/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.432]],["docBody/docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote",[0,3.441,70,20.403,274,27.698,275,25.464,276,25.464,277,31.09,278,27.698,279,31.09,280,31.09]],["docTitle/docs/iota-basics/0.1/concepts/trinary",[57,21.138]],["docBody/docs/iota-basics/0.1/concepts/trinary",[57,15.716,281,35.597,282,35.597,283,35.597,284,35.597,285,35.597,286,35.597]],["docTitle/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes",[0,3.429,4,3.537,25,5.312,83,11.021,109,16.907,110,16.31,111,13.265,112,13.989,113,13.616,123,22.859,139,12.038,287,27.909,288,27.909,289,27.909,290,27.909]],["docTitle/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/create-an-address",[0,3.431,4,3.276,25,5.051,48,11.588,50,8.229,83,10.209,109,15.661,110,15.108,111,12.287,112,12.958,113,12.612,114,13.326,115,21.174,139,11.151,291,25.852,292,25.852,293,25.852,294,23.032,295,25.852]],["docTitle/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.502,4,4.546,25,5.991,66,13.525,83,8.816,109,13.525,110,13.047,111,10.611,112,11.19,113,10.892,133,13.525,139,9.63,181,14.055,296,22.326,297,22.326,298,22.326,299,22.326,300,31.149]],["docTitle/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/send-bundle",[0,3.397,4,3.947,18,7.809,25,5.991,83,8.816,109,13.525,110,13.047,111,10.611,112,11.19,113,10.892,114,11.508,115,18.286,123,18.286,137,19.609,139,9.63,184,18.869,301,19.89,302,22.326,303,18.286,304,22.326,305,22.326,306,22.326,307,27.751,308,22.326,309,22.326,310,22.326]],["docTitle/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation",[0,3.434,4,2.964,25,6.092,83,9.236,109,14.169,110,13.669,111,11.117,112,11.723,113,11.411,139,10.089,184,14.169,301,20.838,311,23.389,312,23.389,313,32.17,314,32.17,315,19.157,316,32.17,317,20.838,318,20.838,319,23.389]],["docTitle/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.432]],["docBody/docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle",[0,3.49,18,6.871,25,5.377,28,10.75,34,6.49,57,8.674,83,7.758,109,11.901,110,11.481,111,9.338,112,9.847,113,9.585,114,10.127,139,8.474,184,11.901,258,16.091,320,19.646,321,19.646,322,19.646,323,19.646,324,19.646,325,19.646,326,19.646,327,19.646,328,19.646,329,28.443,330,19.646,331,19.646,332,17.503,333,19.646,334,19.646,335,19.646]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.432]],["docBody/docs/iota-basics/0.1/references/structure-of-a-transaction",[0,3.125,336,37.789]],["docTitle/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.432]],["docBody/docs/iota-basics/0.1/references/structure-of-a-bundle",[0,3.071,264,30.026,275,30.026,337,32.661]],["docTitle/docs/iota-basics/0.1/references/security-levels",[0,3.432]],["docBody/docs/iota-basics/0.1/references/security-levels",[0,2.709,4,4.789,338,37.789]],["docTitle/docs/iota-basics/0.1/references/tryte-alphabet",[0,3.432]],["docBody/docs/iota-basics/0.1/references/tryte-alphabet",[0,2.709,84,27.302,339,37.789]],["docTitle/docs/iota-basics/0.1/references/units-of-iota-tokens",[4,6.067]],["docBody/docs/iota-basics/0.1/references/units-of-iota-tokens",[0,2.59,4,5.381,34,11.932,340,36.121,341,36.121]],["docTitle/docs/iota-basics/0.1/references/glossary",[0,3.432]],["docBody/docs/iota-basics/0.1/references/glossary",[0,3.406,4,4.944,34,9.45,52,16.221,57,12.631,160,14.724,206,14.309,342,19.805,343,19.805,344,19.805,345,19.805,346,19.805,347,19.805,348,19.805,349,19.805,350,19.805,351,19.805,352,19.805,353,19.805,354,19.805,355,19.805,356,19.805,357,19.805,358,19.805,359,19.805,360,19.805,361,19.805,362,19.805,363,19.805,364,19.805,365,19.805]],["docTitle/docs/the-tangle/0.1/introduction/overview",[0,3.432]],["docBody/docs/the-tangle/0.1/introduction/overview",[0,3.383,4,5.12,18,12.756,20,25.15,21,25.15,22,25.15,25,4.142,28,15.446,366,28.23,367,28.23,368,28.23,369,28.23,370,28.23,371,28.23]],["docTitle/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.432]],["docBody/docs/the-tangle/0.1/concepts/the-coordinator",[0,3.447,4,3.734,18,12.021,25,5.5,34,13.096,57,9.111,116,17.85,372,20.637,373,20.637,374,29.467,375,29.467,376,20.637,377,20.637,378,20.637,379,20.637,380,20.637,381,20.637,382,20.637,383,20.637,384,20.637,385,20.637,386,20.637,387,20.637,388,20.637]],["docTitle/docs/the-tangle/0.1/concepts/tip-selection",[0,3.432]],["docBody/docs/the-tangle/0.1/concepts/tip-selection",[0,3.534,4,3.214,18,10.676,25,4.479,34,5.556,184,10.189,389,16.82,390,16.82,391,27.909,392,16.82,393,33.984,394,14.985,395,16.82,396,16.82,397,16.82,398,16.82,399,16.82,400,16.82,401,16.82,402,16.82,403,16.82,404,16.82,405,16.82,406,16.82,407,16.82,408,16.82,409,16.82]],["docTitle/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.432]],["docBody/docs/the-tangle/0.1/concepts/incentives-in-the-tangle",[0,3.277,69,33.644,137,18.407,184,17.712,410,29.239,411,18.407,412,29.239,413,29.678,414,29.239,415,29.239,416,37.301,417,29.239]],["docTitle/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.432]],["docBody/docs/the-tangle/0.1/concepts/proof-of-work",[0,3.324,4,5.037,18,9.544,25,5.235,28,19.52,206,28.717,418,27.289,419,27.289,420,27.289,421,27.289,422,27.289,423,27.289,424,27.289,425,27.289,426,27.289]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.432]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.383,17,20.115,50,7.817,76,16.868,90,15.461,91,16.117,104,18.797,427,24.559,428,27.718,429,24.559,430,24.559,431,24.559,432,24.559,433,20.937,434,24.559,435,24.559,436,24.559,437,11.982,438,24.559,439,18.797,440,24.559,441,14.352]],["docTitle/docs/iota-js/0.1/README",[4,4.347,443,30.559]],["docBody/docs/iota-js/0.1/README",[0,3.199,4,4.1,48,9.183,50,3.602,83,9.313,86,7.426,87,10.081,88,15.197,89,15.478,90,14.847,110,6.613,160,8.091,178,28.824,264,9.268,276,9.268,391,18.051,413,13.406,443,10.081,444,5.378,445,11.316,446,8.192,447,8.176,448,11.316,449,11.316,450,11.316,451,11.316,452,11.316,453,11.316,454,11.316,455,45.314,456,11.316,457,27.282,458,11.316,459,11.316,460,11.316,461,11.316,462,11.316,463,11.316,464,11.316,465,11.316,466,11.316,467,11.316,468,11.316,469,11.316,470,11.316,471,11.316,472,11.316,473,11.316,474,11.316,475,11.316,476,11.316,477,16.531,478,11.316,479,11.316,480,11.316,481,18.555,482,11.316,483,11.316,484,11.316,485,11.316,486,11.316,487,11.316,488,11.316,489,11.316,490,11.316,491,11.316,492,11.316,493,11.316,494,8.176,495,11.316,496,11.316,497,10.081,498,11.316,499,11.316,500,8.661,501,11.316,502,11.316]],["docTitle/docs/iota-java/0.1/README",[4,4.347,91,22.511]],["docBody/docs/iota-java/0.1/README",[0,3.26,4,4.72,18,4.051,48,6.366,50,3.687,70,7.601,91,24.44,92,16.849,160,9.492,294,10.319,303,9.487,444,5.505,446,8.35,447,8.369,494,8.369,503,11.583,504,11.583,505,11.583,506,11.583,507,11.583,508,9.487,509,11.583,510,11.583,511,18.344,512,18.913,513,11.583,514,11.583,515,10.319,516,11.583,517,11.583,518,11.583,519,11.583,520,11.583,521,11.583,522,18.913,523,11.583,524,11.583,525,11.583,526,11.583,527,11.583,528,11.583,529,11.583,530,11.583,531,30.488,532,11.583,533,11.583,534,11.583,535,8.369,536,8.865,537,11.583,538,11.583,539,11.583,540,11.583,541,11.583,542,11.583,543,18.913,544,11.583,545,11.583,546,11.583,547,11.583,548,11.583,549,11.583,550,11.583,551,11.583,552,11.583,553,11.583,554,11.583,555,11.583,556,11.583,557,34.124,558,23.968,559,11.583,560,11.583,561,11.583,562,11.583,563,11.583,564,11.583,565,11.583,566,11.583,567,11.583,568,11.583,569,10.319,570,11.583]],["docTitle/docs/iota-go/0.1/README",[4,4.347,95,23.559]],["docBody/docs/iota-go/0.1/README",[0,3.436,4,4.829,18,5.205,48,5.01,50,4.737,76,10.222,85,25.086,95,21.901,98,12.19,99,13.259,116,9.016,160,9.708,206,16.685,444,7.074,446,6.571,447,10.753,569,13.259,571,14.883,572,14.883,573,14.883,574,14.883,575,13.259,576,14.883,577,14.883,578,14.883,579,14.883,580,14.883,581,14.883,582,14.883,583,14.883,584,14.883,585,14.883,586,14.883,587,14.883,588,14.883,589,23.093,590,14.883,591,14.883,592,14.883,593,31.888,594,23.093,595,14.883,596,14.883,597,14.883,598,14.883,599,14.883,600,14.883,601,14.883,602,14.883]],["docTitle/docs/node-software/0.1/introduction/overview",[0,3.432]],["docBody/docs/node-software/0.1/introduction/overview",[0,2.48,4,4.384,160,14.2,603,34.594,604,34.594,605,28.426,606,34.594]],["docTitle/docs/node-software/0.1/iri/introduction/overview",[4,6.067]],["docBody/docs/node-software/0.1/iri/introduction/overview",[0,3.101,4,4.15,160,14.837,188,26.822,607,32.749,608,32.749,609,32.749,610,32.749,611,32.749]],["docTitle/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.432]],["docBody/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.438,4,3.75,25,5.515,100,22.648,138,26.363,160,10.152,612,29.591,613,29.591,614,29.591,615,24.236,616,29.591]],["docTitle/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[160,16.426]],["docBody/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[0,2.918,160,15.014,617,33.646,618,33.646,619,33.646,620,33.646,621,33.646,622,33.646]],["docTitle/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.432]],["docBody/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.435,4,3.578,18,9.874,160,15.535,623,28.23,624,36.47,625,28.23,626,28.23,627,28.23]],["docTitle/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.432]],["docBody/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.201,25,4.68,34,10.537,136,23.046,628,28.418,629,31.898,630,31.898,631,31.898,632,31.898,633,31.898,634,31.898,635,28.418]],["docTitle/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.432]],["docBody/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.429,25,4.996,28,11.105,64,18.082,84,14.664,160,14.065,636,20.296,637,20.296,638,20.296,639,20.296,640,18.082,641,20.296,642,29.118,643,20.296,644,25.941,645,29.118,646,20.296,647,29.118,648,20.296,649,20.296,650,20.296,651,20.296,652,20.296,653,20.296,654,25.941,655,20.296,656,20.296,657,20.296]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[658,42.653]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[0,3.123,18,4.032,25,5.455,34,3.808,48,3.881,57,5.09,62,7.566,76,7.918,86,12.364,91,25.097,104,8.824,114,9.711,133,6.984,139,4.973,160,15.059,181,11.86,189,16.785,315,9.442,446,5.09,536,8.824,615,9.442,658,10.271,659,11.529,660,10.271,661,8.824,662,8.824,663,11.529,664,8.329,665,9.442,666,10.271,667,10.271,668,10.271,669,10.271,670,10.271,671,11.529,672,11.529,673,11.529,674,11.529,675,11.529,676,11.529,677,11.529,678,18.84,679,11.529,680,11.529,681,11.529,682,11.529,683,11.529,684,11.529,685,11.529,686,11.529,687,11.529,688,10.271,689,11.529,690,11.529,691,11.529,692,11.529,693,11.529,694,11.529,695,6.984,696,11.529,697,11.529,698,11.529,699,11.529,700,11.529,701,11.529,702,11.529,703,11.529,704,11.529,705,11.529,706,11.529,707,11.529,708,11.529,709,11.529,710,11.529,711,11.529,712,11.529,713,11.529,714,11.529,715,11.529,716,11.529,717,11.529,718,11.529,719,11.529,720,10.271,721,11.529,722,11.529,723,10.271,724,10.271,725,10.271,726,10.271,727,10.271,728,10.271]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[729,42.653]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[0,3.055,18,8.002,25,4.649,34,4.857,48,7.701,51,12.518,53,10.624,54,14.402,57,6.492,76,10.099,104,11.254,141,29.27,160,15.143,163,13.1,315,12.044,446,6.492,500,21.491,615,12.044,660,13.1,661,11.254,662,11.254,665,12.044,666,13.1,667,13.1,668,13.1,669,13.1,670,13.1,695,17.01,720,13.1,723,13.1,724,13.1,725,13.1,726,13.1,727,13.1,728,13.1,729,13.1,730,14.705,731,14.705,732,14.705,733,14.705,734,14.705,735,13.1,736,13.1,737,14.705,738,14.705,739,14.705,740,14.705,741,14.705,742,14.705,743,14.705,744,14.705,745,14.705,746,14.705,747,14.705,748,14.705,749,14.705,750,14.705,751,14.705]],["docTitle/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.432]],["docBody/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.271,25,4.783,752,23.844,753,23.844,754,23.844,755,23.844,756,32.597,757,23.844,758,23.844,759,39.925,760,23.844,761,23.844,762,23.844,763,12.654,764,23.844,765,23.844,766,23.844,767,18.249,768,23.844,769,23.844,770,23.844,771,23.844,772,23.844,773,23.844,774,23.844,775,23.844,776,23.844,777,23.844]],["docTitle/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.432]],["docBody/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.478,18,9.989,160,9.798,644,32.734,654,32.734,778,28.558,779,28.558,780,28.558,781,28.558,782,28.558]],["docTitle/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[160,16.426]],["docBody/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[160,12.578,783,36.66,784,36.66,785,36.66,786,36.66]],["docTitle/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.432]],["docBody/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.372,18,8.421,25,3.533,34,7.953,48,12.566,57,10.63,83,16.564,100,28.571,111,11.444,112,12.068,113,11.747,139,10.385,433,25.236,787,24.078,788,24.078,789,21.451,790,21.451,791,24.078]],["docTitle/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.432]],["docBody/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.39,18,7.158,25,4.298,34,6.76,57,9.035,62,13.43,66,12.397,83,16.716,111,9.727,112,10.257,113,9.984,139,8.827,202,26.98,433,25.881,635,18.232,789,18.232,790,18.232,792,20.465,793,20.465,794,20.465,795,20.465,796,18.232,797,20.465,798,20.465,799,20.465]],["docTitle/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[511,26.253,800,30.559]],["docBody/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[0,3.318,25,4.406,28,8.958,34,5.408,48,5.511,85,11.244,86,10.744,91,10.744,102,11.244,137,15.641,202,16.305,511,12.53,661,12.53,800,14.585,801,16.371,802,30.026,803,16.371,804,16.371,805,16.371,806,16.371,807,16.371,808,16.371,809,16.371,810,16.371,811,16.371,812,16.371,813,16.371,814,16.371,815,16.371,816,16.371,817,16.371,818,16.371,819,16.371,820,16.371,821,24.845,822,12.53,823,16.371,824,16.371,825,16.371,826,16.371,827,16.371,828,16.371,829,16.371,830,16.371,831,16.371,832,14.585,833,16.371,834,14.585,835,16.371,836,16.371,837,16.371,838,16.371,839,14.585,840,16.371,841,16.371,842,16.371,843,16.371,844,16.371,845,16.371,846,16.371,847,16.371,848,16.371,849,16.371]],["docTitle/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.432]],["docBody/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.35,25,5.971,50,7.042,83,8.737,133,13.403,160,10.619,206,25.794,535,15.985,695,13.403,850,22.125,851,22.125,852,22.125,853,19.711,854,19.711,855,19.711,856,19.711,857,19.711,858,19.711,859,19.711,860,22.125,861,22.125,862,22.125,863,22.125,864,22.125,865,22.125,866,22.125,867,22.125,868,22.125,869,22.125,870,22.125]],["docTitle/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[160,16.426]],["docBody/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[0,2.38,50,10.564,160,15.914,181,20.895,688,29.57,871,33.191,872,33.191,873,33.191]],["docTitle/docs/node-software/0.1/iri/references/troubleshooting",[0,3.432]],["docBody/docs/node-software/0.1/iri/references/troubleshooting",[0,2.978,4,3.796,25,4.395,160,14.252,874,26.684,875,29.952,876,20.572,877,29.952,878,29.952,879,29.952,880,29.952,881,29.952,882,29.952,883,29.952,884,29.952,885,29.952]],["docTitle/docs/node-software/0.1/iri/references/api-reference",[48,16.116]],["docBody/docs/node-software/0.1/iri/references/api-reference",[0,3.499,4,1.136,18,3.134,25,3.456,48,5.139,50,2.852,83,15.685,100,6.859,116,5.429,275,7.34,276,7.34,278,7.984,318,7.984,394,7.984,413,6.475,433,25.004,494,11.03,886,8.962,887,8.962,888,8.962,889,8.962,890,39.719,891,35.386,892,32.531,893,15.267,894,8.962,895,8.962,896,8.962,897,8.962,898,8.962,899,8.962,900,8.962,901,7.34,902,8.962,903,8.962,904,7.984,905,8.962,906,8.962,907,8.962,908,8.962,909,8.962,910,8.962,911,8.962,912,8.962,913,8.962,914,8.962]],["docTitle/docs/node-software/0.1/iri/references/api-errors",[48,16.116]],["docBody/docs/node-software/0.1/iri/references/api-errors",[0,2.746,48,11.428,160,11.647,181,15.939,391,29.314,411,15.939,413,18.293,892,33.517,915,25.319,916,34.122,917,30.245,918,25.319,919,25.319,920,25.319,921,25.319,922,20.737,923,25.319,924,25.319,925,22.557,926,25.319,927,25.319,928,25.319,929,25.319]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.432]],["docBody/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.071,160,12.578,930,36.66,931,36.66]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,3.432]],["docBody/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,2.752,640,34.192]],["docTitle/docs/node-software/0.1/iri/references/iri-configuration-options",[160,16.426]],["docBody/docs/node-software/0.1/iri/references/iri-configuration-options",[0,3.398,25,4.247,48,11.409,69,23.708,160,9.931,202,24.322,413,26.778,932,20.13,933,20.13,934,28.946,935,37.062,936,25.788,937,28.946,938,28.946,939,25.788,940,25.788,941,25.788,942,22.154,943,20.13,944,20.13,945,20.13]],["docTitle/docs/node-software/0.1/iri/references/zmq-events",[202,31.42]],["docBody/docs/node-software/0.1/iri/references/zmq-events",[0,3.018,25,5.223,28,19.477,34,11.759,202,23.361,946,35.597]],["docTitle/docs/node-software/0.1/goshimmer/introduction/overview",[605,32.883]],["docBody/docs/node-software/0.1/goshimmer/introduction/overview",[0,2.918,25,4.937,605,27.955,947,33.646,948,29.975,949,33.646,950,25.623,951,33.646]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[605,32.883]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[0,3.332,18,7.32,25,5.331,34,6.913,51,7.185,53,9.488,54,8.267,60,16.017,133,12.677,141,25.91,411,13.174,535,9.488,605,25.91,665,17.14,695,12.677,735,11.699,736,11.699,853,11.699,854,11.699,855,11.699,856,11.699,857,11.699,858,11.699,859,18.644,948,11.699,950,18.736,952,13.132,953,13.132,954,13.132,955,20.928,956,13.132,957,13.132,958,20.928,959,13.132,960,13.132,961,13.132,962,13.132,963,13.132,964,15.12,965,18.644,966,20.928,967,20.928,968,20.928,969,20.928,970,20.928,971,18.644,972,20.928,973,20.928,974,13.132,975,13.132,976,13.132,977,13.132,978,13.132,979,11.699,980,11.699,981,13.132]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.432]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.36,25,5.827,48,10.878,982,32.317,983,32.317,984,32.317,985,32.317,986,32.317]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.432]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.356,18,8.181,25,3.432,34,7.726,57,10.327,62,15.35,66,14.169,83,16.944,111,11.117,112,11.723,113,11.411,202,27.249,433,26.139,796,20.838,832,20.838,987,23.389,988,23.389,989,23.389,990,23.389]],["docTitle/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.432]],["docBody/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.214,25,5.223,605,24.449,991,35.597,992,35.597]],["docTitle/docs/hub/0.1/introduction/overview",[0,3.432]],["docBody/docs/hub/0.1/introduction/overview",[0,3.496,4,5.28,25,5.422,34,7.801,48,7.949,993,22.241,994,23.614,995,23.614,996,23.614,997,21.038,998,23.614,999,21.038,1000,23.614,1001,23.614,1002,23.614]],["docTitle/docs/hub/0.1/concepts/sweeps",[0,3.432]],["docBody/docs/hub/0.1/concepts/sweeps",[0,3.462,4,4.554,25,5.273,34,9.116,41,13.116,999,24.585,1003,27.596,1004,27.596,1005,18.953,1006,27.596,1007,27.596,1008,27.596,1009,27.596]],["docTitle/docs/hub/0.1/how-to-guides/install-hub",[0,3.432]],["docBody/docs/hub/0.1/how-to-guides/install-hub",[0,3.46,4,1.572,25,3.685,34,4.097,50,3.947,51,6.786,68,10.158,85,8.518,102,13.73,133,7.513,433,7.807,446,8.826,494,8.961,664,14.443,695,7.513,876,13.73,916,11.049,950,7.807,964,8.961,1005,19.782,1010,12.402,1011,8.139,1012,12.402,1013,17.809,1014,11.049,1015,22.044,1016,12.402,1017,12.402,1018,11.049,1019,12.402,1020,12.402,1021,12.402,1022,12.402,1023,12.402,1024,12.402,1025,12.402,1026,12.402,1027,28.802,1028,12.402,1029,12.402,1030,11.049,1031,12.402,1032,10.158,1033,12.402,1034,12.402,1035,17.809,1036,12.402,1037,12.402,1038,12.402,1039,12.402,1040,12.402,1041,12.402,1042,12.402,1043,12.402,1044,12.402,1045,12.402,1046,17.809,1047,12.402,1048,12.402,1049,12.402,1050,12.402,1051,11.049,1052,11.049,1053,12.402,1054,12.402,1055,12.402,1056,12.402,1057,12.402,1058,12.402,1059,12.402,1060,12.402,1061,12.402]],["docTitle/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.432]],["docBody/docs/hub/0.1/how-to-guides/install-the-signing-server",[0,3.455,4,1.957,50,4.916,57,6.819,85,10.608,102,10.608,133,9.356,446,6.819,664,11.159,695,9.356,876,10.608,997,13.76,1005,10.608,1011,10.136,1013,13.76,1014,13.76,1015,22.167,1018,13.76,1032,12.65,1035,31.279,1051,13.76,1052,13.76,1062,32.521,1063,15.445,1064,15.445,1065,15.445,1066,37.076,1067,28.963,1068,28.963,1069,15.445,1070,15.445,1071,23.763,1072,23.763,1073,13.76,1074,15.445,1075,15.445,1076,15.445,1077,15.445,1078,15.445,1079,15.445,1080,15.445,1081,15.445,1082,15.445,1083,15.445]],["docTitle/docs/hub/0.1/how-to-guides/get-started-with-the-api",[48,11.546,993,23.559]],["docBody/docs/hub/0.1/how-to-guides/get-started-with-the-api",[0,3.419,4,3.082,25,5.505,48,11.12,89,15.958,763,12.905,993,22.689,1032,19.916,1084,24.316,1085,24.316,1086,24.316,1087,24.316,1088,24.316,1089,24.316,1090,21.663,1091,24.316,1092,24.316,1093,24.316,1094,24.316,1095,24.316,1096,19.916,1097,24.316]],["docTitle/docs/hub/0.1/how-to-guides/query-the-database",[1096,39.213]],["docBody/docs/hub/0.1/how-to-guides/query-the-database",[0,3.348,25,6.095,993,20.572,1005,20.572,1030,33.744,1096,31.022,1098,29.952,1099,29.952,1100,26.684,1101,29.952]],["docTitle/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.432]],["docBody/docs/hub/0.1/how-to-guides/integrate-hub",[0,3.561,4,3.102,18,5.614,34,5.302,50,9.441,75,20.045,150,14.299,950,15.407,964,11.596,1102,29.663,1103,24.474,1104,16.05,1105,29.663,1106,16.05,1107,16.05,1108,16.05,1109,16.05,1110,16.05,1111,16.05,1112,16.05,1113,16.05,1114,16.05]],["docTitle/docs/hub/0.1/references/api-reference",[48,16.116]],["docBody/docs/hub/0.1/references/api-reference",[0,3.297,48,6.776,950,12.672,993,13.825,1005,13.825,1046,17.933,1115,20.13,1116,20.13,1117,20.13,1118,20.13,1119,20.13,1120,20.13,1121,20.13,1122,20.13,1123,20.13,1124,20.13,1125,20.13,1126,20.13,1127,20.13,1128,20.13,1129,20.13,1130,20.13,1131,20.13,1132,20.13,1133,20.13,1134,20.13,1135,20.13,1136,20.13,1137,20.13,1138,20.13,1139,20.13,1140,20.13,1141,20.13,1142,20.13,1143,20.13,1144,20.13,1145,20.13,1146,20.13,1147,20.13,1148,20.13,1149,20.13,1150,20.13,1151,20.13,1152,20.13,1153,20.13,1154,20.13,1155,20.13,1156,20.13]],["docTitle/docs/hub/0.1/references/command-line-flags",[0,3.432]],["docBody/docs/hub/0.1/references/command-line-flags",[0,2.59,1157,36.121,1158,36.121,1159,36.121,1160,36.121,1161,36.121]],["docTitle/docs/hub/0.1/references/database-tables",[0,3.432]],["docBody/docs/hub/0.1/references/database-tables",[0,3.424,48,9.726,1090,25.742,1100,25.742,1162,28.895,1163,28.895,1164,28.895,1165,28.895,1166,28.895,1167,28.895,1168,28.895,1169,28.895,1170,28.895,1171,28.895]],["docTitle/docs/hub/0.1/references/security-considerations",[0,3.432]],["docBody/docs/hub/0.1/references/security-considerations",[0,3.484,4,5.532,18,13.248,41,14.236,1172,29.952]],["docTitle/docs/hub/0.1/references/troubleshooting",[0,3.432]],["docBody/docs/hub/0.1/references/troubleshooting",[0,2.992,535,25.352,575,31.26,993,24.1,1173,35.089,1174,35.089,1175,35.089]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.432]],["docBody/docs/compass/0.1/introduction/overview",[0,3.477,4,5.808,34,9.116,1176,27.596,1177,27.596,1178,27.596,1179,27.596,1180,27.596]],["docTitle/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.432]],["docBody/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.43,4,2.434,18,4.129,25,4.518,28,6.46,34,3.9,41,9.13,48,3.974,50,3.758,57,5.212,62,12.606,66,7.152,70,7.748,114,6.085,137,12.092,141,13.193,160,11.936,192,8.53,317,10.518,391,9.036,411,12.092,446,5.212,664,8.53,822,9.036,876,8.108,901,9.669,942,9.036,1015,18.586,1181,11.806,1182,11.806,1183,11.806,1184,19.208,1185,11.806,1186,11.806,1187,10.518,1188,11.806,1189,11.806,1190,11.806,1191,11.806,1192,11.806,1193,12.092,1194,11.806,1195,11.806,1196,11.806,1197,11.806,1198,11.806,1199,11.806,1200,11.806,1201,11.806,1202,11.806,1203,11.806,1204,11.806,1205,11.806,1206,17.113,1207,11.806,1208,11.806,1209,11.806,1210,11.806,1211,10.518,1212,10.518,1213,9.669,1214,11.806,1215,11.806,1216,11.806,1217,11.806,1218,11.806,1219,11.806,1220,11.806,1221,11.806,1222,11.806,1223,11.806,1224,10.518,1225,11.806,1226,11.806,1227,11.806,1228,17.113,1229,19.89,1230,11.806,1231,11.806]],["docTitle/docs/compass/0.1/references/compass-configuration-options",[0,3.432]],["docBody/docs/compass/0.1/references/compass-configuration-options",[0,2.752,188,31.434]],["docTitle/docs/compass/0.1/references/merkle-tree-compute-times",[0,3.432]],["docBody/docs/compass/0.1/references/merkle-tree-compute-times",[0,2.628,139,15.813,1232,28.058,1233,36.66,1234,36.66]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.432]],["docBody/docs/compass/0.1/references/troubleshooting",[0,1.978,4,3.497,51,15.099,141,27.447,160,13.71,337,24.585,500,21.121,942,21.121,964,19.938,979,24.585,980,24.585,1015,21.121,1206,35.603,1212,24.585,1213,22.602,1235,27.596,1236,27.596,1237,27.596,1238,19.938,1239,27.596,1240,27.596]],["docTitle/docs/compass/0.1/references/contribution-guidelines",[0,3.432]],["docBody/docs/compass/0.1/references/contribution-guidelines",[0,3.071,446,18.911,447,26.487]],["docTitle/docs/trinity/0.1/introduction/overview",[0,3.432]],["docBody/docs/trinity/0.1/introduction/overview",[0,3.472,4,4.837,25,4.449,174,20.826,175,27.014,1241,30.322,1242,30.322,1243,30.322]],["docTitle/docs/trinity/0.1/concepts/hardware-wallet",[0,3.432]],["docBody/docs/trinity/0.1/concepts/hardware-wallet",[0,3.476,4,3.082,28,13.305,34,8.032,57,10.736,891,21.663,892,19.916,936,33.426,1244,37.52,1245,24.316,1246,24.316,1247,24.316,1248,37.52,1249,24.316,1250,24.316,1251,24.316]],["docTitle/docs/trinity/0.1/concepts/node-quorum",[0,3.432]],["docBody/docs/trinity/0.1/concepts/node-quorum",[0,3.098,34,12.293,1252,37.216]],["docTitle/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/create-an-account",[0,3.489,25,6.13,67,24.835,177,27.014,179,21.908,180,23.207]],["docTitle/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/back-up-seed",[0,3.497,4,4.691,41,17.595,55,25.742,1253,28.895,1254,28.895,1255,28.895,1256,25.742]],["docTitle/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/verify-trinity-desktop",[0,3.434,51,11.584,53,15.296,54,13.328,174,14.541,1257,21.171,1258,21.171,1259,31.059,1260,21.171,1261,21.171,1262,34.857,1263,18.861,1264,21.171,1265,21.171,1266,21.171,1267,30.007,1268,21.171,1269,31.054,1270,21.171,1271,21.171,1272,34.857,1273,21.171,1274,21.171,1275,21.171,1276,21.171,1277,21.171]],["docTitle/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/read-your-balance",[0,3.274,160,12.768]],["docTitle/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/send-a-transaction",[0,3.473,4,5.208,25,6.284,41,12.159,80,19.58,184,15.497,1278,20.953,1279,25.583,1280,25.583,1281,25.583,1282,25.583,1283,20.953]],["docTitle/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/receive-a-transaction",[0,3.426,25,4.449,41,18.143,184,23.123,1278,24.835,1283,31.264,1284,30.322,1285,24.835]],["docTitle/docs/trinity/0.1/how-to-guides/create-a-qr-code",[1285,39.213]],["docBody/docs/trinity/0.1/how-to-guides/create-a-qr-code",[0,2.802,4,3.99,25,4.62,80,24.1,113,15.362,116,19.075,1285,36.399,1286,31.489,1287,31.489,1288,31.489,1289,31.489,1290,31.489]],["docTitle/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/create-deep-link",[0,3.523,25,5.273,50,8.783,136,19.938,1291,27.596,1292,27.596,1293,27.596,1294,27.596,1295,27.596]],["docTitle/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/connect-to-a-custom-node",[0,3.521,25,5.087,50,8.316,174,17.945,411,16.448,494,18.877,763,13.866,1296,26.127,1297,23.277,1298,26.127,1299,26.127,1300,26.127]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-account",[0,3.574,25,3.499,68,19.529,179,17.227,557,21.242,1297,21.242,1301,23.844]],["docTitle/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/manage-your-security-settings",[0,3.471,1302,34.114,1303,27.94]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/change-the-general-settings",[0,3.477,18,9.652,174,29.076,964,19.938,1304,27.596,1305,27.596,1306,35.936,1307,27.596,1308,27.596,1309,27.596]],["docTitle/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/change-the-advanced-settings",[0,3.463,4,4.264,50,10.709,160,11.543]],["docTitle/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition",[0,3.523,25,4.395,942,22.924,1310,29.952,1311,26.684,1312,29.952]],["docTitle/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.432]],["docBody/docs/trinity/0.1/how-to-guides/develop-features-on-trinity",[0,3.473,25,4.341,51,11.354,53,9.387,54,18.623,60,9.944,76,14.252,81,11.575,84,9.387,88,10.642,111,9.863,174,8.924,433,13.063,439,9.944,446,9.161,447,9.387,500,9.944,515,11.575,536,9.944,662,15.882,695,7.871,822,9.944,940,11.575,1073,18.487,1229,10.642,1263,11.575,1278,10.642,1313,12.993,1314,20.751,1315,12.993,1316,12.993,1317,12.993,1318,12.993,1319,12.993,1320,12.993,1321,12.993,1322,20.751,1323,20.751,1324,12.993,1325,12.993,1326,10.642,1327,12.993,1328,12.993,1329,12.993,1330,12.993,1331,12.993,1332,12.993,1333,12.993,1334,12.993,1335,12.993,1336,12.993,1337,12.993,1338,12.993,1339,12.993,1340,12.993,1341,12.993,1342,12.993,1343,12.993,1344,12.993,1345,12.993,1346,12.993,1347,12.993,1348,12.993,1349,12.993,1350,12.993]],["docTitle/docs/trinity/0.1/references/troubleshooting",[0,3.432]],["docBody/docs/trinity/0.1/references/troubleshooting",[0,3.554,4,4.273,25,4.947,874,22.326,1351,25.061,1352,20.526,1353,25.061,1354,25.061]],["docTitle/docs/utils/0.1/introduction/overview",[0,3.432]],["docBody/docs/utils/0.1/introduction/overview",[0,3.318,4,3.891,25,4.505,428,27.572,437,14.978,446,13.555,1355,27.352,1356,30.701,1357,30.701,1358,17.942,1359,30.701]],["docTitle/docs/utils/0.1/mam-watcher/overview",[437,23.357]],["docBody/docs/utils/0.1/mam-watcher/overview",[0,3.463,4,2.804,25,4.542,50,7.042,52,18.121,102,15.196,437,21.55,446,9.768,695,13.403,1360,22.125,1361,18.121,1362,19.711,1363,35.701,1364,22.125,1365,18.121,1366,22.125,1367,22.125,1368,22.125,1369,22.125,1370,19.711]],["docTitle/docs/utils/0.1/one-command-tangle/overview",[0,3.432]],["docBody/docs/utils/0.1/one-command-tangle/overview",[0,3.397,4,3.917,18,6.006,25,4.535,34,5.673,48,5.781,50,8.198,57,7.582,137,10.811,160,11.782,192,12.407,411,16.215,437,8.378,446,7.582,497,15.299,508,14.065,822,13.144,901,14.065,922,21.096,925,22.947,1224,15.299,1229,14.065,1283,14.065,1361,14.065,1370,15.299,1371,17.173,1372,17.173,1373,17.173,1374,17.173,1375,17.173,1376,17.173,1377,25.758,1378,17.173,1379,17.173,1380,17.173,1381,17.173,1382,17.173,1383,17.173,1384,17.173,1385,17.173,1386,17.173,1387,17.173,1388,17.173,1389,17.173,1390,17.173,1391,17.173,1392,17.173]],["docTitle/docs/utils/0.1/raspberry-pi-pub-sub/overview",[1358,20.046,1393,18.768]],["docBody/docs/utils/0.1/raspberry-pi-pub-sub/overview",[0,3.382,4,4.295,50,6.407,90,12.672,114,14.92,136,14.544,137,12.672,307,17.933,437,9.82,446,8.887,695,12.194,763,10.683,904,17.933,1193,12.672,1358,16.916,1361,16.487,1362,17.933,1393,11.014,1394,20.13,1395,33.894,1396,33.894,1397,20.13,1398,20.13,1399,20.13,1400,20.13,1401,20.13,1402,20.13,1403,20.13,1404,20.13,1405,28.946,1406,28.946,1407,20.13,1408,20.13,1409,20.13]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.432]],["docBody/docs/blueprints/0.1/introduction/overview",[0,3.308,4,5.504,135,20.432,137,16.806,971,31.328,1193,22.137,1410,21.865,1411,26.695,1412,21.865,1413,21.865,1414,26.695,1415,18.335,1416,26.695,1417,21.865,1418,21.865,1419,21.865,1420,26.695]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.432]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.44,4,3.407,17,14.899,25,2.669,34,6.009,48,9.05,57,8.031,139,7.846,428,24.739,437,13.117,446,8.031,1193,22.241,1303,14.899,1410,14.899,1421,18.191,1422,18.191,1423,18.191,1424,18.191,1425,18.191,1426,18.191,1427,18.191,1428,18.191,1429,18.191,1430,18.191,1431,18.191,1432,18.191,1433,18.191,1434,18.191,1435,18.191,1436,18.191,1437,18.191,1438,18.191,1439,18.191,1440,16.206,1441,16.206,1442,19.425,1443,14.899,1444,14.899]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.432]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.429,4,2.829,50,7.106,139,9.63,1011,14.652,1193,14.055,1358,13.047,1393,12.216,1410,18.286,1445,22.326,1446,16.131,1447,22.326,1448,19.89,1449,22.326,1450,17.087,1451,19.89,1452,22.326,1453,22.326,1454,19.89,1455,22.326,1456,22.326,1457,22.326,1458,19.89,1459,19.89,1460,19.89,1461,19.89,1462,19.89,1463,19.89,1464,19.89,1465,19.89,1466,18.286,1467,19.89]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.432]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.446,4,3.077,25,4.106,48,11.711,50,3.758,57,5.212,61,21.635,66,7.152,80,9.036,83,4.662,111,5.611,112,5.917,113,5.76,139,12.069,437,13.651,939,10.518,950,7.432,1232,9.036,1269,10.518,1303,9.669,1326,9.669,1358,6.899,1393,6.46,1450,14.701,1451,10.518,1454,10.518,1458,10.518,1459,10.518,1460,10.518,1461,10.518,1462,10.518,1463,10.518,1464,10.518,1465,10.518,1466,9.669,1467,10.518,1468,29.405,1469,11.806,1470,21.635,1471,24.284,1472,24.284,1473,10.518,1474,9.669,1475,11.806,1476,11.806,1477,11.806,1478,11.806,1479,11.806,1480,11.806,1481,19.208,1482,11.806,1483,11.806,1484,11.806,1485,19.208,1486,11.806,1487,11.806,1488,11.806,1489,11.806,1490,11.806,1491,11.806,1492,11.806,1493,11.806,1494,11.806,1495,11.806,1496,11.806,1497,19.208]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.432]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.441,4,4.656,89,18.742,135,21.858,139,12.318,428,24.113,446,12.609,1011,18.742,1412,23.39,1450,21.858,1498,28.558,1499,28.558]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.432]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.49,4,2.63,18,9.061,28,7.109,34,6.855,50,8.246,57,11.438,62,13.618,66,12.57,83,5.131,86,8.527,90,13.063,135,9.944,200,26.355,274,23.081,511,9.944,950,16.309,1011,8.527,1259,10.642,1412,26.484,1442,14.992,1446,14.992,1474,10.642,1500,11.575,1501,8.924,1502,20.751,1503,12.993,1504,12.993,1505,12.993,1506,12.993,1507,12.993,1508,12.993,1509,12.993,1510,12.993,1511,12.993,1512,12.993,1513,12.993,1514,12.993,1515,12.993,1516,12.993,1517,12.993,1518,20.751,1519,12.993,1520,20.751,1521,12.993,1522,12.993,1523,12.993,1524,12.993,1525,12.993,1526,12.993]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1415,32.883]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,2.929,25,4.24,74,25.742,428,26.808,437,18.061,1413,23.666,1415,25.426,1442,26.747,1443,23.666,1444,23.666,1501,19.845,1527,28.895,1528,28.895,1529,28.895,1530,25.742,1531,28.895]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[0,3.432]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,3.468,4,1.588,48,12.483,50,3.988,139,8.693,182,16.507,437,18.092,950,7.887,1011,8.222,1355,11.162,1413,27.78,1415,23.296,1446,9.052,1448,11.162,1501,23.296,1532,12.529,1533,12.529,1534,12.529,1535,20.155,1536,12.529,1537,12.529,1538,12.529,1539,25.285,1540,12.529,1541,12.529,1542,12.529,1543,12.529,1544,12.529,1545,12.529,1546,20.155,1547,12.529,1548,12.529,1549,12.529,1550,12.529,1551,12.529,1552,12.529,1553,12.529,1554,12.529,1555,12.529,1556,12.529,1557,12.529,1558,12.529,1559,25.285,1560,12.529,1561,12.529,1562,12.529,1563,12.529,1564,12.529,1565,12.529,1566,12.529]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1415,32.883]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,3.379,4,5.107,25,3.161,48,10.226,66,13.05,83,15.912,139,13.103,437,14.821,446,9.511,1232,16.488,1326,17.644,1358,12.589,1393,11.787,1415,26.248,1470,19.192,1473,19.192,1474,17.644,1567,21.543,1568,21.543,1569,21.543,1570,35.19,1571,21.543]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.432]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.507,4,4.957,25,3.875,139,11.391,428,25.669,446,11.659,1442,25.226,1572,21.629,1573,26.408]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.432]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.302,48,11.765,50,8.419,83,7.027,303,14.575,1011,11.678,1193,19.874,1232,13.62,1238,22.809,1259,25.857,1417,25.857,1446,19.111,1500,15.854,1501,24.006,1572,25.857,1574,17.795,1575,15.854,1576,15.854,1577,17.795,1578,17.795,1579,31.57,1580,17.795,1581,17.795,1582,17.795,1583,17.795,1584,17.795,1585,17.795,1586,17.795,1587,15.854,1588,17.795,1589,17.795,1590,17.795,1591,17.795,1592,17.795,1593,17.795,1594,17.795,1595,15.854,1596,17.795,1597,17.795,1598,17.795,1599,17.795]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.432]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.111,4,5.024,25,3.028,48,6.947,83,8.149,446,9.111,1193,24.957,1238,29.786,1417,32.47,1501,28.315,1572,32.47,1575,18.386,1576,18.386,1595,30.619,1600,20.637,1601,34.369,1602,20.637,1603,20.637,1604,20.637,1605,20.637]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[0,3.432]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,3.532,4,2.706,25,3.133,139,9.211,428,22.984,437,14.729,839,19.025,1418,17.491,1419,17.491,1442,21.814,1443,17.491,1444,17.491,1606,21.355,1607,21.355,1608,21.355,1609,21.355,1610,21.355,1611,21.355,1612,21.355]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[0,3.432]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,3.16,4,4.461,18,6.316,34,5.965,50,5.747,90,11.367,437,18.335,1418,26.081,1419,26.081,1441,16.087,1446,13.046,1613,18.057,1614,18.057,1615,18.057,1616,18.057,1617,18.057,1618,18.057,1619,18.057,1620,18.057,1621,26.739,1622,23.822,1623,26.739,1624,18.057,1625,18.057,1626,18.057,1627,18.057,1628,18.057,1629,18.057,1630,18.057,1631,18.057,1632,18.057,1633,18.057,1634,18.057,1635,18.057,1636,18.057,1637,18.057,1638,18.057,1639,18.057,1640,18.057,1641,18.057,1642,18.057,1643,18.057,1644,18.057,1645,18.057,1646,18.057,1647,18.057,1648,18.057,1649,18.057,1650,18.057,1651,18.057]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.432]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.119,139,14.316,160,11.387,446,14.654,1501,22.796,1652,33.191,1653,40.368,1654,33.191,1655,33.191]],["docTitle/docs/iota-go/0.1/introduction/overview",[0,3.432]],["docBody/docs/iota-go/0.1/introduction/overview",[0,3.378,4,4.983,25,3.917,48,8.986,50,8.497,444,18.69,1656,21.865,1657,21.865,1658,21.865,1659,21.865,1660,21.865,1661,21.865,1662,21.865,1663,21.865,1664,21.865,1665,21.865,1666,21.865]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.432]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.508,4,2.637,25,5.066,41,14.09,48,7.006,50,6.624,111,9.892,112,10.431,113,10.153,763,11.045,1450,15.929,1667,17.046,1668,20.812,1669,20.812,1670,20.812,1671,20.812,1672,20.812,1673,20.812,1674,20.812,1675,20.812,1676,29.645,1677,18.541,1678,20.812,1679,20.812,1680,20.812]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.432]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.495,25,4.505,763,16.294,1681,30.701,1682,25.145,1683,30.701,1684,30.701]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.432]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.356,25,6.092,114,12.056,444,21.282,1622,20.838,1685,19.157,1686,19.157,1687,19.157,1688,19.157,1689,19.157,1690,23.389,1691,23.389,1692,23.389,1693,23.389,1694,23.389,1695,19.157,1696,19.157,1697,19.157,1698,19.157,1699,23.389,1700,20.838]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.432]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.477,25,5.273,95,18.953,179,19.938,180,21.121,508,22.602,763,14.646,1701,27.596,1702,27.596,1703,27.596,1704,27.596,1705,27.596,1706,27.596]],["docTitle/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.432]],["docBody/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.489,25,4.449,41,14.412,50,9.651,1707,30.322,1708,30.322,1709,30.322,1710,30.322]],["docTitle/docs/iota-go/0.1/references/cda-advice",[444,22.756]],["docBody/docs/iota-go/0.1/references/cda-advice",[0,3.012,41,14.592,444,18.285,1711,25.145,1712,25.145,1713,25.145,1714,31.508,1715,25.145,1716,25.145,1717,25.145,1718,25.145,1719,25.145,1720,25.145,1721,25.145]],["docTitle/docs/iota-java/0.1/introduction/overview",[0,3.432]],["docBody/docs/iota-java/0.1/introduction/overview",[0,3.378,4,4.983,25,3.917,48,8.986,50,8.497,444,18.69,1656,21.865,1657,21.865,1658,21.865,1659,21.865,1660,21.865,1661,21.865,1662,21.865,1663,21.865,1664,21.865,1665,21.865,1666,21.865]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.432]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.521,4,2.882,25,4.629,41,14.995,50,7.238,70,14.923,91,14.923,111,10.808,112,11.397,113,11.094,444,10.808,763,12.068,1587,20.259,1667,18.625,1722,22.74,1723,22.74,1724,22.74,1725,22.74,1726,22.74]],["docTitle/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.432]],["docBody/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.503,763,17.152,1682,26.469,1727,32.317]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.432]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.188,25,6.106,114,13.612,444,22.355,1685,21.629,1686,21.629,1687,21.629,1688,21.629,1689,21.629,1695,21.629,1696,21.629,1697,21.629,1698,21.629,1700,23.527]],["docTitle/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.432]],["docBody/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.38,18,10.35,34,9.775,763,15.705,1728,29.591,1729,41.307,1730,41.307,1731,29.591,1732,29.591,1733,29.591]],["docTitle/docs/iota-java/0.1/references/cda-advice",[444,22.756]],["docBody/docs/iota-java/0.1/references/cda-advice",[0,3.012,41,14.592,444,18.285,1711,25.145,1712,25.145,1713,25.145,1714,31.508,1715,25.145,1716,25.145,1717,25.145,1718,25.145,1719,25.145,1720,25.145,1721,25.145]],["docTitle/docs/iota-js/0.1/introduction/overview",[0,3.432]],["docBody/docs/iota-js/0.1/introduction/overview",[0,3.378,4,4.983,25,3.917,48,8.986,50,8.497,444,18.69,1656,21.865,1657,21.865,1658,21.865,1659,21.865,1660,21.865,1661,21.865,1662,21.865,1663,21.865,1664,21.865,1665,21.865,1666,21.865]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.432]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.496,4,2.993,25,3.465,34,7.801,50,10.307,83,9.325,109,14.305,110,13.8,111,11.224,112,11.836,113,11.521,179,17.061,763,12.533,1667,19.341,1677,21.038,1734,23.614,1735,23.614,1736,23.614,1737,23.614,1738,23.614,1739,23.614]],["docTitle/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.432]],["docBody/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.504,25,4.449,83,11.974,444,14.412,763,16.092,1682,24.835,1740,30.322]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.432]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.34,25,6.24,114,12.918,444,20.818,1685,20.526,1686,20.526,1687,20.526,1688,20.526,1689,20.526,1695,20.526,1696,20.526,1697,20.526,1698,20.526,1741,25.061,1742,25.061,1743,25.061,1744,25.061,1745,25.061]],["docTitle/docs/iota-js/0.1/references/cda-advice",[444,22.756]],["docBody/docs/iota-js/0.1/references/cda-advice",[0,3.012,41,14.592,444,18.285,1711,25.145,1712,25.145,1713,25.145,1714,31.508,1715,25.145,1716,25.145,1717,25.145,1718,25.145,1719,25.145,1720,25.145,1721,25.145]],["docTitle/docs/general/0.1/introduction/overview",[0,3.432]],["docBody/docs/general/0.1/introduction/overview",[0,3.098,4,4.716,1746,37.216]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.432]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.375,4,2.192,51,9.463,70,20.369,116,10.476,535,12.495,664,12.495,767,26.375,876,11.878,1005,21.318,1747,17.294,1748,17.294,1749,17.294,1750,17.294,1751,17.294,1752,17.294,1753,17.294,1754,17.294,1755,17.294,1756,17.294,1757,17.294,1758,17.294,1759,34.461,1760,17.294,1761,34.461,1762,17.294,1763,17.294,1764,17.294,1765,17.294,1766,17.294,1767,31.038,1768,17.294,1769,25.893,1770,27.652,1771,25.893,1772,25.893,1773,17.294,1774,17.294,1775,17.294,1776,17.294]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[51,26.196]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,2.976,34,6.338,51,24.118,54,12.078,59,17.093,60,14.684,85,13.177,103,15.714,181,12.078,192,13.862,661,14.684,767,14.684,876,13.177,1468,24.907,1777,19.186,1778,19.186,1779,19.186,1780,19.186,1781,19.186,1782,19.186,1783,19.186,1784,19.186,1785,19.186,1786,19.186,1787,19.186,1788,19.186,1789,19.186,1790,27.957,1791,27.957,1792,19.186,1793,19.186,1794,19.186,1795,19.186,1796,15.714,1797,19.186,1798,19.186,1799,19.186,1800,19.186,1801,19.186,1802,19.186,1803,19.186,1804,19.186,1805,19.186,1806,32.984,1807,19.186,1808,19.186]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[0,3.432]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,3.36,25,3.998,50,4.466,180,10.74,181,8.834,246,12.501,628,12.501,763,14.462,767,23.638,941,12.501,965,12.501,1256,19.649,1393,12.068,1796,11.493,1809,14.032,1810,14.032,1811,14.032,1812,14.032,1813,14.032,1814,14.032,1815,14.032,1816,27.249,1817,14.032,1818,14.032,1819,14.032,1820,33.573,1821,14.032,1822,27.249,1823,35.641,1824,22.055,1825,14.032,1826,14.032,1827,14.032,1828,14.032,1829,14.032,1830,14.032,1831,14.032,1832,14.032,1833,14.032,1834,14.032,1835,14.032,1836,22.055,1837,27.249,1838,14.032,1839,14.032,1840,14.032,1841,14.032,1842,14.032,1843,14.032,1844,14.032,1845,14.032,1846,14.032,1847,14.032,1848,14.032,1849,14.032,1850,14.032,1851,14.032,1852,14.032,1853,14.032,1854,14.032,1855,14.032]],["docTitle/docs/general/0.1/how-to-guides/install-go-on-sbc",[95,32.883]],["docBody/docs/general/0.1/how-to-guides/install-go-on-sbc",[0,3.24,51,16.591,95,32.164,133,18.368,1856,30.322,1857,30.322,1858,30.322,1859,30.322,1860,30.322]],["docTitle/docs/general/0.1/references/troubleshooting",[0,3.432]],["docBody/docs/general/0.1/references/troubleshooting",[0,3.175,662,26.477,1187,30.82,1861,34.594,1862,34.594,1863,34.594,1864,34.594]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,6.067]],["docBody/docs/smartcity/0.1/introduction/overview",[0,2.894,4,5.116,411,20.895,1358,19.397,1393,18.161,1865,33.191,1866,33.191,1867,33.191,1868,29.57,1869,33.191]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[441,27.979]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[0,3.319,437,12.481,439,19.58,441,24.015,1393,13.998,1870,25.583,1871,25.583,1872,25.583,1873,23.479,1874,25.583,1875,25.583,1876,25.583,1877,25.583,1878,23.479,1879,25.583,1880,22.792,1881,25.583,1882,25.583,1883,25.583,1884,22.792,1885,22.792]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[441,27.979]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[0,2.254,57,13.879,75,21.548,86,11.594,441,15.375,536,13.522,1228,15.74,1238,12.765,1311,23.439,1352,14.47,1358,25.261,1393,22.737,1440,15.74,1868,15.74,1873,18.07,1878,18.07,1886,17.667,1887,26.31,1888,17.667,1889,17.667,1890,26.31,1891,26.31,1892,15.74,1893,17.667,1894,17.667,1895,17.667,1896,17.667,1897,17.667,1898,17.667,1899,17.667,1900,17.667,1901,17.667,1902,17.667,1903,17.667,1904,17.667,1905,17.667,1906,17.667,1907,17.667,1908,17.667,1909,17.667,1910,15.74,1911,17.667,1912,15.74,1913,15.74,1914,15.74,1915,14.47,1916,14.47,1917,17.667,1918,17.667]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[441,27.979]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,2.948,4,4.002,54,17.61,83,12.471,86,14.944,89,9.593,90,17.61,116,13.794,182,11.972,192,16.452,411,14.335,437,7.131,441,20.003,1211,13.022,1213,11.972,1358,22.123,1365,18.651,1393,19.837,1770,20.287,1796,11.972,1873,23.509,1878,26.891,1910,20.287,1915,22.911,1916,22.911,1919,14.617,1920,14.617,1921,14.617,1922,14.617,1923,14.617,1924,14.617,1925,22.771,1926,14.617,1927,14.617,1928,14.617,1929,14.617,1930,14.617,1931,14.617,1932,14.617,1933,14.617,1934,14.617,1935,14.617,1936,14.617,1937,14.617,1938,13.022,1939,14.617,1940,20.287,1941,14.617]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[1393,18.768,1942,30.559]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[0,2.434,433,15.939,1238,18.293,1352,20.737,1358,22.383,1393,20.956,1912,30.245,1913,30.245,1914,22.557,1915,27.805,1916,27.805,1938,22.557,1942,22.557,1943,25.319,1944,25.319,1945,25.319,1946,33.949,1947,25.319,1948,25.319,1949,25.319,1950,25.319,1951,25.319,1952,25.319,1953,25.319,1954,25.319]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[441,27.979]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[0,1.693,258,19.341,437,11.521,439,18.074,441,23.237,1365,19.341,1873,27.31,1878,22.241,1880,21.038,1884,21.038,1885,21.038,1955,23.614,1956,23.614,1957,23.614,1958,23.614,1959,23.614,1960,23.614,1961,23.614,1962,23.614,1963,23.614,1964,23.614,1965,23.614,1966,23.614,1967,23.614,1968,23.614,1969,23.614,1970,23.614,1971,23.614,1972,23.614,1973,23.614,1974,23.614,1975,23.614,1976,23.614,1977,23.614,1978,23.614]],["docTitle/docs/smartcity/0.1/astropiota/references/sensehat-specs",[1873,18.355,1878,18.355,1979,23.808]],["docBody/docs/smartcity/0.1/astropiota/references/sensehat-specs",[66,19.233,70,8.222,98,10.261,111,5.955,332,11.162,441,7.322,477,11.162,834,11.162,917,11.162,922,10.261,1193,19.987,1466,23.729,1530,11.162,1873,19.898,1878,21.806,1892,17.956,1940,17.956,1979,17.956,1980,12.529,1981,12.529,1982,12.529,1983,12.529,1984,12.529,1985,12.529,1986,20.155,1987,25.285,1988,12.529,1989,31.75,1990,25.285,1991,12.529,1992,12.529,1993,12.529,1994,12.529,1995,12.529,1996,25.285,1997,12.529,1998,12.529,1999,12.529,2000,12.529,2001,12.529,2002,20.155,2003,28.972,2004,12.529,2005,12.529,2006,12.529,2007,12.529,2008,12.529,2009,20.155,2010,20.155,2011,20.155,2012,12.529,2013,12.529,2014,12.529,2015,12.529,2016,25.285,2017,20.155,2018,12.529,2019,12.529,2020,12.529,2021,12.529,2022,20.155,2023,12.529,2024,12.529,2025,12.529,2026,12.529,2027,12.529,2028,12.529,2029,12.529,2030,12.529,2031,12.529,2032,12.529,2033,12.529,2034,12.529,2035,12.529,2036,12.529,2037,12.529,2038,12.529,2039,12.529,2040,12.529,2041,12.529,2042,12.529,2043,12.529,2044,12.529,2045,12.529,2046,12.529,2047,12.529,2048,12.529,2049,12.529,2050,12.529,2051,12.529,2052,12.529]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/structure-of-a-transaction":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/command-line-flags":{},"docs/hub/0.1/references/database-tables":{},"docs/hub/0.1/references/security-considerations":{},"docs/hub/0.1/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["0",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["0.2で、スクロールテキストは読むのに十分遅くなりますが、遅くなりすぎません。backcolourとtextcolourは、0から255までのrgb",{"_index":1968,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["01",{"_index":1756,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["02_run_iri.sh",{"_index":1208,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0に設定し、ネットマスクをnmap",{"_index":1851,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["0またはvalu",{"_index":838,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":424,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":360,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/concepts/node-quorum":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["1,000トランザクション（tps）を送信します。tpsを変更したい場合は、tpsクエリパラメータを追加することができます。たとえば、10,000tpsを送信するには、次のようにエンドポイントにリクエストを送信します。http&#x3a;//localhost:8080/spammer?cmd=start&tps=10000",{"_index":985,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1.0",{"_index":1894,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":573,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/references/tryte-alphabet":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":1020,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":1031,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["100",{"_index":645,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1484,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":649,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["10:57:54.417129",{"_index":1041,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["10gb",{"_index":810,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1188,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":256,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":257,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":846,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":279,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1425,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":1908,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["120",{"_index":781,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["128",{"_index":1516,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1517,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["13906",{"_index":1042,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["14265",{"_index":669,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["14626（tcp/udp）と14666（tcp",{"_index":955,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["15",{"_index":2021,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["15600",{"_index":667,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["16",{"_index":2034,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["17.05",{"_index":735,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18.04",{"_index":664,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["18.04）の場合は、build",{"_index":857,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18でiri",{"_index":877,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["1i",{"_index":1310,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":345,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1284,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["1つが81トライトのセグメントに分割されます。その後、各セグメントは26",{"_index":238,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つにテストデータを公開したくないかもしれません。代わりに、iota",{"_index":1372,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1512,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":1695,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのiriノードと1",{"_index":1375,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":248,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのアドレスを導出するために使用されます。秘密鍵とアドレスは1対1のペアと考えることができます。アドレスは公開されており、クライアントはトランザクションのアドレスフィールドを使用してiotaトークンとメッセージを送信できます。秘密鍵は秘密であり、アドレスからiota",{"_index":232,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つのキーダイジェストを導出するために1回ハッシュ化されます。たとえば、1つのキーフラグメントによって1",{"_index":241,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1つの頂点を表す一種の有向非巡回グラフ（dag",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["1つは、iota",{"_index":223,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1296,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["1と2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1と2",{"_index":388,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":284,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["1に接続され、トランザクション1はトランザクション2",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1のアドレスから80i",{"_index":265,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":1059,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":384,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["1より大きい場合、署名は1",{"_index":259,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":365,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["1分程度待つと、トランザクションが確定されたときにzmq",{"_index":1407,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["1回だけ作成および登録されます。資産の管理権は時間の経過とともに変化し、特定の資産の管理権の変化に関連する情報を集約するためにmamチャネルを使用することは意味があります。mamチャネルを使用することにより、実装の複雑さを制限でき、すべての異なる管理権の変更を適切な資産に簡単にリンクできます。さらに、mam",{"_index":1633,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["1回でもiota",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1431,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化され、81",{"_index":242,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":253,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1度iotaトークンを取り出したアドレスからは2度とiotaトークンを取り出してはいけません。したがって、転送バンドルでは、iotaトークンを取り出したアドレスの残りのiota",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1度吸収し、セキュリティレベルごとに27回圧搾します（セキュリティレベル1だと27回、セキュリティレベル2だと54回、セキュリティレベル3だと81",{"_index":236,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":829,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":842,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":306,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["1秒あたりのトランザクション数。2つのカテゴリに分けられます。receiv",{"_index":967,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["1秒間に処理できるトランザクション数をテストするには、web",{"_index":982,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1：astropiota",{"_index":1865,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["2",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["2,187、4,374、または6,561",{"_index":237,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,187、4374、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントがあります。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。これは27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":240,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":570,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1509,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":506,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1322,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1227,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["2.7piのiota",{"_index":1207,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["20",{"_index":1497,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":891,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["2015",{"_index":1429,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1499,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1432,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20mi",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["20の事前にビルドされた（layerディレクトリ内の）マークル木を使用します。このマークル木は、コンパスが1年以上30",{"_index":1384,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["2128",{"_index":1518,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1520,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":782,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["243",{"_index":895,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["25",{"_index":1909,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1522,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2673",{"_index":336,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":239,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27、54、または81",{"_index":249,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27、54、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":252,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":250,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["2gb",{"_index":809,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16です。したがって、24ではなく16",{"_index":1853,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つあります。docker",{"_index":953,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":408,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":409,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":395,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照して承認しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2",{"_index":389,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2つのトランザクション（マイルストーンのセキュリティレベルが2",{"_index":386,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":1668,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの末尾トランザクションの1つにも接続されています。）この2",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1091,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1094,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["2つの親を参照する必要があります。トランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドやバンドル内の最後のトランザクションのbranchtransactionフィールドとtrunktransact",{"_index":228,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":397,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":341,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":266,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":338,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/security-levels":{}}}],["2人のユーザー間で転送を発行します（processtransf",{"_index":1114,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["2回以上トークンを取り出してはいけません。したがって、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":260,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["2度とiota",{"_index":999,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":308,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["2種類のイベントをトリガできます。1つはバンドルがペンディング状態にあるとき、もう1",{"_index":1682,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["2種類のリスナがあります。1つはチャネルを使用するもので、もう1",{"_index":1681,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2行の下に秘密の81",{"_index":1366,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":282,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["3",{"_index":57,"docTitle":{"docs/iota-basics/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/trinary":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["3+)とpip",{"_index":790,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":514,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":258,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["30mi",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["30秒ごとに、transfer",{"_index":1678,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1067,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":350,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["384ハッシュ関数を使用してシードとインデックスを足し合わせたものをハッシュ化し、81",{"_index":235,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["3d",{"_index":1990,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["3つの0のトリット（000トリット）がトライトの9",{"_index":423,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":358,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3でダウンロードしたubuntu",{"_index":1792,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["3のアドレスから80i",{"_index":267,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["3はraspberri",{"_index":1945,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1254,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":364,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法3",{"_index":363,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":283,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["4",{"_index":62,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1321,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":435,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["400",{"_index":892,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["401",{"_index":924,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["4gb",{"_index":660,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["4gb以上の空きram",{"_index":1378,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["4x3",{"_index":1896,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、数式：2depthのdepthによって定まります。上の図では、マークル木の深さは2",{"_index":376,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["4つの隣接ノードへの接続を試み、さらに4",{"_index":949,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["4のiri",{"_index":689,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1088,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1199,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["5",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["50",{"_index":1249,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["50,000",{"_index":655,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":657,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["55mi",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3に関連付けられています。したがって、トランザクション5はトランザクション2と3",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["60",{"_index":1234,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["60fp",{"_index":2018,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["64",{"_index":662,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1252,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/node-quorum":{}}}],["6か7",{"_index":881,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6でiota",{"_index":1060,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親です。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":369,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["6はトランザクション5（および表示されていない別のトランザクション）に接続されています。そのため、トランザクション6はトランザクション5を介して間接的にトランザクション3",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6コマンドライン引数を追加する必要があります。ネットワークインターフェイス名も追加する必要があります。ネットワークインターフェイス名がなければ、クライアントはsbc",{"_index":1829,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["7",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["8",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":789,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":1867,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["81",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/references/glossary":{},"docs/utils/0.1/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":918,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":225,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1186,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["8×8",{"_index":2015,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["8、またはnode.j",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["8つの隣接ノードを持つことができます。各ノードは接続する4つの隣接ノードを選択し、自分を選択した他の4",{"_index":969,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["8以上かpython（3以上）とpip",{"_index":988,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["9",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90文字です。余分な9",{"_index":220,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["990,100",{"_index":647,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["9999",{"_index":1068,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1428,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9個（デブネット上のmwm）または7個（スパムネット上のmwm）の0",{"_index":272,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":346,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1480,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abc123の登録id",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["absent",{"_index":923,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["acceleromet",{"_index":1991,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["accepted隣接ノードがない場合は、autopeeringtcp/udpポート（14626",{"_index":974,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["access",{"_index":2027,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["account",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["accountlisten",{"_index":1727,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["accountplugin",{"_index":1729,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["acycl",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["ad",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["adapt",{"_index":1737,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["add()メソッドからのレスポンスにはipfsハッシュが含まれています。これは、タングルに添付される前にメタデータとsha256",{"_index":1590,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["addneighbor",{"_index":887,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["addneighbors(uri",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["addresscountaggreg",{"_index":844,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["address、obsoletetag、timestamp、value、currentindex、およびlastindex",{"_index":422,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["advanc",{"_index":1769,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["air",{"_index":2005,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":847,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["alpha",{"_index":393,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":405,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["alway",{"_index":749,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["amazon",{"_index":1232,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["amount",{"_index":1293,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["amp;lt;packag",{"_index":594,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1278,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["apach",{"_index":511,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":48,"docTitle":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/database-tables":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["apiがあります。api",{"_index":222,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1115,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":933,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["apiが提供されます。オブジェクトリポジトリに保存される情報には、iotaタングル上でアクセス可能なチャネルのルートアドレスや制限付きmamチャネルが使用されている場合、mamチャネルに保存されている情報を復号化するために必要な暗号化キー（サイドキーと呼ばれます）が含まれます。次のタプルが作成され、オブジェクトリポジトリに保存されます。&amp;lt;assetuniqueid",{"_index":1637,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiとして書かれたバックエンドの2つの部分から成ります。このpoc",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1449,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1457,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1098,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["apiの形式を取ります。生産者と消費者の両方が自身をグリッドに登録するために使用します。エンティティが登録されると、グリッドはエンティティのmam出力チャネルの監視を開始します。登録が成功すると、idが返されます。このid",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは2",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["apiは、webサーバー上でホストされる通常のweb",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは、永続的に情報を格納する必要があるアーキテクチャのどの部分でも使用できます。apiは標準データベースのcrud操作をサポートし、すべての呼び出しでエンティティ登録id",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":886,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1086,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1202,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiを使い始めるでgrpc",{"_index":1174,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["apiを使用しているため、すべてのzmq",{"_index":807,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを使用して情報を交換できます。この設計図のためにmam",{"_index":1632,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiを通してiri",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiを通して、ハブはiotaトークンの取り出しと預け入れを管理する安全な方法を提供します。各ユーザーのデータを管理するために、ハブはデータベースを使用して、id",{"_index":994,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1225,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":616,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["apiエンドポイントへのすべてのリクエストはiri",{"_index":852,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["apiサーバー：node.js（express",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["apiメソッドの詳細については、api",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":883,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":915,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":717,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":752,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":398,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":396,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["api呼び出しの組み合わせで行われます。mam",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["api（get",{"_index":1591,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["applic",{"_index":1272,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["applications/utilities/termin",{"_index":1267,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["appname、appversion、latestmilestone、neighbors、tip",{"_index":1933,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":1013,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":1011,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["archive（ppa",{"_index":1023,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["argon2",{"_index":995,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["arm64",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armシステムアーキテクチャ（32ビットまたは64",{"_index":1857,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["artimaガイドはjreでscala",{"_index":814,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":906,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":290,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1277,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["asset",{"_index":1609,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["assetcustodianid",{"_index":1620,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetcustodianidは最初はassetownerid",{"_index":1627,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1619,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetowneridに関する情報は、アプリを通じて挿入されるか、外部の情報源から取得されます（アプリを使用するための登録サーバーなど。この場合は会社のvat",{"_index":1626,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1275,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueidは、qrコードスキャンによって読み取られ、登録apiを通じてアクセスするassetuniqueidサーバー（例：gs1",{"_index":1624,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["astropiota",{"_index":441,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["astropiotaはastropiのクローンです。astropiは、iss（国際宇宙ステーション）でraspberri",{"_index":1870,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaはjavascriptで書かれており、sens",{"_index":1881,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaは、タングルを使用してローカル環境データを追跡するためにmamに接続されている国際宇宙ステーションからのastropiのクローンです。地球上で、astropiota",{"_index":1866,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["astropiotaはタングル上のローカル環境データを追跡するためにマスク認証メッセージング（mam）を使用します。地球上で、astropiota",{"_index":1874,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaを実行したい場合は、sshを介して対話するためにastropiotaのネットワークアドレスが必要です。raspberri",{"_index":1943,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["astropiotaを実行するには、正しいハードウェアとraspberri",{"_index":1886,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["astropiotaサンプルコードは、dav",{"_index":1883,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiota送信者はsens",{"_index":1955,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiは、温度、湿度、その他のデータを検知するためにraspberri",{"_index":1871,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["atmel",{"_index":2048,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["attach",{"_index":1390,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["attachmenttimestamp",{"_index":277,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":893,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["attachtotangleエンドポイントはリソースを大量に消費します。結果として、attachtotangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、ノードにプルーフオブワークをさせるのではなく、専用のプロキシサーバをインストールしてプルーフオブワーク（pow",{"_index":850,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["attiny88",{"_index":2049,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["authent",{"_index":1303,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["auto",{"_index":1209,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["autoconfirm",{"_index":333,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["autopeeringtcp/udpポート（14626",{"_index":981,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["avail",{"_index":926,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["avxまたはss",{"_index":862,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["avxベースのpow",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["awesom",{"_index":1332,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["awesometestplugin",{"_index":1733,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["awsには、クラウド上でlinux",{"_index":1782,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awsまたはmicrosoft",{"_index":1453,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1454,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["aとは対照的に、トークンを複数のユーザーからコールドウォレットに移動するのはそれほど簡単ではありません。ただし、ハブにハブ所有者のアドレスの一部を無視させることは可能です。そのためには、hub_addressテーブル行のis_cold_storageフィールドを1に設定する必要があります。これにより、sweepservic",{"_index":1107,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["aに100mi",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["b+（b",{"_index":1900,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["background",{"_index":1471,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["badgerdbデータベースに保存されます。データベースディレクトリを保存するパスをdb",{"_index":1670,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balanceev",{"_index":1118,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["balancesubscript",{"_index":1103,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["balancesubscriptionrequest",{"_index":1119,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["barometr",{"_index":2001,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["bazel",{"_index":1015,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["bazelを使ってビルドし、dock",{"_index":1189,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["beast.cc:65",{"_index":1043,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["best",{"_index":412,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["beta1",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["between",{"_index":415,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["bin/hub/hub",{"_index":1034,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1076,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1173,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["biometr",{"_index":1302,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-security-settings":{}}}],["bit",{"_index":2022,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["blake2",{"_index":1523,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1524,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blue",{"_index":1246,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["board",{"_index":1891,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["bootstrap",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1219,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1222,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bosch",{"_index":1461,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["bounci",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1243,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["branchtransact",{"_index":276,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":894,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["branchtransactionフィールドとtrunktransact",{"_index":368,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュ値を参照して、トランザクション（子）を他の2",{"_index":226,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["broadcast",{"_index":1223,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["broadcastandstor",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":896,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["bt",{"_index":1767,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":834,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":805,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":806,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1242,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["build",{"_index":1347,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["build.gradleファイルにiotaledg",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":825,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bundl",{"_index":264,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{}}}],["bundles、addresses、tags、approve",{"_index":900,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["bがまだ存在していない場合は、ユーザーbがハブに作成されます（createus",{"_index":1113,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーa",{"_index":1112,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["bは取引所でユーザーaからiota",{"_index":1106,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["c",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1261,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["caddyfileファイルを編集して、powプロキシサーバを設定します。この例では、ローカルホストでpowプロキシサーバを実行しています。外部ネットワークからpowプロキシサーバにアクセスしたい場合は、urlをパブリックip",{"_index":866,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddyはすべてのリクエストのログをrequests.log",{"_index":870,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddy実行可能ファイルと同じディレクトリにcaddyfil",{"_index":865,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["callback",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["callbackeventlisten",{"_index":1684,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["captur",{"_index":1913,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["case",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{}}}],["castl",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1065,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":444,"docTitle":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaがまだアクティブであることを確認した後で、cda",{"_index":1687,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaが必要です。送信者はiotaトークンを含む期限切れのcdaを必要とし、受信者はアクティブなcda",{"_index":1685,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaで残高の大部分を維持することをお勧めします。こうすることで、支払いをより速く、そしてより少ないトランザクションですみます。そのために、利用可能残高を新しいcda",{"_index":1696,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":1664,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをcda",{"_index":1700,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":1745,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":1691,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの最後の9文字はチェックサムで、アドレスとそのアドレスのすべての条件のハッシュ値です。トリニティやdevent蛇口はまだcdaをサポートしていないため、このチェックサムは、トリニティやdev",{"_index":1688,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":1690,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。故に、cda",{"_index":1686,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、送信する前にcdaを任意の形式にシリアル化できます。generatecda()メソッドは以下のフィールドを持つcdaオブジェクトを返します。cda",{"_index":1698,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":1694,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":1744,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":1699,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成し、利用可能残高の合計をそのcda",{"_index":1743,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するとき、cdaがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、cda",{"_index":1711,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaを作成するときには、cdaがアクティブか期限切れかを定義する次の条件を指定します。アクティブアドレスにはiotaトークンを預け入れることができますが、取り出すことはできません。逆に期限切れアドレスからはiota",{"_index":1659,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaを使用して、署名済みアドレスからの取り出しリスクを軽減します。送信者にiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、送信者にその期間の後にだけそのアドレスから取り出すつもりであることを知らせます。その結果、送信者は、cda",{"_index":1658,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値が切れる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":1719,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["centigrad",{"_index":2009,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["certif",{"_index":1265,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chang",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["channelroot",{"_index":1638,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey&amp;gt",{"_index":1639,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["checkconsist",{"_index":898,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["checkconsistency(transact",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":1019,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["chip",{"_index":1995,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["chrome、firefox",{"_index":1506,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["circuit",{"_index":1890,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":828,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["clean",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["client.crt、client.key、およびca.crt）をハブサーバにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1081,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1085,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["cloud",{"_index":1451,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["cloudflareなどのパブリックipfsゲートウェイを使用して、トランザクションハッシュを使用してipf",{"_index":1596,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["clu6afkw/clx6afkb",{"_index":2026,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cmd+スペースバーを押して、検索バーにtermin",{"_index":1803,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1071,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1329,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["codes.dag.sh",{"_index":1287,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["colour",{"_index":2023,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["combin",{"_index":1994,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["come",{"_index":1876,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["command",{"_index":925,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["command変数を別のapi",{"_index":791,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":512,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["common/flags/flags.h",{"_index":1158,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["commun",{"_index":1355,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["comparison",{"_index":414,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["compass",{"_index":1383,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1218,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["compos",{"_index":1377,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1392,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["comput",{"_index":1895,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["config.ini",{"_index":703,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["config.json",{"_index":1197,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1490,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1489,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1195,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["configur",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["configurationに移動して、ノードのurlhttp&#x3a;//localhost:14265",{"_index":1389,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["confirmed.jsファイルでは、iota",{"_index":322,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["connect",{"_index":337,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["consum",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contain",{"_index":1981,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["control",{"_index":2042,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["convert",{"_index":1308,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["coordicid",{"_index":951,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["coordinates.net",{"_index":1483,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["core",{"_index":300,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["cpu",{"_index":1187,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/references/troubleshooting":{}}}],["cpuはavx",{"_index":863,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["creat",{"_index":59,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["createitemchannel",{"_index":1647,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createuserrepli",{"_index":1120,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["createuserrequest",{"_index":1121,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["cree",{"_index":2025,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cron",{"_index":713,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["crontab",{"_index":1914,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ctps1",{"_index":342,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ctrl",{"_index":822,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1077,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1093,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":890,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":347,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":348,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1307,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["currentindex",{"_index":320,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドと、バンドルの終わり（先頭トランザクション）を定義するlastindexフィールドの両方が与えられます。次に、先頭トランザクションを除くバンドル内の各トランザクションは、trunktransactionフィールドを介して互いに接続されます。次に、各トランザクションのaddress、value、obsoletetag、currentindex、lastindex、およびtimestampの各フィールドの値が、スポンジ関数によって吸収され圧搾され、81",{"_index":255,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":304,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["cを押してrepl",{"_index":823,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1216,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["cキーを押し、docker",{"_index":1391,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":742,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":434,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["daemon",{"_index":1236,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":353,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["dag）であり、2015年にserguei",{"_index":366,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["danceなどのweb",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["danger:json.exception.parse_error.101",{"_index":1038,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["danger:シードごとにアカウントを1",{"_index":1677,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["data",{"_index":1193,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["databas",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["data変数をasciitotryt",{"_index":289,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["dave",{"_index":1957,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1066,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":688,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["dbfiles.iota.org",{"_index":885,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["dbに追加して更新するためのストレージrest",{"_index":1636,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":692,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["de",{"_index":1884,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":1058,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["debianベースのオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":956,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["delet",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deni",{"_index":980,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dependencies.jarという.jar",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["depth",{"_index":391,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45",{"_index":1192,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth、minweightmagnitude、delay、そしてmaxdepth",{"_index":1734,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["depthパラメータの値を減らします。iri",{"_index":919,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1196,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["describ",{"_index":1915,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["desktop",{"_index":1263,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["dev/fb1",{"_index":2031,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["dev/ttyusb\\*を使用してusb",{"_index":1841,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1343,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチから新しいgit",{"_index":1330,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1342,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["devent",{"_index":1689,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devic",{"_index":1426,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["devnet",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnet.thetangle.org",{"_index":313,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":331,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":312,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetと同じ構成設定を使用して、iri",{"_index":1182,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetタングル上にあることを確認したい場合は、hashフィールドの値をコピーしてdevnet",{"_index":1409,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetトークンは、mainnet",{"_index":1495,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1493,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1456,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1667,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードのzmqaddress",{"_index":1403,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1300,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":706,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":788,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp（動的ホスト構成プロトコル）サーバ（通常はルーター）から新しい内部ip",{"_index":1748,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1535,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["digest",{"_index":299,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["dikw",{"_index":1423,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["direct",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["discord",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["discordの#helpおよび#fullnod",{"_index":884,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1354,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":784,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":106,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1268,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":1761,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["dnsを使用しますが、他にも多くのddn",{"_index":1760,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":501,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dockerとdock",{"_index":1376,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacosまたはwindowsを実行している場合は、代わりにdock",{"_index":736,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":164,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerコマンドを使用して独自のiotaネットワークを設定できます。このコマンドを実行すると、独自のiotaテストネットワークと2.7pi（最大量）のテストiota",{"_index":1371,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["dockerコマンドを使用して自身のiota",{"_index":1356,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["dockerコンテナでiri",{"_index":729,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":737,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナも再起動するには、dock",{"_index":747,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":738,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":957,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナを再起動するには、run",{"_index":962,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナーをビルドするには、dock",{"_index":734,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、デバイスはiriノード用のlinuxサーバになり、iota",{"_index":730,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でノードを実行すると、ノードを実行するために必要なすべての依存関係が含まれます。たとえば、gccやgo",{"_index":954,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナ内で自分のiri",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":746,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1198,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["document",{"_index":1412,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["domain",{"_index":1763,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["download",{"_index":1269,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["drive",{"_index":2045,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["driver",{"_index":2030,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["duck",{"_index":1759,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":665,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["e",{"_index":1295,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["e0328",{"_index":1040,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["each",{"_index":2032,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["edit",{"_index":1388,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["enabl",{"_index":1211,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":634,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["endpoint",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["energi",{"_index":1413,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["english",{"_index":1927,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enter",{"_index":727,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["entri",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":401,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["enviro",{"_index":1405,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":813,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1399,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["equilibria",{"_index":410,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["error",{"_index":1046,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/references/api-reference":{}}}],["errorcod",{"_index":1150,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["error。例：status::cancel",{"_index":1122,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["errorイベントを購読します。error",{"_index":1740,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["essentialパッケージからgcc",{"_index":858,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["ev",{"_index":440,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":818,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["event_logger.go",{"_index":1701,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventlistenerインターフェースを実装しており、eventmanagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のeventlisten",{"_index":1728,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":1683,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":1702,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["ev）の充電料金をiota",{"_index":436,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exampl",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["example&lt",{"_index":602,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":600,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1260,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":1721,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールドを持つcda",{"_index":1720,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールド値を持つcda",{"_index":1716,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expectedamount",{"_index":1662,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["explor",{"_index":307,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["exportedaccountstate構造体をstore.importaccount",{"_index":1710,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["facad",{"_index":509,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fals",{"_index":319,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":1834,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1331,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1333,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1317,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["fetcher.j",{"_index":1368,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetcher.jsファイルに、sender.j",{"_index":1369,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["fetchtemp.j",{"_index":1400,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["fetchtemp.jsファイルとzmqwatcher.jsファイルはモジュールとしてエクスポートされ、index.j",{"_index":1404,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["fijterのhigh",{"_index":1885,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1238,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1214,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["findtransact",{"_index":899,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["findtransactionobject",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1653,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":1772,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["flag",{"_index":961,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["flink",{"_index":802,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":803,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":800,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["follow",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["fork",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["form",{"_index":2036,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["forward",{"_index":1774,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["foundat",{"_index":599,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["frame",{"_index":2029,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["framework",{"_index":1320,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["function",{"_index":334,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["gateway4フィールドの値をあなたのゲートウェイのipアドレスに置き換えます。addressesフィールドで、スラッシュ（/）の左側の値をあなたのlinuxサーバの内部ip",{"_index":1755,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gcc、clang、または@iota_toolchain",{"_index":1014,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["gccでインストールできます。linux（ubuntu",{"_index":856,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gccやgo",{"_index":975,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc）を使ってgccをインストールすることができます。windowsの場合は、tdm",{"_index":855,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc：macosの場合は、homebrew（brew",{"_index":854,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gener",{"_index":67,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/trinity/0.1/how-to-guides/create-an-account":{}}}],["generate_ca.sh",{"_index":1064,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1075,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1070,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":833,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["getaccountdata",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1123,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getaddressinforequest",{"_index":1124,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbal",{"_index":901,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1125,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalancerequest",{"_index":1126,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getbalances(address",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":224,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["getbalancesエンドポイントを呼び出します。これまでにiota",{"_index":1226,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["getbundl",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1102,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1127,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1128,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getinclusionst",{"_index":318,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":316,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":328,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":902,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":294,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":295,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.jsとしてiota.lib.j",{"_index":1932,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":718,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":750,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":903,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettips(\\[callback",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":394,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":905,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettrytes(hash",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1129,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1130,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["get呼び出しを使用して、ページサイズ10のページ5",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ginkgo",{"_index":593,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":597,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":695,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["github",{"_index":446,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":1693,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":672,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1350,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1180,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":1002,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":675,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":673,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["gnu/linux",{"_index":1906,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":95,"docTitle":{"docs/iota-go/0.1/README":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":598,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":431,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["googl",{"_index":1450,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["googleアカウントでのoauth",{"_index":1455,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1510,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1502,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1507,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1511,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath",{"_index":859,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopathではない場所にgoshimm",{"_index":976,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":574,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gopath環境変数内のディレクトリではないディレクトリに、iotacaddyのgithub",{"_index":860,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["goshimm",{"_index":605,"docTitle":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}},"docBody":{"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["goshimmerは、coordicideにつながるiotaネットワークの進行中のプロトタイプです。coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、iotaネットワークを分散化することができます。この目標を達成するために、goshimmerはそれぞれが特定の役割を持つモジュールで構成されています。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":947,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["goshimmerは、コーディネーターなしでiotaネットワークのプロトタイプを実装しているオープンソースのgo",{"_index":606,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["goshimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":952,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["goでのpow",{"_index":591,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":432,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":572,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goディレクトリを作成します。$usernameプレースホルダーを現在のlinux",{"_index":1858,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":571,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goプログラミング言語の少なくともバージョン1.12",{"_index":853,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["goプログラミング言語を使用するアプリケーションを作成または実行するには、go",{"_index":1856,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["gp",{"_index":1481,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1276,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/the-tangle/0.1/introduction/overview":{}}}],["grid",{"_index":1414,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["grpc",{"_index":993,"docTitle":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/hub/0.1/references/troubleshooting":{}}}],["grpcc",{"_index":1087,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":1057,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1084,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバを提供します。ハブは、対話するために使用できるgrpc",{"_index":1056,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":1010,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guard（gpg",{"_index":1026,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["guiを介してネットワーク上でトランザクションを送受信する場合は、http&#x3a;//localhost:14265で自分のノードに接続して、以下のシードでログインするようにiota",{"_index":1386,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["gyroscop",{"_index":1992,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["h",{"_index":991,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["hardwar",{"_index":1982,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hash",{"_index":274,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["hash(hash(ノード1",{"_index":382,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ1",{"_index":378,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(hash(リーフ3",{"_index":380,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(ノード2",{"_index":383,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ2",{"_index":379,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hash(リーフ4",{"_index":381,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["hashcashと同様に、各トランザクションはそれが検証されることができる前にpowを含まなければなりません。このpowは、有効なトランザクションを作成するのにかかる時間および計算能力を増大させることによって、iotaネットワークにスパム防止を提供します。さらに、スパムトランザクションがネットワークに及ぼす影響を減らすために、ノードは有効なpow",{"_index":420,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["hat",{"_index":1873,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hat\"というメッセージがsens",{"_index":1937,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hat/9",{"_index":2051,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hatからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをjson形式でタングルのmamチャネルに送信します。astropiota受信者はmamチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、astropiota",{"_index":1956,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatが機能していることを確認するには、python3",{"_index":1936,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatでは、python",{"_index":1935,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatには慣性計測装置（imu",{"_index":1879,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatのl",{"_index":1938,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["hatの気温と現地の気温を比較して、自分の位置に合わせて調整できます。mam",{"_index":1967,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度は現地の気温より約13度高くなっています。sens",{"_index":1966,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度センサーはraspberri",{"_index":1964,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatをastropiotaパッケージにインストールします。sens",{"_index":1934,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatデータを以下のjson",{"_index":1882,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatバージョン1.0",{"_index":1902,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["hdmi",{"_index":2039,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hello",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":992,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["helpフラグを付けてiri",{"_index":943,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["high",{"_index":438,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["histori",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{}}}],["home/binディレクトリを$path",{"_index":1017,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["host",{"_index":1830,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1474,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["hts221",{"_index":2012,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["http",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1224,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["httpconnector",{"_index":1726,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/richardstechnotes/rtimulib2",{"_index":2052,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1475,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1476,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":207,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//projects.raspberrypi.org/en/projects/get",{"_index":2050,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//www.gp",{"_index":1482,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsではなくhttpプロトコルを使用していることを確認してください。ノードのアドレスは、コマンドラインフラグのapiaddress",{"_index":1039,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["httpsプロキシサーバを設定したい場合は、nginx",{"_index":777,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":772,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":1005,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":1055,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1054,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1116,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hub/db/db.cc",{"_index":1159,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/server/server.cc",{"_index":1160,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub/service/sweep_service.cc",{"_index":1161,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["hub_address",{"_index":1163,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address_bal",{"_index":1164,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["hub_address行でis_cold_storageを0に設定し、seed_uuid",{"_index":1111,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hub_address行でis_cold_storageを1に設定し、seed_uuid",{"_index":1110,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1131,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1151,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["humid",{"_index":2011,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["i'm",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1340,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ibc",{"_index":1607,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["id",{"_index":950,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/api-reference":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1478,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idをstore.exportaccount",{"_index":1707,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1515,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":1725,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":1672,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1513,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfigコマンドでipアドレスを見つけることができます。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":1848,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ifconfigコマンドを実行します。プログラムはすべてのネットワークインタフェースと与えられたipアドレスを返します。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":1826,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["illegalargumentexcept",{"_index":1240,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["immut",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["imu",{"_index":1880,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["includ",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["index",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1397,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["inerti",{"_index":1985,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["inetip",{"_index":1799,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["info",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:coordicid",{"_index":370,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["info:depth",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["info:github",{"_index":1361,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":1827,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":760,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:window",{"_index":1811,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:このテストトークンはdevnet",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:無料のspamnet",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["init",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initiatetransf",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["input",{"_index":917,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["instal",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1346,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["int128",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["interfac",{"_index":965,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interfacesをクリックしてsshを有効にし、putti",{"_index":1929,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["interruptattachingtotangl",{"_index":908,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["invalid",{"_index":916,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/hub/0.1/how-to-guides/install-hub":{}}}],["io",{"_index":515,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1327,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1328,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/iota-basics/0.1/introduction/overview":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/references/security-levels":{},"docs/iota-basics/0.1/references/units-of-iota-tokens":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/introduction/overview":{},"docs/the-tangle/0.1/concepts/the-coordinator":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/concepts/sweeps":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/hub/0.1/references/security-considerations":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/concepts/hardware-wallet":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/trinity/0.1/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota.j",{"_index":1442,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iota.jsのソースコードとドキュメント：https&#x3a;//github.com/iotaledger/iota.j",{"_index":1869,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":288,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":296,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota/ipf",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":1736,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota://uriで始まり、その後に90",{"_index":1292,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1294,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["iotaapi",{"_index":1723,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotacaddy/caddi",{"_index":861,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iotacaddy/caddyディレクトリにcaddi",{"_index":864,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":502,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaでは、トランザクションのバンドルをノードに送信する必要があります。iotaには、3",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaでは、署名方法の性質上、各アドレスから1度だけしかiotaトークンを取り出さない方が良いため、秘密鍵とアドレスのペアが複数個必要となります。そのため、アドレスからiota",{"_index":233,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":219,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaのチュートリアルやガイドの多くはlinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でlinux",{"_index":1777,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["iotaの使用経験がほとんどないかまったくない場合は、iota",{"_index":1178,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaの最も重要な利点の1",{"_index":1408,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":339,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":354,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":372,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":285,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":281,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaは、iotaネットワーク内のコンピュータがイミュータブルなデータと価値（iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":998,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaは、winternitzワンタイム署名方式を使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵でバンドルに一度署名することは安全です。同じ秘密鍵を使用して別のバンドルに署名すると、攻撃者は秘密鍵に総当たり攻撃を行い、そのアドレスからiotaトークンを盗むことができます。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは2度とiota",{"_index":1004,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaは、さまざまなデバイス間でデータや価値（iota",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、専売のシステムを統合することなく、回収可能資産に関する情報をシームレスに収集および共有するための解決策を提供します。情報を収集している間、iotaはセカンドレイヤー技術のmam",{"_index":1611,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaは、暗号化された方法でデータと価値（iotaトークン）を転送することを可能にするプロトコルです。そのため、iota",{"_index":1746,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["iotaは無許可型のdltです。したがって、ノードを個人や企業を含む誰でもが実行することができます。大量のapi呼び出しはコストがかかる可能性があるため、ノード所有者はそれらを一般に公開しないことがよくあります。そのため、iota",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":142,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1416,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用してピアツーピア（p2p",{"_index":1527,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1353,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["iotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1504,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1505,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":292,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":301,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":286,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":287,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":427,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":831,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよびmamチャネルへのアクセスに必要な情報を保存する機能を備えて、既存の資産リポジトリを管理システムの一部として拡張します。ibcsグループの場合、これはibc",{"_index":1640,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルおよび他のiotaテクノロジを使用して、ibc",{"_index":1606,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1420,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルと、あなたが実行しているinterplanetari",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iotaタングルに公開します（mam.attach()）。iotaはトライトを使用しているので、mamペイロードをタングルに送信する前にトライトに変換して（asciitotrytes(json.stringify(data))）mamメッセージを作成する（mam.cr",{"_index":1649,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルを使用してデータをmam",{"_index":1445,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテクノロジーは、このようなアーキテクチャにおいて有利です。なぜなら、iota",{"_index":1534,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":357,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1301,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1166,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":1001,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1217,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaトークンの値が、iota",{"_index":624,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":626,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの取り出し/預け入れや、データを送信することができます。ノードに1",{"_index":254,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークンの総供給量は(333",{"_index":340,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":1663,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaトークンの量があります。この場合は1,000個のiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":627,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンは転送されません。現時点では、zmqエンドポイントはtx",{"_index":990,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":362,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1492,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスからハブ所有者のアドレスの1",{"_index":1003,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを使うには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名し、その署名をトランザクションのsignaturemessagefrag",{"_index":243,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":1000,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":291,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":344,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaトークンを特定のアドレスから特定のアドレスに転送するように指示する1",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1162,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":280,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":311,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送って欲しい場合、送信者にあなたのcda",{"_index":1697,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを送受信するために、クライアントはバンドルと呼ばれるトランザクションのパッケージをノードに送信します。バンドル内のトランザクションは、あるアドレスから別のアドレスにiota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":262,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":625,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークン（およびqub",{"_index":1612,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと同じテクノロジーを使用します。コンパスが停止した場合、iota",{"_index":1177,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":355,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードが台帳のコピーを保持し、iota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションの台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントはシードを持つデバイスです。シードにより、クライアントはアドレスにアクセスできます。アドレスには残高があり、残高がアドレスの中のiota",{"_index":218,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiotaネットワークではアドレスの残高を更新してはいません。これらのトークンを使用できるのは、devnet",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":722,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントはシードを作成して秘密にする必要があります。シードとは、クライアントにアドレスへのアクセスを許可する81",{"_index":230,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":617,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":356,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュが事前定義されたmwmと同じかそれ以上の数の0",{"_index":270,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":221,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":623,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaネットワーク内の各クライアントには、シードと呼ばれる秘密のパスワードがあります。シードは、アドレスの導出とバンドルの署名に使用されます。アドレスはiota",{"_index":229,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルでは、iotaトークンをシードから導出されたアドレスに送信する必要があります。これらのアドレスからは一度だけiotaトークンを取り出すことができます。故に、すべての人が一度もiotaトークンを取り出していないアドレスへ預け入れることが重要です。ただし、iotaトークンを取り出す前に、誰がいつiota",{"_index":1657,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコルの暗号学的ハッシュ関数のマスターキーです。各シードは、ほぼ無制限の固有の秘密鍵とアドレス（957",{"_index":231,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["iotaプロトコルの複雑さを抽象化し、支払いの実行に集中できるようにします。アカウントには、2",{"_index":1656,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1421,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1279,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1494,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1496,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団が実行しているエントリノードとの自動ピアリングによってネットワークに参加します。iota財団のエントリノードと自動ピアするには、自動ピアリングポートとゴシップポートがノードに転送されていることを確認する必要があります。デフォルトでは、これらのポートは14666と14626",{"_index":958,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1241,"docTitle":{},"docBody":{"docs/trinity/0.1/introduction/overview":{}}}],["iota財団のgithub",{"_index":1257,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のgui",{"_index":1652,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iota財団のwebサイト、iota",{"_index":684,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1437,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はcoordicid",{"_index":371,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1433,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1446,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1344,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1434,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1438,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":569,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":227,"docTitle":{},"docBody":{"docs/iota-basics/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1435,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":767,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipf",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsにアップロードします。ipfsはipf",{"_index":1585,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsにファイルを保存してから、イミュータブルで永続的なipf",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ipfsは分散webであるため、ipf",{"_index":1597,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、iota",{"_index":1600,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsハッシュを使ってipf",{"_index":1593,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfs）からのトランザクションハッシュを使用してメタデータ、sha256ハッシュおよびipf",{"_index":1592,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipv4",{"_index":1850,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":1833,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6を使用する場合は、ssh",{"_index":1828,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipを取得するには多くの方法がありますが、このガイドはその1",{"_index":1751,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレス、または動的ipアドレスがある場合は動的dn",{"_index":1766,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":768,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":766,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスが必要です。不幸なことに、インターネットサービスプロバイダはあなたのルーターに動的ipアドレスを与えることが多く、それは定期的に変わります。その結果、デバイスのipアドレスが変わると、デバイスへの接続はすべて失われます。したがって、動的ipアドレスにリンクされているパブリックドメイン名を取得するには、動的dns（ddns）サービスを使用する必要があります。ddnsを使用すると、デバイスは実際のパブリックipを数分ごとにddn",{"_index":1758,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスが必要です。静的ip",{"_index":1747,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスでポートが開いていることを確認して、ルールをテストします。ルールをテストするには、yougetsignal.com",{"_index":1776,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバのipアドレスに変更します。sign",{"_index":1082,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ipアドレスの特定のポートからローカルデバイスの内部ip",{"_index":1765,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスはinetの隣にあります。127.0.0.1のipアドレスは無視します。127.0.0.1はあなたのローカルホストです。ネットマスクの場合、255は8ビットを表します。したがって、この例のネットマスク長は3\\*8で、長さは24",{"_index":1754,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをduck",{"_index":1764,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":769,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスを変化させないようにする必要があります。それ以外の場合は、ip",{"_index":1749,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスを見つけたら、sshを通してsbc",{"_index":1836,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスを見つけた場合は、自分のアドレスが見つかるまですべてのip",{"_index":1855,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス内のすべての場所は8ビット（256ステート）を取り、ネットマスクは3バイトに設定されているため、ネットマスクは24（3×8=24",{"_index":1852,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス（ルーターのip",{"_index":1752,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["iri",{"_index":160,"docTitle":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/read-your-balance":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iri.conf",{"_index":759,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":871,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":880,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":641,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":882,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":715,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":637,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":636,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":670,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":697,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":611,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":714,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを構築済みのdock",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":671,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriソフトウェアを実行すると、お使いのデバイスがiotaネットワークに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":659,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":361,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":930,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":771,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":620,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":1037,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":639,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":638,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":946,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":618,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":622,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1203,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":920,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":928,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":927,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":721,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":609,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1200,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":728,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":786,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":785,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":633,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":610,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードの台帳には多くの有効なトランザクションが蓄積され、多くの場合、iri",{"_index":778,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの台帳のトランザクションによって参照されているトランザクションですが、iri",{"_index":621,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":608,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1204,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":619,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":648,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":783,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":826,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":731,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを維持しているため、タングルが動作しているp2pネットワーク内の近隣ノードと通信できます。グリッドが自身のiriノードを実行することで、残りのエンティティはlanネットワーク内に存在でき、グリッドのみが同期のために残りのタングルへのwanアクセスを必要とします。代替手段は、すべてのエンティティがタングル上のiriノードに直接wan",{"_index":1536,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iriノードを走らせる（dock",{"_index":159,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":762,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":932,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":741,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iota",{"_index":603,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjavaソフトウェアです。現在iriはクライアントがiotaトークンを相互に転送できるiota",{"_index":607,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iri：latest",{"_index":745,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":324,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["issu",{"_index":447,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/compass/0.1/references/contribution-guidelines":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ixi",{"_index":935,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":712,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["i²c",{"_index":1984,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ja",{"_index":443,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":681,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":91,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["java_max_memori",{"_index":701,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":700,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":699,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1473,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascript、react、node.j",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascript、react、nodej",{"_index":1615,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javascript、react、およびnodej",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascriptでmam",{"_index":1444,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":429,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javascriptライブラリを使用して、回収可能資産にid",{"_index":1614,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javaがインストールされていることを確認するには、java",{"_index":679,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":815,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":430,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":504,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":691,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":702,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":690,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":674,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":696,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":676,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":680,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":739,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":503,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":698,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":1919,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie\"（2016",{"_index":1907,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessie.img",{"_index":1911,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessieにはnoderedが付属していますが、nod",{"_index":1930,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jitpack",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jota",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["joystick",{"_index":2047,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["js",{"_index":445,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1708,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["json.exception.parse_error.101",{"_index":1044,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["jsonオブジェクトを受信すると、ファイルはipf",{"_index":1589,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["jsonシードステートをexportedaccountst",{"_index":1709,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1191,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1253,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keccak",{"_index":234,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["keepass",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":349,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["kernel",{"_index":1861,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["keyboardをクリックし、unit",{"_index":1926,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":841,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":840,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":843,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":298,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1467,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["known",{"_index":970,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["lang",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1309,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["lan）またはワイドエリアネットワーク（wan",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["last",{"_index":1049,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["latest",{"_index":314,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{}}}],["latestmilestoneindex",{"_index":390,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":613,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":723,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":725,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":724,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":614,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":726,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":406,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":615,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["layers_calcul",{"_index":1194,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["led",{"_index":1892,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ledger",{"_index":936,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["ledパッケージをインポートします。最後に、imuデータを検出するためにimu",{"_index":1960,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["legion",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートをleveldbデータベースのleveldown",{"_index":1738,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":1939,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["light",{"_index":1228,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["limit",{"_index":929,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["line",{"_index":960,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["link",{"_index":428,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["linux",{"_index":51,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":808,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxはオープンソースのオペレーティングシステムで、ディストリビューションと呼ばれるパッケージで提供されています。各linux",{"_index":1778,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxまたはmacosで実行するには、.\\\\caddyを実行します。windows上でこのファイルを実行するには、ダブルクリックするか、コマンドプロンプトで.\\\\caddi",{"_index":868,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["linuxやmacosでshimmerファイルを実行するには、./shimmerを実行します。windows上でファイルを実行するには、ファイル名をshimmer.exeに変更してから、ファイルをダブルクリックするか、コマンドプロンプトで.\\\\shimm",{"_index":978,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["linuxオペレーティングシステムを使用している場合は、このガイドのコマンドの前にsudo",{"_index":733,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxオペレーティングシステムを使用している場合は、このコマンドの前にsudo",{"_index":1382,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバ。windowsまたはmacosオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1185,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["linuxサーバがssh",{"_index":1801,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがsshプロトコルを使用したメッセージを理解する前に、linuxサーバをssh",{"_index":1795,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがなく、windowsまたはmaco",{"_index":1750,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバでiri",{"_index":658,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバで、ターミナルウィンドウを開いて、nginx",{"_index":754,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":716,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバに接続するには、セキュアシェル（ssh",{"_index":1793,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバのip",{"_index":1807,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバの現在の内部ip",{"_index":1753,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバへのssh",{"_index":1800,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを起動し、ターミナルを開いて、linuxサーバのip",{"_index":1798,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを閉じ、リストからlinux",{"_index":1797,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバ（このガイドではubuntu",{"_index":663,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1274,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["linuxディストリビューションの1つがubuntuです。ubuntu",{"_index":1779,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxディストリビューションのweb",{"_index":1824,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linuxディストリビューションはオープンソースであり、linux",{"_index":1780,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linux仮想マシンを実行したくない場合は、amazonなどの会社からクラウドコンピュータの使用を借りることができます。この方法を使うことで、ポート転送やメモリ不足を心配する必要はありません。amazon",{"_index":1781,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["list",{"_index":1980,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["liter",{"_index":1048,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["load",{"_index":1732,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["local",{"_index":941,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["local_snapshots_base_path",{"_index":643,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":644,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":653,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":656,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":779,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":646,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":654,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":780,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localis",{"_index":1925,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1621,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["locationは携帯電話のgp",{"_index":1628,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["log",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["look",{"_index":1887,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":820,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["lps25h",{"_index":2004,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lsm9ds1",{"_index":1988,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lt",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバ。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1012,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["ltsバージョンまたは最新バージョンのnode.jsとnpm",{"_index":1362,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":1021,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mac",{"_index":732,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["machin",{"_index":1791,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["macosx",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1324,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["mac上のlinuxサーバへのssh",{"_index":1802,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["magnetomet",{"_index":1993,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["magnitude：mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。プルーフオブワークの間、トランザクションハッシュの末尾に、mwmと同じ数の0",{"_index":268,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mainnet",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/compass/0.1/references/compass-configuration-options":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":872,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木の深さは23です。したがって、コーディネーターの公開鍵と秘密鍵のペアは8,388,608",{"_index":377,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーン署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":385,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["mainnetと同じテストトークンの総供給量で独自のプライベートネットワークを運営することができます。このようにして、ネットワーク外の誰かがテストデータのトランザクションを見ることなくデータとiota",{"_index":1373,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetやdevnetなどのパブリックiota",{"_index":1176,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnetやdevnetなどのパブリックiotaネットワークを使用せずにアプリケーションをテストしたい場合は、プライベートタングルを設定することができます。そのためには、コンパスを実行して、コンパスをiri",{"_index":1181,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1179,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上でアプリケーションを使用する準備が整ったら、アプリケーションをプライベートiriノードから切断して、mainnet",{"_index":1374,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["mainnet上で動作するオープンソースのjavaソフトウェアです。このソフトウェアは現在のiotaプロトコルを定義しています。iriはクライアントがお互いの間でiota",{"_index":604,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["malform",{"_index":1212,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":437,"docTitle":{"docs/utils/0.1/mam-watcher/overview":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.client.j",{"_index":1645,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamのgithub",{"_index":1443,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mamは購読サービスです。最新のデータを受信するためにastropiota",{"_index":1875,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mamを使用しない場合は、代わりにiota",{"_index":1617,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamクライアントライブラリを使用してiotaタングルに保存されます。この機能は、アプリに埋め込むことも、外部サーバー（mamサーバー）を介して実装することもできます。外部サーバー（mamサーバー）との間で、セキュアなhttp",{"_index":1631,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamサーバーは、最初に、オブジェクトリポジトリから特定の資産に関連付けられているmamチャネルのルートに関連する情報を取得する必要があります。これは、qrコードのスキャンから取得されるか、手動で挿入されるassetuniqueidをプライマリーキーとして使用することによって行われます。これらの情報はそれぞれのmamチャンネルに添付され、iotaタングルにイミュータブルに保存されます。このために、以下の2",{"_index":1642,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルから読み取ることができるように、電力源は生産者に登録/登録解除する必要があります。これは生産者側で軽量のweb",{"_index":1545,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルがもう使用されていないことを知らせるためにgoodby",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルが作成されます。回収可能資産のデジタルツインは、以下の情報で作成されます。&amp;lt;assetuniqueid",{"_index":1618,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが作成されるか既存のmamチャネルが更新されたら、オブジェクトリポジトリを更新する必要があります。これは、上で紹介したcreateitem()およびupdateitem",{"_index":1650,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが使用されなくなったことを知らせるために、goodby",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルとweb",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルに追加されます。そのために、新しいmamメッセージが既存のチャネルに添付され、次の情報が更新されてタングルに保存されます。&amp;lt;assetcustodianid",{"_index":1641,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの作成と使用、web",{"_index":1448,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルの作成後、中央管理のバックエンドのオブジェクトリポジトリにデータが入力されます。オブジェクトリポジトリはfirebas",{"_index":1634,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの初期化中に作成されたmam",{"_index":1971,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamチャネルを作成し、javascriptクライアントライブラリを使用してmam",{"_index":1654,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["mamチャネルを作成します。グリッドはこの情報を中央のdbでも追跡しますが、mam",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルを作成する前に、トランザクションが保存されるiotaネットワーク（プロバイダ）を選択する必要があります。これは、メインのiotaネットワーク、またはhttps&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1646,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1411,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["mamチャネルを使用して特定の資産の保管の変更を登録すると、さまざまな保管担当者情報をiota",{"_index":1616,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル情報にそれぞれアクセスして更新する（例えば、保存されているデジタルツインを更新するために新しいメッセージを追加する）関数が実装されています。reactで書かれたweb",{"_index":1643,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル詳細を使用して電力源のmam",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamプロトコルを使用して、回収可能資産にidを付与し、mam",{"_index":1613,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージのペイロード（例えば、デジタルツインに含まれる情報）を暗号化すること、および選択された当事者だけにアクセスを保証することを可能にします（mam.changemod",{"_index":1648,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージはjson",{"_index":1969,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamメッセージは、iota",{"_index":1970,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。mam",{"_index":1360,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["manag",{"_index":1297,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["manual",{"_index":1351,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{}}}],["map",{"_index":839,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":849,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":1027,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1503,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":1028,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1099,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["marketplac",{"_index":1410,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["matrix",{"_index":2017,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["maven",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":693,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":392,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":403,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["maxdepth",{"_index":407,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["mcu",{"_index":2044,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["measur",{"_index":1986,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["merkl",{"_index":374,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["messag",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["messages.proto",{"_index":1117,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1422,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["metadata",{"_index":931,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["mi",{"_index":1248,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["micro",{"_index":2041,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["mileston",{"_index":315,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["milestonesとしてsnapshot.meta",{"_index":650,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["millibar",{"_index":2007,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["minimum",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["minweightmagnitud",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1251,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":677,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":439,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1304,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["model",{"_index":1440,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modul",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/hub/0.1/references/troubleshooting":{}}}],["moduleのbuild.gradl",{"_index":94,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["mongodb",{"_index":1722,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["monitor",{"_index":2040,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["monitorinterv",{"_index":1006,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["mostusedaddressesaggreg",{"_index":848,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["multi",{"_index":1231,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["multi_us",{"_index":1718,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multi_useフィールドを持つcda",{"_index":1714,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multius",{"_index":1661,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":1666,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["mvn",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":273,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmが高いほど、プルーフオブワークは難しくなります。クライアントとしてiotaネットワークと対話するときは、ネットワークに適したmwm",{"_index":269,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmは14です。したがって、すべてのトランザクションハッシュ値は、14個の0",{"_index":271,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":359,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["myaccount.go",{"_index":1705,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":1033,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["mysql",{"_index":1030,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1101,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["name",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":601,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":595,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":596,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":744,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1244,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["nativ",{"_index":1314,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["neighbor",{"_index":968,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":719,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":751,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":910,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":888,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighborノードの数はtotalノードの数と同じです。ネットワークがシャーディングを許可すると、neighbor",{"_index":972,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["net",{"_index":1319,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1458,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yamlファイルを新しい静的ip",{"_index":1757,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["network",{"_index":934,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["new",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["neweventloggerplugin",{"_index":1706,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["nginx",{"_index":756,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":765,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":770,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":775,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":758,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":764,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":753,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバでポート5000",{"_index":761,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmapがネットワーク内のすべてのipアドレスをスキャンする必要があるため、このプロセスにはしばらく時間がかかります。小さなサブネット（netmask=24）の場合、nmapは256個のアドレスをスキャンするだけでよいので、数秒かかります。大規模なネットワークでは時間がかかる可能性があります。たとえばnetmask=16の場合、nmapは256\\*256アドレスをスキャンする必要があります。私のテストケースでは、これは2944.17",{"_index":1854,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":411,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":83,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsでjavascriptクライアントライブラリを使用すると、getbal",{"_index":1385,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":794,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsとpythonを使用していますが、任意のzmq",{"_index":987,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1315,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["noderedおよび従来のnodej",{"_index":1931,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":417,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["nonc",{"_index":278,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":425,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["nordic",{"_index":1463,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1470,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nosqlデータベースとして実装され、ポート3000を使用してデプロイされます。特定の資産idに関連付けられたmamチャネルに関連する情報をfirebas",{"_index":1635,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["nosqlデーターベース：mongodb",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["npm",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":1673,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":836,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":907,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["numberformatexcept",{"_index":1239,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1215,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1477,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["ok",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":400,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["on",{"_index":922,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["open",{"_index":1430,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["openjdk",{"_index":678,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1073,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["option",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{}}}],["orang",{"_index":1817,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["orient",{"_index":2000,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ot",{"_index":245,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["otsは未知数の秘密鍵を明らかにしてしまいます。秘密鍵の半分が明らかになるように正規化することで、アドレスから1度だけは安全にiota",{"_index":247,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["ots）iota",{"_index":352,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["ots）を使用しているため、秘密鍵は1つのバンドルに対してのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":373,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["output",{"_index":1940,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["overflow",{"_index":879,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["p2p",{"_index":1415,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["p2pエネルギーグリッドでのエネルギー取引には、4",{"_index":1529,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["p2pエネルギーグリッドアプリケーションは、iotaネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをmam",{"_index":1532,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["p2pエネルギーグリッド内のエンティティがどのようにエネルギーを交換できるかを示しています。p2pエネルギーグリッドの分散型およびマシンベースの性質により、これはiotaの理想的なユースケースになります。iota",{"_index":1528,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["packag",{"_index":1022,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["package.json",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["packで購入できます。このスターターパックには、raspbianがプリインストールされたsd",{"_index":1899,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["page",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["pageとpag",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":1893,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["paramet",{"_index":921,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["parent",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pars",{"_index":1045,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["partner",{"_index":685,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["pascal",{"_index":2006,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["password",{"_index":68,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/manage-your-account":{}}}],["path",{"_index":1266,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":743,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["paymentidoraddressは、グリッドが支払いを行うことができるiotaアドレス、またはグリッドが別の支払い方法を持つようにするための参照id",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddressは、実際のiotaアドレス、または消費者が別の方法で支払いをするために使用できる参照です。グリッドがiota",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1255,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{}}}],["peer",{"_index":971,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/blueprints/0.1/introduction/overview":{}}}],["pend",{"_index":321,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["percentag",{"_index":2013,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["permanod",{"_index":704,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":705,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":979,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["persistenceadapterファクトリをアカウントに渡します。このアダプタは、アカウントがシードステートを保存できるローカルデータベースオブジェクトを作成します。デフォルトでは、ローカルデータベースはプロジェクトのルートに保存されます。persistencepath",{"_index":1735,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1406,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["photo",{"_index":1311,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pi",{"_index":1393,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["pictur",{"_index":1531,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pip3.2",{"_index":1921,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["pitch",{"_index":1997,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["pixel",{"_index":2033,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["piからdevnet",{"_index":1359,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["piからdevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のdevnetノードでイベントストリーム（zmq",{"_index":1394,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["piと直接通信する方法とssh経由で通信する2つの方法があります。直接通信するには、usbキーボードとマウス、さらにhdmi対応モニターまたはテレビを使います。ssh経由で通信するにはputti",{"_index":1903,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piなどの多くのsbcでも同様です。sbcのガイドが別にある場合は、そのガイドに従う必要があります。それ以外の場合は、多くの開発ボードをサポートしているのでarmbian",{"_index":1818,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["piのhdmi",{"_index":1918,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piのip",{"_index":1954,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスがsens",{"_index":1952,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスを見つけるには、python",{"_index":1944,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのusb",{"_index":1917,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piの再起動時に実行するようにcron",{"_index":1949,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piの近くにあり、使用中は加熱されます。キャリブレーションテストによると、sens",{"_index":1965,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["piは、単独で、またはraspberri",{"_index":1897,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piをwifi",{"_index":1923,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piを再起動してcronジョブを開始します。数秒待ってから、raspberri",{"_index":1951,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piを設定する最も簡単な方法は、プラグインモニター、キーボード、マウスを使ってraspberri",{"_index":1922,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piコンピュータとsens",{"_index":1872,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["pi入門ガイドに従います。w3schoolsには、入門ガイドもあります。スターターパックのバージョンはraspbian",{"_index":1905,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["platformio",{"_index":1838,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platformioをお勧めします。platformioはsbc",{"_index":1839,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1452,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":687,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["plu",{"_index":2008,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["plug",{"_index":2038,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["plugin",{"_index":1730,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["pluginインターフェースを実装することができます。このオプションはプラグインが動作するアカウントオブジェクトのためのgetterとsett",{"_index":1731,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["plus）には、sens",{"_index":1901,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pngファイルとしてqr",{"_index":1288,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1501,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャは、電力源、生産者、消費者、およびグリッドがiota",{"_index":1533,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1447,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1525,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pointsとしてsnapshot.meta",{"_index":652,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":1675,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":1679,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["popov教授によってiota",{"_index":367,"docTitle":{},"docBody":{"docs/the-tangle/0.1/introduction/overview":{}}}],["popul",{"_index":1602,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["port",{"_index":1773,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":787,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["postgresまたはfirebas",{"_index":1508,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/iota-basics/0.1/references/glossary":{},"docs/the-tangle/0.1/concepts/proof-of-work":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["pow_arm_c128",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":590,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powは、クライアントによって行われてもよく、またはattachtotangl",{"_index":421,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powは大量の電子メールスパムを減らすための概念として導入されました。この概念はhashcashとして知られており、すべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":419,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":592,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを計算する関数はpearldiv",{"_index":426,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["powプロキシサーバがattachtotangl",{"_index":869,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバは、iotaミドルウェアを使用するcaddyの実装です。このミドルウェアにより、サーバはiriノードのattachtotangleエンドポイントへの呼び出しを傍受してpow",{"_index":851,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバ間の接続を安全にしたい場合は、tlsディレクティブの前のハッシュ記号（＃）を削除し、あなたのssl",{"_index":867,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["pow）は試行錯誤を用いて計算され、それ故、pow",{"_index":418,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/proof-of-work":{}}}],["ppaをダウンロードするためにgnu",{"_index":1024,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["pr",{"_index":1089,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":402,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["preparetransf",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["pressur",{"_index":2002,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["print",{"_index":819,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["privaci",{"_index":1025,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["privat",{"_index":1184,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["processtransf",{"_index":1104,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["processtransferbatchrepli",{"_index":1132,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1133,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1134,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["produc",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpriceフィールドがグリッドによって支払われることが保証されているのではなく、すべての生産者間の合意価格が支払われます。合意価格は、すべてのproducerpric",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["project",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["promotetransact",{"_index":325,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":1029,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["proof",{"_index":939,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["protocol",{"_index":937,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["provid",{"_index":1996,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["pub/sub",{"_index":1357,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["publicに設定されています。パブリックモードでは、誰でもastropiotaによって公開された環境データを見ることができます。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":1962,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicに設定されています。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":1974,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicメソッドの代わりにrestrictedメソッドを使用するようにmamst",{"_index":1367,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["publish",{"_index":1486,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["pubsub",{"_index":1396,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["put",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["putti",{"_index":1806,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pyramid",{"_index":1424,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":433,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":1920,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":1018,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":740,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1285,"docTitle":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1286,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1290,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1289,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-a-qr-code":{}}}],["queue",{"_index":629,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["r",{"_index":1349,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ram",{"_index":661,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["random",{"_index":416,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{}}}],["raspberri",{"_index":1358,"docTitle":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["raspberrypi",{"_index":1395,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["raspberryをクリックして、prefer",{"_index":1924,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["raspbian",{"_index":1910,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["rate",{"_index":2020,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["react",{"_index":1326,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1500,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["reactで書かれたフロントエンドguiとnode.j",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1313,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":1050,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["readm",{"_index":442,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1488,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["real",{"_index":2035,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["reattach",{"_index":1676,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["receiv",{"_index":1283,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["receiver.j",{"_index":1941,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["receiver.jsがastropiotaの現在のmamチャンネルを見つけるためには、メッセージルートが必要です。したがって、sender.j",{"_index":1972,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsが初期化され、astropiotaからのmam",{"_index":1978,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsはmamクライアントとtryt",{"_index":1973,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは、現在のルート上の新しいデータについて5秒ごとにmam",{"_index":1976,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは現在のルートと次のルートを追跡するため、何をリッスンし、いつデータを画面に出力するかがわかります。receiver.jsがsens",{"_index":1975,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":845,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["refer",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":399,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["refresh",{"_index":2019,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["rel",{"_index":2010,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["releas",{"_index":683,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["remote=fals",{"_index":945,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["remote=tru",{"_index":944,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["removeneighbor",{"_index":909,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["removeneighbors(uri",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["repl",{"_index":821,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["replaybundl",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":326,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["req",{"_index":1074,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1862,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["resolut",{"_index":2024,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["respons",{"_index":904,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["rest",{"_index":1441,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["restart",{"_index":748,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["restart=alway",{"_index":963,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["retriev",{"_index":1595,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrievefil",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrieveをクリックします。トランザクションハッシュはapiに渡され、タングル上のトランザクションのメッセージからipfsハッシュやsha256ハッシュなどが取得されます。ipfsハッシュはファイルのダウンロードに使用され、sha256ハッシュはダウンロードしたファイルのsha256",{"_index":1604,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrofit",{"_index":505,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1608,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["rgb",{"_index":2016,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["robot",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":612,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["roll",{"_index":1998,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["root",{"_index":1846,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rootのbuild.gradl",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["router",{"_index":1771,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1201,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["rpchub",{"_index":1032,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["rule",{"_index":1775,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["runtim",{"_index":812,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["runコマンドに次のフラグを1",{"_index":1157,"docTitle":{},"docBody":{"docs/hub/0.1/references/command-line-flags":{}}}],["runコマンドの後にcommand",{"_index":959,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["r（macosではcmd",{"_index":1348,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["s3やazur",{"_index":1598,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["salt",{"_index":997,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltとseed_uuid",{"_index":1109,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["saltパラメーターはもう必要ありません。署名サーバ（signer:50051）と使用するssl",{"_index":1083,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":1036,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1172,"docTitle":{},"docBody":{"docs/hub/0.1/references/security-considerations":{}}}],["sbc",{"_index":1823,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc。おすすめはrasperri",{"_index":1813,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcにgoをインストールしました。これで、go",{"_index":1860,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["sbcにイーサネットポートがない場合は、usb",{"_index":1814,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcのドキュメンテーションを参照します。orang",{"_index":1844,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcの両方がwifi",{"_index":1835,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcをルーターに接続するだけです。wifiを使用したいか、またはデバイスがwifiしか持っていない場合は、wifiを通してルーターに接続する必要があります。以下の手順で、my_ssidをネットワークの名前に、my_password",{"_index":1825,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを再確認します。新しく追加されたusbポートが探しているusb",{"_index":1843,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを確認し、usbアダプタを接続してusb",{"_index":1842,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。sbcは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。iotaテクノロジを使用する専用の組み込みアプリケーション用にsbc",{"_index":1809,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":816,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["scalar",{"_index":1154,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["scalaプログラミング言語とsbt",{"_index":811,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["scan",{"_index":2046,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["screen",{"_index":1912,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["screen/tmuxセッション、system",{"_index":1051,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":1948,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1487,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sd",{"_index":1816,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sdカードを挿入してsbc",{"_index":1819,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["seconds変数を1",{"_index":323,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["secur",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["seed",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/how-to-guides/create-an-account":{}}}],["seed_uuid",{"_index":1108,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":1669,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":1724,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1092,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":293,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/create-an-address":{}}}],["select",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["selector",{"_index":1306,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1464,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1281,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["sender.j",{"_index":1365,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsはmamメッセージストリームを初期化します。初期化中に、メッセージを安全に送信するために使用されるシードとアドレスが生成されます。この例では、メッセージはmainnetネットワークではなくdevnet",{"_index":1961,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsは、湿度と温度のデータを摂氏または摂氏と華氏で表示するようにsens",{"_index":1963,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsウィンドウがトランザクションを送信し、fetcher.j",{"_index":1364,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl（http&#x3a;127.0.0.1:14265",{"_index":1370,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["sender.jsファイルにmamクライアントとiota",{"_index":1958,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sendtransf",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":303,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":1878,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["sensehat",{"_index":1868,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":1946,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1466,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["sequenc",{"_index":1537,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["server",{"_index":1468,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverファイル（18.04",{"_index":1787,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":774,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1469,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["services上の仮想プライベートサーバのインスタンス（t2.xlarg",{"_index":1233,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["set",{"_index":1770,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["setinterv",{"_index":327,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["sha",{"_index":1521,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1259,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256、およびipf",{"_index":1586,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256チェックサムは、apach",{"_index":694,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュ、およびipfsハッシュはイミュータブルです。ipf",{"_index":1605,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256ハッシュ、およびファイルの内容をipfsノードに送信します（post",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1258,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1262,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュをapiから返されたsha256",{"_index":1594,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha512",{"_index":1519,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sheet",{"_index":1989,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["shell",{"_index":1947,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shimmer",{"_index":977,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["showdata",{"_index":1977,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shutdown",{"_index":1704,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["sidekeyは認証の証としてdelet",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sidekeyは認証の証としてdeleteに渡されます。電力源が登録解除されると、生産者は電力源のmam",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドに、マークル木を再構築できるようにするためにマークル木から足りないデータが含まれている1",{"_index":387,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つインプットアドレスは、ゼロトークンのアウトプットトランザクションのsignaturemessagefrag",{"_index":251,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":261,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["signbundlerepli",{"_index":1135,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signbundlerequest",{"_index":1136,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["signed_uuid",{"_index":1165,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1069,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1079,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1078,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1427,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["simpl",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["singl",{"_index":1183,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["sizeはどちらもオプションであり、デフォルトはそれぞれ0と10",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["slightli",{"_index":1888,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["small",{"_index":2043,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["smaller",{"_index":1889,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1439,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["sn",{"_index":798,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":942,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1205,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["snapshot.meta",{"_index":640,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":642,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1206,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["socket",{"_index":1237,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["solid",{"_index":651,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["solidif",{"_index":938,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["soon",{"_index":1877,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["sourc",{"_index":1538,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sourceディレクトリに移動してrepl",{"_index":824,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["spammerapi",{"_index":983,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["spamnet",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":711,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":1979,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["spent",{"_index":873,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["src/desktop/out",{"_index":1325,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1337,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1341,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1625,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":1796,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sshでraspberri",{"_index":1942,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sshを通してsbcに接続しています。これでsbc",{"_index":1837,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshクライアントと構成済みネットワークがインストールされたlinuxベースのオペレーティングシステム（os）。このガイドでは、ubuntuを使用しますが、macosと同様に他のlinux",{"_index":1810,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshサーバとしてlinux",{"_index":1794,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を確立します。ip_address_from_step_7プレースホルダーをlinuxサーバのip",{"_index":1804,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を開き、raspberri",{"_index":1953,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssh経由でlinuxサーバに接続しました。puttyまたはホストデバイスにlinuxコマンドを入力して、linuxサーバ上でlinux",{"_index":1808,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh経由でsbc",{"_index":1849,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ssl",{"_index":1062,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1080,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["st",{"_index":1987,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["stack",{"_index":878,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["stackexchang",{"_index":874,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/trinity/0.1/references/troubleshooting":{}}}],["stackoverflow",{"_index":1175,"docTitle":{},"docBody":{"docs/hub/0.1/references/troubleshooting":{}}}],["stakehold",{"_index":1610,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["start",{"_index":332,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":1703,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":1035,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["startattaching()とstopattach",{"_index":1742,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["starter",{"_index":1898,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1213,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["station",{"_index":1460,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["statsrepli",{"_index":1137,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statsrequest",{"_index":1138,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["statu",{"_index":1630,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status&amp;gt",{"_index":1623,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["storag",{"_index":1417,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["storageなどの代替ストレージソリューションを使用するには、一意のハッシュ（たとえばファイルのsha256",{"_index":1599,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["store",{"_index":1587,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storefile()メソッドは次の形式のjson",{"_index":1588,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetransact",{"_index":912,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["storetransactions(tryt",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":1671,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":817,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["studio",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["sub",{"_index":1762,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1072,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["subse",{"_index":297,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":102,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/mam-watcher/overview":{}}}],["success:おめでとうございます:tada",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["success:おめでとうございます！:tada",{"_index":763,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1221,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":1053,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["sweep",{"_index":1167,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweep_max_deposit",{"_index":1008,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":1009,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweep_tail",{"_index":1168,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1139,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1140,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepev",{"_index":1141,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinforequest",{"_index":1142,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["sweepinterv",{"_index":1007,"docTitle":{},"docBody":{"docs/hub/0.1/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1095,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1143,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["syntax",{"_index":1047,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["system",{"_index":1831,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["system（ipf",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sとledger",{"_index":1245,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1250,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1247,"docTitle":{},"docBody":{"docs/trinity/0.1/concepts/hardware-wallet":{}}}],["tada",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tail",{"_index":329,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":330,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tangl",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{}}}],["tanglebeatはzmq",{"_index":827,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["tangleディレクトリで、dock",{"_index":1380,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["task",{"_index":1472,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["tcp",{"_index":666,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://p101.testnet.iota.cafe:14666",{"_index":707,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p102.testnet.iota.cafe:14666",{"_index":708,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p103.testnet.iota.cafe:14666",{"_index":709,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p104.testnet.iota.cafe:14666",{"_index":710,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":797,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":668,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["temp.pi",{"_index":1398,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["temperatur",{"_index":2003,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["tempy.pi",{"_index":1401,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["test",{"_index":498,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["testnetになります。これは、次のiota",{"_index":948,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tether",{"_index":1210,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["text",{"_index":1916,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["that'",{"_index":1983,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["theme",{"_index":1305,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1336,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1335,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["thetangle.org",{"_index":1061,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":635,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1436,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1465,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["threshold",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tick",{"_index":1220,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["time",{"_index":1622,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":1692,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":1712,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを出金することができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":1713,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":1717,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeoutat",{"_index":1660,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":1665,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timesource()メソッドでアカウントを作成した場合は、timeoutat",{"_index":1741,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":1739,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timeはトランザクションを開始したデバイス（携帯電話またはweb",{"_index":1629,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["tip",{"_index":413,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":1950,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1282,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["tool",{"_index":1387,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["toolbox",{"_index":165,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["tp",{"_index":966,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tpsiriノードを介した1",{"_index":343,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["tpsは設定したtp",{"_index":986,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["trace",{"_index":1419,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1418,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["trade",{"_index":1655,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["trangl",{"_index":1379,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["transact",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-basics/0.1/concepts/bundles-and-transactions":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/the-tangle/0.1/concepts/tip-selection":{},"docs/the-tangle/0.1/concepts/incentives-in-the-tangle":{},"docs/trinity/0.1/how-to-guides/send-a-transaction":{},"docs/trinity/0.1/how-to-guides/receive-a-transaction":{}}}],["transaction.j",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":309,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":302,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1312,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1338,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":375,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/the-coordinator":{}}}],["tri",{"_index":1235,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["triniti",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/trinity/0.1/introduction/overview":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["trinity.app",{"_index":1273,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1271,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["true",{"_index":317,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["trunk",{"_index":310,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":275,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-basics/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":305,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/send-bundle":{}}}],["trunktransactionフィールドを辿ることによって、バンドル内の各トランザクションを見つけて検証します。ノードが先頭トランザクション（またはlastindex",{"_index":263,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/bundles-and-transactions":{}}}],["trustanchor",{"_index":875,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["tryte",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["trytesコンバータをインポートします。次に、スクロールマーキーを有効にするためにsens",{"_index":1959,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":897,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":913,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["tx",{"_index":832,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["type",{"_index":1156,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["t定数を作成し、それをprop",{"_index":1339,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":1822,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタがある場合は、\"usb",{"_index":1821,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタを使用します。cp2102はよく知られている安価なアダプタですが、sbcには一体型のアダプタがあるかもしれません。調べるには、使用しているsbc",{"_index":1815,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":876,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":755,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1334,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["ui（wui）は、mamエクスプローラにアクセスして情報（例：特定の回収可能資産の現在の保管者と所在地）を取得するためのapiを実装しています。タングル上の情報は、オブジェクトリポジトリから取得した必要なチャネルルートアドレスにアクセスすることによって取得できます。足りない資産は同じgui",{"_index":1644,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":835,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":837,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":335,"docTitle":{},"docBody":{"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{}}}],["unit",{"_index":1280,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/send-a-transaction":{}}}],["unless",{"_index":2037,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["up",{"_index":1381,"docTitle":{},"docBody":{"docs/utils/0.1/one-command-tangle/overview":{}}}],["updat",{"_index":1352,"docTitle":{},"docBody":{"docs/trinity/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["updateitem()関数では、まずfirebaseオブジェクトリポジトリでitemidフィールドによって既存の資産が検索され、次にそのオブジェクトに関するすべての情報が新しいmam",{"_index":1651,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upload",{"_index":1601,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["uploadをクリックして、メタデータをipf",{"_index":1603,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["upper",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":776,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":773,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uptim",{"_index":973,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["uriフォーマットは\"tcp://ipaddress:port",{"_index":911,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["uriフォーマットは、\"tcp://ipaddress:port",{"_index":889,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["url",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1526,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1230,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["urlまたはip",{"_index":1298,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":720,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1530,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["us)を選択します。ロケール、タイムゾーン、およびwifi",{"_index":1928,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usb",{"_index":1820,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["usbバッテリーでraspberri",{"_index":1904,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["usbポートは/dev/ttyusbxにあります。xがusbポートの番号です。正しいusbポートを見つける最も簡単な方法は、usbアダプタを接続することです。まず、l",{"_index":1840,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["user",{"_index":964,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/references/troubleshooting":{},"docs/trinity/0.1/how-to-guides/change-the-general-settings":{}}}],["user_account",{"_index":1090,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/references/database-tables":{}}}],["user_account_bal",{"_index":1169,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["user_address",{"_index":1100,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/query-the-database":{},"docs/hub/0.1/references/database-tables":{}}}],["user_address_bal",{"_index":1170,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1144,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1152,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1145,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1153,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["usernameプレースホルダーを現在のlinux",{"_index":1859,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["userwithdraw",{"_index":1105,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/integrate-hub":{}}}],["userwithdraw()メソッドを使用して、預け入れアドレスからのiota",{"_index":1097,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{}}}],["userwithdrawcancelrepli",{"_index":1146,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1147,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1148,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1149,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":1016,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1063,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1190,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["uuid",{"_index":1096,"docTitle":{"docs/hub/0.1/how-to-guides/query-the-database":{}},"docBody":{"docs/hub/0.1/how-to-guides/get-started-with-the-api":{},"docs/hub/0.1/how-to-guides/query-the-database":{}}}],["uuid：seeduuid",{"_index":996,"docTitle":{},"docBody":{"docs/hub/0.1/introduction/overview":{}}}],["v0.9.1",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valu",{"_index":1155,"docTitle":{},"docBody":{"docs/hub/0.1/references/api-reference":{}}}],["vc",{"_index":1323,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["verif",{"_index":1514,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["version",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1264,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":682,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["via",{"_index":2028,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["virtual",{"_index":1790,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":1789,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualboxで64ビットバージョンのubuntu",{"_index":1864,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["vista",{"_index":1318,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["vm）またはlinuxサブシステムを使用できます。サブシステムを使用すると、vmのオーバーヘッドなしにlinuxを実行できます。あなたが上級ユーザーであれば、linuxツールをwindow",{"_index":1812,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w",{"_index":246,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["walkeralpha",{"_index":404,"docTitle":{},"docBody":{"docs/the-tangle/0.1/concepts/tip-selection":{}}}],["wallet",{"_index":1229,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/one-command-tangle/overview":{}}}],["walletディレクトリでnpm",{"_index":1345,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["warn",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/addresses-and-signatures":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{},"docs/hub/0.1/how-to-guides/integrate-hub":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/trinity/0.1/how-to-guides/create-deep-link":{},"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{},"docs/trinity/0.1/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/mam-watcher/overview":{},"docs/utils/0.1/one-command-tangle/overview":{},"docs/utils/0.1/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1299,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/connect-to-a-custom-node":{}}}],["watcher",{"_index":1363,"docTitle":{},"docBody":{"docs/utils/0.1/mam-watcher/overview":{}}}],["weather",{"_index":1459,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["web",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/how-to-guides/convert-data-to-trytes":{},"docs/iota-basics/0.1/how-to-guides/create-an-address":{},"docs/iota-basics/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/iota-basics/0.1/how-to-guides/send-bundle":{},"docs/iota-basics/0.1/how-to-guides/check-transaction-confirmation":{},"docs/iota-basics/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["webサイト、またはiota",{"_index":686,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1498,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなど、cda",{"_index":1715,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1291,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/create-deep-link":{}}}],["webサーバー：nginx",{"_index":1567,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["webブラウザで、ルーターのipアドレスを入力します。このipアドレスはルーターに表示されているはずです。表示されない場合は、コマンドプロンプトで見つけます。あなたのルーターのipアドレスはgateway",{"_index":1768,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバのip",{"_index":757,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["webブラウザを開き、アドレスバーに以下のように入力します。インターネットを通して自分のノードにアクセスしたいならば、localhostを自分のip",{"_index":984,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["weight",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-basics/0.1/concepts/minimum-weight-magnitude":{}}}],["well",{"_index":2014,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["wereaddressesspentfrom",{"_index":914,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["wide",{"_index":1052,"docTitle":{},"docBody":{"docs/hub/0.1/how-to-guides/install-hub":{},"docs/hub/0.1/how-to-guides/install-the-signing-server":{}}}],["wifi",{"_index":1256,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wifi経由でインターネットに接続する場合は、次の手順で、my_ssidをネットワークの名前に置き換え、my_passwordをwifi",{"_index":1847,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["window",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["windowsまたはlinux",{"_index":1316,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["windowsまたはmacオペレーティングシステムでlinuxサーバを実行するには、仮想マシンをインストールして、仮想マシンでlinux",{"_index":1783,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsまたはmac用のvirtualbox",{"_index":1784,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、7",{"_index":1785,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、ファイルを右クリックしてここで解凍をクリックします。mac",{"_index":1788,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windows上のlinuxサーバへのssh",{"_index":1805,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["winternitzワンタイム署名方式（w",{"_index":244,"docTitle":{},"docBody":{"docs/iota-basics/0.1/concepts/addresses-and-signatures":{}}}],["winternitzワンタイム署名（w",{"_index":351,"docTitle":{},"docBody":{"docs/iota-basics/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":1674,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1171,"docTitle":{},"docBody":{"docs/hub/0.1/references/database-tables":{}}}],["withplugin",{"_index":1680,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wlp3s0",{"_index":1832,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":940,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["workflow",{"_index":1539,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1491,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["x",{"_index":1485,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["x86",{"_index":1863,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1270,"docTitle":{},"docBody":{"docs/trinity/0.1/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1462,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/trinity/0.1/how-to-guides/develop-features-on-trinity":{}}}],["yaw",{"_index":1999,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["zero",{"_index":628,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":796,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":804,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zeroの場合は115200",{"_index":1845,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zipの最新バージョンをダウンロードしてインストールします。macを使用している場合は、unarchiv",{"_index":1786,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":202,"docTitle":{"docs/node-software/0.1/iri/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zmqwatcher.j",{"_index":1402,"docTitle":{},"docBody":{"docs/utils/0.1/raspberry-pi-pub-sub/overview":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":795,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでtx",{"_index":989,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zmqでは、iri",{"_index":631,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":799,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":632,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":801,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":830,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":793,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":792,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":630,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1479,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
//# sourceMappingURL=static.4b64442a.js.map