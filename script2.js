/* DOM & BOM 객체 */
/*colors = ['red', 'blue','green'];

let lis = document.getElementsByTagName('li');
  for(let i=0;i<lis.length;i++){
    lis[i].style.color = colors[i];
  }
*/

//querySelector를 사용하면 제일 첫 번째 객체만을 리턴한다.
let li = document.querySelector('li');
li.style.color='red';

li = document.querySelector('.active');
li.style.color='blue';

//querySelectorAll을 사용하면 모든요소를 배열로 리턴한다.


let ul = document.querySelectorAll('ul');
for(let i=0;i<ul.length;i++){
  ul[i].style.color = 'violet';
}

//window.alert('경고창');
//window.confirm('확인창');
//let input = window.prompt('입력하세요');
//document.write(input);


//location.href = 'https://www.naver.com/';

//window.open('https://www.naver.com/');
//window.open('https://www.naver.com/', '_self');
//window.open('https://www.naver.com/', '_blacnk','width=200, height=200, resizable=no'); //새창에서 열림
//window.open('https://www.naver.com', 'naver');//새로 고침해도 새로운 창이 뜨지 않음 

let t = document.getElementById('target');

t.addEventListener('click', function(event){
  alert('Hello world, '+event.target.value);
});
