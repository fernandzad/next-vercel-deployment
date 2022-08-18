import { FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import styles from './ActiveLink.module.css'

interface Props {
  href: string;
  text: string;
}

const ActiveLink: FC<Props> = ({ href, text }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={router.asPath === href ? styles['active-text'] : ''}>{text}</a>
    </Link>
  )
}

export default ActiveLink;
