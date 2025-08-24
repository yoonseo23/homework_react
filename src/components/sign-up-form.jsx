import { useId, useRef, useState } from "react"

export default function SignUpForm({setFormMode, setSavedName, setPrefillEmail, setSavedPassword}) {
  const id = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const pwRef = useRef(null)
  const pwCheckRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.")
      setPassword("")
      setPasswordCheck("")
      pwRef.current?.focus()
      return
    }

    setPrefillEmail(email)
    setSavedPassword(password)
    setSavedName(name)
    setFormMode('login')
    console.log(email)

  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`${id}-name`}>이름</label>
        <input
          id={`${id}-name`}
          value={name}
          type="text"
          minLength={2}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="2글자 이상 입력"/>
      </div>
      <div>
        <label htmlFor={`${id}-email`}>이메일</label>
        <input
          id={`${id}-email`}
          value={email}
          type="email"
          required

          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@company.io"/>
      </div>
      <div>
        <label htmlFor={`${id}-password`}>패스워드</label>
        <input
          id={`${id}-password`}
          value={password}
          ref={pwRef}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          placeholder="숫자, 영문 조합 6자리 이상 입력"/>
      </div>
      <div>
        <label htmlFor={`${id}-passwordCheck`}>패스워드 확인</label>
        <input
          id={`${id}-passwordCheck`}
          value={passwordCheck}
          ref={pwCheckRef}
          type="password"
          required
          onChange={(e) => setPasswordCheck(e.target.value)}
          placeholder="입력한 패스워드 다시 입력"/>
      </div>
      <button type="submit" className="submitButton" style={{ backgroundColor: "#aaaaee" }}>
        회원가입
      </button>
    </form>
  )
}