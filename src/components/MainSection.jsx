import ReactPlayer from "react-player";

const MainSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-tertiary text-neutral">
      <section className=" py-16 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center container mx-auto ">
        <div className="max-w-md space-y-6 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold">
            97% Uptime? <br /> No Problem.
          </h2>
          <p className="text-lg lg:text-xl">
            Reliability as a Service: Hassle-free support for EV Charging
            Stations
          </p>
          <p className="text-neutral text-base lg:text-lg">
            Reliability as a Service (RaaS) is a labor subscription service that
            provides peace of mind to charging station owners and operators, who
            require fast and reliable O&M services at consistent, hassle-free
            prices.
          </p>
          <button className="bg-primary text-neutral py-3 px-6 rounded-lg shadow-md hover:bg-secondary transition hover:text-primary">
            Get reliable support today
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <ReactPlayer
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className="react-player w-full h-64 rounded-lg shadow-lg"
            controls={true}
            playing
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
};

export default MainSection;
