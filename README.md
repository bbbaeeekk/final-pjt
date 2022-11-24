# 123weeks Final_pjt
<img src="https://img.shields.io/badge/Python 3.9-3766AB?style=flat-square&logo=Python&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/django 3.2-092E20?style=flat-square&logo=django&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Node.js 1.6-339933?style=flat-square&logo=Node.js&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>

&nbsp;
## i. 팀원 및 업무 분담
---
### 양석주
- 팀장
- Front(Vue, html, css) 페이지 전반 구현
- Detail, Random, Home 등 Vue 컴포넌트 기능 구현
- 데이터 추출 및 정제

### 백현웅
- Server(Django) 모델 생성 등 로직 구현
- Community 및 Account 등 Vue 컴포넌트 기능 구현 
- html, css 기능 구현

&nbsp;
## ii. 목표 서비스 구현 및 실제 구현 정도
---
### 목표 서비스 구현
- 사용자가 선택한 장르, 찜한 영화, 검색기록 등 사용자의 데이터를 활용한 머신러닝 알고리즘으로 사용자별 추천 영화 기능 구현
### 실제 구현 정도
- Vue 라이브러리인 lodash를 활용한 랜덤영화추천, 장르별 영화 검색, 텍스트로 영화 검색등을 구현함.
- 머신러닝 알고리즘은 추후 학습하여 구현해 볼 예정임.

&nbsp;
## iii. 데이터베이스 모델링 (ERD)
---
&nbsp;
<img src="./readme_image/erd_image.png" title="erd_image"/>

&nbsp;
## iv. 영화 추천 알고리즘에 대한 기술적 설명
---
1. 랜덤 영화 추천
   - lodash 라이브러리를 활용하여 전체 영화 목록에서 랜덤으로 한개의 영화를 추천해주고, 버튼을 활용하여 다른 랜덤영화를 볼 수 있도록 구현함.
    &nbsp;
    <img src="./readme_image/random_image.PNG" title="random_image"/>
    &nbsp;
2. 장르별 영화 추천
   - 사용자가 장르를 선택하면 해당 장르에 해당하는 영화목록을 반환하여 사용자가 원하는 장르의 영화를 볼 수 있도록 구혐함.
    &nbsp;
    <img src="./readme_image/genre_image.PNG" title="genre_image"/>
&nbsp;
## v. 서비스 대표 기능에 대한 설명
---
1. 영화 검색 기능
   - 사용자가 텍스트를 입력할 때 마다 실시간으로 입력값을 보내고 store에서는 해당 검색어가 들어간 영화목록을 반환하여 검색 페이지에서 해당 텍스트가 포함된 영화목록을 사용자에게 보여준다.
   - input 창에 한글을 입력했을 때 한템포 늦게 동작하는 경우가 발생하는데 한글이 2byte로 이루어져 있기 때문이라고 하여 공식문서를 참고하여 v-model이 아닌 input 디렉티브를 사용해서 $event.target.value를 payload로 보내주었음.
    &nbsp;
    <img src="./readme_image/search_image.PNG" title="search_image"/>
   -  
2. 커뮤니티
   - 글 작성, 한 페이지당 5개의 게시글, 수정, 삭제, 목록으로 돌아가기, 게시글 좋아요, 댓글작성 ...
    &nbsp;
    <img src="./readme_image/community_image.jpg" title="community_image"/>
3. 마이페이지
   - 팔로워수, 작성한 댓글, 나의게시글, 나의 댓글, 좋아하는 댓글 등 이동 기능...
    &nbsp;
    <img src="./readme_image/mypage_image.PNG" title="mypage_image"/>
&nbsp;
## vi. 후기
---
### 양석주
- 1
### 백현웅
- 