import { FC } from "react";

export const Map: FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59380.43429110241!2d39.191396!3d21.536016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ec59c05fd38539%3A0xe7e8e73380a1fad8!2sBlack%20Pearls%20Contracting%20Est.%20-%20Your%20Trusted%20MEP%20Contractor!5e0!3m2!1sen!2sus!4v1735068153712!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0, width: "100%", height: "400px" }}
      loading="lazy"
    />
  );
};
