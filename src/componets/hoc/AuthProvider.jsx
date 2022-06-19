import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLog } from '../../redux/actions/setVisibleLoginAction';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const bool = useSelector(state => state.bool);

    // console.log(user);

    const signIn = (newUser, cb) => {
        setUser(newUser);
        cb();
        dispatch(setIsLog(bool));
    }

    const signOut = (cb) => {
        setUser(null);
        cb();
        dispatch(setIsLog(bool));
    }

    const value = {user, signIn, signOut};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}