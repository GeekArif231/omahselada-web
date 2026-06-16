import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="section-container">
        <h2 className="title text-center">Galeri Kebun</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <Image
            src="/Kebun_1.jpg"
            alt="gallery"
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />

          <Image
            src="/Kebun_2.jpg"
            alt="gallery"
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
