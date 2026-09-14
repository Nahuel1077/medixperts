'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminPage() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [membership, setMembership] = useState([])
  const [isAdmin, setIsAdmin] = useState(null)
  const router = useRouter()
  const [days, setDays] = useState({})

 
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token')

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!data.user) {
        router.push('/log-in')
        return
      }

      setUser(data.user)
    }

    getUser()
  }, [])

 
  useEffect(() => {
    if (!user) return

    const checkAdmin = async () => {
      const token = localStorage.getItem('token')

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!data.isAdmin) {
        router.push('/')
        console.log(data)
        return
      }

      setIsAdmin(true)


      const getUsers = async () => {
        const token = localStorage.getItem('token')
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
    
        const data = await res.json()
        console.log(data)
        setUsers(data.user)
      }
      getUsers()
      
       const getMembership = async () => {
         const token = localStorage.getItem('token')
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/memberships`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
           })
         const data = await res.json()
         setMembership(data.memberships || []);
       }
       getMembership()
    }
    checkAdmin()
  }, [user])

  
  const getUsers = async () => {
    const token = localStorage.getItem('token')
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      })
    const data = await res.json()
    setUsers(data.user)
  }

  const getMembership = async () => {
         const token = localStorage.getItem('token')
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/memberships`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
           })
         const data = await res.json()
         setMembership(data.memberships || []);
       }


  // 🗑️ 4. Acciones
  const deleteUser = async (id) => {
  const token = localStorage.getItem('token')

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!confirm('¿Seguro que querés eliminar este usuario?')) return

    const data = await res.json()

    if (!res.ok) {
      console.error('Error:', data.error)
      return
    }

    // refrescar lista
    getUsers()

  } catch (err) {
    console.error('Network error:', err)
  }
}

  const toggleUser = async (id) => {
  const token = localStorage.getItem('token')

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/toggle/${id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.error('Error:', data.error)
      return
    }

    await getUsers()

  } catch (err) {
    console.error('Network error:', err)
  }
}

  const extendMembership = async (id, days) => {
  const token = localStorage.getItem('token')
    
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/extend/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ days: days })
    });

    if (res.ok) {
      getMembership();
      getUsers(); 
      setDays((prev) => ({
        ...prev,
        [id]: '' 
      }));

      alert(`Membresía extendida!`);
    }
  } catch (err) {
    console.error('Error al extender membresía:', err);
  }
  }

  // ⏳ loading
  if (isAdmin === null) return <p>Checking permissions...</p>
  if (!isAdmin) return <p>No autorizado</p>

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image src="/img/halloffame.png" alt="Hall of Fame" width={2000} height={1125} className="w-full h-dvhs object-cover fixed -z-10 brightness-50" />
      <h1 className="text-3xl font-bold mb-4 text-white">Admin Page</h1>

      {isAdmin ? (
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {users.map((u) => {
            const userMembership = membership.find((m) => m.id === u.id);
            return(
            <div key={u.id} className="border p-4 rounded-2xl bg-white">
              <p><b>{u.full_name}</b></p>
              <p>{u.email}</p>
              <p>Role: {u.role}</p>
              {userMembership ? (
                <div className="bg-blue-50 p-2 my-2 rounded">
                  <p className="text-sm">
                    Estado: {
                      userMembership.status
                        ? 'Activa'
                        : 'Pendiente de verificación'
                    }
                  </p>
                  <p className="text-sm">Vence: {userMembership.until}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Sin membresía activa</p>
              )}
              <div className="flex gap-2 mt-2">
                
                <button
                    onClick={() => toggleUser(u.id)}
                    className="border-[1px] rounded-md p-1 shadow-[0px_0px_1px_1px] hover:shadow-none"
                  >
                    {userMembership?.status ? 'Disable' : 'Enable'}
                  </button>
                <input type='number' alt='days' placeholder='Days' id='days' name='days' className='w-[60px] border-2 rounded-md'  value={days[u.id] || ''}
                  onChange={(e) =>
                    setDays({
                      ...days,
                      [u.id]: Number(e.target.value)
                    })
                } ></input>

                <button onClick={() => extendMembership(u.id, days[u.id])} className='border-[1px] rounded-md p-1 shadow-[0px_0px_1px_1px] hover:shadow-none'>
                  Extend
                </button>

                <button onClick={() => extendMembership(u.id, 30)} className='border-[1px] rounded-md p-1 shadow-[0px_0px_1px_1px] hover:shadow-none'>
                  +30 days
                </button>

                <button onClick={() => deleteUser(u.id)} className='border-[1px] rounded-md p-1 shadow-[0px_0px_1px_1px] hover:shadow-none'>
                  Delete
                </button>
              </div>
            </div>)
        })}
        </div>
      ) : (
        <p>No sos admin</p>
      )}
    </div>
  )
}