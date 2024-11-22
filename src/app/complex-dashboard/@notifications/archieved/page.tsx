import Card from "@/components/Card";
import Link from "next/link";

export default function ArchievedNotifications() {
  return (
    <Card>
      <div>Archieved Notifications Component.</div>
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  );
}
