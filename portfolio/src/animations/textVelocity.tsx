import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export function TextVelocity() {
  return (
    <VelocityScroll
      text="Valentin Melia Fullstack Developer"
      default_velocity={1}
      className={`font-display vert text-center text-4xl drop-shadow-sm *:tracking-[-0.02em] dark:text-white md:text-7xl md:leading-[5rem] ${roboto.className} font-weight-700`}
    />
  );
}
