import { Figtree } from "next/font/google";

import getSongsByUserId from "@/actions/getSongsByUserId";
import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import Player from "@/components/Player";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "musixon ",
  description: "musixon ",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
