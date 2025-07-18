import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';
import umair from '../../assets/umair.jpg'
import junaid from '../../assets/junaid.jpg'
import safwan from '../../assets/safwan.jpg'

const TestimonialsSection = () => {

  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left  border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">
              Read more
            </a>
          </div>
        ))}
      </div>
            <div className='pt-14 px-8' >
        <h1 className='text-3xl font-medium text-gray-800' >Creators</h1>
        <p className="md:text-base text-gray-500 mt-3">
        Meet the Creators of the Brainiacs LMS System. Master Minds behind this Miracle
        </p>

        <div className='flex flex-row gap-12 justify-center items-center pt-14' >
          <div>
            <img className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' src={umair} alt="umair" />
            <p class="text-gray-700 max-w-xs">Muhammad Umair — Registration number: <br /> 22-NTU-CS-1211</p>
          </div>
                  <div>
            <img className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' src={junaid} alt="umair" />
            <p class="text-gray-700 max-w-xs">Muhammad Junaid — Registration number: <br /> 22-NTU-CS-1200</p>
          </div>
                  <div>
            <img className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' src={safwan} alt="umair" />
            <p class="text-gray-700 max-w-xs">Muhammad Safwan — Registration number: <br /> 22-NTU-CS-1207</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
