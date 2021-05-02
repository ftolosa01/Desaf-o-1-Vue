class Producto {
    constructor(producto = {}) {
        this.nombre = producto.nombre || ""
        this.descripcion = producto.descripcion || ""
        this.precio = producto.precio || ""
        this.status = producto.status || false        
    }
}
const app = new Vue({
    el: "#app",
    data: {
        error: false,
        productos: [],
        newNombre: '',
        newDescripcion: '',
        newPrecio: '',
        editProducto: '',
        editIndex: -1,
    },
    methods: {
        addProducto() {
            if (this.newNombre.length > 0 && this.newDescripcion.length > 0 && this.newPrecio.length > 0) {
                if(this.newPrecio > 0){
                console.log(this.newNombre);
                this.productos.push(new Producto({nombre: this.newNombre, descripcion: this.newDescripcion, precio: this.newPrecio}));
                this.newNombre = "";
                this.newDescripcion = "";
                this.newPrecio = "";
                this.error = false;
                } else 
                    this.error = true;
                
            }
                
        },
        deleteProducto(index) {
            this.productos.splice(index, 1);
        },
        setProducto(index) {
            this.editIndex = index;
            this.editProducto = this.producto[index].nombre,this.productos[index].descripcion, this.producto[index].precio;
            this.newNombre= this.producto[index].nombre.value;
            this.newDescripcion = this.productos[index].descripcion.value;
            this.newPrecio  = this.producto[index].precio.value;

        },
        updateProducto(index) {
            this.productos[index].nombre = document.getElementById("1").value;
            this.productos[index].descripcion = document.getElementById("2").value;
            this.productos[index].precio = document.getElementById("3").value;
            this.editIndex = -1;
        }
    },
})
