let rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    // console.log("hey"); to check if mouse is on the rectangle
    let rectangleLocation = rect.getBoundingClientRect();
    
    let insideRectVal = details.clientX - rectangleLocation.left;

    if (insideRectVal<rectangleLocation.width/2) {
        // console.log("left");
        let redColor = gsap.utils.mapRange(0,rectangleLocation.width/2 ,255,0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    }
    else{
        let blueColor = gsap.utils.mapRange(rectangleLocation.width/20, rectangleLocation.width, 0,  255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
    })
        // console.log("right");
    }
})



rect.addEventListener("mouseleave", function(){
    // console.log("left");
    gsap.to(rect, {
        backgroundColor: "white"
    })
})