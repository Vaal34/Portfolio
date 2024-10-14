"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { s } from "framer-motion/client";
import { useState } from "react";

function FormContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "b92876f9-aad0-4d43-abcf-eaa3fd804f43");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setSuccess(true);
      } else {
        setError("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (e) {
      setLoading(false);
      setError("Impossible de soumettre le formulaire pour le moment.");
    }
  }

  return (
    <>
      <MagicCard
        gradientColor="#3b25e9"
        gradientOpacity={0.1}
        className="flex h-3/4 w-2/3 justify-center bg-background shadow-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col items-center justify-evenly"
        >
          <div className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.20] before:bg-secondary before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
            <h1 className="relative text-3xl md:text-6xl font-thin italic text-primary">
              {success ? "Bien Envoyé !" : "Contactez-moi !"}
            </h1>
          </div>
          {!success ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="Votre Nom"
                required
                className="w-full border border-secondary p-2 placeholder:text-primary/50 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                required
                className="w-full border border-secondary p-2 placeholder:text-primary/50 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Votre Message"
                required
                className="w-full border border-secondary p-2 placeholder:text-primary/50 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="flex w-[150px] cursor-pointer items-center justify-between bg-primary px-3 py-2 font-mono text-white shadow-xl duration-500 hover:scale-105 hover:bg-secondary"
              >
                {loading ? "Envoi..." : "Envoyez"}
                {loading ? (
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-5 w-5 animate-spin"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g
                        fill="#3b25e9"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path
                          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                          opacity=".2"
                        ></path>
                        <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                  </svg>
                )}
              </button>
            </>
          ) : (
            <></>
          )}
        </form>
      </MagicCard>
    </>
  );
}

export default FormContact;
