import React from 'react';

const Profile = (props) => {

    return (
        <div className="profile">
				<img src={require('../resources/images/avatar.jpeg')}></img>
                <div className="description">
                <h3 className="name">FirstName LastName</h3>
                <hr></hr>
                <h4>Position held</h4>
                <hr></hr>
				<p>loremAute ad ullamco dolore laboris fugiat et tempor magna ex incididunt esse. 
                    Sit nisi voluptate exercitation non incididunt adipisicing magna aliquip
                     occaecat mollit culpa non occaecat. Magna exercitation aliqua nostrud quis
                      officia magna amet. Sit laboris pariatur in irure esse deserunt 
                      ut excepteur fugiat ipsum nostrud. Mollit fugiat sit pariatur minim 
                      dolor laboris exercitation.
                </p>
                </div>
		</div>
    );
};

export default Profile;