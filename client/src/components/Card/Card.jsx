
const Card = ({post}) => {
  
    return (
        <div className="card">
          <img src={post.img} alt="" className="imgs" />
            <p className="card__title">{post.title}</p>
            <p className="card__auth">{post.author}</p>
            <p className="card__body">{post.body}</p>
        </div>
    )
}

export default Card
