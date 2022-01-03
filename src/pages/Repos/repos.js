import React from "react"
import Card from "../../components/Card/card"
import "./repos.scss"

const Repos = () => {
    return (
        <main className="wrapper">
            <header className="org">
                <div className="org__img">
                    <img
                        src="http://lorempixel.com.br/100/100"
                        alt="Logo da organização"
                    />
                </div>
                <div className="org__details">
                    <h1 className="org__details__name">Meta</h1>
                    <p className="org__details__description">We are working to build community through open source technology. NB: members must have two-factor auth.</p>
                    <span className="org__details__location">Menlo Park, California</span>
                    <a className="org__details__blog" href="https://opensource.fb.com">https://opensource.fb.com</a>
                    <a className="org__details__twitter" href="#">@MetaOpenSource</a>
                </div>
            </header>
            <div className="repos">
                <h2 className="repos__title">Repositórios</h2>
                <ul className="repos__list">
                    <Card/>
                    <Card/>
                </ul>
            </div>
        </main>
    )
}

export default Repos