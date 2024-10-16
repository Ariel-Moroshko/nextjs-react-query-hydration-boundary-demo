"use client";
import { useQuery } from "@tanstack/react-query";

type Props = {
  initialData: number;
};
export default function Balance({ initialData }: Props) {
  const { data: balance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const response = await fetch("/api/balance");
      const { balance } = await response.json();
      return balance;
    },
    initialData,
  });
  return balance;
}
