// Creating var to Play id Center
const rect = document.querySelector('#center')

// addEventListener on the Var
rect.addEventListener("mousemove", (details) => {
    // Getting the Details of Mouse Hover on the rectangle
    var rectLocation = rect.getBoundingClientRect()
    // console.log(rectLocation.width);

    // Calculate the mouse pointer value in the rectangle
    var insideRectVal = Math.round(details.clientX - rectLocation.left);

    if(insideRectVal < rectLocation.width/2){
        var RedColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVal)
        gsap.to(rect, {
            backgroundColor : `rgb(${RedColor}, 0, 0)`,
            ease : Power4
        })
    }else {
        var BlueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectVal)
        gsap.to(rect, {
            backgroundColor : `rgb(0, 0, ${BlueColor})`,
            ease : Power4
        })
    }
})

rect.addEventListener('mouseleave', function(){
    gsap.to(rect, {
        backgroundColor: "antiquewhite"
    })
})

