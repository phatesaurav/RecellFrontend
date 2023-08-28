import { smartphones } from "../../../Data/smartphones";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={smartphones} sectionName={"Apple Smartphone"} />
        <HomeSectionCarousel data={smartphones} sectionName={"Samsung Smartphone"} />
        <HomeSectionCarousel data={smartphones} sectionName={"OnePlus Smartphone"}/>
        <HomeSectionCarousel data={smartphones} sectionName={"Realme Smartphone"}/>
        <HomeSectionCarousel data={smartphones} sectionName={"Mi Smartphone"}/>
        <HomeSectionCarousel data={smartphones} sectionName={"Honor Smartphone"}/>
        <HomeSectionCarousel data={smartphones} sectionName={"Oppo Smartphone"}/>
        <HomeSectionCarousel data={smartphones} sectionName={"Poco Smartphone"}/>
      </div>
    </div>
  );
};

export default HomePage;
