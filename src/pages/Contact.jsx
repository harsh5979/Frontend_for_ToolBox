import React, { useState, useEffect } from "react";
import { useAuth } from "../context/contextapi";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: " ",
  email: "",
  message: "",
};

const Contact = () => {
  const { token, url } = useAuth();
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();


  if (userData && user) {
    setContact({
      username: user.name,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/con/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: user.name,
          email: user.email,
          message: "",
        });
        const data = await response.json();
        // console.log(data);
        toast("Message send successfully");
      } else {
        toast(data);
      }
    } catch (error) {
      toast("Message not send. please login!!");
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-rows">
        {/* <section className="w-[250px]"> */}
        <div className="contact-content container  absolute top-[139px]   ">
          <h1 className="main-heading  text-left mx-5  font-serif text-5xl  md:mx-[170px]  ">
            Contact us
          </h1>
          <hr className="w-[10%] mx-[175px] border-2 rounded  border-purple-600 my-1" />
        </div>
        {/* <div className=" my-[72px] "> */}
        {/* contact page main  */}
        {/* <div className="md:flex gird grid-cols-2  "> */}
        <div className="w-[400px] md:mx-[200px] h-[50px] md:my-[120px] mt-[140px] hidden md:block  order-first   ">
          <img
            className="md:h-[320px] md:w-[350px] md:mx-0 w-[200px] m  h-[150px] "
            src="/img/support.png"
            alt="we are always ready to help"
          />
        </div>
        {/* </section> */}

        {/* contact form content actual  */}
        <section className="w-[379px] mx-2 mt-[170px] md:mt-[120px] section-form mb-[120px] md:mx-12 border border-gray-800 px-9 py-7 backdrop-blur-xl bg-gray-900/45 shadow-2xl shadow-slate-800 rounded-md md:w-fit ">
          <form onSubmit={handleSubmit}>
            <div className=" flex  flex-col my-2 ">
              <label className="mb-1" htmlFor="username">
                Username
              </label>
              <input
                className=" md:contactinput contactResponsive"
                type="text"
                name="username"
                id="name"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
              />
            </div>

            <div className="flex flex-col my-4">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="md:contactinput contactResponsive"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="flex flex-col my-3">
              <label className="mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="md:contactinput contactResponsive"
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div className="my-5 ">
              <button
                className="bg-[#3f5e8199] py-2 px-6 rounded hover:bg-[#70a2da99] "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {/* </div> */}
          {/* </div> */}
          {/* 
        <section className="mb-3 fixed bottom-0 m-auto w-full  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="70"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section> */}
        </section>
      </div>
    </>
  );
};

export default Contact;
