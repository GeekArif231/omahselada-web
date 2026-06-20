export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container text-center">
        <h2 className="title">
          Hubungi Kami
        </h2>

        <p className="subtitle text-lg">
          Siap melayani kebutuhan sayur segar Anda.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href="https://wa.me/6285895341572"
            className="bg-green-600 text-white px-8 py-4 rounded-full inline-block mx-auto"
          >
            WhatsApp
          </a>

          {/* <p>
            Email: omahselada@gmail.com
          </p> */}

          <p>
            Jember, Jawa Timur
          </p>
        </div>
      </div>
    </section>
  )
}
