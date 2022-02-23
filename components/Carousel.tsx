import React, { useEffect, useState } from 'react';

const Caraousel = () => {
  const [selectedImage, setSelectedimage] = useState(0);

  const image = [
    {
      src: 'assets/carousel/banner1.jpeg',
    },
    {
      src: 'assets/carousel/banner2.png',
    },
    {
      src: 'assets/carousel/banner3.jpeg',
    },
  ];

  const handleClick = (index: number) => {
    if (index === image.length) {
      setSelectedimage(0);
    } else if (index === -1) {
      setSelectedimage(image.length - 1);
    } else {
      setSelectedimage(index);
    }
  };

  setTimeout(() => {
    if (selectedImage === image.length) {
      handleClick(0);
    } else {
      handleClick(selectedImage + 1);
    }
  }, 5000);

  return (
    <div className="flex flex-row items-center relative">
      <p
        className="bg-white p-2 absolute left-0 opacity-50 hover:opacity-75"
        onClick={() => handleClick(selectedImage - 1)}
      >
        Prev
      </p>
      <img src={image[selectedImage].src} />
      <div className="absolute bottom-2 flex flex-row left-1/2">
        {image.map((item, index) => (
          <div
            className={`${
              selectedImage === index ? 'bg-orange-600' : 'bg-white'
            } w-3 h-3 rounded-full m-1`}
            key={index}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      <p
        className="bg-white p-2 absolute right-0 opacity-50 hover:opacity-75"
        onClick={() => handleClick(selectedImage + 1)}
      >
        Next
      </p>
    </div>
  );
};

export default Caraousel;
