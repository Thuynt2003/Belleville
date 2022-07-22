function three() {
    let allImg = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allImg.length; i++) {
        if (allImg[i].className.includes("hiddenSlide")) {
            allImg[i + 2].className = "imgproduct_AP24 activeSlide";
            allImg[i+1].className = "imgproduct_AP24 hiddenSlide";
            break;
        } else {
            allImg[i + 2].className = "imgproduct_AP24 activeSlide";
            allImg[i].className = "imgproduct_AP24 hiddenSlide";
            break;
        }
    }
}
function productimg_two() {
    let allImg = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allImg.length; i++) {
        if (allImg[i].className.includes("activeSlide")) {
            allImg[i + 1].className = "imgproduct_AP24 activeSlide";
            allImg[i].className = "imgproduct_AP24 hiddenSlide";

            break;
        }
        else{
            allImg[i + 1].className = "imgproduct_AP24 activeSlide";
            allImg[i+2].className = "imgproduct_AP24 hiddenSlide";
            break;
        }
    }
}
function productimg_once() {
    let allImg = document.querySelectorAll(".imgproduct_AP24");
    for (let i = 0; i < allImg.length; i++) {
        if (allImg[i].className.includes("hiddenSlide")) {
            if (i + 1 == allImg.length) {
                allImg[i].className = "imgproduct_AP24 activeSlide";
                allImg[i++].className = "imgproduct_AP24 hiddenSlide";
                break;
            }
            else{
                allImg[i+2].className = " imgproduct_AP24 hiddenSlide";
                allImg[i+1].className = "imgproduct_AP24 hiddenSlide";
                allImg[i].className = "imgproduct_AP24 activeSlide";
            }
        }
    }
}
