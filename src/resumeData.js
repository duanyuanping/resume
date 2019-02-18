global.resumeData = {
	// theme: '#409eff', // 简历主色调
	theme: '#2577e3',
	head: { // 简历头部
		name: '段远平',
		position: 'web前端开发工程师（实习）',
		address: '重庆 南岸区',
		school: '重庆邮电大学 / 电子商务专业',
		degree: '本科 / 2020年毕业',
		mobile: '130 7239 0461',
		email: '1798482104@qq.com',
		github: 'https://github.com/duanyuanping',
		// gitlab: 'http://code.varbee.com/duanyuanping',
	},
	body: [ // 简历主体
		// {
		// 	tagName: '教育经历', // 内容分块的类型
		// 	item: {
		// 		type: 'normal', // 板块内容展示的样式；现在就只有 normal 和 listStyle 两个值
		// 		describe: [ // 板块详细列表介绍
		// 			{
		// 				head: { 
		// 					time: '2016.9 - 至今',
		// 					title: '重庆邮电大学 / 电子商务专业',
		// 				},
		// 				detail: '本科 / 2020年毕业',
		// 			},
		// 		],
		// 	},
		// },
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
						detail: `<header>团队介绍：</header>勤奋蜂是一个校园创业团队，涵盖产品、运营、行政、
						科创、前	端、后台、移动七部门。目前公众号<strong>校招导师</strong>有粉丝
						<strong>10000+</strong>，微信推送300+，平均阅读量1K+。
						<br>
						<header>前端成员：</header>负责团队项目研发，维护及<strong>性能优化</strong>，
						同时参与团队代码规范实施，并参与了工作室日常技术分享交流和<strong>codeReview</strong>。
						期间积攒了各类项目开发经验和<strong>团队合作经验</strong>。`,
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
						detail: `<header>项目简介：</header>该系统用于将团队中多个系统中的用户合并，让所有系统使用同一套用户。
						用户使用本团队系统时只需要在一个系统中登录以后，用户在其他系统中处于登录状态，当某一个系统退出后，其他系统也变成未登录状态。
						该系统用到的技术栈有<strong>egg.js</strong><strong>mysql</strong><strong>redis</strong><strong>jquery</strong>。
						<br>
						<header>个人工作：</header>整理单点登录逻辑并实现。
						负责开发后端<strong>登录系统</strong>搭建、其他业务系统检验用户登录状态的<strong>中间件</strong>、实现<strong>跨域设置 cookie</strong>等功能代码`,
					},
					{
						head: { 
							time: '2018.8 - 2018.9',
							title: '北京水上运动线上销售服务',
							link: { name: '微信小程序：北京水上运动' },
						},
						detail: `<header>项目简介：</header>该小程序用于线上支持预约服务。消费者可以通过该小程序预约华仁启智公司的团建活动、购买会员服务和获取最近活动动态等信息。
						该项目用到的技术栈有<strong>原生微信小程序</strong><strong>antdesign</strong><strong>egg.js</strong><strong>mysql</strong><strong>redis</strong>。
						<br>
						<header>个人工作：</header>小程序：整理所有产品流程、封装 request 公共函数、开发微信支付、登录、首页等页面；
						<br>
						后端：初始后端项目框架，日志分段、请求日志记录中间件、微信支付、小程序登录等业务接口；
						<br>
						管理端：开发订单管理页面;
						<br>
						上线：上线小程序和管理端，配置<strong>https</strong>;`,
					},
					{
						head: {
							time: '2018.11 - 2018.12',
							title: '水果配送管理端',
							link: { name: '团队项目' },
						},
						detail: `<header>项目简介：</header>该系统是用来展示呦呦校园小程序中信息数据展示和管理功能。
						用到的技术有<strong>antdesign</strong>和<strong>eggjs</strong>框架。
						<br>
						<header>个人工作：</header>整理管理端产品流程。前端开发管理员登录、水果管理等页面，后端开发管理员添加、登录、删除等接口`,
					},
				],
			},
		},
		{
			tagName: '专业技能',
			item: {
				type: 'listStyle',
				describe: [
					`了解一些关于<strong>计算机网络</strong><strong>数据结构</strong>和<strong>算法</strong>的基础知识`,
					`能熟练使用<strong>HTML</strong><strong>JavaScript</strong>，能够使用<strong>CSS</strong>完成平时开发`,
					`能使用<strong>git</strong>工具进行团队协作开发`,
					`能够熟练使用<strong>react</strong><strong>redux</strong>进行平时开发，对<strong>react</strong>
					和<strong>redux</strong>实现有一定了解，能够熟练使用<strong>antdesign</strong>库开发管理系统`,
					`知道一些<strong>node</strong>基础知识，能够熟练使用<strong>egg.js</strong>开发后端应用，曾多次使用egg开发商业项目经验，能够使用<strong>mysql</strong><strong>redis</strong>进行平时开发，
					开发后端时注重写<strong>数据库文档</strong>和<strong>接口文档</strong>`,
					// `能使用<strong>webpack</strong>完成平时基本需求，有使用webpack搭建react单页应用的经历`,
					`会一点<strong>Linux操作</strong>，能够将<strong>项目上线</strong>，会使用<strong>nginx</strong>来解决前端页面跨域等问题，能够配置<strong>https</strong>`,
					`对<strong>浏览器知识</strong>和前端<strong>页面性能优化</strong>有一定的了解，平时开发注重<strong>代码可维护性</strong>以及<strong>用户体验</strong>`,
				],
			},
		},
		// {
		// 	tagName: '个人作品',
		// 	item: { 
		// 		type: 'normal',
		// 		describe: [
		// 			{
		// 				head: {
		// 					time: '2018.11',
		// 					title: '个人简历界面',
		// 					link: { name: '个人作品' },
		// 				},
		// 				detail: `<strong>项目简介</strong>该项目用到的技术栈是<strong>react</strong>,
		// 				主要实现的功能通过直接修改配置文件来实现对简历内容的修改以及主题修改。
		// 				<br>
		// 				<strong>项目职责</strong>项目设计和研发。
		// 				主要负责设计简历系统复用性、配置文件的结构以及页面样式，使用<strong>react</strong>开发整个系统`,
		// 			},
		// 		],
		// 	},
		// },
		// {
		// 	tagName: '个人素质',
		// 	item: {
		// 		type: 'listStyle',
		// 		describe: [
		// 			`工作态度认真，有责任心，有很好的团队合作意识`,
		// 			`喜欢新鲜的技术，热爱专研`,
		// 			`性格沉稳，在面对技术难点有着不服输的精神`,
		// 		],
		// 	},
		// },
	],
};
