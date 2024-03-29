const HomePage = () => (
  <section className="flex flex-col gap-4 h-[80vh]">
    <h2 className="font-bold text-7xl text-white">All Games</h2>
    <div className="flex gap-5">
      <button className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Order by: <span className="font-bold">Popularity</span></button>
      <button className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Release Date</button>
      <button className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Platforms</button>
    </div>
  </section>
);

export default HomePage;
