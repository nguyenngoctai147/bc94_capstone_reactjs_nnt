// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Suspense } from "react";
import LoadingPageSpinner from "./component/common/LoadingPageSpinner";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <Suspense fallback={<LoadingPageSpinner label="Đang tải trang..." />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
