function mostrarMenu() {
    let opcion = prompt(
        "1. Ver productos disponibles\n" +
        "2. Ordenar productos por precio\n" +
        "3. Filtrar productos por categoría\n" +
        "4. Agregar producto al carrito\n" +
        "5. Ver productos en el carrito\n" +
        "6. Eliminar producto del carrito\n" +
        "7. Salir"
    );
    return opcion;
}

function imprimirProductos(productos) {
    let salida = '';
    productos.forEach(producto => {
        salida += `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoria: ${producto.categoria}\n---\n`;
    });
    return salida;
}

function imprimirCategorias(categorias) {
    let salida = '';
    categorias.forEach((categoria, index) => {
        salida += `${index+1}. ${categoria}\n`;
    });
    return salida;
}

function mostrarProductos() {
    let salidaProductos = imprimirProductos(tienda.productos);
    alert(salidaProductos ? salidaProductos : 'No hay productos disponibles');
}

function ordenarProductos() {
    let productosOrdenados = tienda.ordenarProductosPorPrecio();
    let salidaProductosOrdenados = imprimirProductos(productosOrdenados);
    alert(salidaProductosOrdenados ? salidaProductosOrdenados : 'No hay productos disponibles');
}

function filtrarProductos() {
    let categorias = tienda.obtenerCategorias();
    let seleccionCategorias = imprimirCategorias(categorias);
    let seleccionCategoria = prompt("Selecciona una categoría:\n" + seleccionCategorias);
    let categoria = categorias[seleccionCategoria-1];
    let productosFiltrados = tienda.filtrarProductosPorCategoria(categoria);
    let salidaProductosFiltrados = imprimirProductos(productosFiltrados);
    alert(salidaProductosFiltrados ? salidaProductosFiltrados : `No hay productos disponibles en la categoría ${categoria}`);
}

function agregarProducto() {
    let idProducto = prompt("Ingresa el ID del producto a agregar:");
    let producto = tienda.buscarProducto(parseInt(idProducto));
    if(producto) {
        carrito.agregarProducto(producto);
        let detallesProducto = `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoria: ${producto.categoria}`;
        alert("Producto agregado al carrito:\n" + detallesProducto);
    } else {
        alert("Producto no encontrado");
    }
}

function eliminarProducto() {
    let idProducto = prompt("Ingresa el ID del producto a eliminar:");
    let producto = carrito.buscarProducto(parseInt(idProducto));
    if(producto) {
        carrito.eliminarProducto(producto.id); // Aquí es donde debemos pasar el id del producto
        let detallesProducto = `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoria: ${producto.categoria}`;
        alert("Producto eliminado del carrito:\n" + detallesProducto);
        mostrarProductosCarrito();
    } else {
        alert("Producto no encontrado en el carrito");
    }
}

function mostrarProductosCarrito() {
    let salidaCarrito = carrito.mostrarCarrito();
    if (salidaCarrito === '') {
        alert('No hay productos en el carrito');
    } else {        
        let totalCarrito = carrito.calcularCostoTotal().toString();
        alert('-- CARRITO --\n' + salidaCarrito + "\nTOTAL: " + totalCarrito);
    }
}

let opcion;

do {
    opcion = mostrarMenu();
    
    switch(opcion) {
        case '1':
            mostrarProductos();
            break;
        case '2':
            ordenarProductos();
            break;
        case '3':
            filtrarProductos();
            break;
        case '4':
            agregarProducto();
            break;
        case '5':
            mostrarProductosCarrito();
            break;
        case '6':
            eliminarProducto();
            break;
        case '7':
            alert("Gracias por su visita");
            break;
        default:
            alert("Opción inválida. Por favor selecciona una opción del menú.");
    }
} while(opcion !== '7');