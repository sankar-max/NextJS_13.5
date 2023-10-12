module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "/app/**.{ts,tsx}",
      options: {
        semi: false,
      },
    },
  ],
};
