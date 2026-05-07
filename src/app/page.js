import AboutPage from "@/components/AboutPage/AboutPage";
import Banner from "@/components/Banner/Banner";
import ProjectCard from "@/components/Project/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutPage />
      <ProjectCard />
    </div>
  );
}
