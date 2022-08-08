import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

const HomePage = () => {
    const { isError, isLoading, data } = useSearchUsersQuery('vladilen');

    return (
        <div>
            {isError && <p className='text-center'></p>}
        </div>
    )
}

export default HomePage