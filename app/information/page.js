'use client'

import Aside from "../components/aside";
import { Montserrat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { useAuth } from "../hooks/useAuth";
import { useUserInfo } from "../hooks/useUserInfo";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export default function Information() {
  const { myInfo, loadingInfo } = useUserInfo();
  const { user, loading } = useAuth();

  if (loading || loadingInfo) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };

    return(
        <div className="flex xl:flex-row flex-col gap-6">
            <Aside />
            <div className="p-8 flex flex-col gap-4 right-[250px]">
                <h1 className={montserrat.className + " text-3xl font-bold"}>Information</h1>
                <div className="flex flex-col items-start gap-8">
                  <div className="flex flex-col items-start gap-4">
                    <p className={montserrat.className + " text-2xl"}>Account</p>
                      {myInfo && (
                          <>
                          <p className={montserrat.className}><strong>ID:</strong> {myInfo.id}</p>
                          <p className={montserrat.className}><strong>Created at:</strong> {new Date(myInfo.created_at).toLocaleDateString()}</p>
                          <p className={montserrat.className}><strong>Valid until:</strong> {new Date(myInfo.until).toLocaleDateString()}</p>
                          <p className={montserrat.className}><strong>Status:</strong> {myInfo.status === true? ("Active"):("Blocked")}</p>
                          <p className={montserrat.className}><strong>Plan:</strong> {myInfo.plan}</p>
                          <p className={montserrat.className}><strong>Price:</strong> {myInfo.price}</p>
                        </>
                      )}
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <p className={montserrat.className + " text-2xl"}>User</p>
                      {user && (
                          <>
                          <p className={montserrat.className}><strong>Name:</strong> {user.full_name}</p>
                          <p className={montserrat.className}><strong>Phone:</strong> {user.phone}</p>
                          <p className={montserrat.className}><strong>Email:</strong> {user.email}</p>
                          <p className={montserrat.className}><strong>Role:</strong> {user.role}</p>
                        </>
                      )}
                  </div>
                </div>
            </div>
        </div>
    )
}

