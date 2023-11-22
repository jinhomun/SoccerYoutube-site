# 나만의 축구 유튜브 사이트 만들기
- 유튜브 API를 이용해 축구정보를 볼수 있는 사이트를 만들어본다.
평소 축구소식에 대해서 많이 찾아보기때문에 이러한 사이트를 만들어보았다.


## 설치
`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

- `axios`: HTTP 요청을 쉽게 만들고 처리하는 JavaScript 라이브러리로, 브라우저 및 Node.js에서 동작한다..
- `react` : Facebook에서 제작한 사용자 인터페이스를 구축하기 위한 선언적이고 효율적인 JavaScript 라이브러리로, 단일 페이지 애플리케이션 개발에 주로 사용된다..
- `react-dom`: React 애플리케이션에서 가상 DOM을 실제 DOM에 렌더링하는 데 사용되는 라이브러리로, 웹 애플리케이션의 UI를 브라우저에 표시한다.
- `react-helmet-async`: React 애플리케이션에서 헤드 태그의 메타데이터를 동적으로 변경할 수 있게 하는 라이브러리로, SEO 및 웹페이지 공유에 유용한다.
- `react-icon`: 다양한 아이콘을 React 애플리케이션에 쉽게 통합할 수 있게 해주는 라이브러리로, 다양한 아이콘 라이브러리를 지원한다.
- `react-player`: 동영상 및 음악 파일을 재생하기 위한 간단한 React 컴포넌트를 제공하는 라이브러리로, 다양한 미디어 소스를 지원한다.
- `react-router-dom`: React 애플리케이션에서 라우팅을 관리하기 위한 라이브러리로, 다양한 라우팅 및 내비게이션 기능을 제공한다.
- `react-scripts`: Create React App에서 사용되는 스크립트 및 설정을 포함하는 패키지로, React 애플리케이션을 쉽게 시작하고 관리할 수 있도록 도와준다.
- `sass`: CSS의 확장인 SCSS 문법을 지원하는 스타일 시트 언어로, 변수, 중첩, 믹스인 등을 활용하여 스타일을 구조화하고 재사용성을 높일 수 있다.
- `swiper`: 모바일 및 데스크톱에서 동작하는 터치 슬라이드 라이브러리로, 이미지 갤러리, 배너 및 콘텐츠 슬라이드 쇼 등을 만들 수 있다.

### .env 파일
- 유튜브 API 키는 노출되면 안 되기 때문에 .환경변수로 저장해둔다.

### useParams

- useParams는 React Router 라이브러리에서 제공되는 훅 중 하나로, 라우트 매개변수(route parameters)를 가져오기 위해 사용한다. 라우트 매개변수는 동적으로 변하는 부분적인 URL 세그먼트를 나타내며, 주로 경로의 일부를 동적으로 처리해야 할 때 쓴다.

-  useParams를 사용하는 경우는 아래와 같다.
1) 동적인 URL을 가진 라우트
2) 라우트의 ID나 식별자 처리

### useState 

- const { videos, setVideos } = useState([]);
- 돔 구조를 가지기 때문에 이런 형태를 사용한다.

### postman

- Postman은 API 개발을 보다 쉽게 만들어주는 협업 도구 및 개발 환경. Postman은 다양한 API 테스트 및 개발 작업을 지원하며, 주로 다음과 같은 기능을 제공한다.

1) API 테스트
2) API 개발 및 디자인
3) 환경 변수 및 데이터 저장
4) 콜렉션
5) 자동화 및 테스트 스크립트


### api.js

- 매 페이지마자 youtube api를 가져오는 코드를 작성하는 건 상당히 비효율적인 일이다. 

### React Suspense
- Suspense라는 React의 신기술을 사용하면 컴포넌트의 랜더링을 어떤 작업이 끝날 때까지 잠시 중단시키고 다른 컴포넌트를 먼저 랜더링할 수 있습니다.<br>
이 작업이 꼭 어떠한 작업이 되어야 한다는 특별한 제약 사항은 없지만 아무래도 REST API나 GraphQL을 호출하여 네트워크를 통해 비동기로(asynchronously) 데이터를 가져오는 작업을 가장 먼저 떠오르게 됩니다.
<Suspense fallback={<Spinner />}>
  <UserList />
</Suspense>
- https://www.daleseo.com/react-suspense/

### React lazy
-React.lazy() 함수는 코드 분할(Code Splitting)을 구현하기 위한 기능 중 하나입니다. 코드 분할은 애플리케이션의 번들을 작은 조각으로 나누어, 사용자가 실제로 필요할 때 비동기적으로 로드되도록 하는 기술입니다. 이를 통해 초기 로딩 시간을 줄이고 효율적으로 자원을 관리할 수 있습니다.<br>
React.lazy() 함수를 사용하여 동적으로 모듈을 로드할 수 있습니다. 주로 React의 Suspense 컴포넌트와 함께 사용됩니다. 예를 들어, 다음과 같이 사용될 수 있습니다:<br>

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