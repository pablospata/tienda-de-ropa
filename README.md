# Proyecto Tienda de Ropa - Aplicación con ventanas emergentes

Segunda Pre-Entrega del curso de JavaScript de CoderHouse. 

Este proyecto simula una aplicación de una tienda de ropa. La aplicación está dividida en varios archivos para modularizar su funcionalidad.

## Descripción

Se incluyen tres clases principales:

- `Producto`: representa un producto con propiedades como id, nombre, precio, descripción y categoría.
- `Carrito`: representa un carrito de compras con la capacidad de agregar y eliminar productos.
- `Tienda`: representa la tienda en sí, capaz de agregar productos, buscar productos, ordenarlos por precio y filtrarlos por categoría.

## Archivos

- `data.js`: Este archivo se encarga de inicializar y crear todas las instancias de los productos de la tienda. Aquí es donde se instancian las clases `Tienda` y `Carrito`, y se agregan todos los productos a la tienda mediante la función `agregarProducto` de la clase `Tienda`.

- `main.js`: Este archivo es el punto principal de interacción del usuario con la tienda. Contiene la lógica del menú principal y la funcionalidad que permite al usuario seleccionar diferentes opciones, como ver los productos disponibles, ordenarlos por precio, filtrarlos por categoría, y agregar o eliminar productos del carrito. Estas acciones se realizan mediante funciones como `mostrarMenu`, `mostrarProductos`, `ordenarProductos`, `filtrarProductos`, `agregarProducto`, `eliminarProducto` y `mostrarProductosCarrito`.

## Uso

Para interactuar con la aplicación, el usuario debe elegir una opción del menú principal que se muestra al iniciar la aplicación. Las opciones incluyen:

1. Ver productos disponibles
2. Ordenar productos por precio
3. Filtrar productos por categoría
4. Agregar producto al carrito
5. Ver productos en el carrito
6. Eliminar producto del carrito
7. Salir

## Tecnologías utilizadas

- JavaScript

## Autor

Pablo L. Spata