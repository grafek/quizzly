import { sanityClient } from "@/lib/sanityConfig";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { type Category } from "../../../../types";
import { ParsedUrlQuery } from "querystring";
import Card from "@/components/Card";
import { useRouter } from "next/router";

interface Params extends ParsedUrlQuery {
  categorySlug: string;
}

type CategoryPageProps = {
  category: Category;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-12">
      {category.questions.map((question, idx) => (
        <Card
          href={`${router.asPath}/${question._id}`}
          key={question._id}
          isQuestion={true}
        >
          {idx + 1}
        </Card>
      ))}
    </div>
  );
};

export default CategoryPage;

const query = `*[_type == "category" && slug.current == $categorySlug][0]{
  ...,
  questions[] ->
}`;

const pathsQuery = `*[_type == "category" && defined(slug.current)][].slug.current`;

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (
  context
) => {
  const { categorySlug = "" } = context.params as Params;

  const category = await sanityClient.fetch(query, { categorySlug });

  return {
    props: {
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pathsQuery);

  return {
    paths: paths.map((categorySlug: string) => ({ params: { categorySlug } })),
    fallback: "blocking",
  };
};
