import React from 'react';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons';

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<img src="./images/logo-white.svg" alt="" />
				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rerum et quas nihil dolorum repudiandae magni molestias laudantium,
							quod quasi?
						</li>
            <li>+62 123-456-7890</li>
            <li>melvin.sinatra@binus.ac.id</li>
					</ul>
          <ul>
            <li>About Us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
          <SocialIcons/>
				</Flex>
        <p>&copy; 2022 Huddle. All rights reserved.</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
