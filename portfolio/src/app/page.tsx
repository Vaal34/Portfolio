import Content from "@/components/common/content";
import Header from "@/components/common/header";
import Navbar from "@/components/common/navbar";
import { Old_Standard_TT, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Content />
    </>
  );
}

export default Home;
