<template>
	<view class="child">
		我是组件{{msg}}
		<button @click="clickSend">子组件发送</button>
	</view>
</template>

<script>
	export default {
		name:"child",
		data() {
			return {
				
			};
		},
		props:{
			msg:{
				type:String,
				default:''
			}
		},
		methods:{
			clickSend(){
				// this.$emit('modelUpdata','子组件向父组件开炮')
				uni.$emit('meGetInfo','我在child组件，现在去me组件')
			}
		}
	}
</script>

<style scoped>
page{
	
}
.child{
	color: red;
	/* background-color: orange; */
}
</style>