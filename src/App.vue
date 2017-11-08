<template>
    <div id="app">
		<div class="header">
			<div class="logo-con">
				<img src="./logo.png" alt="iview">
			</div>
		</div>
		<div class="main">
			<Card dis-hover shadow>
				<div class="main-con">
					<h1>iView-Area</h1>
					<h3>中国行政区级联选择组件</h3>
					<h2>Select形式</h2>
					<h4>基本使用</h4>
					<example-block :height="260" level="3" :val="sBasic">
                        <al-selector v-model="sBasic" slot="ia" style="width:100%;"></al-selector>
						<span slot="code">
							&lt;al-selector v-model="resArr" /&gt;
						</span>
					</example-block>
					<h4>设置显示级别</h4>
					<example-block :height="180" level="3" :val="sLevel">
						<div slot="ia">
							<al-selector level="0" v-model="sLevel" style="width:200px;margin-bottom:10px;"></al-selector>
							<al-selector level="1" v-model="sLevel" style="width:280px;margin-bottom:10px;"></al-selector>
							<al-selector level="2" v-model="sLevel" style="width:420px;margin-bottom:10px;"></al-selector>
							<al-selector level="3" v-model="sLevel" style="width:564px;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector v-model="resArr" level="0" /&gt;<br/>
							&lt;al-selector v-model="resArr" :level="0" /&gt;<br/>
							&lt;al-selector v-model="resArr" level="1" /&gt;<br/>
							&lt;al-selector v-model="resArr" level="2" /&gt;<br/>
							&lt;al-selector v-model="resArr" level="3" /&gt;
						</p>
					</example-block>
					<h4>三种返回值类型</h4>
					<example-block :height="140" level="2" :val="sDataType">
						<div slot="ia">
							<span style="display:inline-block;vertical-align:top;padding-top:6px;">datatype="all"</span><al-selector data-type="all" level="2" v-model="sDataType" style="width:400px;margin-left:30px;display:inline-block;"></al-selector>
							<span style="display:inline-block;vertical-align:top;padding-top:6px;">datatype="name"</span><al-selector data-type="name" level="2" v-model="sDataType" style="width:400px;margin-left:10px;display:inline-block;"></al-selector>
							<span style="display:inline-block;vertical-align:top;padding-top:6px;">datatype="code"</span><al-selector data-type="code" level="2" v-model="sDataType" style="width:400px;margin-left:13px;display:inline-block;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector v-model="resArr" level="2" /&gt;<br/>
							&lt;al-selector data-type="all" v-model="resArr" level="2" /&gt;<br/>
							&lt;al-selector data-type="name" v-model="resArr" level="2" /&gt;<br/>
							&lt;al-selector data-type="code" v-model="resArr" level="2" /&gt;
						</p>
					</example-block>
					<h4>三种尺寸</h4>
					<example-block :height="140" level="1" :val="sLevel">
						<div slot="ia">
							<al-selector level="0" size="large" v-model="sSize" style="width:160px;margin-right:10px;display:inline-block;"></al-selector>
							<al-selector level="0" v-model="sSize" style="width:160px;margin-right:10px;display:inline-block;"></al-selector>
							<al-selector level="0" size="small" v-model="sSize" style="width:160px;margin-right:10px;display:inline-block;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector size="large" v-model="resArr" level="0" /&gt;<br/>
							&lt;al-selector size="default" v-model="resArr" level="0" /&gt;<br/>
							&lt;al-selector v-model="resArr" level="0" /&gt;<br/>
							&lt;al-selector size="small" v-model="resArr" level="0" /&gt;
						</p>
					</example-block>
					<h4>可搜索</h4>
					<example-block :height="140" level="2" :val="sSearch">
						<div slot="ia">
							<al-selector level="2" v-model="sSearch" searchable style="width:540px;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector searchable v-model="resArr" level="2" /&gt;
						</p>
					</example-block>
					<h4>禁用</h4>
					<example-block :height="140" level="2" :val="sDisabled">
						<div slot="ia">
							<al-selector level="2" v-model="sDisabled" disabled style="width:540px;margin-bottom:10px;"></al-selector>
							<al-selector level="2" v-model="sDisabled" :disabled="[1, 2]" style="width:540px;margin-bottom:10px;"></al-selector>
							<al-selector level="2" v-model="sDisabled" :disabled="1" style="width:540px;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector level="2" v-model="sDisabled" disabled /&gt;<br/>
							&lt;al-selector level="2" v-model="sDisabled" :disbled="[1, 2]" /&gt;<br/>
							&lt;al-selector level="2" v-model="sDisabled" :disbled="1" /&gt;<br/>
						</p>
					</example-block>
					<h4>禁用</h4>
					<example-block :height="140" level="2" :val="sDisabled">
						<div slot="ia">
							<al-selector level="2" v-model="sDisabled" disabled style="width:540px;margin-bottom:10px;"></al-selector>
							<al-selector level="2" v-model="sDisabled" :disabled="[1, 2]" style="width:540px;margin-bottom:10px;"></al-selector>
							<al-selector level="2" v-model="sDisabled" :disabled="1" style="width:540px;"></al-selector>
						</div>
						<p slot="code">
							&lt;al-selector level="2" v-model="sDisabled" disabled /&gt;<br/>
							&lt;al-selector level="2" v-model="sDisabled" :disbled="[1, 2]" /&gt;<br/>
							&lt;al-selector level="2" v-model="sDisabled" :disbled="1" /&gt;<br/>
						</p>
					</example-block>
					<h4>默认数据</h4>
					<example-block :height="140" level="2" :val="sDisabled">
						<div slot="ia">
							<al-selector level="2" v-model="sDefault" style="width:540px;margin-bottom:10px;"></al-selector>
							<!-- <al-selector level="2" v-model="sDefault" style="width:540px;"></al-selector> -->
						</div>
						<p slot="code">
							&lt;al-selector level="2" v-model="sDefault" /&gt;<br/>
							&lt;al-selector level="2" v-model="sDefault" /&gt;<br/>
						</p>
					</example-block>
				</div>
			</Card>
		</div>
    </div>
</template>

<script>
import exampleBlock from './components/exampleBlock.vue';
export default {
    name: 'app',
	components: {
		exampleBlock
	},
    data () {
        return {
			sBasic: [],
			sLevel: [],
			sDataType: [],
			sSize: [],
			sSearch: [],
			sDisabled: [],
			sDefault: ['河北省', '张家口市', '怀来县']
        };
    }
}
</script>

<style scoped>
html,body{
    margin: 0;
	padding: 0;
	min-height: 100%;
	background: #f8f8f9;
}
.main{
	width:960px;
	margin: 70px auto 20px;
	padding: 20px;
	z-index: 2;
}
.header{
	height: 70px;
	width: 100%;
	border-bottom: 1px solid #e9eaec;
	background: white;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	box-shadow: 0 1px 4px 1px rgba(200, 200, 200, 0.3);
}
.logo-con{
	height: 60px;
	margin: 5px 100px;
	display: inline-block;
}
.logo-con img{
	height: 100%;
	width: auto;
}
.main-con h1{
	text-align: center;
}
.main-con h3{
	text-align: center;
	color: #80848f;
	font-weight: 500;
}
.main-con h2{
	color: #2d8cf0;
	font-size: 18px;
	padding-left: 10px;
	margin: 20px 0;
	border-left: 5px solid #2d8cf0;
}
.main-con h4{
	margin: 22px 2px 6px;
	padding-left: 10px;
	border-left: 3px solid #19be6b; 
}
</style>
