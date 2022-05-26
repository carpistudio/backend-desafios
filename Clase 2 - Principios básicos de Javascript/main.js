class Usuario {
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido 
        this.libros = []
        this.mascotas = []
    }
    getFullName (){
        return `Nombre y apellido: ${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre , autor){
        this.libros.push({nombre , autor});
    }
    getBookNames(){
        return this.libros.map(({nombre}) => (nombre));
    }
}

// Declaro el usuario y lo muestro
const usuario1 = new Usuario("Matías", "Coletta");
console.log(usuario1.getFullName());

// Agrego mascotas y las muestro
usuario1.addMascota("Perro");
usuario1.addMascota("Gato");
console.log(usuario1.countMascotas());

// Agrego libros y muestro los nombres
usuario1.addBook("El principito", "Antoine de Saint-Exupéry");
usuario1.addBook("El señor de los anillos", "J. R. R. Tolkien");
usuario1.addBook("Cien años de soledad", "Gabriel García Márquez");
usuario1.addBook("El guardián entre el centeno", "J. D. Salinger");
console.log(usuario1.getBookNames());