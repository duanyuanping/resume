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
							link: { name: '团队项目' },
						},
						detail: `<strong>项目简介</strong>该系统用到的技术栈有
						<strong>egg.js</strong><strong>mysql</strong><strong>redis</strong><strong>jquery</strong>。
						该系统奉献给团队的<strong>可视化页面搭建系统</strong>生态，目的是让团队的所有系统使用<strong>同一套用户系统</strong>，
						并且实现<strong>用户登录状态统一</strong>即用户只需要在一个系统中登录或者登出后，此用户在其他系统的登录状态也一并变化。
						<br>
						<strong>项目职责</strong>项目设计和研发。
						主要负责后端<strong>登录系统</strong>搭建、供其他系统后台使用来实现单点登录的<strong>中间件</strong>的编写`,
					},
					{
						head: { 
							time: '2018.3 - 2018.5',
							title: '搭建系统管理端',
							link: { name: '团队项目' },
						},
						detail: `<strong>项目简介</strong>该系统用到的技术栈有
						<strong>antdesign</strong><strong>egg.js</strong>。
						该系统是用来管理<strong>可视化页面搭建系统</strong>中需要的模块以及生成的页面。
						<br>
						<strong>项目职责</strong>页面管理、设计和研发。
						主要负责前端页面使用<strong>antdesign</strong>框架开发，后端编写前端页面管理的接口和页面管理的接口文档`,
					},
					{
						head: { 
							time: '2018.8 - 2018.9',
							title: '北京水上运动线上销售服务',
							link: { name: '团队项目' },
						},
						detail: `<strong>项目简介</strong>该项目用到的技术栈有
						<strong>原生微信小程序</strong><strong>antdesign</strong><strong>egg.js</strong><strong>mysql</strong><strong>redis</strong>。
						该项目主要目的是让用户可以通过微信小程序购买水上项目活动、购买会员卡以及获取最近水上活动的动态。
						<br>
						<strong>项目职责</strong>项目设计和研发。
						主要负责c端小程序公共函数编写、水上活动信息展示、微信登录、微信支付；
						管理端订单管理和类别管理页面；
						后端大部分的配置文件、中间件、日志、公共函数、微信登录、微信支付、其他c端和m端接口以及接口文档的编写。`,
					},
				],
			},
		},
		{
			tagName: '专业技能',
			item: {
				type: 'listStyle',
				describe: [
					`熟悉web前端页面开发的基本技能，熟悉<strong>ECMA规范</strong>、<strong>W3C规范</strong>、浏览器<strong>兼容性</strong>、<strong>前端语义化</strong>等，
					平时开发注重<strong>用户体验</strong>和<strong>可维护性</strong>，想要给用户更好的体验。`,
					`对<strong>MV*</strong>有一定了解，能够熟练的使用<strong>React及周边产品</strong>，熟悉<strong>antdesign</strong>`,
					`有后端开发经验，对<strong>node</strong>有一定了解，能够熟练使用<strong>egg.js</strong>来进行后端业务的开发，对后端业务逻辑有一定的了解`,
					`对<strong>计算机网络</strong>、<strong>数据结构</strong>、<strong>前端性能优化</strong>、<strong>前端安全</strong>、<strong>ES6</strong>有一定的了解`,
					`能够熟练的使用<strong>git</strong>工具来进行团队开发，了解一点<strong>linux</strong>命令和<strong>nginx</strong>配置，了解开发流程和调试工具的使用`,
				],
			},
		},
		{
			tagName: '实践经历',
			item: {
				type: 'normal',
				describe: [
					{
						head: { 
							time: '2017.10 - 至今',
							title: '勤奋蜂科技 · 前端组',
							link: { name: '创业团队' },
						},
						detail: `<strong>团队简介</strong>勤奋蜂是一个校园创业团队，涵盖产品、运营、行政、
						科创、前 端、后台、移动七部门。目前公众号<strong>校招导师</strong>有粉丝
						<strong>10000+</strong>，微信推送300+，平均阅读量1K+。
						<br>
						<strong>前端组核心成员</strong>负责团队项目研发，维护及<strong>性能优化</strong>，
						同时参与团队代码规范实施，并参与了工作室日常技术分享交流和codeReview。
						期间积攒了各类项目开发经验和<strong>团队合作经验</strong>。`,
					},
				],
			},
		},
		{
			tagName: '个人素质',
			item: {
				type: 'listStyle',
				describe: [
					`工作态度认真，有责任心，有很好的团队合作意识`,
					`喜欢新鲜的技术，热爱专研`,
					`性格沉稳，在面对技术难点有着不服输的精神`,
				],
			},
		},
		{
			tagName: '个人作品',
			item: { 
				type: 'normal',
				describe: [
					
				],
			},
		},
	],
};
