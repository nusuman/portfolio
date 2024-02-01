const data = {
  skill: [
    {
      name: "HTML5",
      type: "frontEnd",
      ment: [
        "시멘틱 태그를 작성하여 웹 페이지의 구조를 잡고 용도를 명확하게 표현 가능.",
        "폼 태그를 이용하여 로그인, 회원가입 기능 작성 가능.",
      ],
      src: ["./images/html.png"],
      color: ["orange"],
    },
    {
      name: "CSS3",
      type: "frontEnd",
      ment: [
        "KEYFRAME을 이용하여 애니메이션 효과 구현 가능.",
        "HTML 태그 스타일링 및 미디어 쿼리를 이용한 반응형 사이트 구현 가능.",
      ],
      src: ["./images/css.png"],
      color: ["skyblue"],
    },
    {
      name: "JAVASCRIPT",
      type: "frontEnd",
      ment: [
        "ES6문법을 사용하여 웹사이트 제작 가능.",
        "JS로 이벤트 제작/제어 및 DOM을 제어하여 다양한 동적 기능 부여 가능.",
        "JS기반 라이브러리 및 플러그인 사용 가능.",
      ],
      src: ["./images/js.png"],
      color: ["yellow"],
    },
    {
      name: "JQUERY",
      type: "frontEnd",
      ment: [
        "JQUERY를 사용하여 이벤트 제작/제어 가능.",
        "JQUERY의 플러그인을 사용하여 스크롤 및 애니메이션 제작 가능.",
      ],
      src: ["./images/jquery.png"],
      color: ["skyblue"],
    },
    {
      name: "SASS/SCSS",
      type: "frontEnd",
      ment: [
        "CSS전처리기인 SCSS를 활용하여 CSS문법을 보다 가독성 있게 작성 가능.",
        "SCSS에서 제공하는 기본적인 함수 문법 사용 가능.",
      ],
      src: ["./images/sass.png"],
      color: ["pink"],
    },
    {
      name: "STYLED-COMPONENTS",
      type: "frontEnd",
      ment: [
        "스타일드 컴포넌트를 이용하여 전역 스타일링 가능.",
        "PROPS를 이용하여 동적 스타일링 가능.",
      ],
      src: ["./images/styled_component.png"],
      color: ["pink"],
    },
    {
      name: "REACT",
      type: "frontEnd",
      ment: [
        "HOOKS을 이용하여 다양한 상태 관리 가능. (함수형 컴포넌트 작성 가능)",
        "STYLED COMPOMENTS 사용 가능",
        "REAFT-ROUTER-DOM을 사용하여 라우팅 가능.",
        "REDUX TOOL KIT을 이용하여 전역 상태 관리 가능.",
      ],
      src: ["./images/react.png"],
      color: ["skyblue"],
    },
    {
      name: "VITE",
      type: "frontEnd",
      ment: [
        "VITE 번들러를 이용하여 SPA 제작 가능.",
        "VITE의 각종 편의 기능 사용 가능.",
      ],
      src: ["./images/vite.png"],
      color: ["#8a2be2"],
    },
    {
      name: "AXIOS",
      type: "frontEnd",
      ment: ["axios를 이용하여 api 호출 가능."],
      src: ["./images/axios.png"],
      color: ["#8b00ff"],
    },
    {
      name: "BOOTSTRAP(REACT)",
      type: "frontEnd",
      ment: ["REACT와 연계 하여 레이아웃 작성 가능."],
      src: ["./images/bootstrap.png"],
      color: ["purple"],
    },
    {
      name: "PARCEL BUNDLER",
      type: "frontEnd",
      ment: ["PARCEL BUNDLER를 이용하여 모듈들을 번들, 정적 파일로 변환 가능."],
      src: ["./images/parcel_bundler.png"],
      color: ["burlywood"],
    },
    {
      name: "FIGMA",
      type: "tools",
      ment: [
        "FIGMA를 이용하여 프로토타입/시안 작성 가능.",
        "FIGMA를 이용하여 레이아웃 작성 가능.",
      ],
      src: ["./images/figma.png"],
      color: ["purple"],
    },
    {
      name: "ADOBE XD",
      type: "tools",
      ment: [
        "ADOBE XD를 이용하여 프로토타입/시안 작성 가능.",
        "ADOBE XD를 이용하여 레이아웃 작성 가능.",
      ],
      src: ["./images/adobe_xd.png"],
      color: ["purple"],
    },
    {
      name: "PHOTOSHOP",
      type: "tools",
      ment: ["PHOTOSHOP을 이용하여 사진/GIF 편집 및 제작 가능."],
      src: ["./images/ps.png"],
      color: ["skyblue"],
    },
    {
      name: "GIT",
      type: "vesionControl",
      ment: [
        "형상관리도구(버전관리도구)인 GIT을 이용하여 GITHUB와 연동 가능.",
        "GIT의 각종 명령어 사용 가능. GIT BRANCHE 사용 가능.",
      ],
      src: ["./images/git.png"],
      color: ["orange"],
    },
    {
      name: "GITHUB",
      type: "vesionControl",
      ment: [
        "GITHUB 레퍼지토리 작성하여 로컬 레퍼지토리와 연결 가능.",
        "이슈와 PULL REQUEST를 이용하여 팀원들과 협업 가능.",
        "GITHUB를 이용하여 사이트 DEPLOY(배포) 가능.",
      ],
      src: ["./images/github.png"],
      color: ["white"],
    },
  ],

  //페이지를 하나의 객체로 생각하고
  //데이터를 구성해보자.
  //탭 메뉴는 배열 렝쓰에 맞게 생성이 되게 구현하자.
  //탭 메뉴를 클릭할시 해당 밸류값을 받아와서 객체 타입과 일치하는지 판단 -> 리스트를 뽑아내자.
  page: [
    {
      projectName: "PICKET",
      menuKind: [
        "ALL",
        "HOME",
        "BROWSE",
        "PROFILE",
        "BUCKET DETAIL",
        "ADDBUCKET",
        "SIGN IN",
        "SIGN UP",
        "PWRESEARCH",
        "SEARCH",
      ],
      etcKind: [
        "COMMON COMPONENTS",
        "THEME",
        "COMMON HOOKS",
        "STORE",
        "SLICES",
        "ROUTER",
        "UTILS",
      ],
      hoverColor: ["FFBF00"],
      iconSrc: ["./images/picket.png"],
      iframeStyle: [
        "width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;",
      ],
      sandBoxValue: ["allow-scripts allow-same-origin"],
      pageInfo: [
        {
          type: "ALL",
          makePeriod: "2023-12-05 ~ 2024-01-20",
          makeSkill: [
            "<span class=accent>REACT</span>",
            "<span class=accent> VITE</span>",
            "<span class=accent> AXIOS</span>",
            "<span class=accent> REACT-QUERY</span>",
            "<span class=accent> STYLED-COMPONENTS</span>",
            "<span class=accent> SCSS</span>",
            "<span class=accent> REACT-ROUTER-DOM</span>",
            "<span class=accent> REDUX-TOOL-KIT</span>",
          ],
          setting: ["REACT-VITE"],
          people: [
            "기획: 6인, 제작: <span class = accent>BE(1인)</span>, <span class = accent>FE(2인 -> 1인)</span>",
          ],
          videoSrc: ["./images/calhartt_react_thumnail.jpg"],
        },
        {
          type: "HOME",
          pageContents: ["무한 스크롤", "작성한 버킷 관람", "버킷 상세보기"],
          episode: [
            "홈 화면에서는 <span class = accent>자기가 작성한 버킷</span>을 관람 할 수 있고 버킷을 <span class = accent>수정/삭제/달성</span> 할 수 있습니다. <br /> 또한 작성한 버킷이 없을 떄는 버튼을 클릭하여 버킷 작성 페이지로 이동 할 수 있습니다. <br /> 데이터를 한번에 받아오면 장기적으로 성능이 저하되어 사용자 경험에 좋지 않다고 판단하여  <span class = accent>무한 스크롤 방식</span>을 채택하게 되었습니다",
          ],
          videoSrc: ["./videos/picket/home.mp4"],
          codeInfo: [
            {
              codeName: "useMyPage.JS",
              themeColor: "yellow",
              codeType: "HOME",
              src: ["https://carbon.now.sh/embed/WfGWchEkESlkVTPnDIV5"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "HOME",
              src: ["https://carbon.now.sh/embed/lwAIycCXfC8QM4R4zWSk"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "HOME",
              src: ["https://carbon.now.sh/embed/CnqV1o3XA3XQ3EUhgZCt"],
            },
          ],
        },
        {
          type: "BROWSE",
          pageContents: [
            "무한 스크롤",
            "카테고리 분류",
            "간편 좋아요 및 스크랩",
            "버킷 상세보기",
          ],
          episode: [
            "탐색 페이지는 내가 작성한 버킷과 다른 이용자가 작성한 버킷이 공개되는 페이지입니다. <br />따라서 데이터를 한번에 받아오는것은 성능에 지대한 문제가 있다고 판단하여 <span class = accent>무한 스크롤 방식</span>을 채택 하였습니다.<br /> 또한 이용자가 보다 쉽게 버킷을 찾을 수 있게 카테고리 별 분류 기능을 넣었습니다. <br />그리고 <span class = accent>좋아요</span>와 <span class = accent>스크랩</span> 간편 클릭 기능을 추가하여 이용자가 보다 편하게 상호 작용을 할 수 있게 만들었습니다.",
          ],
          videoSrc: ["./videos/picket/browse.mp4"],
          codeInfo: [
            {
              codeName: "useBrowseGetItem.JS",
              themeColor: "yellow",
              codeType: "BROWSE",
              src: ["https://carbon.now.sh/embed/18xMJ1zXzE1UprwkUKg7"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "BROWSE",
              src: ["https://carbon.now.sh/embed/certCOIDraZsObtH7DPS"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "BROWSE",
              src: ["https://carbon.now.sh/embed/89QHyZUK8M5nAHFBxyot"],
            },
          ],
        },
        {
          type: "PROFILE",
          pageContents: [
            "무한 스크롤",
            "달성한 버킷 갯수 확인 기능",
            "프로필 수정 기능",
          ],
          episode: [
            /* <span class = accent> */
            "프로필 페이지는 나의 버킷 밑 내가 스크랩한 버킷을 확인 할 수 있는 페이지 입니다. <br /> 그에 맞게 <span class = accent>무한 스크롤 방식</span> 을 채택 하였으며 나의 버킷 한정으로 <span class = accent>버킷 수정/삭제/달성</span>을 할 수 있고 <br /> <span class = accent>프로필 수정</span>도 할 수 있습니다.",
          ],
          videoSrc: ["./videos/picket/profile.mp4"],
          codeInfo: [
            {
              codeName: "useMyProfile.JS",
              themeColor: "yellow",
              codeType: "PROFILE",
              src: ["https://carbon.now.sh/embed/36dxYVtDdkY5fmWQ8PkT"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "PROFILE",
              src: ["https://carbon.now.sh/embed/lyj1g6rSOq0TbgHWkJBj"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "PROFILE",
              src: ["https://carbon.now.sh/embed/c229zUofs7EuaRYrZE3B"],
            },
          ],
        },
        {
          type: "BUCKET DETAIL",
          pageContents: [
            "좋아요 및 스크랩 기능",
            "댓글 달기/삭제 기능",
            "홈 화면 한정 버킷 수정/삭제/달성 기능",
          ],
          episode: [
            /* <span class = accent></span> */
            "썸네일 버킷을 클릭 했을 시 나오며 인스타그램의 CARD형식의 디자인을 채택 했습니다. <br /> 디테일 버킷에서는 <span class = accent>댓글을 확인 밑 작성</span> 할 수 있으며 <span class = accent>댓글 삭제</span> 또한 할 수 있습니다. 그리고 <span class = accent>홈 화면 한정</span>으로 <span class = accent>버킷 수정/달성/삭제</span>도 할 수 있습니다. <br/ ><span class = accent>좋아요/스크랩/댓글작성</span> 등 이용자들이 컨텐츠를 자유롭게 상호 작용 할 수 있도록 꾸며 봤습니다.",
          ],
          videoSrc: ["./videos/picket/detail_bucket.mp4"],
          codeInfo: [
            {
              codeName: "useBucketOpitons.JS",
              themeColor: "yellow",
              codeType: "BUCKET DETAIL",
              src: ["https://carbon.now.sh/embed/Z6czvczDpXW5ruL3TSc3"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "BUCKET DETAIL",
              src: ["https://carbon.now.sh/embed/BuGRRsAXCKFggX7X8EEP"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "BUCKET DETAIL",
              src: ["https://carbon.now.sh/embed/9Nr31P1rKQXKC998KYLI"],
            },
          ],
        },
        {
          type: "ADDBUCKET",
          pageContents: ["이미지 업로드 기능", "달력 기능"],
          episode: [
            /* <span class = accent> */
            "버킷 작성 페이지에서는 이미지와 나의 버킷의 종류를 선택하고 달력을 통해 DDAY를 설정하여 버킷을 작성 할 수 있습니다 <br /> 달력 기능은 <span class = accent>REACT-CALANDER</span> 라이브러리를 사용 했습니다.",
          ],
          videoSrc: ["./videos/picket/addbucket.mp4"],
          codeInfo: [
            {
              codeName: "useAddBucket.JS",
              themeColor: "yellow",
              codeType: "ADDBUCKET",
              src: ["https://carbon.now.sh/embed/7pJMAZK36m0aPFeT30t5"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "ADDBUCEKT",
              src: ["https://carbon.now.sh/embed/nKm3Ck6kLbmlxL2uryqD"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "ADDBUCEKT",
              src: ["https://carbon.now.sh/embed/A1K7edPq22dP7FjISLPi"],
            },
          ],
        },
        {
          type: "SIGN IN",
          pageContents: ["로그인 기능"],
          episode: [
            /* <span class = accent> */
            "백엔드 개발자 분과 협력하여 <span class = accent>JWT토큰</span>을 사용하여 로그인 방식을 구현 했습니다. <br /> 로그인을 하면 토큰을 <span class = accent>localStorage</span>에 저장하는 방식을 사용 하였습니다. <br/ > 액세스 토큰의 <span class = accent>유효기간이 지나면 자동으로 token을 reissue</span> 시키는 기능을 만들었습니다.",
          ],
          videoSrc: ["./videos/picket/sign_in.mp4"],
          codeInfo: [
            {
              codeName: "useSignIn.JS",
              themeColor: "yellow",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/FBoWvZ3Ki40Tnh4loI5f"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/NKMJwwHHBSLFa8zpKbOU"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/X3WvxTZcd6eh1LymGUj4"],
            },
          ],
        },
        {
          type: "SIGN UP",
          pageContents: ["회원가입 기능"],
          episode: [
            /* <span class = accent></span> */
            "회원가입 기능 같은 경우는 성능과 비용을 생각하여 프론트 단에서 최대한 검증을 하고 백엔드쪽으로 넘겨주는 방식을 사용 했습니다. <br /> <span class = accent>1단계 -> 2단계</span>로 이루어지는 <span class = accent>단계식 회원가입</span> 이며 각 단계의 조건을 만족 하지 못할 시 무엇을 만족하지 못했는지 표기를 했고 <br /> <span class = accent>조건을 만족</span> 하여야 다음 단계로 넘어 갈 수 있게 구현 했습니다.",
          ],
          videoSrc: ["./videos/picket/sign_up.mp4"],
          codeInfo: [
            {
              codeName: "useSignUp.JS",
              themeColor: "yellow",
              codeType: "SIGN UP",
              src: ["https://carbon.now.sh/embed/owWymZUARfzABa9UGqUu"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "SIGN UP",
              src: ["https://carbon.now.sh/embed/nb6dpoGts139CFXbOk5T"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "SIGN UP",
              src: ["https://carbon.now.sh/embed/SvQHYy6qc2ma8N6P1gI9"],
            },
          ],
        },
        {
          type: "PWRESEARCH",
          pageContents: ["비밀번호 재 설정 기능"],
          episode: [
            /* <span class = accent></span> */
            "비밀번호 찾기를 누를 시 보안을 위해 원래 비밀번호를 알려주는 것이 아닌 <span class = accent>임시 비밀번호</span>를 발급 해주는 형식으로 해당 기능을 구현 했습니다. <br /> 가입 이메일을 입력 하고 요청 시 <span class = accent>해당 메일로</span> 임시 비밀번호가 발송 됩니다.",
          ],
          videoSrc: ["./videos/picket/pwresearch.mp4"],
          codeInfo: [
            {
              codeName: "usePwResearch.JS",
              themeColor: "yellow",
              codeType: "PWRESEARCH",
              src: ["https://carbon.now.sh/embed/hXemEbihcOEoTAlT5T8f"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "PWRESEARCH",
              src: ["https://carbon.now.sh/embed/vnYUithEg8PXROtDNT3I"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "PWRESEARCH",
              src: ["https://carbon.now.sh/embed/gdJ7zWEDDeckufw5aryM"],
            },
          ],
        },

        {
          type: "SEARCH",
          pageContents: ["검색 기능", "최근 검색어 기능", "최근 본 버킷 기능"],
          episode: [
            /* <span class = accent></span> */
            "<span class = accent>검색 키워드</span>를 통하여 버킷을 검색 할 수 있습니다. <br /> 또한 편의성을 위해 검색 했을 시 <span class = accent>해당 키워드</span>가 <span class = accent>최근 검색어에 저장</span>이 되고 <br />해당 검색어를 클릭 했을 시 검색이 가능하도록 하였습니다.<br /> <span class = accent>타인/자기 자신의 버킷</span>을 보았을 경우 <span class = accent>최근 본 버킷리스트</span>에 해당 버킷이 추가 될 수 있게 구현 했습니다. <br /> 이러한 기능등을 통해 이용자들이 조금 더 편하게 버킷을 살펴 볼 수 있도록 하였습니다",
          ],
          videoSrc: ["./videos/picket/search.mp4"],
          codeInfo: [
            {
              codeName: "useNavBarOptions.JS",
              themeColor: "yellow",
              codeType: "SEARCH",
              src: ["https://carbon.now.sh/embed/7N3wOo6QmELWddxxkelZ"],
            },
            {
              codeName: "INDEX.JSX",
              themeColor: "orange",
              codeType: "SEARCH",
              src: ["https://carbon.now.sh/embed/pWAXCDkdftIVvZV0Zc0P"],
            },
            {
              codeName: "STYLE.JS",
              themeColor: "skyblue",
              codeType: "SEARCH",
              src: ["https://carbon.now.sh/embed/udfadkhyKgKLt2iCDeA5"],
            },
          ],
        },
        {
          type: "COMMON COMPONENTS",
          codeInfo: [
            {
              codeName: "LAYOUT.JSX",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/Co9XirnRTg6KFuXXODAN"],
            },
            {
              codeName: "AUTHPAGELAYOUT.JSX",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/bjkwkWDsFLIT4xZkF2kz"],
            },
            {
              codeName: "BUCKETCALANDER/INDEX.JSX",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/wdtfVQUAGyPq775FpexH"],
            },
          ],
        },
        {
          type: "THEME",
          codeInfo: [
            {
              codeName: "THEME.JS",
              themeColor: "yellow",
              codeType: "CONTEXT",
              src: ["https://carbon.now.sh/embed/4HucyN4Vapvf6YT7cEP9"],
            },
            {
              codeName: "GLOBALSTYLE.JSX",
              themeColor: "skyblue",
              codeType: "CONTEXT",
              src: ["https://carbon.now.sh/embed/C19aa3QIvglGPIDDWUpC"],
            },
          ],
        },
        {
          type: "COMMON HOOKS",
          codeInfo: [
            {
              codeName: "useSelectorList.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/3szvRVuDvIvOe6LYOjb9"],
            },
            {
              codeName: "useModalControl.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/5O5c4CDdxRSEztH90ZH4"],
            },
            {
              codeName: "useBucketCreateCommon.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/iFlCyixmRvr9wi9VHOrI"],
            },
          ],
        },
        {
          type: "STORE",
          codeInfo: [
            {
              codeName: "STORE.JS",
              themeColor: "yellow",
              codeType: "CONTEXT",
              src: ["https://carbon.now.sh/embed/rQVWUvVBHfRs65GI6FoJ"],
            },
          ],
        },
        {
          type: "SLICES",
          codeInfo: [
            {
              codeName: "bucketDetailSlice.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/WSyrNJPBGbhiJZe8u8OQ"],
            },
            {
              codeName: "bucketThumnailSlice.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/pYmnMyPU3PytfitWQtYU"],
            },
            {
              codeName: "homeParamaterSlice.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/pGxGIwHTya5bDe53Krc2"],
            },
            {
              codeName: "paramaterSlice.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/P6aiKN0uTWaXe28agIf2"],
            },
            {
              codeName: "modals.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/R0XMyHq3s6pu598W2nvT"],
            },
            {
              codeName: "navBarMenuSlice.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/Ycowa4W8ODwIVADLrTiI"],
            },
          ],
        },
        {
          type: "ROUTER",
          codeInfo: [
            {
              codeName: "ROUTER",
              themeColor: "greenyellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/WNXn2HihgfNxSY0nghEh"],
            },
          ],
        },
        {
          type: "UTILS",
          codeInfo: [
            {
              codeName: "USERAUTHREGEX.JS",
              themeColor: "yellow",
              codeType: "UTILS",
              src: ["https://carbon.now.sh/embed/2zw2af8BspmjeMVgCiXH"],
            },
            {
              codeName: "INDEX.JS(API)",
              themeColor: "yellow",
              codeType: "SERVICES",
              src: ["https://carbon.now.sh/embed/hbiXpLGPWEJTjQt05AVs"],
            },
          ],
        },
      ],
      link: [
        {
          url: "#!",
          ment: "코드 보기",
          className: "code_view_btn",
          blank: false,
        },
        {
          url: "https://picket-fe-deploy.vercel.app/",
          ment: "사이트 보기",
          className: "site_view_btn",
          blank: true,
        },
        {
          url: "https://github.com/neptune588/Picket-FE",
          ment: "GITHUB/README",
          className: "read_me_btn",
          blank: true,
        },
        {
          url: "https://www.figma.com/file/2AvilebO4dsYX0o5jWv2qg/%5B%EC%8A%A4%EC%9C%84%ED%94%84%5D-3%ED%8C%80_%ED%94%BC%ED%82%B7-picket?type=design&node-id=0-1&mode=design&t=bsi9WwRTjJT5lIO3-0",
          ment: "기획서 보기",
          className: "plan_view_btn",
          blank: true,
        },
      ],
    },
    {
      projectName: "CALHARTT WIP",
      menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "SIGN IN/UP", "SEARCH"],
      etcKind: ["DATA"],
      hoverColor: ["FFBF00"],
      iconSrc: ["./images/calhartt_logo.png"],
      iframeStyle: [
        "width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;",
      ],
      sandBoxValue: ["allow-scripts allow-same-origin"],
      pageInfo: [
        {
          type: "ALL",
          makePeriod: "2023-05-01 ~ 2023-06-28",
          makeSkill: [
            "<span class=accent>HTML5</span>",
            "<span class=accent> VANILLA JAVASCRIPT</span>",
            "<span class=accent> SCSS</span>",
          ],
          setting: ["PARCEL-BUNDLER"],
          people: ["기획: 4인, 제작: 1인(개별)"],
          thunmnailSrc: ["./images/calhartt_thumnail.jpg"],
        },
        {
          type: "MAIN",
          pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
          episode: [
            /* <span class="accent"></span> */
            "자바스크립트 실력을 늘리고 싶어서  <span class=accent>바닐라 자바스크립트</span>로 만들어 보자고 계획을 세웠습니다. </br> 박스 슬라이더 부분은 JQUERY로는 어떻게 구현하는지 배웠지만 JS와 차이점이 있어 관련 강의를 찾아 보고 </br> 공부하여 구현한다고 시간이 소요 됐었지만, 생각한대로 구현이 되어 뿌듯 했습니다.",
          ],
          videoSrc: ["./videos/calhartt/calhartt_main_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "MAIN: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/BaX0V8KgtWIXVYQRBk46"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "MAIN: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/Zzr34LvCZEXDD1QUGRjZ"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "MAIN: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/nRrd1Zrd2cwOZhgrnvdy"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "MAIN: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/FcQ0NIuNKGxpcX3AOKQM"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "MAIN: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/fLtUcwV98Amxf28abvfB"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "MAIN: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/41EtNHj91WjcB55DkOgX"],
            },
          ],
        },
        {
          type: "SUB",
          pageContents: ["다중 중첩 상품 필터", "정렬 및 동적 페이지네이션"],
          episode: [
            /* <span class=accent> */
            "<span class=accnet>Math.ceil 메서드</span>를 이용하여 <span class=accnet>배열의 갯수를 나누어</span> 동적 페이지를 구현 하였으며 </br> 중첩 필터의 경우에는 if문으로 구현 할 경우 말도 안되는 경우의 수가 생긴다고 판단하여 <span class=accnet>VALUE, DATA-SET, closest메서드, for반복문 등으로</span> 해당 기능을 구현 하였습니다.</br> 또한 <span class=accnet>페이지네이션 기능</span>을 구현 하였습니다.(앞,뒤,맨 앞,맨 뒤 등)",
          ],
          videoSrc: ["./videos/calhartt/calhartt_sub_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SUB: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/AX5x1be0aMyXYrvjYJXA"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SUB: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/OtLInQNKN5nM5d6iCjqp"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SUB: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/4hLN2zcm4xQChebhuimK"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SUB: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/DQkDO7gURIlwDmdcgZEj"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SUB: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/x0Y0oPw23TuWQsHO2w3e"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SUB: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/dd24Aox8bm09ZIqMf9U3"],
            },
          ],
        },
        {
          type: "DETAIL",
          pageContents: [
            "리스트 작성 및 페이지 네이션",
            "QNA 리스트 작성 및 답변 기능",
          ],
          episode: [
            "리스트 기능에는 작성 갯수에 따른 <span class=accent>페이지 생성</span>과 <span class=accent>삭제 기능</span>, <span class=accent>별점 부여 기능</span> 등이 있으며 <br/> <span class=accent>객체 및 배열</span>을 활용하여 구현 했습니다. QNA는 <span class=accent>질문글이 올라오면</span> 해당 글을 답변 할 수 있게 답변이 달리면 답변 상태가 변화 됩니다.",
          ],
          videoSrc: ["./videos/calhartt/calhartt_detail_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "DETAIL: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/jFzcTNIPQYJ7N3mri8nP"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "DETAIL: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/08KJyllSqjyLwW4HRlP7"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "DETAIL: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/wJYmqDr2by0PlHJ71tAy"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "DETAIL: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/kuYo2BWfxBsZ4ut2Vevx"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "DETAIL: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/YO71UlwD61bkbpvAzOSK"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "DETAIL: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/mqnXwEU8VfgSelk2Bhn1"],
            },
          ],
        },
        {
          type: "SIGN IN/UP",
          pageContents: ["ID/PW찾기 기능", "회원가입 및 로그인 기능"],
          episode: [
            /* <span class=accent> */
            "자바스크립트를 처음으로 사용하여 구현한 페이지입니다. <br /> 회원가입 페이지에서는 각 탭마다 해당되는 조건들을 <span class=accent>반복문, SWITCH CASE, 정규식</span> 등으로 검사 할 수 있게 구현 하였으며",
            "FINDINDEX 메서드를 활용하여 아이디/비밀번호가 같은 정보에 속해있는지 판단했습니다. <br /> 해당 프로젝트를 제작하면서 자바스크립트에 대한 이해도와 실력이 상승된것 같습니다.",
          ],
          videoSrc: ["./videos/calhartt/calhartt_sign_in_n_up_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/VZpNSAsLbG21zfHmBvGX"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/jmMwapGSnnaTIBqoo0Kl"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SIGN IN",
              src: ["https://carbon.now.sh/embed/jceMQ3rLJbpXqwHC60db"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SIGN UP: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/4y1wGquVIYn10Knbpxik"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SIGN UP: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/oqxRXpFgw1Gyx80syRha"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SIGN UP: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/CgAKfw2pmkXYoCzHQeyW"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SIGN UP: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/TdvmdQiqetvmJPs6Wd27"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SIGN UP: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/X92NxlLl5t54sbuG4Wwm"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SIGN UP: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/gFH4896AiXex9kBfpAiM"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "USER DATA RESEARCH",
              src: ["https://carbon.now.sh/embed/2g6KGhyVUPWPmJO4MVV7"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "USER DATA RESEARCH",
              src: ["https://carbon.now.sh/embed/gbVLRuz7tsHK0L5ukrBe"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "USER DATA RESEARCH",
              src: ["https://carbon.now.sh/embed/7xWSCXH55K8g3E1snu5c"],
            },
          ],
        },
        {
          type: "SEARCH",
          pageContents: ["검색 기능"],
          episode: [
            /* <span class=accent> */
            "<span class=accent>filter(), include(), queryString</span> 등을 활용하여 해당 기능을 구현 하였습니다. <br /> <span class=accent>? 앞뒤의 값을 키:밸류의 형태로 받아와</span> filter, includes를 활용하여 해당 기능을 구현 했습니다. <br /> 그리고 검색한 키워드에 맞는 상품이 몇 개 인지 표기 하였습니다.",
          ],
          videoSrc: ["./videos/calhartt/calhartt_search_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SEARCH: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/LWQTAEZ8Ve4hBRGUAbJo"],
            },
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SEARCH: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/0gzmoRe3VIJ77KS89P4n"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SEARCH: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/SKmjCYyEwTjwPl4rQd9Y"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SEARCH: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/x90r9TsIALiat8aLDKBl"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SEARCH: RENEWAL/BEFORE",
              src: ["https://carbon.now.sh/embed/tqdwG6hDlmoPZohhrmXr"],
            },
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "SEARCH: RENEWAL/AFTER",
              src: ["https://carbon.now.sh/embed/y2JC9I3t9id2s5bqz3Xt"],
            },
          ],
        },
        {
          type: "DATA",
          codeInfo: [
            {
              codeName: "JAVASCRIPT",
              themeColor: "yellow",
              codeType: "DATA",
              src: ["https://carbon.now.sh/embed/petTWnYY4sWRsk8X9ooJ"],
            },
          ],
        },
      ],
      link: [
        {
          url: "#!",
          ment: "코드 보기",
          className: "code_view_btn",
          blank: false,
        },
        {
          url: "https://neptune588.github.io/team_project_calhart/",
          ment: "사이트 보기",
          className: "site_view_btn",
          blank: true,
        },
        {
          url: "https://github.com/neptune588/team_project_calhart",
          ment: "GITHUB/README",
          className: "read_me_btn",
          blank: true,
        },
        {
          url: "https://www.figma.com/file/LJuRDXEWygryIhmNkQsmpv/%EC%B9%BC%ED%95%98%ED%8A%B8?type=design&node-id=0-1&mode=design&t=j365Y8F5Z8ShZjeD-0",
          ment: "기획서 보기",
          className: "plan_view_btn",
          blank: true,
        },
        {
          url: "https://miro.com/app/board/uXjVMV6eaxg=/",
          ment: "브레인 스토밍",
          className: "blain_stoming",
          blank: true,
        },
      ],
    },
    {
      projectName: "NETMARBLE",
      menuKind: ["ALL", "MAIN", "SUB"],
      hoverColor: ["yellow"],
      iconSrc: ["./images/netmarble_logo.png"],
      iframeStyle: [
        "width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;",
      ],
      sandBoxValue: ["allow-scripts allow-same-origin"],
      pageInfo: [
        {
          type: "ALL",
          makePeriod: "2023-03-28 ~ 2023-04-28",
          makeSkill: [
            "<span class=accent>HTML5</span>",
            "<span class=accent> JQUERY</span>",
            "<span class=accent> CSS</span>",
          ],
          setting: ["LIVE환경"],
          people: ["기획: 1인, 제작: 1인"],
          thunmnailSrc: ["./images/netmarble_thumnail.jpg"],
        },
        {
          type: "MAIN",
          pageContents: [
            "DATA-SET을 이용한 정렬 기능",
            "SLICK SLIDER를 활용한 박스 슬라이더",
            "반응형",
            "아코디언 메뉴",
            "JQUERY를 활용한 박스 슬라이더",
          ],
          episode: [
            /* <span class=accent> */
            "프론트엔드 과정을 배우면서 <span class=accent>처음으로 진행</span>한 프로젝트 입니다.<br/> 처음 제작했던 프로젝트라, 시행 착오를 정말 많이 겪은 프로젝트 입니다.<br/> MEDIAQUERY를 활용하여 반응형으로 제작 하였으며, <span class=accent>JQUERY</span>를 활용하여 <span class=accent>정렬 및 슬라이더 기능</span>등을 구현 하였습니다.",
          ],
          videoSrc: ["./videos/netmarble/netmarble_main_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/JVZ48cUW6YZzoDyWKmWf"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/Gf0jnNopaxfOj0fY7Z0b"],
            },
            {
              codeName: "JAVASCRIPT/JQUERY",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/sPaRNvqP4oTjkISc0Egy"],
            },
          ],
        },
        {
          type: "SUB",
          pageContents: ["탭 메뉴", "메뉴 더보기 기능"],
          episode: [
            /* <span class=accent> */
            "탭 메뉴 버튼을 통해 해당하는 밸류를 가진 메뉴를 DISPLAY: NONE/BLOCK으로 구현 하였으며 <br/> 모바일, 테블릿, PC버전에서 표기되는 컨텐츠의 갯수가 달라집니다.",
          ],
          videoSrc: ["./videos/netmarble/netmarble_sub_video.mp4"],
          codeInfo: [
            {
              codeName: "HTML",
              themeColor: "orange",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/jrf3ALtlQPW0x6RF1Veh"],
            },
            {
              codeName: "CSS",
              themeColor: "skyblue",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/RCXuHIRrgbMptbkapnRs"],
            },
            {
              codeName: "JAVASCRIPT/JQUERY",
              themeColor: "yellow",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/uxapjEUv6HBJgw1Zvv1F"],
            },
          ],
        },
      ],
      link: [
        {
          url: "#!",
          ment: "코드 보기",
          className: "code_view_btn",
          blank: false,
        },
        {
          url: "https://neptune588.github.io/personal-project-netmable-/",
          ment: "사이트 보기",
          className: "site_view_btn",
          blank: true,
        },
        {
          url: "https://github.com/neptune588/personal-project-netmable-",
          ment: "GITHUB/README",
          className: "read_me_btn",
          blank: true,
        },
        {
          url: "https://www.figma.com/file/mXo226OW9oJm2ijESrqfLG/%EB%84%B7%EB%A7%88%EB%B8%94?type=design&node-id=0-1&mode=design&t=l3U2pxlw4Eg4FA7G-0",
          ment: "기획서 보기",
          className: "plan_view_btn",
          blank: true,
        },
      ],
    },
    {
      projectName: "CALHARTT WIP REACT",
      menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "CART", "SEARCH"],
      etcKind: ["HEADER", "FOOTER", "STORE", "ROUTER", "DATA"],
      hoverColor: ["FFBF00"],
      iconSrc: ["./images/calhartt_react_logo.png"],
      iframeStyle: [
        "width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;",
      ],
      sandBoxValue: ["allow-scripts allow-same-origin"],
      pageInfo: [
        {
          type: "ALL",
          makePeriod: "2023-06-20 ~ 2023-07-04",
          makeSkill: [
            "<span class=accent>REACT</span>",
            "<span class=accent> SCSS</span>",
            "<span class=accent> REACT-ROUTER-DOM</span>",
            "<span class=accent> REDUX-TOOL-KIT</span>",
            "<span class=accent> STYLED-COMPONENTS</span>",
            "<span class=accent> REACT-SWIPER</span>",
          ],
          setting: ["REACT"],
          people: ["기획: 1인, 제작: 1인"],
          thunmnailSrc: ["./images/calhartt_react_thumnail.jpg"],
        },
        {
          type: "MAIN",
          pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
          episode: [
            /* <span class=accent> */
            "처음 리액트를 접했을때는 <span class=accent>기존 제작 환경과 많이 달라</span> 당황 했습니다. <br/> 하지만 <span class=accent>수업 시간</span>에 배운 내용과 <span class=accent>복습</span>을 통해 어느정도 이해하게 되었고 MAP을 적극적으로 활용하여 링크 연결 및 PROPS들을 객체 속성 값에 맞게 동적으로 생성 하였습니다. <br/> JS로 제작했던 박스 슬라이더는 스와이퍼로 교체 하였으며, HOVER EVENT는 <span class=accent>상태 변경</span>을 이용하여 <span class=accent>삼항 연산자</span>로 해당 이벤트를 구현 하였습니다.",
          ],
          videoSrc: ["./videos/calhartt_react/calhartt_react_main_video.mp4"],
          codeInfo: [
            {
              codeName: "VisualMain.JS",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/zzjglhvSa1HFTrBn77uB"],
            },
            {
              codeName: "VisualMain.CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/Y7mVQkrifFd4U5jwhpGb"],
            },
            {
              codeName: "ProductList.JS",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/GpFIW2wJDOEJhjRGugYR"],
            },
            {
              codeName: "ProductList.CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/sR1nH63nDB7QHbf0Uz0z"],
            },
            {
              codeName: "IssueContents.JS",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/ylT1rZIdEZke13Zihr1o"],
            },
            {
              codeName: "IssueContents.CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/ym8G53rzM4KvH50NNDRd"],
            },
            {
              codeName: "MdsPick.JS",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/iQcTtk8luclBGVOZG2W3"],
            },
            {
              codeName: "MdsPick.CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/93k5oINYcQn73xry05Oq"],
            },
            {
              codeName: "InstaGram.JS",
              themeColor: "yellow",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/MMEcRV2FWuVdh4ZYgNVX"],
            },
            {
              codeName: "InstaGram.CSS",
              themeColor: "skyblue",
              codeType: "MAIN",
              src: ["https://carbon.now.sh/embed/fwPdcrAB25NikZbzYFfK"],
            },
          ],
        },
        {
          type: "SUB",
          pageContents: [
            "서브 메뉴에 따른 리스트 동적 생성",
            "장바구니 담기 기능",
            "상태 변경을 이용한 조건부 렌더링",
          ],
          episode: [
            /* <span class=accent> */
            "HEADER 역시 MAP으로 객체 기반 동적 생성을 하였고, 링크 연결을 객체 속성 값으로 연결 <br/> ROUTER를 이용해 해당 서브 페이지로 라우팅을 해준 뒤 <span class=accent>PARAMS를 동적으로 받아와</span> <br/> <span class=accent>Object.keys를 활용</span>해 <span class=accent>JSON데이터 파일</span>과 비교, 일치하는 값을 뿌려 주었습니다. <br/> fetch api로 데이터 요청을 해 상태에 담고, <span class=accent>해당 상태가 변하기 전까지는 다른 컴포넌트가 렌더링<span>이 되는 이른바 조건부 렌더링을 했습니다.",
          ],
          videoSrc: ["./videos/calhartt_react/calhartt_react_sub_video.mp4"],
          codeInfo: [
            {
              codeName: "SubList.JS",
              themeColor: "yellow",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/jK8kaQgJM2Eme1a3ZreK"],
            },
            {
              codeName: "SubList.CSS",
              themeColor: "skyblue",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/2jx3HXyZvtc5vDewyZBA"],
            },
          ],
        },
        {
          type: "DETAIL",
          pageContents: [
            "JSON 데이터 렌더링",
            "리뷰 리스트 작성 및 별점/삭제 기능",
          ],
          episode: [
            /* <span class=accent> */
            "30개의 리스트가 있으며 각 리스트 객체에 담겨있는 정보를 토대로 디테일 페이지에 렌더링을 했습니다. <br/> 또한 <span class=accent>별점 기능</span>은 <span class=accent>반복문</span>과 <span class=accent>useState</span>를 이용한 <span class=accent>객체 속성 값 변화</span>로 구현을 하였습니다.",
          ],
          videoSrc: ["./videos/calhartt_react/calhartt_react_detail_video.mp4"],
          codeInfo: [
            {
              codeName: "DetailList.JS",
              themeColor: "yellow",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/zCOGdGfw3tNUMZlPWtAm"],
            },
            {
              codeName: "DetailList.CSS",
              themeColor: "skyblue",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/7FjE4SnFPSuCJlYu7xRN"],
            },
          ],
        },
        {
          type: "CART",
          pageContents: [
            "총 갯수 및 가격 표시 기능",
            "상품 수량 변경 및 삭제 기능",
          ],
          episode: [
            /* <span class=accent> */
            "리덕스 툴킷의 리듀서즈에 저장된 상태 변화 함수, useDispatch, useSelector를 활용하여 해당 기능들을 구현 하였습니다.",
          ],
          videoSrc: ["./videos/calhartt_react/calhartt_react_cart_video.mp4"],
          codeInfo: [
            {
              codeName: "Cart.JS",
              themeColor: "yellow",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/Cj3OiP1vel5QhU6SCINQ"],
            },
            {
              codeName: "Cart.CSS",
              themeColor: "skyblue",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/CiphEidNSJZZl1sp1JiY"],
            },
          ],
        },
        {
          type: "SEARCH",
          pageContents: ["검색 기능"],
          episode: [
            /* <span class=accent> */
            " <span class=accent>input밸류 값이 바뀔때마다</span> onChange이벤트를 통해 상태 배열에 value가 저장이 되고 엔터 혹은 검색 버튼을 눌렸을시 해당 상태의 값이 링크에 전달 <br/> useParams를 이용하여 해당 값을 받아와 filter, includes를 이용해 검색 기능을 구현 했습니다.",
          ],
          videoSrc: ["./videos/calhartt_react/calhartt_react_search_video.mp4"],
          codeInfo: [
            {
              codeName: "Search.JS",
              themeColor: "yellow",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/oOeeVsWhuA4MCfhAwyjT"],
            },
            {
              codeName: "Search.CSS",
              themeColor: "skyblue",
              codeType: "SUB",
              src: ["https://carbon.now.sh/embed/ldC6pgntnVph5n6wTO16"],
            },
          ],
        },
        {
          type: "HEADER",
          codeInfo: [
            {
              codeName: "Header.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/yBFRGtrwHoj9IT7228i2"],
            },
            {
              codeName: "Header.CSS",
              themeColor: "skyblue",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/V5oRhYPKdoDFbAEJEICz"],
            },
          ],
        },
        {
          type: "FOOTER",
          codeInfo: [
            {
              codeName: "Footer.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/3jGMAFHV7mYRksT5VM1o"],
            },
            {
              codeName: "Footer.CSS",
              themeColor: "skyblue",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/sosg5Q2MV2g2qWyv9Hle"],
            },
          ],
        },
        {
          type: "STORE",
          codeInfo: [
            {
              codeName: "Store.JS",
              themeColor: "yellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/K1N5pm7jsZgLYzQhxoNA"],
            },
          ],
        },
        {
          type: "ROUTER",
          codeInfo: [
            {
              codeName: "ROUTER",
              themeColor: "greenyellow",
              codeType: "COMMON",
              src: ["https://carbon.now.sh/embed/gT4HvmdgbLjW6cVIewEX"],
            },
          ],
        },
        {
          type: "DATA",
          codeInfo: [
            {
              codeName: "JSON",
              themeColor: "yellow",
              codeType: "DATA",
              src: ["https://carbon.now.sh/embed/TfSEU5fGefE9WJSN422k"],
            },
          ],
        },
      ],
      link: [
        {
          url: "#!",
          ment: "코드 보기",
          className: "code_view_btn",
          blank: false,
        },
        {
          url: "https://neptune588.github.io/calhartt_React_Ver/",
          ment: "사이트 보기",
          className: "site_view_btn",
          blank: true,
        },
        {
          url: "https://github.com/neptune588/calhartt_React_Ver",
          ment: "GITHUB/README",
          className: "read_me_btn",
          blank: true,
        },
        {
          url: "https://www.figma.com/file/LJuRDXEWygryIhmNkQsmpv/%EC%B9%BC%ED%95%98%ED%8A%B8?type=design&node-id=0-1&mode=design&t=j365Y8F5Z8ShZjeD-0",
          ment: "기획서 보기",
          className: "plan_view_btn",
          blank: true,
        },
        {
          url: "https://miro.com/app/board/uXjVMV6eaxg=/",
          ment: "브레인 스토밍",
          className: "blain_stoming",
          blank: true,
        },
      ],
    },
  ],
};

export { data };
