// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = exports.data = {
  skill: [{
    name: "HTML5",
    type: "frontEnd",
    ment: ["시멘틱 태그를 작성하여 웹 페이지의 구조를 잡고 용도를 명확하게 표현 가능.", "폼 태그를 이용하여 로그인, 회원가입 기능 작성 가능."],
    src: ["./images/html.png"],
    color: ["orange"]
  }, {
    name: "CSS3",
    type: "frontEnd",
    ment: ["KEYFRAME을 이용하여 애니메이션 효과 구현 가능.", "HTML 태그 스타일링 및 미디어 쿼리를 이용한 반응형 사이트 구현 가능."],
    src: ["./images/css.png"],
    color: ["skyblue"]
  }, {
    name: "JAVASCRIPT",
    type: "frontEnd",
    ment: ["ES6문법을 사용하여 웹사이트 제작 가능.", "JS로 이벤트 제작/제어 및 DOM을 제어하여 다양한 동적 기능 부여 가능.", "JS기반 라이브러리 및 플러그인 사용 가능."],
    src: ["./images/js.png"],
    color: ["yellow"]
  }, {
    name: "JQUERY",
    type: "frontEnd",
    ment: ["JQUERY를 사용하여 이벤트 제작/제어 가능.", "JQUERY의 플러그인을 사용하여 스크롤 및 애니메이션 제작 가능."],
    src: ["./images/jquery.png"],
    color: ["skyblue"]
  }, {
    name: "SASS/SCSS",
    type: "frontEnd",
    ment: ["CSS전처리기인 SCSS를 활용하여 CSS문법을 보다 가독성 있게 작성 가능.", "SCSS에서 제공하는 기본적인 함수 문법 사용 가능."],
    src: ["./images/sass.png"],
    color: ["pink"]
  }, {
    name: "STYLED-COMPONENTS",
    type: "frontEnd",
    ment: ["스타일드 컴포넌트를 이용하여 전역 스타일링 가능.", "PROPS를 이용하여 동적 스타일링 가능."],
    src: ["./images/styled_component.png"],
    color: ["pink"]
  }, {
    name: "REACT",
    type: "frontEnd",
    ment: ["HOOKS을 이용하여 다양한 상태 관리 가능. (함수형 컴포넌트 작성 가능)", "STYLED COMPOMENTS 사용 가능", "REAFT-ROUTER-DOM을 사용하여 라우팅 가능.", "REDUX TOOL KIT을 이용하여 전역 상태 관리 가능."],
    src: ["./images/react.png"],
    color: ["skyblue"]
  }, {
    name: "VITE",
    type: "frontEnd",
    ment: ["VITE 번들러를 이용하여 SPA 제작 가능.", "VITE의 각종 편의 기능 사용 가능."],
    src: ["./images/vite.png"],
    color: ["#8a2be2"]
  }, {
    name: "AXIOS",
    type: "frontEnd",
    ment: ["axios를 이용하여 api 호출 가능."],
    src: ["./images/axios.png"],
    color: ["#8b00ff"]
  }, {
    name: "BOOTSTRAP(REACT)",
    type: "frontEnd",
    ment: ["REACT와 연계 하여 레이아웃 작성 가능."],
    src: ["./images/bootstrap.png"],
    color: ["purple"]
  }, {
    name: "PARCEL BUNDLER",
    type: "frontEnd",
    ment: ["PARCEL BUNDLER를 이용하여 모듈들을 번들, 정적 파일로 변환 가능."],
    src: ["./images/parcel_bundler.png"],
    color: ["burlywood"]
  }, {
    name: "FIGMA",
    type: "tools",
    ment: ["FIGMA를 이용하여 프로토타입/시안 작성 가능.", "FIGMA를 이용하여 레이아웃 작성 가능."],
    src: ["./images/figma.png"],
    color: ["purple"]
  }, {
    name: "ADOBE XD",
    type: "tools",
    ment: ["ADOBE XD를 이용하여 프로토타입/시안 작성 가능.", "ADOBE XD를 이용하여 레이아웃 작성 가능."],
    src: ["./images/adobe_xd.png"],
    color: ["purple"]
  }, {
    name: "PHOTOSHOP",
    type: "tools",
    ment: ["PHOTOSHOP을 이용하여 사진/GIF 편집 및 제작 가능."],
    src: ["./images/ps.png"],
    color: ["skyblue"]
  }, {
    name: "GIT",
    type: "vesionControl",
    ment: ["형상관리도구(버전관리도구)인 GIT을 이용하여 GITHUB와 연동 가능.", "GIT의 각종 명령어 사용 가능. GIT BRANCHE 사용 가능."],
    src: ["./images/git.png"],
    color: ["orange"]
  }, {
    name: "GITHUB",
    type: "vesionControl",
    ment: ["GITHUB 레퍼지토리 작성하여 로컬 레퍼지토리와 연결 가능.", "이슈와 PULL REQUEST를 이용하여 팀원들과 협업 가능.", "GITHUB를 이용하여 사이트 DEPLOY(배포) 가능."],
    src: ["./images/github.png"],
    color: ["white"]
  }],
  //페이지를 하나의 객체로 생각하고
  //데이터를 구성해보자.
  //탭 메뉴는 배열 렝쓰에 맞게 생성이 되게 구현하자.
  //탭 메뉴를 클릭할시 해당 밸류값을 받아와서 객체 타입과 일치하는지 판단 -> 리스트를 뽑아내자.
  page: [{
    projectName: "중간이들(중앙대 간호학과 커뮤니티)",
    menuKind: ["All", "Community", "Post Create/Put", "Post Detail", "Post Search", "Admin/Sign In", "Admin/Report History", "Admin/Member Management", "Admin/User Approval", "Admin/Posts&Comments Management"],
    etcKind: ["Apis", "Layouts", "Common Components", "Common Styles", "Theme", "Custom Hooks", "Store", "Slices", "Router", "Utils"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/caugannies.png"],
    iframeStyle: ["width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;"],
    sandBoxValue: ["allow-scripts allow-same-origin"],
    pageInfo: [{
      type: "All",
      makePeriod: "2024-08-19 ~ 2024-10-30",
      makeSkill: ["<span class=accent>React</span>", "<span class=accent>Vite</span>", "<span class=accent>Axios</span>", "<span class=accent>Styled-Components</span>", "<span class=accent>React-Router-Dom</span>", "<span class=accent>React-Hook-Form</span>", "<span class=accent>Redux-Tool-Kit</span>"],
      setting: ["React-Vite"],
      people: ["기획: 2인, 제작: <span class = accent>BE(1인)</span>, <span class = accent>FE(2인)</span>"],
      videoSrc: ["./videos/caugannies/caugannies_total_video.mp4"]
    }, {
      type: "Community",
      pageContents: ["페이지네이션", "페이지 정렬"],
      episode: ["커뮤니티 페이지에서는 작성된 글 목록을 볼 수 있습니다. <br /><span class = accent>페이지네이션</span>기능을 이용하여 각 페이지를 넘길 수 있고, 정렬 기능을 통하여 각 옵션에 맞게 게시글 목록을 <span class = accent>정렬</span> 할 수 있습니다. <br />게시글 작성 밑 상세 보기는 <span class = accent>정회원 상태 일 때</span> 이용 가능하게 구현 했습니다."],
      videoSrc: ["./videos/caugannies/community.mp4"],
      codeInfo: [{
        codeName: "Community(INDEX).JSX",
        themeColor: "orange",
        codeType: "Community",
        src: ["https://carbon.now.sh/embed/4LqtiPwOal2gDWrnRzMr"]
      }, {
        codeName: "Community Post(INDEX).JSX",
        themeColor: "orange",
        codeType: "Community > Community Post",
        src: ["https://carbon.now.sh/embed/feShsJDbgjr8eWTuHzeO"]
      }]
    }, {
      type: "Post Create/Put",
      pageContents: ["파일 업로드/삭제", "이미지 업로드/복사&붙여넣기/삭제", "카카오 API 이용 하여 병원 찾기"],
      episode: ["게시글 작성/수정 페이지는 TinyMCE Editor를 이용하여 <br /><span class = accent>파일 업로드/입력 문자 갯수 체크/이미지 업로드&복사&붙여넣기/파일 삭제</span> 등 기본적으로 게시글을 작성 밑 수정할 때 필수적이라고 생각 되는 기능은 전부 구현하였습니다. <br/> 또한 <span class = accent>카카오 API</span>를 이용하여 <span class = accent>병원 찾기</span> 밑 <span class = accent>지도 띄우기</span> 기능을 구현하였습니다."],
      videoSrc: ["./videos/caugannies/post_create.mp4"],
      codeInfo: [{
        codeName: "Create Community Post(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post",
        src: ["https://carbon.now.sh/embed/AAJIp1gRosyFnRxPMClc"]
      }, {
        codeName: "Post Create Editor(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Post Create Editor",
        src: ["https://carbon.now.sh/embed/ozgugZAhNebCTsdg3KEQ"]
      }, {
        codeName: "Upload File list(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Post Create Editor > Upload File list",
        src: ["https://carbon.now.sh/embed/9A6zOd6GYlT0fhunJMWR"]
      }, {
        codeName: "Hospital Search Modal(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Hospital Search Modal",
        src: ["https://carbon.now.sh/embed/rn4nWO9Fvem8QHCfy3Xb"]
      }, {
        codeName: "Kakao Map(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Hospital Search Modal > Kakao Map",
        src: ["https://carbon.now.sh/embed/cckEj1YTtmMjB6XmzFlh"]
      }, {
        codeName: "Buttons(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Buttons",
        src: ["https://carbon.now.sh/embed/c5eeYdPjMqkw7lAZHsPR"]
      }, {
        codeName: "Category Select Menus(INDEX).JSX",
        themeColor: "orange",
        codeType: "Create Commnunity Post > Category Select Menus",
        src: ["https://carbon.now.sh/embed/SP4VqvwbX5YTCclbUdX1"]
      }]
    }, {
      type: "Post Detail",
      pageContents: ["게시글 좋아요/스크랩", "게시글 수정/삭제/신고", "댓글 작성/수정/삭제/신고", "현재 클릭한 게시글 표시", "페이지네이션"],
      episode: ["게시글 상세보기 페이지는 <span class = accent>상단의 카테고리</span> 밑 <span class = accent>하단의 다른 게시글 목록</span> 등을 통해 게시글 탐색을 좀 더 편하게 할 수 있도록 하였습니다.<br /> 또한 <span class = accent>게시글 좋아요/스크랩/삭제/수정/신고</span> 기능, <span class = accent>댓글 작성/수정/삭제/신고 기능, </span> <span class = accent>댓글</span> 밑 <span class = accent>다른 게시글 목록</span> <span class = accent>페이지네이션</span>을 통해 이용자가 불편함 없이 서비스를 이용할 수 있도록 페이지를 구성 하였습니다."],
      videoSrc: ["./videos/caugannies/post_detail.mp4"],
      codeInfo: [{
        codeName: "Post Detail(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail",
        src: ["https://carbon.now.sh/embed/FbjkZXOqfkZY9WouSL1J"]
      }, {
        codeName: "Attachments(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Post Header > Attachments",
        src: ["https://carbon.now.sh/embed/dUh2Q1YndFBUid4EfldY"]
      }, {
        codeName: "Comment Create(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Comment Create",
        src: ["https://carbon.now.sh/embed/gStCvq705Oozfwmaq0V8"]
      }, {
        codeName: "Post Comment Area(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Post Comment Area",
        src: ["https://carbon.now.sh/embed/TOPNhOftLr9jDMsQUGzn"]
      }, {
        codeName: "Post Comment List(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Post Comment Area > Post Comment List",
        src: ["https://carbon.now.sh/embed/2Yatl7RpE3pgd46aYlmy"]
      }, {
        codeName: "Other Posts(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Other Posts",
        src: ["https://carbon.now.sh/embed/aBbnEJwduxK6RReLENQS"]
      }, {
        codeName: "Other Post List(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Other Posts > Other Post List",
        src: ["https://carbon.now.sh/embed/Yp91jy7VKT2V1BXIyP1J"]
      }, {
        codeName: "Modals(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > Modals",
        src: ["https://carbon.now.sh/embed/Z3PwHIaSnawUdCCuEoi9"]
      }, {
        codeName: "More Popup(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Detail > More Popup",
        src: ["https://carbon.now.sh/embed/J3z2VW7KUiSw0FALJyMF"]
      }]
    }, {
      type: "Post Search",
      pageContents: ["게시글 검색", "디바운스 기능", "게시글 분류 기능", "검색 키워드 표시 기능", "페이지네이션"],
      episode: ["<span class = accent>메인 페이지</span> 밑 상단의 <span class = accent>SEARCH BAR</span>등을 통해 검색을 할 수 있으며, 이용자가 검색한 키워드가 <span class = accent>제목</span>이나 <span class = accent>내용</span>에 포함된 경우, 해당 게시글이 검색 결과에 표시됩니다. <br />왼쪽의 <span class = accent>분류</span> 기능을 통해 각 게시판 종류별로 검색 결과를 볼 수 있으며, <span class = accent>검색 키워드 표시</span> 기능을 통해 한층 더 가독성을 높였습니다."],
      videoSrc: ["./videos/caugannies/post_search.mp4"],
      codeInfo: [{
        codeName: "Post Search(INDEX).JSX",
        themeColor: "orange",
        codeType: "Post Search",
        src: ["https://carbon.now.sh/embed/nUNLBI4e7dMa6aHGj42D"]
      }]
    }, {
      type: "Admin/Sign In",
      pageContents: ["로그인", "로그인 입력 검증"],
      episode: ["관리자 페이지를 이용하기 위해서는 반드시 해당 로그인 페이지를 이용하여 로그인을 해야하며 <span class = accent>REACT-HOOK-FORM</span>을 통해 보다 간편하게 입력 검증과 에러 핸들을 하였습니다."],
      videoSrc: ["./videos/caugannies/admin_sign_in.mp4"],
      codeInfo: [{
        codeName: "Admin Sign In(INDEX).JSX",
        themeColor: "orange",
        codeType: "Admin > Admin Sign In",
        src: ["https://carbon.now.sh/embed/4yyKJVLssVpQvKcARXYs"]
      }]
    }, {
      type: "Admin/Report History",
      pageContents: ["신고된 게시글/댓글 조회 밑 처리, 페이지네이션"],
      episode: ["해당 페이지에서는 신고된 게시글 밑 댓글들을 처리 할 수 있습니다. <br/>또한 리스트를 클릭하여 신고된 게시물들을 상세 조회 할 수 있습니다. "],
      videoSrc: ["./videos/caugannies/admin_report_history.mp4"],
      codeInfo: [{
        codeName: "Report History(INDEX).JSX",
        themeColor: "orange",
        codeType: "Admin > Report History",
        src: ["https://carbon.now.sh/embed/cAKtFPp6tdzmQSHAAWry"]
      }]
    }, {
      type: "Admin/Member Management",
      pageContents: ["회원 정지/탈퇴 기능, 검색 기능, 페이지네이션"],
      episode: ["회원 관리 페이지에서는 <span class = accent>ID, 닉네임</span> 등의 검색 옵션을 함께 제공하여 보다 회원을 <span class = accent>쉽게</span> 찾을 수 있게 하였으며, <br /><span class = accent>정지</span> 또는 <span class = accent>탈퇴</span>를 클릭 할 시 <span class = accent>모달</span>을 띄워 이용자가 어떠한 사유로 정지/탈퇴를 당하였는지 알 수 있도록 구현 하였습니다."],
      videoSrc: ["./videos/caugannies/admin_member_management.mp4"],
      codeInfo: [{
        codeName: "Member Management(INDEX).JSX",
        themeColor: "orange",
        codeType: "Member Management",
        src: ["https://carbon.now.sh/embed/l2b4t0dUUbds4AgJG12z"]
      }]
    }, {
      type: "Admin/User Approval",
      pageContents: ["회원가입 승인/거절 기능, 페이지네이션"],
      episode: [/* <span class = accent></span> */
      "회원가입 승인 페이지에서는 회원가입을  <span class = accent>승인/거절</span> 할 수 있으며 거절 시  <span class = accent>기간 선택 밑 사유</span>를 입력하게 하는 등 <br />관리자가 보다 상세하게 거절 할 수 있도록 기능들을 구현 하였습니다."],
      videoSrc: ["./videos/caugannies/admin_user_approval.mp4"],
      codeInfo: [{
        codeName: "User Approval(INDEX).JSX",
        themeColor: "orange",
        codeType: "User Approval",
        src: ["https://carbon.now.sh/embed/yiE64XJpnY2rwd4i5pw3"]
      }]
    }, {
      type: "Admin/Posts&Comments Management",
      pageContents: ["게시글/댓글 삭제 기능", "게시글/댓글 상세 조회", "검색 기능", "페이지네이션"],
      episode: [/* <span class = accent></span> */
      "게시글/댓글 관리 페이지에서는 관리 편의를 높이기 위해, 삭제 버튼을 누른 후 <span class = accent>원하는 페이지</span>별로 리스트를 선택하여 삭제할 수 있도록 구성했습니다.<br />예를 들어, <span class = accent>1페이지에서 5, 6, 9번 리스트와 2페이지에서 11, 14, 17번 리스트</span>를 선택하여 <span class = accent>총 6개 항목</span>을 일괄 삭제할 수 있습니다. 또한, 리스트를 클릭하면 해당 <span class = accent>게시글이나 댓글</span>의 상세 정보와 <span class = accent>링크</span>가 제공되어, 쉽게 해당 게시글이나 댓글로 이동할 수 있도록 하여 관리 효율성을 높였습니다."],
      videoSrc: ["./videos/caugannies/admin_posts_and_comments_management.mp4"],
      codeInfo: [{
        codeName: "Posts And Comments Management(INDEX).JSX",
        themeColor: "orange",
        codeType: "Posts And Comments Management",
        src: ["https://carbon.now.sh/embed/EL34quxy45CZNgVjYPPV"]
      }]
    }, {
      type: "Apis",
      codeInfo: [{
        codeName: "Axios Instance.JS",
        themeColor: "yellow",
        codeType: "Api > Axios Instance",
        src: ["https://carbon.now.sh/embed/85kMU1RPHrQHEqNA4dVg"]
      }, {
        codeName: "Post Api.JS",
        themeColor: "yellow",
        codeType: "Api > Post Api",
        src: ["https://carbon.now.sh/embed/PmumxQNan1iJ1rOa1XL9"]
      }, {
        codeName: "Comment Api.JS",
        themeColor: "yellow",
        codeType: "Api > Comment Api",
        src: ["https://carbon.now.sh/embed/RJSfwp5KZ6C6FzGaztCF"]
      }, {
        codeName: "Admin Api.JS",
        themeColor: "yellow",
        codeType: "Api > Admin Api",
        src: ["https://carbon.now.sh/embed/xgzJTUw6J3hZNHSMWb0M"]
      }, {
        codeName: "Report Api.JS",
        themeColor: "yellow",
        codeType: "Api > Admin Api",
        src: ["https://carbon.now.sh/embed/x9AIBQOpYCKUFNjXpT6w"]
      }]
    }, {
      type: "Layouts",
      codeInfo: [{
        codeName: "Layouts(INDEX).JSX",
        themeColor: "orange",
        codeType: "Layouts",
        src: ["https://carbon.now.sh/embed/34kp6LYVBDsdxpT7z5du"]
      }, {
        codeName: "Nav Bar(INDEX).JSX",
        themeColor: "orange",
        codeType: "Layouts > Nav Bar",
        src: ["https://carbon.now.sh/embed/SyAmVXztaGMXISzEwi8L"]
      }]
    }, {
      type: "Common Components",
      codeInfo: [{
        codeName: "Pagination(INDEX).JSX",
        themeColor: "orange",
        codeType: "Components > Pagination",
        src: ["https://carbon.now.sh/embed/0D8k0oTVVHuwRnzBRn1a"]
      }, {
        codeName: "Page Number(INDEX).JSX",
        themeColor: "orange",
        codeType: "Components > Pagination > Page Number",
        src: ["https://carbon.now.sh/embed/3mCc945M9PUUqYvkw0kz"]
      }, {
        codeName: "Loading(INDEX).JSX",
        themeColor: "orange",
        codeType: "Components > Loading",
        src: ["https://carbon.now.sh/embed/cxs9nJkTSRaLPCu0LDYO"]
      }, {
        codeName: "Page Category(INDEX).JSX",
        themeColor: "orange",
        codeType: "Components > Page Category",
        src: ["https://carbon.now.sh/embed/26otfvsoTg3SFtdFR2Na"]
      }]
    }, {
      type: "Common Styles",
      codeInfo: [{
        codeName: "Local Text Style.JS",
        themeColor: "yellow",
        codeType: "Styles > Common Style > Local Text Style",
        src: ["https://carbon.now.sh/embed/3JRJ88qsGumlec3KWeom"]
      }, {
        codeName: "Text.JS",
        themeColor: "yellow",
        codeType: "Styles > Common Style > Text",
        src: ["https://carbon.now.sh/embed/f7WXqjvh3uodUJjLrIIN"]
      }, {
        codeName: "Box.JS",
        themeColor: "yellow",
        codeType: "Styles > Common Style > Box",
        src: ["https://carbon.now.sh/embed/Q6tvWU5yTtmXFSVwhNBm"]
      }, {
        codeName: "Etc.JS",
        themeColor: "yellow",
        codeType: "Styles > Common Style > Etc",
        src: ["https://carbon.now.sh/embed/2aFdLxFHOg00mhhvhRra"]
      }]
    }, {
      type: "Theme",
      codeInfo: [{
        codeName: "Theme.JS",
        themeColor: "yellow",
        codeType: "Styles > Theme",
        src: ["https://carbon.now.sh/embed/5LKqWRVQqYoYpG9crphU"]
      }, {
        codeName: "Typography.JS",
        themeColor: "yellow",
        codeType: "Styles > Typography",
        src: ["https://carbon.now.sh/embed/4gLiIL6M6hl4aUxJH24x"]
      }, {
        codeName: "Colors.JS",
        themeColor: "yellow",
        codeType: "Styles > Colors",
        src: ["https://carbon.now.sh/embed/pKfdxAb1zCxa2ldsHuTv"]
      }, {
        codeName: "GlobalStyle.JS",
        themeColor: "yellow",
        codeType: "Styles > GlobalStyle",
        src: ["https://carbon.now.sh/embed/RIH5U9BZB2rk3RL1zSKd"]
      }]
    }, {
      type: "Custom Hooks",
      codeInfo: [{
        codeName: "useFetchAndPaginate.JS",
        themeColor: "yellow",
        codeType: "Hooks > useFetchAndPaginate",
        src: ["https://carbon.now.sh/embed/pimzEOx8NEqIVf9GovsK"]
      }, {
        codeName: "useTinyMceUpload.JS",
        themeColor: "yellow",
        codeType: "Hooks > useTinyMceUpload",
        src: ["https://carbon.now.sh/embed/i8QmDNmFhFKzXc4wLVPy"]
      }, {
        codeName: "useModalsControl.JS",
        themeColor: "yellow",
        codeType: "Hooks > useModalsControl",
        src: ["https://carbon.now.sh/embed/f9EQ2GPgmVPuGcPlB4W0"]
      }, {
        codeName: "usePostSearch.JS",
        themeColor: "yellow",
        codeType: "Hooks > usePostSearch",
        src: ["https://carbon.now.sh/embed/UjS9pA3XhNGVRM9vRGxt"]
      }, {
        codeName: "useSelectorList.JS",
        themeColor: "yellow",
        codeType: "Hooks > useSelectorList",
        src: ["https://carbon.now.sh/embed/h2OFzgPdOSLZR9f8WiWq"]
      }]
    }, {
      type: "Store",
      codeInfo: [{
        codeName: "Store.JS",
        themeColor: "yellow",
        codeType: "Store > Store",
        src: ["https://carbon.now.sh/embed/uVinTpd7rrG2pio5mF6P"]
      }]
    }, {
      type: "Slices",
      codeInfo: [{
        codeName: "Modals Control.JS",
        themeColor: "yellow",
        codeType: "Store > Modals Control",
        src: ["https://carbon.now.sh/embed/nKeQHl4FKS9w4SsY3JUr"]
      }, {
        codeName: "Nav Bar Options.JS",
        themeColor: "yellow",
        codeType: "Store > Nav Bar Options",
        src: ["https://carbon.now.sh/embed/rwmA2OVsn0CRwp9ZJZMc"]
      }, {
        codeName: "Locations.JS",
        themeColor: "yellow",
        codeType: "store > Locations",
        src: ["https://carbon.now.sh/embed/NL1d28ZeswAmuncS4BCq"]
      }]
    }, {
      type: "Router",
      codeInfo: [{
        codeName: "Router.JSX",
        themeColor: "greenyellow",
        codeType: "Routes > Router",
        src: ["https://carbon.now.sh/embed/fcg6qw6ufZNMJUxc94cm"]
      }]
    }, {
      type: "Utils",
      codeInfo: [{
        codeName: "Sweet Alert(INDEX).JS",
        themeColor: "yellow",
        codeType: "Utils > Sweet Alert",
        src: ["https://carbon.now.sh/embed/c5iTWUcnY0Vm7Q74V69D"]
      }, {
        codeName: "Date Formatting(INDEX).JS",
        themeColor: "yellow",
        codeType: "Utils > Date Formatting",
        src: ["https://carbon.now.sh/embed/TRx2XPv1grKP9mifmp5f"]
      }, {
        codeName: "White Space Check(INDEX).JS",
        themeColor: "yellow",
        codeType: "Utils > White Space Check",
        src: ["https://carbon.now.sh/embed/82IbO767uXKhziwGBSjK"]
      }]
    }],
    link: [{
      url: "#!",
      ment: "<span class=accent>코드 보기</span>",
      className: "code_view_btn",
      blank: false
    }, {
      url: "https://www.caugannies.com/",
      ment: "사이트 보기",
      className: "site_view_btn",
      blank: true
    }, {
      url: "https://github.com/Gannies/Gannies_FrontEnd/tree/dev/src",
      ment: "<span class=accent>디렉토리 구조</span>",
      className: "directory_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/Gannies_FrontEnd",
      ment: "GITHUB",
      className: "read_me_btn",
      blank: true
    }, {
      url: "https://github.com/Gannies",
      ment: "GITHUB/TEAM",
      className: "read_me_btn",
      blank: true
    }]
  }, {
    projectName: "PICKET(BE 배포중단)",
    menuKind: ["ALL", "HOME", "BROWSE", "PROFILE", "BUCKET DETAIL", "ADDBUCKET", "SIGN IN", "SIGN UP", "PWRESEARCH", "SEARCH"],
    etcKind: ["COMMON COMPONENTS", "THEME", "COMMON HOOKS", "STORE", "SLICES", "ROUTER", "UTILS"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/picket.png"],
    iframeStyle: ["width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;"],
    sandBoxValue: ["allow-scripts allow-same-origin"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-12-05 ~ 2024-01-20",
      makeSkill: ["<span class=accent>REACT</span>", "<span class=accent> VITE</span>", "<span class=accent> AXIOS</span>", "<span class=accent> REACT-QUERY</span>", "<span class=accent> STYLED-COMPONENTS</span>", "<span class=accent> SCSS</span>", "<span class=accent> REACT-ROUTER-DOM</span>", "<span class=accent> REDUX-TOOL-KIT</span>"],
      setting: ["REACT-VITE"],
      people: ["기획: 6인, 제작: <span class = accent>BE(1인)</span>, <span class = accent>FE(2인 -> 1인)</span>"],
      videoSrc: ["./videos/picket/total_videos.mp4"]
    }, {
      type: "HOME",
      pageContents: ["무한 스크롤", "작성한 버킷 관람", "버킷 상세보기"],
      episode: ["홈 화면에서는 <span class = accent>자기가 작성한 버킷</span>을 관람 할 수 있고 버킷을 <span class = accent>수정/삭제/달성</span> 할 수 있습니다. <br /> 또한 작성한 버킷이 없을 떄는 버튼을 클릭하여 버킷 작성 페이지로 이동 할 수 있습니다. <br /> 데이터를 한번에 받아오면 장기적으로 성능이 저하되어 사용자 경험에 좋지 않다고 판단하여  <span class = accent>무한 스크롤 방식</span>을 채택하게 되었습니다"],
      videoSrc: ["./videos/picket/home.mp4"],
      codeInfo: [{
        codeName: "useMyPage.JS",
        themeColor: "yellow",
        codeType: "HOME",
        src: ["https://carbon.now.sh/embed/WfGWchEkESlkVTPnDIV5"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "HOME",
        src: ["https://carbon.now.sh/embed/lwAIycCXfC8QM4R4zWSk"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "HOME",
        src: ["https://carbon.now.sh/embed/CnqV1o3XA3XQ3EUhgZCt"]
      }]
    }, {
      type: "BROWSE",
      pageContents: ["무한 스크롤", "카테고리 분류", "간편 좋아요 및 스크랩", "버킷 상세보기"],
      episode: ["탐색 페이지는 내가 작성한 버킷과 다른 이용자가 작성한 버킷이 공개되는 페이지입니다. <br />따라서 데이터를 한번에 받아오는것은 성능에 지대한 문제가 있다고 판단하여 <span class = accent>무한 스크롤 방식</span>을 채택 하였습니다.<br /> 또한 이용자가 보다 쉽게 버킷을 찾을 수 있게 카테고리 별 분류 기능을 넣었습니다. <br />그리고 <span class = accent>좋아요</span>와 <span class = accent>스크랩</span> 간편 클릭 기능을 추가하여 이용자가 보다 편하게 상호 작용을 할 수 있게 만들었습니다."],
      videoSrc: ["./videos/picket/browse.mp4"],
      codeInfo: [{
        codeName: "useBrowseGetItem.JS",
        themeColor: "yellow",
        codeType: "BROWSE",
        src: ["https://carbon.now.sh/embed/18xMJ1zXzE1UprwkUKg7"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "BROWSE",
        src: ["https://carbon.now.sh/embed/certCOIDraZsObtH7DPS"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "BROWSE",
        src: ["https://carbon.now.sh/embed/89QHyZUK8M5nAHFBxyot"]
      }]
    }, {
      type: "PROFILE",
      pageContents: ["무한 스크롤", "달성한 버킷 갯수 확인 기능", "프로필 수정 기능"],
      episode: [/* <span class = accent> */
      "프로필 페이지는 나의 버킷 밑 내가 스크랩한 버킷을 확인 할 수 있는 페이지 입니다. <br /> 그에 맞게 <span class = accent>무한 스크롤 방식</span> 을 채택 하였으며 나의 버킷 한정으로 <span class = accent>버킷 수정/삭제/달성</span>을 할 수 있고 <br /> <span class = accent>프로필 수정</span>도 할 수 있습니다."],
      videoSrc: ["./videos/picket/profile.mp4"],
      codeInfo: [{
        codeName: "useMyProfile.JS",
        themeColor: "yellow",
        codeType: "PROFILE",
        src: ["https://carbon.now.sh/embed/36dxYVtDdkY5fmWQ8PkT"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "PROFILE",
        src: ["https://carbon.now.sh/embed/lyj1g6rSOq0TbgHWkJBj"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "PROFILE",
        src: ["https://carbon.now.sh/embed/c229zUofs7EuaRYrZE3B"]
      }]
    }, {
      type: "BUCKET DETAIL",
      pageContents: ["좋아요 및 스크랩 기능", "댓글 달기/삭제 기능", "홈 화면 한정 버킷 수정/삭제/달성 기능"],
      episode: [/* <span class = accent></span> */
      "썸네일 버킷을 클릭 했을 시 나오며 인스타그램의 CARD형식의 디자인을 채택 했습니다. <br /> 디테일 버킷에서는 <span class = accent>댓글을 확인 밑 작성</span> 할 수 있으며 <span class = accent>댓글 삭제</span> 또한 할 수 있습니다. 그리고 <span class = accent>홈 화면 한정</span>으로 <span class = accent>버킷 수정/달성/삭제</span>도 할 수 있습니다. <br/ ><span class = accent>좋아요/스크랩/댓글작성</span> 등 이용자들이 컨텐츠를 자유롭게 상호 작용 할 수 있도록 꾸며 봤습니다."],
      videoSrc: ["./videos/picket/detail_bucket.mp4"],
      codeInfo: [{
        codeName: "useBucketOpitons.JS",
        themeColor: "yellow",
        codeType: "BUCKET DETAIL",
        src: ["https://carbon.now.sh/embed/Z6czvczDpXW5ruL3TSc3"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "BUCKET DETAIL",
        src: ["https://carbon.now.sh/embed/BuGRRsAXCKFggX7X8EEP"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "BUCKET DETAIL",
        src: ["https://carbon.now.sh/embed/9Nr31P1rKQXKC998KYLI"]
      }]
    }, {
      type: "ADDBUCKET",
      pageContents: ["이미지 업로드 기능", "달력 기능"],
      episode: [/* <span class = accent> */
      "버킷 작성 페이지에서는 이미지와 나의 버킷의 종류를 선택하고 달력을 통해 DDAY를 설정하여 버킷을 작성 할 수 있습니다 <br /> 달력 기능은 <span class = accent>REACT-CALANDER</span> 라이브러리를 사용 했습니다."],
      videoSrc: ["./videos/picket/addbucket.mp4"],
      codeInfo: [{
        codeName: "useAddBucket.JS",
        themeColor: "yellow",
        codeType: "ADDBUCKET",
        src: ["https://carbon.now.sh/embed/7pJMAZK36m0aPFeT30t5"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "ADDBUCEKT",
        src: ["https://carbon.now.sh/embed/nKm3Ck6kLbmlxL2uryqD"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "ADDBUCEKT",
        src: ["https://carbon.now.sh/embed/A1K7edPq22dP7FjISLPi"]
      }]
    }, {
      type: "SIGN IN",
      pageContents: ["로그인 기능"],
      episode: [/* <span class = accent> */
      "백엔드 개발자 분과 협력하여 <span class = accent>JWT토큰</span>을 사용하여 로그인 방식을 구현 했습니다. <br /> 로그인을 하면 토큰을 <span class = accent>localStorage</span>에 저장하는 방식을 사용 하였습니다. <br/ > 액세스 토큰의 <span class = accent>유효기간이 지나면 자동으로 token을 reissue</span> 시키는 기능을 만들었습니다."],
      videoSrc: ["./videos/picket/sign_in.mp4"],
      codeInfo: [{
        codeName: "useSignIn.JS",
        themeColor: "yellow",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/FBoWvZ3Ki40Tnh4loI5f"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/NKMJwwHHBSLFa8zpKbOU"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/X3WvxTZcd6eh1LymGUj4"]
      }]
    }, {
      type: "SIGN UP",
      pageContents: ["회원가입 기능"],
      episode: [/* <span class = accent></span> */
      "회원가입 기능 같은 경우는 성능과 비용을 생각하여 프론트 단에서 최대한 검증을 하고 백엔드쪽으로 넘겨주는 방식을 사용 했습니다. <br /> <span class = accent>1단계 -> 2단계</span>로 이루어지는 <span class = accent>단계식 회원가입</span> 이며 각 단계의 조건을 만족 하지 못할 시 무엇을 만족하지 못했는지 표기를 했고 <br /> <span class = accent>조건을 만족</span> 하여야 다음 단계로 넘어 갈 수 있게 구현 했습니다."],
      videoSrc: ["./videos/picket/sign_up.mp4"],
      codeInfo: [{
        codeName: "useSignUp.JS",
        themeColor: "yellow",
        codeType: "SIGN UP",
        src: ["https://carbon.now.sh/embed/owWymZUARfzABa9UGqUu"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "SIGN UP",
        src: ["https://carbon.now.sh/embed/nb6dpoGts139CFXbOk5T"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "SIGN UP",
        src: ["https://carbon.now.sh/embed/SvQHYy6qc2ma8N6P1gI9"]
      }]
    }, {
      type: "PWRESEARCH",
      pageContents: ["비밀번호 재 설정 기능"],
      episode: [/* <span class = accent></span> */
      "비밀번호 찾기를 누를 시 보안을 위해 원래 비밀번호를 알려주는 것이 아닌 <span class = accent>임시 비밀번호</span>를 발급 해주는 형식으로 해당 기능을 구현 했습니다. <br /> 가입 이메일을 입력 하고 요청 시 <span class = accent>해당 메일로</span> 임시 비밀번호가 발송 됩니다."],
      videoSrc: ["./videos/picket/pwresearch.mp4"],
      codeInfo: [{
        codeName: "usePwResearch.JS",
        themeColor: "yellow",
        codeType: "PWRESEARCH",
        src: ["https://carbon.now.sh/embed/hXemEbihcOEoTAlT5T8f"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "PWRESEARCH",
        src: ["https://carbon.now.sh/embed/vnYUithEg8PXROtDNT3I"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "PWRESEARCH",
        src: ["https://carbon.now.sh/embed/gdJ7zWEDDeckufw5aryM"]
      }]
    }, {
      type: "SEARCH",
      pageContents: ["검색 기능", "최근 검색어 기능", "최근 본 버킷 기능"],
      episode: [/* <span class = accent></span> */
      "<span class = accent>검색 키워드</span>를 통하여 버킷을 검색 할 수 있습니다. <br /> 또한 편의성을 위해 검색 했을 시 <span class = accent>해당 키워드</span>가 <span class = accent>최근 검색어에 저장</span>이 되고 <br />해당 검색어를 클릭 했을 시 검색이 가능하도록 하였습니다.<br /> <span class = accent>타인/자기 자신의 버킷</span>을 보았을 경우 <span class = accent>최근 본 버킷리스트</span>에 해당 버킷이 추가 될 수 있게 구현 했습니다. <br /> 이러한 기능등을 통해 이용자들이 조금 더 편하게 버킷을 살펴 볼 수 있도록 하였습니다"],
      videoSrc: ["./videos/picket/search.mp4"],
      codeInfo: [{
        codeName: "useNavBarOptions.JS",
        themeColor: "yellow",
        codeType: "SEARCH",
        src: ["https://carbon.now.sh/embed/7N3wOo6QmELWddxxkelZ"]
      }, {
        codeName: "INDEX.JSX",
        themeColor: "orange",
        codeType: "SEARCH",
        src: ["https://carbon.now.sh/embed/pWAXCDkdftIVvZV0Zc0P"]
      }, {
        codeName: "STYLE.JS",
        themeColor: "skyblue",
        codeType: "SEARCH",
        src: ["https://carbon.now.sh/embed/udfadkhyKgKLt2iCDeA5"]
      }]
    }, {
      type: "COMMON COMPONENTS",
      codeInfo: [{
        codeName: "LAYOUT.JSX",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/Co9XirnRTg6KFuXXODAN"]
      }, {
        codeName: "AUTHPAGELAYOUT.JSX",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/bjkwkWDsFLIT4xZkF2kz"]
      }, {
        codeName: "BUCKETCALANDER/INDEX.JSX",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/wdtfVQUAGyPq775FpexH"]
      }]
    }, {
      type: "THEME",
      codeInfo: [{
        codeName: "THEME.JS",
        themeColor: "yellow",
        codeType: "CONTEXT",
        src: ["https://carbon.now.sh/embed/4HucyN4Vapvf6YT7cEP9"]
      }, {
        codeName: "GLOBALSTYLE.JSX",
        themeColor: "skyblue",
        codeType: "CONTEXT",
        src: ["https://carbon.now.sh/embed/C19aa3QIvglGPIDDWUpC"]
      }]
    }, {
      type: "COMMON HOOKS",
      codeInfo: [{
        codeName: "useSelectorList.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/3szvRVuDvIvOe6LYOjb9"]
      }, {
        codeName: "useModalControl.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/5O5c4CDdxRSEztH90ZH4"]
      }, {
        codeName: "useBucketCreateCommon.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/iFlCyixmRvr9wi9VHOrI"]
      }]
    }, {
      type: "STORE",
      codeInfo: [{
        codeName: "STORE.JS",
        themeColor: "yellow",
        codeType: "CONTEXT",
        src: ["https://carbon.now.sh/embed/rQVWUvVBHfRs65GI6FoJ"]
      }]
    }, {
      type: "SLICES",
      codeInfo: [{
        codeName: "bucketDetailSlice.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/WSyrNJPBGbhiJZe8u8OQ"]
      }, {
        codeName: "bucketThumnailSlice.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/pYmnMyPU3PytfitWQtYU"]
      }, {
        codeName: "homeParamaterSlice.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/pGxGIwHTya5bDe53Krc2"]
      }, {
        codeName: "paramaterSlice.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/P6aiKN0uTWaXe28agIf2"]
      }, {
        codeName: "modals.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/R0XMyHq3s6pu598W2nvT"]
      }, {
        codeName: "navBarMenuSlice.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/Ycowa4W8ODwIVADLrTiI"]
      }]
    }, {
      type: "ROUTER",
      codeInfo: [{
        codeName: "ROUTER",
        themeColor: "greenyellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/WNXn2HihgfNxSY0nghEh"]
      }]
    }, {
      type: "UTILS",
      codeInfo: [{
        codeName: "USERAUTHREGEX.JS",
        themeColor: "yellow",
        codeType: "UTILS",
        src: ["https://carbon.now.sh/embed/2zw2af8BspmjeMVgCiXH"]
      }, {
        codeName: "INDEX.JS(API)",
        themeColor: "yellow",
        codeType: "SERVICES",
        src: ["https://carbon.now.sh/embed/hbiXpLGPWEJTjQt05AVs"]
      }]
    }],
    link: [{
      url: "#!",
      ment: "<span class=accent>코드 보기</span>",
      className: "code_view_btn",
      blank: false
    }, {
      url: "https://picket-fe-deploy.vercel.app/",
      ment: "사이트 보기",
      className: "site_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/Picket-FE-Deploy/tree/main/src",
      ment: "<span class=accent>디렉토리 구조</span>",
      className: "directory_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/Picket-FE-Deploy",
      ment: "GITHUB/README",
      className: "read_me_btn",
      blank: true
    }, {
      url: "https://www.figma.com/file/2AvilebO4dsYX0o5jWv2qg/%5B%EC%8A%A4%EC%9C%84%ED%94%84%5D-3%ED%8C%80_%ED%94%BC%ED%82%B7-picket?type=design&node-id=0-1&mode=design&t=bsi9WwRTjJT5lIO3-0",
      ment: "기획서 보기",
      className: "plan_view_btn",
      blank: true
    }]
  }, {
    projectName: "CALHARTT WIP",
    menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "SIGN IN/UP", "SEARCH"],
    etcKind: ["DATA"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/calhartt_logo.png"],
    iframeStyle: ["width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;"],
    sandBoxValue: ["allow-scripts allow-same-origin"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-05-01 ~ 2023-06-28",
      makeSkill: ["<span class=accent>HTML5</span>", "<span class=accent> VANILLA JAVASCRIPT</span>", "<span class=accent> SCSS</span>"],
      setting: ["PARCEL-BUNDLER"],
      people: ["기획: 4인, 제작: 1인(개별)"],
      thunmnailSrc: ["./images/calhartt_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
      episode: [/* <span class="accent"></span> */
      "자바스크립트 실력을 늘리고 싶어서  <span class=accent>바닐라 자바스크립트</span>로 만들어 보자고 계획을 세웠습니다. </br> 박스 슬라이더 부분은 JQUERY로는 어떻게 구현하는지 배웠지만 JS와 차이점이 있어 관련 강의를 찾아 보고 </br> 공부하여 구현한다고 시간이 소요 됐었지만, 생각한대로 구현이 되어 뿌듯 했습니다."],
      videoSrc: ["./videos/calhartt/calhartt_main_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "MAIN: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/BaX0V8KgtWIXVYQRBk46"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "MAIN: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/Zzr34LvCZEXDD1QUGRjZ"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "MAIN: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/nRrd1Zrd2cwOZhgrnvdy"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "MAIN: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/FcQ0NIuNKGxpcX3AOKQM"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "MAIN: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/fLtUcwV98Amxf28abvfB"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "MAIN: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/41EtNHj91WjcB55DkOgX"]
      }]
    }, {
      type: "SUB",
      pageContents: ["다중 중첩 상품 필터", "정렬 및 동적 페이지네이션"],
      episode: [/* <span class=accent> */
      "<span class=accnet>Math.ceil 메서드</span>를 이용하여 <span class=accnet>배열의 갯수를 나누어</span> 동적 페이지를 구현 하였으며 </br> 중첩 필터의 경우에는 if문으로 구현 할 경우 말도 안되는 경우의 수가 생긴다고 판단하여 <span class=accnet>VALUE, DATA-SET, closest메서드, for반복문 등으로</span> 해당 기능을 구현 하였습니다.</br> 또한 <span class=accnet>페이지네이션 기능</span>을 구현 하였습니다.(앞,뒤,맨 앞,맨 뒤 등)"],
      videoSrc: ["./videos/calhartt/calhartt_sub_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SUB: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/AX5x1be0aMyXYrvjYJXA"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SUB: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/OtLInQNKN5nM5d6iCjqp"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SUB: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/4hLN2zcm4xQChebhuimK"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SUB: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/DQkDO7gURIlwDmdcgZEj"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SUB: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/x0Y0oPw23TuWQsHO2w3e"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SUB: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/dd24Aox8bm09ZIqMf9U3"]
      }]
    }, {
      type: "DETAIL",
      pageContents: ["리스트 작성 및 페이지 네이션", "QNA 리스트 작성 및 답변 기능"],
      episode: ["리스트 기능에는 작성 갯수에 따른 <span class=accent>페이지 생성</span>과 <span class=accent>삭제 기능</span>, <span class=accent>별점 부여 기능</span> 등이 있으며 <br/> <span class=accent>객체 및 배열</span>을 활용하여 구현 했습니다. QNA는 <span class=accent>질문글이 올라오면</span> 해당 글을 답변 할 수 있게 답변이 달리면 답변 상태가 변화 됩니다."],
      videoSrc: ["./videos/calhartt/calhartt_detail_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "DETAIL: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/jFzcTNIPQYJ7N3mri8nP"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "DETAIL: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/08KJyllSqjyLwW4HRlP7"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "DETAIL: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/wJYmqDr2by0PlHJ71tAy"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "DETAIL: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/kuYo2BWfxBsZ4ut2Vevx"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "DETAIL: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/YO71UlwD61bkbpvAzOSK"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "DETAIL: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/mqnXwEU8VfgSelk2Bhn1"]
      }]
    }, {
      type: "SIGN IN/UP",
      pageContents: ["ID/PW찾기 기능", "회원가입 및 로그인 기능"],
      episode: [/* <span class=accent> */
      "자바스크립트를 처음으로 사용하여 구현한 페이지입니다. <br /> 회원가입 페이지에서는 각 탭마다 해당되는 조건들을 <span class=accent>반복문, SWITCH CASE, 정규식</span> 등으로 검사 할 수 있게 구현 하였으며", "FINDINDEX 메서드를 활용하여 아이디/비밀번호가 같은 정보에 속해있는지 판단했습니다. <br /> 해당 프로젝트를 제작하면서 자바스크립트에 대한 이해도와 실력이 상승된것 같습니다."],
      videoSrc: ["./videos/calhartt/calhartt_sign_in_n_up_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/VZpNSAsLbG21zfHmBvGX"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/jmMwapGSnnaTIBqoo0Kl"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SIGN IN",
        src: ["https://carbon.now.sh/embed/jceMQ3rLJbpXqwHC60db"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SIGN UP: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/4y1wGquVIYn10Knbpxik"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SIGN UP: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/oqxRXpFgw1Gyx80syRha"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SIGN UP: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/CgAKfw2pmkXYoCzHQeyW"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SIGN UP: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/TdvmdQiqetvmJPs6Wd27"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SIGN UP: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/X92NxlLl5t54sbuG4Wwm"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SIGN UP: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/gFH4896AiXex9kBfpAiM"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "USER DATA RESEARCH",
        src: ["https://carbon.now.sh/embed/2g6KGhyVUPWPmJO4MVV7"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "USER DATA RESEARCH",
        src: ["https://carbon.now.sh/embed/gbVLRuz7tsHK0L5ukrBe"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "USER DATA RESEARCH",
        src: ["https://carbon.now.sh/embed/7xWSCXH55K8g3E1snu5c"]
      }]
    }, {
      type: "SEARCH",
      pageContents: ["검색 기능"],
      episode: [/* <span class=accent> */
      "<span class=accent>filter(), include(), queryString</span> 등을 활용하여 해당 기능을 구현 하였습니다. <br /> <span class=accent>? 앞뒤의 값을 키:밸류의 형태로 받아와</span> filter, includes를 활용하여 해당 기능을 구현 했습니다. <br /> 그리고 검색한 키워드에 맞는 상품이 몇 개 인지 표기 하였습니다."],
      videoSrc: ["./videos/calhartt/calhartt_search_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SEARCH: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/LWQTAEZ8Ve4hBRGUAbJo"]
      }, {
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SEARCH: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/0gzmoRe3VIJ77KS89P4n"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SEARCH: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/SKmjCYyEwTjwPl4rQd9Y"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SEARCH: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/x90r9TsIALiat8aLDKBl"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SEARCH: RENEWAL/BEFORE",
        src: ["https://carbon.now.sh/embed/tqdwG6hDlmoPZohhrmXr"]
      }, {
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "SEARCH: RENEWAL/AFTER",
        src: ["https://carbon.now.sh/embed/y2JC9I3t9id2s5bqz3Xt"]
      }]
    }, {
      type: "DATA",
      codeInfo: [{
        codeName: "JAVASCRIPT",
        themeColor: "yellow",
        codeType: "DATA",
        src: ["https://carbon.now.sh/embed/petTWnYY4sWRsk8X9ooJ"]
      }]
    }],
    link: [{
      url: "#!",
      ment: "<span class=accent>코드 보기</span>",
      className: "code_view_btn",
      blank: false
    }, {
      url: "https://neptune588.github.io/team_project_calhart/",
      ment: "사이트 보기",
      className: "site_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/team_project_calhart",
      ment: "GITHUB/README",
      className: "read_me_btn",
      blank: true
    }, {
      url: "https://www.figma.com/file/LJuRDXEWygryIhmNkQsmpv/%EC%B9%BC%ED%95%98%ED%8A%B8?type=design&node-id=0-1&mode=design&t=j365Y8F5Z8ShZjeD-0",
      ment: "기획서 보기",
      className: "plan_view_btn",
      blank: true
    }, {
      url: "https://miro.com/app/board/uXjVMV6eaxg=/",
      ment: "브레인 스토밍",
      className: "blain_stoming",
      blank: true
    }]
  }, {
    projectName: "NETMARBLE",
    menuKind: ["ALL", "MAIN", "SUB"],
    hoverColor: ["yellow"],
    iconSrc: ["./images/netmarble_logo.png"],
    iframeStyle: ["width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;"],
    sandBoxValue: ["allow-scripts allow-same-origin"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-03-28 ~ 2023-04-28",
      makeSkill: ["<span class=accent>HTML5</span>", "<span class=accent> JQUERY</span>", "<span class=accent> CSS</span>"],
      setting: ["LIVE환경"],
      people: ["기획: 1인, 제작: 1인"],
      thunmnailSrc: ["./images/netmarble_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["DATA-SET을 이용한 정렬 기능", "SLICK SLIDER를 활용한 박스 슬라이더", "반응형", "아코디언 메뉴", "JQUERY를 활용한 박스 슬라이더"],
      episode: [/* <span class=accent> */
      "프론트엔드 과정을 배우면서 <span class=accent>처음으로 진행</span>한 프로젝트 입니다.<br/> 처음 제작했던 프로젝트라, 시행 착오를 정말 많이 겪은 프로젝트 입니다.<br/> MEDIAQUERY를 활용하여 반응형으로 제작 하였으며, <span class=accent>JQUERY</span>를 활용하여 <span class=accent>정렬 및 슬라이더 기능</span>등을 구현 하였습니다."],
      videoSrc: ["./videos/netmarble/netmarble_main_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/JVZ48cUW6YZzoDyWKmWf"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/Gf0jnNopaxfOj0fY7Z0b"]
      }, {
        codeName: "JAVASCRIPT/JQUERY",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/sPaRNvqP4oTjkISc0Egy"]
      }]
    }, {
      type: "SUB",
      pageContents: ["탭 메뉴", "메뉴 더보기 기능"],
      episode: [/* <span class=accent> */
      "탭 메뉴 버튼을 통해 해당하는 밸류를 가진 메뉴를 DISPLAY: NONE/BLOCK으로 구현 하였으며 <br/> 모바일, 테블릿, PC버전에서 표기되는 컨텐츠의 갯수가 달라집니다."],
      videoSrc: ["./videos/netmarble/netmarble_sub_video.mp4"],
      codeInfo: [{
        codeName: "HTML",
        themeColor: "orange",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/jrf3ALtlQPW0x6RF1Veh"]
      }, {
        codeName: "CSS",
        themeColor: "skyblue",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/RCXuHIRrgbMptbkapnRs"]
      }, {
        codeName: "JAVASCRIPT/JQUERY",
        themeColor: "yellow",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/uxapjEUv6HBJgw1Zvv1F"]
      }]
    }],
    link: [{
      url: "#!",
      ment: "<span class=accent>코드 보기</span>",
      className: "code_view_btn",
      blank: false
    }, {
      url: "https://neptune588.github.io/personal-project-netmable-/",
      ment: "사이트 보기",
      className: "site_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/personal-project-netmable-",
      ment: "GITHUB/README",
      className: "read_me_btn",
      blank: true
    }, {
      url: "https://www.figma.com/file/mXo226OW9oJm2ijESrqfLG/%EB%84%B7%EB%A7%88%EB%B8%94?type=design&node-id=0-1&mode=design&t=l3U2pxlw4Eg4FA7G-0",
      ment: "기획서 보기",
      className: "plan_view_btn",
      blank: true
    }]
  }, {
    projectName: "CALHARTT WIP REACT",
    menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "CART", "SEARCH"],
    etcKind: ["HEADER", "FOOTER", "STORE", "ROUTER", "DATA"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/calhartt_react_logo.png"],
    iframeStyle: ["width: 100%; height: 100%; border:0; transform: scale(1); overflow:hidden;"],
    sandBoxValue: ["allow-scripts allow-same-origin"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-06-20 ~ 2023-07-04",
      makeSkill: ["<span class=accent>REACT</span>", "<span class=accent> SCSS</span>", "<span class=accent> REACT-ROUTER-DOM</span>", "<span class=accent> REDUX-TOOL-KIT</span>", "<span class=accent> STYLED-COMPONENTS</span>", "<span class=accent> REACT-SWIPER</span>"],
      setting: ["REACT"],
      people: ["기획: 1인, 제작: 1인"],
      thunmnailSrc: ["./images/calhartt_react_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
      episode: [/* <span class=accent> */
      "처음 리액트를 접했을때는 <span class=accent>기존 제작 환경과 많이 달라</span> 당황 했습니다. <br/> 하지만 <span class=accent>수업 시간</span>에 배운 내용과 <span class=accent>복습</span>을 통해 어느정도 이해하게 되었고 MAP을 적극적으로 활용하여 링크 연결 및 PROPS들을 객체 속성 값에 맞게 동적으로 생성 하였습니다. <br/> JS로 제작했던 박스 슬라이더는 스와이퍼로 교체 하였으며, HOVER EVENT는 <span class=accent>상태 변경</span>을 이용하여 <span class=accent>삼항 연산자</span>로 해당 이벤트를 구현 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_main_video.mp4"],
      codeInfo: [{
        codeName: "VisualMain.JS",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/zzjglhvSa1HFTrBn77uB"]
      }, {
        codeName: "VisualMain.CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/Y7mVQkrifFd4U5jwhpGb"]
      }, {
        codeName: "ProductList.JS",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/GpFIW2wJDOEJhjRGugYR"]
      }, {
        codeName: "ProductList.CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/sR1nH63nDB7QHbf0Uz0z"]
      }, {
        codeName: "IssueContents.JS",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/ylT1rZIdEZke13Zihr1o"]
      }, {
        codeName: "IssueContents.CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/ym8G53rzM4KvH50NNDRd"]
      }, {
        codeName: "MdsPick.JS",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/iQcTtk8luclBGVOZG2W3"]
      }, {
        codeName: "MdsPick.CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/93k5oINYcQn73xry05Oq"]
      }, {
        codeName: "InstaGram.JS",
        themeColor: "yellow",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/MMEcRV2FWuVdh4ZYgNVX"]
      }, {
        codeName: "InstaGram.CSS",
        themeColor: "skyblue",
        codeType: "MAIN",
        src: ["https://carbon.now.sh/embed/fwPdcrAB25NikZbzYFfK"]
      }]
    }, {
      type: "SUB",
      pageContents: ["서브 메뉴에 따른 리스트 동적 생성", "장바구니 담기 기능", "상태 변경을 이용한 조건부 렌더링"],
      episode: [/* <span class=accent> */
      "HEADER 역시 MAP으로 객체 기반 동적 생성을 하였고, 링크 연결을 객체 속성 값으로 연결 <br/> ROUTER를 이용해 해당 서브 페이지로 라우팅을 해준 뒤 <span class=accent>PARAMS를 동적으로 받아와</span> <br/> <span class=accent>Object.keys를 활용</span>해 <span class=accent>JSON데이터 파일</span>과 비교, 일치하는 값을 뿌려 주었습니다. <br/> fetch api로 데이터 요청을 해 상태에 담고, <span class=accent>해당 상태가 변하기 전까지는 다른 컴포넌트가 렌더링<span>이 되는 이른바 조건부 렌더링을 했습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_sub_video.mp4"],
      codeInfo: [{
        codeName: "SubList.JS",
        themeColor: "yellow",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/jK8kaQgJM2Eme1a3ZreK"]
      }, {
        codeName: "SubList.CSS",
        themeColor: "skyblue",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/2jx3HXyZvtc5vDewyZBA"]
      }]
    }, {
      type: "DETAIL",
      pageContents: ["JSON 데이터 렌더링", "리뷰 리스트 작성 및 별점/삭제 기능"],
      episode: [/* <span class=accent> */
      "30개의 리스트가 있으며 각 리스트 객체에 담겨있는 정보를 토대로 디테일 페이지에 렌더링을 했습니다. <br/> 또한 <span class=accent>별점 기능</span>은 <span class=accent>반복문</span>과 <span class=accent>useState</span>를 이용한 <span class=accent>객체 속성 값 변화</span>로 구현을 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_detail_video.mp4"],
      codeInfo: [{
        codeName: "DetailList.JS",
        themeColor: "yellow",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/zCOGdGfw3tNUMZlPWtAm"]
      }, {
        codeName: "DetailList.CSS",
        themeColor: "skyblue",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/7FjE4SnFPSuCJlYu7xRN"]
      }]
    }, {
      type: "CART",
      pageContents: ["총 갯수 및 가격 표시 기능", "상품 수량 변경 및 삭제 기능"],
      episode: [/* <span class=accent> */
      "리덕스 툴킷의 리듀서즈에 저장된 상태 변화 함수, useDispatch, useSelector를 활용하여 해당 기능들을 구현 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_cart_video.mp4"],
      codeInfo: [{
        codeName: "Cart.JS",
        themeColor: "yellow",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/Cj3OiP1vel5QhU6SCINQ"]
      }, {
        codeName: "Cart.CSS",
        themeColor: "skyblue",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/CiphEidNSJZZl1sp1JiY"]
      }]
    }, {
      type: "SEARCH",
      pageContents: ["검색 기능"],
      episode: [/* <span class=accent> */
      " <span class=accent>input밸류 값이 바뀔때마다</span> onChange이벤트를 통해 상태 배열에 value가 저장이 되고 엔터 혹은 검색 버튼을 눌렸을시 해당 상태의 값이 링크에 전달 <br/> useParams를 이용하여 해당 값을 받아와 filter, includes를 이용해 검색 기능을 구현 했습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_search_video.mp4"],
      codeInfo: [{
        codeName: "Search.JS",
        themeColor: "yellow",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/oOeeVsWhuA4MCfhAwyjT"]
      }, {
        codeName: "Search.CSS",
        themeColor: "skyblue",
        codeType: "SUB",
        src: ["https://carbon.now.sh/embed/ldC6pgntnVph5n6wTO16"]
      }]
    }, {
      type: "HEADER",
      codeInfo: [{
        codeName: "Header.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/yBFRGtrwHoj9IT7228i2"]
      }, {
        codeName: "Header.CSS",
        themeColor: "skyblue",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/V5oRhYPKdoDFbAEJEICz"]
      }]
    }, {
      type: "FOOTER",
      codeInfo: [{
        codeName: "Footer.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/3jGMAFHV7mYRksT5VM1o"]
      }, {
        codeName: "Footer.CSS",
        themeColor: "skyblue",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/sosg5Q2MV2g2qWyv9Hle"]
      }]
    }, {
      type: "STORE",
      codeInfo: [{
        codeName: "Store.JS",
        themeColor: "yellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/K1N5pm7jsZgLYzQhxoNA"]
      }]
    }, {
      type: "ROUTER",
      codeInfo: [{
        codeName: "ROUTER",
        themeColor: "greenyellow",
        codeType: "COMMON",
        src: ["https://carbon.now.sh/embed/gT4HvmdgbLjW6cVIewEX"]
      }]
    }, {
      type: "DATA",
      codeInfo: [{
        codeName: "JSON",
        themeColor: "yellow",
        codeType: "DATA",
        src: ["https://carbon.now.sh/embed/TfSEU5fGefE9WJSN422k"]
      }]
    }],
    link: [{
      url: "#!",
      ment: "<span class=accent>코드 보기</span>",
      className: "code_view_btn",
      blank: false
    }, {
      url: "https://neptune588.github.io/calhartt_React_Ver/",
      ment: "사이트 보기",
      className: "site_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/calhartt_React_Ver/tree/main/src",
      ment: "<span class=accent>디렉토리 구조</span>",
      className: "directory_view_btn",
      blank: true
    }, {
      url: "https://github.com/neptune588/calhartt_React_Ver",
      ment: "GITHUB/README",
      className: "read_me_btn",
      blank: true
    }]
  }]
};
},{}],"js/page.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
/************** all ***************/
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});
window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

