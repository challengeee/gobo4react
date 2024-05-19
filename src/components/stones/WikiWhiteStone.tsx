import { RenderItem } from '../../hooks/useBoardState'

// from https://en.m.wikipedia.org/wiki/File:Go_w1.svg
export const WikiWhiteStone: RenderItem = (boardDimensions) => {
  const { stoneRadius } = boardDimensions
  const id = "wiki-white-stone-gradient"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={boardDimensions.horizontalLineSpacing}
      height={boardDimensions.verticalLineSpacing}
    >
      <defs>
        <radialGradient r=".48" cx=".47" id={id} cy=".49">
          <stop offset=".7" stopColor="#FFF" />
          <stop offset=".9" stopColor="#DDD" />
          <stop offset="1" stopColor="#777" />
        </radialGradient>
      </defs>
      <circle fill={`url(#${id})`} r={stoneRadius} cx="50%" cy="50%" />
    </svg>
  )
}
