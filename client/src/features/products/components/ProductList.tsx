import { useGetProductsQuery } from "../productEndpoints";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const { data } = useGetProductsQuery();

    const items = data?.map((product) => <ProductItem product={product} />)
    return (
        <div>
            {items}
        </div>
    );
}