import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
import { ServerActionButton } from './buttons/ServerActionButton';

export const NavBar = async () => {
  const session = await auth();

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: '/' });
  };

  const handleSignIn = async () => {
    "use server";
    await signIn('github');
  };

  return (
    <header className='px-5 bg-primaryBackground shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={80} height={40} />
          <div className='flex items-center gap-5'>
          </div>
        </Link>
        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>Create</Link>
              <ServerActionButton handleClick={handleSignOut}>
                <span>Logout</span>
              </ServerActionButton>
              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user.name}</span>
              </Link>
            </>
          ) : (
            <ServerActionButton handleClick={handleSignIn}>
              <span>Login</span>
            </ServerActionButton>
          )}
        </div>
      </nav>
    </header>
  )
};
