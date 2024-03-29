import React from "react";
import Nav from "@/components/Nav";
import Avatar from "@/components/staff/Avatar";
import Image from "next/image";
import TextInput from "@/components/TextInput";

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
          <span className='writing-font5 text-9xl text-yellow-400'>
            {" "}
            NOTICE:
          </span>
          <div className='mt-5 mb-5 writing-font5 text-4xl'>
            {" "}
            This page is under development by our IT specialist Baldrick{" "}
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
          <div className='mt-5 mb-5 writing-font5 text-4xl'>
            {" "}
            As a temporary fix, use this to enter your email to sign up for
            eNews
          </div>
          <TextInput />
        </div>
      </div>
    </>
  );
};

export default page;
