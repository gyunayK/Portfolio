import { useEffect } from 'react'

function Loading() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <>
      <div className="fixed w-screen h-screen bg-black bg-opacity-70 z-[1000] flex justify-center items-center">
        <img src="/img/loading.gif" alt="loading" className="object-contain w-20" />
      </div>
    </>
  )
}

export default Loading
