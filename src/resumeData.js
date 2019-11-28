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
			tagName: ' 实习经历',
			item: {
				type: 'normal',
				describe: [
					{
						head: { 
							time: '2019.6 - 2019.11',
							title: ' 腾讯-PCG',
							link: {
								name: 'IVWEB前端团队',
								href: 'https://ivweb.io/',
							},
						},
						detail: `
							<header>团队介绍：</header>团队主要负责腾讯旗下的now直播、回音、交友、花样、腾讯直播等商业产品开发；
							团队现在有feflow脚手架、aegis错误监控平台、lego组件平台、oci自动发布、fastest代理平台等非商业项目，用于提高tuan的开发效率和稳定性；
							团队技术影响力发展，团队组织开展腾讯TLC开发大会、ivweb社区文章推送等。
							<br>
							<header>个人工作：</header>业务需求：now pc web项目开发、直播助手qq浏览器插件。
							<br>
							技术需求：lego平台pc组件开发、now pc直播间页面部分优化工作、<strong>lego组件效果图获取</strong>、<strong>以图搜图</strong>。
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
							time: '2019.9 - 2019.10',
							title: 'lego组件效果图',
							link: { name: '未开源' },
						},
							detail: `
								<header>项目介绍：</header>本项目基于lego组件平台，目的是收录lego平台组件的所有效果图，作为某些系统的基础，例如：设计稿到网页自动转化、图片搜索组件等项目。
								后期将替换现有的组件demo页面，实现demo排版格式化，同时帮助组件使用者快速使用组件。
								本系统提供两种组件效果图上传的途径：开发配置文件，程序自动获取所有效果；组件管理员手动上传效果图片。
								<br>
								使用的技术栈：react、redux、koa、docker。
								<br>
								<header>个人工作：</header>负责整个系统的设计与实现。项目难点如下：<strong>组件所有效果打包到一个页面</strong><strong>组件效果图获取时机</strong>。
							`,
					},
					{
						head: { 
							time: '2019.9 - 2019.10',
							title: 'lego以图搜图',
							link: { name: '未开源' },
						},
							detail: `
								<header>项目介绍：</header>本项目基于lego组件效果图实现组件查找功能。
								用户在平台上传组件图片或者输入图片地址，平台将所有相似的图片查找出来，展示给用户，用户自行对比，点击搜索结果中的效果图跳转到对应的组件介绍页面。
								该系统用来帮助组件使用者快速寻找组件，提高lego平台组件使用率。
								<br>
								使用的技术栈：react、redux、koa、docker。
								<br>
								<header>个人工作：</header>负责整个系统的设计与实现。项目难点如下：<strong>图片对比算法</strong><strong>搜索性能优化</strong>。
							`,
					},
					{
						head: { 
							time: '2019.5 - 2019.8',
							title: 'NOW PC直播',
							link: { name: 'NOW地址', href: 'https://now.qq.com/pcweb/index.html' },
						},
						detail: `
							<header>项目介绍：</header>本平台是now直播的pc端，用于展示直播间信息、观看直播等功能、信息发送等功能。
							<br>
							使用的技术栈：react、redux。
							<br>
							<header>个人工作：</header>负责平台关注、观看历史、榜单、组件开发等需求。
							项目难点如下：<strong>弹幕性能优化</strong><strong>直播间react组件更新性能优化</strong><strong>气泡组件开发</strong>。
						`,
					},
					{
						head: { 
							time: '2018.2 - 2018.3',
							title: '单点登录系统',
							link: { name: '已下线' },
						},
						detail: `
							<header>项目介绍：</header>团队所有业务系统统一使用统一套登陆系统，实现所有系统保持一致的用户登陆状态。实现的功能有：统一登录、统一登出、团队使用一套用户信息。
							<br>
							使用的技术栈：jquery、egg。
							<br>
							<header>个人工作：</header>负责整个系统的实现。实现难点如下：<strong>跨域页面cookie写入</strong><strong>统一登出</strong><strong>登录成功重定向回业务页面</strong>。
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
					// `能熟练使用<strong>HTML</strong><strong>JavaScript</strong>，能够使用<strong>CSS</strong>完成平时开发`,
					`能够熟练使用<strong>react</strong><strong>redux</strong>进行平时开发，对<strong>react</strong>实现有一定了解。`,
					`能使用<strong>git</strong>工具进行团队协作开发。`,
					`了解一些<strong>node</strong>基础知识，能够熟练使用<strong>koa</strong>开发后端应用，曾多次开发商业项目后端经验。`,
					// `会一点<strong>Linux操作</strong>，能够将<strong>项目上线</strong>，会使用<strong>nginx</strong>来解决前端页面跨域等问题，能够配置<strong>https</strong>`,
					// `对<strong>浏览器相关知识</strong>和前端<strong>页面性能优化</strong>有一定的了解，平时开发注重<strong>代码可维护性</strong>以及<strong>用户体验</strong>`,
					// `了解一些关于计算机网络、数据结构、算法的基础知识`,
				],
			},
		},
	],
};
