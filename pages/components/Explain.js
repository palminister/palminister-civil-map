import { useState } from 'react'
import Emoji from 'react-apple-emojis'
import * as symbols from '../data/group_symbols.json'
const Explain = () => {
  const [seemore, setSeemore] = useState(false)
  const seemoreClass = seemore
    ? 'absolute right-0 z-50 float-right w-12 h-12 m-5 bg-indigo-300 border rounded-full border-indigo-200 hover:border-indigo-300 hover:text-indigo-900 focus:outline-none hover:cursor-pointer'
    : 'absolute right-0 z-50 float-right w-12 h-12 m-5 bg-indigo-500 bg-opacity-20 border rounded-full border-indigo-200 hover:border-indigo-300 hover:text-indigo-900 focus:outline-none hover:cursor-pointer'
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          setSeemore(!seemore)
        }}
        className={seemoreClass}
      >
        <div className="flex justify-center">
          <Emoji name="thinking-face" width={20} className="self-center" />
        </div>
      </button>
      {seemore ? (
        <div className="absolute right-0 z-10 w-1/2 h-screen p-10 overflow-y-auto bg-white shadow-lg font-noto">
          <h1 className="text-4xl font-bold">คำอธิบายสัญลักษณ์</h1>
          <div>
            <br />
            <div className="pb-6">
              <p className="font-bold">
                <button className="w-12 h-12 mr-3 bg-green-300 border border-green-200 rounded-full cursor-default bg-opacity-70 focus:outline-none">
                  <div className="flex justify-center">
                    <Emoji
                      name="person-red-hair"
                      width={20}
                      className="self-center"
                    />
                  </div>
                </button>
                ดูผู้สร้างเหตุการณ์
              </p>
              <div className="pt-4 pl-4">
                <div className="flex">
                  <Emoji
                    name="singer"
                    width={16}
                    className="self-start mt-1 mr-1"
                  />{' '}
                  <p>เยาวชน อายุ 15-24 ปี</p>
                </div>
                <div className="flex">
                  <Emoji
                    name="superhero"
                    width={16}
                    className="self-start mt-1 mr-1"
                  />{' '}
                  <p>ประชาชน</p>
                </div>
                <div className="flex">
                  <Emoji
                    name="office-worker"
                    width={16}
                    className="self-start mt-1 mr-1"
                  />{' '}
                  <p>พรรคการเมือง</p>
                </div>
              </div>
            </div>
            <p className="font-bold">
              <button className="w-12 h-12 mr-3 bg-white border border-green-200 rounded-full cursor-default bg-opacity-70 focus:outline-none">
                <div className="flex justify-center">
                  <Emoji
                    name="person-red-hair"
                    width={20}
                    className="self-center"
                  />
                </div>
              </button>
              ดูกลุ่มการชุมนุม
            </p>
            <div className="pt-4 pl-4">
              {symbols.data.map((symbol) => (
                <div className="flex">
                  <Emoji
                    name={symbol.symbol}
                    width={16}
                    className="self-start mt-1 mr-1"
                  />{' '}
                  <p>{symbol.name}</p>
                </div>
              ))}
            </div>

            <br />
            <p className="float-right text-sm ">
              *กดที่ไอคอนเพื่ออ่านเพิ่มเติมนะครับ
            </p>
            <br />
            <p className="float-right text-sm ">
              [ขอขอบคุณข้อมูลจาก{' '}
              <a
                href="https://elect.in.th/civil-movement-2020/"
                target="_blank"
                className="font-mono font-bold underline"
              >
                ELECT.IN.TH
              </a>
              ]
            </p>
            <br />
            <div className="flex justify-between mt-3">
              <p className="font-mono text-sm">
                <span className="font-bold text-green-400">{' > '}</span>
                <a
                  href="https://palminister-blog.vercel.app/?search=civil"
                  target="_blank"
                  className="font-bold underline"
                >
                  READ RELATED ARTICLES
                </a>
              </p>
              <a
                href="https://github.com/palminister/palminister-civil-map"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Explain
