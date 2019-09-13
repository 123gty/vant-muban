<template>
	<div id="tb">
		<div @click="xiayiye">返回</div>
		<div>{{title}}</div>
		<div >下一页</div>
	</div>
</template>

<script>

export default {
  name: 'toubu',
  props:{
	  title:String
  },
  methods:{
	  xiayiye(){
		  this.$router.go(-1)
	  }
  }
  
}
</script>


<style lang="scss" scoped="scoped">
	#tb{
		display: flex;
		justify-content: space-around;
		height: 40px;
		line-height: 40px;
	}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   // -webkit-font-smoothing: antialiased;
//   // -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
// 	height:5%;
// 	z-index: 5;
//  position: fixed;
//  bottom: 0;
//  background: red;
//  width: 100%;
//  left: 0;
//   a {
//     // font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #FFFFFF;
//     }
//   }
// }
</style>

