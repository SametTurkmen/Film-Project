class UI {
    static addFilmtoUI(newFilm) {

        const filmList = document.getElementById("films");

        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid w-25 img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    }

    static clearInputs(element1, element2, element3) {

        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    static displayMessages(type, message) {

        const cardbody = document.querySelectorAll(".card-body")[0];

        //alert divini oluşturma
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        cardbody.appendChild(alert);

        setTimeout(function () {
            alert.remove();
        }, 1500);
    }

    static loadAllFilms(films) {

        const filmList = document.getElementById("films");

        films.forEach(film => {
            filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid w-25 img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        });

    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");

        while (filmList.firstElementChild !== null) {
            // console.log(filmList.firstElementChild);
            filmList.firstElementChild.remove();
        }
    }
}
