import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals,quality comfort, and innovation for
          your active life. Discover stylish Nike arrivals,quality comfort, and
          innovation for your active life
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            border-color="border-slate-gray"
            text-color="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
