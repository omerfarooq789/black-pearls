import { FC } from "react";
import { PageHeading } from "../components";
import { useParams } from "react-router-dom";

export const ServicesDetails: FC = () => {
  const { type } = useParams();
  return (
    <>
      <PageHeading
        title={`common.servicesList.${type}.title`}
        description={`common.servicesList.${type}.description`}
      />
    </>
  );
};
