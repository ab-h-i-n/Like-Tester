import React from 'react';
import { ReactComponent as LikeBtn } from '../assets/like.svg'
import { ReactComponent as UnLikeBtn } from '../assets/unlike.svg'
import { ReactComponent as LikeBtnOutlined } from '../assets/like_outlined.svg'
import { ReactComponent as UnLikeBtnOutlined } from '../assets/unlike_outlined.svg'
import './LikeContainer.css'
const LikeContainer = ({ icon, count }) => {


  return (

    <div className=' flex flex-col items-center justify-center cursor-pointer'>

      {icon === "like" ? (

        <div className='w-20 h-20 text-indigo-600 btns relative'>
          <LikeBtnOutlined className='add  absolute' />
          <LikeBtn className='remove absolute' />
        </div>

      ) : (

        <div className='w-20 h-20 text-rose-700 btns relative'>
          <UnLikeBtnOutlined className='add  absolute' />
          <UnLikeBtn className='remove absolute' />
        </div>

      )}


    </div>

  );
}

export default LikeContainer;
