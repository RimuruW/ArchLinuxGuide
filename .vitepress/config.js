module.exports = {
  lang: "zh-CN",
  title: "Arch Linux 新手文档",
  description: "Keep it simple, stupid.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: "RimuruW/ArchLinuxGuide",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      { text: "新手文档", link: "/", activeMatch: "^/$|^/guide/" },
      { text: "关于文档", link: "/about/" },
      {
        text: "Arch Wiki",
        link: "https://wiki.archlinux.org/",
      },
    ],

    sidebar: {
      "/about/": false,
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "新手上路",
      children: [
        { text: "前言", link: "/" },
        { text: "准备安装", link: "/guide/getting-started/" },
        { text: "安装基本系统", link: "/guide/basic-install/" },
      ],
    },
    {
      text: "进阶配置",
      children: [
        { text: "成为一个合格的 Arch User", link: "/advanced/" },
        { text: "多系统启动", link: "/advanced/Dual-boot/" },
      ],
    },
  ];
}
