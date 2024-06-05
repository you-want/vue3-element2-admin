export default {
  code: 200,
  msg: '成功',
  data: [
    {
      path: '/home',
      name: 'home',
      component: '/HomeView',
      meta: {
        icon: 'HomeFilled',
        title: '首页',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: true,
        isKeepAlive: true
      }
    },
    {
      path: '/person',
      name: 'person',
      redirect: '/person/register',
      meta: {
        icon: 'List',
        title: '人员管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      },
      children: [
        {
          path: '/person/register',
          name: 'register',
          component: '/person/register/RegisterIndex',
          meta: {
            title: '邀请注册',
            isLink: '',
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          }
        },
        {
          path: '/person/account',
          name: 'account',
          redirect: '/person/account/clarify',
          meta: {
            title: '关联账户管理',
            isLink: '',
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          },
          children: [
            {
              path: '/person/account/clarify',
              name: 'clarify',
              component: '/person/account/ClarifyIndex',
              meta: {
                title: '关联方账户结构及功能澄清',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            },
            {
              path: '/person/account/related',
              name: 'related',
              component: '/person/account/RelatedAccount',
              meta: {
                title: '关联方账户',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            }
          ]
        },
        {
          path: '/person/user',
          name: 'account',
          redirect: '/person/user/clarify',
          meta: {
            title: '用户管理',
            isLink: '',
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true
          },
          children: [
            {
              path: '/person/user/clarify',
              name: 'clarify',
              component: '/person/user/ClarifyIndex',
              meta: {
                title: '用户账户结构及功能澄清',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            },
            {
              path: '/person/user/related',
              name: 'related',
              component: '/person/user/UserList',
              meta: {
                title: '用户列表',
                isLink: '',
                isHide: false,
                isFull: false,
                isAffix: false,
                isKeepAlive: true
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: '/AboutView',
      meta: {
        icon: 'InfoFilled',
        title: '关于项目',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true
      }
    }
  ]
}
