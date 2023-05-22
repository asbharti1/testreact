import './App.css';

import { lazy, Suspense } from "react";
const AboutUs = lazy(() => import("./components/about"));

const App = (props) => {
  return (
    <div className="App">
      <h1>ReactJS Assignment</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs />
      </Suspense>
    </div>
  );
};
export default App;
