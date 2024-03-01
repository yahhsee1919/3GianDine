function Footer() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-footer-mobile bg-cover py-24 px-10 text-white font-spartan space-y-12 lg:flex-row lg:justify-around">
        {/* upper container */}
        <h1 className="text-center text-3xl font-bold mt-12 tracking-wider md:text-6xl lg:text-4xl">
          Ready to make a reservation?
        </h1>
        <button className="bg-transparent text-white font-bold px-16 py-4 trackin-widest border border-white uppercase hover:bg-white hover:text-black  duration-500">
          book a table
        </button>
      </section>
      <div className="flex flex-col items-center justify-center space-y-12 py-24 bg-black text-white px-10 lg:space-y-0 lg:flex-row lg:justify-around">
        <h1 className="text-5xl font-semibold  ">dine</h1>
        <div className="flex flex-col text-sm items-center space-y-4 tracking-wider uppercase text-white lg:items-start">
          <p>marthwaite, sedbergh</p>
          <p>cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="flex flex-col text-sm items-center space-y-4 tracking-wider uppercase text-white lg:items-start">
          <p>open times</p>
          <p>mon - fri: 09:00 AM - 10:00 PM</p>
          <p>sat - sun: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
