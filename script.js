const entryBox = document.getElementById("films-container");
const WrongEntry = document.getElementById("msgError")

const getFilm = async () => {
    WrongEntry.innerHTML = "";
    const searchFilmbyEntry = document.getElementById("filmTitle").value;
    try {
        const response = await fetch(api_url + searchFilmbyEntry);
        const data = await response.json();
        console.log(data);
        showFilms(entryBox, data);
      } catch (error) {
        WrongEntry.innerHTML = "Je ne trouve pas ce film"
        console.log(error);
      }
    }
    
    const showFilms = (element, data) => {
        element.innerHTML = "";
        for (let i = 0; i < data.Search.length; i++) {
            const film = data.Search[i];
            element.innerHTML += `
            <div class="card mb-3"  max-width:24rem card-border-color:yellow;>
            <h5 class="card-title contentFilm" >${film.Title}</h5>
                    <div class="col-md-6">
                        <div class="card-body">
                        <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${film.Poster}" class="img-thumbnail" alt="Image du film">
                    </div>
                       
                        <p class="card-text contentFilm"><b>Année: </b>${film.Year}</p>
             
                        <a href="#" id="more-info-${i}" class="btn btn-warning contentFilm">Plus de détails</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }
