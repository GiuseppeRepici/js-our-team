const strutturadati = [
     {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
},
    {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
},
    {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
},
    {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
},
    {
nome: "Scott Estrada",
ruolo: "Developer",
foto: "img/scott-estrada-developer.jpg"
},
    {
nome: "Walter Gordon",
ruolo: "Office Manager",
foto: "img/walter-gordon-office-manager.jpg"
},


];

const stampa = document.getElementById("dom");

for(let i=0; i<strutturadati.length; i++) {
    
    stampa.innerHTML += `<div class="scheda col-5 col-lg-3"> <h1 class="titolo"><strong>${strutturadati[i].nome}</strong></h1> <br> ${strutturadati[i].ruolo} <br> <img src="${strutturadati[i].foto}">  <br> </div>`;
    
}
