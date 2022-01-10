import React from "react"
import "./card.scss"
import circIcon from "../../assets/circulo.png"
import starIcon from "../../assets/estrela.png"
import branchIcon from "../../assets/branch.png"

const Card = ({repo}) => {

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

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
                        {kFormatter(repo.stargazers_count)}
                    </div>
                    <div className="repo__details__link">
                        <img src={branchIcon} alt="Ícone de branch"/>
                        {kFormatter(repo.forks)}
                    </div>
                </div>
        </li>
    )
}

export default Card