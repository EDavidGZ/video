
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import TestUbication from "./components/Tests/TestUbication"
import LessonsA1 from "./components/Lessons/A1-A2/LessonsA1"
import Pronouns from "./components/Lessons/A1-A2/Pronouns"
import Demonstratives from "./components/Lessons/A1-A2/Demonstratives"
import Verbs from "./components/Lessons/A1-A2/Verbs"
import An from "./components/Lessons/A1-A2/An"
import The from "./components/Lessons/A1-A2/The"
import At from "./components/Lessons/A1-A2/At"
import Prepositions from "./components/Lessons/A1-A2/prepositions"
import Purpose from "./components/Lessons/A1-A2/Purpose"
import Reason from "./components/Lessons/A1-A2/Reason"
import ResultConnectors from "./components/Lessons/A1-A2/ResultConnectors"
import Contrast from "./components/Lessons/A1-A2/Contrast"


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />

          //Tests
            <Route path="/ubicationTest" element={<TestUbication />} />


          //Lessons
          <Route path="/lessonsA1" element={<LessonsA1 />} />


          //A1-A2
          <Route path="/pronouns" element={<Pronouns />} />
          <Route path="/demonstratives" element={<Demonstratives />} />
          <Route path="/verbs" element={<Verbs />} />
          <Route path="/an" element={<An />} />
          <Route path="/the" element={<The />} />
          <Route path="/at" element={<At />} />
          <Route path="/prepositions" element={<Prepositions />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/result" element={<ResultConnectors />} />
          <Route path="/contrastconectors" element={<Contrast />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
