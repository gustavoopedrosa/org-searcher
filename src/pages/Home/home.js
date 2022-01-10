import React from "react"
import { useState} from "react"
import { useNavigate } from "react-router-dom"

import "./home.scss"

import arrowIcon from "../../assets/seta-direita.png"

import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"

const Home = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [isOrgTrue, setIsOrgTrue] = useState(true)

    function handleClick() {
        fetch(`https://api.github.com/orgs/${inputValue}`)
            .then(response => response.json())
            .then(responseJson => validateOrg(responseJson))
    }

    function validateOrg(orgObject) {
        if (orgObject.type === 'Organization') {
            navigate(`/${inputValue}`)
        }

        return setIsOrgTrue(false)
    }

    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <p className="main__description">
                    Encontre os repositórios de qualquer organização no Github
                </p>
                <div className="main__search">
                    <input
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleClick()
                            }
                        }}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                        }}
                        className="main__search__input"
                        type="text"
                        placeholder="Handle da organização"
                        title="Digite o nome da organização"
                    />
                    <button
                        onClick={handleClick}
                        className="main__search__button"
                    >
                        <img src={arrowIcon} />
                    </button>
                </div>
                {!isOrgTrue &&
                    <span className="main__error">
                        Organização não encontrada, verifique e tente novamente.
                    </span>
                }
            </main>
            <Footer />
        </div>
    )
}

export default Home
