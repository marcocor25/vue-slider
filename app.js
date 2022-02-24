// TEST
console.log('Hello Vue!');

// COLLEGAMENTO VUE.JS
const app = new Vue({
    el: '#root',
    data: {
        title: 'slider',
        sliderClass: 'slider',
        descriptionClass: 'descrizione',
        overlayClass: 'overlay',
        itemClass: 'item',
        currentIndex: 0,
        arrayObject: [
            {
                titolo: 'Madrid',
                immagine: 'img/01.jpeg',
                descrizione: 'Capitale della Spagna.',
            },
            {
                titolo: 'Londra',
                immagine: 'img/02.jpeg',
                descrizione: 'Capitale del Regno Unito.',
            },
            {
                titolo: 'Milano',
                immagine: 'img/03.jpeg',
                descrizione: 'Capitale economica e della moda italiana.',
            },
            {
                titolo: 'Palermo',
                immagine: 'img/04.jpeg',
                descrizione: 'Capitale italiana della cultura e dello street food.',
            },
            {
                titolo: 'Parigi',
                immagine: 'img/05.jpeg',
                descrizione: 'Capitale della Francia.',
            },
        ],
    },
    methods: {

        // FUNZIONE CHEVRON-DOWN
        next: function(){
            if (this.currentIndex !== this.arrayObject.length -1) {
                this.currentIndex ++
            } else {
                this.currentIndex = 0
            }
        },

        // FUNZIONE CHEVRON-UP
        prev: function(){
            if (this.currentIndex !== 0) {
                this.currentIndex --
            } else {
                this.currentIndex = this.arrayObject.length -1
            }
        },
    }
    
});

console.log(app);