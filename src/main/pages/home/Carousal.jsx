import {Carousel} from "react-responsive-carousel";
import {CarousalImages} from "./ImageSources.jsx";
import Box from "@mui/material/Box";

import './css/HomePage.css'

const MainCarousal = () => {
    return (
        <>
            <Box sx={{background: 'paper', padding: 1, borderRadius: 20}} className="homeCarousal">
                <Carousel showThumbs={false} showStatus={false} sx={{background: 'paper', padding: 2, borderRadius: 20}}
                          style={{width: '100%', height: '500px', fill: "true"}}>
                    {CarousalImages.map((step) => (
                        <div key={step.label}>
                            <img
                                src={step.photo}
                                alt={step.label}
                                style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '800px'}}
                            />
                            <p className="legend">{step.label}</p>
                        </div>
                    ))}


                </Carousel>
            </Box>
        </>
    )
}

export default MainCarousal
