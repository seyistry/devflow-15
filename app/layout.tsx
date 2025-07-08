import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  description:
    "A community-driven platform for asking and answering programming questions, Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile development, algorithms, data structures and more",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
};

export default AppLayout;
