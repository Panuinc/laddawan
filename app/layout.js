import { Prompt, Sulphur_Point } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--prompt",
  weight: "300",
  display: "swap",
});

const sulphur_Point = Sulphur_Point({
  subsets: ["latin"],
  variable: "--sulphur_Point",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Ladawan  By Channakor",
  description: "Home Sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sulphur_Point.variable} ${prompt.variable} antialiased`}
      >
        <div className="flex items-start justify-center w-full min-h-screen gap-2 text-dark font-prompt">
          {children}
        </div>
      </body>
    </html>
  );
}