/************** intro_ani ***************/
var titleMent = document.querySelector(".title_ment");
var tipingBar = document.querySelector(".tiping_bar");
var titleMentStr = "WELCOME TO MY PORTFOLIO";
var startMent = document.getElementById("start_ment");
var tipMent = document.getElementById("tips");
var tipMentDelay = parseInt(window.getComputedStyle(tipMent).getPropertyValue("transition-duration"), 10);
var aniComplete = false;
var cnt = 0;
var repeatTime = 150;
setTimeout(function () {
  var tiping = setInterval(function () {
    //console.log(cnt);

    titleMent.textContent += titleMentStr[cnt];
    cnt++;
    if (cnt >= titleMentStr.length) {
      clearInterval(tiping);
      classPlus(tipingBar, "tiping_ani");
    }
  }, repeatTime);
}, 1250);
setTimeout(function () {
  classPlus(startMent, "block_on");
}, 1350 + repeatTime * titleMentStr.length);
setTimeout(function () {
  classPlus(tipMent, "width_600");
}, 1400 + repeatTime * titleMentStr.length);
setTimeout(function () {
  aniComplete = true;
  pageScrollEvent();
}, 1500 + tipMentDelay * 100 + repeatTime * titleMentStr.length);

/************** skill_page ***************/
var skillListArea = document.getElementById("skill_list_area");
var hoverMentBox = document.getElementById("hover_ment_box");
var hoverMentTitle = document.getElementById("ment_box_name");
var hoverMent = document.getElementById("ment_box_ment");
var skill = _data.data.skill;

