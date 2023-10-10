import "@/styles/globals.css";
import Head from "next/head";
import {StateContext, StateProvider} from "@/context/StateContext"
import reducer, { initialState } from "@/context/StateReducers";
import { useReducer } from "react";
// import { initialState,reducer } from "@/context/StateReducers";
export default function App({ Component, pageProps }) {
  return (
    // <StateContext.Provider value={{ initialState: { initialState }, reducer: { reducer } }} >
    <StateContext.Provider value={useReducer(reducer,initialState)}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" href="/favicon.png"/>
      </Head>
      <Component {...pageProps} />
      </StateContext.Provider>
    
    
  )
}
