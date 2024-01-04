# 나만의 축구 유튜브 사이트 만들기
### 평소 축구소식에 대해서 많이 찾아보기때문에  유튜브 API를 이용해 축구소식를 볼수 있는 축구 관련 유튜브를 모아둔 축구 유튜브 사이트 입니다.

![youtube-project2](https://github.com/jinhomun/youtube-project/assets/144635699/fd8e230e-c7bf-4447-bc47-7cbdacef767e)



## 설치
```
npm install react-router-dom
npm install axios react-icons
npm install react-player
npm install sass
npm install react-helmet-async
npm install swiper
```

- `axios`: HTTP 요청을 쉽게 만들고 처리하는 JavaScript 라이브러리로, 브라우저 및 Node.js에서 동작한다..
- `react` : Facebook에서 제작한 사용자 인터페이스를 구축하기 위한 선언적이고 효율적인 JavaScript 라이브러리로, 단일 페이지 애플리케이션 개발에 주로 사용된다..
- `react-dom`: React 애플리케이션에서 가상 DOM을 실제 DOM에 렌더링하는 데 사용되는 라이브러리로, 웹 애플리케이션의 UI를 브라우저에 표시한다.
- `react-helmet-async`: React 애플리케이션에서 헤드 태그의 메타데이터를 동적으로 변경할 수 있게 하는 라이브러리로, SEO 및 웹페이지 공유에 유용한다.
- `react-icon`: 다양한 아이콘을 React 애플리케이션에 쉽게 통합할 수 있게 해주는 라이브러리로, 다양한 아이콘 라이브러리를 지원한다.
- `react-player`: 동영상 및 음악 파일을 재생하기 위한 간단한 React 컴포넌트를 제공하는 라이브러리로, 다양한 미디어 소스를 지원한다.
- `react-router-dom`: React 애플리케이션에서 라우팅을 관리하기 위한 라이브러리로, 다양한 라우팅 및 내비게이션 기능을 제공한다.
- `react-scripts`: Create React App에서 사용되는 스크립트 및 설정을 포함하는 패키지로, React 애플리케이션을 쉽게 시작하고 관리할 수 있도록 도와준다.
- `sass`: CSS의 확장인 SCSS 문법을 지원하는 스타일 시트 언어로, 변수, 중첩, 믹스인 등을 활용하여 스타일을 구조화하고 재사용성을 높일 수 있다.
- `async, await`: JavaScript에서 비동기 작업을 쉽게 처리할 수 있게 해주는 구문. 코드의 가독성을 높여 줍니다.
- `swiper`: 모바일 및 데스크톱에서 동작하는 터치 슬라이드 라이브러리로, 이미지 갤러리, 배너 및 콘텐츠 슬라이드 쇼 등을 만들 수 있다.
- `.env`:유튜브 API 키는 노출되면 안 되기 때문에 .환경변수로 저장해둔다.
- `postman`:Postman은 API 개발을 보다 쉽게 만들어주는 협업 도구 및 개발 환경. Postman은 다양한 API 테스트 및 개발 작업을 지원하며, 주로 다음과 같은 기능을 제공한다.

## Stack
  <a href="#"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"></a> <a href="#"><img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white"></a>  <a href="#"><img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=white"></a>  <a href="#"><img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?logo=Postman&logoColor=white"></a>  <a href="#"><img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=CSS3&logoColor=white"></a>  <a href="#"><img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual Studio Code-007ACC?logo=Visual Studio Code&logoColor=white"></a>
  

## 제작순서

1. 페이지 구성: 'Home', 'Today', 'Youtubers' 페이지를 세분화하여 기본적인 웹사이트 구조를 구축했습니다.
2. data.js 작업 및 컴포넌트 세분화: 데이터 관리를 위한 data.js 파일을 작성하고, 컴포넌트 프롭스를 세분화하여 보다 효율적인 데이터 관리와 구조적인 프론트엔드 개발을 진행했습니다.
3. Swiper 및 API 통합: Swiper 라이브러리를 통해 동적인 UI를 구현하고, api.js 파일을 생성하여 YouTube API와의 연동을 구현했습니다. 또한, '더보기' 기능을 추가하여 사용자 경험을 개선했습니다.
4. 채널 페이지 및 영상 API 호출: 채널 페이지를 구성하고, 영상 API를 호출하여 다양한 콘텐츠를 제공했습니다.
5. 검색 기능 및 UI 개선: 검색 기능을 추가하고, 홈페이지에 추천 영상을 통합하여 사용자가 콘텐츠를 쉽게 찾고 탐색할 수 있도록 UI를 개선했습니다.

## React Hook

### useParams
useParams는 React Router 라이브러리에서 제공되는 훅 중 하나로, 라우트 매개변수(route parameters)를 가져오기 위해 사용한다. 라우트 매개변수는 동적으로 변하는 부분적인 URL 세그먼트를 나타내며, 주로 경로의 일부를 동적으로 처리해야 할 때 쓴다.
 useParams를 사용하는 경우는 아래와 같다.
1) 동적인 URL을 가진 라우트
2) 라우트의 ID나 식별자 처리

