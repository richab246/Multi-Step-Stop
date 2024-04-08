import React from 'react'
import Describes from '../component/Describes'
import { Learning, World, Refresh, Goal, Eyes } from '../assets';
import Progressbar from '../component/Progressbar';

const InterestsMost = () => {

  const list = [
    {
        icon: Learning,
        type: 'Learning specific skills to advance my career',
        title: ' '
    },
    {
        icon: World,
        type: "Exploring new topics I'm interested in",
        title: ' '
    },
    {
        icon: Refresh,
        type: 'Refreshing my maths foundations',
        title: ' '
    },
    {
        icon: Goal,
        type: 'Exercising my brain to stay sharp',
        title: ' '
    },
    {
        icon: Eyes,
        type: 'Something else',
        title: ' '
    }
  ]

  return (
    <>
     <Progressbar filled="20" back={true}/>
     <Describes 
       title="Which are you most interested in?" 
       subTitle="Choose just one. This will help us get you started (but won't limit your experience)" 
       list={list} 
       route={'/rightplace'}
       /> 
      </>
  )
}

export default InterestsMost;
