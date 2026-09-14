'use client';

import { useEffect, useState } from 'react';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${visible
          ? 'opacity-100 blur-0'
          : 'opacity-0 blur-md'}
      `}
    >
      {children}
    </div>
  );
}