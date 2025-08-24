# React Project Template
```
bun create yoonseo23/react-template-yoon
```
## 과제 저장소 템플릿 구조
```
homework_react /
├── .vscode /
├── node_modules /
├── public /
├── src /
├── .gitignore
├── .prettierrc.json
├── bun-env.d.ts
├── bun.lock
├── bunfig.toml
├── eslint.config.mjs
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

**과제 구조**
- 작업 공간 : `homework_react / src`

```
src /
├── components /
│    ├── style / // 컴포넌트 스타일링 파일 관리
│    │    ├── formContainer.css
│    │    ├── form.css
│    │    └── hidden-button.css
│    ├── form.jsx // 상태(signup | login)에 따라 폼을 로드하는 박스 컴포넌트
│    ├── sign-up-form.jsx // 회원가입 폼 컴포넌트
│    ├── log-in-form.jsx // 로그인 폼 컴포넌트
│    └── hidden-button.jsx // 비밀번호 보기/숨기기 버튼 컴포넌트
├── image / // 이미지 에셋 관리
│    ├── hidden.svg
│    └── visible.svg
├── styles /
│    ├── common / 기본 스타일 리셋 및 사용자 정의 속성 관리
│    └── app.css // app.jsx 스타일링
├── app.jsx // 루트에 넣을 마크업 틀(개발용)
└── main.jsx // DOM에 업로드용 루트 생성

```

### 2주차 과제 회고
**상태가 있는 컴포넌트 만들기 - 회원가입/로그인 컴포넌트 제작**
- `form.jsx`
  - 상태('signup' | 'login')에 따라 각각의 폼을 로드하도록 구성
  - 회원가입 폼에서 넘긴 정보들(이름, 이메일, 비밀번호)를 바탕으로 로그인 폼에서 활용
- `hidden-button.jsx`
  - input의 type 속성을 text <-> password로 전환하여 비밀번호 보기/숨기기 버튼 구현
  - hidden 상태 관리를 통해 버튼 컨트롤
- `sign-up-form.jsx`, `log-in-form.jsx`
  - form 마크업을 작성해 반환
  - className을 공통적으로 작성하여 스타일링 시 일관성을 유지할 수 있도록 함.
  - useId, useRef, useState의 리액트 훅을 사용
    - useId : input, label을 묶어주는 id를 생성하기 위해 꼬리표(e.g. -name)를 붙임
    - useRef : DOM 요소에 직접 접근해 값을 받거나 저장하기 위해 사용
    - useState : 사용자에게 입력받는 값을 상태로 관리해 입력값을 컨트롤함.
  - 비밀번호 확인 로직 구현 : form의 submit event 발생 시, 사용자의 입력값이 '패스워드'와 '패스워드 확인'에서 일치하는지 확인하도록 함.
  - 로그인 폼에 회원가입 시 입력한 정보가 넘어가도록 구성(서버로 넘어가지 않고, 프론트 단에서 처리할 수 있도록 상태를 공유하는 방식으로 구현함)
    - 회원가입 폼에서 입력한 이메일 주소는 로그인 폼에서도 남아있도록, 비밀번호는 로그인 폼 제출 시 회원가입 폼에 입력한 값과 일치하는지 확인하는 용도로 상태 부여.
  - placeholder에 있는 조건을 minLength, pattern을 활용해 조건을 만족하는 입력값을 받을 수 있도록 구성.
- `form.css`
  - css 선언 순서나 선언 방식에 일관성을 최대한 유지하여 작성
  - flexbox를 활용해 레이아웃을 구성함
  - submit button의 경우, position: absolute를 부여해 위치를 설정하고, inset-inline: 0을 부여해 너비 변화에 유연하게 반응할 수 있도록 구현함.
  - min-inline-size를 부여해 화면 너비가 줄어들었을 때에도 화면 구성이 깨지지 않도록 구현함.
  - tab접근을 통해 submit button에 포커스가 이동했을 때, 파란 색상의 아웃라인이 눈에 잘 띄지 않는 점을 확인하여, 사용자 경험 향상을 위해 outline-offset을 별도로 부여함.

**느낀 점**
첫 리액트 컴포넌트 제작... 진짜 어려웠다.
이번 주에 이렇게 바쁠 줄 몰랐던 3개월 전의 내가 이 (리액트만 파도 모자를) 연휴에 가족여행을 잡았다...
덕분에 신나게 놀고 집중해서 과제를 할 수 있던 걸지도...

그래도 리액트를 배워서 마크업을 구성하고, 스타일링을 하다보니 확실히 편한...지는 아직 모르겠지만 신기하기도 하고 재밌기도 하다.
또 이렇게 SPA 구조의 웹사이트를 직접 구성하고 구현해보는게 처음인데, 그만큼 이번 과제를 하면서 단기간에 뭔가 많은 꺠달음을 얻은 기분이 든달까?

그리고 또 하나 느끼는 건, 이젠 UI 구현은 당연하게 하다 보니까 점점 UI 디버깅 실력은 느는 기분이 든다(기분 탓일 수도 있지만...ㅎ). 이제 원하는 레이아웃을 구성하는 것까진 할 수 있게 되었다는데서 의미를 찾아야 할까? 아직 사용자 경험이나 접근성 고려, 성능 최적화 등등 파고들어야 할 부분은 정말 많지만, 바로 앞의 하나하나부터 차근차근 얻어가려고 한다.

이번 과제에서 해결하지 못한 것 중 하나가, '암묵적 any type'을 계속 eslint에서 경고했는데, 아직 해결하지 못했다. 타입스크립트 공부를 부지런히 끝내고 추후 이 문제도 해결해봐야겠다.