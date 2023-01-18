<template>
	<view class="">
		<text>通讯录</text>
		<text>{{userName}}</text>
		<view class="">
			<button type="default" @click="login('蜡笔小新')">登陆</button>
			<button type="default" @click="logout">退出</button>
		</view>
	</view>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
	data(){
		return {
			
		}
	},
	computed:{
		...mapState(['userName'])
	},
	methods:{
		...mapActions(['login','logout'])
	},
	onLoad() {
	// #ifdef H5
		// alert('你好少年')
	// #endif

		switch(uni.getSystemInfoSync().platform){
			case 'android':
				console.log('运行在安卓app上')
				break;
			case 'ios':
				console.log('运行在iOS上')
				break;
			case 'h5':
				console.log('运行在h5上')
				break;
			default:
				console.log('运行在开发者工具上')
				break;
		}
	}
}
</script>

<style>
</style>