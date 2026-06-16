import Image from 'next/image'
import { products } from '@/data/products'

export default function Products() {

  const productCount = products.length

  return (
    <section 
      id="products" 
      className="py-24 bg-gray-50"
    >

      <div className="section-container">

        <h2 className="title text-center">
          Produk Kami
        </h2>


        <div
          className={`
            grid
            gap-8
            mt-14
            ${
              productCount === 1
              ? "place-items-center"
              : "lg:grid-cols-2"
            }
          `}
        >

          {products.map((item, index) => (

            <div
              key={index}
              className={`
                bg-white
                rounded-[30px]
                overflow-hidden
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-500

                ${
                  productCount === 1
                  ? "max-w-xl w-full"
                  : "w-full"
                }
              `}
            >


              {/* IMAGE */}

              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="
                  w-full
                  h-[300px]
                  object-cover
                "
              />


              {/* CONTENT */}

              <div className="p-6">


                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>


                <p className="
                  text-gray-600 
                  mt-3
                  leading-relaxed
                ">
                  {item.desc}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  )
}