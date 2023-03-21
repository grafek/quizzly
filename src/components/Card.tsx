import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  href: string;
  isQuestion?: boolean;
};

const Card: React.FC<CardProps> = ({ href, children, isQuestion }) => {
  return (
    <Link
      href={href}
      className={`${
        isQuestion ? "visited:border-green-600" : ""
      } flex h-[12rem] w-[24rem] flex-1 items-center justify-center rounded-lg border border-dark-700 bg-black p-6 transition-all duration-300 group-visited:border-green-600 hover:scale-105 hover:border-goldenrod active:scale-95 sm:h-[12rem] sm:w-[32rem]`}
    >
      <h2 className="text-center text-4xl font-bold tracking-wider sm:text-6xl">
        {children}
      </h2>
    </Link>
  );
};

export default Card;
