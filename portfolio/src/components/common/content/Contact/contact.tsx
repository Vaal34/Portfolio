import FormContact from "./form";
import { RevealLinks } from "./linksocial";

function Contact() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="h-screen w-full bg-primary">
      <div className="flex h-5/6 md:h-4/6 items-center justify-center">
        <FormContact />
      </div>
      <div className="h-1/6 md:h-2/6">
        <div className="hidden md:block">
          <RevealLinks />
        </div>
        <div className="h-full flex flex-col items-center justify-center md:block bg-accent text-center text-primary">
          <p>©{year} Valentin Melia. Tous droits réservés.</p>
          <p>
            Conçu et développé par{" "}
            <a href="https://github.com/vaal34" className="underline">
              Valentin Melia
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
