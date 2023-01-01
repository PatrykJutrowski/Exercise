let closebtns = document.querySelectorAll("span");
//add animal button form
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('section button');
const backdrop = document.getElementById('backdrop');
const cancelAdd = addMovieModal.querySelector('.btn--passive');
const addButton = addMovieModal.querySelector('#btn--success');
const userInput = addMovieModal.querySelectorAll('input');

const clearInputs = () =>{
    for (const usrInput of userInput){
        usrInput.value = "";
    }
}

let listOfAnimals = [
    {   name:"Meowsalot",
        age:10,
        type:"cat",
        favFoods:["tuna", "catnip", "celery"]
    },

    {   name:"Barksalot",
        age: 7,
        type: "cat",
        favFoods: []
    },
    {   name: "Barksalot",
        age: 10,
        type: "dog",
        favFoods: ["tuna", "catnip", "celery"]
    }
];
const name = "NAME: ";
const age = "AGE: ";
const typ = "TYPE: ";
const favFood = "FOOD: "
document.getElementById('li').innerHTML = name +listOfAnimals[0].name +"</br>" + age+ listOfAnimals[0].age +"</br>"+
    typ + listOfAnimals[0].type +"</br>" + favFood + listOfAnimals[0].favFoods + "</br>";
document.getElementById('li1').innerHTML = name+ listOfAnimals[1].name + "</br>" + age+ listOfAnimals[1].age +"</br>"+
    typ + listOfAnimals[1].type +"</br>" + favFood + listOfAnimals[1].favFoods + "</br>"
 document.getElementById('li2').innerHTML =  name+ listOfAnimals[2].name +"</br>" +age+ listOfAnimals[2].age +"</br>"+
    typ + listOfAnimals[2].type +"</br>" + favFood +  listOfAnimals[2].favFoods +"</br>"

const addNewAnimal = () =>{
    const nameAnimal = userInput[0].value;
    const type = userInput[2].value;
    const ageAnimal = userInput[3].value;
    const image = userInput[1].value;
    if (nameAnimal.trim() === "" ||
        type.trim() === "" ||
        image.trim() === "" ||
        ageAnimal.trim() === ""
    ){
        alert("Please enter a valid value ");
        return;
    }
    const newAnimal = {
        name: nameAnimal,
        url: image,
        type: type,
        age : ageAnimal,
    };
    listOfAnimals.push(newAnimal);
    console.log(newAnimal);
    toggleMovieModal();
    renderLiElement(newAnimal.name, newAnimal.type, newAnimal.age, newAnimal.url);
    clearInputs();
};
addButton.addEventListener('click', addNewAnimal );
const renderLiElement = (type,name,age,imageURL) =>{
    const newLiElement = document.createElement('li');
    newLiElement.innerHTML= `<li class="animalElement">
            <img alt="${imageURL}" src="${imageURL}">
            <span class="close">&times;</span>
            <ul class="ulOfLi">
                <li>Name : ${name}</li>
                <li>Age :  ${age}</li>
                <li>Type : ${type}</li>
                <li>Food </li>
            </ul>
            </li>`;
    newLiElement.querySelector('.close').addEventListener('click', closeFunction);
    const listRoot  = document.getElementById('ulList');
    listRoot.append(newLiElement);
    newLiElement.style.border = 'none';
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancel = () =>{
    toggleMovieModal();
    clearInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAdd.addEventListener('click', cancel);


//close li element
const closeFunction = function() {
    this.parentElement.style.display = 'none';
};
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", closeFunction);
}
