import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function SelectUser( prop: {
    setSelectedUser( user: string ): void,
}) {

    //  all user's friends
    const users = [
        'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk',
        'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'rrr', 'sss', 'ttt', 'uuu', 'www', 'zzz'
    ];

    //  input ref
    const [ match, setMatch ] = useState<string>( '' );


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-select-user' >

        <h2 className='lead'>Select user</h2>

        <div className='input-group' >
            <input type='text' className='form-control' onChange={ ( event ) => setMatch( event.target.value ) } />
            <span className='input-group-text'><SearchIcon /></span>
        </div>

        <div className='outcome-users' >
        {
            users
            .filter( user => user.match( new RegExp( match, 'gi' )))
            .map( user => <button className='btn' key={ user } onClick={ () => prop.setSelectedUser( user )} >{ user }</button> )
        }
        </div>

    </section>
)};