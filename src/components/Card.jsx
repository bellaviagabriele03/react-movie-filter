import { useState, useEffect } from "react";
import movieArray from "../assets/data";

function Card() {
    const [film, setFilm] = useState("")
    const [genre, setGenre] = useState("")
    const [select, setSelect] = useState("nessuno")
    const [arrayFilm, setArrayfilm] = useState(movieArray)
    const [filtered, setfiltered] = useState(movieArray)
    
    function addfilm(event) {
        event.preventDefault()
        const newObject = {
            title: film,
            genre: genre,
        };

        setArrayfilm([...arrayFilm, newObject])
        setFilm("")
        setGenre("")
    }

    useEffect(() => {

        if (select === "nessuno") {
            setArrayfilm(movieArray);
        } else {
            console.log(`l'opzione selezionata è:${select}`);
            const results = movieArray.filter((curFilm) => select === curFilm.genre);
            setArrayfilm(results);
        }
        
    }, [select])


    return (
        <>

            <div className="col-12">
                <label className="form-label" htmlFor="selectGenre"><strong>Filtra i film per Genere:</strong></label>

                <select
                    className="form-select bg-secondary text-white"
                    id="selectGenre"
                    onChange={function (event) {
                        setSelect(event.target.value)
                    }}
                    value={select}
                >
                    <option value="nessuno">Seleziona un genere</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Azione">Azione</option>
                    <option value="Romantico">Romantico</option>
                </select>

            </div>


            {arrayFilm.map(function (curElem, index) {
                return (

                    <div className="col-6 g-3" key={index}>
                        <div className="card bg-success">
                            <h2 className="text-center">{curElem.title}</h2>
                        </div>
                    </div>
                )

            })}

            <form className="col-12 g-3"
                onSubmit={addfilm}
            >
                <div>
                    <label className="form-label"
                        htmlFor="newTitle"><strong>Aggiungi un film:</strong></label>

                    <input
                        id="newTitle"
                        className="form-control bg-primary text-white"
                        type="text"
                        placeholder="Titolo film"
                        value={film}
                        onChange={function (event) {
                            setFilm(event.target.value)
                        }}
                    />
                </div>


                <div className="mt-3">
                    <label
                        className="form-label"
                        htmlFor="newGenre">
                        <strong>Indica il genere del film</strong>
                    </label>
                    <input
                        className="form-control bg-primary text-white"
                        id="newGenre"
                        type="text"
                        placeholder="Genere del film"
                        value={genre}
                        onChange={function (event) {
                            setGenre(event.target.value)
                        }}
                    />
                </div>


                <button type="submit" className="btn btn-warning mt-3">Send</button>
            </form>

        </>
    )
}

export default Card;