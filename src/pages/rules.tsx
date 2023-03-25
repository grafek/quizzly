import { sanityClient } from "@/lib/sanityConfig";
import { GetStaticProps, NextPage } from "next";
import { Category } from "../../types";

type RulesProps = { categories: Category[] };

const RulesPage: NextPage<RulesProps> = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div key={category._id}>
          <h2 className="py-2 font-mukta text-3xl text-white md:text-6xl">
            {category.title}
          </h2>
          <ul>
            {category.rules.map((rule, index) => (
              <li
                className="my-1 md:text-xl"
                key={`${category._id}-rule-${index}`}
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default RulesPage;

const query = `*[_type == 'category']`;

export const getStaticProps: GetStaticProps<RulesProps> = async () => {
  const categories = await sanityClient.fetch(query);

  return {
    props: {
      categories: categories as Category[],
    },
  };
};
