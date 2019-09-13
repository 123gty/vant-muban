<template>
 <div>
	 <toubu title='壹壹壹壹壹'></toubu>

<van-circle
  v-model="currentRate"
  color="red"
  fill="#fff"
  size="120px"
  layer-color="#ebedf0"
  :text="text"
  :speed="100"
  :clockwise="false"
  :stroke-width="60"
/></br>
<van-circle
  v-model="currentRate"
  :rate="100"
  :speed="10"
  :text="text"
/>
<van-loading size="124px" color="green" />
<van-loading type="spinner"size="124px" color="bule" />

 </div>
</template>


<script>
	import toubu from './toubu.vue'

	import { Circle,Loading } from 'vant';


Vue.use(Circle).use(Loading);
import Vue from 'vue'


export default {
  data() {
    return {
      currentRate: 0
    };
  },
   components: {
  	toubu:toubu
  }, 
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
};


</script>
<style scoped>
	
</style>
