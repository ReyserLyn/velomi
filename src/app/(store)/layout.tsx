import AnnouncementBar from "@/components/layout/announcement-bar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      {children}
    </>
  );
}
