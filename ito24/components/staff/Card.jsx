import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@/components/staff/Avatar";

export default function MediaCard({ source, name, title, bio }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Avatar source={source} name={name} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
}
