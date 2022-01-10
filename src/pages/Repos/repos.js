import React, { useState, useEffect } from "react"
import Card from "../../components/Card/card"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import { useParams } from "react-router-dom"

import "./repos.scss"

import locationIcon from "../../assets/local.png"
import linkIcon from "../../assets/link.png"
import twitterIcon from "../../assets/twitter.png"
import arrowIcon from "../../assets/seta-direita.png"


const Repos = () => {
    const orgName = useParams().repos
    const [orgObject, setOrgObject] = useState({})
    const [orgRepos, setOrgRepos] = useState([])
    const [pageCounter, setPageCounter] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [returnButton, setReturnButton] = useState(false)

    useEffect(() => {
        findOrg()
    }, [])

    useEffect(() => {
        findOrgRepos()
    }, [pageCounter])

    useEffect(() => {
        findOneRepo()
    }, [isSearch])

    function findOrg() {
        fetch(`https://api.github.com/orgs/${orgName}`, {
            headers: {
                authorization: `token ${process.env.TOKEN}`
              }
        })
            .then(response => response.json())
            .then(responseJson => setOrgObject(responseJson))
    }

    function findOrgRepos() {
        fetch(`https://api.github.com/orgs/${orgName}/repos?page=${pageCounter}&per_page=12&`, {
            headers: {
                authorization: `token ${process.env.TOKEN}`
              }
        })
            .then(response => response.json())
            .then(responseJson => setOrgRepos(responseJson))
        setErrorMsg(false)
        setReturnButton(false)
    }

    function findOneRepo() {
        if (isSearch) {
            fetch(`https://api.github.com/repos/${orgName}/${inputValue}`, {
                headers: {
                    authorization: `token ${process.env.TOKEN}`
                  }
            })
                .then(setIsSearch(false))
                .then(response => response.json())
                .then(responseJson => validateRepo([responseJson]))
        }
    }

    function validateRepo(repo) {
        if (repo[0].name === inputValue) {
            setOrgRepos(repo)
            setErrorMsg(false)
            setReturnButton(true)
        } else if (inputValue === '') {
            findOrgRepos()
        } else {
            setErrorMsg(true)
        }

    }

    return (
        <div className="repos-wrapper">
            <Header repos={true} />
            <main className="container">
                <header className="org">
                    <div className="org__img">
                        <img
                            src={orgObject.avatar_url}
                            alt="Logo da organização"
                        />
                    </div>
                    <div className="org__details">
                        <h1 className="org__details__name">{orgObject.name}</h1>
                        <p className="org__details__description">{orgObject.description}</p>
                        {orgObject.location &&
                            <span className="org__details__location">
                                <img src={locationIcon} alt="Ícone que simboliza um local" />
                                {orgObject.location}
                            </span>
                        }
                        {orgObject.blog &&
                            <div className="org__details__blog">
                                <img src={linkIcon} alt="Ícone que simboliza um link" />
                                <a href={orgObject.blog} target="_blank">{orgObject.blog}</a>
                            </div>
                        }
                        {orgObject.twitter_username &&
                            <div className="org__details__twitter">
                                <img src={twitterIcon} alt="Ícone do twitter" />
                                <a 
                                    href={`https://twitter.com/${orgObject.twitter_username}`} 
                                    target="_blank"
                                >
                                    @{orgObject.twitter_username}
                                </a>
                            </div>
                        }
                    </div>
                </header>
                <div className="repo-search">
                    <div className="repo-search__bar">
                        <input
                            onChange={(e) => {
                                setInputValue(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    setIsSearch(true)
                                }
                            }}
                            type="text"
                            placeholder="Buscar"
                            title="Digite o nome de um repositório"
                        />
                        <button onClick={() => {
                            setIsSearch(true)
                        }}>
                            <img src={arrowIcon} />
                        </button>
                    </div>
                    {errorMsg &&
                        <span className="repo-search__error">
                            Repositório não encontrado, verifique e tente novamente.
                        </span>
                    }
                </div>
                <div className="repos">
                    <h2 className="repos__title">{orgRepos.length > 0 ? "Repositórios" : "Nenhum repositório encontrado"}</h2>
                    <ul className="repos__list">
                        {
                            orgRepos.map(repo => (
                                <Card key={repo.id} repo={repo} />
                            ))
                        }
                    </ul>
                </div>
                {returnButton &&
                    <button
                        className="return-button"
                        onClick={() => {
                            findOrgRepos()
                        }}>
                        Voltar
                    </button>
                }
                {!returnButton &&
                    <ul className="pagination">
                        {pageCounter !== 1 &&
                            <li className="pagination__prev" onClick={() => {
                                if (pageCounter > 1) setPageCounter(pageCounter - 1)
                            }}>
                                <button>Anterior</button>
                            </li>
                        }
                        {orgRepos.length === 12 &&
                            <li className="pagination__next" onClick={() => {
                                if (pageCounter >= 1) setPageCounter(pageCounter + 1)
                            }}><button>Próxima</button></li>
                        }
                    </ul>
                }
            </main>
            <Footer />
        </div>
    )
}

export default Repos