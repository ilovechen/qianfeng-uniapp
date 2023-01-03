<template>
	<view class="container">
		<!-- <text>在线聊天</text> -->
		<!-- 聊天信息列表 -->
		<view class="chat-body">
			<view class="chat-one">
				<image class="chat-face" src="../../static/image/home.svg" mode=""></image>
				<view class="chat-box">
					<view class="chat-sender">知心姐姐</view>
					<view class="chat-content">你好，我是可爱的知心姐姐，请问你想和我聊什么呢？</view>
				</view>
			</view>
			<view class="chat-one">
				<image class="chat-face" src="../../static/image/identity.svg" mode="widthFix"></image>
				<view class="chat-box">
					<view class="chat-sender">知心姐姐</view>
					<image class="chat-img" src="../../static/image/settings.svg" mode="widthFix"></image>
				</view>
			</view>
			<view class="chat-one chat-one-mine">
				<view class="chat-box">
					<view class="chat-content">哇，你真漂亮</view>
				</view>
				<image class="chat-face" src="../../static/image/home.svg" mode="widthFix"></image>
			</view>
			<view class="chat-one chat-one-mine">
				<view class="chat-box">
					<image class="chat-face" src="../../static/image/settings_check.svg" mode="widthFix"></image>
				</view>
				<image class="chat-face" src="../../static/image/home.svg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 聊天输入 -->
		<view class="chat-footer">
			<input class="msg-input" type="text" placeholder="请输入聊天内容" />
			<image class="img-chose" src="../../static/image/identity.svg" mode="widthFix"></image>
			<view class="send-btn">
				发送
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #f1f1f1;
	min-height: 100vh;
}
.chat-body{
	padding-bottom: 178upx;
	.chat-time{
		text-align: center;
		color: #888;
		padding: 40upx 0 0;
	}
	.chat-one{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 20upx 0;
	}
	.chat-one-begin{
		padding: 40upx;
	}
	.chat-one-mine{
		justify-content: flex-end;
	}
	.chat-face{
		width: 84upx;
		height: 84upx;
		border-radius: 10upx;
		margin-left: 40upx;
	}
	.chat-one-mine .chat-face{
		margin-left: 0;
		margin-right: 40upx;
	}
	.chat-box{
		max-width: calc(100% - 290upx);
		margin-left: 20upx;
		font-size: 30upx;
	}
	.chat-one-mine .chat-box{
		margin-right: 20upx;
	}
	.chat-sender{
		color: #888;
		font-size: 28upx;
		margin-top: -8upx;
		margin-bottom: 10upx;
	}
	.chat-content{
		background-color: #fff;
		border-radius: 5px;
		padding: 10px;
		.micon{
			margin-right: 20upx;
			color: #666;
		}
	}
	.chat-img{
		float: left;
		max-width: 60%;
		border-radius: 5px;
	}
	.chat-one-mine .chat-img{
		float: right;
	}
}
.chat-footer{
	width: 670upx;
	padding: 0 40upx;
	height: 120upx;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-top: 1upx solid #ddd;
	.msg-input{
		background-color: #fff;
		width: calc(100% - 300upx);
		height: 70upx;
		line-height: 70upx;
		font-size: 30upx;
		border-radius: 10upx;
		padding: 0 20upx;
	}
	.img-chose{
		width: 70upx;
		height: 70upx;
	}
}
</style>
