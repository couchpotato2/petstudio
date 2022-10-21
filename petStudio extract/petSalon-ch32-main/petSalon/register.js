//object literal {}
let petSalon = {
    //attributes
    name:"The Fashion Pet",
    phone: "666-666-666",
    address:{
        country:"Mex",
        city:"Tijuana",
        street: "Universidad",
        number:"263-k",
        zip:"22141"
    },
    pets:[]
}
//CONSTRUCTOR
let count=0;
// < --------- this are the arguments (local vars) ---> 
function Pet(name,age,gender,breed,service,owner,phone){
    //the real attributes are the next: 
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner; // this will be a problem GOAT 
    this.contactPhone=phone;//this will be a problem
    this.id=count++;
}

//getting the values from the inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let selectService = document.getElementById("selService");

function isValid(newPet){
    let valid=true;
    if(newPet.service==""){
        valid=false;
    }
    return valid;
}

//register function
function register(){   
    //create the obj
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,selectService.value);

    if(isValid(thePet)==true){
         //push the pet into the array
        petSalon.pets.push(thePet);
        displayPetCards();
        //display the array
        clearInputs();
        displayNumberOfPets();
    }else{
        alert("Enter a service");
    }
   
}
function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";	
    inputBreed.value="";
    selectService.value="";
}
function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets in the system.`;
}

function deletePet(petID){  
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){ // traveling the array
        let aPet = petSalon.pets[i]; //getting the pet
        if(aPet.id==petID){ //comparing 
            deleteIndex=i;
            console.log("The deleted pet is in the position" + deleteIndex);
        }
    }
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(petID).remove();
    displayNumberOfPets();
}
function init(){
    // create a new pet
    let scooby = new Pet("Scooby",59,"Male","Dane","Grooming","Shaggy","777-777-777");
    let scrappy = new Pet("Scrappy",49,"Male","Mixed","Vaccine","Shaggy","777-777-777");
    // push the pet into the array 
    petSalon.pets.push(scooby,scrappy);
    displayNumberOfPets();
    displayPetCards();
}

window.onload = init;
