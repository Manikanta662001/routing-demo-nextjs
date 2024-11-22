import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>This is Notifications Component.</div>
      <Link href={"/complex-dashboard/archieved"}>Archieved</Link>
    </Card>
  );
}
