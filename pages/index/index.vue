<template>
	<view class="content">
		<text>首页</text>
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<!-- <navigator url="/pages/404/404">404</navigator> -->
			<navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		</view>
		<Child :msg="title" @modelUpdata="childModelUpdata"></Child>
	</view>
</template>

<script>
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		components:{
			Child
		},
		onLoad() {
			console.log(getCurrentPages())
			// console.log(this.$scope.$getAppWebview())
			// console.log(this.$scope.route())
		},
		methods: {
			childModelUpdata(value){
				console.log(value)
				this.title = value;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
