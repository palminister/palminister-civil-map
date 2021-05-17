import Emoji from 'react-apple-emojis'

const returnType = (event) => {
  switch (event.type) {
    case 'a':
      return <Emoji name="tangerine" width={25} className="self-start" />
    case 'b':
      return <Emoji name="butterfly" width={25} className="self-start" />
    case 'c':
      return <Emoji name="glowing-star" width={25} className="self-start" />
    case 'd':
      return (
        <Emoji
          name="front-facing-baby-chick"
          width={25}
          className="self-start"
        />
      )
    case 'e':
      return <Emoji name="flexed-biceps" width={25} className="self-start" />
    case 'f':
      return <Emoji name="fire" width={25} className="self-start" />
    case 'g':
      return <Emoji name="drop-of-blood" width={25} className="self-start" />
    case 'h':
      return <Emoji name="pencil" width={25} className="self-start" />
    case 'i':
      return <Emoji name="palm-tree" width={25} className="self-start" />
    case 'j':
      return <Emoji name="writing-hand" width={25} className="self-start" />
    case 'k':
      return <Emoji name="woman" width={25} className="self-start" />
    case 'l':
      return (
        <Emoji
          name="globe-showing-asia-australia"
          width={25}
          className="self-start"
        />
      )
    default:
      return <Emoji name="rocket" width={25} className="self-start" />
  }
}
export default returnType
