import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This is the home page
      <UserButton />
    </div>
  );
}