import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import yi from './views/About.vue'
import er from './views/er.vue'
import san from './views/san.vue'
import si from './views/si.vue'
import wu from './views/wu.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
	  // redirect:Home
    },
	{
	  path: '/yi',
	  name: 'yi',
	  component: yi,
	},
	 {
	  path: '/er',
	  name: 'er',
	  component: er,
	},
	 {
	  path: '/san',
	  name: 'san',
	  component: san,
	},
	 {
	  path: '/si',
	  name: 'si',
	  component: si,
	},
    {
      path: '/wu',
      name: 'wu',
      component: wu,
    }
  ]
})
