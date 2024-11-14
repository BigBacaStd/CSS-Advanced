document.addEventListener("DOMContentLoaded", (event) => {
    let input_search = document.querySelector(".search__input");
    let btn_search = document.querySelector(".navbar__button");

    btn_search.addEventListener("click", () => {
        input_search.style.width = "0";
        input_search.style.padding = "0";
        input_search.classList.remove("visible");
    });
});