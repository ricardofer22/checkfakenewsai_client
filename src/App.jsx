import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import NewsInput from "./components/NewsInput";
import Results from "./components/Results";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <Container>
      <Header />
      <div className="flex h-11/12 w-full items-center justify-center">
        <div className="relative h-full w-full max-w-5xl [perspective:1200px]">
          <div
            className="relative h-full w-full transition-transform duration-700 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: showResults ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                pointerEvents: showResults ? "none" : "auto",
              }}
            >
              <NewsInput onCheckComplete={() => setShowResults(true)} />
            </div>

            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                pointerEvents: showResults ? "auto" : "none",
              }}
            >
              <Results onBack={() => setShowResults(false)} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
