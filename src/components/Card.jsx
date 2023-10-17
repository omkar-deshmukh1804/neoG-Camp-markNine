

function Card(props) {
    return (
        <>
            <div className="card--container">{
                    props.food.map((item, index) => {
                        return (
                            <div className='card' key={index}>
                                <div className='card--image'>
                                    <img src={item.image} />
                                </div>
                                <p className='card--title'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;