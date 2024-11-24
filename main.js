// on sélectionne les éléments html avec les méthodes du DOM
const form = document.getElementById('form'); 
const taskInput = document.getElementById('task-input'); 
const taskList = document.getElementById('task-list'); 

let newTask = null; // variable pour stocker la valeur quand on modifie dans l'input


function addTask() { // fonction qui ajoute une nouvelle tache
    const taskValue = taskInput.value;  // variable qui prend la valeur de notre input

    if (taskValue) { // si mon input à une valeur alors 
        const listItem = document.createElement('li'); // variable qui crée un li 
        const taskText = document.createElement('span'); // variable qui crée un span 
        taskText.textContent = taskValue;  // on donne la valeur de notre input a notre span

        const container = document.createElement('span');

        const deleteButton = document.createElement('button'); // variable qui crée un bouton delete
        deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'; // style du bouton
        deleteButton.addEventListener('click', () => { // ecouteur d'évenement qui au clic utilise un callback qui supprime l'élément li 
            taskList.removeChild(listItem); 
        });

        const editButton = document.createElement('button'); // variable qui crée un bouton edit
        editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>'; // style du bouton
        editButton.addEventListener('click', () => { // ecouteur d'evenement qui au clic utilise un callback qui appelle une fonction editTask qui a comme paramètre notre variable qui crée un span 
            editTask(taskText); 
        });

        container.append(editButton, deleteButton); // ajout des boutons edit et delete au container
        listItem.appendChild(taskText); // ajout du span au li 
        taskList.appendChild(listItem); // ajout du li à l'élément parent ul 
        listItem.append(container); // ajout le container à l'élément li
        taskInput.value = ''; // vide l'input 
    }
}


function editTask(taskText) { // fonction pour modifier le span 
    taskInput.value = taskText.textContent; // modifie le texte du span avec la valeur de l'input
    newTask = taskText; // notre variable vide prend maintenant la valeur du span 

    form.addEventListener('submit', function(event) { // écouteur d'évènement quand on utilise le bouton avec l'id submit dans le html 
        event.preventDefault(); // empêche le rechargement de la page
    
        const newTaskValue = taskInput.value;  // variable qui prend la nouvelle valeur de notre input
        if (newTaskValue) { // si mon input a une valeur alors
            newTask.textContent = newTaskValue; // modifie le span avec la valeur de newTaskValue
            newTask = null; // vide la variable de toute valeur
        }
        taskInput.value = ''; // vide l'input
    });
}
form.addEventListener('submit', function(event) { // écouteur d'évènement quand on utilise le bouton submit 
    event.preventDefault(); // empêche le rechargement de la page
    if (newTask === null) { // si la variable newTask n'a pas de valeur
        addTask(); // appelle la fonction qui crée une nouvelle tache
    } else { } 
});