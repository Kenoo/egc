"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cac_1 = require("cac");
var cli = (0, cac_1.cac)('@egc/cli');
cli
    .command('init', '初始化环境', { allowUnknownOptions: true })
    .option('-l, --list', '查看配置信息')
    .action(function (dir, options) {
    console.log('test');
});
// Listen to unknown commands
cli.on('command:*', function () {
    console.error('Invalid command: %s', cli.args.join(' '));
    process.exit(1);
});
cli.help();
cli.version('0.1.0');
cli.parse();
//# sourceMappingURL=main.js.map