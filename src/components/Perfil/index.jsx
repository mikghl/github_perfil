import styles from "./Perfil.module.css"

const Perfil = (props) => {
    const usuario = {
        nome: 'Micael Romão',
        avatar: 'https://github.com/mikghl.png'
    }
    const { endereco, nomeDoUsuario } = props;

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            {/* <img className="perfil-avatar" src={usuario.avatar} /> props.endereco */}
            <img className={styles.avatar} src={`https://github.com/${nomeDoUsuario}.png`} />
            {/* <h3 className='perfil-titulo'> {usuario.nome} </h3> */}
            {/* <h3 className='perfil-titulo'> {props.nome} </h3> */}
            <h1 className={styles.name}> {nomeDoUsuario} </h1>
        </header>
    )
}

export default Perfil;