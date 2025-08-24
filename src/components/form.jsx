import { useState } from "react"
import LoginForm from "./log-in-form"
import SignUpForm from "./sign-up-form"

export default function Form() {
  const [formMode, setFormMode] = useState('signup') // signup | login
  const [savedName, setSavedName] = useState('')
  const [prefillEmail, setPrefillEmail] = useState('')
  const [savedPassword, setSavedPassword] = useState('')

  return (
    <div>
      {
        formMode === 'signup'
          ? (
            <SignUpForm
              setFormMode={setFormMode}
              setSavedName={setSavedName}
              setPrefillEmail={setPrefillEmail}
              setSavedPassword={setSavedPassword}
            />
          ) : (
            <LoginForm
              savedName={savedName}
              defaultEmail={prefillEmail}
              checkPassword={savedPassword}

            />
          )
      }
    </div>
  )
}