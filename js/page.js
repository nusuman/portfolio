import { data } from "./data.js";

/************** all ***************/
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

/************** intro_ani ***************/
const titleMent = document.querySelector(".title_ment");
const tipingBar = document.querySelector(".tiping_bar");

const titleMentStr = "WELCOME TO MY PORTFOLIO";

const startMent = document.getElementById("start_ment");
const tipMent = document.getElementById("tips");

const tipMentDelay = parseInt(
  window.getComputedStyle(tipMent).getPropertyValue("transition-duration"),
  10
);

let aniComplete = false;

let cnt = 0;
const repeatTime = 150;
setTimeout(() => {
  let tiping = setInterval(() => {
    //console.log(cnt);

    titleMent.textContent += titleMentStr[cnt];

    cnt++;

    if (cnt >= titleMentStr.length) {
      clearInterval(tiping);
      classPlus(tipingBar, "tiping_ani");
    }
  }, repeatTime);
}, 1250);

setTimeout(() => {
  classPlus(startMent, "block_on");
}, 1350 + repeatTime * titleMentStr.length);

setTimeout(() => {
  classPlus(tipMent, "width_600");
}, 1400 + repeatTime * titleMentStr.length);

setTimeout(() => {
  aniComplete = true;
  pageScrollEvent();
}, 1500 + tipMentDelay * 100 + repeatTime * titleMentStr.length);

/************** skill_page ***************/
const skillListArea = document.getElementById("skill_list_area");

const hoverMentBox = document.getElementById("hover_ment_box");

const hoverMentTitle = document.getElementById("ment_box_name");
const hoverMent = document.getElementById("ment_box_ment");

const { skill } = data;

/* hover chnage event
1. 함수로 타입 전달해서 각 li에 해당 타입과 일치하는 리스트 뽑기 
2. skill_list에 핸들러 등록, 자식요소이므로 enter/leave로 등록
3. 해당 skill_list의 index를 전달, 전체 배열에서 해당 index와 일치하는 데이터 출력 */

skillCreate();
function skillCreate() {
  let totalList = ``;

  totalList = `
        <h2 class="title title_front_end">
            FRONTEND
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="front_end_list">
            ${listCreate(skill, "frontEnd")}
        </li>
        <h2 class="title title_tools">
            TOOLS
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="tools_list">
            ${listCreate(skill, "tools")}
        </li>
        <h2 class="title title_vesion_control">
            VESION CONTROL
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="vesion_control_list">
            ${listCreate(skill, "vesionControl")}
        </li>
    `;
  skillListArea.innerHTML = totalList;

  const skillLists = document.querySelectorAll(".skill_list");

  skillLists.forEach((list, index) => {
    list.addEventListener("mouseenter", () => {
      mentCreate(skill, index);

      classPlus(hoverMentBox, "opacity_on");

      hoverMentTitle.style.color = `${skill[index].color[0]}`;
      hoverMentTitle.style.borderBottom = `1px solid ${skill[index].color[0]}`;
    });
    list.addEventListener("mouseleave", () => {
      classDelete(hoverMentBox, "opacity_on");
    });
  });
}

function listCreate(arr, type) {
  const changeArr = arr.filter((object) => object.type === type);

  let list = ``;
  let receive = ``;

  for (let i = 0; i < changeArr.length; i++) {
    list = `
            <div class="skill_list">
                <img src=${changeArr[i].src} alt=${changeArr[i].type}_list_img_${i}>
            </div>
        `;
    receive += list;
  }

  return receive;
}

function mentCreate(arr, index) {
  let totalText = ``;
  let receive = ``;

  hoverMentTitle.textContent = arr[index].name;
  arr[index].ment.forEach((str) => {
    totalText = `${str} <br/>`;
    receive += totalText;
  });

  hoverMent.innerHTML = receive;
}

/************** project_page ***************/
const { page } = data;

const modalCloseBtn = document.getElementById("modal_close");
const codeModal = document.querySelector(".code_modal_ex");
const codeListArea = document.getElementById("code_list_area");
const etcCodeList = document.getElementById("etc_code_list");
const codeViewBox = document.getElementById("code_view");

totalCreate();

