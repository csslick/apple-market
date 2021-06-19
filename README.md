# apple-market

## 개발순서
1. 파이어베이스 SDK CDN 추가
https://firebase.google.com/docs/web/setup?authuser=0#from-the-cdn_1

```
<body>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase.js"></script>
</body>
```

2. node.js 설치(미설치의 경우)

3. 파이어베이스 홈페이지 > 콘솔로 이동히여 프로젝트 추가
https://console.firebase.google.com/

4. Authentication(회원가입 기능) 이메일/비밀번호 인증 사용설정

5. Firestore Database
    - 데이터베이스 만들기
    - 프로덕션 모드/테스트 모드 선택 
    - 서버위치 선택 asia-northease3
    - Storage(파일 업로드) 확인
    - Hosting 프로젝트 배포 서버

6. 파이어베이스 콘솔 툴로 셋업 파일 생성(옵션) npm install -g firebase-tools

7. 콘솔 > 프로젝트 개요 > 프로젝트 설정 > 페이지 하단 내앱에서 웹 아이콘 선택 후 앱 등록 후 생성되는 SDK 코드를 HTML에 추가 


## 강의 참조: https://online.codingapple.com/unit/firebase-installation-with-npm/?id=9822
