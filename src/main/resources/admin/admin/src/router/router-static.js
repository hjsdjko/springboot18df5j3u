import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import caigouxuqiu from '@/views/modules/caigouxuqiu/list'
    import wuzifenlei from '@/views/modules/wuzifenlei/list'
    import wuzibaosun from '@/views/modules/wuzibaosun/list'
    import wuziruku from '@/views/modules/wuziruku/list'
    import wuzikucun from '@/views/modules/wuzikucun/list'
    import wuzichuku from '@/views/modules/wuzichuku/list'
    import wuzidiaobo from '@/views/modules/wuzidiaobo/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/caigouxuqiu',
        name: '采购需求',
        component: caigouxuqiu
      }
      ,{
	path: '/wuzifenlei',
        name: '物资分类',
        component: wuzifenlei
      }
      ,{
	path: '/wuzibaosun',
        name: '物资报损',
        component: wuzibaosun
      }
      ,{
	path: '/wuziruku',
        name: '物资入库',
        component: wuziruku
      }
      ,{
	path: '/wuzikucun',
        name: '物资库存',
        component: wuzikucun
      }
      ,{
	path: '/wuzichuku',
        name: '物资出库',
        component: wuzichuku
      }
      ,{
	path: '/wuzidiaobo',
        name: '物资调拨',
        component: wuzidiaobo
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
