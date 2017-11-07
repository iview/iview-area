# iview-area

> 一款基于Vue框架和iView-UI组件库开发的城市级联组件，数据包含中国的省(直辖市)、市、县区和街道，数据来源[area-data](https://github.com/dwqs/area-data)
>
> An area-linkage-component bases on Vue and iView-UI components, data include China's provinces (municipalities), cities, counties and streets. Data sources: [area-data](https://github.com/dwqs/area-data)

iview-area有两种形式的级联: 
- 下拉菜单(基于iview的Select组件)
- 级联选择(基于iview的Cascader组件)

iview-area has two forms:
- select(bases on the select component of iview)
- cascader(bases on the cascader component of iview)

# install 安装
```
    npm install iview-area --save
```
# use 使用
在main.js中写入下面的代码
write follow code in main.js  
```javascript
    import iviewArea from 'iview-area';
    import Vue from 'vue';
    Vue.use(iviewArea);
```
接下来，你就可以在页面中使用iview-area了
and then, you can use iview-area anywhere  
```vue
<template>
    <al-selector v-model="res_s"/>
    <al-cascader v-model="res_c"/>
</template>
<script>
    export default {
        data () {
            return {
                res_s: [],
                res_c: []
            }
        }
    }
</script>
```
# config 配置

al-selector:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
<small>value</small>|<small>用于存放结果的数组，建议使用v-model来做双向绑定</small>|无|无
v-model|用于存放结果的数组，选择了数据后会自动更新|无|无
gutter|设置各级别选择器之间的距离，单位px|String &#124; Number|10
level|要显示的级别，如设为2则显示省、市和县，即3级，级别可设为0、1、2、3四级|String &#124; Number|3
data-type|返回数据的类型，'all':城市编码和名称，'code':只返回编码，'name':只返回名称，数据格式请看表格下面的补充说明|String|all
searchable|是否可搜索，添加该属性则点击选择器后可输入名称搜索|Boolean|false
default|默认显示的数据，情况比较多，请看表格下面的补充详解。|Array &#124; null &#124; undefined|无
placeholder|选择器未选择时显示的占位字符|Array &#124; String|['请选择省', '请选择市', '请选择县区', '请选择街道']
