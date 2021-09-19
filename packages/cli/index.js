export function init () {
    // examples/help.js
    const cli = require('cac')()

    cli
    .command('demo', 'run a demo')
    .option('-i, --init', '初始化环境')
    .option('-d <id>, --download <id>', '通过ID下载模板或组件')
    .option('-p, --publish', '发布模板或组件')
    .option('-u, --update', '更新组件或模板')
    .option('-d, --dev', '本地化开发')
    .option('-c, --config', '本地化DEMO环境配置')
    .action((options) => {
        console.log('remove ' + (options.recursive ? ' recursively' : ''))
    })

    // Display help message when `-h` or `--help` appears
    cli.help()
    // Display version number when `-v` or `--version` appears
    // It's also used in help message
    cli.version('0.1.0')

    cli.parse()
}