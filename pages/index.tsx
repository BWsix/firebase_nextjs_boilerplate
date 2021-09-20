import axios from "axios";
import firebase from "firebaseApps/clientApp";
import Image from "next/image";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());

  useEffect(() => {
    if (!user) return;

    const dataFetcher = async () => {
      const getResult = await axios.get("/api/hello", {
        headers: { Authorization: user.uid },
      });
      console.log(getResult.data);
    };

    dataFetcher();
  }, [user]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      {user?.displayName}
      <Image src={user?.photoURL!} alt="" width={50} height={50} />
    </div>
  );
}
