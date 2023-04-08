'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '../MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleMenu}
          className='flex flex-row gap-3 items-center p-4 md:px-2 md:py-1 rounded-full border-x-[1px] border-neutral-100 hover:shadow-md transition cursor-pointer'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
        {isOpen ? (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col cursor-pointer'>
              {currentUser ? (
                <>
                  <MenuItem onClick={loginModal.onOpen} label='My trips' />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='My favorites'
                  />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='My reservations'
                  />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='My properties'
                  />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='Airbnb my home'
                  />
                  <MenuItem onClick={() => signOut()} label='Logout' />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label='Login' />
                  <MenuItem onClick={registerModal.onOpen} label='Signup' />
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
