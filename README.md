## 실행 방법

- 설치할 폴더 안에서 `git clone https://github.com/richcollector/seomjae-test.git`를 입력합니다.
- 의존성 설치를 위하여 `npm install`을 입력합니다.
- `npm run dev`로 프로젝트를 실행합니다.

## 동작 영상

| 시연 elice-test |
| :-------------: |

| ![seomjae](https://github.com/richcollector/theory-study/assets/160812406/900367f3-d8c6-46f8-9383-6329f316ddf6)
|

## 요구사항

- 사전과제 내용

  - 수학 수식 입력기인 mathtype이 사용가능한 에디터를 리서치하여 간단한 게시판을 제작 (완료)
  - 백엔드 부분을 만들기 어렵다면 json등으로 입시 데이터를 만들어 리스트페이지에 사용해도 무관합니다. (완료)
  - 리스트, 입력 부분만 작업해도 무관합니다. (완료)
  - 상태관리 프로그램을 사용하여 제작 (Redux등) (완료)
  - 디자인 라이브러리(mui 등) 오픈소스 라이브러리 사용 가능 (디자인 완료)

- 사전과제 제출

  - 제출기한 : ~02.27 (기한 내 완료)
  - 제출처 : 지원자 분이 구현하신 내용을 GitHub private repository에 업로드 후 mailto:dev@seomjae.co.kr 메일 초대 (초대 완료)

## 사용 라이브러리

|       라이브러리        |                                                                                         내용                                                                                         |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| husky, eslint, prettier | husky를 적용하여, 설정된 git flow를 지키지 않을 시,<br/> commit이 되지 않도록 설정하였습니다.<br/>eslint, prettier를 사전에 설정하여 공통된 코드 작업을 할 수 있도록 노력하였습니다. |
|    styled-components    |                                             개발 시간 단축과 컴포넌트별로 재사용이 가능한<br/> component를 구성하고 싶어 사용하였습니다.                                             |
|        ckeditor5        |       공식홈페이지에서 Next.js와 연동 관련 내용이 있어 참고하여 작성하였습니다. [참고 내용](https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/next-js.html)       |
|      reduxToolkit       |                                                                 reduxToolkit slice로 List의 상태 관리를 하였습니다.                                                                  |

## 프로젝트 구조 설계

- public

  - img, svg, logo같은 정적인 이미지 파일

- src

  - common : 공통적인 사용

    - constant : 의미있는 변수의 사용
    - hooks : 여러 곳에서 쓰이는 hook 그룹
    - styles : 공통 스타일
    - store : redux store 설정

  - components : component별로 적용

    - layout : 손이 가지 않도록 공통 layout 설정
    - list : list listCard으로 나누어 정리
    - write : filter와 filterItem으로 나누어 정리

  - pages : page라우팅 사용

    - \_app : Layout, GlobalStyle, redux Provider 적용
    - \_document : `ServerStyleSheet` 설정
