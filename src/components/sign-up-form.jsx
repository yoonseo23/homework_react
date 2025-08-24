import { useId, useRef, useState } from "react"
import PwHiddenButton from "./hidden-button"
import "./styles/form.css"

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

  }


  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label className="formLabel" htmlFor={`${id}-name`}>이름</label>
        <input
          className="formInput"
          id={`${id}-name`}
          value={name}
          type="text"
          minLength={2}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="2글자 이상 입력"/>
      </div>
      <div className="formItem">
        <label className="formLabel" htmlFor={`${id}-email`}>이메일</label>
        <input
          className="formInput"
          id={`${id}-email`}
          value={email}
          type="email"
          required

          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@company.io"/>
      </div>
      <div className="formItem">
        <label className="formLabel" htmlFor={`${id}-password`}>패스워드</label>
        <input
          className="formInput"
          id={`${id}-password`}
          value={password}
          ref={pwRef}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          placeholder="숫자, 영문 조합 6자리 이상 입력"/>
          <PwHiddenButton inputRef={pwRef} />
      </div>
      <div className="formItem">
        <label className="formLabel" htmlFor={`${id}-passwordCheck`}>패스워드 확인</label>
        <input
          className="formInput"
          id={`${id}-passwordCheck`}
          value={passwordCheck}
          ref={pwCheckRef}
          type="password"
          required
          onChange={(e) => setPasswordCheck(e.target.value)}
          placeholder="입력한 패스워드 다시 입력"/>
          <PwHiddenButton inputRef={pwCheckRef} />
      </div>
      <button type="submit" className="submitButton" >
        회원가입
      </button>
    </form>
  )
}