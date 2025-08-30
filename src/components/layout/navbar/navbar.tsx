import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  return (
    <div className="container z-50">
      <div className="flex w-full items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo/SVG/logo-horizontal-light.svg"
              alt="Velomi Store"
              width={120}
              height={42}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