/* hover chnage event
1. 함수로 타입 전달해서 각 li에 해당 타입과 일치하는 리스트 뽑기 
2. skill_list에 핸들러 등록, 자식요소이므로 enter/leave로 등록
3. 해당 skill_list의 index를 전달, 전체 배열에서 해당 index와 일치하는 데이터 출력 */

skillCreate();
function skillCreate() {
  var totalList = "";
  totalList = "\n        <h2 class=\"title title_front_end\">\n            FRONTEND\n            <i class=\"fas fa-angle-down\"></i>\n        </h2>\n        <li id=\"front_end_list\">\n            ".concat(listCreate(skill, "frontEnd"), "\n        </li>\n        <h2 class=\"title title_tools\">\n            TOOLS\n            <i class=\"fas fa-angle-down\"></i>\n        </h2>\n        <li id=\"tools_list\">\n            ").concat(listCreate(skill, "tools"), "\n        </li>\n        <h2 class=\"title title_vesion_control\">\n            VESION CONTROL\n            <i class=\"fas fa-angle-down\"></i>\n        </h2>\n        <li id=\"vesion_control_list\">\n            ").concat(listCreate(skill, "vesionControl"), "\n        </li>\n    ");
  skillListArea.innerHTML = totalList;
  var skillLists = document.querySelectorAll(".skill_list");
  skillLists.forEach(function (list, index) {
    list.addEventListener("mouseenter", function () {
      mentCreate(skill, index);
      classPlus(hoverMentBox, "opacity_on");
      hoverMentTitle.style.color = "".concat(skill[index].color[0]);
      hoverMentTitle.style.borderBottom = "1px solid ".concat(skill[index].color[0]);
    });
    list.addEventListener("mouseleave", function () {
      classDelete(hoverMentBox, "opacity_on");
    });
  });
}
function listCreate(arr, type) {
  var changeArr = arr.filter(function (object) {
    return object.type === type;
  });
  var list = "";
  var receive = "";
  for (var i = 0; i < changeArr.length; i++) {
    list = "\n            <div class=\"skill_list\">\n                <img src=".concat(changeArr[i].src, " alt=").concat(changeArr[i].type, "_list_img_").concat(i, ">\n            </div>\n        ");
    receive += list;
  }
  return receive;
}
function mentCreate(arr, index) {
  var totalText = "";
  var receive = "";
  hoverMentTitle.textContent = arr[index].name;
  arr[index].ment.forEach(function (str) {
    totalText = "".concat(str, " <br/>");
    receive += totalText;
  });
  hoverMent.innerHTML = receive;
}

