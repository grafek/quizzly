import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-[85dvh] select-none flex-col items-center gap-8 text-white sm:flex-row">
      <div className="flex h-1/2 flex-1 flex-col items-center justify-center gap-10 sm:h-full">
        <h1 className="max-w-[545px] text-4xl font-bold sm:text-6xl">
          Your favorite quizzes & score tracking site
        </h1>
        <div className="flex w-full flex-col gap-8 font-semibold sm:flex-row xl:w-3/4">
          <Link
            href={"/categories"}
            className="flex-1 rounded-sm bg-goldenrod px-4 py-2 text-center text-black ring-1 ring-goldenrod transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white active:scale-95"
          >
            Play
          </Link>
          <Link
            href={"/rules"}
            className="flex-1 rounded-sm bg-transparent px-4 py-2 text-center ring-1 ring-goldenrod transition-all duration-300 hover:scale-105 hover:bg-goldenrod hover:text-black active:scale-95"
          >
            Rules
          </Link>
        </div>
      </div>
      <div className="relative flex h-1/2 flex-1 items-center justify-center sm:h-full">
        <Image
          alt="woman-with-question-mark"
          src={"/bear1.png"}
          width="360"
          height={"360"}
          className="lg:h-[500px] lg:w-[500px]"
        />
      </div>
    </div>
  );
};

export default HomePage;
