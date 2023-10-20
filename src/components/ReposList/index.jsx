import { useEffect, useState } from "react"
import styles from "./RepoList.module.css"

export const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((resp) => resp.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [nomeUsuario])

  return (
    <div className="container">
      <ul className={styles.list}>
        {repos.map((repositorio) => (
          <li className={styles.listItem} key={repositorio.id}>
            <div className={styles.listItemName}>
              <b>Nome: </b>
              {repositorio.name}
            </div>
            <div className={styles.listItemLanguage}>
              <b>Language: </b>
              {repositorio.language}
            </div>
            <a
              className={styles.listItemLink}
              target="_blank"
              href={repositorio.html_url}
            >
              Visitar no Github
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
