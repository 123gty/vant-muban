<template>
	<!-- <Bscroll> -->
	<div>
	<toubu title='伍伍伍伍伍伍'></toubu>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		  <p>刷新次数: {{ count }}</p>
		<div>
		<van-count-down
  :time="time"
  format="DD 天 HH 时 mm 分 ss 秒"
/>
	<van-count-down
  millisecond
  :time="time"
  format="HH:mm:ss:SSS"
/>
		<div>{{shuju}}</div>
		<div>{{shuju}}</div>
		<div>{{shuju}}</div>
		<van-count-down :time="time">
  <template v-slot="timeData">
    <span class="item">{{ timeData.hours }}</span>
    <span class="item">{{ timeData.minutes }}</span>
    <span class="item">{{ timeData.seconds }}</span>
  </template>
</van-count-down>
		<div>{{shuju}}</div>
		<div>{{shuju}}</div>
<van-count-down
id='dada'
  ref="countDown"
  millisecond
  :time="300000"
  :auto-start="false"
  format="ss:SSS"
 
/>
<div clickable>
  <button icon="play-circle-o" @click="start" >开始</button>
  <button icon="pause-circle-o" @click="pause" >暂停</button>
  <button icon="replay" @click="reset" >重置</button>
</div>
		<div>{{shuju}}</div>
		<div>{{shuju}}</div>
<van-count-down :time="time" />

		</div>
		</van-pull-refresh>
	
	</div>
	<!-- </Bscroll> -->
</template>

<script>
	import toubu from './toubu.vue'

	import { PullRefresh,CountDown,Grid } from 'vant';
	import Vue from 'vue'
Vue.use(PullRefresh).use(CountDown).use(Grid);


export default {
  data() {
    return {
		shuju:'开始',
      count: 0,
      isLoading: false,
	   time: 130 * 60 * 60 * 1000,
    }
  },
   components: {
  	toubu:toubu
  }, 

  methods: {
    onRefresh() {
      setTimeout(() => {
        //alert(111111222),
		this.shuju='完成'+this.count;
        this.isLoading = false;
        this.count++;
      }, 500);
    },
	 start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast('倒计时结束');
    }
	
  },
 
}
</script>

<style scoped>
	*{
			
	}
	button{
		width: 60px;
		height:40px;
		background: #FFFF00;
		color: #1989FA;
	}
	.item {
		margin-top: 15px;
		font-size: 20px;
  display: inline-block;
  width: 52px;
  height:30px;
  line-height: 30px;
  margin-right: 15px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
