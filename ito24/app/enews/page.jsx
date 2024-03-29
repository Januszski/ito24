import React from "react";
import Nav from "@/components/Nav";
import Avatar from "@/components/staff/Avatar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div style={{}}>
        <Nav />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          className='w-full h-full mt-5'
        >
          <span className='writing-font5 text-9xl'> NOTICE:</span>
          <div>
            {" "}
            This page is still under development by our IT specialist Baldrick{" "}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Avatar source={"/enews/ITGuy.jpeg"} />
            </div>
            <div>
              <Image
                src='/enews/wrench-icon-25557.png'
                alt='logo'
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
