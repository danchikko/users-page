import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AllData from './components/AllData'
import UserTwo from './components/UserTwo'
import Main from './pages/Main'
import UserFirst from './pages/UserFirst'
import UserSecond from './pages/UserSecond'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='userone' element={<UserFirst />} />
				<Route path='usertwo' element={<UserSecond />}/>
        <Route path='all' element={<AllData/>}/>
				<Route path='user2' element={<UserTwo />} />
			</Routes>
		</div>
	)
}

export default App
