import Layout from "@/components/Layout";
import { sanityClient, getImgUrl } from "@/lib/sanityConfig";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { Category } from "../../../../types";
import Image from "next/image";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type QuestionPageProps = {
  category: Category;
};

const QuestionPage: NextPage<QuestionPageProps> = ({ category }) => {
  const router = useRouter();

  const { question: questionParam } = router.query;

  const questionNum = parseInt(questionParam as string);

  const question = category?.questions[questionNum - 1];
  const hasImg = !!question?.image;
  const hasAnswers = !!question?.answers;
  const hasContent = !!question?.content;

  return (
    <Layout
      title={`${category?.title} - ${questionNum}`}
      heading={`${category?.title} - ${questionNum}`}
    >
      <>
        {/* ONLY CONTENT W/OUT ANSWER FOR "Heads-up!" PUZZLE*/}
        {hasContent && !hasAnswers && !hasImg ? (
          <h2
            className={`text-center text-[3rem] md:text-[7rem] xl:text-[12rem]`}
          >
            {question?.content}
          </h2>
        ) : (
          <>
            <h2
              className={`"text-center text-[2rem] md:text-[3rem] xl:text-[4rem]`}
            >
              {question?.content}
            </h2>
            {hasImg && typeof question.image !== "undefined" ? (
              <div className="relative flex h-[60vh] w-full items-center justify-center">
                <Image
                  src={getImgUrl(question?.image).url()}
                  alt={`puzzle-photo`}
                  fill
                  className="py-4"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : null}
            <ol className="ml-4 list-letters text-xl">
              {question?.answers?.map((answer, idx) => (
                <li
                  className="my-1 marker:font-bold marker:text-goldenrod"
                  key={`${question._id}-answer-${idx}`}
                >
                  {answer}
                </li>
              ))}
            </ol>
          </>
        )}
      </>
    </Layout>
  );
};

export default QuestionPage;

const query = `*[_type == "category" && slug.current == $categorySlug][0]{
  ...,
  questions[] ->
}`;

const pathsQuery = `*[_type == "question" && defined(slug.current)][].slug.current`;

export const getStaticProps: GetStaticProps = async (context) => {
  const { categorySlug = "" } = context.params as Params;

  const category: Category = await sanityClient.fetch(query, { categorySlug });

  return {
    props: {
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pathsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
