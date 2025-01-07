import { FC } from "react";
import {
  AboutServices,
  PageHeading,
  ServicesAdditionalFeatures,
} from "../components";
import { useParams } from "react-router-dom";

export const ServicesDetails: FC = () => {
  const { type } = useParams();
  return (
    <>
      <PageHeading
        title={`common.servicesList.${type}.aboutTitle`}
        description={`common.servicesList.${type}.description`}
      />
      <AboutServices />
      <ServicesAdditionalFeatures />
    </>
  );
};
