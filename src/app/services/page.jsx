import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight } from 'lucide-react'

import Image from 'next/image'
import HeroButton from '@/components/HeroButton';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Services = () => {
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
          <div className='md:h-screen w-full py-20 px-10'>
        <h1 className='text-4xl text-primary font-extrabold text-center py-4'>Our <span className='text-secondary'>Services</span></h1>
         <Tabs defaultValue="solution" className="w-[90%] mx-auto">
      <TabsList className="grid w-full grid-rows-3 md:grid-rows-1 md:grid-cols-3">
        <TabsTrigger value="solution">Sales Solution</TabsTrigger>
        <TabsTrigger value="trained">Trained Professionals</TabsTrigger>
        <TabsTrigger value="team">Team Augmentation</TabsTrigger>
      </TabsList>
      <TabsContent value="solution">
       <div className=' bg-muted p-4 relative'>
        <h1 className='text-3xl md:text-4xl font-bold text-primary '>Comprehensive Sales Solutions</h1>
        <div className='flex py-4 items-center'>
        <div className='w-full md:w-1/2'>
        <p className='text-lg text-secondary'>We provide end-to-end sales solutions tailored to your business needs. Our team of seasoned sales experts works closely with you to develop strategies that deliver measurable results. From lead generation to closing deals, we’ve got you covered.</p>
        </div>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr1.png' width={500} height={500} alt=''/>
        </div>
        </div>
       </div>
      </TabsContent>
      <TabsContent value="trained">
        <div className=' bg-muted p-4 relative'>
        <h1 className='text-3xl md:text-4xl font-bold text-primary '>Hire Trained Sales Professionals</h1>
        <div className='flex py-4 items-center'>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr2.png' width={600} height={600} alt=''/>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-2'>
        <p className='text-lg text-secondary'>Need extra hands on deck? Choose from our pool of professionals who have been rigorously trained and vetted to meet the highest industry standards. Whether you need someone for a specific project or ongoing support, our professionals are available for:</p>
        <p className='text-lg text-secondary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Hourly Engagements:</span> Flexibility to meet your immediate needs without long-term commitments.</p>
        <p className='text-lg text-secondary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Monthly Contracts:</span> Bring in the expertise you need for sustained growth and consistent performance.</p>
        <p className='text-lg text-secondary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Project-Based Contracts: </span>  Leverage top-tier talent for the duration of your projects, ensuring quality outcomes every time.</p>
       
        </div>
        
        </div>
       </div>
      </TabsContent>
      <TabsContent value="team">
       <div className=' bg-muted p-4 relative '>
        <h1 className='text-3xl md:text-4xl font-bold text-primary '>Sales Team Augmentation</h1>
        <div className='flex py-4 items-center'>
        <div className='w-full md:w-1/2'>
        <p className='text-lg text-secondary'>Looking to scale your sales team? We provide seamless team augmentation services, allowing you to expand your sales force without the overhead. Our professionals integrate with your existing team, bringing fresh energy and expertise to drive results..</p>
        </div>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr3.png' width={600} height={600} alt=''/>
        </div>
        </div>
       </div>
      </TabsContent>
    </Tabs>
      </div>
      </>
  )
}

export default Services