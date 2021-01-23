import anime from 'animejs'
import enterView from 'enter-view'

export const fadeChildrenOnEnter = (
  element,
  option = { duration: 2000, delay: 1000 }
) => {
  const animation = anime({
    targets: element.children,
    opacity: [0, 1],
    duration: option.duration,
    delay: (_, index) => (index * option.delay) / element.children.length,
    autoplay: false,
  })
  enterView({
    selector: [element],
    enter: () => animation.play(),
    once: true,
    offset: 0.3,
  })
}
