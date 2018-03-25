const {NavigationView, ImageView, Page, Composite, ui} = require('tabris');
const DrawerMenu = require('./DrawerMenu');
const DrawerHeader = require('./DrawerHeader');

let navigationView = new NavigationView({
  left: 0, right: 0, top: 0, bottom: 0,
  drawerActionVisible: true
}).appendTo(ui.contentView);

ui.drawer.enabled = true;

let drawerIcon = 'resources/header_image.jpg';
ui.drawer.append(new ImageView({
  height: 190, left: 0, right: 0, top: 0, image: drawerIcon
}), new DrawerMenu({
  left: 0, right: 0, top: 190, bottom: 0
}), new DrawerHeader({left: 0, right: 0, height: 180}));


let page = new Page({
  title: 'My Test Page'
}).appendTo(navigationView);



