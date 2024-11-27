import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import HeroButton from "@/components/HeroButton";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowRight, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Search, Twitter } from "lucide-react";
import Partners from "@/components/Partners";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import Workers from "@/components/Workers";
import { FadeText } from "@/components/ui/fade-text";
import BlurFade from "@/components/ui/blur-fade";


const words = `“At Elevate PLC, we're not just another sales company—we're your partner in driving success. Whether you need expert sales solutions or skilled professionals to boost your team, we have the right resources to take your business to the next level. We offer a unique blend of sales strategies, comprehensive training, and rigorous background checks to ensure that you only get the best.”`;
export default function Home() {
  return (
    <div className='w-full'>
     <div className='flex items-center justify-between px-6 md:px-10 py-3 fixed z-30  top-0 left-0 w-full bg-white shadow-md'>
        <Link href='/' className='text-secondary font-bold '>Elevate PLC.</Link>
       <div className='hidden md:flex items-center gap-6 '>
        <Link href='/' className='text-[#e59c71] font-bold  hover:text-secondary p-2 '> Home</Link>
        <Link href='/about' className='text-[#e59c71] font-bold  hover:text-secondary p-2 '> About Us</Link>
        <Link href='/services' className='text-[#e59c71] font-bold  hover:text-secondary p-2 '> Services</Link>
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
      <div className='landing h-screen w-full flex '>
      <div className='md:w-[50%]'></div>
      <div className='w-full md:w-[50%] flex flex-col items-center justify-center gap-3'>
        <FadeText
        className='text-5xl text-[#4d4d4d] font-extrabold'
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.35 } },

        }}
        text="PREMIER"
      />
        <FadeText
        className='text-3xl md:text-5xl text-primary font-extrabold text-center my-5'
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.4 } },

        }}
        text="Sales a Service Solution"
      />
        <FadeText
        className='mt-2 p-3 border-2  border-primary rounded-full text-lg text-secondary my-5'
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.45 } },

        }}
        text="Focus on what actually matters"
      />
        
   
       <BlurFade delay={0.5} inView={true}>
         <button className=' bg-secondary hover:bg-secondary hover:shadow-lg text-white shadow-md rounded-full' >
      <Link href='/workers' className='flex items-center gap-2 p-3 px-5 '>
         <Search/> Gig Workers
          </Link>
        </button>
      </BlurFade>
        
      </div>
      </div>
      <div className='md:h-screen w-full about py-[20%] md:py-[15%]'>
          <h1 className='text-4xl font-extrabold text-primary text-center'>About <span className='text-secondary'>Us</span></h1>
          <div className='w-[80%] mx-auto pt-[5%]'> 
            <TextGenerateEffect words={words} />
            </div>
      </div>
      <div className='md:h-screen w-full py-8 px-10'>
        <h1 className='text-4xl text-primary font-extrabold text-center py-4'>Our <span className='text-secondary'>Services</span></h1>
         <Tabs defaultValue="solution" className="w-[90%] mx-auto">
      <TabsList className="grid w-full grid-rows-3 md:grid-rows-1 md:grid-cols-3">
        <TabsTrigger value="solution">Sales Solution</TabsTrigger>
        <TabsTrigger value="trained">Trained Professionals</TabsTrigger>
        <TabsTrigger value="team">Team Augmentation</TabsTrigger>
      </TabsList>
      <TabsContent value="solution">
       <div className=' bg-muted p-4 relative'>
        <h1 className='text-3xl md:text-4xl font-bold text-[#4d4d4d] '>Comprehensive Sales Solutions</h1>
        <div className='flex py-4 items-center'>
        <div className='w-full md:w-1/2'>
        <p className='text-lg text-primary'>We provide end-to-end sales solutions tailored to your business needs. Our team of seasoned sales experts works closely with you to develop strategies that deliver measurable results. From lead generation to closing deals, we’ve got you covered.</p>
        </div>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr1.png' width={500} height={500} alt=''/>
        </div>
        </div>
       </div>
      </TabsContent>
      <TabsContent value="trained">
        <div className=' bg-muted p-4 relative'>
        <h1 className='text-3xl md:text-4xl font-bold text-[#4d4d4d] '>Hire Trained Sales Professionals</h1>
        <div className='flex py-4 items-center'>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr2.png' width={600} height={600} alt=''/>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-2'>
        <p className='text-lg text-primary'>Need extra hands on deck? Choose from our pool of professionals who have been rigorously trained and vetted to meet the highest industry standards. Whether you need someone for a specific project or ongoing support, our professionals are available for:</p>
        <p className='text-lg text-primary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Hourly Engagements:</span> Flexibility to meet your immediate needs without long-term commitments.</p>
        <p className='text-lg text-primary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Monthly Contracts:</span> Bring in the expertise you need for sustained growth and consistent performance.</p>
        <p className='text-lg text-primary pl-[5%] flex flex-col items-start gap-2 '><span className='font-bold text-xl flex items-center gap-2'><ArrowRight className='bg-primary rounded-full text-white'/> Project-Based Contracts: </span>  Leverage top-tier talent for the duration of your projects, ensuring quality outcomes every time.</p>
       
        </div>
        
        </div>
       </div>
      </TabsContent>
      <TabsContent value="team">
       <div className=' bg-muted p-4 relative '>
        <h1 className='text-3xl md:text-4xl font-bold text-[#4d4d4d] '>Sales Team Augmentation</h1>
        <div className='flex py-4 items-center'>
        <div className='w-full md:w-1/2'>
        <p className='text-lg text-primary'>Looking to scale your sales team? We provide seamless team augmentation services, allowing you to expand your sales force without the overhead. Our professionals integrate with your existing team, bringing fresh energy and expertise to drive results..</p>
        </div>
        <div className='hidden md:block md:w-1/2'>
        <Image src='/sr3.png' width={600} height={600} alt=''/>
        </div>
        </div>
       </div>
      </TabsContent>
    </Tabs>
      </div>
      <div className='md:h-screen w-full py-10 px-4'>
        <h1 className='text-primary text-4xl font-bold text-center pb-10'>Why Choose Us <span className='text-secondary'>?</span></h1>
        <div className='flex flex-wrap gap-5  '>
          <div className='shadow-md hover:shadow-xl border-secondary bg-primary  p-4 flex flex-col rounded-2xl w-[90%] md:w-[25%] mx-auto md:mx-0'>
            <h2 className='text-[#cdbaa1] text-lg w-full font-bold'>Expertise & Experience:</h2>
            <p className='text-white py-2'> Our team consists of industry veterans with a proven track record of success in diverse markets.</p>
          </div>
          <div className='shadow-md hover:shadow-xl border-primary bg-[#e59c71] p-4 flex flex-col rounded-2xl w-[90%] md:w-[40%]  mx-auto md:mx-0'>
            <h2 className='text-primary text-lg w-full font-bold'>Rigorous Vetting Process:</h2>
            <p className='text-white py-2'> Every professional in our network has undergone a comprehensive background check and skills assessment, ensuring you receive top-tier talent.</p>
          </div>
           <div className='shadow-md hover:shadow-xl border-secondary bg-primary  p-4 flex flex-col rounded-2xl w-[90%] md:w-[30%]  mx-auto md:mx-0'>
            <h2 className='text-[#cdbaa1] text-lg w-full font-bold'>Custom Solutions: </h2>
            <p className='text-white py-2'>We understand that every business is unique. That’s why we offer customizable solutions that align with your specific goals and challenges.</p>
          </div>

          <div className='shadow-md hover:shadow-xl border-primary bg-[#e59c71] p-4 flex flex-col rounded-2xl w-[90%] md:w-[55%]  mx-auto md:mx-0'>
            <h2 className='text-primary text-lg w-full font-bold'>Flexibility:</h2>
            <p className='text-white py-2'> Whether you need short-term help or long-term support, we offer flexible hiring options to suit your business needs.</p>
          </div>
          <div className='shadow-md hover:shadow-xl border-secondary bg-primary p-4 flex flex-col rounded-2xl w-[90%] md:w-[40%]  mx-auto md:mx-0'>
            <h2 className='text-[#cdbaa1] text-lg w-full font-bold'>Commitment to Excellence: </h2>
            <p className='text-white py-2'> We are committed to delivering exceptional service and driving tangible results for your business.</p>
          </div>
        </div>
      </div>
      <div className='md:h-screen w-full py-5 px-4'>
        <h1 className='text-4xl text-primary font-bold text-center pb-[10%]'>How To <span className='text-secondary'>Get Started?</span></h1>
        <div className='flex flex-col md:flex-row  gap-6  items-center'>
          <div className='bg-[#e59c71] rounded-2xl p-3 flex flex-col gap-3 w-[90%] md:w-[30%]'>
            <p className='bg-[#4d4d4d] text-white font-bold rounded-full p-2 px-4 w-fit text-center mx-auto'>1</p>
            <h1 className='text-[#4d4d4d] font-bold text-xl text-center'>Consultation:</h1>
            <p className='text-lg text-white text-center'> We begin with a deep dive into your business needs and goals.</p>
          </div>
            <ArrowRight className='hidden md:block  font-bold text-white text-4xl scale-[150%] bg-[#e59c71] rounded-full' />
            <ArrowDown className='block md:hidden  font-bold text-white text-4xl scale-[150%] bg-[#e59c71] rounded-full' />
          <div className='bg-[#e59c71] rounded-2xl p-3 flex flex-col gap-3 w-[90%] md:w-[30%]'>
            <p className='bg-[#4d4d4d] text-white font-bold rounded-full p-2 px-4 w-fit text-center mx-auto'>2</p>
            <h1 className='text-[#4d4d4d] font-bold text-xl text-center'>Customized Plan:</h1>
            <p className='text-lg text-white text-center'> Our experts develop a tailored strategy, whether it&lsquo;s providing sales solutions or matching you with the right professionals.</p>
          </div>
            <ArrowRight className='hidden md:block  font-bold text-white text-4xl scale-[150%] bg-[#e59c71] rounded-full' />
            <ArrowDown className='block md:hidden  font-bold text-white text-4xl scale-[150%] bg-[#e59c71] rounded-full' />
          <div className='bg-[#e59c71] rounded-2xl p-3 flex flex-col gap-3  w-[90%] md:w-[30%]'>
            <p className='bg-[#4d4d4d] text-white font-bold rounded-full p-2 px-4 w-fit text-center mx-auto'>3</p>
            <h1 className='text-[#4d4d4d] font-bold text-xl text-center'>Execution:</h1>
            <p className='text-lg text-white text-center'>We deploy the plan, providing continuous support and adjustments as needed.</p>
          </div>
            
          
          
        </div>
      </div>
      <Workers/>
      <Partners/>

      <div className='py-5 px-3 w-full flex flex-col gap-2'>
        <div className='border-2 border-secondary shadow-lg '></div>
        <h2 className='text-primary text-3xl font-extrabold pt-4 '>Join Our Network</h2>
        <p className='text-[#4d4d4d] text-lg'>Are you a sales professional looking to work with leading businesses? Join our network to access top-tier opportunities and grow your career.</p>
        <div className='border-2 border-primary shadow-lg my-3'></div>
       <h2 className='text-[#e59c71] text-3xl font-extrabold pt-4 '> Get Started Today</h2>
       <div className='flex flex-col md:flex-row items-start justify-between '>
        <p className='text-[#4d4d4d] text-lg'>Ready to take your sales to the next level? Contact us to schedule a consultation and discover how we can help you achieve your business goals.</p>
        <Button className='bg-secondary text-white flex items-center text-lg hover:bg-secondary shadow-2xl'><Phone/> 9080</Button>
       </div>
        <div className='border-2 border-secondary shadow-lg my-3'></div>
         <div className='flex flex-col gap-4'>
        <h2 className='text-primary text-2xl font-bold'>Sales Inc.</h2>
        <div className='flex gap-4 md:gap-8 flex-wrap text-2xl text-white'>
          <div className='p-2 bg-secondary rounded-full'><Instagram size={32} /></div>
          <div className='p-2 bg-secondary rounded-full'><Facebook  size={32}/></div>
          <div className='p-2 bg-secondary rounded-full'><Linkedin size={32}/></div>
          <div className='p-2 bg-secondary rounded-full'><Twitter size={32}/></div>
          <div className='p-2 bg-secondary rounded-full'><Mail size={32}/></div>
        </div>
        </div>
      </div>
    </div>
  );
}
