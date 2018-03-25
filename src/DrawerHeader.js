const {Composite, ImageView, TextView} = require('tabris');

module.exports = class DrawerHeader extends Composite {

  constructor(properties) {
    super(properties);
    this._createUI();
    this._applyLayouts();
    this._applyStyles();
  }

  _createUI() {
    this.append(new TextView({
      class: 'appName',
      text: 'JK IDSP'
    }), new TextView({
      class: 'version',
      text: 'Version 1.0.0'
    }));
  }

  _applyLayouts() {
    this.apply({
      '.appName': {
        left: 16, top: 140
      },
      '.version': {
        left: 16, top: 160
      }

    });
  }

  _applyStyles() {
    this.apply({
      '.appName': {
        font: device.platform === 'iOS' ? '17px .HelveticaNeueInterface-Regular' : 'medium 14px',
        textColor: device.platform === 'iOS' ? 'rgb(22, 126, 251)' : '#181818'
      }
    });
  }
};
