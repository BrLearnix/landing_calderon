import Image from "next/image";

interface WatermarkProps {
  size?: number;
  opacity?: number;
  className?: string;
}

export default function Watermark({
  size = 112,
  opacity = 0.45,
  className = "",
}: WatermarkProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-[5] flex items-center justify-center ${className}`}
    >
      <Image
        src="/img/logo1.avif"
        alt=""
        width={size}
        height={size}
        style={{ opacity }}
        className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}