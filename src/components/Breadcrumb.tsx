export default function Breadcrumb() {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center min-h-[300px]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/15916204/pexels-photo-15916204.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      {/* Breadcrumb nav - centered content */}
      <nav className="relative z-10 text-center" aria-label="Breadcrumb">
        <ol
          className="flex items-center justify-center space-x-2 text-sm text-white"
          aria-label="Breadcrumb trail"
        >
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li className="text-gray-200" aria-hidden="true">
            /
          </li>
          <li>
            <a href="#" className="hover:underline">
              Category
            </a>
          </li>
          <li className="text-gray-200" aria-hidden="true">
            /
          </li>
          <li aria-current="page" className="text-white/90">
            Current Page
          </li>
        </ol>
      </nav>
    </div>
  );
}
