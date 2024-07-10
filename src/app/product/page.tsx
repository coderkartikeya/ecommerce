'use client'
import React, { useEffect, useState } from 'react'
import Taskbar from '../components/Taskbar'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/product/1'); // Redirect to the first page
  }, [router]);

  return null;
}

export default page