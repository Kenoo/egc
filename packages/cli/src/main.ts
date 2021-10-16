import { cac } from 'cac';
import EGC_Init from './init/index';

import jsonfile from 'jsonfile'

const cli = cac('@egc/cli');
cli
  .command('init', '初始化环境', {allowUnknownOptions : true})
  .option('-l, --list', '查看配置信息')
  .action((dir, options) => {
    return EGC_Init.init(dir, options); 
  })
// Listen to unknown commands
cli.on('command:*', () => {
    console.error('Invalid command: %s', cli.args.join(' '))
    process.exit(1)
})

cli.help()
cli.version('0.1.0')
cli.parse()