import {
  Hero,
  CarouselCard,
  Basics,
  Download,
  CarouselCompanies,
} from "@components/Met2ashara/Home/index";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <CarouselCard />
      <CarouselCompanies />
      <Basics />
      <Download />
    </>
  );
};

export default HomeLayout;
