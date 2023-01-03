<template>
	<view class="">
		<h1>当前页面不存在</h1>
	</view>
</template>

<script>
	export default {
		data(){
			return {}
		},
		onLoad() {
			let timer = setTimeout(() => {
				clearTimeout(timer)
				// 需要跳转的组件如果被配置在tabBar导航，就不能使用navigateTo，要使用switchTab
				uni.switchTab({
					url:'/pages/index/index'
				})
				/* uni.navigateTo({
					url:'/pages/index/index'
				}) */
			},2000)
		}
	}
</script>

<style>
</style>