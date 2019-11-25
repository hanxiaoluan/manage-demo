import Vue from "vue";
import Vuex from "vuex";
import getters from './getters';
Vue.use(Vuex);
const modulesFiles = require.context('./modules', true, /\.js$/);
/* const modules = {}; */
/* modulesFiles.keys().forEach(item => {
  modules[item] = modulesFiles(item);
}) */
/* console.log(modulesFiles);
console.log(modulesFiles.keys());
console.log(modulesFiles.values()); */
console.log(modulesFiles);
console.log(modulesFiles.keys());
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  console.log(modules);
  console.log(modulePath);
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  console.log(moduleName);
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
export default new Vuex.Store({
  modules,
  getters
});