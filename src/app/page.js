'use client'

import styles from "./page.module.css";
import HeroSection from '@/components/HeroSection/HeroSection'
import Navigation from "@/components/Navigation/Navigation";
import Why from "@/components/Why/Why";
import Services from "@/components/Services/Services";
import Contact from '@/components/Contact/Contact';
import About from "@/components/About/About";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from '@/components/Footer/Footer';

import { useRef } from "react";

export default function Home() {
  var whyUs = useRef();
  var services = useRef();
  var contact = useRef();
  var about = useRef();
  var textAndOnclick = [];

  const scrollTo = function(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  textAndOnclick = [
    ["Why Us", ()=>scrollTo(whyUs.current)],
    ["Services", ()=>scrollTo(services.current)],
    ["Contact", ()=>scrollTo(contact.current)],
    ["About", ()=>scrollTo(about.current)]
  ]

  return (
    <div className={styles.gen_con}>
      <div>
        <Navigation textAndOnclick={textAndOnclick} />
      </div>
      <div>
        <HeroSection scroll_to={()=>scrollTo(contact.current)} />
      </div>
      <div className={styles.why_wrapper} ref={whyUs}>
        <Why />
      </div>
      <div className={styles.service_wrapper} ref={services}>
        <Services />
      </div>
      <div className={styles.contact_wrapper} ref={contact}>
        <Contact />
      </div>
      <div className={styles.about_wrapper} ref={about}>
        <About />
      </div>
      <div className={styles.testimonial_wrapper}>
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
