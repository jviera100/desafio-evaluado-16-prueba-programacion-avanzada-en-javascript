// videos.js

// Módulo para manejar los videos
var moduloVideo = (function() {
    function mostrarVideo(url, id) {
        var iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        insertarVideo: function(url, id) {
            mostrarVideo(url, id);
        }
    };
})();

// Clase padre Multimedia
export class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
export class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        moduloVideo.insertarVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo = 0) {
        let urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        moduloVideo.insertarVideo(urlConTiempo, this.id);
    }
}

// Instancias de la clase Reproductor para cada video
var lobo = new Reproductor('https://www.youtube.com/embed/humdZKv-P-0', 'lobo');
var leon = new Reproductor('https://www.youtube.com/embed/6Oobso9uExA', 'leon');
var serpiente = new Reproductor('https://www.youtube.com/embed/c8IQz9ymvlM', 'serpiente');
var oso = new Reproductor('https://www.youtube.com/embed/kTClrH3c7Wc', 'oso');
var aguila = new Reproductor('https://www.youtube.com/embed/q0htH8drH8c', 'aguila');

// Reproducir cada video
lobo.playMultimedia();
leon.playMultimedia();
serpiente.playMultimedia();
oso.playMultimedia();
aguila.playMultimedia();

// Exportar las instancias de los reproductores
export { lobo, leon, serpiente, oso, aguila };
