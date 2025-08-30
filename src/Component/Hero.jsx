import { Carousel } from 'flowbite-react';

export default function Hero() {
  return (
    <div className="relative h-[420px] w-full">
      <Carousel
        leftControl={
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black">
            &#10094; {/* Left arrow */}
          </button>
        }
        rightControl={
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black">
            &#10095; {/* Right arrow */}
          </button>
        }
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FP56cBaR5IDCpVBrivuGWdQ2f0BnOVce7g&s"
          alt="Slide 1"
          className=" w-full h-[420px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeXopcIxcpwdnxXug5HqxdXyHp0OrosTvHA&s"
          alt="Slide 2"
          className=" w-full h-[420px]"
        />
        <img
          src="https://en-media.thebetterindia.com/uploads/2015/09/woman.jpg"
          alt="Slide 3"
          className="w-full h-[420px]"
        />
      </Carousel>
    </div>
  );
}
