import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
import MainIndex from './components/MainIndex.vue'
export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: MainIndex,
      children: [
        {
          path: '/',
          name: 'Main',
          component: load('Main')
        }
      ]
    },
    {
      path: '/Gems',
      component: MainIndex,
      children: [
        {
          path: '/Gems',
          redirect: '/Gems/ActiveSkill',
          component: load('GemList'),
          children: [
            {
              path: '/Gems/ActiveSkill',
              name: 'Gems.Active',
              component: load('GemListActive')
            },
            {
              path: '/Gems/SupportSkill',
              name: 'Gems.Support',
              component: load('GemListSupport')
            },
            {
              path: '/Gems/VaalSkill',
              name: 'Gems.Vaal',
              component: load('GemListVaal')
            },
            {
              path: '/Gems/All',
              components: {
                active: load('GemListActive'),
                support: load('GemListSupport'),
                vaal: load('GemListVaal')
              }
            }
          ]
        }
      ]
    },
    {
      path: '/ItemBases',
      component: MainIndex,
      children: [
        {
          path: '/ItemBases/',
          name: 'ItemBases',
          components: {
            leftSide: load('ItemBasesList'),
            default: load('ItemBasesSlot')
          }
        }
      ]
    },
    {
      path: '/ItemBases/:slot',
      component: MainIndex,
      children: [
        {
          path: '/ItemBases/:slot',
          components: {
            default: load('ItemBasesSlot'),
            leftSide: load('ItemBasesList')
          },
          children: [
            {
              name: 'ItemBases.Item',
              path: '/ItemBases/:slot/:item',
              components: {
                inner: load('Item')
              }
            }
          ]
        }
      ]
    },
    /*
    {
      path: '/ItemBases/:slot/:item',
      component: MainIndex,
      children: [
        {
          path: '/ItemBases/:slot/:item',
          components: {
            leftSide: load('ItemBasesList'),
            default: load('ItemBasesSlot')
          },
          children: [
            {
              path: '/ItemBases/:slot/:item',
              inner: load('Item')
            }
          ]
        }
      ]
    },
    */
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
