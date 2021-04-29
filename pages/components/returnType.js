const returnType = (event) => {
  switch (event.type) {
    case 'a':
      return <span>🍊</span>
    case 'b':
      return <span>🦋</span>
    case 'c':
      return <span>🌟</span>
    case 'd':
      return <span>🐥</span>
    case 'e':
      return <span>💪</span>
    case 'f':
      return <span>🔥</span>
    case 'g':
      return <span>🩸</span>
    case 'h':
      return <span>✏️</span>
    case 'i':
      return <span>🌴</span>
    case 'j':
      return <span>✍️</span>
    case 'k':
      return <span>👩</span>
    case 'l':
      return <span>🌎</span>
    default:
      return <span>🚀</span>
  }
}
export default returnType
