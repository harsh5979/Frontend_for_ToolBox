import React from "react";
import { useAuth } from "../context/contextapi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { user } = useAuth();
  const fullName = user && user.name ? user.name : "";
  const username = fullName.substring(0, 5);
  return (
    <>
    <div className="snap-x snap-mandatory ">
      <main >
        <section className="bg-gray-900 text-white py-20 snap-center ">
          <div className="container grid md:grid-cols-2    gap-8  m-auto my-1 justify-center content-center ">
            <div className="flex flex-col justify-center mx-7 ">
              <p className="text-sm select-none">We are the World <span className="text-yellow-500">Best PassWord Manager</span> </p>
              <h1 className="md:text-4xl font-bold text-4xl">
                {" "}
                <Typewriter
                  words={["Welcome to Our Website "]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                {username && (

              
               
                <span className="text-purple-600">
                  <Typewriter
                    words={[`${username}...`]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                  />
                </span>
                  )}
              </h1>
              <p className="mt-4  md:text-lg text-lg snap-center select-none">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Harsh Technical,
                we specialize in providing innovative Password Manager services
                and solutions tailored to meet your unique needs.
              </p>

              <div className="mt-6 space-x-4   ">
                <a
                  href="/contact"
                  className="btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded"
                >
                  ConnectUs
                </a>
                <a
                  href="/services"
                  className="btn secondary-btn removeLinkHover py-2 px-2 bg-blue-500 text-black rounded"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className=" flex  justify-center    md:order-1     md:m-1  cursor-none select-none ">
              <img
                src="/img/home.png"
                alt="coding together"
                // width="400"
                className="md:w-[400px] md:h-[480px] w-[290px] h-[300px] "
                // height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="bg-gray-950 text-white md:py-40 py-20 snap-center">
        <div className="container md:grid md:grid-cols-2 gap-8">
          {/* hero images  */}
          <div className="flex justify-center mb-6 md:mb-0 select-none cursor-none">
            <img
              src="/img/design.png"
              alt="coding together"
              // width="350"
              // height="500"
              className="md:w-[380px] md:h-[420px] w-[300px]  "
            />
          </div>

          <div className="flex flex-col justify-center mx-5">
            <p className="text-sm">We are here to help you</p>
            <h1 className="text-4xl font-bold">Get Started <span className="text-yellow-500">Today</span></h1>
            <p className="mt-4 text-lg mx-6 select-none">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Harsh Technical can help your business thrive in
              the digital age.
            </p>
            <div className="mt-6 space-x-4 mx-6 ">
              <a
                href="/contact"
                className="btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded"
              >
                ConnectUs
              </a>
              <a
                href="/services"
                className="btn secondary-btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
