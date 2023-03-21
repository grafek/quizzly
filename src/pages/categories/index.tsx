import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { sanityClient } from "@/lib/sanityConfig";
import { GetStaticProps, NextPage } from "next";
import { type Category } from "../../../types";

type CategoriesPageProps = {
  categories: Category[];
};

const CategoriesPage: NextPage<CategoriesPageProps> = ({ categories }) => {
  return (
    <Layout title="Let's play!">
      <div className="flex flex-wrap gap-12">
        {categories.map((category) => (
          <Card
            href={`/categories/${category.slug.current}`}
            key={category._id}
          >
            {category.title}
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default CategoriesPage;

const query = `*[_type == 'category']`;

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async () => {
  const categories = await sanityClient.fetch(query);

  return {
    props: {
      categories: categories as Category[],
    },
  };
};
