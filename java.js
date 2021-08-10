var images=["dad.jpeg","mom.jpeg","sister.jpeg","me.jpeg"];
var names=["dad","mom","sister","me"];
var i=0;
function next(){
    console.log(i);
 document.getElementById("image").src=images[i];
 document.getElementById("memberss").innerHTML=names[i];
 i++;
 if(i>4){
     i=0;
 }
}