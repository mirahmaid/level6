import "./ProductDetails.css"
import { useGetOneProductQuery } from "../../redux/api/productsApi"
import { useParams } from "react-router-dom"
import { CircularProgress, Typography } from "@mui/material"
import Box from "@mui/material/Box"
export default function ProductDetails() {
  let id  = useParams()
  const parsedId = Number(id);
   const { data, error, isLoading } = useGetOneProductQuery(parsedId);
console.log(data)
console.log(parsedId)
   if (isLoading){
return (
  <Box sx={{ display :"flex"}}>
  <CircularProgress/>
  </Box>
);
}
if (error)
  return (
<Box sx = {{ display :"flex"}}>
  <Typography variant= "h1" color = "error">
    error
  </Typography>
</Box>
);
    if (!data){
    return (
    <div>
      null
    </div>
  )
}if (data){
return <div>
data-id :{data.id}
</div>
}
 }