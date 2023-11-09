import { useState } from 'react'
import { EDirection } from '../model/enums'

export const useControl = (padControl: (key: string) => void) => {
  const [isOpenControl, setIsOpenControl] = useState(false)

  const handleOpen = () => setIsOpenControl(true)
  const handleClose = () => setIsOpenControl(false)

  const handleControl = (direction: EDirection) => {
    switch (direction) {
      case EDirection.LEFT:
        padControl(EDirection.LEFT)
        break

      case EDirection.RIGHT:
        padControl(EDirection.RIGHT)
        break

      case EDirection.UP:
        padControl(EDirection.UP)
        break

      case EDirection.DOWN:
        padControl(EDirection.DOWN)
        break

      default:
        return
    }
  }

  return {
    isOpenControl,
    handleOpen,
    handleClose,
    handleControl,
  }
}
