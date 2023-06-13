import AboutSection from "@/app/components/Home/AboutSection/AboutSection.component";
import FactorySection from "@/app/components/Home/FactorySection/FactorySection.component";
import HeroSection from "@/app/components/Home/HeroSection/HeroSection.component";
import SignupSection from "@/app/components/Home/SignupSection/SignupSection.component";
import WhatRCASection from "@/app/components/Home/WhatRCASection/WhatRCASection.component";
import WhyUsSection from "@/app/components/Home/WhyUsSection/WhyUsSection.component";
import useTranslation from "@/app/hooks/useTranslation";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home() {
  const { t, locale, setLocale } = useTranslation();
  const navigate = useRouter();

  const Container = styled.section``;

  return (
    <>
      <HeroSection />
      <FactorySection />
      <WhyUsSection />
      <WhatRCASection />
      <AboutSection />
      <SignupSection />
    </>
  );
}
