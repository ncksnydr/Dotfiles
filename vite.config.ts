/**
 * --------------------------------------------------------------------------
 *   Vite → Configuration
 *   @see https://vitejs.dev/config/
 * --------------------------------------------------------------------------
*/

/**
 *   Imports
 * ------------------------------------------------------ */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";


export default defineConfig({
	plugins: [react(), mkcert()]
});
