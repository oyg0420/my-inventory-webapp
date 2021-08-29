# my inventory

`#React` `#Redux` `#Redux-Saga` `#Typescript` `#node` `#express` `#puppeteer` `#cheerio`


### 요약

my inventory는 Naver Shopping 키워드를 통해 시장 조사를 하기 위한 일종의 툴입니다. 예를 들면 검색을 하면 해당 키워드에 대한 경쟁율, 시장가격, 판매량 등을 제공하여 미리 시장을 예측할 수 있습니다.


### 자세히

1. 사용자가 검색을 하면 해당 Action을 Dispatch 합니다.
2. Redux-Saga에서 해당 Action을 pulling 후 API Request 합니다.
3. 요청을 받고 puppeteer를 통해서 요청 페이지를 스크랩핑 합니다.(runBrowserWithPuppeteer)
4. 스크랩핑한 페이지 Parsing 후 데이터를 정제하여 화면에 응답해줍니다.

### 히스토리

스마트 스토어어 판매자들이 쉽게 사용하라는 목적으로 개발했습니다. 네이버 검색을 통한 시장분석은 데이터가 종합되지 않아 불편할 것 같다는 생각이 들어 개발했습니다.

개인 프로젝트를 하면서 익숙지 않은 서버개발로 어려움도 있었으나 뚜렷한 목적으로 개발을 하여 즐거움이 더 컸습니다.

현재 키워드 검색을 통한 분석 페이지에 대한 기본기능만 구축되어 있는 상태입니다. 상품추천, 재고관리 기능도 도입할 예정입니다.


### 사용해보기

로그인 후 검색창에서 원하는 키워드를 검색합니다.

![search](https://user-images.githubusercontent.com/27759092/131244217-eca5777d-6d12-41c7-ba61-dca8992551b4.gif)

대기 후 결과를 확인합니다.

![search_result](https://user-images.githubusercontent.com/27759092/131244221-5852a092-6fb6-48d2-9753-5d40c7ee7205.gif)

종합된 데이터를 확인 할 수 있습니다.

<img width="1143" alt="keyword_tool" src="https://user-images.githubusercontent.com/27759092/131244226-d43b5053-40d3-4532-8832-20f4b66f041d.png">

<img width="429" alt="chart_js" src="https://user-images.githubusercontent.com/27759092/131244231-8c4c04f4-8152-4f4c-8109-552668d33ca6.png">

<img width="298" alt="shopping_keyword" src="https://user-images.githubusercontent.com/27759092/131244234-49de500b-4bb0-49b3-9129-3fe789d1c096.png">

