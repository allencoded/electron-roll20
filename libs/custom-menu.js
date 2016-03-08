'use-strict';

const BrowserWindow = require('electron').BrowserWindow;
// const path = require('path');
// const appDir = path.dirname(require.main.filename);

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
    {
      label: 'Random Generators',
      submenu: [
        {
          label: 'World Generator',
          click() {
            const worldGen = new BrowserWindow({
              width: 800,
              height: 600,
              show: true,
              autoHideMenuBar: true,
              title: 'World Generator',
            });
            worldGen.loadUrl(`http://donjon.bin.sh/fantasy/world/`);
          },
        },
        {
          label: 'Dungeon Generator',
          click() {
            const dunGen = new BrowserWindow({
              width: 800,
              height: 600,
              show: true,
              autoHideMenuBar: true,
              title: 'Dungeon Generator',
            });
            dunGen.loadUrl(`http://donjon.bin.sh/5e/dungeon/`);
          },
        },
      ],
    },
  ];
  return template;
};
