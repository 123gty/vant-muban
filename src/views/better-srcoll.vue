<template>
<div class='xiala' ref='xiala'>
	<slot></slot>
</div>
</template>

<script>
import BScroll from 'better-scroll';
export  default {
	name:'xiala',
	mounted(){
		this.scroll = new BScroll(this.$refs.xiala);
		console.log(this.scroll)
	}
}
</script>

<style scoped>
.xiala{
	height:100%;
}
</style>

