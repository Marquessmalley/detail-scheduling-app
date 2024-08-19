import carDetailingVideo from "assets/videos/shine-promo.MOV";

const Video = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto grid grid-cols-1 px-4">
        {/* LEFT COL */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-black">
            Watch Our Introduction Video
          </h2>
          <p className="mt-4 text-lg text-black">
            Learn more about our services and how we can help you.
          </p>
        </div>

        {/* VIDEO */}
        <div className="flex justify-center">
          <video className="w-5/12 rounded-lg sm:h-full" controls autoPlay>
            <source src={carDetailingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
