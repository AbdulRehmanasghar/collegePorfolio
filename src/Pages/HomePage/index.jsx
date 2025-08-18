import BreadCrumb from "../../Components/BreadCrumb";
import Hero from "./hero";

export default function HomePage() {
  return (
    <>
      <BreadCrumb
        pageName="Programs"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rem ipsam modi aliquam"
        detailPage="Programs-Details"
        url="/"
      />
      <main>
        <Hero />
      </main>
    </>
  );
}
