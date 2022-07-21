function three() {
    let allSlides = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allSlides.length; i++) {
        if (allSlides[i].className.includes("hiddenSlide")) {
            allSlides[i + 2].className = "imgproduct_AP24 activeSlide";
            allSlides[i+1].className = "imgproduct_AP24 hiddenSlide";
            break;
        } else {
            allSlides[i + 2].className = "imgproduct_AP24 activeSlide";
            allSlides[i].className = "imgproduct_AP24 hiddenSlide";
            break;
        }
    }
}
function productimg_two() {
    let allSlides = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allSlides.length; i++) {
        if (allSlides[i].className.includes("activeSlide")) {
            allSlides[i + 1].className = "imgproduct_AP24 activeSlide";
            allSlides[i].className = "imgproduct_AP24 hiddenSlide";

            break;
        }
        else{
            allSlides[i + 1].className = "imgproduct_AP24 activeSlide";
            allSlides[i+2].className = "imgproduct_AP24 hiddenSlide";
            break;
        }
    }
}
function productimg_once() {
    let allSlides = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allSlides.length; i++) {
        if (allSlides[i].className.includes("hiddenSlide")) {
            if (i + 1 == allSlides.length) {
                allSlides[i].className = "imgproduct_AP24 activeSlide";
                allSlides[i++].className = "imgproduct_AP24 hiddenSlide";
                break;
            }
            else{
                allSlides[i+2].className = " imgproduct_AP24 hiddenSlide";
                allSlides[i+1].className = "imgproduct_AP24 hiddenSlide";
                allSlides[i].className = "imgproduct_AP24 activeSlide";
            }
        }
    }
}
