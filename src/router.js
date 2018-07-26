import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import classification from './views/classification.vue'
import Free from './views/Free.vue'
import Okami from './views/Okami.vue'
import ranking from './views/ranking.vue'
import overwrite from './views/overwrite.vue'
import dashenfinishlist from './views/dashenfinishlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',    
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
    	path:'/classification',
    	name:'classification',
    	component:classification
    },
     {
    	path:'/Free',
    	name:'Free',
    	component:Free
    },
     {
    	path:'/overwrite',
    	name:'overwrite',
    	component:overwrite
    },
     {
    	path:'/Okami',
    	name:'Okami',
    	component:Okami
    },
    {
    	path:'/ranking',
    	name:'ranking',
    	component:ranking
    },
		{
			path: '/dashenfinishlist',
			name: 'dashenfinishlist',
			component: dashenfinishlist
			}
  ]
})
