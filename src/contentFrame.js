import React from 'react';
import NavBar from './navBar';
import './css/contentFrame.css';

function ContentFrame (WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <NavBar />
                    <div className="navSpace"></div>
                    <div className="scrollContent">
                        <div className="contentPadding">
                            <WrappedComponent />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ContentFrame;
