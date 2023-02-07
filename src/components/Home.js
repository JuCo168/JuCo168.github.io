import React from "react";
import styles from "../styles"
import { doggoFull, doggoSmall } from "../assets";
import About from "./About";
import Tilt from "react-parallax-tilt"

function Home() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={doggoSmall} alt="doggo" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span >20%</span> Discount for {" "}
            <span >1 month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            Hello there! <br/>
            <span className="text-gradient">I'm Julius</span>
          </h1>
          <Tilt>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <About/>
            </div>
          </Tilt>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
          Welcome to my portfolio!
        </h1>
      </div>
    </section>
  );
}

export default Home;