const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Sisi ni mafuot")
    res.end(`
        <h1>Welcome to DOW. The place for all your pods</h1>
        <p>Ama wewe unaona aje</p>
    `)
})

const PORT = 4290
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


