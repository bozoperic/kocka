document.getElementById("refresh").onclick=function() {myFunction()};

function myFunction() {

    
//prve kocke
var  broj1 = Math.floor(Math.random() * 6)+1;
var kocka1=(("images/dice")+ broj1 + (".png"));
// prva kocka
document.querySelector(".img1").setAttribute("src",kocka1);
var  broj2 = Math.floor(Math.random() * 6)+1;

var kocka2=(("images/dice")+ broj2 + (".png"));
//druga kocka
document.querySelector(".img2").setAttribute("src",kocka2);

if (broj1===broj2)
{
document.querySelector("h1").innerHTML="Nerješeno";

}
if (broj1>broj2)
{
document.querySelector("h1").innerHTML="Pobjedila je Mrta ";

}
if (broj1<broj2)
{
document.querySelector("h1").innerHTML="Pobjedila je Sara";

}

// //druge kocke
var  broj3 = Math.floor(Math.random() * 6)+1;
var kocka3=(("images/dice")+ broj3 + (".png"));
// // prva kocka
document.querySelector(".img3").setAttribute("src",kocka3);
 var  broj4 = Math.floor(Math.random() * 6)+1;

 var kocka4=(("images/dice")+ broj4 + (".png"));
// //druga kocka
 document.querySelector(".img4").setAttribute("src",kocka4);


// //treće kocke
var  broj5 = Math.floor(Math.random() * 6)+1;
 var kocka5=(("images/dice")+ broj5 + (".png"));
// // prva kocka
 document.querySelector(".img5").setAttribute("src",kocka5);
 var  broj6 = Math.floor(Math.random() * 6)+1;

 var kocka6=(("images/dice")+ broj6 + (".png"));
// //druga kocka
 document.querySelector(".img6").setAttribute("src",kocka6);


console.log(broj1);
console.log(broj2);




  }