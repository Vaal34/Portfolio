import { TextVelocity } from "@/animations/textVelocity";
import { Old_Standard_TT, Roboto } from "next/font/google";
import { HyperTextCustom } from "@/animations/hyperText";
import ParticlesDemo from "@/animations/particle";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`flex flex-col items-center ${roboto.className}`}>
      <ParticlesDemo />
      <div className="w-[100%] flex flex-col items-center p-6">
        <HyperTextCustom 
          text="Valentin Melia" 
          className={`md:text-8xl vert text-4xl ${roboto.className} font-weight-700`}
        />
        <HyperTextCustom 
          text="Fullstack Developer" 
          className={`md:text-[2.25rem] vert-dark text-2xl ${oldStandardTT.className} leading-0`}
        />
      </div>
      <div className="w-4/5 px-10 mt-10">
        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum dolorum cumque libero optio? Vitae, soluta eveniet quasi, provident porro voluptatum quisquam corrupti eligendi inventore obcaecati cumque architecto iusto repudiandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum dolorum cumque libero optio? Vitae, soluta eveniet quasi, provident porro voluptatum quisquam corrupti eligendi inventore obcaecati cumque architecto iusto repudiandae? </p>
      </div>
    </main>
  );
}