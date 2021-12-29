import Layout from "../components/Layout";
import { Title, SubTitle, PageContainer } from "../components/pageUtils";

export default function About() {
  return (
    <>
      <Layout>
        <PageContainer>
          <Title className="text-left md:w-3/4 mb-10">
            Thank you for considering Elite Fitness for your ultimate workout
            experience!
          </Title>

          <Content className="w-3/4 mb-10">
            Elite Fitness started out as a 3,500 square foot gym. As our
            business grew, we expanded and added the warehouse section and later
            the cross-training area, making your workout space 7,000 square
            feet.
          </Content>

          <Content>
            <img
              className="sm:mx-6 sm:float-right sm:w-1/2"
              src="/gymFront.jpg"
            />
            We are excited to announce that God has opened the door for us to
            move into a much larger facility!
          </Content>

          <Content>
            In 2022, we will be moving from our current location to 9701 Spencer
            Hwy, La Porte, TX, the previous home to FoodTown.
          </Content>

          <Content>
            Our concept will remain the same but on a much larger scale! You
            will have 24/7 access to a 50,000 square ft facility, with 40,000 sq
            ft indoor and 10,000 sq ft outdoor.
          </Content>

          <Content>
            We will be offering the following amenities at the new location:
          </Content>

          <ul class="list-inside bg-rose-200 list-disc ">
            {amenities.map((amenity, i) => (
              <li className="" key={i}>
                <Content className="inline-flex mb-2">{amenity}</Content>
              </li>
            ))}
          </ul>

          <SubTitle className="mt-10">
            We are excited for YOU to be a part of the next chapter of Elite
            Fitness!
          </SubTitle>
        </PageContainer>
      </Layout>
    </>
  );
}

const Content = ({ children, className }) => (
  <p className={`text-base text-gray-500 ${className}`}>{children}</p>
);

const amenities = [
  "Commercial-Style Training Area",
  "Warehouse-Style Training Area",
  "Cross-Training Area",
  "Outdoor Training Area",
  "Large Luxury Locker Rooms",
  "Showers",
  "Sauna",
  "Group Classes",
  "Small Group Training",
  "1 on 1 Personal Training",
  "Recovery Spa",
  "Fitness Competitions and Events",
  "Supplements and Apparel Shop",
];
