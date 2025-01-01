"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface product {
  title: string;
  price: number;
  image: any
}

const productFetch = "*[_type == 'Product']{title,price,image}";

async function page() {
  const response: product[] = await client.fetch(productFetch);
  // console.log(response);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Products Section */}
      <div className="w-full flex justify-center mt-8 px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {response.map((product) => (
            <div


            
              key={product.title} // Add a unique key here
              className="group relative w-[300px] h-[400px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                {/* Quick add button */}
                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  hover:bg-black hover:text-white font-medium text-sm"
                >
                  Quick Add
                </button>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-900 font-bold mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  {/* Favorite button */}
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 
                    hover:bg-gray-200 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter and Instagram Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-[1321px] mx-auto px-4 md:px-8 lg:px-16">
          {/* Subscribe Section */}
          <section className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Or Subscribe To The Newsletter
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full md:w-[400px] px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </section>

          {/* Instagram Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Placeholder Boxes */}
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={"News1.src"}
                  alt=""
                />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={"News2.src"}
                  alt=""
                />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={"News3.src"}
                  alt=""
                />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={"Feature1.src"}
                  alt=""
                />
              </div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={"Feature3.src"}
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
