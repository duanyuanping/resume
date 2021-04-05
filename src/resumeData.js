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
		github: 'https://github.com/duanyuanping/blog',
	},
	body: [ // 简历主体模板
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
			tagName: '工作经历',
			item: {
				type: 'normal',
				describe: [
					{
						head: { 
							time: '2019.5 - 至今',
							title: ' 腾讯-PCG',
							link: {
								name: 'IVWEB前端团队',
								href: 'https://ivweb.io/',
							},
						},
						detail: `
							<header>团队介绍：</header>团队主要负责腾讯旗下的now直播、回音、交友、花样、腾讯直播等商业项目开发；
							团队现在有feflow脚手架、lego组件平台、fastest代理平台、aegis错误监控平台等非商业项目，用于提高团队的开发效率和项目的线上稳定性；
							团队技术影响力发展，团队组织开展腾讯TLC开发者大会、ivweb社区文章推送等活动。
							<br>
							<header>个人工作：</header>业务需求：now直播商业化开发、now pc开发。
							<br>
							技术需求：feflow项目初始可视化平台、rn动态加载jsbundle、lego组件效果图获取。
						`,
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
							time: '2021.2 - 至今',
							title: 'feflow项目初始化可视化平台',
							link: { name: '未开源' },
						},
							detail: 
								`
									<header>项目介绍：</header>开发者通过可视化平台，选择项目中使用的脚手架、通用模板、工具服务等内容，完成初始化项目工作。项目初始过程在远端服务器完成，不依赖开发者本地环境。
									项目初始以后，开发者可以使用git克隆项目的远程仓库。可视化平台也可以帮助开发者管理项目和快速上线项目。
									<br>
									<header>个人工作：</header>平台后端服务搭建、项目新建初始化。
									<br>
									技术：node、react、nest
								`,
					},
					{
						head: { 
							time: '2020.7 - 2020.12',
							title: 'rn动态化加载jsbundle',
							link: { name: 'now app' },
						},
							detail: 
								`
									<header>项目介绍：</header>项目发布的时候，将rn项目的jsbundle资源上传到服务器。app首次加载rn页面的时候，直接请求线上<strong>jsbundle直出</strong>服务，
									直出服务将当前页面首屏数据和jsbundle代码资源响应给app，客户端拿到jsbundle资源，将页面解析渲染出来。
									本项目还做了rn项目的监控能力，用来<strong>监控rn代码错误</strong>、<strong>未捕获的promise reject</strong>、<strong>cgi请求错误</strong>等功能。
									<br>
									<header>个人工作：</header>rn jsbundle直出、代码运行监控、单例容器错误上报分离。
									<br>
									技术：node、react、rn
								`,
					},
					{
						head: { 
							time: '2019.9 - 2019.10',
							title: '组件效果图自动获取系统',
							link: { name: '未开源' },
						},
							detail: 
								`
									<header>项目介绍：</header>本系统用于获取组件仓库中组件可能的效果图。开发者配置组件调用传参文件，分支合并到master时，程序根据传参文件自动生成组件的效果。
									程序自动截取组件的所有效果图，经过去重、压缩等一系列处理后，存入静态资源服务。组件平台将组件效果图都展示出来，同时提供产生该效果的组件调用传参，帮助开发者快速接入当前组件。
									<br>
									<header>个人工作：</header>组件效果页面构建上线、组件效果图获取、效果图去重等任务。
									<br>
									技术：react、koa
								`,
					},
					// {
					// 	head: { 
					// 		time: '2018.2 - 2018.3',
					// 		title: '单点登录系统',
					// 		link: { name: '已下线' },
					// 	},
					// 	detail: `
					// 		<header>项目介绍：</header>学校团队内存在多套自研系统，所有业务系统使用一套登录系统，让所有系统用户登陆状态保持一致。实现的功能有：统一登录、统一登出、使用一套用户信息。
					// 		<br>
					// 		<header>个人工作：</header>负责整个系统的实现。
					// 		<br>
					// 		项目难点：<strong>跨域页面cookie写入</strong><strong>统一登出</strong><strong>登录成功重定向回业务页面</strong>。
					// 		<br>
					// 		技术：jquery、egg。
					// 	`,
					// },	
				],
			},
		},
		{
			tagName: '专业技能',
			item: {
				type: 'listStyle',
				describe: [
					// `能熟练使用<strong>HTML</strong><strong>JavaScript</strong>，能够使用<strong>CSS</strong>完成平时开发`,
					`能够熟练使用<strong>react</strong><strong>redux</strong>进行平时开发，对<strong>react</strong>有一定的了解。`,
					`能够熟练使用<strong>node</strong>开发后端应用，曾多次开发node项目。`,
					// `会一点<strong>Linux操作</strong>，能够将<strong>项目上线</strong>，会使用<strong>nginx</strong>来解决前端页面跨域等问题，能够配置<strong>https</strong>`,
					`对<strong>浏览器相关知识</strong>和<strong>前端工程化</strong>有一定的了解，平时开发注重<strong>代码可维护性</strong>以及<strong>用户体验</strong>。`,
					// `能够使用<strong>git</strong>工具进行团队协作开发。`,
					`了解一些计算机网络、数据结构、算法等基础知识。`,
				],
			},
		},
	],
};
