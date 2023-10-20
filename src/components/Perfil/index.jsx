import styles from "./Perfil.module.css"

export const Perfil = ({ nomeUsuario }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com/${nomeUsuario}.png`}
        alt={nomeUsuario}
      />
      <h1 className={styles.name}>{nomeUsuario}</h1>
    </header>
  )
}
