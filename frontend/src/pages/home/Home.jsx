import "./Home.css";
import { Typography, Button, Stack ,  IconButton, styled,Badge} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetproductByNameQuery } from "../../Redux/productApi";
import { useDispatch } from 'react-redux'
import { addProduct } from "../../Redux/cartSlice";
import { Add, Remove } from "@mui/icons-material";
import { decreaseQuantity, increaseQuantity } from "../../Redux/cartSlice";

const Home = () => {
    const dispatch = useDispatch()
  const { data, error, isLoading } = useGetproductByNameQuery();
  const theme = useTheme();
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

  console.log(data);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading products</Typography>;
  }

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data?.map((item) => {
        return (
          <Card
            className="card"
            key={item.id}
            sx={{
              maxWidth: 277,
              mb: 6,
              mx: 2,
            }}
          >
            <CardMedia
              component="img"
              height="277"
              image={item.imageLink}
              alt="Product"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
           {false? (<div dir = "rtl"style={{ display: "flex", alignItems: "center" }}>
              <IconButton color="primary"
                sx={{ color: "#1976d2", ml: "10px" }}
                onClick={() => {dispatch(increaseQuantity(item))}}
              >
                <Add fontSize="small"/>
              </IconButton>

              <StyledBadge badgeContent={item.quantity} color="primary" />

              <IconButton color="primary"
                sx={{ color: "#1976d2", mr: "10px" }}
               onClick={() => {dispatch(decreaseQuantity(item))}}
              >
                <Remove fontSize="small"/>
              </IconButton>
            </div>) : (    <Button
                sx={{
                  textTransform: "capitalize",
                  p: 1,
                  lineHeight: 1.1,
                }}
                variant="contained"
                color="primary"
                 onClick={() => {
                  dispatch(addProduct(item))
                }
                }
              >
                Add to cart
              </Button>)}
          
   
              <Typography
                mr={1}
                variant="body1"
                color={theme.palette.error.light}
              >
                ${item.price}
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;