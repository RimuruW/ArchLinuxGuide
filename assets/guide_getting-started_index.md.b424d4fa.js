import{o as l,c as n,a as e,b as a}from"./app.261a6460.js";const t='{"title":"安装前的准备","description":"","frontmatter":{},"headers":[{"level":2,"title":"确定电脑的启动类型","slug":"确定电脑的启动类型"},{"level":3,"title":"Windows 确定方法","slug":"windows-确定方法"},{"level":3,"title":"Linux 确定方法","slug":"linux-确定方法"},{"level":2,"title":"准备安装介质","slug":"准备安装介质"},{"level":3,"title":"下载 Arch Linux ISO","slug":"下载-arch-linux-iso"},{"level":3,"title":"制作 Arch Linux 启动盘","slug":"制作-arch-linux-启动盘"},{"level":2,"title":"启动到 Live 环境","slug":"启动到-live-环境"},{"level":3,"title":"禁用安全启动（Secure Boot）","slug":"禁用安全启动（secure-boot）"},{"level":3,"title":"从启动盘启动","slug":"从启动盘启动"}],"relativePath":"guide/getting-started/index.md","lastUpdated":1629957011451}',s={},r=[e("h1",{id:"安装前的准备"},[e("a",{class:"header-anchor",href:"#安装前的准备","aria-hidden":"true"},"#"),a(" 安装前的准备")],-1),e("p",null,"本文将为你介绍 Arch Linux 安装前的准备事项。",-1),e("p",null,[a("如果你是 GNU/Linux 新手，建议你先阅读一遍 "),e("a",{href:"/#faq"},"FAQ"),a("。")],-1),e("p",null,[a("如果你是想安装 Arch Linux + Windows 双系统，请阅读 "),e("a",{href:"/advanced/Dual-boot/#Windows"},"多系统启动#Windows"),a(" 部分。")],-1),e("h2",{id:"确定电脑的启动类型"},[e("a",{class:"header-anchor",href:"#确定电脑的启动类型","aria-hidden":"true"},"#"),a(" 确定电脑的启动类型")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"电脑启动类型可以粗略地分为「传统 BIOS」（简称 BIOS）和「UEFI」。因为两者在启动盘制作上和安装步骤上存在差异，所以必须在安装前对电脑的启动类型进行确认。如果是最近十年生产的设备，使用的一般是 UEFI 引导。"),e("p",null,"如果系统未以你想要的模式引导启动，请参考你的主板说明书。")],-1),e("h3",{id:"windows-确定方法"},[e("a",{class:"header-anchor",href:"#windows-确定方法","aria-hidden":"true"},"#"),a(" Windows 确定方法")],-1),e("p",null,[a("首先启动进入 Windows 桌面，同时按下 Win+R 打开运行对话框，然后输入 "),e("code",null,"msinfo32"),a(" 后回车确认打开系统信息。")],-1),e("p",null,[e("img",{src:"/assets/shduisncnq14.9340110a.png",alt:"“运行”对话框"})],-1),e("p",null,"查看「BIOS 模式」是不是 UEFI。如果是，则为 UEFI 引导，反之则为传统 BIOS 引导。",-1),e("p",null,[e("img",{src:"/assets/8qd7scg.c8a94d6a.png",alt:"“系统信息”窗口"})],-1),e("h3",{id:"linux-确定方法"},[e("a",{class:"header-anchor",href:"#linux-确定方法","aria-hidden":"true"},"#"),a(" Linux 确定方法")],-1),e("p",null,"Linux 输入如下命令",-1),e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"ls"),a(" /sys/firmware/efi/efivars\n")])])],-1),e("p",null,[a("如果命令结果显示了目录且没有报告错误，则系统以 UEFI 模式引导。 如果目录不存在，则系统可能以 "),e("a",{href:"https://en.wikipedia.org/wiki/BIOS",target:"_blank",rel:"noopener noreferrer"},"BIOS"),a(" 模式 (或 "),e("a",{href:"https://en.wikipedia.org/wiki/Compatibility_Support_Module",target:"_blank",rel:"noopener noreferrer"},"CSM"),a(" 模式) 引导。")],-1),e("h2",{id:"准备安装介质"},[e("a",{class:"header-anchor",href:"#准备安装介质","aria-hidden":"true"},"#"),a(" 准备安装介质")],-1),e("h3",{id:"下载-arch-linux-iso"},[e("a",{class:"header-anchor",href:"#下载-arch-linux-iso","aria-hidden":"true"},"#"),a(" 下载 Arch Linux ISO")],-1),e("p",null,"你可以通过以下网站中的任意一个获取 Arch Linux ISO 文件（下文简称 archiso）",-1),e("ul",null,[e("li",null,[e("a",{href:"http://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/",target:"_blank",rel:"noopener noreferrer"},"清华大学开源软件镜像站")]),e("li",null,[e("a",{href:"http://mirrors.ustc.edu.cn/archlinux/iso/",target:"_blank",rel:"noopener noreferrer"},"中国科技大学开源软件镜像站")]),e("li",null,[e("a",{href:"http://mirrors.bfsu.edu.cn/archlinux/iso/",target:"_blank",rel:"noopener noreferrer"},"北京外国语大学开源软件镜像站")]),e("li",null,[e("a",{href:"http://mirrors.163.com/archlinux/iso/",target:"_blank",rel:"noopener noreferrer"},"网易开源镜像站")])],-1),e("p",null,"这里使用「清华大学开源软件镜像站」作为示范：",-1),e("p",null,[e("img",{src:"/assets/image-20210825231354880.b9c58b2b.png",alt:"image-20210825231354880"})],-1),e("p",null,[a("上图中 "),e("code",null,"2021.08.01/"),a(" 这样的是 archiso 发行时间（同时也是发行版本）。")],-1),e("p",null,[a("我们点击 "),e("code",null,"latest"),a(" 下载最新版本。")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"由于 Arch Linux 是滚动发行版，旧的 archiso 可能会在安装上存在一些兼容性问题，所以无论是使用 archiso 安装系统还是修复系统，都建议使用最新版本避免异常。")],-1),e("p",null,[a("点击文件扩展名（后缀）为"),e("code",null,"iso"),a(" 的文件下载即可。")],-1),e("p",null,[e("img",{src:"/assets/image-20210825234553841.7df07ff4.png",alt:"image-20210825234553841"})],-1),e("h3",{id:"制作-arch-linux-启动盘"},[e("a",{class:"header-anchor",href:"#制作-arch-linux-启动盘","aria-hidden":"true"},"#"),a(" 制作 Arch Linux 启动盘")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"启动盘的制作一般需要一个可用的 USB 存储介质，如 U 盘、SD 卡 + 读卡器。如果你使用的 Android 手机且已获取 ROOT 权限，你也可以使用某些第三方工具制作 Arch Linux 启动盘。")],-1),e("h4",{id:"windows-系统操作方法"},[e("a",{class:"header-anchor",href:"#windows-系统操作方法","aria-hidden":"true"},"#"),a(" Windows 系统操作方法")],-1),e("p",null,[a("Windows 建议使用 "),e("a",{href:"http://rufus.akeo.ie/downloads/",target:"_blank",rel:"noopener noreferrer"},"Rufus"),a(" 烧录镜像。")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"Rufus 是一个可以帮助格式化和创建可引导 USB 闪存盘的工具，比如 USB 随身碟，记忆棒等等。麻雀虽小，五脏俱全，体积虽小，功能全面。")],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"WARNING"),e("p",null,[a("注意，某些 Linux 可用的软碟通(UItraISO)"),e("strong",null,"不适用于"),a(" Arch Linux")])],-1),e("ol",null,[e("li",null,[e("p",null,"下载完成后，双击打开该文件，允许或不允许 Rufus 联网检查程序更新皆可。"),e("p",null,[e("img",{src:"/assets/6d1d86f6e363c.10bd58e4.png",alt:"检查更新"})])]),e("li",null,[e("p",null,"插入你的 U 盘，在「设备」选项框中选择你的 U 盘（一般会默认选中，以下图片均为示例）。"),e("img",{src:"/assets/0f603f3cf3f5f.05304601.png",alt:"选择设备",style:{zoom:"80%"}})]),e("li",null,[e("p",null,"在「引导类型选择」下选择 「镜像文件（请选择）」，然后单击右侧的「选择」来选择你下载好的镜像。"),e("img",{src:"/assets/f1f580a8a0ff3-1622905253656.68dd4069.png",style:{zoom:"80%"}})]),e("li",null,[e("p",null,"「持久分区大小」默认即可。对于「分区类型」，UEFI 引导选择「GPT」，BIOS 引导保持「MBR」即可"),e("p",null,[e("img",{src:"/assets/69aa1ec442d7a.b7a17680.png",alt:"示例"})])]),e("li",null,[e("p",null,"「格式化选项」保持默认即可，单击开始来进行下一步。"),e("p",null,[e("img",{src:"/assets/5377133faa985.0f8b42b8.png",alt:"示例"})])]),e("li",null,[e("p",null,"选择 「以 ISO 镜像 模式写入（推荐）」，单击「OK」进行下一步。"),e("p",null,[e("img",{src:"/assets/ea1b166c824e3.91b4de6c.png",alt:""})])]),e("li",null,[e("p",null,"单击开始来烧录镜像。"),e("p",null,[e("img",{src:"/assets/b3191015dc98e.bb3a5eb2.png",alt:"示例"})])]),e("li",null,[e("p",null,"等待烧录完成即可。（下图即为烧录完成的一个示例）"),e("p",null,[e("img",{src:"/assets/7b7db13921e76.63459a94.png",alt:"示例"})])])],-1),e("h4",{id:"linux-操作方法"},[e("a",{class:"header-anchor",href:"#linux-操作方法","aria-hidden":"true"},"#"),a(" Linux 操作方法")],-1),e("p",null,"推荐使用 Linux 下经典的 dd 命令完成启动盘制作。",-1),e("p",null,[a("首先输入如下命令确定获取电脑硬盘信息，所获取的信息中应该包含 U 盘标识，一般是 "),e("code",null,"/dev/sdX"),a(" 这种格式")],-1),e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"sudo"),a(),e("span",{class:"token function"},"fdisk"),a(" -l\n")])])],-1),e("p",null,"输入如下命令制作启动盘",-1),e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[a(),e("span",{class:"token function"},"dd"),a(),e("span",{class:"token assign-left variable"},"if"),e("span",{class:"token operator"},"="),e("span",{class:"token operator"},"<"),a("ISO镜像位置"),e("span",{class:"token operator"},">"),a(),e("span",{class:"token assign-left variable"},"of"),e("span",{class:"token operator"},"="),a("/dev/sdX "),e("span",{class:"token assign-left variable"},"bs"),e("span",{class:"token operator"},"="),a("4M\n")])])],-1),e("p",null,"耐心等待制作完成即可",-1),e("h2",{id:"启动到-live-环境"},[e("a",{class:"header-anchor",href:"#启动到-live-环境","aria-hidden":"true"},"#"),a(" 启动到 Live 环境")],-1),e("h3",{id:"禁用安全启动（secure-boot）"},[e("a",{class:"header-anchor",href:"#禁用安全启动（secure-boot）","aria-hidden":"true"},"#"),a(" 禁用安全启动（Secure Boot）")],-1),e("p",null,"Arch Linux 单系统安装可以不禁用 Windows 的快速启动但一定要禁用安全启动。",-1),e("p",null,"该部分建议自行在网上寻找相关教程。因为不同电脑可能存在不同的设置方式和 BIOS 界面，不便统一概述，因此最好的办法是在网上找到自己机型对应的教程。",-1),e("p",null,[a("这里给出常见的电脑厂商的进入 BIOS 快捷键（"),e("s",null,"开机的时候狂敲就对了"),a("）")],-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"电脑厂商"),e("th",{style:{"text-align":"right"}},"快捷键")])]),e("tbody",null,[e("tr",null,[e("td",null,"联想（含拯救者、ThinkPad）"),e("td",{style:{"text-align":"right"}},"F2 或 F12")]),e("tr",null,[e("td",null,"华为"),e("td",{style:{"text-align":"right"}},"Fn + F2")]),e("tr",null,[e("td",null,"华硕"),e("td",{style:{"text-align":"right"}},"ESC")]),e("tr",null,[e("td",null,"惠普"),e("td",{style:{"text-align":"right"}},"F9 (-F10)")]),e("tr",null,[e("td",null,"戴尔"),e("td",{style:{"text-align":"right"}},"F12")]),e("tr",null,[e("td",null,"三星"),e("td",{style:{"text-align":"right"}},"F12")]),e("tr",null,[e("td",null,"小米"),e("td",{style:{"text-align":"right"}},"F2")]),e("tr",null,[e("td",null,"神舟"),e("td",{style:{"text-align":"right"}},"F2")]),e("tr",null,[e("td",null,"雷神"),e("td",{style:{"text-align":"right"}},"F2 或 F12")]),e("tr",null,[e("td",null,"外星人"),e("td",{style:{"text-align":"right"}},"F2")])])],-1),e("h3",{id:"从启动盘启动"},[e("a",{class:"header-anchor",href:"#从启动盘启动","aria-hidden":"true"},"#"),a(" 从启动盘启动")],-1),e("p",null,"首先插上你的 Arch Linux 启动盘，并进入 BIOS。",-1),e("p",null,[a("然后在 BIOS 的"),e("code",null,"Boot Menu"),a("（可能是别的名字）中修改你的启动盘为第一项。")],-1),e("p",null,[a("部分支持 UEFI 的电脑可能在 BIOS 中禁用了 UEFI。你可以在 BIOS 的 Boot Mode 中修改 "),e("code",null,"Legacy/CSM"),a(" 为"),e("code",null," UEFI only"),a("。")],-1),e("p",null,"如果一切顺利，你开机就可以看到 Arch Linux 启动界面了！",-1),e("p",null,"传统 BIOS 启动界面大致是这样：",-1),e("p",null,[e("img",{src:"/assets/4cda84d1a6d0c.b334b0f1.png",alt:"BIOS 启动"})],-1),e("p",null,"UEFI 启动界面大致是这样：",-1),e("p",null,[e("img",{src:"/assets/303179878abc6.dd8dbc05.png",alt:"UEFI"})],-1),e("p",null,"此时回车选择第一项即可启动到 archiso。",-1),e("p",null,"你已经向 Arch Linux 迈开了自己坚实的第一步！",-1),e("hr",null,null,-1),e("p",null,"部分图片来源于：",-1),e("ul",null,[e("li",null,[e("a",{href:"https://blog.yoitsu.moe/arch-linux/installing_arch_linux_for_complete_newbies.html",target:"_blank",rel:"noopener noreferrer"},"《给 GNU/Linux 萌新的 Arch Linux 安装指南 rev.B》")])],-1)];s.render=function(e,a,t,s,i,u){return l(),n("div",null,r)};export{t as __pageData,s as default};
