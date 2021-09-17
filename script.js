const name_john = document.querySelector(".name-john");
const name_clint = document.querySelector(".name-clint");
const name_stacia = document.querySelector(".name-stacia");
const image_john = document.querySelector(".image-one");
const image_stacia = document.querySelector(".image-two");
const image_clint = document.querySelector(".image-three");

image_john.addEventListener("click", () => {
    if(image_john.classList.contains("image-fade") && name_john.classList.contains("name-fade")) {

        image_john.classList.remove("image-fade");
        name_john.classList.remove("name-fade");

        if (image_clint.classList.contains("image-fade") && 
            name_clint.classList.contains("name-fade") && 
            image_stacia.classList.contains("image-fade") &&
            name_stacia.classList.contains("name-fade")) {
            return;

        } else {
            image_clint.classList.add("image-fade");
            name_clint.classList.add("name-fade");
            image_stacia.classList.add("image-fade");
            name_stacia.classList.add("name-fade");
        }

    } else {
        return;
    }
});

image_clint.addEventListener("click", () => {
    if(image_clint.classList.contains("image-fade") && name_clint.classList.contains("name-fade")) {
        
        image_clint.classList.remove("image-fade");
        name_clint.classList.remove("name-fade");

        if (image_john.classList.contains("image-fade") && 
            name_john.classList.contains("name-fade") && 
            image_stacia.classList.contains("image-fade") &&
            name_stacia.classList.contains("name-fade")) {
            return;

        } else {
            image_john.classList.add("image-fade");
            name_john.classList.add("name-fade");
            image_stacia.classList.add("image-fade");
            name_stacia.classList.add("name-fade");
        }

    } else {
        return;
    }
});

image_stacia.addEventListener("click", () => {
    if(image_stacia.classList.contains("image-fade") && name_stacia.classList.contains("name-fade")) {
        
        image_stacia.classList.remove("image-fade");
        name_stacia.classList.remove("name-fade");

        if (image_john.classList.contains("image-fade") && 
            name_john.classList.contains("name-fade") && 
            image_clint.classList.contains("image-fade") &&
            name_clint.classList.contains("name-fade")) {
            return;

        } else {
            image_john.classList.add("image-fade");
            name_john.classList.add("name-fade");
            image_clint.classList.add("image-fade");
            name_clint.classList.add("name-fade");
        }

    } else {
        return;
    }
});