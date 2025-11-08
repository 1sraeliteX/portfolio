import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-16 sm:px-6 lg:pt-24 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">About Me</span>
                  <span className="block text-blue-600">Full Stack Developer</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Experienced developer with a passion for creating amazing web and mobile experiences
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/ME2.png"
                alt="Professional headshot"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 18rem, 24rem"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Professional Experience</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">4+ years of web and mobile development</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Expertise</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Frontend Development (React, Next.js, TypeScript)</li>
                    <li>Mobile App Development (React Native)</li>
                    <li>UI/UX Design & Implementation</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                      <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Approach</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p className="mb-3">With over 4 years of experience in web and mobile development, I specialize in building modern, responsive, and user-friendly applications. My approach combines clean code, modern design principles, and a focus on performance and accessibility.</p>
                  <p>I believe in continuous learning and staying up-to-date with the latest industry trends and technologies to deliver the best solutions for my clients.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:no-underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
