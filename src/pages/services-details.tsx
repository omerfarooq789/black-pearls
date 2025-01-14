import { FC } from "react";
import {
  AboutServices,
  PageHeading,
  ServicesAdditionalFeatures,
} from "../components";
import { useParams } from "react-router-dom";
import AnimatedSection from "../components/animation";

const ServicesDetails: FC = () => {
  const { type } = useParams();
  return (
    <>
      <AnimatedSection key={type} animationClass="animate-fadeIn">
        <PageHeading
          title={`common.servicesList.${type}.aboutTitle`}
          description={`common.servicesList.${type}.description`}
        />
      </AnimatedSection>
      <AboutServices />
      <AnimatedSection
        key={`additional-features-${type}`}
        animationClass="animate-fadeIn"
      >
        <ServicesAdditionalFeatures />
      </AnimatedSection>
    </>
  );
};

export default ServicesDetails;
