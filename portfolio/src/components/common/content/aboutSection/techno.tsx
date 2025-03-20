import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

function Technologies() {
  return (
    <div className="flex size-full flex-col gap-4 sm:space-y-0 md:flex-row lg:py-9">
      <div className="flex h-full w-full flex-col">
        <Terminal>
          <TypingAnimation>
            &gt; Installation des dépendances avec pnpm...
          </TypingAnimation>

          <AnimatedSpan
            delay={800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Résolution des dépendances...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={1300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Vérification de l'intégrité du cache...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={1800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Création du store...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={2300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Installation des paquets...</span>
          </AnimatedSpan>

          <TypingAnimation delay={2300}>&gt; Technologies frontend...</TypingAnimation>

          <AnimatedSpan
            delay={2800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Next.js</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={3300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ React</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={3800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Tailwind CSS</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={4300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ HTML</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={4800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ CSS</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={5300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ JavaScript</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={5800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ jQuery</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={6300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ TypeScript</span>
          </AnimatedSpan>

          <TypingAnimation delay={6600} className="text-muted-foreground">
            Frontend maîtrisé.
          </TypingAnimation>
        </Terminal>
      </div>
      <div className="flex h-full w-full flex-col">
        <Terminal>
          <TypingAnimation>
            &gt; Installation des dépendances avec pnpm...
          </TypingAnimation>

          <AnimatedSpan
            delay={800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Résolution des dépendances...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={1300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Vérification de l'intégrité du cache...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={1800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Création du store...</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={2300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Installation des paquets...</span>
          </AnimatedSpan>
          
          <TypingAnimation delay={2300}>&gt; Technologies backend...</TypingAnimation>

          <AnimatedSpan
            delay={2800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ C</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={3300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Python</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={3800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Node.js</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={4300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Flask</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={4800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ SQL</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={5300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ MySQL</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={5800}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ PostgreSQL</span>
          </AnimatedSpan>

          <AnimatedSpan
            delay={6300}
            className="flex items-center gap-2 text-primary"
          >
            <span>✔ Bash</span>
          </AnimatedSpan>

          <TypingAnimation delay={6600} className="text-muted-foreground">
            Backend maîtrisé.
          </TypingAnimation>
        </Terminal>
      </div>
    </div>
  );
}

export default Technologies;
