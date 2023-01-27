import Head from 'next/head'
import Image from 'next/image'
import { CookiesProvider,useCookies } from 'react-cookie'
import Link from 'next/link'
import FixedBottomNavigation from './bottomNavFixed'
import EmblaCarousel from '../components/sumCarousel'
import Router, { useRouter } from "next/router";
import tr from '../image/travel.png'
import re from '../image/reports.png'
import ex from '../image/exhibit.png'
import sp from '../image/spa.png'
import he from '../image/health.png'
import ed from '../image/edu.png'
import cr from '../image/craft.png'
import un from '../image/unique.png'
import cat0 from '../image/cate0.png'
import cat1 from '../image/cate1.png'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Category() {
    const [cookie, setCookie] = useCookies(['id']);
  return (
    <div>
      <div style = {{paddingTop: "9px", paddingBottom: "9px"}}><a className = "categoryName"> 모아보기 </a></div>
      
      <div style = {{borderStyle: "solid", color: "#CFCFCF", borderWidth: "1px"}}></div>

      <div className = "sandbox">
        <section className = "sandbox__carousel">
        <EmblaCarousel slides = {SLIDES} options = {OPTIONS} />
        </section>
      </div>
    
      <div className = "button">
        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/travel")}>
          <Image
            src = {tr}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 여행
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/reports")}>
          <Image
            src = {re}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 레포츠
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {ex}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 전시
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {sp}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 스파
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {he}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 건강
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {ed}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 교육
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {cr}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 공예
        </button>

        <button style = {{
          width: "80px",
          height: "80px",
          padding: "7px",
          marginBottom: "10px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          aligntContent: "center",
          fontFamily: "Pretendard",
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "1rem"
          }} onClick={() => Router.push("/demoCate")}>
          <Image
            src = {un}
            width = "50"
            height = "35"
            marginBottom = "5px"/> 이색체험
        </button>
      </div>
      
      <div style = {{borderStyle: "solid", color: "#EBEBEB", borderWidth: "7px", marginTop: "5px"}}></div>

      <div style = {{paddingTop: "9px", paddingBottom: "9px", marginTop: "5px"}}><a className = "categoryName"> 요즘 뜨는 </a></div>
      
      <div style ={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }} onClick={() => Router.push("/demoEnd")}>
        <div style = {{
          marginBottom: "10px",
          borderRadius: "1.5rem",
          overflow: "hidden"}} href = '/demoEnd'>
            <Image width = "100vw" height = "40vh" src = {cat0} />
          </div>

        <div style = {{
          borderRadius: "1.5rem",
          overflow: "hidden"
          }} onClick={() => Router.push("/demoEnd")}>
            <Image width = "100vw" height = "40vh" src = {cat1} />
        </div>
      </div>

      <div>
        <FixedBottomNavigation />
      </div>
    </div>
  )
}
