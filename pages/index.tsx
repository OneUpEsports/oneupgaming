import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from './components/LandingPage/LandingPage'

const Home: NextPage = () => {
  return (
    <LandingPage />
  )
}

export default Home
