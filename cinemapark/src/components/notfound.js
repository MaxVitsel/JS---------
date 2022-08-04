const NotFound = ({onNotFound}) => {
    return(
        <div>
            <h1>Try anotherone ;\ </h1>
            <input type="btn" defaultValue='Вернуться на главную страницу'onClick={() => onNotFound()}></input>
        </div>
    )

}

export default NotFound