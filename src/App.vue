<template>
  <div id="app">
    <div id="nav">
		
      <router-link to="/">首页</router-link> |
     <router-link to="/yi">11111</router-link>|
	   <router-link to="/er">22222</router-link> |
	  <router-link to="/san">33333</router-link>|
	  <router-link to="/si">444444</router-link> |
      <router-link to="/wu">5555555</router-link>
    </div>
	
    <router-view/>
  </div>
</template>

<style lang="scss" scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
	height:5%;
	z-index: 5;
 position: fixed;
 bottom: 0;
 // background: red;
 width: 100%;
 left: 0;
  a {
    // font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
