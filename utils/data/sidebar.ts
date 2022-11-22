import { urls } from "../constants/urls";
import { IListItem } from "../types/list";
import Users from '../../public/images/users.svg'
import Organization from '../../public/images/organization.svg'
import Preferences from '../../public/images/preferences.svg'

interface ISideBarData {
    title: string
    items: IListItem[]
}

export const sidebarData: ISideBarData[] = [
    {
        title: "customers",
        items: [
            {
                text: "users",
                url: urls.USERS,
                icon: Users
            }
        ]

    },
    {
        title: "businesses",
        items: [
            {
                text: "organization",
                url: "",
                icon: Organization
            }
        ]

    },
    {
        title: "settings",
        items: [
            {
                text: "preferences",
                url: "",
                icon: Preferences
            }
        ]

    }
]