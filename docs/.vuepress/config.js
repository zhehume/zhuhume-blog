module.exports = {
    title: 'zhehume-支哲光的个人博客',
    description: '只要开始就不算太晚！',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    base: '/zhehume-blog',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'zhehume/zhehume-blog',
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}