/************** project_page ***************/
var page = _data.data.page;
var modalCloseBtn = document.getElementById("modal_close");
var codeModal = document.querySelector(".code_modal_ex");
var codeListArea = document.getElementById("code_list_area");
var etcCodeList = document.getElementById("etc_code_list");
var codeViewBox = document.getElementById("code_view");
totalCreate();
function totalCreate() {
  var projectBox = document.getElementById("project_box");
  var list = "";
  list = "\n        <div class=\"video_container\">\n            <ul id=\"page_list_area\" class=\"page_list_area_design\">\n                ".concat(tabListCreate(0), "\n            </ul>\n            <div class=\"thumnail_n_video_box\">\n                ").concat(thumnailVideoCreate(0, 0), "\n            </div>\n        </div>\n\n        <div class=\"proeject_info_area info_area\">\n            <div id=\"info_text_area\" class=\"info_text_area_design\">\n                ").concat(infoTextCreate(0, 0), "\n            </div>\n            <ul id=\"link_btn_list\" class=\"link_btn_list_design\">\n                ").concat(linkBtnCreate(0), "\n            </ul>\n        </div>\n\n        <div class=\"swiper_container\">\n        <button type=\"button\" class=\"project_list_move_button prev_move_button \">\n          <i class=\"fas fa-chevron-up\"></i>\n          <span class=\"swiper-button-prev inner_button\"></span>\n        </button>\n          <div class=\"swiper\">\n            <ul id=\"project_list_area\" class=\"project_list_design swiper-wrapper\">\n                ").concat(projectListCreate(), "\n            </ul>\n          </div>\n        <button type=\"button\" class=\"project_list_move_button next_move_button \">\n          <i class=\"fas fa-chevron-down\"></i>\n          <span class=\"swiper-button-next inner_button\"></span>\n        </button>\n    ");
  projectBox.innerHTML = list;
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    direction: "vertical",
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  totalClickEvent();
}
function totalClickEvent() {
  var infoTextArea = document.getElementById("info_text_area");
  var projectList = document.querySelectorAll(".project_list");
  var pageListArea = document.getElementById("page_list_area");
  var thumNVideoBox = document.querySelector(".thumnail_n_video_box");
  var linkBtnArea = document.getElementById("link_btn_list");

  //swiper button
  var swiperOuterButton = document.querySelectorAll(".project_list_move_button");
  swiperOuterButton.forEach(function (swiperButton) {
    swiperButton.addEventListener("click", function () {
      swiperButton.querySelector(".inner_button").click();
    });
  });
  var list01 = "";
  var list02 = "";
  projectList.forEach(function (li, index) {
    li.addEventListener("click", function () {
      //li = 각 project
      //list01에 전달되어야 할것
      //메뉴는 menuKind의 갯수만큼 생성되어야 한다. 메뉴에 전달되는 value는 li인덱스에 맞는 object에서.pageInfo 반복문 돌리기.

      //list02에 전달되어야 할것
      //list02에는 각 object에 속해있는 pageInfo의 0번쨰 객체배열정보(디폴트)가 출력되어야 한다.
      //그 부분은 불값으로 컨트롤, 불리언이 false면 0번째 출력, true면 다르게 출력

      //그렇게해서 최종적으로 pageListArea에 list01, infoArea에 list02 전달.
      //list 생성됐으니, 서브메뉴핸들함수 등록
      list01 = "\n                ".concat(tabListCreate(index), "\n            ");
      list02 = "\n                ".concat(infoTextCreate(index, 0), "\n            ");
      pageListArea.innerHTML = list01;
      infoTextArea.innerHTML = list02;
      thumNVideoBox.innerHTML = thumnailVideoCreate(index, 0);
      var video = document.querySelector(".thumnail_n_video_box > video");
      video && videoMaxViewControls(video);
      linkBtnArea.innerHTML = linkBtnCreate(index);
      projectList.forEach(function (innerLi) {
        return classDelete(innerLi, "project_on");
      });
      classPlus(li, "project_on");
      linkBtnClick();
      codeBtnCreate(index);
      var codeBtn = document.querySelectorAll(".code_list_design li");
      codeBtnClick(codeBtn, index);
      codeListCreate(page[index], 1);
      handleSubClick(index, thumNVideoBox, infoTextArea, codeBtn);
    });
  });
  linkBtnClick();
  codeBtnCreate(0);
  var codeBtn = document.querySelectorAll(".code_list_design li");
  codeBtnClick(codeBtn, 0);
  codeListCreate(page[0], 1);
  handleSubClick(0, thumNVideoBox, infoTextArea, codeBtn);
}
function handleSubClick(parentIndex, thumArea, infoArea, codeBtnEl) {
  var pageList = document.querySelectorAll(".page_li");
  var list = "";
  pageList.forEach(function (li, index) {
    li.addEventListener("click", function () {
      //서브페이지 메뉴를 클릭했을때는, 이미 오브젝트 인덱스가 확정되어있는 상태어야한다.

      list = "\n                ".concat(infoTextCreate(parentIndex, index), "\n            ");
      infoArea.innerHTML = list;
      thumArea.innerHTML = thumnailVideoCreate(parentIndex, index);
      videoMaxViewControls(document.querySelector(".thumnail_n_video_box > video"));
      var curIdx = idxSearch(page[parentIndex].pageInfo, "type", li.textContent);
      codeListCreate(page[parentIndex], curIdx);
      for (var j = 0; j < codeBtnEl.length; j++) {
        classDelete(codeBtnEl[j], "code_tab_on");
      }
      for (var _j = 0; _j < pageList.length; _j++) {
        classDelete(pageList[_j], "project_tab_on");
      }
      var classIdx = index === 0 ? 0 : index - 1;
      classPlus(codeBtnEl[classIdx], "code_tab_on");
      classPlus(li, "project_tab_on");
    });
  });
}
function projectListCreate() {
  var innerList = "";
  var receive = "";
  page.forEach(function (object, index) {
    innerList = "\n            <li class=\"".concat(index === 0 ? "project_list swiper-slide project_on" : "project_list swiper-slide", "\">\n                <div class=\"icon_img\">\n                    <img src=").concat(object.iconSrc, " alt=\"").concat(object.projectName, "_icon\"/>\n                </div>\n                <p class=\"icon_name\">").concat(object.projectName, "</p>\n            </li>\n        ");
    receive += innerList;
  });
  return receive;
}
function thumnailVideoCreate(parentIndex, myIndex) {
  var content = "";
  var myObject = page[parentIndex];
  var condition = myObject.projectName !== "PICKET(BE 배포중단)" && myObject.projectName !== "중간이들(중앙대 간호학과 커뮤니티)" && myIndex === 0;
  if (condition) {
    content = "\n            <img src=\"".concat(myObject.pageInfo[myIndex].thunmnailSrc, "\" />\n        ");
  } else {
    content = "\n            <video class=video_thumnail controls>\n                <source src=\"".concat(myObject.pageInfo[myIndex].videoSrc, "\" type=\"video/mp4\" />\n            </video>\n        ");
  }
  return content;
}
function linkBtnCreate(myIndex) {
  var innerList = "";
  var receive = "";
  page[myIndex].link.forEach(function (object) {
    innerList = "\n      <li class=\"".concat(object.className, "\"><a href=\"").concat(object.url, "\" ").concat(object.blank ? "target=_blank" : "", ">").concat(object.ment, "</a></li>\n        ");
    receive += innerList;
  });
  return receive;
}
function tabListCreate(myIndex) {
  //서브메뉴 리스트를 뽑아내는 역할

  //초기화 안시켜주면 언디파인드 들어감.
  var innerList = "";
  var innerReceive = "";
  var myObject = page[myIndex];
  myObject.menuKind.forEach(function (value, i) {
    innerList = "<li class=\"".concat(i === 0 ? "page_li project_tab_on" : "page_li code_view_change", "\">").concat(value, "</li>");
    innerReceive += innerList;
  });
  return innerReceive;
}
function infoTextCreate(objectIndex) {
  var menuIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var myObject = page[objectIndex];
  var innerList = "";
  if (menuIndex === 0 && myObject.projectName.includes("중간이들")) {
    innerList = "\n            <h2 class=\"project_name\">".concat(myObject.projectName, "</h2>\n            <h2 class=\"project_sub_title\">\uC8FC\uC694 \uD2B9\uC9D5</h2>\n            <p class=\"project_ment\"><span class=\"accent\">\uB514\uB809\uD1A0\uB9AC \uAD6C\uC870\uD654</span> \uBC11 \uAE30\uB2A5\uBCC4\uB85C <span class=\"accent\">API \uD568\uC218</span>\uB97C <span class=\"accent\">\uBD84\uB9AC</span>\uD558\uC5EC <span class=\"accent\">\uC7AC\uC0AC\uC6A9\uC131</span>\uACFC <span class=\"accent\">\uD6A8\uC728\uC131</span>\uC744 \uB192\uC600\uC73C\uBA70, \uC2A4\uD0C0\uC77C\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uB85C <span class=\"accent\">\uACF5\uD1B5 \uC2A4\uD0C0\uC77C</span>\uC744 \uC815\uC758\uD558\uC5EC <span class=\"accent\">\uC77C\uAD00\uB41C \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C</span>\uC744 \uC720\uC9C0\uD588\uC2B5\uB2C8\uB2E4.<br />\n            <span class=\"accent\">\uC720\uD29C\uBE0C:</span> <a href=\"https://youtu.be/XeknnOg0EK0?si=JBqIn6kF6puklS3Y\" target=_blank>https://youtu.be/XeknnOg0EK0?si=JBqIn6kF6puklS3Y</p>\n\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uAE30\uAC04</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makePeriod, "</p>\n    \n            <h2 class=\"project_sub_title\">\uC0AC\uC6A9\uAE30\uC220</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makeSkill, "</p>\n\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uC778\uC6D0</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].people, "</p>\n        ");
  } else if (menuIndex === 0 && myObject.projectName.includes("PICKET")) {
    innerList = "\n            <h2 class=\"project_name\">".concat(myObject.projectName, "</h2>\n            <h2 class=\"project_sub_title\">\uBC30\uD3EC\uD604\uD669</h2>\n            <p class=\"project_ment\"><span class=\"accent\">AWS\uAE08\uC561 \uC774\uC288</span>\uB85C \uC778\uD574 BE\uBC30\uD3EC \uC911\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.<br/> \uC815\uB9D0 \uC8C4\uC1A1\uD558\uC9C0\uB9CC <span class=\"accent\">\uB3D9\uC601\uC0C1</span>\uC73C\uB85C \uBD10\uC8FC\uC2DC\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4.</p>\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uAE30\uAC04</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makePeriod, "</p>\n    \n            <h2 class=\"project_sub_title\">\uC0AC\uC6A9\uAE30\uC220</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makeSkill, "</p>\n\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uC778\uC6D0</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].people, "</p>\n    \n            <h2 class=\"project_sub_title\">\uC81C\uC791\uD658\uACBD</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].setting, "</p>\n        ");
  } else if (menuIndex === 0) {
    innerList = "\n            <h2 class=\"project_name\">".concat(myObject.projectName, "</h2>\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uAE30\uAC04</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makePeriod, "</p>\n\n            <h2 class=\"project_sub_title\">\uC0AC\uC6A9\uAE30\uC220</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].makeSkill, "</p>\n\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uC778\uC6D0</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].people, "</p>\n\n            <h2 class=\"project_sub_title\">\uC81C\uC791\uD658\uACBD</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[0].setting, "</p>\n        ");
  } else {
    innerList = "\n            <h2 class=\"project_name\">".concat(myObject.projectName, ": ").concat(myObject.pageInfo[menuIndex].type, "</h2>\n    \n            <h2 class=\"project_sub_title\">\uC8FC\uC694\uAE30\uB2A5</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[menuIndex].pageContents, "</p>\n    \n            <h2 class=\"project_sub_title\">EPISODE</h2>\n            <p class=\"project_ment\">").concat(myObject.pageInfo[menuIndex].episode, "</p>\n        \n        ");
  }
  return innerList;
}
function strMaker(nowObjectArr) {
  var nowBool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var strReturn = "";
  nowObjectArr.forEach(function (str) {
    if (!nowBool) {
      strReturn += str;
    } else {
      strReturn += "".concat(str, " </br>");
    }
  });
  return strReturn;
}
function videoMaxViewControls(el) {
  //fullscreenchange => 전체로 켜졌을때 이후 전체켜진상태에서 꺼졌을떄
  var _ev = function ev() {
    //console.log(el);
    classDelete(el, "video_thumnail");
    if (!document.fullscreenElement) {
      classPlus(el, "video_thumnail");
      document.removeEventListener("fullscreenchange", _ev);
    }
  };
  document.addEventListener("fullscreenchange", _ev);
}

