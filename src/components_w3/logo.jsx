import beanLogo from "./../image/bean-logo.svg"

export default function Logo() {
  return (
    <img className="logo" src={beanLogo} alt="BeanFinder 로고" width={360} height={360} />
  )
}