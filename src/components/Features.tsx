export default function Features() {
  const features = [
    {
      title: "Web Development",
      description: "Modern, fast, and secure web applications using the latest technology.",
      icon: "🌐",
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform apps for iOS and Android.",
      icon: "📱",
      gradient: "from-green-500/10 to-emerald-600/10"
    },
    {
      title: "Branding",
      description: "Unique brand identity that stands out and is memorable.",
      icon: "🎨",
      gradient: "from-purple-500/10 to-pink-600/10"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions for your digital presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/30 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.25)] 
                transition-all duration-300 transform hover:-translate-y-1 ${feature.gradient}
                backdrop-saturate-150 backdrop-filter backdrop-blur-xl`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
