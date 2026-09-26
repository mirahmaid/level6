import "./ProductDetails.css"
import { useGetOneProductQuery } from "../../redux/api/productsApi"

export default function ProductDetails() {
    const { data, error, isLoading } = useGetOneProductQuery(1);
  return (
    <div>
      
    </div>
  )
}