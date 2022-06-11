import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import UserTwo from './components/UserTwo/UserTwo'
import Main from './pages/Main'
import UserFirst from './pages/User1/UserFirst'
import All from './pages/User2/All'
import UserSecond from './pages/User2/UserSecond'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='userone' element={<UserFirst />} />
				<Route path='usertwo' element={<UserSecond />}/>
				<Route path='all' element={<All />} />
				<Route path='user2' element={<UserTwo />} />
			</Routes>
		</div>
	)
}

export default App
