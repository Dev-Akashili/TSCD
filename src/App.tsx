import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { CollectionPage } from "./pages/CollectionPage";
import {
  CreateCollectionFormPage,
  CreateSampleFormPage,
} from "./pages/FormPages";

export const App = () => (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/createcollections"
          element={<CreateCollectionFormPage />}
        />
        <Route
          path="/collections/:displayId/:id"
          element={<CollectionPage />}
        />
        <Route
          path="/createsample/:displayId/:id"
          element={<CreateSampleFormPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
