import React from "react"
import { useNavigate } from "react-router-dom"

import "./header.scss"

import iconSearcher from "../../assets/search32.png"
import iconReturn from "../../assets/seta-esquerda-branca.png"

const Header = ({repos}) => {
    const navigate = useNavigate()

    return (
        <header className="header">
            {repos === true && 
                <img src={iconReturn} className="header__return" onClick={()=>{
                    navigate('/')
                }}/>
            }
            <div className="header__logo">
                <img className="header__logo__img" src={iconSearcher} />
                <h1 className="header__logo__title">Org Seacher</h1>
            </div>
        </header>
    )
}

export default Header