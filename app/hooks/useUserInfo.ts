'use client';

import { useEffect, useState } from 'react';

export function useUserInfo() {
  const [myInfo, setMyInfo] = useState(null);
  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        setMyInfo(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingInfo(false);
      }
    };

    getInfo();
  }, []);

  return { myInfo, loadingInfo };
}