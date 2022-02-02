// ? Boolzapp

/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Aleandro Basilico',
            avatar: '_io',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Matteo',
                avatar: '_4',
            },
            {
                name: 'Andrea',
                avatar: '_5',
            },
        ]
    }
})