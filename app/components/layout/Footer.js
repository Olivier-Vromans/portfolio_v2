import React from 'react'
import Button from '../Button.js'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'

export default function Footer() {
    return (
        <footer className='container flex flex-row justify-between py-6 md:py-3'>
            <div className='flex flex-row items-center md:items-start gap-5'>
                <p className='text-sm text-center md:text-left'>© 2023 Olivier Vromans</p>
            </div>
            <div className='flex flex-rpw items-center gap-4'>
                <Button styleType='icon' sizeType='icon' icon={IconBrandLinkedin} href='https://www.linkedin.com/in/oliviervromans/' blank />
                <Button styleType='icon' sizeType='icon' icon={IconBrandGithub} href='https://www.github.com/olivier-vromans/' blank />
                <Button styleType='icon' sizeType='icon' icon={IconBrandInstagram} href='https://www.instagram.com/olivier_vromans/' blank />
            </div>
        </footer>
    )
}
