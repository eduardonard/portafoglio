(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/electron-debug/index.js":
/*!**********************************************!*\
  !*** ./node_modules/electron-debug/index.js ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edu/dev/portafoglio/node_modules/electron-debug/index.js'");

/***/ }),

/***/ "./node_modules/electron-devtools-installer/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/electron-devtools-installer/dist/index.js ***!
  \****************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edu/dev/portafoglio/node_modules/electron-devtools-installer/dist/index.js'");

/***/ }),

/***/ "./node_modules/electron-log/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/electron-log/src/index.js ***!
  \************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edu/dev/portafoglio/node_modules/electron-log/src/index.js'");

/***/ }),

/***/ "./node_modules/electron-updater/out/main.js":
/*!***************************************************!*\
  !*** ./node_modules/electron-updater/out/main.js ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edu/dev/portafoglio/node_modules/electron-updater/out/main.js'");

/***/ }),

/***/ "./node_modules/fast-csv/build/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/fast-csv/build/src/index.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edu/dev/portafoglio/node_modules/fast-csv/build/src/index.js'");

/***/ }),

/***/ "./src/main/menu.ts":
/*!**************************!*\
  !*** ./src/main/menu.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// THIS IS THE UPPER MENU
const electron_1 = __webpack_require__(/*! electron */ "electron");
class MenuBuilder {
    mainWindow;
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    buildMenu() {
        if (true) {
            this.setupDevelopmentEnvironment();
        }
        const template = process.platform === 'darwin'
            ? this.buildDarwinTemplate()
            : this.buildDefaultTemplate();
        const menu = electron_1.Menu.buildFromTemplate(template);
        electron_1.Menu.setApplicationMenu(menu);
        return menu;
    }
    setupDevelopmentEnvironment() {
        this.mainWindow.webContents.on('context-menu', (_, props) => {
            const { x, y } = props;
            electron_1.Menu.buildFromTemplate([
                {
                    label: 'Inspect element',
                    click: () => {
                        this.mainWindow.webContents.inspectElement(x, y);
                    },
                },
            ]).popup({ window: this.mainWindow });
        });
    }
    buildDarwinTemplate() {
        const subMenuAbout = {
            label: 'Electron',
            submenu: [
                {
                    label: 'About ElectronReact',
                    selector: 'orderFrontStandardAboutPanel:',
                },
                { type: 'separator' },
                { label: 'Services', submenu: [] },
                { type: 'separator' },
                {
                    label: 'Hide ElectronReact',
                    accelerator: 'Command+H',
                    selector: 'hide:',
                },
                {
                    label: 'Hide Others',
                    accelerator: 'Command+Shift+H',
                    selector: 'hideOtherApplications:',
                },
                { label: 'Show All', selector: 'unhideAllApplications:' },
                { type: 'separator' },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: () => {
                        electron_1.app.quit();
                    },
                },
            ],
        };
        const subMenuEdit = {
            label: 'Edit',
            submenu: [
                { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
                { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
                { type: 'separator' },
                { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
                { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
                { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
                {
                    label: 'Select All',
                    accelerator: 'Command+A',
                    selector: 'selectAll:',
                },
            ],
        };
        const subMenuViewDev = {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'Command+R',
                    click: () => {
                        this.mainWindow.webContents.reload();
                    },
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: 'Ctrl+Command+F',
                    click: () => {
                        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                    },
                },
                {
                    label: 'Toggle Developer Tools',
                    accelerator: 'Alt+Command+I',
                    click: () => {
                        this.mainWindow.webContents.toggleDevTools();
                    },
                },
            ],
        };
        const subMenuViewProd = {
            label: 'View',
            submenu: [
                {
                    label: 'Toggle Full Screen',
                    accelerator: 'Ctrl+Command+F',
                    click: () => {
                        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                    },
                },
            ],
        };
        const subMenuWindow = {
            label: 'Window',
            submenu: [
                {
                    label: 'Minimize',
                    accelerator: 'Command+M',
                    selector: 'performMiniaturize:',
                },
                { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
                { type: 'separator' },
                { label: 'Bring All to Front', selector: 'arrangeInFront:' },
            ],
        };
        const subMenuHelp = {
            label: 'Help',
            submenu: [
                {
                    label: 'Learn More',
                    click() {
                        electron_1.shell.openExternal('https://electronjs.org');
                    },
                },
                {
                    label: 'Documentation',
                    click() {
                        electron_1.shell.openExternal('https://github.com/electron/electron/tree/main/docs#readme');
                    },
                },
                {
                    label: 'Community Discussions',
                    click() {
                        electron_1.shell.openExternal('https://www.electronjs.org/community');
                    },
                },
                {
                    label: 'Search Issues',
                    click() {
                        electron_1.shell.openExternal('https://github.com/electron/electron/issues');
                    },
                },
            ],
        };
        const subMenuView =  true
            ? subMenuViewDev
            : 0;
        return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
    }
    buildDefaultTemplate() {
        const templateDefault = [
            {
                label: '&File',
                submenu: [
                    {
                        label: '&Open',
                        accelerator: 'Ctrl+O',
                    },
                    {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: () => {
                            this.mainWindow.close();
                        },
                    },
                ],
            },
            {
                label: '&View',
                submenu:  true
                    ? [
                        {
                            label: '&Reload',
                            accelerator: 'Ctrl+R',
                            click: () => {
                                this.mainWindow.webContents.reload();
                            },
                        },
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click: () => {
                                this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                            },
                        },
                        {
                            label: 'Toggle &Developer Tools',
                            accelerator: 'Alt+Ctrl+I',
                            click: () => {
                                this.mainWindow.webContents.toggleDevTools();
                            },
                        },
                    ]
                    : 0,
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'Learn More',
                        click() {
                            electron_1.shell.openExternal('https://electronjs.org');
                        },
                    },
                    {
                        label: 'Documentation',
                        click() {
                            electron_1.shell.openExternal('https://github.com/electron/electron/tree/main/docs#readme');
                        },
                    },
                    {
                        label: 'Community Discussions',
                        click() {
                            electron_1.shell.openExternal('https://www.electronjs.org/community');
                        },
                    },
                    {
                        label: 'Search Issues',
                        click() {
                            electron_1.shell.openExternal('https://github.com/electron/electron/issues');
                        },
                    },
                ],
            },
        ];
        return templateDefault;
    }
}
exports["default"] = MenuBuilder;


