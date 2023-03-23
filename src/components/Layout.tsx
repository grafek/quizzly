import { itemVariants, listVariants } from "@/utils/framer";
import { useCycle, AnimatePresence, motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { text: "Home", destination: "/" },
  { text: "Play", destination: "/categories" },
  { text: "Rules", destination: "/rules" },
  { text: "Scoreboard", destination: "/scoreboard" },
  // { text: "History", destination: "/history" },
];

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
  heading?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = "Quizzly",
  children,
  heading,
}) => {
  return (
    <div className="h-screen overflow-x-hidden text-dark-100 scrollbar-thin scrollbar-track-dark-900 scrollbar-thumb-goldenrod/75">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Quizzly - quizzes with a claw!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-dark-900 px-4 pt-20 pb-6">
        <div className="container mx-auto" id="container">
          {heading ? (
            <h1 className="pb-10 font-mukta text-5xl text-white md:pb-16 md:text-8xl">
              {heading}.
            </h1>
          ) : null}
          {children}
        </div>
      </main>
      <footer className="text-gray border-t-[1px] border-dark-600 bg-black p-4">
        <div className="container mx-auto text-center">
          <Link
            href={"https://github.com/grafek"}
            className="p-2"
            target={"_blank"}
          >
            ©{new Date().getFullYear()} Jacek Grafender
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

const Header: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const mobileNav = (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <m.nav
          className="sm:hidden"
          initial="hidden"
          animate="visible"
          exit="close"
          variants={listVariants}
        >
          <ul
            role={"navigation"}
            className="flex flex-col items-center justify-center p-4 text-dark-500"
          >
            {NAV_ITEMS.map((item, idx) => (
              <m.li
                variants={itemVariants}
                key={idx}
                className="my-1 w-full select-none font-semibold transition-all duration-300 hover:text-goldenrod sm:w-fit sm:py-0 sm:text-xl sm:hover:underline"
              >
                <Link
                  className="inline-block w-full py-4 text-center"
                  href={item.destination}
                  shallow
                >
                  {item.text}
                </Link>
              </m.li>
            ))}
          </ul>
        </m.nav>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header className="fixed z-40 w-[calc(100%-8px)] border-b-[1px] border-dark-600 bg-black">
      <div className="container mx-auto flex items-center justify-between p-3 px-5 text-light-goldenrod">
        <Link
          href="/"
          className="mx-auto flex gap-2 tracking-wider transition-all hover:scale-105 hover:text-goldenrod sm:m-0"
          role="banner"
        >
          <Image
            src="/paw2.svg"
            alt="quizzly-logo"
            width={"32"}
            height={"32"}
          />
          <span className="text-lg font-semibold md:text-xl">Quizzly</span>
        </Link>
        <button
          className="transition-transform duration-300 active:scale-90 sm:hidden"
          onClick={() => toggleOpen()}
        >
          <Image
            src="/hamburger.svg"
            alt="hamburger-menu-toggle"
            width={"32"}
            height={"32"}
          />
        </button>
        <nav className="hidden sm:block">
          <ul
            role={"navigation"}
            className="flex flex-col gap-6 text-dark-500 sm:flex-row"
          >
            {NAV_ITEMS.map((item, idx) => (
              <m.li
                animate="visible"
                exit="hidden"
                key={idx}
                layout
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.45 }}
                variants={itemVariants}
                className="w-full select-none py-4 font-semibold sm:w-fit sm:py-0 sm:text-xl sm:hover:underline"
              >
                <Link
                  className="inline-block w-full px-2 text-center transition-all duration-300 hover:scale-105 hover:text-goldenrod active:scale-95"
                  href={item.destination}
                >
                  {item.text}
                </Link>
              </m.li>
            ))}
          </ul>
        </nav>
      </div>
      {mobileNav}
    </header>
  );
};
