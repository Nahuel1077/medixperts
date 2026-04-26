'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(null);
  const router = useRouter();
  const [users, setUsers] = useState([]);

    useEffect(() => {
    const checkAdmin = async () => {
      // 1. Obtener usuario logueado
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.push('/login');
        return;
      }

      // 2. Buscar perfil en DB
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userData.user.id)
        .single();

      if (error || !profile) {
        router.push('/');
        return;
      }

      // 3. Validar rol
      if (profile.role !== 'admin') {
        router.push('/');
      } else {
        setIsAdmin(true);
      }
    };
    
    checkAdmin();
  },[]);
  
  if (isAdmin === null) return <p>Checking permissions...</p>;
  
  const getUsers = async () => {
    const { data, error } = await supabase
    .from('profiles')
    .select('*');
    
    if (!error) setUsers(data);
  };
  

  const deleteUser = async (id) => {
  await supabase.from('profiles').delete().eq('id', id);
  getUsers();
  };

  const toggleUser = async (id, currentState) => {
  await supabase
    .from('profiles')
    .update({ active: !currentState })
    .eq('id', id);

  getUsers();
  };

  const extendMembership = async (id, days) => {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + days);

  await supabase
    .from('profiles')
    .update({ membership_end: newDate })
    .eq('id', id);

  getUsers();
  };


  getUsers();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      {isAdmin ? (
        <div className='flex flex-col items-center gap-6'>
        <p className="text-green-500">You are an admin.</p>
         {users.map((user) => (
      <div key={user.id} className="w-full border p-2 mb-2 gap-2 flex flex-col">
        <p>{user.id}</p>
        <p>{user.role}</p>
        <p>{user.full_name}</p>
        <p>{user.phone}</p>
        <div className='flex flex-row justify-content gap-2'>
        <button className='button' onClick={() => toggleUser(user.id, user.active)}>
          Toggle
        </button>

        <button className='button' onClick={() => extendMembership(user.id, 30)}>
          +30 days
        </button>

        <button className='button' onClick={() => deleteUser(user.id)}>
          Delete
        </button>
        </div>
      </div>
    ))}
        </div>
      ) : (
        <p className="text-red-500">You are not an admin.</p>
      )}

    </div>
  );
}