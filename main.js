window.addEventListener("DOMContentLoaded", function () {

//sendEmail("LeoEmailSend", "leo_nardo136@hotmail.com", "miragri e nos bro");    
    
const addBoxBtn = document.querySelector('.maisItem');
let carouselInfoTitle = document.querySelector('.carrossel h2');
let carouselInfoMessage = document.querySelector('.carrossel p');

const carouselImages = document.querySelector('.carousel-images');
const carousel = document.querySelector('.carousel');
const carouselButtons = document.querySelectorAll('.carousel button');

const carouselButtonPrevious = document.querySelector('.carousel-button-previous');
const carouselButtonNext = document.querySelector('.carousel-button-next');
    
const whatsappContato = document.querySelectorAll('.whatsapp-contato');
const imagemAlerta = document.querySelector('#imagem-alerta');

const numberOfImages = document.querySelectorAll('.carousel-images img').length;
let imageIndex = 1;
let translateX = 0;
let constToChange = 0;
let imageWidth = 800;
    
var sections = document.querySelectorAll('section');   
    
const emailBtn = document.querySelector('.submitBtn');
    
emailBtn.addEventListener('click', getFormInfos);
    
/*window.setTimeout(imageAppear, 1500);

function imageAppear(){
    imagemAlerta.style.display ="block";
}
    */
function getFormInfos(){
    
    let contador = 0;
    var emailMessage = "";
    
    const entryBox = document.querySelectorAll('.topBox');
    
    //console.log(document.querySelector('#nome').value);
    emailMessage += "Nome: " + document.querySelector('#nome').value + ". <br/> "
    
    //console.log(document.querySelector('#empresa').value);
    emailMessage += "Empresa: " + document.querySelector('#empresa').value + ". <br/> "
    
    //console.log(document.querySelector('#cidade').value);
    emailMessage += "Cidade: " + document.querySelector('#cidade').value + ". <br/> "
    
    //console.log(document.querySelector('#estado').value);
    emailMessage += "Estado: " + document.querySelector('#estado').value + ". <br/> "
    
    //console.log(document.querySelector('#telefone').value);
    emailMessage += "Telefone: " + document.querySelector('#telefone').value + ". <br/> "
    
    //console.log(document.querySelector('#celular').value);
    emailMessage += "Celular: " + document.querySelector('#celular').value + ". <br/> "
    
    //console.log(document.querySelector('#email').value);
    emailMessage += "Email: " + document.querySelector('#email').value + ". <br/> "
    
    entryBox.forEach(div => {
        //console.log("Contador: " + contador);
        
        //console.log(document.querySelectorAll('#metro')[contador].value);
        emailMessage += "M²: " + document.querySelectorAll('#metro')[contador].value + ". <br/> "
       
        //console.log(document.querySelectorAll('#material')[contador].value);
        emailMessage += "Material: " + document.querySelectorAll('#material')[contador].value + ". <br/> "
        
        //console.log(document.querySelectorAll('#medida')[contador].value);
        emailMessage += "Medida: " + document.querySelectorAll('#medida')[contador].value + ". <br/> "
        
        //console.log(document.querySelectorAll('#espessura')[contador].value);
        emailMessage += "Espessura: " + document.querySelectorAll('#espessura')[contador].value + ". <br/> "
       
        //console.log(document.querySelectorAll('#acabamento')[contador].options[document.querySelectorAll('#acabamento')[contador].selectedIndex].text);
        emailMessage += "Acabamento: " + document.querySelectorAll('#acabamento')[contador].options[document.querySelectorAll('#acabamento')[contador].selectedIndex].text + ". <br/> "
        contador++;
    })
    
    //console.log(emailMessage);
    
    sendEmail(document.querySelector('#nome').value,           document.querySelector('#email').value,
        emailMessage);
    
    /*
    metroValues.forEach(input => {
        console.log("Valor: " + input.value);
    })
    
    acabamentoValues.forEach(select => {
        console.log("Acabamento: " + select.options[select.selectedIndex].text);
    })
    */
}
    
onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;
    
    sections.forEach( section => {
        if(scrollPosition >= section.offsetTop - 200
           && scrollPosition < section.offsetTop + section.offsetHeight - 200){
            var currentId = section.attributes.id.value;
            //console.log("id: " + currentId);
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    })
}

var removeAllActiveClasses = function() {
    document.querySelectorAll('.nav-links a').forEach(el => {
        el.classList.remove("active");
    })
}

var addActiveClass = function (id) {
    //console.log(id);
    var selector = `.nav-links a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
}
    
//document.getElementById("btn").addEventListener("click", addBox);
function addBox()
{
    var temp = document.getElementById("temp").content;
    var copy = document.importNode(temp, true);
    document.getElementById("addBox").appendChild(copy);
}

setInterval(function () {changeImageWidth()}, 200);

function changeImageWidth(){
//imageWidth = $(window).width() * 0.6;
//console.log(imageWidth);
}

    
var height = $('.hero').height();
    
$(window).scroll(function(){
   if($(this).scrollTop() > height) {
    $('.hero').addClass('fixed');
    }
    else{
        $('.hero').removeClass('fixed');
      }
});

addBoxBtn.addEventListener('click', clicked);

function clicked(){
  //alert("CLICOUOUOU");
    addBox();
}

function timeToChangeImage(inscreaseConst){
  if(inscreaseConst){
    constToChange++;
    if(constToChange >= 5){
      changeImage(false);
      constToChange = 0;
    }
  }
  else{
    constToChange = 0;
  }
}

setInterval(function () {timeToChangeImage(true)}, 1000);

carouselButtonPrevious.addEventListener('click', carouselPreviousButton);    
carouselButtonNext.addEventListener('click', carouselNextButton);  
    
function carouselNextButton(){
    changeImage(false);
    timeToChangeImage(false);
}
function carouselPreviousButton(){

    changeImage(true);
    timeToChangeImage(false);
}    
    
/*imagemAlerta.forEach(image =>{
       image.style.display = "block";
    for(i=1;i<100;i++) // creates delay between blinks
    f.style.display="none";
   })); */    
    
whatsappContato.forEach(button => button.addEventListener('click', function(){
       window.open('https://api.whatsapp.com/send?phone=5528999563579&text=Ol%C3%A1%2C+tenho+interesse+no+seu+produto!','_blank');
   }));    
    
/*carouselButtons.forEach(button => button.addEventListener("click", function (event){
       if(event.target.id == 'previous'){
           
          changeImage(true);
          timeToChangeImage(false);
        }
        else{
          changeImage(false);
          timeToChangeImage(false);
        }
   }));
*/
function changeImage(isPrevious){
    calculteImageWidth();
  if(isPrevious){
      if(imageIndex == 1){
            imageIndex = numberOfImages;
            translateX -= imageWidth * (numberOfImages - 1);
        }
      else if(imageIndex != 1){
               imageIndex--;
               translateX = -(imageWidth * (imageIndex-1));
           }
      //else if(imageIndex == 3){}
       }
       else{
           if(imageIndex == numberOfImages){
              imageIndex = 1;
              //translateX += imageWidth * (numberOfImages - 1);
              translateX = 0;
            }
           else if(imageIndex !== numberOfImages){
               imageIndex++;
               translateX = -(imageWidth * (imageIndex-1));
           }
       }
       carouselImages.style.transform = `translateX(${translateX}px)`;
       changeText();
}

function changeText(){
  switch(imageIndex){
    case 1:
      carouselInfoTitle.innerHTML = 'Obra em Edifício Residencial Reserva Essencial em Brasília - DF';
      carouselInfoMessage.innerHTML = "Responsável pela obra Brasal Incorporações.<br>Aplicação de 5.650 m² dos materiais Branco Siena, Ocre Itabira, Bege Bahia e Preto São Gabriel em fachada, pilares, bancadas, soleiras e peitoris.";
    break;
    case 2:
      carouselInfoTitle.innerHTML = ' Obra em Edifício Residencial Reserva Biografia em Brasília - DF';
      carouselInfoMessage.innerHTML = "Responsável pela obra Brasal Incorporações.<br>Aplicação de 1.995 m² dos materiais Limestone Bateig Blue, Bege Bahia, Crema Marfil e Preto São Gabriel em bancadas, revestimentos internos, soleiras e peitoris.";
    break;
    default:
      carouselInfoTitle.innerHTML = 'OBRA EM EDIFÍCIO RESIDENCIAL E COMERCIAL VERSATO EM CEILÂNCIA - DF';
      carouselInfoMessage.innerHTML = "Responsável pela obra Brasal Incorporações.<br>Aplicação de 1.600 m² do material Branco Fortaleza em bancadas, soleiras e peitoris.";
    break;
  }
}
    
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'leonardoduarte1361996@gmail.com',
        Password: "pmyxeenpxplhmnpy",
        //To: 'leo_nardo136@hotmail.com',
        To: `${email}`,
        From: 'leonardoduarte1361996@gmail.com',
        Subject: `${name} tem interesse no seu produto`,
        //Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
        Body: `${message}`,
    }).then((message) => alert("Seu email foi enviado com sucesso"));
}   
    
function calculteImageWidth(){
    var width = $(window).width();
    if(width<=400){
        imageWidth = 250;
    }
    else if(width<=500){
        imageWidth = 350;
    }
    else if(width <= 600){
        imageWidth = 450;
    }
    else if(width<=700){
        imageWidth = 500;
    }
    else if(width<=800){
        imageWidth = 600;
    }
    else if(width<=900){
        imageWidth = 700;
    }
    else if(width > 900){
        imageWidth = 800;
    }
    //console.log("Image Width: " + imageWidth);
}
    
var show = document.getElementById("nav-links");
var showMenuIcon = document.getElementById("showMenu");
    
function myFunction(x) {
  if (x.matches) { // If media query matches
    //document.body.style.backgroundColor = "yellow";
    showMenuIcon.style.display = "block";
    show.style.display = "none";
      
  } else {
    //document.body.style.backgroundColor = "pink";
      show.style.display = "block";
      showMenuIcon.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
    
    
/*
function pixel400(px400) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
    if (px400.matches) 
    { // If media query matches
        carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
        changeText();
        console.log("Deu bom");
    }
    else
    {
        
    }     
//changeText();
}  
function pixel500(px500) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
}
function pixel600(px600) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
}
function pixel700(px700) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
}
function pixel800(px800) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
}
function pixel900(px900) {
calculteImageWidth();
carouselImages.style.transform = `translateX(${-(imageWidth * (imageIndex-1))}px)`;
}

var px400 = window.matchMedia("(max-width: 400px)")
var px500 = window.matchMedia("(max-width: 500px)")
var px600 = window.matchMedia("(max-width: 600px)")
var px700 = window.matchMedia("(max-width: 700px)")
var px800 = window.matchMedia("(max-width: 800px)")
var px900 = window.matchMedia("(max-width: 900px)")
pixel400(px400) // Call listener function at run time
px400.addListener(pixel400) // Attach listener function on state changes
pixel500(px500)
px500.addListener(pixel500) 
pixel600(px600)
px600.addListener(pixel600) 
pixel700(px700)
px700.addListener(pixel700) 
pixel800(px800)
px800.addListener(pixel800) 
pixel900(px900)
px900.addListener(pixel900) 
*/

});

