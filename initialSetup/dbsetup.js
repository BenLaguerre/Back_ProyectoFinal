//Archivo usado para rellenar la base de datos desde la API de randomUser();
/*
const dbconnect = require("../database/mongo");

const fetch = require("node-fetch");

let profilesData;

//Foncion randomUser
async function randomUser() {

    await fetch("https://randomuser.me/api/?results=20")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      // Access your data here
      profilesData = data;
      console.log(data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }

randomUser();


const { Profile }  = require('../model/perfil');

//Collection room
function profiles () {

  for (let profil of profilesData.results) {
    const filer = new Profile ({ 
      name : {
        firstName : profil.name.first, 
        lastName : profil.name.last,
      },
      description: randBio(),
      music: randMusic(),
      gender: profil.gender,
      age: profil.age,
      email: profil.email,
      city: profil.location.city,
      image: profil.picture.medium
    });
     filer.save();
  }
}

setTimeout(function(){ 
  console.log("Executing function perfiles...")
  profiles(); 
}, 2000);


const { music } = require('./bioMusic');
const { description } = require('./bioMusic');


function randMusic(){
  return music[Math.floor(Math.random() * 6)]
}

function randBio(){
  return description[Math.floor(Math.random() * 10)]
}

*/