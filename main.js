//https://teachablemachine.withgoogle.com/models/1p_aFTXSL/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1p_aFTXSL/model.json",modelready);
 }
 
 function modelready(){
     classifier.classify(gotresults);
 }
 
 function gotresults(error,results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results)
 
         randomnumberR=Math.floor(Math.random()*255)+1;
         randomnumberG=Math.floor(Math.random()*255)+1;
         randomnumberB=Math.floor(Math.random()*255)+1;
         document.getElementById("result_lable").innerHTML=results[0].label;
         document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%"
         document.getElementById("result_lable").style.color="rgb("+randomnumberR+","+randomnumberG+","+randomnumberB+")";
         document.getElementById("result_confidence").style.color="rgb("+randomnumberR+","+randomnumberG+","+randomnumberB+")";
 
         img1=document.getElementById("ear")
         
 
         if(results[0].label=="cow"){
             img1.src="cow.jpeg"
             
 
         }
         else if(results[0].label=="dog"){
             img1.src="dog.gif"
            
 
         }
         else if(results[0].label=="lion"){
             img1.src="lion.gif"
            
 
         }
         else if(results[0].label=="cat"){
            img1.src="cat.png"
           

        }
         else { 
             img1.src="download (1).png"
            
         }
     }
 }
