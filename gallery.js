
function upDate(previewPic){
  
       document.querySelector("#image").style.backgroundImage="url('"+previewPic.src+"')";
       document.getElementById("image").innerHTML = previewPic.alt;

}
   
function unDo (){

       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
       document.querySelector("#image").style.backgroundImage="url('')";
           
}