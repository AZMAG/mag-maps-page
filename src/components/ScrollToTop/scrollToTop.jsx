import React from "react"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"

const ScrollToTopButton = ({ containerRef }) => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && containerRef.current.scrollTop > 300) {
        setShowScroll(true)
      } else if (showScroll && containerRef.current.scrollTop <= 300) {
        setShowScroll(false)
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkScrollTop)
    }
  }, [containerRef, showScroll, setShowScroll])

  const scrollTop = () => {
    containerRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="z-30 flex flex-row justify-end">
      <button
        className="fixed bottom-0 right-8 h-12 w-14 cursor-pointer items-center justify-center rounded-t-xl border-none bg-slate-300 px-4 py-2 outline-none"
        type="button"
        title="Scroll to top"
        aria-label="Scroll to top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}>
        <FontAwesomeIcon
          icon={faArrowCircleUp}
          size="2x"
          className="text-cyan-800/75 hover:text-cyan-800"
        />
      </button>
    </div>
  )
}

export default ScrollToTopButton
