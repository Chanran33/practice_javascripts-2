const arr = ['a','b','c','d','e','f','g','h','i','j','k'];

//.forEach는 배열의 항목들을 반복하면서 조작하는 함수
arr.forEach(function(element, index, array){
  console.log(`${array}의 ${index}번째 요소 : ${element}`);
});
//forEach()의 인자로 함수를 넣어준다. 이런 함수를 callback function이라고 한다. 함수 매개변수인 element에 배열 arr의 요소들이 순서대로 들어가 실행문을 실행하는 형식

const arr1 = ['강수지','김예진','이태림'];

arr1.forEach(function(element, index){
  console.log(`${index+1}번째 운영진: ${element}`);
});

const person = {
  name: '강태영',
  age : 23,
  gender : 'Female',
  isLikeLion : true,
  /*introduce : function(){
    return `저는 ${this.age}살 ${this.name}입니다.`;
  }*/
  introduce(){//위와 동일
    return `저는 ${this.age}살 ${this.name}입니다.`;
  }
}

console.log(person);
console.log(person.name);
console.log(person['age']);

console.log(console);//console안에는 log,error,info같은 메소드 들이 있다.

//띄어쓰기가 포함되어있는 속성을 사용할때는 []를 이용해서 접근
person['favorite color'] = 'violet';//추가
console.log(person);

console.log(person.introduce());

person.address = '서울';
person.isLionMember = function(){
  if(this.isLikeLion){
    return '멋쟁이사자처럼 회원입니다.';
  }
}

//프로퍼티와 메소드 추가
console.log(person.address);
console.log(person.isLionMember());

//프로퍼티 삭제
delete person.address;
delete person.isLionMember;
delete person['favorite color'];

console.log(person);

// <Math 객체>
console.log(Math.random());

console.log(Math.floor(5.5));//내림
console.log(Math.ceil(5.5));//올림
console.log(Math.round(5.5));//반올림
console.log(Math.round(5.49));//반올림

//0~100사이의 무작위 정수를 만들어보기
console.log(Math.floor(((Math.random())*100)));

