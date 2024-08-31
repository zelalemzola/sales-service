import { Poppins } from "next/font/google";
import "./globals.css";


const inter = Poppins({ subsets: ["latin"], weight:['300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "SS Sales ",
  description: "SS Sales as a service ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
       
        </body>
    </html>
  );
}
