import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-3 grid grid-flow-row xl:grid-cols-2  space-x-2 space-y-3 h-screen overflow-scroll">
        <Link href={"/"} className="">
          <Image
            src={"/Home 1.png"}
            alt="Home"
            width={1000}
            height={1000}
            className="rounded-lg h-fit w-fit mx-auto"
          />
        </Link>
        <Link href={"/"} className="w-full mx-auto">
          <Image
            src={"/Home 2.png"}
            alt="Home"
            width={1000}
            height={1000}
            className="rounded-lg h-fit w-fit mx-auto"
          />
        </Link>
        <Link href={"/"} className="w-full mx-auto">
          <Image
            src={"/Home 1.png"}
            alt="Home"
            width={1000}
            height={1000}
            className="rounded-lg h-fit w-fit mx-auto"
          />
        </Link>
      </div>
    </>
  );
}
