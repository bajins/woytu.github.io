(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{363:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动静分离配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动静分离配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 动静分离配置")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("woetu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com woetu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page 404/404.html;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP_TO_HTTPS_START")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP_TO_HTTPS_END")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("letsencrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fullchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("letsencrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("privkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1 TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES128"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("HIGH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DHE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_cache")]),t._v(" shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SSL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("497")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL-END")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR-PAGE-START  错误页配置，可以注释、删除或修改")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502.")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR-PAGE-END")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PROXY-START/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置首页，这里必须要有一个=号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拦截静态文件后缀")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("eot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ttf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("woff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("woff2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置静态资源地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拦截静态文件后缀")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.(htm|html|js|css|jpg|png|gif|eot|svg|ttf|woff|woff2)$ {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置静态资源地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root /home/html/index;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 动态请求转发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" REMOTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("HOST "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决https->nginx->http->tomcat重定向问题")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PROXY-END/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止访问的文件或目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ini"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htaccess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LICENSE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("README"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一键申请SSL证书验证目录相关设置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("well"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("known "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);