/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of Electron's main process. It initializes the
 * application, creates the main window, and sets up inter-process communication (IPC).
 */

import { app } from 'electron'; // Electron's app module to control the application lifecycle.
import { createWindow, getMainWindow } from './modules/mainWindow'; // Function to create the main application window.
import { AppUpdater } from './modules/appUpdater'; // Class to handle application updates.
import { registerIpcHandlers } from './modules/ipcHandlers'; // Function to register IPC handlers for communication between processes.

// Check if the application is running in debug mode.
const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
if (isDebug) {
  require('electron-debug').default();
}
if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

// Function to install developer tools extensions (e.g., React Developer Tools).
const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS; // Force download if UPGRADE_EXTENSIONS is set.
  const extensions = ['REACT_DEVELOPER_TOOLS']; // List of extensions to install.

  return installer
    .default(
      extensions.map((name) => installer[name]), // Map extension names to installer constants.
      forceDownload,
    )
    .catch(console.log); // Log any errors during installation.
};

// Quit the application when all windows are closed, except on macOS (where apps typically stay open).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Main application initialization logic.
app
  .whenReady()
  .then(async () => {
    // Install extensions if in debug mode.
    if (isDebug) {
      await installExtensions();
    }

    // Create the main application window.
    createWindow(isDebug);

    // Register IPC handlers for communication between the main and renderer processes.
    registerIpcHandlers();

    // Recreate the window if the app is activated (e.g., clicked in the dock on macOS) and no window exists.
    app.on('activate', () => {
      const mainWindow = getMainWindow();
      if (mainWindow === null) createWindow(isDebug);
    });

    // Initialize the auto-updater to check for and apply updates.
    new AppUpdater();
  })
  .catch(console.log); // Log any errors during initialization.