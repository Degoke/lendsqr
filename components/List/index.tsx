import { IListItem } from "../../utils/types/list"
import ListItem from "../ListItem"

type Props = {
    items: IListItem[]
    title: string
}

export default function List({ items, title }: Props) {
    return (
        <div>
            <p>{title}</p>
            <ul>
                {items.map((item) => (
                    <ListItem key={item.text} item={item} />
                ))}
            </ul>
        </div>
    )
}