"use client"
import Image from 'next/image'
import Form from './components/Form'
import Header from './components/Header'

export default function Home() {
  return (
    <>
    <main className='bg-slate-900 h-[100vh]'>
    <Header title="Zia 's todo list" />
    <Form subtitle="'Daily Tasks'"/>
    </main>

    </>
  )
}
