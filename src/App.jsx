import Header from "../components/Header"
import Footer from "../components/Footer"
import Results from "../components/Results"
import { useState } from "react"
import "./App.css"

export default function App() {
  return(
    <>
      <Header />
      <Results />
      <Footer />
    </>
  )
}