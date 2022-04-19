import { MouseEvent, useState } from 'react';

import AppContent from '../../components/app-content';

import AddTaskIcon from '@mui/icons-material/AddTask';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AppTodo() {

	// 	in input state
	const [ taskName, setTaskName ] = useState( '' );

	// 	all tasks
	const [ tasks, setTasks ] = useState( [] );


	// 	utilities
	async function addTask( event: MouseEvent<HTMLButtonElement> ): Promise<void> {
		event.preventDefault();

		// 	delete input value
		setTaskName( '' );
	}


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <>
	<article id='app-layout-todo' >

		<h2 className='lead'>Add new thing to do</h2>

		<div className='input-group' >
            <input type='text' className='form-control' value={ taskName } onChange={ ( event ) => setTaskName( event.target.value ) } />
            <button
				className='btn btn-success input-group-text'
				onClick={ ( event ) => addTask( event ) }
				disabled={ taskName.length < 3 }
			><AddTaskIcon /></button>
        </div>

		<AppContent>
		{

		}
		{

		}
		</AppContent>

    </article>
    </>
)};