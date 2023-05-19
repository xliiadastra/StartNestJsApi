/* 
    서비스로 보내고 받을 클래스(인터페이스)를 export 한다. 
    지금은 자바스크립트 오브젝트를 사용하지만 원래는 entities 폴더 안에 진짜 데이터베이스를 넣어야 한다.
*/
export class Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
}