/***/ }),

/***/ "./src/main/modules/appUpdater.ts":
/*!****************************************!*\
  !*** ./src/main/modules/appUpdater.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppUpdater = void 0;
const electron_updater_1 = __webpack_require__(/*! electron-updater */ "./node_modules/electron-updater/out/main.js");
const electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "./node_modules/electron-log/src/index.js"));
class AppUpdater {
    constructor() {
        electron_log_1.default.transports.file.level = 'info';
        electron_updater_1.autoUpdater.logger = electron_log_1.default;
        electron_updater_1.autoUpdater.checkForUpdatesAndNotify();
    }
}
exports.AppUpdater = AppUpdater;


/***/ }),

/***/ "./src/main/modules/ipcHandlers.ts":
/*!*****************************************!*\
  !*** ./src/main/modules/ipcHandlers.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerIpcHandlers = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const fastcsv = __importStar(__webpack_require__(/*! fast-csv */ "./node_modules/fast-csv/build/src/index.js"));
const registerIpcHandlers = () => {
    electron_1.ipcMain.on('ipc-example', async (event, arg) => {
        const msgTemplate = (pingPong) => `IPC test: ${pingPong}`;
        console.log(msgTemplate(arg));
        event.reply('ipc-example', msgTemplate('pong'));
    });
    electron_1.ipcMain.handle('load-transactions', async () => {
        const filePath = './assets/transactions_list.csv';
        const transactions = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(fastcsv.parse({ headers: true }))
                .on('data', (row) => {
                transactions.push({
                    amount: parseFloat(row.Amount),
                    date: row.Date,
                    category: row["Category Group Name"],
                    sub_category: row.Category,
                });
            })
                .on('end', () => {
                resolve(transactions);
            })
                .on('error', reject);
        });
    });
};
exports.registerIpcHandlers = registerIpcHandlers;


/***/ }),

