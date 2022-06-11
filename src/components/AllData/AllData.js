import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './AllData.module.css'

const AllData = () => {
	const [news, setNews] = useState([])

	const fetchNews = () => {
		axios
			.get(
				'https://newsapi.org/v2/top-headlines?country=in&apiKey=dc7edfdfa71e46db9b60828657b38e7d',
			)
			.then((response) => {
				setNews(response.data.articles)
			})
	}
	return (
		<div className={classes.container}>
			<button className={classes.btn} onClick={fetchNews}>FetchNews</button>
				<div>
					{news.map((value) => {
						return (
							<div>
								<div>
									<img className={classes.img} src={value.urlToImage} alt='...' />
									<div className={classes.text}>
										<h5>{value.title}</h5>
										<p>{value.description}</p>
										<button>
                                            <Link to="/">Main</Link>
                                        </button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
		</div>
	)
}

export default AllData
