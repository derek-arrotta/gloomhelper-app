import React from 'react';
import { Route } from 'react-router-dom';
import ReactModal from 'react-modal';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/AcctModals/Login';
import CreateAccount from './components/AcctModals/CreateAccount';
import HomePage from './components/HomePage/HomePage';
import NewParty from './components/NewParty/NewParty';
import NewChar from './components/NewChar/NewChar';

ReactModal.setAppElement('#root');

class App extends React.Component {
    state = {
        loggedIn: false,
        showLoginModal: false,
        showCreateAcctModal: false,
    }

    handleOpenModal = (screen) => {
        if (screen === 'login') {
            this.setState({
                showLoginModal: true,
                showCreateAcctModal: false,
            })
        }
        if (screen === 'createacct') {
            this.setState({
                showLoginModal: false,
                showCreateAcctModal: true,
            })
        }
    }

    handleCloseModal = e => {
        this.setState({
            showLoginModal: false,
            showCreateAcctModal: false,
        })
    }

    render() {
        return (
            <div className='App'>
                <NavBar 
                    handleOpenModal={this.handleOpenModal}
                />

                <ReactModal 
                    isOpen={this.state.showLoginModal} 
                    contentLabel='Login modal'
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={true}
                    className='account-modal'
                >
                    <Login 
                        handleCloseModal={this.handleCloseModal} 
                        handleOpenModal={this.handleOpenModal}
                    />
                </ReactModal>

                <ReactModal 
                    isOpen={this.state.showCreateAcctModal} 
                    contentLabel='Create Account modal'
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={true}
                    className='account-modal'
                >
                    <CreateAccount 
                        handleCloseModal={this.handleCloseModal} 
                        handleOpenModal={this.handleOpenModal}
                    />
                </ReactModal>

                <Route 
                    exact path='/'
                    component={HomePage}
                />
                <Route 
                    path='/newparty'
                    component={NewParty}
                />
                <Route 
                    path='/newchar'
                    component={NewChar}
                />

                <Footer />
            </div>
        )
    }
}

export default App;
