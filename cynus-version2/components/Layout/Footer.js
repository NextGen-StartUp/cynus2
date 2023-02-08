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
        <section>
            <div className='footer-section flex-row-footer'>
                <div>
                <h4>© {new Date().getFullYear()}</h4>
                </div>
                <div className='flex-row-footer flex-row'>
                    <div>
                    <h4><Link href='/impressum'> Impressum</Link> </h4> 
                    </div>
                    <div><h4>Datenschutz­erklärung</h4>
                    </div>
                </div>
                <div>
                    <h4>All rights reserved.</h4>
                </div>
            </div>
        </section>
    )
}

export default Footer




// <div className="footer-section flex-space-between">
// <div>
//  <h4>Logo</h4>
// </div>

// <div className='flex-row flex-center madeby'>
//  <h4>© {new Date().getFullYear()} CYNUS All rights reserved. | <Link href='/impressum'> Impressum</Link> |</h4>
//  <a href="#" target="_blank" rel="noopener noreferrer"></a>
// </div>
// <div>
//  <h4>Logo</h4>
// </div>
// </div>