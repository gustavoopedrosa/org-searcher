import React from "react"
import "./home.scss"

const Home = () => {
    return (
        <main className="main">
            <input 
                type="text" 
                placeholder="Digite o nome da organização"
                required
                name="org"
                id="org"
                className="main__input"
                title="Digite o nome da organização"
            />

            <button type="submit" className="main__button">
                Pesquisar
            </button>


        </main>
    )
}

export default Home
