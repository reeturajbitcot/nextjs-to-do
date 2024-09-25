import { redirect } from "next/navigation";

export default function Home() {
  redirect("/all-tasks");
  return <></>;
}
