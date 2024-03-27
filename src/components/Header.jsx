const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 h-[15vh]">
      <h1 className="text-white text-xl font-bold">Gamer's Haven</h1>
      <input type="text" placeholder="Search games" className="py-2 px-4 rounded-2xl bg-gray hover:bg-white search-transition w-[65%]"/>
      <div className="flex gap-5">
        <button type="button" className="text-white text-base font-bold">Log in</button>
        <button type="button" className="text-white text-base font-bold">Sign in</button>
      </div>
    </header>
  )
}

export default Header