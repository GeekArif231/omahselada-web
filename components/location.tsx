export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="section-container">
        <h2
          className="
          title
          text-center
        "
        >
          Lokasi OmahSelada
        </h2>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          mt-14
          items-center
        "
        >
          {/* INFORMASI */}

          <div
            className="
            bg-green-50
            rounded-[30px]
            p-8
            shadow-lg
            "
          >
            <h3
              className="
              text-3xl
              font-bold
              text-green-700
            "
            >
              🌱 OmahSelada
            </h3>

            <p
              className="
              mt-5
              text-gray-600
              leading-relaxed
            "
            >
              Kebun hidroponik lokal yang menyediakan selada segar berkualitas
              langsung dari kebun.
            </p>

            <div className="mt-6 space-y-3">
              <p>📍 Jl. Anggur 5 No.2, Krajan, Patrang, 
                Kec. Patrang, Kabupaten Jember, Jawa Timur 68111</p>

              <p>🕒 Setiap hari 08.00 - 17.00</p>

              <p>📱 WhatsApp: 085895341572</p>
            </div>

            <a
              href="https://maps.app.goo.gl/az5ntSHpk5Mirk94A"
              target="_blank"
              className="
                inline-block
                mt-8
                bg-green-600
                text-white
                px-6
                py-3
                rounded-full
                hover:bg-green-700
                transition
              "
            >
              Buka Google Maps
            </a>
          </div>

          {/* MAP */}

          {/* MAP */}

          <div
            className="
                        rounded-[30px]
                        overflow-hidden
                        shadow-xl
                        h-[400px]
                    "
          >
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.3942955458308!2d113.71967396956009!3d-8.144710599492841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695abeb0cec3f%3A0xb299ce245b525404!2sJl.%20Anggur%205%202%2C%20Krajan%2C%20Patrang%2C%20Kec.%20Patrang%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068111!5e1!3m2!1sid!2sid!4v1781893097965!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.34857750076986!2d113.72022461507483!3d-8.144704628922911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1781893288314!5m2!1sid!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.3943839274469!2d113.71958692845388!3d-8.144674099490725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6950073a3c061%3A0x6e6b031a804805a9!2sOmashSelada!5e1!3m2!1sid!2sid!4v1781894167623!5m2!1sid!2sid"
              width="100%"
height="100%"
loading="lazy"
allowFullScreen
referrerPolicy="no-referrer-when-downgrade"

            />
          </div>
        </div>
      </div>
    </section>
  );
}
