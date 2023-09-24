import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from 'react';

const Review = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  return (
    <div className="container w-5/6 mx-auto text-center py-10">
      <div ref={sliderRef} className="keen-slider  ">
        <div className="keen-slider__slide number-slide1">
          {/* <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>

                </div>
              </div>

            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
              <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
            </div>
          </div> */}
          <div className="bg-stone-100 rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">
              "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
              tristique neque et, ultricies justo."
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">

          <div className="bg-stone-100 rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">
              "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
              tristique neque et, ultricies justo."
            </p>
          </div>

        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="bg-stone-100 rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">
              "Ut posuere mi vitae ante lacinia aliquam. Duis suscipit nunc euismod,
              tristique neque et, ultricies justo."
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </div>
  );
};

export default Review;