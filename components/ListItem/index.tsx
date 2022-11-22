import Link from "next/link";
import Image from 'next/image'
import { IListItem } from "../../utils/types/list";
import { useTranslations } from "next-intl";

type Props = {
    item: IListItem
}

export default function ListItem({ item }: Props) {
    const t = useTranslations("Sidebar")
    return (
        <li>
            <Link href={item.url}>
                <Image src={item.icon} alt={`${item.text} nav button`} />
                <span>{t(item.text)}</span>
            </Link>
        </li>
    )
}