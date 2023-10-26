import "./App.css";
import Home from "./home/home";
import Main from "./main/main";
import GlobalSearch from "./components/globalSearch/globalSearch";
import DosiePeople from "./components/dosiePeople/dosiePeople";
import SearchFL from "./components/searchFL/searchFL";
import SearchTC from "./components/searchTC/serchTC";
import SearchUL from "./components/searchUL/searchUL";
import SearchBY from "./components/searchBY/searchBY";
import DosieAvto from "./components/dosieAvto/dosieAvto";
import SearchViolation from "./components/searchViolation/searchViolation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />}>
          <Route path="global-search" element={<GlobalSearch />}>
            <Route path="searchFL" element={<SearchFL />} />
            <Route path="searchTC" element={<SearchTC />} />
            <Route path="searchViolation" element={<SearchViolation />} />
            <Route path="searchUL" element={<SearchUL />} />
            <Route path="searchBY" element={<SearchBY />} />
          </Route>
          <Route path="dosieAvto" element={<DosieAvto />} />
          <Route path="dosiePeople" element={<DosiePeople />} />
        </Route>

        {/* <Route path="new" element={<NewPost />} />
        </Route> */}
      </Routes>
    </Router>
  );
}
