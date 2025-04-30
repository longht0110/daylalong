import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline'

import styles from './styles.module.css'

export const BackButton: React.FC = () => {
  const router = useRouter()
  
  // Chỉ hiển thị nút trở về khi không phải trang chủ
  if (router.pathname === '/') {
    return null
  }

  return (
    <div className={styles.backButton}>
      <Link href="/">
        <a title="Trở về trang chủ">
          <IoArrowBackOutline />
        </a>
      </Link>
    </div>
  )
}
