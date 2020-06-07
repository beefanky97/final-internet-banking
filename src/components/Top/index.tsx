import React from "react";
import HeroSection from 'src/components/commons/HeroSection';
import ServiceSection from "src/components/commons/ServiceSection";

interface Props {}

const Top: React.FC<Props> = ({}) => {
  return (
  <div>
    <HeroSection />
    <ServiceSection />
  </div>
  );
};

export default Top;
