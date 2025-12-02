import { useState, useEffect } from "react";
import movieArray from "../assets/data";

function Card() {
    const [film, setFilm] = useState("")
    const [arrayFilm, setArrayfilm] = useState(movieArray)
    const [genre, setGenre] = useState("")


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




    return (
        <>

            <div className="col-12">

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