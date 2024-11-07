import "./App.css";
import React from "react";
import cam from "./camera.jpg";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

function AppHeader() {
  return (
    <header className="App-header">
      <p>FigureDrawing.io</p>
    </header>
  );
}

function AppBody() {
  return (
    <main className="App-body">
      <AppTable />
    </main>
  );
}

function AppTable() {
  const [resList, setResList] = React.useState(null);
  const [inputTag, setInputTag] = React.useState(null);
  const [blogSearch, setBlogSearch] = React.useState(null);
  const [blogName, setBlogName] = React.useState(null);
  const FetchAPI = async () => {
    //console.log("fetch called...");
    if (inputTag) {
      const data = { inputTag };
      //console.log("fetching " + inputTag + " tag...");
      fetch("/img", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => setResList(data));
    } else {
      //Pop-up handler to be added?
      console.log("fetching failed...");
    }
    if (resList) {
      console.log(resList);
    }
  };

  const SearchBlog = () => {
    if (blogSearch) {
      setBlogName(blogSearch);
    }
  };

  return (
    <table className="Content-table">
      <tbody>
        <tr>
          <td>
            <div id="App-description-wrapper">
              <p id="App-description">
                This app uses the tumblr API to find images for timed sketching
                practices. Insert a single tag and we'll grab the most recent
                post with that tag. Using the second search bar you can input
                the name of a blog and if the owner has enabled it you can
                scroll through there! Feel free to keep an eye out as I have
                some other improvements planned like pulling multiple images and
                tracking post-timestamps to pull older post images.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Search-bar">
              <span className="SB-span">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search Tags"
                  onInput={(e) => setInputTag(e.currentTarget.value)}
                />
                <button className="search-button" onClick={FetchAPI}>
                  Search Tag
                </button>
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Image-Display-Back">
              <div className="Image-display">
                <Post imgLink={resList} />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Search-bar">
              <span className="SB-span">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search Blog Feeds"
                  onInput={(e) => setBlogSearch(e.currentTarget.value)}
                />
                <button className="search-button" onClick={SearchBlog}>
                  Search Blogs
                </button>
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="Blog-feed-back">
              <div id="Feed-holder">
                <BlogFeed blogN={blogName} />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Post({ imgLink }) {
  //const [imgLink, setIL] = React.useState(null);

  if (imgLink) {
    console.log("URL used: " + imgLink.url);
    return (
      <img
        src={imgLink.url}
        alt="If you're reading this, there is a image link url defined but it isn't working!"
        class=""
      />
    );
  } else {
    return (
      <img
        id="imgHolder"
        src={cam}
        alt="Something went wrong, this is supposed to be a static image!"
        height="500"
        width="500"
      />
    );
  }
}

function BlogFeed({ blogN }) {
  if (blogN) {
    const link = "https://" + blogN + ".tumblr.com";
    return (
      <iframe
        title="Blog search for refined results."
        id="manual-scroll"
        src={link}
      ></iframe>
    );
  } else {
    <p>Blog name not entered.</p>;
  }
}

export default App;
