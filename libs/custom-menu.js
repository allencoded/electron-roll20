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
    }
  ];

  return template;
}