/********************** modai_ev ******************/
var sectionWrapper = document.getElementById("fullpage");
var pagseWithOnlyCalc = document.querySelectorAll(".page");
var navigatorWithOnlyCalc = document.querySelectorAll("#navgation_area > li");
modalCloseBtn.addEventListener("click", function () {
  classDelete(codeModal, "block_on");
  classDelete(sectionWrapper, "container_overflow");
  navigatorWithOnlyCalc.forEach(function (tabs, index) {
    if (tabs.classList.contains("tab_active")) {
      window.scrollTo({
        top: pagseWithOnlyCalc[index].offsetTop
      });
    }
  });
});
function linkBtnClick() {
  var codeViewBtn = document.querySelector(".code_view_btn");
  codeViewBtn.addEventListener("click", function () {
    classPlus(codeModal, "block_on");
    classPlus(sectionWrapper, "container_overflow");
  });
}
function codeBtnCreate(myIndex) {
  var list01 = "";
  var list02 = "";
  page[myIndex].menuKind.forEach(function (value, idx) {
    if (idx === 0) {
      return null;
    } else {
      list01 += "<li class=\"".concat(idx === 1 ? "code_list code_tab_on" : "code_list", "\">").concat(value, "</li>");
    }
  });
  codeListArea.innerHTML = list01;
  if (page[myIndex].etcKind) {
    page[myIndex].etcKind.forEach(function (value) {
      return list02 += "<li class=\"code_list\">".concat(value, "</li>");
    });
    etcCodeList.innerHTML = list02;
  } else {
    etcCodeList.innerHTML = "";
  }
}
function codeBtnClick(btnList, myIndex) {
  var myObj = page[myIndex];
  btnList.forEach(function (btn) {
    btn.addEventListener("click", function () {
      for (var j = 0; j < btnList.length; j++) {
        classDelete(btnList[j], "code_tab_on");
      }
      classPlus(btn, "code_tab_on");
      var curIdx = idxSearch(myObj.pageInfo, "type", btn.textContent);
      codeListCreate(myObj, curIdx);
    });
  });
}
function codeListCreate(parentObj, parentIdx) {
  var list = "";
  var myObj = parentObj.pageInfo;
  myObj[parentIdx].codeInfo.forEach(function (obj) {
    list += "\n            <div class=\"design_box\">\n                <h2><span style=\"color:".concat(obj.themeColor, "\">").concat(obj.codeName, "</span> ").concat(obj.codeType, "\n                </h2>\n                <iframe src=\"").concat(obj.src, "\" style=\"").concat(parentObj.iframeStyle, "\" sandbox=\"").concat(parentObj.sandBoxValue, "\" loading=\"lazy\"}></iframe>\n            </div>\n        ");
  });
  codeViewBox.innerHTML = list;
}
function idxSearch(arr, paramKey, compareValue) {
  var result = arr.findIndex(function (data) {
    return data[paramKey] === compareValue;
  });
  if (result === 0) {
    result = 1;
  }
  return result;
}

