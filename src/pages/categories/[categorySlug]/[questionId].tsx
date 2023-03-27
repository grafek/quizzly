import { sanityClient, getImgUrl } from "@/lib/sanityConfig";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import type { Question } from "../../../../types";
import Image from "next/image";

interface Params extends ParsedUrlQuery {
  questionId: string;
}

type QuestionPageProps = {
  question: Question;
};

const QuestionPage: NextPage<QuestionPageProps> = ({ question }) => {
  const hasImg = !!question.image;
  const hasAnswers = !!question.answers;
  const hasContent = !!question.content;

  return (
    <>
      {/* ONLY CONTENT W/OUT ANSWER FOR "Heads-up!" PUZZLE */}
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
          <ol className="ml-4 flex list-inside list-letters flex-col gap-4 text-xl sm:flex-row sm:flex-wrap ">
            {question?.answers?.map((answer, idx) => (
              <li
                key={`${question._id}-answer-${idx}`}
                className="my-1 min-w-[500px] flex-1 rounded-full border border-dark-700 bg-black py-2 px-4 marker:font-bold marker:text-goldenrod"
              >
                {answer}
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default QuestionPage;

const questionQuery = `*[_type == "question" && _id == $questionId][0]`;

const pathsQuery = `*[_type == "category" && defined(slug.current)]{
  slug{current},
  questions[]->{_id}
}`;

export const getStaticProps: GetStaticProps<QuestionPageProps> = async (
  context
) => {
  const { questionId = "" } = context.params as Params;

  const question = await sanityClient.fetch(questionQuery, { questionId });

  return {
    props: {
      question,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pathsQuery);

  return {
    paths: paths.flatMap(
      (category: {
        slug: { current: string };
        questions: { _id: string }[];
      }) => {
        const categorySlug = category.slug.current;
        const questionIds = category.questions.map((question) => question._id);

        return questionIds.map((questionId) => ({
          params: { categorySlug, questionId },
        }));
      }
    ),
    fallback: "blocking",
  };
};
