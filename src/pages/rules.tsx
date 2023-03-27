import { sanityClient } from "@/lib/sanityConfig";
import { GetStaticProps, NextPage } from "next";
import type { Category } from "../../types";

type RulesProps = { categories: Category[]; generalRules: string[] };

const RulesPage: NextPage<RulesProps> = ({ categories, generalRules }) => {
  return (
    <>
      <h2 className="py-3 font-mukta text-3xl text-white md:text-6xl">
        General Rules
      </h2>
      <ol className="list-inside list-disc marker:text-goldenrod">
        {generalRules.map((rule, index) => (
          <li className="my-1 md:text-xl" key={`general-rule-${index}`}>
            {rule}
          </li>
        ))}
      </ol>
      {categories.map((category) => (
        <div key={category._id}>
          <h2 className="py-3 font-mukta text-3xl text-white md:text-6xl">
            {category.title}
          </h2>
          <ol className="list-inside list-disc marker:text-goldenrod">
            {category.rules.map((rule, index) => (
              <li
                className="my-1 md:text-xl"
                key={`${category._id}-rule-${index}`}
              >
                {rule}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
};

export default RulesPage;

const catogoriesQuery = `*[_type == 'category']`;

const generalRulesQuery = `*[_type == 'general'][0].rules`;

export const getStaticProps: GetStaticProps<RulesProps> = async () => {
  const categories = await sanityClient.fetch(catogoriesQuery);

  const generalRules = await sanityClient.fetch(generalRulesQuery);

  return {
    props: {
      categories,
      generalRules,
    },
  };
};
