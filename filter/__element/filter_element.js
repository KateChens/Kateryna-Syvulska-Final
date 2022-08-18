let filterElements = document.getElementsByClassName('filter__element');

for (let i = 0; i < filterElements.length; i++){
    filterElements[i].addEventListener("click", function () { 
        if (filterElements[i].classList.contains("filter__element_basic_color")) {
            filterElements[i].classList.remove("filter__element_basic_color");
            filterElements[i].classList.add("filter__element_clicked_color");
        } else {
            filterElements[i].classList.remove("filter__element_clicked_color");
            filterElements[i].classList.add("filter__element_basic_color");
        }  
    })
}   