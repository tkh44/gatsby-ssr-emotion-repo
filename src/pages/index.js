import React from "react"
import { useTheme } from "emotion-theming"

function DumbImage() {
  const theme = useTheme()
  return (
    <img
      src="https://picsum.photos/id/860/600/600"
      alt="random picture"
      css={{
        margin: "32px auto",
        height: 128,
        width: 128,
        border: `solid 1px ${theme.color}`,
      }}
    />
  )
}

export default () => (
  <div
    css={theme => ({ background: theme.color, color: "white", fontSize: 32 })}
  >
    <h1>Hello!!!</h1>
    <DumbImage/>
  </div>
)
