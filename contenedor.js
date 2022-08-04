const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta){
        this.ruta = ruta;
      
    }


    async getAll() {
        try {
            const products = await fs.readFile(this.ruta, 'utf8');
            return JSON.parse(products);
        } catch (error) {
            return [];
        }

    } 
} 
    

    module.exports = Contenedor;












