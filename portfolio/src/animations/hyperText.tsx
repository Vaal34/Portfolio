import HyperText from "@/components/magicui/hyper-text";

export function HyperTextCustom({ text, className }: Readonly<{ text: string, className: string }>) {
  return (
    <HyperText
      className={className}
      text={text}
    />
  );
}