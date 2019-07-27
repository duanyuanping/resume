global.resumeData = {
	// theme: '#409eff', // 简历主色调
	theme: '#2577e3',
	head: { // 简历头部
		name: '段远平',
		position: 'web前端开发工程师',
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
			tagName: ' 实习经历',
			item: {
				type: 'normal',
				describe: [
					{
						head: { 
							time: '2019.5 - 2019.8.30',
							title: ' 腾讯-PCG',
							link: { name: 'IVWEB前端团队' },
						},
						detail: `<header>团队介绍：</header>团队主要负责腾讯旗下的now直播、回音、交友、花样、腾讯直播等商业产品开发；
						团队大力发展前端工程化和自动化，其中包括有feflow项目脚手架、oci发布工具、Aegist错误监控平台、lego组件平台等等这些项目；
						团队技术影响力发展，组织开展腾讯TLC开发大会、团队社区优质文章推送等。
						<br>
						<header>二组成员：</header>主要负责NOW PC WEB项目开发、lego平台pc组件开发、now pc中部分优化页面和功能性能优化任务、每日项目错误上报日志处理任务。`,
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
							time: '2019.5 - 2019.8',
							title: 'NOW PC直播',
							link: { name: 'NOW地址', href: 'https://now.qq.com/pcweb/index.html' },
						},
							detail: `<header>项目简介：</header>
						<br>
						<header>个人工作：</header>`,
					},
					{
						head: { 
							time: '2018.8 - 2018.9',
							title: '北京水上运动线上销售服务',
							link: { name: '微信小程序：北京水上运动' },
						},
							detail: `<header>项目简介：</header>该小程序用于线上支持预约服务。消费者可以通过该小程序预约华仁启智公司的团建活动、购买会员服务和获取最近活动动态等信息。
							该项目用到的技术栈有<strong>原生微信小程序</strong><strong>antdesign</strong><strong>egg.js</strong>、mysql、redis。
						<br>
						<header>个人工作：</header>小程序：整理所有<strong>产品流程</strong><strong>封装 request 公共函数</strong>、开发<strong>微信支付</strong><strong>登录</strong><strong>首页</strong>等页面；
						<br>
						后端：初始后端项目框架，<strong>日志分段</strong><strong>请求日志记录中间件</strong><strong>微信支付</strong><strong>小程序登录</strong>等业务接口；
						<br>
						管理端：开发订单管理、项目管理、用户管理等页面;
						<br>
						上线：上线小程序和管理端，配置<strong>https</strong>;`,
					},
					{
						head: { 
							time: '2018.2 - 2018.3',
							title: '单点登录系统',
							link: { name: '后端服务' },
						},
						detail: `<header>项目简介：</header>该系统用于将团队中多个系统中的用户合并，让所有系统使用同一套用户。
						用户使用本团队系统时只需要在一个系统中登录以后，用户在其他系统中处于登录状态，当某一个系统退出后，其他系统也变成未登录状态。
						该系统用到的技术栈有<strong>egg.js</strong>、mysql、redis 和<strong>jquery</strong>。
						<br>
						<header>个人工作：</header>负责整个系统的实现，在开发过程中主要实现了以下功能<strong>跨域页面 cookie 写入</strong>
						<strong>接入登录中心的中间件</strong><strong>业务系统保存用户登录信息</strong>
						<strong>统一登出</strong><strong>登录成功重定向回业务页面</strong>
						`,
					},	
				],
			},
		},
		{
			tagName: '专业技能',
			item: {
				type: 'listStyle',
				describe: [
					`能熟练使用<strong>HTML</strong><strong>JavaScript</strong>，能够使用<strong>CSS</strong>完成平时开发`,
					`能使用<strong>git</strong>工具进行团队协作开发`,
					`能够熟练使用<strong>react</strong><strong>redux</strong>进行平时开发，对<strong>react</strong>
					实现有一定了解，能够熟练使用<strong>antdesign</strong>库开发管理系统`,
					`了解一些<strong>node</strong>基础知识，能够熟练使用<strong>egg.js</strong>开发后端应用，曾多次使用egg开发商业项目经验，能够简单的使用mysql、redis进行平时开发，
					开发后端时注重写<strong>数据库文档</strong>和<strong>接口文档</strong>`,
					// `能使用<strong>webpack</strong>完成平时基本需求，有使用webpack搭建react单页应用的经历`,
					`会一点<strong>Linux操作</strong>，能够将<strong>项目上线</strong>，会使用<strong>nginx</strong>来解决前端页面跨域等问题，能够配置<strong>https</strong>`,
					`对<strong>浏览器相关知识</strong>和前端<strong>页面性能优化</strong>有一定的了解，平时开发注重<strong>代码可维护性</strong>以及<strong>用户体验</strong>`,
					`了解一些关于计算机网络、数据结构、算法的基础知识`,
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
