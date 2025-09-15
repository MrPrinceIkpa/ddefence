import "./globals.css";
import { Montserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const lexend = Montserrat({subsets:['latin'], weight:'400', variable: '--font-lexend'});


export const metadata = {
  title: "Discerning Defence",
  description: "Confidential private investigation and security services you can trust. Professional investigators delivering discreet, reliable results for individuals and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.variable}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
