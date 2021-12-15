/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// font import here according to https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/

import "@fontsource/poppins" // Defaults to weight 400 with all styles included.
import LanguageProvider from "./src/context/Provider"

export const wrapRootElement = LanguageProvider
