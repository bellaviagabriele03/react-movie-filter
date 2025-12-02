
import movieArray from "../assets/data";
function Card() {
    return (
        <>
            {movieArray.map(function (curElem, index) {
                return (
                    <div className="col-6 g-3" key={index}>
                        <div className="card bg-success">
                           <h2 className="text-center">{curElem.title}</h2>
                        </div>
                    </div>
                )

            })}

        </>
    )
}

export default Card;