export default function CTA() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for your next project?</h2>
        <p className="text-xl text-gray-800 mb-8">
          Contact us today for a free consultation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors no-underline hover:no-underline focus:no-underline"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
