import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we are serious about is food</p>
            </div>
            <p className="mid">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illum doloremque animi nulla minima nemo maiores quis voluptas sit sed!
                Et, quod vel suscipit totam quia temporibus accusamus repellat provident dolor, tempora dignissimos pariatur voluptatem molestias porro nisi sunt illum?
                Incidunt explicabo, at tempora rem soluta quam quos blanditiis facilis doloremque aspernatur repellendus expedita obcaecati iste fuga perspiciatis temporibus sit.
            </p>
            <Link to={'/'}>
                Explore Menu{" "}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
