import React, { useState, useEffect } from "react"
import Card from "../../components/Card/card"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { useParams } from "react-router-dom"

import "./repos.scss"

import locationIcon from "../../assets/local.png"
import linkIcon from "../../assets/link.png"
import twitterIcon from "../../assets/twitter.png"


const Repos = () => {
    const orgName = useParams().repos
    const [orgObject, setOrgObject] = useState({})
    const [orgRepos, setOrgRepos] = useState([])
    const [pageCounter, setPageCounter] = useState(1)

    useEffect(() => {
        findOrg()
    }, [])
    
    useEffect(() => {
        findOrgRepos(orgName)
    }, [pageCounter])
    
    function findOrg() {
        fetch(`https://api.github.com/orgs/${orgName}`)
            .then(response => response.json())
            .then(responseJson => setOrgObject(responseJson))
    }

    function findOrgRepos(orgName) {
        fetch(`https://api.github.com/orgs/${orgName}/repos?page=${pageCounter}&per_page=10`)
            .then(response => response.json())
            .then(responseJson => setOrgRepos(responseJson))
    }


    return (
        <div className="repos-wrapper">
            <Header repos={true} />
            <main className="container">
                <header >
                    <div className="org">
                        <div className="org__img">
                            <img
                                src={orgObject.avatar_url}
                                alt="Logo da organização"
                            />
                        </div>
                        <div className="org__details">
                            <h1 className="org__details__name">{orgObject.name}</h1>
                            <p className="org__details__description">{orgObject.description}</p>
                            {orgObject.location !== null &&
                                <span className="org__details__location">
                                    <img src={locationIcon} alt="Ícone que simboliza um local" />
                                    {orgObject.location}
                                </span>

                            }
                            {orgObject.blog !== null &&
                                <a className="org__details__blog" href={orgObject.blog} target="_blank">
                                    <img src={linkIcon} alt="Ícone que simboliza um link" />
                                    {orgObject.blog}
                                </a>

                            }
                            {orgObject.twitter_username !== null &&
                                <a
                                    className="org__details__twitter"
                                    href={`https://twitter.com/${orgObject.twitter_username}`}
                                    target="_blank"
                                >
                                    <img src={twitterIcon} alt="Ícone do twitter" />
                                    @{orgObject.twitter_username}
                                </a>

                            }
                        </div>
                    </div>
                </header>
                <div className="repos">
                    <h2 className="repos__title">Repositórios</h2>
                    <ul className="repos__list">
                        {
                            orgRepos.map(repo => (
                                <Card key={repo.id} repo={repo} />
                            ))
                        }
                    </ul>
                </div>
                <ul className="pagination">
                    {pageCounter !== 1 &&
                        <li className="pagination__prev" onClick={() => {
                            if (pageCounter > 1) setPageCounter(pageCounter - 1)
                        }}>Anterior</li>
                    }
                    {orgRepos.length === 10 &&
                        <li className="pagination__next" onClick={() => {
                            if (pageCounter >= 1) setPageCounter(pageCounter + 1)
                        }}>Próxima</li>
                    }
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default Repos