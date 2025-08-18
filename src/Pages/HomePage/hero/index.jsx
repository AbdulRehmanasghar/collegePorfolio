import FormInput from "../../../Components/FormInput";
import TechIcon from "../../../Components/TechIcon";
import Button from "../../../Components/Button";
import programs_images from "../../../assets/Images/programs/index";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h3 className="text-center text-accent">Testing Data</h3>
          <img
            src={programs_images.program_1}
            alt="error-image"
            className="h-99 w-99 object-cover"
          />
          <FormInput type="search" placeholder="search" />
          <TechIcon name="database" className="w-10 h-10" />
          <Button variant="primary" size="lg" className="rounded-md">
            Click here
          </Button>
        </div>
      </div>
    </section>
  );
}