/************** contact_page ***************/
var dotArea = document.querySelector(".copy_right > .dot_area");
var dotStr = "...";
var dotCnt = 0;
var dotRepeat = setInterval(function () {
  dotArea.textContent += dotStr[dotCnt];
  dotCnt++;
  if (dotCnt > dotStr.length) {
    dotArea.textContent = "";
    dotCnt = 0;
  }
}, 700);

/************** jquery ***************/
var prevLoaction = 0;
function pageScrollEvent() {
  $(function () {
    if (aniComplete) {
      $("#fullpage").removeClass("container_overflow");
      $("#header_ex").addClass("block_on");
      $("#progress_bar").addClass("block_on");

      //풀페이지 스크롤 이후 스크롤되는 현상 막기
      $(window).on("scroll", function () {
        $(window).scrollTop(prevLoaction);
      });
      wheelEvent();
      navigatorEvent();
    }
  });
}
var pages = $("#fullpage .page");
var navigator = $("#navgation_area > li");
var profileMentAni = false;
var scrollEv;
function wheelEvent() {
  clearTimeout(scrollEv);
  scrollEv = setTimeout(function () {
    pages.on("mousewheel", function (e) {
      var delta = e.deltaY;
      var nowIndex = $(this).index();
      var pageLength = pages.length;
      var prev = 0;
      var next = 0;

      //인덱스2에서 위로 스크롤했을때 || 인덱스0애서 아래로 스크롤했을때
      var condition = delta < 0 && nowIndex === 0 || delta > 0 && nowIndex === 2;
      if (condition && !profileMentAni) {
        profileMentShow();
      }
      if (delta > 0 && nowIndex > 0) {
        $("#progress_bar .gage").css({
          width: (nowIndex - 1) * 25 + "%"
        });
        navigator.removeClass("tab_active");
        navigator.eq(nowIndex - 1).addClass("tab_active");
        prev = $(this).prev().offset().top;
        prevLoaction = prev;
        $("html, body").stop().animate({
          scrollTop: prev + "px"
        }, 500);
      } else if (delta < 0 && nowIndex < pageLength - 1) {
        navigator.removeClass("tab_active");
        navigator.eq(nowIndex + 1).addClass("tab_active");
        $("#progress_bar .gage").css({
          width: (nowIndex + 1) * 25 + "%"
        });
        next = $(this).next().offset().top;
        prevLoaction = next;
        $("html, body").stop().animate({
          scrollTop: next + "px"
        }, 500);
      }
    });
  }, 100);
}
function navigatorEvent() {
  var prevOffset = 0;
  navigator.on("click", function () {
    var nowIndex = $(this).index();
    var currentOffset = pages.eq(nowIndex).offset().top;
    navigator.removeClass("tab_active");
    navigator.eq(nowIndex).addClass("tab_active");
    var condition = $(window).scrollTop();
    if (!profileMentAni) {
      profileMentAni = true;
      if (prevOffset > currentOffset && condition === pages.eq(2).offset().top) {
        //console.log('2번에서 클릭으로 스크롤을 올리셨습니다.');
        profileMentShow();
      } else if (prevOffset < currentOffset && condition === pages.eq(0).offset().top) {
        //console.log('0번에서 클릭으로 스크롤을 내리셨습니다.');
        profileMentShow();
      }
    }
    $("#progress_bar .gage").css({
      width: nowIndex * 25 + "%"
    });
    $("html, body").stop().animate({
      scrollTop: currentOffset
    }, 500);
    prevLoaction = currentOffset;
    //prev가 current보다 크면 올라간거고 낮으면 내려간거
    prevOffset = currentOffset;
  });
}
function profileMentShow() {
  profileMentAni = true;
  var mentCnt = 0;
  var profileMent = "안녕하세요 늘 낮은 자세로 배움을 추구하는 개발자 지망생 윤서환 입니다!";
  var mentTiping = setInterval(function () {
    $("#ment_box .ment").append(profileMent[mentCnt]);
    mentCnt++;
    if (mentCnt >= profileMent.length) {
      clearInterval(mentTiping);
    }
  }, 150);
}

