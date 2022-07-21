import React from 'react';

const Footer = () => {
    return (
        <section className='bg-dark text-white py-2'>
            <p className='py-0 my-0'>copyright © {new Date().getFullYear()} <a
                href="http://gambling-jackpot.vercel.app/"
                className='py-0 my-0'
                target={'_blank'}
            >gam-jack</a></p>
        </section>
    );
}

export default Footer;  