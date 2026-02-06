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
}
