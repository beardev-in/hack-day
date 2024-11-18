export default function Component() {
  const cities = [
    {
      name: "Mexico",
      date: "April 13-14, 2024",
      image: "/placeholder.svg",
    },
    {
      name: "Bangalore",
      date: "May 11-12, 2024",
      image: "/placeholder.svg",
    },
    {
      name: "Singapore",
      date: "May 25-26, 2024",
      image: "/placeholder.svg",
    },
    {
      name: "Warsaw",
      date: "June 15-16, 2024",
      image: "/placeholder.svg",
    },
    {
      name: "HCMC",
      date: "July 6-7, 2024",
      image: "/placeholder.svg",
    },
    {
      name: "Jakarta",
      date: "July 27-28, 2024",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="2024-cities" className="w-full bg-black py-16 md:py-24  z-10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-16">
          2024 CITIES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div key={city.name} className="relative group">
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg transform -skew-x-2">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Main Card Content */}
              <div className="relative bg-[#1a1a1a] p-8 rounded-lg border border-white/10 h-full transform -skew-x-2 transition-transform duration-300 group-hover:scale-[1.02]">
                {/* City Map Image */}
                <div className="mb-8 relative aspect-[2/1]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={city.image}
                      alt={`${city.name} outline`}
                      className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/5 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* City Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-400 tracking-wide">{city.date}</p>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-lg border border-white/20 transform -skew-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/20 transform -skew-x-2" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white/20 transform -skew-x-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
