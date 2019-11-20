module.exports = {
    description: 'The top Internet companies android interview questions and answers',
    dest: 'docs',
    base: '/AndroidInterview-Q-A/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Android Interview',
            description: '一线互联网公司内部题库'
        }
    },
    serviceWorker: true,
    themeConfig: {
        repo: 'https://github.com/JackyAndroid/AndroidInterview-Q-A',
        editLinks: true,
        docsDir: 'source',
        locales: {
            '/': {
                label: '简体中文',
                selectText: 'Languages',
                editLinkText: '在Github编辑这个页面',
                lastUpdated: '最近更新',
                serviceWorker: {
                    updatePopup: {
                        message: "有新的内容更新",
                        buttonText: "刷新"
                    }
                },
                sidebar: {
                    '/interview/': genSidebarConfig()
                },
                nav: [{
                    text: '题库',
                    link: '/interview/',
                }]
            }
        }
    }
}

function genSidebarConfig() {
    return [
        {
            title: '题库',
            collapsable: false,
            children: [
                '',
            ]
        },
        {
            title: 'Java',
            collapsable: true,
            children: [
                'java',
                '接口的意义-百度',
                '抽象类的意义-乐视',
                '抽象类接口区别-360',
                '内部类的作用-乐视',
                '父类的静态方法能否被子类重写-猎豹',
                'java排序查找算法-美团',
                '列举java的集合和继承关系-百度-美团',
                '虚拟机-百度-乐视',
                '内存模型',
                '哪些情况下的对象会被垃圾回收机制处理掉-美团-小米',
                '进程和线程的区别-猎豹-美团',
                'HashMap的实现原理-美团',
                'java多态-乐视',
                '什么导致线程阻塞-58-美团',
                '并发编程-猎豹',
                '线程 线程池原理-腾讯',
                '容器类之间的区别-乐视-美团',
                'hashmap和hashtable的区别-乐视-小米',
            ]
        },
        {
            title: 'Android',
            collapsable: true,
            children: [
                '如何导入外部数据库-小米',
                'intentService作用是什么，AIDL解决了什么问题？-小米',
                'Android属性动画特性-乐视-小米',
                '描述一次网络请求的流程-新浪',
                'Handler消息处理',
                'launchmode应用场景-百度-小米-乐视',
                'Touch事件传递流程-小米',
                'view绘制流程-百度',
                '多线程-360',
                '线程同步-百度',
                '什么情况导致内存泄漏-美团',
                '垃圾回收',
                'ANR定位和修正',
                '什么情况导致oom-乐视-美团',
                'AndroidService与Activity之间通信的几种方式',
                '如何保证service在后台不被kill',
                'Requestlayout，onlayout，onDraw，DrawChild区别与联系-猎豹',
                'Android为每个应用程序分配的内存大小是多少？-美团',
                'LinearLayout对比RelativeLayout-百度',
                '优化自定义view百度-乐视-小米',
                '进程间通讯机制Binder',
                'fragment生命周期',
                'volley解析-美团-乐视',
                'Glide源码解析',
                '设计模式',
                '架构设计-搜狐',
            ]
        },
        {
            title: '专题',
            collapsable: true,
            children: [
                '深入研究的知识点',
                '阿里巴巴',
                '腾讯',
                '百度',
                '性能优化',
                '架构分析',
                '插件化',
                '网络',
                '数据库',
                '图片',
                '算法',
            ]
        }
    ]
}