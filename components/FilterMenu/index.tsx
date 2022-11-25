import { useEffect, useState } from 'react'
import { getUsers, updateFilters } from '../../features/Users/userSlice'
import { useAppDispatch } from '../../utils/hooks/useRedux'
import { IUser, UserFilters } from '../../utils/types/user'
import Popover from '../Popover'
import styles from './FilterMenu.module.scss'

type Props = {
  isOpen: boolean
  toggleFilterMenu: () => void
}

export default function FilterMenu({ isOpen, toggleFilterMenu }: Props) {
  const [orgs, setOrgs] = useState<string[]>([])
  const [formData, setFormData] = useState<Record<UserFilters, string>>({
    userName: '',
    orgName: '',
    email: '',
    createdAt: '',
    phoneNumber: '',
    status: '',
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')!)
    if (users) {
      const organizations: string[] = Array.from(
        new Set(users.map((user: IUser) => user.orgName))
      )

      setOrgs(organizations)
    }
  }, [])

  const handleChange = (e: any) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
    dispatch(updateFilters(formData))
    toggleFilterMenu()
  }

  const resetFilters = () => {
    setFormData({
      userName: '',
      orgName: '',
      email: '',
      createdAt: '',
      phoneNumber: '',
      status: '',
    })

    dispatch(
      updateFilters({
        userName: '',
        orgName: '',
        email: '',
        createdAt: '',
        phoneNumber: '',
        status: '',
      })
    )

    dispatch(getUsers())

    toggleFilterMenu()
  }
  return (
    <Popover isOpen={isOpen} className={styles.popover}>
      <form className={styles.form} name="filterForm" onSubmit={handleSubmit}>
        <label>Organization</label>
        <select value={formData.orgName} onChange={handleChange} name="orgName">
          <option value="">select</option>
          {orgs?.map((org) => (
            <option value={org} key={org}>
              {org}
            </option>
          ))}
        </select>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          placeholder="User"
          value={formData.userName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          name="createdAt"
          placeholder="Date"
          value={formData.createdAt}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label>Status</label>
        <select value={formData.status} onChange={handleChange} name="status">
          <option value="">select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blacklisted">Blaclisted</option>
          <option value="pending">Pending</option>
        </select>
        <div>
          <button
            className={styles.form_buttonClear}
            type="button"
            onClick={resetFilters}
          >
            Reset
          </button>
          <button className={styles.form_buttonGreen} type="submit">
            Filter
          </button>
        </div>
      </form>
    </Popover>
  )
}
