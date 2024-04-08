import React from 'react'
import Describes from '../component/Describes';
import { Student, Professional, Parent, Lifelong, Teacher, Other } from '../assets';
import Progressbar from '../component/Progressbar';

const DescribesBest = () => {

  const list = [
    {
        icon: Student,
        type: 'Student',
        title: 'or soon to be enrolled'
    },
    {
        icon: Professional,
        type: 'Professional',
        title: 'pursuing a career'
    },
    {
        icon: Parent,
        type: 'Parent',
        title: 'of a school-age child'
    },
    {
        icon: Lifelong,
        type: 'Lifelong learner',
        title: ' '
    },
    {
        icon: Teacher,
        type: 'Teacher',
        title: ' '
    },{
        icon: Other,
        type: 'Other',
        title: ' '
    },
  ]

  return (
     <>
     <Progressbar filled='10' back={false}/>
     <Describes 
      title='Which describes you best?' 
      subTitle='This will help us personalize your experience.' 
      list={list} 
      route={'/interests'}
      /> 
      </>
  )
}

export default DescribesBest
