import React from "react"
import "./card.scss"
import circIcon from "../../assets/circulo.png"
import starIcon from "../../assets/estrela.png"
import branchIcon from "../../assets/branch.png"

const Card = (repo) => {
    const repos = repo.repo

    return (
        <li className="repo">
                <a className="repo__name" href={repos.html_url} target="_blank">{repos.name}</a>
                {repos.private === false &&
                    <span className="repo__privacy">Público</span>
                }
                <p className="repo__description">{repos.description}</p>
                <div className="repo__details">
                    <span className="repo__details__lang">
                        <img src={circIcon} />
                        {repos.language}
                    </span>
                    <a className="repo__details__link">
                        <img src={starIcon} alt="Ícone de estrela" />
                        {repos.stargazers_count}
                    </a>
                    <a className="repo__details__link">
                        <img src={branchIcon} alt="Ícone de branch"/>
                        {repos.forks}
                    </a>
                </div>
        </li>
    )
}

export default Card