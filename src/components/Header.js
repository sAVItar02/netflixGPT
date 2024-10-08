import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { LOGO, PROFILE_ICON } from '../utils/constants';
import { toggleGPTView } from '../utils/gptSlice';
import LanguageSelect from './LanguageSelect';

const Header = () => {
  const user = useSelector(store => store.user);
  const gptView = useSelector(store => store.gpt.showGPTView);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className={`fixed top-0 left-0 z-20 w-full flex items-center justify-between sm:bg-transparent bg-black ${user && "sm:bg-gradient-to-b sm:from-black"}`}>
      <img src={LOGO} alt="logo"  className={`${ user ? "sm:w-44 w-32" : "w-60"} h-auto px-2 sm:px-8 py-2`}/>
      {
        user && 
        <div className='flex items-center justify-center gap-0 sm:gap-4'>
          <button onClick={() => dispatch(toggleGPTView())} className='font-semibold text-white hover:underline sm:px-0 px-2'>{gptView ? "Home" : "GPT Search"}</button>
          {
            gptView && <LanguageSelect />
          }
          <div className='px-4 flex items-center justify-center gap-2 text-white group relative'>
            <img src={PROFILE_ICON} alt="user icon"  className='rounded-md h-8 w-8'/>
            <p className='hidden sm:block'><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg></p>

            <div className='absolute top-8 w-60 right-4 p-2 text-white hidden group-hover:block'>
              <ul className='bg-black w-full flex flex-col items-start justify-center gap-4 p-4 rounded-lg'>
                <li className='flex gap-2 items-center'>
                  <img src={PROFILE_ICON} alt="user icon"  className='rounded-md h-10 w-10'/>
                  {user?.displayName}
                </li>
                <li>
                  <button className='flex items-center justify-start gap-2 hover:underline'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                    Manage profile
                  </button>
                </li>
                <li>
                  <button className='flex items-center justify-start gap-2 hover:underline'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-scan"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" /></svg>
                    Transfer profile
                  </button>
                </li>
                <li>
                  <button className='flex items-center justify-start gap-2 hover:underline'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    Account
                  </button>
                </li>
                <li>
                  <button className='flex items-center justify-start gap-2 hover:underline'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 17l0 .01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" /></svg>
                    Help Center
                  </button>
                </li>
                <li className='w-full'>
                  <button onClick={(e) => handleSignOut(e)} className='border-t border-gray-500 pt-3 hover:underline text-center w-full'>Sign Out</button>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      }
    </div>
  )
}

export default Header