import http from 'http';
import path from 'path';
import getMarkdown from './lib/get-markdown';
import processMarkdown from './lib/process-markdown';

const port = 3000;
const syntax = path.resolve(__dirname, "./resources/syntax.md");

const server = http.createServer()

server.on('request', async (_, res) => {
    const md = await getMarkdown(syntax)
    const vFile = await processMarkdown(md, { gotOptions: { retry: 0 } })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.end(JSON.stringify(vFile.messages))
})

server.listen(port, () => console.log(`Server running on port ${port}`))
