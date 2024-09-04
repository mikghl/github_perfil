import { useEffect, useState } from "react";
import styles from './RepoList.module.css'

const ReposList = ({ nomeDoUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
        .then(promise => promise.json())
        .then(promJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(promJson)
            }, 2000)
        })
    }, [nomeDoUsuario])

    return (
        <div className="container">
            { estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.listName}>
                            <b >Nome: </b> {repositorio.name} <br />
                        </div>

                        <div className={styles.listLanguage}>
                            <b>Linguagem: </b> {repositorio.language} <br />
                        </div>

                        <div >
                            <a className={styles.listLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                        </div>
                        
                    </li>
                ))}
                
            </ul>
            )}
        </div>
    )
} 

export default ReposList;