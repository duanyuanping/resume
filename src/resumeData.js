global.resumeData = {
	theme: '#409eff', // 简历主色调
	head: { // 简历头部
		name: '段远平',
		position: 'web前端开发工程师',
		address: '重庆 南岸区',
		mobile: '130 7239 0461',
		email: '1798482104@qq.com',
		github: 'https://github.com/duanyuanping',
	},
	body: [ // 简历主体
		{
			tagName: '教育经历', // 内容分块的类型
			item: {
				type: 'normal', // 板块内容展示的样式；现在就只有 normal 和 listStyle 两个值
				describe: [ // 板块详细列表介绍
					{
						head: { 
							time: '2016.9 - 至今',
							title: '重庆邮电大学 / 电子商务专业',
							link: {},
						},
						detail: '本科 / 2020年毕业',
					},
				],
			},
		},
		{
			tagName: '项目经历',
			item: {
				type: 'normal',
				describe: [
					{
						head: { 
							time: '2018.2 - 2018.3',
							title: '单点登录系统',
							link: { name: '团队项目', url: 'javascript:;'},
						},
						detail: `<strong>项目简介</strong>该系统用到的技术栈有
						<strong>egg.js</strong><strong>mysql</strong><strong>redis</strong><strong>jquery</strong>。
						该系统奉献给团队的<strong>可视化页面搭建系统</strong>生态，目的是让团队的所有系统使用<strong>同一套用户系统</strong>，
						并且实现<strong>用户登录状态统一</strong>即用户只需要在一个系统中登录或者登出后，此用户在其他系统的登录状态也一并变化。
						<div class="content-away"></div>
						<strong>项目职责</strong>项目设计和研发。
						主要负责后端<strong>登录系统</strong>搭建、供其他系统后台使用来实现单点登录的<strong>中间件</strong>的编写`,
					},
					{
						head: { 
							time: '2018.8 - 2018.9',
							title: '北京水上运动线上销售服务',
							link: { name: '团队项目', url: 'javascript:;' },
						},
						detail: `<strong>项目简介</strong>该项目用到的技术栈有
						<strong>源生微信小程序</strong><strong>antdesign</strong><strong>egg.js</strong><strong>mysql</strong><strong>redis</strong>。
						该项目主要目的是让用户可以通过微信小程序购买水上项目活动、购买会员卡以及获取最近水上活动的动态。
						<div class="content-away"></div>
						<strong>项目职责</strong>项目设计和研发。
						主要负责c端小程序公共函数编写、水上活动信息展示、微信登录、微信支付；
						管理端订单管理和类别管理页面；
						后端大部分的配置文件、中间件、日志、公共函数、微信登录、微信支付以及其他c端和m端接口。`,
					},
				],
			},
		},
	],
};
