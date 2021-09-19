import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import Demo from './demo/index';

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    let demo = new Demo("zhantao", "chen");
    res.end(demo.greeter());
})

const hostname: string = "127.0.0.1";
const port: number = 4000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})