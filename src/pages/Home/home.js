import React from "react"
import "./home.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [isOrgTrue, setIsOrgTrue] = useState(true)


    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleClick() {
        fetch(`https://api.github.com/orgs/${inputValue}`)
            .then(response => response.json())
            .then(responseJson => validateOrg(responseJson))
    }

    function handleKeyDown(e) {
        if(e.code === 'Enter') {
            handleClick()
        }
        return
    }

    function validateOrg(orgObject) {
        if (orgObject.type === 'Organization') {
            navigate(`/${inputValue}`)
        }

        return setIsOrgTrue(false)
    }

    return (
        <main className="main">
            <input
                onChange={handleChange}
                className="main__input"
                type="text"
                placeholder="Digite o nome da organização"
                title="Digite o nome da organização"
                onKeyDown={handleKeyDown}
            />
            {!isOrgTrue === true &&
                <span className="main__error">
                    Organização não encontrada, verifique e tente novamente.
                </span>
            }
            <button
                className="main__button"
                onClick={handleClick}
            >
                Pesquisar
            </button>
        </main>
    )
}

export default Home
