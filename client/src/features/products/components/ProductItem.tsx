import { ProductResponse } from "../productEndpoints"

const ProductItem: React.FC<{
    product: ProductResponse
}> = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Description: ${product.price}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductItem;