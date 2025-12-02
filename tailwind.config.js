/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Importante!
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
    extend: {},
};
export const plugins = [
    require("flowbite/plugin")
];
