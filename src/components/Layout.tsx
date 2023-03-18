import Head from "next/head";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title = "Quizzly", children }) => {
  return (
    <div className="h-screen overflow-x-hidden scrollbar-thin scrollbar-track-dark scrollbar-thumb-goldenrod">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Quizzly - quizzes with a claw!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-black text-light-goldenrod">Header</header>
      <main className="min-h-screen bg-dark">
        <div className="container mx-auto" id="container">
          {children}
        </div>
      </main>
      <footer className="bg-black text-light-gray">Footer</footer>
    </div>
  );
};

export default Layout;
