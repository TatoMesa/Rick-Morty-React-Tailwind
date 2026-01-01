function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-6
                      flex flex-col sm:flex-row
                      items-center justify-between gap-4">

        {/* Izquierda */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Sebastián Pedro Mesa
        </p>

        {/* Centro */}
        <p className="text-sm text-center">
          Rick and Morty Explorer · React + Tailwind
        </p>

        {/* Derecha */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/TatoMesa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sebastianmesa23061981/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
