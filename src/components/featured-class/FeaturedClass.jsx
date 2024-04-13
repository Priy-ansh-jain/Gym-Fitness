import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";
import Classes from "./Classes";

function FeaturedClass() {
  return (
    <section className="overflow-x-clip  py-32 text-center bg-contain bg-[url('./images/who-we-are/background.jpg')] px-6 pb-32">
      <div className="container">
        <SecondaryHeading>Our featured class</SecondaryHeading>

        <TertiaryHeading>We are offering best flexible classes</TertiaryHeading>

        <Classes />
      </div>
    </section>
  );
}

export default FeaturedClass;
