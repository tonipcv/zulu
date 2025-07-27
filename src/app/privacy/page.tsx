import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <header className="bg-black border-b border-white/20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-300">
              Zuzu
            </Link>
          </h1>
          <nav>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-4 text-gray-300">Last updated: July 27, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Introduction</h2>
              <p>
                Welcome to Zuzu. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you how we look after your personal data when you use our mobile application 
                (Zuzu) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-5 mt-3 mb-3">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address.</li>
                <li><strong>Usage Data</strong> includes information about how you use our application.</li>
                <li><strong>Habit Data</strong> includes information about habits you track and your progress.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 mt-3 mb-3">
                <li>To register you as a new user.</li>
                <li>To provide and manage your account.</li>
                <li>To provide the habit tracking functionality of the app.</li>
                <li>To improve our app and user experience.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
                data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data including:</p>
              <ul className="list-disc pl-5 mt-3 mb-3">
                <li>The right to request access to your personal data.</li>
                <li>The right to request correction of your personal data.</li>
                <li>The right to request erasure of your personal data.</li>
                <li>The right to object to processing of your personal data.</li>
                <li>The right to request restriction of processing your personal data.</li>
                <li>The right to request transfer of your personal data.</li>
                <li>The right to withdraw consent.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <br />
                <a href="mailto:privacy@zuzu-app.com" className="text-teal-600 hover:underline">privacy@zuzu-app.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 border-t border-white/10 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zuzu App. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/" className="hover:text-white mr-4">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
