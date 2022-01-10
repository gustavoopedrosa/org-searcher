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

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleClick() {
        fetch(`https://api.github.com/orgs/${inputValue}`, {
            headers: {
                authorization: `token ${process.env.TOKEN}`
              }
        })
            .then(response => response.json())
            .then(responseJson => validateOrg(responseJson))
    }

    function handleKeyDown(e) {
        if (e.keyCode === 13) {
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
        <div className="wrapper">
            <Header />
            <main className="main">
                <p className="main__description">
                    Encontre os repositórios de qualquer organização no Github
                </p>
                <div className="main__search">
                    <input
                        onChange={handleChange}
                        className="main__search__input"
                        type="text"
                        placeholder="Handle da organização"
                        title="Digite o nome da organização"
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="main__search__button"
                        onClick={handleClick}
                    >
                        <img src={arrowIcon} />
                    </button>
                </div>
                {!isOrgTrue === true &&
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
