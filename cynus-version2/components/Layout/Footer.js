import { Image } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WorkIcon from '@mui/icons-material/Work';
import Link from 'next/link';
import { motion } from 'framer-motion'

function Footer() {
    return (
        <section className='footer-section'>
       <div className="flex-row fo-color">
                <div>
                    <span className='footer-logo'>
                        <Link href='/'><h2>CYNUS</h2></Link>
                    </span>
                </div>
                <div>
                    <Link href='/'>Home</Link> <br />
                    <Link href='/#Produkte'>Product</Link> <br />
                    <Link href='/#About'>About</Link> <br />
                    <Link href='/#Milestones'>Milestones</Link> <br />
                    <Link href='/#Contact'>Contact</Link> <br />
                </div>
            </div>
            <div className='flex-row flex-center madeby'>
                <p>Copyright © {new Date().getFullYear()} CYNUS All rights reserved. | <Link href='/impressum'> Impressum</Link> |</p>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer"></a>
            </div>

        </section>
    )
}

export default Footer