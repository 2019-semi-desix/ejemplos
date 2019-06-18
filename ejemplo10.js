var estudiante = {
    nombre: 'Erick',
    apellido: 'Agrazal',
    edad: 28,
    materias: {
        programacion: '100',
    }
};

function imprimirEstudiante({ nombre, apellido, edad, materias: { programacion } }){
    console.log(`${nombre} ${apellido} ${edad}`);
    console.log(`${programacion}`);
}

imprimirEstudiante(estudiante);
