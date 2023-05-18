import Head from "next/head";
import Projects from "@/modules/Projects/Projects";
import Contact from "@/modules/Contact/Contact";
import ThreeScene from "@/elements/canvas/Stars/stars";
import About from "@/modules/About/About";
import Banner from "../modules/Banner/Banner";
import Navigation from "@/modules/Navigation/Navigation";
import Footer from "@/modules/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio-Jasmina Mihajloska" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoJM.png" />
      </Head>

      <main className={"gradient"}>
        <Navigation />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer/>
        <ThreeScene />
      </main>
    </>
  );
}
