// ? Boolzapp

/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

/* Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. */

/* Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato (vedi immagine in allegato)
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti */

console.log('Vue ok', Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const root = new Vue({
    el: '#root',
    data: {
        newMessage: '',
        currentIndex: 0,
        user: {
            name: 'Aleandro Basilico',
            avatar: '_io',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Matteo',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Andrea',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto un nuovo bar?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'No, non lo sapevo ',
                    status: 'received'
                }
                ],
            },
        ]
    },

    methods: {
        isContact(index) {
            this.currentIndex = index;
        },

        sendMessage() {
            if (!this.newMessage) return;

            this.setMessage(this.newMessage, 'sent');
            this.newMessage = '';

            setTimeout(() => {
                this.setMessage('Ok', 'received');
            }, 3000)
        },

        setMessage(text, status) {
            const newsMess = {
                text,
                date: dayis().format('DD/MM/YYYY hh/mm/ss'),
                status,
            }
            this.contacts[this.currentIndex].messages.push(newsMess);

        }

    }
})
