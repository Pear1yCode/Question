/*
for in 문을 사용해서 만들어보시오
hobby(은)는 독서입니다.
book(은)는 자기계발서입니다.
name(은)는 아주 세속적인 지혜입니다.
를 콘솔로 출력하기
*/

// 문제
const read = {
    hobby : '독서',
    book : '자기계발서',
    name : '아주 세속적인 지혜'
};

// 정답
for(const key in read) {
    console.log(`${key}(은)는 ${read[key]}입니다.`);
};