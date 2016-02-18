'use-strict';
// const remote = require('electron').remote;
const BrowserWindow = require('electron').BrowserWindow;

exports.getTemplate = function () {
  const template = [
    {
      label: 'Roll20',
      submenu: [
        {
          label: 'Player Handbook',
          click() {
            console.log('test');
          },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click(item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          },
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: (function () {
            if (process.platform === 'darwin') {
              return 'Alt+Command+I';
            }
            return 'Ctrl+Shift+I';
          }()),
          click(item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.toggleDevTools();
            }
          },
        },
        {
          label: 'Reload',
          accelerator: 'F5',
          click() {
            BrowserWindow.getFocusedWindow().reloadIgnoringCache();
          },
        },
      ],
    },
  ];
  return template;
};