/************** js fnc ***************/
function classPlus(el, className) {
  el.classList.add(className);
}
function classDelete(el, className) {
  el.classList.remove(className);
}

// 메뉴 리스트 데이터 동적 변경 --
//메뉴 리스트를 클릭시 밸류값 받아와서 텍스트가 변화된다.
//하지만 디폴트값은 all로주고, all로 생성된 dom을 기준으로 이벤트를 걸어주면 될듯.
/* function pageCreate(nowIndex, totalBox){

    //all에 해당하는 페이지를 뽑아내는 역할
    totalBox.innerHTML = ``;
    let contents = ``;
    let nowObject = page[nowIndex];
    
    contents = `
        <div class="video_container">
            <ul class="page_list_area">
                ${tabListCreate(nowObject)}
            </ul>
        </div>
        <div class="info_area">
            <div class="info_text_area">
                ${defaultTextCreate(nowObject)}
            </div>
            <ul class="link_btn_list">
                <li class="color_change">기획서 보기</li>
                <li class="color_change">사이트 보기</li>
                <li class="color_change">코드 보기</li>
                <li class="color_change">GITHUB/README</li>
            </ul>
        </div>
        <ul id="project_list_area" class="project_list_design">

        </ul>
    `

    totalBox.innerHTML = contents;

    //서브메뉴 + 프로젝트 리스트 클릭 이벤트 등록 역할
    totalClickEvent();
} */
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49902" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/page.js"], null)
//# sourceMappingURL=/page.8d04f9df.js.map