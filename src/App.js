import Add from "./modules/notes/components/Add";
import View from "./modules/notes/components/View";
import { NoteDashBoard } from "./modules/notes/pages/NoteDashBoard";
import { UserPage } from "./modules/user/pages/UserPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/dashboard" element={<NoteDashBoard />}>
        <Route path="add-note/:operationname" element={<Add />} />;
        <Route path="view-all" element={<View />} />;
      </Route>
    </Routes>
  );
}

export default App;
