import HeroButton from '@/components/HeroButton';
import { TextGenerateEffect } from '@/components/text-generate-effect'
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const words = `“At Sales Inc, we’re not just another sales company—we’re your partner in driving success. Whether you need expert sales solutions or skilled professionals to boost your team, we have the right resources to take your business to the next level. We offer a unique blend of sales strategies, comprehensive training, and rigorous background checks to ensure that you only get the best.”`;
const AboutPage = () => {
  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-10 py-3 fixed z-30  top-0 left-0 w-full bg-white'>
        <Link href='/' className='text-secondary font-bold '>Elevate Sales Inc.</Link>
       <div className='hidden md:flex items-center gap-6 '>
        <Link href='/' className='text-secondary font-bold hover:bg-secondary hover:text-white p-2 rounded-lg'> Home</Link>
        <Link href='/about' className='text-secondary font-bold hover:bg-secondary hover:text-white p-2 rounded-lg'> About Us</Link>
        <Link href='/services' className='text-secondary font-bold hover:bg-secondary hover:text-white p-2 rounded-lg'> Services</Link>
        <HeroButton/>
        </div>
         <div className='block md:hidden'>
                <Drawer>
          <DrawerTrigger>
         <Menu className=' cursor-pointer text-secondary font-extrabold text-lg scale-[150%]'/>
          </DrawerTrigger>
          <DrawerContent className='h-[40%]'>
            <div className=' flex   gap-4 flex-col px-6'>
            <Link href='/'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Home</Link>
            <Link href='/about'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>About us</Link>
            <Link href='/services'className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Services</Link>
            <HeroButton/> 
            </div>
            <DrawerFooter className='px-6'>
              <DrawerClose>
              <Button variant="outline" className='w-full'>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      </div>
   <div className='md:h-screen w-full about py-[20%] md:py-[15%]'>
          <h1 className='text-4xl font-extrabold text-primary text-center'>About <span className='text-secondary'>Us</span></h1>
          <div className='w-[80%] mx-auto pt-[5%]'> 
            <TextGenerateEffect words={words} />
            </div>
      </div>
      </>
  )
}

export default AboutPage