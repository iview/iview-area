import alSelector from './lib/components/al-selector.vue';
import alCascader from './lib/components/al-cascader.vue';

const iviewArea = {
    alSelector,
    alCascader
};

const install = function(Vue, opts = {}) {
    Vue.component(alSelector.name, alSelector);
    Vue.component(alCascader.name, alCascader);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(iviewArea, {install});