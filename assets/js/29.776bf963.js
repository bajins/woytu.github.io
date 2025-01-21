(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{384:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql安装配置"}},[s._v("#")]),s._v(" MySQL安装配置")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#flag"}},[s._v("Flag")])]),e("li",[e("a",{attrs:{href:"#windows版安装"}},[s._v("Windows版安装")])]),e("li",[e("a",{attrs:{href:"#centos安装"}},[s._v("CentOS安装")]),e("ul",[e("li",[e("a",{attrs:{href:"#yum安装"}},[s._v("yum安装")])]),e("li",[e("a",{attrs:{href:"#编译安装"}},[s._v("编译安装")])])])]),e("li",[e("a",{attrs:{href:"#配置"}},[s._v("配置")]),e("ul",[e("li",[e("a",{attrs:{href:"#yum安装配置"}},[s._v("yum安装配置")])]),e("li",[e("a",{attrs:{href:"#宝塔面板安装配置"}},[s._v("宝塔面板安装配置")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"flag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[s._v("#")]),s._v(" Flag")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/mysql",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/mysql"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://dev.mysql.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/downloads"),e("OutboundLink")],1)])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000044667101",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何选择适合的 MySQL Connector/J 版本"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/zxeao/p/16921457.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL JDBC驱动版本与数据库版本的对应关系及注意事项"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/xunxue1523/article/details/105524758",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql-connector-java与mysql以及JDK的对应版本"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://linuxize.com/post/how-to-install-mysql-on-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何在 Ubuntu 20.04 上安装 MySQL"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/cnwcl/p/13785655.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu20 使用命令安装 mysql"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000039203507",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu20 安装和配置mysql8.0.23"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/9e69e0e38665",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu20安装mysql8"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/lduzhenlin/article/details/113243476",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu20.04安装mysql8.0"),e("OutboundLink")],1)])]),s._v(" "),e("blockquote",[e("p",[s._v("在MySQL 8.0上，"),e("code",[s._v("auth_socket")]),s._v("默认情况下，root用户通过插件进行身份验证。该auth_socket插件对localhost通过Unix套接字文件\n从进行连接的用户进行身份验证。这意味着您不能通过提供密码来以root用户身份进行身份验证。")])]),s._v(" "),e("h2",{attrs:{id:"windows版安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows版安装"}},[s._v("#")]),s._v(" Windows版安装")]),s._v(" "),e("blockquote",[e("p",[s._v("这里是介绍免安装版的Mysql")])]),s._v(" "),e("ol",[e("li",[s._v("安装服务："),e("code",[s._v("mysqld --install")]),s._v(" 如果执行错误需要安装C++运行库")]),s._v(" "),e("li",[s._v("初始化："),e("code",[s._v("mysqld --initialize --console")]),s._v(" 会产生一个随机密码\n"),e("ul",[e("li",[e("code",[s._v("mysqld –initialize-insecure")]),s._v(" 初始化数据库，并设置默认root密码为空")]),s._v(" "),e("li",[e("code",[s._v('mysqladmin -u root password 密码";')]),s._v(" 创建root用户的密码")])])]),s._v(" "),e("li",[s._v("开启服务："),e("code",[s._v("net start mysql")])]),s._v(" "),e("li",[s._v("关闭服务："),e("code",[s._v("net stop mysql")])]),s._v(" "),e("li",[s._v("登录mysql："),e("code",[s._v("mysql -u root -p")])]),s._v(" "),e("li",[s._v("修改密码："),e("code",[s._v("alter user 'root'@'localhost' identified by '密码';")])]),s._v(" "),e("li",[s._v("标记删除mysql服务："),e("code",[s._v("sc delete mysql")])])]),s._v(" "),e("h2",{attrs:{id:"centos安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos安装"}},[s._v("#")]),s._v(" CentOS安装")]),s._v(" "),e("h3",{attrs:{id:"yum安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum安装"}},[s._v("#")]),s._v(" yum安装")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.imzhengfei.com/centos-7-an-zhuang-pei-zhi-mysql",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.imzhengfei.com/centos-7-an-zhuang-pei-zhi-mysql/"),e("OutboundLink")],1)])]),s._v(" "),e("blockquote",[e("p",[s._v("首先"),e("code",[s._v("CentOS7")]),s._v("默认已经不支持"),e("code",[s._v("mysql")]),s._v("，因为收费了你懂得，所以内部集成了"),e("code",[s._v("mariadb")]),s._v("，\n而安装"),e("code",[s._v("mysql")]),s._v("的话会和"),e("code",[s._v("mariadb")]),s._v("的文件冲突，所以需要先卸载掉"),e("code",[s._v("mariadb")]),s._v("，以下为卸载"),e("code",[s._v("mariadb")]),s._v("，安装"),e("code",[s._v("mysql")]),s._v("的步骤。")])]),s._v(" "),e("p",[e("strong",[s._v("卸载")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看软件包")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mariadb\\|mysql"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --nodeps强制卸载")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nodeps")]),s._v(" mariadb-libs-5.5.56-2.el7.x86_64\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测系统是否存在mysql")]),s._v("\nyum list installed "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除mysql依赖项")]),s._v("\nyum remove "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" mysql mysql-server mysql-libs mysql-server\n")])])]),e("ul",[e("li",[s._v("查找残留目录")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" mysql\n")])])]),e("p",[e("strong",[s._v("安装依赖")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libaio glibc\n")])])]),e("p",[e("strong",[s._v("下载yum源")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MySQL 8.0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm\n")])])]),e("p",[e("strong",[s._v("安装yum源")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" localinstall mysql80-community-release-el7-1.noarch.rpm\n")])])]),e("p",[e("strong",[s._v("查看所有版本")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum repolist all "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),e("blockquote",[e("p",[s._v("可以看到这里默认启用了"),e("code",[s._v("MySQL 8.0 Community Server")]),s._v("，而我们需要安装的是"),e("code",[s._v("MySQL 5.7 Community Server")])])]),s._v(" "),e("p",[e("strong",[s._v("修改源设置")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/yum.repos.d/mysql-community.repo\n")])])]),e("ul",[e("li",[s._v("找到mysql57-community节点")])]),s._v(" "),e("blockquote",[e("p",[s._v("将"),e("code",[s._v("enabled=0")]),s._v("改成"),e("code",[s._v("enabled=1")])])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql57-community"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(" Community Server\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://repo.mysql.com/yum/mysql-5.7-community/el/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n")])])]),e("ul",[e("li",[s._v("找到"),e("code",[s._v("mysql80-community")]),s._v("节点")])]),s._v(" "),e("blockquote",[e("p",[s._v("将"),e("code",[s._v("enabled=1")]),s._v("改成"),e("code",[s._v("enabled=0")])])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql80-community"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(" Community Server\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://repo.mysql.com/yum/mysql-8.0-community/el/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),e("ul",[e("li",[s._v("或者使用命令")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用MySQL版本")]),s._v("\nyum-config-manager "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--disable")]),s._v(" mysql80-community\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用MySQL版本")]),s._v("\nyum-config-manager "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--enable")]),s._v(" mysql57-community\n")])])]),e("p",[e("strong",[s._v("查看默认启用版本")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum repolist enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),e("p",[e("strong",[s._v("安装")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])])]),e("p",[e("strong",[s._v("查看安装版本")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysqld "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n")])])]),e("h3",{attrs:{id:"编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),e("p",[e("strong",[s._v("下载")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/downloads/mysql/5.7.html#downloads"),e("OutboundLink")],1)])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/MySQL-glibc%E4%B8%8B%E8%BD%BD.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("解压")])]),s._v(" "),e("blockquote",[e("p",[s._v("建议：不要安装到其它目录，否则数据库初始化的时候会报"),e("code",[s._v("cannot change dir")]),s._v("的错")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/mysql\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-5.7.22-linux-glibc2.12-x86_64 mysql\n")])])]),e("p",[e("strong",[s._v("创建用户组")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("group "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" mysql\n")])])]),e("p",[e("strong",[s._v("创建用户")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("user "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" mysql mysql\n")])])]),e("ul",[e("li",[e("p",[s._v("为了安全性，给mysql数据库创建专有用户，该用户只能访问mysql目录，不能访问系统其它目录")])]),s._v(" "),e("li",[e("p",[s._v("另外不建议直接用root初始化mysql，否则连接mysql时会报错：")])])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v('[ERROR] Fatal error: Please read "Security" section of the manual to find out how to run mysqld as root!')])])]),s._v(" "),e("p",[e("strong",[s._v("创建data目录")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])])]),e("p",[e("strong",[s._v("指定用户和用户组")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql mysql/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql mysql/\n")])])]),e("blockquote",[e("p",[e("code",[s._v("-R")]),s._v("包含目录下所有和目录和文件")])]),s._v(" "),e("p",[e("strong",[s._v("初始化")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql/bin\n\n./mysqld "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--basedir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--datadir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data/ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lc_messages_dir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/share "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lc_messages")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("en_US\n")])])]),e("blockquote",[e("p",[s._v("记住生成的临时密码,如果忘记密码或者想重新初始化，可以先将"),e("code",[s._v("mysql/data")]),s._v("目录中文件删除，然后再执行初始化命令")])]),s._v(" "),e("p",[e("strong",[s._v("启动")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql/bin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n./mysqld_safe "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),e("p",[e("strong",[s._v("设为开机启动")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql/support-files/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mysql.server /etc/init.d/mysql\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/init.d/mysql\n")])])]),e("blockquote",[e("p",[s._v("将mysql目录填上")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("basedir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data/\n")])])]),e("p",[e("strong",[s._v("授权")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/init.d/mysql\n")])])]),e("p",[e("strong",[s._v("添加开机启动")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--add")]),s._v(" mysql\n")])])]),e("p",[e("strong",[s._v("service启动")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql stop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n")])])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("ul",[e("li",[s._v("5.7动态参数 "),e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/dynamic-system-variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("5.7 Dynamic System Variables"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("8.0动态参数 "),e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/dynamic-system-variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("8.0 Dynamic System Variables"),e("OutboundLink")],1),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("code",[s._v("set persist")]),s._v(" 修改并持久化动态参数")]),s._v(" "),e("li",[e("code",[s._v("set persist_only")]),s._v(" 持久化静态参数")])])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("服务器系统变量 - 官网"),e("OutboundLink")],1)])]),s._v(" "),e("blockquote",[e("p",[s._v("从5.7.17后mysql就没有默认的"),e("code",[s._v("my_default.cnf")]),s._v("文件，需要手动创建")])]),s._v(" "),e("blockquote",[e("p",[s._v("windows在mysql目录下创建一个ini或cnf配置文件")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])])]),e("blockquote",[e("p",[s._v("按"),e("code",[s._v("i")]),s._v("后输入以下内容")])]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[mysqld]\n# sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES \n\n# 一般配置选项\nbasedir = /usr/local/mysql/\ndatadir = /usr/local/mysql/data\nport = 3306\ncharacter-set-server = utf8\nexplicit_defaults_for_timestamp = true\n# socket = /var/run/mysqld/mysqld.sock\n# 0：区分大小写，1：不区分大小写\nlower_case_table_names =1\n\n#下面是可选项，要不要都行，如果出现启动错误，则全部注释掉，\n#保留最基本的配置选项，然后尝试添加某些配置项后启动，检测配置项是否有误\nback_log = 300\nmax_connections = 3000\nmax_connect_errors = 50\ntable_open_cache = 4096\nmax_allowed_packet = 32M\n#binlog_cache_size = 4M\n\nmax_heap_table_size = 128M\nread_rnd_buffer_size = 16M\nsort_buffer_size = 16M\njoin_buffer_size = 16M\nthread_cache_size = 16\nquery_cache_size = 128M\nquery_cache_limit = 4M\nft_min_word_len = 8\n\n# 默认开启事件调度器ON或者是1\nevent_scheduler=ON\nthread_stack = 512K\n#默认是REPEATABLE-READ，改成读已提交\ntransaction-isolation=READ-COMMITTED\n#永久设置手动提交事务\n#autocommit=0\ntmp_table_size = 128M\n#log-bin=mysql-bin\nlong_query_time = 6\n\nserver_id=1\n\ninnodb_buffer_pool_size = 1G\ninnodb_thread_concurrency = 16\ninnodb_log_buffer_size = 16M\n\ninnodb_log_file_size = 512M\ninnodb_log_files_in_group = 3\ninnodb_max_dirty_pages_pct = 90\ninnodb_lock_wait_timeout = 120\ninnodb_file_per_table = on\n\n[mysqldump]\nquick\nmax_allowed_packet = 32M\n\n[mysql]\nno-auto-rehash\ndefault-character-set=utf8\nsafe-updates\n\n[myisamchk]\nkey_buffer = 16M\nsort_buffer_size = 16M\nread_buffer = 8M\nwrite_buffer = 8M\n\n[mysqlhotcopy]\ninteractive-timeout\n\n[mysqld_safe]\nopen-files-limit = 8192\n\n")])])]),e("h3",{attrs:{id:"yum安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum安装配置"}},[s._v("#")]),s._v(" yum安装配置")]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[client]\n#password   = your_password\nport        = 3306\nsocket      = /var/lib/mysql/mysql.sock\n\n[mysqld]\nport        = 3306\nsocket      = /var/lib/mysql/mysql.sock\ndatadir = /var/lib/mysql\nsymbolic-links= 0\nlog-error= /var/log/mysqld.log\npid-file= /var/run/mysqld/mysqld.pid\nskip-external-locking\nperformance_schema_max_table_instances=400\ntable_definition_cache=400\nkey_buffer_size = 32M\nmax_allowed_packet = 100G\ntable_open_cache = 128\nsort_buffer_size = 768K\nnet_buffer_length = 8K\nread_buffer_size = 768K\nread_rnd_buffer_size = 512K\nmyisam_sort_buffer_size = 8M\nthread_cache_size = 16\nquery_cache_size = 16M\ntmp_table_size = 32M\nsql-mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\nexplicit_defaults_for_timestamp = true\n#skip-networking\nmax_connections = 500\nmax_connect_errors = 100\nopen_files_limit = 65535\n\n# 0：区分大小写，1：不区分大小写\nlower_case_table_names =1\n# 默认开启事件调度器ON或者是1\nevent_scheduler=ON\n\nthread_stack = 512K\n#默认是REPEATABLE-READ，改成读已提交\ntransaction-isolation=READ-COMMITTED\n#永久设置手动提交事务\n#autocommit=0\ntmp_table_size = 128M\n#注释掉之后，会关闭binlog日志\nlog-bin=mysql-bin\n#注释掉之后，会关闭binlog日志\nbinlog_format=mixed\n\n# 数据库ID号,为1时表示为Master,其中master_id必须为1到232–1\n# 之间的一个正整数值，主从server-id不能一样;\nserver-id = 1\n#自动删除5天前的日志。默认值为0，表示从不删除。\nexpire_logs_days = 5\nslow_query_log=1\nslow-query-log-file=/var/lib/mysql/mysql-slow.log\nlong_query_time=3\n#log_queries_not_using_indexes=on\n\n# MySQL5.7.11拥有，默认值为keyring_file，\n# InnoDB表空间在初始化InnoDB之前需要此插件来加密，\n# MySQL5.7.12及以后此参数默认为空\n#early-plugin-load = ""\n\n#loose-innodb-trx=0\n#loose-innodb-locks=0\n#loose-innodb-lock-waits=0\n#loose-innodb-cmp=0\n#loose-innodb-cmp-per-index=0\n#loose-innodb-cmp-per-index-reset=0\n#loose-innodb-cmp-reset=0\n#loose-innodb-cmpmem=0\n#loose-innodb-cmpmem-reset=0\n#loose-innodb-buffer-page=0\n#loose-innodb-buffer-page-lru=0\n#loose-innodb-buffer-pool-stats=0\n#loose-innodb-metrics=0\n#loose-innodb-ft-default-stopword=0\n#loose-innodb-ft-inserted=0\n#loose-innodb-ft-deleted=0\n#loose-innodb-ft-being-deleted=0\n#loose-innodb-ft-config=0\n#loose-innodb-ft-index-cache=0\n#loose-innodb-ft-index-table=0\n#loose-innodb-sys-tables=0\n#loose-innodb-sys-tablestats=0\n#loose-innodb-sys-indexes=0\n#loose-innodb-sys-columns=0\n#loose-innodb-sys-fields=0\n#loose-innodb-sys-foreign=0\n#loose-innodb-sys-foreign-cols=0\n\ndefault_storage_engine = InnoDB\ninnodb_data_home_dir = /var/lib/mysql\ninnodb_data_file_path = ibdata1:10M:autoextend\ninnodb_log_group_home_dir = /var/lib/mysql\ninnodb_buffer_pool_size = 128M\ninnodb_log_file_size = 64M\ninnodb_log_buffer_size = 16M\ninnodb_flush_log_at_trx_commit = 1\ninnodb_lock_wait_timeout = 120\ninnodb_max_dirty_pages_pct = 90\ninnodb_read_io_threads = 3\ninnodb_write_io_threads = 3\n\n[mysqldump]\nquick\nmax_allowed_packet = 16M\n\n[mysql]\nno-auto-rehash\n\n[myisamchk]\nkey_buffer_size = 32M\nsort_buffer_size = 768K\nread_buffer = 2M\nwrite_buffer = 2M\n\n[mysqlhotcopy]\ninteractive-timeout\n')])])]),e("h3",{attrs:{id:"宝塔面板安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板安装配置"}},[s._v("#")]),s._v(" 宝塔面板安装配置")]),s._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[client]\n#password   = your_password\nport        = 3306\nsocket      = /tmp/mysql.sock\n\n[mysqld]\nport        = 3306\nsocket      = /tmp/mysql.sock\ndatadir = /usr/local/mysql/data\nskip-external-locking\nperformance_schema_max_table_instances=400\ntable_definition_cache=400\nkey_buffer_size = 32M\nmax_allowed_packet = 100G\ntable_open_cache = 128\nsort_buffer_size = 768K\nnet_buffer_length = 8K\nread_buffer_size = 768K\nread_rnd_buffer_size = 512K\nmyisam_sort_buffer_size = 8M\nthread_cache_size = 16\nquery_cache_size = 16M\ntmp_table_size = 32M\nsql-mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\nexplicit_defaults_for_timestamp = true\n#skip-networking\nmax_connections = 500\nmax_connect_errors = 100\nopen_files_limit = 65535\n\n# 0：区分大小写，1：不区分大小写\nlower_case_table_names =1\n# 默认开启事件调度器ON或者是1\nevent_scheduler=ON\n\nthread_stack = 512K\n#默认是REPEATABLE-READ，改成读已提交\ntransaction-isolation=READ-COMMITTED\n#永久设置手动提交事务\n#autocommit=0\ntmp_table_size = 128M\n#注释掉之后，会关闭binlog日志\nlog-bin=mysql-bin\n#注释掉之后，会关闭binlog日志\nbinlog_format=mixed\nserver-id = 1\n#自动删除5天前的日志。默认值为0，表示从不删除。\nexpire_logs_days = 5\nslow_query_log=1\nslow-query-log-file=/usr/local/mysql/data/mysql-slow.log\nlong_query_time=3\n#log_queries_not_using_indexes=on\n# MySQL5.7.11拥有，默认值为keyring_file，\n# InnoDB表空间在初始化InnoDB之前需要此插件来加密，\n# MySQL5.7.12及以后此参数默认为空\n#early-plugin-load = ""\n\n#loose-innodb-trx=0\n#loose-innodb-locks=0\n#loose-innodb-lock-waits=0\n#loose-innodb-cmp=0\n#loose-innodb-cmp-per-index=0\n#loose-innodb-cmp-per-index-reset=0\n#loose-innodb-cmp-reset=0\n#loose-innodb-cmpmem=0\n#loose-innodb-cmpmem-reset=0\n#loose-innodb-buffer-page=0\n#loose-innodb-buffer-page-lru=0\n#loose-innodb-buffer-pool-stats=0\n#loose-innodb-metrics=0\n#loose-innodb-ft-default-stopword=0\n#loose-innodb-ft-inserted=0\n#loose-innodb-ft-deleted=0\n#loose-innodb-ft-being-deleted=0\n#loose-innodb-ft-config=0\n#loose-innodb-ft-index-cache=0\n#loose-innodb-ft-index-table=0\n#loose-innodb-sys-tables=0\n#loose-innodb-sys-tablestats=0\n#loose-innodb-sys-indexes=0\n#loose-innodb-sys-columns=0\n#loose-innodb-sys-fields=0\n#loose-innodb-sys-foreign=0\n#loose-innodb-sys-foreign-cols=0\n\ndefault_storage_engine = InnoDB\ninnodb_data_home_dir = /usr/local/mysql/data\ninnodb_data_file_path = ibdata1:10M:autoextend\ninnodb_log_group_home_dir = /usr/local/mysql/data\ninnodb_buffer_pool_size = 128M\ninnodb_log_file_size = 64M\ninnodb_log_buffer_size = 16M\ninnodb_flush_log_at_trx_commit = 1\ninnodb_lock_wait_timeout = 120\ninnodb_max_dirty_pages_pct = 90\ninnodb_read_io_threads = 3\ninnodb_write_io_threads = 3\n\n[mysqldump]\nquick\nmax_allowed_packet = 16M\n\n[mysql]\nno-auto-rehash\n\n[myisamchk]\nkey_buffer_size = 32M\nsort_buffer_size = 768K\nread_buffer = 2M\nwrite_buffer = 2M\n\n[mysqlhotcopy]\ninteractive-timeout\n')])])]),e("blockquote",[e("p",[s._v("按"),e("code",[s._v("ESC")]),s._v("后输入"),e("code",[s._v(":wq")]),s._v("退出")])])])}),[],!1,null,null,null);e.default=t.exports}}]);