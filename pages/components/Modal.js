const Modal = ({ select, setSelect }) => {
  const byMap = (by) => {
    switch (by) {
      case 1:
        return 'เยาวชน อายุ 15-24 ปี'
      case 2:
        return 'ประชาชน'
      case 3:
        return 'พรรคการเมือง'
      default:
        return ''
    }
  }
  return (
    <>
      {select ? (
        <div className="absolute bottom-0 w-full p-5 h-3/6 sm:h-2/6 font-noto">
          <div
            style={{ backdropFilter: 'blur(7px)' }}
            className="w-full h-full p-5 overflow-y-auto bg-white shadow-2xl bg-opacity-70 bg-clip-padding rounded-xl"
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                setSelect(null)
              }}
              className="inline-flex items-center float-right p-2 border rounded-full hover:bg-pink-100 border-pink-50 hover:border-pink-300 hover:text-pink-900 focus:outline-none hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 pt-1 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </button>

            <h1 className="text-4xl font-bold">{select.name}</h1>
            <h2>
              ณ {select.place} โดย{' '}
              <span className="font-bold bg-green-200 rounded-md">
                {byMap(select.by)}
              </span>{' '}
              <span className="font-mono ">[{select.date}]</span>
            </h2>
            <br />
            <p>
              <span className="font-bold bg-pink-200 rounded-md">กิจกรรม</span>{' '}
              {select.reason}
            </p>
            {select.demand ? (
              <p>
                <span className="font-bold bg-indigo-200 rounded-md">
                  ข้อเรียกร้อง
                </span>{' '}
                {select.demand}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Modal
