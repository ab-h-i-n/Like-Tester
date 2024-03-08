import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import LikeContainer from './components/LikeContainer';
import { Toaster, toast } from 'sonner'

function App() {

  const [likeCount, setLikeCount] = useState(0);

  const likeBtn = useRef();
  const disLikeBtn = useRef();

  useEffect(() => {
    toast.info('Welcome to test page')
  }, [])

  useEffect(() => {

    if (likeCount > 10) {

      toast.warning('Maximum likes reached!')
      setLikeCount(10);

    } else if (likeCount < 0) {

      toast.warning('Minimum likes reached!')
      setLikeCount(0);

    }

  }, [likeCount])

  const like = () => {

    if (likeCount <= 10) {

      setLikeCount(likeCount + 1);

      if (likeCount < 10) {
        toast.success("Thanks for the like!")
      }
    }

  }

  const disLike = () => {

    if (likeCount >= 0) {

      setLikeCount(likeCount - 1);

      if (likeCount > 0) {
        toast.error("Dont dislike please!")
      }
    }
  }


  return (
    <div className='App min-h-screen bg-slate-900 '>

      <Toaster richColors />

      <div className='fixed w-full'><Header /></div>

      <div className='py-24 flex items-center justify-center min-h-screen '>

        <div className="flex flex-col items-center gap-y-10">

          <p className='text-indigo-400 font-black text-4xl'>Likes : {likeCount}</p>

          {/* like and unlike  */}

          <div className='flex items-center justify-center gap-x-10 p-2 '>

            <button ref={likeBtn} onClick={() => like()}><LikeContainer icon={"like"} /></button>

            <button ref={disLikeBtn} onClick={() => disLike()} ><LikeContainer icon={"unlike"} /></button>

          </div>

          {/* rest button */}

            <button onClick={() => {
              setLikeCount(0)
              toast.info("Likes Reseted!")
            }} className='relative button-effect py-2 px-10  border-2 transition-all border-green-600 text-green-600 hover:text-white rounded font-medium lg:py-5 lg:px-16 lg:text-2xl'>
              Reset
              <div className=" bg-green-600 w-full py-2 px-10 lg:py-5 lg:px-16 lg:text-2xl absolute bottom-0 top-0 left-0 z-[0] text-white">Reset</div>
            </button>

        </div>

      </div>
    </div>
  );
}

export default App;
