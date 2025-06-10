import HeaderSteps from "./components/layout/HeaderSteps";
import SkipSelector from "./components/skip/SkipSelector";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <HeaderSteps />
      <SkipSelector />
    </div>
  );
}

export default App;
