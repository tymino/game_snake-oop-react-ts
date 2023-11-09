import styled from 'styled-components'
import { EColors, EDirection } from '../model/enums'
import { ButtonComponent } from './ButtonComponent'
import { useControl } from '../hooks/useControl'

const ControlContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
  margin-top: 20px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const buttonSize = '60px'

const ControlEmptyBlock = styled.div`
  width: ${buttonSize};
  height: ${buttonSize};
`

const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${buttonSize};
  height: ${buttonSize};
  padding-bottom: 6px;

  background: ${EColors.CELL_BACKGROUND};
  border: 2px solid ${EColors.CELL_BORDER};
  border-radius: 4px;

  font-size: 40px;
`

interface IProps {
  padControl: (key: string) => void
}

export const ControlPadComponent = ({ padControl }: IProps) => {
  const { isOpenControl, handleOpen, handleClose, handleControl } = useControl(padControl)

  if (isOpenControl) {
    return (
      <ControlContainer>
        <ButtonWrapper>
          <ButtonComponent name="&times;" handleClick={handleClose} type="point" />
        </ButtonWrapper>

        <ControlEmptyBlock />
        <ControlButton onClick={() => handleControl(EDirection.UP)}>&uarr;</ControlButton>
        <ControlEmptyBlock />
        <ControlButton onClick={() => handleControl(EDirection.LEFT)}>&larr;</ControlButton>
        <ControlEmptyBlock />
        <ControlButton onClick={() => handleControl(EDirection.RIGHT)}>&rarr;</ControlButton>
        <ControlEmptyBlock />
        <ControlButton onClick={() => handleControl(EDirection.DOWN)}>&darr;</ControlButton>
        <ControlEmptyBlock />
      </ControlContainer>
    )
  }

  return <ButtonComponent name={'control'} handleClick={handleOpen} type="default" />
}
