import React from "react"
import { useNavigate } from "react-router-dom"

import "./header.scss"

import iconReturn from "../../assets/seta-esquerda-branca.png"

const Header = ({ repos }) => {
    const navigate = useNavigate()

    return (
        <header className="header">
            {repos &&
                <img
                    src={iconReturn}
                    className="header__return"
                    onClick={() => {
                        navigate('/')
                    }}
                />
            }
            <div className="header__logo">
                <h1
                    className="header__logo__title"
                    onClick={() => {
                        navigate('/')
                    }}
                >Org Searcher</h1>
            </div>
        </header>
    )
}

export default Header