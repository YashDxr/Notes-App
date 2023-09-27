import Add from "./modules/notes/components/Add";
import View from "./modules/notes/components/View";
import { NoteDashBoard } from "./modules/notes/pages/NoteDashBoard";
import { UserPage } from "./modules/user/pages/UserPage";
import { Routes, Route } from "react-router-dom";
import {ErrorBoundary} from "./shared/components/errors/ErrorBoundary"
function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/dashboard" element={<NoteDashBoard />}>
          <Route path="add-note/:operationname" element={<Add />} />;
          <Route path="view-all" element={<View />} />;
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
