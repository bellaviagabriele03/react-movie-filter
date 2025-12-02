import { useState, useEffect } from "react";



function Form () {

    const [film, setFilm] = useState("")

    return (
        <form className="mt-4  p-2"
            onSubmit={function(event) {
                event.preventDefault();
            }}
        >

            <label className="form-label" 
            htmlFor="newTitle"><strong>Aggiungi un film:</strong></label>

            <input 
            className="form-control bg-primary text-white" 
            type="text"
            placeholder="Titolo film"
            value={film}
            onChange={function(event) {
                setFilm(event.target.value)
            }}
            />
        </form>
    )
}

export default Form;