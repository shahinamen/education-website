import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000 }),
  ]);

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/8466175/pexels-photo-8466175.jpeg",
      title: "Inspiring Bright Futures",
      subTitle:
        "Empowering students through quality education, creativity, and lifelong learning to build confident, capable, and compassionate leaders of tomorrow.",
    },
    {
      image:
        "https://images.pexels.com/photos/8466702/pexels-photo-8466702.jpeg",
      title: "Learn. Grow. Succeed.",
      subTitle:
        "We nurture young minds with academic excellence, moral values, and holistic development in a supportive and engaging environment.",
    },
    {
      image:
        "https://images.pexels.com/photos/8465506/pexels-photo-8465506.jpeg",
      title: "Where Dreams Take Flight",
      subTitle:
        "Encouraging curiosity, innovation, and leadership—our academy is where every student discovers their true potential and soars high.",
    },
  ];

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              embla__slide
              flex-[0_0_100%]
              relative
              min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]
            "
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                {slide.title}
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed drop-shadow">
                {slide.subTitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <button className="px-6 py-2 rounded-full cursor-pointer bg-orange-600 text-white sm:text-base md:text-lg shadow-md hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out">
                  Classes
                </button>
                <button className="px-6 py-2 rounded-full cursor-pointer bg-white text-orange-600 sm:text-base md:text-lg shadow-md border border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
