"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function IndividualIntervalsExample() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #0B7A32 0%, #00008B 100%)",
        }}
      >
        <Image
          src='/carousel/TODDHS.png'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>
              Our students discover a passion for learning
            </p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #00008B 0%, #880808 100%)",
        }}
      >
        <Image
          src='/carousel/johnsonnn.webp'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>
              Our school puts out more D1 pickleball players than any other
            </p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #880808 0%, #5D3FD3 100%)",
        }}
      >
        <Image
          src='/carousel/jockostare.jpg'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>We take education seriously</p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #5D3FD3 0%, #E6E6FA 100%)",
        }}
      >
        <Image
          src='/carousel/impracticalstare.jpg'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>
              68% of teaching staff hold masters degrees or higher
            </p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #E6E6FA 0%, #FFBF00 100%)",
        }}
      >
        <Image
          src='/carousel/brooksmon.jpeg'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>We feed them well</p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #FFBF00 0%, #4A0404 100%)",
        }}
      >
        <Image
          src='/carousel/brooks_1.png'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>
              We prepare our students for success
            </p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        interval={2500}
        style={{
          height: "400px",
          //   backgroundImage: "linear-gradient(90deg, #4A0404 0%, #0B7A32 100%)",
        }}
      >
        <Image
          src='/carousel/winners4lyfe.png'
          alt='logo'
          width={500}
          height={500}
          layout='fixed'
          className='d-block w-100'
          style={{ objectFit: "contain", height: "100%" }}
        />
        <Carousel.Caption>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className='writing-font text-gray-200'
          >
            <p className='w-fit bg-slate-700'>
              Our students win the totality of their endeavors
            </p>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
