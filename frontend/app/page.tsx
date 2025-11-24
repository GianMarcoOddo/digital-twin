import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Gian Marco Oddo
          </h1>

          {/* Social Links Section */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/gian-marco-oddo-8a6b4b207/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0077b5] transition-colors font-medium hover:underline"
            >
              LinkedIn
            </a>
            
            {/* Visual Separator */}
            <span className="text-gray-300">|</span>
            
            <a 
              href="https://github.com/GianMarcoOddo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors font-medium hover:underline"
            >
              GitHub
            </a>
          </div>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Powered by AWS</p>
          </footer>
        </div>
      </div>
    </main>
  );
}