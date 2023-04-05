import React, { useEffect } from 'react'
import { useRouter } from 'next/router';


export default function DashboardRoute( { props }) {
  const router = useRouter();
  const { userData } = props;

  useEffect(() => {
    if (!userData?.jwt) { router.push('/login') }
  }, [userData])

  return (
    <div>Dashboard</div>
  )
}
