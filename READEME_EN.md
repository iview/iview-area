
# iview-area

> An area-linkage-component bases on Vue and iView-UI components, data include China's provinces (municipalities), cities, counties and streets. Data sources: [area-data](https://github.com/dwqs/area-data)

iview-area has two forms:
- select(bases on the select component of iview)
- cascader(bases on the cascader component of iview)

# install
```
    npm install iview-area --save
```
# use
write follow code in main.js  
```javascript
    import iviewArea from 'iview-area';
    import Vue from 'vue';
    Vue.use(iviewArea);
```
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
# config

### al-selector:

props  |  note  |  type  |  default
:-------: | -------  |  :-------:  |  :-------:
<small>value</small>|<small>Array for storing results, it is recommended to use the v-model</small>|none|none
v-model|Array used to store the results, the data will update after selected|none|none
gutter|Set the distance between deferent level selectors, in px|String &#124; Number|10
level|To show the level, if set to 2 shows the province, city and county, the level can be set to 0,1,2,3|String &#124; Number|3
data-type|The type of the return value, 'all': city code and name, 'code': return only the code, 'name': only return the name|String|all
searchable|If it an search, add the attribute click the selector can enter the name search|Boolean|false
size|Selector size, the property with iview component select size attribute, optional small, large, default|String|default
default|The default display of data,please view the supplementary explanation under the table。|Array &#124; null &#124; undefined|none
placeholder|The text displayed when selector is not selected. if placeholder is a string, each selectors will use this placeholder text, if it is an array, set the selector placeholder according to the string of the corresponding position of the array. If the array element Less than the number of levels, it will use default array to set it.|Array &#124; String|['请选择省', '请选择市', '请选择县区', '请选择街道']
not-found-text|The text displayed when there is no data, the rules is same as placeholder attributes|Array &#124; String|['无匹配市', '无匹配县区', '无匹配街道']
disabled|Set to disable the entire cascade selector or a specific level，it can be``disabled``，also be``:disabled="true"``or``"false"``，maybe an array just like``[1, 3]``，can also be a number about level|Boolean &#124; Array &#124; Number|false

event  |  note  |  return value
:-------: | -------  |  :-------:
on-change|Callback function after selection. value is the selected place array.|data

##### tips：

> **The data format of data-type:**
>
> - data-type="all"：
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
> - data-type="name"：
>   ```
>   ['河北省', '石家庄市']
>   ```
> - data-type="code"：
>   ```
>   ['130000', '130100']
>   ```
> **default:**
>
> - Incoming name array, if the name of the place is not found or the local affiliation is wrong, then the first place in the level list is displayed. If the number of places in the array is less than the number of the level, it will display the first place in the list; and if the array is setted and it is not empty, it will always update the list of next level selector, and display the first place in the list.
>   ```
>   ex: ['河北省', '长春市']  will show as  ['河北省', '石家庄市']
>   ```
> - Incoming code array, if the code was not find the corresponding place, or the place belongs to the wrong relationship, it will display the first place in the list, the same rules as name array.
>   ```
>   ex: ['130000', '120100']  will show as  ['河北省', '石家庄市']
>   ```
> - If incom an empty array``[]``, or``undefined``, or``null``，or no ``default``，or setted ``default`` but there has no value, it will not show default value, and it will not update the list of next level after select a place, and will not set a default value.
>   ```
>   ex: :default="null"  :default="undefined"  :default="[]"
>   ```

### al-cascader:

props  |  note  |  type  |  default
:-------: | -------  |  :-------:  |  :-------:
<small>value</small>|<small>Array for storing results, it is recommended to use the v-model</small>|none|none
v-model|Array used to store the results, the data will update after selected|none|none
level|To show the level, if set to 2 shows the province, city and county, the level can be set to 0,1,2,3|String &#124; Number|3
data-type|The type of the return value, 'all': city code and name, 'code': return only the code, 'name': only return the name|String|all
size|Selector size, the property with iview component select size attribute, optional small, large|String|none
placeholder|The text displayed when selector is not selected.|String|'请选择']
disabled|Set to disable the entire cascader|Boolean|false
render-format|Customize display format by sending a function to this property. It will be called after selection.|Function|``label => label.join(' / ')``
trigger|The way subset spreading. Optional value: ``click`` or ``hover``|String|click

event  |  note  |  return value
:-------: | -------  |  :-------:
on-change|Callback function after selection. value is the selected place array.|data
