import anime from 'animejs'
import enterView from 'enter-view'

export const fadeChildrenOnEnter = (element) => {
  const animation = anime({
    targets: element.children,
    opacity: [0, 1],
    duration: 2000,
    delay: (_, index) => (index * 1000) / element.children.length,
    autoplay: false,
  })
  enterView({
    selector: [element],
    enter: () => animation.play(),
    once: true,
    offset: 0.4,
  })
}
