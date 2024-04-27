import "./Main.scss";

const Main = () => {
  return (
    <div className="Main_wrapper">
      <div className="left_side_bar">
        <div className="title_bar_wrapper">
          <h3 className="title_bar">Select filter</h3>
        </div>
        <ul className="filter_wrapper_column">
          <li className="filter_item">All</li>
          <li className="filter_item">Horror</li>
          <li className="filter_item">Fantazy</li>
          <li className="filter_item">Detective</li>
        </ul>
      </div>
      <div className="right_side_bar">
        <div className="search_container">Lorem ipsum dolor sit amet.</div>
        <div className="content_container_wrapper">
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
          <div className="item_block_wrapper">
            <div className="img_wrapper">
              <img src="" alt="" />
            </div>
            <div className="content_block_wrapper">
              <h3 className="content_title">Title</h3>
              <p className="content_descr">Lorem ipsum dolor sit.</p>
              <div className="price_wrapper">
                <span className="content_price">32</span>{" "}
                <span className="content_valute">$</span>
              </div>
            </div>
            <button className="add_btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
