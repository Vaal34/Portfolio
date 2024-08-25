import { TextVelocity } from "@/animations/textVelocity";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <TextVelocity />
    </main>
  );
}