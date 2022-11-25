import { IUser } from '../../utils/types/user'
import Pill from '../Pill'
import MoreIcon from '../../public/images/more_icon.svg'
import ViewIcon from '../../public/images/view_icon.svg'
import ActivateIcon from '../../public/images/activate_icon.svg'
import BlacklistIcon from '../../public/images/blacklist_icon.svg'
import Image from 'next/image'
import { useState } from 'react'
import StatusMenu, { StatusMenuItem } from '../StatusMenu'
import IconButton from '../IconButton'
import styles from './TableRow.module.scss'
import { useAppDispatch } from '../../utils/hooks/useRedux'
import { updateCurrentStatusMenu } from '../../features/helpers/helperSlice'
import { activateUser, blacklistUser } from '../../features/Users/userSlice'

type Props = {
  user: IUser
}

export default function TableRow({ user }: Props) {
  const dispatch = useAppDispatch()

  const openMenu = () => {
    dispatch(updateCurrentStatusMenu(user?.id))
  }

  const handleBlacklistUser = () => {
    dispatch(blacklistUser(user?.id))
    dispatch(updateCurrentStatusMenu(''))
  }

  const handleActivateUser = () => {
    dispatch(activateUser(user?.id))
    dispatch(updateCurrentStatusMenu(''))
  }

  const items: StatusMenuItem[] = [
    {
      image: ViewIcon,
      text: 'View Details',
      isLink: true,
    },
    {
      image: BlacklistIcon,
      text: 'Blacklist User',
      isLink: false,
      onClick: handleBlacklistUser,
    },
    {
      image: ActivateIcon,
      text: 'Activate User',
      isLink: false,
      onClick: handleActivateUser,
    },
  ]

  return (
    <>
      <tr>
        <td>{user?.orgName}</td>
        <td>{user?.userName}</td>
        <td>{user?.email}</td>
        <td>{user?.phoneNumber}</td>
        <td>{new Date(user?.createdAt).toDateString()}</td>
        <td>
          <Pill type={user?.status ?? 'pending'} />
        </td>
        <td className={styles.tableRow__moreButton}>
          <IconButton
            image={MoreIcon}
            alt={'more actions'}
            onClick={openMenu}
          />
          <StatusMenu items={items} id={user?.id} />
        </td>
      </tr>
    </>
  )
}
