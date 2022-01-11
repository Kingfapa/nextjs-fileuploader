import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeChanger } from "src/components/ThemeChanger";
import { ThemeProvider } from "next-themes";

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <ThemeChanger />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default NextApp;