function totalCreate() {
  const projectBox = document.getElementById("project_box");

  let list = ``;

  list = `
        <div class="video_container">
            <ul id="page_list_area" class="page_list_area_design">
                ${tabListCreate(0)}
            </ul>
            <div class="thumnail_n_video_box">
                ${thumnailVideoCreate(0, 0)}
            </div>
        </div>

        <div class="proeject_info_area info_area">
            <div id="info_text_area" class="info_text_area_design">
                ${infoTextCreate(0, 0)}
            </div>
            <ul id="link_btn_list" class="link_btn_list_design">
                ${linkBtnCreate(0)}
            </ul>
        </div>

        <div class="swiper_container">
        <button type="button" class="project_list_move_button prev_move_button ">
          <i class="fas fa-chevron-up"></i>
          <span class="swiper-button-prev inner_button"></span>
        </button>
          <div class="swiper">
            <ul id="project_list_area" class="project_list_design swiper-wrapper">
                ${projectListCreate()}
            </ul>
          </div>
        <button type="button" class="project_list_move_button next_move_button ">
          <i class="fas fa-chevron-down"></i>
          <span class="swiper-button-next inner_button"></span>
        </button>
    `;

  projectBox.innerHTML = list;
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    direction: "vertical",
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  totalClickEvent();
}

function totalClickEvent() {
  const infoTextArea = document.getElementById("info_text_area");

  const projectList = document.querySelectorAll(".project_list");

  const pageListArea = document.getElementById("page_list_area");

  const thumNVideoBox = document.querySelector(".thumnail_n_video_box");

  const linkBtnArea = document.getElementById("link_btn_list");

  //swiper button
  const swiperOuterButton = document.querySelectorAll(
    ".project_list_move_button"
  );

  swiperOuterButton.forEach((swiperButton) => {
    swiperButton.addEventListener("click", () => {
      swiperButton.querySelector(".inner_button").click();
    });
  });

  let list01 = ``;
  let list02 = ``;

  projectList.forEach((li, index) => {
    li.addEventListener("click", () => {
      //li = 각 project
      //list01에 전달되어야 할것
      //메뉴는 menuKind의 갯수만큼 생성되어야 한다. 메뉴에 전달되는 value는 li인덱스에 맞는 object에서.pageInfo 반복문 돌리기.

      //list02에 전달되어야 할것
      //list02에는 각 object에 속해있는 pageInfo의 0번쨰 객체배열정보(디폴트)가 출력되어야 한다.
      //그 부분은 불값으로 컨트롤, 불리언이 false면 0번째 출력, true면 다르게 출력

      //그렇게해서 최종적으로 pageListArea에 list01, infoArea에 list02 전달.
      //list 생성됐으니, 서브메뉴핸들함수 등록
      list01 = `
                ${tabListCreate(index)}
            `;
      list02 = `
                ${infoTextCreate(index, 0)}
            `;

      pageListArea.innerHTML = list01;
      infoTextArea.innerHTML = list02;

      thumNVideoBox.innerHTML = thumnailVideoCreate(index, 0);

      const video = document.querySelector(".thumnail_n_video_box > video");
      video && videoMaxViewControls(video);

      linkBtnArea.innerHTML = linkBtnCreate(index);

      projectList.forEach((innerLi) => classDelete(innerLi, "project_on"));
      classPlus(li, "project_on");

      linkBtnClick();

      codeBtnCreate(index);
      const codeBtn = document.querySelectorAll(".code_list_design li");
      codeBtnClick(codeBtn, index);
      codeListCreate(page[index], 1);
      handleSubClick(index, thumNVideoBox, infoTextArea, codeBtn);
    });
  });
  linkBtnClick();

  codeBtnCreate(0);
  const codeBtn = document.querySelectorAll(".code_list_design li");
  codeBtnClick(codeBtn, 0);
  codeListCreate(page[0], 1);
  handleSubClick(0, thumNVideoBox, infoTextArea, codeBtn);
}

function handleSubClick(parentIndex, thumArea, infoArea, codeBtnEl) {
  const pageList = document.querySelectorAll(".page_li");

  let list = ``;

  pageList.forEach((li, index) => {
    li.addEventListener("click", () => {
      //서브페이지 메뉴를 클릭했을때는, 이미 오브젝트 인덱스가 확정되어있는 상태어야한다.

      list = `
                ${infoTextCreate(parentIndex, index)}
            `;

      infoArea.innerHTML = list;
      thumArea.innerHTML = thumnailVideoCreate(parentIndex, index);

      videoMaxViewControls(
        document.querySelector(".thumnail_n_video_box > video")
      );

      let curIdx = idxSearch(
        page[parentIndex].pageInfo,
        "type",
        li.textContent
      );
      codeListCreate(page[parentIndex], curIdx);

      for (let j = 0; j < codeBtnEl.length; j++) {
        classDelete(codeBtnEl[j], "code_tab_on");
      }
      for (let j = 0; j < pageList.length; j++) {
        classDelete(pageList[j], "project_tab_on");
      }

      let classIdx = index === 0 ? 0 : index - 1;
      classPlus(codeBtnEl[classIdx], "code_tab_on");
      classPlus(li, "project_tab_on");
    });
  });
}

