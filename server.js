const express = require('express');
const { promises: fs } = require('fs');
const app = express();

async function getProd() {
    try {
        const products = await fs.readFile('./productos.txt', 'utf8');
        return JSON.parse(products)
    } catch (error) {
        return []
    }
}

app.get('/productos', (req, res) => { 

    async function getProducts() {
        try { 
            const products = await getProd()
            res.send(products)
        } catch (error) {
            res.send([]);
        }
    }
    getProducts()
     
})

app.get('/productosRandom', (req, res) => {
    async function getRandom() {
        try {
            const products = await getProd()
            const productsLength = products.length
            const n = Math.floor(Math.random() * productsLength) + 1;
            const productRandom= products.find(p => p.id == n);
            res.send(productRandom)
        } catch (error) {
            res.send([]);
        }
    }
    getRandom()
})



const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${(error)}`));