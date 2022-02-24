// TEST
console.log('Hello Vue!');

// COLLEGAMENTO VUE.JS
const app = new Vue({
    el: '#root',
    data: {
        sliderClass: 'slider',
        descriptionClass: 'descrizione',
        itemClass: 'item',
        arrayObject: [
            {
                titolo: 'Svezia',
                immagine: 'img/01.jpg',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                // titolo: 'Svizzera',
                immagine: 'img/02.jpg',
                // descrizione: 'Lorem ipsum',
            },
            {
                // titolo: 'Gran Bretagna',
                immagine: 'img/03.jpg',
                // descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                // titolo: 'Germania',
                immagine: 'img/04.jpg',
                // descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                // titolo: 'Paradise',
                immagine: 'img/05.jpg',
                // descrizione: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },
});

console.log(app);