import ApiService from "../../api/ApiService";
import Typography from "@mui/material/Typography";
import {ButtonBase, Card, CardContent, CardMedia, CircularProgress, TextField} from "@mui/material";
import {Grid} from "@mui/joy";
import {useEffect, useState} from "react";


const DonationComponent = () => {
    const [products, setProducts] = useState([])
    const [clicked, setClicked] = useState(false)

    function handleDonationSubmit(product) {
        setClicked(true)

        ApiService.getDonationRoute(product).then(response => {
            console.log(response.data);

            window.open(response.data.url)
        })
    }

    useEffect(() => {
        ApiService.getDonationProductsRoute().then(response => {
            setProducts(JSON.parse(response.data.products).data)
        }).catch(err => {
            console.log('Exception occurred while trying to fetch products ' + err);
            console.log('Exception occurred while trying to fetch products server response : ' + err.response);
        })

    }, [])

    return (

        <div>
            <br/>

            <Grid container
            >
                {
                    products.map((product, index) => {
                        return <ProductCard product={product} key={index}/>
                    })
                }
            </Grid>
        </div>

    );

    function ProductCard(props) {
        return <>
            <Grid key={props.index} item xs={6} paddingY={2}>
                <Card sx={{maxWidth: 345}}>
                    <ButtonBase
                        disabled={clicked}
                        onClick={() => {
                            handleDonationSubmit(props.product)
                        }}
                        sx={{alignSelf: 'center', alignContent: 'center'}}
                    >
                        {
                            (!clicked) ? <>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={props.product.images[0]}
                                    alt={props.product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {props.product.name}
                                    </Typography>
                                </CardContent>
                            </> : <CircularProgress/>
                        }
                    </ButtonBase>
                </Card>
            </Grid>
        </>;
    }
};

export default DonationComponent
