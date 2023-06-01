import { Routes, Route } from "react-router-dom";

import { ThankYouPage, NotFound } from "./components/";

import PrepForm from "./Pages/PrepForm";

function App() {
  {
    /*Routes*/
  }

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="" element={<PrepForm />} />
      <Route path="thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
