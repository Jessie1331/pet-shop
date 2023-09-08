//object literal
let salon = {
    name:"Paws & Claws",
    phone:"(702)555-5555",
    address:{
        street:"1638 Las Vegas Blvd",
        zip:"89052",
        number:"35A"
    }
    pets:[ {
        name:"scooby",
        age:6,
        type:"dog",
        bread:"Dane",
        service:"grooming",
        }
    
    {
        name:"jo",
        age:11,
        type:"dog",
        bread:"terrior",
        service:"vaccines",
        }
        {
            name:"alice",
            age:"Unknown",
            type:"bird",
            bread:"cackatoo",
            service:"dewinged",
        
        }
        {
            name:"meow meow",
            age:4,
            type:"cat",
            bread:'tabby',
            sevice:"grooming",
        }
        {   
        name:"bubby">
        age:"6",
        type:"dog",
        bread:'pooddle mix',
        sevice:"grooming",
            
        }
    ]
}
function displayPetNames(){


for(let i=0; i<salon.pets.length; i++){
    console.log(salon.pets[i++].name);
}
}
displayPetNames();//run the function