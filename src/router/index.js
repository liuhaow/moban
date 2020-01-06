import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: resolve => require(['@/pages/Home/Home'], resolve),
			meta: {
				keepAlive: false
			}

		},
		{
			path: '/main',
			name: 'Main',
			component: resolve => require(['@/pages/Main/Main'], resolve),
			meta: {
				keepAlive: false
			}

		},
		{
			path: '/mine',
			name: 'Mine',
			component: resolve => require(['@/pages/Mine/Mine'], resolve),
			meta: {
				keepAlive: false
			}

		}
	]
})