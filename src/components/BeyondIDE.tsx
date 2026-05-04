'use client';

export default function BeyondIDE() {
  const experiences = [
    {
      title: "Robotics",
      description: "Building autonomous systems and robotic solutions. From kinematics to sensor fusion, creating machines that interact with the physical world.",
      tags: ["ROS", "Arduino", "Computer Vision"]
    },
    {
      title: "IoT Projects",
      description: "Connected devices and smart systems. Designing end-to-end IoT solutions from hardware sensors to cloud dashboards.",
      tags: ["MQTT", "ESP32", "Home Automation"]
    },
    {
      title: "Embedded Systems",
      description: "Low-level programming for microcontrollers. Optimizing firmware for real-time performance and resource-constrained environments.",
      tags: ["C/C++", "STM32", "Real-time OS"]
    }
  ];

  const photos = [
    "/beyond/4bf003d4-21a3-4968-aa32-5205df2a3636.jpg",
    "/beyond/5df9474b-b913-4678-b3e5-28fd4d14d6e0.jpg",
    "/beyond/IMG_8499.HEIC",
    "/beyond/IMG_8502.HEIC",
    "/beyond/IMG_8515.HEIC",
    "/beyond/IMG_8592.HEIC",
    "/beyond/IMG_8621.HEIC",
    "/beyond/IMG_8660.HEIC",
    "/beyond/IMG_8791.HEIC",
    "/beyond/IMG_8794.HEIC",
    "/beyond/IMG_8808.HEIC",
    "/beyond/IMG_8822.HEIC",
    "/beyond/IMG_8901.HEIC",
    "/beyond/IMG_8904.HEIC",
    "/beyond/IMG_8909.HEIC",
    "/beyond/IMG_9028.HEIC",
    "/beyond/IMG_8936.HEIC",
    "/beyond/IMG_9099.HEIC",
    "/beyond/IMG_9140.HEIC",
    "/beyond/IMG_9196.HEIC",
    "/beyond/IMG_8499.HEIC"
  ];

  const lastPhoto = null;

  return (
    <section id="beyond-ide" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 text-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-400/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Beyond the IDE</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From code to circuits — my journey in robotics, IoT, and embedded systems.
          </p>
        </div>

        {/* Text Descriptions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/30
                shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
                backdrop-saturate-150 backdrop-filter backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {exp.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-800 border-orange-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured UNESCO Image */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-[1.02]">
              <img
                src="/beyond/465b4186-92e8-4bd4-9796-a4ca8c0f7a68.jpg"
                alt="UNESCO Sustainable Development Goals"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error('Failed to load UNESCO image:', e);
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('UNESCO image loaded successfully');
                }}
              />
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Photo Gallery</h3>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid relative overflow-hidden rounded-xl bg-gray-100
                shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.2)]
                transition-all duration-300 transform hover:scale-[1.02]"
            >
              <img
                src={photo}
                alt={`Activity photo ${index + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error(`Failed to load image: ${photo}`, e);
                  target.style.display = 'none';
                }}
                onLoad={(e) => {
                  if (photo.includes('cert')) {
                    console.log(`Certificate image loaded successfully: ${photo}`);
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Featured Certificate */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Certification</h3>
          <div className="max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-[1.02]">
              <img
                src="/beyond/cert.jpg"
                alt="Professional Certification"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error('Failed to load certificate image:', e);
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Certificate image loaded successfully');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
