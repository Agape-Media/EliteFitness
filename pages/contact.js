import React from "react";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import { Title, PageContainer } from "../components/pageUtils";

export default function Contact() {
  const MapWithNoSSR = dynamic(() => import("../components/Contact/Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  });

  return (
    <Layout>
      <PageContainer className="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <div>
            <Title className="mb-2">Elite Fitness</Title>
            {pageData.elite.map((item, i) => (
              <Information
                key={i}
                link={item.link}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <div className="mt-8">
            <Title className="mb-2">Find us on social media!</Title>
            {pageData.social.map((item, i) => (
              <Information key={i} label={item.label} value={item.value} />
            ))}
          </div>
          <div className="my-16">
            {pageData.join.map((item, i) => (
              <Information
                key={i}
                link={item.link}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>

        <MapContainer>
          <MapWithNoSSR />
        </MapContainer>
      </PageContainer>
    </Layout>
  );
}
const MapContainer = ({ children }) => (
  <div id="map" className="lg:w-1/2 bg-gray-200 h-96">
    {children}
  </div>
);

const Information = ({ label, value, link }) => (
  <p className="font-bold text-base mb-2 text-gray-800">
    {label}:{" "}
    <a href={link} className="font-normal text-gray-800">
      {value}
    </a>
  </p>
);
const pageData = {
  elite: [
    {
      label: "location",
      value: "10416 Spencer Hwy, La Porte, Tx 77571",
    },
    {
      label: "phone",
      value: "832-348-6377",
      link: "tel:832-348-6377",
    },
    {
      label: "email",
      value: "elitefitnesslp@gmail.com",
      link: "mailto:elitefitnesslp@gmail.com",
    },
    {
      label: "hours",
      value: "Open 24/7",
    },
  ],
  social: [
    {
      label: "Facebook",
      value: "ELITE Fitness Gym | Facebook",
    },
    {
      label: "Instagram",
      value: "Elite Fitness (@elitefitnesslp) • Instagram photos and videos",
    },
  ],
  join: [
    {
      label: "Member Portal",
      value: "Gym Master Member Portal | Home (gymmasteronline.com)",
      link: "https://lift.clubautomation.com/",
    },
    {
      label: "Join Now",
      value:
        "Gym Master Member Portal | Choose a Membership (gymmasteronline.com)",
      link: "https://lift.clubautomation.com/",
    },
  ],
};
