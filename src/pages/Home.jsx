import React from "react";
import { useAuth } from "../context/contextapi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { user } = useAuth();
  const fullName = user && user.name ? user.name : "";
  const username = fullName.substring(0, 5);
  return (
    <>
      <main>
        <section className="bg-gray-900 text-white py-20">
          <div className="container grid grid-cols-2 gap-8 ">
            <div className="flex flex-col justify-center mx-8 ">
              <p className="text-sm">We are the World Best PassWord Manager</p>
              <h1 className="text-4xl font-bold">
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
                    delaySpeed={2000}
                  />
                </span>
                  )}
              </h1>
              <p className="mt-4  text-lg">
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
                  connect now
                </a>
                <a
                  href="/services"
                  className="btn secondary-btn removeLinkHover py-2 px-2 bg-blue-500 text-black rounded"
                >
                  learn more
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="flex justify-center">
              <img
                src="/img/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container grid grid-cols-2 gap-8">
          {/* hero images  */}
          <div className="flex justify-center">
            <img
              src="/img/design.png"
              alt="coding together"
              width="350"
              height="500"
            />
          </div>

          <div className="flex flex-col justify-center mx-5">
            <p className="text-sm">We are here to help you</p>
            <h1 className="text-4xl font-bold">Get Started Today</h1>
            <p className="mt-4 text-lg">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Harsh Technical can help your business thrive in
              the digital age.
            </p>
            <div className="mt-6 space-x-4 ">
              <a
                href="/contact"
                className="btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded"
              >
                connect now
              </a>
              <a
                href="/services"
                className="btn secondary-btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
