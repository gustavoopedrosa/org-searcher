import React from "react"
import "./card.scss"
import circIcon from "../../assets/circulo.png"
import starIcon from "../../assets/estrela.png"
import branchIcon from "../../assets/branch.png"

const Card = ({repo}) => {

    return (
        <li className="repo">
                <a className="repo__name" href={repo.html_url} target="_blank">{repo.name}</a>
                <p className="repo__description">{repo.description}</p>
                <div className="repo__details">
                    <span className="repo__details__lang">
                        {repo.language}
                    </span>
                    <div className="repo__details__link">
                        <img src={starIcon} alt="Ícone de estrela" />
                        {repo.stargazers_count}
                    </div>
                    <div className="repo__details__link">
                        <img src={branchIcon} alt="Ícone de branch"/>
                        {repo.forks}
                    </div>
                </div>
        </li>
    )
}

export default Card