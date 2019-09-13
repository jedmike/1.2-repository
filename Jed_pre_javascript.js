/* Jed_pre_javascript_file.js  for prework Javascript*/

document.getElementById("button1").addEventListener("click", function(){ /*gro buton click result in box size increase*/
    document.getElementById("box").style.height = "250px";
})

document.getElementById("button2").addEventListener("click", function(){ /*blue buton click result color change to blue */
    document.getElementById("box").style.backgroundColor = "blue"
    
})
document.getElementById("button3").addEventListener("click", function(){ /*fade buton click results in color change, faded (added rgb to get gradiant)*/
    document.getElementById("box").style.backgroundColor = "RGB(0,0,255,.3)"

})
document.getElementById("button4").addEventListener("click", function(){ /*reset button buton click result in box reset*/
    document.getElementById("box").style.backgroundColor = "orange"
    document.getElementById("box").style.height = "150px"
})
