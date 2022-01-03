import React from "react"
import "./home.scss"
import { useState } from "react"

const Home = () => {

    const [inputValue, setInputValue] = useState('')
    const [orgObject, setOrgObject] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleClick() {
        fetch(`https://api.github.com/orgs/${inputValue}`)
            .then(response => response.json())
            .then(responseJson => setOrgObject(responseJson))
    }

    function validateOrg(orgObject) {
        if (orgObject.type === 'Organization') {
            const isTrue = 'repos'
            return isTrue
        } else {
            const isFalse = '#'
            return isFalse
        }
    }

    return (
        <main className="main">
            <input
                onChange={handleChange}
                className="main__input"
                type="text"
                placeholder="Digite o nome da organização"
                title="Digite o nome da organização"
            />
            <span className="main__span">
                Organização não encontrada, verifique o nome e tente novamente.
            </span>
            <a
                className="main__button"
                onClick={handleClick}
                href={validateOrg(orgObject)}
            >
                Pesquisar
            </a>
        </main>
    )
}

export default Home
