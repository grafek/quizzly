import { getImgUrl, sanityClient } from "@/lib/sanityConfig";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { type User } from "../../types";

type ScoreboardProps = {
  users: User[];
};

const ScoreboardPage: NextPage<ScoreboardProps> = ({ users }) => {
  return (
    <div className="h-[calc(100dvh-7rem)] overflow-x-auto rounded-lg border border-dark-700 bg-black px-4 scrollbar-thin">
      <div className={`m-auto flex h-full w-full items-center gap-4 md:gap-8`}>
        {users.map((user) => (
          <div
            key={user._id}
            className="mx-auto flex min-h-[400px] min-w-[218px] flex-1 flex-col items-center justify-between p-4"
          >
            <div className="relative mx-auto h-32 w-32 xl:h-40 xl:w-40">
              <Image
                alt={`${user.name}'s picture`}
                src={getImgUrl(user.image).url()}
                className="rounded-full"
                fill
                priority
                sizes="128px"
              />
            </div>
            <p className="text-3xl text-white md:text-5xl xl:text-7xl">
              {user.score}
            </p>
          </div>
        ))}
      </div>
    </div>
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