### useState 
const { videos, setVideos } = useState([]);
돔 구조를 가지기 때문에 이런 형태를 사용한다.

## api.js

매 페이지마다 youtube api를 가져오는 코드를 작성하는 건 상당히 비효율적인 일이다. 
```js
import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '48',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

```

## React Suspense & React lazy
- React Suspense는 비동기적으로 로딩된 컴포넌트가 준비될 때까지 대기하는 데 사용됩니다.   
주로 React.lazy와 함께 사용되어, 동적으로 불러온 컴포넌트가 준비될 때까지 로딩 상태를 처리하는 데 활용됩니다.   
React.Suspense 컴포넌트를 사용하여 특정 영역이나 전체 컴포넌트 트리에 대한 로딩 상태를 처리할 수 있습니다.   
```js
import React, { lazy, Suspense } from 'react';

const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}
```

- React.lazy 함수는 동적으로 컴포넌트를 불러올 때 사용됩니다.   
React.lazy 함수는 동적 import()를 기반으로 하는데, import()는 Promise를 반환하며, 해당 Promise는 비동기적으로 컴포넌트를 가져오는 데 사용됩니다.   
일반적으로, React.lazy는 코드 스플리팅을 통해 큰 번들을 작은 번들로 나누어 불필요한 리소스 로딩을 최소화합니다.
```js
const MyComponent = React.lazy(() => import('./MyComponent'));
```
- React.lazy와 React.Suspense는 주로 대규모 앱에서 번들 크기를 최적화하고 초기 로딩 시간을 최소화하기 위해 사용됩니다.

## 비동기식 데이터 처리
```js
 useEffect(() => {
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            })
        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}&maxResults=10`)
            .then((data) => {
                setVideoComments(data.items);
            });
    }, [videoId])
```
- 비동기식(asynchronous) 작업은 코드의 실행 흐름을 차단하지 않고, 작업이 완료될 때까지 기다리지 않고 계속 다음 코드를 실행할 수 있도록 하는 것을 의미합니다.   
fetchFromAPI로 시작하는 두 개의 API 요청은 비동기적으로 이루어집니다.   
then 메서드를 사용하여 비동기 작업이 완료되면 해당 데이터를 처리하고, 상태를 업데이트하는 등의 작업이 이루어집니다.    
이런 식으로 비동기적인 작업을 처리함으로써 렌더링 중에 브라우저가 차단되지 않고, 사용자 경험이 향상됩니다.  

## 트러블 슈팅
### API 호출 404 에러
- api.js를 통한 API 호출 시 발생한 404 에러를 해결. 문제의 원인은 base_url 끝 경로에 '/'가 추가되어 API URL 호출이 실패한 것이었습니다.
