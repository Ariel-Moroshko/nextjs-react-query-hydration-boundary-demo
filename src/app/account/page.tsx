import { getAmount } from "@/lib/db";
import Balance from "./Balance";

export const dynamic = "force-dynamic";

export default async function Account() {
  const balance = await getAmount();
  return (
    <>
      <h1 className="text-2xl">Account - useQuery + initialData</h1>
      <div className="mt-8">
        Your balance is: $<Balance initialData={balance} />
      </div>
    </>
  );
}
