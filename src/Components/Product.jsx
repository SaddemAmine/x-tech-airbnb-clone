import Stars from "./Stars"

const Product = ({product}) => (
    <div className="w-52">
        <img src={"https://picsum.photos/208/300"} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.address}</p>
        <div className="flex justify-between w-full items-center">
            <Stars rating={4} />
            <span>10 reviews</span>
        </div>
    </div>
)

export default Product