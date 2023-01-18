<template>
	<view class="container">
		<!-- <text>在线聊天</text> -->
		<!-- 聊天信息列表 -->
		<view class="chat-body">
			<block v-for="(item,index) in chatList" :key="index">
				<view class="chat-one" v-if="!item.isMe">
					<!-- 头像 -->
					<image class="chat-face" src="@/static/image/102.png" mode=""></image>
					<view class="chat-box">
						<view class="chat-sender">知心姐姐</view>
						<view class="chat-content" v-if="item.type === 'txt'">{{item.content}}</view>
						<image class="chat-face" v-if="item.type === 'img'" v-for="(img,i) in item.infoImg" :key="i" :src="img" mode="widthFix"></image>
					</view>
				</view>
				<view class="chat-one chat-one-mine" v-else>
					<view class="chat-box">
						<view class="chat-content" v-if="item.type === 'txt'">{{item.content}}</view>
						<image class="chat-face" v-if="item.type === 'img'" v-for="(img,i) in item.infoImg" :key="i" :src="img" mode="widthFix"></image>
					</view>
					<!-- 头像 -->
					<image class="chat-face" src="@/static/image/101.png" mode="widthFix"></image>
				</view>
			</block>
		</view>
		<!-- 聊天输入 -->
		<view class="chat-footer">
			<input class="msg-input" type="text" placeholder="请输入聊天内容" v-model="myInput" @input="getInput" />
			<image class="img-chose" src="../../static/image/identity.svg" mode="widthFix" @click="choseImgAndSend"></image>
			<view class="send-btn" :class="{'active-btn':regInput}" @click="sendMsg">
				发送
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList:[
					{
						isMe:false,
						type:'txt',
						content:'你好，我是可爱的知心姐姐，请问你想和我聊什么呢？'
					},
					{
						isMe:false,
						type:'img',
						infoImg:['/static/image/home.svg']
					},
					{
						isMe:true,
						type:'txt',
						content:'哇，你真漂亮'
					},
					{
						isMe:true,
						type:'img',
						infoImg:['/static/image/home.svg']
					},
				],
				myInput:'',
				regInput:true
			}
		},
		onShow() {
			if(!!uni.getStorageSync('chatList')){
				this.chatList = JSON.parse(uni.getStorageSync('chatList'));
				this.getPageScrollTo();
			}
		},
		methods: {
			// 发送图片
			choseImgAndSend(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择、使用相机
					success: (res) => {
						console.log('res',res);
						console.log(JSON.stringify(res.tempFilePaths));
						let senMsg = {
							isMe:true,
							type:'img',
							infoImg:res.tempFilePaths
						}
						this.chatList.push(senMsg);
						let resMsg = {
							isMe:false,
							type:'img',
							infoImg:res.tempFilePaths
						}
						this.chatList.push(resMsg);
						this.getPageScrollTo();
						this.setStorageSync();
					}
				})
			},
			// 保持最新内容处于最底部
			getPageScrollTo(){
				setTimeout(() =>{
					uni.pageScrollTo({
						scrollTop:999999,
						duration:0
					})
				},50)
			},
			// 存储
			setStorageSync(){
				uni.setStorageSync('chatList',JSON.stringify(this.chatList))
			},
			// 发送文本
			sendMsg(){
				if(!this.myInput) return false;
				
				let senMsg = {
					isMe:true,
					type:'txt',
					content:this.myInput
				}
				this.chatList.push(senMsg);
				
				let resMsg = {
					isMe:false,
					type:'txt',
					content:'你是煞笔吗？'
				}
				this.chatList.push(resMsg);
				this.getPageScrollTo();
				this.setStorageSync();
				this.myInput = "";
				// 信息发送完成，置为true
				this.regInput =  true;
			},
			getInput(value){
				console.log('this.myInput',value.detail.value)
				if(!!this.myInput) {
					// 校验空格
					let regExp = /^ [\s]*$/;//以空格开头并且以空格结尾，中间多次或者零次空格
					this.regInput = regExp.test(this.myInput);
					// 为false 就对了，结果为true，则表示全为空格 或者为空null
					if(this.regInput) return false;
				} else {
					this.regInput =  true;
				}
				
			}
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
	.send-btn{
		background-color: #3971fa;
		// font-size: 14upx;
		padding: 10upx;
		border-radius: 4px;
		color: #FFFFFF;
	}
	.active-btn{
		background: #6db0fb;
	}
}
</style>
