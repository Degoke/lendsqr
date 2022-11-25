import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.scss'

type Props = {
  currentPage: number
  totalUsers: number
  numberPerPage: number
  changeNumberPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void
  changeCurrentPage: (page: number) => void
}

export default function Pagination({
  totalUsers,
  currentPage,
  numberPerPage,
  changeNumberPerPage,
  changeCurrentPage,
}: Props) {
  const [numberOfPages, setNumberOfPages] = useState<number>(0)

  useEffect(() => {
    setNumberOfPages(Math.round(totalUsers / numberPerPage))
  }, [totalUsers, numberPerPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      changeCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      changeCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <div>
        <span>Showing</span>
        <select value={numberPerPage} onChange={changeNumberPerPage}>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>Out of {totalUsers}</span>
      </div>
      <ul>
        <li>
          <button
            className={styles.pagination__nextButton}
            onClick={handlePreviousPage}
          >
            {'<'}
          </button>
          {Array.from({ length: numberOfPages }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                className={`${styles.pagination__button} ${
                  currentPage === page && styles.active
                }`}
                onClick={() => changeCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className={styles.pagination__nextButton}
            onClick={handleNextPage}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </div>
  )
}
