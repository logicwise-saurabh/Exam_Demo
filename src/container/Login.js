export default function Login(keyName, emailId, password) {
  const storedData = JSON.parse(localStorage.getItem(keyName)) || [];

  return storedData.some(
    (user) => user.email === emailId && user.password === password
  );
}
