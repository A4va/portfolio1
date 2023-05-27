import React from 'react';

const Row = ({ children, speed, playing }) => {
  const scrollerRef = React.useRef();
  const clonedScrollerRef = React.useRef();
  const hoverRef = React.useRef(false);
  const playingRef = React.useRef(playing);

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  React.useEffect(() => {
    const pixelsPerFrame = speed / 10;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;
    function animate() {
      if (playingRef.current) {
        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollerRef.current.offsetWidth) {
          scrollerXPos = scrollerRef.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);

    return () => (animating = false);
  }, []);

  return (
    <div
      className="flex w-full"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div className="flex" ref={scrollerRef}>{children}</div>
      <div className="flex" ref={clonedScrollerRef}>{clonedChildren}</div>
    </div>
  );
};

export default Row;
