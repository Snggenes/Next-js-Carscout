import getSession from "@/lib/getSession";


export default async function Page() {

  const session = await getSession();
  const user = session?.user;
  
  return (
    <div className="text-black h-full">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
