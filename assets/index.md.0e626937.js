import{o as r,c as i,d as a}from"./app.261a6460.js";const n='{"title":"前言","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"关于这篇教程我想说的话","slug":"关于这篇教程我想说的话"},{"level":2,"title":"FAQ","slug":"faq"},{"level":3,"title":"Linux 发行版是什么？","slug":"linux-发行版是什么？"},{"level":3,"title":"Arch Linux 是什么？","slug":"arch-linux-是什么？"},{"level":3,"title":"Arch Linux 是给专业开发者用的吗？","slug":"arch-linux-是给专业开发者用的吗？"},{"level":3,"title":"听说 Arch Linux 更新特别频繁，是真的吗？这样是不是不稳定？","slug":"听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？"},{"level":3,"title":"Arch Linux 的优点是什么？","slug":"arch-linux-的优点是什么？"},{"level":3,"title":"Pacman 是什么？它和 apt/dnf 对比哪个更先进？","slug":"pacman-是什么？它和-apt-dnf-对比哪个更先进？"},{"level":3,"title":"Ubuntu 和 Arch Linux 哪个更好？我应该选择哪一个？","slug":"ubuntu-和-arch-linux-哪个更好？我应该选择哪一个？"},{"level":3,"title":"Manjaro 和 Arch Linux 是什么关系，我是小白是否应该使用 Manjaro？","slug":"manjaro-和-arch-linux-是什么关系，我是小白是否应该使用-manjaro？"},{"level":3,"title":"我为什么不选择 Arch Linux？","slug":"我为什么不选择-arch-linux？"},{"level":2,"title":"写在最后","slug":"写在最后"}],"relativePath":"index.md","lastUpdated":1629957011451}',e={},h=[a('<h1 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><h2 id="关于这篇教程我想说的话"><a class="header-anchor" href="#关于这篇教程我想说的话" aria-hidden="true">#</a> 关于这篇教程我想说的话</h2><p><strong>无论从哪个角度看，Arch Linux 都不是一个新手友好型 Linux 发行版</strong>。无论你是因为什么原因选择安装 Arch Linux，我都希望你能够满足下条件：</p><ul><li>具有基本阅读理解水平，至少要能跟着教程来</li><li>掌握电脑基础使用，能够正常开关机</li><li>对电脑键盘键位和其按钮有基本了解（打字都不会的就不要打扰了。。。）</li><li>能够面对满屏的命令行输出保持基本冷静</li><li>具有基础的英语水平，至少命令行报错（比如出现 error）的时候，你能反应过来该命令执行出现错误。</li><li>有一定自主操作能力，能根据自己实际情况解决相应问题</li><li>出现突发情况，能够自行解决或者上网查阅相关资料</li></ul><p>必须说明的是，写一篇面向新手的教程本身就是一件非常令人苦恼的事情。我不能确定我眼中的常识是否是新手闻所未闻的新知识，我不能确定我习惯并自以为清晰明了的描述会不会让新手看的云里雾里。因此在教程中我尽可能侧重于讲解而不是一直单调地告诉你如何去做。同时，因为面向新手，教程也会尽量避免其他知识的扩展以减少新手的阅读压力。此外，因为我很少使用 Windows（或者说 Windows 使用经验几乎为零），所以教程中关于 Windows 的描述可能会有一些不准确的地方。如有错误还请指正。</p><p>当然，你可以另辟蹊径，通过一些特殊方法（如安装脚本）完成安装过程，但是这样无疑失去了 Arch Linux 安装的意义。这样做最直接的后果是，对于 Arch Linux 这种需要你自己维护的系统，如果你甚至没有自己动手完成你的系统安装过程，那么在系统出现问题的时候你多半无计可施只能重装系统了。</p><p>如果你是一个小白也不用太过担心，安装过程虽然是通过命令行一步一步操作，看似非常复杂繁琐。但是实际操作过程中你会发现，<strong>大多数情况下你并不需要理解每一个步骤的原因、每一行命令的意思</strong>。一般来说，<strong>安装过程也不会出现什么技术难点</strong>。</p><p>如果你有一定的 Linux 使用经验，根据本教程，你可以轻松完成 Arch Linux 的安装，部分命令可以根据你的习惯或者需求改为其他命令，本教程仅供参照。</p><p>我更希望的是，新人们能通过我这篇教程更多地了解 Arch Linux 和 Linux 本身，而不是机械式和目的性地完成一个操作系统的安装。Arch Linux 的安装只会是你们 Linux 之路的开始，而绝不是结束。</p><h2 id="faq"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="linux-发行版是什么？"><a class="header-anchor" href="#linux-发行版是什么？" aria-hidden="true">#</a> Linux 发行版是什么？</h3><p>Linux 严格意义上指的是由 Linus Torvalds 等内核维护者开发和维护的内核。使用 Linux 内核的操作系统称为 Linux 发行版。Android 虽然在定义上可能符合 Linux 发行版，但是一般不认为它属于 Linux。</p><h3 id="arch-linux-是什么？"><a class="header-anchor" href="#arch-linux-是什么？" aria-hidden="true">#</a> Arch Linux 是什么？</h3><p>请阅读 Arch Wiki <a href="https://wiki.archlinux.org/title/Arch_Linux_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">Arch Linux</a> 部分。</p><h3 id="arch-linux-是给专业开发者用的吗？"><a class="header-anchor" href="#arch-linux-是给专业开发者用的吗？" aria-hidden="true">#</a> Arch Linux 是给专业开发者用的吗？</h3><p>Arch Linux 并不是为特定职业或者特定应用设计的。</p><p>你可以看见技术黑客在个人简介中备注「BTW I use Arch」，也可以发现 Steam Deck 搭载的 SteamOS 基于 Arch Linux。Arch Linux 是属于每一个 Arch 用户的 Linux 发行版，换而言之，你的 Arch 只属于你。</p><h3 id="听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？"><a class="header-anchor" href="#听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？" aria-hidden="true">#</a> 听说 Arch Linux 更新特别频繁，是真的吗？这样是不是不稳定？</h3><p>我们先明确一下什么是「系统更新」。</p><p>大多数操作系统都是由许多个软件构成的，这些软件可以粗略地分为「系统组件」（如驱动，内核）和「用户软件」（由用户自行安装娱乐办公软件等）。所谓系统更新可以粗略地理解为对「系统组件」进行更新。</p><p>Arch Linux 属于滚动发行版，不同于其他 Linux 发行版将「系统组件」与「用户软件」分开更新，Arch Linux 的更新策略中不存在所谓「系统组件」和「用户软件」的区别，两者同地位同时更新。</p><p>事实上这种更新方式是最稳定的更新方式（理直气壮），因为大多数时候 Linux 下「系统组件」和「用户软件」之间并没有什么明确的界限，两者的不对等更新反而容易造成各种兼容性问题。除此之外，所谓追求稳定的软件发行机制可能会导致形成非常复杂的依赖树，显著的副作用就是 Apt 著名的依赖冲突。</p><p>注：「系统组件」和「用户软件」是我为了介绍方便自定义的词汇，仅用于你理解。</p><h3 id="arch-linux-的优点是什么？"><a class="header-anchor" href="#arch-linux-的优点是什么？" aria-hidden="true">#</a> Arch Linux 的优点是什么？</h3><p>Arch Linux 的优点有很多，总结下来可以分为以下几条：</p><ul><li><p>自定义安装，你可以按照你的需求和喜好随意组装和修改你的系统</p></li><li><p>滚动更新，你可以第一时间享受新的软件和新的特性</p></li><li><p>强大的社区支持，Arch Linux 有丰富的 Wiki 可以查阅，热心的社区可以为掌握使用人类可理解语言提问的用户提供帮助和指导</p></li></ul><p>注意，我认为 <a href="https://wiki.archlinux.org/title/Arch_User_Repository_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">AUR</a> 并不算 Arch Linux 的优点，只能算 Arch Linux 的一个 feature（特性）。如果你是因为 AUR 慕名来安装 Arch Linux，我建议你在更多地了解 Arch Linux 后再来尝试 Arch Linux.</p><h3 id="pacman-是什么？它和-apt-dnf-对比哪个更先进？"><a class="header-anchor" href="#pacman-是什么？它和-apt-dnf-对比哪个更先进？" aria-hidden="true">#</a> Pacman 是什么？它和 apt/dnf 对比哪个更先进？</h3><p>Pacman 是 Arch Linux 的包管理软件（package manager，我简称包管理）。包管理软件是大多数 Linux 发行版用来下载、安装、更新软件的应用程序，是大部分 Linux 发行版最重要的软件之一。</p><p>我也不知道是哪里先开始出现奇怪的对 Pacman 无脑的吹捧。这里引用 Arch Linux CN 社区的管理者之一「依云」在知乎问题「为什么说Arch Linux的pacman包管理系统更先进？相比与apt或rpm等好在哪里呢?」的<a href="https://www.zhihu.com/question/40297380/answer/1304737014" target="_blank" rel="noopener noreferrer">回答</a>。</p><blockquote><p>先进个毛线。要讲先进，先进打包工具才是真的先进。指定依赖包的版本范围，pacman 搞不定。只更新部分包？pacman 给你一个损坏的系统。就更别说多架构支持啊，自动清理旧库啊，多版本共存啊，提供多种依赖解决方案啊之类的功能了。</p><p>pacman 最大的优势就是：它一点也不先进，所以很简单。安装一群包？很快，因为没太多需要做的事情。自己打个包？照着模板写 shell 脚本就行，就别指望着自动依赖分析啥子了。打包质量检查有倒是有，功能方面不说，慢就算了，还时不时莫名其妙地告诉你有问题，又不说到底有什么问题（以错误码退出）。</p><p>Linux 打包工具那么多，pacman 应该是我用过的（apt, yum, zypper, pacman, emerge, nix）最不先进的那个了。好在它也是学起来最简单的一个。</p></blockquote><p>如果你想了解更多 Pacman 与其他包管理的区别，可以阅读 Arch Linux TU 之一「farseerfc」在同问题下的<a href="https://www.zhihu.com/question/40297380/answer/85848637" target="_blank" rel="noopener noreferrer">回答</a>。</p><h3 id="ubuntu-和-arch-linux-哪个更好？我应该选择哪一个？"><a class="header-anchor" href="#ubuntu-和-arch-linux-哪个更好？我应该选择哪一个？" aria-hidden="true">#</a> Ubuntu 和 Arch Linux 哪个更好？我应该选择哪一个？</h3><p>Linux 发行版一般不存在所谓「这个更好，那个更差」的说法，适合你才是最重要的。</p><p>什么人适合使用 Arch Linux？</p><ul><li>具有一定的动手能力，掌握电脑键盘的使用方法，遇到问题敢于去解决，能阅读教程和文档自己操作</li><li>具备基础的网络使用经验，知道如何使用浏览器访问网站，会使用搜索引擎帮助自己解决问题</li><li>具备基本的语言组织能力和理解能力，至少掌握一门人类可以理解的语言，能清晰地向他人描述你的问题并按照他人解决方案操作</li><li>喜欢探索和 DIY，喜欢充满新鲜与挑战的事物</li><li>偏好开源软件，在意自己的隐私，不想自己的电脑完全被互联网大公司所掌控，我的电脑我作主</li></ul><p>什么人适合使用 Ubuntu？</p><ul><li>电脑对于你来说只是纯粹的工具，你只希望它开箱即用，最好有人能帮你打理好一切，使用电脑就像被人喂饭一样轻松惬意</li><li>大脑不需要完全发挥它应有的作用，命令行操作可以完全 GUI（图形化界面）完成，复杂的操作有一键脚本帮你轻松搞定，至于自定义之类的看心情</li><li>备有一个工作正常的 U 盘并且熟练掌握重装系统的操作流程</li><li>不在意隐私是否绝对安全，有人偷偷拿一点也不要紧</li></ul><p>注：以上均为我个人看法，所谓「适合使用 xxx 的人」并非代指「使用 xxx 的人」，请勿曲解或过分延伸。</p><p>对于 Arch Linux 与其他发行版的区别建议阅读 <a href="https://wiki.archlinux.org/title/Arch_compared_to_other_distributions_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">ArchWiki/Arch compared to other distributions</a>。</p><h3 id="manjaro-和-arch-linux-是什么关系，我是小白是否应该使用-manjaro？"><a class="header-anchor" href="#manjaro-和-arch-linux-是什么关系，我是小白是否应该使用-manjaro？" aria-hidden="true">#</a> Manjaro 和 Arch Linux 是什么关系，我是小白是否应该使用 Manjaro？</h3><p>Manjaro 是一个由商业公司运作、社区支持的 Linux 发行版。Manjaro 基于 Arch Linux，也使用 Pacman 作为包管理，提供图形化安装界面。Manjaro 通过更新比 Arch Linux 慢几天的方式实现它定义的「稳定」，并对 Arch Linux 进行了一系列修改以确保它定义的「用户友好」。我无权对 Manjaro 及其社区和用户进行评价，这里仅列出我认为的 Manjaro 存在的一系列问题。</p><ul><li>Arch Linux 的两大优势是「自定义安装」和「滚动更新」，这也是 Arch Linux 的核心。如果把 Arch Linux 比作一个巨人，那么 Manjaro 就是先锯掉了巨人的一条腿（使用图形化安装），然后打瘸了另一条腿（延后滚动更新时间）</li><li>Manjaro 社区支持较 Arch Linux 社区更为薄弱，且社区决策地位更低</li><li>Manjaro 虽然使用滚动更新，但是并没有完善的文档支持，这意味着如果出现问题，你可能需要查阅 Arch Wiki，而又可能因为 Manjaro 的一系列魔改，你可能无法按照 Arch Wiki 解决你的问题，于是只能重装系统。</li></ul><h3 id="我为什么不选择-arch-linux？"><a class="header-anchor" href="#我为什么不选择-arch-linux？" aria-hidden="true">#</a> 我为什么不选择 Arch Linux？</h3><p>Arch Linux 绝不是适合所有人的 Linux 发行版，事实上它一直都是面向特定的用户的 Linux 发行版。</p><p>以下是不选择 Arch Linux 的理由：</p><ul><li>没有能力、时间、愿望去打理这样一个高度可定制的 GNU/Linux 发行版。</li><li>需要非 x86_64/amd64 平台支持。Arch Linux 官方仅支持 x86_64/amd64。</li><li>你是狂热的自由软件爱好者，只希望发行版提供 GNU 定义的自由软件。</li><li>你认为好的操作系统应当是已经配置好的：安装介质应默认包含一套完整的应用软件、桌面环境——达到“开箱即用”。</li><li>你不需要使用滚动升级的发行版。</li><li>你对目前使用的操作系统感到满意。</li></ul><h2 id="写在最后"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h2><p>如果你阅读到这里还没有选择放弃的话，那么欢迎你走进 Arch Linux 大门。无论你是因为何种原因选择安装 Arch Linux，都希望你能在 Arch Linux 中找到自己的一份乐趣！</p>',49)];e.render=function(a,n,e,l,u,c){return r(),i("div",null,h)};export{n as __pageData,e as default};
