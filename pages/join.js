import Layout from "../components/Layout";
import { Title, PageContainer } from "../components/pageUtils";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <Layout>
        <PageContainer>
          <Title className="text-left md:w-3/4 mb-10">Join Now!</Title>

          <Content className="w-3/4 mb-10">
            You must be 18+ to sign up online. If you are under the age of 18,
            please contact us at{" "}
            <a href="mailto:elitefitnesslp@gmail.com">
              elitefitnesslp@gmail.com
            </a>{" "}
            for information on joining.
          </Content>

          <div className="flex justify-center">
            <Link href="https://elitefitness.gymmasteronline.com/portal/signup?session=eyJsYW5ndWFnZSI6ImVuIn0.X95cYQ.EmSwnD0HhbsqtAkem9cyT_UzR-o">
              <button
                type="submit"
                className="cursor-pointer flex justify-center items-center text-xl font-light mt-8 border border-transparent hover:border-gray-800  text-gray-800 px-4 py-2 transition duration-300 ease-in-out focus:outline-none"
              >
                Join Now
              </button>
            </Link>
          </div>
        </PageContainer>
      </Layout>
    </>
  );
}

const Content = ({ children, className }) => (
  <p className={`text-base text-gray-500 ${className}`}>{children}</p>
);
