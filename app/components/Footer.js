import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function Footer({isDarkMode}) {
    return (
        <div className={`mt-20 ${isDarkMode ? 'dark' : ''}`}>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />


                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    sanketcoder19@gmail.com
                </div>
            </div>

            <div>
                <p>© 2025 Sanket Coder. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://instagram.com">Git</a></li>
                    <li><a target='_blank' href="https://instagram.com">LinkedIn</a></li>
                    <li><a target='_blank' href="https://instagram.com">Twitter</a></li>
                </ul>
            </div>

           

        </div>
    )
}
