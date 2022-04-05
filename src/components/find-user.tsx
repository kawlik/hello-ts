import { ChangeEvent, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function FindUser( prop: {
    setSelectedUser( user: string ): void,
}) {

    //  all user's friends
    const users = [
        'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk',
        'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'rrr', 'sss', 'ttt', 'uuu', 'www', 'zzz'
    ];

    //  input ref
    const [ found, setFound ] = useState<string[]>( [] );

	// 	fetch users
	async function fetchUsers( event: ChangeEvent<HTMLInputElement> ): Promise<void> {
		event.preventDefault();

		if( event.target.value.length < 3 ) {
			setFound( [] );
		} else {
			setFound( users.filter( user => user.match( new RegExp( event.target.value, 'gi' ))))
		}
	}


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-find-user' >

        <h2 className='lead'>Find user</h2>

        <div className='input-group' >
            <input type='text' className='form-control' onChange={ ( event ) => fetchUsers( event ) }/>
            <span className='input-group-text'><SearchIcon /></span>
        </div>

        <div className='outcome-users' >
        {
            found
            .map( user => <button className='btn' key={ user } onClick={ () => prop.setSelectedUser( user )} >{ user }</button> )
        }
        </div>

    </section>
)};