/***/ "./src/main/modules/mainWindow.ts":
/*!****************************************!*\
  !*** ./src/main/modules/mainWindow.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMainWindow = exports.createWindow = void 0;
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const electron_1 = __webpack_require__(/*! electron */ "electron");
const menu_1 = __importDefault(__webpack_require__(/*! ../menu */ "./src/main/menu.ts"));
const util_1 = __webpack_require__(/*! ../util */ "./src/main/util.ts");
let mainWindow = null;
const createWindow = async (isDebug) => {
    const RESOURCES_PATH = electron_1.app.isPackaged
        ? path_1.default.join(process.resourcesPath, 'assets')
        : path_1.default.join(__dirname, '../../assets');
    const getAssetPath = (...paths) => {
        return path_1.default.join(RESOURCES_PATH, ...paths);
    };
    mainWindow = new electron_1.BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        icon: getAssetPath('icon.png'),
        webPreferences: {
            preload: electron_1.app.isPackaged
                ? path_1.default.join(__dirname, 'preload.js')
                : path_1.default.join(__dirname, '../../.erb/dll/preload.js'),
        },
    });
    mainWindow.loadURL((0, util_1.resolveHtmlPath)('index.html'));
    mainWindow.on('ready-to-show', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }
        if (process.env.START_MINIMIZED) {
            mainWindow.minimize();
        }
        else {
            mainWindow.show();
        }
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    const menuBuilder = new menu_1.default(mainWindow);
    menuBuilder.buildMenu();
    mainWindow.webContents.setWindowOpenHandler((edata) => {
        electron_1.shell.openExternal(edata.url);
        return { action: 'deny' };
    });
};
exports.createWindow = createWindow;
const getMainWindow = () => mainWindow;
exports.getMainWindow = getMainWindow;


/***/ }),

/***/ "./src/main/util.ts":
/*!**************************!*\
  !*** ./src/main/util.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveHtmlPath = resolveHtmlPath;
/* eslint import/prefer-default-export: off */
const url_1 = __webpack_require__(/*! url */ "url");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
function resolveHtmlPath(htmlFileName) {
    if (true) {
        const port = process.env.PORT || 1212;
        const url = new url_1.URL(`http://localhost:${port}`);
        url.pathname = htmlFileName;
        return url.href;
    }
    return `file://${path_1.default.resolve(__dirname, '../renderer/', htmlFileName)}`;
}


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/

/* eslint global-require: off, no-console: off, promise/always-return: off */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This module executes inside of Electron's main process. It initializes the
 * application, creates the main window, and sets up inter-process communication (IPC).
 */
