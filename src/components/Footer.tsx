

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Support</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fair Avenue Ventures All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
