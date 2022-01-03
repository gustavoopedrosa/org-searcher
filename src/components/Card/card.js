import React from "react"
import "./card.scss"
import circIcon from "../../assets/circulo.png"
import starIcon from "../../assets/estrela.png"
import branchIcon from "../../assets/branch.png"

const Card = () => {
    return (
        <li className="repo">
                <a className="repo__name">react</a>
                <span className="repo__privacy">Público</span>
                <p className="repo__description">A declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                <div className="repo__details">
                    <span className="repo__details__lang">
                        <img src={circIcon} />
                        Javascript
                    </span>
                    <a className="repo__details__link" href="#">
                        <img src={starIcon} />
                        180k
                    </a>
                    <a className="repo__details__link" href="#">
                        <img src={branchIcon} />
                        36.6k
                    </a>
                </div>
        </li>
    )
}

export default Card