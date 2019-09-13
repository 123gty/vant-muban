<template>
	<van-swipe :autoplay="3000" indicator-color="white" id='ggg'>
  <van-swipe-item><img src="../../public/img/1.jpg"></van-swipe-item>
  <van-swipe-item><img src="../../public/img/2.jpg"></van-swipe-item>
  <van-swipe-item><img src="../../public/img/3.jpg"></van-swipe-item>
  <van-swipe-item><img src="../../public/img/4.jpg"></van-swipe-item>
  <van-swipe-item><img src="../../public/img/5.jpg"></van-swipe-item>
</van-swipe>
</template>

<script>	
import Vue from 'vue'
	import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style>
	.van-swipe-item{
	background: yellow;
	
	}
	.van-swipe{
		width: 100%;
		height:200px;
		background: yellow;
		/* margin: 200px; */
	}
	img{
		width: 100%;
		height:100%
	}
</style>
