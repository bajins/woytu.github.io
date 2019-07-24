(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{358:function(a,s,t){"use strict";t.r(s);var r=t(2),e=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql用户管理","aria-hidden":"true"}},[a._v("#")]),a._v(" MySQL用户管理")]),a._v(" "),t("h1",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#GRANT%E5%91%BD%E4%BB%A4%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7"}},[a._v("GRANT命令创建用户")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AE%89%E8%A3%85MySQL%E5%90%8E%E4%BF%AE%E6%94%B9%E5%AF%86%E7%A0%81"}},[a._v("安装MySQL后修改密码")])])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"查看用户的授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看用户的授权","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看用户的授权")]),a._v(" "),t("h4",{attrs:{id:"命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看root用户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" GRANTS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看指定用户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" GRANTS "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FOR")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'host'")]),a._v("\n")])])]),t("h4",{attrs:{id:"说明："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明：","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明：")]),a._v(" "),t("h5",{attrs:{id:"username——将要创建的用户名；"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username——将要创建的用户名；","aria-hidden":"true"}},[a._v("#")]),a._v(" username——将要创建的用户名；")]),a._v(" "),t("h5",{attrs:{id:"host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；","aria-hidden":"true"}},[a._v("#")]),a._v(' host——指定该用户在哪个主机上可以登录，"localhost"指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将"localhost"改为"%"，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；')]),a._v(" "),t("h2",{attrs:{id:"一、创建用户：以root用户登录到数据库后进行用户创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、创建用户：以root用户登录到数据库后进行用户创建","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、创建用户：以root用户登录到数据库后进行用户创建")]),a._v(" "),t("h4",{attrs:{id:"命令：-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'host'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"说明：-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明：-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明：")]),a._v(" "),t("h5",{attrs:{id:"username——将要创建的用户名；-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username——将要创建的用户名；-2","aria-hidden":"true"}},[a._v("#")]),a._v(" username——将要创建的用户名；")]),a._v(" "),t("h5",{attrs:{id:"host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；-2","aria-hidden":"true"}},[a._v("#")]),a._v(' host——指定该用户在哪个主机上可以登录，"localhost"指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将"localhost"改为"%"，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；')]),a._v(" "),t("h5",{attrs:{id:"password——该用户的登录密码，密码可以为空，若为空则该用户可以不需要密码登录服务器。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password——该用户的登录密码，密码可以为空，若为空则该用户可以不需要密码登录服务器。","aria-hidden":"true"}},[a._v("#")]),a._v(" password——该用户的登录密码，密码可以为空，若为空则该用户可以不需要密码登录服务器。")]),a._v(" "),t("h4",{attrs:{id:"例如："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例如：","aria-hidden":"true"}},[a._v("#")]),a._v(" 例如：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建本地登录账户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test_admin'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建所有主机可登录账户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test_admin2'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建只读账号")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'reader'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 增删改查账号")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'writer'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),a._v("\n")])])]),t("h2",{attrs:{id:"二、授权：以root用户登录到数据库后进行授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、授权：以root用户登录到数据库后进行授权","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、授权：以root用户登录到数据库后进行授权")]),a._v(" "),t("h4",{attrs:{id:"命令：-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" databasename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tablename "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'host'")]),a._v("\n")])])]),t("h4",{attrs:{id:"说明：-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明：-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明：")]),a._v(" "),t("h5",{attrs:{id:"privileges——用户的操作权限，如insert-delete-update-select等。如果授予所有权限则使用all。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privileges——用户的操作权限，如insert-delete-update-select等。如果授予所有权限则使用all。","aria-hidden":"true"}},[a._v("#")]),a._v(" privileges——用户的操作权限，如INSERT,DELETE,UPDATE,SELECT等。如果授予所有权限则使用ALL。")]),a._v(" "),t("h5",{attrs:{id:"databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用-表示，例如"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用-表示，例如","aria-hidden":"true"}},[a._v("#")]),a._v(" databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用*表示，例如*.*")]),a._v(" "),t("h4",{attrs:{id:"例如：-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例如：-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 例如：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test_admin2'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 刷新权限")]),a._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"三、撤销用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、撤销用户权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、撤销用户权限")]),a._v(" "),t("h4",{attrs:{id:"命令：-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REVOKE")]),a._v(" privilege "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" databasename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tablename "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'host'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"说明：-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明：-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明：")]),a._v(" "),t("h5",{attrs:{id:"privileges——用户的操作权限，如insert-delete-update-select等。如果授予所有权限则使用all。-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privileges——用户的操作权限，如insert-delete-update-select等。如果授予所有权限则使用all。-2","aria-hidden":"true"}},[a._v("#")]),a._v(" privileges——用户的操作权限，如INSERT,DELETE,UPDATE,SELECT等。如果授予所有权限则使用ALL。")]),a._v(" "),t("h5",{attrs:{id:"databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用-表示，例如-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用-表示，例如-2","aria-hidden":"true"}},[a._v("#")]),a._v(" databasename——数据库名称。tablename——表名。如果要给该用户授予对所有数据库和表的相应操作权限则可用*表示，例如*.*")]),a._v(" "),t("h4",{attrs:{id:"例如：-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例如：-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 例如：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REVOKE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" test_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test_min'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"四、删除账户及权限："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、删除账户及权限：","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、删除账户及权限：")]),a._v(" "),t("h4",{attrs:{id:"命令：-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'username'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'host'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"说明：-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明：-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明：")]),a._v(" "),t("h5",{attrs:{id:"username——将要创建的用户名；-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username——将要创建的用户名；-3","aria-hidden":"true"}},[a._v("#")]),a._v(" username——将要创建的用户名；")]),a._v(" "),t("h5",{attrs:{id:"host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host——指定该用户在哪个主机上可以登录，-localhost-指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将-localhost-改为-，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；-3","aria-hidden":"true"}},[a._v("#")]),a._v(' host——指定该用户在哪个主机上可以登录，"localhost"指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录，将"localhost"改为"%"，表示在任何一台电脑上都可以登录；如果替换成ip，则为只有对应的ip可以连接；')]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"grant命令创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant命令创建用户","aria-hidden":"true"}},[a._v("#")]),a._v(" GRANT命令创建用户")]),a._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+当数据库存在用户的时候GRANT会对用户进行授权，但当数据库不存在该用户的时候，就会创建相应的用户并进行授权。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ WITH GRANT OPTION 这个选项表示该用户可以将自己拥有的权限授权给别人")]),a._v("\n")])])]),t("h4",{attrs:{id:"创建用户并权限："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户并权限：","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建用户并权限：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'密码'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("OPTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"最后，刷新mysql的权限相关表："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后，刷新mysql的权限相关表：","aria-hidden":"true"}},[a._v("#")]),a._v(" 最后，刷新MySQL的权限相关表：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"重启服务，再用新密码登录即可："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启服务，再用新密码登录即可：","aria-hidden":"true"}},[a._v("#")]),a._v(" 重启服务，再用新密码登录即可：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl restart mysqld\n")])])]),t("h4",{attrs:{id:"放开mysql防火墙端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#放开mysql防火墙端口","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("router-link",{attrs:{to:"/VPS/linux命令.html#防火墙"}},[a._v("放开MySQL防火墙端口")])],1),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"安装mysql后修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql后修改密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装MySQL后修改密码")]),a._v(" "),t("h3",{attrs:{id:"使用默认密码进入修改密码："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用默认密码进入修改密码：","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用默认密码进入修改密码：")]),a._v(" "),t("h4",{attrs:{id:"查看mysql下root账号的默认密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql下root账号的默认密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看mysql下root账号的默认密码")]),a._v(" "),t("h5",{attrs:{id:"mysql5-7安装完成之后，在-var-log-mysqld-log文件中给root生成了一个默认密码。通过下面的方式找到root默认密码，然后登录mysql。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql5-7安装完成之后，在-var-log-mysqld-log文件中给root生成了一个默认密码。通过下面的方式找到root默认密码，然后登录mysql。","aria-hidden":"true"}},[a._v("#")]),a._v(" mysql5.7安装完成之后，在/var/log/mysqld.log文件中给root生成了一个默认密码。通过下面的方式找到root默认密码，然后登录mysql。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'temporary password'")]),a._v(" /var/log/mysqld.log\n")])])]),t("h5",{attrs:{id:"其中root-localhost-后面部分就是默认密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其中root-localhost-后面部分就是默认密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 其中root@localhost:后面部分就是默认密码")]),a._v(" "),t("h4",{attrs:{id:"执行修改密码sql命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行修改密码sql命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行修改密码SQL命令")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'新密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"如果出现以下错误，就说明密码强度不够："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果出现以下错误，就说明密码强度不够：","aria-hidden":"true"}},[a._v("#")]),a._v(" 如果出现以下错误，就说明密码强度不够：")]),a._v(" "),t("blockquote",[t("p",[a._v("ERROR 1819 (HY000): Your password does not satisfy the current policy requirements")])]),a._v(" "),t("h4",{attrs:{id:"需要修改以下两个参数："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要修改以下两个参数：","aria-hidden":"true"}},[a._v("#")]),a._v(" 需要修改以下两个参数：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("global")]),a._v(" validate_password_policy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("global")]),a._v(" validate_password_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("自己想要的密码长度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"再次执行修改密码sql命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#再次执行修改密码sql命令：","aria-hidden":"true"}},[a._v("#")]),a._v(" 再次执行修改密码SQL命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'新密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"最后，刷新mysql的权限相关表：-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后，刷新mysql的权限相关表：-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 最后，刷新MySQL的权限相关表：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("FLUSH PRIVILEGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"修改配置修改密码："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置修改密码：","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改配置修改密码：")]),a._v(" "),t("h4",{attrs:{id:"_1、修改-etc-my-cnf，在-mysqld-小节下添加一行-修改密码完成后需要删除此行："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、修改-etc-my-cnf，在-mysqld-小节下添加一行-修改密码完成后需要删除此行：","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、修改/etc/my.cnf，在 [mysqld] 小节下添加一行,修改密码完成后需要删除此行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("skip-grant-tables"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n")])])]),t("h5",{attrs:{id:"这一行配置让-mysqld-启动时不对密码进行验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#这一行配置让-mysqld-启动时不对密码进行验证","aria-hidden":"true"}},[a._v("#")]),a._v(" 这一行配置让 mysqld 启动时不对密码进行验证")]),a._v(" "),t("h4",{attrs:{id:"_2、重启mysqld-服务："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、重启mysqld-服务：","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、重启mysqld 服务：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl restart mysqld\n")])])]),t("h4",{attrs:{id:"_3、使用-root-用户登录到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-root-用户登录到","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、使用 root 用户登录到")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql -uroot\n")])])]),t("h4",{attrs:{id:"_4、切换到mysql数据库，更新-user-表："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、切换到mysql数据库，更新-user-表：","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、切换到mysql数据库，更新 user 表：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("update")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" authentication_string "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'新密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("password_expired "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'N'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" password_last_changed "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h5",{attrs:{id:"在之前的版本中，密码字段的字段名是-password，5-7版本改为了-authentication-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在之前的版本中，密码字段的字段名是-password，5-7版本改为了-authentication-string","aria-hidden":"true"}},[a._v("#")]),a._v(" 在之前的版本中，密码字段的字段名是 password，5.7版本改为了 authentication_string")]),a._v(" "),t("h4",{attrs:{id:"使用set-password-for-‘用户名’-’主机名’-password-‘密码’-："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用set-password-for-‘用户名’-’主机名’-password-‘密码’-：","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用set password for ‘用户名’@’主机名’=password(‘密码’)：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"或者使用update修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#或者使用update修改","aria-hidden":"true"}},[a._v("#")]),a._v(" 或者使用update修改:")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("update")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" password"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);