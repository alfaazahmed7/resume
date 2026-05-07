import AboutPage from "@/components/AboutPage/AboutPage";
import Banner from "@/components/Banner/Banner";
import Connect from "@/components/Connect/Connect";
import ProjectCard from "@/components/Project/ProjectCard";
import TechStack from "@/components/TechStack/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutPage />
      <TechStack />
      <ProjectCard />
      <Connect />
    </div>
  );
}
