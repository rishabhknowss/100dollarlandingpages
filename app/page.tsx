import { MacbookScrollDemo } from "@/components/macbook";
import Plans from "@/components/plans";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="container mx-auto py-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-center">
          <div className="lg:col-span-10">
            <div className="bg-slate-100 rounded-full p-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 sm:px-8 lg:px-16">
              <div className="text-base sm:text-lg font-medium cursor-pointer hover:text-primary transition-colors">Home</div>
              <div className="text-base sm:text-lg font-medium cursor-pointer hover:text-primary transition-colors">Get Your MVP</div>
              <div className="text-base sm:text-lg font-medium cursor-pointer hover:text-primary transition-colors">Build Landing Pages</div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-slate-100 rounded-full p-4 text-center cursor-pointer hover:bg-slate-200 transition-colors text-base sm:text-lg font-medium">
              Book a Call
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 sm:pt-16 pb-8 sm:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <div className="mb-2">We Build MVPs That Don&apos;t</div>
          <div>Break Your Bank</div>
        </h1>
      </section>

      {/* Macbook Demo Section */}
      <section className="w-full mb-8 sm:mb-24">
        <div className="px-2 sm:px-4">
          <MacbookScrollDemo />
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4 py-12 sm:py-24 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">Plans</h2>
        <Plans />
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <FAQ />
      </section>
    </div>
  );
}