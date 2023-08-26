
export const GifItem = ({  title,url}) => {
    return (
        <div className="catd">
        <img src={url} alt={title}/>
        <p> {title}</p>
        </div>
    )
}
