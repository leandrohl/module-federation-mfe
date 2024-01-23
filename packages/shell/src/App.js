import React, { Suspense } from 'react';
import { Router } from 'react-router-dom'

export default function App () {
  return (
      <div>
        <ul>
          <li> <a href='/home'> Home </a> </li>
          <li> <a href='/login'> Login </a> </li>
        </ul>
      </div>
  )
}