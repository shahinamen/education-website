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
      title: "Slide 1",
    },
    {
      image:
        "https://images.pexels.com/photos/8466702/pexels-photo-8466702.jpeg",
      title: "Slide 2",
    },
    {
      image:
        "https://images.pexels.com/photos/8465506/pexels-photo-8465506.jpeg",
      title: "Slide 3",
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
              min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[500px]
            "
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
