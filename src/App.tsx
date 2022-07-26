import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import tractor from "./img/tractor.svg";
import smiley from "./img/smiley.svg";
import CalculatorMFE from "./components/mfe";
// TODO: Move this into the MFE
import { QueryClient, QueryClientProvider } from "react-query";
// Create a client (TODO: move this into the MFE too)
const queryClient = new QueryClient();

function App() {
  const isLoading = false;
  const mfeError = false;

  const renderMfeArea = (
    isLoading: boolean,
    mfeError: boolean,
    queryClient: QueryClient
  ) => {
    if (isLoading) {
      return (
        <div className="bg-purple-dark flex flex-col justify-center items-center pt-24 pb-24 pl-5 pr-5 rounded border-grey-dark-border border-3">
          <img src={tractor} alt="Tractor" />
          <p className="text-purple-dark-text text-center">We're loading...</p>
        </div>
      );
    }

    if (mfeError) {
      return (
        <div className="bg-error-background flex flex-col justify-center items-center pt-24 pb-24 pl-5 pr-5 rounded border-error-border border-3">
          <img src={smiley} alt="Smiley face" />
          <p className="text-error-text text-center text-2xl">
            Please don't cry, we stuffed up!
          </p>
        </div>
      );
    }
    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <CalculatorMFE />
        </QueryClientProvider>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className=" bg-light-grey flex justify-center items-center w-full pt-16 pb-16 pl-5 pr-5">
        <div className="mfe-container md:max-w-4xl w-full">
          {renderMfeArea(isLoading, mfeError, queryClient)}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
