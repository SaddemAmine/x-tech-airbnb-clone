import Stars from "./Stars"

const Product = ({product, isCountry, isHome, isExperience, isPlace}) => {
    const backgroundImage = (isCountry && product.countryImage.fields.file.url) 
        || (isHome && product.images[0].fields.file.url)
        || ((isExperience || isPlace) && product.image.fields.file.url)

    const height = (isCountry && '238px') || ((isHome || isExperience) && '300px') || (isPlace && '194px')
    const width  = (isCountry && '159px') || ((isHome || isExperience) && '208px') || (isPlace && '194px')

    let styles = {
        height: `${height}`, 
        width: `${width}`, 
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover'
    }
    
    return (
        <div className={`w-${isCountry ? 48 : 52}`}>
            <div style={styles} className="flex flex-col justify-end p-2">
                {isPlace && <>
                    <p className="bg-white text-sm rounded w-1/4">GUIDE</p>
                    <h3 className="text-ellipsis text-xl text-white uppercase">{product.name}</h3>
                </>}
            </div>
            {!isPlace && <h3 className="font-semibold text-ellipsis">{product.name}</h3>}
            
            {isHome && <>
                <p>{product.address}</p>
                <div className="flex justify-between w-full items-center">
                    <Stars rating={product.rating} />
                    <span>{product.reviews} reviews</span>
                </div>
            </>}

            {isExperience && <>
                <p>${product.price}</p>
                <div className="flex justify-between w-full items-center">
                    <Stars rating={product.rating} />
                    <span>{product.reviews} reviews</span>
                </div>
            </>}

            {isPlace && <>
                <h3>By {product.author}</h3>
            </>}
        </div>
    )
}

export default Product