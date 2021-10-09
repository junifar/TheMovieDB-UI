import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUer } from '../../actions/userAction'
import TableUser from './TableUser'

function ListUser() {
    
    const { getListUserResult, getListUserLoading, getListUserError } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        //call action get list user
        dispatch(getListUer());
    }, [dispatch])
    
    return (
        <div>
            <h2>List User</h2>
            <hr/>
            {getListUserResult ? (
                <TableUser data={getListUserResult}/>
            ): getListUserLoading ? (
                <p>Loading ...</p>
            ): (
                <p>{getListUserError? getListUserError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListUser;
