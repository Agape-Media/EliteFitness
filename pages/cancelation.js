import Link from "next/link";
import Layout from "../components/Layout";
import { PageContainer } from "../components/pageUtils";
import Check from "../components/Icons/Check";
export default function Info() {
  return (
    <Layout>
      <PageContainer>
        <h2 className="text-4xl text-center mb-16">MEMBERSHIP CANCELLATION</h2>

        <p className="text-center mb-6 text-gray-600">
          Please provide the following information to submit your request for
          cancellation:
        </p>

        <ol className="list-decimal text-gray-600 space-y-1 mb-6 pl-12">
          <li>First and last name on account </li>
          <li>Date of birth</li>
          <li>Phone Number</li>
          <li>Reason for cancelling</li>
        </ol>

        <p className="text-red-700 underline font-bold text-lg mb-4">
          <a href="mailto:elitefitnesslp@gmail.com">
            Click here to submit cancellation request
          </a>
        </p>

        <p className="font-bold text-gray-600">
          Memberships will be cancelled 30 days after sending the cancellation
          notice. Members are still responsible for the upcoming payment, and
          you will have access to the gym for the remaining active month.
        </p>
      </PageContainer>
    </Layout>
  );
}
