const name_john = document.querySelector(".name-john");
const name_clint = document.querySelector(".name-clint");
const name_stacia = document.querySelector(".name-stacia");
const image_john = document.querySelector(".image-one");
const image_stacia = document.querySelector(".image-two");
const image_clint = document.querySelector(".image-three");

image_john.addEventListener("click", () => {
    getDisplay(image_john, name_john, image_clint, name_clint, image_stacia, name_stacia);
});

image_stacia.addEventListener("click", () => {
    getDisplay(image_stacia, name_stacia, image_john, name_john, image_clint, name_clint);
});

image_clint.addEventListener("click", () => {
    getDisplay(image_clint, name_clint, image_john, name_john, image_stacia, name_stacia);
});

function getDisplay(image_real, name_real, image_not_1, name_not_1, image_not_2, name_not_2) {
    if(image_real.classList.contains("image-fade") && name_real.classList.contains("name-fade")) {

        image_real.classList.remove("image-fade");
        name_real.classList.remove("name-fade");

        if (image_not_1.classList.contains("image-fade") && 
            name_not_1.classList.contains("name-fade") && 
            image_not_2.classList.contains("image-fade") &&
            name_not_2.classList.contains("name-fade")) {
            return;

        } else {
            image_not_1.classList.add("image-fade");
            name_not_1.classList.add("name-fade");
            image_not_2.classList.add("image-fade");
            name_not_2.classList.add("name-fade");
        }

    } else {
        return;
    }
}