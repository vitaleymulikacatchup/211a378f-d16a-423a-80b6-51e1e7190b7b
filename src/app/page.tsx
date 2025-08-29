"use client";
import { NavbarLayoutFloatingOverlay } from '@/components/navigation/NavbarLayoutFloatingOverlay';
import { BillboardHero } from '@/components/sections/layouts/hero/BillboardHero';
import { SplitAbout } from '@/components/sections/layouts/about/SplitAbout';
import { HowToBuy3D } from '@/components/sections/layouts/howtobuy/3DHTB';
import { TextGridTokenomics } from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import { FooterBase } from '@/components/footer/FooterBase';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay
        navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoinPlay Logo"
        logoWidth={50}
        logoHeight={50}
        buttonText="Join the Community"
        onButtonClick={() => { /* Button Action */ }}
      />

      <BillboardHero
        title="Welcome to MemeCoinPlay"
        subtitle="Dive into the playful world of meme coins"
      />

      <SplitAbout
        description="MemeCoinPlay is a community-driven meme coin project where fun meets investments. Get involved in a playful way!"
      />

      <HowToBuy3D
        title="How to Participate"
        steps={[{ title: 'Buy MemeCoin', description: 'Get your MemeCoin on any of the major exchanges.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Join Our Community', description: 'Become part of our fun community on Discord and Telegram.', image: '/images/placeholder2.avif', position: 'center', isCenter: false }, { title: 'Hold & Enjoy', description: 'Hodl your MemeCoins and participate in fun events!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]}
      />

      <TextGridTokenomics
        title="Tokenomics Overview"
        description="Our tokenomics are designed to be fair and transparent."
        tokenData={[{ value: '10M', description: 'Total Supply' }, { value: '5%', description: 'Tax on Transactions' }, { value: '50%', description: 'Initial Liquidity' }]}
      />

      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={50}
        logoHeight={50}
        columns={[
          { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
          { title: 'Community', items: [{ label: 'Discord', onClick: () => {} }, { label: 'Telegram', onClick: () => {} }] },
          { title: 'Resources', items: [{ label: 'Documentation', onClick: () => {} }, { label: 'Blog', onClick: () => {} }] },
        ]}
        copyrightText="© 2023 MemeCoinPlay"
        onPrivacyClick={() => {}}
      />
    </SiteThemeProvider>
  );
}
