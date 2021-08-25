import{o as i,c as r,d as n}from"./app.261a6460.js";const a='{"title":"前言","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"关于这篇教程我想说的话","slug":"关于这篇教程我想说的话"},{"level":2,"title":"FAQ","slug":"faq"},{"level":3,"title":"Arch Linux 是什么？","slug":"arch-linux-是什么？"},{"level":3,"title":"Linux 发行版是什么？","slug":"linux-发行版是什么？"},{"level":3,"title":"Arch Linux 是给专业开发者用的吗？","slug":"arch-linux-是给专业开发者用的吗？"},{"level":3,"title":"听说 Arch Linux 更新特别频繁，是真的吗？这样是不是不稳定？","slug":"听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？"}],"relativePath":"index.md","lastUpdated":1629918882825}',e={},h=[n('<h1 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><h2 id="关于这篇教程我想说的话"><a class="header-anchor" href="#关于这篇教程我想说的话" aria-hidden="true">#</a> 关于这篇教程我想说的话</h2><p><strong>无论从哪个角度看，Arch Linux 都不是一个新手友好型 Linux 发行版</strong>。无论你是因为什么原因选择安装 Arch Linux，我都希望你能够满足下条件：</p><ul><li>具有基本阅读理解水平，至少要能跟着教程来</li><li>掌握电脑基础使用，能够正常开关机</li><li>对电脑键盘键位和其按钮有基本了解（打字都不会的就不要打扰了。。。）</li><li>能够面对满屏的命令行输出保持基本冷静</li><li>具有基础的英语水平，至少命令行报错（比如出现 error）的时候，你能反应过来该命令执行出现错误。</li><li>有一定自主操作能力，能根据自己实际情况解决相应问题</li><li>出现突发情况，能够自行解决或者上网查阅相关资料</li></ul><p>必须说明的是，写一篇面向新手的教程本身就是一件非常令人苦恼的事情。我不能确定我眼中的常识是否是新手闻所未闻的新知识，我不能确定我习惯并自以为清晰明了的描述会不会让新手看的云里雾里。因此在教程中我尽可能侧重于讲解而不是一直单调地告诉你如何去做。同时，因为面向新手，教程也会尽量避免其他知识的扩展以减少新手的阅读压力。此外，因为我很少使用 Windows（或者说 Windows 使用经验几乎为零），所以教程中关于 Windows 的描述可能会有一些不准确的地方。如有错误还请指正。</p><p>当然，你可以另辟蹊径，通过一些特殊方法（如安装脚本）完成安装过程，但是这样无疑失去了 Arch Linux 安装的意义。这样做最直接的后果是，对于 Arch Linux 这种需要你自己维护的系统，如果你甚至没有自己动手完成你的系统安装过程，那么在系统出现问题的时候你多半无计可施只能重装系统了。</p><p>如果你是一个小白也不用太过担心，安装过程虽然是通过命令行一步一步操作，看似非常复杂繁琐。但是实际操作过程中你会发现，<strong>大多数情况下你并不需要理解每一个步骤的原因、每一行命令的意思</strong>。一般来说，<strong>安装过程也不会出现什么技术难点</strong>。</p><p>如果你有一定的 Linux 使用经验，根据本教程，你可以轻松完成 Arch Linux 的安装，部分命令可以根据你的习惯或者需求改为其他命令，本教程仅供参照。</p><p>我更希望的是，新人们能通过我这篇教程更多地了解 Arch Linux 和 Linux 本身，而不是机械式和目的性地完成一个操作系统的安装。Arch Linux 的安装只会是你们 Linux 之路的开始，而绝不是结束。</p><h2 id="faq"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="arch-linux-是什么？"><a class="header-anchor" href="#arch-linux-是什么？" aria-hidden="true">#</a> Arch Linux 是什么？</h3><p>请阅读 Arch Wiki <a href="https://wiki.archlinux.org/title/Arch_Linux_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank" rel="noopener noreferrer">Arch Linux</a> 部分</p><h3 id="linux-发行版是什么？"><a class="header-anchor" href="#linux-发行版是什么？" aria-hidden="true">#</a> Linux 发行版是什么？</h3><p>Linux 严格意义上指的是由 Linus Torvalds 等内核维护者开发和维护的内核。使用 Linux 内核的操作系统称为 Linux 发行版。Android 虽然在定义上符合 Linux 发行版，但是一般不认为它属于 Linux。</p><h3 id="arch-linux-是给专业开发者用的吗？"><a class="header-anchor" href="#arch-linux-是给专业开发者用的吗？" aria-hidden="true">#</a> Arch Linux 是给专业开发者用的吗？</h3><p>Arch Linux 并不是为特定职业或者特定应用设计的。</p><p>你可以看见技术黑客在个人简介中备注「BTW I use Arch」，也可以发现 Steam Deck 搭载的 SteamOS 基于 Arch Linux。Arch Linux 是属于每一个 Arch 用户的 Linux 发行版，换而言之，你的 Arch 只属于你。</p><h3 id="听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？"><a class="header-anchor" href="#听说-arch-linux-更新特别频繁，是真的吗？这样是不是不稳定？" aria-hidden="true">#</a> 听说 Arch Linux 更新特别频繁，是真的吗？这样是不是不稳定？</h3><p>我们先明确一下什么是「系统更新」。</p><p>大多数操作系统都是由许多个软件构成的，这些软件可以粗略地分为「系统组件」（如驱动，内核）和「用户软件」（由用户自行安装娱乐办公软件等）。所谓系统更新可以粗略地理解为对「系统组件」进行更新。</p><p>Arch Linux 属于滚动发行版，不同于其他 Linux 发行版将「系统组件」与「用户软件」分开更新，Arch Linux 的更新策略中不存在所谓「系统组件」和「用户软件」的区别，两者同地位同时更新。</p><p>事实上这种更新方式是最稳定的更新方式（理直气壮），因为大多数时候 Linux 下「系统组件」和「用户软件」之间并没有什么明确的界限，两者的不对等更新反而容易造成各种兼容性问题。除此之外，所谓追求稳定的软件发行机制可能会导致非常复杂的依赖树，显著的副作用就是 Apt 著名的依赖冲突。</p><p>注：「系统组件」和「用户软件」是我为了介绍方便自定义的词汇，仅用于你理解。</p>',23)];e.render=function(n,a,e,l,u,c){return i(),r("div",null,h)};export{a as __pageData,e as default};
