(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{448:function(t,s,n){"use strict";n.r(s);var e=n(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("基于本仓库可快速创建你自己的文档网站。\n"),s("a",{attrs:{href:"https://prismjs.com/#supported-languages",target:"_blank",rel:"noopener noreferrer"}},[t._v("高亮语法支持列表"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/PrismJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrismJS"),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.com/shikijs/shiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shiki"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("编译时自动帮你配置菜单栏和侧边栏，最多三层目录结构。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("非常多的热心开发者开源主题"),s("a",{attrs:{href:"https://github.com/search?q=vuepress-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果觉得使用"),s("a",{attrs:{href:"https://v2.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),s("a",{attrs:{href:"https://vitepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vitepress"),s("OutboundLink")],1),t._v("不便，\n可使用静态博客写作客户端"),s("a",{attrs:{href:"https://github.com/getgridea/gridea",target:"_blank",rel:"noopener noreferrer"}},[t._v("gridea"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方标准目录结构"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n│  .gitignore           git忽略文件\n│  package-lock.json    NPM依赖配置文件\n│  yarn.lock            yarn依赖配置文件\n│  package.json         项目配置文件\n│  README.md            首页md文件\n│  \n├─.github               GitHub配置目录\n│  └─workflows          Actions工作流目录\n│          deloy.yml    项目的Actions部署配置\n│          \n├─.vuepress             用于存放VuePress的配置、组件、静态资源等。\n│  │  config.js         VuePress配置\n│  │  nav.js            除创建的目录之外，自定义添加的导航栏\n│  │  push.js           自定义推送脚本\n│  │  utils.js          侧边栏和菜单栏自动配置工具\n│  │  \n│  ├─styles             用于存放样式相关的文件\n│  │  │  \n│  │  └─index.styl      自定义全局样式文件\n│  │  \n│  ├─public             静态资源目录\n│  │  │  CNAME          CNAME文件指定域名，防止发布时被清空\n│  │  │  manifest.json  5+App（HTML5 Plus移动App）的配置文件\n│  │  │  static.json    heroku使用buildpack静态部署配置文件\n│  │  │  \n│  │  ├─assets          css/img/js等默认的存放路径\n│  │  │   │  \n│  │  │   └─js          自定义js文件存放目录\n│  │  │  \n│  │  ├─files           可直接访问并下载的文件存放目录\n│  │  │      \n│  │  └─images          存放所有文档的图片目录\n│  │      │  \n│  │      └─icons       存放图标目录\n│  │              \n│  └─theme              主题存放目录\n│              \n├─docs                  编译后的静态资源文件输出目录\n│\n│\n......其他自己的md文档或文件夹，都会打包到docs文件夹下，md文件会编译成html\n")])])]),s("p",[s("strong",[t._v("也就是你只需要遵从以上目录结构来修改你自己的文档即可使用。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("配置文件中的注释文字部分，请结合"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress官方文档"),s("OutboundLink")],1),t._v("一定理解其意义再修改配置！")])]),t._v(" "),s("h2",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitpod.io/#github.com/bajins/notes-vuepress",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先克隆本仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/bajins/notes-vuepress.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留上面目录结构列出的文件和文件夹，其他的全部删除")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用前请自行安装Node.js环境")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装项目的全部依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这时创建并书写你自己的md文档")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始运行开发环境，然后访问窗口中的路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改.vuepress/public/CNAME中的域名")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到GitHub请见：项目的Actions部署配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Actions教程：https://www.bajins.com/IDE/Git%E6%9C%8D%E5%8A%A1.html#actions")]),t._v("\n\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("请确保你的 Node.js 版本 >= 8.6。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);