function projectListCreate() {
  let innerList = ``;
  let receive = ``;

  page.forEach((object, index) => {
    innerList = `
            <li class="${
              index === 0
                ? "project_list swiper-slide project_on"
                : "project_list swiper-slide"
            }">
                <div class="icon_img">
                    <img src=${object.iconSrc} alt="${
      object.projectName
    }_icon"/>
                </div>
                <p class="icon_name">${object.projectName}</p>
            </li>
        `;

    receive += innerList;
  });

  return receive;
}

function thumnailVideoCreate(parentIndex, myIndex) {
  let content = ``;

  let myObject = page[parentIndex];

  const condition =
    myObject.projectName !== "PICKET(BE 배포중단)" &&
    myObject.projectName !== "중간이들(중앙대 간호학과 커뮤니티)" &&
    myIndex === 0;

  if (condition) {
    content = `
            <img src="${myObject.pageInfo[myIndex].thunmnailSrc}" />
        `;
  } else {
    content = `
            <video class=video_thumnail controls>
                <source src="${myObject.pageInfo[myIndex].videoSrc}" type="video/mp4" />
            </video>
        `;
  }

  return content;
}

function linkBtnCreate(myIndex) {
  let innerList = ``;
  let receive = ``;

  page[myIndex].link.forEach((object) => {
    innerList = `
      <li class="${object.className}"><a href="${object.url}" ${
      object.blank ? "target=_blank" : ""
    }>${object.ment}</a></li>
        `;

    receive += innerList;
  });
  return receive;
}

function tabListCreate(myIndex) {
  //서브메뉴 리스트를 뽑아내는 역할

  //초기화 안시켜주면 언디파인드 들어감.
  let innerList = ``;
  let innerReceive = ``;

  let myObject = page[myIndex];
  myObject.menuKind.forEach((value, i) => {
    innerList = `<li class="${
      i === 0 ? "page_li project_tab_on" : "page_li code_view_change"
    }">${value}</li>`;

    innerReceive += innerList;
  });

  return innerReceive;
}

function infoTextCreate(objectIndex, menuIndex = 0) {
  let myObject = page[objectIndex];

  let innerList = ``;

  if (menuIndex === 0 && myObject.projectName.includes("중간이들")) {
    innerList = `
            <h2 class="project_name">${myObject.projectName}</h2>
            <h2 class="project_sub_title">주요 특징</h2>
            <p class="project_ment"><span class="accent">디렉토리 구조화</span> 밑 기능별로 <span class="accent">API 함수</span>를 <span class="accent">분리</span>하여 <span class="accent">재사용성</span>과 <span class="accent">효율성</span>을 높였으며, 스타일드 컴포넌트로 <span class="accent">공통 스타일</span>을 정의하여 <span class="accent">일관된 디자인 시스템</span>을 유지했습니다.</p>
            <h2 class="project_sub_title">제작기간</h2>
            <p class="project_ment">${myObject.pageInfo[0].makePeriod}</p>
    
            <h2 class="project_sub_title">사용기술</h2>
            <p class="project_ment">${myObject.pageInfo[0].makeSkill}</p>

            <h2 class="project_sub_title">제작인원</h2>
            <p class="project_ment">${myObject.pageInfo[0].people}</p>
        `;
  } else if (menuIndex === 0 && myObject.projectName.includes("PICKET")) {
    innerList = `
            <h2 class="project_name">${myObject.projectName}</h2>
            <h2 class="project_sub_title">배포현황</h2>
            <p class="project_ment"><span class="accent">AWS금액 이슈</span>로 인해 BE배포 중단되었습니다.<br/> 정말 죄송하지만 <span class="accent">동영상</span>으로 봐주시면 감사하겠습니다.</p>
            <h2 class="project_sub_title">제작기간</h2>
            <p class="project_ment">${myObject.pageInfo[0].makePeriod}</p>
    
            <h2 class="project_sub_title">사용기술</h2>
            <p class="project_ment">${myObject.pageInfo[0].makeSkill}</p>

            <h2 class="project_sub_title">제작인원</h2>
            <p class="project_ment">${myObject.pageInfo[0].people}</p>
    
            <h2 class="project_sub_title">제작환경</h2>
            <p class="project_ment">${myObject.pageInfo[0].setting}</p>
        `;
  } else if (menuIndex === 0) {
    innerList = `
            <h2 class="project_name">${myObject.projectName}</h2>
            <h2 class="project_sub_title">제작기간</h2>
            <p class="project_ment">${myObject.pageInfo[0].makePeriod}</p>

            <h2 class="project_sub_title">사용기술</h2>
            <p class="project_ment">${myObject.pageInfo[0].makeSkill}</p>

            <h2 class="project_sub_title">제작인원</h2>
            <p class="project_ment">${myObject.pageInfo[0].people}</p>

            <h2 class="project_sub_title">제작환경</h2>
            <p class="project_ment">${myObject.pageInfo[0].setting}</p>
        `;
  } else {
    innerList = `
            <h2 class="project_name">${myObject.projectName}: ${myObject.pageInfo[menuIndex].type}</h2>
    
            <h2 class="project_sub_title">주요기능</h2>
            <p class="project_ment">${myObject.pageInfo[menuIndex].pageContents}</p>
    
            <h2 class="project_sub_title">EPISODE</h2>
            <p class="project_ment">${myObject.pageInfo[menuIndex].episode}</p>
        
        `;
  }

  return innerList;
}

