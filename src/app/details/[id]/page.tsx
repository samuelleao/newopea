import { getComission } from "../services";

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const comission: EmissionsType = await getComission(id)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-4xl font-bold">Welcome to your Next.js app</h1>
        <p className="text-lg mt-4">Get started by editing the files in <code>src/app</code></p>
      </div>
    </main>
  );
}