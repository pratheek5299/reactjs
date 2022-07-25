import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryItems = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="history-item-time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="history-item-logo" />
      <p className="history-item-title">{title}</p>
      <p className="history-item-domain-url">{domainUrl}</p>
      <div className="button-container">
        <button
          type="button"
          className="button"
          testid="delete"
          onClick={deleteItem}
        >
          <img
            className="delete-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  emptyDisplay = searchResults => {
    if (searchResults.length === 0) {
      return (
        <div className="empty-history-container">
          <p className="empty-history">There is no history to show</p>
        </div>
      )
    }
    return (
      <ul className="history-list">
        {searchResults.map(eachHistory => (
          <HistoryItems
            eachHistory={eachHistory}
            key={eachHistory.id}
            deleteHistory={this.deleteHistory}
          />
        ))}
      </ul>
    )
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: updatedList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(historyItem =>
      historyItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="history-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-image"
            alt="app logo"
          />
          <div className="input-container">
            <label htmlFor="input" className="label">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-image"
                alt="search"
              />
            </label>
            <input
              className="input-element"
              type="search"
              placeholder="search-history"
              id="input"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="display-history-container">
          {this.emptyDisplay(searchResults)}
        </div>
      </div>
    )
  }
}
export default App
