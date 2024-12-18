import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { BrowserRouter } from "react-router-dom"
import { OrderContextProvider } from "./context/OrderContext"

const rootElement = document.getElementById("root")

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
} else {
  console.error("Root element with'root' not found.")
}

