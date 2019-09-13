<template>
	<div>
		<toubu title='肆肆肆肆肆肆肆'></toubu>
		<van-uploader v-model="fileList" multiple />
	</div>

</template>

<script>
	import '../scss/index.scss'
	import toubu from './toubu.vue'

import { Uploader } from 'vant';
	import Vue from 'vue'
Vue.use(Uploader);	
export default {
  data() {
    return {
      fileList: []
    }
  },
   components: {
  	toubu:toubu
  },
   methods: {
    afterRead(file) {
     this.fileList.push(file);
    }
  }
}

 

</script>

<style scoped>
	
</style>