const electron_1 = __webpack_require__(/*! electron */ "electron"); // Electron's app module to control the application lifecycle.
const mainWindow_1 = __webpack_require__(/*! ./modules/mainWindow */ "./src/main/modules/mainWindow.ts"); // Function to create the main application window.
const appUpdater_1 = __webpack_require__(/*! ./modules/appUpdater */ "./src/main/modules/appUpdater.ts"); // Class to handle application updates.
const ipcHandlers_1 = __webpack_require__(/*! ./modules/ipcHandlers */ "./src/main/modules/ipcHandlers.ts"); // Function to register IPC handlers for communication between processes.
// Check if the application is running in debug mode.
const isDebug =  true || 0;
if (isDebug) {
    (__webpack_require__(/*! electron-debug */ "./node_modules/electron-debug/index.js")["default"])();
}
if (false) {}
// Function to install developer tools extensions (e.g., React Developer Tools).
const installExtensions = async () => {
    const installer = __webpack_require__(/*! electron-devtools-installer */ "./node_modules/electron-devtools-installer/dist/index.js");
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS; // Force download if UPGRADE_EXTENSIONS is set.
    const extensions = ['REACT_DEVELOPER_TOOLS']; // List of extensions to install.
    return installer
        .default(extensions.map((name) => installer[name]), // Map extension names to installer constants.
    forceDownload)
        .catch(console.log); // Log any errors during installation.
};
// Quit the application when all windows are closed, except on macOS (where apps typically stay open).
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// Main application initialization logic.
electron_1.app
    .whenReady()
    .then(async () => {
    // Install extensions if in debug mode.
    if (isDebug) {
        await installExtensions();
    }
    // Create the main application window.
    (0, mainWindow_1.createWindow)(isDebug);
    // Register IPC handlers for communication between the main and renderer processes.
    (0, ipcHandlers_1.registerIpcHandlers)();
    // Recreate the window if the app is activated (e.g., clicked in the dock on macOS) and no window exists.
    electron_1.app.on('activate', () => {
        const mainWindow = (0, mainWindow_1.getMainWindow)();
        if (mainWindow === null)
            (0, mainWindow_1.createWindow)(isDebug);
    });
    // Initialize the auto-updater to check for and apply updates.
    new appUpdater_1.AppUpdater();
})
    .catch(console.log); // Log any errors during initialization.

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO0lBRXRCLHlHQUF5RztJQUN6RyxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDdEIsTUFBTSxVQUFVLEdBQUcsOEJBQWEsR0FBRSxDQUFDO1FBQ25DLElBQUksVUFBVSxLQUFLLElBQUk7WUFBRSw2QkFBWSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsOERBQThEO0lBQzlELElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9tZW51LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL21haW4vbW9kdWxlcy9hcHBVcGRhdGVyLnRzIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL21haW4vbW9kdWxlcy9pcGNIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL21vZHVsZXMvbWFpbldpbmRvdy50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwidXJsXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCIvLyBUSElTIElTIFRIRSBVUFBFUiBNRU5VXG5pbXBvcnQge1xuICBhcHAsXG4gIE1lbnUsXG4gIHNoZWxsLFxuICBCcm93c2VyV2luZG93LFxuICBNZW51SXRlbUNvbnN0cnVjdG9yT3B0aW9ucyxcbn0gZnJvbSAnZWxlY3Ryb24nO1xuXG5pbnRlcmZhY2UgRGFyd2luTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnMgZXh0ZW5kcyBNZW51SXRlbUNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIHNlbGVjdG9yPzogc3RyaW5nO1xuICBzdWJtZW51PzogRGFyd2luTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnNbXSB8IE1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCdWlsZGVyIHtcbiAgbWFpbldpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICBjb25zdHJ1Y3RvcihtYWluV2luZG93OiBCcm93c2VyV2luZG93KSB7XG4gICAgdGhpcy5tYWluV2luZG93ID0gbWFpbldpbmRvdztcbiAgfVxuXG4gIGJ1aWxkTWVudSgpOiBNZW51IHtcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fFxuICAgICAgcHJvY2Vzcy5lbnYuREVCVUdfUFJPRCA9PT0gJ3RydWUnXG4gICAgKSB7XG4gICAgICB0aGlzLnNldHVwRGV2ZWxvcG1lbnRFbnZpcm9ubWVudCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID1cbiAgICAgIHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nXG4gICAgICAgID8gdGhpcy5idWlsZERhcndpblRlbXBsYXRlKClcbiAgICAgICAgOiB0aGlzLmJ1aWxkRGVmYXVsdFRlbXBsYXRlKCk7XG5cbiAgICBjb25zdCBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSk7XG4gICAgTWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWVudSk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG4gIHNldHVwRGV2ZWxvcG1lbnRFbnZpcm9ubWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2NvbnRleHQtbWVudScsIChfLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBwcm9wcztcblxuICAgICAgTWVudS5idWlsZEZyb21UZW1wbGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0luc3BlY3QgZWxlbWVudCcsXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy53ZWJDb250ZW50cy5pbnNwZWN0RWxlbWVudCh4LCB5KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSkucG9wdXAoeyB3aW5kb3c6IHRoaXMubWFpbldpbmRvdyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkRGFyd2luVGVtcGxhdGUoKTogTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnNbXSB7XG4gICAgY29uc3Qgc3ViTWVudUFib3V0OiBEYXJ3aW5NZW51SXRlbUNvbnN0cnVjdG9yT3B0aW9ucyA9IHtcbiAgICAgIGxhYmVsOiAnRWxlY3Ryb24nLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBYm91dCBFbGVjdHJvblJlYWN0JyxcbiAgICAgICAgICBzZWxlY3RvcjogJ29yZGVyRnJvbnRTdGFuZGFyZEFib3V0UGFuZWw6JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICB7IGxhYmVsOiAnU2VydmljZXMnLCBzdWJtZW51OiBbXSB9LFxuICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0hpZGUgRWxlY3Ryb25SZWFjdCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0gnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZTonLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdIaWRlIE90aGVycycsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1NoaWZ0K0gnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZU90aGVyQXBwbGljYXRpb25zOicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgbGFiZWw6ICdTaG93IEFsbCcsIHNlbGVjdG9yOiAndW5oaWRlQWxsQXBwbGljYXRpb25zOicgfSxcbiAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdRdWl0JyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrUScsXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5xdWl0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBzdWJNZW51RWRpdDogRGFyd2luTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnMgPSB7XG4gICAgICBsYWJlbDogJ0VkaXQnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7IGxhYmVsOiAnVW5kbycsIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtaJywgc2VsZWN0b3I6ICd1bmRvOicgfSxcbiAgICAgICAgeyBsYWJlbDogJ1JlZG8nLCBhY2NlbGVyYXRvcjogJ1NoaWZ0K0NvbW1hbmQrWicsIHNlbGVjdG9yOiAncmVkbzonIH0sXG4gICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgeyBsYWJlbDogJ0N1dCcsIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtYJywgc2VsZWN0b3I6ICdjdXQ6JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQ29weScsIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtDJywgc2VsZWN0b3I6ICdjb3B5OicgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Bhc3RlJywgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1YnLCBzZWxlY3RvcjogJ3Bhc3RlOicgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IEFsbCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0EnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0QWxsOicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgY29uc3Qgc3ViTWVudVZpZXdEZXY6IE1lbnVJdGVtQ29uc3RydWN0b3JPcHRpb25zID0ge1xuICAgICAgbGFiZWw6ICdWaWV3JyxcbiAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVsb2FkJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrUicsXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy53ZWJDb250ZW50cy5yZWxvYWQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtDb21tYW5kK0YnLFxuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighdGhpcy5tYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDb21tYW5kK0knLFxuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIGNvbnN0IHN1Yk1lbnVWaWV3UHJvZDogTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnMgPSB7XG4gICAgICBsYWJlbDogJ1ZpZXcnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtDb21tYW5kK0YnLFxuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighdGhpcy5tYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIGNvbnN0IHN1Yk1lbnVXaW5kb3c6IERhcndpbk1lbnVJdGVtQ29uc3RydWN0b3JPcHRpb25zID0ge1xuICAgICAgbGFiZWw6ICdXaW5kb3cnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdNaW5pbWl6ZScsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK00nLFxuICAgICAgICAgIHNlbGVjdG9yOiAncGVyZm9ybU1pbmlhdHVyaXplOicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgbGFiZWw6ICdDbG9zZScsIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtXJywgc2VsZWN0b3I6ICdwZXJmb3JtQ2xvc2U6JyB9LFxuICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgIHsgbGFiZWw6ICdCcmluZyBBbGwgdG8gRnJvbnQnLCBzZWxlY3RvcjogJ2FycmFuZ2VJbkZyb250OicgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBzdWJNZW51SGVscDogTWVudUl0ZW1Db25zdHJ1Y3Rvck9wdGlvbnMgPSB7XG4gICAgICBsYWJlbDogJ0hlbHAnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdMZWFybiBNb3JlJyxcbiAgICAgICAgICBjbGljaygpIHtcbiAgICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZycpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0RvY3VtZW50YXRpb24nLFxuICAgICAgICAgIGNsaWNrKCkge1xuICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uL2VsZWN0cm9uL3RyZWUvbWFpbi9kb2NzI3JlYWRtZScsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NvbW11bml0eSBEaXNjdXNzaW9ucycsXG4gICAgICAgICAgY2xpY2soKSB7XG4gICAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vd3d3LmVsZWN0cm9uanMub3JnL2NvbW11bml0eScpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1NlYXJjaCBJc3N1ZXMnLFxuICAgICAgICAgIGNsaWNrKCkge1xuICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vaXNzdWVzJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnN0IHN1Yk1lbnVWaWV3ID1cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8XG4gICAgICBwcm9jZXNzLmVudi5ERUJVR19QUk9EID09PSAndHJ1ZSdcbiAgICAgICAgPyBzdWJNZW51Vmlld0RldlxuICAgICAgICA6IHN1Yk1lbnVWaWV3UHJvZDtcblxuICAgIHJldHVybiBbc3ViTWVudUFib3V0LCBzdWJNZW51RWRpdCwgc3ViTWVudVZpZXcsIHN1Yk1lbnVXaW5kb3csIHN1Yk1lbnVIZWxwXTtcbiAgfVxuXG4gIGJ1aWxkRGVmYXVsdFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlRGVmYXVsdCA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcmRmlsZScsXG4gICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJyZPcGVuJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtPJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnJkNsb3NlJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtXJyxcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcmVmlldycsXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHxcbiAgICAgICAgICBwcm9jZXNzLmVudi5ERUJVR19QUk9EID09PSAndHJ1ZSdcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJlJlbG9hZCcsXG4gICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrUicsXG4gICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cud2ViQ29udGVudHMucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkZ1bGwgU2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnRjExJyxcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKFxuICAgICAgICAgICAgICAgICAgICAgICF0aGlzLm1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkRldmVsb3BlciBUb29scycsXG4gICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDdHJsK0knLFxuICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluV2luZG93LndlYkNvbnRlbnRzLnRvZ2dsZURldlRvb2xzKCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZGdWxsIFNjcmVlbicsXG4gICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXG4gICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbihcbiAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5tYWluV2luZG93LmlzRnVsbFNjcmVlbigpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIZWxwJyxcbiAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgICAgICAgICBjbGljaygpIHtcbiAgICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2VsZWN0cm9uanMub3JnJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdEb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIGNsaWNrKCkge1xuICAgICAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi9lbGVjdHJvbi90cmVlL21haW4vZG9jcyNyZWFkbWUnLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29tbXVuaXR5IERpc2N1c3Npb25zJyxcbiAgICAgICAgICAgIGNsaWNrKCkge1xuICAgICAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vd3d3LmVsZWN0cm9uanMub3JnL2NvbW11bml0eScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIElzc3VlcycsXG4gICAgICAgICAgICBjbGljaygpIHtcbiAgICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vaXNzdWVzJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gdGVtcGxhdGVEZWZhdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBhdXRvVXBkYXRlciB9IGZyb20gJ2VsZWN0cm9uLXVwZGF0ZXInO1xuaW1wb3J0IGxvZyBmcm9tICdlbGVjdHJvbi1sb2cnO1xuXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxvZy50cmFuc3BvcnRzLmZpbGUubGV2ZWwgPSAnaW5mbyc7XG4gICAgYXV0b1VwZGF0ZXIubG9nZ2VyID0gbG9nO1xuICAgIGF1dG9VcGRhdGVyLmNoZWNrRm9yVXBkYXRlc0FuZE5vdGlmeSgpO1xuICB9XG59IiwiaW1wb3J0IHsgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGZhc3Rjc3YgZnJvbSAnZmFzdC1jc3YnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJJcGNIYW5kbGVycyA9ICgpID0+IHtcbiAgaXBjTWFpbi5vbignaXBjLWV4YW1wbGUnLCBhc3luYyAoZXZlbnQsIGFyZykgPT4ge1xuICAgIGNvbnN0IG1zZ1RlbXBsYXRlID0gKHBpbmdQb25nOiBzdHJpbmcpID0+IGBJUEMgdGVzdDogJHtwaW5nUG9uZ31gO1xuICAgIGNvbnNvbGUubG9nKG1zZ1RlbXBsYXRlKGFyZykpO1xuICAgIGV2ZW50LnJlcGx5KCdpcGMtZXhhbXBsZScsIG1zZ1RlbXBsYXRlKCdwb25nJykpO1xuICB9KTtcblxuICBpcGNNYWluLmhhbmRsZSgnbG9hZC10cmFuc2FjdGlvbnMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSAnLi9hc3NldHMvdHJhbnNhY3Rpb25zX2xpc3QuY3N2JztcbiAgICBjb25zdCB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGVQYXRoKVxuICAgICAgICAucGlwZShmYXN0Y3N2LnBhcnNlKHsgaGVhZGVyczogdHJ1ZSB9KSlcbiAgICAgICAgLm9uKCdkYXRhJywgKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KHJvdy5BbW91bnQpLFxuICAgICAgICAgICAgZGF0ZTogcm93LkRhdGUsXG4gICAgICAgICAgICBjYXRlZ29yeTogcm93W1wiQ2F0ZWdvcnkgR3JvdXAgTmFtZVwiXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yeTogcm93LkNhdGVnb3J5LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHRyYW5zYWN0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBzaGVsbCB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBNZW51QnVpbGRlciBmcm9tICcuLi9tZW51JztcbmltcG9ydCB7IHJlc29sdmVIdG1sUGF0aCB9IGZyb20gJy4uL3V0aWwnO1xuXG5sZXQgbWFpbldpbmRvdzogQnJvd3NlcldpbmRvdyB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV2luZG93ID0gYXN5bmMgKGlzRGVidWc6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgUkVTT1VSQ0VTX1BBVEggPSBhcHAuaXNQYWNrYWdlZFxuICAgID8gcGF0aC5qb2luKHByb2Nlc3MucmVzb3VyY2VzUGF0aCwgJ2Fzc2V0cycpXG4gICAgOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vYXNzZXRzJyk7XG5cbiAgY29uc3QgZ2V0QXNzZXRQYXRoID0gKC4uLnBhdGhzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHBhdGguam9pbihSRVNPVVJDRVNfUEFUSCwgLi4ucGF0aHMpO1xuICB9O1xuXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgd2lkdGg6IDEwMjQsXG4gICAgaGVpZ2h0OiA3MjgsXG4gICAgaWNvbjogZ2V0QXNzZXRQYXRoKCdpY29uLnBuZycpLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBwcmVsb2FkOiBhcHAuaXNQYWNrYWdlZFxuICAgICAgICA/IHBhdGguam9pbihfX2Rpcm5hbWUsICdwcmVsb2FkLmpzJylcbiAgICAgICAgOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vLmVyYi9kbGwvcHJlbG9hZC5qcycpLFxuICAgIH0sXG4gIH0pO1xuXG4gIG1haW5XaW5kb3cubG9hZFVSTChyZXNvbHZlSHRtbFBhdGgoJ2luZGV4Lmh0bWwnKSk7XG5cbiAgbWFpbldpbmRvdy5vbigncmVhZHktdG8tc2hvdycsICgpID0+IHtcbiAgICBpZiAoIW1haW5XaW5kb3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJtYWluV2luZG93XCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52LlNUQVJUX01JTklNSVpFRCkge1xuICAgICAgbWFpbldpbmRvdy5taW5pbWl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWluV2luZG93LnNob3coKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1aWxkZXIgPSBuZXcgTWVudUJ1aWxkZXIobWFpbldpbmRvdyk7XG4gIG1lbnVCdWlsZGVyLmJ1aWxkTWVudSgpO1xuXG4gIG1haW5XaW5kb3cud2ViQ29udGVudHMuc2V0V2luZG93T3BlbkhhbmRsZXIoKGVkYXRhKSA9PiB7XG4gICAgc2hlbGwub3BlbkV4dGVybmFsKGVkYXRhLnVybCk7XG4gICAgcmV0dXJuIHsgYWN0aW9uOiAnZGVueScgfTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWFpbldpbmRvdyA9ICgpID0+IG1haW5XaW5kb3c7IiwiLyogZXNsaW50IGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQ6IG9mZiAqL1xuaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUh0bWxQYXRoKGh0bWxGaWxlTmFtZTogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDEyMTI7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG4gICAgdXJsLnBhdGhuYW1lID0gaHRtbEZpbGVOYW1lO1xuICAgIHJldHVybiB1cmwuaHJlZjtcbiAgfVxuICByZXR1cm4gYGZpbGU6Ly8ke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9yZW5kZXJlci8nLCBodG1sRmlsZU5hbWUpfWA7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyogZXNsaW50IGdsb2JhbC1yZXF1aXJlOiBvZmYsIG5vLWNvbnNvbGU6IG9mZiwgcHJvbWlzZS9hbHdheXMtcmV0dXJuOiBvZmYgKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBleGVjdXRlcyBpbnNpZGUgb2YgRWxlY3Ryb24ncyBtYWluIHByb2Nlc3MuIEl0IGluaXRpYWxpemVzIHRoZVxuICogYXBwbGljYXRpb24sIGNyZWF0ZXMgdGhlIG1haW4gd2luZG93LCBhbmQgc2V0cyB1cCBpbnRlci1wcm9jZXNzIGNvbW11bmljYXRpb24gKElQQykuXG4gKi9cblxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnZWxlY3Ryb24nOyAvLyBFbGVjdHJvbidzIGFwcCBtb2R1bGUgdG8gY29udHJvbCB0aGUgYXBwbGljYXRpb24gbGlmZWN5Y2xlLlxuaW1wb3J0IHsgY3JlYXRlV2luZG93LCBnZXRNYWluV2luZG93IH0gZnJvbSAnLi9tb2R1bGVzL21haW5XaW5kb3cnOyAvLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIG1haW4gYXBwbGljYXRpb24gd2luZG93LlxuaW1wb3J0IHsgQXBwVXBkYXRlciB9IGZyb20gJy4vbW9kdWxlcy9hcHBVcGRhdGVyJzsgLy8gQ2xhc3MgdG8gaGFuZGxlIGFwcGxpY2F0aW9uIHVwZGF0ZXMuXG5pbXBvcnQgeyByZWdpc3RlcklwY0hhbmRsZXJzIH0gZnJvbSAnLi9tb2R1bGVzL2lwY0hhbmRsZXJzJzsgLy8gRnVuY3Rpb24gdG8gcmVnaXN0ZXIgSVBDIGhhbmRsZXJzIGZvciBjb21tdW5pY2F0aW9uIGJldHdlZW4gcHJvY2Vzc2VzLlxuXG4vLyBDaGVjayBpZiB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZyBpbiBkZWJ1ZyBtb2RlLlxuY29uc3QgaXNEZWJ1ZyA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52LkRFQlVHX1BST0QgPT09ICd0cnVlJztcbmlmIChpc0RlYnVnKSB7XG4gIHJlcXVpcmUoJ2VsZWN0cm9uLWRlYnVnJykuZGVmYXVsdCgpO1xufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc3Qgc291cmNlTWFwU3VwcG9ydCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpO1xuICBzb3VyY2VNYXBTdXBwb3J0Lmluc3RhbGwoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gaW5zdGFsbCBkZXZlbG9wZXIgdG9vbHMgZXh0ZW5zaW9ucyAoZS5nLiwgUmVhY3QgRGV2ZWxvcGVyIFRvb2xzKS5cbmNvbnN0IGluc3RhbGxFeHRlbnNpb25zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpbnN0YWxsZXIgPSByZXF1aXJlKCdlbGVjdHJvbi1kZXZ0b29scy1pbnN0YWxsZXInKTtcbiAgY29uc3QgZm9yY2VEb3dubG9hZCA9ICEhcHJvY2Vzcy5lbnYuVVBHUkFERV9FWFRFTlNJT05TOyAvLyBGb3JjZSBkb3dubG9hZCBpZiBVUEdSQURFX0VYVEVOU0lPTlMgaXMgc2V0LlxuICBjb25zdCBleHRlbnNpb25zID0gWydSRUFDVF9ERVZFTE9QRVJfVE9PTFMnXTsgLy8gTGlzdCBvZiBleHRlbnNpb25zIHRvIGluc3RhbGwuXG5cbiAgcmV0dXJuIGluc3RhbGxlclxuICAgIC5kZWZhdWx0KFxuICAgICAgZXh0ZW5zaW9ucy5tYXAoKG5hbWUpID0+IGluc3RhbGxlcltuYW1lXSksIC8vIE1hcCBleHRlbnNpb24gbmFtZXMgdG8gaW5zdGFsbGVyIGNvbnN0YW50cy5cbiAgICAgIGZvcmNlRG93bmxvYWQsXG4gICAgKVxuICAgIC5jYXRjaChjb25zb2xlLmxvZyk7IC8vIExvZyBhbnkgZXJyb3JzIGR1cmluZyBpbnN0YWxsYXRpb24uXG59O1xuXG4vLyBRdWl0IHRoZSBhcHBsaWNhdGlvbiB3aGVuIGFsbCB3aW5kb3dzIGFyZSBjbG9zZWQsIGV4Y2VwdCBvbiBtYWNPUyAod2hlcmUgYXBwcyB0eXBpY2FsbHkgc3RheSBvcGVuKS5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgIGFwcC5xdWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBNYWluIGFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuYXBwXG4gIC53aGVuUmVhZHkoKVxuICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgLy8gSW5zdGFsbCBleHRlbnNpb25zIGlmIGluIGRlYnVnIG1vZGUuXG4gICAgaWYgKGlzRGVidWcpIHtcbiAgICAgIGF3YWl0IGluc3RhbGxFeHRlbnNpb25zKCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIGFwcGxpY2F0aW9uIHdpbmRvdy5cbiAgICBjcmVhdGVXaW5kb3coaXNEZWJ1Zyk7XG5cbiAgICAvLyBSZWdpc3RlciBJUEMgaGFuZGxlcnMgZm9yIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgbWFpbiBhbmQgcmVuZGVyZXIgcHJvY2Vzc2VzLlxuICAgIHJlZ2lzdGVySXBjSGFuZGxlcnMoKTtcblxuICAgIC8vIFJlY3JlYXRlIHRoZSB3aW5kb3cgaWYgdGhlIGFwcCBpcyBhY3RpdmF0ZWQgKGUuZy4sIGNsaWNrZWQgaW4gdGhlIGRvY2sgb24gbWFjT1MpIGFuZCBubyB3aW5kb3cgZXhpc3RzLlxuICAgIGFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCBtYWluV2luZG93ID0gZ2V0TWFpbldpbmRvdygpO1xuICAgICAgaWYgKG1haW5XaW5kb3cgPT09IG51bGwpIGNyZWF0ZVdpbmRvdyhpc0RlYnVnKTtcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGF1dG8tdXBkYXRlciB0byBjaGVjayBmb3IgYW5kIGFwcGx5IHVwZGF0ZXMuXG4gICAgbmV3IEFwcFVwZGF0ZXIoKTtcbiAgfSlcbiAgLmNhdGNoKGNvbnNvbGUubG9nKTsgLy8gTG9nIGFueSBlcnJvcnMgZHVyaW5nIGluaXRpYWxpemF0aW9uLiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==