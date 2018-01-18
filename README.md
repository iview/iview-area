# iview-area
[![npm](https://img.shields.io/npm/v/iview-area.svg)]()

> 一款基于Vue框架和iView-UI组件库开发的城市级联组件，数据包含中国的省(直辖市)、市、县区和乡镇街，数据来源[area-data](https://github.com/dwqs/area-data)

**[English Document](https://github.com/iview/iview-area/blob/dev/READEME_EN.md)**
**[线上DEMO](https://iview.github.io/iview-area/)**

iview-area有两种形式的级联: 
- 下拉菜单(基于iview的Select组件)
- 级联选择(基于iview的Cascader组件)

# install 安装
```
    npm install iview-area --save
```
# use 使用
在main.js中写入下面的代码
```javascript
    import iviewArea from 'iview-area';
    import Vue from 'vue';
    Vue.use(iviewArea);
```
接下来，你就可以在页面中使用iview-area了
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

### al-selector:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
<small>value</small>|<small>用于存放结果的数组，建议使用v-model来做双向绑定</small>|Array|无
v-model|用于存放结果的数组，选择了数据后会自动更新，可传入默认显示的数据，详见表格下补充|Array|无
gutter|设置各级别选择器之间的距离，单位px|String &#124; Number|10
level|要显示的级别，如设为2则显示省、市和县，即3级，级别可设为0、1、2、3四级|String &#124; Number|3
data-type|返回数据的类型，'all':城市编码和名称，'code':只返回编码，'name':只返回名称，数据格式请看表格下面的补充说明|String|all
searchable|是否可搜索，添加该属性则点击选择器后可输入名称搜索|Boolean|false
size|选择器尺寸，该属性同iview组件select的size属性，可选值为small，large，default|String|default
auto|是否在选择一级之后自动选择之后所有等级的选择器（自动选中为列表第一项）|Boolean|false
placeholder|选择器未选择时显示的占位字符,若为字符串，则各级别选择器均使用该作为占位字符，若为数组，根据数组对应位置的字符串设置选择器占位字符，若数组元素少于级别数，缺省的则设为默认数组中对应的占位字符|Array &#124; String|['请选择省', '请选择市', '请选择县区', '请选择街道']
not-found-text|无数据时显示的文字提示，规则同placeholder属性|Array &#124; String|['无匹配市', '无匹配县区', '无匹配街道']
disabled|设置禁用整个级联选择器或某个级别的选择器，可只写``disabled``，也可写``:disabled="true"``或``"false"``，或传入一个数组，如禁用二级和四级选择器则为``[1, 3]``，也可传入数值指定从指定级别开始禁用|Boolean &#124; Array &#124; Number|false

事件  |  说明  |  返回值
:-------: | -------  |  :-------:
on-change|选择完成后的回调，返回值此时已选的数据数组|data

##### 补充说明：

> **data-type数据格式补充说明:**
>
> - data-type="all"时，返回数据格式如下：
>   ```
>   [
>       {
>           code: '130000',
>           name: '河北省'
>       },
>       {
>           code: '130100',
>           name: '石家庄市'
>       }
>   ]
>   ```
> - data-type="name"时，返回数据格式如下：
>   ```
>   ['河北省', '石家庄市']
>   ```
> - data-type="code"时，返回数据格式如下：
>   ```
>   ['130000', '130100']
>   ```
> **v-model属性补充说明:**
>
> - 传入名称数组，若所设地方名称未找到或地方所属关系不对，则显示该等级列表中第一个地方，若数组地方个数少于城市及联选择器的等级数目，则后面缺省的地方名默认已列表中第一个地方显示；且如果设置了数组且不为空，则每次选择一个等级的地方后下面级别的选择器的列表都会更新，且默认选中的为对应列表中第一个地方
>   ```
>   ex: ['河北省', '长春市']
>   ```
> - 传入编号数组，若所设编号未找到对应地方或地方所属关系不对，则显示该等级列表中第一个地方，规则同上
>   ```
>   ex: ['130000', '120100']
>   ```
> - 传入空数组 []

### al-cascader:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
<small>value</small>|<small>用于存放结果的数组，建议使用v-model来做双向绑定</small>|无|无
v-model|用于存放结果的数组，选择了数据后会自动更新|无|无
level|要显示的级别，如设为2则显示省、市和县，即3级，级别可设为0、1、2、3四级|String &#124; Number|3
data-type|返回数据的类型，'all':城市编码和名称，'code':只返回编码，'name':只返回名称，数据格式同al-selector补充说明|String|all
size|选择器尺寸，该属性同iview组件cascader的size属性，可选值为small，large|String|无
placeholder|选择器未选择时显示的占位字符|String|'请选择']
disabled|是否禁用选择器|Boolean|false
render-format|选择后展示的函数，用于自定义显示格式|Function|``label => label.join(' / ')``

事件  |  说明  |  返回值
:-------: | -------  |  :-------:
on-change|选择完成后的回调，返回值此时已选的数据数组|data
