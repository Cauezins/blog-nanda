import React from "react";
import Slider from "react-slick";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    title: "The Beauty of Nature",
    description:
      "It is not so much for its beauty that the forest makes a claim upon men’s hearts...",
  },
  {
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    title: "Serenity of the Forest",
    description:
      "The calmness and serenity of the forest helps renew a weary spirit.",
  },
  {
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    title: "Wilderness Adventures",
    description:
      "Adventures into the wilderness are filled with excitement and beauty.",
  },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div>
        <ul style={{ marginBottom: "40px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full h-[600px] overflow-hidden mx-auto">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg mb-8">{item.description}</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 px-6 py-2 rounded-lg">Explore</button>
                <button className="bg-white text-black px-6 py-2 rounded-lg">Gallery</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
