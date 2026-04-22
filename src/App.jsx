import { useState } from 'react'
import barras from './assets/barras.png'
import engrena from './assets/engrena.png'
import robo from './assets/robo.png'
import seta from './assets/seta.png'
import balao from './assets/balao.png'
import imagem from './assets/imagem.png'
import './App.css'

export default function App() {
  

  return (
    <>
      <main>
        <button className='botao1'><img className='img1'src={barras} alt="barras" /></button>
        <button className='botao2'><img className='img2'src={engrena} alt="engrena" /></button>
        <p>Hi user,</p>
        <h1>let's see what can I do for you</h1>
        <section className='s1'>
          <p className='p2'>voice helper</p>
          <img className='img3'src={robo} alt="robo" />
          <p className='p3'>let's find new things using voice record</p>
          <button className='botao4'>Start recording</button>
        </section>
        <section className='s2'> <img className='img6'src={balao} alt="balao" /> <p className='p5'>start new chat</p> <img className='img4'src={seta} alt="seta" /></section>
        <section className='s3'> <img className='img7'src={imagem} alt="imagem" /> <p className='p6'>search by image</p> <img className='img5'src={seta} alt="seta" /></section>
        <p className='p4'>Recently Search</p>
        <section className='s4'><h1 className='h2'>Look for 5 potential headlines for websites with fintech themes</h1> <img className='img8'src={seta} alt="seta" />  </section>
        <section className='s5'><h1 className='h3'>find the python code to create a 10-fold branch</h1> <img className='img9'src={seta} alt="seta" /> </section>
      </main>
    </>
  )
}


