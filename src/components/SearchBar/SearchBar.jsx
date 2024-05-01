import "./SearchBar.scss";

const Searchbar = () => {
  return (
    <div className="search_bar_wrapper">
      <h3 className="titile_search">Search PlaceHolder </h3>
      <form action="">
        <div className="search_username">
          <input type="text" placeholder="Write name..." />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
