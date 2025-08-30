import { useId, useState, useRef } from "react"
import PwHiddenButton from "./hidden-button"
import "./styles/form.css"

export default function LoginForm({ savedName, defaultEmail, checkPassword }) {
  const id = useId()
  const [email, setEmail] = useState(defaultEmail)
  const [password, setPassword] = useState('')

  const pwRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.")
      return
    }
    alert(`Successfully Logged In, ${savedName}` )
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
          <div className="formItem">
            <label className="formLabel" htmlFor={`${id}-email`}>이메일</label>
            <input
              className="formInput"
              type="email"
              required
              id={`${id}-email`}
              value={defaultEmail}
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
            <PwHiddenButton inputRef={pwRef}/>
          </div>
          <button type="submit" className="submitButton" >
            로그인
          </button>
        </form>
  )
}