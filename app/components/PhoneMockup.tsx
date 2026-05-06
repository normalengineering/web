import Image from "next/image";

const sizeClasses = {
  small: "w-full max-w-[230px]",
  default: "w-full max-w-[280px]",
  large: "w-full max-w-[300px]",
};

export default function PhoneMockup({
  src,
  alt,
  className = "",
  size = "default",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  size?: "small" | "default" | "large";
  priority?: boolean;
}) {
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="rounded-[2.8rem] border-[6px] border-zinc-800 bg-black shadow-2xl shadow-black/60">
        <div className="rounded-[2.3rem] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={867}
            className="w-full h-auto block"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
