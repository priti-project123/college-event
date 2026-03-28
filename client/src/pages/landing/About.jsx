import Navbar from './Navbar';
import Footer from '../../compnents/layout/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">About Our College Event System</h1>
        <p className="text-gray-700 leading-relaxed">
          This system is designed to help students and faculty manage and participate in events. You can explore cultural fests,
          tech expos, sports meets, and more—all in one place.
        </p>
      </div>
      <Footer />
    </>
  );
}
