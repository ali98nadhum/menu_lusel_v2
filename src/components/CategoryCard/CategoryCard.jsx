import React from 'react'
import module from "./categorycard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    
  return (
    <div className={module.test}>
    <Link to={`/`}>
      <Card className={module.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            className={module.img}
            component="img"
            height="200"
            image={props.data.img}
            sx={{
              width: "100%",
            }}
          />
          <CardContent>
            <Typography
              className={module.title}
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "22px",
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "#f7d58d",
                borderRadius: "20px",
                fontFamily: " Almarai, sans-serif",
                padding: "3px"
              }}
            >
              {props.data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
  </div>

  )
}

export default CategoryCard
