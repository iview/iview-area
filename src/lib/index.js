import alSelector from './components/al-selector.vue';
import alCascader from './components/al-cascader.vue';
import select from 'iview/src/components/select';
import cascader from 'iview/src/components/cascader';

const IvuAreaLinkage = {
    install (Vue, options) {
        Vue.use(select);
        Vue.use(cascader);
        Vue.components(alSelector.name, alSelector);
        Vue.components(alCascader.name, alCascader);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(IvuAreaLinkage)
}

export default IvuAreaLinkage;