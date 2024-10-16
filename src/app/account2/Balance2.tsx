"use client";

import { useQuery } from "@tanstack/react-query";

export default function Balance2() {
  // This useQuery could just as well happen in some deeper
  // child to <BalanceWithHydrationBoundary>, data will be available immediately either way
  const { data } = useQuery({
    queryKey: ["balance2"],
    queryFn: async () => {
      const response = await fetch("/api/balance");
      const { balance } = await response.json();
      return balance;
    },
  });

  return data;
}
