import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
