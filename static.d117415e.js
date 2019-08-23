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

module.exports = [{"id":"docs/getting-started/0.1/introduction/what-is-dlt","name":"分散型台帳技術とは？","summary":"分散型台帳技術（DLT）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をP2Pで転送できるようにしたデータベースアーキテクチャです。"},{"id":"docs/getting-started/0.1/introduction/what-is-iota","name":"IOTAとは？","summary":"IOTAは、IOTAネットワーク内のデバイスがイミュータブルなデータと価値（IOTAトークン）を無料で相互に転送できるようにする分散型台帳技術です。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-node","name":"ノードとは？","summary":"ノードは、IOTAネットワーク内のタングルへの読み書きアクセス権を持つデバイスです。すべてのノードはタングルのコピーとIOTAトークンを保持するアドレスの記録を保存します。クライアントはIOTAネットワーク内の任意のノードにバンドルを送信できるので、トランザクションを検証でき、トランザクションをタングルに添付し、他のノ..."},{"id":"docs/getting-started/0.1/introduction/what-is-the-tangle","name":"タングルとは？","summary":" タングルは、IOTAトランザクションの履歴を含むイミュータブルなデータ構造です。IOTAネットワーク内のすべてのノードは、台帳にタングルのコピーを保存し、そこから読み取って新しいトランザクションをタングルに添付することができます。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-seed","name":"シードとは？","summary":"シードはシードから導出されたすべてのアドレスにアクセスできるようにする一意なパスワードです。これらのアドレスはIOTAトークンを保持しているので残高があります。IOTAトークンを使うには、シードを使って、IOTAトークンを保持しているアドレスを所有していることを証明する必要があります。シードには数字9と大文字のA〜Zの..."},{"id":"docs/getting-started/0.1/introduction/what-is-a-transaction","name":"トランザクションとは？","summary":"IOTAネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクションまたは出力トランザクションのいずれかになり得る単一の操作です。"},{"id":"docs/getting-started/0.1/introduction/what-is-a-bundle","name":"バンドルとは？","summary":"バンドルとは、データを格納したり、特定のアドレスから他のアドレスにIOTAトークンを転送するようにノードに指示することができる1つ以上のトランザクションのグループです。すべてのトランザクションは、単一のものであっても、常にバンドルとしてノードに送信されます。"},{"id":"docs/getting-started/0.1/tutorials/get-started","name":"はじめに","summary":":::info:開発者ではありませんか？\nコードを記述しなくてもIOTAがどのように機能するかを知りたい場合は、トリニティを使用してシードを作成し、初めてのデータトランザクションを送信することもできます。\n:::"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs","name":"最初のメッセージをタングルに送信する（Node.js）","summary":"IOTAを使用すると、IOTAトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、IOTAトークンは必要ありません。"},{"id":"docs/getting-started/0.1/tutorials/receive-test-tokens","name":"無料のテストトークンを受け取る","summary":"IOTAをテストするときは、あるアドレスから別のアドレスにIOTAトークンを送信したいと思います。Mainnet上では、IOTAトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、Devnetが使用できます。 Devnetは、トークンが無料であること以..."},{"id":"docs/getting-started/0.1/tutorials/send-iota-tokens","name":"テスト用IOTAトークンを転送する","summary":"商品やサービスと引き換えにIOTAトークンを誰かに転送ことができます。このチュートリアルでは、アドレスの一つから他のアドレスへテストトークンを送信します。"},{"id":"docs/getting-started/0.1/tutorials/run-your-own-iri-node","name":"自分のIRIノードを走らせる（Docker）","summary":"ノードはIOTAネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。ノードがなければ、IOTAネットワークは存在しません。誰が誰に何を送信したかを記録する方法がないため、トランザクションを送信することはできません。"},{"id":"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet","name":"初めてのメッセージをタングルに送信する（トリニティ）","summary":"トリニティは、IOTAネットワークにデータとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。IOTAトークンを含まないランダムシードを使用して、ゼロトークントランザクションを送信できます。これらのトランザクションは、イミュータブルなメッセージをタングルに送信し..."},{"id":"docs/getting-started/0.1/references/iota-networks","name":"パブリックIOTAネットワーク","summary":"IOTAには、3つのパブリックノードネットワークがあります。各ネットワークには、ノードがトランザクションを添付できる独自の分散台帳（タングル）があります。パブリックネットワーク上のノードにバンドルを接続して送信することができます。"},{"id":"docs/getting-started/0.1/references/use-cases","name":"ユースケース","summary":""},{"id":"docs/dev-essentials/0.1/introduction/overview","name":"開発者向け重要事項の概要","summary":"IOTAネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションのタングルと呼ばれる台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントは、データまたはIOTAトークンのいずれかを転送するトランザクションを作成し、トランザクションを検証のためにノードに送信するデバイスです。シ..."},{"id":"docs/dev-essentials/0.1/concepts/the-tangle","name":"タングル","summary":"タングルは、IOTAトランザクションを含むイミュータブルなデータ構造です。IOTAネットワーク内のすべてのノードは、タングルのコピーを台帳に保存し、台帳から読み取り、新しいトランザクションを添付し、トランザクション内容について合意に達します。"},{"id":"docs/dev-essentials/0.1/concepts/addresses-and-signatures","name":"アドレスと署名","summary":"IOTAネットワークでトランザクションを送信するには、シードと呼ばれる秘密のパスワードが必要です。シードにより、シードから導出されたすべてのアドレスにアクセスできます。これらのアドレスはIOTAトークンを保持しているので、IOTAネットワーク内のすべてのノードに保存され、最新の状態に保たれる残高を持っています。IOTA..."},{"id":"docs/dev-essentials/0.1/concepts/bundles-and-transactions","name":"バンドルとトランザクション","summary":"IOTAネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクション（アドレスからの取り出し）または出力トランザクション（アドレスへの預け入れまたはゼロトークントランザクション）のいずれかになる単一の操作です。ノードに1つ以上のトランザクションを送信..."},{"id":"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude","name":"最小重量値","summary":"各トランザクションには、スパム防止対策である有効なプルーフオブワークが含まれている必要があります。最小重量値（MWM）は、プルーフオブワーク中に行われる作業量を定義する変数です。クライアントとしてIOTAネットワークと対話するときは、そのネットワークに適したMWMを使用する必要があります。そうでなければ、トランザクショ..."},{"id":"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote","name":"再添付、再ブロードキャスト、促進","summary":"バンドルは、ネットワークの負荷が増加するなどの、さまざまな理由でペンディングの場合があります。バンドルが確定される可能性を高めるために、バンドルを再添付、再ブロードキャスト、または促進することができます。 "},{"id":"docs/dev-essentials/0.1/concepts/trinary","name":"3進法","summary":"IOTAは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2進数計算より効率的です。"},{"id":"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes","name":"データをトライトへ変換する","summary":"トランザクションフィールドの値は、トライトで表現する必要があります。データ変換を容易にするために、IOTAクライアントライブラリには、トライト、トリット、およびASCII文字との間でデータを変換するための組み込みコンバータがあります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/create-an-address","name":"アドレスを作成する","summary":"IOTAトークンを受け取るには、送信者に自分のアドレスの1つを渡す必要があります。このアドレスは自分のシードから導出されるものです。インデックスをインクリメントしたり、別のセキュリティレベルを使用したりすることで、シードから新しいアドレスを導出することができます。"},{"id":"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys","name":"秘密鍵からアドレスを導出する","summary":"クライアントライブラリを使用して秘密鍵からアドレスを導出することで、アドレス、プライベートキー、およびセキュリティレベルの間の関係についてより深く理解することができます。"},{"id":"docs/dev-essentials/0.1/how-to-guides/send-bundle","name":"ゼロトークントランザクションのバンドルを送信する","summary":"トランザクションは、ノードに送信される前にバンドルにまとめられる必要があります。 IOTAクライアントライブラリには、転送オブジェクトからバンドルを作成する組み込み関数があります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation","name":"トランザクションが確定したか確認する","summary":"IOTAトークンを転送する前に、IOTAトークンを転送するバンドルを確認する必要があります。バンドル内のトランザクションは、最後のトランザクションがマイルストーンによって参照および承認されるまでペンディング状態のままになります。"},{"id":"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle","name":"ペンディング中のバンドルを確定させる","summary":"マイルストーンによって承認されるためには、チップ選択時にトランザクションが選択される必要があります。これは、古いトランザクションよりも新しいトランザクションを優先します。したがって、バンドルがペンディング状態に長く固執しているほど、確定される可能性は低くなります。バンドルが確定される可能性を高めるには、状況に応じて末尾..."},{"id":"docs/dev-essentials/0.1/references/structure-of-a-transaction","name":"トランザクションの構造","summary":"トランザクションは、トライトがエンコードされた2673文字の文字列で構成されています。デコードされると、トランザクションオブジェクトは以下のフィールドを含みます。"},{"id":"docs/dev-essentials/0.1/references/structure-of-a-bundle","name":"バンドルの構造","summary":"先頭トランザクションを除くバンドル内のすべてのトランザクションは、trunkTransactionフィールドを介して互いに接続されています。これらの接続により、ノードは同じバンドル内のすべてのトランザクションを見つけて検証することができます。"},{"id":"docs/dev-essentials/0.1/references/security-levels","name":"セキュリティレベル","summary":"以下の表には、秘密鍵とアドレスのペアで考えられるセキュリティレベルが表示されています。セキュリティレベルが高ければ高いほど、署名済み（IOTAトークンを取り出し済み）アドレスの署名はより大きく、より安全になります。"},{"id":"docs/dev-essentials/0.1/references/tryte-alphabet","name":"トライトアルファベット","summary":"この表は、トライトからトライトがエンコードされたアルファベットへの変換と、それに相当する10進数の値を表しています。"},{"id":"docs/dev-essentials/0.1/references/units-of-iota-tokens","name":"IOTAトークンの単位","summary":"IOTAトークンの総供給量は(333-1) / 2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、IOTAトークンの単位はSI表記で書かれています。"},{"id":"docs/dev-essentials/0.1/references/glossary","name":"用語集","summary":"アドレスIOTAトークンを所有するアカウント。アドレスを使ってデータとIOTAトークンを送受信できます。"},{"id":"docs/client-libraries/0.1/introduction/overview","name":"クライアントライブラリ概要","summary":"IOTAクライアントライブラリは、IOTAプロトコルの複雑さを、トランザクションの作成、送信、受信、およびリクエストを可能にする単純な関数に抽象化します。"},{"id":"docs/iota-js/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/README","name":"README","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/node-software/0.1/introduction/overview","name":"ノードソフトウェア","summary":"IOTAネットワークは、相互に接続されたノードから構成されています。これらのノードは、同じノードソフトウェアを実行するコンピュータです。このソフトウェアは、ノードにタングルへの読み取り/書き込みアクセス権を付与し、ノードがトランザクションを検証してトランザクションを台帳に保存できるようにします。"},{"id":"docs/node-software/0.1/iri/introduction/overview","name":"IOTAリファレンス実装概要","summary":"IRI（IOTAリファレンス実装）は、IOTAプロトコルを定義するオープンソースのJavaソフトウェアです。現在IRIはクライアントがIOTAトークンを相互に転送できるIOTA Mainnet上で実行されているソフトウェアです。"},{"id":"docs/node-software/0.1/iri/concepts/the-ledger","name":"台帳","summary":"ノードは、トランザクションを台帳と呼ばれるローカルの追加専用のRocksDBデータベースに追加することで、トランザクションをタングルに添付します。"},{"id":"docs/node-software/0.1/iri/concepts/neighbor-iri-node","name":"隣接IRIノード","summary":" 隣接ノードは、相互に接続され、同じIOTAネットワーク上で互いに直接通信するIRIノードです。IRIの台帳をネットワークの他の部分と同期させるには、すべてのIRIノードが隣接ノード間でトランザクションを送受信する必要があります。"},{"id":"docs/node-software/0.1/iri/concepts/transaction-validation","name":"トランザクション検証","summary":"IOTAネットワーク内の各IRIノードは、偽造トランザクションが決して確定されないようにトランザクションを検証する責任があります。"},{"id":"docs/node-software/0.1/iri/concepts/zero-message-queue","name":"ゼロメッセージキュー","summary":" ゼロメッセージキュー（Zero message queue, ZMQ）は、クライアントがIRIで発生したイベントを購読することを可能にするオープンソースのリアルタイムメッセージングライブラリです。"},{"id":"docs/node-software/0.1/iri/concepts/local-snapshot","name":"ローカルスナップショット","summary":"ローカルスナップショットは、IRIノードが台帳の状態をスナップショットファイルに記録するプロセスです。 IRIノードがスナップショットの実行を開始するには、特定のマイルストーンから始めて、隣接ノードと台帳を同期させる必要があります。 IRIの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイル..."},{"id":"docs/node-software/0.1/iri/concepts/tip-selection","name":"チップ選択","summary":"タングル内の各トランザクションは、前の2つのトランザクションを参照しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。クライアントがgetTransactionsToApproveエンドポイントを呼び出すと、ノードはチップ選択を行います。"},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux","name":"LinuxサーバでIRIノードを実行する","summary":"IRIソフトウェアを実行すると、お使いのデバイスがタングルに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、IOTAネットワークがより分散されるようになります。"},{"id":"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker","name":"DockerコンテナでIRIノードを実行する","summary":"Dockerコンテナ内でIRIを実行すると、デバイスはIRIノード用のLinuxサーバになり、タングルに直接アクセスできるようになります。 IRIノードを実行することで、台帳の数を増やし、隣接IRIノードのトランザクションを検証することで、IOTAネットワークをより分散させることができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy","name":"リバースプロキシサーバを設定する","summary":"クライアントは、APIリクエストをスパミングすることによって、IRIノードのオープンAPIポートを悪用することができます。IPアドレスでAPIリクエストを制限したり、APIリクエストの数を制限したりするには、IRIノードをリバースプロキシサーバに接続します。"},{"id":"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger","name":"台帳からトランザクションを刈り取る","summary":"時間が経つにつれて、IRIノードの台帳には多くのトランザクションが蓄積され、多くの場合、IRIノードの使用可能メモリよりも大きくなります。台帳が大きくなり過ぎないようにするために、定期的に台帳から古いトランザクションを削除することを選択できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes","name":"隣接IRIノードを見つける","summary":"台帳内のトランザクションをネットワークの他の部分と同期させるには、IRIノードは隣接ノードと呼ばれる他のIRIノードと通信する必要があります。同じネットワーク上で隣接IRIノードを見つけるには、IRIノード所有者にIRIノードのURLまたはIPアドレスを尋ね、自分のIRIノードのURLまたはIPアドレスを渡す必要があり..."},{"id":"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node","name":"ノードにリクエストを送信する","summary":"ノードは、PORT設定パラメーターに設定されているAPIポートでクライアントからのトランザクションを受信します。このポートにHTTPリクエストを送信して、ノードのREST APIとやり取りすることができます。これにより、タングルに対してデータの読み書きを行うことができます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node","name":"ノードのイベントを購読する","summary":"ノードのZMQポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、IOTAネットワークからのリアルタイムデータが得られます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing","name":"Apache Flinkを使用してZMQイベントをほぼリアルタイムで処理する","summary":"ZMQイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのApache Flinkなどのストリーム処理フレームワークを使用できます。"},{"id":"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy","name":"プルーフオブワーク用プロキシサーバをインストールする","summary":"attachToTangleエンドポイントはリソースを大量に消費します。結果として、attachToTangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、専用のプロキシサーバーをインストールして、ノードのプルーフオブワーク（PoW）を行います。"},{"id":"docs/node-software/0.1/iri/how-to-guides/update-the-iri","name":"IRIを更新する","summary":"新しいバージョンのIRIがGitHubでリリースされたら、ローカルのIRIを新しいバージョンに更新することをお勧めします。"},{"id":"docs/node-software/0.1/iri/references/api-reference","name":"APIリファレンス","summary":":::warning:\nこのAPIはベータ版であり、変更される可能性があります。運用版アプリケーションではこのAPIを使用しないことをお勧めします。\n:::"},{"id":"docs/node-software/0.1/iri/references/api-errors","name":"APIエラーメッセージ","summary":"APIリクエストが失敗すると、レスポンスボディにHTTPエラーコードとJSONオブジェクトが返されます。"},{"id":"docs/node-software/0.1/iri/references/best-practice","name":"ノードを実行するためのベストプラクティス","summary":"ノードを実行すると、信頼性の高いアーキテクチャを設定するためのさまざまなオプションがあります。この記事はIOTA財団がIOTA財団のパートナーにしばしば与えるいくつかのアドバイスを与えます。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-ledger","name":"台帳のデータ","summary":"次の表に、IRIノードがtransaction-metadataカラムに追加するメタデータを示します。"},{"id":"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file","name":"スナップショットメタデータファイルのデータ","summary":"この表には、ローカルスナップショット中にsnapshot.metaファイルに追加されるデータが含まれています。"},{"id":"docs/node-software/0.1/iri/references/iri-configuration-options","name":"IRI設定オプション","summary":"IRI設定オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（CLフラグ）または.ini設定ファイル（設定ファイルパラメータ）のどちらでも設定できます。"},{"id":"docs/node-software/0.1/iri/references/zmq-events","name":"ZMQイベント","summary":"すべてのイベントは、スペースで区切られたデータを含む少なくとも1つのバッファオブジェクトを返します。バッファの最初の項目は常にイベントの名前です。「返されたデータ」カラムの情報は、バッファが文字列に変換され、スペース文字で配列に分割されたかのように表示されます。"},{"id":"docs/node-software/0.1/iri/references/troubleshooting","name":"トラブルシューティング","summary":"このリファレンスガイドを使用して、IRIのインストール、設定、または実行に関連する問題を解決してください。"},{"id":"docs/node-software/0.1/goshimmer/introduction/overview","name":"GoShimmer","summary":"GoShimmerは、CoordicideにつながるIOTAネットワークの進行中のプロトタイプです。Coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、IOTAネットワークを分散化することができます。この目標を達成するために、GoShimmerはそれぞれが特定の役割を持つモジュールで構..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node","name":"GoShimmerノードを実行する","summary":"GoShimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはCoordicide testnetになります。これは、次のIOTAプロトコルのリ..."},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/send-spam","name":"自分のノードにスパムトランザクションを送信する","summary":"ノードが1秒間に処理できるトランザクション数をテストするには、spammerAPIエンドポイントを使用してスパムトランザクションを送信します。"},{"id":"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events","name":"ノードの着信トランザクションを監視する","summary":"ノードがトランザクションを受信すると、ノードは受信したトランザクションをトランザクションイベントとしてゼロメッセージキュー（ZMQ）と呼ばれるサービスに発行します。クライアントとして、このイベントを購読して、ノードの着信トランザクションを監視することができます。"},{"id":"docs/node-software/0.1/goshimmer/references/command-line-flags","name":"コマンドラインフラグ","summary":"GoShimmerコードを実行するコマンドでは、以下のフラグを渡してノードのデフォルトの動作を変更できます。たとえば、デフォルトの自動ピアリングポートを変更するように選択できます。"},{"id":"docs/compass/0.1/introduction/overview","name":"プライベートタングル概要","summary":"プライベートタングルは運用者が管理するIOTAネットワークで、運用者が知っているノードだけを含みます。プライベートタングルは、パブリックIOTAネットワークと同じテクノロジを使用しますが、コンパスと呼ばれるコーディネータのオープンソース実装を実行してプライベートタングルを制御します。コンパスを使用すると、プライベートタ..."},{"id":"docs/compass/0.1/how-to-guides/set-up-a-private-tangle","name":"プライベートタングルを設定する","summary":"プライベートタングルは運用者がコントロールするもので、運用者が知っているノードだけを含みます。パブリックタングル内のトランザクションを見ることができるMainnetやDevnetなどのパブリックIOTAネットワークを使用せずにアプリケーションをテストしたい場合は、プライベートタングルを設定します。"},{"id":"docs/compass/0.1/references/compass-configuration-options","name":"コンパス設定オプション","summary":"コンパス設定オプションを使用すると、ニーズに応じてプライベートタングルをカスタマイズできます。たとえば、特定のテスト用に軽量のプライベートタングルを作成したり、Mainnetに似た、よりリソース集約型のプライベートタングルを作成したりすることができます。"},{"id":"docs/compass/0.1/references/merkle-tree-compute-times","name":"マークル木計算時間","summary":"マークル木の計算にかかる時間を把握するために、Amazon Web Services上の仮想プライベートサーバのインスタンス（T2.Xlarge）でテストを行いました。"},{"id":"docs/compass/0.1/references/troubleshooting","name":"トラブルシューティング","summary":"Got permission denied while trying to connect to the Docker daemon socket"},{"id":"docs/wallets/0.1/introduction/overview","name":"ウォレット","summary":"ウォレットはシードを保存し、データベースにトランザクションの記録を保存するアプリケーションです。ウォレットを使用すると、シードの保護、トランザクションの送信、および残高の管理のプロセスを簡素化できます。"},{"id":"docs/wallets/0.1/trinity/introduction/overview","name":"トリニティ概要","summary":"トリニティは、データとIOTAトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。トリニティでは、複数のシードを暗号化して保存することができます。各シードには独自のアカウント、トランザクション履歴、および設定があります。"},{"id":"docs/wallets/0.1/trinity/concepts/hardware-wallet","name":"ハードウェアウォレット","summary":"ハードウェアウォレットは、コールドストレージとも呼ばれ、資金を保護するための物理的な電子デバイスです。"},{"id":"docs/wallets/0.1/trinity/concepts/node-quorum","name":"ノード定足数","summary":"タングルからの情報の供給源として1つのノードだけに頼るとき、あなたはそれが正しいという確信が持てません。例えば、そのノードはあなたの利用可能な残高について間違った情報をあなたに送るかもしれません。トリニティが表示する情報に対する信頼性を高めるために、トリニティは複数のノードに接続して結果を比較することができます。このノ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-an-account","name":"アカウントを作成する","summary":"トリニティアカウントはパスワードで保護されており、シードをモバイル端末やコンピュータに安全に保管することができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/back-up-seed","name":"シードをバックアップする","summary":"シードは秘密のパスワードであり、シードは固有のアドレスと電子署名を生成するために使われます。トリニティはモバイル端末またはコンピュータにシードを厳重に保管します。その結果、モバイル端末やコンピュータを失うことになった場合、シードを失うことになります。シード（およびIOTAトークン）が失われないようにするには、シードをバ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop","name":"デスクトップ版のダウンロードを検証する","summary":"トリニティデスクトップをダウンロードした時は、その信頼性を検証して、IOTA財団のGitHubリポジトリから正しいものをダウンロードしたことを確認することをお勧めします。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/read-your-balance","name":"残高を読み込む","summary":"トリニティは、ネットワーク内のIRIノードに、シードに関連したすべてのアドレスの残高をリクエストすることによって、定期的に残高を更新します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction","name":"トランザクションを送信する","summary":"トリニティには、ボタンをクリックするだけで複数のトランザクションを送信できるユーザーインターフェースがあります。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction","name":"トランザクションを受信する","summary":"トリニティには、トランザクションを受信し、ボタンをクリックするだけで新しいアドレスを生成することができるユーザー・インターフェースがあります。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code","name":"トリニティが読み取れるQRコードを作成する","summary":"送信者がアドレスなどの長いトランザクション情報を入力のを避けるために、トランザクションフィールドに自動入力できるQRコードを作成します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/create-deep-link","name":"ディープリンクを作成する","summary":"ディープリンクは、トリニティのトランザクションフィールドに自動入力されるカスタマイズ可能なリンクです。 Webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってIOTA支払いをより迅速かつ容易にすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node","name":"カスタムノードに接続する","summary":"デフォルトのノード定足数の代わりに、またはそれに加えて、1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはDevnet上のノードに接続したりすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/manage-your-account","name":"アカウントを管理する","summary":"デスクトップでアカウント設定にアクセスするには、バーガーメニュー > アカウント > アカウント設定に移動します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings","name":"生体認証を設定する（モバイル端末のみ）","summary":"生体認証は、指紋を使ってトリニティにログインすることを可能にするセキュリティプロセスです。生体認証を設定すると、指紋またはパスワードを使ってトリニティにログインすることができます。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings","name":"一般設定を変更する","summary":"一般設定は、トリニティのユーザーインターフェースの要素を変更します。一般設定を変更してユーザーインターフェイスをカスタマイズします。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings","name":"詳細設定を変更する","summary":"詳細設定は、トリニティの機能に影響します。IOTAの仕組みに慣れている場合は、詳細設定を変更します。"},{"id":"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition","name":"スナップショット移行を実行する","summary":"グローバルスナップショット中に、ノードは自身の台帳から古いトランザクションデータを削除してメモリを解放します。グローバルスナップショットの後、ノードは少なくとも1iの残高を持つアドレスのみを保持します。グローバルスナップショットの後に正しい残高が表示されない場合は、トリニティが最新の残高をリクエストできるように、スナッ..."},{"id":"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity","name":"トリニティ上で機能を開発する","summary":"他のアプリケーションと同様に、トリニティは新しい機能を開発できるオープンソースのプラットフォームです。"},{"id":"docs/wallets/0.1/trinity/references/troubleshooting","name":"トラブルシューティング","summary":"トリニティがノードに接続できない場合は、ネットワーク上の古いトランザクションの情報が表示されるかもしれません。この情報は、トリニティに誤った残高を表示させる可能性があります。"},{"id":"docs/wallets/0.1/hub/introduction/overview","name":"ハブ概要","summary":"ハブは暗号通貨交換所のためのヘッドレスマルチユーザーウォレットです。ハブは、ユーザーのIOTAトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがIOTAトークンを自分のハブアドレスの1つに預け入れると、スイープと呼ばれるプロセスでユーザーのトークンがハブ所有者のアドレスに転送されます。このよ..."},{"id":"docs/wallets/0.1/hub/concepts/sweeps","name":"スウィープ","summary":"スイープは、ユーザーの取り出しと預け入れの残高のバンドルです。ユーザーがIOTAトークンをハブアドレスに預け入れるか、ハブアドレスから取り出すと、ハブはそれらの転送を1つのスイープに結合します。取り出しの合計が預け入れの合計よりも少ない場合、ハブは残りの残高をハブ所有者に属する新しいアドレスに転送します。預け入れの合計..."},{"id":"docs/wallets/0.1/hub/how-to-guides/install-hub","name":"ハブをインストールする","summary":"ハブを使用すると、gRPCフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、IOTAトークンの預け入れと取り出しを行うことができます。"},{"id":"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server","name":"署名サーバをインストールする","summary":"ハブのセキュリティを向上させるために、バンドル署名操作とソルト（シードの作成に使用）をハブだけが接続できる署名サーバに移動できます。このガイドでは、SSL暗号化接続を介してハブに接続する署名サーバをインストールして実行します。"},{"id":"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api","name":"gRPC APIを使い始める","summary":"ハブは、任意のgRPCクライアントを使用して呼び出すことができるいくつかのgRPCメソッドを公開しています。これらの方法で、データベースおよびIOTAネットワークとやり取りすることでユーザーのIOTAトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgRPC APIの基本..."},{"id":"docs/wallets/0.1/hub/how-to-guides/query-the-database","name":"ユーザーのアドレスのシードUUIDを調べる","summary":"ユーザーデータを追跡するために、ハブはユーザーデータをデータベーステーブルに格納します。このデータベーステーブルの一部のデータは、gRPC APIに公開されていません。たとえば、シードを再作成できるように、アドレスのシードUUIDを見つけたい場合です。このガイドでは、ハブデータベーステーブルの照会を開始するための基本を..."},{"id":"docs/wallets/0.1/hub/how-to-guides/integrate-hub","name":"ハブを暗号通貨交換所に統合する","summary":"デフォルトでは、ハブはすべてのユーザーの残高の記録をデータベースに保持し、ユーザーがハブアカウントを介して相互にトレードできるようにします。"},{"id":"docs/wallets/0.1/hub/how-to-guides/rescue-tokens","name":"スウィープしたアドレスからIOTAトークンを救う","summary":"Winternitzワンタイム署名スキームは、アドレスからIOTAトークンを取り出すバンドルに署名するために使用されます。その結果、アドレスは1度だけならIOTAトークンを取り出しても安全です。ハブがアドレスをスウィープした後、そのアドレスは使用済みになり、そのアドレスから再び取り出しを行なってはいけません。ただし、ユ..."},{"id":"docs/wallets/0.1/hub/references/api-reference","name":"APIリファレンス","summary":"ハブには、タングルおよびハブデータベースへの接続を簡素化するgRPC APIがあります。このAPIリファレンスを使用して、メソッドを見つけ、メソッドが行うことを学びます。"},{"id":"docs/wallets/0.1/hub/references/command-line-flags","name":"コマンドラインフラグ","summary":"ハブまたは署名サーバーを起動するとき、runコマンドに次のフラグを1つ以上渡すことで、ハブまたは署名サーバーの機能をカスタマイズできます。"},{"id":"docs/wallets/0.1/hub/references/database-tables","name":"データベーステーブル","summary":"ハブは、預け入れアドレスや取り出しリクエストなどの情報をデータベーステーブルに記録することによって、ユーザーのIOTAトークンを管理します。この情報は、gRPC APIを使用するか、データベースサーバーに問い合わせることによって見つけることができます。"},{"id":"docs/wallets/0.1/hub/references/security-considerations","name":"セキュリティ上の考慮事項","summary":"ハブの役割がIOTAトークンの管理であることを考えると、そのセキュリティは非常に重要です。ハブを保護して正しく使用するための手順を踏む必要があります。"},{"id":"docs/wallets/0.1/hub/references/troubleshooting","name":"トラブルシューティング","summary":"APIを使い始めるでgRPCクライアントを実行しようとすると、このエラーが表示されることがあります。"},{"id":"docs/utils/0.1/introduction/overview","name":"ユーティリティ","summary":"ユーティリティは、オープンソースのアプリケーションまたはツールであり、使用することも、適応させることも、自分のアプリケーションに組み込むこともできます。"},{"id":"docs/utils/0.1/community/mam-watcher/overview","name":"MAMウォッチャー概要","summary":"MAM（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。MAMウォッチャーを使用すると、チャネル上で暗号化されたメッセージに署名して送信し、そのチャネルを購読してメッセージを検証、復号化、および読み取ることができます。"},{"id":"docs/utils/0.1/community/one-command-tangle/overview","name":"ワンコマンドプライベートタングル","summary":"このアプリケーションを使用すると、単一のDockerコマンドを使用して独自のIOTAネットワークを設定できます。このコマンドを実行すると、独自のIOTAテストネットワークと2.7Pi（最大量）のテストIOTAトークンを使用できます。いかなる金銭的価値も危険にさらすことなく自分のアイデアやアプリケーションをテストするため..."},{"id":"docs/utils/0.1/community/raspberry-pi-pub-sub/overview","name":"Raspberry Piセンサーデータパブリッシャー","summary":"このアプリケーションは、Raspberry PiからDevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のDevnetノードでイベントストリーム（ZMQ）を購読し、データを受信したときに知らせるメッセージを表示します。"},{"id":"docs/utils/0.1/official/iota-area-codes/overview","name":"IOTAエリアコード概要","summary":"IOTAエリアコード（IAC）は、IOTAトランザクションを地理的位置でタグ付けするための標準規格として提案されています。"},{"id":"docs/utils/0.1/official/iota-area-codes/get-started","name":"トランザクションに地理的位置のタグを付ける","summary":"IOTAエリアコード（IAC）は、IOTAトランザクションを地理的位置でタグ付けするための標準規格として提案されています。IAC APIを使用して、緯度と経度から独自のIACにエンコードし、IACをトランザクションのtagフィールドに追加することができます。"},{"id":"docs/utils/0.1/official/tryte-compress/overview","name":"トライトコンプレッサー","summary":"トランザクションのバンドルをノードに送信すると、それらのトランザクションがネットワークの残りの部分に届かない場合があり、トランザクションが確定されないことがあります。たとえば、ノードは、トランザクションを隣接ノードに転送する前にオフラインになる場合があります。そのため、後でトランザクションを再ブロードキャストまたは再添..."},{"id":"docs/utils/0.1/official/proof-of-existance/overview","name":"存在の証明プロバイダー概要","summary":"ファイルは、さまざまな関係者間で契約などの情報を転送するために重要です。時には、ある関係者が他の関係者達が知らないうちにファイルを変更することがあります。したがって、すべての関係者が、ファイルが変更されていないことを確実に証明して、信頼できるようにする方法が必要です。ファイルが変更されていないことを証明するために、存在..."},{"id":"docs/blueprints/0.1/introduction/overview","name":"アプリケーション設計図","summary":"アプリケーション設計図では、IOTAを使用して実際の問題を解決し、明確に定義されたビジネスニーズをサポートする方法について説明しています。"},{"id":"docs/blueprints/0.1/data-marketplace/overview","name":"データマーケットプレイス","summary":"データサイロでは、異なるデータポイント間でデータを売買することは困難です。この課題を克服するために、データマーケットプレイスはIOTAマスク認証メッセージング（Masked Authenticated Messaging（MAM））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにIOTAトークンのマイ..."},{"id":"docs/blueprints/0.1/data-marketplace/architecture","name":"アプリケーションアーキテクチャ","summary":"データマーケットプレイスアプリケーションは、センサー、クラウドバックエンド、およびIOTAタングルを使用してデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/data-marketplace/deployment-and-testing","name":"データマーケットプレイスアプリをデプロイしてテストする","summary":"データマーケットプレイスでデータストリームの売買を開始するには、自身のアプリケーションをデプロイするか、デモアプリケーションでテストします。"},{"id":"docs/blueprints/0.1/doc-immutability/overview","name":"ドキュメントの不変性の概要","summary":"ドキュメントは、当事者間で情報や契約を転送するための重要な手段です。ドキュメントが確立された状態から変更されていないことを確実に証明できることは、当事者を保護するだけでなく、当事者間の信頼を確保するのに役立ちます。この設計図は、IOTAタングルを使用して以前に署名された文書の署名を自動的にチェックするソリューションを説..."},{"id":"docs/blueprints/0.1/doc-immutability/architecture","name":"アプリケーションアーキテクチャ","summary":"ドキュメントの不変性アプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/p2p-energy/overview","name":"P2Pエネルギーグリッド","summary":"エネルギーの供給はしばしば自動化されていますが、支払いシステムは統合するのに費用がかかり、そしてしばしば手動の介入を必要とします。IOTAを使用してピアツーピア（P2P）エネルギーグリッドを作成することで、電力の転送とその電力に対する支払いを自動化できます。この自動化により、インフラストラクチャはより動的になり、更新が..."},{"id":"docs/blueprints/0.1/p2p-energy/architecture","name":"アプリケーションアーキテクチャ","summary":" P2Pエネルギーグリッドアプリケーションは、IOTAネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをMAMチャネルに公開します。"},{"id":"docs/blueprints/0.1/p2p-energy/deployment-and-testing","name":"P2Pエネルギーグリッドアプリをデプロイする","summary":"P2Pエネルギーグリッドアプリケーションの使用を開始するには、自身のアプリケーションをデプロイします。"},{"id":"docs/blueprints/0.1/tangle-data-storage/overview","name":"タングルデータストレージ概要","summary":"データは、官民組織のイノベーションを促進し、新たな収益源を生み出すために使用することができます。しかし、ベンダーに依存しないデータ検証方法がなければ、データを信頼することはできません。この設計図では、IOTAタングルをイミュータブルなデータ構造として使用し、サードパーティのストレージソリューション内のファイルの内容を検..."},{"id":"docs/blueprints/0.1/tangle-data-storage/architecture","name":"アプリケーションアーキテクチャ","summary":"タングルデータストレージアプリケーションは、Reactで書かれたグラフィカルユーザーインターフェース（GUI）とNodeJSで書かれたバックエンドAPIの2つの部分から構成されています。"},{"id":"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing","name":"タングルデータストレージアプリをデプロイしてテストする","summary":"IPFSノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、IOTA財団のグラフィカルユーザーインターフェースを使用してファイルデータをアップロードし、ファイルデータを取得し、ハッシュを比較して内容を確認します。"},{"id":"docs/blueprints/0.1/track-and-trace/overview","name":"トラック&トレース概要","summary":"デューデリジェンスとベンダーに依存しないデータソースの両方が欠如しているため、流通ネットワーク内の回収可能資産は多くの場合、元の所有者に返却されません。この設計図では、IOTAタングルおよび他のIOTAテクノロジを使用して、IBCSグループが回収可能資産の回収のためのトラック&トレースシステムをどのように実施したかを説..."},{"id":"docs/blueprints/0.1/track-and-trace/architecture","name":"アプリケーションアーキテクチャ","summary":"トラック&トレースアプリケーションはIOTA MAMプロトコルを使用して、回収可能資産にIDを付与し、MAMチャネルと呼ばれるトランザクションのストリームで回収可能資産を追跡します。"},{"id":"docs/blueprints/0.1/track-and-trace/deployment-and-testing","name":"トラック&トレースアプリをデプロイしてテストする","summary":"タングルでデータの追跡を開始するには、アプリケーションをデプロイし、IOTA財団のGUIを使用して資産を検索してアップロードします。"},{"id":"docs/iota-go/0.1/README","name":"IOTA GOクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-go/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-go/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-go/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-go/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-go/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインは独自のゴルーチンで実行され、アカウントとともに起動およびシャットダウンされます。"},{"id":"docs/iota-go/0.1/how-to-guides/import-seed-state","name":"アカウントに既存のシードステートをインポートする","summary":"既存のシードステートを他の端末のアカウントにインポートすることをお勧めします。そのためには、まずシードステートをエクスポートして正しい形式にする必要があります。"},{"id":"docs/iota-go/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-java/0.1/README","name":"IOTA Javaクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-java/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-java/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-java/0.1/how-to-guides/listen-to-events","name":"アカウントのイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-java/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-java/0.1/how-to-guides/create-plugin","name":"プラグインを作成する","summary":"プラグインはアカウントの機能を拡張します。すべてのプラグインはEventListenerインターフェースを実装しており、EventManagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のEventListenerを登録する必要はありません。"},{"id":"docs/iota-java/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/iota-js/0.1/README","name":"IOTA JAクライアントライブラリ","summary":":::warning:ベータソフトウェア\nクライアントライブラリは現在ベータ版です。本番環境での使用はサポートされていません。\n:::"},{"id":"docs/iota-js/0.1/introduction/overview","name":"アカウントモジュール概要","summary":"アカウントは、トランザクションの送受信を簡単にするためのオブジェクトです。アカウントは、アドレスやペンディング中のバンドルハッシュなどのデータをローカルデータベースに保存します。このデータにより、署名済みアドレスからの取り出しやペンディング中のトランザクションの促進や再添付を心配せずにIOTAネットワークと対話できます..."},{"id":"docs/iota-js/0.1/how-to-guides/create-account","name":"アカウントを作成する","summary":"アカウントは、支払いの処理を簡単にし、ペンディング中および確定済みの履歴を保持するためのオブジェクトです。アカウントはどのIOTAネットワークでも使用できます。"},{"id":"docs/iota-js/0.1/how-to-guides/listen-to-events","name":"アカウント内のイベントをリッスンする","summary":"アカウントオブジェクトは、イベントが発生したときにイベントを発行します。イベントの例としては、支払いをするときや受け取るときがあります。これらのイベントをリッスンして行動することができます。"},{"id":"docs/iota-js/0.1/how-to-guides/create-and-manage-cda","name":"アカウントへ/から支払いをする","summary":"支払いをするには、送信者と受信者の両方にCDAが必要です。送信者はIOTAトークンを含む期限切れのCDAを必要とし、受信者はアクティブなCDAを必要とします。"},{"id":"docs/iota-js/0.1/references/cda-advice","name":"CDAの条件に関するアドバイス","summary":"CDAを作成するとき、CDAがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、CDA条件を作成するために役立つアドバイスがあります。"},{"id":"docs/general/0.1/introduction/overview","name":"一般概要","summary":"IOTAは、暗号化された方法でデータと価値（IOTAトークン）を転送することを可能にするプロトコルです。そのため、IOTAは多くの環境で使用できますが、そのうちのいくつかは以前にセットアップしたことも使ったこともないかもしれません。"},{"id":"docs/general/0.1/how-to-guides/expose-your-local-device","name":"ローカルデバイスをインターネットに公開する","summary":"デバイスをローカルネットワークの外部に接続するには、デバイスをインターネットに公開する必要があります。ローカルデバイスをインターネットに公開する一般的な理由は、IOTAノードを隣接ノードに接続することです。"},{"id":"docs/general/0.1/how-to-guides/set-up-virtual-machine","name":"仮想マシン上にLinuxサーバをセットアップする","summary":"IOTAのチュートリアルやガイドの多くはLinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でLinuxを使用できます。"},{"id":"docs/general/0.1/how-to-guides/setup-sbc","name":"シングルボードコンピュータを設定する","summary":"シングルボードコンピュータ（SBC）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。SBCは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。IOTAテクノロジを使用する専用の組み込みアプリ..."},{"id":"docs/general/0.1/how-to-guides/install-go-on-sbc","name":"シングルボードコンピュータにGoをインストールする","summary":"Goプログラミング言語を使用するアプリケーションを作成または実行するには、Goプログラミング言語をインストールする必要があります。"},{"id":"docs/general/0.1/references/troubleshooting","name":"トラブルシューティング","summary":""},{"id":"docs/smartcity/0.1/introduction/overview","name":"IOTAスマートシティ設計図","summary":"AstroPiOTAは、タングルを使用してローカル環境データを追跡するためにMAMに接続されている国際宇宙ステーションからのAstroPiのクローンです。地球上で、AstroPiOTAはローカルの天気予報を理解し報告するのを助け、地震予知に役立つかもしれません。"},{"id":"docs/smartcity/0.1/astropiota/introduction/overview","name":"AstroPiOTA","summary":"AstroPiOTAはAstroPiのクローンです。AstroPiは、ISS（国際宇宙ステーション）でRaspberry Piを使用して、宇宙飛行士が自分の環境について最新の情報を入手できるようにしたプロジェクトです。 AstroPiは、温度、湿度、その他のデータを検知するためにRaspberry PiコンピュータとS..."},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/build","name":"自分のAstroPiOTAをビルドする","summary":"AstroPiOTAを実行するには、正しいハードウェアとRaspberry Pi用のオペレーティングシステムが必要です。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/run","name":"AstroPiOTAを実行する","summary":"以下の手順は、オペレーティングシステムが設定されていることを前提としています。このインストールには複数のコンポーネントがあるため、それらを組み合わせる前に各コンポーネントが個別に機能することを確認するためのスクリプトが含まれています。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/connect","name":"SSHでRaspberry Piに接続する","summary":"モニターやキーボードなしでAstroPiOTAを実行したい場合は、SSHを介して対話するためにAstroPiOTAのネットワークアドレスが必要です。Raspberry PiのIPアドレスを見つけるには、Pythonスクリプトを使用できます。"},{"id":"docs/smartcity/0.1/astropiota/how-to-guides/customize","name":"AstroPiOTAをカスタマイズする","summary":"AstroPiOTA送信者はSense HATからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをJSON形式でタングルのMAMチャネルに送信します。AstroPiOTA受信者はMAMチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、Astr..."},{"id":"docs/smartcity/0.1/astropiota/references/sensehat-specs","name":"Sense HAT仕様","summary":"このリストには、AstroPiOTAプロジェクトで使用されているSense HATハードウェアの仕様が含まれています。"}]

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"version":"2.3.5","fields":["docTitle","docBody"],"fieldVectors":[["docTitle/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-dlt",[0,3.476,1,32.231,2,43.038,3,32.231,4,3.895]],["docTitle/docs/getting-started/0.1/introduction/what-is-iota",[4,5.792]],["docBody/docs/getting-started/0.1/introduction/what-is-iota",[0,3.453,4,5.815,5,21.407,6,21.407,7,21.407,8,21.407,9,21.407,10,21.407,11,21.407,12,21.407,13,21.407,14,21.407,15,21.407,16,21.407,17,6.87,18,21.407,19,21.407,20,21.407,21,17.548]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-node",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-a-node",[0,2.537,4,4.273,22,35.36,23,35.36,24,35.36,25,35.36,26,35.36,27,35.36]],["docTitle/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-the-tangle",[0,3.406,17,12.646,28,31.829,29,28.37,30,28.37,31,28.37,32,31.829,33,4.295,34,31.829]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-a-seed",[0,3.013,4,5.075,35,35.36,36,35.36,37,20.037,38,28.986]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-a-transaction",[0,3.233,4,5.117,39,35.858,40,35.858]],["docTitle/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.439]],["docBody/docs/getting-started/0.1/introduction/what-is-a-bundle",[0,3.087,4,3.458,17,9.184,41,28.614,42,20.876,43,28.614,44,28.614,45,28.614,46,25.504,47,36.317,48,9.019,49,21.926,50,28.614,51,28.614,52,28.614,53,28.614,54,28.614,55,13.32,56,28.614]],["docTitle/docs/getting-started/0.1/tutorials/get-started",[0,3.439]],["docBody/docs/getting-started/0.1/tutorials/get-started",[0,3.292,4,4.41,17,9.598,33,3.538,48,9.426,57,13.203,58,13.203,59,8.57,60,13.203,61,4.238,62,7.248,63,20.091,64,9.554,65,8.331,66,26.654,67,13.203,68,8.916,69,13.203,70,11.768,71,16.119,72,11.768,73,8.331,74,13.203,75,18.749,76,13.203,77,8.018,78,21.493,79,21.493,80,10.823,81,8.682,82,21.035,83,13.203,84,13.203,85,11.768,86,11.768,87,9.084,88,13.203,89,13.203,90,13.203,91,9.554,92,11.768,93,13.203,94,12.999,95,8.331,96,8.331,97,8.682,98,11.768,99,17.243,100,8.682,101,13.273,102,17.242,103,11.768,104,13.203,105,13.203,106,17.242,107,13.203,108,13.203,109,11.768,110,11.768,111,10.117,112,13.203,113,9.084,114,10.823,115,9.554,116,13.203,117,13.203,118,13.203]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[94,17.907]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs",[0,3.478,4,4.997,17,8.29,33,5.425,37,9.755,48,5.426,61,5.525,94,9.65,100,11.321,119,17.215,120,9.168,121,9.755,122,7.638,123,7.821,124,7.638,125,8.906,126,14.112,127,15.344,128,15.344,129,17.215,130,15.344,131,17.215,132,17.215,133,14.112,134,15.344,135,14.112,136,14.112,137,15.344,138,14.112,139,17.215,140,17.215,141,9.168,142,17.215,143,13.191,144,12.456,145,11.321,146,15.344,147,6.985,148,15.344,149,11.321]],["docTitle/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.439]],["docBody/docs/getting-started/0.1/tutorials/receive-test-tokens",[0,3.426,33,3.818,55,13.173,125,14.639,150,28.296,151,28.296,152,25.221,153,28.296,154,28.296,155,28.296,156,28.296,157,28.296,158,28.296,159,28.296,160,28.296,161,28.296,162,28.296]],["docTitle/docs/getting-started/0.1/tutorials/send-iota-tokens",[4,5.792]],["docBody/docs/getting-started/0.1/tutorials/send-iota-tokens",[0,3.467,4,5.039,33,4.474,37,10.937,55,8.985,61,9.021,94,7.21,100,12.692,120,10.278,121,10.937,122,8.563,123,8.768,124,8.563,125,17.151,127,17.203,128,17.203,130,17.203,134,17.203,135,15.821,136,15.821,137,17.203,138,15.821,141,10.278,147,7.831,152,17.203,163,19.3,164,19.3,165,19.3,166,19.3,167,19.3,168,19.3,169,19.3,170,19.3,171,19.3]],["docTitle/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[172,42.724]],["docBody/docs/getting-started/0.1/tutorials/run-your-own-iri-node",[0,3.25,4,4.18,62,14.266,65,16.398,125,13.445,149,25.568,172,23.165,173,25.989,174,14.919,175,25.989,176,25.989,177,23.165,178,25.989,179,25.989,180,25.989,181,25.989,182,25.989,183,25.989,184,25.989,185,25.989,186,25.989]],["docTitle/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.439]],["docBody/docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet",[0,3.51,33,3.183,38,19.333,42,13.365,48,7.434,113,16.227,114,19.333,144,17.066,187,23.585,188,14.881,189,21.022,190,23.585,191,21.022,192,23.44,193,18.072,194,14.323,195,26.554,196,32.394,197,14.881,198,23.585,199,23.585]],["docTitle/docs/getting-started/0.1/references/iota-networks",[4,5.792]],["docBody/docs/getting-started/0.1/references/iota-networks",[0,3.221,4,4.293,33,4.342,125,19.608,174,13.101,200,18.329,201,18.329,202,26.375,203,31.669,204,18.329,205,18.329,206,23.281,207,18.329,208,18.329,209,18.329,210,18.329,211,18.329,212,18.329,213,18.329,214,33.783,215,18.329,216,17.797,217,18.329,218,27.064,219,18.329,220,18.621,221,18.329,222,18.329,223,18.329,224,18.329,225,18.329,226,18.329,227,18.329,228,18.329,229,18.329,230,18.329,231,18.329]],["docTitle/docs/getting-started/0.1/references/use-cases",[0,3.439]],["docBody/docs/getting-started/0.1/references/use-cases",[0,2.767,4,4.661]],["docTitle/docs/dev-essentials/0.1/introduction/overview",[0,3.439]],["docBody/docs/dev-essentials/0.1/introduction/overview",[0,3.47,4,5.029,17,11.178,33,4.7,232,26.257,233,26.257,234,26.257,235,26.257,236,26.257,237,26.257,238,26.257,239,26.257,240,26.257,241,26.257,242,26.257]],["docTitle/docs/dev-essentials/0.1/concepts/the-tangle",[0,3.439]],["docBody/docs/dev-essentials/0.1/concepts/the-tangle",[0,3.529,4,3.643,17,12.702,29,14.652,30,14.652,31,14.652,33,5.14,37,14.136,48,11.404,68,6.968,243,16.438,244,14.652,245,16.438,246,16.438,247,16.438,248,16.438,249,24.945,250,24.945,251,16.438,252,16.438,253,16.438,254,16.438,255,16.438,256,16.438,257,16.438,258,16.438,259,16.438,260,16.438,261,16.438,262,16.438]],["docTitle/docs/dev-essentials/0.1/concepts/addresses-and-signatures",[0,3.439]],["docBody/docs/dev-essentials/0.1/concepts/addresses-and-signatures",[0,3.497,4,4.58,33,5.537,55,8.532,63,14.045,78,15.025,91,13.262,95,17.077,101,17.077,194,11.131,263,18.329,264,18.329,265,18.329,266,18.329,267,18.329,268,18.329,269,18.329,270,18.329,271,18.329,272,27.064,273,18.329,274,18.329,275,18.329,276,18.329,277,18.329,278,18.329,279,18.329,280,18.329,281,18.329,282,18.329,283,18.329,284,18.329,285,18.329]],["docTitle/docs/dev-essentials/0.1/concepts/bundles-and-transactions",[0,3.439]],["docBody/docs/dev-essentials/0.1/concepts/bundles-and-transactions",[0,3.488,4,3.359,17,8.923,33,5.192,37,10.774,42,10.774,48,8.763,55,8.851,68,8.059,73,11.996,148,16.946,194,11.546,197,11.996,286,19.012,287,19.012,288,19.012,289,19.012,290,19.012,291,16.946,292,19.012,293,19.012,294,19.012,295,19.012,296,19.012,297,19.012,298,19.012,299,19.012,300,19.012,301,19.012,302,19.012,303,21.304,304,19.012,305,14.569,306,19.012,307,19.012,308,19.012]],["docTitle/docs/dev-essentials/0.1/concepts/minimum-weight-magnitude",[0,3.439]],["docBody/docs/dev-essentials/0.1/concepts/minimum-weight-magnitude",[0,3.37,4,3.274,33,5.356,42,15.353,220,24.464,309,27.094,310,27.094,311,27.094,312,27.094,313,27.094,314,27.094,315,27.094,316,27.094,317,27.094,318,27.094,319,27.094,320,27.094,321,27.094,322,27.094]],["docTitle/docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote",[0,3.439]],["docBody/docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote",[0,3.462,81,20.673,303,24.089,323,28.02,324,25.77,325,31.436,326,28.02,327,31.436,328,31.436]],["docTitle/docs/dev-essentials/0.1/concepts/trinary",[68,20.318]],["docBody/docs/dev-essentials/0.1/concepts/trinary",[68,15.199,329,35.858,330,35.858,331,35.858,332,35.858,333,35.858,334,35.858]],["docTitle/docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes",[0,3.45,4,3.419,33,4.936,94,10.571,120,15.069,121,16.035,122,12.555,123,12.856,124,12.555,133,23.196,147,11.482,335,28.296,336,28.296,337,28.296,338,28.296]],["docTitle/docs/dev-essentials/0.1/how-to-guides/create-an-address",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/create-an-address",[0,3.452,4,3.173,33,4.7,59,11.384,61,8.427,94,9.809,120,13.983,121,14.879,122,11.65,123,11.929,124,11.65,125,13.584,126,21.524,147,10.654,339,26.257,340,26.257,341,26.257,342,23.403,343,26.257]],["docTitle/docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys",[0,3.523,4,4.386,33,5.561,77,13.812,94,8.497,120,12.112,121,12.888,122,10.091,123,10.333,124,10.091,141,12.112,147,9.228,194,13.812,344,22.743,345,22.743,346,22.743,347,22.743,348,31.591]],["docTitle/docs/dev-essentials/0.1/how-to-guides/send-bundle",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/send-bundle",[0,3.424,4,3.748,17,7.109,33,5.708,49,16.973,94,8.275,120,11.796,121,12.552,122,9.828,123,10.063,124,9.828,125,11.46,126,18.158,133,18.158,145,20.395,147,8.988,197,19.569,349,19.743,350,22.15,351,18.158,352,22.15,353,22.15,354,22.15,355,27.644,356,22.15,357,22.15,358,22.15]],["docTitle/docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation",[0,3.457,4,2.876,33,5.652,94,8.893,120,12.677,121,13.489,122,10.562,123,10.815,124,10.562,147,9.659,197,15.02,349,21.218,359,23.805,360,23.805,361,32.601,362,32.601,363,19.514,364,32.601,365,21.218,366,21.218,367,23.805]],["docTitle/docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle",[0,3.439]],["docBody/docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle",[0,3.512,17,6.438,33,5.004,42,11.367,48,6.323,49,15.371,68,8.503,94,7.494,120,10.683,121,11.367,122,8.9,123,9.113,124,8.9,125,10.378,147,8.139,197,12.657,291,17.879,368,20.059,369,20.059,370,20.059,371,20.059,372,20.059,373,20.059,374,20.059,375,20.059,376,28.905,377,20.059,378,20.059,379,17.879,380,20.059,381,20.059,382,20.059]],["docTitle/docs/dev-essentials/0.1/references/structure-of-a-transaction",[0,3.439]],["docBody/docs/dev-essentials/0.1/references/structure-of-a-transaction",[0,3.143,383,37.995]],["docTitle/docs/dev-essentials/0.1/references/structure-of-a-bundle",[0,3.439]],["docBody/docs/dev-essentials/0.1/references/structure-of-a-bundle",[0,3.214,33,4.772,73,22.311,303,27.096,305,27.096,384,31.518]],["docTitle/docs/dev-essentials/0.1/references/security-levels",[0,3.439]],["docBody/docs/dev-essentials/0.1/references/security-levels",[0,2.726,4,4.591,385,37.995]],["docTitle/docs/dev-essentials/0.1/references/tryte-alphabet",[0,3.439]],["docBody/docs/dev-essentials/0.1/references/tryte-alphabet",[0,2.726,95,23.974,386,37.995]],["docTitle/docs/dev-essentials/0.1/references/units-of-iota-tokens",[4,5.792]],["docBody/docs/dev-essentials/0.1/references/units-of-iota-tokens",[0,2.609,4,5.16,48,11.464,387,36.369,388,36.369]],["docTitle/docs/dev-essentials/0.1/references/glossary",[0,3.439]],["docBody/docs/dev-essentials/0.1/references/glossary",[0,3.429,4,4.764,48,9.163,63,15.493,68,12.322,174,14.96,220,13.911,244,18.021,389,20.218,390,20.218,391,20.218,392,20.218,393,20.218,394,20.218,395,20.218,396,20.218,397,20.218,398,20.218,399,20.218,400,20.218,401,20.218,402,20.218,403,20.218,404,20.218,405,20.218,406,20.218,407,20.218,408,20.218,409,20.218,410,20.218,411,20.218]],["docTitle/docs/client-libraries/0.1/introduction/overview",[0,3.439]],["docBody/docs/client-libraries/0.1/introduction/overview",[0,3.406,21,20.47,61,8.014,87,17.181,101,15.756,102,16.421,115,18.068,412,24.971,413,28.005,414,24.971,415,24.971,416,24.971,417,24.971,418,21.249,419,24.971,420,24.971,421,24.971,422,12.232,423,24.971,424,19.134,425,24.971,426,15.165]],["docTitle/docs/iota-js/0.1/README",[4,4.145,428,30.573]],["docBody/docs/iota-js/0.1/README",[0,3.227,4,3.97,59,9.082,61,3.735,94,8.994,97,7.652,98,10.372,99,15.573,100,15.831,101,15.19,121,6.594,174,8.321,191,29.282,305,8.917,324,9.539,428,10.372,429,5.555,430,11.636,431,8.631,432,8.917,433,11.636,434,11.636,435,11.636,436,11.636,437,11.636,438,11.636,439,11.636,440,45.658,441,11.636,442,27.786,443,11.636,444,11.636,445,11.636,446,11.636,447,11.636,448,11.636,449,11.636,450,11.636,451,11.636,452,11.636,453,11.636,454,13.746,455,11.636,456,11.636,457,11.636,458,11.636,459,11.636,460,11.636,461,11.636,462,11.636,463,18.997,464,11.636,465,11.636,466,11.636,467,16.933,468,11.636,469,18.447,470,11.636,471,11.636,472,11.636,473,11.636,474,11.636,475,11.636,476,11.636,477,11.636,478,11.636,479,11.636,480,11.636,481,8.42,482,11.636,483,11.636,484,10.372,485,11.636,486,11.636,487,8.917,488,11.636,489,11.636]],["docTitle/docs/iota-java/0.1/README",[4,4.145,102,22.556]],["docBody/docs/iota-java/0.1/README",[0,3.287,4,4.556,17,3.822,59,6.327,61,3.822,81,7.831,102,24.794,103,17.254,174,9.737,342,10.614,351,9.762,429,5.684,431,8.795,432,9.125,481,8.617,490,11.908,491,11.908,492,11.908,493,11.908,494,11.908,495,9.762,496,11.908,497,11.908,498,18.742,499,19.358,500,11.908,501,11.908,502,10.614,503,11.908,504,11.908,505,11.908,506,11.908,507,11.908,508,11.908,509,19.358,510,11.908,511,11.908,512,11.908,513,11.908,514,11.908,515,11.908,516,11.908,517,11.908,518,30.991,519,11.908,520,11.908,521,11.908,522,8.193,523,9.125,524,11.908,525,11.908,526,11.908,527,11.908,528,11.908,529,11.908,530,19.358,531,11.908,532,11.908,533,11.908,534,11.908,535,11.908,536,11.908,537,11.908,538,11.908,539,11.908,540,11.908,541,11.908,542,11.908,543,11.908,544,34.542,545,24.459,546,11.908,547,11.908,548,11.908,549,11.908,550,11.908,551,11.908,552,11.908,553,11.908,554,11.908,555,11.908,556,10.614,557,11.908]],["docTitle/docs/iota-go/0.1/README",[4,4.145,106,22.556]],["docBody/docs/iota-go/0.1/README",[0,3.459,4,4.658,17,4.897,37,8.646,59,4.987,61,4.897,87,10.498,96,23.334,106,21.288,109,13.599,110,13.599,174,9.949,220,16.212,429,7.283,431,6.932,432,11.692,556,13.599,558,15.258,559,15.258,560,15.258,561,15.258,562,13.599,563,15.258,564,15.258,565,15.258,566,15.258,567,15.258,568,15.258,569,15.258,570,15.258,571,15.258,572,15.258,573,15.258,574,15.258,575,15.258,576,23.562,577,15.258,578,15.258,579,15.258,580,32.372,581,23.562,582,15.258,583,15.258,584,15.258,585,15.258,586,15.258,587,15.258,588,15.258,589,15.258]],["docTitle/docs/node-software/0.1/introduction/overview",[0,3.439]],["docBody/docs/node-software/0.1/introduction/overview",[0,2.502,4,4.214,174,14.398,590,34.877,591,34.877,592,27.393,593,34.877]],["docTitle/docs/node-software/0.1/iri/introduction/overview",[4,5.792]],["docBody/docs/node-software/0.1/iri/introduction/overview",[0,3.123,4,3.996,174,15.045,202,27.107,594,33.067,595,33.067,596,33.067,597,33.067,598,33.067]],["docTitle/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.439]],["docBody/docs/node-software/0.1/iri/concepts/the-ledger",[0,3.465,33,5.158,111,23.23,146,27.021,174,10.478,599,30.315,600,30.315,601,30.315,602,24.851,603,30.315]],["docTitle/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[174,16.568]],["docBody/docs/node-software/0.1/iri/concepts/neighbor-iri-node",[0,2.941,174,15.218,604,33.948,605,33.948,606,33.948,607,33.948,608,33.948,609,33.948]],["docTitle/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.439]],["docBody/docs/node-software/0.1/iri/concepts/transaction-validation",[0,3.456,4,3.458,17,9.184,174,15.753,610,28.614,611,36.84,612,28.614,613,28.614,614,28.614]],["docTitle/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.439]],["docBody/docs/node-software/0.1/iri/concepts/zero-message-queue",[0,3.223,33,4.349,48,10.159,144,23.322,615,28.728,616,32.231,617,32.231,618,32.231,619,32.231,620,32.231,621,32.231,622,28.728]],["docTitle/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.439]],["docBody/docs/node-software/0.1/iri/concepts/local-snapshot",[0,3.451,33,4.655,42,11.736,75,18.46,95,13.068,174,14.304,623,20.711,624,20.711,625,20.711,626,20.711,627,18.46,628,20.711,629,29.575,630,20.711,631,26.361,632,26.361,633,20.711,634,29.575,635,20.711,636,20.711,637,20.711,638,20.711,639,20.711,640,20.711,641,26.361,642,20.711,643,20.711,644,20.711]],["docTitle/docs/node-software/0.1/iri/concepts/tip-selection",[0,3.439]],["docBody/docs/node-software/0.1/iri/concepts/tip-selection",[0,3.547,4,2.821,17,9.17,33,3.855,48,4.752,80,23.42,197,14.731,454,20.673,469,26.665,645,15.077,646,15.077,647,15.077,648,32.168,649,13.439,650,15.077,651,15.077,652,15.077,653,15.077,654,15.077,655,15.077,656,15.077,657,15.077,658,15.077,659,15.077,660,15.077,661,15.077,662,15.077,663,15.077,664,15.077,665,9.513,666,13.439,667,15.077,668,15.077,669,23.346,670,15.077]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[671,42.724]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux",[0,3.152,17,3.804,33,5.08,48,3.736,59,3.874,68,5.024,73,7.479,87,8.155,97,12.682,102,25.446,115,8.577,125,9.977,141,6.312,147,4.809,174,15.3,194,11.712,203,17.189,363,9.716,431,5.385,523,9.083,602,9.716,671,10.565,672,11.853,673,10.565,674,9.083,675,9.083,676,11.853,677,8.577,678,10.565,679,10.565,680,10.565,681,10.565,682,10.565,683,10.565,684,11.853,685,11.853,686,11.853,687,11.853,688,11.853,689,11.853,690,11.853,691,19.285,692,11.853,693,11.853,694,11.853,695,11.853,696,11.853,697,11.853,698,11.853,699,11.853,700,11.853,701,10.565,702,11.853,703,11.853,704,11.853,705,11.853,706,11.853,707,11.853,708,6.946,709,11.853,710,11.853,711,11.853,712,11.853,713,11.853,714,11.853,715,11.853,716,11.853,717,11.853,718,11.853,719,11.853,720,11.853,721,11.853,722,11.853,723,11.853,724,11.853,725,11.853,726,11.853,727,11.853,728,11.853,729,11.853,730,11.853,731,11.853,732,11.853,733,10.565,734,11.853,735,11.853,736,10.565,737,10.565,738,10.565,739,10.565,740,10.565,741,10.565]],["docTitle/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[742,42.724]],["docBody/docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker",[0,3.085,17,7.493,33,4.341,48,4.752,59,7.631,62,12.815,64,10.91,65,14.731,68,6.391,87,10.374,115,10.91,149,28.277,174,15.381,177,13.439,363,12.359,431,6.85,487,21.892,602,12.359,673,13.439,674,11.553,675,11.553,678,13.439,679,13.439,680,13.439,681,13.439,682,13.439,683,13.439,708,16.742,733,13.439,736,13.439,737,13.439,738,13.439,739,13.439,740,13.439,741,13.439,742,13.439,743,15.077,744,15.077,745,15.077,746,15.077,747,15.077,748,13.439,749,13.439,750,15.077,751,15.077,752,15.077,753,15.077,754,15.077,755,15.077,756,15.077,757,15.077,758,15.077,759,15.077,760,15.077,761,15.077,762,15.077,763,15.077,764,15.077]],["docTitle/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.439]],["docBody/docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy",[0,3.295,33,4.456,765,24.258,766,24.258,767,24.258,768,24.258,769,33.023,770,24.258,771,24.258,772,40.304,773,24.258,774,24.258,775,24.258,776,12.55,777,24.258,778,24.258,779,24.258,780,17.553,781,24.258,782,24.258,783,24.258,784,24.258,785,24.258,786,24.258,787,24.258,788,24.258,789,24.258,790,24.258]],["docTitle/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.439]],["docBody/docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger",[0,3.498,17,9.288,174,10.003,631,33.076,641,33.076,791,28.939,792,28.939,793,28.939,794,28.939,795,28.939]],["docTitle/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[174,16.568]],["docBody/docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes",[174,12.753,796,36.895,797,36.895,798,36.895,799,36.895]],["docTitle/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.439]],["docBody/docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node",[0,3.395,17,7.86,33,3.305,48,7.72,59,12.333,68,10.381,94,15.804,111,28.912,122,10.866,123,11.127,124,10.866,147,9.937,418,25.532,800,24.491,801,24.491,802,21.829,803,21.829,804,24.491]],["docTitle/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.439]],["docBody/docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node",[0,3.413,17,6.702,33,4.014,48,6.582,68,8.851,73,13.175,77,12.681,94,15.952,122,9.264,123,9.487,124,9.264,147,8.473,216,27.288,418,26.183,622,18.611,802,18.611,803,18.611,805,20.881,806,20.881,807,20.881,808,20.881,809,17.117,810,20.881,811,20.881,812,20.881]],["docTitle/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[498,26.284,813,30.573]],["docBody/docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing",[0,3.343,33,4.117,42,9.499,48,5.283,59,5.479,96,10.577,97,11.023,102,11.023,113,11.533,145,16.648,216,16.648,498,12.844,674,12.844,813,14.941,814,16.762,815,30.507,816,16.762,817,16.762,818,16.762,819,16.762,820,16.762,821,16.762,822,16.762,823,16.762,824,16.762,825,14.941,826,16.762,827,16.762,828,16.762,829,16.762,830,16.762,831,16.762,832,16.762,833,16.762,834,25.317,835,12.844,836,16.762,837,16.762,838,16.762,839,16.762,840,16.762,841,16.762,842,16.762,843,16.762,844,16.762,845,14.941,846,16.762,847,16.762,848,16.762,849,16.762,850,16.762,851,16.762,852,13.741,853,16.762,854,16.762,855,16.762,856,16.762,857,16.762,858,16.762,859,16.762,860,16.762,861,16.762,862,16.762]],["docTitle/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.439]],["docBody/docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy",[0,3.374,33,5.543,61,7.235,94,8.421,141,12.005,174,10.852,220,24.856,522,15.51,708,13.21,863,22.542,864,22.542,865,22.542,866,20.092,867,20.092,868,20.092,869,20.092,870,20.092,871,20.092,872,20.092,873,22.542,874,22.542,875,22.542,876,22.542,877,22.542,878,22.542,879,22.542,880,22.542,881,22.542,882,22.542,883,22.542]],["docTitle/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[174,16.568]],["docBody/docs/node-software/0.1/iri/how-to-guides/update-the-iri",[0,2.404,61,10.752,174,16.12,194,20.346,701,29.861,884,33.502,885,33.502,886,33.502]],["docTitle/docs/node-software/0.1/iri/references/api-reference",[59,15.668]],["docBody/docs/node-software/0.1/iri/references/api-reference",[0,3.524,4,1.108,17,2.942,33,3.23,37,5.195,59,5.091,61,2.942,94,14.974,111,7.025,303,7.025,324,7.515,326,8.171,366,8.171,418,25.291,454,6.634,481,11.269,649,8.171,887,9.168,888,9.168,889,9.168,890,9.168,891,40.082,892,35.726,893,32.857,894,15.574,895,9.168,896,9.168,897,9.168,898,9.168,899,9.168,900,9.168,901,9.168,902,7.515,903,9.168,904,9.168,905,8.171,906,9.168,907,9.168,908,9.168,909,9.168,910,9.168,911,9.168,912,9.168,913,9.168,914,9.168,915,9.168]],["docTitle/docs/node-software/0.1/iri/references/api-errors",[59,15.668]],["docBody/docs/node-software/0.1/iri/references/api-errors",[0,2.776,59,11.23,174,11.876,194,15.624,454,18.615,469,29.643,665,16.233,893,33.842,916,25.727,917,38.684,918,34.358,919,25.727,920,25.727,921,25.727,922,22.931,923,22.931,924,25.727,925,25.727,926,22.931,927,25.727,928,25.727,929,25.727,930,22.931]],["docTitle/docs/node-software/0.1/iri/references/best-practice",[0,3.439]],["docBody/docs/node-software/0.1/iri/references/best-practice",[0,3.4,4,2.748,33,5.561,37,12.888,48,7.169,59,11.864,220,15.648,666,20.272,930,20.272,931,22.743,932,22.743,933,22.743,934,22.743,935,22.743,936,22.743,937,22.743,938,31.591,939,25.896,940,25.896,941,22.743,942,18.644,943,22.743,944,22.743,945,22.743,946,22.743,947,22.743]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.439]],["docBody/docs/node-software/0.1/iri/references/data-in-the-ledger",[0,3.09,174,12.753,948,36.895,949,36.895]],["docTitle/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,3.439]],["docBody/docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file",[0,2.767,627,34.378]],["docTitle/docs/node-software/0.1/iri/references/iri-configuration-options",[174,16.568]],["docBody/docs/node-software/0.1/iri/references/iri-configuration-options",[0,3.404,33,4.062,59,11.43,80,24.673,174,10.404,216,25.021,454,21.779,939,24.673,940,24.673,942,24.673,950,21.228,951,21.228,952,30.099,953,38.049,954,26.828,955,30.099,956,23.064,957,21.228,958,21.228,959,21.228,960,21.228,961,21.228]],["docTitle/docs/node-software/0.1/iri/references/zmq-events",[216,31.521]],["docBody/docs/node-software/0.1/iri/references/zmq-events",[0,3.038,33,4.839,42,20.319,48,11.302,216,23.58,962,35.858]],["docTitle/docs/node-software/0.1/iri/references/troubleshooting",[0,3.439]],["docBody/docs/node-software/0.1/iri/references/troubleshooting",[0,3.003,4,3.663,33,4.091,174,14.469,963,27.021,964,30.315,965,20.858,966,30.315,967,30.315,968,30.315,969,30.315,970,30.315,971,30.315,972,30.315,973,30.315,974,30.315]],["docTitle/docs/node-software/0.1/goshimmer/introduction/overview",[592,31.521]],["docBody/docs/node-software/0.1/goshimmer/introduction/overview",[0,2.941,33,4.581,592,26.952,975,33.948,976,30.259,977,33.948,978,28.2,979,33.948]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[592,31.521]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/run-the-node",[0,3.312,17,6.19,33,4.713,48,6.079,62,6.506,64,8.577,65,12.168,71,14.778,106,7.794,141,10.27,149,26.042,522,8.155,592,23.94,665,17.725,708,11.301,748,10.565,749,10.565,780,13.954,809,15.809,866,10.565,867,10.565,868,10.565,869,10.565,870,10.565,871,10.565,872,17.189,976,10.565,978,21.271,980,11.853,981,11.853,982,19.285,983,11.853,984,11.853,985,19.285,986,11.853,987,11.853,988,10.565,989,10.565,990,11.853,991,11.853,992,11.853,993,11.853,994,11.853,995,17.189,996,15.809,997,19.285,998,19.285,999,19.285,1000,19.285,1001,19.285,1002,17.189,1003,19.285,1004,19.285,1005,11.853,1006,11.853,1007,11.853,1008,24.381,1009,11.853,1010,15.809,1011,17.189,1012,19.285,1013,17.189,1014,11.853,1015,11.853,1016,10.565,1017,10.565,1018,11.853]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.439]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/send-spam",[0,3.37,33,5.359,592,21.195,1013,28.728,1019,32.231,1020,32.231,1021,32.231,1022,32.231,1023,32.231]],["docTitle/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.439]],["docBody/docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events",[0,3.38,17,7.64,33,3.212,48,7.503,68,10.09,73,15.02,77,14.457,94,16.16,122,10.562,123,10.815,124,10.562,216,27.545,418,26.429,809,19.514,845,29.058,1024,23.805,1025,23.805,1026,23.805]],["docTitle/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.439]],["docBody/docs/node-software/0.1/goshimmer/references/command-line-flags",[0,3.233,33,4.839,592,23.58,1027,35.858,1028,35.858]],["docTitle/docs/compass/0.1/introduction/overview",[0,3.439]],["docBody/docs/compass/0.1/introduction/overview",[0,3.493,4,5.602,48,9.019,1029,28.614,1030,28.614,1031,28.614,1032,28.614]],["docTitle/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.439]],["docBody/docs/compass/0.1/how-to-guides/set-up-a-private-tangle",[0,3.458,4,2.339,17,3.822,33,4.481,42,6.748,48,3.754,55,9.012,59,3.892,61,3.822,68,5.048,73,12.214,77,7.232,81,7.831,125,6.161,145,12.73,149,12.73,174,12.097,206,8.617,365,10.614,431,5.41,469,9.125,665,12.214,677,8.617,835,9.125,902,9.762,956,9.125,965,8.193,1010,9.762,1033,11.908,1034,11.908,1035,11.908,1036,17.254,1037,11.908,1038,11.908,1039,11.908,1040,10.614,1041,11.908,1042,11.908,1043,18.742,1044,11.908,1045,11.908,1046,11.908,1047,12.73,1048,11.908,1049,11.908,1050,11.908,1051,10.614,1052,11.908,1053,11.908,1054,11.908,1055,11.908,1056,11.908,1057,11.908,1058,11.908,1059,11.908,1060,17.254,1061,11.908,1062,11.908,1063,11.908,1064,11.908,1065,10.614,1066,9.762,1067,11.908,1068,11.908,1069,11.908,1070,11.908,1071,11.908,1072,11.908,1073,11.908,1074,11.908,1075,11.908,1076,11.908,1077,10.614,1078,11.908,1079,11.908,1080,11.908,1081,17.254,1082,20.05,1083,11.908,1084,11.908]],["docTitle/docs/compass/0.1/references/compass-configuration-options",[0,3.439]],["docBody/docs/compass/0.1/references/compass-configuration-options",[0,2.767,202,31.617]],["docTitle/docs/compass/0.1/references/merkle-tree-compute-times",[0,3.439]],["docBody/docs/compass/0.1/references/merkle-tree-compute-times",[0,2.647,147,14.971,1085,26.697,1086,36.895,1087,36.895]],["docTitle/docs/compass/0.1/references/troubleshooting",[0,3.439]],["docBody/docs/compass/0.1/references/troubleshooting",[0,2.03,4,3.419,62,15.533,149,24.052,174,14.009,384,25.221,487,21.683,956,21.683,1016,25.221,1017,25.221,1043,21.683,1060,36.125,1065,25.221,1066,23.196,1088,28.296,1089,28.296,1090,28.296,1091,28.296,1092,20.475,1093,28.296,1094,28.296]],["docTitle/docs/wallets/0.1/introduction/overview",[0,3.439]],["docBody/docs/wallets/0.1/introduction/overview",[0,3.325,188,22.311,1095,35.36,1096,24.33,1097,35.36]],["docTitle/docs/wallets/0.1/trinity/introduction/overview",[0,3.439]],["docBody/docs/wallets/0.1/trinity/introduction/overview",[0,3.492,4,4.653,33,4.14,188,19.358,189,27.346,1098,30.68,1099,30.68,1100,30.68]],["docTitle/docs/wallets/0.1/trinity/concepts/hardware-wallet",[0,3.439]],["docBody/docs/wallets/0.1/trinity/concepts/hardware-wallet",[0,3.498,4,2.988,42,14.013,47,33.796,48,7.794,68,10.482,892,22.041,893,20.271,954,33.796,1101,37.917,1102,24.729,1103,24.729,1104,24.729,1105,24.729,1106,24.729,1107,24.729]],["docTitle/docs/wallets/0.1/trinity/concepts/node-quorum",[0,3.439]],["docBody/docs/wallets/0.1/trinity/concepts/node-quorum",[0,3.116,48,11.8,1108,37.437]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-an-account",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-an-account",[0,3.509,33,5.68,38,25.15,78,25.15,192,22.199,193,23.509]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/back-up-seed",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/back-up-seed",[0,3.517,4,4.517,55,17.401,66,26.09,1109,29.271,1110,29.271,1111,29.271,1112,26.09]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop",[0,3.456,62,11.85,64,15.621,65,13.621,188,13.621,1113,21.588,1114,21.588,1115,31.425,1116,21.588,1117,21.588,1118,35.293,1119,19.242,1120,21.588,1121,21.588,1122,21.588,1123,30.459,1124,21.588,1125,31.457,1126,21.588,1127,21.588,1128,35.293,1129,21.588,1130,21.588,1131,21.588,1132,21.588,1133,21.588]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/read-your-balance",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/read-your-balance",[0,3.292,174,12.94]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/send-a-transaction",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/send-a-transaction",[0,3.494,4,5.009,33,5.825,55,12.098,91,18.805,197,16.398,1134,21.304,1135,25.989,1136,25.989,1137,25.989,1138,25.989,1139,21.304]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction",[0,3.447,33,4.14,55,17.927,197,24.299,1134,25.15,1139,31.568,1140,30.68,1141,25.15]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code",[1141,39.293]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code",[0,2.871,33,4.405,37,18.498,91,23.621,124,14.484,1141,35.479,1142,32.644,1143,32.644,1144,32.644,1145,32.644,1146,32.644]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/create-deep-link",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/create-deep-link",[0,3.543,33,4.901,61,8.982,144,20.25,1147,27.986,1148,27.986,1149,27.986,1150,27.986,1151,27.986]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node",[0,3.542,33,4.732,61,8.515,188,16.74,481,19.197,665,16.74,776,13.725,1152,26.53,1153,23.647,1154,26.53,1155,26.53,1156,26.53]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/manage-your-account",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/manage-your-account",[0,3.594,33,3.273,79,19.885,192,17.553,544,21.622,1153,21.622,1157,24.258]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings",[0,3.49,1158,34.406,1159,28.204]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings",[0,3.498,17,8.982,188,26.921,1160,24.944,1161,27.986,1162,27.986,1163,36.316,1164,27.986,1165,27.986,1166,27.986]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings",[0,3.482,4,4.102,61,10.896,174,11.734]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition",[0,3.543,33,4.091,956,23.23,1167,30.315,1168,27.021,1169,30.315]],["docTitle/docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity",[0,3.439]],["docBody/docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity",[0,3.496,33,4.059,62,11.643,64,9.654,65,18.98,71,10.223,87,14.593,92,11.892,95,8.418,99,10.937,122,9.411,188,8.418,418,13.383,424,10.223,431,9.636,432,10.223,487,10.223,502,11.892,523,10.223,675,16.253,708,7.818,835,10.223,940,10.937,1082,10.937,1119,11.892,1134,10.937,1170,13.341,1171,21.21,1172,13.341,1173,13.341,1174,13.341,1175,13.341,1176,13.341,1177,13.341,1178,13.341,1179,21.21,1180,18.905,1181,21.21,1182,13.341,1183,13.341,1184,10.937,1185,13.341,1186,13.341,1187,13.341,1188,13.341,1189,13.341,1190,13.341,1191,13.341,1192,13.341,1193,13.341,1194,13.341,1195,13.341,1196,13.341,1197,13.341,1198,13.341,1199,13.341,1200,13.341,1201,13.341,1202,13.341,1203,13.341,1204,13.341,1205,13.341,1206,13.341,1207,13.341,1208,13.341]],["docTitle/docs/wallets/0.1/trinity/references/troubleshooting",[0,3.439]],["docBody/docs/wallets/0.1/trinity/references/troubleshooting",[0,3.573,4,4.124,33,4.605,963,22.702,1209,25.47,1210,20.879,1211,25.47,1212,25.47]],["docTitle/docs/wallets/0.1/hub/introduction/overview",[0,3.439]],["docBody/docs/wallets/0.1/hub/introduction/overview",[0,3.451,4,5.163,33,4.575,48,7.949,59,11.081,1213,25.218,1214,25.218,1215,23.326,1216,25.218,1217,25.218,1218,25.218,1219,22.477,1220,25.218,1221,25.218,1222,25.218,1223,25.218,1224,25.218]],["docTitle/docs/wallets/0.1/hub/concepts/sweeps",[0,3.439]],["docBody/docs/wallets/0.1/hub/concepts/sweeps",[0,3.493,4,3.345,17,8.885,33,4.866,48,8.725,55,12.887,1225,27.682,1226,27.682,1227,27.682,1228,27.682,1229,27.682,1230,27.682,1231,27.682,1232,27.682]],["docTitle/docs/wallets/0.1/hub/how-to-guides/install-hub",[0,3.439]],["docBody/docs/wallets/0.1/hub/how-to-guides/install-hub",[0,3.505,4,1.692,33,3.677,61,4.494,62,7.685,79,11.477,113,15.161,141,7.456,418,8.834,431,10.011,481,10.131,677,15.944,708,8.205,965,15.161,978,9.633,1043,23.679,1096,21.261,1160,12.479,1233,14.001,1234,9.207,1235,14.001,1236,19.64,1237,12.479,1238,14.001,1239,14.001,1240,12.479,1241,14.001,1242,14.001,1243,14.001,1244,14.001,1245,14.001,1246,14.001,1247,14.001,1248,14.001,1249,30.901,1250,14.001,1251,14.001,1252,12.479,1253,14.001,1254,11.477,1255,14.001,1256,14.001,1257,19.64,1258,14.001,1259,14.001,1260,12.479,1261,12.479,1262,14.001,1263,14.001,1264,14.001,1265,14.001,1266,14.001,1267,14.001,1268,14.001,1269,14.001,1270,14.001]],["docTitle/docs/wallets/0.1/hub/how-to-guides/install-the-signing-server",[0,3.439]],["docBody/docs/wallets/0.1/hub/how-to-guides/install-the-signing-server",[0,3.478,4,1.912,61,5.079,68,6.708,96,9.986,113,10.889,141,8.428,431,7.19,677,11.451,708,9.274,965,10.889,1043,22.567,1096,10.889,1180,14.106,1219,14.106,1234,10.407,1236,14.106,1237,14.106,1240,14.106,1254,12.973,1257,31.709,1260,14.106,1261,14.106,1271,33.001,1272,15.826,1273,15.826,1274,15.826,1275,37.526,1276,29.45,1277,29.45,1278,15.826,1279,15.826,1280,24.234,1281,24.234,1282,15.826,1283,15.826,1284,15.826,1285,15.826,1286,15.826,1287,15.826,1288,15.826,1289,15.826,1290,15.826,1291,15.826]],["docTitle/docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api",[59,11.212,1215,23.601]],["docBody/docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api",[0,3.444,33,5.525,59,10.199,100,20.52,522,15.374,776,11.56,1215,21.47,1254,18.317,1292,22.345,1293,22.345,1294,22.345,1295,22.345,1296,22.345,1297,22.345,1298,22.345,1299,22.345,1300,22.345,1301,22.345,1302,22.345,1303,19.916,1304,22.345,1305,22.345,1306,22.345,1307,22.345,1308,22.345,1309,22.345,1310,22.345]],["docTitle/docs/wallets/0.1/hub/how-to-guides/query-the-database",[1311,39.293]],["docBody/docs/wallets/0.1/hub/how-to-guides/query-the-database",[0,3.37,33,5.649,1096,20.858,1215,20.858,1252,34.067,1311,31.331,1312,30.315,1313,30.315,1314,27.021,1315,30.315]],["docTitle/docs/wallets/0.1/hub/how-to-guides/integrate-hub",[0,3.439]],["docBody/docs/wallets/0.1/hub/how-to-guides/integrate-hub",[0,3.49,4,5.522,17,10.876,33,4.573,48,6.323,61,11.901,115,14.515,1311,23.694,1316,20.059,1317,20.059,1318,20.059,1319,20.059,1320,28.905,1321,20.059,1322,20.059,1323,20.059,1324,20.059,1325,20.059,1326,20.059]],["docTitle/docs/wallets/0.1/hub/how-to-guides/rescue-tokens",[4,5.792]],["docBody/docs/wallets/0.1/hub/how-to-guides/rescue-tokens",[0,3.484,4,4.539,17,5.758,33,5.069,48,5.655,61,5.758,68,11.292,94,6.703,95,11.321,96,11.321,120,9.555,122,7.96,123,8.151,124,7.96,135,14.708,136,14.708,138,14.708,141,9.555,305,20.413,922,15.992,1327,17.942,1328,17.942,1329,17.942,1330,17.942,1331,17.942,1332,17.942,1333,17.942,1334,26.64,1335,17.942,1336,17.942,1337,17.942,1338,17.942,1339,17.942,1340,17.942,1341,17.942,1342,17.942,1343,17.942,1344,17.942,1345,17.942]],["docTitle/docs/wallets/0.1/hub/references/api-reference",[59,15.668]],["docBody/docs/wallets/0.1/hub/references/api-reference",[0,2.919,33,2.963,59,7.178,1096,15.109,1215,21.21,1346,21.96,1347,21.96,1348,21.96,1349,21.96,1350,21.96,1351,21.96,1352,21.96,1353,21.96,1354,21.96,1355,21.96,1356,21.96,1357,21.96,1358,21.96,1359,21.96,1360,21.96,1361,21.96,1362,21.96,1363,21.96,1364,21.96,1365,21.96,1366,21.96,1367,21.96,1368,21.96,1369,21.96,1370,21.96,1371,21.96,1372,21.96,1373,21.96,1374,21.96,1375,21.96,1376,21.96,1377,21.96,1378,21.96,1379,21.96,1380,21.96,1381,21.96,1382,21.96,1383,21.96,1384,21.96,1385,21.96,1386,21.96,1387,21.96]],["docTitle/docs/wallets/0.1/hub/references/command-line-flags",[0,3.439]],["docBody/docs/wallets/0.1/hub/references/command-line-flags",[0,3.408,4,4.333,1388,35.858]],["docTitle/docs/wallets/0.1/hub/references/database-tables",[0,3.439]],["docBody/docs/wallets/0.1/hub/references/database-tables",[0,3.446,59,9.568,1303,26.09,1314,26.09,1389,29.271,1390,29.271,1391,29.271,1392,29.271,1393,29.271,1394,29.271,1395,29.271,1396,29.271,1397,29.271,1398,29.271]],["docTitle/docs/wallets/0.1/hub/references/security-considerations",[0,3.439]],["docBody/docs/wallets/0.1/hub/references/security-considerations",[0,3.504,4,5.311,17,12.267,55,14.112,1399,30.315]],["docTitle/docs/wallets/0.1/hub/references/troubleshooting",[0,3.439]],["docBody/docs/wallets/0.1/hub/references/troubleshooting",[0,3.013,522,24.33,562,31.518,1215,24.33,1400,35.36,1401,35.36,1402,35.36]],["docTitle/docs/utils/0.1/introduction/overview",[0,3.439]],["docBody/docs/utils/0.1/introduction/overview",[0,3.449,4,5.092,413,29.531,422,13.272,431,12.309,1403,24.149,1404,27.094,1405,20.836,1406,14.429,1407,27.094]],["docTitle/docs/utils/0.1/community/mam-watcher/overview",[422,23.481]],["docBody/docs/utils/0.1/community/mam-watcher/overview",[0,3.484,4,2.724,33,4.237,61,7.235,63,17.274,113,15.51,422,21.803,431,10.241,708,13.21,1408,22.542,1409,18.479,1410,20.092,1411,36.126,1412,22.542,1413,18.479,1414,22.542,1415,22.542,1416,22.542,1417,22.542,1418,22.542]],["docTitle/docs/utils/0.1/community/one-command-tangle/overview",[0,3.439]],["docBody/docs/utils/0.1/community/one-command-tangle/overview",[0,3.426,4,3.304,17,5.964,33,3.689,48,3.57,59,9.866,61,7.583,68,4.801,145,12.22,147,9.587,149,12.22,174,11.841,188,7.147,206,8.196,422,5.548,431,5.146,484,10.095,495,9.285,665,11.725,708,6.637,776,5.86,835,8.679,852,15.233,902,9.285,923,16.563,926,16.563,988,26.904,989,21.06,1036,10.095,1051,10.095,1077,10.095,1082,9.285,1085,8.196,1139,9.285,1409,9.285,1419,11.326,1420,11.326,1421,11.326,1422,11.326,1423,11.326,1424,11.326,1425,11.326,1426,11.326,1427,11.326,1428,11.326,1429,11.326,1430,11.326,1431,11.326,1432,11.326,1433,11.326,1434,11.326,1435,11.326,1436,11.326,1437,11.326,1438,11.326,1439,11.326,1440,11.326,1441,11.326,1442,11.326,1443,11.326,1444,11.326,1445,11.326,1446,11.326,1447,11.326,1448,11.326,1449,11.326,1450,11.326,1451,11.326,1452,11.326,1453,11.326,1454,11.326,1455,11.326,1456,11.326,1457,11.326,1458,11.326,1459,11.326,1460,11.326,1461,11.326,1462,11.326,1463,11.326,1464,11.326,1465,11.326,1466,11.326,1467,11.326,1468,11.326,1469,11.326]],["docTitle/docs/utils/0.1/community/raspberry-pi-pub-sub/overview",[1405,20.101,1406,18.267]],["docBody/docs/utils/0.1/community/raspberry-pi-pub-sub/overview",[0,3.406,4,4.15,61,6.594,101,12.963,125,15.213,144,14.865,145,13.51,355,18.311,422,10.064,431,9.334,708,12.039,776,10.629,905,18.311,1047,13.51,1405,17.232,1406,10.941,1409,16.841,1410,18.311,1470,20.544,1471,34.342,1472,34.342,1473,20.544,1474,20.544,1475,20.544,1476,20.544,1477,20.544,1478,20.544,1479,20.544,1480,20.544,1481,29.405,1482,29.405,1483,20.544,1484,20.544,1485,20.544]],["docTitle/docs/utils/0.1/official/iota-area-codes/overview",[4,5.792]],["docBody/docs/utils/0.1/official/iota-area-codes/overview",[0,2.569,4,3.309,17,8.789,632,24.409,1486,27.385,1487,27.385,1488,37.713,1489,27.385,1490,24.409,1491,27.385,1492,27.385,1493,27.385,1494,27.385,1495,27.385,1496,27.385,1497,27.385,1498,27.385,1499,27.385,1500,31.914,1501,27.385,1502,27.385,1503,35.806,1504,27.385]],["docTitle/docs/utils/0.1/official/iota-area-codes/get-started",[0,3.439]],["docBody/docs/utils/0.1/official/iota-area-codes/get-started",[0,3.429,4,4.497,17,6.489,33,5.022,48,6.373,59,9.502,94,7.553,120,10.767,121,11.457,122,8.97,123,9.186,124,12.898,141,10.767,147,8.204,1488,36.589,1505,20.218,1506,20.218,1507,20.218,1508,20.218,1509,20.218,1510,14.63,1511,20.218,1512,20.218,1513,18.021,1514,20.218,1515,20.218,1516,20.218,1517,20.218,1518,20.218,1519,20.218,1520,20.218]],["docTitle/docs/utils/0.1/official/tryte-compress/overview",[0,3.439]],["docBody/docs/utils/0.1/official/tryte-compress/overview",[0,3.491,4,3.914,33,4.993,59,10.588,94,8.811,95,14.881,96,14.881,120,12.56,122,10.464,123,10.715,124,10.464,141,12.56,467,21.022,1513,21.022,1521,23.585,1522,23.585,1523,23.585,1524,23.585,1525,23.585,1526,23.585,1527,23.585,1528,23.585]],["docTitle/docs/utils/0.1/official/proof-of-existance/overview",[0,3.439]],["docBody/docs/utils/0.1/official/proof-of-existance/overview",[0,3.498,4,3.68,17,9.776,33,5.455,94,8.065,95,13.621,96,13.621,120,11.497,122,9.578,123,9.808,124,9.578,141,11.497,147,8.759,825,19.242,1529,21.588,1530,21.588,1531,21.588,1532,30.459,1533,21.588,1534,21.588,1535,21.588,1536,19.242,1537,21.588,1538,21.588,1539,21.588]],["docTitle/docs/blueprints/0.1/introduction/overview",[0,3.439]],["docBody/docs/blueprints/0.1/introduction/overview",[0,3.331,4,5.287,143,20.761,145,17.817,1002,31.692,1047,23.382,1540,22.21,1541,27.094,1542,22.21,1543,22.21,1544,27.094,1545,18.642,1546,27.094,1547,22.21,1548,22.21,1549,22.21,1550,27.094]],["docTitle/docs/blueprints/0.1/data-marketplace/overview",[0,3.439]],["docBody/docs/blueprints/0.1/data-marketplace/overview",[0,3.463,4,3.305,21,15.244,33,2.509,48,5.862,59,8.941,68,7.882,147,7.546,413,25.073,422,13.4,431,8.449,1047,23.529,1159,15.244,1540,15.244,1551,18.596,1552,18.596,1553,18.596,1554,18.596,1555,18.596,1556,18.596,1557,18.596,1558,18.596,1559,18.596,1560,18.596,1561,18.596,1562,18.596,1563,18.596,1564,18.596,1565,18.596,1566,18.596,1567,18.596,1568,18.596,1569,18.596,1570,16.575,1571,16.575,1572,19.793,1573,15.244,1574,15.244]],["docTitle/docs/blueprints/0.1/data-marketplace/architecture",[0,3.439]],["docBody/docs/blueprints/0.1/data-marketplace/architecture",[0,3.451,4,2.748,61,7.3,147,9.228,1047,14.956,1234,14.956,1405,13.328,1406,12.112,1510,16.457,1540,18.644,1575,22.743,1576,16.457,1577,22.743,1578,20.272,1579,22.743,1580,20.272,1581,22.743,1582,22.743,1583,20.272,1584,22.743,1585,22.743,1586,22.743,1587,20.272,1588,20.272,1589,20.272,1590,20.272,1591,20.272,1592,20.272,1593,20.272,1594,20.272,1595,20.272,1596,20.272]],["docTitle/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.439]],["docBody/docs/blueprints/0.1/data-marketplace/deployment-and-testing",[0,3.466,4,2.909,33,3.75,46,16.933,59,11.328,61,3.735,68,4.932,72,21.457,77,7.067,91,13.746,94,4.347,122,5.163,123,5.287,124,5.163,147,11.274,422,13.611,939,9.539,978,13.071,1085,8.42,1125,10.372,1159,9.539,1184,9.539,1405,6.819,1406,6.197,1500,16.933,1510,13.746,1536,10.372,1580,10.372,1583,10.372,1587,10.372,1588,10.372,1589,10.372,1590,10.372,1591,10.372,1592,10.372,1593,10.372,1594,10.372,1595,10.372,1596,10.372,1597,26.93,1598,11.636,1599,21.457,1600,24.074,1601,24.074,1602,10.372,1603,9.539,1604,11.636,1605,11.636,1606,11.636,1607,11.636,1608,18.997,1609,18.997,1610,18.997,1611,11.636,1612,11.636,1613,11.636,1614,11.636,1615,11.636,1616,11.636,1617,11.636,1618,11.636,1619,11.636,1620,11.636,1621,11.636,1622,11.636,1623,11.636,1624,11.636,1625,11.636,1626,11.636]],["docTitle/docs/blueprints/0.1/doc-immutability/overview",[0,3.439]],["docBody/docs/blueprints/0.1/doc-immutability/overview",[0,3.462,4,4.484,100,19.03,143,22.175,147,11.742,413,24.403,431,13.147,1234,19.03,1510,20.94,1542,23.722,1627,28.939,1628,28.939]],["docTitle/docs/blueprints/0.1/doc-immutability/architecture",[0,3.439]],["docBody/docs/blueprints/0.1/doc-immutability/architecture",[0,3.512,4,2.563,17,8.473,42,7.56,48,6.685,61,8.473,68,11.19,73,13.383,77,12.881,94,4.984,97,8.773,101,13.383,143,10.223,214,26.812,323,23.531,498,10.223,978,18.165,1115,10.937,1234,8.773,1542,26.909,1572,15.347,1576,15.347,1603,10.937,1629,11.892,1630,9.179,1631,21.21,1632,13.341,1633,13.341,1634,13.341,1635,13.341,1636,13.341,1637,13.341,1638,13.341,1639,13.341,1640,13.341,1641,13.341,1642,13.341,1643,13.341,1644,13.341,1645,13.341,1646,13.341,1647,21.21,1648,13.341,1649,21.21,1650,13.341,1651,13.341,1652,13.341,1653,13.341,1654,13.341,1655,13.341]],["docTitle/docs/blueprints/0.1/p2p-energy/overview",[1545,32.98]],["docBody/docs/blueprints/0.1/p2p-energy/overview",[0,2.955,33,3.95,85,26.09,413,27.082,422,18.311,1543,23.995,1545,25.719,1572,27.048,1573,23.995,1574,23.995,1630,20.14,1656,29.271,1657,29.271,1658,29.271,1659,29.271,1660,29.271]],["docTitle/docs/blueprints/0.1/p2p-energy/architecture",[0,3.439]],["docBody/docs/blueprints/0.1/p2p-energy/architecture",[0,3.49,4,1.555,59,12.272,61,4.131,147,8.363,195,16.895,422,18.391,978,8.855,1234,8.463,1403,11.471,1543,28.202,1545,23.671,1576,9.313,1578,11.471,1630,23.671,1661,12.87,1662,12.87,1663,12.87,1664,20.61,1665,12.87,1666,12.87,1667,12.87,1668,25.777,1669,12.87,1670,12.87,1671,12.87,1672,12.87,1673,12.87,1674,12.87,1675,20.61,1676,12.87,1677,12.87,1678,12.87,1679,12.87,1680,12.87,1681,12.87,1682,12.87,1683,12.87,1684,12.87,1685,12.87,1686,12.87,1687,12.87,1688,25.777,1689,12.87,1690,12.87,1691,12.87,1692,12.87,1693,12.87,1694,12.87,1695,12.87]],["docTitle/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[1545,32.98]],["docBody/docs/blueprints/0.1/p2p-energy/deployment-and-testing",[0,3.402,4,4.916,33,2.963,59,10.076,77,13.336,94,15.199,147,12.508,422,15.101,431,9.977,1085,15.89,1184,18.001,1405,12.869,1406,11.695,1545,26.576,1599,19.573,1602,19.573,1603,18.001,1696,21.96,1697,21.96,1698,21.96,1699,35.622,1700,21.96]],["docTitle/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.439]],["docBody/docs/blueprints/0.1/tangle-data-storage/overview",[0,3.528,4,4.771,33,3.618,147,10.878,413,25.964,431,12.18,1572,25.55,1701,21.976,1702,26.809]],["docTitle/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.439]],["docBody/docs/blueprints/0.1/tangle-data-storage/architecture",[0,3.327,59,11.573,61,8.64,94,6.799,351,14.918,1047,21.07,1085,13.168,1092,23.184,1115,26.265,1234,11.967,1547,26.265,1576,19.48,1629,16.22,1630,24.362,1701,26.265,1703,18.198,1704,16.22,1705,16.22,1706,18.198,1707,18.198,1708,32.04,1709,18.198,1710,18.198,1711,18.198,1712,18.198,1713,18.198,1714,18.198,1715,18.198,1716,16.22,1717,18.198,1718,18.198,1719,18.198,1720,18.198,1721,18.198,1722,18.198,1723,18.198,1724,16.22,1725,18.198,1726,18.198,1727,18.198,1728,18.198]],["docTitle/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.439]],["docBody/docs/blueprints/0.1/tangle-data-storage/deployment-and-testing",[0,3.139,4,4.839,33,2.841,59,6.881,94,7.865,431,9.565,1047,26.333,1092,30.107,1547,32.826,1630,28.629,1701,32.826,1704,18.765,1705,18.765,1724,31.028,1729,21.053,1730,34.811,1731,21.053,1732,21.053,1733,21.053,1734,21.053]],["docTitle/docs/blueprints/0.1/track-and-trace/overview",[0,3.439]],["docBody/docs/blueprints/0.1/track-and-trace/overview",[0,3.552,4,2.631,33,2.938,147,8.834,413,23.316,422,15.01,852,17.848,1548,17.848,1549,17.848,1572,22.172,1573,17.848,1574,17.848,1735,21.772,1736,21.772,1737,21.772,1738,21.772,1739,21.772,1740,21.772,1741,21.772]],["docTitle/docs/blueprints/0.1/track-and-trace/architecture",[0,3.439]],["docBody/docs/blueprints/0.1/track-and-trace/architecture",[0,3.188,4,4.308,17,5.925,48,5.819,61,5.925,101,11.649,422,18.622,995,16.455,1490,24.251,1548,26.487,1549,26.487,1571,16.455,1576,13.358,1742,18.461,1743,18.461,1744,18.461,1745,18.461,1746,18.461,1747,18.461,1748,18.461,1749,18.461,1750,24.251,1751,27.208,1752,18.461,1753,18.461,1754,18.461,1755,18.461,1756,18.461,1757,18.461,1758,18.461,1759,18.461,1760,18.461,1761,18.461,1762,18.461,1763,18.461,1764,18.461,1765,18.461,1766,18.461,1767,18.461,1768,18.461,1769,18.461,1770,18.461,1771,18.461,1772,18.461,1773,18.461,1774,18.461,1775,18.461,1776,18.461,1777,18.461,1778,18.461]],["docTitle/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.439]],["docBody/docs/blueprints/0.1/track-and-trace/deployment-and-testing",[0,3.141,147,13.594,174,11.58,431,15.221,1630,23.051,1779,33.502,1780,40.659,1781,33.502,1782,33.502]],["docTitle/docs/iota-go/0.1/introduction/overview",[0,3.439]],["docBody/docs/iota-go/0.1/introduction/overview",[0,3.401,4,4.796,33,3.656,59,8.856,61,8.696,429,18.945,1783,22.21,1784,22.21,1785,22.21,1786,22.21,1787,22.21,1788,22.21,1789,22.21,1790,22.21,1791,22.21,1792,22.21,1793,22.21]],["docTitle/docs/iota-go/0.1/how-to-guides/create-account",[0,3.439]],["docBody/docs/iota-go/0.1/how-to-guides/create-account",[0,3.529,4,2.565,33,4.719,55,14.012,59,6.939,61,6.813,122,9.419,123,9.644,124,9.419,776,10.982,1510,15.36,1794,17.402,1795,21.228,1796,21.228,1797,21.228,1798,21.228,1799,21.228,1800,21.228,1801,21.228,1802,21.228,1803,30.099,1804,18.921,1805,21.228,1806,21.228,1807,21.228]],["docTitle/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.439]],["docBody/docs/iota-go/0.1/how-to-guides/listen-to-events",[0,3.515,33,4.191,776,16.066,1808,31.054,1809,25.456,1810,31.054,1811,31.054]],["docTitle/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.439]],["docBody/docs/iota-go/0.1/how-to-guides/create-and-manage-cda",[0,3.38,33,5.652,125,12.316,429,21.527,1750,21.218,1812,19.514,1813,19.514,1814,19.514,1815,19.514,1816,19.514,1817,23.805,1818,23.805,1819,23.805,1820,23.805,1821,23.805,1822,19.514,1823,19.514,1824,19.514,1825,19.514,1826,23.805,1827,21.218]],["docTitle/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.439]],["docBody/docs/iota-go/0.1/how-to-guides/create-plugin",[0,3.498,33,4.901,106,18.403,192,20.25,193,21.445,495,22.941,776,14.478,1828,27.986,1829,27.986,1830,27.986,1831,27.986,1832,27.986,1833,27.986]],["docTitle/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.439]],["docBody/docs/iota-go/0.1/how-to-guides/import-seed-state",[0,3.509,33,4.14,55,14.282,61,9.847,1834,30.68,1835,30.68,1836,30.68,1837,30.68]],["docTitle/docs/iota-go/0.1/references/cda-advice",[429,22.881]],["docBody/docs/iota-go/0.1/references/cda-advice",[0,3.037,55,14.456,429,18.522,1838,25.456,1839,25.456,1840,25.456,1841,31.808,1842,25.456,1843,25.456,1844,25.456,1845,25.456,1846,25.456,1847,25.456,1848,25.456]],["docTitle/docs/iota-java/0.1/introduction/overview",[0,3.439]],["docBody/docs/iota-java/0.1/introduction/overview",[0,3.401,4,4.796,33,3.656,59,8.856,61,8.696,429,18.945,1783,22.21,1784,22.21,1785,22.21,1786,22.21,1787,22.21,1788,22.21,1789,22.21,1790,22.21,1791,22.21,1792,22.21,1793,22.21]],["docTitle/docs/iota-java/0.1/how-to-guides/create-account",[0,3.439]],["docBody/docs/iota-java/0.1/how-to-guides/create-account",[0,3.542,4,2.798,33,4.317,55,14.891,61,7.432,81,15.228,102,15.228,122,10.274,123,10.52,124,10.274,429,11.054,776,11.98,1716,20.64,1794,18.982,1849,23.156,1850,23.156,1851,23.156,1852,23.156,1853,23.156]],["docTitle/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.439]],["docBody/docs/iota-java/0.1/how-to-guides/listen-to-events",[0,3.523,776,16.888,1809,26.76,1854,32.644]],["docTitle/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.439]],["docBody/docs/iota-java/0.1/how-to-guides/create-and-manage-cda",[0,3.213,33,5.663,125,13.869,429,22.584,1812,21.976,1813,21.976,1814,21.976,1815,21.976,1816,21.976,1822,21.976,1823,21.976,1824,21.976,1825,21.976,1827,23.895]],["docTitle/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.439]],["docBody/docs/iota-java/0.1/how-to-guides/create-plugin",[0,3.401,17,9.615,48,9.443,776,15.499,1011,37.108,1855,29.959,1856,41.632,1857,29.959,1858,29.959,1859,29.959]],["docTitle/docs/iota-java/0.1/references/cda-advice",[429,22.881]],["docBody/docs/iota-java/0.1/references/cda-advice",[0,3.037,55,14.456,429,18.522,1838,25.456,1839,25.456,1840,25.456,1841,31.808,1842,25.456,1843,25.456,1844,25.456,1845,25.456,1846,25.456,1847,25.456,1848,25.456]],["docTitle/docs/iota-js/0.1/introduction/overview",[0,3.439]],["docBody/docs/iota-js/0.1/introduction/overview",[0,3.401,4,4.796,33,3.656,59,8.856,61,8.696,429,18.945,1783,22.21,1784,22.21,1785,22.21,1786,22.21,1787,22.21,1788,22.21,1789,22.21,1790,22.21,1791,22.21,1792,22.21,1793,22.21]],["docTitle/docs/iota-js/0.1/how-to-guides/create-account",[0,3.439]],["docBody/docs/iota-js/0.1/how-to-guides/create-account",[0,3.517,4,2.904,33,3.243,48,7.574,61,10.531,94,8.977,120,12.797,121,13.617,122,10.661,123,10.917,124,10.661,192,17.387,776,12.432,1794,19.698,1804,21.418,1860,24.029,1861,24.029,1862,24.029,1863,24.029,1864,24.029,1865,24.029]],["docTitle/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.439]],["docBody/docs/iota-js/0.1/how-to-guides/listen-to-events",[0,3.524,33,4.14,94,11.462,429,14.645,776,15.872,1809,25.15,1866,30.68]],["docTitle/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.439]],["docBody/docs/iota-js/0.1/how-to-guides/create-and-manage-cda",[0,3.363,33,5.785,125,13.177,429,21.065,1812,20.879,1813,20.879,1814,20.879,1815,20.879,1816,20.879,1822,20.879,1823,20.879,1824,20.879,1825,20.879,1867,25.47,1868,25.47,1869,25.47,1870,25.47,1871,25.47]],["docTitle/docs/iota-js/0.1/references/cda-advice",[429,22.881]],["docBody/docs/iota-js/0.1/references/cda-advice",[0,3.037,55,14.456,429,18.522,1838,25.456,1839,25.456,1840,25.456,1841,31.808,1842,25.456,1843,25.456,1844,25.456,1845,25.456,1846,25.456,1847,25.456,1848,25.456]],["docTitle/docs/general/0.1/introduction/overview",[0,3.439]],["docBody/docs/general/0.1/introduction/overview",[0,3.116,4,4.524,1872,37.437]],["docTitle/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.439]],["docBody/docs/general/0.1/how-to-guides/expose-your-local-device",[0,3.345,4,2.109,17,5.601,33,4.218,37,9.889,48,5.5,55,8.124,62,9.579,68,7.397,81,20.553,522,12.007,677,12.627,780,22.615,965,12.007,1096,21.505,1597,14.305,1873,17.451,1874,17.451,1875,17.451,1876,17.451,1877,17.451,1878,17.451,1879,17.451,1880,17.451,1881,17.451,1882,17.451,1883,17.451,1884,34.684,1885,17.451,1886,34.684,1887,17.451,1888,17.451,1889,17.451,1890,17.451,1891,31.255,1892,17.451,1893,26.094,1894,27.858,1895,26.094,1896,26.094,1897,17.451,1898,17.451,1899,17.451,1900,17.451]],["docTitle/docs/general/0.1/how-to-guides/set-up-virtual-machine",[62,26.312]],["docBody/docs/general/0.1/how-to-guides/set-up-virtual-machine",[0,3.006,48,6.177,62,24.387,65,12.365,70,17.467,71,15.016,96,12.365,114,16.064,194,11.901,206,14.18,674,15.016,780,14.18,965,13.483,1597,23.298,1901,19.597,1902,19.597,1903,19.597,1904,19.597,1905,19.597,1906,19.597,1907,19.597,1908,19.597,1909,19.597,1910,19.597,1911,19.597,1912,19.597,1913,19.597,1914,28.421,1915,28.421,1916,19.597,1917,19.597,1918,19.597,1919,19.597,1920,16.064,1921,19.597,1922,19.597,1923,19.597,1924,19.597,1925,19.597,1926,19.597,1927,19.597,1928,19.597,1929,19.597,1930,33.441,1931,19.597,1932,19.597]],["docTitle/docs/general/0.1/how-to-guides/setup-sbc",[0,3.439]],["docBody/docs/general/0.1/how-to-guides/setup-sbc",[0,3.385,33,3.743,61,4.62,193,11.031,194,8.743,615,12.832,776,14.352,780,22.703,942,11.801,1112,20.074,1406,11.994,1920,11.801,1933,14.396,1934,14.396,1935,14.396,1936,14.396,1937,14.396,1938,14.396,1939,14.396,1940,14.396,1941,27.741,1942,14.396,1943,14.396,1944,14.396,1945,34.054,1946,14.396,1947,27.741,1948,36.109,1949,22.522,1950,14.396,1951,14.396,1952,14.396,1953,14.396,1954,14.396,1955,14.396,1956,14.396,1957,14.396,1958,14.396,1959,14.396,1960,14.396,1961,14.396,1962,22.522,1963,27.741,1964,14.396,1965,14.396,1966,14.396,1967,14.396,1968,14.396,1969,14.396,1970,14.396,1971,14.396,1972,14.396,1973,14.396,1974,14.396,1975,14.396,1976,14.396,1977,14.396,1978,14.396,1979,14.396,1980,14.396,1981,14.396]],["docTitle/docs/general/0.1/how-to-guides/install-go-on-sbc",[106,31.521]],["docBody/docs/general/0.1/how-to-guides/install-go-on-sbc",[0,3.263,62,16.841,106,30.969,141,16.339,1982,30.68,1983,30.68,1984,30.68,1985,30.68,1986,30.68]],["docTitle/docs/general/0.1/references/troubleshooting",[0,3.439]],["docBody/docs/general/0.1/references/troubleshooting",[0,3.196,675,26.725,1040,31.086,1987,34.877,1988,34.877,1989,34.877,1990,34.877]],["docTitle/docs/smartcity/0.1/introduction/overview",[4,5.792]],["docBody/docs/smartcity/0.1/introduction/overview",[0,2.917,4,4.913,665,21.139,1405,19.633,1406,17.841,1991,33.502,1992,33.502,1993,33.502,1994,29.861,1995,33.502]],["docTitle/docs/smartcity/0.1/astropiota/introduction/overview",[426,29.11]],["docBody/docs/smartcity/0.1/astropiota/introduction/overview",[0,3.356,422,12.996,424,20.329,426,25.38,1406,14.128,1996,26.53,1997,26.53,1998,26.53,1999,24.128,2000,26.53,2001,26.53,2002,24.128,2003,26.53,2004,23.647,2005,26.53,2006,26.53,2007,26.53,2008,23.647,2009,23.647]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/build",[426,29.11]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/build",[0,2.289,68,13.525,86,23.869,97,11.882,426,16.264,523,13.846,996,14.812,1081,16.105,1092,13.074,1168,23.869,1210,14.812,1405,25.545,1406,22.338,1570,16.105,1994,16.105,1999,18.426,2002,18.426,2010,18.069,2011,26.78,2012,18.069,2013,18.069,2014,26.78,2015,26.78,2016,16.105,2017,18.069,2018,18.069,2019,18.069,2020,18.069,2021,18.069,2022,18.069,2023,18.069,2024,18.069,2025,18.069,2026,18.069,2027,18.069,2028,18.069,2029,18.069,2030,18.069,2031,18.069,2032,18.069,2033,18.069,2034,16.105,2035,18.069,2036,16.105,2037,16.105,2038,14.812,2039,14.812,2040,18.069,2041,18.069]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/run",[426,29.11]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/run",[0,2.98,4,3.875,37,13.169,65,17.96,94,11.98,97,15.283,100,9.856,101,17.96,195,12.287,206,16.816,422,7.342,426,21.076,665,14.664,1010,12.287,1066,12.287,1405,22.445,1406,19.553,1413,19.051,1894,20.714,1920,12.287,1999,23.877,2002,27.236,2034,20.714,2038,23.333,2039,23.333,2042,14.988,2043,14.988,2044,14.988,2045,14.988,2046,14.988,2047,14.988,2048,23.24,2049,14.988,2050,14.988,2051,14.988,2052,14.988,2053,14.988,2054,14.988,2055,14.988,2056,14.988,2057,14.988,2058,14.988,2059,14.988,2060,14.988,2061,13.36,2062,14.988,2063,23.24,2064,14.988]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/connect",[1406,18.267,2065,30.573]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/connect",[0,2.465,418,16.233,996,28.165,1092,18.615,1210,21.089,1405,22.67,1406,20.601,2036,30.624,2037,22.931,2038,28.165,2039,28.165,2061,22.931,2065,22.931,2066,25.727,2067,25.727,2068,25.727,2069,34.358,2070,25.727,2071,25.727,2072,25.727,2073,25.727,2074,25.727,2075,25.727,2076,25.727,2077,25.727]],["docTitle/docs/smartcity/0.1/astropiota/how-to-guides/customize",[426,29.11]],["docBody/docs/smartcity/0.1/astropiota/how-to-guides/customize",[0,1.724,49,18.413,422,11.771,424,18.413,426,24.381,1413,19.698,1999,27.622,2002,22.575,2004,21.418,2008,21.418,2009,21.418,2078,24.029,2079,24.029,2080,24.029,2081,24.029,2082,24.029,2083,24.029,2084,24.029,2085,24.029,2086,24.029,2087,24.029,2088,24.029,2089,24.029,2090,24.029,2091,24.029,2092,24.029,2093,24.029,2094,24.029,2095,24.029,2096,24.029,2097,24.029,2098,24.029,2099,24.029,2100,24.029,2101,24.029]],["docTitle/docs/smartcity/0.1/astropiota/references/sensehat-specs",[1999,23.601,2002,23.601]],["docBody/docs/smartcity/0.1/astropiota/references/sensehat-specs",[0,3.139,77,23.027,81,16.262,379,22.041,1999,26.089,2002,23.019,2016,22.041,2102,24.729,2103,24.729,2104,37.917,2105,24.729,2106,24.729,2107,24.729,2108,24.729,2109,24.729,2110,24.729,2111,24.729,2112,24.729,2113,24.729,2114,24.729,2115,24.729,2116,24.729,2117,24.729,2118,24.729,2119,24.729,2120,24.729,2121,24.729]]],"invertedIndex":[["",{"_index":0,"docTitle":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-transaction":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/references/troubleshooting":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-transaction":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/compass-configuration-options":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{},"docs/general/0.1/references/troubleshooting":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["0",{"_index":42,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["0.2で、スクロールテキストは読むのに十分遅くなりますが、遅くなりすぎません。backcolourとtextcolourは、0から255までのrgb",{"_index":2091,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["000トリットはトライトでは9",{"_index":315,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["01",{"_index":1881,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["02_run_iri.sh",{"_index":1062,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["0、1、2から100miを取り出し、送信者がその3",{"_index":52,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["0に設定し、ネットマスクをnmap",{"_index":1977,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["0またはvalu",{"_index":851,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["0トリットで終わっていない場合、トランザクションのnonc",{"_index":319,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["0（インデックスが0のトランザクション）。iri",{"_index":406,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1",{"_index":48,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/concepts/node-quorum":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["1,000トランザクション（tps）を送信します。tpsを変更したい場合は、tpsクエリパラメータを追加することができます。たとえば、10,000tpsを送信するには、次のようにエンドポイントにリクエストを送信します。http&#x3a;//localhost:8080/spammer?cmd=start&tps=10000",{"_index":1021,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1.0",{"_index":2018,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["1.0.0",{"_index":545,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.11",{"_index":560,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["1.58",{"_index":508,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["1.7.25",{"_index":497,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["10",{"_index":95,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/references/tryte-alphabet":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["10.2.1を使用します。check制約はテーブルに追加できるデータを制限します。無効なデータを列に挿入しようとすると、mariadb",{"_index":1242,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["10.3.10がインストールされていることがわかります。これは、最小の10.2.1",{"_index":1253,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["100",{"_index":632,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["1000分の1セント未満の支払総額が発生する可能性があります。1miの現在の価格である1,000,000（100万）iotaトークンを確認することをお勧めします。センサーのコストと保守作業に応じて、1,000iから50,000i",{"_index":1613,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["100個のマイルストーンを取得し、それらをseen",{"_index":636,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["10gb",{"_index":823,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10gb以上のssd",{"_index":1041,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["10miとします。あなたのシードは2つのアドレス（インデックス0と1）を持ち、両方とも5miを含みます。したがって、3つのトランザクションを作成します。アドレス0から5miを取り出す入力トランザクション、アドレス1から5miを取り出す入力トランザクション、およびベンダーのアドレスに10miを支払う出力トランザクションです。（入力トランザクションの両方のアドレスがセキュリティレベル1",{"_index":294,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["10miを受け取るには、これら3つのトランザクションすべてが有効でなければなりません。各トランザクションは、iota",{"_index":295,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["10のアドレスを見つけます。timewindowall関数はallwindowedstreamを返します。そのため、すべての要素が1つのストリームにまとめられます。パーティションでslidingwindowを使用したので、ここでの時間はそれほど重要ではありません。よって、1",{"_index":859,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["10以上。最新のlt",{"_index":121,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["10分以上ペンディングの場合は、バンドルを再添付することをお勧めします。10",{"_index":327,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["10年間で、750",{"_index":1555,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["11",{"_index":2032,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["120",{"_index":794,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["128",{"_index":1645,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["128ビットのハッシュアルゴリズム（例：sha256）を使用することをお勧めします。md5やsha1",{"_index":1646,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["14",{"_index":1504,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["14265",{"_index":682,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["14626（tcp/udp）と14666（tcp",{"_index":982,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["15600",{"_index":680,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["16gbのramと2つの仮想cpuを備えたamazon",{"_index":934,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["16ビット（rgb",{"_index":2113,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["17.05",{"_index":748,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18.04",{"_index":677,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["18.04）の場合は、build",{"_index":870,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["18でiri",{"_index":966,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["1i",{"_index":1167,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["1ki（1000i",{"_index":160,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["1ki（1000）のspamnet",{"_index":224,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["1、2、または3",{"_index":392,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1から3",{"_index":266,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つからiotaトークンを取り出すトランザクションを送信した場合、そのアドレスからは2度とiota",{"_index":1140,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{}}}],["1つにテストデータを公開したくないかもしれません。代わりに、iota",{"_index":1420,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["1つにドキュメントを保存し、後で検証を行うときにドキュメントを再度取得するためのurl",{"_index":1641,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["1つのcda",{"_index":1822,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["1つのiriノードと1",{"_index":1423,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["1つのアドレスから2回以上iotaトークンを取り出すと（署名すると）、より多くの秘密鍵が漏洩するため、攻撃者はその署名に総当たり攻撃を行いiota",{"_index":280,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つのトランザクションに収まらない場合があります。この場合、署名の残りの部分は、1つまたは2",{"_index":278,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1つは、iota",{"_index":237,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["1つ以上のカスタムノードを接続できます。たとえば、あなた自身のノードに接続することができたり、さらにはdevnet",{"_index":1152,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["1として表すことができます。これらの値はトリットと呼ばれます。3トリットは1トライトに相当します。これは27（33",{"_index":332,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["1とリーフ2の公開鍵をハッシュ化してノード1のハッシュ値を見つけます。次に、ノード1とノード2",{"_index":262,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["1のアドレスから80i",{"_index":306,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["1の新しい預け入れアドレスが表示されます。トリニティで試してみるために、iota",{"_index":1268,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["1は、リーフ1の公開鍵とリーフ2の公開鍵の両方をハッシュ化した結果のハッシュ値です。ノード2は、リーフ3の公開鍵とリーフ4の公開鍵の両方をハッシュ化した結果のハッシュ値です。コーディネーターのアドレスは、ノード1とノード2",{"_index":259,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["1より大きい場合、署名は1",{"_index":297,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["1を参照し、トランザクション1はトランザクション2",{"_index":43,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["1トライトは27の値を表すことができる3トリットです。したがって、27文字が必要で、iotaでは'abcdefghijklmnopqrstuvwxyz9",{"_index":411,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["1分程度待つと、トランザクションが確定されたときにzmq",{"_index":1483,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["1回だけ作成および登録されます。資産の管理権は時間の経過とともに変化し、特定の資産の管理権の変化に関連する情報を集約するためにmamチャネルを使用することは意味があります。mamチャネルを使用することにより、実装の複雑さを制限でき、すべての異なる管理権の変更を適切な資産に簡単にリンクできます。さらに、mam",{"_index":1760,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["1回でもiota",{"_index":166,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["1回のデータ購入を完了するために必要なすべての煩雑な事務的手続きは言うまでもありません。これらの条件により、リアルタイムのデータ取引はほとんど不可能になります。2025年までに、全データの約95％がリアルタイムでiotデバイスによって生成されると予測されているため（出典：idc",{"_index":1561,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["1回ハッシュ化されて、セキュリティレベルごとに1つのキーダイジェストを導出します。次に、キーダイジェストが結合され、1回ハッシュ化されて、81",{"_index":274,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1回ハッシュ化されます。そしてキーダイジェストは結合され、81トライトのアドレスを導出するために1",{"_index":285,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["1時間に最も使用された上位10",{"_index":842,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1時間以内のアドレスごとのトランザクション数を計算する必要があります。スライディングウィンドウはこれに役立ちます。今回のユースケースでは、30",{"_index":855,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["1番目のトランザクションの詳細を見るには、1番目のトランザクションのハッシュをコピーしてdevnet.thetangle.orgに貼り付けます。これらの詳細は、web",{"_index":354,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["1秒あたりのトランザクション数。2つのカテゴリに分けられます。receiv",{"_index":998,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["1秒間に処理できるトランザクション数をテストするには、spammerapi",{"_index":1019,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["1：astropiota",{"_index":1991,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["2",{"_index":17,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["2,187トライト、4374トライト、または6,561トライトで構成されているため、秘密鍵にはセキュリティレベルごとに1つのキーフラグメントが存在します。たとえば、セキュリティレベル1の秘密鍵は2,187トライトで構成されています。よってセキュリティレベル1の秘密鍵は2,178/81=27より、27個のセグメントからなり、1つのキーフラグメントになります。セキュリティレベル2では2つのキーフラグメント、セキュリティレベル3では3",{"_index":273,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["2,779,530,283",{"_index":13,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2.0",{"_index":557,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.0、mit。通常iota財団のライブラリiota.j",{"_index":1638,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2.3.0",{"_index":493,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.5",{"_index":503,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["2.7",{"_index":1179,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["2.7pi",{"_index":1080,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["2.7piのiota",{"_index":1061,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["20",{"_index":46,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["200",{"_index":892,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["2015",{"_index":1559,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["2016年に、ハッカーはmintと呼ばれるlinuxディストリビューション用のisoファイルにバックドアをうまく挿入しました。また、これらの改ざんされたファイルにリンクするようにwebサイトを変更しました。さらに、ハッカーは新しく生成したファイルのハッシュ値をweb",{"_index":1628,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["2017",{"_index":1562,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["20の事前にビルドされた（layerディレクトリ内の）マークル木を使用します。このマークル木は、コンパスが1年以上30",{"_index":1430,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["2128",{"_index":1647,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2256",{"_index":1649,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["24",{"_index":795,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["243",{"_index":896,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["25",{"_index":2033,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["2512",{"_index":1651,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["2673",{"_index":383,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/structure-of-a-transaction":{}}}],["27",{"_index":272,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["277,761",{"_index":14,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["27トライト、54トライト、または81",{"_index":281,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27トライト、54トライト、または81トライトが選択されます。これらのトライトは、署名フラグメント内の81",{"_index":284,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27個のセグメントそれぞれがハッシュ化される回数です。各署名フラグメントには2,187",{"_index":282,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["27回スポンジ関数でsubse",{"_index":270,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["2gb",{"_index":822,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["2x8=16です。したがって、24ではなく16",{"_index":1979,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["2から残りの5miをアドレス3",{"_index":54,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["2つあります。docker",{"_index":981,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["2つのウォークに同じバリデータオブジェクトが渡されるため、互いに一貫性のある2",{"_index":663,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのチップトランザクションは、どちらも無効ではないことを確認するために、互いの間の一貫性についてチェックします。したがって、クライアントのトランザクションは、他のトランザクションによって承認される可能性が高い2",{"_index":664,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのチップトランザクションハッシュが生成され、それらが新しいトランザクションのtrunktransactionフィールドとbranchtransact",{"_index":650,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つのトランザクションが検証されます。ネットワークを介して伝播する新しいトランザクションが多いほど、他のトランザクションの検証が高速になるため、このプロセスによってiota",{"_index":20,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["2つのトランザクションを参照しなければなりません。チップ選択は、ノードが自身の台帳の部分グラフから2つのランダムなチップトランザクションを選択するプロセスです。クライアントがgettransactionstoapprov",{"_index":645,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2つの変数を作成します。1つはシード用、もう1",{"_index":1795,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["2つの異なるseeduuidフィールドから作成された2つのアドレスを持つことになります。user_address",{"_index":1304,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["2つの異なる預け入れアドレスを持つ新しいユーザーを作成するために2つのgrpc",{"_index":1307,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["2つの種類のうちの1",{"_index":296,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2つの親トランザクションを参照する必要があります。そのトランザクションは、バンドル内の最後のトランザクションまで、常にtrunktransactionフィールドで互いを参照します。それでは、branchtransactionフィールドはどうでしょうか。そしてバンドルの最後のトランザクションのtrunktransactionとbranchtransact",{"_index":242,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["2つの重み付きランダムウォークは、同じマイルストーントランザクションから開始されます（latestsolidmileston",{"_index":652,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["2で、これは2,779,530,283,277,761に相当します。この数が非常に大きいので、iotaトークンの単位はsi",{"_index":388,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/units-of-iota-tokens":{}}}],["2のアドレスから80i",{"_index":307,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2を使用したいと思うかもしれません。大規模企業はセキュリティレベル3",{"_index":385,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/security-levels":{}}}],["2回以上トークンを取り出してはいけません。その結果、送信側が受信側にすべてのトークンを転送しない場合でも、入力トランザクションはアドレスからすべてのiotaトークンを取り出す必要があります。残りのiota",{"_index":298,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["2番目のトランザクションの詳細を表示するには、parent",{"_index":356,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["2種類のイベントをトリガできます。1つはバンドルがペンディング状態にあるとき、もう1",{"_index":1809,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["2種類のリスナがあります。1つはチャネルを使用するもので、もう1",{"_index":1808,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["2行の下に秘密の81",{"_index":1414,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["2進数では、データは1または0として表すことができます。これらの値はビットと呼ばれます。8ビットは1バイトに相当し、256（28",{"_index":330,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["3",{"_index":68,"docTitle":{"docs/dev-essentials/0.1/concepts/trinary":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/trinary":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["3+)とpip",{"_index":803,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["3.6",{"_index":501,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["30",{"_index":49,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["30秒ごとに、transfer",{"_index":1805,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["365",{"_index":1276,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["384",{"_index":397,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["384を使用したkerl",{"_index":265,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["3つのセキュリティレベルをすべて使用することにより、ほぼ無制限の数のアドレスと秘密鍵のペア（957",{"_index":267,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["3つの公式ライブラリがあります。これらのライブラリと同様に、iota",{"_index":93,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["3で、これは重み付きランダムウォークが過去の3",{"_index":404,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3でダウンロードしたubuntu",{"_index":1916,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["3のアドレスから80i",{"_index":308,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["3はraspberri",{"_index":2068,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["3文字のチェックサムを書き留め、チェックサムをシードとは別に保存してください。このチェックサムは、正しいシードを入力したかどうかを確認できる安全メカニズムです。間違った文字を1",{"_index":1110,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["3進コンピューターの処理の基本単位。トリットはしばしば1、0",{"_index":410,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3進法3",{"_index":409,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["3進法では、データは1、0",{"_index":331,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["4",{"_index":73,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["4.5.1",{"_index":1178,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["4.6",{"_index":420,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["40",{"_index":1615,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["400",{"_index":893,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["401",{"_index":925,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["4gb",{"_index":673,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["4gb以上の空きram",{"_index":1424,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["4x3",{"_index":2020,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["4つのトライトはエリアコードで、およそ100",{"_index":1498,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["4つのリーフがあり、それぞれがコーディネーターの公開鍵と秘密鍵のペアの1つを表します。これらの鍵ペアは事前に作成され、コーディネーターのアドレスを計算するために使用されます。マークル木内の鍵ペアの総数は、公式2&lt;sup>depth&lt;/sup>のdepthによって異なります。この例では、マークル木のdepthは2",{"_index":251,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["4つの隣接ノードへの接続を試み、さらに4",{"_index":977,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["4のiri",{"_index":702,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["4のコンソールで、createuserメソッドがcreateuserrequestオブジェクトを受け取ることがわかります。そのオブジェクトはapi",{"_index":1301,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["4コアの仮想マシンでは約15",{"_index":1053,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["5",{"_index":77,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["50",{"_index":1105,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["50,000",{"_index":642,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["50,100）より小さいインデックスを持つマイルストーンによって確定されたトランザクションを刈り取ります。その結果、マイルストーン940,000と990,100",{"_index":644,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["55",{"_index":50,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["5はトランザクション2と3を直接参照し、トランザクション6はトランザクション3を介して間接的にトランザクション5",{"_index":32,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["5）の場合、フレームバッファドライバ/dev/fb1からアクセスできます。これは、sens",{"_index":2114,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["5）を備えた8×8",{"_index":2109,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["6",{"_index":81,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-java/0.1/README":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["60",{"_index":1087,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["60fpsのリフレッシュレートと15ビットの色解像度（rgb",{"_index":2108,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["64",{"_index":675,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/references/troubleshooting":{}}}],["67％（4つのうち3",{"_index":1108,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/node-quorum":{}}}],["6か7",{"_index":970,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["6があるアドレスから10miを取り出すようにノードに指示した場合、トランザクション6の親トランザクションの履歴がトランザクション6のアドレスに少なくとも10mi",{"_index":246,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["6がマイルストーンの場合、トランザクション5、3、2、および1",{"_index":34,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["6つのトライトはローカルコードで、14",{"_index":1502,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["6でiota",{"_index":1269,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["6はトランザクション5を直接参照しているため、トランザクション5はトランザクション6の親トランザクションです。一方、トランザクション6はトランザクション3を間接的に参照しているため、トランザクション3はトランザクション6",{"_index":245,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["6コマンドライン引数を追加する必要があります。ネットワークインターフェイス名も追加する必要があります。ネットワークインターフェイス名がなければ、クライアントはsbc",{"_index":1954,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["7",{"_index":92,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["75",{"_index":1521,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["8",{"_index":97,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["8+)またはpython",{"_index":802,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["8.9",{"_index":1993,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["80と443",{"_index":1459,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["81",{"_index":63,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/utils/0.1/community/mam-watcher/overview":{}}}],["81トライトである必要があります。アドレスが90トライトである場合、最後の9トライトはチェックサムです。9",{"_index":919,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["81トライトのsubse",{"_index":269,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["81トライトのセグメントに分割されます。次に、各セグメントは26",{"_index":271,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["81トライトのハッシュ値に変換することです。このハッシュ値はトランザクションに固有のものです。トランザクションの内容の1",{"_index":239,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["81文字未満で構成されるシードを入力すると、ライブラリはそのシードの末尾に9を追加して81",{"_index":1525,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":132,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["8gbのram",{"_index":1039,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["8、またはnode.j",{"_index":120,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["8つの隣接ノードを持つことができます。各ノードは接続する4つの隣接ノードを選択し、自分を選択した他の4",{"_index":1000,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["8以上かpython（3以上）とpip",{"_index":1025,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["9",{"_index":91,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["90トライトです。余分な9",{"_index":234,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["990,100",{"_index":634,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["9999",{"_index":1277,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["99％以上が無効になっています（出典：mckinsey",{"_index":1558,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["9文字のチェックサムが81文字のアドレスの後ろに追加されるので、ユーザーは自分のシード（81文字）とアドレス（90",{"_index":393,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["_\"）を続けることができます。最大許容長は40",{"_index":1609,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["abc123",{"_index":1690,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["abc123の登録id",{"_index":1687,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["absent",{"_index":924,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["accepted隣接ノードがない場合は、autopeeringtcp/udpポート（14626",{"_index":1005,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["account",{"_index":192,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["accountlisten",{"_index":1854,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/listen-to-events":{}}}],["accountplugin",{"_index":1856,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["acycl",{"_index":30,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["ad",{"_index":76,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["adapt",{"_index":1863,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["add()メソッドからのレスポンスにはipfsハッシュが含まれています。これは、タングルに添付される前にメタデータとsha256",{"_index":1719,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["addneighbor",{"_index":888,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["addneighbors(uri",{"_index":439,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["address",{"_index":194,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["addresscountaggreg",{"_index":857,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["address、value、obsoletetag、currentindex、lastindex、そしてtimestampフィールドの値のハッシュ値から導出されます。このバンドルハッシュは、パッケージを保証するために各トランザクションのbundl",{"_index":279,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["advanc",{"_index":1893,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["allwindowedstreamはタプル内のすべてのreduceされたパーティションを含みます。各パーティションは、構造（address、amount_of_transactions）内に1",{"_index":860,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["alpha",{"_index":648,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["alpha設定オプションを使用して荷重に変換されます。最後に、0とすべての荷重の合計の間のランダムな値が生成され、0の値に達するまで承認トランザクションの荷重によって減算されます。ランダムな値を0",{"_index":660,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["alway",{"_index":762,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["amazon",{"_index":1085,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["amount",{"_index":1149,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["amp;lt;packag",{"_index":581,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["android",{"_index":1134,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["apach",{"_index":498,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["api",{"_index":59,"docTitle":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/api-reference":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/database-tables":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["apiがあります。api",{"_index":236,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["apiがあります。このapi",{"_index":1346,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["apiがどのように応答し、どのホストがapi",{"_index":951,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["apiが提供されます。オブジェクトリポジトリに保存される情報には、iotaタングル上でアクセス可能なチャネルのルートアドレスや制限付きmamチャネルが使用されている場合、mamチャネルに保存されている情報を復号化するために必要な暗号化キー（サイドキーと呼ばれます）が含まれます。次のタプルが作成され、オブジェクトリポジトリに保存されます。&amp;lt;assetuniqueid",{"_index":1764,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiとして書かれたバックエンドの2つの部分から成ります。このpoc",{"_index":1705,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["apiとの通信などのタングル操作を実行する必要があります。アプリケーションのデータ消費部分はより複雑であり、デバイスのデータストリームへのアクセスと引き換えにiota",{"_index":1579,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiなどを介して定期的にデータを読み取るための簡単な方法を備えているセンサーであれば、データマーケットプレイスで使用できます。マーケットプレイスにデータを送信するには、スクリプトを実行してデータをiota",{"_index":1586,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["apiに公開されていません。たとえば、シードを再作成できるように、アドレスのシードuuid",{"_index":1312,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["apiの形式を取ります。生産者と消費者の両方が自身をグリッドに登録するために使用します。エンティティが登録されると、グリッドはエンティティのmam出力チャネルの監視を開始します。登録が成功すると、idが返されます。このid",{"_index":1681,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは2",{"_index":1710,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["apiは、webサーバー上でホストされる通常のweb",{"_index":1680,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiは、永続的に情報を格納する必要があるアーキテクチャのどの部分でも使用できます。apiは標準データベースのcrud操作をサポートし、すべての呼び出しでエンティティ登録id",{"_index":1684,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["apiはベータ版であり、変更される可能性があります。運用版アプリケーションではこのapi",{"_index":887,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["apiをテストするのに役立ちます。実稼働環境では、利用可能なgrpcライブラリの1",{"_index":1294,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["apiを介してマイルストーンをiri",{"_index":1056,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiを使い始めるでgrpc",{"_index":1401,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["apiを使用してiac",{"_index":1520,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["apiを使用して、緯度と経度から独自のiacにエンコードし、iacをトランザクションのtag",{"_index":1506,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["apiを使用しているため、すべてのzmq",{"_index":820,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["apiを使用して情報を交換できます。この設計図のためにmam",{"_index":1759,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["apiを通してiri",{"_index":182,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["apiエンドポイントの一覧については、iri",{"_index":1078,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["apiエンドポイントはlatestmilestoneindexとlatestsolidsubtanglemilestoneindexの情報を返します。この情報を見るためにiri",{"_index":603,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["apiエンドポイントへのすべてのリクエストはiri",{"_index":865,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["apiエンドポイントを介してノードと通信するクライアントアプリケーションの場合、aw",{"_index":944,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["apiキー、およびcoinmarketcap",{"_index":1440,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiキーとcoinmarketcap",{"_index":1435,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiキーは/config/tools/tool",{"_index":1443,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["apiサーバー：node.js（express",{"_index":1697,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["apiメソッドの詳細については、api",{"_index":564,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["apiメソッドを呼び出して、着信トランザクション（numberofalltransactions）と発信トランザクション数（numberofsenttransactions）の両方を確認します。隣接ノードがiri",{"_index":972,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["apiリクエストが失敗すると、レスポンスボディにhttpエラーコードとjson",{"_index":916,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["apiリクエストをiriノードに送信するために使用します。jqは、json",{"_index":730,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["apiリクエストをスパミングすることによって、iriノードのオープンapiポートを悪用することができます。ipアドレスでapiリクエストを制限したり、apiリクエストの数を制限したりするには、iri",{"_index":765,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["api呼び出しにreference引数を指定した場合、そのトランザクションが部分グラフ内にある場合にのみ、branchtransactionウォークはrefer",{"_index":653,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["api呼び出しの成功結果として、競合しない2",{"_index":651,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["api呼び出しの組み合わせで行われます。mam",{"_index":1672,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["api呼び出しはコストがかかる可能性があるため、ノード所有者はノードを一般に公開しないことがよくあります。そのため、iota",{"_index":24,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["api呼び出しは同期的です。そのため、バックグラウンドスレッドまたはワーカースレッドからapiを呼び出して、apiがui",{"_index":528,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["api呼び出しを送信するリバースプロキシサーバのドメイン名を1",{"_index":946,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["api（get",{"_index":1720,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["applic",{"_index":1128,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["applications/utilities/termin",{"_index":1123,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["appname、appversion、latestmilestone、neighbors、tip",{"_index":2056,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["apt",{"_index":1236,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["architectur",{"_index":1234,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["archive（ppa",{"_index":1245,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["argon2",{"_index":1217,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["arm64",{"_index":574,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["armシステムアーキテクチャ（32ビットまたは64",{"_index":1983,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["artimaガイドはjreでscala",{"_index":827,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["ascii",{"_index":907,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["asciitotrytes()メソッドは基本的なascii文字のみをサポートします。その結果、アクセントやウムラウトなどの発音区別符号やひらがなや漢字などの日本語（2バイト文字）はサポートされておらず、invalid_ascii_char",{"_index":133,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["ascii文字に変換するために、trytestoascii",{"_index":338,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["ascファイルと.appimageファイルが両方とも~/download",{"_index":1133,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["asset",{"_index":1738,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["assetcustodianid",{"_index":1749,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetcustodianidは最初はassetownerid",{"_index":1755,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetownerid",{"_index":1748,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetowneridに関する情報は、アプリを通じて挿入されるか、外部の情報源から取得されます（アプリを使用するための登録サーバーなど。この場合は会社のvat",{"_index":1754,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["assetsセクションにある.ascファイルと.gpg",{"_index":1131,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["assetuniqueidは、qrコードスキャンによって読み取られ、登録apiを通じてアクセスするassetuniqueidサーバー（例：gs1",{"_index":1752,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["astropiota",{"_index":426,"docTitle":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiotaはastropiのクローンです。astropiは、iss（国際宇宙ステーション）でraspberri",{"_index":1996,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaはjavascriptで書かれており、sens",{"_index":2005,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaは、タングルを使用してローカル環境データを追跡するためにmamに接続されている国際宇宙ステーションからのastropiのクローンです。地球上で、astropiota",{"_index":1992,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["astropiotaはタングル上のローカル環境データを追跡するためにマスク認証メッセージング（mam）を使用します。地球上で、astropiota",{"_index":2000,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaを実行したい場合は、sshを介して対話するためにastropiotaのネットワークアドレスが必要です。raspberri",{"_index":2066,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["astropiotaを実行するには、正しいハードウェアとraspberri",{"_index":2010,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["astropiotaサンプルコードは、dav",{"_index":2007,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["astropiotaプロジェクトで使用されているsens",{"_index":2102,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["astropiota送信者はsens",{"_index":2078,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["astropiは、温度、湿度、その他のデータを検知するためにraspberri",{"_index":1997,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["atmel",{"_index":2117,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["attach",{"_index":1451,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["attachmenttimestamp",{"_index":325,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["attachtotangl",{"_index":894,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["attachtotangle(trunktransact",{"_index":441,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["attachtotangleapi",{"_index":937,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["attachtotangleエンドポイントはリソースを大量に消費します。結果として、attachtotangleエンドポイントへの多くの呼び出しは時々ノードをクラッシュさせることがあります。この問題を解決するには、専用のプロキシサーバーをインストールして、ノードのプルーフオブワーク（pow",{"_index":863,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["attiny88",{"_index":2118,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["authent",{"_index":1159,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["auto",{"_index":1063,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["autoconfirm",{"_index":380,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["autopeeringtcp/udpポート（14626",{"_index":1018,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["avail",{"_index":927,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["avxまたはss",{"_index":875,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["avxベースのpow",{"_index":568,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["awesom",{"_index":1190,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["awesometestplugin",{"_index":1859,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["awsには、クラウド上でlinux",{"_index":1906,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["awsまたはmicrosoft",{"_index":1582,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["azur",{"_index":1583,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["aに100mi",{"_index":51,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aに100miを送信したいとし、トークンが3つのアドレス0、1、2",{"_index":45,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["aのアドレスへ100mi",{"_index":53,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["b",{"_index":86,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["b+（b",{"_index":2024,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["background",{"_index":1600,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["badgerdbデータベースに保存されます。データベースディレクトリを保存するパスをdb",{"_index":1797,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["balanc",{"_index":158,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["balanceev",{"_index":1351,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["balancesubscriptionrequest",{"_index":1350,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["bazel",{"_index":1043,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["bazelを使ってビルドし、dock",{"_index":1042,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["best",{"_index":666,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["beta1",{"_index":548,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta2",{"_index":547,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3",{"_index":546,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["beta3&lt;/vers",{"_index":516,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["between",{"_index":668,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["bin/hub/hub",{"_index":1256,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["bin/signing_server/signing_serv",{"_index":1284,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["binari",{"_index":1400,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["biometr",{"_index":1158,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-security-settings":{}}}],["blake2",{"_index":1652,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blake2b",{"_index":1653,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["blue",{"_index":1103,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["board",{"_index":2015,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["bootstrap",{"_index":484,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["bootstrapフラグが渡されると、コンパスは前のマイルストーンを順番に参照する一連の4",{"_index":1072,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bootstrapフラグを渡す必要はありません（フラグを渡してもコンパスは起動しません）。ただし、コンパスがマイルストーンをiri",{"_index":1075,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["bosch",{"_index":1590,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["bounci",{"_index":505,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["bounti",{"_index":1100,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["branchtransact",{"_index":324,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionおよびtrunktransactionパラメーターは、gettransactionstoapprov",{"_index":895,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["branchtransactionとtrunktransact",{"_index":146,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["branchtransactionとtrunktransactionフィールドで参照できるタングル内の2",{"_index":301,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["branchtransactionとtrunktransactionフィールドは、チップ選択後にノードが返したタングル内の2",{"_index":304,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["branchtransactionフィールドとtrunktransactionフィールドのトランザクションハッシュを参照して、トランザクション（子トランザクション）を他の2",{"_index":240,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["broadcast",{"_index":1076,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["broadcastandstor",{"_index":533,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["broadcastbundle(tailtransactionhash",{"_index":444,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["broadcasttransact",{"_index":897,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["broadcasttransactions(tryt",{"_index":445,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["bt",{"_index":1891,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["buffer",{"_index":847,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersスキーマファイルによって生成されたクラスにラップされています。全てのprotocol",{"_index":818,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["buffersメッセージと属性はflink",{"_index":819,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bug",{"_index":1099,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["build",{"_index":1205,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["build.gradleファイルにiotaledg",{"_index":511,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.gradleファイルにjitpack",{"_index":510,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["build.sbt",{"_index":838,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["bundl",{"_index":305,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["bundles、addresses、tags、approve",{"_index":901,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["bundleフィールドの中で同じ値を持ちます。bundl",{"_index":288,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["bundleフィールドの値をコピーし、devnetタングルエクスプローラを開き、bundl",{"_index":142,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["c",{"_index":87,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["c:\\\\users\\\\yourname\\\\download",{"_index":1117,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["caddyfileファイルを編集して、powプロキシサーバを設定します。この例では、ローカルホストでpowプロキシサーバを実行しています。外部ネットワークからpowプロキシサーバにアクセスしたい場合は、urlをパブリックip",{"_index":879,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddyの設定オプションでdock",{"_index":1462,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["caddyはすべてのリクエストのログをrequests.log",{"_index":883,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["caddy実行可能ファイルと同じディレクトリにcaddyfil",{"_index":878,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["callback",{"_index":440,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["callbackeventlisten",{"_index":1811,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["captur",{"_index":2036,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["case",{"_index":85,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/p2p-energy/overview":{}}}],["castl",{"_index":506,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ca証明書の有効期間は365日に設定されています。すぐ期限切れにならないように、9999",{"_index":1274,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cda",{"_index":429,"docTitle":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaがまだアクティブであることを確認した後で、cda",{"_index":1814,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaが必要です。送信者はiotaトークンを含む期限切れのcdaを必要とし、受信者はアクティブなcda",{"_index":1812,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaで残高の大部分を維持することをお勧めします。こうすることで、支払いをより速く、そしてより少ないトランザクションですみます。そのために、利用可能残高を新しいcda",{"_index":1823,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにexpected_amountフィールドとmulti_useフィールドを同時に指定することはできません。詳細についてはfaq",{"_index":1791,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをcda",{"_index":1827,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaにトランザクションを送信するには、マグネットリンクをparsecdamagnet()メソッドに渡してから、結果をsendtocda",{"_index":1871,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaに預け入れることを決定した場合はtru",{"_index":1818,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaの最後の9文字はチェックサムで、アドレスとそのアドレスのすべての条件のハッシュ値です。トリニティやdevent蛇口はまだcdaをサポートしていないため、このチェックサムは、トリニティやdev",{"_index":1815,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは、バンドルの作成、送信、および確定にかかる時間内に期限切れになる可能性があります。そのため、cdaの条件に応じて、cdaに預け入れるかどうかを決定する必要があります。この意思決定プロセスを自動化するために、cdaに預け入れるかどうかについての決定（trueまたはfals",{"_index":1817,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaはアカウント内でのみ使用でき、汎用クライアントライブラリメソッドでは使用できません。故に、cda",{"_index":1813,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaは記述的なオブジェクトなので、送信する前にcdaを任意の形式にシリアル化できます。generatecda()メソッドは以下のフィールドを持つcdaオブジェクトを返します。cda",{"_index":1825,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをsendoracleオブジェクトのoktosend",{"_index":1821,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、@iota/cdaモジュールのserializecdamagnet",{"_index":1870,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaをマグネットリンクにシリアル化するには、cdaオブジェクトのasmagnetlink",{"_index":1826,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成し、利用可能残高の合計をそのcda",{"_index":1869,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["cdaを作成するとき、cdaがどのような条件を持つ必要があるのかを事前に知ることが難しい場合があります。この記事には、cda",{"_index":1838,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["cdaを作成するときには、cdaがアクティブか期限切れかを定義する次の条件を指定します。アクティブアドレスにはiotaトークンを預け入れることができますが、取り出すことはできません。逆に期限切れアドレスからはiota",{"_index":1786,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaを使用して、署名済みアドレスからの取り出しリスクを軽減します。送信者にiotaトークンを要求すると、一定期間アクティブなcdaを作成できます。このようにして、送信者にその期間の後にだけそのアドレスから取り出すつもりであることを知らせます。その結果、送信者は、cda",{"_index":1785,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["cdaアドレスの1つのシナリオは、webサイトまたはスクリーンなどの他のデジタル媒体で寄付アドレスを共有する場合です。このシナリオでは、任意の量の複数の預け入れを受け取ることができ、cdaの共有を完全に管理できます。timeout_at値が切れる前に、72時間経過するたびに、webサイトまたはスクリーンでcdaを更新することができます。これにより、cda",{"_index":1846,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["certif",{"_index":1121,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["cgoを有効にしてコンパイルされている場合、curlのtransform()メソッドなどの特定の関数はネイティブc",{"_index":566,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["chang",{"_index":544,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{}}}],["channelroot",{"_index":1765,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["channelsidekey&amp;gt",{"_index":1766,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["charact",{"_index":90,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["check",{"_index":157,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["checkconsist",{"_index":899,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["checkconsistency(transact",{"_index":446,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["checksum",{"_index":479,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["check制約をサポートしているため、デフォルトではハブはmariadb",{"_index":1241,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["chrome、firefox",{"_index":1635,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["circuit",{"_index":2014,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["ciriはzmq",{"_index":841,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["clean",{"_index":521,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["client.crt、client.key、およびca.crt）をハブサーバにコピーします。この例では、scpコマンドを使用してssh経由で送信します。192.168.2.212をハブサーバのurlまたはipアドレスに変更します。/home/dave/rpchub",{"_index":1289,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cliクライアントでgrpc",{"_index":1293,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["cloud",{"_index":1580,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["cloudflareなどのパブリックipfsゲートウェイを使用して、トランザクションハッシュを使用してipf",{"_index":1725,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["clu6afkw/clx6afkb",{"_index":2112,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cmd+スペースバーを押して、検索バーにtermin",{"_index":1927,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["cn=localhost",{"_index":1280,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["cocoapod",{"_index":1187,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["code",{"_index":124,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["code（olc）のクローンです。iac",{"_index":1491,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["command",{"_index":926,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["command変数を別のapi",{"_index":804,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["common",{"_index":499,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["commun",{"_index":1403,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["comparison",{"_index":667,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["compass",{"_index":1429,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compassディレクトリに戻り、bazel",{"_index":1071,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["compos",{"_index":988,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compose.yml",{"_index":1457,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["compose.ymlファイルにあるシードでマークル木を事前に計算します。その結果、誰かがこのノードのurlを持った場合、dock",{"_index":1456,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["composeapi(\\[set",{"_index":438,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["composeがあれば、dock",{"_index":987,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["compress",{"_index":1524,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["compressor",{"_index":1528,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["comput",{"_index":2019,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["config.ini",{"_index":716,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["config.json",{"_index":1051,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config.jsonファイルでdebug変数をfals",{"_index":1620,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルにセンサーid",{"_index":1619,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["config.jsonファイルに設定されています。googl",{"_index":1442,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config.jsonファイルを開き、seedフィールドの値を手順3",{"_index":1049,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["config/tools/ssl/caddyfileファイルの、your",{"_index":1460,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config/tools/tool",{"_index":1441,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["config/tools/ディレクトリ内のファイルに設定情報を追加します。amazon",{"_index":1437,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["configur",{"_index":206,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["configurationに移動して、ノードのurlhttp&#x3a;//localhost:14265",{"_index":1450,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["confirmed.jsファイルでは、iota",{"_index":369,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["connect",{"_index":384,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["consum",{"_index":1670,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["contract.txt",{"_index":1532,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["contract.txtファイルと同じディレクトリにindex.j",{"_index":1533,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["convert",{"_index":1165,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["coordicid",{"_index":979,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["coordin",{"_index":1511,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["coordinates.net",{"_index":1612,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["core",{"_index":348,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["coreiota",{"_index":165,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["cpu",{"_index":1040,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/general/0.1/references/troubleshooting":{}}}],["cpuはavx",{"_index":876,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["creat",{"_index":70,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["createitemchannel",{"_index":1774,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["createunsignedbundl",{"_index":1334,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["createunsignedbundle()関数がsignatur",{"_index":1335,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["createuserrepli",{"_index":1353,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["createuserrequest",{"_index":1352,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["cree",{"_index":2111,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["cron",{"_index":726,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["crontab",{"_index":2037,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ctps1",{"_index":389,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["ctrl",{"_index":835,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["ctrl+c",{"_index":1285,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ctrl+cを2回押して、grpc",{"_index":1306,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["curl",{"_index":891,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["curliotaで使用されている主なハッシュ関数。curlはkeccakクリエイター（sha",{"_index":394,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["curlはモノのインターネット（iot",{"_index":395,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["curlを使用してgetnodeinfo",{"_index":183,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["currenc",{"_index":1164,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["currentindex",{"_index":291,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["currentindexフィールドとバンドル内の最後のトランザクションを定義するlastindex",{"_index":287,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["currentindexフィールドは、バンドル内のトランザクションの位置です。lastindexフィールドは、バンドル内の最後のトランザクションです。lastindex",{"_index":352,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["cを押してrepl",{"_index":836,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["cを押します。iri",{"_index":1069,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["cを押します。それから、コマンドを再実行する前に、.envファイルのextra_compass_flag",{"_index":1468,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["cフラグと一緒に渡す必要があります。たとえば、dockerホストの/path/to/conf/config.iniにconfig.iniファイルを保存した場合は、dock",{"_index":755,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["cベースのpow",{"_index":576,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["c＃.net",{"_index":419,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["d",{"_index":990,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["daemon",{"_index":1089,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dag",{"_index":244,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/references/glossary":{}}}],["dag）と呼ばれるデータ構造で、各トランザクションは、自分より前にある2",{"_index":10,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["danceなどのweb",{"_index":25,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["danger",{"_index":55,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["danger:シードごとにアカウントインスタンスを1",{"_index":1804,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["dashboard",{"_index":1013,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["data",{"_index":1047,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["databas",{"_index":72,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["data変数をasciitotryt",{"_index":337,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["dave",{"_index":2080,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["day",{"_index":1275,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["db",{"_index":701,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["dbfiles.iota.org",{"_index":974,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["dbに追加して更新するためのストレージrest",{"_index":1763,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["dbの認証情報、fixer",{"_index":1439,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dbディレクトリがサーバに保存されたので、実行する前にiri",{"_index":705,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["de",{"_index":2008,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["deactiv",{"_index":1267,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["debianベースのオペレーティングシステムを使用している場合は、このコマンドの前にsudo",{"_index":1428,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["debianベースのオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":983,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["delet",{"_index":1689,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["deni",{"_index":1017,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["dependencies.jarという.jar",{"_index":525,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["depth",{"_index":469,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth16のマークル木を使用します。これにより、コンパスはマイルストーン送信の間隔に応じて、約45",{"_index":1046,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth、minweightmagnitude、delay、そしてmaxdepth",{"_index":1860,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["depthパラメータの値を減らします。iri",{"_index":920,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["depthフィールドの値を16",{"_index":1050,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["depth引数はチップ選択に影響します。depth",{"_index":136,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["describ",{"_index":2038,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["desktop",{"_index":1119,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["dev/ttyusb\\*を使用してusb",{"_index":1967,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["develop",{"_index":1201,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["developブランチから新しいgit",{"_index":1188,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["developブランチにマージされると、crowdinにあなたの文字列が表示されます。コミュニティはcrowdin",{"_index":1200,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["devent",{"_index":1816,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devic",{"_index":1556,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["devnet",{"_index":125,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["devnet.thetangle.org",{"_index":361,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnet.thetangle.orgに行き、latest",{"_index":378,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":171,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetでトランザクションが確定されたかどうかを確認します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":360,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["devnetでトランザクションを作成して送信します。devnetは、トークンが無料であること以外は、ほとんどmainnetと同じです。devnetに送信するトランザクションは、mainnet",{"_index":1522,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["devnetと同じ構成設定を使用して、iri",{"_index":1034,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["devnetは、トークンが無料であること以外はmainnet",{"_index":208,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。1ki（1000i）の無料トークンをdevnet",{"_index":151,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送るどんなバンドルも、mainnet",{"_index":163,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":126,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["devnetタングルに接続されているため、mainnet",{"_index":1538,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetタングルに添付します。devnetは、トークンが無料であることを除いて、mainnetとほぼ同じです。devnetに送信するトランザクションは、mainnet",{"_index":1529,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetタングルエクスプローラにアクセスします。このwebサイトはdevnet",{"_index":159,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["devnetタングルエクスプローラはiac",{"_index":1519,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["devnetタングル上にあることを確認したい場合は、hashフィールドの値をコピーしてdevnet",{"_index":1485,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["devnetトークンは、mainnet",{"_index":1625,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetトークンをmainnet",{"_index":1623,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["devnetネットワークでは、アプリケーションをテストして、無料のdevnetトークンを使用するpoc",{"_index":209,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnetノードからトランザクションをリクエストすることを認識できるように、provid",{"_index":1537,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["devnetノードとmainnetノードでは異なる、depth",{"_index":1585,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["devnetノードに接続します。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1794,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["devnetノードのzmqaddress",{"_index":1479,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["devnetノードの場合は、リモートノードリストを使うおよび主要ノードの自動切替えオプションも無効にする必要があります。リモートノードリストのノードはmainnetノードなので、devnet",{"_index":1156,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["devnetノードを実行する場合は、testnet設定オプションをtrueに設定し、他のdevnetノードをneighbor",{"_index":719,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["devnet上でiri",{"_index":213,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のiriノードにリクエストを送信するためにnode.jsとpython",{"_index":801,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["devnet上のiriノードのzmq",{"_index":217,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションが有効になるには、9の最小重量値（mwm",{"_index":210,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["devnet上のトランザクションにタグを付けます。devnetは、トークンが無料であること以外はmainnetとほぼ同じです。devnetに送信したトランザクションは、mainnet",{"_index":1512,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["dev：これらのチャンネルは読み取り専用で、開発者同士がトピックについて話し合ったり、github",{"_index":116,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dhcp（動的ホスト構成プロトコル）サーバ（通常はルーター）から新しい内部ip",{"_index":1874,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["diagram",{"_index":1664,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["digest",{"_index":347,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["dikw",{"_index":1553,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["direct",{"_index":29,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["discord",{"_index":115,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["discordの#helpおよび#fullnod",{"_index":973,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["discordの#helpチャンネルでiota",{"_index":1212,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["discordの#nodeshar",{"_index":797,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["discuss",{"_index":117,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["dlt",{"_index":2,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dltには2",{"_index":3,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dlt）は、デジタル商品（デジタル形式で存在する無形の商品）の所有者がデジタル商品をp2p",{"_index":1,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{}}}],["dmgファイルのsha256ハッシュを計算します。パスをトリニティの.dmg",{"_index":1124,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["dn",{"_index":1886,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["dnsを使用しますが、他にも多くのddn",{"_index":1885,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["doc",{"_index":488,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["docker",{"_index":149,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerとdock",{"_index":1425,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacosまたはwindowsを実行している場合は、代わりにdock",{"_index":749,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerをインストールします。システム要件よりも古いバージョンのmacまたはwindowsを実行している場合は、代わりにdock",{"_index":178,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerイメージをバックグラウンドで実行し、ホストデバイスからdockerコンテナにポートを転送し、コマンドラインフラグを使用してスパマー、zmq、およびダッシュボードプラグインを有効にします。これらのプラグインを使用すると、スパムトランザクションを自分のノードに送信したり、着信トランザクションを監視したり、web",{"_index":986,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerグループに追加します。$us",{"_index":1091,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["dockerコマンドを使用して独自のiotaネットワークを設定できます。このコマンドを実行すると、独自のiotaテストネットワークと2.7pi（最大量）のテストiota",{"_index":1419,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dockerコマンドを使用して自身のiota",{"_index":1404,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["dockerコンテナでiri",{"_index":742,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナには、iri",{"_index":750,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナにプライベートタングルを設定し、1",{"_index":1037,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["dockerコンテナに接続します。$containeridプレースホルダをあなたのコンテナid",{"_index":994,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナも再起動するには、dock",{"_index":760,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをダウンロードする方法は2",{"_index":751,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナをビルドするには、dock",{"_index":984,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナを再起動するには、run",{"_index":991,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["dockerコンテナーをビルドするには、dock",{"_index":747,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内でiriを実行すると、デバイスはiriノード用のlinux",{"_index":743,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dockerコンテナ内で自分のiri",{"_index":175,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["dockerホストの再起動のたびにiri",{"_index":759,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["docs/private_tangl",{"_index":1052,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["document",{"_index":1542,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["domain",{"_index":1888,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["domain.comとyour@email.comのプレースホルダーをあなたが選んだドメイン名と",{"_index":1461,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["download",{"_index":1125,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["duck",{"_index":1884,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["duckdns.orgなどの動的dnsサービスに接続されているパブリックip",{"_index":678,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["dynamo",{"_index":1438,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["dynamodb",{"_index":1433,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["e",{"_index":1151,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["edit",{"_index":1449,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["enabl",{"_index":1010,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enabled設定パラメータがtrueに設定されている場合にのみ、クライアントはzmq",{"_index":621,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["encrypt",{"_index":1454,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["endpoint",{"_index":184,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["energi",{"_index":1543,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["english",{"_index":2050,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["enter",{"_index":740,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["entri",{"_index":75,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["entrypointトランザクションで呼び出されるすべての評価計算機は、トランザクションid",{"_index":656,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["enviro",{"_index":1481,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["environment（jre）でscalaを使用したい場合は、scalaライブラリをmavenまたはsbt",{"_index":826,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["envirophat",{"_index":1475,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["error",{"_index":1386,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["errorcod",{"_index":1387,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["errorイベントを購読します。error",{"_index":1866,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/listen-to-events":{}}}],["essentialパッケージからgcc",{"_index":871,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["ev",{"_index":425,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["evalu",{"_index":831,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["event_logger.go",{"_index":1828,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["eventlistenerインターフェースを実装しており、eventmanagerに追加されています。故に、プラグインを作成した時は、アカウントに別々のeventlisten",{"_index":1855,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["eventmachin",{"_index":1810,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/listen-to-events":{}}}],["eventmachineオブジェクトを引数として受け取り、account.plugin",{"_index":1829,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["evrythngがiotaをどのように使用しているかについての詳細を調べるにはiota",{"_index":932,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["ev）の充電料金をiota",{"_index":421,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["exampl",{"_index":37,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["example&lt",{"_index":589,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["examplesディレクトリ内に&amp;lt;packag",{"_index":587,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["exampleディレクトリに、data",{"_index":129,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["exampleディレクトリに、valu",{"_index":164,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exampleディレクトリに移動して、coreおよびconverteriota",{"_index":127,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["exeファイルのsha256ハッシュを計算します。パスをトリニティの.ex",{"_index":1116,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["expected_amountフィールドの値を指定する必要があります。たとえば、あなたが取引所からiotaトークンを取り出したいときなどです。あなたは取引所にexpected_amountフィールドを持つcda",{"_index":1848,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールドを持つcda",{"_index":1847,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expected_amountフィールド値を持つcda",{"_index":1843,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["expectedamount",{"_index":1789,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["explor",{"_index":355,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["exportedaccountstate構造体をstore.importaccount",{"_index":1837,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["facad",{"_index":496,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["fals",{"_index":367,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["fe80::c0a2:76c6:4ed5:a44",{"_index":1960,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["feature/mi",{"_index":1189,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["featureまたはbugfix/someth",{"_index":1191,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["fedora",{"_index":1174,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["fetcher.j",{"_index":1416,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["fetcher.jsファイルに、sender.j",{"_index":1417,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["fetchtemp.j",{"_index":1476,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["fetchtemp.jsファイルとzmqwatcher.jsファイルはモジュールとしてエクスポートされ、index.j",{"_index":1480,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["fghjklmnopqrstuvxwyz",{"_index":1492,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["fijterのhigh",{"_index":2009,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["file",{"_index":1092,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["fileエラーが発生した場合は、snapshot.txt",{"_index":1067,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["finder",{"_index":1518,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["findtransact",{"_index":900,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["findtransactionobject",{"_index":531,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["findtransactionobjects(queri",{"_index":447,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["findtransactions(queri",{"_index":448,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["firebas",{"_index":1780,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["firewal",{"_index":1896,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["fixer",{"_index":1434,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["flink",{"_index":815,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkでzmqデータを処理するためにflink",{"_index":816,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["flinkを使用してzmq",{"_index":813,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["follow",{"_index":89,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["fork",{"_index":482,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["forward",{"_index":1898,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["foundat",{"_index":586,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["fragment",{"_index":1336,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["framework",{"_index":1177,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["function",{"_index":381,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["g",{"_index":1297,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["gateway4フィールドの値をあなたのゲートウェイipアドレスに置き換えます。アドレスフィールドで、スラッシュ（/）の左側の値をあなたのlinuxサーバの内部ip",{"_index":1880,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["gcc、clang、または@iota_toolchain",{"_index":1237,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["gccでインストールできます。linux（ubuntu",{"_index":869,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gccやgo",{"_index":1006,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc）を使ってgccをインストールすることができます。windowsの場合は、tdm",{"_index":868,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gcc：macosの場合は、homebrew（brew",{"_index":867,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gener",{"_index":78,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{}}}],["generate_ca.sh",{"_index":1273,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generate_client.sh",{"_index":1283,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generate_server.sh",{"_index":1279,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["generateaddress(se",{"_index":476,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["generatedmessageのストリームを取得するので、protocol",{"_index":846,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["getaccountdata",{"_index":541,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getaccountdata(se",{"_index":449,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getaddressinforepli",{"_index":1355,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getaddressinforequest",{"_index":1354,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbal",{"_index":902,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["getbalancerepli",{"_index":1357,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbalancerequest",{"_index":1356,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getbalances(address",{"_index":450,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getbalancesなどのapi",{"_index":238,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["getbalancesエンドポイントを呼び出してシードの総残高を取得します。以前にiota",{"_index":1079,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["getbundl",{"_index":538,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getbundle(tailtransactionhash",{"_index":452,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getdepositaddress",{"_index":1326,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["getdepositaddressrepli",{"_index":1359,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getdepositaddressrequest",{"_index":1358,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getinclusionst",{"_index":366,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getinclusionstates(transact",{"_index":453,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getinput",{"_index":534,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getinputs(se",{"_index":455,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getlatestinclus",{"_index":532,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["getlatestinclusion()メソッドに渡して、iri",{"_index":364,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["getlatestinclusion()メソッドは、配列内の末尾トランザクションのいずれかが確定しているかどうかを確認します。いずれかの末尾トランザクションが確定している場合、このメソッドはtru",{"_index":375,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["getlatestinclusion(transact",{"_index":456,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getneighbor",{"_index":903,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["getneighbors(\\[callback",{"_index":457,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnewaddress",{"_index":342,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/iota-java/0.1/README":{}}}],["getnewaddress()メソッドを呼び出すと、apiはまだiota",{"_index":343,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["getnewaddress(se",{"_index":458,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnode.jsとしてiota.lib.j",{"_index":2055,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["getnodeinfo",{"_index":111,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["getnodeinfo(\\[callback",{"_index":459,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getnodeinfoapiエンドポイントを呼び出して、iri",{"_index":731,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["getnodeinfoエンドポイントを呼び出して、iri",{"_index":763,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["gettip",{"_index":904,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettips(\\[callback",{"_index":460,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionobjects(hash",{"_index":461,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransactionsobject",{"_index":530,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettransactionstoapprov",{"_index":649,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettransactionstoapprove(depth",{"_index":462,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["gettransf",{"_index":539,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["gettryt",{"_index":906,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["gettrytes(hash",{"_index":464,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["getuserhistoryrepli",{"_index":1361,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["getuserhistoryrequest",{"_index":1360,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["get呼び出しを使用して、ページサイズ10のページ5",{"_index":1693,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["ginkgo",{"_index":580,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ginkgoのテストの書き方のリファレンスとして使うことも、ginkgo",{"_index":584,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["git",{"_index":708,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["github",{"_index":431,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["github.com/iotaledger/iota.go/account/oracle\"インポートにプレフィックスを追加する必要があります。この例では、oracle_tim",{"_index":1820,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["githubからビルド済みjava",{"_index":685,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["githubでissu",{"_index":1208,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["githubのcompass",{"_index":1032,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["githubのhub",{"_index":1224,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["githubレポジトリにあります。このファイルをダウンロードするのがiri",{"_index":688,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["github上のソースコードからjava",{"_index":686,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["gnu/linux",{"_index":2030,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["go",{"_index":106,"docTitle":{"docs/iota-go/0.1/README":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["godoc.orgはすでに十分なパッケージのドキュメンテーションを提供していますが、iota",{"_index":585,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["golang",{"_index":416,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["googl",{"_index":1510,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["googleアカウントでのoauth",{"_index":1584,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["googleドライブapi",{"_index":1639,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブ、dropbox",{"_index":1631,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやdropbox",{"_index":1636,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["googleドライブやfirebas",{"_index":1640,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["gopath",{"_index":872,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopathではない場所にgoshimm",{"_index":1007,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["gopath以外のディレクトリで、プロジェクトを開始してください。プレースホルダをgithub.com/me/awesom",{"_index":108,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["gopath以外のディレクトリに、プロジェクト用のディレクトリを作成して初期化します。&amp;lt;your",{"_index":561,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["gopath環境変数内のディレクトリではないディレクトリに、iotacaddyのgithub",{"_index":873,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["goshimm",{"_index":592,"docTitle":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}},"docBody":{"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["goshimmerは、coordicideにつながるiotaネットワークの進行中のプロトタイプです。coordicideの目標は、コーディネーターなしでネットワークが合意に達することで、iotaネットワークを分散化することができます。この目標を達成するために、goshimmerはそれぞれが特定の役割を持つモジュールで構成されています。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":975,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{}}}],["goshimmerは、コーディネーターなしでiotaネットワークのプロトタイプを実装しているオープンソースのgo",{"_index":593,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["goshimmerソフトウェアを実行すると、デバイスはネットワーク内のノードになります。ノードを実行することで、ネットワークをテストし、定期的な変更で最新の状態に保つことができます。すべてのモジュールが利用可能になると、このネットワークはcoordicid",{"_index":980,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["goでのpow",{"_index":578,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリ。このライブラリには、公式のapi",{"_index":417,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、goモジュール（バージョン1.11",{"_index":107,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["goクライアントライブラリとその依存関係をダウンロードするには、プロジェクト内の依存関係を管理するvgoモジュール（go",{"_index":559,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goクライアントライブラリをダウンロードし、そのバージョンをgo.mod",{"_index":110,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["goディレクトリを作成します。$usernameプレースホルダーを現在のlinux",{"_index":1984,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["goプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":558,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["goプログラミング言語の少なくともバージョン1.12",{"_index":866,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["goプログラミング言語を使用するアプリケーションを作成または実行するには、go",{"_index":1982,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["gp",{"_index":1610,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["gpgキーをインポートします。パスをトリニティの.gpg",{"_index":1132,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["gradl",{"_index":103,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-java/0.1/README":{}}}],["graph",{"_index":31,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["grid",{"_index":1544,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["grpc",{"_index":1215,"docTitle":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["grpcc",{"_index":1295,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpccコマンドでgrpcc",{"_index":1300,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpcとprotobufに慣れていない場合は、grpc",{"_index":1347,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["grpcをサポートする任意のプログラミング言語を介してハブと通信できます。このガイドでは、python",{"_index":1266,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["grpcクライアントを使用して呼び出すことができるいくつかのgrpcメソッドを公開しています。これらの方法で、データベースおよびiotaネットワークとやり取りすることでユーザーのiotaトークンを管理できます。このガイドでは、新しい預け入れアドレスを持つ新しいユーザーを作成するためのgrpc",{"_index":1292,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["grpcサーバを提供します。ハブは、対話するために使用できるgrpc",{"_index":1265,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["grpcフレームワークをサポートする任意のプログラミング言語を使用して、新しいユーザーを作成し、そのシードを管理し、iota",{"_index":1233,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["guard（gpg",{"_index":1248,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["h",{"_index":1027,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["hash",{"_index":323,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["hash(hash(ノード1",{"_index":257,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(hash(リーフ1",{"_index":253,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(hash(リーフ3",{"_index":255,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(ノード2",{"_index":258,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(リーフ2",{"_index":254,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hash(リーフ4",{"_index":256,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["hat",{"_index":1999,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hat\"というメッセージがsens",{"_index":2060,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hat/9",{"_index":2120,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hatからセンサーデータを収集し、センサーデータをスクロールマーキーに公開し、センサーデータをjson形式でタングルのmamチャネルに送信します。astropiota受信者はmamチャネルを監視してセンサーデータをリッスンします。これらのファイルの両方をカスタマイズして、astropiota",{"_index":2079,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatがhdmi",{"_index":2115,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["hatが機能していることを確認するには、python3",{"_index":2059,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatでは、python",{"_index":2058,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatには慣性計測装置（imu",{"_index":2003,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatのl",{"_index":2061,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["hatの気温と現地の気温を比較して、自分の位置に合わせて調整できます。mam",{"_index":2090,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度は現地の気温より約13度高くなっています。sens",{"_index":2089,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatの温度センサーはraspberri",{"_index":2087,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["hatをastropiotaパッケージにインストールします。sens",{"_index":2057,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["hatデータを以下のjson",{"_index":2006,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["hatバージョン1.0",{"_index":2026,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["head",{"_index":961,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["hello",{"_index":195,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["help",{"_index":1028,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/references/command-line-flags":{}}}],["helpフラグを付けてiri",{"_index":957,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["high",{"_index":423,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["histori",{"_index":198,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["home",{"_index":189,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/introduction/overview":{}}}],["home/binディレクトリを$path",{"_index":1239,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["host",{"_index":1955,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["html/css",{"_index":1603,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["hts221",{"_index":2107,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["http",{"_index":481,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["http&#x3a;//localhost:14265にあるiriノードのapi",{"_index":1077,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["http&#x3a;//localhost:8081/dashboard",{"_index":1022,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["httpconnector",{"_index":1853,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["https&#x3a;//github.com/richardstechnotes/rtimulib2",{"_index":2121,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//grid/storage/abc123",{"_index":1691,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources/xxx123",{"_index":1688,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//grid/storage/abc123/sources?page=5&pagesize=10",{"_index":1692,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["https&#x3a;//medium.com/@lexerr/47b608c527c9",{"_index":1604,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//medium.com/@lexerr/b33d9856c852",{"_index":1605,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["https&#x3a;//nodes.devnet.iota.org:443",{"_index":215,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//nodes.spamnet.iota.org:443",{"_index":229,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//powbox.devnet.iota.org",{"_index":221,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["https&#x3a;//projects.raspberrypi.org/en/projects/get",{"_index":2119,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["https&#x3a;//www.gp",{"_index":1611,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["httpsサポートを維持したい場合は、自分の証明書とキーを使用するためにcaddyの指示に従います。それから、証明書とキーファイルのボリュームをproxyオブジェクトのvolumesの下のdock",{"_index":1466,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["httpsプロキシサーバを設定したい場合は、nginx",{"_index":790,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["https接続を介してiri",{"_index":1446,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["httpブロックディレクティブに、upstreamブロックディレクティブを追加して、iri",{"_index":785,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["hub",{"_index":1096,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["hub.conf",{"_index":1264,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["hub.confファイルに次の行を追加します。userフィールドの値を変更し、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1263,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["hub.proto",{"_index":1348,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hub_address",{"_index":1390,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["hub_address_bal",{"_index":1391,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["hub_addressテーブル行のハブアドレスに対して、is_cold_storageフィールドを1",{"_index":1322,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["hub_addressテーブル行のハブアドレスのis_cold_storageフィールドを0",{"_index":1324,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["hubaddressbalanceev",{"_index":1362,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hubaddressbalancereason",{"_index":1363,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["hubにはsignbundle()grpc",{"_index":1337,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["i'm",{"_index":153,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["i18next",{"_index":1198,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iac",{"_index":1488,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iacでタグ付けされているトランザクションを見つけて、iac",{"_index":1516,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iacにエンコードするには、緯度と経度の座標が必要です。この例では、googl",{"_index":1509,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iacの8番目のトライトの後に来る区切り文字は、+ではなく9",{"_index":1493,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacはopen",{"_index":1489,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacはトライトで構成されているため、iacをトランザクションのtag",{"_index":1496,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacは以下の3つの部分で構成されています（区切り文字9",{"_index":1497,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacをパディングするために0の代わりにa",{"_index":1494,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacを使用することで、トランザクションにエリアをタグ付けし、他の人が同じようなiac",{"_index":1487,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iacファインダユーティリティを使用して、新しいiac",{"_index":1517,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["ibc",{"_index":1736,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["id",{"_index":978,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["idは既存のすべてのセンサー間で一意である必要があり、データストリームを購入するときのアクセスキーとして機能します。idは必ず英字（a",{"_index":1607,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idは特定のセンサーのために他のすべてのパラメータの中で一意であるべきです。idは必ず英字（a",{"_index":1614,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["idをstore.exportaccount",{"_index":1834,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["idをコピーし、それを使ってノードのログを読み取ります。$containeridプレースホルダをあなたのコンテナid",{"_index":993,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["idを含みます。レスポンスリターンは少なくともこの2",{"_index":1644,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["idを持ちます。このidは、インデックス0、セキュリティレベル2",{"_index":1852,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["idを持ちます。このidは、インデックス0およびセキュリティレベル2",{"_index":1799,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["id（url）をデータベースに永続化します。それと共に、日付/時刻、サイズなどのメタデータを追加することもできます。これは、このpoc",{"_index":1642,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["ifconfigコマンドでipアドレスを見つけることができます。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":1974,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ifconfigコマンドを実行します。プログラムはすべてのネットワークインタフェースと与えられたipアドレスを返します。ethで始まるインターフェースはイーサネットネットワークインターフェースで、wlで始まるインターフェースはwifi",{"_index":1951,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["illegalargumentexcept",{"_index":1094,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["immut",{"_index":143,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["imu",{"_index":2004,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["includ",{"_index":88,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["index",{"_index":477,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["index.j",{"_index":1473,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["inetip",{"_index":1923,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["info",{"_index":33,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/node-software/0.1/goshimmer/references/command-line-flags":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/api-reference":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:depth",{"_index":135,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["info:github",{"_index":1409,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["info:ipv6",{"_index":1952,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:localhostの外からnginx",{"_index":773,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["info:window",{"_index":1935,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["info:このテストトークンはdevnet",{"_index":161,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["info:最小重量値（minimum",{"_index":1342,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["info:無料のspamnet",{"_index":223,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["init",{"_index":436,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["initiatetransf",{"_index":540,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["initまたはyarn",{"_index":435,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["input",{"_index":918,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["instal",{"_index":522,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/troubleshooting":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["installを実行して、依存関係を再インストールしてください。次に、npm",{"_index":1204,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["int128",{"_index":575,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["int128ベースのpow",{"_index":572,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["interfac",{"_index":1957,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["interfacesをクリックしてsshを有効にし、putti",{"_index":2052,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["interruptattachingtotangl",{"_index":909,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["invalid",{"_index":917,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["io",{"_index":502,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iosをターゲットにしていてxcod",{"_index":1185,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iosオペレーティングシステムをターゲットにしている場合は、cocoapod",{"_index":1186,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iot",{"_index":21,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota",{"_index":4,"docTitle":{"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/iota-go/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-js/0.1/README":{},"docs/smartcity/0.1/introduction/overview":{}},"docBody":{"docs/getting-started/0.1/introduction/what-is-dlt":{},"docs/getting-started/0.1/introduction/what-is-iota":{},"docs/getting-started/0.1/introduction/what-is-a-node":{},"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/introduction/what-is-a-transaction":{},"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/getting-started/0.1/references/use-cases":{},"docs/dev-essentials/0.1/introduction/overview":{},"docs/dev-essentials/0.1/concepts/the-tangle":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/references/security-levels":{},"docs/dev-essentials/0.1/references/units-of-iota-tokens":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/introduction/overview":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/concepts/sweeps":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/wallets/0.1/hub/references/command-line-flags":{},"docs/wallets/0.1/hub/references/security-considerations":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/introduction/overview":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["iota.j",{"_index":1572,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iota.jsのソースコードとドキュメント：https&#x3a;//github.com/iotaledger/iota.j",{"_index":1995,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{}}}],["iota.jsはlernaを使って複数のパッケージを管理します。lerna",{"_index":483,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iota.jsライブラリのconverterパッケージを使用してascii",{"_index":336,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iota.jsライブラリのsign",{"_index":344,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["iota/bundl",{"_index":1329,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/convert",{"_index":1331,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/cor",{"_index":1330,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota/core、@iota/converter、および@iota/tryt",{"_index":1523,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iota/coreパッケージと@iota/area",{"_index":1508,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iota/ipf",{"_index":1708,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iota/persist",{"_index":1862,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["iota/poex",{"_index":1530,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["iota/transact",{"_index":1332,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iota://uriで始まり、その後に90",{"_index":1148,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["iota://xngpucurqlljfgxndcmrogynwazp9afwsveuaiwiesospydupwspsreebwjpd9zwzpajkbhplg99djwjczuhwtqtdd/?amount=1000000&message=shirt",{"_index":1150,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["iotaapi",{"_index":1850,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["iotaapitest",{"_index":543,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotacaddy/caddi",{"_index":874,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iotacaddy/caddyディレクトリにcaddi",{"_index":877,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["iota、分散レジストリ技術（drt）、およびiotについて他の人々と議論したい場合は、気軽にdiscord",{"_index":489,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iotaには、3",{"_index":200,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaのアドレスは、各シードに固有の81",{"_index":233,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaのチュートリアルやガイドの多くはlinuxオペレーティングシステムを必要とします。コンピュータが別のオペレーティングシステムを実行している場合は、仮想マシン内でlinux",{"_index":1901,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["iotaの使用経験がほとんどないかまったくない場合は、iota",{"_index":1030,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaの公式ウォレットです。このウォレットは、データとiota",{"_index":1095,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{}}}],["iotaの最も重要な利点の1",{"_index":1484,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["iotaは3進数システムを使用しています。そのため、アドレス、シード、署名などのデータはトライトに変換されます。読みやすくするために、これらの文字は27個ある文字コードの1",{"_index":386,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/tryte-alphabet":{}}}],["iotaはhashcashベースのパズルを使用してネットワークへのdo",{"_index":400,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaはwinternitzワンタイム署名スキームを使用して署名を作成します。その結果、各署名は秘密鍵の約半分を公開してしまいます。秘密鍵を使用してバンドルに1回署名することは安全です。同じ秘密鍵で異なるバンドルに署名すると、攻撃者が秘密鍵を総当たり攻撃し、アドレスからiotaトークンを盗む可能性があります。そのため、ユーザーがアドレスから取り出すと、そのアドレスは使用済みとみなされ、2",{"_index":1226,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaはwinternitzワンタイム署名スキーム（w",{"_index":275,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaはwinternitzワンタイム署名方式（w",{"_index":247,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["iotaは、1トライトを27文字（a〜zと9",{"_index":333,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaは、3進数システムに従ってデータを表します。2進数と比較すると、2値計算ではなく3つの状態でデータを表すことができるため、2",{"_index":329,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaは、iotaネットワーク内のデバイスがイミュータブルなデータと価値（iota",{"_index":5,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、m2m",{"_index":6,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、さまざまなデバイス間でデータや価値（iota",{"_index":16,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、イミュータブルなデータや値をiota",{"_index":57,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaは、ネットワークを保護し、攻撃者がiota",{"_index":18,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは、バンドルに署名するためにwinternitzワンタイム署名方式を使用します。その結果、各署名は秘密鍵の約半分を公開します。秘密鍵でバンドルに一度署名するのは安全です。したがって、ユーザーがアドレスからiotaトークンを取り出すと、そのアドレスは「使用済み」と見なされ、そのアドレスからは二度とiota",{"_index":1221,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaは、専売のシステムを統合することなく、回収可能資産に関する情報をシームレスに収集および共有するための解決策を提供します。情報を収集している間、iotaはセカンドレイヤー技術のmam",{"_index":1740,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaは、暗号化された方法でデータと価値（iotaトークン）を転送することを可能にするプロトコルです。そのため、iota",{"_index":1872,"docTitle":{},"docBody":{"docs/general/0.1/introduction/overview":{}}}],["iotaはバンドルに署名するためにwinternitzワンタイム署名方式を使用しています。この署名方式は、アドレスから一度だけ安全にiotaトークンを取り出せることを意味しています。よって、常にアドレスから全残高を取り出す必要があります。残高の一部だけを他の人に転送したい場合は、残りの残高を自分の未使用のアドレスの1",{"_index":56,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaはパーミッションレスです。つまり、誰でもネットワークを使用して支払いをしたり、データを送信したりできます。サインアップしたり、個人情報を提供したり、サブスクリプションを支払う必要はありません。代わりに、iota",{"_index":7,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaは無許可型dlt",{"_index":23,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaをアプリやwebサイトに統合するには、次の3",{"_index":58,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaをテストするときは、あるアドレスから別のアドレスにiotaトークンを送信したいと思います。mainnet上では、iotaトークンは取引所でトレードすることができる金銭的価値を持っています。危険を冒さずにテストトランザクションを送信するには、devnet",{"_index":150,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaを使用してp2p",{"_index":1546,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaを使用してアプリケーションを開発する際の参考として使用できるテストケースの一覧がsrc/test/java",{"_index":542,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iotaを使用してピアツーピア（p2p",{"_index":1656,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["iotaを使用するために必要なのはシードのみです。これはiota",{"_index":8,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaを使用すると、iotaトークンと同様にデータ（ゼロトークン）トランザクションを送信できます。これらのゼロトークントランザクションは、イミュータブルなメッセージをタングルに送信して保存したいアプリケーションに役立ちます。ゼロトークンのトランザクションのみを送信するためには、iota",{"_index":119,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaを自身のアーキテクチャーに統合するのを手伝って欲しい場合は、iota財団のチーム（integrations@iota.org",{"_index":947,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["iotaアドレスからはiotaトークンを一度だけしか取り出してはいけません。すでにiota",{"_index":1211,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["iotaアプリケーションはすべてのアプリケーションコンポーネントと対話することに対して責任があるアプリを含みます。たとえば、ハッシュ値とドキュメントidの生成、ドキュメントのファイルストレージへの格納、postgresql",{"_index":1633,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエコシステムの技術的実現の鍵です。このpocの範囲では、タングルはすべてのドキュメント署名を保持して公開し、ドキュメントの不変性をチェックするための真の情報源として使用します。タングルを使用するには、iriノードに接続する必要があります。iri",{"_index":1634,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["iotaエリアコードマップには、googl",{"_index":1436,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iotaエリアコード（iac）は、iota",{"_index":1486,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iotaエリアコード（iac）は、iotaトランザクションを地理的位置でタグ付けするための標準規格として提案されています。iac",{"_index":1505,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iotaオブジェクトのインスタンスを作成し、provid",{"_index":340,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してdevnet",{"_index":1513,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iotaオブジェクトのインスタンスを作成し、providerフィールドを使用してiri",{"_index":349,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaクライアントライブラリには、データを変換するための組み込み関数があります。あるいは、iota",{"_index":334,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/trinary":{}}}],["iotaクライアントライブラリには、トライト、トリット、およびascii",{"_index":335,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{}}}],["iotaクライアントライブラリは、iota",{"_index":412,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["iotaコミュニティのgithubリポジトリのmostusedaddresses.scala",{"_index":844,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iotaタングルおよびmamチャネルへのアクセスに必要な情報を保存する機能を備えて、既存の資産リポジトリを管理システムの一部として拡張します。ibcsグループの場合、これはibc",{"_index":1767,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルおよび他のiotaテクノロジを使用して、ibc",{"_index":1735,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaタングルおよび他のiota技術を使用して、ibc",{"_index":1550,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["iotaタングルと、あなたが実行しているinterplanetari",{"_index":1706,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["iotaタングルに公開します（mam.attach()）。iotaはトライトを使用しているので、mamペイロードをタングルに送信する前にトライトに変換して（asciitotrytes(json.stringify(data))）mamメッセージを作成する（mam.cr",{"_index":1776,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iotaタングルを使用してデータをmam",{"_index":1575,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["iotaテクノロジーは、このようなアーキテクチャにおいて有利です。なぜなら、iota",{"_index":1663,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iotaテストトークンを取得し、テストトランザクションでiota",{"_index":118,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトランザクションが参照するトランザクションに接続することによって形成される有向非巡回グラフ（dag",{"_index":403,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトランザクションの履歴を含むイミュータブルなデータ構造です。iota",{"_index":28,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-the-tangle":{}}}],["iotaトランザクションを含むイミュータブルなデータ構造です。iota",{"_index":243,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["iotaトークンが取り出されたことを意味します。トリニティは使用済みアドレスからiotaトークンを取り出すことを止めさせます。そしてあなたは使用済みアドレスにiota",{"_index":1157,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{}}}],["iotaトークンが取り出された（使用済みまたは署名済みとも呼ばれる）アドレスのシードuuid",{"_index":1393,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["iotaトークンが取り出されているかどうかを確認します。そして、アドレスからiotaトークンが取り出されている場合、ハブは新しい預け入れアドレスの導出に使用する新しいシードuuid",{"_index":1223,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンと同数だけiota",{"_index":1316,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンの二重支出）を返し、コンパスはこの矛盾するトランザクションを確定するマイルストーンを送信します。すると他のiri",{"_index":1070,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iotaトークンの値が、iota",{"_index":611,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの値を合計すると0",{"_index":613,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの総供給量は(333",{"_index":387,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/units-of-iota-tokens":{}}}],["iotaトークンの量、トランザクションに追加したいタグ、そしてトークンを送信するアドレスを指定するtransf",{"_index":167,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンの量、送信するメッセージ、および送信先のアドレスを指定するtransf",{"_index":1526,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["iotaトークンの量。アドレスにこの量のiota",{"_index":1790,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaトークンの量があります。この場合は1,000",{"_index":12,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンの量をチェックすることによって、各バンドルが二重支払いにつながらないことをチェックします。二重支払いが見つかった場合、重み付きランダムウォークは1",{"_index":614,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがiotaトークンを自分のハブアドレスの1",{"_index":1213,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンの預け入れと取り出しを管理するための安全な方法を提供します。ユーザーがiotaトークンを自分のハブアドレスの1つに預け入れると、スイープと呼ばれるプロセスでユーザーのiotaトークンがハブ所有者のアドレスに転送されます。このようにして、ハブ所有者は、ユーザーが取り出しを要求するまでユーザーのiota",{"_index":1097,"docTitle":{},"docBody":{"docs/wallets/0.1/introduction/overview":{}}}],["iotaトークンはiota",{"_index":11,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaトークンは転送されません。現時点では、zmqエンドポイントはtx",{"_index":1026,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["iotaトークンまたはデータを転送するためにiriノードに送信される命令。トランザクションは、iota",{"_index":408,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトークンをデバイスのウォレットに供給することができます。通常、100,000iから1,000,000iのdevnet",{"_index":1622,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iotaトークンをハブに預け入れられるようにするアプリケーションを構築できます。ユーザーがiotaトークンを預け入れると、ハブは残高をデータベースに記録します。次に、ハブはそれらのiotaトークンをハブ所有者のiotaアドレスに転送します。このようにして、ハブ所有者はiotaトークンを管理し、iota",{"_index":1214,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンをハブの外部に保存するには、iota",{"_index":1325,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンをハブの外部に保存するには、ハブ所有者のアドレスの1つから新しいコールドウォレットアドレスにiota",{"_index":1321,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["iotaトークンをハブアドレスに預け入れるか、ハブアドレスから取り出すと、ハブはそれらの転送を1つのスイープに結合します。取り出しの合計が預け入れの合計よりも少ない場合、ハブは残りの残高をハブ所有者に属する新しいアドレスに転送します。預け入れの合計が取り出しの合計よりも少ない場合、ハブはハブ所有者のアドレスのiota",{"_index":1225,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンをメガiota（1,000,000）単位で販売しています。これはmiotaまたはmi",{"_index":205,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンをユーザーの預け入れアドレスの1",{"_index":1308,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["iotaトークンを保持しているので残高があります。iotaトークンを使うには、シードを使って、iotaトークンを保持しているアドレスを所有していることを証明する必要があります。シードには数字9と大文字のa〜z",{"_index":35,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["iotaトークンを保持しているので残高を持っています。iotaトークンを転送するには、シードを使って、アドレスの所有権を証明する必要があります。シードには数字9と大文字のa〜z",{"_index":60,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaトークンを取り出すトランザクションのバンドルハッシュに署名します。次に、署名の結果がトランザクションのsignaturemessagefrag",{"_index":277,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaトークンを取り出す前に、ハブは同じアドレスに対してペンディング中の預け入れトランザクションがないこと、および以前のすべての預け入れトランザクションが確定済みであることを確認します。どのアドレスから取り出されたかを追跡するために、ハブはアドレスをデータベースに格納します。アドレスからiotaトークンが取り出されている場合、ハブはユーザーがそのアドレスから再びiota",{"_index":1222,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークンを受け取るには、送信者に自分のアドレスの1",{"_index":339,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["iotaトークンを受信者のアドレスに預け入れ、またはiota",{"_index":39,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-transaction":{}}}],["iotaトークンを所有している場合は、devnet",{"_index":152,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaトークンを所有するアカウント。アドレスを使ってデータとiota",{"_index":391,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaトークンを持つアドレスを含む必要はありません。81文字未満のシードを入力した場合、ライブラリは末尾に9を追加して81",{"_index":1514,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["iotaトークンを管理します。この情報は、grpc",{"_index":1389,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["iotaトークンを購入すると、購入したiota",{"_index":204,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaトークンを転送して欲しい場合、送信者にあなたのcda",{"_index":1824,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-java/0.1/how-to-guides/create-and-manage-cda":{},"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["iotaトークンを転送することにより、ユーザーが同じアドレスから2",{"_index":1227,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンを転送するには、iotaトークンを取り出すための入力トランザクションと、トークンを新しいアドレスに預け入れるための出力トランザクションが少なくとも1",{"_index":40,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-transaction":{}}}],["iotaトークンを転送するには、バンドルに少なくとも1つの入力トランザクションと1",{"_index":44,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するようにノードに指示することができる1",{"_index":41,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{}}}],["iotaトークンを転送するバンドルを再添付すると、確定されるのは1",{"_index":328,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{}}}],["iotaトークンを転送する前に、iota",{"_index":359,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["iotaトークンを送信しないので、このアドレスは誰にも属している必要はありません。アドレスが有効であるためには、ただ81",{"_index":131,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaトークンを選択した取り出しアドレスに転送するスイープを作成します。1",{"_index":1230,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["iotaトークンを預け入れるトランザクションは、iota",{"_index":300,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["iotaトークン移転用のトランザクションの場合、アドレスの最後のトリットが0",{"_index":612,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaトークン量の記録が含まれています。iotaトークンはユーザーのアドレスには保存されません。代わりに、ユーザーのiotaトークンはスイープ中にハブ所有者のアドレスに転送されます。ユーザーが後でuserwithdrawrequestコマンドをトリガーした時に、ハブはユーザーのiota",{"_index":1220,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaトークン（およびqub",{"_index":1741,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["iotaネットワークで、運用者が知っているノードだけを含みます。プライベートタングルは、パブリックiotaネットワークと同じテクノロジを使用しますが、コンパスと呼ばれるコーディネータのオープンソース実装を実行してプライベートタングルを制御します。コンパスを使用すると、プライベートタングルに添付されているトランザクションについてノードが合意に達することができます。コンパスが停止した場合、iota",{"_index":1029,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["iotaネットワークでトランザクションを送信するには、シードと呼ばれる秘密のパスワードが必要です。シードにより、シードから導出されたすべてのアドレスにアクセスできます。これらのアドレスはiotaトークンを保持しているので、iotaネットワーク内のすべてのノードに保存され、最新の状態に保たれる残高を持っています。iotaトークンを使用するには、トランザクションを作成し、そのトランザクションが入っているバンドルに署名して、iota",{"_index":263,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaネットワークでメッセージを自分に送信しました。友達にメッセージを送信できるように、友達のアドレスの1",{"_index":199,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークで価値を移転するためには、iota",{"_index":15,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークと対話して、トランザクションを送信するためにiri",{"_index":401,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaネットワークによって受け入れられる前に、トランザクションは確定されなければなりません。ユーザーが自分のアドレスの1つにiotaトークンを預け入れたとき、またはハブ所有者が取り出しを発行したときに、トランザクションはペンティぐ状態のままになります。そのため、確認の遅れを避けるために、hub",{"_index":1216,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["iotaネットワークにデータとiotaトークンを転送できるユーザーインターフェースを備えたモバイルおよびデスクトップアプリケーションです。iota",{"_index":187,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["iotaネットワークに何か送信したい場合は、トランザクションの形でノードに送信する必要があります。トランザクションは、入力トランザクション（アドレスからの取り出し）または出力トランザクション（アドレスへの預け入れまたはゼロトークントランザクション）のいずれかになる単一の操作です。ノードに1",{"_index":286,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["iotaネットワークの1つであるdevnet上のノードに接続します。devnetは、トークンが無料であること以外はmainnet",{"_index":112,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["iotaネットワークの中核です。クライアントは、トランザクションをノードに送信して検証し、台帳に記録する必要があります。ノードがなければ、iota",{"_index":173,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iotaネットワークは、p2pネットワークです。中央機関がトランザクションの台帳を管理するのではなく、すべてのノードがコピーを保持し、iota",{"_index":19,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワークは、ノードとクライアントで構成されています。ノードは、トランザクションのタングルと呼ばれる台帳への読み取り/書き込みのアクセス権を持つデバイスです。クライアントは、データまたはiotaトークンのいずれかを転送するトランザクションを作成し、トランザクションを検証のためにノードに送信するデバイスです。シードはクライアントにアドレスへのアクセス権を与えます。アドレスには残高があり、残高がアドレス中のiotaトークンの量を定義します。iota",{"_index":232,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaネットワークは、独自のmwmを強制します。devnetでは、mwmは9です。しかし、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":1345,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["iotaネットワークは、誰でも参加してトランザクションを送信できるネットワークです。パブリックiotaネットワーク内のすべてのトランザクションは透過的です。誰でもすべてのアドレスのトランザクションと残高を見ることができます。タングルエクスプローラと呼ばれるアプリケーションでこれらを見ることができます。これらのアプリケーションは、タングルからデータを取得して、誰でも閲覧できるようにパブリックweb",{"_index":201,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iotaネットワークはそれぞれのmwm",{"_index":170,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["iotaネットワークはそれぞれのmwmを強制します。devnetでは、mwmは9です。一方、mainnetでは、mwmは14です。小さすぎるmwm",{"_index":140,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["iotaネットワークは無料のテストトークンを先ほどのアドレスに転送したバンドルを受け取っても検証もしていません。それ故に、他のiotaネットワークではアドレスの残高を更新してはいません。これらのトークンを使用できるのは、devnet",{"_index":162,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["iotaネットワークを使い台帳の同期を開始します。ノードに同期をとる時間を与えます。iri",{"_index":735,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iotaネットワークを使用するには、クライアントライブラリを介してノードと対話できます。トリニティなどの多くのiotaアプリケーションは、舞台裏でこれらのクライアントライブラリの1",{"_index":26,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワークを構成するデバイスです。他の分散システムと同様に、iotaネットワーク内のノードは相互に接続されているため、相互にゴシップ情報があります。したがって、1つのノード（世界のどこにいても）がトランザクションを受信すると、ネットワーク内の他のすべてのノードに転送されます。このようにして、同じiota",{"_index":9,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-iota":{}}}],["iotaネットワーク上で互いに直接通信するiriノードです。iriの台帳をネットワークの他の部分と同期させるには、すべてのiri",{"_index":604,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iotaネットワーク上で実行するiri",{"_index":27,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワーク内のすべてのiriノードによって保持されている共通台帳。iri",{"_index":402,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iotaネットワーク内のすべてのノードは、ハッシュ値が事前に定義されたmwmと同じかそれ以上の数の0トリットで終わるトランザクションを受け入れます。トランザクション末尾の0の個数がmwm",{"_index":316,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["iotaネットワーク内のタングルへの読み書きアクセス権を持つデバイスです。すべてのノードはタングルのコピーとiotaトークンを保持するアドレスの記録を保存します。クライアントはiota",{"_index":22,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-node":{}}}],["iotaネットワーク内のノードの規則（プロトコル）に従って構造化されているオブジェクトです。各トランザクションは、iotaトークンの取り出し、iota",{"_index":235,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iotaネットワーク内の各iri",{"_index":610,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/transaction-validation":{}}}],["iotaプロトコルでは、iotaトークンをシードから導出されたアドレスに送信する必要があります。これらのアドレスからは一度だけiotaトークンを取り出すことができます。故に、すべての人が一度もiotaトークンを取り出していないアドレスへ預け入れることが重要です。ただし、iotaトークンを取り出す前に、誰がいつiota",{"_index":1784,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコルでは暗号化を使用して、シードからほぼ無制限のアドレスを導出することができます。アドレスは一般公開されているので、データやiota",{"_index":36,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{}}}],["iotaプロトコルの複雑さを抽象化し、支払いの実行に集中できるようにします。アカウントには、2",{"_index":1783,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["iotaプロトコル内のkeccak",{"_index":264,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["iotaマスク認証メッセージング（mask",{"_index":1551,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotaユーティリティweb",{"_index":1143,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["iotaライトウォレットは、http&#x3a;//localhost:14265でiri",{"_index":1447,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iota単位または選択した通貨で入力できます。送金しているiota単位（i、mi、gi",{"_index":1135,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["iota蛇口を使用してより多くのdevnet",{"_index":1624,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota蛇口ページに移動し、ウォレットアドレスを入力します。これは、getus",{"_index":1626,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["iota財団がiota",{"_index":931,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["iota財団が実行しているエントリノードとの自動ピアリングによってネットワークに参加します。iota財団のエントリノードと自動ピアするには、自動ピアリングポートとゴシップポートがノードに転送されていることを確認する必要があります。デフォルトでは、これらのポートは14666と14626",{"_index":985,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["iota財団に報告すると、iota財団のバグバウンティを通して金銭的な報酬を受け取れます。詳しくは、trin",{"_index":1098,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/introduction/overview":{}}}],["iota財団のgithub",{"_index":1113,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["iota財団のgui",{"_index":1779,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iota財団のwebサイト、iota",{"_index":697,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iota財団のアプローチはオープンでパーミッションレスです。iota",{"_index":1567,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団の住所の緯度と経度の座標は52.529510、13.413018です。これらの座標のiacは、nphtqorl9xk",{"_index":1495,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["iota財団はdevnet上で以下のパブリックiri",{"_index":212,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団はspamnet上で以下のパブリックiri",{"_index":227,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["iota財団は、概念実証（poc",{"_index":1563,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団はあなたがあなた自身の研究をし、専門家を探し、そしてiota",{"_index":1576,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["iota財団は依存関係を更新して構成を変更します。trin",{"_index":1202,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["iota財団は非営利団体としてオープンソース技術を生み出し、他の組織が自社のiota",{"_index":1564,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iota財団自体のためにも、アジャイルで実験主導の集団的なイノベーションアプローチを可能にするように設計されています。このイニシアチブは、実環境での展開の要件とデータマーケットプレイスの参加者の要求によってiotaテクノロジに挑戦します。iota財団はこれらの要求を満たすためにiota",{"_index":1568,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["iotについて他の人と話したい場合は、遠慮なくdiscord",{"_index":556,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}}}],["iotデバイスがネットワーク上でやり取りすると予想するiota",{"_index":241,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/introduction/overview":{}}}],["iot（internet",{"_index":1565,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["ip",{"_index":780,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipf",{"_index":1701,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsにアップロードします。ipfsはipf",{"_index":1714,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsにファイルを保存してから、イミュータブルで永続的なipf",{"_index":1702,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/overview":{}}}],["ipfsは分散webであるため、ipf",{"_index":1726,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfsノードとタングルにデータの保存を開始するには、アプリケーションをデプロイし、iota",{"_index":1729,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["ipfsハッシュを使ってipf",{"_index":1722,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipfs）からのトランザクションハッシュを使用してメタデータ、sha256ハッシュおよびipf",{"_index":1721,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["ipv4",{"_index":1976,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6",{"_index":1959,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipv6を使用する場合は、ssh",{"_index":1953,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipを取得するには多くの方法がありますが、このガイドはその1",{"_index":1876,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスからのリクエストがiriノードに問題を引き起こしている場合は、特定のip",{"_index":781,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスからのリクエストが多すぎると、jsonレスポンスと503",{"_index":779,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスが必要です。不幸なことに、インターネットサービスプロバイダはあなたのルーターに動的ipアドレスを与えることが多く、それは定期的に変わります。その結果、デバイスのipアドレスが変わると、デバイスへの接続はすべて失われます。したがって、動的ipアドレスにリンクされているパブリックドメイン名を取得するには、動的dns（ddns）サービスを使用する必要があります。ddnsを使用すると、デバイスは実際のパブリックipを数分ごとにddn",{"_index":1883,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスでポートが開いていることを確認して、ルールをテストします。ルールをテストするには、yougetsignal.com",{"_index":1900,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスにマップします。192.168.2.210を署名サーバのipアドレスに変更します。sign",{"_index":1290,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ipアドレスの特定のポートからローカルデバイスの内部ip",{"_index":1890,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスはinetの隣にあります。127.0.0.1のipアドレスは無視します。127.0.0.1はあなたのローカルホストです。ネットマスクの場合、255は8ビットを表します。したがって、この例のネットマスク長は3\\*8で、長さは24",{"_index":1879,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをduck",{"_index":1889,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスをserverブロックディレクティブに追加します。ipaddressを制限したいip",{"_index":782,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["ipアドレスを変化させないようにする必要があります。それ以外の場合は、ip",{"_index":1875,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["ipアドレスを見つけたら、sshを通してsbc",{"_index":1962,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレスを見つけた場合は、自分のアドレスが見つかるまですべてのip",{"_index":1981,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス内のすべての場所は8ビット（256ステート）を取り、ネットマスクは3バイトに設定されているため、ネットマスクは24（3×8=24",{"_index":1978,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ipアドレス（ルーターのip",{"_index":1877,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["iri",{"_index":174,"docTitle":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/introduction/overview":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{},"docs/node-software/0.1/iri/concepts/transaction-validation":{},"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/data-in-the-ledger":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/read-your-balance":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["iri.conf",{"_index":772,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriがgithubでリリースされたら、ローカルのiri",{"_index":884,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["iriが同期するまでには時間がかかることがあります。iri",{"_index":969,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriが自身の台帳と隣接iri",{"_index":628,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriと隣接ノードが互いにデータを送信しあっていることを確認してください。getneighbor",{"_index":971,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["iriにconfig.ini",{"_index":728,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriのバージョン1.6.0",{"_index":624,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriの各バージョンには、ノードがスナップショットを開始できるハードコードされたマイルストーンがあります。より速く同期するために、iri",{"_index":623,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriはjavaソフトウェアなので、javaランタイム環境（jr",{"_index":683,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriはjava仮想マシンで動作します。したがって、iriを実行する前に、いくつかのjava",{"_index":710,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriはトランザクションを受け取り、トランザクションを台帳に記録します。トランザクションを作成または署名することはありません。トランザクションを作成または署名するには、トリニティまたはクライアントライブラリなどのクライアントソフトウェアを使用して、トランザクションをiri",{"_index":598,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriを実行します。jakeをご自身のlinuxユーザー名に変更し、$versionをダウンロードしたiri",{"_index":727,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriを構築済みのdock",{"_index":180,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriソフトウェアをダウンロードする方法は2",{"_index":684,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriソフトウェアを実行すると、お使いのデバイスがタングルに直接アクセス可能なノードになります。ノードを実行することで、台帳の数を増やし、隣接ノードのトランザクションを検証することで、iota",{"_index":672,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードが2",{"_index":407,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["iriノードがtransact",{"_index":948,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["iriノードがある場合は、負荷分散を追加して、複数のiriノード間でapi",{"_index":784,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iriノードがそれぞれの台帳に同じトランザクションを持っていると、合意に達しています。この合意は、クライアントが任意のiri",{"_index":607,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードがポート14265に接続されていると想定しています。このオプションをお勧めします。信頼できるリモートノードに接続したい場合は、apiaddressフィールドの値を、接続したいノードのurlまたはip",{"_index":1259,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["iriノードが同期していない場合は、local_snapshots_interval_unsync",{"_index":626,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが同期している場合、local_snapshots_interval_sync",{"_index":625,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードが発行できるゼロメッセージキュー（zmq",{"_index":962,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/zmq-events":{}}}],["iriノードが隣接iriノードに接続する主な理由は、互いのトランザクションを検証することです。すべてのクライアントが、どの近隣ノードにも接続されていない1つのiriノードだけに依存している場合、そのiri",{"_index":605,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードが非凝固トランザクションを検出した場合、iri",{"_index":609,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードにコンパストランザクションを信頼できるマイルストーンとして認識させるために、デフォルトのiri",{"_index":1057,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードにリクエストを出している場合は、max",{"_index":921,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出している場合は、そのコマンドがremot",{"_index":929,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードにリクエストを出してください。現在のiri",{"_index":928,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{}}}],["iriノードに対して行われるリクエストをより細かく制御できるように、iri",{"_index":734,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["iriノードに接続して、iri",{"_index":437,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["iriノードに接続しなくても、iota",{"_index":596,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードに送信する必要があります。コンパスは、http",{"_index":1054,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードのlatestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドを確認するには、getnodeinfo",{"_index":741,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードのurl",{"_index":1465,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["iriノードのurlまたはipアドレスをneighbor",{"_index":799,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのurlまたはipアドレスを尋ね、その人にあなたのiriノードのurlまたはipアドレスを渡します。6〜7個の隣接iri",{"_index":798,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードのzmq",{"_index":620,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["iriノードのトランザクションを検証することで、iota",{"_index":597,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードの台帳にあるトランザクションによって参照されているトランザクションですが、iri",{"_index":608,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードの台帳には多くのトランザクションが蓄積され、多くの場合、iri",{"_index":791,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["iriノードの設定を実装から分離するために、javaの.propertiesファイルやコマンドラインのフラグとしてiriノードの設定を指定することもできます。これらのオプションは、ciにデプロイされていてコントリビュータにiri",{"_index":526,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["iriノードはiota",{"_index":595,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iriノードは、snapshot.txt",{"_index":1058,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["iriノードは、受信したすべてのトランザクションを隣接iri",{"_index":606,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/neighbor-iri-node":{}}}],["iriノードは同期されています。したがって、マイルストーン990,110では、iri",{"_index":635,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["iriノードは現在実行中で、次のurl：http&#x3a;//localhost.com:14265",{"_index":181,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードは隣接ノードと呼ばれる他のiriノードと通信する必要があります。同じネットワーク上で隣接iriノードを見つけるには、iriノード所有者にiriノードのurlまたはipアドレスを尋ね、自分のiriノードのurlまたはip",{"_index":796,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/find-neighbor-iri-nodes":{}}}],["iriノードを実行している場合は、zmq",{"_index":839,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["iriノードを実行することで、台帳の数を増やし、隣接iriノードのトランザクションを検証することで、iota",{"_index":744,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iriノードを維持しているため、タングルが動作しているp2pネットワーク内の近隣ノードと通信できます。グリッドが自身のiriノードを実行することで、残りのエンティティはlanネットワーク内に存在でき、グリッドのみが同期のために残りのタングルへのwanアクセスを必要とします。代替手段は、すべてのエンティティがタングル上のiriノードに直接wan",{"_index":1665,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["iriノードを走らせる（dock",{"_index":172,"docTitle":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["iriノードを起動し、nginxポートでgetnodeinfoapi",{"_index":775,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["iri設定オプションを使用すると、ノードの動作をカスタマイズできます。これらのオプションは、コマンドライン（clフラグ）または.ini",{"_index":950,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["iri設定ファイルに保存したい場合は、iri",{"_index":754,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["iri（iotaリファレンス実装）は、iota",{"_index":590,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["iri（iotaリファレンス実装）は、iotaプロトコルを定義するオープンソースのjavaソフトウェアです。現在iriはクライアントがiotaトークンを相互に転送できるiota",{"_index":594,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/introduction/overview":{}}}],["iri：latest",{"_index":758,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["ispromotable()メソッドは、末尾トランザクションが矛盾していないことと、最新の6",{"_index":371,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["ispromotable(tail",{"_index":465,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["issu",{"_index":432,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["ixi",{"_index":953,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["ixi（iota交換インターフェースフォルダ）を保存するディレクトリを作成します。jakeをご自身のlinux",{"_index":725,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["i²c",{"_index":2103,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ja",{"_index":428,"docTitle":{"docs/iota-js/0.1/README":{}},"docBody":{"docs/iota-js/0.1/README":{}}}],["jakeをご自身のlinuxユーザー名に変更して、${version}変数を最新バージョンのiri",{"_index":694,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["jar",{"_index":524,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java",{"_index":102,"docTitle":{"docs/iota-java/0.1/README":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["java_max_memori",{"_index":714,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_min_memori",{"_index":713,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java_opt",{"_index":712,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javascript",{"_index":101,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["javascript/typescript",{"_index":1602,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["javascript、react、node.j",{"_index":1703,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascript、react、nodej",{"_index":1744,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javascript、react、およびnodej",{"_index":1709,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["javascriptでmam",{"_index":1574,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["javascriptクライアントライブラリ。このライブラリには、公式のapi",{"_index":414,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javascriptクライアントライブラリを使用してバンドルを作成および送信しますが、go、java、python",{"_index":1328,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["javascriptプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用やバンドルとトランザクションなどのiota",{"_index":433,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["javascriptライブラリを使用して、iacでタグ付けされたゼロトークントランザクションを作成します。次に、そのトランザクションをdevnet",{"_index":1507,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["javascriptライブラリを使用して、回収可能資産にid",{"_index":1743,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["javaがインストールされていることを確認するには、java",{"_index":692,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaをインストールします。scalaはjava仮想マシンを使用するため、java",{"_index":828,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["javaクライアントライブラリ。このライブラリには、公式のapi",{"_index":415,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{}}}],["javaクライアントライブラリはjitpack",{"_index":491,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaクライアントライブラリ用のapiコマンドの完全な一覧については、github",{"_index":529,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["javaファイルとsp",{"_index":704,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリにiri設定ファイルを作成します。jakeをご自身のlinux",{"_index":715,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルと同じディレクトリに解凍します。この例では、ファイルは/home/jake/nod",{"_index":703,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、iota",{"_index":687,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルは、target",{"_index":709,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルをダウンロードするディレクトリを作成します。jakeをご自身のlinux",{"_index":689,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイルを自分のnod",{"_index":693,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["javaファイル用のdockerコンテナは、iota",{"_index":752,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["javaプログラミング言語とオブジェクト指向プログラミングの概念に精通している人を対象にしています。アドレスの再利用、バンドルとトランザクションなど、iota",{"_index":490,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["java仮想マシンでiriを実行するために使用されるjava",{"_index":711,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["java暗号化api",{"_index":507,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jessi",{"_index":2042,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jessie\"（2016",{"_index":2031,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessie.img",{"_index":2035,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["jessieにはnoderedが付属していますが、nod",{"_index":2053,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["jitpack",{"_index":517,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["jota",{"_index":518,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["js",{"_index":430,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["jsdocアノテーションを編集し、ルートディレクトリからnpm",{"_index":486,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["json",{"_index":1835,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["jsonオブジェクトを受信すると、ファイルはipf",{"_index":1718,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["jsonシードステートをexportedaccountst",{"_index":1836,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/import-seed-state":{}}}],["jsonデータをフォーマットするためのjq",{"_index":1045,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["kdbxファイルフォーマットを使用するパスワード暗号化ファイルです。このフォーマットはkeepass",{"_index":1109,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["keepass",{"_index":66,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["keepassは、1",{"_index":67,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassを開き、new",{"_index":69,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["keepassファイルをコンピュータに保存したら、空白の部分を右クリックしてadd",{"_index":74,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["kerl",{"_index":268,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["kerl2の補数を使用して、243トリットから48バイトへ、48バイトから243トリットへの入出力の追加変換を含むkeccek",{"_index":396,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["kernel",{"_index":1987,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["keyboardをクリックし、unit",{"_index":2049,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["keyedstreamができます。基本的に同じアドレスと1lのタプルがたくさんできます。大量のデータを処理したい場合は、パーティション化が便利です。flink",{"_index":854,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedstreamが得られます。より複雑なユースケースにはwindowal",{"_index":853,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyedtimewindowsを入手しました。次にパーティションを集約する必要があります。これには2つの選択肢があります。最もシンプルな変形はreduce関数です。reduce関数は、すべての要素を実際に必要な数に減らす関数です。今回のケースにおけるreduc",{"_index":856,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["keyメソッドに同じサブシードと異なるセキュリティレベルを渡して、3つのセキュリティレベルそれぞれに対して1",{"_index":346,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["kit",{"_index":1596,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["km",{"_index":1499,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["kmの地域を表しています。たとえば、npht",{"_index":1501,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["known",{"_index":1001,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["lambdaなどのサーバレスアーキテクチャのインスタンスで、iotaクライアントライブラリの1",{"_index":945,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["lang",{"_index":500,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["languag",{"_index":1166,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["lan）またはワイドエリアネットワーク（wan",{"_index":1699,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["lastindex",{"_index":292,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["latest",{"_index":362,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{}}}],["latestmilestoneindex",{"_index":646,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindex",{"_index":600,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドがlatestsolidsubtanglemilestoneindexフィールドと等しい場合、iri",{"_index":736,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドとlatestsolidsubtanglemilestoneindexフィールドは、iri",{"_index":738,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iri",{"_index":737,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestmilestoneindexフィールドは、iriが近隣iri",{"_index":601,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["latestmilestoneindexフィールドを確認するには、discordに移動し、いずれかのチャンネルに!mileston",{"_index":739,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["latestsolidmileston",{"_index":661,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["latestsolidsubtanglemilestoneindexフィールドは、iriノードがマイルストーンを凝固（マイルストーンが直接および間接的に参照するすべてのトランザクションをiri",{"_index":602,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["layers_calcul",{"_index":1048,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["led",{"_index":2016,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["ledger",{"_index":954,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["ledパッケージをインポートします。最後に、imuデータを検出するためにimu",{"_index":2083,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["legion",{"_index":504,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["length",{"_index":83,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["let'",{"_index":1453,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["levelアダプタがデフォルトです。このアダプタは、シードステートをleveldbデータベースのleveldown",{"_index":1864,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["librari",{"_index":2062,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["light",{"_index":1081,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["limit",{"_index":930,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["link",{"_index":413,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["linux",{"_index":62,"docTitle":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["linux、macos、bsdまたはwindow",{"_index":821,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["linuxでノードを実行する、またはdock",{"_index":936,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["linuxとmaco",{"_index":1009,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["linuxはオープンソースのオペレーティングシステムで、ディストリビューションと呼ばれるパッケージで提供されています。各linux",{"_index":1902,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxまたはmacosで実行するには、.\\\\caddyを実行します。windows上でこのファイルを実行するには、ダブルクリックするか、コマンドプロンプトで.\\\\caddi",{"_index":881,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["linuxオペレーティングシステムを使用している場合は、このガイドのコマンドの前にsudo",{"_index":746,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxオペレーティングシステムを使用している場合は、以下のタスクのすべてのコマンドの前にsudo",{"_index":177,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["linuxサーバ。windowsまたはmacosオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1038,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["linuxサーバがssh",{"_index":1925,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがsshプロトコルを使用したメッセージを理解する前に、linuxサーバをssh",{"_index":1919,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバがなく、windowsまたはmaco",{"_index":1873,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバでiri",{"_index":671,"docTitle":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバで、ターミナルウィンドウを開いて、nginx",{"_index":767,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["linuxサーバで新しいターミナルウィンドウを開き、curlとjqをインストールします。curlはrest",{"_index":729,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxサーバに接続するには、セキュアシェル（ssh",{"_index":1917,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバのip",{"_index":1931,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバの現在の内部ip",{"_index":1878,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["linuxサーバへのssh",{"_index":1924,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを起動し、ターミナルを開いて、linuxサーバのip",{"_index":1922,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバを閉じ、リストからlinux",{"_index":1921,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxサーバ（このガイドではubuntu",{"_index":676,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["linuxディストリビューションに含まれているsha256sum",{"_index":1130,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["linuxディストリビューションの1つがubuntuです。ubuntu",{"_index":1903,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linuxディストリビューションのweb",{"_index":1949,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["linuxディストリビューションはオープンソースであり、linux",{"_index":1904,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["linux仮想マシンを実行したくない場合は、amazonなどの会社からクラウドコンピュータの使用を借りることができます。この方法を使うことで、ポート転送やメモリ不足を心配する必要はありません。amazon",{"_index":1905,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["load",{"_index":1858,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["local",{"_index":942,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["local_snapshots_base_path",{"_index":630,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depth",{"_index":631,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_depthおよびlocal_snapshots_pruning_delay",{"_index":640,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_depthの合計は50,100です。したがって、iriノードは940,000（990,100",{"_index":643,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_enabledおよびlocal_snapshots_pruning_enabled設定オプションがtru",{"_index":792,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_interval_sync",{"_index":633,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["local_snapshots_pruning_delay",{"_index":641,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["local_snapshots_pruning_delayおよびlocal_snapshots_depth",{"_index":793,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/prune-transactions-from-the-ledger":{}}}],["localis",{"_index":2048,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["locat",{"_index":1490,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["locationは携帯電話のgp",{"_index":1756,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["log",{"_index":495,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["look",{"_index":2011,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["loop",{"_index":833,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["lps25h",{"_index":2106,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lsm9ds1データシート。これは3d加速度計、3dジャイロスコープ、3d磁力計を1チップにまとめたものです。sens",{"_index":2105,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["lt",{"_index":96,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["lt;&lt;&lt;&lt;&lt;&lt;&lt",{"_index":960,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["lt;version>a98de8ea50&lt;/version>または&lt;version>1.0.0",{"_index":515,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["lt;version>タグ&lt;/version>の値をリリース番号またはgitコミットハッシュの最初の10",{"_index":514,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["ltsサーバ。windowsまたはmacオペレーティングシステムを使用している場合は、仮想マシンにlinux",{"_index":1235,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["ltsバージョンまたは最新バージョンのnode.jsとnpm",{"_index":1410,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["lts用のデフォルトリポジトリはデータベースに使用できるパッケージを提供していません。代わりに、公式のmariadbリポジトリ用にカスタムのperson",{"_index":1243,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["m",{"_index":1503,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{}}}],["mac",{"_index":745,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["machin",{"_index":1915,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["maco",{"_index":64,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["macosx",{"_index":176,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["macos、windows、linux、ios、およびandroid用の公式iotaウォレットです。このウォレットを使用すると、http",{"_index":1452,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["macの部分をお使いのオペレーティングシステムに変更してください：mac、win、またはlinux",{"_index":1182,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["mac上のlinuxサーバへのssh",{"_index":1926,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["magnitud",{"_index":1343,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["magnitude、mwm）は、フルーフオブワーク（pow）の困難さに影響を与えます。mwmが大きいほど、pow",{"_index":139,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}}}],["magnitude：mwm）は、フルーフオブワーク（pow",{"_index":168,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mainnet",{"_index":202,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/introduction/overview":{},"docs/compass/0.1/references/compass-configuration-options":{}}}],["mainnetdbディレクトリ、mainnet.logファイル、および現在のiriの.jar",{"_index":885,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["mainnetでは、コーディネーターのマークル木のdepthは23です。したがって、コーディネーターは8,388,608",{"_index":252,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["mainnetでは、コーディネーターの秘密鍵はセキュリティレベル2です。結果として、マイルストーンの署名は1つのトランザクションに収まるには大きすぎるため、2",{"_index":260,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["mainnetでは、少なくとも14のmwmを使用する必要があります。ハッシュ値が9個（devnetのmwm）または7個（spamnetのmwm）の0トリットで終わるトランザクションをmainnet",{"_index":317,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mainnetと同じテストトークンの総供給量で独自のプライベートネットワークを運営することができます。このようにして、ネットワーク外の誰かがテストデータのトランザクションを見ることなくデータとiota",{"_index":1421,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["mainnetと比較して、9のmwmはプルーフオブワーク（pow",{"_index":211,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetと比較して、このmwmはプルーフオブワーク（pow",{"_index":226,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["mainnetやdevnetなどのパブリックiota",{"_index":1033,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["mainnet上で、コーディネーターはマイルストーンを含むバンドルを作成、署名、および送信します。mainnet",{"_index":1031,"docTitle":{},"docBody":{"docs/compass/0.1/introduction/overview":{}}}],["mainnet上でアプリケーションを使用する準備が整ったら、アプリケーションをプライベートiriノードから切断して、mainnet",{"_index":1422,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["mainnet上で動作するオープンソースのjavaソフトウェアです。このソフトウェアは現在のiotaプロトコルを定義しています。iriはクライアントがお互いの間でiota",{"_index":591,"docTitle":{},"docBody":{"docs/node-software/0.1/introduction/overview":{}}}],["mainnet上のトランザクションが有効であるためには、14の最小重量値（mwm",{"_index":207,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["malform",{"_index":1065,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["mam",{"_index":422,"docTitle":{"docs/utils/0.1/community/mam-watcher/overview":{}},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam.client.j",{"_index":1772,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamのgithub",{"_index":1573,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mamは購読サービスです。最新のデータを受信するためにastropiota",{"_index":2001,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["mamを使用しない場合は、代わりにiota",{"_index":1746,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamクライアントライブラリを使用してiotaタングルに保存されます。この機能は、アプリに埋め込むことも、外部サーバー（mamサーバー）を介して実装することもできます。外部サーバー（mamサーバー）との間で、セキュアなhttp",{"_index":1758,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamサーバーは、最初に、オブジェクトリポジトリから特定の資産に関連付けられているmamチャネルのルートに関連する情報を取得する必要があります。これは、qrコードのスキャンから取得されるか、手動で挿入されるassetuniqueidをプライマリーキーとして使用することによって行われます。これらの情報はそれぞれのmamチャンネルに添付され、iotaタングルにイミュータブルに保存されます。このために、以下の2",{"_index":1769,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルから読み取ることができるように、電力源は生産者に登録/登録解除する必要があります。これは生産者側で軽量のweb",{"_index":1674,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルがもう使用されていないことを知らせるためにgoodby",{"_index":1673,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルが作成されます。回収可能資産のデジタルツインは、以下の情報で作成されます。&amp;lt;assetuniqueid",{"_index":1747,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが作成されるか既存のmamチャネルが更新されたら、オブジェクトリポジトリを更新する必要があります。これは、上で紹介したcreateitem()およびupdateitem",{"_index":1777,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルが使用されなくなったことを知らせるために、goodby",{"_index":1682,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルとweb",{"_index":1671,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルに追加されます。そのために、新しいmamメッセージが既存のチャネルに添付され、次の情報が更新されてタングルに保存されます。&amp;lt;assetcustodianid",{"_index":1768,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの作成と使用、web",{"_index":1578,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルの作成後、中央管理のバックエンドのオブジェクトリポジトリにデータが入力されます。オブジェクトリポジトリはfirebas",{"_index":1761,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルの初期化中に作成されたmam",{"_index":2094,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamチャネルを作成し、javascriptクライアントライブラリを使用してmam",{"_index":1781,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["mamチャネルを作成します。グリッドはこの情報を中央のdbでも追跡しますが、mam",{"_index":1694,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamチャネルを作成する前に、トランザクションが保存されるiotaネットワーク（プロバイダ）を選択する必要があります。これは、メインのiotaネットワーク、またはhttps&#x3a;//nodes.devnet.thetangle.org:443",{"_index":1773,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1541,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{}}}],["mamチャネルを使用して特定の資産の保管の変更を登録すると、さまざまな保管担当者情報をiota",{"_index":1745,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル情報にそれぞれアクセスして更新する（例えば、保存されているデジタルツインを更新するために新しいメッセージを追加する）関数が実装されています。reactで書かれたweb",{"_index":1770,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamチャネル詳細を使用して電力源のmam",{"_index":1676,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["mamプロトコルを使用して、回収可能資産にidを付与し、mam",{"_index":1742,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージのペイロード（例えば、デジタルツインに含まれる情報）を暗号化すること、および選択された当事者だけにアクセスを保証することを可能にします（mam.changemod",{"_index":1775,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["mamメッセージはjson",{"_index":2092,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mamメッセージは、iota",{"_index":2093,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mam（マスク認証メッセージング）は、チャネルと呼ばれる暗号化されたデータストリームを発行および購読することを可能にする通信プロトコルです。mam",{"_index":1408,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["manag",{"_index":1153,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{}}}],["manual",{"_index":1209,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["map",{"_index":852,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{}}}],["mapをアキュムレータとして使います。マップはキーとバリューのペアを含んでいるので、本当に便利です。aggregatefunctionは一番上のアドレスから一番下のアドレスへソートされたリストを返します。最初の10個だけに興味があるので、最初の10個だけを取ります。クラスのコンストラクタは10",{"_index":862,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["mariadb",{"_index":1249,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mariadb、postgresqlなどの一般的に使用されるdb",{"_index":1632,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["mariadbのroot",{"_index":1250,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mariadbのようなmysql",{"_index":1313,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["marketplac",{"_index":1540,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["maven",{"_index":509,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mavenビルドツールをインストールします。user_home_dir",{"_index":706,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["max",{"_index":647,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["max_future_set_size個の承認トランザクションを保存できます。この値は、ヒューリスティクスに5000にハードコードされています。この最適化は、トランザクションの未来集合がmax_future_set_s",{"_index":658,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["maxdepth",{"_index":662,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["mcuがl",{"_index":2116,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["merkl",{"_index":249,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["messag",{"_index":144,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["messages.proto",{"_index":1349,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["messaging（mam））チャネルを使用してデータサイロを開き、ユーザーがデータと引き換えにiota",{"_index":1552,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["metadata",{"_index":949,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/data-in-the-ledger":{}}}],["mi",{"_index":47,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-bundle":{},"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["mileston",{"_index":363,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["milestonesとしてsnapshot.meta",{"_index":637,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["minimum",{"_index":137,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["minweightmagnitud",{"_index":442,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["miを送信しようとします。このトランザクションでは、3",{"_index":1107,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["mkdir：ディレクトリを作成できません...」と表示された場合は、おそらくjakeをご自分のlinux",{"_index":690,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["mobil",{"_index":424,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["mode",{"_index":1161,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["model",{"_index":1570,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["modul",{"_index":562,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{},"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["moduleのbuild.gradl",{"_index":105,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["mongodb",{"_index":1849,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["monitorinterv",{"_index":1228,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["mostusedaddressesaggreg",{"_index":861,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["multi",{"_index":1084,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["multi_us",{"_index":1845,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multi_useフィールドを持つcda",{"_index":1841,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["multius",{"_index":1788,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["multiuseフィールドまたはexpectedamountフィールドのいずれかをtimeoutatと併用してcda",{"_index":1793,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["mvn",{"_index":520,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["mwm",{"_index":313,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが1増えるごとに、powの難しさは3",{"_index":318,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmが大きいほど、pow",{"_index":169,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["mwmと同じ数の0トリットで終了するまで繰り返しハッシュ化されます。mwm",{"_index":314,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwmの正しい数の0",{"_index":320,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）pow",{"_index":405,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。クライアントとしてiotaネットワークと対話するときは、そのネットワークに適したmwm",{"_index":309,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["mwm）は、プルーフオブワーク中に行われる作業量を定義する変数です。ノードにトランザクションを送信するときは、そのノードのネットワークに対して正しいmwm",{"_index":302,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["mwm）引数は、プルーフオブワーク（pow）の難易度に影響します。mwmが大きいほど、pow",{"_index":1344,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["myaccount.go",{"_index":1832,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["myrootpasswordプレースホルダーをmariadbのインストール時に選択したroot",{"_index":1255,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["mysql",{"_index":1252,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["mysqlとさまざまなコマンドについて学ぶためには、mysql",{"_index":1315,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}}}],["name",{"_index":193,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["name&amp;gt;\\_examples_test.go",{"_index":588,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_suite_test.go",{"_index":582,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["name&amp;gt;\\_test.go",{"_index":583,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["nameフラグの値をiri",{"_index":757,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["nano",{"_index":1101,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["nativ",{"_index":1171,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["neighbor",{"_index":999,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["neighborsと繋がるには、discordの#helpまたは#nodeshar",{"_index":186,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークに接続するには、隣接iri",{"_index":732,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["neighborsフィールドの値が0であることがわかります。iriノードはまだiotaネットワークに接続されていません。iotaネットワークへの接続を行うには、隣接iri",{"_index":764,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["neighborsフィールドの値が0であることがわかります。これは、ノードがiotaネットワークに接続されていないことを意味します。iotaネットワークに接続するためには、neighbor",{"_index":185,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["neighbors設定オプションから隣接ノードのuri",{"_index":911,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighbors設定オプションに隣接ノードのuri",{"_index":889,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["neighborノードの数はtotalノードの数と同じです。ネットワークがシャーディングを許可すると、neighbor",{"_index":1003,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["net",{"_index":1176,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["netatmo",{"_index":1587,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["netcfg.yamlファイルを新しい静的ip",{"_index":1882,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["network",{"_index":952,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["new",{"_index":71,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["neweventloggerplugin",{"_index":1833,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["nginx",{"_index":769,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがapiリクエストのレートを制限していることをテストするには、getnodeinfoエンドポイントに対して20",{"_index":778,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxがこれらのipアドレスからのリクエストを受信したときには、リクエストをiri",{"_index":783,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxが複数のリクエストを受信すると、upstreamブロックディレクティブにリストされているiri",{"_index":788,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxのwebページが表示されます。このページはnginxに含まれており、サーバが稼働していることを示しています。次に、iriノードのリバースプロキシとしてnginx",{"_index":771,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxはiriノードへのリクエストを制御しています。nginxがリクエストを受け取ると、そのリクエストをiri",{"_index":777,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxをiriノードと同じlinux",{"_index":766,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nginxサーバでポート5000",{"_index":774,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["nmapがネットワーク内のすべてのipアドレスをスキャンする必要があるため、このプロセスにはしばらく時間がかかります。小さなサブネット（netmask=24）の場合、nmapは256個のアドレスをスキャンするだけでよいので、数秒かかります。大規模なネットワークでは時間がかかる可能性があります。たとえばnetmask=16の場合、nmapは256\\*256アドレスをスキャンする必要があります。私のテストケースでは、これは2944.17",{"_index":1980,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["node",{"_index":665,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.j",{"_index":94,"docTitle":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{}},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["node.jsでjavascriptクライアントライブラリを使用すると、getbal",{"_index":1445,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["node.jsでローカルpow",{"_index":943,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["node.jsとpythonを使用していますが、zmq",{"_index":807,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["node.jsとpythonを使用していますが、任意のzmq",{"_index":1024,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["node.jsのlts版（バージョン10.15.3",{"_index":1172,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["node_modulesディレクトリを削除してから、sudo",{"_index":1296,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["noderedおよび従来のnodej",{"_index":2054,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["non",{"_index":670,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["nonc",{"_index":326,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["nonceフィールドには、iriノードがpowを検証するために使用する27",{"_index":321,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["nordic",{"_index":1592,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["nosql",{"_index":1599,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["nosqlデータベースとして実装され、ポート3000を使用してデプロイされます。特定の資産idに関連付けられたmamチャネルに関連する情報をfirebas",{"_index":1762,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["nosqlデーターベース：mongodb",{"_index":1698,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["npm",{"_index":100,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["npm（node.j",{"_index":98,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{}}}],["ntp",{"_index":1800,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["nullpointer例外が発生する可能性があるため、決してgetを使用しないでください。代わりにgetorelseを使用してください。正しい型が返されるように、ライブラリにフィルタを実装することも意味があります。これは型チェックを時代遅れにするでしょう。このライブラリはpoc",{"_index":849,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["nullまたは9",{"_index":908,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["numberformatexcept",{"_index":1093,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["numberformatexceptionエラーまたはillegalargumentexcept",{"_index":1068,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["oauthログイン画面が表示されます。googl",{"_index":1606,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["obsoletetag",{"_index":290,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["ok",{"_index":82,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["old",{"_index":655,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["on",{"_index":923,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["open",{"_index":1560,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["openjdk",{"_index":691,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["openssl",{"_index":1180,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["option",{"_index":191,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/iota-js/0.1/README":{}}}],["orang",{"_index":1942,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ots）iota",{"_index":399,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["ots）を使用して署名を作成します。この署名方式は量子耐性があります。つまり、署名は量子コンピューターからの攻撃に対して耐性があります。しかし、winternitz",{"_index":276,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["ots）を使用するため、秘密鍵は1つのバンドルにのみ署名する必要があります。コーディネーターが複数のバンドルに署名しつつ、かつそれらすべての署名が1",{"_index":248,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["output",{"_index":2063,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["overflow",{"_index":968,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["p2p",{"_index":1545,"docTitle":{"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["p2pエネルギーグリッドでのエネルギー取引には、4",{"_index":1658,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["p2pエネルギーグリッドアプリケーションは、iotaネットワーク内のノードを通じて、電力源、生産者、消費者、およびグリッドからのデータをmam",{"_index":1661,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["p2pエネルギーグリッド内のエンティティがどのようにエネルギーを交換できるかを示しています。p2pエネルギーグリッドの分散型およびマシンベースの性質により、これはiotaの理想的なユースケースになります。iota",{"_index":1657,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["packag",{"_index":1244,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["package.json",{"_index":434,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["package.jsonファイルと、iotaクライアントライブラリとその依存関係を含むnode_modul",{"_index":128,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["packで購入できます。このスターターパックには、raspbianがプリインストールされたsd",{"_index":2023,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["page",{"_index":190,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["pageとpag",{"_index":1685,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["panel",{"_index":2017,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["paramet",{"_index":922,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-errors":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["parent",{"_index":519,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["partner",{"_index":698,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["password",{"_index":79,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/wallets/0.1/trinity/how-to-guides/manage-your-account":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["path",{"_index":1122,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["path&amp;gt;プレースホルダをgithub.com/me/awesom",{"_index":563,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["path/to/conf/config.ini",{"_index":756,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["paymentidoraddressは、グリッドが支払いを行うことができるiotaアドレス、またはグリッドが別の支払い方法を持つようにするための参照id",{"_index":1679,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["paymentidoraddressは、実際のiotaアドレス、または消費者が別の方法で支払いをするために使用できる参照です。グリッドがiota",{"_index":1695,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pdf",{"_index":1111,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{}}}],["peer",{"_index":1002,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/blueprints/0.1/introduction/overview":{}}}],["pend",{"_index":368,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["perm",{"_index":1299,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["permanod",{"_index":717,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permanode（すべてのトランザクションを台帳に保持するノード）を実行する場合は、local_snapshots_pruning_enabled設定パラメータをfals",{"_index":718,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["permiss",{"_index":1016,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/compass/0.1/references/troubleshooting":{}}}],["persistenceadapterファクトリをアカウントに渡します。このアダプタは、アカウントがシードステートを保存できるローカルデータベースオブジェクトを作成します。デフォルトでは、ローカルデータベースはプロジェクトのルートに保存されます。persistencepath",{"_index":1861,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["phat",{"_index":1482,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["photo",{"_index":1168,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pi",{"_index":1406,"docTitle":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["pictur",{"_index":1660,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["pip3.2",{"_index":2044,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piからdevnet",{"_index":1407,"docTitle":{},"docBody":{"docs/utils/0.1/introduction/overview":{}}}],["piからdevnetタングルに毎分リアルタイムの温度データ（現在の摂氏温度）を送信します。その後、別のdevnetノードでイベントストリーム（zmq",{"_index":1470,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["piと直接通信する方法とssh経由で通信する2つの方法があります。直接通信するには、usbキーボードとマウス、さらにhdmi対応モニターまたはテレビを使います。ssh経由で通信するにはputti",{"_index":2027,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piなどの多くのsbcでも同様です。sbcのガイドが別にある場合は、そのガイドに従う必要があります。それ以外の場合は、多くの開発ボードをサポートしているのでarmbian",{"_index":1943,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["piのhdmi",{"_index":2041,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piのip",{"_index":2077,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスがsens",{"_index":2075,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのipアドレスを見つけるには、python",{"_index":2067,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piのusb",{"_index":2040,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piの再起動時に実行するようにcron",{"_index":2072,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piの近くにあり、使用中は加熱されます。キャリブレーションテストによると、sens",{"_index":2088,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["piは、単独で、またはraspberri",{"_index":2021,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["piをwifi",{"_index":2046,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piを再起動してcronジョブを開始します。数秒待ってから、raspberri",{"_index":2074,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["piを設定する最も簡単な方法は、プラグインモニター、キーボード、マウスを使ってraspberri",{"_index":2045,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["piコンピュータとsens",{"_index":1998,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{}}}],["pi入門ガイドに従います。w3schoolsには、入門ガイドもあります。スターターパックのバージョンはraspbian",{"_index":2029,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["platformio",{"_index":1964,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platformioをお勧めします。platformioはsbc",{"_index":1965,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["platform上で動作し、オプションでamazon",{"_index":1581,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["playbookからsp",{"_index":700,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["plugin",{"_index":1011,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["pluginインターフェースを実装することができます。このオプションはプラグインが動作するアカウントオブジェクトのためのgetterとsett",{"_index":1857,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-plugin":{}}}],["plus）には、sens",{"_index":2025,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["pngファイルとしてqr",{"_index":1144,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["poc",{"_index":1630,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["pocのアーキテクチャは、電力源、生産者、消費者、およびグリッドがiota",{"_index":1662,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["pocのアーキテクチャー（下の画像）は、センサーまたはその他のデバイス、クラウドバックエンド、および分散型台帳（dlt",{"_index":1577,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{}}}],["pocを使用したときに発生する可能性があるいくつかのシナリオについて説明します。主に次の2",{"_index":1654,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pointsとしてsnapshot.meta",{"_index":639,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["pollerプラグインとpromot",{"_index":1802,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pollerプラグインは、取り出しトランザクションが確定されたかどうか、またはペンディング中の預け入れトランザクションがあるかどうかを確認します。それから、promot",{"_index":1806,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["pom.xmlファイルにiotaledg",{"_index":513,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["pom.xmlファイルにjitpack",{"_index":512,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["popul",{"_index":1731,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["port",{"_index":1897,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["port設定パラメーターに設定されているapiポートでクライアントからのトランザクションを受信します。このポートにhttpリクエストを送信して、ノードのrest",{"_index":800,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{}}}],["postgresまたはfirebas",{"_index":1637,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["pow",{"_index":220,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{},"docs/dev-essentials/0.1/references/glossary":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/references/best-practice":{}}}],["pow_arm_c128",{"_index":573,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_avx",{"_index":567,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c",{"_index":577,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_c128",{"_index":571,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["pow_ss",{"_index":569,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powが導入されました。この概念はハッシュキャッシュとして知られており、ハッシュキャッシュはすべてのeメールの内容についてプルーフオブワークを要求することによって",{"_index":311,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powを使用する場合は、必ずhttpclientsettingsなどのプロバイダ設定でlocalproofofworkfunc",{"_index":579,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["powを含まなければなりません。このpowは、大量のスパムトランザクションを作成するのにかかる時間と計算能力を増大させることによって、iota",{"_index":312,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powを計算する関数はpearldiv",{"_index":322,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["powプロキシサーバがattachtotangl",{"_index":882,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバは、iotaミドルウェアを使用するcaddyの実装です。このミドルウェアにより、サーバはiriノードのattachtotangleエンドポイントへの呼び出しを傍受してpow",{"_index":864,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["powプロキシサーバ間の接続を安全にしたい場合は、tlsディレクティブの前のハッシュ記号（＃）を削除し、あなたのssl",{"_index":880,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{}}}],["pow）したり、pow",{"_index":941,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["pow）は、特定の要件を満たすために試行錯誤を使用して計算されるデータの一部です。pow",{"_index":310,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/minimum-weight-magnitude":{}}}],["ppaをダウンロードするためにgnu",{"_index":1246,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["pr",{"_index":1302,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["practic",{"_index":933,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["prefix_lengthの長さに切り捨てます。現在、この値は44バイトにハードコードされています。これは220",{"_index":657,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["preparetransf",{"_index":535,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["preparetransfers()メソッドに渡します。次に、返されたバンドルのトライトをsendtryt",{"_index":134,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["preparetransfers()メソッドを呼び出して準備済みバンドルをsendtrytes()メソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":565,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["preparetransfers(se",{"_index":466,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["preparetransfersメソッドを呼び出して、準備済みバンドルをsendtrytesメソッドにパイプ処理することによって、トランザクションを作成してiri",{"_index":480,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["print",{"_index":832,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["privaci",{"_index":1247,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["privat",{"_index":1036,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["processtransferbatchrepli",{"_index":1364,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransferbatchrequest",{"_index":1365,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransferbatchrequest.transf",{"_index":1366,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["processtransfersまたはuserwithdraw",{"_index":1317,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["processtransfersエンドポイントを使用する場合、タングル上でiotaトークンは転送されません。代わりに、ユーザーの残高はデータベース上で更新されます。これは、ユーザーが取り出しをリクエストできるiota",{"_index":1318,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["produc",{"_index":1669,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["producerpriceフィールドがグリッドによって支払われることが保証されているのではなく、すべての生産者間の合意価格が支払われます。合意価格は、すべてのproducerpric",{"_index":1678,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["project",{"_index":109,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-go/0.1/README":{}}}],["promotetransact",{"_index":372,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["promotetransaction(tail",{"_index":468,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["prompt",{"_index":1251,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["proof",{"_index":939,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["properti",{"_index":527,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["protocol",{"_index":955,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["providerフィールドにurl",{"_index":1341,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["publicに設定されています。パブリックモードでは、誰でもastropiotaによって公開された環境データを見ることができます。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":2085,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicに設定されています。プレースホルダ、mamsecretは、privateまたはrestrict",{"_index":2097,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["publicメソッドの代わりにrestrictedメソッドを使用するようにmamst",{"_index":1415,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["publish",{"_index":1536,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["publish関数で、ファイルをハッシュ化し、トランザクションでdevnet",{"_index":1534,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["publish関数に渡し、2",{"_index":1539,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["publish関数を実行し、contract.txt",{"_index":1535,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["pubsub",{"_index":1472,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["put",{"_index":1675,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["putti",{"_index":1930,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["pyramid",{"_index":1554,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["python",{"_index":418,"docTitle":{},"docBody":{"docs/client-libraries/0.1/introduction/overview":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["python3",{"_index":2043,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["python用のpypars",{"_index":1240,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["pフラグを指定してiri",{"_index":753,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["qr",{"_index":1141,"docTitle":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードは、アドレス、金額、およびメッセージの各フィールドに自動入力することで、トリニティでトランザクションを送信するプロセスをスピードアップします。送信者がqrコードをスキャンできるようにすることで、eコマースweb",{"_index":1142,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードをスキャンすると、トランザクションフィールドにqr",{"_index":1146,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["qrコードを送信するか、web",{"_index":1145,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-a-qr-code":{}}}],["queue",{"_index":616,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["r",{"_index":1207,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["ram",{"_index":674,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["random",{"_index":669,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["raspberri",{"_index":1405,"docTitle":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}},"docBody":{"docs/utils/0.1/introduction/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["raspberrypi",{"_index":1471,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["raspberryをクリックして、prefer",{"_index":2047,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["raspbian",{"_index":2034,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["react",{"_index":1184,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["reactで書かれたグラフィカルユーザーインターフェース（gui）とnodejsで書かれたバックエンドapiの2",{"_index":1629,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["reactで書かれたフロントエンドguiとnode.j",{"_index":1704,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["reactで書かれてelectron上にビルドされていますが、トリニティモバイルはreact",{"_index":1170,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["readm",{"_index":427,"docTitle":{"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{}},"docBody":{}}],["readme.md",{"_index":1618,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["reattach",{"_index":1803,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["receiv",{"_index":1139,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["receiver.j",{"_index":2064,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["receiver.jsがastropiotaの現在のmamチャンネルを見つけるためには、メッセージルートが必要です。したがって、sender.j",{"_index":2095,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsが初期化され、astropiotaからのmam",{"_index":2101,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsはmamクライアントとtryt",{"_index":2096,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは、現在のルート上の新しいデータについて5秒ごとにmam",{"_index":2099,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["receiver.jsは現在のルートと次のルートを追跡するため、何をリッスンし、いつデータを画面に出力するかがわかります。receiver.jsがsens",{"_index":2098,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["recordがパブリックip",{"_index":1458,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["reduce関数が使われます。合計が良い例です。したがって、今回の場合、reduce関数は集約関数よりも意味があります。集約関数は、複雑な操作があるときに役立ちます。1つの複雑な例がbundleaggregation.scalaにあります。bundleaggregationは入ってくるトランザクションをバンドルにまとめ、それらをunconfirmedbundlesとreattachedunconfirmedbundl",{"_index":858,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["refer",{"_index":463,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["reference引数のトランザクションがdepthマイルストーンインデックスよりも古い場合、api呼び出しは失敗し、次のエラーメッセージが表示されます。：refer",{"_index":654,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["releas",{"_index":696,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["remot",{"_index":938,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["remote=fals",{"_index":959,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["remote=tru",{"_index":958,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["removeneighbor",{"_index":910,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["removeneighbors(uri",{"_index":470,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["repl",{"_index":834,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["replaybundl",{"_index":537,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["replaybundle()メソッドがバンドルを再添付し、後で確定されたかどうかを確認するために、新しく再添付されたバンドルの末尾トランザクションハッシュをtail",{"_index":373,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["replaybundle(tail",{"_index":471,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["req",{"_index":1282,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["request",{"_index":155,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requestボタンはアドレスが有効な場合のみ表示されます。有効なアドレスは、81または90トライト（有効なチェックサムを含む場合は90",{"_index":156,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["requir",{"_index":1988,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["respons",{"_index":905,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["rest",{"_index":1571,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["restart",{"_index":761,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["restart=alway",{"_index":992,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["retriev",{"_index":1724,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrievefil",{"_index":1712,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["retrieveをクリックします。トランザクションハッシュはapiに渡され、タングル上のトランザクションのメッセージからipfsハッシュやsha256ハッシュなどが取得されます。ipfsハッシュはファイルのダウンロードに使用され、sha256ハッシュはダウンロードしたファイルのsha256",{"_index":1733,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["retrofit",{"_index":492,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["return",{"_index":1737,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["rgb",{"_index":2110,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["robot",{"_index":154,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/receive-test-tokens":{}}}],["rocksdb",{"_index":599,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/the-ledger":{}}}],["root",{"_index":1972,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["rootのbuild.gradl",{"_index":104,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["router",{"_index":1895,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["rpc",{"_index":1055,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["rpchub",{"_index":1254,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["rule",{"_index":1899,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["run",{"_index":487,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["runtim",{"_index":825,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["runコマンドに次のフラグを1",{"_index":1388,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/command-line-flags":{}}}],["r（macosではcmd",{"_index":1206,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["s3やazur",{"_index":1727,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["salt",{"_index":1219,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["saltパラメーターはもう必要ありません。署名サーバ（signer:50051）と使用するssl",{"_index":1291,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["saltフラグの値を少なくとも20",{"_index":1258,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["saltフラグを設定してシード暗号化アルゴリズムの強度を高めます。ソルトは攻撃者がデータベース内のシードuuid",{"_index":1399,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/security-considerations":{}}}],["sbc",{"_index":1948,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc。おすすめはrasperri",{"_index":1937,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcにgoをインストールしました。これで、go",{"_index":1986,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["sbcにイーサネットポートがない場合は、usb",{"_index":1939,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcのドキュメンテーションを参照します。orang",{"_index":1970,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcの両方がwifi",{"_index":1961,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcをルーターに接続するだけです。wifiを使用したいか、またはデバイスがwifiしか持っていない場合は、wifiを通してルーターに接続する必要があります。以下の手順で、my_ssidをネットワークの名前に、my_password",{"_index":1950,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを再確認します。新しく追加されたusbポートが探しているusb",{"_index":1969,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbcを確認し、usbアダプタを接続してusb",{"_index":1968,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbc）は、単一の回路基板がメモリ、入力/出力ポート、マイクロプロセッサおよび他の必要な機能を含む小型のコンピュータです。sbcは、デスクトップなどのマルチボードコンピュータよりも軽量、コンパクト、信頼性が高く、電力効率もはるかに優れています。iotaテクノロジを使用する専用の組み込みアプリケーション用にsbc",{"_index":1933,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sbt",{"_index":829,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["scalaプログラミング言語とsbt",{"_index":824,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["screen",{"_index":996,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["screen/tmuxセッション、system",{"_index":1260,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["script",{"_index":2071,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["scriptをクリックして、事前設定された.zip",{"_index":1617,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sd",{"_index":1941,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sdカードを挿入してsbc",{"_index":1944,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["seconds変数を1",{"_index":370,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["secur",{"_index":478,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["seed",{"_index":38,"docTitle":{},"docBody":{"docs/getting-started/0.1/introduction/what-is-a-seed":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/trinity/how-to-guides/create-an-account":{}}}],["seedproviderオブジェクトを作成してwithseedprovid",{"_index":1796,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["seedproviderオブジェクトを作成して、それをbuild",{"_index":1851,"docTitle":{},"docBody":{"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["seeduuidフィールドの値とsalt",{"_index":1305,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["seed変数をgetnewaddress",{"_index":341,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/create-an-address":{}}}],["select",{"_index":80,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["selector",{"_index":1163,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["semiconductor",{"_index":1593,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["send",{"_index":1137,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["sender.j",{"_index":1413,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsはmamメッセージストリームを初期化します。初期化中に、メッセージを安全に送信するために使用されるシードとアドレスが生成されます。この例では、メッセージはmainnetネットワークではなくdevnet",{"_index":2084,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsは、湿度と温度のデータを摂氏または摂氏と華氏で表示するようにsens",{"_index":2086,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sender.jsウィンドウがトランザクションを送信し、fetcher.j",{"_index":1412,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl",{"_index":1469,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["sender.jsファイルとfetcher.jsファイルの両方で、ノードのurlhttps&#x3a;//nodes.devnet.thetangle.org:443を必ず自分のノードのurl（http&#x3a;127.0.0.1:14265",{"_index":1418,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["sender.jsファイルにmamクライアントとiota",{"_index":2081,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["sendtransf",{"_index":536,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["sendtryt",{"_index":351,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/iota-java/0.1/README":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sendtrytes(tryt",{"_index":472,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["sens",{"_index":2002,"docTitle":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}},"docBody":{"docs/smartcity/0.1/astropiota/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/customize":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["sensehat",{"_index":1994,"docTitle":{},"docBody":{"docs/smartcity/0.1/introduction/overview":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["senseip.pi",{"_index":2069,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sensor",{"_index":1595,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["sequenc",{"_index":1666,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["server",{"_index":1597,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverファイル（18.04",{"_index":1911,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["serverブロックディレクティブで、proxy_passシンプルディレクティブの値をhttp&#x3a;//iriに変更します。iriをあなたのupstream",{"_index":787,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["servic",{"_index":1598,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["services上の仮想プライベートサーバのインスタンス（t2.xlarg",{"_index":1086,"docTitle":{},"docBody":{"docs/compass/0.1/references/merkle-tree-compute-times":{}}}],["set",{"_index":1894,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["setinterv",{"_index":374,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["sha",{"_index":1650,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["sha256",{"_index":1115,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256、およびipf",{"_index":1715,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256チェックサムは、apach",{"_index":707,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["sha256ハッシュ、およびipfsハッシュはイミュータブルです。ipf",{"_index":1734,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["sha256ハッシュ、およびファイルの内容をipfsノードに送信します（post",{"_index":1713,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha256ハッシュおよびコード署名を使用できます。これら2",{"_index":1114,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュとリリースノートのsha256",{"_index":1118,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["sha256ハッシュをapiから返されたsha256",{"_index":1723,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sha512",{"_index":1648,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["shell",{"_index":2070,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["shimmer",{"_index":1008,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["shimmer.exeに変更してから、コマンドプロンプトで.\\\\shimm",{"_index":1014,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["showdata",{"_index":2100,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["shutdown",{"_index":1831,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["sidekeyは認証の証としてdelet",{"_index":1683,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sidekeyは認証の証としてdeleteに渡されます。電力源が登録解除されると、生産者は電力源のmam",{"_index":1677,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["signaturemessagefrag",{"_index":148,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["signaturemessagefragmentフィールドにマークル木を再構築することができるのに十分なマークル木からの足りないデータを含む1",{"_index":261,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["signaturemessagefragmentフィールドに含めることができるのは2187トライトだけなので、1より大きいセキュリティレベルを持つ入力アドレスは、ゼロトークンの出力トランザクションのsignaturemessagefrag",{"_index":283,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/addresses-and-signatures":{}}}],["signaturemessagefragmentフィールド（2187",{"_index":299,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["signbundl",{"_index":1339,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundle()メソッドを使用する前に、ハブのsignbundle_enabledフラグがtru",{"_index":1338,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundle_enabledフラグがtru",{"_index":1333,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["signbundlerepli",{"_index":1368,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["signbundlerequest",{"_index":1367,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["signed_uuid",{"_index":1392,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["signerです。シェルでhostnam",{"_index":1278,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["signing.conf",{"_index":1287,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["signing.confファイルに次の行を追加します。userフィールドの値を変更して、command、directory、stderr_logfile、およびstdout_logfil",{"_index":1286,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["silo",{"_index":1557,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["simpl",{"_index":494,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["singl",{"_index":1035,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["sizeはどちらもオプションであり、デフォルトはそれぞれ0と10",{"_index":1686,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["si）における物理量および単位の略語。湿度、大気質、降水量、風速、風向などの環境測定単位でもあります。このフィールドの長さは20",{"_index":1616,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["slightli",{"_index":2012,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smaller",{"_index":2013,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["smart",{"_index":1569,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["sn",{"_index":811,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["snapshot",{"_index":956,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["snapshot.example.txtファイルは、次のシードから派生した最初のアドレスに2.7piのiota",{"_index":1059,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["snapshot.meta",{"_index":627,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{},"docs/node-software/0.1/iri/references/data-in-the-snapshot-metadata-file":{}}}],["snapshot.st",{"_index":629,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["snapshot.txt",{"_index":1060,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{}}}],["socket",{"_index":1090,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["solid",{"_index":638,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/local-snapshot":{}}}],["sourc",{"_index":1667,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["sourceディレクトリに移動してrepl",{"_index":837,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["spammer",{"_index":1012,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["spamnet",{"_index":203,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["spamnetトークンを使用するpoc",{"_index":222,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上でiri",{"_index":228,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のiriノードのzmq",{"_index":230,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトランザクションが有効になるには、7の最小重量値（mwm",{"_index":225,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["spamnet上のトークンの総供給量を含むアドレスを定義するためのスナップショットファイルも作成しなければなりません。このファイルの場所は、snapshot_fil",{"_index":724,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["spent",{"_index":886,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{}}}],["src/desktop/out",{"_index":1183,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/translation.jsonに移動し、作成したテーマの名前をthem",{"_index":1195,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["src/shared/locales/en/ディレクトリのtranslation.json",{"_index":1199,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["sscc",{"_index":1753,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["sseベースのpow",{"_index":570,"docTitle":{},"docBody":{"docs/iota-go/0.1/README":{}}}],["ssh",{"_index":1920,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/general/0.1/how-to-guides/setup-sbc":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["sshでraspberri",{"_index":2065,"docTitle":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["sshを通してsbcに接続しています。これでsbc",{"_index":1963,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshクライアントと構成済みネットワークがインストールされたlinuxベースのオペレーティングシステム（os）。このガイドでは、ubuntuを使用しますが、macosと同様に他のlinux",{"_index":1934,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["sshサーバとしてlinux",{"_index":1918,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を確立します。ip_address_from_step_7プレースホルダーをlinuxサーバのip",{"_index":1928,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh接続を開き、raspberri",{"_index":2076,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["ssh経由でlinuxサーバに接続しました。puttyまたはホストデバイスにlinuxコマンドを入力して、linuxサーバ上でlinux",{"_index":1932,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ssh経由でsbc",{"_index":1975,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ssl",{"_index":1271,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ssl.yml",{"_index":1467,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["ssl証明書をインポートし、ssl証明書を使用するようにstart.sh",{"_index":1288,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["ssl証明書を使用する安全なcaddyプロキシサーバを起動するようにワンコマンドタングルのdock",{"_index":1455,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["st",{"_index":2104,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["stack",{"_index":967,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["stackexchang",{"_index":963,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/wallets/0.1/trinity/references/troubleshooting":{}}}],["stackoverflow",{"_index":1402,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/troubleshooting":{}}}],["stakehold",{"_index":1739,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/overview":{}}}],["start",{"_index":379,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/smartcity/0.1/astropiota/references/sensehat-specs":{}}}],["start()関数を作成します。アカウントが開始されると、すべてのプラグインはaccount",{"_index":1830,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-plugin":{}}}],["start.sh",{"_index":1257,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["startattaching()とstopattach",{"_index":1868,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["starter",{"_index":2022,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["state",{"_index":1066,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/compass/0.1/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["station",{"_index":1589,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["statsrepli",{"_index":1370,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["statsrequest",{"_index":1369,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["statu",{"_index":995,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["status&amp;gt",{"_index":1751,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["storag",{"_index":1547,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["storageなどの代替ストレージソリューションを使用するには、一意のハッシュ（たとえばファイルのsha256",{"_index":1728,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["store",{"_index":1716,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/iota-java/0.1/how-to-guides/create-account":{}}}],["storeandbroadcast(tryt",{"_index":473,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storefil",{"_index":1711,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storefile()メソッドは次の形式のjson",{"_index":1717,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["storetailtransact",{"_index":1527,"docTitle":{},"docBody":{"docs/utils/0.1/official/tryte-compress/overview":{}}}],["storetransact",{"_index":913,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["storetransactions(tryt",{"_index":474,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["storeオブジェクトをclose可能であれば、clos",{"_index":1798,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["streamingディレクトリに移動してrepl（read",{"_index":830,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["studio",{"_index":123,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["sub",{"_index":1887,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["subjパラメーターを変更し（例えば、cn=sign",{"_index":1281,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["subse",{"_index":345,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{}}}],["success",{"_index":113,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/utils/0.1/community/mam-watcher/overview":{}}}],["success:おめでとうございます:tada",{"_index":141,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["success:おめでとうございます！:tada",{"_index":776,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/listen-to-events":{},"docs/iota-go/0.1/how-to-guides/create-plugin":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/listen-to-events":{},"docs/iota-java/0.1/how-to-guides/create-plugin":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/listen-to-events":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["success:コンパスはあなた自身のiotaネットワークでマイルストーンを送っています！:tada",{"_index":1074,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["supervisorパッケージをインストールします（ctrl+c",{"_index":1262,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["sweep",{"_index":1394,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["sweep_max_deposit",{"_index":1231,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweep_max_withdraw",{"_index":1232,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweep_tail",{"_index":1395,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["sweepdetailrepli",{"_index":1372,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepdetailrequest",{"_index":1371,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepev",{"_index":1373,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepinforequest",{"_index":1374,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["sweepinterv",{"_index":1229,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/concepts/sweeps":{}}}],["sweepsubscript",{"_index":1309,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["sweepsubscriptionrequest",{"_index":1375,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["system",{"_index":1956,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["system（ipf",{"_index":1707,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/architecture":{}}}],["sとledger",{"_index":1102,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["sを使用して、トリニティから650",{"_index":1106,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["sを使用すると、同じトランザクション内で2",{"_index":1104,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/concepts/hardware-wallet":{}}}],["tada",{"_index":114,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["tagフィールドにiac",{"_index":1515,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/get-started":{}}}],["tail",{"_index":376,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tail変数が上記で作成したautopromotereattach",{"_index":377,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["tangl",{"_index":145,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/introduction/overview":{}}}],["tanglebeatはzmq",{"_index":840,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["tangleディレクトリで、dock",{"_index":1427,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["task",{"_index":1601,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["tcp",{"_index":679,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["tcp://p101.testnet.iota.cafe:14666",{"_index":720,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p102.testnet.iota.cafe:14666",{"_index":721,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p103.testnet.iota.cafe:14666",{"_index":722,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://p104.testnet.iota.cafe:14666",{"_index":723,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["tcp://zmq.devnet.iota.org:5556を別のノードのurl",{"_index":810,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["tcp://zmq.spamnet.iota.org:5556",{"_index":231,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcp://zmq.testnet.iota.org:5556",{"_index":219,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["tcpのapi",{"_index":681,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["temp.pi",{"_index":1474,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["tempy.pi",{"_index":1477,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["test",{"_index":485,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["testnetになります。これは、次のiota",{"_index":976,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/introduction/overview":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tether",{"_index":1064,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["text",{"_index":2039,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["theme",{"_index":1162,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{}}}],["themes.jsファイル内で、作成したテーマをインポートしてthem",{"_index":1194,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["themesディレクトリに新しいjavascriptファイルを作成し、そのファイルにclassic.j",{"_index":1193,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["thetangle.org",{"_index":1270,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["thetangle.orgなどのタングルビジュアライゼーションweb",{"_index":622,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["thing",{"_index":1566,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/overview":{}}}],["thingy:52",{"_index":1594,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["threshold",{"_index":451,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tick",{"_index":1073,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["time",{"_index":1750,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timedeciderオラクルソースを使用して、cdaの有効期限が少なくとも30分離れているかどうかを確認します。この30",{"_index":1819,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-and-manage-cda":{}}}],["timeout_at",{"_index":1839,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドのみを使用してcdaを作成した場合は、期限切れになっていなくてもゼロではない残高になるとすぐにiotaトークンを出金することができます。そのため、署名済みアドレスの再利用を避けるために、可能な限りmulti_useフィールドまたはexpected_amountフィールドのいずれかをtimeout_atフィールドと併用してcda",{"_index":1840,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeout_atフィールドの値が足りなくなったときに確実に新しいcda",{"_index":1844,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["timeoutat",{"_index":1787,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timeoutatフィールドのみを使用してcda",{"_index":1792,"docTitle":{},"docBody":{"docs/iota-go/0.1/introduction/overview":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-js/0.1/introduction/overview":{}}}],["timesource()メソッドでアカウントを作成した場合は、timeoutat",{"_index":1867,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-and-manage-cda":{}}}],["timesourceメソッドを作成し、それをaccount",{"_index":1865,"docTitle":{},"docBody":{"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["timestamp",{"_index":293,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["timeはトランザクションを開始したデバイス（携帯電話またはweb",{"_index":1757,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["tip",{"_index":454,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/node-software/0.1/iri/references/api-errors":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{}}}],["tmp/crontab.0qnktw/crontab",{"_index":2073,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["token",{"_index":1138,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["tool",{"_index":1448,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["toolbox",{"_index":179,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{}}}],["toolパッケージおよびregener",{"_index":1531,"docTitle":{},"docBody":{"docs/utils/0.1/official/proof-of-existance/overview":{}}}],["tp",{"_index":997,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["tpsiriノードを介した1",{"_index":390,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["tpsは設定したtp",{"_index":1023,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["trace",{"_index":1549,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["track",{"_index":1548,"docTitle":{},"docBody":{"docs/blueprints/0.1/introduction/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["trade",{"_index":1782,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["trangl",{"_index":1426,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["transact",{"_index":197,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/concepts/tip-selection":{},"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{},"docs/wallets/0.1/trinity/how-to-guides/receive-a-transaction":{}}}],["transaction.j",{"_index":130,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{}}}],["transactionsまでスクロールしてtrunk",{"_index":357,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["transfer",{"_index":467,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{},"docs/utils/0.1/official/tryte-compress/overview":{}}}],["transferオブジェクトを1つ作成します。address",{"_index":350,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["transit",{"_index":1169,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/perform-a-snapshot-transition":{}}}],["translate高階コンポーネント（hoc",{"_index":1196,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["traversebundle(trunktransact",{"_index":475,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["tree",{"_index":250,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/the-tangle":{}}}],["tri",{"_index":1088,"docTitle":{},"docBody":{"docs/compass/0.1/references/troubleshooting":{}}}],["triniti",{"_index":188,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{},"docs/wallets/0.1/introduction/overview":{},"docs/wallets/0.1/trinity/introduction/overview":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["trinity.app",{"_index":1129,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["trinity.appファイルの署名を確認します。パスをtrinity.app",{"_index":1127,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["true",{"_index":365,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["trunk",{"_index":358,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["trunktransact",{"_index":303,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{},"docs/dev-essentials/0.1/concepts/reattach-rebroadcast-promote":{},"docs/dev-essentials/0.1/references/structure-of-a-bundle":{},"docs/node-software/0.1/iri/references/api-reference":{}}}],["trunktransactionフィールドの値によって接続されています。トランザクション0のtrunktransactionハッシュは、トランザクション1のトランザクションハッシュ（hash",{"_index":353,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/send-bundle":{}}}],["trustanchor",{"_index":964,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{}}}],["tryte",{"_index":443,"docTitle":{},"docBody":{"docs/iota-js/0.1/README":{}}}],["trytestotrit",{"_index":1340,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["trytesコンバータをインポートします。次に、スクロールマーキーを有効にするためにsens",{"_index":2082,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/customize":{}}}],["trytesパラメータには、attachtotangl",{"_index":898,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["trytesパラメータの値は有効でなければなりません。有効なトライトはattachtotangl",{"_index":914,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["tx",{"_index":845,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["t定数を作成し、それをprop",{"_index":1197,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["uart",{"_index":1947,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタがある場合は、\"usb",{"_index":1946,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["uartアダプタを使用します。cp2102はよく知られている安価なアダプタですが、sbcには一体型のアダプタがあるかもしれません。調べるには、使用しているsbc",{"_index":1940,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["ubuntu",{"_index":965,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/troubleshooting":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/general/0.1/how-to-guides/expose-your-local-device":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["ubuntuはnginxを起動します。再起動のたびにnginx",{"_index":768,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uiで使用される配色で構成されています。すべてのテーマは、/src/shared/themes/ディレクトリ内の別々のjavascript",{"_index":1192,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["ui（wui）は、mamエクスプローラにアクセスして情報（例：特定の回収可能資産の現在の保管者と所在地）を取得するためのapiを実装しています。タングル上の情報は、オブジェクトリポジトリから取得した必要なチャネルルートアドレスにアクセスすることによって取得できます。足りない資産は同じgui",{"_index":1771,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["unconfirmedtransactionmessagesのみが含まれるようになります。型をチェックし、ストリームをオプションでラップして値を取得します。すでにディスクリプタをフィルタリングしているので、すべてのイベントはunconfirmedtransactionmessage型であることがわかります。そうでない場合、基本的なことが間違っており、nullpointerexcept",{"_index":848,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["unconfirmedtransactionmessage型のストリームができました。基本的に、フルノードが受信するすべてのメッセージを受け取り、どのアドレスが最も多く使用されたかを調べます。つまり、アドレスとカウンターがあれば十分です。簡単にするために、トランザクション内のすべてのアドレスを1つとして数えます。また入力しか保存できませんでした。二重に使用されているアドレスを検出するために、出力をフィルタリングすることもできます。出力をフィルタリングする場合は、valu",{"_index":850,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["undefin",{"_index":382,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{}}}],["unit",{"_index":1136,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/send-a-transaction":{}}}],["unsaf",{"_index":1298,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["up",{"_index":989,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["updat",{"_index":1210,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/references/troubleshooting":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{},"docs/smartcity/0.1/astropiota/how-to-guides/connect":{}}}],["updateitem()関数では、まずfirebaseオブジェクトリポジトリでitemidフィールドによって既存の資産が検索され、次にそのオブジェクトに関するすべての情報が新しいmam",{"_index":1778,"docTitle":{},"docBody":{"docs/blueprints/0.1/track-and-trace/architecture":{}}}],["upload",{"_index":1730,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["uploadをクリックして、メタデータをipf",{"_index":1732,"docTitle":{},"docBody":{"docs/blueprints/0.1/tangle-data-storage/deployment-and-testing":{}}}],["upper",{"_index":84,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{}}}],["upstreamディレクティブの詳細についてはnginx",{"_index":789,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["upstreamブロックディレクティブに、iriノードのipアドレスごとに1つのserv",{"_index":786,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["uptim",{"_index":1004,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["uriフォーマットは\"tcp://ipaddress:port",{"_index":912,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["uriフォーマットは、\"tcp://ipaddress:port",{"_index":890,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["url",{"_index":214,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["url/root",{"_index":1655,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["urlhttp&#x3a;//localhost:14265",{"_index":1083,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["urlまたはip",{"_index":1154,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["urlまたはipアドレスをconfig.ini",{"_index":733,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{}}}],["us",{"_index":1659,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/overview":{}}}],["us)を選択します。ロケール、タイムゾーン、およびwifi",{"_index":2051,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["usb",{"_index":1945,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["usbバッテリーでraspberri",{"_index":2028,"docTitle":{},"docBody":{"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["usbポートは/dev/ttyusbxにあります。xがusbポートの番号です。正しいusbポートを見つける最も簡単な方法は、usbアダプタを接続することです。まず、l",{"_index":1966,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["user",{"_index":1160,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/change-the-general-settings":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["user_account",{"_index":1303,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{},"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_account_bal",{"_index":1396,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_address",{"_index":1314,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/references/database-tables":{}}}],["user_address_bal",{"_index":1397,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["useraccountbalanceev",{"_index":1376,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraccountbalanceeventtyp",{"_index":1377,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraddressbalanceev",{"_index":1378,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["useraddressbalancereason",{"_index":1379,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["usernameプレースホルダーを現在のlinux",{"_index":1985,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/install-go-on-sbc":{}}}],["userwithdraw",{"_index":1320,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["userwithdrawcancelrepli",{"_index":1381,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawcancelrequest",{"_index":1380,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawrepli",{"_index":1383,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawrequest",{"_index":1382,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["userwithdrawエンドポイントを使用すると、iota",{"_index":1319,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["userwithdrawメソッドを使用して、預け入れアドレスからのiota",{"_index":1310,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/get-started-with-the-api":{}}}],["userフラグは、bazelをシステムの$home/bin",{"_index":1238,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{}}}],["userフラグを使用してbazel",{"_index":1272,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["userフラグを使用して、アクティブユーザーの下にbazel",{"_index":1044,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{}}}],["utils.iota.org",{"_index":1431,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["uuid",{"_index":1311,"docTitle":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{}},"docBody":{"docs/wallets/0.1/hub/how-to-guides/query-the-database":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["uuidを保存し、そのシードuuid",{"_index":1323,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{}}}],["uuid：seeduuid",{"_index":1218,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/introduction/overview":{}}}],["v0.9.1",{"_index":555,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.10",{"_index":549,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.2",{"_index":554,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.3",{"_index":553,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.4",{"_index":552,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.5",{"_index":551,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["v0.9.6",{"_index":550,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{}}}],["valu",{"_index":289,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/concepts/bundles-and-transactions":{}}}],["vc",{"_index":1181,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["verif",{"_index":1643,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/architecture":{}}}],["version",{"_index":523,"docTitle":{},"docBody":{"docs/iota-java/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/smartcity/0.1/astropiota/how-to-guides/build":{}}}],["version.ex",{"_index":1120,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["version}にはバージョン全体（例えば1.7.0",{"_index":695,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["virtual",{"_index":1914,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualbox",{"_index":1913,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["virtualboxで64ビットバージョンのubuntu",{"_index":1990,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["vista",{"_index":1175,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["visual",{"_index":122,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/tryte-compress/overview":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/how-to-guides/create-account":{}}}],["vm）またはlinuxサブシステムを使用できます。サブシステムを使用すると、vmのオーバーヘッドなしにlinuxを実行できます。あなたが上級ユーザーであれば、linuxツールをwindow",{"_index":1936,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["w",{"_index":1938,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["walkeralpha",{"_index":659,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/tip-selection":{}}}],["wallet",{"_index":1082,"docTitle":{},"docBody":{"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["walletディレクトリでnpm",{"_index":1203,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["wan",{"_index":1700,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["warn",{"_index":61,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/client-libraries/0.1/introduction/overview":{},"docs/iota-js/0.1/README":{},"docs/iota-java/0.1/README":{},"docs/iota-go/0.1/README":{},"docs/node-software/0.1/iri/how-to-guides/install-a-pow-proxy":{},"docs/node-software/0.1/iri/how-to-guides/update-the-iri":{},"docs/node-software/0.1/iri/references/api-reference":{},"docs/compass/0.1/how-to-guides/set-up-a-private-tangle":{},"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{},"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{},"docs/wallets/0.1/trinity/how-to-guides/change-the-advanced-settings":{},"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{},"docs/wallets/0.1/hub/how-to-guides/integrate-hub":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{},"docs/utils/0.1/community/mam-watcher/overview":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/architecture":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/tangle-data-storage/architecture":{},"docs/blueprints/0.1/track-and-trace/architecture":{},"docs/iota-go/0.1/introduction/overview":{},"docs/iota-go/0.1/how-to-guides/create-account":{},"docs/iota-go/0.1/how-to-guides/import-seed-state":{},"docs/iota-java/0.1/introduction/overview":{},"docs/iota-java/0.1/how-to-guides/create-account":{},"docs/iota-js/0.1/introduction/overview":{},"docs/iota-js/0.1/how-to-guides/create-account":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["warning:devnet",{"_index":1155,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/connect-to-a-custom-node":{}}}],["waswithdrawalcancelledrepli",{"_index":1385,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["waswithdrawalcancelledrequest",{"_index":1384,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/api-reference":{}}}],["watcher",{"_index":1411,"docTitle":{},"docBody":{"docs/utils/0.1/community/mam-watcher/overview":{}}}],["weather",{"_index":1588,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["web",{"_index":147,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/dev-essentials/0.1/how-to-guides/convert-data-to-trytes":{},"docs/dev-essentials/0.1/how-to-guides/create-an-address":{},"docs/dev-essentials/0.1/how-to-guides/derive-addresses-from-private-keys":{},"docs/dev-essentials/0.1/how-to-guides/send-bundle":{},"docs/dev-essentials/0.1/how-to-guides/check-transaction-confirmation":{},"docs/dev-essentials/0.1/how-to-guides/confirm-pending-bundle":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{},"docs/node-software/0.1/iri/how-to-guides/interact-with-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/compass/0.1/references/merkle-tree-compute-times":{},"docs/utils/0.1/community/one-command-tangle/overview":{},"docs/utils/0.1/official/iota-area-codes/get-started":{},"docs/utils/0.1/official/proof-of-existance/overview":{},"docs/blueprints/0.1/data-marketplace/overview":{},"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{},"docs/blueprints/0.1/doc-immutability/overview":{},"docs/blueprints/0.1/p2p-energy/architecture":{},"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{},"docs/blueprints/0.1/tangle-data-storage/overview":{},"docs/blueprints/0.1/track-and-trace/overview":{},"docs/blueprints/0.1/track-and-trace/deployment-and-testing":{}}}],["webサイト、またはiota",{"_index":699,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-on-linux":{}}}],["webサイトではそのドキュメントのmd5/sha1文字列が表示されています。これは、ユーザーが自分のマシンでプログラムを実行する前に確認するドキュメントのハッシュ値です。面倒な作業なので、ほとんどの人はドキュメントのハッシュ値を確認しません。また、公式のweb",{"_index":1627,"docTitle":{},"docBody":{"docs/blueprints/0.1/doc-immutability/overview":{}}}],["webサイトなど、cda",{"_index":1842,"docTitle":{},"docBody":{"docs/iota-go/0.1/references/cda-advice":{},"docs/iota-java/0.1/references/cda-advice":{},"docs/iota-js/0.1/references/cda-advice":{}}}],["webサイトには、iotaネットワークを使いやすくするためのユーティリティがあります。たとえば、webサイトを使用してiotaネットワークと対話したり、トランザクショントライトを圧縮したり、iota",{"_index":1432,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webサイトまたはeコマースプラットフォームにディープリンクを追加して、顧客にとってiota",{"_index":1147,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/create-deep-link":{}}}],["webサーバー：nginx",{"_index":1696,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/deployment-and-testing":{}}}],["webサービス（aws）r5",{"_index":935,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{}}}],["webブラウザで、http&#x3a;//localhost:4001にアクセスしてタングルユーティリティweb",{"_index":1444,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザで、iriノードのurlにアクセスします。たとえば、作成したノードのドメイン名がprivatetangle.comの場合、https&#x3a;//privatetangle.com",{"_index":1463,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザで、ルーターのipアドレスを入力します。このipアドレスはルーターに表示されているはずです。表示されない場合は、コマンドプロンプトで見つけます。あなたのルーターのipアドレスはgateway",{"_index":1892,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/expose-your-local-device":{}}}],["webブラウザに次のように表示されます。つまり、iriノードはポート443",{"_index":1464,"docTitle":{},"docBody":{"docs/utils/0.1/community/one-command-tangle/overview":{}}}],["webブラウザを開き、アドレスバーにlinuxサーバのip",{"_index":770,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/set-up-a-reverse-proxy":{}}}],["webブラウザを開き、アドレスバーに以下のように入力します。インターネットを通して自分のノードにアクセスしたいならば、localhostを自分のip",{"_index":1020,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/send-spam":{}}}],["weight",{"_index":138,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-nodejs":{},"docs/getting-started/0.1/tutorials/send-iota-tokens":{},"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["wereaddressesspentfrom",{"_index":915,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/api-reference":{}}}],["wide",{"_index":1261,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/install-hub":{},"docs/wallets/0.1/hub/how-to-guides/install-the-signing-server":{}}}],["wifi",{"_index":1112,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/back-up-seed":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["wifi経由でインターネットに接続する場合は、次の手順で、my_ssidをネットワークの名前に置き換え、my_passwordをwifi",{"_index":1973,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["window",{"_index":65,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/getting-started/0.1/tutorials/run-your-own-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/run-an-iri-node-in-docker":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{},"docs/general/0.1/how-to-guides/set-up-virtual-machine":{},"docs/smartcity/0.1/astropiota/how-to-guides/run":{}}}],["windowsまたはlinux",{"_index":1173,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["windowsまたはmacオペレーティングシステムでlinuxサーバを実行するには、仮想マシンをインストールして、仮想マシンでlinux",{"_index":1907,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsまたはmac用のvirtualbox",{"_index":1908,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、7",{"_index":1909,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windowsを使用している場合は、ファイルを右クリックしてここで解凍をクリックします。mac",{"_index":1912,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["windows上のlinuxサーバへのssh",{"_index":1929,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["winternitzワンタイム署名スキームは、アドレスからiotaトークンを取り出すバンドルに署名するために使用されます。その結果、アドレスは1度だけならiotaトークンを取り出しても安全です。ハブがアドレスをスウィープした後、そのアドレスは使用済みになり、そのアドレスから再び取り出しを行なってはいけません。ただし、ユーザーはiotaトークンを、既にスウィープした古い預け入れアドレスに送信する場合があります。この場合、攻撃者が署名に対して総当たり攻撃を行いiotaトークンを盗もうとするリスクがあります。スウィープしたアドレスからiotaトークンを救うために、潜在的な攻撃者が総当たり攻撃を仕掛ける前にiota",{"_index":1327,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/how-to-guides/rescue-tokens":{}}}],["winternitzワンタイム署名（w",{"_index":398,"docTitle":{},"docBody":{"docs/dev-essentials/0.1/references/glossary":{}}}],["withdefaultplugins()メソッドの両方を使用してアカウントを作成すると、デフォルトのtransf",{"_index":1801,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["withdraw",{"_index":1398,"docTitle":{},"docBody":{"docs/wallets/0.1/hub/references/database-tables":{}}}],["withplugin",{"_index":1807,"docTitle":{},"docBody":{"docs/iota-go/0.1/how-to-guides/create-account":{}}}],["wlp3s0",{"_index":1958,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["work",{"_index":940,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/references/best-practice":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["workflow",{"_index":1668,"docTitle":{},"docBody":{"docs/blueprints/0.1/p2p-energy/architecture":{}}}],["work操作はすべてのデータパッケージに対して実行されることに注意してください。これはハードウェアによっては最大60",{"_index":1621,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["world",{"_index":196,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/send-a-zero-value-transaction-with-the-trinity-wallet":{}}}],["x",{"_index":1500,"docTitle":{},"docBody":{"docs/utils/0.1/official/iota-area-codes/overview":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["x86",{"_index":1989,"docTitle":{},"docBody":{"docs/general/0.1/references/troubleshooting":{}}}],["xcode",{"_index":1126,"docTitle":{},"docBody":{"docs/wallets/0.1/trinity/how-to-guides/verify-trinity-desktop":{}}}],["xdk",{"_index":1591,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/architecture":{},"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}],["yarn",{"_index":99,"docTitle":{},"docBody":{"docs/getting-started/0.1/tutorials/get-started":{},"docs/iota-js/0.1/README":{},"docs/wallets/0.1/trinity/how-to-guides/develop-features-on-trinity":{}}}],["zero",{"_index":615,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{},"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zeromq",{"_index":809,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zeromqmessageparserを使用して、生のイベントメッセージをクラスインスタンスへパースします。すべてのzmqイベントメッセージは、protocol",{"_index":817,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zeroの場合は115200",{"_index":1971,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/setup-sbc":{}}}],["zipの最新バージョンをダウンロードしてインストールします。macを使用している場合は、unarchiv",{"_index":1910,"docTitle":{},"docBody":{"docs/general/0.1/how-to-guides/set-up-virtual-machine":{}}}],["zmq",{"_index":216,"docTitle":{"docs/node-software/0.1/iri/references/zmq-events":{}},"docBody":{"docs/getting-started/0.1/references/iota-networks":{},"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{},"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{},"docs/node-software/0.1/iri/references/iri-configuration-options":{},"docs/node-software/0.1/iri/references/zmq-events":{},"docs/node-software/0.1/goshimmer/how-to-guides/subscribe-to-events":{}}}],["zmqwatcher.j",{"_index":1478,"docTitle":{},"docBody":{"docs/utils/0.1/community/raspberry-pi-pub-sub/overview":{}}}],["zmq、およびダッシュボードプラグインを有効にします。これらのプラグインを使用すると、スパムトランザクションを自分のノードに送信したり、着信トランザクションを監視したり、web",{"_index":1015,"docTitle":{},"docBody":{"docs/node-software/0.1/goshimmer/how-to-guides/run-the-node":{}}}],["zmqでsnイベントを購読して、最近確定されたトランザクションをリッスンすることができます。sn",{"_index":808,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqでは、iri",{"_index":618,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqに関する知識を活用して、他のイベントについてiri",{"_index":812,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqイベントを購読すると、zmqイベントが発生したときにiriノードがクライアントアプリケーションに通知するので、iota",{"_index":619,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["zmqイベントを購読すると、ノードからほぼリアルタイムでタングルデータを受信できます。このデータを処理するために、オープンソースのapach",{"_index":814,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqイベントストリームのデータを使用して、過去1時間で最も使用された上位10",{"_index":843,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/flink-tangle-stream-processing":{}}}],["zmqソケットを作成し、それをzmq対応設定パラメーターがtrueに設定されているiri",{"_index":806,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmqノードを使用して、iri",{"_index":218,"docTitle":{},"docBody":{"docs/getting-started/0.1/references/iota-networks":{}}}],["zmqポートが有効になっている場合は、トランザクション確定などのイベントを購読できます。これらのイベントにより、iota",{"_index":805,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/how-to-guides/subscribe-to-events-in-an-iri-node":{}}}],["zmq）は、クライアントがiri",{"_index":617,"docTitle":{},"docBody":{"docs/node-software/0.1/iri/concepts/zero-message-queue":{}}}],["z）で始まり、その後に任意の数の英字、数字（0",{"_index":1608,"docTitle":{},"docBody":{"docs/blueprints/0.1/data-marketplace/deployment-and-testing":{}}}]],"pipeline":["stemmer"]}

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
//# sourceMappingURL=static.d117415e.js.map