const { createServer } = require("node:http")
const fs = require("node:fs")
const { appendFile, readFile } = require("node:fs/promises")

fs.mkdirSync("logs", { recursive: true })

setInterval(async () => {
    await appendFile("logs/log.txt", `${new Date().toISOString()} tick\n`)
}, 10_000)

createServer(async (_req, res) => {
    const content = await readFile("logs/log.txt", "utf8").catch(() => "")
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(content)
}).listen(3000, () => console.log("on :3000"))