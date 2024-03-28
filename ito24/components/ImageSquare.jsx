import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/imgbox/school1.jpg",
    title: "Breakfast",
  },
  {
    img: "/imgbox/school2.jpeg",
    title: "Burger",
  },
  {
    img: "/imgbox/school3.png",
    title: "Camera",
  },
  {
    img: "/imgbox/school4.jpeg",

    title: "Coffee",
  },
  {
    img: "/imgbox/school5.jpeg",

    title: "Hats",
  },
  {
    img: "/imgbox/school6.jpeg",

    title: "Honey",
  },
  {
    img: "/imgbox/school7.jpeg",
    title: "Basketball",
  },
  {
    img: "/imgbox/school8.jpeg",
    title: "Fern",
  },
  {
    img: "/imgbox/school9.jpeg",
    title: "Mushrooms",
  },
];
