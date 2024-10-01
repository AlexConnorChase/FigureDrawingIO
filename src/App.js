import "./App.css";

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
  return (
    <table className="Content-table">
      <tbody>
        <tr>
          <td>
            <div className="App-description">
              <p>
                This app uses the tumblr API to find images for timed sketching
                practices. Insert the tags you want to pick from, more filtering
                options may be added in the future.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Search-bar">
              <span className="SB-span">
                <form>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="Input Tags Here"
                  />
                  <input type="submit" value="Search" />
                </form>
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Image-Display-Back">
              <div className="Image-display"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
