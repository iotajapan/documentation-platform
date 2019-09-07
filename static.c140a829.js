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
                        _react2.default.createElement(_Heading2.default, { level: 2, text: '\u6700\u65B0\u60C5\u5831' }),
                        _react2.default.createElement(
                            _Paragraph2.default,
                            null,
                            '\u6700\u65B0\u306EIOTA\u958B\u767A\u30CB\u30E5\u30FC\u30B9\u3092\u30E1\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9\u306B\u76F4\u63A5\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002'
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
                                    this.setState({ error: '有効なメールアドレスを入力してください。' });
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
                            placeholder: '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B',
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
                                '\u767B\u9332'
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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のデバイスがイミュータブルなデータと価値（IOTAトークン）を無料で相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードは、IOTAネットワーク内のタングルへの読み書きアクセス権を持つデバイスです。すべてのノードはタングルのコピーとIOTAトークンを保持するアドレスの記録を保存します。クライアントはIOTAネットワーク内の任意のノードにバンドルを送信できるので、トランザクションを検証でき、トランザクションをタングルに添付し、他のノ..."},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":" タングルは、IOTAトランザクションの履歴を含むイミュータブルなデータ構造です。IOTAネットワーク内のすべてのノードは、台帳にタングルのコピーを保存し、そこから読み取って新しいトランザクションをタングルに添付することができます。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードはシードから導出されたすべてのアドレスにアクセスできるようにする一意なパスワードです。これらのアドレスはIOTAトークンを保持しているので残高があります。IOTAトークンを使うには、シードを使って、IOTAトークンを保持しているアドレスを所有していることを証明する必要があります。シードには数字9と大文字のA〜Zの..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"IOTAネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクションまたは出力トランザクションのいずれかになり得る単一の操作です。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルとは、データを格納したり、特定のアドレスから他のアドレスにIOTAトークンを転送するようにノードに指示することができる1つ以上のトランザクションのグループです。すべてのトランザクションは、単一のものであっても、常にバンドルとしてノードに送信されます。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テスト用IOTAトークンを転送する","summary":"商品やサービスと引き換えにIOTAトークンを誰かに転送ことができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。ノードがなければ、IOTAネットワークは存在しません。誰が誰に何を送信したかを記録する方法がないため、トランザクションを送信することはできません。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/quickstart-dev-handbook","name":"IOTA開発者ハンドブック","summary":"このクイックスタートガイドでは、IOTAテクノロジーについて簡単に説明し、独自のアプリケーションでIOTAテクノロジーをどのように活用できるかを特定するのに役立ちます。"},{"id":"docs/getting-started/0.1/references/iota-networks","name":"パブリックIOTAネットワーク","summary":"IOTAには、3つのパブリックノードネットワークがあります。各ネットワークには、ノードがトランザクションを添付できる独自の分散台帳（タングル）があります。パブリックネットワーク上のノードにバンドルを接続して送信することができます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/dev-essentials/0.1/introduction/overview","name":"開発者向け重要事項の概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションのタングルと呼ばれる台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントは、データまたはIOTAトークンのいずれかを転送するトランザクションを作成し、トランザクションを検証のためにノードに送信するデバイスです。シ..."},{"id":"docs/dev-essentials/0.1/concepts/the-tangle","name":"タングル","summary":"タングルは、IOTAトランザクションを含むイミュータブルなデータ構造です。IOTAネットワーク内のすべてのノードは、タングルのコピーを台帳に保存し、台帳から読み取り、新しいトランザクションを添付し、トランザクション内容について合意に達します。"},{"id":"docs/dev-essentials/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワークでトランザクションを送信するには、シードと呼ばれる秘密のパスワードが必要です。シードにより、シードから導出されたすべてのアドレスにアクセスできます。これらのアドレスはIOTAトークンを保持しているので、IOTAネットワーク内のすべてのノードに保存され、最新の状態に保たれる残高を持っています。IOTA..."},{"id":"docs/dev-essentials/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"IOTAネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクション（アドレスからの取り出し）または出力トランザクション（アドレスへの預け入れまたはゼロトークントランザクション）のいずれかになる単一の操作です。ノードに1つ以上のトランザクションを送信..."},{"id":"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"各トランザクションには、スパム防止対策である有効なプルーフオブワークが含まれている必要があります。最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。クライアントとしてIOTAネットワークと対話するときは、そのネットワークに適したMWMを使用する必要があります。そうでなければ、トランザクショ..."},{"id":"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/dev-essentials/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/dev-essentials/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/dev-essentials/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/dev-essentials/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/dev-essentials/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/dev-essentials/0.1/references/tryte-alphabet","name":"トライトアルファベット","summary":"この表は、トライトからトライトがエンコードされたアルファベットへの変換と、それに相当する10進数の値を表しています。"},{"id":"docs/dev-essentials/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/dev-essentials/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/node-software/0.1/introduction/overview","name":"ノードソフトウェア","summary":"IOTAネットワークは、相互に接続されたノードから構成されています。これらのノードは、同じノードソフトウェアを実行するコンピュータです。このソフトウェアは、ノードにタングルへの読み取り/書き込みアクセス権を付与し、ノードがトランザクションを検証してトランザクションを台帳に保存できるようにします。"},{"id":"docs/node-software/0.1/iri/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。現在IRIはクライアントがIOTAトークンを相互に転送できるIOTA Mainnet上で実行されているソフトウェアです。"},{"id":"docs/node-software/0.1/iri/concepts/the-ledger","name":"台帳","summary":"ノードは、トランザクションを台帳と呼ばれるローカルの追加専用のRocksDBデータベースに追加することで、トランザクションをタングルに添付します。"},{"id":"docs/node-software/0.1/iri/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/node-software/0.1/iri/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/node-software/0.1/iri/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/node-software/0.1/iri/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/node-software/0.1/iri/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。クライアントがgetTransactionsToApproveエンドポイントを呼び出すと、ノードはチップ選択を行います。"},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバでIRIノードを実行する","summary":"IRIソフトウェアを実行すると、お使いのデバイスがタングルに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、デバイスはIRIノード用のLinuxサーバになり、タングルに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバに接続します。"},{"id":"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くのトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node","name":"ノードにリクエストを送信する","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy","name":"プルーフオブワーク用プロキシサーバをインストールする","summary":"attachToTangleエンドポイントはリソースを大量に消費します。結果として、attachToTangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、専用のプロキシサーバーをインストールして、ノードのプルーフオブワーク（PoW）を行います。"},{"id":"docs/node-software/0.1/iri/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/node-software/0.1/iri/references/api-reference","name":"APIリファレンス","summary":":::warning:\nこのAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。\n:::"},{"id":"docs/node-software/0.1/iri/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/node-software/0.1/iri/references/best-practice","name":"ノードを実行するためのベストプラクティス","summary":"ノードを実行すると、信頼性の高いアーキテクチャを設定するためのさまざまなオプションがあります。この記事はIOTA財団がIOTA財団のパートナーにしばしば与えるいくつかのアドバイスを与えます。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/node-software/0.1/iri/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI構成オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini構成ファイル（構成ファイルパラメーター）で設定できます。"},{"id":"docs/node-software/0.1/iri/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/node-software/0.1/iri/references/troubleshooting","name":"トラブルシューティング","summary":"このリファレンスガイドを使用して、IRIのインストール、設定、または実行に関連する問題を解決してください。"},{"id":"docs/node-software/0.1/goshimmer/introduction/overview","name":"GoShimmer","summary":"GoShimmerは、CoordicideにつながるIOTAネットワークの進行中のプロトタイプです。Coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、IOTAネットワークを分散化することができます。この目標を達成するために、GoShimmerはそれぞれが特定の役割を持つモジュールで構..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node","name":"GoShimmerノードを実行する","summary":"GoShimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはCoordicide testnetになります。これは、次のIOTAプロトコルのリ..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/send-spam","name":"自分のノードにスパムトランザクションを送信する","summary":"ノードが1秒間に処理できるトランザクション数をテストするには、spammerAPIエンドポイントを使用してスパムトランザクションを送信します。"},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events","name":"ノードの着信トランザクションを監視する","summary":"ノードがトランザクションを受信すると、ノードは受信したトランザクションをトランザクションイベントとしてゼロメッセージキュー（ZMQ）と呼ばれるサービスに発行します。クライアントとして、このイベントを購読して、ノードの着信トランザクションを監視することができます。"},{"id":"docs/node-software/0.1/goshimmer/references/command-line-flags","name":"コマンドラインフラグ","summary":"GoShimmerコードを実行するコマンドでは、以下のフラグを渡してノードのデフォルトの動作を変更できます。たとえば、デフォルトの自動ピアリングポートを変更するように選択できます。"},{"id":"docs/compass/0.1/introduction/overview","name":"プライベートタングル概要","summary":"プライベートタングルは運用者が管理するIOTAネットワークで、運用者が知っているノードだけを含みます。プライベートタングルは、パブリックIOTAネットワークと同じテクノロジを使用しますが、コンパスと呼ばれるコーディネータのオープンソース実装を実行してプライベートタングルを制御します。コンパスを使用すると、プライベートタ..."},{"id":"docs/compass/0.1/how-to-guides/set-up-a-private-tangle","name":"プライベートタングルを設定する","summary":"プライベートタングルは運用者がコントロールするもので、運用者が知っているノードだけを含みます。パブリックタングル内のトランザクションを見ることができるMainnetやDevnetなどのパブリックIOTAネットワークを使用せずにアプリケーションをテストしたい場合は、プライベートタングルを設定します。"},{"id":"docs/compass/0.1/references/compass-configuration-options","name":"コンパス設定オプション","summary":"コンパス設定オプションを使用すると、ニーズに応じてプライベートタングルをカスタマイズできます。たとえば、特定のテスト用に軽量のプライベートタングルを作成したり、Mainnetに似た、よりリソース集約型のプライベートタングルを作成したりすることができます。"},{"id":"docs/compass/0.1/references/merkle-tree-compute-times","name":"マークル木計算時間","summary":"マークル木の計算にかかる時間を把握するために、Amazon Web Services上の仮想プライベートサーバのインスタンス（T2.Xlarge）でテストを行いました。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/wallets/0.1/introduction/overview","name":"ウォレット","summary":"ウォレットはシードを保存し、データベースにトランザクションの記録を保存するアプリケーションです。ウォレットを使用すると、シードの保護、トランザクションの送信、および残高の管理のプロセスを簡素化できます。"},{"id":"docs/wallets/0.1/trinity/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。トリニティでは、複数のシードを暗号化して保存することができます。各シードには独自のアカウント、トランザクション履歴、および設定があります。"},{"id":"docs/wallets/0.1/trinity/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/wallets/0.1/trinity/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction","name":"トランザクションを受信する","summary":"トリニティには、トランザクションを受信し、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/wallets/0.1/trinity/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/wallets/0.1/hub/introduction/overview","name":"ハブ概要","summary":"ハブは暗号通貨交換所のためのヘッドレスマルチユーザーウォレットです。ハブは、ユーザーのIOTAトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがIOTAトークンを自分のハブアドレスの1つに預け入れると、スイープと呼ばれるプロセスでユーザーのトークンがハブ所有者のアドレスに転送されます。このよ..."},{"id":"docs/wallets/0.1/hub/concepts/sweeps","name":"スウィープ","summary":"スイープは、ユーザーの取り出しと預け入れの残高のバンドルです。ユーザーがIOTAトークンをハブアドレスに預け入れるか、ハブアドレスから取り出すと、ハブはそれらの転送を1つのスイープに結合します。取り出しの合計が預け入れの合計よりも少ない場合、ハブは残りの残高をハブ所有者に属する新しいアドレスに転送します。預け入れの合計..."},{"id":"docs/wallets/0.1/hub/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server","name":"署名サーバをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバをインストールして実行します。"},{"id":"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのIOTAトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本..."},{"id":"docs/wallets/0.1/hub/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/wallets/0.1/hub/how-to-guides/integrate-hub","name":"ハブを暗号通貨交換所に統合する","summary":"デフォルトでは、ハブはすべてのユーザーの残高の記録をデータベースに保持し、ユーザーがハブアカウントを介して相互にトレードできるようにします。"},{"id":"docs/wallets/0.1/hub/how-to-guides/rescue-tokens","name":"スウィープしたアドレスからIOTAトークンを救う","summary":"Winternitzワンタイム署名スキームは、アドレスからIOTAトークンを取り出すバンドルに署名するために使用されます。その結果、アドレスは1度だけならIOTAトークンを取り出しても安全です。ハブがアドレスをスウィープした後、そのアドレスは使用済みになり、そのアドレスから再び取り出しを行なってはいけません。ただし、ユ..."},{"id":"docs/wallets/0.1/hub/references/api-reference","name":"APIリファレンス","summary":"ハブには、タングルおよびハブデータベースへの接続を簡素化するgRPC APIがあります。このAPIリファレンスを使用して、メソッドを見つけ、メソッドが行うことを学びます。"},{"id":"docs/wallets/0.1/hub/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/wallets/0.1/hub/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバーに問い合わせることによって見つけることができます。"},{"id":"docs/wallets/0.1/hub/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/wallets/0.1/hub/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/utils/0.1/introduction/overview","name":"ユーティリティ","summary":"ユーティリティは、オープンソースのアプリケーションまたはツールであり、使用することも、適応させることも、自分のアプリケーションに組み込むこともできます。"},{"id":"docs/utils/0.1/community/mam-watcher/overview","name":"MAMウォッチャー概要","summary":"MAM（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。MAMウォッチャーを使用すると、チャネル上で暗号化されたメッセージに署名して送信し、そのチャネルを購読してメッセージを検証、復号化、および読み取ることができます。"},{"id":"docs/utils/0.1/community/one-command-tangle/overview","name":"ワンコマンドプライベートタングル","summary":"このアプリケーションを使用すると、単一のDockerコマンドを使用して独自のIOTAネットワークを設定できます。このコマンドを実行すると、独自のIOTAテストネットワークと2.7Pi（最大量）のテストIOTAトークンを使用できます。いかなる金銭的価値も危険にさらすことなく自分のアイデアやアプリケーションをテストするため..."},{"id":"docs/utils/0.1/community/raspberry-pi-pub-sub/overview","name":"Raspberry Piセンサーデータパブリッシャー","summary":"このアプリケーションは、Raspberry PiからDevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のDevnetノードでイベントストリーム（ZMQ）を購読し、データを受信したときに知らせるメッセージを表示します。"},{"id":"docs/utils/0.1/official/iota-area-codes/overview","name":"IOTAエリアコード概要","summary":"IOTAエリアコード（IAC）は、IOTAトランザクションを地理的位置でタグ付けするための標準規格として提案されています。"},{"id":"docs/utils/0.1/official/proof-of-existance/overview","name":"存在の証明プロバイダー概要","summary":"ファイルは、さまざまな関係者間で契約などの情報を転送するために重要です。時には、ある関係者が他の関係者達が知らないうちにファイルを変更することがあります。したがって、すべての関係者が、ファイルが変更されていないことを確実に証明して、信頼できるようにする方法が必要です。ファイルが変更されていないことを証明するために、存在..."},{"id":"docs/utils/0.1/official/tangle-certificate/overview","name":"タングル証明書作成者の概要","summary":"証明書は、所有者に関する事実を証明する公式文書です。しかし、証明書がデジタルの場合、それらは詐欺の対象となります。デジタル証明書はコピーおよび編集できるため、確実性と信用性に影響します。証明書が本物であり、信頼でき、変更されていないことを証明するために、証明書をタングルに添付することができます。"},{"id":"docs/utils/0.1/official/tryte-compress/overview","name":"トライトコンプレッサー概要","summary":"トランザクションのバンドルをノードに送信すると、それらのトランザクションがネットワークの残りの部分に届かない場合があり、トランザクションが確定されないことがあります。たとえば、ノードは、トランザクションを隣接ノードに転送する前にオフラインになる場合があります。そのため、後でトランザクションを再ブロードキャストまたは再添..."},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"P2Pエネルギーグリッド","summary":"エネルギーの供給はしばしば自動化されていますが、支払いシステムは統合するのに費用がかかり、そしてしばしば手動の介入を必要とします。IOTAを使用してピアツーピア（P2P）エネルギーグリッドを作成することで、電力の転送とその電力に対する支払いを自動化できます。この自動化により、インフラストラクチャはより動的になり、更新が..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"アプリケーションアーキテクチャ","summary":" P2Pエネルギーグリッドアプリケーションは、IOTAネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"P2Pエネルギーグリッドアプリをデプロイする","summary":"P2Pエネルギーグリッドアプリケーションの使用を開始するには、自身のアプリケーションをデプロイします。"},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"タングルデータストレージ概要","summary":"データは、官民組織のイノベーションを促進し、新たな収益源を生み出すために使用することができます。しかし、ベンダーに依存しないデータ検証方法がなければ、データを信頼することはできません。この設計図では、IOTAタングルをイミュータブルなデータ構造として使用し、サードパーティのストレージソリューション内のファイルの内容を検..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"アプリケーションアーキテクチャ","summary":"タングルデータストレージアプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"タングルデータストレージアプリをデプロイしてテストする","summary":"IPFSノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、IOTA財団のグラフィカルユーザーインターフェースを使用してファイルデータをアップロードし、ファイルデータを取得し、ハッシュを比較して内容を確認します。"},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"トラック&トレース概要","summary":"デューデリジェンスとベンダーに依存しないデータソースの両方が欠如しているため、流通ネットワーク内の回収可能資産は多くの場合、元の所有者に返却されません。この設計図では、IOTAタングルおよび他のIOTAテクノロジを使用して、IBCSグループが回収可能資産の回収のためのトラック&トレースシステムをどのように実施したかを説..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"アプリケーションアーキテクチャ","summary":"トラック&トレースアプリケーションはIOTA MAMプロトコルを使用して、回収可能資産にIDを付与し、MAMチャネルと呼ばれるトランザクションのストリームで回収可能資産を追跡します。"},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"トラック&トレースアプリをデプロイしてテストする","summary":"タングルでデータの追跡を開始するには、アプリケーションをデプロイし、IOTA財団のGUIを使用して資産を検索してアップロードします。"},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/how-to-guides/import-seed-state","name":"アカウントに既存のシードステートをインポートする","summary":"既存のシードステートを他の端末のアカウントにインポートすることをお勧めします。そのためには、まずシードステートをエクスポートして正しい形式にする必要があります。"},{"id":"docs/iota-go/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-java/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-java/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインはEventListenerインターフェースを実装しており、EventManagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のEventListenerを登録する必要はありません。"},{"id":"docs/iota-java/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-js/0.1/how-to-guides/listen-to-events","name":"アカウント内のイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-js/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/general/0.1/introduction/overview","name":"一般概要","summary":"IOTAは、暗号化された方法でデータと価値（IOTAトークン）を転送することを可能にするプロトコルです。そのため、IOTAは多くの環境で使用できますが、そのうちのいくつかは以前にセットアップしたことも使ったこともないかもしれません。"},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"ローカルデバイスをインターネットに公開する","summary":"デバイスをローカルネットワークの外部に接続するには、デバイスをインターネットに公開する必要があります。ローカルデバイスをインターネットに公開する一般的な理由は、IOTAノードを隣接ノードに接続することです。"},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"仮想マシン上にLinuxサーバをセットアップする","summary":"IOTAのチュートリアルやガイドの多くはLinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でLinuxを使用できます。"},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"シングルボードコンピュータを設定する","summary":"シングルボードコンピュータ（SBC）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。SBCは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。IOTAテクノロジを使用する専用の組み込みアプリ..."},{"id":"docs/general/0.1/how-to-guides/install-go-on-sbc","name":"シングルボードコンピュータにGoをインストールする","summary":"Goプログラミング言語を使用するアプリケーションを作成または実行するには、Goプログラミング言語をインストールする必要があります。"},{"id":"docs/general/0.1/references/troubleshooting","name":"トラブルシューティング","summary":""},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTAスマートシティ設計図","summary":"AstroPiOTAは、タングルを使用してローカル環境データを追跡するためにMAMに接続されている国際宇宙ステーションからのAstroPiのクローンです。地球上で、AstroPiOTAはローカルの天気予報を理解し報告するのを助け、地震予知に役立つかもしれません。"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTAはAstroPiのクローンです。AstroPiは、ISS（国際宇宙ステーション）でRaspberry Piを使用して、宇宙飛行士が自分の環境について最新の情報を入手できるようにしたプロジェクトです。 AstroPiは、温度、湿度、その他のデータを検知するためにRaspberry PiコンピュータとS..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"自分のAstroPiOTAをビルドする","summary":"AstroPiOTAを実行するには、正しいハードウェアとRaspberry Pi用のオペレーティングシステムが必要です。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"AstroPiOTAを実行する","summary":"以下の手順は、オペレーティングシステムが設定されていることを前提としています。このインストールには複数のコンポーネントがあるため、それらを組み合わせる前に各コンポーネントが個別に機能することを確認するためのスクリプトが含まれています。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"SSHでRaspberry Piに接続する","summary":"モニターやキーボードなしでAstroPiOTAを実行したい場合は、SSHを介して対話するためにAstroPiOTAのネットワークアドレスが必要です。Raspberry PiのIPアドレスを見つけるには、Pythonスクリプトを使用できます。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"AstroPiOTAをカスタマイズする","summary":"AstroPiOTA送信者はSense HATからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをJSON形式でタングルのMAMチャネルに送信します。AstroPiOTA受信者はMAMチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、Astr..."},{"id":"docs/smartcity/0.1/astropiota/references/sensehat-specs","name":"Sense HAT仕様","summary":"このリストには、AstroPiOTAプロジェクトで使用されているSense HATハードウェアの仕様が含まれています。"},{"id":"docs/contribution/0.1/style-guide","name":"Documentation style guide","summary":"We encourage everyone with knowledge of IOTA to contribute to our documentation. To discuss the documentation, join our #documentation-discussion channel on Dis..."}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.472,1,33.302,2,43.725,3,33.302,4,3.949]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,5.724]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.461,4,5.771,5,23.132,6,23.132,7,23.132,8,23.132,9,23.132,10,23.132,11,20.625,12,23.132,13,23.132,14,23.132,15,23.132,16,23.132,17,7.203,18,23.132,19,23.132,20,23.132,21,18.973]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,2.566,4,4.278,22,36.077,23,36.077,24,36.077,25,36.077,26,36.077,27,36.077]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.408,17,12.543,28,32.94,29,27.017,30,29.369,31,29.369,32,32.94,33,4.282,34,32.94]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.026,4,5.045,35,36.077,36,36.077,37,20.484,38,29.591]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.234,4,5.081,39,36.512,40,36.512]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.433]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.12,4,3.558,17,9.342,41,30.004,42,21.58,43,30.004,44,30.004,45,30.004,46,26.752,47,37.196,48,8.713,49,23.009,50,30.004,51,30.004,52,30.004,53,30.004,54,30.004,55,13.673,56,30.004]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.433]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,3.322,4,4.576,17,9.57,33,3.996,48,8.925,57,13.837,58,13.837,59,8.578,60,13.837,61,4.308,62,7.611,63,20.754,64,10.022,65,8.744,66,27.403,67,13.837,68,9.089,69,13.837,70,11.349,71,15.821,72,11.349,73,8.123,74,13.837,75,19.475,76,12.337,77,8.417,78,20.754,79,22.197,80,11.349,81,9.111,82,19.475,83,13.837,84,13.837,85,11.349,86,12.337,87,9.111,88,12.337,89,12.337,90,13.837,91,10.022,92,12.337,93,13.837,94,12.309,95,8.123,96,8.417,97,9.111,98,12.337,99,17.916,100,8.744,101,13.287,102,17.82,103,12.337,104,13.837,105,13.837,106,17.101,107,13.837,108,13.837,109,11.349,110,12.337,111,10.611,112,10.611,113,12.337,114,13.837,115,11.349,116,11.349,117,10.611,118,15.046,119,10.611,120,13.837,121,13.837,122,13.837,123,13.837,124,9.111,125,11.349,126,13.837,127,12.337,128,13.837]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[94,17.756]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.485,4,5.051,17,8.638,33,5.399,37,10.753,48,5.5,61,5.897,94,10.206,100,11.968,129,18.939,130,9.822,131,10.753,132,8.056,133,8.239,134,8.056,135,9.302,136,15.534,137,16.886,138,16.886,139,18.939,140,16.886,141,18.939,142,18.939,143,15.534,144,16.886,145,15.534,146,15.534,147,16.886,148,15.534,149,18.939,150,18.939,151,10.109,152,18.939,153,14.524,154,13.046,155,11.968,156,16.886,157,7.553,158,16.886,159,12.471]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.433]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.431,33,3.862,55,13.539,135,14.592,160,29.71,161,29.71,162,26.489,163,29.71,164,29.71,165,26.489,166,29.71,167,29.71,168,29.71,169,29.71,170,29.71,171,29.71,172,29.71]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[4,5.724]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.475,4,5.085,33,4.53,37,11.948,55,9.59,61,9.321,94,7.741,100,13.298,130,10.913,131,11.948,132,8.951,133,9.154,134,8.951,135,17.113,137,18.763,138,18.763,140,18.763,144,18.763,145,17.26,146,17.26,147,18.763,148,17.26,151,11.232,157,8.392,162,18.763,173,21.044,174,21.044,175,21.044,176,21.044,177,21.044,178,21.044,179,21.044,180,21.044,181,21.044]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[182,43.035]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,3.275,4,4.267,62,15.154,65,17.409,135,13.531,159,26.381,182,24.563,183,27.549,184,14.747,185,27.549,186,27.549,187,24.563,188,27.549,189,27.549,190,27.549,191,27.549,192,27.549,193,27.549,194,27.549,195,27.549,196,27.549]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.433]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.511,33,3.283,38,20.713,42,14.338,48,7.333,124,16.628,125,20.713,154,17.395,197,25.253,198,15.958,199,20.713,200,22.516,201,20.713,202,23.394,203,18.29,204,14.825,205,27.855,206,33.961,207,15.958,208,25.253,209,25.253]],["docTitle/docs/getting-started/0.1/references/quickstart-dev-handbook",[4,5.724]],["docBody/docs/getting-started/0.1/references/quickstart-dev-handbook",[0,3.397,4,5.252,11,14.371,33,5.517,48,4.681,61,5.019,87,10.614,101,9.805,135,7.917,157,6.428,184,5.394,210,16.118,211,16.118,212,16.118,213,14.271,214,16.118,215,16.118,216,27.962,217,16.118,218,16.118,219,16.118,220,16.118,221,16.118,222,16.118,223,16.118,224,16.118,225,16.118,226,16.118,227,16.118,228,16.118,229,16.118,230,16.118,231,11.103,232,16.118,233,16.118,234,16.118,235,16.118,236,16.118,237,13.22,238,16.118,239,16.118,240,16.118,241,16.118,242,13.22,243,16.118,244,16.118,245,9.152,246,16.118,247,16.118,248,16.118,249,8.359,250,16.118,251,13.22,252,16.118,253,16.118,254,16.118,255,16.118]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,5.724]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,3.257,4,4.404,33,4.411,135,19.338,184,13.176,216,23.374,256,20.068,257,20.068,258,30.462,259,20.068,260,20.068,261,23.374,262,20.068,263,20.068,264,20.068,265,20.068,266,20.068,267,20.068,268,20.068,269,35.104,270,20.068,271,19.053,272,20.068,273,28.935,274,20.068,275,19.931,276,20.068,277,20.068,278,20.068,279,20.068,280,20.068,281,20.068,282,20.068,283,20.068,284,20.068,285,20.068,286,20.068]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.433]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.763,4,4.608]],["docTitle/docs/dev-essentials/0.1/introduction/overview",[0,3.433]],["docBody/docs/dev-essentials/0.1/introduction/overview",[0,3.473,4,5.055,17,11.269,33,4.705,287,27.802,288,27.802,289,27.802,290,27.802,291,27.802,292,27.802,293,27.802,294,27.802,295,27.802,296,27.802,297,27.802]],["docTitle/docs/dev-essentials/0.1/concepts/the-tangle",[0,3.433]],["docBody/docs/dev-essentials/0.1/concepts/the-tangle",[0,3.542,4,3.066,17,12.539,29,14.122,30,15.351,31,15.351,33,5.508,37,14.676,48,10.736,68,7.165,298,17.217,299,15.351,300,17.217,301,17.217,302,17.217,303,17.217,304,25.849,305,25.849,306,17.217,307,17.217,308,17.217,309,17.217,310,17.217,311,17.217,312,17.217,313,17.217,314,17.217,315,17.217,316,17.217,317,17.217]],["docTitle/docs/dev-essentials/0.1/concepts/addresses-and-signatures",[0,3.433]],["docBody/docs/dev-essentials/0.1/concepts/addresses-and-signatures",[0,3.502,4,4.669,33,5.496,55,9.145,63,15.39,78,15.39,91,14.535,95,16.987,101,17.601,204,11.782,318,20.068,319,20.068,320,20.068,321,20.068,322,20.068,323,20.068,324,20.068,325,20.068,326,20.068,327,28.935,328,20.068,329,20.068,330,20.068,331,20.068,332,20.068,333,20.068,334,20.068,335,20.068,336,20.068,337,20.068,338,20.068,339,20.068,340,20.068]],["docTitle/docs/dev-essentials/0.1/concepts/bundles-and-transactions",[0,3.433]],["docBody/docs/dev-essentials/0.1/concepts/bundles-and-transactions",[0,3.491,4,3.498,17,9.185,33,5.172,37,11.704,42,11.704,48,5.986,55,9.394,68,8.578,73,12.102,158,18.38,204,12.102,207,13.027,341,20.614,342,20.614,343,20.614,344,20.614,345,20.614,346,18.38,347,20.614,348,20.614,349,20.614,350,20.614,351,20.614,352,20.614,353,20.614,354,20.614,355,20.614,356,20.614,357,20.614,358,20.614,359,20.614,360,22.621,361,20.614,362,15.809,363,20.614,364,20.614,365,20.614]],["docTitle/docs/dev-essentials/0.1/concepts/minimum-weight-magnitude",[0,3.433]],["docBody/docs/dev-essentials/0.1/concepts/minimum-weight-magnitude",[0,3.381,4,3.39,33,5.302,42,16.232,275,25.386,366,28.589,367,28.589,368,28.589,369,28.589,370,28.589,371,28.589,372,28.589,373,28.589,374,28.589,375,28.589,376,28.589,377,28.589,378,28.589,379,28.589]],["docTitle/docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote",[0,3.433]],["docBody/docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote",[0,3.489,81,21.005,360,24.463,380,28.441,381,26.164,382,31.899,383,28.441,384,31.899,385,31.899]],["docTitle/docs/dev-essentials/0.1/concepts/trinary",[68,20.085]],["docBody/docs/dev-essentials/0.1/concepts/trinary",[68,15.193,386,36.512,387,36.512,388,36.512,389,36.512,390,36.512,391,36.512]],["docTitle/docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes",[0,3.453,4,3.523,33,4.91,94,10.929,130,15.407,131,16.868,132,12.637,133,12.924,134,12.637,143,24.368,157,11.848,392,29.71,393,29.71,394,29.71,395,29.71]],["docTitle/docs/dev-essentials/0.1/how-to-guides/create-an-address",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/create-an-address",[0,3.457,4,3.297,33,4.705,59,11.471,61,8.657,94,10.227,130,14.418,131,15.785,132,11.825,133,12.094,134,11.825,135,13.655,136,22.803,157,11.087,396,27.802,397,27.802,398,27.802,399,24.788,400,27.802]],["docTitle/docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.522,4,4.475,33,5.505,77,14.866,94,8.99,130,12.673,131,13.875,132,10.395,133,10.631,134,10.395,151,13.044,157,9.746,204,14.347,401,24.438,402,24.438,403,24.438,404,24.438,405,33.217]],["docTitle/docs/dev-essentials/0.1/how-to-guides/send-bundle",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/send-bundle",[0,3.435,4,3.876,17,7.43,33,5.637,49,18.298,94,8.778,130,12.374,131,13.548,132,10.149,133,10.379,134,10.149,135,11.72,136,19.571,143,19.571,155,20.651,157,9.516,207,20.651,406,21.274,407,23.861,408,19.571,409,23.861,410,23.861,411,23.861,412,29.137,413,23.861,414,23.861,415,23.861]],["docTitle/docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation",[0,3.463,4,3.02,33,5.583,94,9.368,117,19.529,130,13.206,131,14.458,132,10.832,133,11.077,134,10.832,157,10.155,207,16.092,406,22.705,416,25.465,417,25.465,418,34.153,419,34.153,420,34.153,421,20.887,422,22.705,423,25.465]],["docTitle/docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle",[0,3.433]],["docBody/docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle",[0,3.514,17,6.788,33,5.013,42,12.378,48,6.331,49,16.718,68,9.072,94,8.02,130,11.306,131,12.378,132,9.273,133,9.483,134,9.273,135,10.708,157,8.694,207,13.776,346,19.438,424,19.438,425,21.801,426,21.801,427,21.801,428,21.801,429,21.801,430,21.801,431,21.801,432,30.693,433,21.801,434,21.801,435,17.881,436,21.801,437,21.801,438,21.801]],["docTitle/docs/dev-essentials/0.1/references/structure-of-a-transaction",[0,3.433]],["docBody/docs/dev-essentials/0.1/references/structure-of-a-transaction",[0,3.136,439,38.361]],["docTitle/docs/dev-essentials/0.1/references/structure-of-a-bundle",[0,3.433]],["docBody/docs/dev-essentials/0.1/references/structure-of-a-bundle",[0,3.218,33,4.69,73,21.18,360,27.667,362,27.667,440,32.166]],["docTitle/docs/dev-essentials/0.1/references/security-levels",[0,3.433]],["docBody/docs/dev-essentials/0.1/references/security-levels",[0,2.728,4,4.549,441,38.361]],["docTitle/docs/dev-essentials/0.1/references/tryte-alphabet",[0,3.433]],["docBody/docs/dev-essentials/0.1/references/tryte-alphabet",[0,2.728,95,22.521,442,38.361]],["docTitle/docs/dev-essentials/0.1/references/units-of-iota-tokens",[4,5.724]],["docBody/docs/dev-essentials/0.1/references/units-of-iota-tokens",[0,2.629,4,5.117,48,10.732,443,36.957,444,36.957]],["docTitle/docs/dev-essentials/0.1/references/glossary",[0,3.433]],["docBody/docs/dev-essentials/0.1/references/glossary",[0,3.441,4,4.832,48,8.959,63,16.84,68,12.837,184,14.826,275,15.126,299,19.579,445,21.959,446,21.959,447,21.959,448,21.959,449,21.959,450,21.959,451,21.959,452,21.959,453,21.959,454,21.959,455,21.959,456,21.959,457,21.959,458,21.959,459,21.959,460,21.959,461,21.959,462,21.959,463,21.959,464,21.959,465,21.959,466,21.959,467,21.959]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.433]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.417,21,21.803,61,8.277,87,17.504,101,16.17,102,17.504,118,18.311,213,12.724,468,26.582,469,27.527,470,26.582,471,26.582,472,26.582,473,26.582,474,22.208,475,26.582,476,26.582,477,26.582,478,26.582,479,20.385,480,26.582,481,16.17]],["docTitle/docs/iota-js/0.1/README",[4,4.104,483,30.854]],["docBody/docs/iota-js/0.1/README",[0,3.268,4,4.12,59,9.454,61,4.084,94,9.612,97,8.638,98,11.696,99,17.173,100,16.511,101,15.895,131,7.448,184,8.744,201,28.498,362,10.06,381,10.759,483,11.696,484,6.279,485,13.118,486,9.319,487,9.501,488,13.118,489,13.118,490,13.118,491,13.118,492,13.118,493,13.118,494,13.118,495,46.553,496,13.118,497,29.827,498,13.118,499,13.118,500,13.118,501,13.118,502,13.118,503,13.118,504,13.118,505,13.118,506,13.118,507,13.118,508,13.118,509,14.423,510,13.118,511,13.118,512,13.118,513,13.118,514,13.118,515,13.118,516,13.118,517,13.118,518,18.668,519,13.118,520,13.118,521,13.118,522,18.668,523,13.118,524,20.038,525,13.118,526,13.118,527,13.118,528,13.118,529,13.118,530,13.118,531,13.118,532,13.118,533,13.118,534,13.118,535,13.118,536,9.501,537,11.696,538,13.118,539,11.696,540,11.696,541,13.118,542,9.501,543,11.696,544,13.118]],["docTitle/docs/iota-java/0.1/README",[4,4.104,102,22.787]],["docBody/docs/iota-java/0.1/README",[0,3.321,4,4.663,17,4.175,59,6.753,61,4.175,81,8.829,102,25.889,103,18.996,184,10.106,399,11.955,408,10.997,484,6.418,486,9.483,487,9.711,536,9.711,545,13.408,546,13.408,547,13.408,548,13.408,549,13.408,550,10.997,551,13.408,552,13.408,553,20.33,554,21.305,555,13.408,556,13.408,557,11.955,558,13.408,559,13.408,560,13.408,561,13.408,562,13.408,563,13.408,564,21.305,565,13.408,566,13.408,567,13.408,568,13.408,569,13.408,570,13.408,571,13.408,572,13.408,573,32.95,574,13.408,575,13.408,576,13.408,577,8.829,578,9.711,579,13.408,580,13.408,581,13.408,582,13.408,583,13.408,584,13.408,585,21.305,586,13.408,587,13.408,588,13.408,589,13.408,590,13.408,591,13.408,592,13.408,593,13.408,594,13.408,595,13.408,596,13.408,597,13.408,598,13.408,599,33.046,600,26.51,601,13.408,602,13.408,603,13.408,604,13.408,605,13.408,606,13.408,607,13.408,608,13.408,609,13.408,610,13.408,611,11.955,612,13.408]],["docTitle/docs/iota-go/0.1/README",[4,4.104,106,21.868]],["docBody/docs/iota-go/0.1/README",[0,3.47,4,4.749,17,5.271,37,9.612,59,5.366,61,5.271,87,11.147,96,23.468,106,21.614,109,13.885,110,15.094,184,10.281,275,17.581,484,8.103,486,7.535,487,12.261,611,15.094,613,16.929,614,16.929,615,16.929,616,16.929,617,15.094,618,16.929,619,16.929,620,16.929,621,16.929,622,16.929,623,16.929,624,16.929,625,16.929,626,16.929,627,16.929,628,16.929,629,16.929,630,16.929,631,25.523,632,16.929,633,16.929,634,16.929,635,34.204,636,25.523,637,16.929,638,16.929,639,16.929,640,16.929,641,16.929,642,16.929,643,16.929,644,16.929]],["docTitle/docs/node-software/0.1/introduction/overview",[0,3.433]],["docBody/docs/node-software/0.1/introduction/overview",[0,2.536,4,4.228,184,14.138,645,35.653,646,35.653,647,27.819,648,35.653]],["docTitle/docs/node-software/0.1/iri/introduction/overview",[4,5.724]],["docBody/docs/node-software/0.1/iri/introduction/overview",[0,3.14,4,4.038,184,14.775,216,23.455,649,34.05,650,34.05,651,34.05,652,34.05,653,34.05]],["docTitle/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.433]],["docBody/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.465,33,5.101,111,24.208,119,24.208,156,28.145,184,10.564,654,31.567,655,31.567,656,31.567,657,31.567]],["docTitle/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[184,16.152]],["docBody/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[0,2.964,184,14.92,658,34.833,659,34.833,660,34.833,661,34.833,662,34.833,663,34.833]],["docTitle/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.433]],["docBody/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.458,4,3.558,17,9.342,184,15.471,664,30.004,665,38.008,666,30.004,667,30.004,668,30.004]],["docTitle/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.433]],["docBody/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.237,33,4.329,48,9.671,154,22.94,669,29.692,670,33.302,671,33.302,672,33.302,673,33.302,674,33.302,675,33.302,676,29.692]],["docTitle/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.433]],["docBody/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.46,33,4.691,42,12.745,75,20.014,95,13.178,184,14.24,677,22.447,678,22.447,679,22.447,680,22.447,681,20.014,682,22.447,683,31.328,684,22.447,685,27.932,686,27.932,687,22.447,688,31.328,689,22.447,690,22.447,691,22.447,692,22.447,693,22.447,694,22.447,695,27.932,696,22.447,697,22.447,698,22.447]],["docTitle/docs/node-software/0.1/iri/concepts/tip-selection",[0,3.433]],["docBody/docs/node-software/0.1/iri/concepts/tip-selection",[0,3.547,4,3.001,17,9.501,33,3.967,48,4.862,80,25.028,112,12.839,207,15.993,509,21.02,524,28.01,699,16.742,700,16.742,701,34.012,702,14.927,703,16.742,704,16.742,705,16.742,706,16.742,707,16.742,708,16.742,709,16.742,710,16.742,711,16.742,712,16.742,713,16.742,714,16.742,715,16.742,716,16.742,717,16.742,718,10.579,719,14.927,720,16.742,721,14.927,722,25.309,723,14.927]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[724,43.035]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[0,3.222,17,4.156,33,5.104,48,3.876,59,4.231,68,5.555,73,7.837,87,8.79,97,13.98,102,26.495,111,10.237,112,10.237,115,10.949,116,10.949,117,10.237,118,9.195,135,10.428,151,7.125,157,5.323,184,15.062,204,12.464,258,17.413,486,5.942,578,9.669,724,11.902,725,13.349,726,11.902,727,10.237,728,10.237,729,13.349,730,9.669,731,11.902,732,11.902,733,11.902,734,11.902,735,11.902,736,11.902,737,13.349,738,13.349,739,13.349,740,13.349,741,13.349,742,13.349,743,13.349,744,21.231,745,13.349,746,13.349,747,13.349,748,13.349,749,13.349,750,13.349,751,13.349,752,13.349,753,13.349,754,11.902,755,13.349,756,13.349,757,13.349,758,13.349,759,13.349,760,13.349,761,7.579,762,13.349,763,13.349,764,13.349,765,13.349,766,13.349,767,13.349,768,13.349,769,13.349,770,13.349,771,13.349,772,13.349,773,13.349,774,13.349,775,13.349,776,13.349,777,13.349,778,13.349,779,13.349,780,13.349,781,13.349,782,13.349,783,13.349,784,13.349,785,13.349,786,11.902,787,13.349,788,13.349,789,13.349,790,11.902,791,11.902]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[792,43.035]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[0,3.171,17,5.184,33,4.409,48,4.835,59,7.989,62,13.864,64,12.059,65,15.927,68,6.928,73,9.775,87,10.963,111,12.768,112,12.768,113,14.845,115,13.656,116,13.656,117,12.768,118,11.469,159,29.023,184,15.072,187,14.845,486,7.411,542,22.028,726,14.845,727,12.768,728,12.768,731,14.845,732,14.845,733,14.845,734,14.845,735,14.845,736,14.845,761,17.268,786,14.845,790,14.845,791,14.845,792,14.845,793,16.65,794,16.65,795,16.65,796,16.65,797,16.65,798,14.845,799,14.845,800,16.65,801,16.65,802,16.65,803,16.65,804,16.65,805,16.65,806,16.65,807,16.65,808,16.65,809,16.65,810,16.65,811,16.65,812,14.845,813,16.65,814,16.65,815,16.65]],["docTitle/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.433]],["docBody/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.318,33,4.491,816,25.9,817,25.9,818,25.9,819,25.9,820,34.542,821,25.9,822,25.9,823,41.458,824,25.9,825,25.9,826,25.9,827,13.432,828,25.9,829,25.9,830,25.9,831,18.76,832,25.9,833,25.9,834,25.9,835,25.9,836,25.9,837,25.9,838,25.9,839,25.9,840,25.9,841,25.9]],["docTitle/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.433]],["docBody/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.496,17,9.436,184,10.141,685,34.102,695,34.102,842,30.304,843,30.304,844,30.304,845,30.304,846,30.304]],["docTitle/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[184,16.152]],["docBody/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[184,12.52,847,37.413,848,37.413,849,37.413,850,37.413]],["docTitle/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.433]],["docBody/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.408,17,8.134,33,3.396,48,7.586,59,12.371,68,10.871,94,15.933,119,29.932,132,11.112,133,11.364,134,11.112,157,10.418,474,26.288,851,26.124,852,26.124,853,23.292,854,23.292,855,26.124]],["docTitle/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.433]],["docBody/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.427,17,7.041,33,4.094,48,6.567,68,9.41,73,13.276,77,13.757,94,16.098,132,9.619,133,9.837,134,9.619,157,9.018,271,28.085,474,26.952,676,20.163,853,20.163,854,20.163,856,22.614,857,22.614,858,22.614,859,22.614,860,18.548,861,22.614,862,22.614,863,22.614]],["docTitle/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[553,26.538,864,30.854]],["docBody/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[0,3.367,33,4.207,42,10.491,48,5.366,59,5.856,96,11.24,97,12.167,102,12.167,124,12.167,155,17.216,271,17.939,553,14.17,727,14.17,864,16.474,865,18.477,866,32.362,867,18.477,868,18.477,869,18.477,870,18.477,871,18.477,872,18.477,873,18.477,874,18.477,875,18.477,876,16.474,877,18.477,878,18.477,879,18.477,880,18.477,881,18.477,882,18.477,883,16.474,884,18.477,885,27.244,886,14.17,887,18.477,888,18.477,889,18.477,890,18.477,891,18.477,892,18.477,893,18.477,894,18.477,895,18.477,896,16.474,897,18.477,898,18.477,899,18.477,900,18.477,901,18.477,902,18.477,903,14.17,904,18.477,905,18.477,906,18.477,907,18.477,908,18.477,909,18.477,910,18.477,911,18.477,912,18.477,913,18.477]],["docTitle/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.433]],["docBody/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.39,33,5.489,61,7.548,94,8.918,151,12.939,184,11.055,275,25.886,577,15.963,761,13.764,914,24.243,915,24.243,916,24.243,917,21.615,918,21.615,919,21.615,920,21.615,921,21.615,922,21.615,923,21.615,924,24.243,925,24.243,926,24.243,927,24.243,928,24.243,929,24.243,930,24.243,931,24.243,932,24.243,933,24.243,934,24.243]],["docTitle/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[184,16.152]],["docBody/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[0,2.449,61,10.723,184,15.755,204,20.217,754,30.704,935,34.437,936,34.437,937,34.437]],["docTitle/docs/node-software/0.1/iri/references/api-reference",[59,15.298]],["docBody/docs/node-software/0.1/iri/references/api-reference",[0,3.533,4,1.194,17,3.135,33,4.231,59,8.979,61,3.135,94,15.143,119,7.72,360,7.72,381,8.257,383,8.976,422,8.976,474,26.012,509,6.935,536,12.211,702,8.976,938,10.067,939,10.067,940,10.067,941,10.067,942,41.163,943,36.701,944,33.762,945,16.86,946,10.067,947,10.067,948,10.067,949,10.067,950,10.067,951,10.067,952,10.067,953,8.257,954,10.067,955,10.067,956,10.067,957,10.067,958,10.067,959,10.067,960,10.067,961,10.067,962,10.067,963,10.067,964,10.067,965,10.067]],["docTitle/docs/node-software/0.1/iri/references/api-errors",[59,15.298]],["docBody/docs/node-software/0.1/iri/references/api-errors",[0,2.837,59,11.336,184,11.969,204,16.028,509,18.806,524,30.589,718,17.252,944,34.717,966,27.301,967,39.888,968,35.765,969,27.301,970,27.301,971,27.301,972,24.341,973,22.392,974,27.301,975,27.301,976,22.392,977,24.341,978,27.301,979,27.301,980,24.341]],["docTitle/docs/node-software/0.1/iri/references/best-practice",[0,3.433]],["docBody/docs/node-software/0.1/iri/references/best-practice",[0,3.414,4,2.898,33,5.505,37,13.875,48,7.097,59,11.96,275,16.834,719,21.789,980,21.789,981,24.438,982,24.438,983,24.438,984,24.438,985,24.438,986,24.438,987,24.438,988,33.217,989,27.245,990,25.473,991,24.438,992,18.741,993,24.438,994,24.438,995,24.438,996,24.438,997,24.438]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.433]],["docBody/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.091,184,12.52,998,37.413,999,37.413]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,3.433]],["docBody/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,2.763,681,34.641]],["docTitle/docs/node-software/0.1/iri/references/iri-configuration-options",[184,16.152]],["docBody/docs/node-software/0.1/iri/references/iri-configuration-options",[0,3.427,33,4.094,59,11.484,72,25.829,80,25.829,184,10.538,216,15.578,271,25.799,509,21.692,989,25.829,990,24.149,992,24.149,1000,22.614,1001,22.614,1002,39.18,1003,24.149,1004,31.491,1005,31.491,1006,31.491,1007,22.614,1008,22.614,1009,22.614]],["docTitle/docs/node-software/0.1/iri/references/zmq-events",[271,31.782]],["docBody/docs/node-software/0.1/iri/references/zmq-events",[0,3.047,33,4.747,42,20.73,48,10.603,271,24.042,1010,36.512]],["docTitle/docs/node-software/0.1/iri/references/troubleshooting",[0,3.433]],["docBody/docs/node-software/0.1/iri/references/troubleshooting",[0,3.037,4,3.744,33,4.104,184,14.289,1011,28.145,1012,31.567,1013,21.745,1014,31.567,1015,31.567,1016,31.567,1017,31.567,1018,31.567,1019,31.567,1020,31.567,1021,31.567,1022,31.567]],["docTitle/docs/node-software/0.1/goshimmer/introduction/overview",[647,31.782]],["docBody/docs/node-software/0.1/goshimmer/introduction/overview",[0,2.964,33,4.528,647,27.437,1023,34.833,1024,31.057,1025,34.833,1026,27.437,1027,34.833]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[647,31.782]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[0,3.343,17,6.611,33,4.773,48,6.165,62,7.343,64,9.669,65,13.416,71,15.377,106,8.435,151,11.332,159,27.045,577,8.79,647,25.091,718,19.036,761,12.054,798,11.902,799,11.902,831,15.377,860,17.413,917,11.902,918,11.902,919,11.902,920,11.902,921,11.902,922,11.902,923,18.929,1024,11.902,1026,21.65,1028,13.349,1029,13.349,1030,21.231,1031,13.349,1032,13.349,1033,21.231,1034,13.349,1035,13.349,1036,11.902,1037,10.949,1038,13.349,1039,13.349,1040,13.349,1041,13.349,1042,13.349,1043,18.929,1044,17.413,1045,21.231,1046,21.231,1047,21.231,1048,21.231,1049,21.231,1050,18.929,1051,21.231,1052,21.231,1053,13.349,1054,13.349,1055,13.349,1056,26.433,1057,13.349,1058,17.413,1059,18.929,1060,21.231,1061,18.929,1062,13.349,1063,13.349,1064,11.902,1065,11.902,1066,13.349]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.433]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.374,33,5.272,647,21.928,1061,29.692,1067,33.302,1068,33.302,1069,33.302,1070,33.302,1071,33.302]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.433]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.394,17,7.929,33,3.311,48,7.395,68,10.597,73,14.95,77,15.491,94,16.263,132,10.832,133,11.077,134,10.832,271,28.277,474,27.136,860,20.887,896,30.451,1072,25.465,1073,25.465,1074,25.465]],["docTitle/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.433]],["docBody/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.234,33,4.747,647,24.042,1075,36.512,1076,32.554]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.433]],["docBody/docs/compass/0.1/introduction/overview",[0,3.492,4,5.569,48,8.713,1077,30.004,1078,30.004,1079,30.004,1080,30.004]],["docTitle/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.433]],["docBody/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.471,4,2.527,17,4.175,33,4.561,42,7.613,48,3.894,55,9.709,59,4.25,61,4.175,68,5.579,73,12.508,77,8.156,81,8.829,135,6.586,155,13.463,159,14.029,184,12.308,261,9.236,421,10.997,486,5.968,524,10.282,718,13.463,730,9.711,886,10.282,953,10.997,1003,10.282,1013,9.236,1058,10.997,1081,13.408,1082,13.408,1083,11.955,1084,18.996,1085,13.408,1086,13.408,1087,13.408,1088,11.955,1089,13.408,1090,13.408,1091,20.33,1092,13.408,1093,13.408,1094,13.408,1095,13.463,1096,13.408,1097,13.408,1098,13.408,1099,11.955,1100,13.408,1101,13.408,1102,13.408,1103,13.408,1104,13.408,1105,13.408,1106,13.408,1107,13.408,1108,18.996,1109,13.408,1110,13.408,1111,13.408,1112,13.408,1113,11.955,1114,10.997,1115,13.408,1116,13.408,1117,13.408,1118,13.408,1119,13.408,1120,13.408,1121,13.408,1122,13.408,1123,13.408,1124,13.408,1125,11.955,1126,13.408,1127,13.408,1128,13.408,1129,18.996,1130,21.744,1131,13.408,1132,13.408]],["docTitle/docs/compass/0.1/references/compass-configuration-options",[0,3.433]],["docBody/docs/compass/0.1/references/compass-configuration-options",[0,2.763,216,26.763]],["docTitle/docs/compass/0.1/references/merkle-tree-compute-times",[0,3.433]],["docBody/docs/compass/0.1/references/merkle-tree-compute-times",[0,2.661,157,14.92,231,25.772,1133,37.413,1134,37.413]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.433]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.113,4,3.523,62,16.343,159,24.872,184,13.897,440,26.489,542,21.519,1003,22.784,1064,26.489,1065,26.489,1091,22.784,1108,37.026,1113,26.489,1114,24.368,1135,26.489,1136,29.71,1137,29.71,1138,29.71,1139,20.465,1140,29.71,1141,29.71]],["docTitle/docs/wallets/0.1/introduction/overview",[0,3.433]],["docBody/docs/wallets/0.1/introduction/overview",[0,3.324,198,22.798,1142,36.077,1143,24.851,1144,36.077]],["docTitle/docs/wallets/0.1/trinity/introduction/overview",[0,3.433]],["docBody/docs/wallets/0.1/trinity/introduction/overview",[0,3.489,4,4.684,33,4.147,198,20.158,199,26.164,1145,31.899,1146,31.899,1147,31.899]],["docTitle/docs/wallets/0.1/trinity/concepts/hardware-wallet",[0,3.433]],["docBody/docs/wallets/0.1/trinity/concepts/hardware-wallet",[0,3.499,4,3.125,42,14.961,47,34.951,48,7.652,68,10.965,943,23.495,944,21.613,1148,39.2,1149,39.2,1150,26.351,1151,26.351,1152,26.351,1153,26.351,1154,26.351,1155,26.351]],["docTitle/docs/wallets/0.1/trinity/concepts/node-quorum",[0,3.433]],["docBody/docs/wallets/0.1/trinity/concepts/node-quorum",[0,3.113,48,11,1156,37.881]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-an-account",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-an-account",[0,3.504,33,5.577,38,26.164,78,24.463,202,21.974,203,23.104]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/back-up-seed",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/back-up-seed",[0,3.513,4,4.565,55,17.541,66,27.292,1157,30.61,1158,30.61,1159,30.61,1160,27.292]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop",[0,3.464,62,12.822,64,16.883,65,14.73,198,14.73,1161,23.31,1162,23.31,1163,32.557,1164,23.31,1165,23.31,1166,36.818,1167,20.783,1168,23.31,1169,20.783,1170,20.783,1171,32.159,1172,23.31,1173,30.198,1174,23.31,1175,23.31,1176,36.818,1177,23.31,1178,23.31,1179,23.31,1180,23.31,1181,23.31]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/read-your-balance",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/read-your-balance",[0,3.284,184,12.677]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/send-a-transaction",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/send-a-transaction",[0,3.494,4,5.037,33,5.729,55,12.554,91,19.953,207,17.409,1182,22.596,1183,27.549,1184,27.549,1185,27.549,1186,27.549,1187,22.596]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction",[0,3.448,33,4.147,55,17.998,207,24.957,1182,26.164,1187,32.394,1188,31.899,1189,26.164]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code",[1189,39.588]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code",[0,2.904,33,4.377,37,19.118,91,24.388,134,14.322,1189,36.037,1190,33.672,1191,33.672,1192,33.672,1193,33.672,1194,33.672]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-deep-link",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-deep-link",[0,3.537,33,4.88,61,9.161,154,20.267,1195,29.421,1196,29.421,1197,29.421,1198,29.421,1199,29.421]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node",[0,3.537,33,4.733,61,8.737,198,17.731,536,20.323,718,17.731,827,14.551,1200,28.059,1201,23.014,1202,28.059,1203,28.059,1204,28.059]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/manage-your-account",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/manage-your-account",[0,3.584,33,3.367,79,21.244,202,17.841,599,21.244,1201,21.244,1205,25.9]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings",[0,3.482,1206,35.238,1207,28.902]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings",[0,3.497,17,9.161,198,27.516,1208,24.131,1209,29.421,1210,29.421,1211,33.469,1212,29.421,1213,29.421,1214,26.232]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings",[0,3.475,4,4.131,61,10.846,184,11.657]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition",[0,3.536,33,4.104,1003,24.208,1215,31.567,1216,28.145,1217,31.567]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity",[0,3.433]],["docBody/docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity",[0,3.503,33,4.165,62,12.751,64,10.812,65,20.243,71,10.812,87,15.263,92,13.309,95,8.763,99,12.243,132,9.859,198,9.433,474,14.648,479,11.447,486,10.317,487,10.812,542,10.812,557,13.309,578,10.812,728,17.776,761,8.475,886,11.447,990,11.447,1130,12.243,1167,13.309,1182,12.243,1218,14.927,1219,20.667,1220,14.927,1221,14.927,1222,14.927,1223,14.927,1224,14.927,1225,14.927,1226,14.927,1227,23.18,1228,20.667,1229,23.18,1230,14.927,1231,14.927,1232,12.243,1233,14.927,1234,14.927,1235,14.927,1236,14.927,1237,14.927,1238,14.927,1239,14.927,1240,14.927,1241,14.927,1242,14.927,1243,14.927,1244,14.927,1245,14.927,1246,14.927,1247,14.927,1248,14.927,1249,14.927,1250,14.927,1251,14.927,1252,14.927,1253,14.927,1254,14.927,1255,14.927,1256,14.927]],["docTitle/docs/wallets/0.1/trinity/references/troubleshooting",[0,3.433]],["docBody/docs/wallets/0.1/trinity/references/troubleshooting",[0,3.566,4,4.217,33,4.622,1011,24.124,1257,27.057,1258,20.749,1259,27.057,1260,27.057]],["docTitle/docs/wallets/0.1/hub/introduction/overview",[0,3.433]],["docBody/docs/wallets/0.1/hub/introduction/overview",[0,3.457,4,5.181,33,4.595,48,7.788,59,11.204,1261,26.817,1262,26.817,1263,24.349,1264,26.817,1265,26.817,1266,26.817,1267,23.91,1268,26.817,1269,26.817,1270,26.817,1271,26.817,1272,26.817]],["docTitle/docs/wallets/0.1/hub/concepts/sweeps",[0,3.433]],["docBody/docs/wallets/0.1/hub/concepts/sweeps",[0,3.493,4,3.456,17,9.073,33,4.85,48,8.462,55,13.279,1273,29.138,1274,29.138,1275,29.138,1276,29.138,1277,29.138,1278,29.138,1279,29.138,1280,29.138]],["docTitle/docs/wallets/0.1/hub/how-to-guides/install-hub",[0,3.433]],["docBody/docs/wallets/0.1/hub/how-to-guides/install-hub",[0,3.51,4,1.852,33,3.801,61,4.864,62,8.592,79,12.811,124,15.807,151,8.337,474,9.87,486,10.685,536,11.313,730,17.387,761,8.868,1013,16.536,1026,10.285,1091,25.165,1143,22.605,1208,12.811,1281,15.62,1282,10.285,1283,15.62,1284,21.404,1285,13.927,1286,15.62,1287,15.62,1288,13.927,1289,15.62,1290,15.62,1291,15.62,1292,15.62,1293,15.62,1294,15.62,1295,15.62,1296,15.62,1297,32.815,1298,15.62,1299,13.927,1300,13.927,1301,15.62,1302,12.811,1303,15.62,1304,15.62,1305,21.404,1306,15.62,1307,15.62,1308,13.927,1309,13.927,1310,15.62,1311,15.62,1312,15.62,1313,15.62,1314,15.62,1315,15.62,1316,15.62,1317,15.62,1318,15.62]],["docTitle/docs/wallets/0.1/hub/how-to-guides/install-the-signing-server",[0,3.433]],["docBody/docs/wallets/0.1/hub/how-to-guides/install-the-signing-server",[0,3.486,4,2.077,61,5.454,68,7.289,96,10.655,124,11.534,151,9.349,486,7.796,730,12.687,761,9.945,1013,12.066,1091,24.047,1143,12.066,1228,15.617,1267,15.617,1282,11.534,1284,15.617,1285,15.617,1288,15.617,1302,14.367,1305,33.206,1308,15.617,1309,15.617,1319,34.794,1320,17.516,1321,17.516,1322,17.516,1323,39.076,1324,31.357,1325,31.357,1326,17.516,1327,17.516,1328,26.184,1329,26.184,1330,17.516,1331,17.516,1332,17.516,1333,17.516,1334,17.516,1335,17.516,1336,17.516,1337,17.516,1338,17.516,1339,17.516]],["docTitle/docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api",[59,10.968,1263,23.838]],["docBody/docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api",[0,3.452,33,5.474,59,10.414,100,20.763,577,15.837,827,12.472,1263,22.633,1302,19.726,1340,24.05,1341,24.05,1342,24.05,1343,24.05,1344,24.05,1345,24.05,1346,24.05,1347,24.05,1348,24.05,1349,24.05,1350,24.05,1351,21.443,1352,24.05,1353,24.05,1354,24.05,1355,24.05,1356,24.05,1357,24.05,1358,24.05]],["docTitle/docs/wallets/0.1/hub/how-to-guides/query-the-database",[1359,39.588]],["docBody/docs/wallets/0.1/hub/how-to-guides/query-the-database",[0,3.377,33,5.551,1143,21.745,1263,21.745,1300,34.986,1359,32.184,1360,31.567,1361,31.567,1362,28.145,1363,31.567]],["docTitle/docs/wallets/0.1/hub/how-to-guides/integrate-hub",[0,3.433]],["docBody/docs/wallets/0.1/hub/how-to-guides/integrate-hub",[0,3.494,4,5.514,17,11.061,33,4.618,48,6.331,61,12.005,118,15.017,1359,25.175,1364,21.801,1365,21.801,1366,21.801,1367,21.801,1368,30.693,1369,21.801,1370,21.801,1371,21.801,1372,21.801,1373,21.801,1374,21.801]],["docTitle/docs/wallets/0.1/hub/how-to-guides/rescue-tokens",[4,5.724]],["docBody/docs/wallets/0.1/hub/how-to-guides/rescue-tokens",[0,3.49,4,4.633,17,6.127,33,5.079,48,5.714,61,6.127,68,11.87,94,7.239,95,11.552,96,11.97,130,10.204,132,8.37,133,8.56,134,8.37,145,16.139,146,16.139,148,16.139,151,10.503,362,21.876,972,17.544,1375,19.677,1376,19.677,1377,19.677,1378,19.677,1379,19.677,1380,19.677,1381,19.677,1382,28.526,1383,19.677,1384,19.677,1385,19.677,1386,19.677,1387,19.677,1388,19.677,1389,19.677,1390,19.677,1391,19.677,1392,19.677,1393,19.677]],["docTitle/docs/wallets/0.1/hub/references/api-reference",[59,15.298]],["docBody/docs/wallets/0.1/hub/references/api-reference",[0,2.978,33,3.078,59,7.504,1143,16.308,1263,22.39,1394,23.674,1395,23.674,1396,23.674,1397,23.674,1398,23.674,1399,23.674,1400,23.674,1401,23.674,1402,23.674,1403,23.674,1404,23.674,1405,23.674,1406,23.674,1407,23.674,1408,23.674,1409,23.674,1410,23.674,1411,23.674,1412,23.674,1413,23.674,1414,23.674,1415,23.674,1416,23.674,1417,23.674,1418,23.674,1419,23.674,1420,23.674,1421,23.674,1422,23.674,1423,23.674,1424,23.674,1425,23.674,1426,23.674,1427,23.674,1428,23.674,1429,23.674,1430,23.674,1431,23.674,1432,23.674,1433,23.674,1434,21.108,1435,23.674]],["docTitle/docs/wallets/0.1/hub/references/command-line-flags",[0,3.433]],["docBody/docs/wallets/0.1/hub/references/command-line-flags",[0,3.401,4,4.33,1436,36.512]],["docTitle/docs/wallets/0.1/hub/references/database-tables",[0,3.433]],["docBody/docs/wallets/0.1/hub/references/database-tables",[0,3.448,59,9.702,1351,27.292,1362,27.292,1437,30.61,1438,30.61,1439,30.61,1440,30.61,1441,30.61,1442,30.61,1443,30.61,1444,30.61,1445,30.61,1446,30.61]],["docTitle/docs/wallets/0.1/hub/references/security-considerations",[0,3.433]],["docBody/docs/wallets/0.1/hub/references/security-considerations",[0,3.5,4,5.297,17,12.218,55,14.386,1447,31.567]],["docTitle/docs/wallets/0.1/hub/references/troubleshooting",[0,3.433]],["docBody/docs/wallets/0.1/hub/references/troubleshooting",[0,3.026,577,23.756,617,32.166,1263,24.851,1448,36.077,1449,36.077,1450,36.077]],["docTitle/docs/utils/0.1/introduction/overview",[0,3.433]],["docBody/docs/utils/0.1/introduction/overview",[0,3.473,4,5.055,213,13.308,245,20.549,249,14.418,469,29.156,486,12.375,1451,24.788,1452,27.802,1453,27.802]],["docTitle/docs/utils/0.1/community/mam-watcher/overview",[213,23.104]],["docBody/docs/utils/0.1/community/mam-watcher/overview",[0,3.488,4,2.875,33,4.295,61,7.548,63,18.591,124,15.963,213,21.723,486,10.791,761,13.764,1454,24.243,1455,19.884,1456,21.615,1457,37.579,1458,24.243,1459,19.884,1460,24.243,1461,24.243,1462,24.243,1463,24.243,1464,24.243]],["docTitle/docs/utils/0.1/community/one-command-tangle/overview",[0,3.433]],["docBody/docs/utils/0.1/community/one-command-tangle/overview",[0,3.443,4,3.486,17,6.387,33,3.821,48,3.713,59,10.2,61,7.998,68,5.32,155,12.962,157,10.243,159,13.507,184,12.078,198,8.079,213,6.12,231,8.807,261,8.807,486,5.691,539,11.4,550,10.487,718,12.962,761,7.259,827,6.63,886,9.805,903,15.73,953,10.487,973,16.824,976,16.824,1036,28.692,1037,21.068,1084,11.4,1099,11.4,1125,11.4,1130,10.487,1187,10.487,1455,10.487,1465,12.786,1466,12.786,1467,12.786,1468,12.786,1469,12.786,1470,12.786,1471,12.786,1472,12.786,1473,12.786,1474,12.786,1475,12.786,1476,12.786,1477,12.786,1478,12.786,1479,12.786,1480,12.786,1481,12.786,1482,12.786,1483,12.786,1484,12.786,1485,12.786,1486,12.786,1487,12.786,1488,12.786,1489,12.786,1490,12.786,1491,12.786,1492,12.786,1493,12.786,1494,11.4,1495,11.4,1496,12.786,1497,12.786,1498,12.786,1499,12.786,1500,12.786,1501,12.786,1502,12.786,1503,12.786,1504,12.786,1505,12.786,1506,12.786,1507,12.786,1508,12.786,1509,12.786,1510,12.786,1511,12.786,1512,12.786,1513,12.786,1514,12.786,1515,12.786]],["docTitle/docs/utils/0.1/community/raspberry-pi-pub-sub/overview",[245,19.648,249,17.946]],["docBody/docs/utils/0.1/community/raspberry-pi-pub-sub/overview",[0,3.42,4,4.263,61,6.938,101,13.554,135,15.308,154,15.349,155,14.08,213,10.666,245,17.696,249,11.555,412,19.866,486,9.918,761,12.651,827,11.555,1095,14.08,1455,18.276,1456,19.866,1516,22.282,1517,35.945,1518,35.945,1519,19.866,1520,22.282,1521,22.282,1522,22.282,1523,22.282,1524,22.282,1525,22.282,1526,22.282,1527,31.167,1528,31.167,1529,22.282,1530,22.282,1531,22.282,1532,22.282]],["docTitle/docs/utils/0.1/official/iota-area-codes/overview",[4,5.724]],["docBody/docs/utils/0.1/official/iota-area-codes/overview",[0,3.407,4,4.461,17,8.296,33,4.89,48,5.207,59,5.683,94,6.596,130,9.299,131,10.18,132,7.627,133,7.8,134,11.333,151,9.57,157,7.151,237,21.854,686,15.987,1533,17.931,1534,17.931,1535,44.234,1536,17.931,1537,14.707,1538,17.931,1539,17.931,1540,17.931,1541,17.931,1542,17.931,1543,17.931,1544,17.931,1545,17.931,1546,17.931,1547,17.931,1548,17.931,1549,26.645,1550,17.931,1551,17.931,1552,17.931,1553,17.931,1554,17.931,1555,12.351,1556,17.931,1557,17.931,1558,15.987,1559,17.931,1560,17.931,1561,17.931,1562,17.931,1563,17.931,1564,17.931,1565,17.931]],["docTitle/docs/utils/0.1/official/proof-of-existance/overview",[0,3.433]],["docBody/docs/utils/0.1/official/proof-of-existance/overview",[0,3.513,4,2.743,17,11.418,33,5.143,48,6.717,94,8.51,95,13.58,96,14.072,130,11.996,132,9.839,133,10.062,134,9.839,151,12.347,157,9.225,876,20.625,1566,23.132,1567,23.132,1568,23.132,1569,23.132,1570,23.132,1571,23.132,1572,23.132,1573,20.625,1574,23.132,1575,23.132,1576,23.132]],["docTitle/docs/utils/0.1/official/tangle-certificate/overview",[0,3.433]],["docBody/docs/utils/0.1/official/tangle-certificate/overview",[0,3.456,17,7.548,33,3.152,48,7.04,59,10.471,68,10.088,73,14.232,94,8.918,95,14.232,96,14.747,130,12.572,132,10.312,133,10.546,134,10.312,155,15.319,540,21.615,1026,21.753,1169,29.455,1577,24.243,1578,24.243,1579,24.243,1580,24.243,1581,33.036,1582,24.243,1583,24.243,1584,24.243,1585,24.243,1586,24.243,1587,24.243]],["docTitle/docs/utils/0.1/official/tryte-compress/overview",[0,3.433]],["docBody/docs/utils/0.1/official/tryte-compress/overview",[0,3.503,4,3.897,17,7.489,33,4.865,48,6.984,59,10.414,94,8.847,95,14.119,96,14.63,130,12.472,132,10.23,133,10.462,134,10.23,151,12.837,522,21.443,1519,21.443,1558,21.443,1588,24.05,1589,24.05,1590,24.05,1591,24.05,1592,24.05,1593,24.05,1594,24.05,1595,24.05]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.433]],["docBody/docs/blueprints/0.1/introduction/overview",[0,3.347,4,5.288,153,21.924,155,18.066,1050,32.858,1095,23.288,1596,23.448,1597,28.589,1598,20.706,1599,23.448,1600,28.589,1601,19.693,1602,28.589,1603,23.448,1604,23.448,1605,23.448,1606,28.589]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.433]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.472,4,3.465,21,16.681,33,2.644,48,5.906,59,9.259,68,8.463,157,8.11,213,13.984,469,25.01,486,9.052,1095,23.614,1207,16.681,1596,16.681,1607,20.338,1608,20.338,1609,20.338,1610,20.338,1611,20.338,1612,20.338,1613,20.338,1614,20.338,1615,20.338,1616,18.133,1617,20.338,1618,20.338,1619,20.338,1620,20.338,1621,20.338,1622,18.133,1623,20.338,1624,20.338,1625,20.338,1626,18.133,1627,18.133,1628,21.159,1629,16.681,1630,16.681]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.433]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.459,4,2.898,61,7.609,157,9.746,242,20.044,245,13.875,249,12.673,251,20.044,1095,15.443,1282,16.092,1555,16.834,1596,20.044,1631,24.438,1632,17.7,1633,24.438,1634,21.789,1635,24.438,1636,24.438,1637,24.438,1638,21.789,1639,24.438,1640,24.438,1641,24.438,1642,21.789,1643,21.789,1644,21.789,1645,21.789,1646,21.789,1647,21.789,1648,21.789,1649,21.789,1650,21.789]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.433]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.478,4,3.099,33,3.878,46,18.668,59,11.557,61,4.084,68,5.459,72,21.431,77,7.98,91,15.165,94,4.826,132,5.58,133,5.706,134,5.58,157,11.895,213,14.278,231,9.036,237,17.173,242,10.759,245,7.448,249,6.803,251,10.759,989,10.759,1026,13.787,1173,10.759,1207,10.759,1232,10.759,1555,14.423,1573,11.696,1638,11.696,1642,11.696,1643,11.696,1644,11.696,1645,11.696,1646,11.696,1647,11.696,1648,11.696,1649,11.696,1650,11.696,1651,28.498,1652,13.118,1653,23.297,1654,26.129,1655,23.297,1656,11.696,1657,10.759,1658,13.118,1659,13.118,1660,13.118,1661,13.118,1662,20.937,1663,20.937,1664,20.937,1665,13.118,1666,13.118,1667,13.118,1668,13.118,1669,13.118,1670,13.118,1671,13.118,1672,13.118,1673,13.118,1674,13.118,1675,13.118,1676,13.118,1677,13.118,1678,13.118,1679,13.118,1680,13.118]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.433]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.463,4,4.536,100,19.15,153,23.239,157,12.085,469,24.17,486,13.488,1282,19.955,1555,20.875,1598,21.949,1681,30.304,1682,30.304]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.433]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.517,4,2.749,17,8.848,42,8.475,48,6.731,61,8.848,68,11.825,73,13.608,77,14.101,94,5.491,97,9.829,101,14.101,153,11.447,269,28.562,380,25.336,553,11.447,1026,18.711,1163,12.243,1282,9.829,1598,25.122,1628,16.789,1632,16.789,1657,12.243,1683,13.309,1684,10.283,1685,23.18,1686,14.927,1687,14.927,1688,14.927,1689,14.927,1690,14.927,1691,14.927,1692,14.927,1693,14.927,1694,14.927,1695,14.927,1696,14.927,1697,14.927,1698,14.927,1699,14.927,1700,14.927,1701,23.18,1702,14.927,1703,23.18,1704,14.927,1705,14.927,1706,14.927,1707,14.927,1708,14.927,1709,14.927]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1601,33.248]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,2.995,33,3.979,85,25.107,213,18.425,469,26.607,1599,25.107,1601,26.514,1628,27.879,1629,25.107,1630,25.107,1684,21.086,1710,30.61,1711,30.61,1712,30.61,1713,27.292,1714,30.61]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[0,3.433]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,3.498,4,1.711,59,12.409,61,4.493,157,9.003,205,18.516,213,18.741,1026,9.502,1282,9.502,1451,12.866,1599,29.689,1601,24.935,1632,10.451,1634,12.866,1684,24.935,1715,14.43,1716,14.43,1717,14.43,1718,22.575,1719,14.43,1720,14.43,1721,14.43,1722,27.808,1723,14.43,1724,14.43,1725,14.43,1726,14.43,1727,14.43,1728,14.43,1729,20.128,1730,14.43,1731,14.43,1732,14.43,1733,14.43,1734,14.43,1735,14.43,1736,14.43,1737,14.43,1738,14.43,1739,14.43,1740,14.43,1741,14.43,1742,27.808,1743,14.43,1744,14.43,1745,14.43,1746,14.43,1747,14.43,1748,14.43,1749,14.43]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1601,33.248]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,3.416,4,4.966,33,3.078,59,10.302,77,14.402,94,15.405,157,12.962,213,15.559,231,16.308,245,13.442,249,12.277,486,10.538,1232,19.418,1601,27.523,1653,21.108,1656,21.108,1657,19.418,1750,23.674,1751,23.674,1752,23.674,1753,37.119,1754,23.674]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.433]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.524,4,4.815,33,3.682,157,11.294,469,25.656,486,12.606,1628,26.531,1755,23.229,1756,28.321]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.433]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.352,59,11.735,61,8.967,94,7.334,231,13.733,408,16.352,1095,21.362,1139,23.287,1163,27.728,1282,13.127,1603,27.728,1632,20.858,1683,17.775,1684,25.505,1755,27.728,1757,19.936,1758,17.775,1759,17.775,1760,19.936,1761,19.936,1762,33.806,1763,19.936,1764,19.936,1765,19.936,1766,19.936,1767,19.936,1768,19.936,1769,19.936,1770,17.775,1771,19.936,1772,19.936,1773,19.936,1774,19.936,1775,19.936,1776,19.936,1777,19.936,1778,16.352,1779,19.936,1780,19.936,1781,19.936,1782,19.936]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.433]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.18,4,4.898,33,2.962,59,7.222,94,8.382,486,10.141,1095,26.101,1139,29.449,1603,33.878,1684,29.449,1755,33.878,1758,20.315,1759,20.315,1778,29.836,1783,22.784,1784,36.376,1785,22.784,1786,22.784,1787,22.784,1788,22.784]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[0,3.433]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,3.549,4,2.786,33,3.054,157,9.368,213,15.476,469,23.361,903,18.015,1604,19.267,1605,19.267,1628,23.417,1629,19.267,1630,19.267,1789,23.491,1790,23.491,1791,23.491,1792,23.491,1793,23.491,1794,23.491,1795,23.491]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[0,3.433]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,3.228,4,4.418,17,6.29,48,5.867,61,6.29,101,12.289,213,18.896,1043,18.012,1537,23.846,1604,27.935,1605,27.935,1627,18.012,1632,14.632,1796,20.202,1797,20.202,1798,20.202,1799,20.202,1800,20.202,1801,20.202,1802,20.202,1803,20.202,1804,23.846,1805,29.074,1806,20.202,1807,20.202,1808,20.202,1809,20.202,1810,20.202,1811,20.202,1812,20.202,1813,20.202,1814,20.202,1815,20.202,1816,20.202,1817,20.202,1818,20.202,1819,20.202,1820,20.202,1821,20.202,1822,20.202,1823,20.202,1824,20.202,1825,20.202,1826,20.202,1827,20.202,1828,20.202,1829,20.202,1830,20.202,1831,20.202,1832,20.202]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.433]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.156,157,13.733,184,11.524,486,15.328,1684,23.722,1833,34.437,1834,41.383,1835,34.437,1836,34.437]],["docTitle/docs/iota-go/0.1/introduction/overview",[0,3.433]],["docBody/docs/iota-go/0.1/introduction/overview",[0,3.41,4,4.836,33,3.717,59,9.061,61,8.902,484,19.522,1837,23.448,1838,23.448,1839,23.448,1840,23.448,1841,23.448,1842,23.448,1843,23.448,1844,23.448,1845,23.448,1846,23.448,1847,23.448]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.433]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.528,4,2.723,33,4.748,55,14.502,59,7.276,61,7.148,132,9.765,133,9.986,134,9.765,827,11.905,1555,15.814,1848,18.829,1849,22.957,1850,22.957,1851,22.957,1852,22.957,1853,22.957,1854,22.957,1855,22.957,1856,22.957,1857,31.821,1858,20.469,1859,22.957,1860,22.957,1861,22.957]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.433]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.509,33,4.191,827,16.718,1862,32.239,1863,26.442,1864,32.239,1865,32.239]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.433]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.394,33,5.583,135,12.508,484,21.97,1804,20.887,1866,20.887,1867,20.887,1868,20.887,1869,20.887,1870,20.887,1871,25.465,1872,25.465,1873,25.465,1874,25.465,1875,25.465,1876,20.887,1877,20.887,1878,20.887,1879,20.887,1880,25.465,1881,22.705]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.433]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.497,33,4.88,106,18.592,202,20.267,203,21.31,550,24.131,827,15.257,1882,29.421,1883,29.421,1884,29.421,1885,29.421,1886,29.421,1887,29.421]],["docTitle/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.433]],["docBody/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.504,33,4.147,55,14.537,61,9.932,1888,31.899,1889,28.441,1890,31.899,1891,31.899]],["docTitle/docs/iota-go/0.1/references/cda-advice",[484,23.104]],["docBody/docs/iota-go/0.1/references/cda-advice",[0,3.066,55,14.692,484,19.029,1892,26.442,1893,26.442,1894,26.442,1895,32.606,1896,26.442,1897,26.442,1898,26.442,1899,26.442,1900,26.442,1901,26.442,1902,26.442]],["docTitle/docs/iota-java/0.1/introduction/overview",[0,3.433]],["docBody/docs/iota-java/0.1/introduction/overview",[0,3.41,4,4.836,33,3.717,59,9.061,61,8.902,484,19.522,1837,23.448,1838,23.448,1839,23.448,1840,23.448,1841,23.448,1842,23.448,1843,23.448,1844,23.448,1845,23.448,1846,23.448,1847,23.448]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.433]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.539,4,2.946,33,4.366,55,15.305,61,7.734,81,16.356,102,16.356,132,10.565,133,10.805,134,10.565,484,11.89,827,12.881,1770,22.146,1848,20.373,1903,24.839,1904,24.839,1905,24.839,1906,24.839,1907,24.839]],["docTitle/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.433]],["docBody/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.515,827,17.462,1863,27.618,1908,33.672]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.433]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.239,33,5.581,135,13.91,484,22.911,1866,23.229,1867,23.229,1868,23.229,1869,23.229,1870,23.229,1876,23.229,1877,23.229,1878,23.229,1879,23.229,1881,25.251]],["docTitle/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.433]],["docBody/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.406,17,9.728,48,9.072,827,16.201,1059,37.892,1909,31.241,1910,42.499,1911,31.241,1912,31.241,1913,31.241]],["docTitle/docs/iota-java/0.1/references/cda-advice",[484,23.104]],["docBody/docs/iota-java/0.1/references/cda-advice",[0,3.066,55,14.692,484,19.029,1892,26.442,1893,26.442,1894,26.442,1895,32.606,1896,26.442,1897,26.442,1898,26.442,1899,26.442,1900,26.442,1901,26.442,1902,26.442]],["docTitle/docs/iota-js/0.1/introduction/overview",[0,3.433]],["docBody/docs/iota-js/0.1/introduction/overview",[0,3.41,4,4.836,33,3.717,59,9.061,61,8.902,484,19.522,1837,23.448,1838,23.448,1839,23.448,1840,23.448,1841,23.448,1842,23.448,1843,23.448,1844,23.448,1845,23.448,1846,23.448,1847,23.448]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.433]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.516,4,3.046,33,3.339,48,7.458,61,10.694,94,9.447,130,13.318,131,14.581,132,10.923,133,11.171,134,10.923,202,17.69,827,13.318,1848,21.064,1858,22.897,1914,25.681,1915,25.681,1916,25.681,1917,25.681,1918,25.681,1919,25.681]],["docTitle/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.433]],["docBody/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.518,33,4.147,94,11.735,484,15.27,827,16.542,1863,26.164,1920,31.899]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.433]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.378,33,5.696,135,13.289,484,21.528,1866,22.192,1867,22.192,1868,22.192,1869,22.192,1870,22.192,1876,22.192,1877,22.192,1878,22.192,1879,22.192,1921,27.057,1922,27.057,1923,27.057,1924,27.057,1925,27.057]],["docTitle/docs/iota-js/0.1/references/cda-advice",[484,23.104]],["docBody/docs/iota-js/0.1/references/cda-advice",[0,3.066,55,14.692,484,19.029,1892,26.442,1893,26.442,1894,26.442,1895,32.606,1896,26.442,1897,26.442,1898,26.442,1899,26.442,1900,26.442,1901,26.442,1902,26.442]],["docTitle/docs/general/0.1/introduction/overview",[0,3.433]],["docBody/docs/general/0.1/introduction/overview",[0,3.113,4,4.492,1926,37.881]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.433]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.368,4,2.274,17,5.972,33,4.299,37,10.889,48,5.569,55,8.74,62,10.55,68,7.981,81,21.774,577,12.629,730,13.891,831,23.951,1013,13.211,1143,22.779,1651,15.731,1927,19.179,1928,19.179,1929,19.179,1930,19.179,1931,19.179,1932,19.179,1933,19.179,1934,19.179,1935,19.179,1936,19.179,1937,19.179,1938,36.359,1939,19.179,1940,36.359,1941,17.1,1942,19.179,1943,19.179,1944,19.179,1945,33.068,1946,19.179,1947,27.999,1948,27.122,1949,27.999,1950,27.999,1951,19.179,1952,19.179,1953,17.1,1954,19.179]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[62,26.55]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,3.062,48,6.197,62,24.949,65,13.485,70,17.503,71,15.457,96,12.982,125,17.503,204,12.528,261,14.7,727,16.365,831,15.457,1013,14.7,1651,24.798,1955,21.34,1956,21.34,1957,21.34,1958,21.34,1959,21.34,1960,21.34,1961,21.34,1962,21.34,1963,21.34,1964,21.34,1965,21.34,1966,21.34,1967,21.34,1968,30.234,1969,26.957,1970,21.34,1971,21.34,1972,21.34,1973,21.34,1974,17.503,1975,21.34,1976,21.34,1977,21.34,1978,21.34,1979,21.34,1980,21.34,1981,21.34,1982,21.34,1983,21.34,1984,35.112,1985,21.34,1986,21.34]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[0,3.433]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,3.405,33,3.863,61,4.992,203,11.613,204,9.413,249,12.701,669,14.295,827,15.411,831,24.094,992,12.295,1160,21.836,1974,13.15,1987,16.033,1988,16.033,1989,16.033,1990,16.033,1991,16.033,1992,16.033,1993,16.033,1994,16.033,1995,29.717,1996,16.033,1997,16.033,1998,16.033,1999,35.833,2000,16.033,2001,29.717,2002,37.777,2003,24.491,2004,16.033,2005,16.033,2006,16.033,2007,16.033,2008,16.033,2009,14.295,2010,14.295,2011,16.033,2012,16.033,2013,16.033,2014,16.033,2015,16.033,2016,24.491,2017,29.717,2018,16.033,2019,16.033,2020,16.033,2021,16.033,2022,16.033,2023,16.033,2024,16.033,2025,16.033,2026,14.295,2027,16.033,2028,16.033,2029,16.033,2030,16.033,2031,16.033,2032,16.033,2033,16.033,2034,16.033,2035,16.033]],["docTitle/docs/general/0.1/how-to-guides/install-go-on-sbc",[106,30.501]],["docBody/docs/general/0.1/how-to-guides/install-go-on-sbc",[0,3.277,62,17.547,106,30.072,151,17.026,2036,31.899,2037,31.899,2038,31.899,2039,31.899,2040,31.899]],["docTitle/docs/general/0.1/references/troubleshooting",[0,3.433]],["docBody/docs/general/0.1/references/troubleshooting",[0,3.202,728,27.341,1088,31.788,2041,35.653,2042,31.788,2043,35.653,2044,35.653]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,5.724]],["docBody/docs/smartcity/0.1/introduction/overview",[0,2.943,4,4.908,245,19.552,249,17.858,718,21.761,2045,34.437,2046,34.437,2047,34.437,2048,30.704,2049,34.437]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[481,29.361]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[0,3.37,213,13.431,249,14.551,479,21.518,481,26.021,2050,28.059,2051,28.059,2052,28.059,2053,25.081,2054,28.059,2055,28.059,2056,25.081,2057,28.059,2058,25.018,2059,28.059,2060,28.059,2061,28.059,2062,25.018,2063,25.018]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[481,29.361]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[0,2.396,68,14.015,86,25.554,97,13.042,245,25.335,249,22.362,481,17.435,578,14.345,1044,16.245,1129,17.659,1139,13.643,1216,25.554,1258,15.189,1626,17.659,2048,17.659,2053,19.743,2056,19.743,2064,19.806,2065,25.554,2066,19.806,2067,19.806,2068,28.661,2069,28.661,2070,17.659,2071,17.659,2072,19.806,2073,17.659,2074,19.806,2075,19.806,2076,19.806,2077,19.806,2078,19.806,2079,19.806,2080,19.806,2081,19.806,2082,19.806,2083,19.806,2084,19.806,2085,19.806,2086,19.806,2087,19.806,2088,17.659,2089,19.806,2090,17.659,2091,17.659,2092,15.189,2093,16.245,2094,19.806,2095,19.806]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[481,29.361]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,3.044,4,4.022,37,14.31,65,19.218,94,12.477,97,16.596,100,10.521,101,18.501,205,13.656,213,7.97,245,22.607,249,19.88,261,17.362,481,22.165,718,15.927,1058,13.656,1114,13.656,1459,20.673,1948,20.673,1974,13.656,2053,25.099,2056,28.246,2088,22.472,2092,23.323,2093,24.945,2096,16.65,2097,16.65,2098,16.65,2099,16.65,2100,16.65,2101,16.65,2102,25.204,2103,16.65,2104,14.845,2105,16.65,2106,16.65,2107,16.65,2108,16.65,2109,16.65,2110,16.65,2111,16.65,2112,16.65,2113,16.65,2114,16.65,2115,14.845,2116,16.65,2117,25.204,2118,16.65]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[249,17.946,2119,30.854]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[0,2.544,245,22.647,249,20.685,474,17.252,1044,29.335,1139,18.806,1258,20.936,2090,31.888,2091,24.341,2092,27.427,2093,29.335,2115,24.341,2119,24.341,2120,27.301,2121,27.301,2122,27.301,2123,35.765,2124,27.301,2125,24.341,2126,27.301,2127,27.301,2128,27.301,2129,27.301,2130,27.301,2131,27.301]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[481,29.361]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[0,1.827,49,19.694,213,12.293,479,19.694,481,25.134,1459,21.064,2053,28.461,2056,23.659,2058,22.897,2062,22.897,2063,22.897,2132,25.681,2133,25.681,2134,25.681,2135,25.681,2136,25.681,2137,25.681,2138,25.681,2139,25.681,2140,25.681,2141,25.681,2142,25.681,2143,25.681,2144,25.681,2145,25.681,2146,25.681,2147,25.681,2148,25.681,2149,25.681,2150,25.681,2151,25.681,2152,25.681,2153,25.681,2154,25.681,2155,25.681]],["docTitle/docs/smartcity/0.1/astropiota/references/sensehat-specs",[2053,23.838,2056,23.838]],["docBody/docs/smartcity/0.1/astropiota/references/sensehat-specs",[0,3.175,77,23.846,81,17.352,435,21.613,2053,27.002,2056,24.068,2070,23.495,2156,26.351,2157,26.351,2158,39.2,2159,26.351,2160,26.351,2161,26.351,2162,26.351,2163,26.351,2164,26.351,2165,26.351,2166,26.351,2167,26.351,2168,26.351,2169,26.351,2170,26.351,2171,26.351,2172,26.351,2173,26.351,2174,26.351,2175,26.351]],["docTitle/docs/contribution/0.1/style-guide",[1598,19.535,2176,24.048,2177,24.048]],["docBody/docs/contribution/0.1/style-guide",[0,1.531,4,0.532,17,0.73,29,1.922,33,2.014,37,9.458,48,1.302,55,2.044,59,0.743,61,2.57,70,21.692,71,12.858,76,2.089,78,7.61,82,2.089,85,1.922,88,3.998,89,25.933,95,2.633,100,1.481,106,4.074,109,12.704,118,1.614,124,4.245,127,3.998,132,0.997,133,1.019,134,6.588,135,1.151,154,5.686,165,10.225,184,1.501,199,5.288,200,13.81,201,3.678,202,3.089,203,4.67,204,1.376,216,1.614,258,1.922,261,3.089,421,1.922,424,2.089,435,8.139,469,10.526,486,7.902,487,4.67,509,1.614,518,5.749,537,5.749,542,5.979,543,3.998,577,5.435,578,12.065,599,16.199,721,3.998,723,2.089,761,3.661,812,7.36,883,2.089,903,6.33,973,11.681,976,5.288,977,2.089,990,8.795,992,4.944,1037,9.406,1076,10.225,1083,7.36,1095,2.834,1135,2.089,1139,16.43,1170,2.089,1173,1.922,1201,1.922,1208,14.561,1211,3.998,1214,2.089,1219,2.089,1258,3.439,1299,3.998,1434,3.998,1494,5.749,1495,8.847,1537,3.678,1555,5.686,1598,14.967,1616,3.998,1622,2.089,1655,19.922,1713,27.842,1729,2.089,1778,1.922,1804,3.678,1889,5.749,1941,2.089,1948,9.406,1953,3.998,1969,2.089,2009,2.089,2010,3.998,2026,2.089,2042,2.089,2065,2.089,2071,2.089,2073,2.089,2092,4.944,2104,7.36,2125,10.225,2176,12.697,2177,20.612,2178,2.343,2179,2.343,2180,2.343,2181,8.254,2182,2.343,2183,2.343,2184,29.994,2185,9.923,2186,4.484,2187,4.484,2188,4.484,2189,9.923,2190,4.484,2191,6.447,2192,17.753,2193,9.923,2194,14.241,2195,23.117,2196,8.254,2197,6.447,2198,25.213,2199,12.904,2200,4.484,2201,2.343,2202,8.254,2203,4.484,2204,2.343,2205,17.753,2206,8.254,2207,8.254,2208,8.254,2209,6.447,2210,4.484,2211,4.484,2212,14.241,2213,18.782,2214,2.343,2215,4.484,2216,12.904,2217,8.254,2218,2.343,2219,8.254,2220,8.254,2221,2.343,2222,12.904,2223,2.343,2224,11.468,2225,4.484,2226,6.447,2227,2.343,2228,8.254,2229,4.484,2230,2.343,2231,2.343,2232,2.343,2233,11.468,2234,9.923,2235,2.343,2236,4.484,2237,4.484,2238,6.447,2239,2.343,2240,12.904,2241,2.343,2242,11.468,2243,2.343,2244,2.343,2245,17.753,2246,2.343,2247,2.343,2248,2.343,2249,2.343,2250,4.484,2251,4.484,2252,2.343,2253,2.343,2254,2.343,2255,2.343,2256,2.343,2257,9.923,2258,6.447,2259,8.254,2260,2.343,2261,2.343,2262,2.343,2263,8.254,2264,8.254,2265,6.447,2266,2.343,2267,4.484,2268,4.484,2269,2.343,2270,2.343,2271,2.343,2272,4.484,2273,4.484,2274,2.343,2275,8.254,2276,2.343,2277,2.343,2278,2.343,2279,4.484,2280,2.343,2281,2.343,2282,4.484,2283,6.447,2284,2.343,2285,8.254,2286,11.468,2287,4.484,2288,8.254,2289,2.343,2290,4.484,2291,2.343,2292,2.343,2293,4.484,2294,9.923,2295,6.447,2296,2.343,2297,6.447,2298,6.447,2299,14.241,2300,4.484,2301,4.484,2302,4.484,2303,4.484,2304,4.484,2305,4.484,2306,2.343,2307,2.343,2308,14.241,2309,14.241,2310,2.343,2311,4.484,2312,2.343,2313,2.343,2314,2.343,2315,2.343,2316,2.343,2317,4.484,2318,2.343,2319,2.343,2320,2.343,2321,2.343,2322,6.447,2323,2.343,2324,2.343,2325,2.343,2326,4.484,2327,2.343,2328,2.343,2329,9.923,2330,8.254,2331,2.343,2332,2.343,2333,4.484,2334,11.468,2335,2.343,2336,8.254,2337,2.343,2338,2.343,2339,12.904,2340,2.343,2341,2.343,2342,6.447,2343,2.343,2344,11.468,2345,2.343,2346,4.484,2347,2.343,2348,2.343,2349,2.343,2350,4.484,2351,2.343,2352,2.343,2353,2.343,2354,2.343,2355,2.343,2356,2.343,2357,2.343,2358,4.484,2359,4.484,2360,4.484,2361,6.447,2362,4.484,2363,4.484,2364,9.923,2365,2.343,2366,4.484,2367,4.484,2368,2.343,2369,2.343,2370,2.343,2371,4.484,2372,2.343,2373,2.343,2374,2.343,2375,2.343,2376,16.657,2377,4.484,2378,4.484,2379,17.753,2380,2.343,2381,2.343,2382,2.343,2383,2.343,2384,2.343,2385,2.343,2386,4.484,2387,4.484,2388,2.343,2389,4.484,2390,2.343,2391,4.484,2392,2.343,2393,2.343,2394,2.343,2395,2.343,2396,2.343,2397,2.343,2398,2.343,2399,2.343,2400,2.343,2401,4.484,2402,2.343,2403,2.343,2404,2.343,2405,2.343,2406,2.343,2407,2.343,2408,2.343,2409,2.343,2410,2.343,2411,2.343,2412,2.343,2413,2.343,2414,2.343,2415,2.343,2416,2.343,2417,4.484,2418,4.484,2419,4.484,2420,6.447,2421,2.343,2422,6.447,2423,2.343,2424,2.343,2425,2.343,2426,2.343,2427,2.343,2428,2.343,2429,4.484,2430,2.343,2431,4.484,2432,6.447,2433,6.447,2434,4.484,2435,4.484,2436,11.468,2437,4.484,2438,2.343,2439,2.343,2440,2.343,2441,2.343,2442,2.343,2443,2.343,2444,4.484,2445,4.484,2446,2.343,2447,2.343,2448,2.343,2449,2.343,2450,2.343,2451,2.343,2452,2.343,2453,2.343,2454,2.343,2455,2.343,2456,2.343,2457,2.343,2458,2.343,2459,2.343,2460,2.343,2461,2.343,2462,8.254,2463,2.343,2464,2.343,2465,2.343,2466,2.343,2467,2.343,2468,2.343,2469,2.343,2470,2.343,2471,2.343,2472,2.343,2473,2.343,2474,2.343,2475,2.343,2476,2.343,2477,2.343,2478,2.343,2479,2.343,2480,2.343,2481,2.343,2482,4.484,2483,4.484,2484,2.343,2485,2.343,2486,2.343,2487,2.343]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-transaction":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-transaction":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{},"docs/contribution/0.1/style-guide":{}}}],["0",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["0.2で、スクロールテキストは読むのに十分遅くなりますが、遅くなりすぎません。backcolourとtextcolourは、0から255までのrgb",{"_index":2145,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["000トリットはトライトでは9",{"_index":372,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["01",{"_index":1935,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["02_run_iri.sh",{"_index":1110,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0に設定し、ネットマスクをnmap",{"_index":2031,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["0またはvalu",{"_index":902,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":376,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":462,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1",{"_index":48,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/contribution/0.1/style-guide":{}}}],["1,000トランザクション（tps）を送信します。tpsを変更したい場合は、tpsクエリパラメータを追加することができます。たとえば、10,000tpsを送信するには、次のようにエンドポイントにリクエストを送信します。http&#x3a;//localhost:8080/spammer?cmd=start&tps=10000",{"_index":1069,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1.0",{"_index":2072,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":600,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":615,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":563,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":95,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/contribution/0.1/style-guide":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":1290,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":1301,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["100",{"_index":686,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1667,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":690,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["10gb",{"_index":874,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1089,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":349,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、10miのiota",{"_index":350,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":910,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":384,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1611,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2086,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["120",{"_index":845,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["128",{"_index":1699,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1700,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["14",{"_index":1550,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["14265",{"_index":735,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["14626（tcp/udp）と14666（tcp",{"_index":1030,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["15600",{"_index":733,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["16gbのramと2つの仮想cpuを備えたamazon",{"_index":984,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["16ビット（rgb",{"_index":2167,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["17.05",{"_index":798,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18.04",{"_index":730,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["18.04）の場合は、build",{"_index":921,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18でiri",{"_index":1014,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["1i",{"_index":1215,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":279,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":448,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1から3",{"_index":321,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1188,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{}}}],["1つにテストデータを公開したくないかもしれません。代わりに、iota",{"_index":1466,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1695,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":1876,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのiriノードと1",{"_index":1469,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":332,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つのトランザクションでも、パッケージ化する必要があります。この場合、1",{"_index":351,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["1つのトランザクションに収まらない場合があります。この場合、署名の残りの部分は、1つまたは2",{"_index":334,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つは、iota",{"_index":292,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1200,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":389,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["1とリーフ2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1とノード2",{"_index":317,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["1のアドレスから80i",{"_index":363,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":1316,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":314,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["1より大きい場合、署名は1",{"_index":353,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["1を参照し、トランザクション1はトランザクション2",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":467,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1分程度待つと、トランザクションが確定されたときにzmq",{"_index":1529,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["1回だけ作成および登録されます。資産の管理権は時間の経過とともに変化し、特定の資産の管理権の変化に関連する情報を集約するためにmamチャネルを使用することは意味があります。mamチャネルを使用することにより、実装の複雑さを制限でき、すべての異なる管理権の変更を適切な資産に簡単にリンクできます。さらに、mam",{"_index":1814,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["1回でもiota",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1617,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化されて、セキュリティレベルごとに1つのキーダイジェストを導出します。次に、キーダイジェストが結合され、1回ハッシュ化されて、81",{"_index":329,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":340,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":893,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":906,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":411,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["1秒あたりのトランザクション数。2つのカテゴリに分けられます。receiv",{"_index":1046,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["1秒間に処理できるトランザクション数をテストするには、spammerapi",{"_index":1067,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1：astropiota",{"_index":2045,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/contribution/0.1/style-guide":{}}}],["2,187トライト、4374トライト、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントが存在します。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。よってセキュリティレベル1の秘密鍵は2,178/81=27より、27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":328,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":612,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1692,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":558,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1227,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1128,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["2.7piのiota",{"_index":1109,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["20",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":943,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["2015",{"_index":1615,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1682,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1618,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20の事前にビルドされた（layerディレクトリ内の）マークル木を使用します。このマークル木は、コンパスが1年以上30",{"_index":1476,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["2128",{"_index":1701,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1703,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":846,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["243",{"_index":947,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["25",{"_index":2087,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1705,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2673",{"_index":439,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":327,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27トライト、54トライト、または81",{"_index":336,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27トライト、54トライト、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":339,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":337,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27回スポンジ関数でsubse",{"_index":325,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["2gb",{"_index":873,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16です。したがって、24ではなく16",{"_index":2033,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つあります。docker",{"_index":1029,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":716,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":717,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":703,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。クライアントがgettransactionstoapprov",{"_index":699,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":1849,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1352,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1355,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["2つの種類のうちの1",{"_index":352,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2つの親トランザクションを参照する必要があります。そのトランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドはどうでしょうか。そしてバンドルの最後のトランザクションのtrunktransactionとbranchtransact",{"_index":297,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":705,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":444,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":364,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":441,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/security-levels":{}}}],["2回以上トークンを取り出してはいけません。その結果、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":354,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":413,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["2種類のイベントをトリガできます。1つはバンドルがペンディング状態にあるとき、もう1",{"_index":1863,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["2種類のリスナがあります。1つはチャネルを使用するもので、もう1",{"_index":1862,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2行の下に秘密の81",{"_index":1460,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":387,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["3",{"_index":68,"docTitle":{"docs/dev-essentials/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/trinary":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["3+)とpip",{"_index":854,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["30秒ごとに、transfer",{"_index":1859,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1324,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":453,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["384を使用したkerl",{"_index":320,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["3つのセキュリティレベルをすべて使用することにより、ほぼ無制限の数のアドレスと秘密鍵のペア（957",{"_index":322,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":460,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3でダウンロードしたubuntu",{"_index":1970,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["3のアドレスから80i",{"_index":365,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["3はraspberri",{"_index":2122,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1158,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":466,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3進法3",{"_index":465,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":388,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["4",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1226,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":476,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["40",{"_index":1669,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["400",{"_index":944,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["401",{"_index":975,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["4gb",{"_index":726,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["4gb以上の空きram",{"_index":1470,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["4x3",{"_index":2074,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのトライトはエリアコードで、およそ100",{"_index":1545,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、公式2&lt;sup>depth&lt;/sup>のdepthによって異なります。この例では、マークル木のdepthは2",{"_index":306,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["4つの隣接ノードへの接続を試み、さらに4",{"_index":1025,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["4のiri",{"_index":755,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1349,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1101,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["5",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["50",{"_index":1153,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["50,000",{"_index":696,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":698,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["55",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3を直接参照し、トランザクション6はトランザクション3を介して間接的にトランザクション5",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["5）の場合、フレームバッファドライバ/dev/fb1からアクセスできます。これは、sens",{"_index":2168,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["5）を備えた8×8",{"_index":2163,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["6",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["60",{"_index":1134,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["60fpsのリフレッシュレートと15ビットの色解像度（rgb",{"_index":2162,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["64",{"_index":728,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1156,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/node-quorum":{}}}],["6か7",{"_index":1018,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["6があるアドレスから10miを取り出すようにノードに指示した場合、トランザクション6の親トランザクションの履歴がトランザクション6のアドレスに少なくとも10mi",{"_index":301,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6つのトライトはローカルコードで、14",{"_index":1548,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["6でiota",{"_index":1317,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親トランザクションです。同様に、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":300,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["6コマンドライン引数を追加する必要があります。ネットワークインターフェイス名も追加する必要があります。ネットワークインターフェイス名がなければ、クライアントはsbc",{"_index":2008,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["7",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["75",{"_index":1588,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["8",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":853,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":2047,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["80と443",{"_index":1505,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["81",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/utils/0.1/community/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":969,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["81トライトのsubse",{"_index":324,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["81トライトのセグメントに分割されます。次に、各セグメントは26",{"_index":326,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":294,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["81文字未満で構成されるシードを入力すると、ライブラリはそのシードの末尾に9を追加して81",{"_index":1592,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":142,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1087,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["8、またはnode.j",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["8つの隣接ノードを持つことができます。各ノードは接続する4つの隣接ノードを選択し、自分を選択した他の4",{"_index":1048,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["8以上かpython（3以上）とpip",{"_index":1073,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["9",{"_index":91,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90トライトです。余分な9",{"_index":289,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["990,100",{"_index":688,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["9999",{"_index":1325,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1614,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":449,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1663,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1744,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abc123の登録id",{"_index":1741,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abov",{"_index":2404,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["absent",{"_index":974,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["accepted隣接ノードがない場合は、autopeeringtcp/udpポート（14626",{"_index":1053,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["accomplish",{"_index":2449,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["accordingli",{"_index":2480,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["account",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/contribution/0.1/style-guide":{}}}],["account'",{"_index":2230,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["accountlisten",{"_index":1908,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["accountplugin",{"_index":1910,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["achiev",{"_index":2429,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["action",{"_index":2392,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["acycl",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["ad",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/contribution/0.1/style-guide":{}}}],["adapt",{"_index":1917,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["add",{"_index":2219,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["add()メソッドからのレスポンスにはipfsハッシュが含まれています。これは、タングルに添付される前にメタデータとsha256",{"_index":1773,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["addit",{"_index":2237,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["addneighbor",{"_index":939,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["addneighbors(uri",{"_index":494,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["addresscountaggreg",{"_index":908,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["address、value、obsoletetag、currentindex、lastindex、そしてtimestampフィールドの値のハッシュ値から導出されます。このバンドルハッシュは、パッケージを保証するために各トランザクションのbundl",{"_index":335,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["admin_pass_phras",{"_index":1585,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["advanc",{"_index":1947,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["allow",{"_index":2282,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":911,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["alpha",{"_index":701,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":713,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["alreadi",{"_index":2203,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["alway",{"_index":812,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/contribution/0.1/style-guide":{}}}],["amazon",{"_index":231,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["amount",{"_index":1197,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["amp;lt;packag",{"_index":636,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1182,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["anoth",{"_index":2305,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["answer",{"_index":2427,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["apach",{"_index":553,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":59,"docTitle":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{},"docs/contribution/0.1/style-guide":{}}}],["api.iota.org/feed/train",{"_index":2370,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["apiがあります。api",{"_index":291,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1394,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":1001,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["apiが提供されます。オブジェクトリポジトリに保存される情報には、iotaタングル上でアクセス可能なチャネルのルートアドレスや制限付きmamチャネルが使用されている場合、mamチャネルに保存されている情報を復号化するために必要な暗号化キー（サイドキーと呼ばれます）が含まれます。次のタプルが作成され、オブジェクトリポジトリに保存されます。&amp;lt;assetuniqueid",{"_index":1818,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiとして書かれたバックエンドの2つの部分から成ります。このpoc",{"_index":1759,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1635,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1641,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1360,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["apiの形式を取ります。生産者と消費者の両方が自身をグリッドに登録するために使用します。エンティティが登録されると、グリッドはエンティティのmam出力チャネルの監視を開始します。登録が成功すると、idが返されます。このid",{"_index":1735,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは2",{"_index":1764,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["apiは、webサーバー上でホストされる通常のweb",{"_index":1734,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは、永続的に情報を格納する必要があるアーキテクチャのどの部分でも使用できます。apiは標準データベースのcrud操作をサポートし、すべての呼び出しでエンティティ登録id",{"_index":1738,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":938,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1342,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1104,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiを使い始めるでgrpc",{"_index":1449,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["apiを使用してiac",{"_index":1565,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["apiを使用してtangl",{"_index":1577,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["apiを使用して、緯度と経度から独自のiacにエンコードし、iacをトランザクションのtag",{"_index":1551,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["apiを使用しているため、すべてのzmq",{"_index":871,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを使用して座標からiacを作成し、トランザクションのtagフィールドにiacを追加してdevnetに送信します。devnetは、トークンが無料であること以外は、mainnetほとんど同じです。devnetに送信するトランザクションは、mainnet",{"_index":1557,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["apiを使用して情報を交換できます。この設計図のためにmam",{"_index":1813,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiを使用するには、iota",{"_index":1579,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["apiを通してiri",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1126,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":657,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["apiエンドポイントへのすべてのリクエストはiri",{"_index":916,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["apiエンドポイントを介してノードと通信するクライアントアプリケーションの場合、aw",{"_index":994,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["apiキー、およびcoinmarketcap",{"_index":1486,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiキーとcoinmarketcap",{"_index":1481,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiキーは/config/tools/tool",{"_index":1489,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiサーバー：node.js（express",{"_index":1751,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["apiメソッドの詳細については、api",{"_index":619,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":1020,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":966,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":783,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":816,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":706,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":704,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["api呼び出しの組み合わせで行われます。mam",{"_index":1726,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["api呼び出しはコストがかかる可能性があるため、ノード所有者はノードを一般に公開しないことがよくあります。そのため、iota",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":583,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["api呼び出しを送信するリバースプロキシサーバのドメイン名を1",{"_index":996,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["api（get",{"_index":1774,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["appear",{"_index":2258,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["applic",{"_index":1176,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["applications/utilities/termin",{"_index":1171,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["appname、appversion、latestmilestone、neighbors、tip",{"_index":2110,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["appropri",{"_index":2221,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["apt",{"_index":1284,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":1282,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["archive（ppa",{"_index":1293,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["argon2",{"_index":1265,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["arm64",{"_index":629,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armシステムアーキテクチャ（32ビットまたは64",{"_index":2037,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["articl",{"_index":2198,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["artimaガイドはjreでscala",{"_index":878,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":957,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":395,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1181,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["ask",{"_index":2229,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["asset",{"_index":1792,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["assetcustodianid",{"_index":1803,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetcustodianidは最初はassetownerid",{"_index":1809,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1802,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetowneridに関する情報は、アプリを通じて挿入されるか、外部の情報源から取得されます（アプリを使用するための登録サーバーなど。この場合は会社のvat",{"_index":1808,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1179,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueidは、qrコードスキャンによって読み取られ、登録apiを通じてアクセスするassetuniqueidサーバー（例：gs1",{"_index":1806,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["astropiota",{"_index":481,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiotaはastropiのクローンです。astropiは、iss（国際宇宙ステーション）でraspberri",{"_index":2050,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaはjavascriptで書かれており、sens",{"_index":2059,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaは、タングルを使用してローカル環境データを追跡するためにmamに接続されている国際宇宙ステーションからのastropiのクローンです。地球上で、astropiota",{"_index":2046,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["astropiotaはタングル上のローカル環境データを追跡するためにマスク認証メッセージング（mam）を使用します。地球上で、astropiota",{"_index":2054,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaを実行したい場合は、sshを介して対話するためにastropiotaのネットワークアドレスが必要です。raspberri",{"_index":2120,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["astropiotaを実行するには、正しいハードウェアとraspberri",{"_index":2064,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["astropiotaサンプルコードは、dav",{"_index":2061,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaプロジェクトで使用されているsens",{"_index":2156,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["astropiota送信者はsens",{"_index":2132,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiは、温度、湿度、その他のデータを検知するためにraspberri",{"_index":2051,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["atmel",{"_index":2171,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["attach",{"_index":1497,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["attachmenttimestamp",{"_index":382,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":945,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":496,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["attachtotangleapi",{"_index":987,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["attachtotangleエンドポイントはリソースを大量に消費します。結果として、attachtotangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、専用のプロキシサーバーをインストールして、ノードのプルーフオブワーク（pow",{"_index":914,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["attent",{"_index":2378,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["attiny88",{"_index":2172,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["audienc",{"_index":2409,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["authent",{"_index":1207,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["auto",{"_index":1111,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["autoconfirm",{"_index":436,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["autopeeringtcp/udpポート（14626",{"_index":1066,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["avail",{"_index":977,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/contribution/0.1/style-guide":{}}}],["avxまたはss",{"_index":926,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["avxベースのpow",{"_index":623,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["awesom",{"_index":1238,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["awesometestplugin",{"_index":1913,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["awsには、クラウド上でlinux",{"_index":1960,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awsまたはmicrosoft",{"_index":1637,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["axio",{"_index":1578,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["azur",{"_index":1638,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["aに100mi",{"_index":51,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["b+（b",{"_index":2078,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["background",{"_index":1654,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["background.svg",{"_index":1582,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["background.svgファイルと同じディレクトリにindex.j",{"_index":1583,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["badgerdbデータベースに保存されます。データベースディレクトリを保存するパスをdb",{"_index":1851,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["balanceev",{"_index":1399,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["balancesubscriptionrequest",{"_index":1398,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["base",{"_index":2243,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["bash",{"_index":2483,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["bazel",{"_index":1091,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["bazelを使ってビルドし、dock",{"_index":1090,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["becom",{"_index":2384,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["befor",{"_index":2257,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["behind",{"_index":2270,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["benefit",{"_index":2444,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["best",{"_index":719,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["beta1",{"_index":603,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":602,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":601,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":571,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["between",{"_index":721,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/contribution/0.1/style-guide":{}}}],["bin/hub/hub",{"_index":1304,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1332,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1448,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["biometr",{"_index":1206,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{}}}],["blake2",{"_index":1706,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1707,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["block",{"_index":2482,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["blue",{"_index":1151,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["board",{"_index":2069,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["bootstrap",{"_index":539,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1120,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1123,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bosch",{"_index":251,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["bounci",{"_index":560,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1147,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["box",{"_index":2376,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["branch",{"_index":2205,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["branchtransact",{"_index":381,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":946,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["branchtransactionとtrunktransactionフィールドで参照できるタングル内の2",{"_index":357,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["branchtransactionとtrunktransactionフィールドは、タングル内の2",{"_index":361,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュを参照して、トランザクション（子トランザクション）を他の2",{"_index":295,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["brazil",{"_index":2349,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["brief",{"_index":2437,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["bring",{"_index":2377,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["broadcast",{"_index":1124,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["broadcastandstor",{"_index":588,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":499,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":948,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":500,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broken",{"_index":2235,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["bt",{"_index":1945,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":898,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":869,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":870,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1146,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["build",{"_index":1253,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["build.gradleファイルにiotaledg",{"_index":566,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":565,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":889,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bullet",{"_index":2342,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["bundl",{"_index":362,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["bundles、addresses、tags、approve",{"_index":952,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["bundleフィールドの中で同じ値を持ちます。bundl",{"_index":343,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["burger",{"_index":2292,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["c",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1165,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["caddyfileファイルを編集して、powプロキシサーバを設定します。この例では、ローカルホストでpowプロキシサーバを実行しています。外部ネットワークからpowプロキシサーバにアクセスしたい場合は、urlをパブリックip",{"_index":930,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddyの設定オプションでdock",{"_index":1508,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["caddyはすべてのリクエストのログをrequests.log",{"_index":934,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddy実行可能ファイルと同じディレクトリにcaddyfil",{"_index":929,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["callback",{"_index":495,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["callbackeventlisten",{"_index":1865,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["capabl",{"_index":2472,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["capit",{"_index":2413,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["captur",{"_index":2090,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["card",{"_index":2336,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["care",{"_index":2428,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["case",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/contribution/0.1/style-guide":{}}}],["castl",{"_index":561,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["categori",{"_index":2338,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1322,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":484,"docTitle":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaがまだアクティブであることを確認した後で、cda",{"_index":1868,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaが必要です。送信者はiotaトークンを含む期限切れのcdaを必要とし、受信者はアクティブなcda",{"_index":1866,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaで残高の大部分を維持することをお勧めします。こうすることで、支払いをより速く、そしてより少ないトランザクションですみます。そのために、利用可能残高を新しいcda",{"_index":1877,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":1845,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをcda",{"_index":1881,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":1925,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":1872,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの最後の9文字はチェックサムで、アドレスとそのアドレスのすべての条件のハッシュ値です。トリニティやdevent蛇口はまだcdaをサポートしていないため、このチェックサムは、トリニティやdev",{"_index":1869,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":1871,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。故に、cda",{"_index":1867,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、送信する前にcdaを任意の形式にシリアル化できます。generatecda()メソッドは以下のフィールドを持つcdaオブジェクトを返します。cda",{"_index":1879,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":1875,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":1924,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":1880,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成し、利用可能残高の合計をそのcda",{"_index":1923,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するとき、cdaがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、cda",{"_index":1892,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaを作成するときには、cdaがアクティブか期限切れかを定義する次の条件を指定します。アクティブアドレスにはiotaトークンを預け入れることができますが、取り出すことはできません。逆に期限切れアドレスからはiota",{"_index":1840,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaを使用して、署名済みアドレスからの取り出しリスクを軽減します。送信者にiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、送信者にその期間の後にだけそのアドレスから取り出すつもりであることを知らせます。その結果、送信者は、cda",{"_index":1839,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値が切れる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":1900,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["certain",{"_index":2346,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["certif",{"_index":1169,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":621,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chang",{"_index":599,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/contribution/0.1/style-guide":{}}}],["channel",{"_index":2183,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["channelroot",{"_index":1819,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey&amp;gt",{"_index":1820,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["characterist",{"_index":2470,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["check",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["checkconsist",{"_index":950,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["checkconsistency(transact",{"_index":501,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checker",{"_index":2268,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["checksum",{"_index":534,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":1289,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["choic",{"_index":2477,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["choos",{"_index":2186,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["chrome、firefox",{"_index":1689,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["circuit",{"_index":2068,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":892,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["clean",{"_index":576,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["clearer",{"_index":2340,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["click",{"_index":2207,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["client.crt、client.key、およびca.crt）をハブサーバにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1337,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1341,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["cloud",{"_index":242,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["cloudflareなどのパブリックipfsゲートウェイを使用して、トランザクションハッシュを使用してipf",{"_index":1779,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["clu6afkw/clx6afkb",{"_index":2166,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cmd+スペースバーを押して、検索バーにtermin",{"_index":1981,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1328,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1235,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/contribution/0.1/style-guide":{}}}],["code（olc）のクローンです。iac",{"_index":1538,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["colon",{"_index":2415,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["color",{"_index":2339,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["combin",{"_index":2452,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["comma",{"_index":2417,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["command",{"_index":976,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/contribution/0.1/style-guide":{}}}],["command変数を別のapi",{"_index":855,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["comment",{"_index":2190,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["commit",{"_index":2233,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["commit/push",{"_index":2256,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["common",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["commun",{"_index":1451,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["compar",{"_index":2249,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["comparison",{"_index":720,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["compass",{"_index":1475,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1119,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["complet",{"_index":2389,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["complic",{"_index":2460,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["compon",{"_index":2469,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["compos",{"_index":1036,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1503,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compose.ymlファイルにあるシードでマークル木を事前に計算します。その結果、誰かがこのノードのurlを持った場合、dock",{"_index":1502,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":493,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["composeがあれば、dock",{"_index":1035,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["compress",{"_index":1591,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["compressor",{"_index":1595,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["comput",{"_index":2073,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/contribution/0.1/style-guide":{}}}],["concept",{"_index":2462,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["conceptu",{"_index":2445,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["config.ini",{"_index":769,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["config.json",{"_index":1099,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1674,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1673,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルに設定されています。googl",{"_index":1488,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1097,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["config/tools/ssl/caddyfileファイルの、your",{"_index":1506,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config/tools/tool",{"_index":1487,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config/tools/ディレクトリ内のファイルに設定情報を追加します。amazon",{"_index":1483,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["configur",{"_index":261,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["configurationに移動して、ノードのurlhttp&#x3a;//localhost:14265",{"_index":1496,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["confirmed.jsファイルでは、iota",{"_index":425,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["connect",{"_index":440,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["consid",{"_index":2352,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["consist",{"_index":2317,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["consol",{"_index":2261,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["consum",{"_index":1724,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contain",{"_index":2213,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["content",{"_index":2184,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["content.md",{"_index":2315,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["context",{"_index":2367,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["continu",{"_index":2255,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["contract.txt",{"_index":1569,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["contract.txtファイルと同じディレクトリにindex.j",{"_index":1570,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["contribut",{"_index":2181,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["control",{"_index":2202,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["convert",{"_index":1213,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["coordicid",{"_index":1027,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["coordin",{"_index":1556,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["coordinates.net",{"_index":1666,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["copi",{"_index":2209,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["core",{"_index":405,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["correct",{"_index":2225,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["correspond",{"_index":2296,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["cover",{"_index":2327,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["cpu",{"_index":1088,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/references/troubleshooting":{}}}],["cpuはavx",{"_index":927,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["creat",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/contribution/0.1/style-guide":{}}}],["createitemchannel",{"_index":1828,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createunsignedbundl",{"_index":1382,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["createunsignedbundle()関数がsignatur",{"_index":1383,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["createuserrepli",{"_index":1401,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["createuserrequest",{"_index":1400,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["cree",{"_index":2165,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cron",{"_index":779,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["crontab",{"_index":2091,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ctps1",{"_index":445,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["ctrl",{"_index":886,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1333,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1354,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["cube",{"_index":238,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["cultur",{"_index":2348,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["curl",{"_index":942,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":450,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":451,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1212,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["currentindex",{"_index":346,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドとバンドル内の最後のトランザクションを定義するlastindex",{"_index":342,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":409,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["cを押してrepl",{"_index":887,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1117,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["cを押します。それから、コマンドを再実行する前に、.envファイルのextra_compass_flag",{"_index":1514,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":805,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":631,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":475,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["d",{"_index":1038,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["daemon",{"_index":1136,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":299,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/references/glossary":{}}}],["dag）と呼ばれるデータ構造で、各トランザクションは、自分より前にある2",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["danceなどのweb",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/contribution/0.1/style-guide":{}}}],["danger:シードごとにアカウントインスタンスを1",{"_index":1858,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["dashboard",{"_index":1061,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["data",{"_index":1095,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["databas",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["data変数をasciitotryt",{"_index":394,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["dave",{"_index":2134,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1323,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":754,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["dbfiles.iota.org",{"_index":1022,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["dbに追加して更新するためのストレージrest",{"_index":1817,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbの認証情報、fixer",{"_index":1485,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":758,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["de",{"_index":2062,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":1315,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["debianベースのオペレーティングシステムを使用している場合は、このコマンドの前にsudo",{"_index":1474,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["debianベースのオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":1031,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["default",{"_index":2231,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["defin",{"_index":2473,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["delet",{"_index":1743,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deni",{"_index":1065,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["depend",{"_index":2260,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["dependencies.jarという.jar",{"_index":580,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["depth",{"_index":524,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45",{"_index":1094,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth、minweightmagnitude、delay、そしてmaxdepth",{"_index":1914,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["depthパラメータの値を減らします。iri",{"_index":970,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1098,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["describ",{"_index":2092,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/contribution/0.1/style-guide":{}}}],["descript",{"_index":2301,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["desktop",{"_index":1167,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["detail",{"_index":2475,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["determin",{"_index":2295,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["dev/ttyusb\\*を使用してusb",{"_index":2021,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1249,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["developブランチから新しいgit",{"_index":1236,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1248,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["devent",{"_index":1870,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devic",{"_index":1612,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["devnet",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/contribution/0.1/style-guide":{}}}],["devnet.thetangle.org",{"_index":418,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":434,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":417,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetでトランザクションを作成して送信します。devnetは、トークンが無料であること以外は、ほとんどmainnetと同じです。devnetに送信するトランザクションは、mainnet",{"_index":1589,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["devnetとmainnetを切り替えるには、providerフィールドをhttps&#x3a;//nodes.devnet.iota.org:443",{"_index":229,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["devnetと同じ構成設定を使用して、iri",{"_index":1082,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["devnetは、トークンが無料であることを除いて、mainnetとほぼ同じです。devnetに送信するトランザクションは、mainnet",{"_index":227,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":263,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルに接続されているため、mainnet",{"_index":1575,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetタングルに添付します。devnetは、トークンが無料であることを除いて、mainnetとほぼ同じです。devnetに送信するトランザクションは、mainnet",{"_index":1566,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetタングルエクスプローラはiac",{"_index":1564,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["devnetタングル上にあることを確認したい場合は、hashフィールドの値をコピーしてdevnet",{"_index":1532,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["devnetトークンは、mainnet",{"_index":1679,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1677,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":264,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードからトランザクションをリクエストすることを認識できるように、provid",{"_index":1574,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1640,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1848,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードのurlに変更し、最小重量値（mwm）を9",{"_index":230,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["devnetノードのzmqaddress",{"_index":1525,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1204,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":772,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":268,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":852,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":272,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":265,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp（動的ホスト構成プロトコル）サーバ（通常はルーター）から新しい内部ip",{"_index":1928,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1718,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["dictionary.json",{"_index":2274,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["differ",{"_index":2330,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["difficult",{"_index":2457,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["digest",{"_index":404,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["dikw",{"_index":1609,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["direct",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/contribution/0.1/style-guide":{}}}],["directori",{"_index":2212,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["discord",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/contribution/0.1/style-guide":{}}}],["discordの#helpおよび#fullnod",{"_index":1021,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1260,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":848,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/contribution/0.1/style-guide":{}}}],["display",{"_index":2300,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["displaytyp",{"_index":2365,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["distinct",{"_index":2341,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1172,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":1940,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["dnsを使用しますが、他にも多くのddn",{"_index":1939,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["do",{"_index":2210,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["doc",{"_index":543,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/contribution/0.1/style-guide":{}}}],["docker",{"_index":159,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerとdock",{"_index":1471,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacosまたはwindowsを実行している場合は、代わりにdock",{"_index":799,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerイメージをバックグラウンドで実行し、ホストデバイスからdockerコンテナにポートを転送し、コマンドラインフラグを使用してスパマー、zmq、およびダッシュボードプラグインを有効にします。これらのプラグインを使用すると、スパムトランザクションを自分のノードに送信したり、着信トランザクションを監視したり、web",{"_index":1034,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerグループに追加します。$us",{"_index":1138,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dockerコマンドを使用して独自のiotaネットワークを設定できます。このコマンドを実行すると、独自のiotaテストネットワークと2.7pi（最大量）のテストiota",{"_index":1465,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerコマンドを使用して自身のiota",{"_index":1452,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["dockerコンテナでiri",{"_index":792,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナでノードを実行するまたはlinux",{"_index":226,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["dockerコンテナには、iri",{"_index":800,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナにプライベートタングルを設定し、1",{"_index":1085,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["dockerコンテナに接続します。$containeridプレースホルダをあなたのコンテナid",{"_index":1042,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナも再起動するには、dock",{"_index":810,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":801,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":1032,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナを再起動するには、run",{"_index":1039,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナーをビルドするには、dock",{"_index":797,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、デバイスはiriノード用のlinux",{"_index":793,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":809,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1100,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["document",{"_index":1598,"docTitle":{"docs/contribution/0.1/style-guide":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/contribution/0.1/style-guide":{}}}],["domain",{"_index":1942,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["domain.comとyour@email.comのプレースホルダーをあなたが選んだドメイン名と",{"_index":1507,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["don't",{"_index":2206,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["download",{"_index":1173,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["duck",{"_index":1938,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":731,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dynam",{"_index":2373,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["dynamo",{"_index":1484,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dynamodb",{"_index":1479,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["e",{"_index":1199,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["e.g",{"_index":2368,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["each",{"_index":2217,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["easi",{"_index":2218,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["easier",{"_index":2401,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["east",{"_index":2355,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["edit",{"_index":1495,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/contribution/0.1/style-guide":{}}}],["editor",{"_index":2398,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["educ",{"_index":2325,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["embed",{"_index":2358,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["embold",{"_index":2421,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["emoji",{"_index":2344,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["enabl",{"_index":1058,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":675,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["encourag",{"_index":2178,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["encrypt",{"_index":1500,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["end",{"_index":2387,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["endpoint",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["energi",{"_index":1599,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["engag",{"_index":2345,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["english",{"_index":2104,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["enhanc",{"_index":2272,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["enter",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["entri",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":709,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["enviro",{"_index":1527,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":877,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1521,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["error",{"_index":1434,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{},"docs/contribution/0.1/style-guide":{}}}],["errorcod",{"_index":1435,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["errorイベントを購読します。error",{"_index":1920,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["especi",{"_index":2458,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["essentialパッケージからgcc",{"_index":922,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["ev",{"_index":480,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":882,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["even",{"_index":2406,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["event",{"_index":2375,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["event_logger.go",{"_index":1882,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventlistenerインターフェースを実装しており、eventmanagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のeventlisten",{"_index":1909,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":1864,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":1883,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["everyon",{"_index":2179,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["evrythngがiotaをどのように使用しているかについての詳細を調べるにはiota",{"_index":982,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["ev）の充電料金をiota",{"_index":477,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exampl",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["example&lt",{"_index":644,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":642,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":174,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1164,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["exist",{"_index":2196,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":1902,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールドを持つcda",{"_index":1901,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールド値を持つcda",{"_index":1897,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expectedamount",{"_index":1843,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["explain",{"_index":2422,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["explor",{"_index":412,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["exportedaccountstate構造体をstore.importaccount",{"_index":1891,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["express",{"_index":2277,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["extens",{"_index":2400,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["facad",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["failur",{"_index":2396,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fals",{"_index":423,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":2014,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["featur",{"_index":2468,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["feature/mi",{"_index":1237,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1239,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1222,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["feed",{"_index":2364,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fenc",{"_index":2360,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fetcher.j",{"_index":1462,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["fetcher.jsファイルに、sender.j",{"_index":1463,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["fetchtemp.j",{"_index":1522,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["fetchtemp.jsファイルとzmqwatcher.jsファイルはモジュールとしてエクスポートされ、index.j",{"_index":1526,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["few",{"_index":2426,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fghjklmnopqrstuvxwyz",{"_index":1539,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["field",{"_index":2366,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fijterのhigh",{"_index":2063,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1139,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/contribution/0.1/style-guide":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1115,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["find",{"_index":2197,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["finder",{"_index":1563,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["findtransact",{"_index":951,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["findtransactionobject",{"_index":586,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":502,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":503,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1834,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":1950,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["first",{"_index":2259,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fixer",{"_index":1480,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["flink",{"_index":866,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":867,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":864,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["float",{"_index":2289,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["flow",{"_index":2441,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["folder",{"_index":2280,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["follow",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/contribution/0.1/style-guide":{}}}],["footer",{"_index":2291,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["fork",{"_index":537,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/contribution/0.1/style-guide":{}}}],["form",{"_index":2439,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["format",{"_index":2322,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["forward",{"_index":1952,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["foundat",{"_index":641,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["fragment",{"_index":1384,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["framework",{"_index":1225,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["frustrat",{"_index":2385,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["function",{"_index":437,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["fund",{"_index":2395,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["g",{"_index":1345,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["gateway4フィールドの値をあなたのゲートウェイipアドレスに置き換えます。アドレスフィールドで、スラッシュ（/）の左側の値をあなたのlinuxサーバの内部ip",{"_index":1934,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gcc、clang、または@iota_toolchain",{"_index":1285,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["gccでインストールできます。linux（ubuntu",{"_index":920,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gccやgo",{"_index":1054,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc）を使ってgccをインストールすることができます。windowsの場合は、tdm",{"_index":919,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc：macosの場合は、homebrew（brew",{"_index":918,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gener",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/contribution/0.1/style-guide":{}}}],["generate_ca.sh",{"_index":1321,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1331,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1327,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":531,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":897,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["getaccountdata",{"_index":596,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":504,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1403,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getaddressinforequest",{"_index":1402,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbal",{"_index":953,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1405,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbalancerequest",{"_index":1404,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbalances(address",{"_index":505,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":293,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["getbalancesエンドポイントを呼び出してシードの総残高を取得します。以前にiota",{"_index":1127,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["getbundl",{"_index":593,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":507,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1374,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1407,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1406,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getinclusionst",{"_index":422,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":508,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":589,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":510,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":587,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":420,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":431,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":511,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":954,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":512,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":399,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":400,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":513,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.jsとしてiota.lib.j",{"_index":2109,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":514,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":784,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":813,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":955,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettips(\\[callback",{"_index":515,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":516,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":585,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":702,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":517,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":594,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":956,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettrytes(hash",{"_index":519,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1409,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1408,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["get呼び出しを使用して、ページサイズ10のページ5",{"_index":1747,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ginkgo",{"_index":635,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":639,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":761,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/contribution/0.1/style-guide":{}}}],["github",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":1874,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":738,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1256,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1080,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":1272,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":741,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":739,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["give",{"_index":2250,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["glossari",{"_index":2476,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["gnu/linux",{"_index":2084,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":106,"docTitle":{"docs/iota-go/0.1/README":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["goal",{"_index":2478,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":640,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":472,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["googl",{"_index":1555,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/contribution/0.1/style-guide":{}}}],["googleアカウントでのoauth",{"_index":1639,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1693,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1685,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1690,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1694,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath",{"_index":923,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopathではない場所にgoshimm",{"_index":1055,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":616,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gopath環境変数内のディレクトリではないディレクトリに、iotacaddyのgithub",{"_index":924,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["goshimm",{"_index":647,"docTitle":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}},"docBody":{"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["goshimmerは、coordicideにつながるiotaネットワークの進行中のプロトタイプです。coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、iotaネットワークを分散化することができます。この目標を達成するために、goshimmerはそれぞれが特定の役割を持つモジュールで構成されています。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":1023,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["goshimmerは、コーディネーターなしでiotaネットワークのプロトタイプを実装しているオープンソースのgo",{"_index":648,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["goshimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":1028,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gov.uk",{"_index":2410,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["goでのpow",{"_index":633,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":473,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":614,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goディレクトリを作成します。$usernameプレースホルダーを現在のlinux",{"_index":2038,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":613,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goプログラミング言語の少なくともバージョン1.12",{"_index":917,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["goプログラミング言語を使用するアプリケーションを作成または実行するには、go",{"_index":2036,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["gp",{"_index":1664,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1180,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["grammar",{"_index":2223,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["graph",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["grid",{"_index":1600,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["grpc",{"_index":1263,"docTitle":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["grpcc",{"_index":1343,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpccコマンドでgrpcc",{"_index":1348,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpcとprotobufに慣れていない場合は、grpc",{"_index":1395,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":1314,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのiotaトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1340,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバを提供します。ハブは、対話するために使用できるgrpc",{"_index":1313,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":1281,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["guard（gpg",{"_index":1296,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["guid",{"_index":2177,"docTitle":{"docs/contribution/0.1/style-guide":{}},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["guidelin",{"_index":2430,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["h",{"_index":1075,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["h2",{"_index":2374,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["h3",{"_index":2335,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["hash",{"_index":380,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["hash(hash(ノード1",{"_index":312,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(hash(リーフ1",{"_index":308,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(hash(リーフ3",{"_index":310,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(ノード2",{"_index":313,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(リーフ2",{"_index":309,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(リーフ4",{"_index":311,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hat",{"_index":2053,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hat\"というメッセージがsens",{"_index":2114,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hat/9",{"_index":2174,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hatからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをjson形式でタングルのmamチャネルに送信します。astropiota受信者はmamチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、astropiota",{"_index":2133,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatがhdmi",{"_index":2169,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hatが機能していることを確認するには、python3",{"_index":2113,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatでは、python",{"_index":2112,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatには慣性計測装置（imu",{"_index":2057,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatのl",{"_index":2115,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["hatの気温と現地の気温を比較して、自分の位置に合わせて調整できます。mam",{"_index":2144,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度は現地の気温より約13度高くなっています。sens",{"_index":2143,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度センサーはraspberri",{"_index":2141,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatをastropiotaパッケージにインストールします。sens",{"_index":2111,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatデータを以下のjson",{"_index":2060,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatバージョン1.0",{"_index":2080,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["haven't",{"_index":2328,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["head",{"_index":2245,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["header",{"_index":2303,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["heart",{"_index":2201,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["hello",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1076,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/contribution/0.1/style-guide":{}}}],["helpフラグを付けてiri",{"_index":1007,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["high",{"_index":478,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["highlight",{"_index":2265,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["hint",{"_index":2380,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["histori",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["hold",{"_index":2405,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["home",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/contribution/0.1/style-guide":{}}}],["home.md",{"_index":2297,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["home/binディレクトリを$path",{"_index":1287,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["host",{"_index":2009,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["html/css",{"_index":1657,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["hts221",{"_index":2161,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["http",{"_index":536,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1125,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["http&#x3a;//localhost:8081/dashboard",{"_index":1070,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["httpconnector",{"_index":1907,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//certification.iota.works/fazlsjrleppbrvitopbzntivejwpeqarioehnmhbeojdgablkpyihwpmajwvztjxfiafgsvxpgocbq999",{"_index":1587,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["https&#x3a;//doc",{"_index":2369,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["https&#x3a;//github.com/muan/emojilib/blob/master/emojis.json",{"_index":2357,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["https&#x3a;//github.com/richardstechnotes/rtimulib2",{"_index":2175,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1745,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1742,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1746,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1658,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1659,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":270,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":284,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":276,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//projects.raspberrypi.org/en/projects/get",{"_index":2173,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//thetangle.org",{"_index":219,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["https&#x3a;//www.gp",{"_index":1665,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsサポートを維持したい場合は、自分の証明書とキーを使用するためにcaddyの指示に従います。それから、証明書とキーファイルのボリュームをproxyオブジェクトのvolumesの下のdock",{"_index":1512,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["httpsプロキシサーバを設定したい場合は、nginx",{"_index":841,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["https接続を介してiri",{"_index":1492,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":836,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":1143,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":1312,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1311,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1396,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hub_address",{"_index":1438,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["hub_address_bal",{"_index":1439,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["hub_addressテーブル行のハブアドレスに対して、is_cold_storageフィールドを1",{"_index":1370,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["hub_addressテーブル行のハブアドレスのis_cold_storageフィールドを0",{"_index":1372,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1410,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1411,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hubにはsignbundle()grpc",{"_index":1385,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["hunspel",{"_index":2269,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["i'm",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1246,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iac",{"_index":1535,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacでタグ付けされているトランザクションを見つけて、iac",{"_index":1561,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacにエンコードするには、緯度と経度の座標が必要です。この例では、googl",{"_index":1554,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacの8番目のトライトの後に来る区切り文字は、+ではなく9",{"_index":1540,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacはopen",{"_index":1536,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacはトライトで構成されているため、iacをトランザクションのtag",{"_index":1543,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacは以下の3つの部分で構成されています（区切り文字9",{"_index":1544,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacをパディングするために0の代わりにa",{"_index":1541,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacを使用することで、トランザクションにエリアをタグ付けし、他の人が同じようなiac",{"_index":1534,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacファインダユーティリティを使用して、新しいiac",{"_index":1562,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["ibc",{"_index":1790,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["id",{"_index":1026,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ident",{"_index":2232,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["identifi",{"_index":2481,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["id、管理者id",{"_index":1580,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1661,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idは特定のセンサーのために他のすべてのパラメータの中で一意であるべきです。idは必ず英字（a",{"_index":1668,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idをstore.exportaccount",{"_index":1888,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["idをコピーし、それを使ってノードのログを読み取ります。$containeridプレースホルダをあなたのコンテナid",{"_index":1041,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1698,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":1906,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":1853,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1696,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfigコマンドでipアドレスを見つけることができます。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":2028,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ifconfigコマンドを実行します。プログラムはすべてのネットワークインタフェースと与えられたipアドレスを返します。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":2005,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["illegalargumentexcept",{"_index":1141,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["immut",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["import",{"_index":2391,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["imu",{"_index":2058,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["includ",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/contribution/0.1/style-guide":{}}}],["index",{"_index":532,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1519,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{}}}],["index.md",{"_index":2311,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["inetip",{"_index":1977,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["info",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["info:depth",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["info:github",{"_index":1455,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":2006,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":824,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:window",{"_index":1989,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:このテストトークンはdevnet",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:最小重量値（minimum",{"_index":1390,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["info:無料のspamnet",{"_index":278,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["inform",{"_index":2379,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["init",{"_index":491,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initiatetransf",{"_index":595,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":490,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["input",{"_index":968,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["instal",{"_index":577,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/contribution/0.1/style-guide":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1252,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["instead",{"_index":2485,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["int128",{"_index":630,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":627,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["interfac",{"_index":2011,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interfacesをクリックしてsshを有効にし、putti",{"_index":2106,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["interruptattachingtotangl",{"_index":959,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["introduc",{"_index":2466,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["introduct",{"_index":2438,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["invalid",{"_index":967,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["io",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1233,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1234,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["iota.d",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iota.j",{"_index":1628,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iota.jsのソースコードとドキュメント：https&#x3a;//github.com/iotaledger/iota.j",{"_index":2049,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":538,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":393,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":401,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota/bundl",{"_index":1377,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/convert",{"_index":1379,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/cor",{"_index":1378,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/core、@iota/converter、および@iota/tryt",{"_index":1590,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iota/coreパッケージと@iota/area",{"_index":1553,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iota/ipf",{"_index":1762,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":1916,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota/poex",{"_index":1567,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["iota/transact",{"_index":1380,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota1です。このデバイスは、iota",{"_index":239,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iota://uriで始まり、その後に90",{"_index":1196,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1198,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["iotaapi",{"_index":1904,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":598,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotacaddy/caddi",{"_index":925,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iotacaddy/caddyディレクトリにcaddi",{"_index":928,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iotaledger/document",{"_index":2241,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["iotaledger/documentation@develop",{"_index":2244,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":544,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaとiot",{"_index":233,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaには、3",{"_index":256,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":288,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaのチュートリアルやガイドの多くはlinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でlinux",{"_index":1955,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["iotaの使用経験がほとんどないかまったくない場合は、iota",{"_index":1078,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaの公式ウォレットです。このウォレットは、データとiota",{"_index":1142,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{}}}],["iotaの最も重要な利点の1",{"_index":1531,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["iotaの目標は、モノのインターネット（iot",{"_index":234,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":442,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":456,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名スキームを使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵を使用してバンドルに1回署名することは安全です。同じ秘密鍵で異なるバンドルに署名すると、攻撃者が秘密鍵を総当たり攻撃し、アドレスからiotaトークンを盗む可能性があります。そのため、ユーザーがアドレスから取り出すと、そのアドレスは使用済みとみなされ、2",{"_index":1274,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaはwinternitzワンタイム署名スキーム（w",{"_index":330,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":302,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":390,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":386,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaは、iotaネットワーク内のデバイスがイミュータブルなデータと価値（iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、qubicと呼ばれる独自のスマートコントラクトソリューションを開発しています。iotaスマートコントラクトは、特定の条件が満たされた場合の資金の単純な譲渡を超えます。qubicの野望は、スマートコントラクトを許可するだけでなく、iot",{"_index":254,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaは、さまざまなデバイス間でデータや価値（iota",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":57,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、バンドルに署名するためにwinternitzワンタイム署名方式を使用します。その結果、各署名は秘密鍵の約半分を公開します。秘密鍵でバンドルに一度署名するのは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":1269,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaは、専売のシステムを統合することなく、回収可能資産に関する情報をシームレスに収集および共有するための解決策を提供します。情報を収集している間、iotaはセカンドレイヤー技術のmam",{"_index":1794,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaは、暗号化された方法でデータと価値（iotaトークン）を転送することを可能にするプロトコルです。そのため、iota",{"_index":1926,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["iotaはオープンソーステクノロジーであるため、誰でも自由に独自のiotaネットワークを実行して公開できます。プライベートiota",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaはバンドルに署名するためにwinternitzワンタイム署名方式を使用しています。この署名方式は、アドレスから一度だけ安全にiotaトークンを取り出せることを意味しています。よって、常にアドレスから全残高を取り出す必要があります。残高の一部だけを他の人に転送したい場合は、残りの残高を自分の未使用のアドレスの1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaはパーミッションレスです。つまり、誰でもネットワークを使用して支払いをしたり、データを送信したりできます。サインアップしたり、個人情報を提供したり、サブスクリプションを支払う必要はありません。代わりに、iota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは無許可型dlt",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをクラウドiot環境（aw",{"_index":240,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1602,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":597,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用してピアツーピア（p2p",{"_index":1710,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["iotaを使用するために必要なのはシードのみです。これはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaを自身のアーキテクチャーに統合するのを手伝って欲しい場合は、iota財団のチーム（integrations@iota.org",{"_index":997,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1259,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1687,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1688,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエリアコードマップには、googl",{"_index":1482,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iotaエリアコード（iac）は、iota",{"_index":1533,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":397,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してdevnet",{"_index":1558,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":406,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":391,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":392,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":468,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":895,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaコミュニティは、さまざまな言語でmam",{"_index":250,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaタングルおよびmamチャネルへのアクセスに必要な情報を保存する機能を備えて、既存の資産リポジトリを管理システムの一部として拡張します。ibcsグループの場合、これはibc",{"_index":1821,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルおよび他のiotaテクノロジを使用して、ibc",{"_index":1789,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1606,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルと、あなたが実行しているinterplanetari",{"_index":1760,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iotaタングルに公開します（mam.attach()）。iotaはトライトを使用しているので、mamペイロードをタングルに送信する前にトライトに変換して（asciitotrytes(json.stringify(data))）mamメッセージを作成する（mam.cr",{"_index":1830,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルを使用してデータをmam",{"_index":1631,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテクノロジーについて簡単に説明し、独自のアプリケーションでiota",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaテクノロジーは、このようなアーキテクチャにおいて有利です。なぜなら、iota",{"_index":1717,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaデータトランザクションの送信には、クライアントが暗号資産（iota",{"_index":218,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":459,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトランザクションの履歴を含むイミュータブルなデータ構造です。iota",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["iotaトランザクションを含むイミュータブルなデータ構造です。iota",{"_index":298,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1205,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1441,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":1271,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンと同数だけiota",{"_index":1364,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1118,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaトークンの値が、iota",{"_index":665,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":667,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの総供給量は(333",{"_index":443,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量、トランザクションに追加したいタグ、そしてトークンを送信するアドレスを指定するtransf",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンの量、送信するメッセージ、および送信先のアドレスを指定するtransf",{"_index":1593,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":1844,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaトークンの量があります。この場合は1,000",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":668,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがiotaトークンを自分のハブアドレスの1",{"_index":1261,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがiotaトークンを自分のハブアドレスの1つに預け入れると、スイープと呼ばれるプロセスでユーザーのiotaトークンがハブ所有者のアドレスに転送されます。このようにして、ハブ所有者は、ユーザーが取り出しを要求するまでユーザーのiota",{"_index":1144,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{}}}],["iotaトークンはiota",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaトークンは転送されません。現時点では、zmqエンドポイントはtx",{"_index":1074,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":464,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1676,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをハブに預け入れられるようにするアプリケーションを構築できます。ユーザーがiotaトークンを預け入れると、ハブは残高をデータベースに記録します。次に、ハブはそれらのiotaトークンをハブ所有者のiotaアドレスに転送します。このようにして、ハブ所有者はiotaトークンを管理し、iota",{"_index":1262,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンをハブの外部に保存するには、iota",{"_index":1373,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンをハブの外部に保存するには、ハブ所有者のアドレスの1つから新しいコールドウォレットアドレスにiota",{"_index":1369,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンをハブアドレスに預け入れるか、ハブアドレスから取り出すと、ハブはそれらの転送を1つのスイープに結合します。取り出しの合計が預け入れの合計よりも少ない場合、ハブは残りの残高をハブ所有者に属する新しいアドレスに転送します。預け入れの合計が取り出しの合計よりも少ない場合、ハブはハブ所有者のアドレスのiota",{"_index":1273,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":260,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスの1",{"_index":1356,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["iotaトークンを保持しているので残高があります。iotaトークンを使うには、シードを使って、iotaトークンを保持しているアドレスを所有していることを証明する必要があります。シードには数字9と大文字のa〜z",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを転送するには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名します。次に、署名の結果がトランザクションのsignaturemessagefrag",{"_index":333,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":1270,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":396,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを受信者のアドレスに預け入れ、またはiota",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-transaction":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":447,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトークンを持つアドレスを含む必要はありません。81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":1559,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1437,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":259,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送して欲しい場合、送信者にあなたのcda",{"_index":1878,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンを転送することにより、ユーザーが同じアドレスから2",{"_index":1275,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンを転送するには、iotaトークンを取り出すための入力トランザクションと、トークンを新しいアドレスに預け入れるための出力トランザクションが少なくとも1",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-transaction":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するようにノードに指示することができる1",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1つだけです。二重支出（同じiotaトークンを2",{"_index":385,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":416,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを選択した取り出しアドレスに転送するスイープを作成します。1",{"_index":1278,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":356,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":666,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークン量の記録が含まれています。iotaトークンはユーザーのアドレスには保存されません。代わりに、ユーザーのiotaトークンはスイープ中にハブ所有者のアドレスに転送されます。ユーザーが後でuserwithdrawrequestコマンドをトリガーした時に、ハブはユーザーのiota",{"_index":1268,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークン（およびqub",{"_index":1795,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaネットワークで、運用者が知っているノードだけを含みます。プライベートタングルは、パブリックiotaネットワークと同じテクノロジを使用しますが、コンパスと呼ばれるコーディネータのオープンソース実装を実行してプライベートタングルを制御します。コンパスを使用すると、プライベートタングルに添付されているトランザクションについてノードが合意に達することができます。コンパスが停止した場合、iota",{"_index":1077,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaネットワークであり、既知のノードのみが含まれます。このタイプのネットワークは、制御することを除いて、パブリックiota",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaネットワークでトランザクションを送信するには、シードと呼ばれる秘密のパスワードが必要です。シードにより、シードから導出されたすべてのアドレスにアクセスできます。これらのアドレスはiotaトークンを保持しているので、iotaネットワーク内のすべてのノードに保存され、最新の状態に保たれる残高を持っています。iotaトークンを使用するには、トランザクションを作成し、そのトランザクションが入っているバンドルに署名して、iota",{"_index":318,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークとの同期を開始します。ノードに同期する時間を与えるか、iri",{"_index":815,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":457,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaネットワークによって受け入れられる前に、トランザクションは確定されなければなりません。ユーザーが自分のアドレスの1つにiotaトークンを預け入れたとき、またはハブ所有者が取り出しを発行したときに、トランザクションはペンティぐ状態のままになります。そのため、確認の遅れを避けるために、hub",{"_index":1264,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクション（アドレスからの取り出し）または出力トランザクション（アドレスへの預け入れまたはゼロトークントランザクション）のいずれかになる単一の操作です。ノードに1",{"_index":341,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["iotaネットワークの1つであるdevnetのノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。ノードがなければ、iota",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードがコピーを保持し、iota",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、すべてのノードがタングルのコピーを保存する相互接続されたノードの集まりです。各iotaネットワークのタングルには異なるトランザクションが含まれているため、iota",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションのタングルと呼ばれる台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントは、データまたはiotaトークンのいずれかを転送するトランザクションを作成し、トランザクションを検証のためにノードに送信するデバイスです。シードはクライアントにアドレスへのアクセス権を与えます。アドレスには残高があり、残高がアドレス中のiotaトークンの量を定義します。iota",{"_index":287,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaネットワークは、独自のmwmを強制します。devnetでは、mwmは9です。しかし、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":1393,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iotaネットワークは、誰でも参加してトランザクションを送信できるネットワークです。パブリックiotaネットワーク内のすべてのトランザクションは透過的です。誰でもすべてのアドレスのトランザクションと残高を見ることができます。タングルエクスプローラと呼ばれるアプリケーションでこれらを見ることができます。これらのアプリケーションは、タングルからデータを取得して、誰でも閲覧できるようにパブリックweb",{"_index":257,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークはそれぞれのmwmを強制します。devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiotaネットワークではアドレスの残高を更新してはいません。これらのトークンを使用できるのは、devnet",{"_index":172,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":788,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントライブラリを介してノードと対話できます。トリニティなどの多くのiotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワークを構成するデバイスです。他の分散システムと同様に、iotaネットワーク内のノードは相互に接続されているため、相互にゴシップ情報があります。したがって、1つのノード（世界のどこにいても）がトランザクションを受信すると、ネットワーク内の他のすべてのノードに転送されます。このようにして、同じiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":658,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iotaネットワーク上で実行するiri",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":458,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュ値が事前に定義されたmwmと同じかそれ以上の数の0トリットで終わるトランザクションを受け入れます。トランザクション末尾の0の個数がmwm",{"_index":373,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のタングルへの読み書きアクセス権を持つデバイスです。すべてのノードはタングルのコピーとiotaトークンを保持するアドレスの記録を保存します。クライアントはiota",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":290,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":664,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaノードへのiota",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaノードをデプロイし、iota",{"_index":220,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotaプロトコルでは、iotaトークンをシードから導出されたアドレスに送信する必要があります。これらのアドレスからは一度だけiotaトークンを取り出すことができます。故に、すべての人が一度もiotaトークンを取り出していないアドレスへ預け入れることが重要です。ただし、iotaトークンを取り出す前に、誰がいつiota",{"_index":1838,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコルでは暗号化を使用して、シードからほぼ無制限のアドレスを導出することができます。アドレスは一般公開されているので、データやiota",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["iotaプロトコルの複雑さを抽象化し、支払いの実行に集中できるようにします。アカウントには、2",{"_index":1837,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコル内のkeccak",{"_index":319,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1607,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotaユーティリティweb",{"_index":1191,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["iotaライトウォレットは、http&#x3a;//localhost:14265でiri",{"_index":1493,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1183,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1678,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1680,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団がiota",{"_index":981,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["iota財団が実行しているエントリノードとの自動ピアリングによってネットワークに参加します。iota財団のエントリノードと自動ピアするには、自動ピアリングポートとゴシップポートがノードに転送されていることを確認する必要があります。デフォルトでは、これらのポートは14666と14626",{"_index":1033,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1145,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["iota財団のgithub",{"_index":1161,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のgui",{"_index":1833,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iota財団のwebサイト、iota",{"_index":750,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1623,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団の住所の緯度と経度の座標は52.529510、13.413018です。これらの座標のiacは、nphtqorl9xk",{"_index":1542,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":267,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":282,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1619,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団は、誰でもがノードを実行でき、ノードに接続でき、トランザクションの読み取り/書き込みができる2",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1632,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1250,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1620,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1624,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotなど）に統合する最善の方法についても取り組んでいます。この統合により、タングルを介して物理デバイス間でiot",{"_index":243,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":611,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotやgoogl",{"_index":241,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":296,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotデバイスはiota",{"_index":235,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["iot（internet",{"_index":1621,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":831,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipf",{"_index":1755,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsにアップロードします。ipfsはipf",{"_index":1768,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsにファイルを保存してから、イミュータブルで永続的なipf",{"_index":1756,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ipfsは分散webであるため、ipf",{"_index":1780,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、iota",{"_index":1783,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsハッシュを使ってipf",{"_index":1776,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfs）からのトランザクションハッシュを使用してメタデータ、sha256ハッシュおよびipf",{"_index":1775,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipv4",{"_index":2030,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":2013,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6を使用する場合は、ssh",{"_index":2007,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipを取得するには多くの方法がありますが、このガイドはその1",{"_index":1930,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":832,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":830,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスが必要です。不幸なことに、インターネットサービスプロバイダはあなたのルーターに動的ipアドレスを与えることが多く、それは定期的に変わります。その結果、デバイスのipアドレスが変わると、デバイスへの接続はすべて失われます。したがって、動的ipアドレスにリンクされているパブリックドメイン名を取得するには、動的dns（ddns）サービスを使用する必要があります。ddnsを使用すると、デバイスは実際のパブリックipを数分ごとにddn",{"_index":1937,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスでポートが開いていることを確認して、ルールをテストします。ルールをテストするには、yougetsignal.com",{"_index":1954,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバのipアドレスに変更します。sign",{"_index":1338,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ipアドレスの特定のポートからローカルデバイスの内部ip",{"_index":1944,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスはinetの隣にあります。127.0.0.1のipアドレスは無視します。127.0.0.1はあなたのローカルホストです。ネットマスクの場合、255は8ビットを表します。したがって、この例のネットマスク長は3\\*8で、長さは24",{"_index":1933,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをduck",{"_index":1943,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":833,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスを変化させないようにする必要があります。それ以外の場合は、ip",{"_index":1929,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスを見つけたら、sshを通してsbc",{"_index":2016,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスを見つけた場合は、自分のアドレスが見つかるまですべてのip",{"_index":2035,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス内のすべての場所は8ビット（256ステート）を取り、ネットマスクは3バイトに設定されているため、ネットマスクは24（3×8=24",{"_index":2032,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス（ルーターのip",{"_index":1931,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["iri",{"_index":184,"docTitle":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["iri.conf",{"_index":823,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":935,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":1017,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":682,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":1019,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":781,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":678,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":677,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":736,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":763,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":653,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":780,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを構築済みのdock",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":737,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriソフトウェアを実行すると、お使いのデバイスがタングルに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":725,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":463,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":998,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":835,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":661,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":1307,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":680,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":679,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":1010,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":659,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":663,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1105,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":971,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":979,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":978,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":787,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":492,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":651,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1102,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":791,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurl",{"_index":1511,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":850,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":849,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":674,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":652,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードの台帳にあるトランザクションによって参照されているトランザクションですが、iri",{"_index":662,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードの台帳には多くのトランザクションが蓄積され、多くの場合、iri",{"_index":842,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":581,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":650,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1106,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":660,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":689,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":847,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":890,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":794,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを維持しているため、タングルが動作しているp2pネットワーク内の近隣ノードと通信できます。グリッドが自身のiriノードを実行することで、残りのエンティティはlanネットワーク内に存在でき、グリッドのみが同期のために残りのタングルへのwanアクセスを必要とします。代替手段は、すべてのエンティティがタングル上のiriノードに直接wan",{"_index":1719,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iriノードを走らせる（dock",{"_index":182,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":826,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri構成オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":1000,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":804,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iota",{"_index":645,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjavaソフトウェアです。現在iriはクライアントがiotaトークンを相互に転送できるiota",{"_index":649,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iri：latest",{"_index":808,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":427,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":520,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["issu",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/contribution/0.1/style-guide":{}}}],["it'",{"_index":2450,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["item",{"_index":2294,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["ixi",{"_index":1002,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":778,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["i²c",{"_index":2157,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ja",{"_index":483,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":747,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":579,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":102,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["java_max_memori",{"_index":767,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":766,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":765,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1656,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascript、react、node.j",{"_index":1757,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascript、react、nodej",{"_index":1798,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javascript、react、およびnodej",{"_index":1763,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascriptでmam",{"_index":1630,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["javascriptなどのクライアントライブラリでは、通常、provid",{"_index":223,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":470,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptクライアントライブラリを使用してバンドルを作成および送信しますが、go、java、python",{"_index":1376,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javascriptライブラリを使用して、iacでタグ付けされたゼロトークントランザクションを作成します。次に、そのトランザクションをdevnet",{"_index":1552,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["javascriptライブラリを使用して、回収可能資産にid",{"_index":1797,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javaがインストールされていることを確認するには、java",{"_index":745,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":879,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":471,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":584,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":757,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":768,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":756,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":740,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":762,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":742,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":746,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":802,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":764,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":562,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2096,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie\"（2016",{"_index":2085,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessie.img",{"_index":2089,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessieにはnoderedが付属していますが、nod",{"_index":2107,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jitpack",{"_index":572,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["join",{"_index":2182,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["jota",{"_index":573,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":541,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1889,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/contribution/0.1/style-guide":{}}}],["jsonオブジェクトを受信すると、ファイルはipf",{"_index":1772,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["jsonシードステートをexportedaccountst",{"_index":1890,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1093,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1157,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["keepass",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":67,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kerl",{"_index":323,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":452,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["kernel",{"_index":2041,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["keyboardをクリックし、unit",{"_index":2103,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":905,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":904,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":907,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":403,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1650,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["km",{"_index":1546,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["kmの地域を表しています。たとえば、npht",{"_index":1547,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["know",{"_index":2191,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["knowledg",{"_index":2180,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["known",{"_index":1049,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["label",{"_index":2288,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["lambdaなどのサーバレスアーキテクチャのインスタンスで、iotaクライアントライブラリの1",{"_index":995,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["land",{"_index":2337,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["lang",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1214,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/contribution/0.1/style-guide":{}}}],["lan）またはワイドエリアネットワーク（wan",{"_index":1753,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lastindex",{"_index":347,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["latest",{"_index":419,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["latestmilestoneindex",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["latestmilestoneindexフィールドがdiscordから取得したlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindex",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindex",{"_index":790,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":655,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":714,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindex",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":656,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、ノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":789,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["layers_calcul",{"_index":1096,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["lead",{"_index":2393,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["led",{"_index":2070,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ledger",{"_index":1148,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["ledパッケージをインポートします。最後に、imuデータを検出するためにimu",{"_index":2137,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["left",{"_index":2312,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["legion",{"_index":559,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":83,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["let'",{"_index":1499,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["letter",{"_index":2414,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["level",{"_index":2285,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートをleveldbデータベースのleveldown",{"_index":1918,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":2116,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["light",{"_index":1129,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["limit",{"_index":980,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["line",{"_index":2278,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["link",{"_index":469,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/contribution/0.1/style-guide":{}}}],["lint",{"_index":2399,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["linux",{"_index":62,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":872,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxでノードを実行する、またはdock",{"_index":986,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["linuxとmaco",{"_index":1057,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["linuxはオープンソースのオペレーティングシステムで、ディストリビューションと呼ばれるパッケージで提供されています。各linux",{"_index":1956,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxまたはmacosで実行するには、.\\\\caddyを実行します。windows上でこのファイルを実行するには、ダブルクリックするか、コマンドプロンプトで.\\\\caddi",{"_index":932,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["linuxオペレーティングシステムを使用している場合は、このガイドのコマンドの前にsudo",{"_index":796,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバ。windowsまたはmacosオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1086,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["linuxサーバがssh",{"_index":1979,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがsshプロトコルを使用したメッセージを理解する前に、linuxサーバをssh",{"_index":1973,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがなく、windowsまたはmaco",{"_index":1927,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバでiri",{"_index":724,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバで、ターミナルウィンドウを開いて、nginx",{"_index":818,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":782,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバに接続するには、セキュアシェル（ssh",{"_index":1971,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバのip",{"_index":1985,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバの現在の内部ip",{"_index":1932,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバへのssh",{"_index":1978,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを起動し、ターミナルを開いて、linuxサーバのip",{"_index":1976,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを閉じ、リストからlinux",{"_index":1975,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバ（このガイドではubuntu",{"_index":729,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1178,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["linuxディストリビューションの1つがubuntuです。ubuntu",{"_index":1957,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxディストリビューションのweb",{"_index":2003,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linuxディストリビューションはオープンソースであり、linux",{"_index":1958,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linux仮想マシンを実行したくない場合は、amazonなどの会社からクラウドコンピュータの使用を借りることができます。この方法を使うことで、ポート転送やメモリ不足を心配する必要はありません。amazon",{"_index":1959,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["list",{"_index":2299,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["load",{"_index":1912,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["local",{"_index":992,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["local_snapshots_base_path",{"_index":684,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":685,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":694,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":697,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":843,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":687,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":695,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":844,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localis",{"_index":2102,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1537,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/contribution/0.1/style-guide":{}}}],["locationは携帯電話のgp",{"_index":1810,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["log",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["long",{"_index":2434,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["longer",{"_index":2446,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["look",{"_index":2065,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/contribution/0.1/style-guide":{}}}],["loop",{"_index":884,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["lora",{"_index":253,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["lose",{"_index":2382,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["lost",{"_index":2394,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["lps25h",{"_index":2160,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lsm9ds1データシート。これは3d加速度計、3dジャイロスコープ、3d磁力計を1チップにまとめたものです。sens",{"_index":2159,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lt",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":570,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":569,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;your",{"_index":2246,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["ltsサーバ。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1283,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["ltsバージョンまたは最新バージョンのnode.jsとnpm",{"_index":1456,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":1291,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["m",{"_index":1549,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["mac",{"_index":795,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["machin",{"_index":1969,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/contribution/0.1/style-guide":{}}}],["maco",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["macosx",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macos、windows、linux、ios、およびandroid用の公式iotaウォレットです。このウォレットを使用すると、http",{"_index":1498,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1230,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["mac上のlinuxサーバへのssh",{"_index":1980,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["magnitud",{"_index":1391,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow）の困難さに影響を与えます。mwmが大きいほど、pow",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["magnitude：mwm）は、フルーフオブワーク（pow",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["main",{"_index":2423,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["mainnet",{"_index":216,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/contribution/0.1/style-guide":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":936,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木のdepthは23です。したがって、コーディネーターは8,388,608",{"_index":307,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーンの署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":315,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["mainnetでは、少なくとも14のmwmを使用する必要があります。ハッシュ値が9個（devnetのmwm）または7個（spamnetのmwm）の0トリットで終わるトランザクションをmainnet",{"_index":374,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mainnetでトランザクションを送信する最も簡単な方法は、クライアントライブラリを使用して、アプリケーションのiota",{"_index":222,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mainnetと同じテストトークンの総供給量で独自のプライベートネットワークを運営することができます。このようにして、ネットワーク外の誰かがテストデータのトランザクションを見ることなくデータとiota",{"_index":1467,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":266,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":281,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetに接続して（既存のiota",{"_index":221,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mainnetのmwmは14ですが、devnetのmwmは9",{"_index":359,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["mainnetやdevnetなどのパブリックiota",{"_index":1081,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["mainnetを使用するのと同じように、devnetでトランザクションを送信する最も簡単な方法は、クライアントライブラリを使用してアプリケーションのiota",{"_index":228,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1079,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上でアプリケーションを使用する準備が整ったら、アプリケーションをプライベートiriノードから切断して、mainnet",{"_index":1468,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["mainnet上で動作するオープンソースのjavaソフトウェアです。このソフトウェアは現在のiotaプロトコルを定義しています。iriはクライアントがお互いの間でiota",{"_index":646,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":262,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["maintain",{"_index":2316,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["make",{"_index":2195,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["malform",{"_index":1113,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":213,"docTitle":{"docs/utils/0.1/community/mam-watcher/overview":{}},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.client.j",{"_index":1826,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamのgithub",{"_index":1629,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mamは購読サービスです。最新のデータを受信するためにastropiota",{"_index":2055,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mamを使用しない場合は、代わりにiota",{"_index":1800,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamクライアントライブラリを使用してiotaタングルに保存されます。この機能は、アプリに埋め込むことも、外部サーバー（mamサーバー）を介して実装することもできます。外部サーバー（mamサーバー）との間で、セキュアなhttp",{"_index":1812,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamサーバーは、最初に、オブジェクトリポジトリから特定の資産に関連付けられているmamチャネルのルートに関連する情報を取得する必要があります。これは、qrコードのスキャンから取得されるか、手動で挿入されるassetuniqueidをプライマリーキーとして使用することによって行われます。これらの情報はそれぞれのmamチャンネルに添付され、iotaタングルにイミュータブルに保存されます。このために、以下の2",{"_index":1823,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルから読み取ることができるように、電力源は生産者に登録/登録解除する必要があります。これは生産者側で軽量のweb",{"_index":1728,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルがもう使用されていないことを知らせるためにgoodby",{"_index":1727,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルが作成されます。回収可能資産のデジタルツインは、以下の情報で作成されます。&amp;lt;assetuniqueid",{"_index":1801,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが作成されるか既存のmamチャネルが更新されたら、オブジェクトリポジトリを更新する必要があります。これは、上で紹介したcreateitem()およびupdateitem",{"_index":1831,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが使用されなくなったことを知らせるために、goodby",{"_index":1736,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルとweb",{"_index":1725,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルに追加されます。そのために、新しいmamメッセージが既存のチャネルに添付され、次の情報が更新されてタングルに保存されます。&amp;lt;assetcustodianid",{"_index":1822,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの作成と使用、web",{"_index":1634,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルの作成後、中央管理のバックエンドのオブジェクトリポジトリにデータが入力されます。オブジェクトリポジトリはfirebas",{"_index":1815,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの初期化中に作成されたmam",{"_index":2148,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamチャネルを介してraspberri",{"_index":248,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mamチャネルを作成し、javascriptクライアントライブラリを使用してmam",{"_index":1835,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["mamチャネルを作成します。グリッドはこの情報を中央のdbでも追跡しますが、mam",{"_index":1748,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルを作成する前に、トランザクションが保存されるiotaネットワーク（プロバイダ）を選択する必要があります。これは、メインのiotaネットワーク、またはhttps&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1827,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1597,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["mamチャネルを使用して特定の資産の保管の変更を登録すると、さまざまな保管担当者情報をiota",{"_index":1799,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル情報にそれぞれアクセスして更新する（例えば、保存されているデジタルツインを更新するために新しいメッセージを追加する）関数が実装されています。reactで書かれたweb",{"_index":1824,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル詳細を使用して電力源のmam",{"_index":1730,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamプロトコルを使用して、回収可能資産にidを付与し、mam",{"_index":1796,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージのペイロード（例えば、デジタルツインに含まれる情報）を暗号化すること、および選択された当事者だけにアクセスを保証することを可能にします（mam.changemod",{"_index":1829,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージはjson",{"_index":2146,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamメッセージは、iota",{"_index":2147,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam（マスクされた認証済みメッセージング）は、iota",{"_index":244,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mam（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。mam",{"_index":1454,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["manag",{"_index":1201,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/contribution/0.1/style-guide":{}}}],["manual",{"_index":1257,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["map",{"_index":903,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/contribution/0.1/style-guide":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":913,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":1297,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1686,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":1298,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1361,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["markdown",{"_index":2222,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["marketplac",{"_index":1596,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["maven",{"_index":564,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":759,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":700,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":711,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["maxdepth",{"_index":715,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["mcuがl",{"_index":2170,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["mean",{"_index":2347,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["mention",{"_index":2440,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["menu",{"_index":2290,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["merkl",{"_index":304,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["messag",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/contribution/0.1/style-guide":{}}}],["messages.proto",{"_index":1397,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1608,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["metadata",{"_index":999,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["mi",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["middl",{"_index":2354,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["mileston",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["milestonesとしてsnapshot.meta",{"_index":691,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["minimum",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["minweightmagnitud",{"_index":497,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["mistak",{"_index":2236,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1155,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":743,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":479,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1209,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["model",{"_index":1626,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modul",{"_index":617,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["moduleのbuild.gradl",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["mongodb",{"_index":1903,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["monitorinterv",{"_index":1276,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["more",{"_index":2308,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["mostusedaddressesaggreg",{"_index":912,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["multi",{"_index":1132,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["multi_us",{"_index":1899,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multi_useフィールドを持つcda",{"_index":1895,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multipl",{"_index":2332,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["multius",{"_index":1842,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":1847,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["mvn",{"_index":575,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwm",{"_index":370,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":375,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmと同じ数の0トリットで終了するまで繰り返しハッシュ化されます。mwm",{"_index":371,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmの正しい数の0",{"_index":377,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":461,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。クライアントとしてiotaネットワークと対話するときは、そのネットワークに適したmwm",{"_index":366,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。ノードにトランザクションを送信するときは、そのノードのネットワークに対して正しいmwm",{"_index":358,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["mwm）を使用していることを確認してください。メインネット上のmwmは14",{"_index":225,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["mwm）引数は、プルーフオブワーク（pow）の難易度に影響します。mwmが大きいほど、pow",{"_index":1392,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["myaccount.go",{"_index":1886,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":1303,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mysql",{"_index":1300,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1363,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["name",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":643,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":637,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":638,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":807,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1149,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["nativ",{"_index":1219,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/contribution/0.1/style-guide":{}}}],["navig",{"_index":2286,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["necessari",{"_index":2371,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["need",{"_index":2240,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["neighbor",{"_index":1047,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":785,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":814,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":961,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":940,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighborノードの数はtotalノードの数と同じです。ネットワークがシャーディングを許可すると、neighbor",{"_index":1051,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["net",{"_index":1224,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1642,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yamlファイルを新しい静的ip",{"_index":1936,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["network",{"_index":1004,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["new",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/contribution/0.1/style-guide":{}}}],["neweventloggerplugin",{"_index":1887,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["next",{"_index":2227,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["nginx",{"_index":820,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":829,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":834,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":839,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":822,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":828,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":817,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバでポート5000",{"_index":825,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmapがネットワーク内のすべてのipアドレスをスキャンする必要があるため、このプロセスにはしばらく時間がかかります。小さなサブネット（netmask=24）の場合、nmapは256個のアドレスをスキャンするだけでよいので、数秒かかります。大規模なネットワークでは時間がかかる可能性があります。たとえばnetmask=16の場合、nmapは256\\*256アドレスをスキャンする必要があります。私のテストケースでは、これは2944.17",{"_index":2034,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":718,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":94,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsでjavascriptクライアントライブラリを使用すると、getbal",{"_index":1491,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["node.jsでローカルpow",{"_index":993,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":858,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsとpythonを使用していますが、任意のzmq",{"_index":1072,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1220,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["node.jsを実行して、デバイスが接続できるmam",{"_index":247,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["node_modulesディレクトリを削除してから、sudo",{"_index":1344,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["noderedおよび従来のnodej",{"_index":2108,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":723,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/contribution/0.1/style-guide":{}}}],["nonc",{"_index":383,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":378,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["nordic",{"_index":1646,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1653,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nosqlデータベースとして実装され、ポート3000を使用してデプロイされます。特定の資産idに関連付けられたmamチャネルに関連する情報をfirebas",{"_index":1816,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["nosqlデーターベース：mongodb",{"_index":1752,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["now",{"_index":2211,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["npm",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["npm（node.j",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":1854,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":900,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":958,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["number",{"_index":2307,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["numberformatexcept",{"_index":1140,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1116,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1660,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["object",{"_index":2363,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["obsoletetag",{"_index":345,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["offer",{"_index":2320,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["ok",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/contribution/0.1/style-guide":{}}}],["ok_hand",{"_index":2351,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["old",{"_index":708,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["on",{"_index":973,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/contribution/0.1/style-guide":{}}}],["open",{"_index":1616,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/contribution/0.1/style-guide":{}}}],["openjdk",{"_index":744,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1228,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["option",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{},"docs/contribution/0.1/style-guide":{}}}],["orang",{"_index":1996,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["order",{"_index":2293,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["org_id、$admin_user_id",{"_index":1584,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["organ",{"_index":2433,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["ots）iota",{"_index":455,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["ots）を使用して署名を作成します。この署名方式は量子耐性があります。つまり、署名は量子コンピューターからの攻撃に対して耐性があります。しかし、winternitz",{"_index":331,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["ots）を使用するため、アドレスから2回以上取り出しを行うことはできません。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":303,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["output",{"_index":2117,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["overflow",{"_index":1016,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["overview",{"_index":2443,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["oxford",{"_index":2416,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["p2p",{"_index":1601,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["p2pエネルギーグリッドでのエネルギー取引には、4",{"_index":1712,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["p2pエネルギーグリッドアプリケーションは、iotaネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをmam",{"_index":1715,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["p2pエネルギーグリッド内のエンティティがどのようにエネルギーを交換できるかを示しています。p2pエネルギーグリッドの分散型およびマシンベースの性質により、これはiotaの理想的なユースケースになります。iota",{"_index":1711,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["packag",{"_index":1292,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["package.json",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["packで購入できます。このスターターパックには、raspbianがプリインストールされたsd",{"_index":2077,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["page",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/contribution/0.1/style-guide":{}}}],["pageとpag",{"_index":1739,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2071,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/contribution/0.1/style-guide":{}}}],["paragraph",{"_index":2420,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["paramet",{"_index":972,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["parent",{"_index":574,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["partner",{"_index":751,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["password",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["path",{"_index":1170,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/contribution/0.1/style-guide":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":618,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":806,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["paymentidoraddressは、グリッドが支払いを行うことができるiotaアドレス、またはグリッドが別の支払い方法を持つようにするための参照id",{"_index":1733,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddressは、実際のiotaアドレス、または消費者が別の方法で支払いをするために使用できる参照です。グリッドがiota",{"_index":1749,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1159,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1050,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/blueprints/0.1/introduction/overview":{}}}],["pend",{"_index":424,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/contribution/0.1/style-guide":{}}}],["per",{"_index":2431,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["perform",{"_index":2435,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["period",{"_index":2418,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["perm",{"_index":1347,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["permanod",{"_index":770,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":771,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1064,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["persistenceadapterファクトリをアカウントに渡します。このアダプタは、アカウントがシードステートを保存できるローカルデータベースオブジェクトを作成します。デフォルトでは、ローカルデータベースはプロジェクトのルートに保存されます。persistencepath",{"_index":1915,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1528,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["photo",{"_index":1216,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pi",{"_index":249,"docTitle":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["pictur",{"_index":1714,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pip3.2",{"_index":2098,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piからdevnet",{"_index":1453,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["piからdevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のdevnetノードでイベントストリーム（zmq",{"_index":1516,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["piと直接通信する方法とssh経由で通信する2つの方法があります。直接通信するには、usbキーボードとマウス、さらにhdmi対応モニターまたはテレビを使います。ssh経由で通信するにはputti",{"_index":2081,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piなどのnode.jsを実行できるiot",{"_index":246,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["piなどの多くのsbcでも同様です。sbcのガイドが別にある場合は、そのガイドに従う必要があります。それ以外の場合は、多くの開発ボードをサポートしているのでarmbian",{"_index":1997,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["piのhdmi",{"_index":2095,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piのip",{"_index":2131,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスがsens",{"_index":2129,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスを見つけるには、python",{"_index":2121,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのusb",{"_index":2094,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piの再起動時に実行するようにcron",{"_index":2126,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piの近くにあり、使用中は加熱されます。キャリブレーションテストによると、sens",{"_index":2142,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["piは、単独で、またはraspberri",{"_index":2075,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piをwifi",{"_index":2100,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piを再起動してcronジョブを開始します。数秒待ってから、raspberri",{"_index":2128,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piを設定する最も簡単な方法は、プラグインモニター、キーボード、マウスを使ってraspberri",{"_index":2099,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piコンピュータとsens",{"_index":2052,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["pi入門ガイドに従います。w3schoolsには、入門ガイドもあります。スターターパックのバージョンはraspbian",{"_index":2083,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["platformio",{"_index":2018,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platformioをお勧めします。platformioはsbc",{"_index":2019,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1636,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":753,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["pleas",{"_index":2226,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["plugin",{"_index":1059,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["pluginインターフェースを実装することができます。このオプションはプラグインが動作するアカウントオブジェクトのためのgetterとsett",{"_index":1911,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["plus）には、sens",{"_index":2079,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pngファイルとしてqr",{"_index":1192,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1684,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャは、電力源、生産者、消費者、およびグリッドがiota",{"_index":1716,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1633,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1708,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["point",{"_index":2425,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["pointsとしてsnapshot.meta",{"_index":693,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":1856,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":1860,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":568,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":567,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["popul",{"_index":1785,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["port",{"_index":1951,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":851,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["possibl",{"_index":2267,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["postgresまたはfirebas",{"_index":1691,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":275,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["pow_arm_c128",{"_index":628,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":622,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":632,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":626,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":624,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powが導入されました。この概念はハッシュキャッシュとして知られており、ハッシュキャッシュはすべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":368,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":634,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを含まなければなりません。このpowは、大量のスパムトランザクションを作成するのにかかる時間と計算能力を増大させることによって、iota",{"_index":369,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powを計算する関数はpearldiv",{"_index":379,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powプロキシサーバがattachtotangl",{"_index":933,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバは、iotaミドルウェアを使用するcaddyの実装です。このミドルウェアにより、サーバはiriノードのattachtotangleエンドポイントへの呼び出しを傍受してpow",{"_index":915,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバ間の接続を安全にしたい場合は、tlsディレクティブの前のハッシュ記号（＃）を削除し、あなたのssl",{"_index":931,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["pow）したり、pow",{"_index":991,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["pow）は、特定の要件を満たすために試行錯誤を使用して計算されるデータの一部です。powの重要なことは、powを行うことは困難であるがpow",{"_index":367,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["pow）をサポートしているわけではありません。よって、クライアントがmainnet上で公開されているノードのいずれかにトランザクションを送信する場合、別のpow",{"_index":224,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["ppaをダウンロードするためにgnu",{"_index":1294,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["pr",{"_index":1350,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["practic",{"_index":983,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["preciou",{"_index":2383,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":710,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["preparetransf",{"_index":590,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":620,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":521,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":535,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prerequisit",{"_index":2447,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["print",{"_index":883,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/contribution/0.1/style-guide":{}}}],["privaci",{"_index":1295,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["privat",{"_index":1084,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["process",{"_index":2254,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["processtransferbatchrepli",{"_index":1412,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1413,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1414,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransfersまたはuserwithdraw",{"_index":1365,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["processtransfersエンドポイントを使用する場合、タングル上でiotaトークンは転送されません。代わりに、ユーザーの残高はデータベース上で更新されます。これは、ユーザーが取り出しをリクエストできるiota",{"_index":1366,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["produc",{"_index":1723,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpriceフィールドがグリッドによって支払われることが保証されているのではなく、すべての生産者間の合意価格が支払われます。合意価格は、すべてのproducerpric",{"_index":1732,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["product",{"_index":2464,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["project",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/contribution/0.1/style-guide":{}}}],["project/0.1/som",{"_index":2314,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["projects.md",{"_index":2287,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["promotetransact",{"_index":428,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":523,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":1299,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/contribution/0.1/style-guide":{}}}],["proof",{"_index":989,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":582,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["protocol",{"_index":1005,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["provid",{"_index":2362,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["providerフィールドにurl",{"_index":1389,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["publicに設定されています。パブリックモードでは、誰でもastropiotaによって公開された環境データを見ることができます。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":2139,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicに設定されています。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":2151,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicメソッドの代わりにrestrictedメソッドを使用するようにmamst",{"_index":1461,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["publish",{"_index":1573,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["publish関数で、ファイルをハッシュ化し、トランザクションでdevnet",{"_index":1571,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["publish関数に渡し、2",{"_index":1576,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["publish関数を実行し、contract.txt",{"_index":1572,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["pubsub",{"_index":1518,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["pull",{"_index":2242,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["punctuat",{"_index":2412,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["purpos",{"_index":2424,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["push",{"_index":2193,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["put",{"_index":1729,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/contribution/0.1/style-guide":{}}}],["putti",{"_index":1984,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pyramid",{"_index":1610,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":474,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2097,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":1288,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":803,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1189,"docTitle":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1190,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1194,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1193,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qubic",{"_index":255,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["question",{"_index":2326,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["queue",{"_index":670,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["r",{"_index":1255,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["ram",{"_index":727,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["random",{"_index":722,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["rang",{"_index":2248,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["raspberri",{"_index":245,"docTitle":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["raspberrypi",{"_index":1517,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["raspberryをクリックして、prefer",{"_index":2101,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["raspbian",{"_index":2088,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["react",{"_index":1232,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1683,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["reactで書かれたフロントエンドguiとnode.j",{"_index":1758,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1218,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["read",{"_index":2324,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["reader",{"_index":2309,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["readm",{"_index":482,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1672,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["reattach",{"_index":1857,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["receiv",{"_index":1187,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["receiver.j",{"_index":2118,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["receiver.jsがastropiotaの現在のmamチャンネルを見つけるためには、メッセージルートが必要です。したがって、sender.j",{"_index":2149,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsが初期化され、astropiotaからのmam",{"_index":2155,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsはmamクライアントとtryt",{"_index":2150,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは、現在のルート上の新しいデータについて5秒ごとにmam",{"_index":2153,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは現在のルートと次のルートを追跡するため、何をリッスンし、いつデータを画面に出力するかがわかります。receiver.jsがsens",{"_index":2152,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recommend",{"_index":2397,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["recordがパブリックip",{"_index":1504,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":909,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["refer",{"_index":518,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/contribution/0.1/style-guide":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":707,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["regular",{"_index":2276,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["rel",{"_index":2298,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["releas",{"_index":749,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["remot",{"_index":988,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["remote=fals",{"_index":1009,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["remote=tru",{"_index":1008,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["removeneighbor",{"_index":960,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["removeneighbors(uri",{"_index":525,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["render",{"_index":2283,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["repl",{"_index":885,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["replaybundl",{"_index":592,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":429,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":526,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["repositori",{"_index":2194,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["req",{"_index":1330,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":165,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/contribution/0.1/style-guide":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":2042,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{},"docs/contribution/0.1/style-guide":{}}}],["research",{"_index":2403,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["respons",{"_index":1530,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["rest",{"_index":1627,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["restart",{"_index":811,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["restart=alway",{"_index":1040,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["restrict",{"_index":2471,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["retriev",{"_index":1778,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["retrievefil",{"_index":1766,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrieveをクリックします。トランザクションハッシュはapiに渡され、タングル上のトランザクションのメッセージからipfsハッシュやsha256ハッシュなどが取得されます。ipfsハッシュはファイルのダウンロードに使用され、sha256ハッシュはダウンロードしたファイルのsha256",{"_index":1787,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrofit",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1791,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["reus",{"_index":2451,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["review",{"_index":2214,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["rgb",{"_index":2164,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["robot",{"_index":164,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":654,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["root",{"_index":2026,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["root://anoth",{"_index":2313,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["rootのbuild.gradl",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["router",{"_index":1949,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1103,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["rpchub",{"_index":1302,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["rude",{"_index":2353,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["rule",{"_index":1953,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/contribution/0.1/style-guide":{}}}],["run",{"_index":542,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/contribution/0.1/style-guide":{}}}],["runtim",{"_index":876,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["runコマンドに次のフラグを1",{"_index":1436,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1254,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["s3やazur",{"_index":1781,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["salt",{"_index":1267,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["saltパラメーターはもう必要ありません。署名サーバ（signer:50051）と使用するssl",{"_index":1339,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":1306,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1447,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/security-considerations":{}}}],["same",{"_index":2238,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sampl",{"_index":2333,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sbc",{"_index":2002,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc。おすすめはrasperri",{"_index":1991,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcにgoをインストールしました。これで、go",{"_index":2040,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["sbcにイーサネットポートがない場合は、usb",{"_index":1993,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcのドキュメンテーションを参照します。orang",{"_index":2024,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcの両方がwifi",{"_index":2015,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcをルーターに接続するだけです。wifiを使用したいか、またはデバイスがwifiしか持っていない場合は、wifiを通してルーターに接続する必要があります。以下の手順で、my_ssidをネットワークの名前に、my_password",{"_index":2004,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを再確認します。新しく追加されたusbポートが探しているusb",{"_index":2023,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを確認し、usbアダプタを接続してusb",{"_index":2022,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。sbcは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。iotaテクノロジを使用する専用の組み込みアプリケーション用にsbc",{"_index":1987,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":880,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["scalaプログラミング言語とsbt",{"_index":875,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["scenario",{"_index":2436,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["scene",{"_index":2271,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["screen",{"_index":1044,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["screen/tmuxセッション、system",{"_index":1308,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":2125,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/contribution/0.1/style-guide":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1671,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sd",{"_index":1995,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sdカードを挿入してsbc",{"_index":1998,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["seconds変数を1",{"_index":426,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["section",{"_index":2302,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["secur",{"_index":533,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["see",{"_index":2185,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["seed",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":1850,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":1905,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1353,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":398,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["select",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["selector",{"_index":1211,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/contribution/0.1/style-guide":{}}}],["semiconductor",{"_index":1647,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1185,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["sender.j",{"_index":1459,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsはmamメッセージストリームを初期化します。初期化中に、メッセージを安全に送信するために使用されるシードとアドレスが生成されます。この例では、メッセージはmainnetネットワークではなくdevnet",{"_index":2138,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsは、湿度と温度のデータを摂氏または摂氏と華氏で表示するようにsens",{"_index":2140,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsウィンドウがトランザクションを送信し、fetcher.j",{"_index":1458,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl",{"_index":1515,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl（http&#x3a;127.0.0.1:14265",{"_index":1464,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["sender.jsファイルにmamクライアントとiota",{"_index":2135,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sendtransf",{"_index":591,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":408,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":527,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2056,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["sensehat",{"_index":2048,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2123,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1649,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sentenc",{"_index":2419,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["separ",{"_index":2215,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sequenc",{"_index":1720,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["seriou",{"_index":2390,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["server",{"_index":1651,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverファイル（18.04",{"_index":1965,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":838,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1652,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["services上の仮想プライベートサーバのインスタンス（t2.xlarg",{"_index":1133,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["services（aw",{"_index":232,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["set",{"_index":1948,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/contribution/0.1/style-guide":{}}}],["setinterv",{"_index":430,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["sha",{"_index":1704,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1163,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256、およびipf",{"_index":1769,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256チェックサムは、apach",{"_index":760,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュ、およびipfsハッシュはイミュータブルです。ipf",{"_index":1788,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256ハッシュ、およびファイルの内容をipfsノードに送信します（post",{"_index":1767,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1162,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1166,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュをapiから返されたsha256",{"_index":1777,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha512",{"_index":1702,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["shall",{"_index":2484,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["shell",{"_index":2124,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shimmer",{"_index":1056,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["shimmer.exeに変更してから、コマンドプロンプトで.\\\\shimm",{"_index":1062,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["short",{"_index":2442,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["show",{"_index":2263,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["showdata",{"_index":2154,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shutdown",{"_index":1885,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["sidekeyは認証の証としてdelet",{"_index":1737,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sidekeyは認証の証としてdeleteに渡されます。電力源が登録解除されると、生産者は電力源のmam",{"_index":1731,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドにマークル木を再構築することができるのに十分なマークル木からの足りないデータを含む1",{"_index":316,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つ入力アドレスは、ゼロトークンの出力トランザクションのsignaturemessagefrag",{"_index":338,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":355,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["signbundl",{"_index":1387,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundle()メソッドを使用する前に、ハブのsignbundle_enabledフラグがtru",{"_index":1386,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundle_enabledフラグがtru",{"_index":1381,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundlerepli",{"_index":1416,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["signbundlerequest",{"_index":1415,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["signed_uuid",{"_index":1440,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1326,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1335,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1334,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1613,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["simpl",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["singl",{"_index":1083,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/contribution/0.1/style-guide":{}}}],["sizeはどちらもオプションであり、デフォルトはそれぞれ0と10",{"_index":1740,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["si）における物理量および単位の略語。湿度、大気質、降水量、風速、風向などの環境測定単位でもあります。このフィールドの長さは20",{"_index":1670,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["slightli",{"_index":2066,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smaller",{"_index":2067,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1625,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["sn",{"_index":862,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":1003,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1107,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["snapshot.meta",{"_index":681,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":683,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1108,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["snippet",{"_index":2479,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["socket",{"_index":1137,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["softwar",{"_index":2454,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["solid",{"_index":692,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["solut",{"_index":2465,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["someth",{"_index":2187,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sourc",{"_index":1721,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sourceディレクトリに移動してrepl",{"_index":888,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["spammer",{"_index":1060,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["spamnet",{"_index":258,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/contribution/0.1/style-guide":{}}}],["spamnetトークンを使用するpoc",{"_index":277,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":283,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":285,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":280,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":777,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["specif",{"_index":2279,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["specifi",{"_index":2361,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["spell",{"_index":2224,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["spent",{"_index":937,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["src/desktop/out",{"_index":1231,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1243,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1247,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1807,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":625,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":1974,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sshでraspberri",{"_index":2119,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sshを通してsbcに接続しています。これでsbc",{"_index":2017,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshクライアントと構成済みネットワークがインストールされたlinuxベースのオペレーティングシステム（os）。このガイドでは、ubuntuを使用しますが、macosと同様に他のlinux",{"_index":1988,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshサーバとしてlinux",{"_index":1972,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を確立します。ip_address_from_step_7プレースホルダーをlinuxサーバのip",{"_index":1982,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を開き、raspberri",{"_index":2130,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssh経由でlinuxサーバに接続しました。puttyまたはホストデバイスにlinuxコマンドを入力して、linuxサーバ上でlinux",{"_index":1986,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh経由でsbc",{"_index":2029,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ssl",{"_index":1319,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ssl.yml",{"_index":1513,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1336,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ssl証明書を使用する安全なcaddyプロキシサーバを起動するようにワンコマンドタングルのdock",{"_index":1501,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["st",{"_index":2158,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["stack",{"_index":1015,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["stackexchang",{"_index":1011,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["stackoverflow",{"_index":1450,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["stakehold",{"_index":1793,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["standalon",{"_index":2486,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["standard",{"_index":2321,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["start",{"_index":435,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{},"docs/contribution/0.1/style-guide":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":1884,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":1305,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["startattaching()とstopattach",{"_index":1922,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["starter",{"_index":2076,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1114,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["statement",{"_index":2487,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["station",{"_index":1644,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["statsrepli",{"_index":1418,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["statsrequest",{"_index":1417,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["statu",{"_index":1043,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status&amp;gt",{"_index":1805,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["step",{"_index":2228,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["stm",{"_index":236,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["storag",{"_index":1603,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["storageなどの代替ストレージソリューションを使用するには、一意のハッシュ（たとえばファイルのsha256",{"_index":1782,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["store",{"_index":1770,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":528,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1765,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storefile()メソッドは次の形式のjson",{"_index":1771,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetailtransact",{"_index":1594,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["storetransact",{"_index":963,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["storetransactions(tryt",{"_index":529,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":1852,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["straight",{"_index":2204,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["straightforward",{"_index":2323,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":881,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["structur",{"_index":2264,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["studio",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/contribution/0.1/style-guide":{}}}],["style",{"_index":2176,"docTitle":{"docs/contribution/0.1/style-guide":{}},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sub",{"_index":1941,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/contribution/0.1/style-guide":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1329,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["submit",{"_index":2253,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["subse",{"_index":402,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["subsequ",{"_index":2239,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["substep",{"_index":2461,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["subtask",{"_index":2432,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["success",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/contribution/0.1/style-guide":{}}}],["success:おめでとうございます:tada",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["success:おめでとうございます！:tada",{"_index":827,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1122,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["such",{"_index":2331,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["suggest",{"_index":2189,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["summari",{"_index":2448,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["summary.log",{"_index":2262,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["summary.md",{"_index":2266,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":1310,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["support",{"_index":2275,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["sure",{"_index":2216,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["surround",{"_index":2359,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["svg",{"_index":1581,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["sweep",{"_index":1442,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["sweep_max_deposit",{"_index":1279,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":1280,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweep_tail",{"_index":1443,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1420,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1419,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepev",{"_index":1421,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepinforequest",{"_index":1422,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepinterv",{"_index":1277,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1357,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1423,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["symbol",{"_index":2350,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["syntax",{"_index":2334,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["system",{"_index":2010,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["system（ipf",{"_index":1761,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sとledger",{"_index":1150,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1154,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1152,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["tab",{"_index":2329,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tabl",{"_index":2372,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tada",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tagフィールドにiac",{"_index":1560,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["tail",{"_index":432,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":433,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tangl",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/blueprints/0.1/introduction/overview":{}}}],["tanglebeatはzmq",{"_index":891,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["tangleディレクトリで、dock",{"_index":1473,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["task",{"_index":1655,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/contribution/0.1/style-guide":{}}}],["tcp",{"_index":732,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://p101.testnet.iota.cafe:14666",{"_index":773,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p102.testnet.iota.cafe:14666",{"_index":774,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p103.testnet.iota.cafe:14666",{"_index":775,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p104.testnet.iota.cafe:14666",{"_index":776,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":861,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":286,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":274,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":734,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["technic",{"_index":2408,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["technolog",{"_index":2467,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["temp.pi",{"_index":1520,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["tempy.pi",{"_index":1523,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["term",{"_index":2474,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["test",{"_index":540,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["testnet",{"_index":1006,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["testnetになります。これは、次のiota",{"_index":1024,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tether",{"_index":1112,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["text",{"_index":2093,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["thank",{"_index":2200,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["that'",{"_index":2306,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["theme",{"_index":1210,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1242,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1241,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["thetangle.org",{"_index":1318,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":676,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["they'r",{"_index":2459,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["they'v",{"_index":2388,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["thing",{"_index":1622,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/contribution/0.1/style-guide":{}}}],["thingy:52",{"_index":1648,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["threshold",{"_index":506,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["thumb",{"_index":2356,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tick",{"_index":1121,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["time",{"_index":1804,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/contribution/0.1/style-guide":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":1873,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":1893,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを出金することができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":1894,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":1898,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeoutat",{"_index":1841,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":1846,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timesource()メソッドでアカウントを作成した場合は、timeoutat",{"_index":1921,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":1919,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timestamp",{"_index":348,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["timeはトランザクションを開始したデバイス（携帯電話またはweb",{"_index":1811,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["tip",{"_index":509,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/contribution/0.1/style-guide":{}}}],["titl",{"_index":2251,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2127,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1186,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["tone",{"_index":2318,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tool",{"_index":1494,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/contribution/0.1/style-guide":{}}}],["toolbox",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["toolパッケージおよびregener",{"_index":1568,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["top",{"_index":2208,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["topic",{"_index":2343,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["tp",{"_index":1045,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tpsiriノードを介した1",{"_index":446,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["tpsは設定したtp",{"_index":1071,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["trace",{"_index":1605,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1604,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["trade",{"_index":1836,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["trangl",{"_index":1472,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["transact",{"_index":207,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{}}}],["transaction.j",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":414,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":522,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/official/tryte-compress/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":407,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1217,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["translat",{"_index":2402,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["translate高階コンポーネント（hoc",{"_index":1244,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":530,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":305,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["tri",{"_index":1135,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/contribution/0.1/style-guide":{}}}],["triniti",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["trinity.app",{"_index":1177,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1175,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["true",{"_index":421,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/contribution/0.1/style-guide":{}}}],["trunk",{"_index":415,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":360,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":410,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["trustanchor",{"_index":1012,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["tryte",{"_index":498,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["trytestotrit",{"_index":1388,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["trytesコンバータをインポートします。次に、スクロールマーキーを有効にするためにsens",{"_index":2136,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":949,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":964,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["tx",{"_index":896,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["type",{"_index":2220,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["typic",{"_index":2455,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["t定数を作成し、それをprop",{"_index":1245,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":2001,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタがある場合は、\"usb",{"_index":2000,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタを使用します。cp2102はよく知られている安価なアダプタですが、sbcには一体型のアダプタがあるかもしれません。調べるには、使用しているsbc",{"_index":1994,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":1013,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":819,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1240,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["ui（wui）は、mamエクスプローラにアクセスして情報（例：特定の回収可能資産の現在の保管者と所在地）を取得するためのapiを実装しています。タングル上の情報は、オブジェクトリポジトリから取得した必要なチャネルルートアドレスにアクセスすることによって取得できます。足りない資産は同じgui",{"_index":1825,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["uk",{"_index":2411,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":899,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":901,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":438,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["under",{"_index":2304,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["understand",{"_index":2386,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["uninstal",{"_index":2453,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["unit",{"_index":1184,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["unsaf",{"_index":1346,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["up",{"_index":1037,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/contribution/0.1/style-guide":{}}}],["updat",{"_index":1258,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/contribution/0.1/style-guide":{}}}],["updateitem()関数では、まずfirebaseオブジェクトリポジトリでitemidフィールドによって既存の資産が検索され、次にそのオブジェクトに関するすべての情報が新しいmam",{"_index":1832,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upload",{"_index":1784,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["uploadをクリックして、メタデータをipf",{"_index":1786,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["upper",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":840,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":837,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uptim",{"_index":1052,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["uriフォーマットは\"tcp://ipaddress:port",{"_index":962,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["uriフォーマットは、\"tcp://ipaddress:port",{"_index":941,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["url",{"_index":269,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1709,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1131,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["urlまたはip",{"_index":1202,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":786,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1713,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/contribution/0.1/style-guide":{}}}],["us)を選択します。ロケール、タイムゾーン、およびwifi",{"_index":2105,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usb",{"_index":1999,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["usbバッテリーでraspberri",{"_index":2082,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["usbポートは/dev/ttyusbxにあります。xがusbポートの番号です。正しいusbポートを見つける最も簡単な方法は、usbアダプタを接続することです。まず、l",{"_index":2020,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["user",{"_index":1208,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/contribution/0.1/style-guide":{}}}],["user_account",{"_index":1351,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_account_bal",{"_index":1444,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_address",{"_index":1362,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_address_bal",{"_index":1445,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1424,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1425,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1426,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1427,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["username>/documentation@&lt;your",{"_index":2247,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["usernameプレースホルダーを現在のlinux",{"_index":2039,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["userwithdraw",{"_index":1368,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["userwithdrawcancelrepli",{"_index":1429,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1428,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1431,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1430,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawエンドポイントを使用すると、iota",{"_index":1367,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["userwithdrawメソッドを使用して、預け入れアドレスからのiota",{"_index":1358,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":1286,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1320,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1092,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["utils.iota.org",{"_index":1477,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["uuid",{"_index":1359,"docTitle":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["uuidを保存し、そのシードuuid",{"_index":1371,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["uuid：seeduuid",{"_index":1266,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["v0.9.1",{"_index":610,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":604,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":609,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":608,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":607,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":606,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":605,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valid",{"_index":2234,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["valu",{"_index":344,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["vc",{"_index":1229,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["veri",{"_index":2407,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["verif",{"_index":1697,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["version",{"_index":578,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/contribution/0.1/style-guide":{}}}],["version.ex",{"_index":1168,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":748,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["virtual",{"_index":1968,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":1967,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualboxで64ビットバージョンのubuntu",{"_index":2044,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["vista",{"_index":1223,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/utils/0.1/official/tangle-certificate/overview":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/contribution/0.1/style-guide":{}}}],["vm）またはlinuxサブシステムを使用できます。サブシステムを使用すると、vmのオーバーヘッドなしにlinuxを実行できます。あなたが上級ユーザーであれば、linuxツールをwindow",{"_index":1990,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["voic",{"_index":2319,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["w",{"_index":1992,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["walkeralpha",{"_index":712,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["wallet",{"_index":1130,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["walletディレクトリでnpm",{"_index":1251,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1754,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["want",{"_index":2199,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["warn",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/contribution/0.1/style-guide":{}}}],["warning:devnet",{"_index":1203,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["waswithdrawalcancelledrepli",{"_index":1433,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["waswithdrawalcancelledrequest",{"_index":1432,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["watcher",{"_index":1457,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["way",{"_index":2281,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["weather",{"_index":1643,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["web",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["webpag",{"_index":2284,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["webサイト、またはiota",{"_index":752,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1681,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなど、cda",{"_index":1896,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["webサイトには、iotaネットワークを使いやすくするためのユーティリティがあります。たとえば、webサイトを使用してiotaネットワークと対話したり、トランザクショントライトを圧縮したり、iota",{"_index":1478,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webサイトには、mainnet",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1195,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["webサーバー：nginx",{"_index":1750,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["webサービス（aws）r5",{"_index":985,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["webブラウザで、http&#x3a;//localhost:4001にアクセスしてタングルユーティリティweb",{"_index":1490,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザで、iriノードのurlにアクセスします。たとえば、作成したノードのドメイン名がprivatetangle.comの場合、https&#x3a;//privatetangle.com",{"_index":1509,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザで、ルーターのipアドレスを入力します。このipアドレスはルーターに表示されているはずです。表示されない場合は、コマンドプロンプトで見つけます。あなたのルーターのipアドレスはgateway",{"_index":1946,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["webブラウザに次のように表示されます。つまり、iriノードはポート443",{"_index":1510,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバのip",{"_index":821,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["webブラウザを開き、アドレスバーに以下のように入力します。インターネットを通して自分のノードにアクセスしたいならば、localhostを自分のip",{"_index":1068,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["webブラウザーを開き、コンソールに出力されたurl",{"_index":1586,"docTitle":{},"docBody":{"docs/utils/0.1/official/tangle-certificate/overview":{}}}],["weight",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["well",{"_index":2310,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["wereaddressesspentfrom",{"_index":965,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["wide",{"_index":1309,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["wifi",{"_index":1160,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wifi経由でインターネットに接続する場合は、次の手順で、my_ssidをネットワークの名前に置き換え、my_passwordをwifi",{"_index":2027,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["window",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["windowsまたはlinux",{"_index":1221,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["windowsまたはmacオペレーティングシステムでlinuxサーバを実行するには、仮想マシンをインストールして、仮想マシンでlinux",{"_index":1961,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsまたはmac用のvirtualbox",{"_index":1962,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、7",{"_index":1963,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、ファイルを右クリックしてここで解凍をクリックします。mac",{"_index":1966,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windows上のlinuxサーバへのssh",{"_index":1983,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["winternitzワンタイム署名スキームは、アドレスからiotaトークンを取り出すバンドルに署名するために使用されます。その結果、アドレスは1度だけならiotaトークンを取り出しても安全です。ハブがアドレスをスウィープした後、そのアドレスは使用済みになり、そのアドレスから再び取り出しを行なってはいけません。ただし、ユーザーはiotaトークンを、既にスウィープした古い預け入れアドレスに送信する場合があります。この場合、攻撃者が署名に対して総当たり攻撃を行いiotaトークンを盗もうとするリスクがあります。スウィープしたアドレスからiotaトークンを救うために、潜在的な攻撃者が総当たり攻撃を仕掛ける前にiota",{"_index":1375,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["winternitzワンタイム署名（w",{"_index":454,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":1855,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1446,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["without",{"_index":2381,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["withplugin",{"_index":1861,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wlp3s0",{"_index":2012,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["won't",{"_index":2456,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["word",{"_index":2273,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["work",{"_index":990,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/contribution/0.1/style-guide":{}}}],["workflow",{"_index":1722,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1675,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["write",{"_index":2192,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["written",{"_index":2463,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["x",{"_index":237,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["x86",{"_index":2043,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1174,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1645,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["xdkプラットフォーム用のxdk2mam",{"_index":252,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/quickstart-dev-handbook":{}}}],["yarn",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["you'd",{"_index":2188,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["you'r",{"_index":2252,"docTitle":{},"docBody":{"docs/contribution/0.1/style-guide":{}}}],["zero",{"_index":669,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":860,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":868,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zeroの場合は115200",{"_index":2025,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zipの最新バージョンをダウンロードしてインストールします。macを使用している場合は、unarchiv",{"_index":1964,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":271,"docTitle":{"docs/node-software/0.1/iri/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zmqwatcher.j",{"_index":1524,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["zmq、およびダッシュボードプラグインを有効にします。これらのプラグインを使用すると、スパムトランザクションを自分のノードに送信したり、着信トランザクションを監視したり、web",{"_index":1063,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":859,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":672,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":863,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":673,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":865,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":894,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":857,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":273,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":856,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":671,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1662,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
//# sourceMappingURL=static.c140a829.js.map