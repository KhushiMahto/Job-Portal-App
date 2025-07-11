import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F0A04B] font-medium'>No. 1 Job Hunt Website</span>
            <h1 className='text-5xl font-bold'>Discover, Apply  & <br /> Land Your <span className='text-[#2973B2]'>Dream Job</span></h1>
            <p>Discover thousands of curated job listings, connect with top employers, and apply effortlessly to kickstart or elevate your career journey.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto' >
                <input 
                type="text"
                placeholder='Find your dream jobs'
                onChange={(e)=>setQuery(e.target.value)}
                className='outline-none border-none w-full'
                
                /> 
                <Button onClick={searchJobHandler} className="rounded-r-full bg-[#2973B2] w-12">
                    <Search className="h-5 w-12"/>
                </Button>
            </div>

        </div>
    </div>
  )
}

export default HeroSection