function strMaker(nowObjectArr, nowBool = false) {
  let strReturn = ``;

  nowObjectArr.forEach((str) => {
    if (!nowBool) {
      strReturn += str;
    } else {
      strReturn += `${str} </br>`;
    }
  });

  return strReturn;
}

function videoMaxViewControls(el) {
  //fullscreenchange => 전체로 켜졌을때 이후 전체켜진상태에서 꺼졌을떄
  const ev = () => {
    //console.log(el);
    classDelete(el, "video_thumnail");

    if (!document.fullscreenElement) {
      classPlus(el, "video_thumnail");
      document.removeEventListener("fullscreenchange", ev);
    }
  };

  document.addEventListener("fullscreenchange", ev);
}

/********************** modai_ev ******************/
const sectionWrapper = document.getElementById("fullpage");
const pagseWithOnlyCalc = document.querySelectorAll(".page");
const navigatorWithOnlyCalc = document.querySelectorAll("#navgation_area > li");

modalCloseBtn.addEventListener("click", () => {
  classDelete(codeModal, "block_on");
  classDelete(sectionWrapper, "container_overflow");

  navigatorWithOnlyCalc.forEach((tabs, index) => {
    if (tabs.classList.contains("tab_active")) {
      window.scrollTo({
        top: pagseWithOnlyCalc[index].offsetTop,
      });
    }
  });
});

function linkBtnClick() {
  const codeViewBtn = document.querySelector(".code_view_btn");

  codeViewBtn.addEventListener("click", () => {
    classPlus(codeModal, "block_on");
    classPlus(sectionWrapper, "container_overflow");
  });
}

function codeBtnCreate(myIndex) {
  let list01 = ``;
  let list02 = ``;

  page[myIndex].menuKind.forEach((value, idx) => {
    if (idx === 0) {
      return null;
    } else {
      list01 += `<li class="${
        idx === 1 ? "code_list code_tab_on" : "code_list"
      }">${value}</li>`;
    }
  });
  codeListArea.innerHTML = list01;

  if (page[myIndex].etcKind) {
    page[myIndex].etcKind.forEach(
      (value) => (list02 += `<li class="code_list">${value}</li>`)
    );
    etcCodeList.innerHTML = list02;
  } else {
    etcCodeList.innerHTML = ``;
  }
}

function codeBtnClick(btnList, myIndex) {
  const myObj = page[myIndex];
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let j = 0; j < btnList.length; j++) {
        classDelete(btnList[j], "code_tab_on");
      }
      classPlus(btn, "code_tab_on");

      let curIdx = idxSearch(myObj.pageInfo, "type", btn.textContent);
      codeListCreate(myObj, curIdx);
    });
  });
}

