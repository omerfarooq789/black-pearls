import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Theme, useMediaQuery } from "@mui/material";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationClass: string;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  animationClass,
}) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isSmallScreen ? 0.2 : 0.3,
  });

  return (
    <Box
      ref={ref}
      className={`${inView ? `opacity-100 ${animationClass}` : "opacity-0"} transition-transform`}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;
