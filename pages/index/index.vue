<template>
	<view class="content">
		<text>首页</text>
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<!-- <navigator url="/pages/404/404">404</navigator> -->
			<navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(getCurrentPages())
			// console.log(this.$scope.$getAppWebview())
			// console.log(this.$scope.route())
		},
		methods: {

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
