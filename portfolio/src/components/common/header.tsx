import Marquee from "../ui/marquee";

function Header() {
  return (
    <header className="flex items-center overflow-hidden bg-primary text-secondary md:flex-row">
      <Marquee pauseOnHover>
        <span className="font-weight-700 mx-4 text-8xl">MELIA VALENTIN</span>
        <span className="font-weight-600 mx-4 text-8xl italic">
          DEVELOPPEUR FULLSTACK
        </span>
      </Marquee>
    </header>
  );
}

export default Header;
