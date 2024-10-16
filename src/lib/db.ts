import mongoClientPromise from "./mongodb";

export async function getAmount() {
  const client = await mongoClientPromise;
  const db = client.db("stam");
  const collection = db.collection("items");
  const result = await collection.findOne({});
  return result?.amount || 0;
}

export async function updateAmount(addAmount: number) {
  const client = await mongoClientPromise;
  const db = client.db("stam");
  const collection = db.collection("items");
  await collection.updateOne(
    {},
    { $inc: { amount: addAmount } },
    { upsert: true }
  );
}
