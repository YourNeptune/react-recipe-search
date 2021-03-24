const Recipe = ({label, img, ingredients}) => {
    return (
        <div className='recipe'>
            <h1>{label}</h1>
            <img src={img} alt='img'/>
            
            <div className='ingredients'>
                {ingredients.map(i => (
                    <ul key={i}>
                        <li>{i}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Recipe
