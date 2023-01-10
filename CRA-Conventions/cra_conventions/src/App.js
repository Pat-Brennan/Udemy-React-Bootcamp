import Dog from "./Dog";

//? This should always remain as the "Top" or "Entry point" of the app
function App() {
  return (
    <div>
      <Dog />
    </div>
  );
}

export default App;

//* TREE STRUCTURE
//? INDEX.js -> APP.js -> COMPONENTS(DOG.js)
//? Components get imported to App, 
//? App gets imported to Index, 
//? Index.js gets rendered in Index.HTML