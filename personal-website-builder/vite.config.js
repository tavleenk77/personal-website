import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Basic Vite configuration that enables React (JSX) support.
export default defineConfig({
  plugins: [react()],
})
