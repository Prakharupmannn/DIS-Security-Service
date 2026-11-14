import Image from "next/image";
// Parent must be `relative` with a size. A navy gradient shows if an image fails to load.
export default function Photo({ src, alt, pos = "center", className = "", sizes = "100vw", priority = false }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} style={{ objectPosition: pos }} />;
}
