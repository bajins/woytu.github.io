(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{331:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos7-配置多个tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-配置多个tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" Centos7 配置多个Tomcat")]),a._v(" "),s("h1",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1"}},[a._v("安装JDK")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#2"}},[a._v("安装Tomcat")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Tomcat%E9%85%8D%E7%BD%AE%E5%A4%96%E9%83%A8%E8%B7%AF%E5%BE%84"}},[a._v("Tomcat配置外部路径")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#3"}},[a._v("tomcat8以上管理页面提示403 Access Denied问题")])])]),a._v(" "),s("h6",{attrs:{id:"_1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1","aria-hidden":"true"}},[a._v("#")]),a._v(" 1")]),a._v(" "),s("h1",{attrs:{id:"安装jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装JDK")]),a._v(" "),s("p",[a._v("卸载系统的JDK\n先查看 rpm -qa | grep java\n显示如下信息：")]),a._v(" "),s("p",[a._v("java-1.4.2-gcj-compat-1.4.2.0-40jpp.115\njava-1.6.0-openjdk-1.6.0.0-1.7.b09.el5")]),a._v(" "),s("p",[a._v("卸载：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("rpm -e --nodeps java-1.4.2-gcj-compat-1.4.2.0-40jpp.115\nrpm -e --nodeps java-1.6.0-openjdk-1.6.0.0-1.7.b09.el5\n")])])]),s("p",[a._v("安装sun公司的jdk1.7")]),a._v(" "),s("p",[a._v("查看JDK软件包列表")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum -y list java*\n或者\nyum search java | grep -i --color JDK\n")])])]),s("p",[a._v("安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum -y install java-1.7.0-openjdk java-1.7.0-openjdk-devel.x86_64\n")])])]),s("p",[a._v("通过yum默认安装的路径为")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/usr/lib/jvm\n")])])]),s("p",[a._v("配置环境变量")]),a._v(" "),s("p",[a._v("在/etc/profile文件中加入下面内容配置环境变量")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("########## jdk  environment ######################\nexport JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.181-2.6.14.8.el7_5.x86_64\nexport CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\nexport PATH=$PATH:$JAVA_HOME/bin\n########## jdk  environment ######################\n")])])]),s("p",[a._v("保存关闭,执行如下命令使设置生效")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile\n")])])]),s("p",[a._v("查看变量是否生效")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("echo $JAVA_HOME && echo $CLASSPATH\n")])])]),s("p",[a._v("查看Java版本信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -version\n")])])]),s("hr"),a._v(" "),s("h6",{attrs:{id:"_2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2","aria-hidden":"true"}},[a._v("#")]),a._v(" 2")]),a._v(" "),s("h1",{attrs:{id:"安装多个tomcat7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装多个tomcat7","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装多个Tomcat7")]),a._v(" "),s("p",[a._v("下载、安装 tomcat")]),a._v(" "),s("p",[a._v("地址https://tomcat.apache.org/download-80.cgi")]),a._v(" "),s("p",[a._v("把下载的apache-tomcat-8.5.31.tar.gz文件解压")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar -zxvf apache-tomcat-8.5.31.tar.gz\n")])])]),s("p",[a._v("修改tomcat文件夹名为tomcat-8080")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv apache-tomcat-8.5.31 tomcat-8080\n")])])]),s("p",[a._v("复制tomcat-8080：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cp -r tomcat-8080 tomcat-8082\n")])])]),s("p",[a._v("修改配置文件")]),a._v(" "),s("p",[a._v("在/etc/profile文件中加入下面内容配置环境变量")]),a._v(" "),s("p",[a._v("第一个tomcat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("########## tomcat 1###########\nCATALINA_BASE=/home/tomcat-8080\nCATALINA_HOME=/home/tomcat-8080\nTOMCAT_HOME=/home/tomcat-8080\nexport CATALINA_BASE CATALINA_HOME TOMCAT_HOME\n########## tomcat 1############\n")])])]),s("p",[a._v("第二个tomcat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("######### tomcat 2 ##########\nCATALINA_2_BASE=/home/tomcat-8082\nCATALINA_2_HOME=/home/tomcat-8082\nTOMCAT_2_HOME=/home/tomcat-8082\nexport CATALINA_2_BASE CATALINA_2_HOME TOMCAT_2_HOME\n########## tomcat 2##########\n")])])]),s("p",[a._v("source命令也称为“点命令”，也就是一个点符号（.）。source命令通常用于重新执行刚修改的初始化文件，使之立即生效\n用法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile \n或者\n. /etc/profile\n")])])]),s("p",[a._v("修改第二个tomcat文件")]),a._v(" "),s("p",[a._v("进入tomcat-8082的bin目录，修改startup.sh和shutdown.sh 两个文件，都添加如下内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("######### tomcat 2 ##########\nexport JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.181-2.6.14.8.el7_5.x86_64\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=$JAVA_HOME/lib\nexport CATALINA_HOME=$CATALINA_2_HOME\nexport CATALINA_BASE=$CATALINA_2_BASE\n######### tomcat 2 ##########\n")])])]),s("p",[a._v("修改第二个tomcat端口,第一个不变")]),a._v(" "),s("p",[a._v("进入/tomcat-8082/conf中修改server.xml\n修改后示例如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<Server port="9005" shutdown="SHUTDOWN">　#关闭端口：8005->9005\n\n<Connector port="8181" maxHttpHeaderSize="8192"　#Web端口：8080->8181\nmaxThreads="150" minSpareThreads="25" maxSpareThreads="75"\nenableLookups="false" redirectPort="8443" acceptCount="100"\nconnectionTimeout="20000" disableUploadTimeout="true" />\n\n<Connector port="9009"  #监听端口：8009->9009\nenableLookups="false" redirectPort="8443" protocol="AJP/1.3" />\n')])])]),s("hr"),a._v(" "),s("h6",{attrs:{id:"_3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3","aria-hidden":"true"}},[a._v("#")]),a._v(" 3")]),a._v(" "),s("h1",{attrs:{id:"tomcat8以上管理页面提示403-access-denied问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat8以上管理页面提示403-access-denied问题","aria-hidden":"true"}},[a._v("#")]),a._v(" tomcat8以上管理页面提示403 Access Denied问题")]),a._v(" "),s("h2",{attrs:{id:"修改conf-tomcat-users-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改conf-tomcat-users-xml","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改conf/tomcat-users.xml")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" conf/tomcat-users.xml\n")])])]),s("h3",{attrs:{id:"按shift-g跳到末尾-在前添加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按shift-g跳到末尾-在前添加","aria-hidden":"true"}},[a._v("#")]),a._v(" 按shift+g跳到末尾,在"),a._v("前添加")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("role")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("role")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("role")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("admin-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("role")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("admin-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("密码"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("roles")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-gui,manager-script,admin-gui,admin-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),s("h3",{attrs:{id:"打开webapps下的host-manager和manager，在meta-inf里面都有context-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开webapps下的host-manager和manager，在meta-inf里面都有context-xml","aria-hidden":"true"}},[a._v("#")]),a._v(" 打开webapps下的host-manager和manager，在META-INF里面都有context.xml")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" webapps/manager/META-INF/context.xml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" webapps/host-manager/META-INF/context.xml\n")])])]),s("h3",{attrs:{id:"修改节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改"),s("Context",{attrs:{antiResourceLocking:"false",privileged:"true"}},[a._v("节点")])],1),a._v(" "),s("h4",{attrs:{id:"这段代码的作用是限制来访ip的，127-d-d-d-1-0-0-0-0-0-0-0-1，是正则表达式，表示ipv4和ipv6的本机环回地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这段代码的作用是限制来访ip的，127-d-d-d-1-0-0-0-0-0-0-0-1，是正则表达式，表示ipv4和ipv6的本机环回地址","aria-hidden":"true"}},[a._v("#")]),a._v(" 这段代码的作用是限制来访IP的，127.d+.d+.d+|::1|0:0:0:0:0:0:0:1，是正则表达式，表示IPv4和IPv6的本机环回地址")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("Valve")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("org.apache.catalina.valves.RemoteAddrValve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("allow")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1|\\d+\\.\\d+\\.\\d+\\.\\d+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),s("h1",{attrs:{id:"tomcat配置外部路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat配置外部路径","aria-hidden":"true"}},[a._v("#")]),a._v(" Tomcat配置外部路径")]),a._v(" "),s("blockquote",[s("p",[a._v("docBase:指定Web应用的文件路径，可以给定绝对路径，也可以给定相对于"),s("Host",[a._v("的appBase属性的相对路径，如果Web应用采用开放目录结构，则指定Web应用的根目录，如果Web应用是个war文件，则指定war文件的路径。")])],1)]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("Context")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("docBase")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("/xxx/api.war"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("reloadable")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),s("blockquote",[s("p",[a._v('docBase的文件名不能省略.war后缀，否则跑不起来；而且发现会把war包解压到webapps下与path同名的文件夹中，所以path也不能为空，否则也跑不起来，而手动解压war包以文件夹的方式部署是可以指定path为"/"或""的。')])]),a._v(" "),s("h1",{attrs:{id:"tomcat热部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat热部署","aria-hidden":"true"}},[a._v("#")]),a._v(" Tomcat热部署")]),a._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token inserted"}},[a._v('+替换WEB-INF/lib目录中的jar文件或WEB-INF/classes目录中的class文件时，reloadable="true"会让修改生效（但代价不小），该选项适合调试。')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('<Context docBase="xxx" path="/xxx" reloadable="true"/> ')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[a._v('+在webapps目录中增加新的目录、war文件、修改WEB-INF/web.xml，autoDeploy="true"会新建或重新部署应用，该选项方便部署。')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('<Context docBase="xxx" path="/xxx" autoDeploy="true"/> ')]),a._v("\n")])])]),s("h1",{attrs:{id:"返回顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回顶部","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#readme"}},[a._v("返回顶部")])])])},[],!1,null,null,null);t.default=r.exports}}]);