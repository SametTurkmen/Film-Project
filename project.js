

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const secondcardbody = document.querySelectorAll(".card-body")[1];
const clearElement = document.getElementById("clear-films");



EventListener();

function EventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);
        // console.log(films);
    });

    secondcardbody.addEventListener("click", deleteFilm);
    clearElement.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        UI.displayMessages("danger", "Lütfen film bilgilerini doldurunuz...");
    }
    else {

        // Yeni film
        const newFilm = new Film(title, director, url);

        UI.addFilmtoUI(newFilm); // arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage a film ekleme

        UI.displayMessages("success", "Film başarıyla eklendi.");

    }
    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("success", "Film silme işlemi başarılı");
    }
}

function clearAllFilms() {
    if (confirm("Emin Misiniz ?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}
