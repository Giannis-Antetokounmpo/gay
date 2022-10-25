<template>
	<view id="app">
		<view class="big" >
			<view>
					<view class="left" v-for="(item,index) in leftList" :key="index" :class="{active:active==index}" @click="onLeft(index)">
				{{item.cat_name}}
			</view>
			</view>                    
		
				<view class="right">
					<view class="">
						{{rightList.cat_name}}
					</view>
		
			<view class="" v-for="(ite,index) in rightList.children" :key="index">
				<image :src="ite.cat_icon" mode="" @click="goShop(ite.cat_id)"></image>
				{{ite.cat_name}}
			</view>
		</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftList:[],
				active:0,
				rightList:[]
			};
		},
		methods:{
			async getLeft(){
				let{data:res}=await uni.$http.get('/categories')
				console.log(res);
				this.leftList=res.message
				this.rightList=res.message[0].children[0]
			},
			onLeft(index){
				this.active=index
				this.rightList=this.leftList[index].children[0]
			},
			goShop(id){
				uni.navigateTo({
					url:'/sub/goods_details/goods_details?cid='+id
				})
			}
		},
		mounted() {
			this.getLeft()
		}
	}+
</script>

<style lang="scss">
.left{
	width: 240rpx;
	height: 120rpx;
	text-align: center;
	line-height: 120rpx;
	&.active{
		background-color: #fff;
		position: relative;
		&::before{
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			position: absolute;
			content: '';
			width: 12rpx;
			height: 60rpx;
			background-color: red;
			
		}
	}
}
#app{
	background-color: #f5f5f5;
}
.big{
display: flex;
.right{
	display: flex;
	flex-wrap: wrap;
	view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 48%;
		image{
			width: 200rpx;
			height: 200rpx;
		}
	}
}
}
</style>
