import BackHomeButton from "../../Components/BackHomeButton/BackHomeButton";

const Artists = () => {
    return(
        <div>
            <p>En esta view se mostrarán todos los artistas asociados al sello. Con filtros para:</p>
            <br />
            <ul>
                <li>Writers</li>
                <li>Beatmakers</li>
                <li>Fillmakers</li>
                <li>Dj's</li>
            </ul>
            <BackHomeButton />
        </div>
    )
};

export default Artists