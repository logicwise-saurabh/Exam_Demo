<<<<<<< HEAD
export default function Login(keyName, emailId, password) {
  const storedData = JSON.parse(localStorage.getItem(keyName)) || [];

  return storedData.some(
    (user) => user.email === emailId && user.password === password
  );
=======
import useLocalStorage from "../hooks/useLocalStorage";
export default function Login(emailId, password) {
  const [value, setValue] = useLocalStorage("Student", [
    { studentId: emailId, studentPassword: password },
  ]);

  value.map((s) => {
    if (s.id === emailId && s.password === password) {
      return true;
    } else return false;
  });
>>>>>>> 5d6a138c7efb1c3a8c0a87aca3e8bc76e9ef5c2b
}
