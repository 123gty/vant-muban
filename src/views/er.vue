<template>
<div>		<toubu title='贰贰贰贰贰贰'></toubu>
	<van-button type="primary" @click="showPopup">
  展示弹出层
</van-button>
<div class="ye">爷
	<div class="fu">父
		<div class="zi">
			子
		</div>
	</div>
	<div class="fu1">父
		<div class="zi">
			子
		</div>
	</div>
</div>
		<van-popup
		  v-model="show"
		  position="right"
		  @close="ggggg"
		  :style="{ height: '100%',width:'50%',background:'red' }"
		>
			<div id="fan">
				<van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
 <van-sidebar-item title="标签名称" /> <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" info="18" />
  <van-sidebar-item title="标签名称" info="99" />
  <van-sidebar-item title="标签名称" info="99+" />
</van-sidebar>
			</div>
		</van-popup>

</div>
</template>

<script>
	import toubu from './toubu.vue'
	import Vue from 'vue'
	import { Popup,Button,Field,Sidebar, SidebarItem  } from 'vant';
Vue.use(SidebarItem).use(Sidebar);
Vue.use(Field);
Vue.use(Button);
Vue.use(Popup);
	export default {
  data() {
    return {
		  activeKey: 0,
      show: false
    }
  },
   components: {
  	toubu:toubu
  }, 

  methods: {
    showPopup() {
      this.show = true;
    },
	ggggg() {
	  alert(111122)
	}
  }
};
</script>

<style lang="scss">
	
	$line:60px;
	#fan{
		
		flex-flow: column nowrap;
		
		 div{
			line-height: $line;
		}
	}
	.ye{
		width: 100px;
		height:400px;
		background: red;
		.fu, .fu1{	
			width: 80px;
			height:80px;
			background: yellow;
			.zi{	
				width: 50px;
				height:50px;
				background: blueviolet;
				&:hover{background: red;
				border: 5px solid #ccc {
					  left: 5px solid pink;
					  right: 5px solid green;;
			  }
}
			}
			
		}
	}

	

.van-sidebar{
	width:100%;
}
</style>
