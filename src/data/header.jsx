import { MdNewspaper } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";



export const menuText = [
    {
        title: "홈",
        icon: <FaHome />,
        src: "/"
    }, {
        title: "오늘의 축구소식",
        icon: <MdNewspaper />,
        src: "/today"
    }, {
        title: "축구 유튜버 소개",
        icon: <PiSoccerBallFill />,
        src: "/youtuber"
    }
]

export const keywordText = [
    {
        title: "슛포러브",
        src: "/search/슛포러브"
    }, {
        title: "JK아트사커",
        src: "/search/JK아트사커"
    }, {
        title: "리춘수[이천수]",
        src: "/search/리춘수[이천수]"
    }, {
        title: "김진짜 RealKim",
        src: "/search/김진짜 RealKim"
    }, {
        title: "고알레GOALE",
        src: "/search/고알레GOALE"
    }, {
        title: "이스타TV",
        src: "/search/이스타TV"
    }, {
        title: "달수네",
        src: "/search/달수네"
    }, {
        title: "이거해조 원희형",
        src: "/search/이거해조 원희형"
    }, {
        title: "J풋볼",
        src: "/search/J풋볼"
    }, {
        title: "꽁병지티비",
        src: "/search/꽁병지티비"
    }
]


export const snsText = [
    {
        title: "github",
        src: "https://github.com/jinhomun",
        icon: <AiOutlineGithub />
    }, {
        title: "Instagram",
        src: "https://www.instagram.com/jinho_m01/",
        icon: <CiInstagram />
    }, {
        title: "Facebook",
        src: "https://www.facebook.com/profile.php?id=100008125899652&locale=ko_KR",
        icon: <MdFacebook />
    }
]