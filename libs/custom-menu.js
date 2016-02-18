const remote = require('electron').remote;
const BrowserWindow = require('electron').BrowserWindow;

exports.getTemplate = function () {
  var template = [
    {
      label: 'Roll20',
      submenu: [
        {
          label: 'Player Handbook',
          click: function () {
            console.log('test');
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click: function (item, focusedWindow) {
            if (focusedWindow){
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: (function() {
          if (process.platform == 'darwin')
            return 'Alt+Command+I';
          else
            return 'Ctrl+Shift+I';
          })(),
          click: function(item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.toggleDevTools();
            }
          },
        {
          label: 'Reload',
          accelerator: 'F5',
          click: function () {
            BrowserWindow.getFocusedWindow().reloadIgnoringCache();
          }
        }
      ]
    }
  ];
  return template;
};
