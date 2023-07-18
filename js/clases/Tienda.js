class Tienda {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    buscarProducto(id) {
        return this.productos.find(producto => producto.id === id);
    }

    ordenarProductosPorPrecio() {
        return this.productos.sort((a, b) => a.precio - b.precio);
    }

    filtrarProductosPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    obtenerCategorias() {
        let categorias = this.productos.map(producto => producto.categoria);
        return [...new Set(categorias)];
    }
}