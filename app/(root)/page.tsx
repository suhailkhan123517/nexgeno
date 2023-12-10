import About from "./_components/about";
import Accordion from "./_components/accordion";
import CallToAction from "./_components/callToAction";
import Client from "./_components/client";
import Contact from "./_components/contact";
import Counter from "./_components/counter";
import Expert from "./_components/experties";
import Hero from "./_components/hero";
import Seo from "./_components/seo";
import Solutions from "./_components/solutions";
import Stories from "./_components/stories";
import Testimonial from "./_components/testimonial";
import WhyUs from "./_components/whyUs";
import Work from "./_components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Expert />
      <Solutions />
      <Work />
      <Counter />
      <Stories />
      <About />
      <WhyUs />
      <Testimonial />
      <Client />
      <CallToAction />
      <Accordion />
      <Seo />
      <Contact />
    </>
  );
}
