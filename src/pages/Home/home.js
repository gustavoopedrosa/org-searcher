import React from "react"
import "./home.scss"

const Home = () => {
    return (
        <main className="main">
            <input 
                className="main__input"
                type="text" 
                placeholder="Digite o nome da organização"
                title="Digite o nome da organização"
            />

            <button type="submit" className="main__button" for="org">
                Pesquisar
            </button>


        </main>
    )
}

export default Home
