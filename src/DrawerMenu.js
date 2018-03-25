const {Composite, TextView} = require('tabris');
const MenuItems = [{
  title: 'Jk Idsp'
}, {
  title: 'Saved Alerts'
}, {
  title: 'Director\'s Message'
}, {
  title: 'Who are we'
}, {
  title: 'Gallery'
}, {
  title: 'Achievements'
}, {
  title: 'Published Article'
}, {
  title: 'About'
}, {
  title: 'Good'
},];
module.exports = class DrawerNavigation extends Composite {

  constructor(properties) {
    super(properties);
    this._createUI();
    this._applyLayout();
    this._applyStyles();
  }


  _createUI() {
    MenuItems.map(data => {
      this.append(new Composite({
        class: 'menuItem',
        highlightOnTouch: true
      }).append(new TextView({
        highlightOnTouch: true,
        class: 'menuTitle',
        text: data.title
      })).on('tap', () => console.log('clicked ' + data.title)));
    });

  }

  _applyStyles() {
    this.apply({
      '.menuItem': {
        left: 0, top: 'prev()', right: 0, height: device.platform === 'iOS' ? 40 : 48
      },
      '.menuTitle': {
        left: 32, centerY: 0,
      }
    });
  }

  _applyLayout() {
    this.apply({
      '.menuTile': {
        font: device.platform === 'iOS' ? '17px .HelveticaNeueInterface-Regular' : 'medium 14px',
        textColor: device.platform === 'iOS' ? 'rgb(22, 126, 251)' : '#212121'
      }
    });
  }
};
