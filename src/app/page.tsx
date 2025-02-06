import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-3 py-5grid grid-flow-row xl:grid-cols-2  overflow-scroll h-fit space-y-3">
        <Link href={"/"} className="h-[65%] flex flex-col justify-center ">
          <Image
            src={"/KidsNews.png"}
            alt="Home"
            width={1000}
            height={1000}
            className="rounded-lg h-fit w-[70vh] mx-auto"
          />
        </Link>
        <Link href={"/"} className="h-[65%] flex flex-col justify-center">
          <Image
            src={"/BrainGames.png"}
            alt="Home"
            width={1000}
            height={1000}
            className="rounded-lg h-fit w-[70vh] mx-auto "
          />
        </Link>
       
      </div>
    </>
  );
}
