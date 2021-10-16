import * as Styled from './Loading.styles'

const Loading = () => {
  return (
    <Styled.Svg viewBox='0 0 100 100'>
      <Styled.Circle
        cx='50'
        cy='50'
        fill='none'
        r='35'
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        ></animateTransform>
      </Styled.Circle>
    </Styled.Svg>
  )
}

export default Loading
