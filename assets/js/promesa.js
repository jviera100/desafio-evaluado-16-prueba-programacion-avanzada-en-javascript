export function obtenerImagenesDeAnimales() {
    return new Promise((resolve, reject) => {
        // Simulación de una llamada a una API
        setTimeout(() => {
            const data = [
                { name: 'Leon', img: 'leon.jpg' },
                { name: 'Lobo', img: 'lobo.jpg' },
                { name: 'Oso', img: 'oso.jpg' },
                { name: 'Serpiente', img: 'serpiente.jpg' },
                { name: 'Aguila', img: 'aguila.jpg' }
            ];
            resolve(data); // Resuelve la promesa con los datos obtenidos
        }, 1000); // Simula un retraso de 1 segundo
    });
}
