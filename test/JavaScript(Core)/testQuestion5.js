// 순서대로 배열 만들기 & console.log 사용해보기

// 1. search라는 이름의 배열을 만드세요. (검색엔진에 대한 배열 : 구글, 네이버, 다음, 네이트)
const search = ['구글', '네이버', '네이트']

// 2. '구글'이 몇번째 인덱스인지 찾는 console.log를 사용해보시고 어떻게 나오는지 찾으시오.
console.log(search.indexOf('구글'));
// 답 : 0

// 3. '구글'이 몇번째 인덱스인지 뒤에서부터 찾는 console.log를 사용해보시고 어떻게 나오는지 찾으시오.
console.log(search.lastIndexOf('구글'));
// 답 : 0

// 4. search 배열에 '네이버'가 포함 돼 있는지 console.log를 사용해보시고 어떻게 나오는지 찾으시오.
console.log(search.includes('네이버'));
// 답 : true

// 5. search 배열의 맨 뒤에 '빙'을 추가해보시오.
search.push('빙');

// 6.  배열의 맨 뒤의 인덱스를 제거해보시오.
search.pop();

// 6. search 배열의 맨 앞에 '줌'을 추가해보시오.
search.unshift('줌');

// 7. search 배열의 맨 앞의 인덱스를 제거해보시오.
search.shift();

// 8. 새로운 배열을 생성하고 그 배열을 search 배열과 결합하는 console.log를 사용해보시오.
// 새로운 배열 소스 (engine : '빙', '줌')
const engine = ['빙', '줌'];
const plus = search.concat(engine);
console.log(plus); // [ '구글', '네이버', '네이트', '빙', '줌' ]

// 9. 합친 배열에서 0번째부터 3번째 앞까지 인덱스까지 잘라내보시오.
console.log(plus.slice(0,3)); // 0부터 3번째 인덱스 앞까지 자르기 - 다른 메소드와 다르게 실제로 영향을 미치지 않는 부분 [ '구글', '네이버', '네이트' ]

// 10. 합친 배열에서 1번과 2번째 인덱스를 제거 후, 그 자리에 '네이버'와 '야후' 를 다시 추가해보시오.
console.log(plus.splice(1, 2, "네이버", "야후")); // [ '네이버', '네이트' ]

// 11. 합친 배열의 쉼표를 ' @ ' 구분자로 변경해보시오.
console.log(plus.join(' @ ')); // 구글 @ 네이버 @ 빙 @ 줌

// 12. 배열을 출력하고 뒤집어보시오.
console.log(plus); // [ '구글', '네이버', '빙', '줌' ]
console.log(plus.reverse()); // [ '줌', '빙', '네이버', '구글' ]


