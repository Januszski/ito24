import Image from "next/image";
import Nav from "@/components/Nav";
import Snackbar from "@/components/Snackbar";
import Carousel from "@/components/Carousel";
import ImageSquare from "@/components/ImageSquare";
//#0B7A32
export default function Home() {
  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: "linear-gradient(90deg, #C8102E 0%, #F1BE48 100%)",
        }}
      >
        <Image
          src='/ToddHSLogoTransparent.png'
          alt='logo'
          width={500}
          height={100}
          layout='fixed' // Add this line
          className='object-cover ml-1.5 border-blue-500'
          style={{ height: "150px", marginTop: "25px", marginBottom: "25px" }}
        />

        {/* <Image
          src='/eyeball.png'
          alt='logo'
          width={250}
          height={100}
          layout='fixed' // Add this line
          className='object-cover ml-1.5 border-blue-500'
          style={{ height: "150px", marginTop: "25px", marginBottom: "25px" }}
        /> */}
        <span style={{ paddingRight: "25px" }}>
          <Snackbar />
        </span>
      </span>

      <Nav />
      <span
        style={{
          backgroundImage: "linear-gradient(90deg, #C8102E 0%, #F1BE48 100%)",
        }}
      >
        <Carousel />
      </span>

      <div className='flex-row flex justify-around w-full '>
        <div className='flex-col flex-start'>
          <h1 className='head_text text-left centered-text'>
            {/* <span className='lightning-effect text-white'>&#x26A1;</span> */}

            <span className='ml-3 mt-3 writing-font3'>Todd High School</span>
          </h1>
          <span className='max-md:hidden text-center text-gray-600 text-4xl centered-text mt-1'></span>

          <div className='wave'> </div>

          <span style={{ marginLeft: "50px" }}>
            <p className='desc centered-text ml-9 mr-9 writing-font4'>
              Welcome to Todd High School, where excellence meets opportunity in
              the heart of Iowa! At Todd High, we are committed to providing a
              nurturing environment where students can flourish academically,
              socially, and personally. Our dedicated faculty and staff are
              passionate about empowering students to reach their full
              potential. With a focus on personalized learning, we strive to
              meet the unique needs of each individual, fostering a culture of
              collaboration, critical thinking, and creativity.
            </p>
            <p className='desc centered-text ml-9 mr-9 writing-font4'>
              Academic Excellence: At Todd High School, academic excellence is
              at the core of everything we do. Our rigorous curriculum is
              designed to challenge and inspire students, preparing them for
              success in college, careers, and beyond. From advanced placement
              courses to career and technical education programs, we offer a
              diverse range of opportunities for students to explore their
              interests and pursue their passions.
            </p>

            <p className='desc centered-text ml-9 mr-9 writing-font4'>
              Extracurricular Activities: Beyond the classroom, Todd High School
              offers a vibrant array of extracurricular activities, clubs, and
              organizations to enrich the student experience. Whether it&apos;s
              participating in sports, joining the debate team, or volunteering
              in the community, there&apos;s something for everyone to get
              involved in and make lasting memories.
            </p>

            <p className='desc centered-text ml-9 mr-9 writing-font4'>
              Join us at Todd High School, where every student has the
              opportunity to learn, grow, and thrive. Discover your potential
              and become part of our proud tradition of excellence!
            </p>
          </span>
        </div>
        <div className='w-1/4 flex-center mr-14 flex-col flex-between'>
          {/* <Image
              src='/tricelightning.jpg'
              alt='lightning over Jack Trice'
              width='450'
              height='225'
              className='mb-5 mr-14'
            /> */}
          <span className='max-md:hidden mt-7'>
            <ImageSquare />
          </span>
          <span className='max-md:hidden flex-center flex-col'>
            <div className='mt-3'></div>
          </span>
        </div>
      </div>
    </>
  );
}
//&apos;
