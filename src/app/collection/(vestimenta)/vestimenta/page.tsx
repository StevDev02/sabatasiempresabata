'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function VestimentaPage() {
  const router = useRouter()
  useEffect(() => {
    router.push('/collection/vestimenta/all')
  }, [router])

  return (
    <div className="w-full h-[45.2dvh] bg-white">

    </div>
  )
}
