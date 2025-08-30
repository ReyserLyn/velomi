import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar/navbar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-dvh-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      {children}
    </div>
  );
}
