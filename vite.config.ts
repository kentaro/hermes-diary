import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/hermes-diary/',
  plugins: [tailwindcss()],
})
