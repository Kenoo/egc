import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
// 明确类型麻烦些，却会获得非常详细的语法提示
 
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World: czt\n");
})

const hostname: string = "127.0.0.1";
const port: number = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})