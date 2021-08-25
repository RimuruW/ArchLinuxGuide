import{o as A,c as l,a as n,b as e}from"./app.261a6460.js";const a='{"title":"基本系统安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"连接网络","slug":"连接网络"},{"level":3,"title":"选择合适的网络连接方式","slug":"选择合适的网络连接方式"},{"level":2,"title":"设置系统时间","slug":"设置系统时间"},{"level":2,"title":"设置硬盘分区","slug":"设置硬盘分区"}],"relativePath":"guide/basic-install/index.md","lastUpdated":1629918882813}',u={},i=[n("h1",{id:"基本系统安装"},[n("a",{class:"header-anchor",href:"#基本系统安装","aria-hidden":"true"},"#"),e(" 基本系统安装")],-1),n("p",null,"本文将为你介绍如何安装 Arch Linux 基本系统。",-1),n("p",null,[e("如果你还没有制作 Arch Linux 启动盘，请阅读 "),n("a",{href:"/guide/getting-started/#准备安装介质"},"准备安装#准备安装介质"),e("。")],-1),n("p",null,[e("如果你是想安装 Arch Linux + Windows 双系统，请阅读 "),n("a",{href:"/advanced/Dual-boot/#Windows"},"多系统安装#Windows"),e(" 部分。")],-1),n("h2",{id:"连接网络"},[n("a",{class:"header-anchor",href:"#连接网络","aria-hidden":"true"},"#"),e(" 连接网络")],-1),n("p",null,"成功启动到 archiso 后，你会看到如下界面",-1),n("p",null,[n("img",{src:"data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDVPyeBVXuXweOUAAAAAElFTkSuQmCC",alt:"archiso"})],-1),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"上图中 root 是用戶名。如果用户名出现数字，则该数字代表上一个命令的 exit status。"),n("p",null,"正常结束的命令 exit status 是 0，默认不会显示出来。如果出现 1、2、127 这种则是某种东西报错。")],-1),n("h3",{id:"选择合适的网络连接方式"},[n("a",{class:"header-anchor",href:"#选择合适的网络连接方式","aria-hidden":"true"},"#"),e(" 选择合适的网络连接方式")],-1),n("p",null,"你可以选择下面适合你的连接方式连接网络。",-1),n("h4",{id:"连接有线网络"},[n("a",{class:"header-anchor",href:"#连接有线网络","aria-hidden":"true"},"#"),e(" 连接有线网络")],-1),n("p",null,"如果你能连接有线网络，最好的办法是直接插网线连接网络。",-1),n("p",null,"（至于网线怎么插总不用我说了吧...)",-1),n("h4",{id:"连接无线网络"},[n("a",{class:"header-anchor",href:"#连接无线网络","aria-hidden":"true"},"#"),e(" 连接无线网络")],-1),n("p",null,"如果你电脑有无线网卡的话（绝大多数电脑应该都有），则可以尝试通过 WiFi 连接。我们可以通过 archiso 内置的 iwd 软件完成这一过程。",-1),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"2020 年 7 月的 ArchISO 砍掉了 netctl，经典的 wifi-menu 已被 iwctl 取代。如果你在某个教程里还看到了「使用 wifi-menu 连接 WiFi」这样的字样，请提醒作者更新教程……"),n("p",null,[n("s",null,"所以 wpa_supplicant 使用者竟成最后赢家。")])],-1),n("p",null,"在使用 iwctl 之前，我们需要先检查一下你的网卡是否被物理禁用或软件禁用。",-1),n("p",null,"物理禁用一般需要你的电脑存在可以物理按键或滑块可以手动关闭或打开网卡（当然，我觉得大多数电脑是没有这玩意的）。",-1),n("p",null,"软件禁用则考虑网卡是否被 rfkill 禁用，目前已知 ideapad（联想小新系列）会自动禁用无线网卡和蓝牙。",-1),n("p",null,"对于无线网卡被 rfkill 禁用的用户，输入以下命令解除 block",-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,"rfkill unblock all\n")])],-1),n("p",null,[e("在确认无误后，输入 "),n("code",null,"iwctl"),e(" 进入 iwd 的 shell。")],-1),n("p",null,[e("输入 "),n("code",null,"device list"),e(" 列出你电脑的无线网络设备（一般就是你电脑的网卡）")],-1),n("p",null,[e("常见的网卡名称是 "),n("code",null,"wlan0"),e(" 这样的。请根据自己电脑的实际情况判断。")],-1),n("p",null,[e("输入如下命令列出所有网络，命令中的 "),n("code",null,"device"),e(" 需要替换为你上一步看到的网卡的名称")],-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,"station device get-networks\n")])],-1),n("p",null,[e("比如，如果你的网卡名称是 "),n("code",null,"wlan0"),e("，那么你应该输入的命令是")],-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,"station wlan0 get-networks\n")])],-1),n("p",null,"如果你的电脑无线网卡工作正常的话，此时屏幕上会列出你熟悉的 WiFi 名称。如果没有任何结果或者出现报错的话，则需要你自己检查是否是网卡出现问题或者你打错了某个字符或者少了空格。",-1),n("p",null,[e("输入如下命令连接 WiFi，就像上面一样，"),n("code",null,"device"),e(" 需要替换成你电脑网卡的名字，"),n("code",null,"SSID"),e(" 需要替换成你想要连接且上面已经列出的 WiFi 名称")],-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,"station device connect SSID\n")])],-1),n("p",null,"如果 WiFi 有密码，此时会提示你输入密码，输入 WiFi 密码后回车即可。",-1),n("p",null,[e("完成上述操作后，输入 "),n("code",null,"exit"),e(" 退出 iwd 的 shell。")],-1),n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"部分 WiFi 名称中可能含有特殊字符，比如中文或者 emoji。终端无法输入这些特殊字符因此无法连接到该 WiFi。"),n("p",null,"建议更改 WiFi 名称或者更换其他连接方式")],-1),n("h4",{id:"借助-android-网络共享连接"},[n("a",{class:"header-anchor",href:"#借助-android-网络共享连接","aria-hidden":"true"},"#"),e(" 借助 Android 网络共享连接")],-1),n("p",null,"因为国内手机的 Android 系统大多数是由厂商自行修改过的，因此不便统一描述。建议自行搜索所使用系统的操作方法。",-1),n("p",null,"简而言之，Android 可以通过以下两种方式共享网络连接：",-1),n("ul",null,[n("li",null,"USB 网络共享，效果与插网线等同"),n("li",null,"热点共享，操作步骤和效果于连接 WiFi 等同")],-1),n("h4",{id:"检查网络连接"},[n("a",{class:"header-anchor",href:"#检查网络连接","aria-hidden":"true"},"#"),e(" 检查网络连接")],-1),n("p",null,"为了检测电脑真的是否连接上网络，我们可以输入如下命令检测",-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"ping"),e(" www.baidu.com\n")])])],-1),n("p",null,"ping 后面的网址可以是任何国内可以直连的网址。",-1),n("p",null,[e("如果已连接上网络，则电脑会疯狂输出一大堆延迟测试数据。反之则只有简单的"),n("code",null,"Timeout"),e("报错或长时间无输出结果。")],-1),n("p",null,"下面是成功连接网络的情况",-1),n("p",null,[n("img",{src:"/assets/image-20210826012216506.bf4df406.png",alt:"ping"})],-1),n("p",null,[e("此时按 "),n("code",null,"Ctrl+C"),e(" 以中止输出。")],-1),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[n("code",null,"Ctrl+C"),e(" 的意思是同时按住 Ctrl 键和 C 键，是 Linux 终端下常用的中止当前进程的方法之一。")]),n("p",null,[n("code",null,"Ctrl+C"),e(" 可以近似理解为强行终止当前终端的活动进程（实际上只是发出相应信号，"),n("s",null,"程序到底会不会停下来还得看它心情"),e(")。")]),n("p",null,[e("比如上面，ping 这个进程正在运行，我们通过 "),n("code",null,"Ctrl+C"),e(" 将它强行终止。")])],-1),n("h2",{id:"设置系统时间"},[n("a",{class:"header-anchor",href:"#设置系统时间","aria-hidden":"true"},"#"),e(" 设置系统时间")],-1),n("p",null,"输入如下命令进行 NTP 时间同步。",-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,[e("timedatectl set-ntp "),n("span",{class:"token boolean"},"true"),e("\n")])])],-1),n("p",null,"可以输入如下命令检测当前时间状态。",-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,"timedatectl status\n")])],-1),n("p",null,"输出结果大致如下图所示",-1),n("p",null,[n("img",{src:"/assets/image-20210826013504394.c1a7873e.png",alt:"time status"})],-1),n("p",null,"如果因为各种原因无法同步时间，也可以输入下面的命令手动同步时间",-1),n("div",{class:"language-"},[n("pre",null,[n("code",null,'timectl set-time "yyyy-MM-dd hh:mm:ss"\n')])],-1),n("p",null,"其中 y 代表年(year)，M 代表月(month)，d 代表天(day)，h 代表小时(hour)，m 代表分(minute)，s 代表秒(second)。",-1),n("p",null,"例如：",-1),n("div",{class:"language-bash"},[n("pre",null,[n("code",null,[e("timectl set-time "),n("span",{class:"token string"},'"2021-08-25 22:39:42"'),e("\n")])])],-1),n("h2",{id:"设置硬盘分区"},[n("a",{class:"header-anchor",href:"#设置硬盘分区","aria-hidden":"true"},"#"),e(" 设置硬盘分区")],-1),n("p",null,"该部分还在编写中",-1)];u.render=function(n,e,a,u,s,t){return A(),l("div",null,i)};export{a as __pageData,u as default};
