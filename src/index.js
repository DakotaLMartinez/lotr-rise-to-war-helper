import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

async function main() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js"
      }
    });
  }

  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
main();
