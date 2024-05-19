import { RenderItem } from '../../hooks/useBoardState'

// from https://en.m.wikipedia.org/wiki/File:Go_w1.svg
export const WikiWhiteStone: RenderItem = (boardDimensions) => {
  const { stoneRadius } = boardDimensions
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={boardDimensions.horizontalLineSpacing}
      height={boardDimensions.verticalLineSpacing}
    >
      <defs>
        <radialGradient r=".48" cx=".47" id="rg" cy=".49">
          <stop offset=".7" stop-color="#FFF" />
          <stop offset=".9" stop-color="#DDD" />
          <stop offset="1" stop-color="#777" />
        </radialGradient>
      </defs>
      <circle fill="url(#rg)" r={stoneRadius} cx="50%" cy="50%" />
    </svg>
  )
}
