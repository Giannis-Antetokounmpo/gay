<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			async getTop(){
				let{data:res}=await uni.$http.get('/home/swiperdata')
				console.log(res);
			}
		},
		mounted() {
			console.log(1);
			this.getTop()
		}
	}
</script>

<style lang="scss">

</style>
