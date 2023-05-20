import Head from "next/head";
import Projects from "@/modules/Projects/Projects";
import Contact from "@/modules/Contact/Contact";
import About from "@/modules/About/About";
import Banner from "../modules/Banner/Banner";
import Navigation from "@/modules/Navigation/Navigation";
import Footer from "@/modules/Footer/Footer";
import StarsCanvas from "@/elements/canvas/Stars/StarsCanvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihajloska</title>
        <meta name="description" content="Portfolio of Jasmina Mihajloska, a Front-end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoJM.png" />
        <meta property="og:image" content="/og-image.png"/>

      </Head>

      <main className={"gradient"}>
        <Navigation />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer/>
        <StarsCanvas/>
      </main>
    </>
  );
}
