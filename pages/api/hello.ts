// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from "firebaseApps/serverApp";
import type { NextApiRequest, NextApiResponse } from "next";

const db = admin.firestore();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorization: uid } = req.headers;

  db.collection("users")
    .doc(uid!)
    .get()
    .then((doc) => {
      console.log(doc.data());
    });

  res.status(200).json({ name: "bob" });
}
