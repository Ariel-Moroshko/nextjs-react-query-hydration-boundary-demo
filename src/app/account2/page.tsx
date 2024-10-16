import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Balance2 from "./Balance2";
import { getAmount } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Account2() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["balance2"],
    queryFn: getAmount,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-2xl">Account - HydrationBoundary</h1>
      <div className="mt-8">
        Your balance is: $<Balance2 />
      </div>
    </HydrationBoundary>
  );
}
