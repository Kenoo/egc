import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import Hello from './modules/Hello';
// 明确类型麻烦些，却会获得非常详细的语法提示

let hello = new Hello("zhantao", "chen");
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    res.end(hello.greeter());
})

const hostname: string = "127.0.0.1";
const port: number = 4000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})