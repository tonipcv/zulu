import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <header className="bg-black border-b border-white/20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Zuzu</h1>
          <nav>
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zuzu: Your Best Friend for Healthy Habits
          </h1>
          
          <div className="mb-10 flex justify-center">
            <div className="border-2 border-white rounded-full p-1 w-32 h-32 flex items-center justify-center">
              <div className="bg-black rounded-full w-28 h-28 flex items-center justify-center border border-white/20">
                <span className="text-4xl font-bold text-white">Z</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-8 text-gray-200">
            Zuzu is your best friend to track your habits and reach your goals.
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-white/10">
              <h2 className="font-semibold text-xl mb-2">Create an account</h2>
              <p className="text-gray-300">Build healthy habits, and follow your progress inside the app.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-white/10">
              <h2 className="font-semibold text-xl mb-2">Simple & Professional Interface</h2>
              <p className="text-gray-300">Zuzu helps you stay consistent every day.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-white/10">
              <h2 className="font-semibold text-xl mb-2">Start Today</h2>
              <p className="text-gray-300">Build better habits with Zuzu.</p>
            </div>
          </div>
          
        </div>
      </main>
      
      <footer className="bg-gray-900 border-t border-white/10 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zuzu App. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
