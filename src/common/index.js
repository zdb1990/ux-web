import MenuItem from './menu-item/menu-item';
MenuItem.install = function(Vue) {
    Vue.component(MenuItem.name, MenuItem);
}
export default MenuItem;