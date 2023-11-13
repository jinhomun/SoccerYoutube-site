import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thubm">

                </div>
                <div className="today__text">
                    <span className='today'>오늘의 픽!</span>
                    <h3 className='title'>공식전 21골 7도움 ㄷㄷ 재대로 행복 축구 중인 케인! 레반도프스키 기록 따라잡나??</h3>
                    <p className='desc'>
                        안녕하세요! 여러분, 오늘은 축구 유튜버 이스타TV를 소개합니다!
                        이스타TV는 국내축구, 해외축구 소식을 축구팬들에게 빠르게 전달해주며,
                        구독자들에게 정확하고 신속하게 축구이야기를 제공해줍니다.
                    </p>
                    <div className='info'>
                        <span className='author'>이스타TV</span>
                        <span className='data'>2023.11.13</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home