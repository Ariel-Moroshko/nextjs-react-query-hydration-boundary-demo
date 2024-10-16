"use server";

import { updateAmount } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function receiveMoneyAction({ amount }: { amount: number }) {
  await updateAmount(amount);
  revalidatePath("/");
}
