<template>
	<view>
		<view class="big" v-for="(item,index) in list" :key="index">
			<image :src="item.goods_big_logo||imagee" mode=""></image>
			<view class="">
		{{item.goods_name}}		
		￥{{item.goods_price}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		stop:false,        
				from:{
					query:'',
					cid:'',
					pagenum:1,
					pagesize:10
				},
				list:[],
				total:'',
				imagee:"http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000646332415_2_800x800.jpg"
			};
		},
		methods:{
			async getList(bb){
				this.stop=false
				let{data:res}=await uni.$http.get('/goods/search',this.from)
				this.stop=true
				bb&&bb()
				console.log(res);
				this.total=res.message.total
				this.list=[...this.list,...res.message.goods]
			}
		},
		onLoad(obj) {
			console.log(obj);
			this.from.cid=obj.cid
		},
		mounted() {
			this.getList()
		},
		onReachBottom(){
			if(!this.stop) return
			if(this.from.pagenum*this.from.pagesize>this.total){
			return uni.showToast({
				title:"到底了"
			})
			}
			this.from.pagenum++
			this.getList()
		},
		onPullDownRefresh(){
			this.from.pagenum=1
			this.list=[]
			this.getList(()=>uni.stopPullDownRefresh())
		}
	}
</script>
S
<style lang="scss">
.big{
	display: flex;
	
	image{
		width: 180rpx;
		height: 200rpx;
	}
}
</style>
