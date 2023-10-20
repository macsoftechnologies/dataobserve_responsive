import { BrowserRouter, Routes, Route } from "react-router-dom";
import Observability from "./products/Observability";
import HealthEm from "./products/HealthEm";
import Datasense from "./products/Datasense";
import Home from "./Home/Home";
import Company from "./pages/Company";
import People from "./pages/People";
import Contact from "./pages/Contact";
import Cloud from "./expertise/Cloud";
import Talent from "./expertise/Talent";
import Aiml from "./expertise/Aiml";
import Devops from "./expertise/Devops";
import Application from "./expertise/Application";
import Databi from "./expertise/Databi";
import Dataeng from "./expertise/Dataeng";
import Industries from "./Industries/Industries";
import Gaming from "./Industries/Gaming";
import Media from "./Industries/Media";
<<<<<<< Updated upstream
import BlogsRedirect from "./redirectpages/BlogsRedirect";
import CasestudiesRedirect from "./redirectpages/CasestudiesRedirect";
=======
import Ebooks from "./Ebooks/Ebooks";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/observability" element={<Observability />} />
          <Route path="/datainsights" element={<Datasense />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/databi" element={<Databi />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/application" element={<Application />} />
          <Route path="/aiml" element={<Aiml />} />
          <Route path="/dataeng" element={<Dataeng />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/media" element={<Media />} />
<<<<<<< Updated upstream
          <Route path="/blog" element={<BlogsRedirect />} />
          <Route path="/casestudies" element={<CasestudiesRedirect />} />
=======
          <Route path="/ebooks" element={<Ebooks />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
