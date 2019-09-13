<template>
	<div>
		<Toubu title='肆肆肆肆肆肆肆'></Toubu>
		<van-uploader v-model="fileList" multiple />
	</div>

</template>

<script>
	import '../scss/index.scss'
	import Toubu from './toubu.vue'
	import Vue from 'vue'
	import {Uploader} from 'vant';
	Vue.use(Uploader);
	export default {
		data() {
			return {
				fileList: []
			}
		},
		components: {
			Toubu
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
