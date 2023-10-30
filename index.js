const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(`Acessando dados do usuário ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    console.log(caminhoBase)
})

app.listen(3001, () =>{
    console.log("Servidor rodando na porta 3000!")
})

