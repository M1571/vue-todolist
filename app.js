// console.log('prova')

/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”:
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

// -------------------------------
// START 


const main = new Vue({
    
    el: '#main',
    data: {
        newTodo: '',
        todoList: [
            'git commit',
            'git push',
            'leave building'
        ]
    },

    methods: {

        addTodo: function() {
            console.log(this.newTodo, this.newTodo.lenght)
            if(this.newTodo !== '') {
                console.log('written');
                this.todoList.push(this.newTodo);
            } else {
                console.log('empty');
            }
            this.newTodo = '';
        },

        deleteTodo(i) {
            this.todoList.splice(i,1);
        }
    },
}

)


// -------------------------------
// START

/*
const main = new Vue ({
    
    el: '#main',
    data: {
        newTodo: '',
        todoList: [
            {
                text: 'git commit',
                done: 'true',
            },

            {
                text: 'git push',
                done: 'true',
            },

            {
                text: 'leave building',
                done: 'false',
            },
        ]
    },

    methods: {

        addTodo: function() {
            console.log(this.newTodo, this.newTodo.lenght)
            if(this.newTodo !== '') {
                this.todoList.push({
                    text: this.newTodo,
                    done: false,
                }
                )

            this.newTodo = '';
        }
    }
}

)
*/