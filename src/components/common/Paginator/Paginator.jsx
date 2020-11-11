import React, { useState } from 'react'
import style from './Paginator.module.css'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, onPageChange, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) pages.push(i)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNum, setPortionNum] = useState(1)
    let leftPortionNum = (portionNum - 1) * portionSize + 1
    let rightPortionNum = portionNum * portionSize

    return (
        <div className={style.pages_counter}>
            <button className={portionNum > 1 ? style.btn_activated : style.btn_prevented} onClick={() => { setPortionNum(portionNum - 1) }}>Prev</button>
            <div className={style.pages_wrap}>
                {pages
                    .filter(page => page >= leftPortionNum && page <= rightPortionNum)
                    .map(page => {
                        return <span key={page} onClick={(e) => { onPageChange(page) }} className={cn({
                            [style.selected_page]: currentPage === page
                        }, style.pageNum)}>{page}</span>
                    })}
            </div>
            <button className={portionCount > portionNum ? style.btn_activated : style.btn_prevented} onClick={() => { setPortionNum(portionNum + 1) }}>Next</button>
        </div>
    )
}

export default Paginator