function codeListCreate(parentObj, parentIdx) {
  let list = ``;
  const myObj = parentObj.pageInfo;

  myObj[parentIdx].codeInfo.forEach((obj) => {
    list += `
            <div class="design_box">
                <h2><span style="color:${obj.themeColor}">${obj.codeName}</span> ${obj.codeType}
                </h2>
                <iframe src="${obj.src}" style="${parentObj.iframeStyle}" sandbox="${parentObj.sandBoxValue}" loading="lazy"}></iframe>
            </div>
        `;
  });

  codeViewBox.innerHTML = list;
}

function idxSearch(arr, paramKey, compareValue) {
  let result = arr.findIndex((data) => data[paramKey] === compareValue);

  if (result === 0) {
    result = 1;
  }

  return result;
}

/************** contact_page ***************/
const dotArea = document.querySelector(".copy_right > .dot_area");
const dotStr = "...";

let dotCnt = 0;
let dotRepeat = setInterval(() => {
  dotArea.textContent += dotStr[dotCnt];

  dotCnt++;

  if (dotCnt > dotStr.length) {
    dotArea.textContent = "";
    dotCnt = 0;
  }
}, 700);

/************** jquery ***************/
let prevLoaction = 0;
function pageScrollEvent() {
  $(function () {
    if (aniComplete) {
      $("#fullpage").removeClass("container_overflow");
      $("#header_ex").addClass("block_on");
      $("#progress_bar").addClass("block_on");

      //풀페이지 스크롤 이후 스크롤되는 현상 막기
      $(window).on("scroll", () => {
        $(window).scrollTop(prevLoaction);
      });
      wheelEvent();
      navigatorEvent();
    }
  });
}

const pages = $("#fullpage .page");
const navigator = $("#navgation_area > li");

let profileMentAni = false;
let scrollEv;

function wheelEvent() {
  clearTimeout(scrollEv);
  scrollEv = setTimeout(() => {
    pages.on("mousewheel", function (e) {
      const delta = e.deltaY;

      let nowIndex = $(this).index();
      const pageLength = pages.length;

      let prev = 0;
      let next = 0;

      //인덱스2에서 위로 스크롤했을때 || 인덱스0애서 아래로 스크롤했을때
      const condition =
        (delta < 0 && nowIndex === 0) || (delta > 0 && nowIndex === 2);

      if (condition && !profileMentAni) {
        profileMentShow();
      }

      if (delta > 0 && nowIndex > 0) {
        $("#progress_bar .gage").css({
          width: (nowIndex - 1) * 25 + "%",
        });

        navigator.removeClass("tab_active");
        navigator.eq(nowIndex - 1).addClass("tab_active");

        prev = $(this).prev().offset().top;
        prevLoaction = prev;
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: prev + "px",
            },
            500
          );
      } else if (delta < 0 && nowIndex < pageLength - 1) {
        navigator.removeClass("tab_active");
        navigator.eq(nowIndex + 1).addClass("tab_active");

        $("#progress_bar .gage").css({
          width: (nowIndex + 1) * 25 + "%",
        });

        next = $(this).next().offset().top;
        prevLoaction = next;
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: next + "px",
            },
            500
          );
      }
    });
  }, 100);
}

function navigatorEvent() {
  let prevOffset = 0;
  navigator.on("click", function () {
    let nowIndex = $(this).index();

    let currentOffset = pages.eq(nowIndex).offset().top;

    navigator.removeClass("tab_active");
    navigator.eq(nowIndex).addClass("tab_active");

    let condition = $(window).scrollTop();
    if (!profileMentAni) {
      profileMentAni = true;
      if (
        prevOffset > currentOffset &&
        condition === pages.eq(2).offset().top
      ) {
        //console.log('2번에서 클릭으로 스크롤을 올리셨습니다.');
        profileMentShow();
      } else if (
        prevOffset < currentOffset &&
        condition === pages.eq(0).offset().top
      ) {
        //console.log('0번에서 클릭으로 스크롤을 내리셨습니다.');
        profileMentShow();
      }
    }

    $("#progress_bar .gage").css({
      width: nowIndex * 25 + "%",
    });
    $("html, body").stop().animate(
      {
        scrollTop: currentOffset,
      },
      500
    );

    prevLoaction = currentOffset;
    //prev가 current보다 크면 올라간거고 낮으면 내려간거
    prevOffset = currentOffset;
  });
}

function profileMentShow() {
  profileMentAni = true;

  let mentCnt = 0;

  const profileMent =
    "안녕하세요 늘 낮은 자세로 배움을 추구하는 개발자 지망생 윤서환 입니다!";

  let mentTiping = setInterval(() => {
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
