import { useState } from "react"
import "./styles/hidden-button.css"

export default function PwHiddenButton({ inputRef }) {
  const [hidden, setHidden] = useState(true)

  const toggle = () => {
    if (!inputRef?.current) return
    const input = inputRef.current
    input.type = input.type === "password" ? "text" : "password"
    setHidden(input.type === "password")
    input.focus()
  }

  return (
      <button className="hiddenButton" type="button" onClick={toggle} aria-label={hidden ? "비밀번호 보기" : "비밀번호 숨기기" } aria-pressed={hidden}>
        {
          hidden
            ? <img src="src/image/hidden.svg" alt="비밀번호 보기" width={20} height={20}/>
            : <img src="src/image/visible.svg" alt="비밀번호 숨기기" width={20} height={20}/>
        }
      </button>
  )
}