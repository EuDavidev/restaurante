import "./globals.css";

export const metadata = {
  title: "Restaurant",
  description: "Sua melhor refeição",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
