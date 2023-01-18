<template>
	<view class="">
		<text>我</text>
		<text>{{str}}</text>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				str:""
			}
		},
		onLoad() {
			uni.$on('meGetInfo',(value) => {
				this.str = value
				console.log('me 组件，面向全局的事件',value)
			})
		}
	}
</script>

<style>
</style>