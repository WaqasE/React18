const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4">
      <p>
        &copy; {new Date().getFullYear()} Waqas. All rights reserved.
      </p>
      <p>
        Unauthorized duplication, in whole or in part, is strictly prohibited.
      </p>
    </footer>
  );
};

export default Footer;
