interface User {
  email: string;
  name: string;
  age: number;
}

const user: User[] = [
  { email: "tetz@kdt.com", name: "이효석", age: 39 }, 
  { email: "faker@t1.com", name: "이상혁", age: 26 },
  { email: "oner@t1.com", name: "문현준", age: 20 },
  { email: "keria@t1.com", name: "류민석", age: 20 },
]

const getAllUsers = ():User[] => {
  return user;
}

const getCountsOverAge = (age: number): number => {
  const resultArr: User[] | [] = user.filter((el: User) => el.age >= age);
  return resultArr?.length;
}

const getUserEmailByName = (name: string): string => {
  const resultArr: User | undefined = user.find((el: User) => el.name.indexOf(name) !== -1);
  if (resultArr) return resultArr.email;
  return "특정 회원을 찾을 수 없습니다."
}

test("전체 회원은 4명인가?", ()=> {
  expect(getCountsOverAge(25)).toBeLessThan(3);
})