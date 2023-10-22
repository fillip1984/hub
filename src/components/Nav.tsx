import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[999] flex h-16 items-center justify-between bg-grey px-2 text-white backdrop-blur">
      <p className="py-4 text-4xl md:text-6xl">Welcome to illizen</p>
      <Link href="/" className="relative h-10 w-10 md:h-12 md:w-12">
        <Image
          src="/android-chrome-512x512.png"
          alt="Hub logo"
          fill
          sizes="(max-width: 48px)"
        />
      </Link>
    </nav>
  );
}
