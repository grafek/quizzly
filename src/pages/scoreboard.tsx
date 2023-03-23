import Layout from "@/components/Layout";
import { getImgUrl, sanityClient } from "@/lib/sanityConfig";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { type User } from "../../types";

type ScoreboardProps = {
  users: User[];
};

const ScoreboardPage: NextPage<ScoreboardProps> = ({ users }) => {
  return (
    <Layout heading="Scoreboard" title="Scoreboard">
      <div className="w-full overflow-x-auto rounded-lg border border-dark-700 bg-black px-8 scrollbar-thin">
        <div
          className={`flex min-h-[70dvh] w-full items-center  divide-x-[1px] divide-dark-700`}
        >
          {users.map((user) => (
            <div
              key={user._id}
              className="flex min-h-[400px] min-w-[218px] flex-1 flex-col items-center justify-between p-4"
            >
              <div className="relative h-32 w-32 xl:h-48 xl:w-48">
                <Image
                  alt={`${user.name}'s picture`}
                  src={getImgUrl(user.image).url()}
                  className="rounded-full"
                  fill
                />
              </div>
              <p className="text-3xl text-white md:text-5xl xl:text-7xl">
                {user.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ScoreboardPage;

const query = `*[_type == 'user']`;

export const getStaticProps: GetStaticProps<ScoreboardProps> = async () => {
  const users = await sanityClient.fetch(query);

  return {
    props: {
      users: users as User[],
    },
  };
};
