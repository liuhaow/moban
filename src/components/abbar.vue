<template>
	<div class="tab">
		<ul class="mit-bar" fixed>
			<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.y)" :class="{'actt':thatnum==index}">
				<i slot="icon" class="icon iconfont " v-if="index == 0">&#xe608;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 1">&#xe61c;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 2">&#xe6b1;</i>
				{{item.name}}
			</li>
		</ul>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Dialog } from 'vant';
	export default {
		props: ['tabName'],
		data() {
			return {
				thatnum: 0,
				list: [{
						name: '首页',
					},
					{
						name: '主要',
					},
					{
						name: '我的',
					}

				]
			}
		},
		mounted() {
			this.thatnum = this.tabName
			console.log(this.thatnum)
		},
		computed: {

			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		methods: {
			...mapActions(
				[
					'maisellztInfo',
					'settaber',
					'chooseilt'
				]
			),
			changestyle(index) {
				this.thatnum = index;
				if(index == 0) {
					this.$router.push('/home')
				} else if(index == 1) {
					this.$router.push('/main')
				} else if(index == 2) {
					this.$router.push('/mine')
				}
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.mit-bar {
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
		height: 98px;
		background: #fafafa;
		display: flex;
		li {
			height: 100%;
			width: 33.33%;
			font-size: 30px;
			display: flex;
			flex-direction: column;
			color: #cdcdcd;
			justify-content: center;
			align-items: center;
			.icon {
				font-size: 40px;

			}
		}
		.actt {
			color: #4673EC;
		}
	}
</style>