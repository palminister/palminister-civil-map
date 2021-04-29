import { FlyToInterpolator } from 'react-map-gl'
import { easeCubic } from 'd3-ease'

const Arrow = ({ currentPage, setCurrentPage, selectedMonth, setViewport }) => {
  const length = 3
  const nextPage = () => {
    setCurrentPage(currentPage == length - 1 ? 0 : currentPage + 1)
    if (currentPage == 2) {
      setViewport({
        latitude: 13.4,
        longitude: 101.5,
        zoom: 5,
        minZoom: 5,
        width: '50vw',
        height: '100vh',
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      })
    }
  }
  const previousPage = () => {
    setCurrentPage(currentPage == 0 ? length - 1 : currentPage - 1)
    if (currentPage == 2) {
      setViewport({
        latitude: 13.4,
        longitude: 101.5,
        zoom: 5,
        minZoom: 5,
        width: '50vw',
        height: '100vh',
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      })
    }
  }
  // console.log(currentPage)
  const normalButton =
    'flex transition ease-in bg-white border rounded-sm focus:outline-none w-9 h-9 hover:bg-gray-50'
  const greenButton =
    'flex transition ease-in bg-green-200 border rounded-sm focus:outline-none w-9 h-9 hover:bg-green-50'
  const buttonChange = selectedMonth.length == 0 ? normalButton : greenButton
  return (
    <div className="sticky bottom-0 right-0 float-right p-5 w-28">
      <div className="flex">
        <button onClick={previousPage} className={normalButton}>
          <svg
            className="w-6 h-6 m-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextPage}
          className={currentPage == 0 ? buttonChange : normalButton}
        >
          <svg
            className="w-6 h-6 m-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Arrow
