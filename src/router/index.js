import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* import Parallax from '@/components/Parallax'
import Fabric from '@/components/Fabric' */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parallax',
      name: 'Parallax',
      component: getComponent('Parallax')
    },
    {
      path: '/fabric',
      name: 'Fabric',
      component: getComponent('Fabric')
    },
    {
      path: '/paper',
      name: 'Paper',
      component: getComponent('Paper')
    },
    {
      path: '/bindX',
      name: 'BindX',
      component: getComponent('BindX')
    }
  ]
})

function getComponent (name) {
  return () => import(`@/components/${name}`)
}
