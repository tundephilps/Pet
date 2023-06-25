import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import Products from "./components/Products";
import Subscribe from "./components/Subscribe";
import Contacts from "./components/Contacts";
import Hero2 from "./components/Hero2";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";

import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container>
          <div className="lg:px-20 px-2">
            <Banner />
            <Header />
            <Hero2 />
            <Stats />
            <Services />
            <Gallery />
            <Products />
            <Subscribe />
            <Blog />
            <Contacts />
            <Posts />
            <Footer />
          </div>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
