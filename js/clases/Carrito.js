class Carrito {
    constructor() {
        this.productos = [];
    }
        
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(id) {
        const productoExistente = this.productos.find(producto => producto.id === id);
        if (productoExistente) {
            this.productos = this.productos.filter(producto => producto.id !== id);
            return true;
        } 
        return false;
    }
    
    buscarProducto(idProducto) {
        return this.productos.find(producto => producto.id === idProducto);
    }

    mostrarCarrito() {
        let salidaCarrito = "";
        for(let producto of this.productos) {
            salidaCarrito += `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoria: ${producto.categoria}\n---\n`;
        }
        return salidaCarrito;
    }

    calcularCostoTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}