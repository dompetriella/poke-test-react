export function Pokeball() {
  return (
    <div className="relative w-16 h-16 rounded-full border-4 border-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
    </div>
  );
}
