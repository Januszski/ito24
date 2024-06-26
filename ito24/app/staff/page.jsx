import React from "react";
import Avatar from "@/components/staff/Avatar";
import Card from "@/components/staff/Card";
import Grid from "@mui/material/Grid";
import Nav from "@/components/Nav";

//export default function MediaCard({ source, name, title, bio }) {

const page = () => {
  return (
    <>
      <Nav />

      <Grid container flexDirection='row' columns={6} id='log-grid'>
        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff1.jpg"}
            name={"Mz. Pomegranate"}
            title={"English Teacher"}
            bio={"pomegranate@toddhs.ia.us"}
          />
        </span>
        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff2.jpeg"}
            name={"Mr. Keto"}
            title={"Social Studies Teacher"}
            bio={"keto@toddhs.ia.us"}
          />
        </span>
        <span
          style={{ minWidth: "min-content", width: "17%" }}
          className='m-5 w-min'
        >
          <Card
            source={"/staff/staff3.jpeg"}
            name={"Dr. Euleneichschtenstein"}
            title={"Calculatorius Trigonometric Mathematic Maximus Teacher"}
            bio={"abc123@toddhs.ia.us"}
          />
        </span>
        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff4.jpg"}
            name={"Mrs. Hayes"}
            title={"Science Teacher"}
            bio={"hayes@toddhs.ia.us"}
          />
        </span>

        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff5.jpg"}
            name={"Mr. Thurgood"}
            title={"Robotics Teacher"}
            bio={"thurgood@toddhs.ia.us"}
          />
        </span>

        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff6.png"}
            name={"Ms. Reel"}
            title={"AI imaging Teacher"}
            bio={"customersupporṫ@attt.com"}
          />
        </span>

        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/Pete.jpeg"}
            name={"Mr. Ratajczyk"}
            title={"Music Teacher"}
            bio={"Pete@toddhs.ia.us"}
          />
        </span>

        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/staff/staff7.jpg"}
            name={"Mr. McEnroe"}
            title={"Principal"}
            bio={"mcenroe@toddhs.ia.us"}
          />
        </span>

        <span style={{ minWidth: "min-content", width: "17%" }} className='m-5'>
          <Card
            source={"/enews/ITGuy.jpeg"}
            name={"Baldrick"}
            title={"IT"}
            bio={"Avid systemctl user"}
          />
        </span>
      </Grid>
    </>
  );
};

export default page;
