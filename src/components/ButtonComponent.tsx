import styled from 'styled-components'
import { EColors } from '../model/enums'

const ButtonStyleDefault = styled.button`
  margin-top: 10px;
  padding: 10px 20px;

  background: ${EColors.SNAKE_BODY};
  border: 2px solid ${EColors.CELL_BORDER};
  border-radius: 4px;
  color: ${EColors.CELL_BORDER};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background: ${EColors.CELL_BACKGROUND};
    color: ${EColors.BACKGROUND};
  }
`

const ButtonStylePoint = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  background: ${EColors.SNAKE_BODY};
  border: 1px solid ${EColors.CELL_BORDER};
  border-radius: 50%;

  font-size: 24px;

  transform: translate(50%, -50%);
`

type TButtonType = 'default' | 'point'

interface IProps {
  name: string
  handleClick: () => void
  type: TButtonType
}

export const ButtonComponent = ({ name, handleClick, type = 'default' }: IProps) => {
  switch (type) {
    case 'point':
      return <ButtonStylePoint onClick={handleClick}>{name}</ButtonStylePoint>

    default:
      return <ButtonStyleDefault onClick={handleClick}>{name}</ButtonStyleDefault>
  }
}
