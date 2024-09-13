import "./TelaInicialProjeto.css"
const TelaInicialProjeto = ({iniciarJogo}) => {
    return (
        <div className='tela_inicial'>
            <h1> Projeto React</h1>
            <p> Clique no botão abaixo para iniciar o jogo. </p>
            <button onClick={iniciarJogo}>  Começar o jogo</button>
        </div>
    )
}
export default TelaInicialProjeto