import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="w-full max-w-min sm:max-w-fit bg-white">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
