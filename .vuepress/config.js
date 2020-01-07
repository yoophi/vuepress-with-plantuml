module.exports = {
    title: "Site Title",
    markdown: {
        config: md => {
            md.use(require('markdown-it-plantuml'))
        }
    }
}
