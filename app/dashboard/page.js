'use client'
import Aside from "../components/aside";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push('/log-in'); 
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;


    return (
        <div className="flex flex-col sm:flex-row">
            <Aside/>
            <div className="p-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>Welcome {user?.email} to your dashboard!</p>
            </div>
        </div>
    )
}