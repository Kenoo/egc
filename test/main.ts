import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import Hello from './modules/Hello';

let hello = new Hello("zhantao", "chen");
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    res.end(hello.greeter());
})

const hostname: string = "127.0.0.1";
const port: number = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})